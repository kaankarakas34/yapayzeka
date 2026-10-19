import { useState, type FormEvent } from 'react'
import { Arrow, Layout, SendIcon } from './SiteChrome'
import { LeadContactForm } from './LeadContactForm'
import faqs from './content/home-faq.json'
import { AuditWidget } from './AuditWidget'

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
  const [paused, setPaused] = useState(false)
  return (
    <section className="ai-marquee-section" aria-label="Yapay Zekâ Ekosistemi Logo Slider">
      <button className="marquee-toggle" type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
        {paused ? 'Logo akışını oynat' : 'Logo akışını duraklat'}
      </button>
      <div className="ai-marquee-viewport">
        <div className="ai-marquee-track" style={{ animationPlayState: paused ? 'paused' : 'running' }}>
          {/* Çift set kesintisiz sonsuz döngü (infinite seamless loop) sağlar */}
          {[...aiLogos, ...aiLogos].map((item, idx) => (
            <div key={`${item.name}-${idx}`} className="ai-logo-card" aria-hidden={idx >= aiLogos.length}>
              <div className="ai-logo-icon-wrap">
                <img
                  src={item.logo}
                  alt={`${item.name} Logo`}
                  className="ai-logo-img"
                  width="32"
                  height="32"
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

const businessSectors = [
  {
    id: 'b2b',
    name: 'B2B Yazılım & SaaS',
    shortName: 'B2B SaaS',
    icon: '🏢',
    score: 98,
    color: 'var(--chat-green-text)',
    colorRgb: '16, 163, 127',
    badge: 'Maksimum Dönüşüm & ROAS',
    query: '50 kişilik şirketimiz için muhasebe ve e-fatura entegrasyonlu en iyi CRM yazılımı hangisi? Karşılaştırmalı maliyet çıkarır mısın?',
    adBrand: 'CloudDesk AI · B2B Satış & CRM Otomasyonu',
    adDescription: 'Türkiye mevzuatına tam uyumlu, 100+ kurumsal entegrasyon ve 14 gün ücretsiz demo. Satın alma aşamasındaki 3.000+ işletmenin tercihi.',
    adCta: 'Ücretsiz Demoyu Başlat',
    intentSummary: 'Kullanıcılar satın alma kararından hemen önce yapay zekâya derin kıyaslama yaptırır. Karar anında beliren sponsorlu yerleşim, geleneksel arama motorlarından 3 kat daha hızlı sözleşmeye döner.',
    contextHintSnippet: 'Context Hints: "B2B SaaS, CRM arayışı, satış ekibi otomasyonu, kurumsal ERP entegrasyonu isteyen KOBİ ve kurumsal yöneticiler"',
    metrics: [
      { label: 'Dönüşüm Oranı', value: '%4.8', note: 'Klasik reklamlardan 2.8x yüksek' },
      { label: 'Karar Verici Lead', value: '%92', note: 'Doğrudan bütçe onay yetkilisi' },
      { label: 'Satış Döngüsü', value: '-65%', note: '14 günden 3-5 güne kısalma' },
    ],
  },
  {
    id: 'consulting',
    name: 'Profesyonel Danışmanlık',
    shortName: 'Danışmanlık',
    icon: '💼',
    score: 95,
    color: '#00f0ff',
    colorRgb: '0, 240, 255',
    badge: 'Yüksek Sepet & Güven Odaklı',
    query: 'İngiltere ve Amerika\'da şirket kuruluşu, vergi planlaması ve ticari banka hesabı için en güvenilir danışmanlık firması kim?',
    adBrand: 'GlobalNova · Uluslararası Şirket & Vergi Yönetimi',
    adDescription: 'Londra ve Delaware merkezli şirket kuruluşu, çifte vergilendirmeyi önleme ve global banka hesabı açılışı. 24 saatte ücretsiz ön uygunluk denetimi.',
    adCta: 'Ücretsiz Ön Danışmanlık Al',
    intentSummary: 'Hukuk, finans, dış ticaret ve teknoloji danışmanlığı yüksek güven gerektirir. Modelden tavsiye isteyen üst düzey yöneticiler doğrudan sponsorlu uzmanla eşleşir.',
    contextHintSnippet: 'Context Hints: "Yurtdışı şirket açılışı, global vergi planlaması, kurumsal danışmanlık arayan şirket sahipleri"',
    metrics: [
      { label: 'Ortalama Sözleşme', value: '5.000$+', note: 'Yüksek bütçeli kurumsal talep' },
      { label: 'Güven Endeksi', value: '%96', note: 'Sponsorlu tavsiye kabulü' },
      { label: 'Toplantı Alma Oranı', value: '%16.4', note: 'Doğrudan takvime rezervasyon' },
    ],
  },
  {
    id: 'ecommerce',
    name: 'Nitelikli E-Ticaret & Niş',
    shortName: 'E-Ticaret & Niş',
    icon: '🛍️',
    score: 92,
    color: '#c084fc',
    colorRgb: '192, 132, 252',
    badge: 'Karşılaştırmalı Alışveriş',
    query: 'Evcil hayvan tüyü için en güçlü hepa filtreli ve lazerli robot süpürge tavsiyesi verir misin? En sessiz modeller neler?',
    adBrand: 'AeroClean Pro Max · Evcil Hayvan Lazerli Akıllı Robot',
    adDescription: '8500 Pa ultra emiş gücü, dolaşmayan fırça mimarisi ve 2 yıl resmi Türkiye garantisi. Bu haftaya özel ilk siparişte 1.500 ₺ anında indirim.',
    adCta: 'Teknik Özellikleri İncele',
    intentSummary: 'Tüketiciler yüzlerce ürün arasında kararsız kaldığında teknik özellikleri yapay zekâya kıyaslatır. Ürün kartınız tam bu kararsızlık anında tek çözüm olarak belirir.',
    contextHintSnippet: 'Context Hints: "Evcil hayvan sahipleri, lazerli robot süpürge tavsiyesi, hepa filtre arayan tüketiciler"',
    metrics: [
      { label: 'ROAS Beklentisi', value: '450%+', note: 'Spesifik problem-çözüm eşleşmesi' },
      { label: 'Ortalama Sepet', value: '18.500 ₺', note: 'Teknolojik & premium tüketim' },
      { label: 'İade Oranı', value: '<%1.2', note: 'Bilinçli alıcı profili' },
    ],
  },
  {
    id: 'health',
    name: 'Sağlık Turizmi & Regüle',
    shortName: 'Sağlık & Regüle',
    icon: '🏥',
    score: 88,
    color: '#fbbf24',
    colorRgb: '251, 191, 36',
    badge: 'Politika Uyumlu Global Lead',
    query: 'What are the all-on-4 dental implant costs and VIP clinic options in Istanbul with FDA-certified materials?',
    adBrand: 'VeraDental Istanbul · VIP Dental Implant & Aesthetic Clinic',
    adDescription: 'FDA & CE onaylı implantlar, 5 yıldızlı otel konaklama ve havalimanı VIP transfer dahil her şey dahil tedavi paketleri.',
    adCta: 'Get Free Treatment Plan',
    intentSummary: 'Yurtdışından Türkiye\'ye tedavi planlayan yüksek bütçeli hastalar OpenAI politikalarına %100 uyumlu kurgularla en düşük rekabet ortamında karşılanır.',
    contextHintSnippet: 'Context Hints: "Dental tourism Turkey, all-on-4 implants Istanbul, VIP clinic treatment abroad, UK/EU patients"',
    metrics: [
      { label: 'Yabancı Hasta Talebi', value: '3.500€+', note: 'Yüksek döviz girdili nitelikli lead' },
      { label: 'WhatsApp Başlatma', value: '%22', note: 'Anında hasta koordinatörü teması' },
      { label: 'OpenAI Uyum', value: '%100', note: 'Politika onaylı lisanslı kampanya' },
    ],
  },
  {
    id: 'education',
    name: 'Akademi & Kurumsal Eğitim',
    shortName: 'Eğitim & Akademi',
    icon: '🎓',
    score: 90,
    color: '#38bdf8',
    colorRgb: '56, 189, 248',
    badge: 'Kariyer & Yetkinlik',
    query: 'Yapay zekâ ve makine öğrenimi alanında uluslararası sertifika veren, canlı mentorluk içeren en iyi eğitim programı nedir?',
    adBrand: 'AI Leadership Academy · 12 Haftalık İleri Düzey Program',
    adDescription: 'Silikon Vadisi müfredatı, haftalık birebir mentorluk ve global geçerli CPD sertifikası. Yeni dönem kayıtları için son 10 kontenjan.',
    adCta: 'Müfredatı ve Kontenjanı Gör',
    intentSummary: 'Kariyer basamağını yükseltmek ve bütçe ayırmak isteyen profesyoneller doğru programı ChatGPT ile araştırırken doğrudan kayıt formunuza yönlendirilir.',
    contextHintSnippet: 'Context Hints: "Yapay zekâ eğitimi, machine learning bootcamp, kurumsal veri bilimi sertifikasyonu"',
    metrics: [
      { label: 'Müfredat İndirme', value: '%18.2', note: 'Yüksek kaliteli aday veri tabanı' },
      { label: 'Kayıt Dönüşümü', value: '%6.5', note: 'Telefonla danışmanlık satışı' },
      { label: 'CAC Avantajı', value: '-%35', note: 'Google Ads\'e kıyasla maliyet' },
    ],
  },
]

function SuitableBusinessesNeonSection() {
  const [activeTab, setActiveTab] = useState(0)
  const current = businessSectors[activeTab]

  return (
    <section className="neon-suitable-section" id="hangi-isletmeler-uygun">
      {/* Hareketli Arka Plan Neon Ambient Işıkları */}
      <div 
        className="neon-ambient-glow glow-1" 
        style={{ background: `radial-gradient(circle, rgba(${current.colorRgb}, 0.22) 0%, transparent 70%)` }} 
      />
      <div 
        className="neon-ambient-glow glow-2" 
        style={{ background: `radial-gradient(circle, rgba(${current.colorRgb}, 0.12) 0%, transparent 65%)` }} 
      />

      <div className="neon-container">
        {/* Bölüm Başlığı */}
        <div className="neon-header">
          <div 
            className="neon-badge-pulse" 
            style={{ 
              borderColor: `rgba(${current.colorRgb}, 0.45)`, 
              color: current.color, 
              boxShadow: `0 0 20px rgba(${current.colorRgb}, 0.25)` 
            }}
          >
            <span className="neon-dot-blinking" style={{ background: current.color, boxShadow: `0 0 10px ${current.color}` }} />
            <span>AI HEDEFLEME & KARAR ANI UYUM ANALİZİ</span>
          </div>

          <h2 className="neon-main-title">
            ChatGPT Reklamları <span className="neon-gradient-text" style={{ textShadow: `0 0 35px rgba(${current.colorRgb}, 0.45)` }}>Hangi İşletmeler İçin</span> Uygundur?
          </h2>

          <p className="neon-main-subtitle">
            ChatGPT kullanıcısı klasik arama motoru gibi anahtar kelime aramaz; doğrudan <strong>satın alma, kıyaslama ve tavsiye</strong> ister. Karar anı niyeti yüksek olan sektörler en yüksek dönüşüm ve ROAS oranına ulaşır.
          </p>
        </div>

        {/* Neon Kategori Seçici (Interactive Switcher) */}
        <div className="neon-tabs-bar" role="tablist" aria-label="Sektör Uygunluğu">
          {businessSectors.map((sector, index) => {
            const isActive = index === activeTab
            return (
              <button
                key={sector.id}
                type="button"
                role="tab"
                id={`sector-tab-${sector.id}`}
                aria-controls="sector-panel"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onKeyDown={(event) => {
                  const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End']
                  if (!keys.includes(event.key)) return
                  event.preventDefault()
                  const next = event.key === 'Home' ? 0
                    : event.key === 'End' ? businessSectors.length - 1
                    : (index + (event.key === 'ArrowRight' ? 1 : -1) + businessSectors.length) % businessSectors.length
                  setActiveTab(next)
                  document.getElementById(`sector-tab-${businessSectors[next].id}`)?.focus()
                }}
                onClick={() => setActiveTab(index)}
                className={`neon-tab-item ${isActive ? 'active' : ''}`}
                style={isActive ? {
                  borderColor: sector.color,
                  boxShadow: `0 0 25px rgba(${sector.colorRgb}, 0.3), inset 0 0 15px rgba(${sector.colorRgb}, 0.15)`,
                  color: '#ffffff'
                } : {}}
              >
                <span className="neon-tab-icon">{sector.icon}</span>
                <span className="neon-tab-label">{sector.name}</span>
                <span 
                  className="neon-tab-score-pill"
                  style={isActive ? { background: sector.color, color: '#090a0d', boxShadow: `0 0 10px ${sector.color}` } : {}}
                >
                  %{sector.score}
                </span>
              </button>
            )
          })}
        </div>

        {/* Canlı Karar Anı Vitrini (Neon Simulation & Analysis Showcase) */}
        <div 
          className="neon-showcase-grid" 
          id="sector-panel"
          role="tabpanel"
          aria-labelledby={`sector-tab-${current.id}`}
          tabIndex={0}
          style={{ 
            borderColor: `rgba(${current.colorRgb}, 0.35)`, 
            boxShadow: `0 20px 60px -20px rgba(${current.colorRgb}, 0.25)` 
          }}
        >
          {/* Sol Kolon: Canlı ChatGPT Karar Anı Simülatörü */}
          <div className="neon-simulator-card">
            <div className="sim-header">
              <div className="sim-dots">
                <span className="sim-dot red" />
                <span className="sim-dot yellow" />
                <span className="sim-dot green" />
              </div>
              <div className="sim-title">
                <span className="sim-icon">⚡</span>
                <span>OpenAI Ads Engine Beta · Karar Anı Önizleme</span>
              </div>
              <div className="sim-live-badge" style={{ color: current.color }}>
                ● CANLI TEST
              </div>
            </div>

            <div className="sim-body">
              {/* Kullanıcı Sorusu */}
              <div className="sim-message user">
                <div className="sim-user-avatar">SEN</div>
                <div className="sim-bubble user-bubble">
                  {current.query}
                </div>
              </div>

              {/* Bot Sponsorlu Reklam Yanıtı */}
              <div className="sim-message bot">
                <div className="sim-bot-avatar" style={{ background: current.color, boxShadow: `0 0 15px ${current.color}` }}>
                  <img src="/images/logos/chatgpt.svg" alt="ChatGPT" width="18" height="18" />
                </div>
                <div className="sim-bot-content">
                  {/* Sponsorlu Reklam Kartı */}
                  <div 
                    className="sim-ad-box" 
                    style={{ 
                      borderColor: `rgba(${current.colorRgb}, 0.6)`, 
                      boxShadow: `0 0 30px rgba(${current.colorRgb}, 0.18)` 
                    }}
                  >
                    <div className="sim-ad-top">
                      <span 
                        className="sim-ad-badge" 
                        style={{ 
                          background: `rgba(${current.colorRgb}, 0.2)`, 
                          color: current.color, 
                          borderColor: current.color 
                        }}
                      >
                        SPONSORLU / AD
                      </span>
                      <span className="sim-ad-match" style={{ color: current.color }}>
                        ✓ %{current.score} Karar Anı Eşleşmesi
                      </span>
                    </div>

                    <h3 className="sim-ad-title">{current.adBrand}</h3>
                    <p className="sim-ad-desc">{current.adDescription}</p>

                    <div className="sim-ad-action-row">
                      <a 
                        href="/iletisim/" 
                        className="sim-ad-cta-btn" 
                        style={{ 
                          background: current.color, 
                          boxShadow: `0 0 20px rgba(${current.colorRgb}, 0.5)` 
                        }}
                      >
                        <span>{current.adCta}</span>
                        <Arrow />
                      </a>
                      <span className="sim-ad-verified">🛡️ Doğrulanmış OpenAI Reklamvereni</span>
                    </div>
                  </div>

                  <p className="sim-model-organic-note">
                    ChatGPT bu reklamı konuşma bağlamınıza göre listeledi. Sponsorlu içerikler organik model yanıtını değiştirmez.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Neden Kazandırır & Context Hints Detayı */}
          <div className="neon-analysis-card">
            <div className="analysis-header-row">
              <div 
                className="analysis-badge" 
                style={{ 
                  background: `rgba(${current.colorRgb}, 0.15)`, 
                  color: current.color, 
                  borderColor: `rgba(${current.colorRgb}, 0.4)` 
                }}
              >
                {current.badge}
              </div>
              <div className="analysis-score-wrap">
                <span className="score-num" style={{ color: current.color, textShadow: `0 0 20px ${current.color}` }}>
                  %{current.score}
                </span>
                <span className="score-label">Uygunluk Skoru</span>
              </div>
            </div>

            {/* Neon Bar */}
            <div className="neon-meter-track">
              <div 
                className="neon-meter-fill" 
                style={{ 
                  width: `${current.score}%`, 
                  background: `linear-gradient(90deg, rgba(${current.colorRgb}, 0.5), ${current.color})`, 
                  boxShadow: `0 0 15px ${current.color}` 
                }} 
              />
            </div>

            <div className="analysis-section">
              <h3 className="analysis-subheading">Neden Bu Sektör Kazandırır?</h3>
              <p className="analysis-text">{current.intentSummary}</p>
            </div>

            <div className="analysis-section">
              <h3 className="analysis-subheading">Örnek Context Hints (Bağlam İpucu)</h3>
              <div className="neon-code-box" style={{ borderColor: `rgba(${current.colorRgb}, 0.3)` }}>
                <code>{current.contextHintSnippet}</code>
              </div>
            </div>

            {/* Metrikler */}
            <div className="neon-metrics-grid">
              {current.metrics.map((m) => (
                <div key={m.label} className="neon-metric-item">
                  <span className="metric-val" style={{ color: current.color }}>{m.value}</span>
                  <span className="metric-lbl">{m.label}</span>
                  <span className="metric-note">{m.note}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="analysis-footer-cta">
              <a 
                href={`/iletisim/?sektor=${encodeURIComponent(current.name)}`} 
                className="neon-action-button"
                style={{ 
                  background: `linear-gradient(135deg, ${current.color}, rgba(${current.colorRgb}, 0.8))`,
                  boxShadow: `0 6px 25px rgba(${current.colorRgb}, 0.4)`
                }}
              >
                <span>{current.shortName} İçin Reklam Planı İsteyin</span>
                <Arrow />
              </a>
            </div>
          </div>
        </div>

        {/* Alt Kısım: 4'lü Özet Karşılaştırma Neon Kartları */}
        <div className="neon-cards-summary-grid">
          {businessSectors.slice(0, 4).map((sec, i) => (
            <div 
              key={sec.id} 
              className={`neon-mini-card ${i === activeTab ? 'active-mini' : ''}`}
              onClick={() => setActiveTab(i)}
              style={i === activeTab ? { borderColor: sec.color, boxShadow: `0 0 25px rgba(${sec.colorRgb}, 0.25)` } : {}}
            >
              <div className="mini-card-top">
                <span className="mini-card-icon" style={{ background: `rgba(${sec.colorRgb}, 0.15)`, color: sec.color }}>
                  {sec.icon}
                </span>
                <span className="mini-card-score" style={{ color: sec.color }}>
                  %{sec.score} Uyum
                </span>
              </div>
              <h4 className="mini-card-title">{sec.name}</h4>
              <p className="mini-card-desc">{sec.intentSummary.slice(0, 105)}...</p>
              <div className="mini-card-link" style={{ color: sec.color }}>
                Detaylı İncele →
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
      <main id="main-content" tabIndex={-1}>
        {/* Vurucu Hero Section */}
        <section className="hero section-pad">
          {/* Marka İlişkisi Açıklaması */}
          <div className="openai-partner-lockup" title="ChatGPT Reklamları Danışmanlığı · Overseas Marketing">
            <div className="lockup-brand-side">
              <img src="/images/logos/chatgpt.svg" alt="ChatGPT" className="lockup-chatgpt-img" width="26" height="26" />
              <span className="lockup-chatgpt-text">ChatGPT Ads</span>
            </div>
            <div className="lockup-divider" aria-hidden="true" />
            <div className="lockup-partner-side">
              <img src="/images/overseas-siyah.png" alt="Overseas Marketing" className="lockup-overseas-img" width="254" height="20" />
            </div>
          </div>

          <h1>
            Yapay zekada reklam:<br />
            ChatGPT Ads ve <em>AI görünürlüğü</em>
          </h1>

          <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '14px', padding: '1.2rem 1.6rem', margin: '1.5rem auto 1.8rem', maxWidth: '820px', textAlign: 'left', lineHeight: 1.7 }}>
            <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.4rem', fontSize: '1.02rem' }}>
              ChatGPT'de markanızın organik cevaplarda görünmesini mi, sponsorlu reklam alanında yer almasını mı istiyorsunuz?
            </strong>
            <p style={{ color: 'var(--chat-text-secondary)', margin: 0, fontSize: '0.98rem' }}>
              Bu iki hedefin yöntemi ve ölçümü farklıdır. <a href="/chatgptde-markam-nasil-cikar/" style={{ color: 'var(--chat-green-text)', fontWeight: 600 }}>Organik görünürlük rehberi</a> ile sitenizin bilgi ve kaynak yapısını geliştirin; <a href="/chatgpt-reklam-verme/" style={{ color: 'var(--chat-green-text)', fontWeight: 600 }}>ChatGPT reklam verme rehberi</a> ile Ads Manager uygunluğunu ve kampanya adımlarını öğrenin.
            </p>
          </div>

          <p className="hero-subtitle">
            Müşterileriniz ürün ve hizmetleri yapay zekâ araçlarında da araştırıyor. Markanız için ChatGPT'de sponsorlu reklam kampanyalarını, yapay zekâ yanıtlarında organik görünürlüğü ve AI destekli Google/Meta reklam yönetimini ayrı hedeflerle planlıyoruz. Önce uygun kanalı belirliyor, sonra sonuçları ölçüyoruz.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a className="button primary" href="/chatgptde-markam-nasil-cikar/">Markam ChatGPT'de nasıl çıkar? <Arrow /></a>
            <a className="button secondary" href="/chatgpt-reklam-verme/">ChatGPT'de reklam nasıl verilir? <Arrow /></a>
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
                  <a href="/openai-ads-manager/" style={{ color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span>OpenAI Ads Manager</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--chat-text-muted)' }}>&gt;</span>
                  </a>
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
                    <img src="/images/logos/chatgpt.svg" alt="ChatGPT" width="24" height="24" style={{ borderRadius: '50%', display: 'block' }} />
                  </div>
                  <div className="chatgpt-bot-text">
                    ChatGPT'de markanızı konumlandırmak için <a href="/openai-ads-manager/" className="chatgpt-bot-highlight"><strong>OpenAI Ads Manager Beta</strong></a> üzerinden sponsorlu reklam kampanyaları kuruyor ve niyet odaklı <strong>context hints (bağlam ipuçları)</strong> tanımlıyoruz. Ayrı bir çalışma olarak organik yanıt otoritesi için <a href="/geo-yapay-zeka-gorunurlugu/" className="chatgpt-bot-highlight">GEO (Generative Engine Optimization)</a> süreçlerini yönetiyoruz.
                  </div>
                </div>
              </div>

              {/* Card Footer (Input & Tools) */}
              <div className="chatgpt-card-footer">
                <form className="chatgpt-card-input-box" onSubmit={handlePromptSubmit}>
                  <input
                    type="text"
                    placeholder="Sektörünüzü veya kampanya hedefinizi yazın..."
                    aria-label="Sektörünüz veya kampanya hedefiniz"
                    name="campaign-goal"
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
            <a className="button secondary" href="#ai-gorunurluk">
              Ücretsiz AI Görünürlük Ön Analizi <Arrow />
            </a>
          </div>
        </section>

        {/* 12 AI Modeli Kayan Logo Slider */}
        <AILogoMarquee />

        {/* Karar Merkezi: "Ne Arıyorsunuz?" Arama Niyeti Yönlendirmesi */}
        <section className="section-pad" style={{ background: 'var(--chat-surface)', borderTop: '1px solid var(--chat-border)', borderBottom: '1px solid var(--chat-border)' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-tag" style={{ color: 'var(--chat-green-text)', fontWeight: 600, fontSize: '0.85rem' }}>Hızlı Karar Rehberi</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0.6rem 0 1rem', color: '#ffffff' }}>
              Ne Arıyorsunuz? İhtiyacınıza Uygun Doğru Adımı Seçin
            </h2>
            <p style={{ color: 'var(--chat-text-secondary)', maxWidth: '720px', margin: '0 auto 2.5rem', lineHeight: 1.7, fontSize: '1.02rem' }}>
              Yapay zekâda görünürlük ve reklamcılık farklı hedefler içerir. Arama niyetinize göre tasarlanmış doğrudan çözüme geçin:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem', textAlign: 'left' }}>
              <a href="/chatgpt-reklam-verme/" style={{ background: '#171717', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1.5rem', textDecoration: 'none', transition: 'border-color 0.2s', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🎯</div>
                  <strong style={{ color: '#ffffff', fontSize: '1.1rem', display: 'block', marginBottom: '0.4rem' }}>ChatGPT'de Reklam Vermek İstiyorum</strong>
                  <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>OpenAI Ads Manager self-servis panelinden hesap açma, Türkiye şartları ve ilk kampanya kurulum adımları.</p>
                </div>
                <span style={{ color: 'var(--chat-green-text)', fontWeight: 600, fontSize: '0.85rem', marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>Kurulum Rehberini Aç ➔</span>
              </a>

              <a href="/chatgptde-markam-nasil-cikar/" style={{ background: '#171717', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1.5rem', textDecoration: 'none', transition: 'border-color 0.2s', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🔍</div>
                  <strong style={{ color: '#ffffff', fontSize: '1.1rem', display: 'block', marginBottom: '0.4rem' }}>Markam ChatGPT'de Görünmüyor</strong>
                  <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>Reklam satın almadan organik yanıtlarda kaynak gösterilmek, OAI-SearchBot erişimi ve entity optimizasyonu.</p>
                </div>
                <span style={{ color: 'var(--chat-green-text)', fontWeight: 600, fontSize: '0.85rem', marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>GEO Görünürlük Rehberi ➔</span>
              </a>

              <a href="/chatgpt-reklamlari/" style={{ background: '#171717', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1.5rem', textDecoration: 'none', transition: 'border-color 0.2s', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>💼</div>
                  <strong style={{ color: '#ffffff', fontSize: '1.1rem', display: 'block', marginBottom: '0.4rem' }}>Reklamları Yönetecek Ajans Arıyorum</strong>
                  <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>Context hints kütüphanesi, CAPI ölçümü, landing page mimarisi ve uçtan uca OpenAI Ads ajans yönetimi.</p>
                </div>
                <span style={{ color: 'var(--chat-green-text)', fontWeight: 600, fontSize: '0.85rem', marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>Hizmet Kapsamını Gör ➔</span>
              </a>

              <a href="/yapay-zeka-gorunurluk-analizi/" style={{ background: '#171717', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1.5rem', textDecoration: 'none', transition: 'border-color 0.2s', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>⚡</div>
                  <strong style={{ color: '#ffffff', fontSize: '1.1rem', display: 'block', marginBottom: '0.4rem' }}>AI Görünürlüğümü Ölçmek İstiyorum</strong>
                  <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>ChatGPT, Perplexity, Gemini ve Claude üzerinde web sitenizin anılma ve tavsiye indeksini anında test edin.</p>
                </div>
                <span style={{ color: 'var(--chat-green-text)', fontWeight: 600, fontSize: '0.85rem', marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>Canlı Test Konsolunu Aç ➔</span>
              </a>

              <a href="/chatgpt-reklam-fiyatlari/" style={{ background: '#171717', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1.5rem', textDecoration: 'none', transition: 'border-color 0.2s', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>💰</div>
                  <strong style={{ color: '#ffffff', fontSize: '1.1rem', display: 'block', marginBottom: '0.4rem' }}>Reklam Fiyatları ve Bütçeyi Öğrenmek İstiyorum</strong>
                  <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>Açık artırma modelleri (CPC/CPM), pilot test bütçe hesabı ve şeffaf ajans yönetim bedeli ayrımı.</p>
                </div>
                <span style={{ color: 'var(--chat-green-text)', fontWeight: 600, fontSize: '0.85rem', marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>Fiyat & Bütçe Matrisini İncele ➔</span>
              </a>

              <a href="/blog/chatgpt-ads-context-hints/" style={{ background: '#171717', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1.5rem', textDecoration: 'none', transition: 'border-color 0.2s', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🧠</div>
                  <strong style={{ color: '#ffffff', fontSize: '1.1rem', display: 'block', marginBottom: '0.4rem' }}>Context Hints Nasıl Yazılır?</strong>
                  <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>Konuşma niyetini açıklayan 25 bağlam örneği; kesin eşleme ve hedefleme kurallarından farkları.</p>
                </div>
                <span style={{ color: 'var(--chat-green-text)', fontWeight: 600, fontSize: '0.85rem', marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>25 Örnekli Rehberi Oku ➔</span>
              </a>
            </div>
          </div>
        </section>

        {/* Yapay Zekâ Görünürlük Analizi Modülü */}
        <section id="ai-gorunurluk" className="audit-home-section">
          <AuditWidget />
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
            <div className="turkey-guide-cta-wrapper">
              <a href="/chatgpt-reklamlari-turkiye/" className="turkey-guide-neon-btn">
                <div className="btn-glow-layer" />
                <div className="btn-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="btn-text-group">
                  <span className="btn-micro-badge">TÜRKİYE ŞİRKET DOĞRULAMA & ERİŞİM REHBERİ</span>
                  <span className="btn-main-text">ChatGPT Reklamları Türkiye Rehberini İnceleyin</span>
                </div>
                <div className="btn-arrow-circle">
                  <Arrow />
                </div>
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
              <div style={{ fontSize: '0.82rem', color: 'var(--chat-green-text)', marginTop: '0.8rem', fontWeight: 600 }}>Çıktı: Reklam Uygunluk Raporu</div>
            </div>

            <div className="service-card">
              <span className="service-number">02 / AŞAMA</span>
              <h3>Kampanya & Context Hints Mimarisi</h3>
              <p>Geleneksel anahtar kelimeler yerine, ürününüzün çözüm sunduğu müşteri problemlerini doğal dille ifade eden bağlamsal ipuçları kurgulanır.</p>
              <div style={{ fontSize: '0.82rem', color: 'var(--chat-green-text)', marginTop: '0.8rem', fontWeight: 600 }}>Çıktı: Context Hints Matrisi</div>
            </div>

            <div className="service-card">
              <span className="service-number">03 / AŞAMA</span>
              <h3>Açılış Sayfası & Kreatif Testi</h3>
              <p>ChatGPT'den tıklayan yüksek niyetli kullanıcıyı doğrudan satın alma veya form doldurmaya yönlendiren hızlı, mobil uyumlu landing page'ler hazırlanır.</p>
              <div style={{ fontSize: '0.82rem', color: 'var(--chat-green-text)', marginTop: '0.8rem', fontWeight: 600 }}>Çıktı: Optimize Açılış Sayfaları</div>
            </div>

            <div className="service-card">
              <span className="service-number">04 / AŞAMA</span>
              <h3>Dönüşüm Ölçümü & Raporlama</h3>
              <p>UTM parametreleri, Conversions API, CRM entegrasyonu ve gerçek satış getirisini (ROAS) şeffaf gösteren haftalık analitik paneller kurulur.</p>
              <div style={{ fontSize: '0.82rem', color: 'var(--chat-green-text)', marginTop: '0.8rem', fontWeight: 600 }}>Çıktı: Performans Dashboard'u</div>
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

          <div tabIndex={0} style={{ maxWidth: '940px', margin: '0 auto', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem', color: '#d1d5db' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.15)', color: '#ffffff' }}>
                  <th style={{ padding: '1rem' }}>Kriter</th>
                  <th style={{ padding: '1rem', color: 'var(--chat-green-text)' }}>ChatGPT Ads (Sponsorlu)</th>
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

        {/* 5. BÖLÜM: Hangi İşletmeler İçin Uygundur? (Ultra Modern Hareketli Neon Tasarım) */}
        <SuitableBusinessesNeonSection />

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
                <span style={{ fontSize: '0.75rem', color: 'var(--chat-green-text)', fontWeight: 700 }}>BİLEŞEN 01</span>
                <h3 style={{ color: '#ffffff', margin: '0.6rem 0' }}>Medya Harcaması (OpenAI)</h3>
                <p style={{ fontSize: '0.92rem', color: '#9ca3af' }}>Doğrudan OpenAI Ads Manager hesabınız üzerinden kredi kartı veya faturalandırma ile OpenAI'ye ödenen tıklama/gösterim maliyetidir.</p>
              </div>
              <div style={{ background: '#171717', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '1.8rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--chat-green-text)', fontWeight: 700 }}>BİLEŞEN 02</span>
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
                    <span style={{ color: 'var(--chat-green-text)' }}>+</span>
                  </summary>
                  <p>{x[1]}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* İletişim & Ön Analiz Form Alanı */}
        <LeadContactForm
          id="ucretsiz-analiz"
          title="Markanız İçin ChatGPT ve Yapay Zekâ Reklam Planı İsteyin"
          subtitle="Sektörünüzü, web sitenizi ve hedefinizi iletin; ChatGPT arama niyetleri, rakip varlığı ve uygun test bütçesiyle 60 dakikada ön analiz hazırlayalım."
        />
      </main>
    </Layout>
  )
}

export { MenuIcon, NewChatIcon, GlobeIcon, LightbulbIcon, MicIcon, VoiceModeIcon, aiLogos, AILogoMarquee, businessSectors, SuitableBusinessesNeonSection, Home }
export default Home
