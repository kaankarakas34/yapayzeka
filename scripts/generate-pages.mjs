import { mkdir, readFile, writeFile } from 'node:fs/promises'

const pages = {
  'chatgpt-reklamlari': ['ChatGPT Reklam Ajansı | ChatGPT Ads Yönetimi', 'ChatGPT Ads kampanyalarınızı stratejiden ölçümlemeye yönetin. Hesap, context hints, reklam üretimi, landing page ve optimizasyon.'],
  'chatgpt-reklam-verme': ['ChatGPT’ye Reklam Verme: 2026 Adım Adım Rehber', 'ChatGPT’de reklam nasıl verilir? Ads Manager, context hints, reklamlar, bütçe, Pixel ve optimizasyon adımlarını öğrenin.'],
  'yapay-zeka-platformlarinda-reklam': ['Yapay Zekâya Reklam Vermek | AI Reklam Platformları', 'ChatGPT, Google AI Mode, Copilot ve gelişen AI reklam platformlarında kanal seçimi, kurulum ve ölçümleme hizmeti.'],
  'geo-yapay-zeka-gorunurlugu': ['GEO Ajansı | Yapay Zekâ Aramalarında Görünürlük', 'ChatGPT, Gemini, Copilot ve Perplexity yanıtlarında markanızın anlaşılmasını ve kaynak olma ihtimalini güçlendiren GEO hizmeti.'],
  'yapay-zeka-ile-reklam-uretimi': ['Yapay Zekâ ile Reklam Üretimi | AI Kreatif Ajansı', 'AI destekli reklam metni, görsel, kısa video ve kreatif varyasyon üretimi. Marka dili, insan kontrolü ve performans testi.'],
  'hakkimizda': ['Hakkımızda | Yapay Zekâda Reklam', 'Yapay Zekâda Reklam markasının yaklaşımı, uzmanlık alanları ve şeffaf çalışma ilkeleri.'],
  'iletisim': ['Yapay Zekâ Reklam Danışmanlığı | İletişim', 'Markanız için uygun AI reklam kanalını, gerekli hazırlıkları ve ilk kontrollü test planını birlikte çıkaralım.'],
  'blog': ['AI Reklamcılığı Kaynakları | Yapay Zekâda Reklam', 'ChatGPT Ads, GEO, context hints, ölçümleme ve yapay zekâ reklam platformları hakkında güncel rehberler.'],
  'gizlilik': ['Gizlilik Politikası | Yapay Zekâda Reklam', 'Yapay Zekâda Reklam gizlilik politikası.'],
  'kvkk': ['KVKK Aydınlatma Metni | Yapay Zekâda Reklam', 'Yapay Zekâda Reklam KVKK aydınlatma metni.'],
  'cerez-politikasi': ['Çerez Politikası | Yapay Zekâda Reklam', 'Yapay Zekâda Reklam çerez politikası.'],
}
const source = await readFile('index.html', 'utf8')
for (const [slug, [title, description]] of Object.entries(pages)) {
  const html = source
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/content="Yapay zekâ çağında reklamı yeniden düşünmek için hazırlanmış dijital deneyim\."/, `content="${description}"`)
    .replace('https://www.yapayzekadareklam.com/', `https://www.yapayzekadareklam.com/${slug}/`)
  await mkdir(slug, { recursive: true })
  await writeFile(`${slug}/index.html`, html)
}
