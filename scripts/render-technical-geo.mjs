// The React article and static HTML read the same reviewed editorial content.
const escapeHtml = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const link = ({ href, label }) => `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`

export function renderTechnicalGeo(guide) {
  const sections = guide.sections.map((section) => `<section id="${escapeHtml(section.id)}">
    <h2>${escapeHtml(section.title)}</h2>
    ${(section.paragraphs ?? []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('\n')}
    ${section.items ? `<ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : ''}
    ${section.code ? `<pre tabindex="0" role="region" aria-label="${escapeHtml(section.title)}: kod örneği"><code>${escapeHtml(section.code)}</code></pre>` : ''}
    ${section.table ? `<div class="technical-geo-table" tabindex="0" role="region" aria-label="${escapeHtml(section.title)}: tablo"><table>
      <caption>${escapeHtml(section.title)}</caption>
      <thead><tr>${section.table.headers.map((header) => `<th scope="col">${escapeHtml(header)}</th>`).join('')}</tr></thead>
      <tbody>${section.table.rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody>
    </table></div>` : ''}
    ${section.links ? `<ul class="technical-geo-sources">${section.links.map((source) => `<li>${link(source)}</li>`).join('')}</ul>` : ''}
  </section>`).join('\n')
  return `<header class="site-header"><nav><a href="/">Ana Sayfa</a> | <a href="/blog/">Blog</a></nav></header>
  <main id="main-content"><h1>${escapeHtml(guide.title)}</h1><p>${escapeHtml(guide.description)}</p>
  <article class="technical-geo-guide" aria-label="Teknik GEO uygulama rehberi">
    <p class="technical-geo-meta">Hazırlayan: ${link({ href: guide.author.url, label: guide.author.name })} · Yayın: <time datetime="${guide.publishedAt}">${escapeHtml(guide.publishedLabel)}</time> · Güncelleme ve kaynak kontrolü: <time datetime="${guide.modifiedAt}">${escapeHtml(guide.modifiedLabel)}</time></p>
    <figure class="technical-geo-cover"><img src="${guide.cover.src.replace('.png', '.webp')}" alt="${escapeHtml(guide.cover.alt)}" width="1200" height="630" fetchpriority="high"><figcaption>Konuya özel açıklayıcı illüstrasyon; platform ekran görüntüsü değildir.</figcaption></figure>
    <section class="note"><h2>Kısa yanıt</h2><p>${escapeHtml(guide.answer)}</p></section>
    <nav aria-label="Rehber içindekiler"><h2>Bu rehberde</h2><ol>${guide.sections.map((section) => `<li>${link({ href: '#' + section.id, label: section.title.replace(/^\d+\.\s*/, '') })}</li>`).join('')}</ol></nav>
    ${sections}
    <section id="sik-sorulan-sorular"><h2>Sık sorulan sorular</h2>${guide.faq.map((item) => `<details><summary>${escapeHtml(item.question)}</summary><p>${escapeHtml(item.answer)}</p></details>`).join('')}</section>
    <nav aria-label="İlgili GEO rehberleri"><h2>Sonraki adımlar</h2><p>${link(guide.pillar)}</p><ul>${guide.related.map((item) => `<li>${link(item)}</li>`).join('')}</ul></nav>
    <p><a class="button primary" href="${escapeHtml(guide.cta.href)}">${escapeHtml(guide.cta.label)} <span aria-hidden="true">↗</span></a></p>
  </article></main>`.replace(/[\t ]+$/gm, '')
}
