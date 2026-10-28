import { readFile, writeFile, mkdir, access } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'

const option = (name, fallback) => process.argv.includes(name) ? process.argv[process.argv.indexOf(name) + 1] : fallback
const root = resolve(option('--root', 'dist'))
const output = resolve(option('--output', 'output/seo/news-gate.json'))
const newsItems = JSON.parse(await readFile('src/content/news-2026-10.json', 'utf8'))
const guideItems = JSON.parse(await readFile('src/content/geo-guides-2026-10.json', 'utf8'))
const items = [...newsItems, ...guideItems.filter(item => item.sourceNumber !== 7)]
const routes = [...JSON.parse(await readFile('src/content/news-route-paths.json', 'utf8')), ...JSON.parse(await readFile('src/content/guide-route-paths.json', 'utf8'))]
const origin = 'https://www.yapayzekadareklam.com'
const errors = []
const check = (condition, slug, rule) => { if (!condition) errors.push({ slug, rule }) }
const normalize = value => value.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\s+/g,' ').trim()
const xmlEscape = value => value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
const index = await readFile(resolve(root, 'haberler/index.html'), 'utf8')
const guideIndex = await readFile(resolve(root, 'rehber/index.html'), 'utf8')
const sitemap = await readFile(resolve(root, 'sitemap.xml'), 'utf8')
const rss = await readFile(resolve(root, 'haberler/rss.xml'), 'utf8')
const paths = new Set(items.map(item => '/' + item.slug))
check(paths.size === items.length && routes.length === items.length && routes.every(path => paths.has(path)), 'catalog', 'unique-route-registry')
check(new Set(items.map(item => item.seoTitle)).size === items.length, 'catalog', 'unique-title')
check(new Set(items.map(item => item.description)).size === items.length, 'catalog', 'unique-description')
const pages = []
for (const item of items) {
 const html = await readFile(resolve(root, item.slug, 'index.html'), 'utf8')
 const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? ''
 const text = normalize(main.replace(/<[^>]*>/g,' '))
 const graph = JSON.parse(html.match(/<script id="page-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph']
 const schema = graph.find(node => ['Article','NewsArticle'].includes(node['@type']))
 const canonical = origin + '/' + item.slug + '/'
 check(schema?.['@type'] === item.kind, item.slug, 'article-type')
 check(schema?.headline === item.headline && text.includes(normalize(item.headline)), item.slug, 'visible-headline')
 check(schema?.url === canonical && schema?.mainEntityOfPage?.['@id'] === canonical, item.slug, 'main-entity-canonical')
 check(schema?.datePublished === item.publishedAt && schema?.dateModified === item.modifiedAt, item.slug, 'schema-dates')
 for (const value of [item.publishedAt,item.modifiedAt,item.eventDate,item.checkedAt]) check(main.includes(`datetime="${value}"`), item.slug, 'visible-date:' + value)
 check(item.publishedAt <= item.modifiedAt && item.modifiedAt <= item.checkedAt, item.slug, 'date-order')
 if ((item.collection !== 'guide' && item.number !== 17) || item.slug.startsWith('rehber/')) check(item.publishedAt === '2026-10-28', item.slug, 'actual-publication-day')
 check(schema?.author?.name === item.author.name && schema?.author?.url === origin + item.author.url, item.slug, 'visible-author')
 check(schema?.image?.url === origin + item.cover.src && schema?.image?.width === 1200 && schema?.image?.height === 630, item.slug, 'schema-image')
 check(html.includes('<meta property="og:type" content="article" />') && html.includes(`content="${origin + item.cover.src}"`), item.slug, 'social-metadata')
 check(text.includes(normalize(item.lead)), item.slug, 'static-answer')
 const leadWords = item.lead.split(/\s+/).length
 check(item.collection === 'guide' ? leadWords >= 15 && leadWords <= 80 : leadWords >= 45 && leadWords <= 70, item.slug, 'clear-lead-length')
 check(item.faq.length >= 2 && (main.match(/<details>/g) ?? []).length === item.faq.length, item.slug, 'visible-faq')
 for (const faq of item.faq) check(text.includes(normalize(faq.question)) && text.includes(normalize(faq.answer)), item.slug, 'faq-text')
 check(!graph.some(node => /FAQPage|AIArticle/.test(node['@type'])), item.slug, 'no-special-ai-or-faq-claim')
 check(item.related.length >= 2 && item.related.every(link => link.href !== '/' + item.slug + '/'), item.slug, 'related-links')
 check(main.includes(`href="${item.pillar.href}"`), item.slug, 'pillar-link')
 for (const source of item.sources) check(main.includes(`href="${source.url.replace(/&/g,'&amp;')}"`), item.slug, 'visible-source:' + source.url)
 check(item.sources.some(source => ['Resmî açıklama','Resmî belge','Özgün araştırma'].includes(source.kind)), item.slug, 'primary-source')
 check((item.collection === 'guide' ? guideIndex : index).includes(`href="/${item.slug}/"`) && sitemap.includes(`<loc>${canonical}</loc>`), item.slug, 'index-and-sitemap')
 check(item.scope && item.editorial && item.actions.length >= 2, item.slug, 'editorial-evidence-and-limits')
 for (const suffix of ['.png','.webp','-480.webp']) {
   const file = resolve(root, '.' + item.cover.src.replace('.png',suffix))
   try { await access(file) } catch { check(false,item.slug,'missing-cover:' + suffix) }
 }
 const png = await readFile(resolve(root, '.' + item.cover.src))
 check(png.readUInt32BE(16) === 1200 && png.readUInt32BE(20) === 630, item.slug, 'cover-resolution')
 if (item.slug.startsWith('haberler/')) check(rss.includes(`<link>${canonical}</link>`) && rss.includes(xmlEscape(item.headline)), item.slug, 'rss-entry')
 pages.push({ slug:item.slug, kind:item.kind, publishedAt:item.publishedAt, eventDate:item.eventDate, leadWords, faq:item.faq.length, sources:item.sources.length })
}
const collection = JSON.parse(index.match(/<script id="page-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'].find(node => node['@type'] === 'CollectionPage')
check(collection?.mainEntity?.numberOfItems === newsItems.length, 'haberler', 'collection-item-count')
check((rss.match(/<item>/g) ?? []).length === newsItems.filter(item => item.slug.startsWith('haberler/')).length, 'rss', 'item-count')
const guideCollection = JSON.parse(guideIndex.match(/<script id="page-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'].find(node => node['@type'] === 'CollectionPage')
check(guideCollection?.mainEntity?.numberOfItems === guideItems.length, 'rehber', 'collection-item-count')
for(const item of guideItems)check(guideIndex.includes(`href="/${item.slug}/"`),item.slug,'guide-index-link')
await mkdir(dirname(output), {recursive:true})
await writeFile(output,JSON.stringify({checkedAt:new Date().toISOString(),evidence:'Local built content only; not proof of indexing, live rollout or AI citations.',pages,errors},null,2)+'\n')
console.log(JSON.stringify({output,pages:pages.length,errors},null,2))
if(errors.length)process.exitCode=1
