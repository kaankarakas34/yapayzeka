import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'

const args = process.argv.slice(2)
const option = (flag, fallback) => args.includes(flag) ? args[args.indexOf(flag) + 1] : fallback
const origin = option('--origin', 'https://www.yapayzekadareklam.com')
const output = resolve(option('--output', 'output/seo/live-baseline.json'))
const sitemap = await readFile('public/sitemap.xml', 'utf8')
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname)
paths.push('/robots.txt', '/sitemap.xml', '/llms.txt', '/yzr-seo-nonexistent-check/')
const results = []
const robotsMeta = (html) => [...html.matchAll(/<meta\b[^>]*>/gi)].flatMap(([tag]) => {
  const attributes = Object.fromEntries([...tag.matchAll(/([\w-]+)\s*=\s*(["'])(.*?)\2/g)].map(match => [match[1].toLowerCase(), match[3]]))
  return /^(robots|googlebot)$/i.test(attributes.name ?? '') ? [attributes.content ?? ''] : []
})
for (let i = 0; i < paths.length; i += 5) {
  const batch = await Promise.allSettled(paths.slice(i, i + 5).map(async (path) => {
    let url = new URL(path, origin).href
    const chain = []
    for (let hop = 0; hop < 6; hop++) {
      const response = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(15000), headers: { 'User-Agent': 'YZR-SEO-Audit/1.0' } })
      chain.push({ url, status: response.status })
      if (response.status >= 300 && response.status < 400 && response.headers.get('location')) {
        await response.body?.cancel()
        url = new URL(response.headers.get('location'), url).href
        continue
      }
      const html = await response.text()
      return { path, status: response.status, finalUrl: url, chain, contentType: response.headers.get('content-type'), robotsHeader: response.headers.get('x-robots-tag'), robotsMeta: robotsMeta(html), title: html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? null, canonical: html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1] ?? null, h1Count: [...html.matchAll(/<h1\b/gi)].length, elapsedBodyBytes: Buffer.byteLength(html), ...(path === '/robots.txt' ? { robotsText: html } : {}) }
    }
    return { path, error: 'More than five redirect hops', chain }
  }))
  for (let j = 0; j < batch.length; j++) {
    const result = batch[j]
    results.push(result.status === 'fulfilled' ? result.value : { path: paths[i + j], error: String(result.reason) })
  }
}
const failures = []
for (const result of results) {
  if (result.error) { failures.push({ path: result.path, rule: 'request', detail: result.error }); continue }
  const missing = result.path === '/yzr-seo-nonexistent-check/'
  if (result.status !== (missing ? 404 : 200)) failures.push({ path: result.path, rule: 'http-status', detail: result.status })
  if (missing || /\.(txt|xml)$/.test(result.path)) continue
  if (result.canonical !== new URL(result.path, 'https://www.yapayzekadareklam.com').href) failures.push({ path: result.path, rule: 'canonical', detail: result.canonical })
  if (result.h1Count !== 1) failures.push({ path: result.path, rule: 'h1', detail: result.h1Count })
  if (!result.contentType?.includes('text/html')) failures.push({ path: result.path, rule: 'html-content-type', detail: result.contentType })
  if (result.robotsMeta.some(value => /noindex/i.test(value))) failures.push({ path: result.path, rule: 'noindex-meta', detail: result.robotsMeta })
  if (/noindex/i.test(result.robotsHeader ?? '')) failures.push({ path: result.path, rule: 'noindex-header', detail: result.robotsHeader })
}
const report = { checkedAt: new Date().toISOString(), origin, evidence: 'Unauthenticated HTTP checks only. No forms submitted; no Search Console or CRM data measured.', results, failures }
await mkdir(dirname(output), { recursive: true })
await writeFile(output, JSON.stringify(report, null, 2) + '\n')
console.log(JSON.stringify({ output, checked: results.length, failures, nonexistent: results.at(-1) }, null, 2))
if (failures.length) process.exitCode = 1
