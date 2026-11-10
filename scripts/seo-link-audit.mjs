import { readFile, writeFile, mkdir, stat } from 'node:fs/promises'
import { resolve, dirname, relative, isAbsolute } from 'node:path'
import { pathToFileURL } from 'node:url'

const decode = value => value.replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[\da-f]+);/gi, entity => {
  const named = { '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>' }
  if (named[entity.toLowerCase()]) return named[entity.toLowerCase()]
  const hex = entity[2].toLowerCase() === 'x'
  const code = Number.parseInt(entity.slice(hex ? 3 : 2, -1), hex ? 16 : 10)
  return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : '\ufffd'
})
// Matches the quoted and unquoted attributes emitted by our static renderers.
const attributes = tag => Object.fromEntries([...tag.matchAll(/([^\s=<>/]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)]
  .map(match => [match[1].toLowerCase(), decode(match[2] ?? match[3] ?? match[4])]))
const isFile = async file => { try { return (await stat(file)).isFile() } catch { return false } }
const inside = (root, file) => { const path = relative(root, file); return path !== '..' && !path.startsWith('..' + '/') && !path.startsWith('..' + '\\') && !isAbsolute(path) }

export async function auditLinks({ root = 'dist', origin = 'https://www.yapayzekadareklam.com' } = {}) {
  root = resolve(root)
  const publicRoot = await isFile(resolve(root, 'public/sitemap.xml')) ? resolve(root, 'public') : root
  const sitemap = await readFile(resolve(publicRoot, 'sitemap.xml'), 'utf8')
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => decode(match[1]))
  const pages = new Map()
  const issues = []
  const assets = new Set()
  let linkCount = 0
  let fragmentCount = 0
  const add = (path, rule, target) => issues.push({ path, rule, target })
  for (const url of urls) {
    const path = new URL(url).pathname
    const file = resolve(root, '.' + decodeURIComponent(path), 'index.html')
    if (!inside(root, file) || !await isFile(file)) { add(path, 'page-file', url); continue }
    // Code samples are HTML-escaped; script/style bodies and comments are not markup.
    const html = (await readFile(file, 'utf8')).replace(/<!--[\s\S]*?-->|<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    const ids = new Set()
    const tags = [...html.matchAll(/<[a-z][^>]*>/gi)].map(match => ({ name: match[0].match(/^<([a-z]+)/i)[1].toLowerCase(), attrs: attributes(match[0]) }))
    for (const { name, attrs } of tags) {
      if (attrs.id) {
        if (ids.has(attrs.id)) add(path, 'duplicate-id', attrs.id)
        ids.add(attrs.id)
      }
      if (name === 'a' && attrs.name) ids.add(attrs.name)
    }
    pages.set(path, { url, ids, tags, outgoing: new Set(), incoming: new Set() })
  }
  const fileExists = async pathname => {
    let decoded
    try { decoded = decodeURIComponent(pathname) } catch { return false }
    for (const base of new Set([root, publicRoot])) {
      const file = resolve(base, '.' + decoded)
      if (inside(base, file) && await isFile(file)) return true
    }
    return false
  }
  const localUrl = (href, pageUrl, path) => {
    try {
      const url = new URL(href, pageUrl)
      return url.origin === origin ? url : null
    } catch { add(path, 'invalid-url', href); return null }
  }
  for (const [path, page] of pages) {
    const references = []
    for (const { name, attrs } of page.tags) {
      if (name === 'a' && attrs.href) {
        const target = localUrl(attrs.href, page.url, path)
        if (target) {
          linkCount++
          const targetPath = target.pathname.endsWith('/') ? target.pathname : target.pathname + '/'
          const destination = pages.get(targetPath)
          if (!destination) {
            if (!await fileExists(target.pathname)) add(path, 'broken-link', attrs.href)
          } else {
            page.outgoing.add(targetPath)
            destination.incoming.add(path)
            if (target.hash) {
              fragmentCount++
              let fragment
              try { fragment = decodeURIComponent(target.hash.slice(1)).split(':~:')[0] } catch { add(path, 'invalid-fragment', attrs.href); continue }
              // Empty fragments, text fragments and #top are browser-defined targets.
              if (fragment && fragment.toLowerCase() !== 'top' && !destination.ids.has(fragment)) add(path, 'broken-fragment', attrs.href)
            }
          }
        }
      }
      if (['img', 'source', 'video', 'audio', 'iframe'].includes(name) && attrs.src) references.push(attrs.src)
      if (name === 'video' && attrs.poster) references.push(attrs.poster)
      if (['img', 'source'].includes(name) && attrs.srcset && !attrs.srcset.includes('data:')) {
        references.push(...attrs.srcset.split(',').map(candidate => candidate.trim().split(/\s+/)[0]).filter(Boolean))
      }
      if (name === 'link' && /\b(stylesheet|icon|apple-touch-icon|manifest|preload|modulepreload)\b/i.test(attrs.rel ?? '') && attrs.href) references.push(attrs.href)
      if (name === 'meta' && ['og:image', 'twitter:image'].includes(attrs.property ?? attrs.name) && attrs.content) references.push(attrs.content)
    }
    // Script bodies were stripped above. Inspect their opening tags separately.
    const raw = await readFile(resolve(root, '.' + decodeURIComponent(path), 'index.html'), 'utf8')
    for (const match of raw.replace(/<!--[\s\S]*?-->/g, '').matchAll(/<script\b[^>]*>/gi)) {
      const src = attributes(match[0]).src
      if (src) references.push(src)
    }
    for (const href of new Set(references)) {
      const target = localUrl(href, page.url, path)
      if (!target) continue
      assets.add(target.pathname)
      if (!await fileExists(target.pathname)) add(path, 'missing-asset', href)
    }
  }
  const depths = new Map(pages.has('/') ? [['/', 0]] : [])
  const queue = [...depths.keys()]
  for (let i = 0; i < queue.length; i++) {
    for (const path of pages.get(queue[i]).outgoing) {
      if (!depths.has(path)) { depths.set(path, depths.get(queue[i]) + 1); queue.push(path) }
    }
  }
  for (const path of pages.keys()) if (!depths.has(path)) add(path, 'unreachable-from-home', path)
  return {
    checkedAt: new Date().toISOString(),
    evidence: 'Generated static HTML links, fragment IDs and local HTML asset references only. Does not measure indexing, live HTTP, JavaScript DOM, CSS URLs or AI citations.',
    root, pageCount: pages.size, linkCount, fragmentCount, assetCount: assets.size,
    errorCount: issues.length, issues,
    pages: [...pages].map(([path, page]) => ({ path, depthFromHome: depths.get(path) ?? null, incomingPages: [...page.incoming].filter(source => source !== path).sort(), outgoingPages: [...page.outgoing].filter(target => target !== path).sort() })),
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const option = (name, fallback) => process.argv.includes(name) ? process.argv[process.argv.indexOf(name) + 1] : fallback
  const report = await auditLinks({ root: option('--root', 'dist') })
  const output = resolve(option('--output', 'output/seo/link-gate.json'))
  await mkdir(dirname(output), { recursive: true })
  await writeFile(output, JSON.stringify(report, null, 2) + '\n')
  console.log(JSON.stringify({ output, pages: report.pageCount, links: report.linkCount, fragments: report.fragmentCount, assets: report.assetCount, errors: report.errorCount, issues: report.issues }, null, 2))
  if (report.errorCount) process.exitCode = 1
}
