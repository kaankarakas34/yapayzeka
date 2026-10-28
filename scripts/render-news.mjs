export const origin = 'https://www.yapayzekadareklam.com'
const esc = value => String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
const date = value => new Date(value+'T12:00:00+03:00').toLocaleDateString('tr-TR',{day:'numeric',month:'long',year:'numeric'})
const time = value => `<time datetime="${value}">${date(value)}</time>`
const link = (url,label) => `<a href="${esc(url)}">${esc(label)}</a>`
const img = item => item.cover.src.replace(/\.png$/,'.webp')
export const newsUrl = item => origin+'/'+item.slug+'/'
const renderBlock = block => {
 if(block.type==='heading')return `<h2>${esc(block.text)}</h2>`
 if(block.type==='code')return `<pre tabindex="0" role="region" aria-label="Açıklayıcı kod örneği"><code>${esc(block.text)}</code></pre>`
 if(block.type==='list'){const tag=block.ordered?'ol':'ul';return `<${tag}>${block.items.map(item=>`<li>${esc(item)}</li>`).join('')}</${tag}>`}
 if(block.type==='table')return `<div class="news-data-table" tabindex="0" role="region" aria-label="${esc(block.text)}"><table><caption>${esc(block.text)}</caption><thead><tr>${block.headers.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${block.rows.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`
 return `<p>${esc(block.text)}</p>`
}

export function renderNews(item) {
 const isGuide = item.collection === 'guide'
 const hub = isGuide ? '/rehber/' : '/haberler/'
 return `<header class="site-header"><nav>${link('/','Ana sayfa')} | ${link('/haberler/','Haberler')}</nav></header>
 <main id="main-content" class="news-story"><article>
 <header class="news-story-header"><p class="news-kicker">${esc(item.category)} · ${isGuide?'Uygulama rehberi':item.kind==='Article'?'Analiz ve rehber':'Haber'}</p>
 <h1>${esc(item.headline)}</h1><p class="news-story-lead">${esc(item.lead)}</p>
 <div class="news-byline"><p>Hazırlayan: <a rel="author" href="${item.author.url}">${esc(item.author.name)}</a> ${isGuide?'Editör Ekibi':'Haber Masası'}</p><p>Yayın: ${time(item.publishedAt)} · Güncelleme: ${time(item.modifiedAt)}</p></div>
 <p class="news-event">${esc(item.eventLabel)}: ${time(item.eventDate)} · Kaynak kontrolü: ${time(item.checkedAt)}</p></header>
 <figure class="news-story-cover"><img src="${img(item)}" alt="${esc(item.cover.alt)}" width="1200" height="630" fetchpriority="high" decoding="async"><figcaption>Konuya özel editoryal illüstrasyon. Platform ekran görüntüsü değildir.</figcaption></figure>
 <div class="news-story-layout"><aside class="news-fact-sheet" aria-labelledby="news-facts-title"><h2 id="news-facts-title">Bir bakışta</h2><dl>${item.facts.map(([term,value])=>`<div><dt>${esc(term)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl>${link('#kaynaklar','Kaynakları inceleyin')}</aside>
 <div class="news-story-body"><section class="news-report" aria-label="${isGuide?'Rehberin ayrıntıları':'Haberin ayrıntıları'}">${item.blocks.map(renderBlock).join('')}</section>
 <section class="news-editorial"><h2>Editoryal değerlendirme</h2><p>${esc(item.editorial)}</p></section>
 <section class="news-actions"><h2>${isGuide?'Uygulama ve takip':'Reklamveren için sonraki adım'}</h2><ol>${item.actions.map(action=>`<li>${esc(action)}</li>`).join('')}</ol><p>${link(item.pillar.href,item.pillar.label)}</p></section>
 <aside class="news-scope"><h2>Kapsam ve sınırlar</h2><p>${esc(item.scope)}</p></aside>
 <section class="news-faq"><h2>Sık sorulan sorular</h2>${item.faq.map(faq=>`<details><summary>${esc(faq.question)}</summary><p>${esc(faq.answer)}</p></details>`).join('')}</section>
 <section id="kaynaklar" class="news-sources"><h2>Kaynaklar ve doğrulama</h2><p>Son kaynak kontrolü: ${time(item.checkedAt)}. Aşağıdaki belgeler platformun açıklamalarını veya araştırmanın yöntemini gösterir.</p><ul>${item.sources.map(source=>`<li>${link(source.url,source.label)}<span>${esc(source.kind)}</span></li>`).join('')}</ul></section>
 <nav class="news-related" aria-label="İlgili içerikler"><h2>Konuyu takip edin</h2><ul>${item.related.map(item=>`<li>${link(item.href,item.label)}</li>`).join('')}</ul>${link(hub,isGuide?'Tüm GEO rehberleri':'Tüm haber ve analizler')}</nav>
 <footer class="news-story-footer"><p>Bu konuyu işletmeniz için değerlendirmek üzere ${link('/iletisim/','ekibimizle görüşün')}.</p><p>${link(hub+'#yayin-ilkeleri','Yayın ve düzeltme ilkeleri')}</p></footer>
 </div></div></article></main>`
}

export function renderNewsIndex(items) {
 const sorted=[...items].sort((a,b)=>b.eventDate.localeCompare(a.eventDate)||a.number-b.number)
 const card=item=>`<article class="news-card"><a href="/${item.slug}/"><img src="${img(item)}" alt="${esc(item.cover.alt)}" width="1200" height="630" loading="lazy"></a><div class="news-card-copy"><p class="news-card-category">${esc(item.category)}</p><h2>${link('/'+item.slug+'/',item.headline)}</h2><p>${esc(item.description)}</p><p class="news-card-date">${esc(item.eventLabel)}: ${time(item.eventDate)}</p></div></article>`
 return `<header class="site-header"><nav>${link('/','Ana sayfa')}</nav></header><main id="main-content" class="news-room"><header class="news-room-header"><p class="news-kicker">Yapay Zekâda Reklam / Haber masası</p><h1>Yapay zekâ, reklam ve aramanın gündemi.</h1><p>ChatGPT Ads, Google ve Meta gelişmeleri. Kaynağı, kapsamı ve reklamveren için neyi değiştirdiğiyle.</p><div class="news-room-links">${link('/chatgpt-reklamlari/','ChatGPT reklamları')}${link('/rehber/','GEO uygulama rehberleri')}${link('/haberler/rss.xml','RSS akışı')}</div></header><section class="news-library"><h2>Gelişmeleri takip edin</h2><p>28 Ekim 2026 kaynak kontrolü</p><p>${items.length} içerik</p><div class="news-grid">${sorted.map(card).join('')}</div></section><section class="news-archive"><h2>Önceki duyurular</h2><ul><li>${link('/haberler/chatgpt-ads-60-ulkeye-ulasti/','Eylül 2026: ChatGPT Ads’in önceki ülke genişlemesi')}</li><li>${link('/haberler/sponsored-agents-duyuruldu/','Sponsored Agents duyurusu ve alpha kapsamı')}</li></ul></section><section class="news-policy" id="yayin-ilkeleri"><h2>Haberleri nasıl hazırlıyoruz?</h2><p>Platform açıklamasını, araştırma bulgusunu ve editoryal değerlendirmeyi ayrı sunuyoruz. Duyuru tarihi ile sitemizdeki yayın tarihi farklı olabilir. Kendi kampanyamızda ölçmediğimiz sonuçları müşteri başarısı olarak göstermiyoruz.</p><p>Özelliklerin hesap ve bölge kapsamını kaynaklarından kontrol edin. Düzeltme veya kaynak önerisi için ${link('/iletisim/','haber masasına ulaşın')}.</p></section></main>`
}

export function newsSchema(item) {
 return {'@type':item.kind,'@id':newsUrl(item)+'#article',headline:item.headline,name:item.seoTitle,description:item.description,url:newsUrl(item),mainEntityOfPage:{'@type':'WebPage','@id':newsUrl(item)},inLanguage:'tr-TR',datePublished:item.publishedAt,dateModified:item.modifiedAt,image:{'@type':'ImageObject',url:origin+item.cover.src,width:1200,height:630},author:{'@type':'Organization',name:item.author.name,url:origin+item.author.url},publisher:{'@id':origin+'/#organization'},isAccessibleForFree:true,articleSection:item.category,citation:item.sources.map(source=>source.url)}
}

export function newsCollectionSchema(items, section = 'haberler') {
 return {'@type':'CollectionPage','@id':origin+'/'+section+'/#collection',url:origin+'/'+section+'/',name:section==='rehber'?'GEO ve AI görünürlük rehberleri':'Yapay zekâ reklamcılığı haberleri ve analizler',inLanguage:'tr-TR',dateModified:'2026-10-28',mainEntity:{'@type':'ItemList',numberOfItems:items.length,itemListElement:[...items].sort((a,b)=>b.eventDate.localeCompare(a.eventDate)||a.number-b.number).map((item,index)=>({'@type':'ListItem',position:index+1,url:newsUrl(item),name:item.headline}))}}
}

export function renderRss(items) {
 return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Yapay Zekâda Reklam Haberleri</title><link>${origin}/haberler/</link><description>ChatGPT Ads, GEO ve AI reklamcılığı haber ve analizleri.</description><language>tr-TR</language><atom:link href="${origin}/haberler/rss.xml" rel="self" type="application/rss+xml"/>${items.filter(item=>item.slug.startsWith('haberler/')).map(item=>`<item><title>${esc(item.headline)}</title><link>${newsUrl(item)}</link><guid isPermaLink="true">${newsUrl(item)}</guid><description>${esc(item.description)}</description><category>${esc(item.category)}</category></item>`).join('')}</channel></rss>\n`
}

export function renderGuideIndex(items) {
 return '<header class="site-header"><nav>'+link('/','Ana sayfa')+'</nav></header><main id="main-content" class="news-room"><header class="news-room-header"><p class="news-kicker">Yapay Zekâda Reklam / Rehber kütüphanesi</p><h1>Yapay zekâda görünürlüğü adım adım geliştirin.</h1><p>Marka bilgisi, teknik erişim, özgün içerik ve ölçüm. ChatGPT, Google AI, Copilot ve Perplexity için kaynaklı uygulama rehberleri.</p><div class="news-room-links">'+link('/rehber/geo-nedir/','GEO nedir?')+link('/rehber/geo-30-gunluk-plan/','30 günlük başlangıç planı')+link('/geo-yapay-zeka-gorunurlugu/','GEO hizmet kapsamı')+link('/haberler/','Güncel haberler')+'</div></header><section class="news-library"><h2>İhtiyacınıza göre bir rehber seçin</h2><p>'+items.length+' rehber</p><div class="news-grid">'+items.map(item=>'<article class="news-card"><a href="/'+item.slug+'/"><img src="'+img(item)+'" alt="'+esc(item.cover.alt)+'" width="1200" height="630" loading="lazy"></a><div class="news-card-copy"><p class="news-card-category">'+esc(item.category)+'</p><h2>'+link('/'+item.slug+'/',item.headline)+'</h2><p>'+esc(item.description)+'</p><p class="news-card-date">Kaynak kontrolü: '+time(item.checkedAt)+'</p></div></article>').join('')+'</div></section><section class="news-policy" id="yayin-ilkeleri"><h2>Uygulama, kanıt ve sınırlar</h2><p>Bu içerikler haber değil, uzun ömürlü rehberlerdir. Platform belgeleri ve araştırmalarla editoryal önerileri ayırır; temsili örnekleri gerçek müşteri sonucu olarak sunmayız. Aynı niyeti karşılayan içerikleri mevcut URL’de geliştiririz.</p><p>AI yanıtında tavsiye, kaynak gösterimi veya satış garantisi verilmez. Düzeltme ve kaynak önerisi için '+link('/iletisim/','editör ekibine ulaşın')+'.</p></section></main>'
}
