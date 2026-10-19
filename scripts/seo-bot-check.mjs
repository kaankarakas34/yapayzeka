import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { createHash } from 'node:crypto'

const args = process.argv.slice(2)
const option = (name, fallback) => args.includes(name) ? args[args.indexOf(name) + 1] : fallback
const origin = new URL(option('--origin', 'https://www.yapayzekadareklam.com')).origin
const canonicalOrigin = 'https://www.yapayzekadareklam.com'
const output = resolve(option('--output', 'output/seo/bot-access.json'))
const paths = ['/', '/chatgpt-reklamlari/', '/chatgpt-reklam-verme/', '/chatgpt-reklam-fiyatlari/', '/geo-yapay-zeka-gorunurlugu/', '/chatgptde-markam-nasil-cikar/', '/blog/chatgpt-ads-context-hints/', '/robots.txt']
const agents = {
  baseline: 'YZR-SEO-Audit/1.0',
  Googlebot: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  'OAI-SearchBot': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36; compatible; OAI-SearchBot/1.4; +https://openai.com/searchbot',
  'OAI-AdsBot': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; OAI-AdsBot/1.0; +https://openai.com/adsbot',
  'AdsBot-Google': 'AdsBot-Google (+http://www.google.com/adsbot.html)',
  'AdsBot-Google-Mobile': 'Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36 (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)',
}
const results = []
for (const path of paths) {
  const batch = await Promise.allSettled(Object.entries(agents).map(async ([agent, userAgent]) => {
    const response = await fetch(new URL(path, origin), { headers: { 'user-agent': userAgent }, redirect: 'manual', signal: AbortSignal.timeout(15000) })
    const body = await response.text()
    const main = body.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? ''
    const canonical = body.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1] ?? null
    const noindex = /<meta\b[^>]*name=["'](?:robots|googlebot)["'][^>]*content=["'][^"']*noindex/i.test(body) || /noindex/i.test(response.headers.get('x-robots-tag') ?? '')
    const expectedCanonical = new URL(path, canonicalOrigin).href
    return {
      path, agent, status: response.status, canonical, noindex,
      contentType: response.headers.get('content-type'),
      challenge: response.headers.get('x-vercel-mitigated'),
      mainHash: createHash('sha256').update(main).digest('hex'),
      h1Count: [...main.matchAll(/<h1\b/gi)].length,
      passed: response.status === 200 && (path === '/robots.txt'
        ? body.includes('User-agent:')
        : canonical === expectedCanonical && !noindex && /<h1\b/i.test(main)),
    }
  }))
  const agentNames = Object.keys(agents)
  const rows = batch.map((result, index) => result.status === 'fulfilled' ? result.value : { path, agent: agentNames[index], passed: false, error: String(result.reason) })
  const baseline = rows.find(row => row.agent === 'baseline')
  for (const row of rows) {
    row.matchesBaseline = Boolean(baseline?.passed && row.mainHash === baseline.mainHash)
    if (path !== '/robots.txt' && !row.matchesBaseline) row.passed = false
  }
  results.push(...rows)
}
const failures = results.filter(row => !row.passed)
const report = {
  checkedAt: new Date().toISOString(), origin,
  evidence: 'Public GET requests with bot User-Agent strings from this workstation. Not verified bot IP traffic, a WAF configuration audit, indexing evidence or ad approval. No POSTs or forms submitted. GPTBot training policy is independent and is not a search visibility prerequisite.',
  sources: ['https://developers.openai.com/api/docs/bots', 'https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers'],
  results, failures,
}
await mkdir(dirname(output), { recursive: true })
await writeFile(output, JSON.stringify(report, null, 2) + '\n')
console.log(JSON.stringify({ output, checked: results.length, failures }, null, 2))
if (failures.length) process.exitCode = 1
