import { useState, type FormEvent, type ReactNode } from 'react'
import { AuditModule } from './AuditModule'

const updated = '2026 Güncellemesi'
const Arrow = () => <span aria-hidden="true">↗</span>
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
)

const BrandLogo = () => (
  <a className="brand-logo" href="/" title="ChatGPT Ads Marketing - By Overseas Marketing">
    <div className="brand-logo-badge">
      <img src="/images/chatgpt-green.webp" alt="ChatGPT" className="brand-logo-img" width="30" height="30" />
    </div>
    <div className="brand-logo-text">
      <div className="brand-logo-top">
        <span className="brand-logo-title">CHATGPT <span className="brand-logo-accent">ADS</span></span>
        <span className="brand-logo-pill">MARKETING</span>
      </div>
      <div className="brand-logo-bottom">
        <span>BY OVERSEAS MARKETING</span>
        <span className="brand-logo-dot">●</span>
      </div>
    </div>
  </a>
)

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <BrandLogo />
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav">
        Menü
      </button>
      <nav id="main-nav" className={open ? 'nav open' : 'nav'}>
        <a href="/yapay-zekada-reklam-ajansi/">Reklam Ajansı</a>
        <a href="/chatgpt-reklamlari/">ChatGPT Ads Yönetimi</a>
        <a href="/chatgpt-reklam-verme/">ChatGPT’de Reklam</a>
        <a href="/blog/yapay-zekada-reklam-nasil-verilir/">Nasıl Reklam Verilir?</a>
        <a href="/chatgpt-reklam-fiyatlari/">Reklam Fiyatları</a>
        <a href="/chatgpt-reklamlari-turkiye/">Türkiye Erişimi</a>
        <a href="/geo-yapay-zeka-gorunurlugu/">GEO Görünürlük</a>
        <a href="/blog/">Kaynaklar</a>
        <a className="nav-cta" href="/#ucretsiz-analiz">
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
          <h2>Müşteriniz yapay zekâda ararken<br />markanız doğru bağlamda yer alsın.</h2>
        </div>
        <a className="button primary" href="/iletisim/">
          İlk Test Planını Çıkaralım <Arrow />
        </a>
      </div>
      <div className="footer-grid">
        <div>
          <div style={{ marginBottom: '1rem' }}>
            <BrandLogo />
          </div>
          <p>ChatGPT Ads kampanya yönetimi, yapay zekâ reklam stratejisi ve GEO (Generative Engine Optimization) danışmanlığı.</p>
          <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem', lineHeight: 1.5 }}>
            Yapay Zekâda Reklam, Overseas Marketing tarafından sunulan bağımsız reklam yönetimi ve GEO danışmanlığı servisidir. OpenAI veya ChatGPT'nin resmî iş ortağı veya temsilcisi değildir.
          </p>
          <a href="tel:+905363197697">0536 319 76 97</a>
        </div>
        <div>
          <strong>Hizmetler</strong>
          <a href="/yapay-zekada-reklam-ajansi/">Yapay Zekada Reklam Ajansı</a>
          <a href="/chatgpt-reklamlari/">ChatGPT Ads Yönetimi</a>
          <a href="/chatgpt-reklam-verme/">ChatGPT’de Reklam Nasıl Verilir?</a>
          <a href="/blog/yapay-zekada-reklam-nasil-verilir/">Yapay Zekada Reklam Nasıl Verilir?</a>
          <a href="/chatgpt-reklam-fiyatlari/">ChatGPT Reklam Fiyatları</a>
          <a href="/chatgpt-reklamlari-turkiye/">ChatGPT Reklamları Türkiye</a>
          <a href="/geo-yapay-zeka-gorunurlugu/">GEO Organik Görünürlük</a>
          <a href="/yapay-zeka-platformlarinda-reklam/">AI Reklam Platformları</a>
        </div>
        <div>
          <strong>Şirket</strong>
          <a href="/hakkimizda/">Hakkımızda</a>
          <a href="/blog/">Bilgi Merkezi</a>
          <a href="/iletisim/">İletişim & Teklif</a>
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
        <span>Son Kontrol & Güncelleme: 23 Eylül 2026</span>
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

const faqs = [
  ['ChatGPT\'de doğrudan reklam vermek mümkün mü? Reklam nasıl verilir?', 'Evet. Uygun reklamverenler ChatGPT reklamlarını OpenAI Ads Manager Beta üzerinden oluşturup yönetebilir. OpenAI’nin 23 Eylül 2026’da kontrol edilen ülke listesinde Türkiye self servis erişime açık görünmektedir. Hesap ve kampanya uygunluğu, işletme ülkesi ve reklam politikaları ayrıca değerlendirilir. ChatGPT’nin kullanıcı sohbet ekranında "reklam ver" düğmesi aramak yerine ads.openai.com reklamveren paneli kullanılır.'],
  ['ChatGPT reklamı ile organik cevap (GEO) aynı şey midir?', 'Hayır. ChatGPT reklamı, yanıttan ayrı ve sponsorlu olarak açıkça etiketlenen ücretli alandır. Reklam satın almak ChatGPT’nin organik cevabını veya marka tavsiyesini kesinlikle değiştirmez. GEO çalışmaları ise sitenizin taranabilirliğini, açıklığını ve kaynak değerini geliştirmeyi hedefler; organik öneri garantisi vermez.'],
  ['ChatGPT reklam maliyeti ve bütçesi nasıl belirlenir?', 'ChatGPT Ads bütçesi iki temel bileşenden oluşur: Doğrudan OpenAI Ads Manager üzerinden harcanan medya bütçesi (tıklama ve gösterim maliyeti) ile ajansın strateji, context hints, kreatif testleri ve dönüşüm ölçümünü kapsayan yönetim hizmet bedeli. Minimum test bütçesi ve sektör ortalamaları hedefinize göre planlanır.'],
  ['Context hints (Bağlam İpuçları) nedir ve nasıl çalışır?', 'Context hints, klasik arama anahtar kelimelerinden farklı olarak ürününüzün veya hizmetinizin kimler için, hangi durumda ve hangi problem için faydalı olduğunu doğal dille açıklayan bağlamsal ipuçlarıdır. Kesin eşleşme veya gösterim garantisi vermez; yapay zekânın doğru kullanıcı arama niyetini kavramasına rehberlik eder.'],
  ['OpenAI Ads Manager hesabının mülkiyeti kime ait olur?', 'Hesap ve veriler tamamen işletmenizin tüzel kişiliğine ait olarak açılır. Ajansımız yönetici veya iş ortağı erişimiyle kampanyaları kurar, optimize eder ve raporlar; verileriniz ve hesap sahipliğiniz sizde kalır.']
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

const aiLogos = [
  { name: 'ChatGPT', logo: '/images/logos/chatgpt.svg', provider: 'OpenAI' },
  { name: 'Google Gemini', logo: '/images/logos/gemini.svg', provider: 'Google' },
  { name: 'Claude', logo: '/images/logos/claude.svg', provider: 'Anthropic' },
  { name: 'Perplexity', logo: '/images/logos/perplexity.svg', provider: 'Perplexity AI' },
  { name: 'DeepSeek', logo: '/images/logos/deepseek.svg', provider: 'DeepSeek' },
  { name: 'Kimi', logo: '/images/logos/kimi.svg', provider: 'Moonshot AI' },
  { name: 'Manus', logo: '/images/logos/manus.svg', provider: 'Manus AI' },
  { name: 'Grok', logo: '/images/logos/grok.svg', provider: 'xAI' },
  { name: 'Copilot', logo: '/images/logos/copilot.svg', provider: 'Microsoft' },
  { name: 'Meta AI', logo: '/images/logos/meta-ai.svg', provider: 'Meta' },
  { name: 'Hugging Face', logo: '/images/logos/huggingface.svg', provider: 'Hugging Face' },
  { name: 'Qwen', logo: '/images/logos/qwen.svg', provider: 'Alibaba Cloud' },
]

function AILogoMarquee() {
  return (
    <section className="ai-marquee-section" aria-label="Yapay Zekâ ve Dil Modelleri Ekosistemi">
      <div className="ai-marquee-header">
        <span className="ai-marquee-badge">TÜM YAPAY ZEKÂ MODELLERİNDE REKLAM & GEO</span>
        <h2 className="ai-marquee-title">
          Tüm Büyük Dil Modelleri ve Yapay Zekâ Arama Motorlarında Markanızı Konumlandırıyoruz
        </h2>
        <p className="ai-marquee-sub">
          Müşterilerinizin kullandığı 12 küresel yapay zekâ platformunda tavsiye edilme, context hints ve sponsorlu görünürlük altyapısı.
        </p>
      </div>

      <div className="ai-marquee-viewport">
        <div className="ai-marquee-track">
          {/* Çift set kesintisiz sonsuz döngü (infinite seamless loop) sağlar */}
          {[...aiLogos, ...aiLogos].map((item, idx) => (
            <div key={`${item.name}-${idx}`} className="ai-logo-card">
              <div className="ai-logo-icon-wrap">
                <img
                  src={item.logo}
                  alt={`${item.name} Logo`}
                  className="ai-logo-img"
                  loading="lazy"
                />
              </div>
              <div className="ai-logo-meta">
                <span className="ai-logo-name">{item.name}</span>
                <span className="ai-logo-provider">{item.provider}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Home() {
  const [promptText, setPromptText] = useState('')

  const handlePromptSubmit = (e: FormEvent) => {
    e.preventDefault()
    const query = promptText || 'ChatGPT Ads kampanya planı oluşturmak istiyorum'
    window.location.href = `/iletisim/?soru=${encodeURIComponent(query)}`
  }

  return (
    <Layout>
      <main>
        {/* Vurucu Hero Section */}
        <section className="hero section-pad">
          {/* Marka İlişkisi Açıklaması */}
          <div className="openai-partner-lockup" title="ChatGPT Reklamları Danışmanlığı · Overseas Marketing">
            <div className="lockup-brand-side">
              <img src="/images/chatgpt-green.webp" alt="ChatGPT" className="lockup-chatgpt-img" />
              <span className="lockup-chatgpt-text">ChatGPT Ads</span>
            </div>
            <div className="lockup-divider" aria-hidden="true" />
            <div className="lockup-partner-side">
              <img src="/images/overseas-siyah.png" alt="Overseas Marketing" className="lockup-overseas-img" />
            </div>
          </div>

          <h1>
            Yapay zekada reklam:<br />
            ChatGPT Ads ve <em>AI görünürlüğü</em>
          </h1>

          <p className="hero-subtitle">
            Müşterileriniz ürün ve hizmetleri yapay zekâ araçlarında da araştırıyor. Markanız için ChatGPT'de sponsorlu reklam kampanyalarını, yapay zekâ yanıtlarında organik görünürlüğü ve AI destekli Google/Meta reklam yönetimini ayrı hedeflerle planlıyoruz. Önce uygun kanalı belirliyor, sonra sonuçları ölçüyoruz.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a className="button primary" href="/iletisim/">Markam için reklam planı iste <Arrow /></a>
            <a className="button secondary" href="/blog/yapay-zekada-reklam-nasil-verilir/">Yapay zekada reklam nasıl verilir? <Arrow /></a>
          </div>

          {/* ChatGPT App Screen Card */}
          <div className="hero-mockup-wrapper">
            <div className="chatgpt-app-card">
              {/* Header Bar */}
              <div className="chatgpt-card-header">
                <button type="button" className="card-header-btn" title="Menü">
                  <MenuIcon />
                </button>
                <div className="card-header-title">
                  <span>ChatGPT Ads Manager</span>
                  <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>&gt;</span>
                </div>
                <button type="button" className="card-header-btn" title="Yeni Kampanya">
                  <NewChatIcon />
                </button>
              </div>

              {/* Chat Body */}
              <div className="chatgpt-card-body">
                <div className="chatgpt-user-pill">
                  ChatGPT'de markam için sponsorlu reklam başlatmak ve AI aramalarında görünür olmak istiyorum.
                </div>

                <div className="chatgpt-bot-row">
                  <div className="chatgpt-bot-avatar">
                    <img src="/images/chatgpt-green.webp" alt="ChatGPT" width="24" height="24" style={{ borderRadius: '50%', display: 'block' }} />
                  </div>
                  <div className="chatgpt-bot-text">
                    ChatGPT'de markanızı konumlandırmak için <strong>OpenAI Ads Manager Beta</strong> üzerinden sponsorlu reklam kampanyaları kuruyor ve niyet odaklı <strong>context hints (bağlam ipuçları)</strong> tanımlıyoruz. Ayrı bir çalışma olarak organik yanıt otoritesi için <a href="/geo-yapay-zeka-gorunurlugu/" className="chatgpt-bot-highlight">GEO (Generative Engine Optimization)</a> süreçlerini yönetiyoruz.
                  </div>
                </div>
              </div>

              {/* Card Footer (Input & Tools) */}
              <div className="chatgpt-card-footer">
                <form className="chatgpt-card-input-box" onSubmit={handlePromptSubmit}>
                  <input
                    type="text"
                    placeholder="Sektörünüzü veya kampanya hedefinizi yazın..."
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                  />
                  <button type="submit" className="chatgpt-card-send" title="Gönder">
                    <SendIcon />
                  </button>
                </form>

                <div className="chatgpt-tools-row">
                  <button type="button" className="chatgpt-tool-btn" onClick={() => setPromptText('ChatGPT reklam bütçesi ve fiyatları')}>
                    <span style={{ fontWeight: 700, fontSize: '1rem' }}>+</span> Fiyatlar
                  </button>
                  <button type="button" className="chatgpt-tool-btn" onClick={() => setPromptText('Türkiye Ads Manager hesap açılışı')}>
                    <GlobeIcon /> Türkiye
                  </button>
                  <button type="button" className="chatgpt-tool-btn" onClick={() => setPromptText('Context hints stratejisi')}>
                    <LightbulbIcon /> Strateji
                  </button>
                  <button type="button" className="chatgpt-tool-btn" style={{ padding: '0.3rem' }} title="Sesle Yaz">
                    <MicIcon />
                  </button>
                  <VoiceModeIcon />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-bottom-actions">
            <a className="button primary" href="/iletisim/">
              ChatGPT Reklam Planı İsteyin <Arrow />
            </a>
            <a className="button secondary" href="#ucretsiz-analiz">
              Ücretsiz AI Görünürlük Ön Analizi <Arrow />
            </a>
          </div>
        </section>

        {/* 12 AI Modeli Kayan Logo Slider */}
        <AILogoMarquee />

        {/* Yapay Zekâ Görünürlük Analizi Modülü */}
        <section id="ucretsiz-analiz" className="audit-home-section">
          <AuditModule />
        </section>

        {/* 1. BÖLÜM: Yapay Zekâda Reklam Nedir? */}
        <section className="section-pad">
          <div className="section-header">
            <span className="section-tag">Temel Tanım & Kapsam</span>
            <h2>Yapay Zekâda Reklam Nedir?</h2>
            <p>
              Yapay zekâda reklam; kullanıcıların üretken modellerle (ChatGPT, Perplexity, Copilot vb.) gerçekleştirdiği diyalog ve arama oturumlarında, kullanıcının o anki problemine ve arama niyetine uygun olarak sunulan <strong>bağlamsal sponsorlu alanlardır</strong>.
            </p>
          </div>

          <div style={{ maxWidth: '880px', margin: '0 auto', color: 'var(--chat-text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            <p>
              Yapay zekâ reklamcılığı iki ayrı kavramla sıkça karıştırılmaktadır:
            </p>
            <div className="difference-box" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
              <div className="diff-card">
                <span className="tag">Medya Satın Alma (AI Search Ads)</span>
                <h3 style={{ fontSize: '1.2rem', margin: '0.6rem 0' }}>Yapay Zekâ Platformunda Reklam Vermek</h3>
                <p>Kullanıcı ChatGPT veya AI arama motoruna soru sorarken, cevabın hemen altında veya yanında açıkça "Sponsorlu" etiketli reklamınızın yer almasıdır. Doğrudan OpenAI Ads Manager gibi resmi reklamveren panelleri üzerinden yönetilir.</p>
              </div>
              <div className="diff-card">
                <span className="tag">Kreatif Üretimi (AI Creative)</span>
                <h3 style={{ fontSize: '1.2rem', margin: '0.6rem 0' }}>Yapay Zekâ ile Reklam Hazırlamak</h3>
                <p>Google Ads, Meta veya TV reklamlarınız için görsel, metin veya video üretirken yapay zekâ araçlarından faydalanmaktır. Bu bir medya kanalı değil, içerik üretim yöntemidir.</p>
              </div>
            </div>
            <p>
              <em>Not:</em> ChatGPT, Google AI Overviews ve Microsoft Copilot gibi platformlarda reklam envanteri, formatlar ve reklamveren erişim kuralları ülkeye, sektöre ve ürün güncellemelerine göre dinamik olarak değişmektedir.
            </p>
          </div>
        </section>

        {/* 2. BÖLÜM: ChatGPT’de Reklam Vermek Mümkün mü? */}
        <section className="section-pad" style={{ background: 'var(--chat-dark)', borderTop: '1px solid var(--chat-border)', borderBottom: '1px solid var(--chat-border)' }}>
          <div className="section-header">
            <span className="section-tag">Resmi Erişim Durumu</span>
            <h2>ChatGPT’de Reklam Vermek Mümkün mü?</h2>
            <p>
              <strong>Evet.</strong> Uygun reklamverenler ChatGPT reklamlarını <strong>OpenAI Ads Manager Beta</strong> üzerinden oluşturup yönetebilmektedir.
            </p>
          </div>

          <div style={{ maxWidth: '880px', margin: '0 auto', color: 'var(--chat-text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            <div className="highlight-box" style={{ padding: '1.5rem', borderRadius: '14px', background: 'rgba(16, 163, 127, 0.08)', border: '1px solid rgba(16, 163, 127, 0.25)', marginBottom: '1.8rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Doğrulama Notu (23 Eylül 2026):</h3>
              <p style={{ margin: 0, color: '#d1d5db' }}>
                OpenAI'nin resmi yardım dokümanlarında yer alan Ads Manager kullanılabilirlik listesinde Türkiye, self-servis erişim için "kullanılabilir" olarak listelenmektedir. Kullanıcıların sohbet arayüzünde "reklam ver" butonu aramak yerine, doğrudan reklamveren portalı üzerinden hesap yetkilendirmesi yapması gerekmektedir.
              </p>
            </div>

            <p>
              Türkiye'den kampanya başlatırken işletmenin faturalandırılacağı tüzel kişilik, vergi levhası doğrulaması, hedef coğrafya ve OpenAI reklam politikalarına (Sağlık, finans, alkol vb. kısıtlamalar) uygunluk ayrıca incelenir. Ajansımız bu süreçte işletme uygunluğunuzu ve hesap açılışınızı uçtan uca yürütür.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="/chatgpt-reklamlari-turkiye/" className="text-link" style={{ fontSize: '1rem', fontWeight: 600 }}>
                ChatGPT Reklamları Türkiye Rehberini İnceleyin <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* 3. BÖLÜM: Yapay Zekâ Reklam Ajansı Olarak Ne Yapıyoruz? */}
        <section className="section-pad">
          <div className="section-header">
            <span className="section-tag">Hizmet Kapsamı</span>
            <h2>Yapay Zekâ Reklam Ajansı Olarak Ne Yapıyoruz?</h2>
            <p>Yalnızca bütçe harcamak için değil; doğru niyet, çalışan açılış sayfaları ve ölçülebilir dönüşüm için 4 aşamalı yönetim modeli sunuyoruz.</p>
          </div>

          <div className="service-grid">
            <div className="service-card">
              <span className="service-number">01 / AŞAMA</span>
              <h3>Uygunluk & Kanal Analizi</h3>
              <p>Sektörünüzün OpenAI ve AI platform politikalarına uygunluğu incelenir; doğru kanal karması ve bütçe senaryoları belirlenir.</p>
              <div style={{ fontSize: '0.82rem', color: '#10a37f', marginTop: '0.8rem', fontWeight: 600 }}>Çıktı: Reklam Uygunluk Raporu</div>
            </div>

            <div className="service-card">
              <span className="service-number">02 / AŞAMA</span>
              <h3>Kampanya & Context Hints Mimarisi</h3>
              <p>Geleneksel anahtar kelimeler yerine, ürününüzün çözüm sunduğu müşteri problemlerini doğal dille ifade eden bağlamsal ipuçları kurgulanır.</p>
              <div style={{ fontSize: '0.82rem', color: '#10a37f', marginTop: '0.8rem', fontWeight: 600 }}>Çıktı: Context Hints Matrisi</div>
            </div>

            <div className="service-card">
              <span className="service-number">03 / AŞAMA</span>
              <h3>Açılış Sayfası & Kreatif Testi</h3>
              <p>ChatGPT'den tıklayan yüksek niyetli kullanıcıyı doğrudan satın alma veya form doldurmaya yönlendiren hızlı, mobil uyumlu landing page'ler hazırlanır.</p>
              <div style={{ fontSize: '0.82rem', color: '#10a37f', marginTop: '0.8rem', fontWeight: 600 }}>Çıktı: Optimize Açılış Sayfaları</div>
            </div>

            <div className="service-card">
              <span className="service-number">04 / AŞAMA</span>
              <h3>Dönüşüm Ölçümü & Raporlama</h3>
              <p>UTM parametreleri, Conversions API, CRM entegrasyonu ve gerçek satış getirisini (ROAS) şeffaf gösteren haftalık analitik paneller kurulur.</p>
              <div style={{ fontSize: '0.82rem', color: '#10a37f', marginTop: '0.8rem', fontWeight: 600 }}>Çıktı: Performans Dashboard'u</div>
            </div>
          </div>
        </section>

        {/* 4. BÖLÜM: Sponsorlu Reklam vs Organik GEO Farkı */}
        <section className="section-pad" style={{ background: 'var(--chat-dark)', borderTop: '1px solid var(--chat-border)', borderBottom: '1px solid var(--chat-border)' }}>
          <div className="section-header">
            <span className="section-tag">Stratejik Ayrım</span>
            <h2>Sponsorlu Reklam ile Organik AI Görünürlüğünün (GEO) Farkı</h2>
            <p>ChatGPT reklamı satın almak yapay zekânın organik cevabını etkilemez. İki kanalın farkını net anlayarak doğru bütçe ayırın.</p>
          </div>

          <div style={{ maxWidth: '940px', margin: '0 auto', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem', color: '#d1d5db' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.15)', color: '#ffffff' }}>
                  <th style={{ padding: '1rem' }}>Kriter</th>
                  <th style={{ padding: '1rem', color: '#10a37f' }}>ChatGPT Ads (Sponsorlu)</th>
                  <th style={{ padding: '1rem', color: '#60a5fa' }}>GEO (Organik AI Görünürlüğü)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600, color: '#ffffff' }}>Yerleşim Türü</td>
                  <td style={{ padding: '1rem' }}>Cevabın yanında veya altında "Sponsorlu" etiketli reklam kartı</td>
                  <td style={{ padding: '1rem' }}>Yapay zekânın doğal yanıtı içinde kaynak referansı / dipnot</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600, color: '#ffffff' }}>Kontrol Derecesi</td>
                  <td style={{ padding: '1rem' }}>Yüksek (Başlık, metin, link ve bütçe doğrudan reklamveren kontrolünde)</td>
                  <td style={{ padding: '1rem' }}>Dolaylı (Modelin indekslediği içerik kalitesine ve güven sinyallerine bağlı)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600, color: '#ffffff' }}>Etki Başlangıcı</td>
                  <td style={{ padding: '1rem' }}>Hemen (Kampanya onaylandığı an yayın başlar)</td>
                  <td style={{ padding: '1rem' }}>Orta-Uzun Vade (Modellerin tarama, indeksleme ve güven döngüsü)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600, color: '#ffffff' }}>Garantisi Var mı?</td>
                  <td style={{ padding: '1rem' }}>Tıklama/gösterim bütçesi kadar kesin yayın garantisi</td>
                  <td style={{ padding: '1rem' }}>Kesin önerilme garantisi verilemez; bulunabilirlik ve alıntılanabilirlik artırılır</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. BÖLÜM: Hangi İşletmeler İçin Uygundur? */}
        <section className="section-pad">
          <div className="section-header">
            <span className="section-tag">Uygunluk Kriterleri</span>
            <h2>ChatGPT Reklamları Hangi İşletmeler İçin Uygundur?</h2>
            <p>Her işletme için doğru kanal olmayabilir. Yüksek arama niyeti taşıyan sektörler en yüksek dönüşümü alır.</p>
          </div>

          <div className="service-grid">
            <div className="service-card">
              <h3>B2B Yazılım & Kurumsal Hizmetler</h3>
              <p>Kullanıcıların "X problemine en uygun yazılım hangisi?", "CRM maliyetleri neler?" gibi doğrudan satın alma araştırması yaptığı B2B çözümler.</p>
            </div>
            <div className="service-card">
              <h3>Uzmanlık & Profesyonel Danışmanlık</h3>
              <p>Hukuk, finans, dış ticaret, yönetim ve teknoloji danışmanlığı gibi güven ve uzmanlık odaklı yüksek sepet tutarlı hizmetler.</p>
            </div>
            <div className="service-card">
              <h3>Nitelikli E-Ticaret & Özel Ürünler</h3>
              <p>Karşılaştırmalı alışveriş yapılan, teknik özellikleri sorgulanan ve doğrudan tavsiye aranan niş tüketici ürünleri.</p>
            </div>
            <div className="service-card">
              <h3>Regüle Sektörler & Uygunluk Denetimi</h3>
              <p>Sağlık, medikal, finansal araçlar gibi regülasyona tabi alanlarda OpenAI reklam politikalarına uyumluluk testi zorunludur.</p>
            </div>
          </div>
        </section>

        {/* 6. BÖLÜM: ChatGPT Reklam Maliyeti Nasıl Hesaplanır? */}
        <section className="section-pad" style={{ background: 'var(--chat-dark)', borderTop: '1px solid var(--chat-border)', borderBottom: '1px solid var(--chat-border)' }}>
          <div className="section-header">
            <span className="section-tag">Fiyatlandırma Çerçevesi</span>
            <h2>ChatGPT Reklam Maliyeti Nasıl Hesaplanır?</h2>
            <p>Bütçe şeffaflığı esastır. Medya harcaması ile ajans hizmet bedeli birbirinden tamamen ayrı tutulur.</p>
          </div>

          <div style={{ maxWidth: '880px', margin: '0 auto', color: 'var(--chat-text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: '#171717', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '1.8rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#10a37f', fontWeight: 700 }}>BİLEŞEN 01</span>
                <h3 style={{ color: '#ffffff', margin: '0.6rem 0' }}>Medya Harcaması (OpenAI)</h3>
                <p style={{ fontSize: '0.92rem', color: '#9ca3af' }}>Doğrudan OpenAI Ads Manager hesabınız üzerinden kredi kartı veya faturalandırma ile OpenAI'ye ödenen tıklama/gösterim maliyetidir.</p>
              </div>
              <div style={{ background: '#171717', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '1.8rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#10a37f', fontWeight: 700 }}>BİLEŞEN 02</span>
                <h3 style={{ color: '#ffffff', margin: '0.6rem 0' }}>Ajans Yönetim & Optimizasyon</h3>
                <p style={{ fontSize: '0.92rem', color: '#9ca3af' }}>Kanal uygunluğu, context hints geliştirme, kreatif üretimi, açılış sayfası optimizasyonu ve haftalık raporlamayı içeren ajans hizmet bedelidir.</p>
              </div>
            </div>
            <p>
              Örnek test planlarında aylık medya bütçesi işletmenin hedeflediği lead sayısına göre belirlenir. Kesin fiyat teklifi almadan önce sektörünüzün rekabet hacmini inceliyoruz.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="/chatgpt-reklam-fiyatlari/" className="text-link" style={{ fontSize: '1rem', fontWeight: 600 }}>
                Detaylı ChatGPT Reklam Fiyatları ve Bütçe Rehberi <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* 7. BÖLÜM: Sıkça Sorulan Sorular */}
        <section className="section-pad">
          <div className="faq-grid">
            <div>
              <span className="section-tag">Doğrulanmış Bilgiler</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                ChatGPT ve AI Reklamları Hakkında Sıkça Sorulan Sorular
              </h2>
              <p style={{ color: 'var(--chat-text-secondary)', marginTop: '1rem' }}>
                OpenAI Ads Manager, Türkiye erişimi, context hints ve GEO hakkında net, resmi kaynaklara dayalı yanıtlar.
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

        {/* İletişim & Teklif CTA */}
        <section className="section-pad" style={{ background: 'linear-gradient(135deg, #111111 0%, #171717 100%)', textAlign: 'center' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <span className="section-tag">Hemen Başlayın</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
              ChatGPT Reklamları Markanız İçin Uygun mu?
            </h2>
            <p style={{ color: 'var(--chat-text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Sektörünüzü, hedef pazarınızı ve teklifinizi inceleyelim; kanal uygunluğunu, önerilen ilk kampanyayı ve ölçüm planını birlikte paylaşalım.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a className="button primary" href="/iletisim/">
                ChatGPT Reklam Planı İsteyin <Arrow />
              </a>
              <a className="button secondary" href="https://wa.me/905363197697">
                WhatsApp İle Danışın <Arrow />
              </a>
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

function ChatGPTAdsPage() {
  return (
    <Detail
      eyebrow="Resmî Ads Manager & Performans Yönetimi"
      title="ChatGPT Reklam Ajansı: ChatGPT Ads Kampanya Yönetimi"
      summary="ChatGPT reklamları, kullanıcıların satın alma ve araştırma kararı verdiği konuşma anlarında organik cevaptan ayrı ve sponsorlu etiketli olarak gösterilir. Hesap kurulumundan context hints optimizasyonuna, dönüşüm takibinden GEO sinerjisine kadar tüm süreci uçtan uca yönetiyoruz."
      cta="ChatGPT Reklam Kampanyası Başlatın"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Konuşma ve Karar Anlarında Reklam: ChatGPT Ads Mantığı
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Geleneksel arama motorlarında kullanıcılar kısa anahtar kelimelerle yüzlerce mavi bağlantı arasında gezinir. 
            ChatGPT'de ise kullanıcılar bir problemi çözmek, karmaşık bir satın alma kararını netleştirmek veya bir ürün/hizmet karşılaştırması yapmak için yapay zekâ ile derinlemesine diyalog kurar. 
            ChatGPT Ads, kullanıcının tam bu karar anında ihtiyaç duyduğu ilgili çözümü <strong>sponsorlu</strong> olarak sunar.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Overseas Marketing olarak sunduğumuz <strong>ChatGPT Reklam Ajansı</strong> hizmeti; markanızın yalnızca tıklama almasını değil, yüksek niyetli (high-intent) potansiyel müşterileri doğrudan nitelikli satış ve dönüşüme dönüştürmesini sağlar. Kampanya stratejinizi, hedefleme bağlamını ve ölçüm altyapısını işletmenizin ticari hedeflerine göre kurarız.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#ffffff' }}>
            Context Hints (Bağlam İpuçları) Mimarisi
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, marginBottom: '1.2rem' }}>
            ChatGPT reklamcılığında geleneksel "kelime eşleme" mantığı yerini <strong>Context Hints (Bağlam İpuçları)</strong> sistemine bırakmıştır. Reklamveren olarak sisteme yalnızca anahtar kelime girmek yerine:
          </p>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.2rem' }}>
            <li><strong>Kullanıcı Durumu:</strong> Kullanıcının hangi problem veya karar aşamasında olduğu (Örn: B2B muhasebe yazılımı arayan, ekibini büyüten KOBİ).</li>
            <li><strong>Ürün / Çözüm Kapsamı:</strong> Ürününüzün hangi özel ihtiyacı nasıl çözdüğü ve temel ayırt edici değeri.</li>
            <li><strong>Gereksiz Eşleşmeleri Dışlama:</strong> Yanlış niyetli veya tüketici dışı bağlamlarda reklamın tetiklenmesini engelleyen negatif bağlam kuralları.</li>
          </ul>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Context hints bir gösterim veya birinci sıra garantisi değildir; yapay zekâ modelinin kullanıcı sorusunun semantik bağlamını kavrayıp sizin çözümünüzü en doğru anda önermesini sağlayan yönlendirici rehberdir.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Hizmet Kapsamı ve Teslim Edilecek Çıktılar (Deliverables)
          </h2>
          <div className="table-wrap" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem' }}>Aşama</th>
                  <th style={{ padding: '0.9rem' }}>Hizmet Modülü</th>
                  <th style={{ padding: '0.9rem' }}>Teslim Edilecek Çıktı & Doğrulama</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: 'var(--chat-green)' }}>01. Kurulum</td>
                  <td style={{ padding: '0.9rem' }}>Hesap & Uygunluk Doğrulaması</td>
                  <td style={{ padding: '0.9rem' }}>OpenAI Ads Manager şirket hesabı, tüzel kişilik onayı, faturalandırma ve ekip erişim yetkileri.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: 'var(--chat-green)' }}>02. Strateji</td>
                  <td style={{ padding: '0.9rem' }}>Context Hints Kütüphanesi</td>
                  <td style={{ padding: '0.9rem' }}>Hedeflenen arama niyetleri, negatif bağlam filtreleri ve sektörünüze özel bağlam haritası.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: 'var(--chat-green)' }}>03. Kreatif</td>
                  <td style={{ padding: '0.9rem' }}>Reklam Mesajları & Format Testi</td>
                  <td style={{ padding: '0.9rem' }}>Konuşma akışına doğal uyum sağlayan, abartısız ve marka rehberine tam uyumlu reklam metin varyasyonları.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: 'var(--chat-green)' }}>04. Ölçüm</td>
                  <td style={{ padding: '0.9rem' }}>Pixel, CAPI & UTM İzleme</td>
                  <td style={{ padding: '0.9rem' }}>Web sitenizde satın alma ve lead eventlerinin OpenAI sunucu dönüşüm API'si ve CRM ile entegrasyonu.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: 'var(--chat-green)' }}>05. Yönetim</td>
                  <td style={{ padding: '0.9rem' }}>Haftalık Optimizasyon & Rapor</td>
                  <td style={{ padding: '0.9rem' }}>Tıklama başı maliyet (TBM), lead kalitesi, ROAS ve öğrenme verisi analiz raporu.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '14px', padding: '1.8rem' }}>
          <h3 style={{ color: '#f87171', fontSize: '1.2rem', marginBottom: '0.8rem', fontWeight: 600 }}>
            Şeffaflık ve Etik İlkemiz: Sponsorlu Reklam vs Organik Cevap
          </h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            OpenAI reklam politikalarına göre sponsorlu reklamlar, modelin tarafsız ve organik yanıtlarından tamamen ayrı tutulur. 
            ChatGPT'de reklam vermek modelin organik yanıtını, kaynak seçimini veya tarafsız tavsiyelerini <strong>kesinlikle değiştirmez</strong>. 
            Organik cevaplarda kaynak olmak için bağımsız <strong>GEO (Generative Engine Optimization)</strong> danışmanlığı yürütülmelidir. 
            Ajansımız bu iki kulvarı hiçbir zaman birbirine karıştırmaz ve müşterilerine gerçek dışı sıralama vaadinde bulunmaz.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Hesap Mülkiyeti ve Bütçe Çerçevesi
          </h2>
          <div className="compare-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="compare-card" style={{ background: 'var(--chat-surface)', padding: '1.8rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: '#ffffff', marginBottom: '0.8rem', fontSize: '1.2rem' }}>%100 Hesap Mülkiyeti</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.6, fontSize: '0.92rem' }}>
                OpenAI Ads Manager hesabı doğrudan firmanızın tüzel kişiliği adına açılır. Reklam hesabının, kampanya verilerinin ve piksel sinyallerinin yegâne sahibi siz olursunuz. Ajansımız yönetici / uzman yetkisiyle hesabı yönetir.
              </p>
            </div>
            <div className="compare-card" style={{ background: 'var(--chat-surface)', padding: '1.8rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: '#ffffff', marginBottom: '0.8rem', fontSize: '1.2rem' }}>Şeffaf Bütçe Ayrımı</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.6, fontSize: '0.92rem' }}>
                Medya bütçesi doğrudan kendi kurumsal kredi kartınızla OpenAI platformuna ödenir. Ajansımıza ise sadece kampanya kurgusu, context hints optimizasyonu ve analitik yönetim hizmet bedeli ödersiniz; bütçenizde gizli kesinti olmaz.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Sıkça Sorulan Sorular
          </h2>
          <div className="faq-list">
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Türkiye'deki işletmeler ChatGPT reklamı verebilir mi?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Evet. 23 Eylül 2026 itibarıyla Türkiye, OpenAI Ads Manager Beta self-servis kullanılabilir ülke listesinde yer almaktadır. İşletme doğrulamasını tamamlayan Türk şirketleri uygun kampanyaları yayına alabilir.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>ChatGPT reklamları nerede ve nasıl görüntülenir?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Reklamlar, kullanıcının sorduğu soru veya yürüttüğü araştırma konusuyla ilgili bir bağlam oluştuğunda, konuşma ekranında model cevabının yanında veya altında "Sponsorlu / Ad" ibaresiyle net bir şekilde işaretlenerek gösterilir.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>İlk test kampanyası için önerilen süre ve bütçe nedir?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Yapay zekâ algoritmalarının bağlamı öğrenmesi ve dönüşüm sinyallerini toplaması için ilk test sürecinin en az 30-45 gün sürdürülmesi önerilir. Sektörünüze göre minimum pilot medya bütçesi strateji görüşmesinde belirlenir.
              </p>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Markanız İçin ChatGPT Ads Kampanyası Başlatalım</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Ürün veya hizmetinizin ChatGPT ekosistemindeki arama niyetlerini çıkaralım, context hints yapısını kuralım ve kontrollü pilot testinizi başlatalım.
          </p>
          <a className="button primary" href="/iletisim/">Hemen Strateji Görüşmesi Planlayın <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function ChatGPTGuidePage() {
  const steps = [
    { title: 'Uygunluk ve Ülke Doğrulaması', desc: 'İşletmenizin OpenAI Ads Manager Beta politikalarına ve Türkiye self-servis erişim listesine uygunluğunu ads.openai.com üzerinden kontrol edin.' },
    { title: 'Ads Manager İşletme Hesabı Kurulumu', desc: 'Resmî kurumsal e-posta, şirket tüzel kişilik bilgileri, vergi dairesi / vergi kimlik numarası ve faturalandırma profilinizi eksiksiz tanımlayın.' },
    { title: 'Kampanya Hedefi ve Dönüşüm Hunisi', desc: 'Tıklama (Trafik), Nitelikli Lead (Form) veya Doğrudan Satış hedeflerinden işletmenizin ticari yapısına uygun olanı seçin.' },
    { title: 'Context Hints (Doğal Bağlam İpuçları) Tasarımı', desc: 'Klasik arama motoru kelime yığması yerine; müşterinizin hangi problem anında, ne amaçla ve hangi koşulda ürününüze ihtiyaç duyduğunu doğal dille tanımlayın.' },
    { title: 'Negatif Bağlam ve Uygunsuz Filtreleri', desc: 'Bütçe israfını önlemek için reklamınızın kesinlikle görünmemesi gereken alakasız, tüketici dışı veya akademik sorguları negatif bağlam olarak ekleyin.' },
    { title: 'Konuşma Odaklı Reklam Metinleri', desc: 'Kullanıcının diyalog akışını kesmeyen, abartılı vaatler içermeyen, açık ve net değer önerisi sunan sponsorlu mesaj varyasyonları oluşturun.' },
    { title: 'Açılış Sayfası (Landing Page) Uyumu', desc: 'ChatGPT kullanıcısının reklam metninde gördüğü net vaatle doğrudan uyuşan, hızlı açılan ve mobil uyumlu bir karşılama sayfası hazırlayın.' },
    { title: 'Pixel, Conversions API ve UTM Takibi', desc: 'Satın alma veya lead dönüşümlerini geriye doğru beslemek üzere OpenAI Pikseli ve CAPI altyapısını kurun; analiz araçları için UTM şablonlarını ekleyin.' },
    { title: 'Öğrenme Verisi Analizi ve GEO ile Büyüme', desc: 'İlk 30-45 günlük test verilerini inceleyerek kazanan bağlamları ölçekleyin; eş zamanlı olarak markanızı organik GEO ile güçlendirin.' }
  ]

  return (
    <Detail
      eyebrow="2026 Kapsamlı Uygulama Rehberi"
      title="ChatGPT’de Reklam Nasıl Verilir? Adım Adım 2026 Rehberi"
      summary="ChatGPT'de reklam vermek isteyen işletmeler için resmî OpenAI Ads Manager Beta panelinden kampanya kurulumuna, context hints yazımından bütçe yönetimi ve dönüşüm izlemeye kadar tüm aşamaları adım adım açıklıyoruz."
      cta="Rehbere Göre Kampanyamızı Kuralım"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            1. ChatGPT Reklam Ekosistemine Giriş: Doğru Panel Neresidir?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            En sık yapılan aramalardan biri <em>"chat gpt de reklam ver"</em> veya <em>"ChatGPT reklam butonu nerede?"</em> sorusudur. 
            Önemli bir düzeltmeyle başlayalım: ChatGPT'nin son kullanıcı sohbet arayüzünde (chatgpt.com) bir "reklam ver" butonu bulunmaz. 
            Reklamlar, OpenAI'nin resmî reklamveren yönetim paneli olan <strong>OpenAI Ads Manager (ads.openai.com)</strong> üzerinden oluşturulur ve yönetilir.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            23 Eylül 2026 resmi kontrolleri itibarıyla Türkiye, OpenAI Ads Manager Beta programında self-servis erişime uygun ülkeler arasında yer almaktadır. 
            Bu durum, Türkiye merkezli işletmelerin bir aracıya veya global bir temsilciye bağımlı olmadan kendi şirket hesaplarıyla doğrudan reklam açabileceği anlamına gelir.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            2. Adım Adım 9 Aşamalı Kampanya Kurulum Süreci
          </h2>
          <div className="timeline">
            {steps.map((s, idx) => (
              <div key={s.title} style={{ marginBottom: '1.5rem', background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.6rem' }}>
                  <span style={{ background: 'var(--chat-green)', color: '#ffffff', width: '28px', height: '28px', borderRadius: '50%', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: '0.85rem' }}>
                    {idx + 1}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#ffffff', margin: 0 }}>{s.title}</h3>
                </div>
                <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, margin: 0, paddingLeft: '2.5rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#ffffff' }}>
            3. Context Hints (Bağlam İpuçları) Nasıl Yazılır?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, marginBottom: '1.2rem' }}>
            Google Ads'te anahtar kelime eşleme kullanırken ("muhasebe programı" vb.), ChatGPT Ads'te yapay zekâya hedef kitlenizin karar bağlamını anlatırsınız.
          </p>
          <div style={{ background: 'var(--chat-bg-secondary)', padding: '1.2rem', borderRadius: '10px', borderLeft: '4px solid var(--chat-green)', marginBottom: '1.2rem' }}>
            <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.4rem' }}>Doğru Context Hint Örneği:</strong>
            <p style={{ color: 'var(--chat-text-secondary)', fontStyle: 'italic', margin: 0 }}>
              "Türkiye'de e-fatura ve stok takibi yapmak isteyen, 5-50 çalışana sahip küçük ve orta ölçekli işletmelerin bulut tabanlı yazılım arayışları veya karşılaştırma talepleri."
            </p>
          </div>
          <div style={{ background: 'var(--chat-bg-secondary)', padding: '1.2rem', borderRadius: '10px', borderLeft: '4px solid #ef4444' }}>
            <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.4rem' }}>Hatalı Context Hint Örneği:</strong>
            <p style={{ color: 'var(--chat-text-secondary)', fontStyle: 'italic', margin: 0 }}>
              "en ucuz muhasebe programı, en iyi yazılım satın al, hemen tıkla" (Kuru anahtar kelimeler yapay zekânın doğru bağlamı kurmasını engeller).
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            4. ChatGPT'de Reklam Verirken En Sık Yapılan 4 Hata
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <strong style={{ color: '#f87171', display: 'block', marginBottom: '0.5rem' }}>1. Organik Tavsiyeyi Değiştireceğini Sanmak</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                Reklam yalnızca sponsorlu alanda görünür; yapay zekânın organik cevabını etkilemez. Organik öneri için GEO gerekir.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <strong style={{ color: '#f87171', display: 'block', marginBottom: '0.5rem' }}>2. Dönüşüm API'sini (CAPI) Kurmamak</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                Sadece tıklama takibi yapmak yapay zekâ modelinin hangi kullanıcının gerçek müşteri olduğunu öğrenmesini engeller.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <strong style={{ color: '#f87171', display: 'block', marginBottom: '0.5rem' }}>3. Yanıltıcı / Genel Açılış Sayfası</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                Kullanıcıyı doğrudan anasayfaya yönlendirmek terk oranını artırır; özel bağlamı karşılayan bir sayfa olmalıdır.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <strong style={{ color: '#f87171', display: 'block', marginBottom: '0.5rem' }}>4. Erken Karar Verip Kampanyayı Kapatmak</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                İlk birkaç günde yeterli veri birikmeden yapılan müdahaleler modelin öğrenme algoritmasını sıfırlar.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Sıkça Sorulan Sorular
          </h2>
          <div className="faq-list">
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>OpenAI Ads Manager'a nasıl kaydolabilirim?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                ads.openai.com adresinden kurumsal e-posta adresinizle giriş yaparak şirket profilinizi ve fatura bilgilerinizi girip beta erişim sürecini başlatabilirsiniz.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>ChatGPT reklamlarında minimum bütçe zorunluluğu var mı?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                OpenAI platformunda katı bir minimum harcama eşiği olmamakla birlikte, modelin karar anlarını tespit edip verimli teklif verebilmesi için aylık belirli bir kontrollü pilot bütçe önerilir.
              </p>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Rehberdeki Adımları Birlikte Hayata Geçirelim</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Hesap açılışından bağlam tasarımı ve piksel entegrasyonuna kadar tüm aşamaları uzman ekibimizle eksiksiz tamamlayın.
          </p>
          <a className="button primary" href="/iletisim/">Kurulum Desteği Alın <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function ChatGPTPricePage() {
  return (
    <Detail
      eyebrow="2026 Fiyatlandırma ve Bütçe Rehberi"
      title="ChatGPT Reklam Fiyatları 2026: TBM, Bütçe ve Yönetim Maliyeti"
      summary="ChatGPT'de reklam vermenin gerçek maliyetleri nasıl hesaplanır? OpenAI Ads Manager medya bütçesi dinamikleri, TBM (CPC) açık artırması, ajans yönetim modelleri ve yatırım getirisi (ROAS) analizi."
      cta="Fiyatlandırma & Teklif Alın"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            ChatGPT Reklam Maliyeti Nasıl Hesaplanır?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            ChatGPT reklam maliyetleri, sabit bir fiyat listesine dayanmaz; Google ve Meta reklamlarında olduğu gibi <strong>açık artırma (auction-based)</strong> ve bağlam rekabeti esasına göre çalışır. 
            Toplam maliyet iki temel kalemden oluşur:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{ background: 'var(--chat-surface)', padding: '1.8rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.3rem', marginBottom: '0.8rem' }}>1. Medya Bütçesi (OpenAI)</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Tıklama başı maliyet (TBM / CPC) veya bin gösterim başı maliyet (BGBM / CPM) üzerinden doğrudan OpenAI platformuna ödenen tutardır. Tamamen kendi kurumsal kartınızdan çekilir.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.8rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.3rem', marginBottom: '0.8rem' }}>2. Ajans Yönetim Bedeli</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Hesap kurulumu, context hints kütüphanesi mimarisi, kreatif mesaj testleri, Conversions API entegrasyonu ve haftalık kârlılık optimizasyonunu kapsayan profesyonel danışmanlık ücretidir.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Örnek Bütçe ve Kampanya Büyüklükleri Karşılaştırma Matrisi
          </h2>
          <div className="table-wrap" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem' }}>Kampanya Seviyesi</th>
                  <th style={{ padding: '0.9rem' }}>Önerilen Medya Bütçesi</th>
                  <th style={{ padding: '0.9rem' }}>Kapsam ve Amaç</th>
                  <th style={{ padding: '0.9rem' }}>Yönetim Modeli</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Kontrollü Pilot Test</td>
                  <td style={{ padding: '0.9rem' }}>Başlangıç / Pilot</td>
                  <td style={{ padding: '0.9rem' }}>Sektörel niyet doğrulaması, temel context hints testi, piksel veri akışı ve ilk lead maliyeti tespiti.</td>
                  <td style={{ padding: '0.9rem' }}>Sabit Aylık Danışmanlık</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Büyüme & Ölçeklenme</td>
                  <td style={{ padding: '0.9rem' }}>Orta Ölçek</td>
                  <td style={{ padding: '0.9rem' }}>Çoklu karar anı segmentasyonu, dinamik kreatif testleri, CAPI satış eşleştirmesi ve kârlı ROAS hedefi.</td>
                  <td style={{ padding: '0.9rem' }}>Sabit + Performans Payı</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Kurumsal & B2B SaaS</td>
                  <td style={{ padding: '0.9rem' }}>Yüksek Hacimli</td>
                  <td style={{ padding: '0.9rem' }}>Uluslararası pazarlar, çoklu dil context hints, CRM entegrasyonu, GEO + Ads hibrit dominasyon stratejisi.</td>
                  <td style={{ padding: '0.9rem' }}>Özel Kurumsal Kapsam</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#ffffff' }}>
            İlk 30-60 Günlük Pilot Test Bütçesi Neden Hayatidir?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Yapay zekâ modelleri deterministik kurallarla değil, olasılık ve semantik benzerlik algoritmalarıyla karar verir. Bir kullanıcının sorduğu soru ile sizin bağlam ipuçlarınızın eşleşmesi, modelin "öğrenme süreci" boyunca netleşir.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7 }}>
            Bu nedenle ilk 30-60 günlük süreçte amaç sadece anlık satış yapmak değil; hangi context hint ifadelerinin en yüksek satın alma niyetli trafiği çektiğini ve en düşük müşteri edinme maliyetini (CPA) sağladığını matematiksel olarak kanıtlamaktır.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Sıkça Sorulan Sorular
          </h2>
          <div className="faq-list">
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>ChatGPT reklamları Google Ads'e göre daha mı pahalı?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Tıklama başı maliyet (TBM) sektöre ve rekabete göre değişir; ancak ChatGPT kullanıcıları pasif gezinti yerine doğrudan bir problemi çözmek için soru sorduğundan, dönüşüm oranı (CR) geleneksel arama motorlarına göre daha yüksek olabilmekte ve nitelikli müşteri edinme maliyetini dengelemektedir.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ajans yönetim ücreti neye göre belirlenir?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Yönetim ücreti; hedeflenen pazar sayısı (Türkiye / Global), kampanya adedi, entegrasyon karmaşıklığı (CAPI, CRM) ve eş zamanlı GEO çalışması talebine göre şeffaf bir teklif olarak sunulur.
              </p>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Sektörünüze Özel Bütçe Senaryosu İsteyin</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Web sitenizi ve ürününüzü inceleyelim; tahmini TBM, önerilen test bütçesi ve ajans yönetim teklifimizi aynı gün iletelim.
          </p>
          <a className="button primary" href="/iletisim/">Teklif ve Bütçe Planı İsteyin <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function ChatGPTTurkeyPage() {
  return (
    <Detail
      eyebrow="Türkiye Pazarı & Yasal Çerçeve"
      title="ChatGPT Reklamları Türkiye: Erişim, Kurulum ve Uygunluk Rehberi"
      summary="OpenAI Ads Manager Beta Türkiye durumu: Self-servis panel erişimi, şirket tüzel kişilik evrakları, fatura ve 2 No'lu KDV vergilendirmesi ile Türkçe dil modellerinde reklam optimizasyonu."
      cta="Türkiye Kampanyanızı Başlatın"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Türkiye'de ChatGPT Reklamları Durumu: 2026 Son Durum
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Türkiye, yapay zekâ adaptasyonunda dünyanın en hızlı büyüyen pazarlarından biridir. Milyonlarca profesyonel, öğrenci ve karar verici her gün ChatGPT'yi araştırma, satın alma ve analiz aracı olarak kullanmaktadır.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            <strong>Resmî Durum:</strong> 23 Eylül 2026 tarihi itibarıyla OpenAI Ads Manager Beta programında Türkiye, reklamveren self-servis erişimine açık ülkeler arasında yer almaktadır. Türk şirketleri resmî vergi ve fatura bilgileriyle doğrudan OpenAI Ads Manager hesabı açabilir ve Türkiye veya global hedef kitlelere yönelik kampanyalarını başlatabilir.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.2rem', color: '#ffffff' }}>
            Başvuru ve Hesap Kurulumu İçin Gerekenler
          </h2>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li><strong>Tüzel Kişilik:</strong> Anonim Şirket (A.Ş.), Limited Şirket (Ltd. Şti.) veya tescilli Şahıs Şirketi kaydı.</li>
            <li><strong>Vergi Kimlik Numarası (VKN) & Vergi Dairesi:</strong> Faturanın yasal muhasebe kaydı için eksiksiz şirket unvanı ve VKN bilgisi.</li>
            <li><strong>Kurumsal Alan Adı & E-posta:</strong> @sirketiniz.com uzantılı resmî iş e-posta adresi (ücretsiz genel servisler onay gecikmesine neden olabilir).</li>
            <li><strong>Web Sitesi ve Açılış Sayfası:</strong> SSL sertifikalı, çalışan iletişim bilgileri, gizlilik politikası ve KVKK aydınlatma metnine sahip kurumsal web sitesi.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Faturalandırma, Vergi ve 2 No'lu KDV Süreci
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            OpenAI merkezli harcamalar uluslararası dijital hizmet alımı kapsamındadır. Türkiye'deki mali mevzuat uyarınca:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>2 No'lu KDV Beyanı</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Yurtdışından alınan dijital reklam hizmeti için şirketiniz tarafından sorumlu sıfatıyla 2 No'lu KDV beyannamesi verilerek KDV tahakkuk ettirilir ve 1 No'lu KDV'de indirim konusu yapılır.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Stopaj Yükümlülüğü</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Cumhurbaşkanı Kararı uyarınca yurtdışı mukimi firmalara yapılan dijital reklam ödemelerinde geçerli stopaj oranları dikkate alınarak muhtasar beyanname ile beyan edilir.
              </p>
            </div>
          </div>
          <p style={{ color: 'var(--chat-text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
            *Not: Vergi mevzuatı güncellemeleri için mali müşaviriniz veya muhasebe departmanınızla teyit etmeniz tavsiye edilir.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Türkiye Pazarında Sektörel Uygunluk Matrisi
          </h2>
          <div className="table-wrap" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem' }}>Sektör</th>
                  <th style={{ padding: '0.9rem' }}>Uygunluk Derecesi</th>
                  <th style={{ padding: '0.9rem' }}>Kullanım Senaryosu & Karar Anı</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>B2B Yazılım & SaaS</td>
                  <td style={{ padding: '0.9rem', color: 'var(--chat-green)', fontWeight: 600 }}>Çok Yüksek</td>
                  <td style={{ padding: '0.9rem' }}>ERP, CRM, insan kaynakları ve muhasebe yazılımı araştırmalarında yüksek niyetli karar vericilere ulaşma.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Kurumsal Danışmanlık & Hukuk</td>
                  <td style={{ padding: '0.9rem', color: 'var(--chat-green)', fontWeight: 600 }}>Yüksek</td>
                  <td style={{ padding: '0.9rem' }}>Vergi, gümrük, şirket kuruluşu ve strateji danışmanlığı arayan yöneticiler için uzmanlık teklifleri.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Sağlık Turizmi & Yüksek Değerli Hizmet</td>
                  <td style={{ padding: '0.9rem', color: 'var(--chat-green)', fontWeight: 600 }}>Yüksek</td>
                  <td style={{ padding: '0.9rem' }}>Yurtdışından Türkiye'deki klinikleri araştıran hastalara yönelik yabancı dil context hints kampanyaları.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>E-Ticaret & Niş Tüketici Ürünleri</td>
                  <td style={{ padding: '0.9rem', color: '#f59e0b', fontWeight: 600 }}>Orta - Yüksek</td>
                  <td style={{ padding: '0.9rem' }}>Derin ürün karşılaştırması ve teknik inceleme yapılan lüks, teknoloji ve özel tasarım ürünler.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Sıkça Sorulan Sorular
          </h2>
          <div className="faq-list">
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Türkiye'den reklam verirken hedefleme nasıl yapılır?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Kampanyanızı Türkiye'deki Türkçe konuşan kullanıcılara hedefleyebileceğiniz gibi, Türkiye'den yurtdışına (ABD, Avrupa, Körfez vb.) ihracat yapan firmalar için ilgili ülke ve dillerde de yayınlayabilirsiniz.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ödemeler Türk Lirası ile mi yapılır?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                OpenAI platformu faturalandırmayı genellikle USD bazında gerçekleştirir; kurumsal kredi kartınız bankanız tarafından güncel döviz kuru üzerinden Türk Lirası olarak ekstreye yansıtılır.
              </p>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Türkiye Pazarında Erken Avantaj Elde Edin</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Rakipleriniz henüz ChatGPT Ads'i keşfetmemişken sektörünüzdeki en kârlı arama ve karar anlarını kapatın.
          </p>
          <a className="button primary" href="/iletisim/">Türkiye Kurulum Danışmanlığı Alın <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function GEOPage() {
  return (
    <Detail
      eyebrow="Organik AI Görünürlüğü & Tavsiye"
      title="GEO Ajansı: Yapay Zekâ Aramalarında Organik Görünürlük"
      summary="Generative Engine Optimization (GEO); markanızın ChatGPT, Perplexity, Google Gemini ve Claude gibi üretken yapay zekâ motorları tarafından anlaşılması ve organik yanıtlar üretilirken güvenilir kaynak olarak tavsiye edilmesini sağlayan yeni nesil arama stratejisidir."
      cta="Ücretsiz GEO Analizi İsteyin"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Generative Engine Optimization (GEO) Nedir?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Kullanıcılar artık Google'a sadece 2-3 kelimelik sorgular yazıp çıkan 10 mavi linki tek tek gezmekle yetinmiyor. 
            Doğrudan ChatGPT, Perplexity veya Gemini'ye giderek: <em>"İstanbul'da B2B lojistik için en güvenilir 3 yazılım hangisi ve aralarındaki farklar neler?"</em> gibi karmaşık sorular soruyorlar.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            <strong>GEO (Üretken Motor Optimizasyonu)</strong>; web sitenizin, içeriklerinizin ve marka varlığınızın büyük dil modelleri (LLM) tarafından taranmasını, anlaşılmasını ve sentezlenen cevapta markanızın referans verilmesini sağlayan disiplindir.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Klasik SEO ile GEO Arasındaki Temel Farklar
          </h2>
          <div className="table-wrap" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem' }}>Kriter</th>
                  <th style={{ padding: '0.9rem' }}>Geleneksel SEO</th>
                  <th style={{ padding: '0.9rem' }}>GEO (Generative Engine Optimization)</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Kullanıcı Deneyimi</td>
                  <td style={{ padding: '0.9rem' }}>Bağlantı listesi (SERP) ve siteye tıklama.</td>
                  <td style={{ padding: '0.9rem' }}>Tek sentezlenmiş doğrudan cevap ve kaynak alıntısı.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Hedefleme Mantığı</td>
                  <td style={{ padding: '0.9rem' }}>Spesifik anahtar kelime hacmi ve yoğunluğu.</td>
                  <td style={{ padding: '0.9rem' }}>Semantik varlık (Entity), net gerçekler ve problem çözme derinliği.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Taranabilirlik</td>
                  <td style={{ padding: '0.9rem' }}>Googlebot indekslemesi ve HTML analizi.</td>
                  <td style={{ padding: '0.9rem' }}>GPTBot, ClaudeBot, PerplexityBot ve yapısal veri (JSON-LD) çıkarımı.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Otorite Ölçütü</td>
                  <td style={{ padding: '0.9rem' }}>Backlink sayısı ve Domain Authority skoru.</td>
                  <td style={{ padding: '0.9rem' }}>EEAT kanıtları, bağımsız incelemeler ve alıntı tutarlılığı.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.2rem', color: '#ffffff' }}>
            4 Temel GEO Sütunu: Başarıyı Getiren Mimari
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div>
              <strong style={{ color: 'var(--chat-green)', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>1. Taranabilirlik ve Bot İzinleri</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Web sitenizin robots.txt dosyasında GPTBot, Claude-Web, PerplexityBot ve Google-Extended gibi yapay zekâ tarayıcılarının engellenmemiş olması ve hızlı yanıt vermesi.
              </p>
            </div>
            <div>
              <strong style={{ color: 'var(--chat-green)', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>2. Varlık Netliği ve Bilgi Mimarisi</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Markanızın ne yaptığını, hangi fiyata hangi faydayı sunduğunu ve rakiplerden farkını yapay zekânın hiçbir çıkarım yapmadan doğrudan okuyabileceği net cümlelerle sunmak.
              </p>
            </div>
            <div>
              <strong style={{ color: 'var(--chat-green)', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>3. Derin Yapısal Veri (Schema.org)</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Organization, Service, Product, FAQPage ve Review schema şablonlarının kod düzeyinde eksiksiz gömülmesi, LLM'lerin verinizi hatasız ayrıştırmasını sağlar.
              </p>
            </div>
            <div>
              <strong style={{ color: 'var(--chat-green)', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>4. Üçüncü Taraf Kanıt ve Güvenilirlik</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Yapay zekâ modelleri yalnızca sizin sitenize bakmaz; sektör sitelerindeki incelemeler, forumlar, basın bültenleri ve tarafsız dizinlerdeki marka bahsini doğrular.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '14px', padding: '1.8rem' }}>
          <h3 style={{ color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.8rem', fontWeight: 600 }}>
            Ölçümleme Sınırlamaları ve Şeffaflık Taahhüdümüz
          </h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Yapay zekâ yanıtları deterministik değildir; kullanıcının önceki sohbet geçmişine, coğrafyasına, kullandığı modele ve rastgelelik parametresine (temperature) göre değişiklik gösterir. 
            Hiçbir ajans veya araç <em>"ChatGPT her aramada kesin olarak sadece sizi önerecek"</em> garantisi veremez. 
            Overseas Marketing olarak GEO çalışmalarımızda düzenli çoklu model sorgu testleri, alıntı oranı (citation rate) analizi ve arama niyetlerindeki görünürlük frekansını objektif metriklerle raporlarız.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Sıkça Sorulan Sorular
          </h2>
          <div className="faq-list">
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>GEO çalışması yapmak geleneksel Google SEO'muza zarar verir mi?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Tam tersine; GEO prensipleri (derin içerik, yapısal veri, taranabilirlik, EEAT) Google'ın Helpful Content ve AI Overview algoritmalarıyla %100 örtüşür. GEO çalışması SEO performansınızı da doğrudan güçlendirir.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>GEO sonuçlarını ne kadar sürede görürüz?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Perplexity gibi canlı web araması yapan modellerde yapılan değişiklikler birkaç gün veya hafta içinde yansıyabilir. Temel dil modellerinin ağırlık güncellemelerinde ise periyodik indeksleme döngüleri takip edilir; ortalama etki 2-3 ay içinde belirginleşir.
              </p>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Sitenizin Yapay Zekâ Görünürlüğünü Ölçün</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Ücretsiz GEO analizi formumuzu doldurun; markanızın ChatGPT, Perplexity ve Gemini'de tavsiye edilme durumunu raporlayalım.
          </p>
          <a className="button primary" href="/#ucretsiz-analiz">Ücretsiz GEO Analizi Başlatın <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function AIPlatformsPage() {
  return (
    <Detail
      eyebrow="Platform Seçimi & Karar Matrisi"
      title="Yapay Zekâ Platformlarında Reklam Verme: Platform Seçim Rehberi"
      summary="ChatGPT Ads, Google AI Mode, Microsoft Copilot ve Perplexity AI... Hangi yapay zekâ reklam platformu işletmeniz, sektörünüz ve bütçeniz için en uygunudur? Doğru kanal seçimi, formatlar ve ölçüm stratejisi."
      cta="AI Reklam Stratejinizi Belirleyin"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            AI Reklamcılığının 4 Büyük Ekosistemi
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Yapay zekâ reklamcılığı tek bir platformdan ibaret değildir. Her platformun kullanıcı profili, niyet derinliği, reklam formatları ve ölçüm kabiliyeti birbirinden farklıdır. 
            Başarılı bir yapay zekâ reklam yatırımı, doğru kitleyi doğru platformun karar anında yakalamakla başlar.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            AI Reklam Platformları Karşılaştırma Matrisi
          </h2>
          <div className="table-wrap" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem' }}>Platform</th>
                  <th style={{ padding: '0.9rem' }}>Hedefleme Mantığı</th>
                  <th style={{ padding: '0.9rem' }}>En Uygun Sektörler</th>
                  <th style={{ padding: '0.9rem' }}>Ölçümleme & Veri</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: 'var(--chat-green)' }}>ChatGPT Ads (OpenAI)</td>
                  <td style={{ padding: '0.9rem' }}>Context Hints (Konuşma Bağlamı), karar anı niyetleri ve negatif bağlamlar.</td>
                  <td style={{ padding: '0.9rem' }}>B2B SaaS, Kurumsal Hizmetler, Profesyonel Danışmanlık, Niş E-ticaret.</td>
                  <td style={{ padding: '0.9rem' }}>OpenAI Pixel, CAPI, UTM etiketleri ve CRM satış eşleşmesi.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Google AI Mode / PMax</td>
                  <td style={{ padding: '0.9rem' }}>Arama niyeti sentezi, kitle sinyalleri ve Merchant Center ürün beslemeleri.</td>
                  <td style={{ padding: '0.9rem' }}>Geniş ölçekli E-ticaret, Perakende, Yerel Hizmetler, Hızlı Tüketim.</td>
                  <td style={{ padding: '0.9rem' }}>Google Ads Dönüşüm İzleme, GA4 ve Gelişmiş Dönüşümler (Enhanced Conversions).</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Microsoft Copilot Ads</td>
                  <td style={{ padding: '0.9rem' }}>Edge/Windows kullanıcı profili, LinkedIn veri eşleştirmesi ve Bing araması.</td>
                  <td style={{ padding: '0.9rem' }}>Kurumsal B2B, Finans, BT Donanım ve Profesyonel İş Çözümleri.</td>
                  <td style={{ padding: '0.9rem' }}>Microsoft Advertising UET etiketi ve LinkedIn B2B kitle sinyalleri.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Perplexity & Diğerleri</td>
                  <td style={{ padding: '0.9rem' }}>Sponsorlu sorular, arama motoru alıntıları ve GEO organik görünürlüğü.</td>
                  <td style={{ padding: '0.9rem' }}>Teknoloji, Finans, Sağlık ve Araştırma odaklı tüketici ürünleri.</td>
                  <td style={{ padding: '0.9rem' }}>Referral trafik analizi, kaynak alıntı oranı ve marka bahsi takibi.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.2rem', color: '#ffffff' }}>
            Hangi Platformla Başlamalısınız?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Her markanın yapay zekâ stratejisi aynı olamaz:
          </p>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li><strong>B2B ve Yüksek Müşteri Değeri (LTV) Olanlar:</strong> Doğrudan <em>ChatGPT Ads</em> ve <em>GEO Danışmanlığı</em> ile başlamalıdır; çünkü karar vericiler karmaşık değerlendirmelerini bu ortamlarda yapar.</li>
            <li><strong>Hızlı Dönen E-Ticaret ve Perakende:</strong> <em>Google AI Mode / PMax</em> ve <em>Meta Advantage+</em> kampanyalarını birinci taraf ürün verisiyle güçlendirip eş zamanlı olarak ChatGPT ürün önerileri için GEO hazırlığı yapmalıdır.</li>
            <li><strong>Global B2B İhracatçıları:</strong> <em>ChatGPT Ads</em> ve <em>Microsoft Copilot</em> kombinasyonu ile yurt dışı kurumsal alıcılara konuşma bağlamında ulaşmalıdır.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Sıkça Sorulan Sorular
          </h2>
          <div className="faq-list">
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Tüm AI platformlarını aynı anda mı kullanmalıyız?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Hayır. Bütçeyi parçalamak yerine önce hedef kitlenizin en yoğun olduğu kanalda (genellikle ChatGPT veya Google AI) kontrollü bir pilot test yaparak kârlılığı kanıtlamanızı ve ardından diğer platformlara ölçeklenmenizi öneririz.
              </p>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Markanız İçin Doğru AI Platformunu Seçelim</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Hedef kitlenizi, ürününüzü ve bütçenizi analiz edelim; en yüksek geri dönüş sağlayacak yapay zekâ reklam kanalını belirleyelim.
          </p>
          <a className="button primary" href="/iletisim/">Platform Değerlendirmesi İsteyin <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function YapayZekadaReklamAjansiPage() {
  return (
    <Detail
      eyebrow="Bağımsız AI Reklam & Büyüme Ajansı"
      title="Yapay Zekada Reklam Ajansı"
      summary="Yapay zekada reklam ajansı, markanın AI destekli ortamlardaki sponsorlu reklamlarını planlayan ve ölçen uzman ekiptir. Biz ChatGPT Ads kampanyalarını, AI yanıtlarında organik görünürlüğü ve geleneksel reklam platformlarındaki AI destekli optimizasyonu birbirinden ayırarak yönetiyoruz. Böylece hangi bütçenin hangi sonuca hizmet ettiğini görebilirsiniz."
      cta="Markam İçin İlk Test Planı İste"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Yapay Zekada Reklam Ajansı Ne Yapar?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Yapay zekada reklam ajansı; markanızın OpenAI ChatGPT, Google AI Overviews, Microsoft Copilot ve Perplexity gibi yeni nesil üretken zekâ ortamlarında doğru zamanda, doğru arama niyetinde ve şeffaf biçimde yer almasını sağlar.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Kanal uygunluğunu değerlendirir; işletme hesabını, kampanya kurgusunu, reklam mesajını, açılış sayfasını ve dönüşüm ölçümünü kurar; sonuçları nitelikli talep ve satış hedeflerine göre sürekli optimize eder.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Üç Ayrı Hizmetin Kapsamı
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'var(--chat-surface)', padding: '1.8rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.25rem', marginBottom: '0.8rem' }}>1. ChatGPT Ads Kampanya Yönetimi</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.92rem' }}>
                OpenAI Ads Manager üzerinden konuşma bağlamında sponsorlu reklam gösterimi. Context hints, negatif filtreler, pixel ve CRM dönüşüm takibi.
              </p>
              <a href="/chatgpt-reklamlari/" style={{ color: 'var(--chat-green)', fontWeight: 600, fontSize: '0.9rem', display: 'inline-block', marginTop: '0.8rem' }}>
                ChatGPT Ads Yönetimi İnceleyin <Arrow />
              </a>
            </div>

            <div style={{ background: 'var(--chat-surface)', padding: '1.8rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.25rem', marginBottom: '0.8rem' }}>2. GEO ve Organik AI Görünürlüğü</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.92rem' }}>
                Markanızın ChatGPT, Perplexity ve Gemini tarafından anlaşılması ve organik yanıtlar üretilirken güvenilir kaynak olarak gösterilmesi.
              </p>
              <a href="/geo-yapay-zeka-gorunurlugu/" style={{ color: 'var(--chat-green)', fontWeight: 600, fontSize: '0.9rem', display: 'inline-block', marginTop: '0.8rem' }}>
                AI Yanıtlarında Organik Görünürlük <Arrow />
              </a>
            </div>

            <div style={{ background: 'var(--chat-surface)', padding: '1.8rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.25rem', marginBottom: '0.8rem' }}>3. AI Destekli Google Ads ve Meta</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.92rem' }}>
                Performance Max, Akıllı Teklif, Advantage+ ve Conversions API entegrasyonu ile satış ve kârlılık odaklı geleneksel kanal optimizasyonu.
              </p>
              <a href="/hizmetler/yapay-zeka-google-ads/" style={{ color: 'var(--chat-green)', fontWeight: 600, fontSize: '0.9rem', display: 'inline-block', marginTop: '0.8rem' }}>
                Google Ads Hizmetini İnceleyin <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.2rem', color: '#ffffff' }}>
            İlk 30 Günde Neleri Teslim Ediyoruz?
          </h2>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li><strong>Kanal & Uygunluk Raporu:</strong> İşletmenizin ChatGPT Ads ve sektörel kısıtlamalara uygunluk analizi.</li>
            <li><strong>Context Hints Kütüphanesi:</strong> Müşterilerinizin karar anlarını yapay zekâya anlatan doğal dil bağlam haritası.</li>
            <li><strong>Açılış Sayfası Denetimi:</strong> Ziyaretçiyi karşılayan landing page'in hız, netlik ve dönüşüm uyumu.</li>
            <li><strong>Pixel & CAPI Entegrasyonu:</strong> OpenAI sunucu tarafı dönüşüm API'si ve UTM şablonlarının eksiksiz kurulumu.</li>
            <li><strong>İlk Kontrollü Pilot Kampanya:</strong> Bütçe israfını önleyen negatif bağlam kurallarıyla yayına alma ve haftalık raporlama.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Reklam Bütçesi ile Ajans Hizmet Bedeli Nasıl Ayrılır?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Şeffaflık temel ilkemizdir:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Medya Harcaması</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Doğrudan OpenAI Ads Manager veya ilgili platforma, işletmenizin kendi kredi kartıyla ödenir. Ajansımız medya harcamanızdan komisyon gizlemez.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Ajans Yönetim Bedeli</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Strateji, bağlam kütüphanesi üretimi, kreatif varyasyon testleri, teknik CAPI entegrasyonu ve haftalık optimizasyon için sabit veya performans bazlı faturalandırılır. Detaylar için <a href="/blog/chatgpt-reklam-maliyeti/">ChatGPT reklam maliyeti</a> sayfamıza bakın.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Hesap Sahipliği ve Erişim Modeli
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Reklam hesapları hiçbir zaman ajansın mülkiyetinde tutulmaz. Hesap doğrudan firmanızın tüzel kişiliği adına açılır. Şirketiniz hesap sahibi, ajansımız ise davet edilmiş yetkili yönetici olarak çalışır. İstediğiniz an yetkileri değiştirme veya sonlandırma hakkı sizde kalır.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Ekibimiz, Deneyimimiz ve Kanıtlarımız
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Yapay Zekâda Reklam, <strong>Overseas Marketing</strong> uzmanlığı altında faaliyet gösteren bağımsız bir performans ve GEO danışmanlığı birimidir. Ekibimiz uluslararası dijital pazarlama, LLM semantik arama mimarisi ve dönüşüm optimizasyonu alanında deneyimli uzmanlardan oluşur.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Müşterilerimize hiçbir zaman yapay veya doğrulanmamış sonuçlar sunmayız. Her hipotezi gerçek iş verisiyle (CRM leadleri, satışlar ve kârlılık) test ederiz.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Sık Sorulan Sorular
          </h2>
          <div className="faq-list">
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Yapay zekada reklam ajansı ile geleneksel ajansın farkı nedir?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Geleneksel ajanslar sadece anahtar kelime veya görsel banner satın alır. Yapay zekada reklam ajansı ise kullanıcının diyalog akışındaki karar anlarını semantik context hints ile hedefler ve eş zamanlı olarak markanızı organik GEO ile güçlendirir.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Nasıl başlarız?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Web sitenizi ve ürününüzü inceleyerek ücretsiz bir ön analiz hazırlarız. Uygunluk, önerilen pilot bütçe ve ilk 30 günlük test planını paylaştıktan sonra onayınızla kurulumu başlatırız.
              </p>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Markanız İçin İlk Test Planı İsteyin</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Ürününüze özel ChatGPT reklam stratejisini ve GEO analizini aynı gün içinde hazırlayalım.
          </p>
          <a className="button primary" href="/iletisim/">Markam İçin İlk Test Planı İste <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function YapayZekadaReklamNasilVerilirPage() {
  return (
    <Detail
      eyebrow="2026 Uygulama Rehberi"
      title="Yapay Zekada Reklam Nasıl Verilir? 2026 Uygulama Rehberi"
      summary="Yapay zekada reklam vermek için platform, hesap, hedef, bütçe, kreatif ve ölçüm adımlarını öğrenin. ChatGPT Ads ile GEO arasındaki farkı görün."
      cta="Uygun AI Kanalını Birlikte Belirleyelim"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '2rem', marginBottom: '3rem' }}>
          <strong style={{ color: 'var(--chat-green)', fontSize: '1.1rem', display: 'block', marginBottom: '0.6rem' }}>Kısa Cevap:</strong>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', margin: 0 }}>
            Yapay zekada reklam vermek için önce hangi AI ortamında gerçek bir sponsorlu reklam ürünü bulunduğunu ve işletmenizin o ürüne erişebildiğini doğrulayın. Ardından işletmenin kendi reklam hesabını kurun; hedef, bütçe, reklam mesajı ve ilgili açılış sayfasını hazırlayın. Dönüşümleri ölçerek küçük bir test kampanyasıyla başlayın. ChatGPT Ads bu sürecin bir örneğidir. AI yanıtlarında organik kaynak olarak görünmek ise GEO çalışmasıdır; reklam satın alarak organik cevabı değiştiremezsiniz.
          </p>
        </div>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Yapay Zekada Reklam Vermek Ne Anlama Gelir?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Bu ifade iki farklı iş için kullanılıyor. Birincisi, ChatGPT gibi bir ortamın açıkça etiketlenen sponsorlu reklam alanında kampanya yayımlamaktır. İkincisi, Google Ads veya Meta gibi mevcut reklam platformlarının yapay zekâ özelliklerini kullanarak kampanyaları yönetmektir. Bir marka AI yanıtlarında kaynak olarak görünmek de isteyebilir; bu organik görünürlük çalışmasıdır. Kampanya planına başlamadan önce hangi sonucun istendiği netleşmelidir.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.8rem', color: '#ffffff' }}>
            1. Reklam verebileceğiniz platformu ve ülke erişimini doğrulayın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Bir AI aracının kullanıcıya yanıt vermesi, o araçta reklam hesabı açılabildiği anlamına gelmez. Her platform için resmî reklam ürünü, hesap açma yolu, ülke uygunluğu, reklam formatı ve ölçüm seçeneklerini kontrol edin. OpenAI'ın güncel belgelerine göre Türkiye merkezli uygun işletmeler ChatGPT Ads Manager için self servis erişim listesinde bulunuyor. Erişim, hesap doğrulaması ve reklam incelemesi ayrı adımlardır. Başka platformların erişim durumunu aynı varsayımla değerlendirmeyin.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.8rem', color: '#ffffff' }}>
            2. İş hedefini ve başarı ölçüsünü yazın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            “Yapay zekada görünmek” tek başına kampanya hedefi değildir. Form talebi, satış, demo başvurusu veya nitelikli müşteri görüşmesi gibi ölçülebilir bir hedef seçin. Kampanya öncesinde mevcut talep sayısını, talep kalitesini ve açılış sayfası dönüşümünü kaydedin. Reklam sonucu ile organik GEO sonucunu ayrı raporlayın.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.8rem', color: '#ffffff' }}>
            3. İşletme hesabını ve erişimleri kurun
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Reklam hesabı ve ödeme bilgileri işletmenin kontrolünde olmalıdır. Ajans desteği alıyorsanız yetkiyi davet/rol üzerinden verin. OpenAI'ın hesap kurulumu belgeleri, uygun işletmenin hesap oluşturması ve ajansın sonradan davet edilmesi gibi erişim akışlarını açıklıyor. Şirket bilgisi, site ve faturalandırma alanlarını göndermeden önce kontrol edin.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.8rem', color: '#ffffff' }}>
            4. Müşterinin karar anını ve reklam mesajını belirleyin
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Reklamı yalnızca ürün adıyla değil, kullanıcının çözmeye çalıştığı ihtiyaçla eşleştirin. Ürün kimin için, hangi durumda, hangi bölgede ve hangi koşullarda uygundur? ChatGPT Ads'teki “context hints” alanı da reklam sistemine ürünün uygun olduğu bağlamı doğal dille açıklamak için kullanılır. Bağlantısız anahtar kelimeleri art arda yazmak yerine tek bir fikri açık anlatın.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.8rem', color: '#ffffff' }}>
            5. Reklamı doğru açılış sayfasına bağlayın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Reklamdaki vaat açılış sayfasında karşılanmalıdır. Sayfa, teklifin ne olduğunu, kime uygun olduğunu, fiyat/teklif yolunu, güven kanıtını ve sonraki adımı açıkça göstermelidir. Mobilde okunabilirlik, hız ve çalışan form veya ödeme akışı kampanya açılmadan önce kontrol edilmelidir.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.8rem', color: '#ffffff' }}>
            6. Bütçeyi test olarak planlayın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Yeni bir platformda bütçeyi garanti edilen müşteri sayısına göre değil, öğrenmek istediğiniz sorulara göre ayırın: Hangi mesaj daha iyi talep üretiyor? Hangi açılış sayfası daha iyi dönüşüyor? Hangi müşteri segmenti gerçekten satın alıyor? Platform reklam harcaması ile ajans hizmet bedelini ayrı tutun. Güncel platform ücretlerini yalnızca resmî panel veya tekliften doğrulayın; geçmiş pilot rakamlarını bugünün kesin fiyatı gibi sunmayın.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.8rem', color: '#ffffff' }}>
            7. Dönüşümleri ve talep kalitesini ölçün
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Gösterim ve tıklama kampanyanın çalıştığını gösterir; ticari sonucu tek başına kanıtlamaz. Form, satış, demo ve CRM aşamalarını izleyin. UTM parametreleriyle kampanya trafiğini ayırın; platformun desteklediği dönüşüm ölçümünü kurun. Aynı ziyaretçinin farklı kanallarla karşılaşabileceğini göz önüne alarak sonuçları tek bir tıklamaya aşırı bağlamayın.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.8rem', color: '#ffffff' }}>
            8. İlk testten sonra kampanyayı geliştirin
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Test dönemi bitince en çok tıklanan reklamı değil, nitelikli talep üreten mesajı değerlendirin. Açılış sayfasındaki itirazları, form düşüşlerini ve satış ekibinin geri bildirimini inceleyin. Sonraki testte tek bir ana değişkeni değiştirin. Böylece mesaj, bağlam ve teklif etkisini daha açık okuyabilirsiniz.
          </p>
        </section>

        <section style={{ marginBottom: '3rem', background: 'var(--chat-surface)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#ffffff' }}>
            ChatGPT Ads ile GEO Aynı Şey mi?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, margin: 0 }}>
            Hayır. ChatGPT Ads, desteklenen deneyimlerde açıkça etiketlenmiş sponsorlu alanlar için bütçe ayırmaktır. GEO, markanın ve içeriğinin AI sistemleri tarafından anlaşılabilir ve doğrulanabilir olmasına yönelik organik çalışmadır. Reklamveren organik AI yanıtını satın alamaz. Bu iki alan birlikte planlanabilir, fakat ayrı hedef ve raporlarla yönetilmelidir.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Sık Sorulan Sorular
          </h2>
          <div className="faq-list">
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Türkiye'den yapay zekada reklam verilebilir mi?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Platforma göre değişir. OpenAI'ın güncel ülke listesinde Türkiye, uygun işletmeler için Ads Manager self servis erişimine açıktır. Başka bir platform için onun resmî ülke ve ürün belgelerini kontrol edin.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Yapay zekâ reklamı için ajans gerekir mi?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Hesabı işletme kendisi açabilir. Ajans, kanal seçimi, reklam mesajı, açılış sayfası, ölçüm ve sürekli optimizasyonda destek verebilir.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>ChatGPT'de reklam vermek, ChatGPT'nin beni önermesini sağlar mı?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Sponsorlu reklam ile organik yanıt ayrı sistemlerdir. Reklam satın almak organik tavsiyeyi garanti etmez.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Her yapay zekâ aracında reklam verebilir miyim?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Hayır. Her aracın reklam ürünü, satın alma yolu ve ülke erişimi ayrı ayrı doğrulanmalıdır.
              </p>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Markanız İçin Uygun AI Reklam Kanalını Birlikte Belirleyelim</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            <a href="/chatgpt-reklam-verme/">ChatGPT'de reklam vermenin adımları</a> veya <a href="/yapay-zeka-platformlarinda-reklam/">AI reklam platformlarını karşılaştırın</a>.
          </p>
          <a className="button primary" href="/iletisim/">Danışmanlık Alın <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function BlogCostPage() {
  return (
    <Detail
      eyebrow="Bütçe ve Maliyet Analizi"
      title="ChatGPT Reklam Maliyeti Nasıl Hesaplanır?"
      summary="ChatGPT reklam maliyetleri, medya bütçesi ve ajans yönetim ücretleri nasıl planlanır? TBM açık artırması ve test bütçesi rehberi."
      cta="Bütçe Planınızı Çıkaralım"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Medya Bütçesi ve Hizmet Bedeli Ayrımı
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            ChatGPT reklam maliyeti iki ayrı kalemden meydana gelir: Doğrudan OpenAI'ye yapılan tıklama veya gösterim harcamaları (medya bütçesi) ve profesyonel ajansın yürüttüğü context hints, açılış sayfası, piksel kurulumu ve optimizasyon süreci (hizmet bedeli).
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Bütçeyi Etkileyen Değişkenler
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Sektör rekabeti, hedeflenen coğrafya (Türkiye içi vs ABD/Avrupa ihracatı), bağlam yoğunluğu ve kullanıcı niyetinin derinliği maliyetleri belirler. Doğrulanmamış sabit bir minimum harcama eşiği iddia etmek yerine, sistemin açık artırma dinamiklerine göre test bütçesi kurgulanmalıdır.
          </p>
        </section>

        <section style={{ marginBottom: '3rem', background: 'var(--chat-surface)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#ffffff' }}>
            Test Bütçesi Nasıl Kurulur?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            İlk 30-45 günlük periyotta hedef, büyük harcama yapmak değil; yapay zekânın karar anlarını yakalayarak hangi bağlam ipuçlarının en kaliteli lead ve satış getirdiğini doğrulamaktır.
          </p>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Sektörünüze Özel Maliyet Senaryosu</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            <a href="/chatgpt-reklamlari/">ChatGPT reklam yönetimi</a> hizmetimiz kapsamında bütçe simülasyonunuzu hazırlayalım.
          </p>
          <a className="button primary" href="/iletisim/">Teklif ve Bütçe Planı İsteyin <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function BlogGeoDiffPage() {
  return (
    <Detail
      eyebrow="Strateji Karşılaştırması"
      title="ChatGPT Ads ve GEO Arasındaki Fark Nedir?"
      summary="ChatGPT Ads ile organik GEO arasındaki temel farklar: Görünürlük, ödeme modeli, ölçüm kriterleri ve iki sistemin birlikte kullanımı."
      cta="Stratejinizi Belirleyin"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Sponsorlu Reklam ile Organik AI Tavsiyesi Arasındaki Kesin Sınır
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            ChatGPT Ads; OpenAI Ads Manager üzerinden sponsorlu alanlarda ücretli kampanya yayınlamaktır. GEO (Generative Engine Optimization) ise web sitenizin yapay zekâ motorları tarafından anlaşılıp organik cevaplarda kaynak gösterilmesini sağlayan içerik ve teknik optimizasyon sürecidir.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            <strong>Kesin Kural:</strong> Reklam satın alarak ChatGPT'nin organik yanıtını veya tarafsız tavsiyesini değiştiremezsiniz.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Karşılaştırma Tablosu
          </h2>
          <div className="table-wrap" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem' }}>Kriter</th>
                  <th style={{ padding: '0.9rem' }}>ChatGPT Ads (Ücretli)</th>
                  <th style={{ padding: '0.9rem' }}>GEO (Organik AI Görünürlüğü)</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Amaç</td>
                  <td style={{ padding: '0.9rem' }}>Hızlı niyet yakalama ve doğrudan dönüşüm.</td>
                  <td style={{ padding: '0.9rem' }}>Kalıcı marka güveni ve organik kaynak alıntısı.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Ödeme</td>
                  <td style={{ padding: '0.9rem' }}>Tıklama / Gösterim başına açık artırma.</td>
                  <td style={{ padding: '0.9rem' }}>Teknik & İçerik danışmanlığı (Medya harcaması yok).</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Görünüm</td>
                  <td style={{ padding: '0.9rem' }}>Açıkça 'Sponsorlu / Ad' etiketli kutu.</td>
                  <td style={{ padding: '0.9rem' }}>Yapay zekânın yanıt metninde kaynak ve dipnot linki.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>İki Stratejiyi Birlikte Yönetin</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            <a href="/chatgpt-reklamlari/">ChatGPT Ads kampanya yönetimi</a> ve <a href="/geo-yapay-zeka-gorunurlugu/">GEO danışmanlığımız</a> ile markanızı tam donanımlı hale getirin.
          </p>
          <a className="button primary" href="/iletisim/">Bütünleşik Strateji İsteyin <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function BlogContextHintsPage() {
  return (
    <Detail
      eyebrow="Kampanya Kurulumu & Bağlam"
      title="ChatGPT Ads Context Hints Nasıl Yazılır?"
      summary="ChatGPT Ads kampanyalarında context hints yazımı, kullanıcı karar anları, negatif bağlam filtreleri ve sektör örnekleri."
      cta="Bağlam Kütüphanenizi Hazırlayalım"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Context Hints Nedir ve Nasıl Çalışır?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Context hints; geleneksel arama motorlarındaki kelime eşleme yerine, yapay zekâya reklamınızın hangi problem, hangi kullanıcı profili ve hangi satın alma kararı esnasında uygun olduğunu doğal dille açıklayan yönlendirici bağlam ipuçlarıdır.
          </p>
        </section>

        <section style={{ marginBottom: '3rem', background: 'var(--chat-surface)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#ffffff' }}>
            Üç Sektör İçin Context Hints Örnekleri
          </h2>
          <div style={{ marginBottom: '1.5rem' }}>
            <strong style={{ color: 'var(--chat-green)' }}>1. B2B SaaS (Muhasebe & ERP):</strong>
            <p style={{ color: 'var(--chat-text-secondary)', margin: '0.4rem 0 0' }}>
              "Türkiye'de e-fatura entegrasyonu ve stok takibi arayan 5-50 çalışanlı işletmelerin bulut tabanlı yazılım karşılaştırmaları."
            </p>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <strong style={{ color: 'var(--chat-green)' }}>2. Sağlık Turizmi:</strong>
            <p style={{ color: 'var(--chat-text-secondary)', margin: '0.4rem 0 0' }}>
              "Avrupa'dan Türkiye'de diş implantı veya göz cerrahisi yaptırmak isteyen hastaların klinik güvenilirliği ve paket fiyat araştırmaları."
            </p>
          </div>
          <div>
            <strong style={{ color: 'var(--chat-green)' }}>3. Kurumsal Danışmanlık:</strong>
            <p style={{ color: 'var(--chat-text-secondary)', margin: '0.4rem 0 0' }}>
              "Yurtdışında şirket kurmak ve vergi optimizasyonu sağlamak isteyen teknoloji girişimcilerinin hukuki danışmanlık talepleri."
            </p>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Sektörünüze Özel Bağlam Haritası Hazırlayalım</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            <a href="/chatgpt-reklamlari/">ChatGPT reklam yönetimi</a> ekibimizle markanızın context hints matrisini oluşturun.
          </p>
          <a className="button primary" href="/iletisim/">Context Hints Desteği Alın <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function BlogMeasurementPage() {
  return (
    <Detail
      eyebrow="Performans & Analitik"
      title="ChatGPT Reklam Performansı Nasıl Ölçülür?"
      summary="ChatGPT Ads dönüşüm takibi, Pixel ve Conversions API entegrasyonu, UTM şablonları ve nitelikli talep kalitesinin ölçümü."
      cta="Ölçüm Altyapınızı Kuralım"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Yalnızca Tıklama Değil, Nitelikli Talep ve CRM Satışı
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            ChatGPT reklamlarında başarı, gelen trafiğin sayısıyla değil; gelen potansiyel müşterilerin form doldurma, demo talep etme ve gerçek satışa dönüşme oranıyla ölçülür.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Ölçüm Zincirinin 4 Temel Halkası
          </h2>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li><strong>UTM Parametreleri:</strong> Kampanya, reklam grubu ve bağlam seviyesinde ayrıştırılmış izleme etiketleri.</li>
            <li><strong>OpenAI Pixel:</strong> Web sitenizdeki sayfa görüntüleme, sepete ekleme ve form tamamlama tetikleyicileri.</li>
            <li><strong>Conversions API (CAPI):</strong> Reklam engelleyicilerden etkilenmeyen güvenli sunucu tarafı dönüşüm sinyalleri.</li>
            <li><strong>CRM Eşleşmesi:</strong> Gelen lead'lerin satış ekibi tarafından kapatılma süresi ve nihai ciro katkısı.</li>
          </ul>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Şeffaf Dönüşüm Ölçümü Kurulumu</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            <a href="/chatgpt-reklamlari/">ChatGPT Ads yönetimi</a> hizmetimizle piksel ve CAPI kurulumunuzu hatasız yapın.
          </p>
          <a className="button primary" href="/iletisim/">Ölçüm Danışmanlığı Alın <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function BlogTurkeyAccountPage() {
  return (
    <Detail
      eyebrow="Türkiye Uygulama Kılavuzu"
      title="Türkiye'den ChatGPT Reklam Hesabı Nasıl Açılır?"
      summary="Türkiye merkezli işletmeler için OpenAI Ads Manager hesabı açma, tüzel kişilik doğrulaması, vergilendirme ve fatura süreci."
      cta="Hesap Açılış Desteği Alın"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Türkiye'de Erişim Durumu (Son Kontrol: 23 Eylül 2026)
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            OpenAI resmî yardım belgelerine göre Türkiye, Ads Manager Beta programında self-servis erişim listesinde yer almaktadır. Türk şirketleri ads.openai.com üzerinden doğrudan işletme hesabı açabilir.
          </p>
        </section>

        <section style={{ marginBottom: '3rem', background: 'var(--chat-surface)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#ffffff' }}>
            Kimler Hesap Açabilir ve Neler Gerekir?
          </h2>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li>Tüzel kişilik (A.Ş., Ltd. Şti. veya Şahıs şirketi).</li>
            <li>Vergi kimlik numarası (VKN) ve vergi dairesi.</li>
            <li>Şirket uzantılı kurumsal e-posta adresi.</li>
            <li>Yasal gereksinimlere (KVKK, Gizlilik) uygun kurumsal web sitesi.</li>
            <li>Uluslararası ödemelere açık kurumsal kredi kartı.</li>
          </ul>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Türkiye'den Sorunsuz Hesap Açılışı</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            <a href="/chatgpt-reklamlari-turkiye/">ChatGPT reklamları Türkiye</a> rehberimizi inceleyin veya uzmanlarımızdan kurulum desteği alın.
          </p>
          <a className="button primary" href="/iletisim/">Kurulum Desteği İsteyin <Arrow /></a>
        </div>
      </div>
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

function AuditPage() {
  return (
    <Layout>
      <main>
        <AuditModule />
      </main>
    </Layout>
  )
}

function App() {
  const path = location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/') return <Home />
  if (path === '/yapay-zekada-reklam-ajansi') return <YapayZekadaReklamAjansiPage />
  if (path === '/blog/yapay-zekada-reklam-nasil-verilir') return <YapayZekadaReklamNasilVerilirPage />
  if (path === '/chatgpt-reklamlari') return <ChatGPTAdsPage />
  if (path === '/chatgpt-reklam-verme') return <ChatGPTGuidePage />
  if (path === '/chatgpt-reklam-fiyatlari') return <ChatGPTPricePage />
  if (path === '/chatgpt-reklamlari-turkiye') return <ChatGPTTurkeyPage />
  if (path === '/geo-yapay-zeka-gorunurlugu') return <GEOPage />
  if (path === '/yapay-zeka-platformlarinda-reklam') return <AIPlatformsPage />
  if (path === '/blog/chatgpt-reklam-maliyeti') return <BlogCostPage />
  if (path === '/blog/chatgpt-ads-geo-farki') return <BlogGeoDiffPage />
  if (path === '/blog/chatgpt-ads-context-hints') return <BlogContextHintsPage />
  if (path === '/blog/chatgpt-reklam-olcumu') return <BlogMeasurementPage />
  if (path === '/blog/turkiyeden-chatgpt-reklam-hesabi') return <BlogTurkeyAccountPage />
  if (path === '/blog/yapay-zeka-ile-reklam-verme-nasil-yapilir') return <PillarGuide />
  if (path === '/iletisim') return <Contact />
  if (path === '/blog') return <Blog />
  if (path === '/yapay-zeka-gorunurluk-analizi' || path === '/analiz') return <AuditPage />
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
