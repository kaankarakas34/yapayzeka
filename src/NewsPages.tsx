import { useState } from 'react'
import { Layout } from './SiteChrome'
import newsContent from './content/news-2026-10.json'
import guideContent from './content/geo-guides-2026-10.json'
import './news.css'

type EditorialBlock = { type: string; text: string; ordered?: boolean; items?: string[]; headers?: string[]; rows?: string[][] }
type NewsItem = {
  number: number; sourceNumber?: number; collection?: string; slug: string; headline: string; seoTitle: string; description: string;
  category: string; kind: string; eventDate: string; eventLabel: string; publishedAt: string; modifiedAt: string; checkedAt: string;
  author: { name: string; url: string }; lead: string; blocks: EditorialBlock[]; editorial: string;
  faq: { question: string; answer: string }[]; sources: { label: string; url: string; kind: string }[];
  facts: string[][]; actions: string[]; pillar: { href: string; label: string }; related: { href: string; label: string }[];
  cover: { src: string; alt: string; lines: string[] }; scope: string;
}
const catalog: NewsItem[] = newsContent
const guideCatalog: NewsItem[] = guideContent
const dateLabel = (value: string) => new Date(value + 'T12:00:00+03:00').toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
const href = (item: NewsItem) => '/' + item.slug + '/'
const image = (item: NewsItem) => item.cover.src.replace(/\.png$/, '.webp')
const ordered = [...catalog].sort((a, b) => b.eventDate.localeCompare(a.eventDate) || a.number - b.number)
const filters = ['Tümü', 'ChatGPT reklamları', 'GEO ve AI arama', 'Google ve Meta', 'AI ekosistemi']

function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  return <article className={featured ? 'news-card news-card-featured' : 'news-card'}>
    <a className="news-card-cover" href={href(item)} tabIndex={-1} aria-hidden="true">
      <img src={image(item)} srcSet={`${image(item).replace('.webp', '-480.webp')} 480w, ${image(item)} 1200w`} sizes={featured ? '(max-width: 700px) 100vw, 55vw' : '(max-width: 700px) 100vw, 360px'} alt="" width={1200} height={630} loading={featured ? 'eager' : 'lazy'} fetchPriority={featured ? 'high' : 'auto'} decoding="async" />
    </a>
    <div className="news-card-copy">
      <p className="news-card-category">{item.category}</p>
      <h2><a href={href(item)}>{item.headline}</a></h2>
      <p>{item.description}</p>
      <p className="news-card-date">{item.eventLabel}: <time dateTime={item.eventDate}>{dateLabel(item.eventDate)}</time></p>
    </div>
  </article>
}

export function NewsIndex() {
  const [category, setCategory] = useState('Tümü')
  const [query, setQuery] = useState('')
  const shown = ordered.filter(item => (category === 'Tümü' || item.category === category) && `${item.headline} ${item.description}`.toLocaleLowerCase('tr-TR').includes(query.trim().toLocaleLowerCase('tr-TR')))
  const lead = catalog.find(item => item.number === 1)!
  return <Layout><main id="main-content" tabIndex={-1} className="news-room">
    <header className="news-room-header">
      <p className="news-kicker">Yapay Zekâda Reklam / Haber masası</p>
      <h1>Yapay zekâ, reklam ve aramanın gündemi.</h1>
      <p>ChatGPT Ads, Google ve Meta gelişmeleri. Kaynağı, kapsamı ve reklamveren için neyi değiştirdiğiyle.</p>
      <div className="news-room-links"><a href="/chatgpt-reklamlari/">ChatGPT reklamları</a><a href="/rehber/">GEO uygulama rehberleri</a><a href="/haberler/rss.xml">RSS akışı</a></div>
    </header>
    <section aria-label="Öne çıkan haber" className="news-feature"><NewsCard item={lead} featured /></section>
    <section className="news-library" aria-labelledby="news-library-title">
      <div className="news-library-heading"><h2 id="news-library-title">Gelişmeleri takip edin</h2><p>28 Ekim 2026 kaynak kontrolü</p></div>
      <div className="news-controls">
        <div className="news-filters" role="group" aria-label="Haber kategorisi">{filters.map(filter => <button type="button" key={filter} aria-pressed={category === filter} onClick={() => setCategory(filter)}>{filter}</button>)}</div>
        <label className="news-search">Haberlerde ara<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Örn. ölçüm, Gemini, Türkiye" /></label>
      </div>
      <p className="news-result-count" role="status">{shown.length} içerik</p>
      {shown.length ? <div className="news-grid">{shown.map(item => <NewsCard key={item.slug} item={item} />)}</div> : <p className="news-empty">Bu aramada içerik bulunamadı. Aramayı temizleyin veya başka bir kategori seçin.</p>}
    </section>
    <section className="news-archive"><h2>Önceki duyurular</h2><ul><li><a href="/haberler/chatgpt-ads-60-ulkeye-ulasti/">Eylül 2026: ChatGPT Ads’in önceki ülke genişlemesi</a></li><li><a href="/haberler/sponsored-agents-duyuruldu/">Sponsored Agents duyurusu ve alpha kapsamı</a></li></ul></section>
    <section className="news-policy" id="yayin-ilkeleri"><h2>Haberleri nasıl hazırlıyoruz?</h2><p>Platform açıklamasını, araştırma bulgusunu ve editoryal değerlendirmeyi ayrı sunuyoruz. Duyuru tarihi ile sitemizdeki yayın tarihi farklı olabilir. Kendi kampanyamızda ölçmediğimiz sonuçları müşteri başarısı olarak göstermiyoruz.</p><p>Özelliklerin hesap ve bölge kapsamını kaynaklarından kontrol edin. Düzeltme veya kaynak önerisi için <a href="/iletisim/">haber masasına ulaşın</a>.</p></section>
  </main></Layout>
}

export function NewsArticle({ item }: { item: NewsItem }) {
  const isGuide = item.collection === 'guide'
  return <Layout><main id="main-content" tabIndex={-1} className="news-story">
    <nav className="news-breadcrumb" aria-label="İçerik yolu"><a href="/">Ana sayfa</a><span aria-hidden="true">/</span><a href={isGuide ? '/rehber/' : '/haberler/'}>{isGuide ? 'Rehberler' : 'Haberler'}</a><span aria-hidden="true">/</span><span>{item.category}</span></nav>
    <article>
      <header className="news-story-header">
        <p className="news-kicker">{item.category} · {isGuide ? 'Uygulama rehberi' : item.kind === 'Article' ? 'Analiz ve rehber' : 'Haber'}</p>
        <h1>{item.headline}</h1>
        <p className="news-story-lead">{item.lead}</p>
        <div className="news-byline"><p>Hazırlayan: <a rel="author" href={item.author.url}>{item.author.name}</a> {isGuide ? 'Editör Ekibi' : 'Haber Masası'}</p><p>Yayın: <time dateTime={item.publishedAt}>{dateLabel(item.publishedAt)}</time> · Güncelleme: <time dateTime={item.modifiedAt}>{dateLabel(item.modifiedAt)}</time></p></div>
        <p className="news-event">{item.eventLabel}: <time dateTime={item.eventDate}>{dateLabel(item.eventDate)}</time> · Kaynak kontrolü: <time dateTime={item.checkedAt}>{dateLabel(item.checkedAt)}</time></p>
      </header>
      <figure className="news-story-cover"><img src={image(item)} alt={item.cover.alt} width={1200} height={630} fetchPriority="high" decoding="async" /><figcaption>Konuya özel editoryal illüstrasyon. Platform ekran görüntüsü değildir.</figcaption></figure>
      <div className="news-story-layout">
        <aside className="news-fact-sheet" aria-labelledby="news-facts-title"><h2 id="news-facts-title">Bir bakışta</h2><dl>{item.facts.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl><a href="#kaynaklar">Kaynakları inceleyin</a></aside>
        <div className="news-story-body">
          <section className="news-report" aria-label={isGuide ? 'Rehberin ayrıntıları' : 'Haberin ayrıntıları'}>{item.blocks.map((block, index) => <EditorialContentBlock key={index} block={block} />)}</section>
          <section className="news-editorial"><h2>Editoryal değerlendirme</h2><p>{item.editorial}</p></section>
          <section className="news-actions"><h2>{isGuide ? 'Uygulama ve takip' : 'Reklamveren için sonraki adım'}</h2><ol>{item.actions.map(action => <li key={action}>{action}</li>)}</ol><p><a href={item.pillar.href}>{item.pillar.label}</a></p></section>
          <aside className="news-scope"><h2>Kapsam ve sınırlar</h2><p>{item.scope}</p></aside>
          <section className="news-faq"><h2>Sık sorulan sorular</h2>{item.faq.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
          <section id="kaynaklar" className="news-sources"><h2>Kaynaklar ve doğrulama</h2><p>Son kaynak kontrolü: <time dateTime={item.checkedAt}>{dateLabel(item.checkedAt)}</time>. Aşağıdaki belgeler platformun açıklamalarını veya araştırmanın yöntemini gösterir.</p><ul>{item.sources.map(source => <li key={source.url}><a href={source.url}>{source.label}</a><span>{source.kind}</span></li>)}</ul></section>
          <nav className="news-related" aria-label="İlgili içerikler"><h2>Konuyu takip edin</h2><ul>{item.related.map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul><a href={isGuide ? '/rehber/' : '/haberler/'}>{isGuide ? 'Tüm GEO rehberleri' : 'Tüm haber ve analizler'}</a></nav>
          <footer className="news-story-footer"><p>Bu konuyu işletmeniz için değerlendirmek üzere <a href="/iletisim/">ekibimizle görüşün</a>.</p><p><a href={isGuide ? '/rehber/#yayin-ilkeleri' : '/haberler/#yayin-ilkeleri'}>Yayın ve düzeltme ilkeleri</a></p></footer>
        </div>
      </div>
    </article>
  </main></Layout>
}

export default function NewsPage() {
  const path = location.pathname.replace(/^\/+|\/+$/g, '')
  const item = [...catalog, ...guideCatalog].find(entry => entry.slug === path)
  return item ? <NewsArticle item={item} /> : path === 'rehber' ? <GuideIndex /> : <NewsIndex />
}

function EditorialContentBlock({ block }: { block: EditorialBlock }) {
  if (block.type === 'heading') return <h2>{block.text}</h2>
  if (block.type === 'code') return <pre tabIndex={0} role="region" aria-label="Açıklayıcı kod örneği"><code>{block.text}</code></pre>
  if (block.type === 'list') return block.ordered ? <ol>{block.items?.map(item => <li key={item}>{item}</li>)}</ol> : <ul>{block.items?.map(item => <li key={item}>{item}</li>)}</ul>
  if (block.type === 'table') return <div className="news-data-table" tabIndex={0} role="region" aria-label={block.text}><table><caption>{block.text}</caption><thead><tr>{block.headers?.map(header => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{block.rows?.map((row, index) => <tr key={index}>{row.map((cell, index) => <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div>
  return <p>{block.text}</p>
}

export function GuideIndex() {
  const [query, setQuery] = useState('')
  const shown = guideCatalog.filter(item => `${item.headline} ${item.description}`.toLocaleLowerCase('tr-TR').includes(query.trim().toLocaleLowerCase('tr-TR')))
  return <Layout><main id="main-content" tabIndex={-1} className="news-room">
    <header className="news-room-header"><p className="news-kicker">Yapay Zekâda Reklam / Rehber kütüphanesi</p><h1>Yapay zekâda görünürlüğü adım adım geliştirin.</h1><p>Marka bilgisi, teknik erişim, özgün içerik ve ölçüm. ChatGPT, Google AI, Copilot ve Perplexity için kaynaklı uygulama rehberleri.</p><div className="news-room-links"><a href="/rehber/geo-nedir/">GEO nedir?</a><a href="/rehber/geo-30-gunluk-plan/">30 günlük başlangıç planı</a><a href="/geo-yapay-zeka-gorunurlugu/">GEO hizmet kapsamı</a><a href="/haberler/">Güncel haberler</a></div></header>
    <section className="news-library" aria-labelledby="guide-library-title"><div className="news-library-heading"><h2 id="guide-library-title">İhtiyacınıza göre bir rehber seçin</h2><label className="news-search">Rehberlerde ara<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Örn. ölçüm, B2B, ürün" /></label></div><p className="news-result-count" role="status">{shown.length} rehber</p>{shown.length ? <div className="news-grid">{shown.map(item => <NewsCard key={item.slug} item={item} />)}</div> : <p className="news-empty">Bu aramada rehber bulunamadı. Başka bir konu deneyin.</p>}</section>
    <section className="news-policy" id="yayin-ilkeleri"><h2>Uygulama, kanıt ve sınırlar</h2><p>Bu içerikler haber değil, uzun ömürlü rehberlerdir. Platform belgeleri ve araştırmalarla editoryal önerileri ayırır; temsili örnekleri gerçek müşteri sonucu olarak sunmayız. Aynı niyeti karşılayan içerikleri mevcut URL’de geliştiririz.</p><p>AI yanıtında tavsiye, kaynak gösterimi veya satış garantisi verilmez. Düzeltme ve kaynak önerisi için <a href="/iletisim/">editör ekibine ulaşın</a>.</p></section>
  </main></Layout>
}
