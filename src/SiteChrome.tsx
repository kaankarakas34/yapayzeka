import { useState, useEffect, type ReactNode } from 'react'

const updated = '2026 Güncellemesi'

const Arrow = () => <span aria-hidden="true">↗</span>

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
)

const PhoneCallIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
)

const TargetNavIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
)

const TagNavIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <line x1="7" y1="7" x2="7.01" y2="7"></line>
  </svg>
)

const ChatGptSidebarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="18" height="18" x="3" y="3" rx="3"></rect>
    <line x1="9" y1="3" x2="9" y2="21"></line>
  </svg>
)

const BrandLogo = () => (
  <a className="brand-logo" href="/" title="ChatGPT Ads Marketing - By Overseas Marketing">
    <div className="brand-logo-badge">
      <img src="/images/logos/chatgpt.svg" alt="ChatGPT" className="brand-logo-img" width="30" height="30" />
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

const EditSquareIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)

const LibraryIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)

const AtSignIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
  </svg>
)

const DotsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="5" cy="12" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="19" cy="12" r="1.5" />
  </svg>
)

const FolderOutlineIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
)

const SearchMiniIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const SidebarToggleMiniIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="9" y1="3" x2="9" y2="21" />
  </svg>
)

function ChatGptSidebar({
  isOpen,
  onToggle,
  onClose,
}: {
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPath, setCurrentPath] = useState('/')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname.replace(/\/+$/, '') || '/')
    }
  }, [])

  const handleLinkClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      onClose()
    }
  }

  const isItemActive = (href: string) => {
    const cleanHref = href.replace(/\/+$/, '') || '/'
    return cleanHref === currentPath
  }

  const q = searchQuery.toLowerCase().trim()

  const projects = [
    { title: 'ChatGPT Reklamları', href: '/chatgpt-reklamlari/' },
    { title: 'Yapay Zekada Reklam Ajansı', href: '/yapay-zekada-reklam-ajansi/' },
    { title: 'GEO Organik Görünürlük', href: '/geo-yapay-zeka-gorunurlugu/' },
    { title: 'AI ile Reklam Üretimi', href: '/yapay-zeka-ile-reklam-uretimi/' },
    { title: 'Meta & Google AI Ads', href: '/hizmetler/meta-reklam/' },
  ]

  const recents = [
    { title: "ChatGPT'de Markam Nasıl Çıkar?", href: '/chatgptde-markam-nasil-cikar/' },
    { title: 'ChatGPT Reklam Verme Rehberi', href: '/chatgpt-reklam-verme/' },
    { title: 'OpenAI Ads Manager Paneli', href: '/openai-ads-manager/' },
    { title: 'ChatGPT Reklam Fiyatları 2026', href: '/chatgpt-reklam-fiyatlari/' },
    { title: "Türkiye'den ChatGPT Erişimi", href: '/chatgpt-reklamlari-turkiye/' },
    { title: 'Context Hints (Bağlam İpuçları)', href: '/blog/chatgpt-ads-context-hints/' },
    { title: 'ChatGPT Reklam Maliyeti', href: '/blog/chatgpt-reklam-maliyeti/' },
    { title: 'ChatGPT Reklam Ölçümü & ROI', href: '/blog/chatgpt-reklam-olcumu/' },
  ]

  const filteredProjects = projects.filter(p => !q || p.title.toLowerCase().includes(q))
  const filteredRecents = recents.filter(r => !q || r.title.toLowerCase().includes(q))

  return (
    <aside id="site-sidebar" className={`chatgpt-sidebar ${isOpen ? 'open' : 'closed'}`} aria-label="ChatGPT Sol Menü" inert={!isOpen}>
      <div className="chatgpt-sidebar-inner">
        {/* Üst Bar: ChatGPT + 🔍 + ◫ */}
        <div className="chatgpt-sidebar-top-row">
          <a href="/" className="sidebar-chatgpt-title" onClick={handleLinkClick}>
            <span>ChatGPT</span>
          </a>
          <div className="sidebar-top-icons">
            <button
              type="button"
              className="sidebar-icon-btn"
              onClick={() => setSearchOpen(prev => !prev)}
              title="Ara"
              aria-label="Menüde Ara"
            >
              <SearchMiniIcon />
            </button>
            <button
              type="button"
              className="sidebar-icon-btn"
              onClick={onToggle}
              title={isOpen ? 'Menüyü Daralt' : 'Menüyü Aç'}
              aria-label="Menüyü Kapat"
            >
              <SidebarToggleMiniIcon />
            </button>
          </div>
        </div>

        {/* Minimal Arama Çubuğu (🔍 tıklandığında) */}
        {searchOpen && (
          <div className="sidebar-search-bar">
            <SearchMiniIcon />
            <input
              type="text"
              placeholder="Ara..."
              aria-label="Menü bağlantılarında ara"
              name="navigation-search"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button type="button" onClick={() => setSearchQuery('')} aria-label="Temizle">×</button>
            )}
          </div>
        )}

        {/* Yeni Sohbet / Analiz Butonu */}
        <div className="sidebar-new-chat-wrap">
          <a href="/yapay-zeka-gorunurluk-analizi/" className="chatgpt-new-chat-button" onClick={handleLinkClick}>
            <EditSquareIcon />
            <span>AI Görünürlüğünü Test Et</span>
          </a>
        </div>

        {/* Kaydırılabilir İçerik Alanı */}
        <div className="chatgpt-sidebar-scroll-area">
          {/* Hızlı Kısayollar (Bilgi Merkezi, Haberler, AI Platformları, Hakkımızda) */}
          <div className="sidebar-quick-nav">
            <a href="/blog/" className={`sidebar-quick-link ${isItemActive('/blog/') ? 'active' : ''}`} onClick={handleLinkClick}>
              <LibraryIcon />
              <span>Bilgi Merkezi & Rehberler</span>
            </a>
            <a href="/rehber/" className={`sidebar-quick-link ${isItemActive('/rehber/') ? 'active' : ''}`} onClick={handleLinkClick}>
              <LibraryIcon />
              <span>GEO Uygulama Rehberleri</span>
            </a>
            <a href="/haberler/" className={`sidebar-quick-link ${isItemActive('/haberler/') ? 'active' : ''}`} onClick={handleLinkClick}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" />
              </svg>
              <span>Haberler & Duyurular</span>
            </a>
            <a href="/yapay-zeka-platformlarinda-reklam/" className={`sidebar-quick-link ${isItemActive('/yapay-zeka-platformlarinda-reklam/') ? 'active' : ''}`} onClick={handleLinkClick}>
              <AtSignIcon />
              <span>AI Reklam Platformları</span>
            </a>
            <a href="/hakkimizda/" className={`sidebar-quick-link ${isItemActive('/hakkimizda/') ? 'active' : ''}`} onClick={handleLinkClick}>
              <DotsIcon />
              <span>Hakkımızda & Ekip</span>
            </a>
          </div>

          {/* Bölüm: Hizmetler */}
          {filteredProjects.length > 0 && (
            <div className="sidebar-section-group">
              <span className="sidebar-section-heading">Hizmetler</span>
              <div className="sidebar-items-list">
                {filteredProjects.map((p) => {
                  const active = isItemActive(p.href)
                  return (
                    <a
                      key={p.href}
                      href={p.href}
                      className={`sidebar-project-link ${active ? 'active' : ''}`}
                      onClick={handleLinkClick}
                    >
                      <FolderOutlineIcon />
                      <span className="project-link-text">{p.title}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          )}

          {/* Bölüm: Bilgi ve Rehber */}
          {filteredRecents.length > 0 && (
            <div className="sidebar-section-group">
              <span className="sidebar-section-heading">Bilgi ve Rehber</span>
              <div className="sidebar-items-list">
                {filteredRecents.map((r) => {
                  const active = isItemActive(r.href)
                  return (
                    <a
                      key={r.href}
                      href={r.href}
                      className={`sidebar-recent-link ${active ? 'active' : ''}`}
                      onClick={handleLinkClick}
                    >
                      <span className="recent-link-text">{r.title}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Alt Kısım: Bize Ulaşın Butonu + Marka Profili */}
        <div className="chatgpt-sidebar-footer-wrap">
          <div className="sidebar-contact-btn-box">
            <a href="/iletisim/" className="sidebar-contact-action-btn" onClick={handleLinkClick}>
              <PhoneCallIcon />
              <span>Bize Ulaşın</span>
            </a>
          </div>

          <div className="chatgpt-sidebar-user-row">
            <a href="/hakkimizda/" className="sidebar-user-link" onClick={handleLinkClick} title="Hakkımızda & Ekip">
              <div className="sidebar-user-avatar logo-avatar">
                <img src="/images/logos/chatgpt.svg" alt="ChatGPT" width="18" height="18" />
              </div>
              <div className="sidebar-user-meta">
                <span className="sidebar-user-name">Yapay Zekâda Reklam</span>
                <span className="sidebar-user-plan">Overseas Marketing</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

function ChatGptTopBar({
  sidebarOpen,
  onToggle,
}: {
  sidebarOpen: boolean
  onToggle: () => void
}) {
  return (
    <header className="chatgpt-topbar">
      <div className="topbar-left">
        <button
          type="button"
          className="topbar-sidebar-toggle"
          id="sidebar-toggle"
          onClick={onToggle}
          title={sidebarOpen ? 'Menüyü Daralt (Ctrl+B)' : 'ChatGPT Menüsünü Aç (Ctrl+B)'}
          aria-label={sidebarOpen ? 'Menüyü Daralt' : 'ChatGPT Menüsünü Aç'}
          aria-expanded={sidebarOpen}
          aria-controls="site-sidebar"
        >
          <ChatGptSidebarIcon />
        </button>

        <a href="/" className="topbar-model-selector" title="ChatGPT Ads Marketing">
          <div className="model-selector-icon">
            <img src="/images/logos/chatgpt.svg" alt="ChatGPT" width="18" height="18" />
          </div>
          <span className="model-selector-title">ChatGPT Ads</span>
          <span className="model-selector-version">v4.0</span>
          <span className="model-selector-dot" title="2026 Güncellemesi Çevrimiçi">●</span>
        </a>
      </div>

      <div className="topbar-right">
        <a href="tel:+905363197697" className="topbar-phone-link" title="Bizi Arayın: 0536 319 76 97">
          <PhoneCallIcon />
          <span className="topbar-phone-text">0536 319 76 97</span>
        </a>

        <a href="/iletisim/" className="topbar-contact-link">
          İletişim
        </a>
      </div>
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
          <p style={{ fontSize: '0.8rem', color: 'var(--chat-text-muted)', marginTop: '0.5rem', lineHeight: 1.5 }}>
            Yapay Zekâda Reklam, Overseas Marketing tarafından sunulan bağımsız reklam yönetimi ve GEO danışmanlığı servisidir. OpenAI veya ChatGPT'nin resmî iş ortağı veya temsilcisi değildir.
          </p>
          <a href="tel:+905363197697">0536 319 76 97</a>
        </div>
        <div>
          <strong>Hizmetler & Rehberler</strong>
          <a href="/yapay-zekada-reklam-ajansi/">Yapay Zekada Reklam Ajansı</a>
          <a href="/chatgpt-reklamlari/">ChatGPT Ads Yönetimi</a>
          <a href="/chatgpt-reklam-verme/">ChatGPT reklam verme</a>
          <a href="/chatgptde-markam-nasil-cikar/">ChatGPT'de markam nasıl çıkar?</a>
          <a href="/openai-ads-manager/">OpenAI Ads Manager Rehberi</a>
          <a href="/blog/yapay-zekada-reklam-nasil-verilir/">Yapay Zekada Reklam Nasıl Verilir?</a>
          <a href="/chatgpt-reklam-fiyatlari/">ChatGPT Reklam Fiyatları</a>
          <a href="/chatgpt-reklamlari-turkiye/">ChatGPT Reklamları Türkiye</a>
          <a href="/geo-yapay-zeka-gorunurlugu/">GEO Organik Görünürlük</a>
          <a href="/yapay-zeka-platformlarinda-reklam/">AI Reklam Platformları</a>
          <a href="/hizmetler/urun-gorseli/">Ürün Görseli Üretimi</a>
          <a href="/hizmetler/chatbot/">Chatbot ve Müşteri İletişimi</a>
        </div>
        <div>
          <strong>Şirket & Yayınlar</strong>
          <a href="/haberler/">Haberler & Resmî Duyurular</a>
          <a href="/hakkimizda/">Hakkımızda</a>
          <a href="/blog/">Bilgi Merkezi</a>
          <a href="/rehber/">GEO Rehberleri</a>
          <a href="/sozluk/">SEO, GEO ve Reklam Sözlüğü</a>
          <a href="/chatgpt-reklamlari-nerede-gorunur/">Reklamlar Nerede Görünür?</a>
          <a href="/chatgpt-reklam-verme-sartlari/">Reklam Verme Şartları</a>
          <a href="/chatgpt-reklam-ajansi-nasil-secilir/">Ajans Seçim Rehberi</a>
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
        <span>Son Kontrol & Güncelleme: 29 Eylül 2026</span>
      </div>
    </footer>
  )
}

function Layout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 1024) return false
      const saved = localStorage.getItem('chatgpt_sidebar_open')
      if (saved !== null) return saved === 'true'
      return window.innerWidth >= 1024
    }
    return true
  })
  const [mobile, setMobile] = useState(() => window.innerWidth < 1024)

  useEffect(() => {
    const query = window.matchMedia('(max-width: 1023px)')
    const onChange = () => {
      setMobile(query.matches)
      if (query.matches) setSidebarOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!mobile || !sidebarOpen) return
    const sidebar = document.getElementById('site-sidebar')!
    const focusable = () => [...sidebar.querySelectorAll<HTMLElement>('a[href], button, input')].filter(element => element.getClientRects().length > 0)
    focusable()[0]?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      const elements = focusable()
      const first = elements[0]
      const last = elements.at(-1)
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }
    document.addEventListener('keydown', trapFocus)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', trapFocus)
      document.getElementById('sidebar-toggle')?.focus()
    }
  }, [mobile, sidebarOpen])

  const toggleSidebar = () => {
    setSidebarOpen((prev) => {
      const next = !prev
      if (typeof window !== 'undefined') {
        localStorage.setItem('chatgpt_sidebar_open', String(next))
      }
      return next
    })
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      localStorage.setItem('chatgpt_sidebar_open', 'false')
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && window.innerWidth < 1024) {
        closeSidebar()
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault()
        toggleSidebar()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className={`chatgpt-app-container ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <a className="skip-link" href="#main-content">Ana içeriğe geç</a>
      <ChatGptSidebar
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
        onClose={closeSidebar}
      />
      <div className="chatgpt-main-wrapper" inert={mobile && sidebarOpen}>
        <ChatGptTopBar
          sidebarOpen={sidebarOpen}
          onToggle={toggleSidebar}
        />
        <div className="chatgpt-page-content">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export { updated, Arrow, SendIcon, PhoneCallIcon, TargetNavIcon, TagNavIcon, ChatGptSidebarIcon, BrandLogo, EditSquareIcon, LibraryIcon, AtSignIcon, DotsIcon, FolderOutlineIcon, SearchMiniIcon, SidebarToggleMiniIcon, ChatGptSidebar, ChatGptTopBar, Footer, Layout }
