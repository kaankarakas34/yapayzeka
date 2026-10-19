import { readFile, writeFile, mkdir, access } from 'node:fs/promises'
import { resolve, dirname, relative } from 'node:path'

const argument = (name, fallback) => {
  const index = process.argv.indexOf(name)
  return index === -1 ? fallback : process.argv[index + 1]
}
const root = resolve(argument('--root', '.'))
const output = resolve(argument('--output', 'output/seo/site-audit.json'))
const origin = 'https://www.yapayzekadareklam.com'
const decode = (value = '') => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
const text = (html) => decode(html.replace(/<script\b[\s\S]*?<\/script>/gi, '').replace(/<style\b[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(["'])([\s\S]*?)\2/g)].map((m) => [m[1].toLowerCase(), decode(m[3])]))
const exists = async (file) => { try { await access(file); return true } catch { return false } }
const issues = []
const issue = (severity, path, rule, detail) => issues.push({ severity, path, rule, detail })

const publicRoot = await exists(resolve(root, 'public/sitemap.xml')) ? resolve(root, 'public') : root
const sitemap = await readFile(resolve(publicRoot, 'sitemap.xml'), 'utf8')
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => decode(m[1]))
const pages = []
const knownPaths = new Set(urls.map((url) => new URL(url).pathname))
for (const url of urls) {
  const path = new URL(url).pathname
  const file = resolve(root, '.' + path, 'index.html')
  if (!await exists(file)) { issue('error', path, 'sitemap-file', relative(root, file)); continue }
  const html = await readFile(file, 'utf8')
  const meta = [...html.matchAll(/<meta\b[^>]*>/gi)].map((m) => attrs(m[0]))
  const canonicals = [...html.matchAll(/<link\b[^>]*>/gi)].map((m) => attrs(m[0])).filter((a) => a.rel === 'canonical')
  const title = text(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '')
  const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => text(m[1]))
  const description = meta.find((a) => a.name === 'description')?.content ?? ''
  const robots = meta.find((a) => a.name === 'robots')?.content ?? ''
  const links = [...html.matchAll(/<a\b[^>]*>/gi)].map((m) => attrs(m[0]).href).filter(Boolean)
  const schemas = []
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (attrs(match[1]).type !== 'application/ld+json') continue
    try { schemas.push(JSON.parse(match[2])) } catch { issue('error', path, 'schema-json', 'Invalid JSON-LD') }
  }
  if (canonicals.length !== 1 || canonicals[0].href !== url) issue('error', path, 'canonical', canonicals)
  if (!title || !description) issue('error', path, 'metadata', 'Missing title or description')
  if (h1.length !== 1) issue('error', path, 'h1', `Expected 1, found ${h1.length}`)
  if (/noindex/i.test(robots)) issue('error', path, 'sitemap-noindex', robots)
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? ''
  if (!text(main)) issue('error', path, 'static-content', 'No main content without JavaScript')
  else if (text(main).length < 150) issue('warning', path, 'short-static-content', 'Review page depth; a short page is not automatically a crawl failure')
  const linkedPaths = []
  for (const href of links) {
    if (/^(mailto:|tel:|javascript:)/i.test(href)) continue
    let target
    try { target = new URL(href, url) } catch { issue('error', path, 'link-url', href); continue }
    if (target.origin !== origin) continue
    const targetPath = target.pathname.endsWith('/') ? target.pathname : target.pathname + '/'
    if (knownPaths.has(targetPath)) linkedPaths.push(targetPath)
    else if (!await exists(resolve(root, '.' + target.pathname)) && !await exists(resolve(publicRoot, '.' + target.pathname))) issue('error', path, 'internal-link', href)
  }
  for (const schema of schemas) {
    for (const node of schema['@graph'] ?? [schema]) {
      if (node['@type'] === 'FAQPage') {
        const visible = text(main)
        for (const question of node.mainEntity ?? []) {
          if (!visible.includes(text(question.name ?? '')) || !visible.includes(text(question.acceptedAnswer?.text ?? ''))) issue('error', path, 'faq-visible-content', question.name)
        }
      }
      if (node['@type'] !== 'BreadcrumbList') continue
      for (const item of node.itemListElement ?? []) {
        if (!item.item) continue
        const target = new URL(item.item, url)
        if (target.origin === origin && !knownPaths.has(target.pathname)) issue('error', path, 'breadcrumb-target', item.item)
      }
    }
  }
  pages.push({ path, url, title, description, canonical: canonicals[0]?.href, h1, robots, staticTextLength: text(main).length, schemaTypes: schemas.flatMap((s) => (s['@graph'] ?? [s]).map((n) => n['@type'])), linkedPaths: [...new Set(linkedPaths)] })
}
for (const field of ['title', 'description']) {
  const groups = new Map()
  for (const page of pages) groups.set(page[field], [...groups.get(page[field]) ?? [], page.path])
  for (const [value, paths] of groups) if (paths.length > 1) issue('warning', paths.join(', '), 'duplicate-' + field, value)
}
const reachable = new Set(['/'])
let changed = true
while (changed) {
  changed = false
  for (const page of pages) if (reachable.has(page.path)) for (const path of page.linkedPaths) if (!reachable.has(path)) { reachable.add(path); changed = true }
}
for (const page of pages) if (!reachable.has(page.path)) issue('warning', page.path, 'unreachable-from-home-static', 'No path from home through static links; check rendered navigation')

// Check each explicit group, since a specific user-agent group does not inherit * rules.
const robotsText = await readFile(resolve(publicRoot, 'robots.txt'), 'utf8')
const groups = []
let group = null
for (const raw of robotsText.split(/\r?\n/)) {
  const line = raw.split('#')[0].trim()
  const match = line.match(/^([\w-]+):\s*(.*)$/)
  if (!match) continue
  const [, key, value] = match
  if (key.toLowerCase() === 'user-agent') {
    if (!group || group.rules.length) { group = { agents: [], rules: [] }; groups.push(group) }
    group.agents.push(value)
  } else if (group && /^(allow|disallow)$/i.test(key) && value) group.rules.push({ allow: key.toLowerCase() === 'allow', path: value })
}
const crawlChecks = []
for (const g of groups) {
  for (const path of ['/chatgpt-reklamlari/', '/geo-yapay-zeka-gorunurlugu/', '/api/analyze', '/analiz/']) {
    const rules = g.rules.filter((r) => path.startsWith(r.path)).sort((a, b) => b.path.length - a.path.length || Number(b.allow) - Number(a.allow))
    const allowed = rules[0]?.allow ?? true
    crawlChecks.push({ agents: g.agents, path, allowed })
    const expected = !path.startsWith('/api/') && !path.startsWith('/analiz/')
    if (allowed !== expected) issue('error', g.agents.join(', '), 'robots-policy', `${path}: allowed=${allowed}, expected=${expected}`)
  }
}
const report = { checkedAt: new Date().toISOString(), root, evidence: 'Local static files only; not proof of deployed HTTP status, indexing, GSC performance or real AI visibility.', pageCount: pages.length, errorCount: issues.filter((i) => i.severity === 'error').length, warningCount: issues.filter((i) => i.severity === 'warning').length, issues, crawlChecks, pages }
await mkdir(dirname(output), { recursive: true })
await writeFile(output, JSON.stringify(report, null, 2) + '\n')
const inventoryOutput = argument('--inventory', null)
if (inventoryOutput) {
  const target = resolve(inventoryOutput)
  const fields = ['path', 'url', 'title', 'description', 'canonical', 'h1', 'robots', 'staticTextLength', 'schemaTypes']
  const cell = (value) => '"' + String(Array.isArray(value) ? value.join(' | ') : value ?? '').replace(/"/g, '""') + '"'
  await mkdir(dirname(target), { recursive: true })
  await writeFile(target, fields.join(',') + '\n' + pages.map((page) => fields.map((field) => cell(page[field])).join(',')).join('\n') + '\n')
}
console.log(JSON.stringify({ output, pages: report.pageCount, errors: report.errorCount, warnings: report.warningCount, issues }, null, 2))
if (report.errorCount) process.exitCode = 1
