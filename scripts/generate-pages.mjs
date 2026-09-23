import { mkdir, readFile, writeFile } from 'node:fs/promises'

const pages = {
  'chatgpt-reklamlari': ['ChatGPT’de Reklam Verme | ChatGPT Ads Yönetimi', 'ChatGPT Ads kampanyalarınızı stratejiden ölçümlemeye yönetin. ChatGPT de reklam ver arayışınızda hesap, context hints ve GEO optimizasyonu.'],
  'chatgpt-reklam-verme': ['ChatGPT’de Reklam Ver: 2026 Adım Adım Rehber', 'ChatGPT’de reklam nasıl verilir? ChatGPT de reklam verme, Ads Manager, context hints, bütçe, Pixel ve GEO optimizasyonunu öğrenin.'],
  'chatgpt-reklam-fiyatlari': ['ChatGPT Reklam Fiyatları 2026: TBM, Bütçe ve Yönetim Ücreti', 'ChatGPT reklam maliyetleri nasıl hesaplanır? TBM, CPM, minimum bütçe önerileri, ajans yönetim modelleri ve yatırım getirisi (ROAS) analizi.'],
  'chatgpt-reklamlari-turkiye': ['ChatGPT Reklamları Türkiye: Erişim, Kurulum ve Uygunluk Rehberi', 'OpenAI Ads Manager Beta Türkiye durumu: Self-servis panel erişimi, tüzel kişilik, vergi ve faturalandırma gereksinimleri ve Türkçe kampanya yönetimi.'],
  'yapay-zeka-platformlarinda-reklam': ['Yapay Zekâya Reklam Vermek | AI Reklam Platformları', 'ChatGPT, Google AI Mode, Copilot ve gelişen AI reklam platformlarında kanal seçimi, kurulum ve ölçümleme hizmeti.'],
  'geo-yapay-zeka-gorunurlugu': ['GEO Ajansı | Yapay Zekâ Aramalarında Görünürlük', 'ChatGPT, Gemini, Copilot ve Perplexity yanıtlarında markanızın anlaşılmasını ve kaynak olma ihtimalini güçlendiren GEO hizmeti.'],
  'yapay-zeka-ile-reklam-uretimi': ['Yapay Zekâ ile Reklam Üretimi | AI Kreatif Ajansı', 'AI destekli reklam metni, görsel, kısa video ve kreatif varyasyon üretimi. Marka dili, insan kontrolü ve performans testi.'],
  'hizmetler/yapay-zeka-google-ads': ['Yapay Zekâ ile Google Ads Yönetimi | AI Reklam Ajansı', 'Performance Max, Akıllı Teklif, dönüşüm ölçümü ve AI destekli kreatif testleriyle Google Ads kampanyalarınızı yönetin.'],
  'hizmetler/meta-reklam': ['Yapay Zekâ Destekli Meta Reklam Yönetimi', 'Facebook ve Instagram için Advantage+, kreatif varyasyon, Pixel ve Conversions API odaklı Meta reklam yönetimi.'],
  'hizmetler/sosyal-medya-reklami': ['Yapay Zekâ ile Sosyal Medya Reklamı', 'AI destekli hedef kitle araştırması, reklam kreatifi, kanal planı ve performans analiziyle sosyal medya reklam yönetimi.'],
  'hizmetler/reklam-filmi-video': ['Yapay Zekâ Reklam Filmi ve Video Üretimi', 'AI destekli senaryo, storyboard, görsel, ses ve kurgu süreçleriyle marka kontrollü reklam filmi ve kısa video üretimi.'],
  'hizmetler/urun-gorseli': ['Yapay Zekâ ile Ürün Görseli Üretimi', 'E-ticaret, katalog ve reklam kampanyaları için ürün doğruluğunu koruyan AI destekli ürün görselleri üretin.'],
  'hizmetler/chatbot': ['Yapay Zekâ Chatbot Kurulumu | AI Asistan', 'Müşteri sorularını yanıtlayan, doğru hizmete yönlendiren ve gerektiğinde insana aktaran yapay zekâ chatbot kurulumu.'],
  'blog/yapay-zeka-ile-reklam-verme-nasil-yapilir': ['Yapay Zekâ ile Reklam Verme Nasıl Yapılır?', 'Yapay zekâ ile reklam verme adımları: hedef, ölçüm, kanal seçimi, kreatif test, bütçe ve performans optimizasyonu rehberi.'],
  'hakkimizda': ['Hakkımızda | Yapay Zekâda Reklam', 'Yapay Zekâda Reklam markasının yaklaşımı, uzmanlık alanları ve şeffaf çalışma ilkeleri.'],
  'iletisim': ['Yapay Zekâ Reklam Danışmanlığı | İletişim', 'Markanız için uygun AI reklam kanalını, gerekli hazırlıkları ve ilk kontrollü test planını birlikte çıkaralım.'],
  'blog': ['AI Reklamcılığı Kaynakları | Yapay Zekâda Reklam', 'ChatGPT Ads, GEO, context hints, ölçümleme ve yapay zekâ reklam platformları hakkında güncel rehberler.'],
  'yapay-zeka-gorunurluk-analizi': ['Ücretsiz Yapay Zekâ Görünürlük Analizi | GEO & LLM Testi', 'Web sitenizin ChatGPT, Perplexity, Gemini ve Claude gibi yapay zekâ motorlarında ne kadar önerildiğini ve kaynak gösterildiğini ücretsiz analiz edin.'],
  'gizlilik': ['Gizlilik Politikası | Yapay Zekâda Reklam', 'Yapay Zekâda Reklam gizlilik politikası.'],
  'kvkk': ['KVKK Aydınlatma Metni | Yapay Zekâda Reklam', 'Yapay Zekâda Reklam KVKK aydınlatma metni.'],
  'cerez-politikasi': ['Çerez Politikası | Yapay Zekâda Reklam', 'Yapay Zekâda Reklam çerez politikası.'],
}
const source = await readFile('index.html', 'utf8')
for (const [slug, [title, description]] of Object.entries(pages)) {
  const url = `https://www.yapayzekadareklam.com/${slug}/`
  const isService = slug.startsWith('hizmetler/') || ['chatgpt-reklamlari','geo-yapay-zeka-gorunurlugu','yapay-zeka-ile-reklam-uretimi','yapay-zeka-platformlarinda-reklam'].includes(slug)
  const isArticle = slug.startsWith('blog/') || ['chatgpt-reklam-verme','chatgpt-reklam-fiyatlari','chatgpt-reklamlari-turkiye'].includes(slug)
  const primarySchema = {
    '@type': isArticle ? 'Article' : isService ? 'Service' : 'WebPage',
    name: title,
    headline: isArticle ? title : undefined,
    description,
    url,
    provider: isService ? {'@id':'https://www.yapayzekadareklam.com/#organization'} : undefined,
    publisher: isArticle ? {'@id':'https://www.yapayzekadareklam.com/#organization'} : undefined,
    areaServed: isService ? 'Türkiye' : undefined,
  }
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [primarySchema, {
      '@type':'BreadcrumbList',
      itemListElement:[
        {'@type':'ListItem',position:1,name:'Ana sayfa',item:'https://www.yapayzekadareklam.com/'},
        {'@type':'ListItem',position:2,name:title,item:url},
      ],
    }],
  }
  const html = source
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/, `<meta name="description" content="${description}" />`)
    .replace('<link rel="canonical" href="https://www.yapayzekadareklam.com/" />', `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<script id="page-schema" type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="page-schema" type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .replace(/\s*<script id="faq-schema" type="application\/ld\+json">[\s\S]*?<\/script>/, '')
  await mkdir(slug, { recursive: true })
  await writeFile(`${slug}/index.html`, html)
}
