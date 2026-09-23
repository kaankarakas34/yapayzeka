import { useState, type FormEvent, type ReactNode } from 'react'

const updated = '2026 Güncellemesi'
const Arrow = () => <span aria-hidden="true">↗</span>
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
)

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand-logo" href="/" title="ChatGPT Ads Marketing - By Overseas Marketing">
        <img src="/images/logo.svg" alt="ChatGPT Ads Marketing" className="main-logo-img" width="230" height="44" />
      </a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav">
        Menü
      </button>
      <nav id="main-nav" className={open ? 'nav open' : 'nav'}>
        <a href="/chatgpt-reklam-verme/">ChatGPT'de Reklam Ver</a>
        <a href="/chatgpt-reklamlari/">ChatGPT Ads</a>
        <a href="/geo-yapay-zeka-gorunurlugu/">GEO Görünürlük</a>
        <a href="/yapay-zeka-platformlarinda-reklam/">AI Platformları</a>
        <a href="/blog/">Kaynaklar</a>
        <a className="nav-cta" href="/iletisim/">
          Ön Analiz Al <Arrow />
        </a>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <div>
          <h2>Müşteriniz ChatGPT'ye sorarken<br />markanız ilk sırada olsun.</h2>
        </div>
        <a className="button primary" href="/iletisim/">
          İlk Test Planını Çıkaralım <Arrow />
        </a>
      </div>
      <div className="footer-grid">
        <div>
          <a href="/" style={{ display: 'inline-block', marginBottom: '0.8rem' }}>
            <img src="/images/logo.svg" alt="ChatGPT Ads Marketing" width="200" height="38" />
          </a>
          <p>ChatGPT Ads yönetimi, AI reklam stratejisi ve GEO (Generative Engine Optimization) danışmanlığı.</p>
          <a href="tel:+905363197697">0536 319 76 97</a>
        </div>
        <div>
          <strong>Hizmetler</strong>
          <a href="/chatgpt-reklam-verme/">ChatGPT'de Reklam Ver</a>
          <a href="/chatgpt-reklamlari/">ChatGPT Ads Yönetimi</a>
          <a href="/geo-yapay-zeka-gorunurlugu/">GEO Organik Görünürlük</a>
          <a href="/yapay-zeka-platformlarinda-reklam/">AI Reklam Kanalları</a>
        </div>
        <div>
          <strong>Şirket</strong>
          <a href="/hakkimizda/">Hakkımızda</a>
          <a href="/blog/">Bilgi Merkezi</a>
          <a href="/iletisim/">İletişim</a>
        </div>
        <div>
          <strong>Yasal</strong>
          <a href="/gizlilik/">Gizlilik Politikası</a>
          <a href="/kvkk/">KVKK Metni</a>
          <a href="/cerez-politikasi/">Çerez Politikası</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Yapay Zekâda Reklam · Bir <a href="https://overseas.marketing" target="_blank" rel="noreferrer">overseas.marketing</a> markasıdır.</span>
        <span>Model & Platform Sürümü: {updated}</span>
      </div>
    </footer>
  )
}

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

const services = [
  ['01', 'ChatGPT Ads Yönetimi', 'Hesap, kampanya, context hints, reklam formatları ve dönüşüm ölçümünü tek performans sistemi olarak kuruyoruz.', '/chatgpt-reklamlari/'],
  ['02', 'ChatGPT’de Reklam Verme Rehberi', 'Adım adım hesap açılışı, bütçe yönetimi, bağlam ipuçları ve test adımlarıyla uçtan uca rehberlik.', '/chatgpt-reklam-verme/'],
  ['03', 'GEO ve Organik AI Görünürlüğü', 'Markanızın ChatGPT, Perplexity ve Gemini tarafından anlaşılması ve organik cevaplarda güvenilir kaynak olarak tavsiye edilmesi.', '/geo-yapay-zeka-gorunurlugu/'],
  ['04', 'Yapay Zekâ Platformlarında Reklam', 'ChatGPT, Google AI Mode ve Microsoft Copilot gibi gelişen AI reklam kanallarında kanal seçimi ve yönetim.', '/yapay-zeka-platformlarinda-reklam/'],
  ['05', 'Yapay Zekâ ile Google Ads', 'Performance Max, akıllı teklif stratejisi, birinci taraf veri ve AI kreatif testleriyle satış odaklı yönetim.', '/hizmetler/yapay-zeka-google-ads/'],
  ['06', 'Meta & Advantage+ Yönetimi', 'Meta reklamlarında kitle sinyalleri, kreatif varyasyonları ve Conversions API altyapısıyla ölçeklenebilir büyüme.', '/hizmetler/meta-reklam/']
]

const faqs = [
  ['ChatGPT\'de doğrudan "reklam ver" butonu var mı? Nasıl reklam verilir?', 'ChatGPT son kullanıcı arayüzünde klasik Google Ads gibi herkese açık doğrudan bir "Reklam Ver" butonu veya self-service panel bulunmamaktadır. ChatGPT\'de markanızı konumlandırmanın iki yolu vardır: 1) OpenAI\'nin kurumsal sponsorlu yerleşimleri (ChatGPT Ads) ve 2) Yapay zekâ cevaplarında markanızın güvenilir kaynak olarak tavsiye edilmesini sağlayan GEO (Generative Engine Optimization) optimizasyonudur.'],
  ['"chat gpt de reklam ver" arayan işletmeler için en doğru adım nedir?', 'Öncelikle markanızın dijital varlık mimarisi ve teknik verileri AI modellerinin okuyabileceği formata getirilmelidir (GEO). Ardından bağlamsal aramalarda hedef kitle niyetini karşılayan context hints ve sponsorlu test bütçeleriyle kontrollü kampanya başlatılır.'],
  ['ChatGPT reklamı ile organik cevap aynı şey midir?', 'Hayır. Sponsorlu reklam ile organik yapay zekâ cevabı kesin çizgilerle ayrı sistemlerdir. Reklamverenler organik ChatGPT cevabını satın alamaz; organik tavsiye edilmek için GEO otorite ve kaynak optimizasyonu gerekir.'],
  ['Context hints nedir?', 'Ürününüzün veya hizmetinizin kimler için, hangi durumda ve hangi problem için faydalı olduğunu doğal dille açıklayan bağlamsal ipuçlarıdır; geleneksel anahtar kelimelerden çok daha derin niyet analizi sağlar.'],
  ['GEO (Generative Engine Optimization) hizmeti nedir?', 'Marka, hizmet ve ürün bilgilerinizin üretken yapay zekâ sistemleri (ChatGPT, Gemini, Copilot, Perplexity) tarafından doğrulanması, anlaşılması ve kullanıcılara verilen cevaplarda birincil tavsiye kaynağı olarak sunulması çalışmasıdır.']
]


const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="4" y1="8" x2="20" y2="8"></line>
    <line x1="4" y1="16" x2="20" y2="16"></line>
  </svg>
)

const NewChatIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
  </svg>
)

const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
)

const LightbulbIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5h6.18z"></path>
  </svg>
)

const MicIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="23"></line>
    <line x1="8" y1="23" x2="16" y2="23"></line>
  </svg>
)

const VoiceModeIcon = () => (
  <div className="voice-mode-icon" title="ChatGPT Ses Modu">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="9" width="3" height="6" rx="1.5"></rect>
      <rect x="9" y="5" width="3" height="14" rx="1.5"></rect>
      <rect x="15" y="8" width="3" height="8" rx="1.5"></rect>
    </svg>
  </div>
)

function Home() {
  const [promptText, setPromptText] = useState('')

  const handlePromptSubmit = (e: FormEvent) => {
    e.preventDefault()
    const query = promptText || 'Yapay zekada reklam vermek istiyorum'
    window.location.href = `/iletisim/?soru=${encodeURIComponent(query)}`
  }

  return (
    <Layout>
      <main>
        {/* Vurucu ChatGPT Mockup Hero Section */}
        <section className="hero section-pad">
          {/* OpenAI Brand Guidelines: Resmi Marka Ortaklığı Kilidi (Lockup) */}
          <div className="openai-partner-lockup" title="ChatGPT & Overseas Marketing Marka Ortaklığı">
            <div className="lockup-brand-side">
              <img src="/images/chatgpt-green.webp" alt="ChatGPT" className="lockup-chatgpt-img" />
              <span className="lockup-chatgpt-text">ChatGPT</span>
            </div>
            <div className="lockup-divider" aria-hidden="true" />
            <div className="lockup-partner-side">
              <img src="/images/overseas-siyah.png" alt="Overseas Marketing" className="lockup-overseas-img" />
            </div>
          </div>

          <h1>
            Yapay zekâ aramalarında<br />
            markanız ne kadar <em>görünür?</em>
          </h1>

          <p className="hero-subtitle">
            Arama alışkanlıkları değişiyor. Müşterileriniz ürün ve hizmetleri artık sadece Google'da değil, doğrudan yapay zekâda arıyor.
          </p>

          {/* ChatGPT App Screen Card (Görseldeki Birebir Mockup) */}
          <div className="hero-mockup-wrapper">
            <div className="chatgpt-app-card">
              {/* Header Bar */}
              <div className="chatgpt-card-header">
                <button type="button" className="card-header-btn" title="Menü">
                  <MenuIcon />
                </button>
                <div className="card-header-title">
                  <span>ChatGPT</span>
                  <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>&gt;</span>
                </div>
                <button type="button" className="card-header-btn" title="Yeni Sohbet">
                  <NewChatIcon />
                </button>
              </div>

              {/* Chat Body */}
              <div className="chatgpt-card-body">
                {/* User Message */}
                <div className="chatgpt-user-pill">
                  Yapay zekâda reklam vermek istiyorum, markam ChatGPT aramalarında ne kadar görünür?
                </div>

                {/* Bot Response */}
                <div className="chatgpt-bot-row">
                  <div className="chatgpt-bot-avatar">
                    <img src="/images/chatgpt-green.webp" alt="ChatGPT" width="24" height="24" style={{ borderRadius: '50%', display: 'block' }} />
                  </div>
                  <div className="chatgpt-bot-text">
                    Yapay zekâ aramalarında markanızı öne çıkarmak için <strong>ChatGPT Ads</strong> sponsorlu modelleri ve doğrudan tavsiye edilmenizi sağlayan <strong>GEO (Generative Engine Optimization)</strong> görünürlüğü kurguluyoruz. AI aramalarında daha görünür olmak için <a href="/iletisim/" className="chatgpt-bot-highlight">Yapay Zekâda Reklam</a> ile iletişime geçebilirsiniz.
                  </div>
                </div>
              </div>

              {/* Card Footer (Input & Tools) */}
              <div className="chatgpt-card-footer">
                <form className="chatgpt-card-input-box" onSubmit={handlePromptSubmit}>
                  <input
                    type="text"
                    placeholder="ChatGPT'ye mesaj gönder..."
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                  />
                  <button type="submit" className="chatgpt-card-send" title="Gönder">
                    <SendIcon />
                  </button>
                </form>

                {/* Tools Bar (+ Ekle, Ara, Düşün, Mikrofon, Ses Modu) */}
                <div className="chatgpt-tools-row">
                  <button type="button" className="chatgpt-tool-btn" onClick={() => setPromptText('Markamı ChatGPT cevaplarında nasıl önerdirim?')}>
                    <span style={{ fontWeight: 700, fontSize: '1rem' }}>+</span> Ekle
                  </button>
                  <button type="button" className="chatgpt-tool-btn" onClick={() => setPromptText('ChatGPT Ads bütçesi ne kadar?')}>
                    <GlobeIcon /> Ara
                  </button>
                  <button type="button" className="chatgpt-tool-btn" onClick={() => setPromptText('GEO stratejisi analizi')}>
                    <LightbulbIcon /> Düşün
                  </button>
                  <button type="button" className="chatgpt-tool-btn" style={{ padding: '0.3rem' }} title="Sesle Yaz">
                    <MicIcon />
                  </button>
                  <VoiceModeIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tagline & CTA Buttons */}
          <p className="hero-bottom-tagline">
            <strong>SEO + GEO</strong> ile markanızın yeni nesil aramalardaki görünürlüğünü güçlendirin.
          </p>

          <div className="hero-bottom-actions">
            <a className="button primary" href="/iletisim/">
              Ücretsiz Görünürlük Analizi Al <Arrow />
            </a>
            <a className="button secondary" href="https://wa.me/905363197697">
              WhatsApp ile Bilgi Alın <Arrow />
            </a>
          </div>
        </section>

        {/* ChatGPT Conversation Simulated Feature */}
        <section className="conversation-section section-pad">
          <div className="chat-dialog-container">
            {/* User message */}
            <div className="chat-bubble user">
              <div className="bubble-avatar">Siz</div>
              <div className="bubble-content">
                <h3>ChatGPT'de doğrudan "reklam ver" butonu var mı? Markam için nasıl reklam veririm?</h3>
                <p>Google Ads veya Meta panelinde olduğu gibi kendi başımıza girip reklam verebileceğimiz bir panel var mı? Müşterilerimiz ChatGPT'ye sorduğunda markamızı nasıl gösterebiliriz?</p>
              </div>
            </div>

            {/* Assistant message */}
            <div className="chat-bubble assistant">
              <div className="bubble-avatar">YZ</div>
              <div className="bubble-content">
                <h3>Yapay Zekâda Reklam Danışmanı</h3>
                <p>
                  ChatGPT kullanıcı arayüzünde klasik anlamda herkese açık bir <strong>"Reklam Ver"</strong> butonu veya self-service reklam paneli bulunmamaktadır. 
                  Ancak işletmenizi ChatGPT ekosisteminde konumlandırmanın <strong>2 kanıtlanmış yöntemi</strong> vardır:
                </p>
                <div className="highlight-box">
                  <strong>1. ChatGPT Ads & Sponsorlu Entegrasyonlar:</strong> OpenAI'nin bağlamsal arama sonuçlarında sunduğu sponsorlu reklam modelleri. Niyet ve context hints ile eşleşir.
                </div>
                <div className="highlight-box">
                  <strong>2. GEO (Generative Engine Optimization):</strong> Kullanıcılar sektörünüzle ilgili sorular sorduğunda (ör: "En iyi CRM programı hangisi?"), ChatGPT'nin markanızı güvenilir kaynak olarak organik biçimde önermesini sağlayan optimizasyon çalışması.
                </div>
                <p style={{ marginTop: '0.8rem' }}>
                  Bu iki yaklaşımı birleştirerek hem ücretli hem de organik olarak ChatGPT'de maksimum görünürlük elde ediyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-pad">
          <div className="section-header">
            <span className="section-tag">Yapay Zekâ Reklam Çözümleri</span>
            <h2>Yapay zekâda reklam verin,<br />tüm AI arama motorlarında yerinizi alın.</h2>
            <p>Klasik anahtar kelime eşleştirmeleri geride kaldı. Niyet, durum, karar bağlamı ve kaynak otoritesiyle yönetilen yeni nesil reklam modelleri.</p>
          </div>

          <div className="service-grid">
            {services.map((s) => (
              <a className="service-card" href={s[3]} key={s[0]}>
                <span className="service-number">{s[0]} / HİZMET</span>
                <h3>{s[1]}</h3>
                <p>{s[2]}</p>
                <span className="card-arrow">İnceleyin <Arrow /></span>
              </a>
            ))}
          </div>
        </section>

        {/* Difference Section */}
        <section className="section-pad" style={{ background: 'var(--chat-dark)', borderTop: '1px solid var(--chat-border)', borderBottom: '1px solid var(--chat-border)' }}>
          <div className="section-header">
            <span className="section-tag">Net Ayrım</span>
            <h2>Reklam görünürlük satın alır.<br />GEO ise güven inşa eder.</h2>
            <p>ChatGPT ve diğer yapay zekâ kanallarında başarı, ücretli sponsorluk ile organik otoritenin birlikte kurgulanmasıyla mümkündür.</p>
          </div>

          <div className="difference-box">
            <div className="diff-card">
              <span className="tag">Ücretli Model</span>
              <h3>ChatGPT Ads</h3>
              <p>Sponsorlu, açıkça etiketlenen bağlamsal reklam alanları. Belirlenen bütçe, kampanya kurgusu ve context hints (bağlam ipuçları) üzerinden yönetilir.</p>
              <a className="text-link" href="/chatgpt-reklamlari/">ChatGPT Ads Detayları <Arrow /></a>
            </div>

            <div className="diff-card accent">
              <span className="tag">Organik Model</span>
              <h3>GEO (AI Görünürlüğü)</h3>
              <p>Markanızın ChatGPT, Perplexity ve Gemini tarafından taranması, içeriklerinizin doğrulanması ve kullanıcı sorularına verilen doğal cevaplarda tavsiye edilmesi.</p>
              <a className="text-link" href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmeti Detayları <Arrow /></a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-pad">
          <div className="faq-grid">
            <div>
              <span className="section-tag">Merak Edilenler</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                ChatGPT ve Yapay Zekâda Reklam Hakkında Sorular
              </h2>
              <p style={{ color: 'var(--chat-text-secondary)', marginTop: '1rem' }}>
                ChatGPT'de reklam verme süreçleri ve GEO hakkında en çok yöneltilen soruların net yanıtları.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((x) => (
                <details key={x[0]}>
                  <summary>
                    {x[0]}
                    <span style={{ color: 'var(--chat-green)' }}>+</span>
                  </summary>
                  <p>{x[1]}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

type DetailProps = { eyebrow: string; title: string; summary: string; children: ReactNode; cta?: string }
function Detail({ eyebrow, title, summary, children, cta = 'Ücretsiz Ön Analiz İsteyin' }: DetailProps) {
  return (
    <Layout>
      <main>
        <section className="detail-hero section-pad">
          <div className="model-badge">
            <i /> {eyebrow} · {updated}
          </div>
          <h1>{title}</h1>
          <p>{summary}</p>
          <a className="button primary" href="/iletisim/">
            {cta} <Arrow />
          </a>
        </section>
        <section className="detail-body section-pad">{children}</section>
      </main>
    </Layout>
  )
}

const Features = ({ items }: { items: [string, string][] }) => (
  <div className="feature-grid">
    {items.map((x, i) => (
      <div className="feature-card" key={x[0]}>
        <span style={{ fontSize: '0.75rem', color: 'var(--chat-green)', fontWeight: 600 }}>0{i + 1} / AŞAMA</span>
        <h3>{x[0]}</h3>
        <p>{x[1]}</p>
      </div>
    ))}
  </div>
)

const pages: { [key: string]: { e: string; t: string; s: string; items: [string, string][] } } = {
  '/chatgpt-reklamlari': {
    e: 'Ana Hizmet',
    t: 'ChatGPT Reklam Ajansı ve Uçtan Uca Ads Yönetimi',
    s: 'ChatGPT reklamları uygun konuşma bağlamlarında organik cevaptan ayrı gösterilen sponsorlu alanlardır. "chat gpt de reklam ver" arayan markalar için niyet analizi, context hints, landing page ve dönüşüm ölçümünü tek sistem olarak yönetiyoruz.',
    items: [
      ['Hesap ve İşletme Kurulumu', 'Ads Manager, doğrulama, ekip erişimleri ve politika kontrolleri.'],
      ['Kampanya & Bütçe Stratejisi', 'Hedef kitle, ülke parametreleri ve öğrenme süresi planlaması.'],
      ['Context Hints Geliştirme', 'Müşteri ihtiyaçlarını doğal, etkili bağlam açıklamalarına dönüştürme.'],
      ['Ölçümleme & Entegrasyon', 'Conversions API, Pixel, UTM ve CRM satış eşleştirmesi.']
    ]
  },
  '/yapay-zeka-platformlarinda-reklam': {
    e: 'Kanal Stratejisi',
    t: 'Yapay Zekâ Platformlarında Reklam Verme',
    s: 'Her AI platformunun erişimi, formatı ve ölçüm araçları farklıdır. ChatGPT, Google AI Mode, Copilot ve Perplexity ekosisteminde doğru kanalı seçip yönetiyoruz.',
    items: [
      ['ChatGPT Ads', 'Konuşma bağlamı ve dönüşüm ölçümünün birlikte planlandığı ana uzmanlık alanımız.'],
      ['Google AI Mode', 'Google Ads altyapısı, ürün verisi ve AI landing page hazırlığı.'],
      ['Microsoft Copilot', 'Microsoft Advertising ve Bing ekosistemindeki AI yerleşimleri.'],
      ['Perplexity & Diğerleri', 'Hazırlık, taranabilirlik ve organik AI görünürlük stratejisi.']
    ]
  },
  '/geo-yapay-zeka-gorunurlugu': {
    e: 'Organik Görünürlük',
    t: 'Yapay Zekâ Aramalarında Görünürlük: GEO Ajansı',
    s: 'GEO (Generative Engine Optimization); markanızın üretken yapay zekâ sistemleri tarafından anlaşılması ve aramalarda güvenilir tavsiye kaynağı olarak listelenmesi çalışmasıdır.',
    items: [
      ['Varlık Netliği', 'Marka, ürün ve hizmet bilgilerinin AI modellerine uygun tanımlanması.'],
      ['Cevap Mimarisi', 'Yapay zekânın kaynak gösterilebileceği derinlikte otoriter içerikler.'],
      ['Teknik Erişim & Schema', 'Taranabilirlik, LLM bot erişimleri ve yapısal veri entegrasyonu.'],
      ['Sürekli İzleme & Raporlama', 'Marka geçiş oranı, tavsiye edilme sıklığı ve rakip analizleri.']
    ]
  },
  '/yapay-zeka-ile-reklam-uretimi': {
    e: 'AI Destekli Üretim',
    t: 'Yapay Zekâ ile Reklam Üretimi',
    s: 'Yapay zekâyı tek tuşla sıradan içerik üretmek için değil; güçlü bir stratejiyi farklı karar bağlamlarında insan denetimiyle test etmek için kullanıyoruz.',
    items: [
      ['Strateji & Hipotez', 'Ürün faydası ve dönüşüm hedefi prodüksiyondan önce netleşir.'],
      ['Gerçek Varyasyon', 'Farklı satın alma motivasyonlarını sınayan zengin kreatifler.'],
      ['İnsan Denetimi', 'Marka dili, telif hakları, doğruluk ve etik kontrolü.'],
      ['Performans Döngüsü', 'En iyi performans gösteren varyasyonlar ölçeklenir.']
    ]
  },
  '/hakkimizda': {
    e: 'Hakkımızda',
    t: 'Yapay Zekâda Reklam: Yeni Nesil AI Büyüme Ajansı',
    s: 'Yapay Zekâda Reklam, markaların gelişen yapay zekâ kanallarında hem sponsorlu reklamlarla hem de organik GEO otoritesiyle büyümesini sağlayan bağımsız bir uzmanlık markasıdır.',
    items: [
      ['Doğru Teklif', 'Sunulmayan faydayı vaat etmeyen şeffaf yaklaşımlar.'],
      ['Gerçek Niyet', 'Kuru anahtar kelimeler yerine gerçek kullanıcı ihtiyaçları.'],
      ['Ölçülebilir Sonuç', 'Tıklamanın ötesinde lead kalitesi ve gerçek ciro etkisi.']
    ]
  },
  '/hizmetler/yapay-zeka-google-ads': {
    e: 'Performans Pazarlaması',
    t: 'Yapay Zekâ ile Google Ads Yönetimi',
    s: 'Performance Max ve Akıllı Teklif algoritmalarını iş veriniz ve birinci taraf dönüşüm sinyallerinizle besleyerek maksimum kârlılık sağlıyoruz.',
    items: [
      ['Veri Altyapısı', 'Dönüşüm eylemleri ve analitik bağlantılarının eksiksiz kurulumu.'],
      ['Kampanya Kurgusu', 'Arama, PMax ve yeniden pazarlama yapılarının hedefe göre ayrımı.'],
      ['AI Test Sistemi', 'Başlık, açıklama ve görsel bileşenlerinin çoklu testi.'],
      ['Kârlılık Odaklı Teklif', 'Bütçeyi doğrudan marj ve ciro hedefine göre optimize etme.']
    ]
  },
  '/hizmetler/meta-reklam': {
    e: 'Sosyal Medya Reklamı',
    t: 'Yapay Zekâ Destekli Meta Reklam Yönetimi',
    s: 'Advantage+ kampanyalarını, gelişmiş piksel sinyallerini ve dinamik kreatif testlerini satış odaklı yönetiyoruz.',
    items: [
      ['Katalog & Kampanya Kurulumu', 'Satış huninize uygun hedef ve yerleşim kurgusu.'],
      ['Kreatif Test Sistemi', 'Dönüşüm getiren varyasyonların hızlı üretimi ve test edilmesi.'],
      ['CAPI & Veri Güvenliği', 'Conversions API ve sunucu taraflı doğru ölçümleme.'],
      ['Sürekli İyileştirme', 'Maliyet artışlarını önleyen proaktif kampanya bakımı.']
    ]
  },
  '/hizmetler/sosyal-medya-reklami': {
    e: 'Çok Kanallı Kampanya',
    t: 'Yapay Zekâ ile Sosyal Medya Reklamı',
    s: 'Instagram, LinkedIn ve Facebook kanallarında AI destekli hedef kitle araştırması ve yüksek etkili reklam kreatifleri sunuyoruz.',
    items: [
      ['Kanal Eşleşmesi', 'İş modelinize en uygun sosyal mecraların belirlenmesi.'],
      ['Özgün Formatlar', 'Platform dinamiklerine uygun dikey video ve carousel tasarımları.'],
      ['Hızlı Test', 'Düşük bütçelerle çoklu mesaj testi ve kazananı ölçekleme.'],
      ['Detaylı Raporlama', 'Satış ve potansiyel müşteri kalitesinin şeffaf takibi.']
    ]
  },
  '/hizmetler/reklam-filmi-video': {
    e: 'AI Prodüksiyon',
    t: 'Yapay Zekâ Reklam Filmi ve Video Üretimi',
    s: 'Senaryo, görsel tasarım, seslendirme ve kurguyu yapay zekâ ile hızlandırıyor; marka kontrollü profesyonel videolar üretiyoruz.',
    items: [
      ['Yaratıcı Senaryo', 'Hedef kitleyi ilk saniyede yakalayan senaryo kurguları.'],
      ['AI Görsel & Ses', 'Yüksek kaliteli yapay zekâ görsel ve ses prodüksiyonu.'],
      ['İnsan Kurgusu', 'Ritim, marka renkleri ve mesaj bütünlüğünün profesyonel denetimi.'],
      ['Çoklu Boyut', 'Reels, Shorts ve web için hazır teslim formatları.']
    ]
  },
  '/hizmetler/urun-gorseli': {
    e: 'E-Ticaret Kreatifi',
    t: 'Yapay Zekâ ile Ürün Görseli Üretimi',
    s: 'Ürün fotoğraflarınızı gerçek formunu bozmadan stüdyo kalitesinde yaşam alanı sahnelerine dönüştürüyoruz.',
    items: [
      ['Ürün Koruma', 'Ürünün dokusu, geometrisi ve etiketlerinin birebir korunması.'],
      ['Sınırsız Sahne', 'Farklı konsept ve mevsimsel arka plan uygulamaları.'],
      ['Yüksek Çözünürlük', 'Baskı ve e-ticaret siteleri için ultra net çıktılar.'],
      ['Hızlı Teslim', 'Geleneksel fotoğraf çekimlerine kıyasla 10 kat daha hızlı üretim.']
    ]
  },
  '/hizmetler/chatbot': {
    e: 'Konuşmalı Satış',
    t: 'Yapay Zekâ Chatbot ve Satış Asistanı Kurulumu',
    s: 'Müşterilerinizin sorularını anında yanıtlayan ve onları randevuya ya da satın almaya yönlendiren akıllı AI asistanlar.',
    items: [
      ['Bilgi Bankası Entegrasyonu', 'Ürün ve hizmet verilerinizin yapay zekâya güvenle öğretilmesi.'],
      ['Doğru Yönlendirme', 'Müşteri talebine göre doğru teklife veya ekibinize aktarma.'],
      ['Güvenlik & Sınırlar', 'Şirket politikası dışına çıkmayan kontrollü yanıt sistemi.'],
      ['Dönüşüm Takibi', 'Chatbot üzerinden gerçekleşen lead ve satışların analizi.']
    ]
  }
}

function GenericPage({ data }: { data: (typeof pages)[string] }) {
  return (
    <Detail eyebrow={data.e} title={data.t} summary={data.s}>
      <Features items={data.items} />
      <div style={{ maxWidth: '780px', margin: '3rem auto 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '1rem' }}>Şeffaf ve Ölçülebilir Çalışma İlkesi</h2>
        <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7 }}>
          Platformların erişim şartları ve AI modellerinin reklam kuralları sürekli güncellenmektedir. 
          Biz her aşamada resmî platform kaynaklarını doğrular, sponsorlu reklam ile organik GEO görünürlüğünü şeffaf bir şekilde yönetiriz.
        </p>
        <div style={{ marginTop: '1.8rem' }}>
          <a className="button primary" href="/iletisim/">Markanız İçin Test Planı Başlatın <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function Guide() {
  const steps = [
    'Uygunluğu ve Ülke Erişimini Doğrulayın',
    'OpenAI / Ads Manager Hesabını Yapılandırın',
    'Kampanya Hedefini ve Bütçe Planını Seçin',
    'Reklam Gruplarını ve Karar Durumlarını Belirleyin',
    'Context Hints (Doğal Bağlam İpuçları) Yazın',
    'Reklam Formatlarını ve Mesajlarını Hazırlayın',
    'Landing Page ve Açılış Sayfasını Eşleştirin',
    'Pixel, Conversions API ve UTM Takibini Bağlayın',
    'Öğrenme Verisini Yorumlayıp GEO ile Büyütün'
  ]

  return (
    <Detail
      eyebrow="2026 Kapsamlı Rehberi"
      title="ChatGPT'de Reklam Ver: Adım Adım Kampanya ve Görünürlük Rehberi"
      summary="ChatGPT'de reklam nasıl verilir? 'chat gpt de reklam ver' arayışındaki markalar için Ads Manager hesap kurulumundan context hints yazımına, bütçe yönetiminden GEO organik görünürlüğüne kadar tüm aşamalar."
    >
      <div className="chat-dialog-container" style={{ marginBottom: '3rem' }}>
        <div className="chat-bubble assistant">
          <div className="bubble-avatar">YZ</div>
          <div className="bubble-content">
            <h3>ChatGPT'de Reklam Vermek İsteyenlerin Bilmesi Gereken 3 Temel Kural</h3>
            <p>1. ChatGPT klasik bir kelime arama motoru değildir; niyet ve konuşma bağlamı ile çalışır.</p>
            <p>2. Henüz herkes için açık bir "reklam ver" butonu yoktur; kurumsal sponsorlu modeller ve GEO birlikte kurgulanmalıdır.</p>
            <p>3. Satın alınan sponsorlu reklam organik tavsiyeyi değiştirmez; kalıcı başarı için marka güveni ve GEO şarttır.</p>
          </div>
        </div>
      </div>

      <div className="timeline">
        {steps.map((x, i) => (
          <div key={x}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <h3>{x}</h3>
          </div>
        ))}
      </div>

      <aside className="note">
        <strong>Önemli Not & Güncelleme: {updated}</strong>
        <p>Yapay zekâ reklam formatları hızla gelişmektedir. Kampanyanızın doğru bağlamda yayınlanması ve bütçenizin verimli kullanılması için uzman desteği almanız önerilir.</p>
      </aside>
    </Detail>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const message = [
      `Merhaba, Yapay Zekâda Reklam ve ChatGPT görünürlük ön analizi istiyorum.`,
      `Ad Soyad: ${data.get('name')}`,
      `E-posta: ${data.get('email')}`,
      `Şirket / Site: ${data.get('company') || '-'}`,
      `Öncelikli Hedef: ${data.get('goal')}`,
      `Not / Soru: ${data.get('message') || '-'}`
    ].join('\n')
    setSent(true)
    window.location.href = `https://wa.me/905363197697?text=${encodeURIComponent(message)}`
  }

  // Pre-fill query from URL if available
  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null
  const defaultQuestion = urlParams ? urlParams.get('soru') || '' : ''

  return (
    <Detail
      eyebrow="İletişim & Analiz"
      title="Markanız İçin ChatGPT ve Yapay Zekâ Reklam Planını Çıkaralım"
      summary="ChatGPT'de reklam verme olanaklarını, markanızın organik GEO skorunu ve ilk test bütçesini uzman ekibimizle birlikte planlayın."
    >
      {sent ? (
        <div className="success">
          <h2 style={{ color: '#ffffff', marginBottom: '0.6rem' }}>WhatsApp Görüşmeniz Hazırlanıyor...</h2>
          <p style={{ color: 'var(--chat-text-secondary)' }}>Mesajınız hazırlandı. WhatsApp üzerinden doğrudan uzmanımızla görüşmeye devam edebilirsiniz.</p>
        </div>
      ) : (
        <div className="contact-grid">
          <div>
            <div className="contact-actions">
              <a className="button primary" href="https://wa.me/905363197697">
                WhatsApp ile Hızlı Mesaj Gönder <Arrow />
              </a>
              <a className="button secondary" href="tel:+905363197697">
                Telefon: 0536 319 76 97
              </a>
            </div>
            <div style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem' }}>Ön Analizde Neler Paylaşıyoruz?</strong>
              <p>• Sektörünüzde "chat gpt de reklam ver" ve ilgili arama niyetleri hacmi.</p>
              <p>• Markanızın şu anki ChatGPT ve Gemini cevaplarındaki görünürlük durumu.</p>
              <p>• Reklam ve GEO için uygulanabilir yol haritası ve tahmini bütçe.</p>
            </div>
          </div>

          <form onSubmit={submit}>
            <label>
              Ad Soyad
              <input name="name" autoComplete="name" required placeholder="Adınız ve Soyadınız" />
            </label>
            <label>
              İş E-postası
              <input name="email" autoComplete="email" required type="email" placeholder="ornek@sirketiniz.com" />
            </label>
            <label>
              Şirket / Web Sitesi
              <input name="company" autoComplete="organization" placeholder="sirketiniz.com" />
            </label>
            <label>
              Öncelikli Hedef
              <select name="goal">
                <option>ChatGPT'de Reklam Verme & Ads</option>
                <option>GEO (Organik AI Görünürlüğü)</option>
                <option>Google & Meta AI Kampanyaları</option>
                <option>Lead & Satış Artışı</option>
              </select>
            </label>
            <label className="wide">
              Merak Ettiğiniz veya İletmek İstediğiniz Detay
              <textarea name="message" rows={4} defaultValue={defaultQuestion} placeholder="ChatGPT'de reklam vermek istiyorum, bütçe ve süreç nasıl işler?" />
            </label>
            <label className="consent wide">
              <input required type="checkbox" />
              <span><a href="/kvkk/">KVKK Aydınlatma Metni'ni</a> okudum ve kabul ediyorum.</span>
            </label>
            <button className="button primary wide" style={{ marginTop: '0.5rem' }}>
              WhatsApp İle Analiz İsteği Gönder <Arrow />
            </button>
          </form>
        </div>
      )}
    </Detail>
  )
}

function Blog() {
  const posts = [
    ['ChatGPT’de Reklam Ver: 2026 Adım Adım Rehber', '/chatgpt-reklam-verme/'],
    ['Yapay Zekâ ile Reklam Verme Nasıl Yapılır?', '/blog/yapay-zeka-ile-reklam-verme-nasil-yapilir/'],
    ['ChatGPT Reklamları ve Ads Modelleri Nedir?', '/chatgpt-reklamlari/'],
    ['ChatGPT Ads ile GEO (AI Görünürlüğü) Farkı', '/geo-yapay-zeka-gorunurlugu/'],
    ['Gelişen Yapay Zekâ Reklam Platformları', '/yapay-zeka-platformlarinda-reklam/'],
    ['Yapay Zekâ ile Reklam Üretimi ve Testi', '/yapay-zeka-ile-reklam-uretimi/']
  ]

  return (
    <Detail
      eyebrow="Bilgi Merkezi"
      title="Yapay Zekâ Reklamcılığı ve ChatGPT Kaynakları"
      summary="ChatGPT Ads yönetimi, 'chat gpt de reklam ver' rehberleri, GEO optimizasyonu ve üretken yapay zekâ pazarlaması üzerine güncel makaleler."
    >
      <div className="post-grid">
        {posts.map((x, i) => (
          <a href={x[1]} key={x[0]} className="post-card">
            <span>REHBER · 0{i + 1}</span>
            <h2>{x[0]}</h2>
            <p>Doğrudan yanıt, stratejik uygulama adımları ve güncel platform kuralları.</p>
          </a>
        ))}
      </div>
    </Detail>
  )
}

function PillarGuide() {
  const phases: [string, string][] = [
    ['Hedefi ve Dönüşüm Kriterlerini Belirleyin', 'Satış, nitelikli lead veya marka bilinirliği hedeflerini netleştirip ölçüm altyapısını kurun.'],
    ['AI Okunabilirliği ve GEO Hazırlığı', 'İçeriklerinizi ve ürün verilerinizi ChatGPT ve AI modellerinin referans alabileceği şekilde optimize edin.'],
    ['Kanal ve Model Seçimini Yapın', 'Google AI, Meta Advantage+ veya ChatGPT Ads seçeneklerini müşteri satın alma yolculuğuna göre belirleyin.'],
    ['Context Hints ve Kreatifleri Üretin', 'Tek bir şablon yerine farklı müşteri arama niyetlerini karşılayan bağlamsal ipuçları ve varyasyonlar hazırlayın.'],
    ['Kontrollü Pilot Test Başlatın', 'Algoritmaların öğrenme süreci için yeterli test bütçesi ayırın ve süreci insan denetiminde tutun.'],
    ['İş Verisiyle Okuyun ve Ölçekleyin', 'Yalnızca tıklama maliyetine değil, gerçek satış kârlılığına ve dönüşüm oranına bakarak bütçeyi ölçekleyin.']
  ]

  return (
    <Detail
      eyebrow="Temel Rehber"
      title="Yapay Zekâ ile Reklam Verme Nasıl Yapılır?"
      summary="Yapay zekâ ile reklam verme; hedef kitle modellemesi, teklif optimizasyonu ve içerik üretiminde AI araçlarını kullanırken kararları doğrulanmış iş verisiyle yönetmektir."
    >
      <div style={{ maxWidth: '850px', margin: '0 auto 3rem', color: 'var(--chat-text-secondary)', fontSize: '1.15rem', lineHeight: 1.75 }}>
        <p>
          Yapay zekâ dijital reklamcılığı kökten dönüştürüyor; ancak eksik dönüşüm verisini veya zayıf bir teklifi kendiliğinden düzeltemez. 
          Başarılı bir yapay zekâ reklam stratejisi; doğru veri ölçümü, net bağlam (context hints) ve insan aklıyla şekillenen test disipliniyle kurulur.
        </p>
      </div>

      <div className="feature-grid">
        {phases.map((x, i) => (
          <div className="feature-card" key={x[0]}>
            <span style={{ fontSize: '0.75rem', color: 'var(--chat-green)', fontWeight: 600 }}>0{i + 1} / ADIM</span>
            <h3>{x[0]}</h3>
            <p>{x[1]}</p>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '800px', margin: '4rem auto 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1rem' }}>Ücretli Reklam ile GEO Birlikte Nasıl Çalışır?</h2>
        <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
          Google, Meta ve ChatGPT Ads kısa vadede sponsorlu erişim sağlar. GEO ise markanızın yapay zekâ sistemleri tarafından organik bir otorite olarak kabul edilmesini sağlayarak ücretsiz ve kalıcı önerilmeyi mümkün kılar.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="button primary" href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmetini İnceleyin <Arrow /></a>
          <a className="button secondary" href="/iletisim/">Ücretsiz Ön Analiz İsteyin <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function Legal({ title }: { title: string }) {
  return (
    <Detail
      eyebrow="Yasal Bilgilendirme"
      title={title}
      summary="Yapay Zekâda Reklam yasal çerçeve, veri gizliliği ve kullanıcı hakları bilgilendirmesi."
    >
      <div style={{ maxWidth: '780px', margin: '0 auto', color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
        <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Veri Güvenliği ve Şeffaflık</h2>
        <p>
          Yapay Zekâda Reklam olarak müşteri gizliliğine, KVKK ve ilgili uluslararası veri koruma mevzuatına tam uyum gösteriyoruz. 
          Sitemiz üzerinden paylaşılan analiz talepleri yalnızca hizmet sunumu ve teklif hazırlığı amacıyla işlenmektedir.
        </p>
      </div>
    </Detail>
  )
}

function App() {
  const path = location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/') return <Home />
  if (path === '/chatgpt-reklam-verme') return <Guide />
  if (path === '/blog/yapay-zeka-ile-reklam-verme-nasil-yapilir') return <PillarGuide />
  if (path === '/iletisim') return <Contact />
  if (path === '/blog') return <Blog />
  if (path === '/gizlilik' || path === '/kvkk' || path === '/cerez-politikasi') {
    return <Legal title={path === '/kvkk' ? 'KVKK Aydınlatma Metni' : path === '/gizlilik' ? 'Gizlilik Politikası' : 'Çerez Politikası'} />
  }
  const data = pages[path]
  return data ? (
    <GenericPage data={data} />
  ) : (
    <Detail eyebrow="404" title="Sayfa Bulunamadı" summary="Aradığınız sayfa taşınmış veya güncellenmiş olabilir.">
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a className="button primary" href="/">Ana Sayfaya Dön <Arrow /></a>
      </div>
    </Detail>
  )
}

export default App
