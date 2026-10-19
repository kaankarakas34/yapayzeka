import { useState, type FormEvent } from 'react'
import { PhoneCallIcon, TargetNavIcon, TagNavIcon, Arrow } from './SiteChrome'

const UserFormIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

const MailFormIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
)

const GlobeFormIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
)

const CheckCircleIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#10a37f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
)

interface LeadContactFormProps {
  id?: string
  title?: string
  subtitle?: string
  defaultService?: string
  defaultQuestion?: string
  isContactPage?: boolean
}

function LeadContactForm({
  id = 'ucretsiz-analiz',
  title = 'Markanız İçin ChatGPT ve Yapay Zekâ Reklam Planı İsteyin',
  subtitle = 'Sektörünüzü, web sitenizi ve hedefinizi iletin; ChatGPT arama niyetleri, rakip varlığı ve uygun test bütçesiyle 60 dakikada ön analiz hazırlayalım.',
  defaultService = "ChatGPT'de Reklam Verme & Ads",
  defaultQuestion = '',
  isContactPage = false,
}: LeadContactFormProps) {
  const [selectedService, setSelectedService] = useState(defaultService)
  const [selectedBudget, setSelectedBudget] = useState('Danışmak İstiyorum')
  const [submitted, setSubmitted] = useState(false)
  const [whatsAppUrl, setWhatsAppUrl] = useState('')

  const serviceOptions = [
    { label: 'ChatGPT Ads Yönetimi', value: "ChatGPT'de Reklam Verme & Ads" },
    { label: 'GEO Organik Görünürlük', value: 'GEO (Organik AI Görünürlüğü)' },
    { label: 'AI Platformlarında Reklam', value: 'ChatGPT, Copilot, Perplexity Reklamları' },
    { label: 'Yapay Zekâ ile Reklam Üretimi', value: 'AI ile Reklam Kreatifi Üretimi' },
    { label: 'Google & Meta AI Ads', value: 'Google & Meta AI Kampanya Yönetimi' },
  ]

  const budgetOptions = [
    'Danışmak İstiyorum',
    '20.000 ₺ - 50.000 ₺',
    '50.000 ₺ - 150.000 ₺',
    '150.000 ₺+',
  ]

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = fd.get('name') as string
    const email = fd.get('email') as string
    const phone = fd.get('phone') as string
    const company = (fd.get('company') as string) || '-'
    const message = (fd.get('message') as string) || '-'

    const formattedMessage = [
      '🚀 *Yapay Zekâda Reklam & ChatGPT Ön Analiz Talebi*',
      '--------------------------------',
      `👤 *Ad Soyad:* ${name}`,
      `📧 *E-posta:* ${email}`,
      `📞 *Telefon:* ${phone}`,
      `🏢 *Şirket / Site:* ${company}`,
      `🎯 *Hizmet:* ${selectedService}`,
      `💰 *Bütçe Aralığı:* ${selectedBudget}`,
      `💬 *Not / Mesaj:* ${message}`,
      '--------------------------------',
      'yapayzekadareklam.com üzerinden gönderildi.'
    ].join('\n')

    const waUrl = `https://wa.me/905363197697?text=${encodeURIComponent(formattedMessage)}`
    setWhatsAppUrl(waUrl)
    setSubmitted(true)

    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank')
    }
  }

  return (
    <section id={id} className={`lead-form-section ${isContactPage ? 'is-contact-page' : ''}`}>
      <div className="lead-form-container">
        {/* Başlık ve Rozet */}
        <div className="lead-form-header">
          <div className="lead-form-badge">
            <span className="pulse-dot"></span>
            <span>Ücretsiz Ön Değerlendirme & Teklif</span>
          </div>
          <h2 className="lead-form-title">{title}</h2>
          <p className="lead-form-subtitle">{subtitle}</p>
        </div>

        {submitted ? (
          <div className="lead-form-success" role="status">
            <div className="success-icon-wrap">
              <CheckCircleIcon />
            </div>
            <h3>Talebiniz Başarıyla Hazırlandı!</h3>
            <p>
              Mesajınız hazırlandı. Talebinizin bize ulaşması için açılan WhatsApp penceresinde Gönder düğmesine basın.
              Görüşme penceresi açılmadıysa aşağıdaki butonla devam edebilirsiniz:
            </p>
            <div className="success-actions">
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="button primary success-wa-btn">
                <WhatsAppIcon /> WhatsApp'ta Hemen Görüşün
              </a>
              <button
                type="button"
                className="button secondary"
                onClick={() => setSubmitted(false)}
              >
                Yeni Form Gönder
              </button>
            </div>
            <div className="success-meta">
              <span>● Ortalama geri dönüş süremiz: 45 dakika</span>
              <span>● Acil görüşmeler için: <strong>0536 319 76 97</strong></span>
            </div>
          </div>
        ) : (
          <div className="lead-form-grid">
            {/* Sol Taraf: Güven Unsurları ve Doğrudan İletişim */}
            <div className="lead-form-sidebar">
              <div className="sidebar-perk-card">
                <h3>Ön Analizde Neler Sunuyoruz?</h3>
                <ul className="perks-list">
                  <li>
                    <span className="perk-bullet">⚡</span>
                    <div>
                      <strong>ChatGPT Arama Niyet Analizi:</strong>
                      <span>Sektörünüzde müşterilerin ChatGPT'de aradığı satın alma sorguları.</span>
                    </div>
                  </li>
                  <li>
                    <span className="perk-bullet">🌐</span>
                    <div>
                      <strong>GEO Görünürlük Durumu:</strong>
                      <span>Markanızın şu anki LLM yanıtlarında tavsiye edilme skoru.</span>
                    </div>
                  </li>
                  <li>
                    <span className="perk-bullet">📊</span>
                    <div>
                      <strong>Net Test Bütçesi & Yol Haritası:</strong>
                      <span>OpenAI Ads Manager kurulum adımları ve tahmini TBM (CPC) maliyetleri.</span>
                    </div>
                  </li>
                  <li>
                    <span className="perk-bullet">🛡️</span>
                    <div>
                      <strong>KVKK & Müşteri Gizliliği:</strong>
                      <span>Bilgileriniz yalnızca analiz ve teklif hazırlığı amacıyla korunur.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Hızlı Danışma Butonları */}
              <div className="direct-contact-box">
                <span className="direct-box-title">Form doldurmak yerine doğrudan görüşün:</span>
                <p>Yapay zekâ reklam uzmanımızla WhatsApp veya telefon üzerinden anında görüşebilirsiniz:</p>
                <div className="direct-buttons-row">
                  <a href="https://wa.me/905363197697" target="_blank" rel="noopener noreferrer" className="direct-wa-btn">
                    <WhatsAppIcon />
                    <div>
                      <small>WhatsApp İle Hemen Yazın</small>
                      <strong>0536 319 76 97</strong>
                    </div>
                  </a>
                  <a href="tel:+905363197697" className="direct-phone-btn">
                    <PhoneCallIcon />
                    <div>
                      <small>Doğrudan Arayın</small>
                      <strong>0536 319 76 97</strong>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Sağ Taraf: İnteraktif Form */}
            <form className="lead-form-element" onSubmit={handleSubmit}>
              <div className="form-fields-grid">
                {/* 1. Ad Soyad */}
                <div className="form-group">
                  <label htmlFor="form-name">
                    <UserFormIcon />
                    <span>Ad Soyad *</span>
                  </label>
                  <input
                    id="form-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Adınız ve Soyadınız"
                    autoComplete="name"
                  />
                </div>

                {/* 2. İş E-postası */}
                <div className="form-group">
                  <label htmlFor="form-email">
                    <MailFormIcon />
                    <span>İş E-postası *</span>
                  </label>
                  <input
                    id="form-email"
                    name="email"
                    type="email"
                    required
                    placeholder="ornek@sirketiniz.com"
                    autoComplete="email"
                    spellCheck={false}
                  />
                </div>

                {/* 3. Telefon Numarası */}
                <div className="form-group">
                  <label htmlFor="form-phone">
                    <PhoneCallIcon />
                    <span>Telefon Numarası *</span>
                  </label>
                  <input
                    id="form-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="05XX XXX XX XX"
                    autoComplete="tel"
                  />
                </div>

                {/* 4. Şirket / Web Sitesi */}
                <div className="form-group">
                  <label htmlFor="form-company">
                    <GlobeFormIcon />
                    <span>Şirket / Web Sitesi</span>
                  </label>
                  <input
                    id="form-company"
                    name="company"
                    type="text"
                    placeholder="sirketiniz.com"
                    autoComplete="organization"
                  />
                </div>

                {/* 5. İlgilendiğiniz Hizmet (Pills) */}
                <div className="form-group full-width">
                  <label>
                    <TargetNavIcon />
                    <span>Öncelikli Hizmet veya Hedefiniz</span>
                  </label>
                  <div className="pill-selector-group">
                    {serviceOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        className={`pill-select-btn ${selectedService === opt.value ? 'active' : ''}`}
                        onClick={() => setSelectedService(opt.value)}
                        aria-pressed={selectedService === opt.value}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 6. Planlanan Aylık Reklam Bütçesi (Pills) */}
                <div className="form-group full-width">
                  <label>
                    <TagNavIcon />
                    <span>Planlanan Reklam / Test Bütçesi</span>
                  </label>
                  <div className="pill-selector-group">
                    {budgetOptions.map((b) => (
                      <button
                        key={b}
                        type="button"
                        className={`pill-select-btn ${selectedBudget === b ? 'active' : ''}`}
                        onClick={() => setSelectedBudget(b)}
                        aria-pressed={selectedBudget === b}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 7. Not veya Özel Soru */}
                <div className="form-group full-width">
                  <label htmlFor="form-message">
                    <span>Projeniz veya Merak Ettiğiniz Detaylar</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={3}
                    defaultValue={defaultQuestion}
                    placeholder="ChatGPT reklamları, sektörünüzdeki hedefleriniz veya bütçeniz hakkında bilgi verebilirsiniz..."
                  />
                </div>

                {/* 8. KVKK Onayı */}
                <div className="form-group full-width form-consent-row">
                  <input id="form-consent" type="checkbox" required />
                  <label htmlFor="form-consent">
                    <a href="/kvkk/" target="_blank" rel="noopener noreferrer">KVKK Aydınlatma Metni</a>'ni okudum, ön analiz amacıyla iletişim kurulmasını onaylıyorum.
                  </label>
                </div>
              </div>

              {/* Gönderim Butonu */}
              <div className="form-submit-row">
                <button type="submit" className="button primary form-submit-btn">
                  <span>Ücretsiz Ön Analiz ve Teklif İsteyin</span>
                  <Arrow />
                </button>
                <div className="form-guarantee-note">
                  <span>🔒 Bilgileriniz gizlidir</span>
                  <span>⚡ 60 dakikada geri dönüş</span>
                  <span>✓ Taahhüt gerektirmez</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}

export { UserFormIcon, MailFormIcon, GlobeFormIcon, WhatsAppIcon, CheckCircleIcon, LeadContactForm }
export type { LeadContactFormProps }
