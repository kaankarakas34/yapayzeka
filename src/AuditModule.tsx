import React, { useState } from 'react';
import { 
  Building2, 
  Globe, 
  User, 
  Mail, 
  Phone, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Bot, 
  AlertTriangle, 
  HelpCircle, 
  TrendingUp, 
  Layers, 
  RefreshCw,
  Cpu,
  Check,
  Zap,
  Terminal
} from 'lucide-react';

export interface AuditFormData {
  fullName: string;
  companyName: string;
  website: string;
  phone: string;
  email: string;
  sector?: string;
}

export interface TestedQuestion {
  id: number;
  question: string;
  intent: string;
  llmOutcome: string;
  isBrandCited: boolean;
  simulatedAnswer: string;
  missingFactor: string;
}

export interface GoodPoint {
  title: string;
  desc: string;
  badge: string;
  impact: string;
}

export interface LimitingFactor {
  title: string;
  desc: string;
  severity: string;
  category: string;
}

export interface PriorityStep {
  stepNumber: number;
  title: string;
  desc: string;
  timeframe: string;
  expectedImpact: string;
  icon: string;
}

export interface EngineScore {
  engine: string;
  score: number;
  cited: boolean;
  status: string;
}

export interface AuditSummary {
  verdictTitle: string;
  coreMessage: string;
  recommendationMessage: string;
  overallScore: number;
  statusLabel: string;
  citationRatio: string;
  entityAuthority: string;
}

export interface AuditResult {
  summary: AuditSummary;
  engineScores: EngineScore[];
  testedQuestions: TestedQuestion[];
  goodPoints: GoodPoint[];
  limitingFactors: LimitingFactor[];
  prioritySteps: PriorityStep[];
}

export function AuditModule() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'form' | 'scanning' | 'result'>('form');
  const [formData, setFormData] = useState<AuditFormData>({
    fullName: '',
    companyName: '',
    website: '',
    phone: '',
    email: '',
    sector: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof AuditFormData, string>>>({});
  const [result, setResult] = useState<AuditResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [scanningStep, setScanningStep] = useState<number>(0);

  const scrollToModule = () => {
    setTimeout(() => {
      containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AuditFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Lütfen adınızı ve soyadınızı girin.';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Lütfen firma veya marka ismini girin.';
    }
    if (!formData.website.trim()) {
      newErrors.website = 'Lütfen web sitesi adresini girin.';
    } else if (!formData.website.includes('.')) {
      newErrors.website = 'Geçerli bir web sitesi adresi girin (örn: sirketiniz.com).';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Lütfen telefon numaranızı girin.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Lütfen e-posta adresinizi girin.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Lütfen geçerli bir e-posta adresi yazın.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    let cleanUrl = formData.website.trim();
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = `https://${cleanUrl}`;
    }

    const payload = {
      ...formData,
      website: cleanUrl,
    };

    setStatus('scanning');
    setErrorMsg(null);
    setScanningStep(0);
    scrollToModule();

    // Simulate scanning animation progression
    const stepInterval = setInterval(() => {
      setScanningStep((prev) => (prev < 4 ? prev + 1 : prev));
    }, 900);

    const startTime = Date.now();

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Analiz tamamlanamadı. Lütfen bilgilerinizi kontrol edip tekrar deneyin.');
      }

      const resJson = await response.json();

      // Ensure scanning animation displays for at least 4.2 seconds
      const elapsed = Date.now() - startTime;
      const minDelay = 4200;
      if (elapsed < minDelay) {
        await new Promise((resolve) => setTimeout(resolve, minDelay - elapsed));
      }

      clearInterval(stepInterval);

      if (resJson.success && resJson.data) {
        setResult(resJson.data);
        setStatus('result');
        scrollToModule();
      } else {
        throw new Error(resJson.error || 'Analiz sonucu alınamadı.');
      }
    } catch (err: any) {
      clearInterval(stepInterval);
      console.error(err);
      setErrorMsg(err.message || 'Bir hata oluştu.');
      setStatus('form');
      scrollToModule();
    }
  };

  const handleReset = () => {
    setStatus('form');
    setResult(null);
    scrollToModule();
  };

  const scanningSteps = [
    'ChatGPT (OpenAI Search) dizinleri taranıyor...',
    'Perplexity Pro & Claude varlık veritabanı sorgulanıyor...',
    'Google AI Overviews & Gemini kaynak referansları kontrol ediliyor...',
    'Sektörel arama niyetleri ve Schema.org mimarisi doğrulanıyor...',
    'Kapsamlı Yapay Zekâ Görünürlük Raporu oluşturuluyor...',
  ];

  const [selectedEngines, setSelectedEngines] = useState<string[]>([
    'chatgpt',
    'perplexity',
    'gemini',
    'claude',
  ]);

  const [selectedScopes, setSelectedScopes] = useState<string[]>([
    'citations',
    'recommendation',
    'competitors',
    'schema',
  ]);

  const toggleEngine = (id: string) => {
    setSelectedEngines((prev) =>
      prev.includes(id)
        ? prev.length > 1 ? prev.filter((e) => e !== id) : prev
        : [...prev, id]
    );
  };

  const toggleScope = (id: string) => {
    setSelectedScopes((prev) =>
      prev.includes(id)
        ? prev.length > 1 ? prev.filter((s) => s !== id) : prev
        : [...prev, id]
    );
  };

  const engines = [
    { id: 'chatgpt', name: 'ChatGPT', sub: 'OpenAI Search', badge: 'Canlı İndeks' },
    { id: 'perplexity', name: 'Perplexity Pro', sub: 'Sonar Engine', badge: 'Citation Taraması' },
    { id: 'gemini', name: 'Google Gemini', sub: 'AI Overviews', badge: 'Arama Grafiği' },
    { id: 'claude', name: 'Claude', sub: 'Anthropic Core', badge: 'Hibrit Akıl' },
  ];

  const scopes = [
    { id: 'citations', label: 'Organik Kaynak Alıntıları' },
    { id: 'recommendation', label: 'Marka Tavsiye Olasılığı' },
    { id: 'competitors', label: 'Sektörel Rakip Kıyaslaması' },
    { id: 'schema', label: 'Schema & LLM Bilgi Grafiği' },
  ];

  return (
    <div ref={containerRef} className="audit-module-wrapper">
      {errorMsg && (
        <div className="audit-error-banner">
          <span>{errorMsg}</span>
          <button onClick={() => setErrorMsg(null)} className="audit-error-close">Kapat</button>
        </div>
      )}

      {/* CANLI TEST & TEŞHİS KONSOLU */}
      {status === 'form' && (
        <div className="audit-form-container">
          {/* Konsol Üst Başlık & Canlı Durum */}
          <div className="audit-form-hero">
            <div className="live-engine-pill">
              <span className="live-dot-pulse"></span>
              <span>CANLI AI DENETİM MOTORU v4.2 // ÇEVRİMİÇİ</span>
            </div>
            <h2 className="audit-hero-title">
              Web Sitenizin <span className="text-emerald-400">Yapay Zekâ Görünürlüğünü</span> Test Edin
            </h2>
            <p className="audit-hero-desc">
              ChatGPT, Perplexity, Gemini ve Claude motorlarında sektörünüz arandığında markanız tavsiye ediliyor mu?
              Aşağıdaki canlı tarayıcı konsoluna web sitenizi girin; 60 saniyede gerçek zamanlı teşhis edin.
            </p>
          </div>

          <form className="audit-scanner-console" onSubmit={handleSubmit}>
            {/* Terminal Üst Barı */}
            <div className="scanner-console-topbar">
              <div className="console-window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
                <span className="console-title">ai-audit-terminal // live-diagnostic</span>
              </div>
              <div className="console-engine-status">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>{selectedEngines.length} LLM MOTORU SEÇİLİ</span>
              </div>
            </div>

            <div className="scanner-console-body">
              {/* ADIM 1: Taranacak Web Sitesi (Büyük Scanner Arama Çubuğu) */}
              <div className="scanner-section-block">
                <div className="scanner-step-badge">
                  <span className="step-badge-num">1</span>
                  <span className="step-badge-title">TEST EDİLECEK WEB SİTESİ VE MARKA</span>
                </div>

                <div className="scanner-main-url-wrap">
                  <div className="url-prefix-box">
                    <Globe className="w-5 h-5 text-emerald-400" />
                    <span>https://</span>
                  </div>
                  <input
                    type="text"
                    placeholder="firmaniz.com veya www.alanadiniz.com"
                    value={formData.website.replace(/^https?:\/\//i, '')}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className={`scanner-url-input ${errors.website ? 'has-error' : ''}`}
                  />
                  <div className="url-scanner-tag">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    <span>CANLI URL</span>
                  </div>
                </div>
                {errors.website && <span className="error-text scanner-error">{errors.website}</span>}

                {/* Marka & Sektör İkili Satır */}
                <div className="scanner-sub-grid">
                  <div className="scanner-sub-field">
                    <label>
                      <Building2 className="w-4 h-4 text-emerald-400" /> Marka / Firma İsmi *
                    </label>
                    <input
                      type="text"
                      placeholder="Örn: Acme Teknoloji"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className={errors.companyName ? 'has-error' : ''}
                    />
                    {errors.companyName && <span className="error-text">{errors.companyName}</span>}
                  </div>

                  <div className="scanner-sub-field">
                    <label>
                      <Layers className="w-4 h-4 text-emerald-400" /> Sektör / Hedef Arama Alanı (Opsiyonel)
                    </label>
                    <input
                      type="text"
                      placeholder="Örn: B2B Yazılım, Klinik, E-ticaret, Lojistik..."
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* ADIM 2: Taranacak Yapay Zekâ Motorları (İnteraktif Seçim Kartları) */}
              <div className="scanner-section-block">
                <div className="scanner-step-badge">
                  <span className="step-badge-num">2</span>
                  <span className="step-badge-title">SORGULANACAK YAPAY ZEKÂ VE ARAMA MOTORLARI</span>
                </div>
                <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.86rem', margin: '0 0 1rem 0', lineHeight: 1.5 }}>
                  Desteklenen modeller (Son kontrol tarihi: 29 Eylül 2026: ChatGPT, Perplexity Pro, Google Gemini, Claude). Bu test tekil bir deneme simülasyonudur; kalıcı bir sıralama skoru veya kesin tavsiye garantisi değildir.
                </p>

                <div className="scanner-engines-grid">
                  {engines.map((eng) => {
                    const isSelected = selectedEngines.includes(eng.id);
                    return (
                      <button
                        key={eng.id}
                        type="button"
                        onClick={() => toggleEngine(eng.id)}
                        className={`scanner-engine-card ${isSelected ? 'active' : ''}`}
                      >
                        <div className="engine-card-top">
                          <span className="engine-card-name">{eng.name}</span>
                          <span className={`engine-check ${isSelected ? 'checked' : ''}`}>
                            {isSelected ? <Check className="w-3.5 h-3.5" /> : null}
                          </span>
                        </div>
                        <span className="engine-card-provider">{eng.sub}</span>
                        <span className="engine-card-badge">{eng.badge}</span>
                      </button>
                    );
                  })}
                </div>

                {/* İnteraktif Teşhis Kapsamı Çipleri */}
                <div className="scanner-scopes-row">
                  <span className="scopes-label">Denetim Kapsamı:</span>
                  <div className="scopes-chips">
                    {scopes.map((sc) => {
                      const isSelected = selectedScopes.includes(sc.id);
                      return (
                        <button
                          key={sc.id}
                          type="button"
                          onClick={() => toggleScope(sc.id)}
                          className={`scope-chip ${isSelected ? 'active' : ''}`}
                        >
                          <Check className="w-3 h-3" />
                          <span>{sc.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Canlı Simülasyon Teşhis Kutusu (Terminal Preview) */}
              <div className="scanner-live-preview-box">
                <div className="preview-terminal-header">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>LLM CANLI TEST SİMÜLATÖRÜ: BU TEST NASIL ÇALIŞIR?</span>
                </div>
                <div className="preview-terminal-body">
                  <div className="preview-step">
                    <span className="step-tag tag-query">1. SORGU</span>
                    <span className="step-text">
                      "2026'da en güvenilir {formData.sector ? `[${formData.sector}]` : '[Sektörünüzün]'} hizmet sağlayıcıları hangileridir?"
                    </span>
                  </div>
                  <div className="preview-step">
                    <span className="step-tag tag-scan">2. ANALİZ</span>
                    <span className="step-text">
                      Seçili {selectedEngines.length} modelde <strong>{formData.companyName || formData.website || 'markanızın'}</strong> kaynak ve alıntı otoritesi taranır.
                    </span>
                  </div>
                  <div className="preview-step">
                    <span className="step-tag tag-out">3. ÇIKTI</span>
                    <span className="step-text">
                      0-100 Görünürlük Skoru, Rakiplerin Öne Çıkma Sebepleri ve 3 Acil Aksiyon Adımı üretilir.
                    </span>
                  </div>
                </div>
              </div>

              {/* ADIM 3: Raporun İletileceği Yetkili Bilgileri */}
              <div className="scanner-section-block">
                <div className="scanner-step-badge">
                  <span className="step-badge-num">3</span>
                  <span className="step-badge-title">TEST KARNESİ VE ANALİZ RAPORUNUN İLETİLECEĞİ YETKİLİ</span>
                </div>

                <div className="scanner-contact-grid">
                  <div className="scanner-sub-field">
                    <label>
                      <User className="w-4 h-4 text-emerald-400" /> Ad Soyad *
                    </label>
                    <input
                      type="text"
                      placeholder="Örn: Ahmet Yılmaz"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={errors.fullName ? 'has-error' : ''}
                    />
                    {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                  </div>

                  <div className="scanner-sub-field">
                    <label>
                      <Phone className="w-4 h-4 text-emerald-400" /> Telefon Numarası (WhatsApp İletimi) *
                    </label>
                    <input
                      type="tel"
                      placeholder="Örn: 0532 123 45 67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={errors.phone ? 'has-error' : ''}
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>

                  <div className="scanner-sub-field">
                    <label>
                      <Mail className="w-4 h-4 text-emerald-400" /> Kurumsal E-posta (PDF Rapor İçin) *
                    </label>
                    <input
                      type="email"
                      placeholder="Örn: ahmet@sirketiniz.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={errors.email ? 'has-error' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                </div>
              </div>
            </div>

            {/* Konsol Altı: Büyük Başlat Butonu & Güven İbareleri */}
            <div className="scanner-console-footer">
              <button type="submit" className="scanner-submit-button">
                <Zap className="w-5 h-5" />
                <span>CANLI YAPAY ZEKÂ TARAMASINI BAŞLAT (ÜCRETSİZ TEST)</span>
                <ArrowRight className="w-5 h-5 ml-auto" />
              </button>

              <div className="scanner-security-meta">
                <div className="meta-pill">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>%100 Ücretsiz & Gizlilik Korumalı</span>
                </div>
                <div className="meta-pill">
                  <RefreshCw className="w-4 h-4 text-emerald-400" />
                  <span>Ortalama Süre: 60 Saniye</span>
                </div>
                <div className="meta-pill">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Kapsamlı GEO Skor Karnesi</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* SCANNING ANİMASYON EKRANI */}
      {status === 'scanning' && (
        <div className="audit-scanning-card">
          <div className="scanning-radar">
            <div className="radar-circle circle-1" />
            <div className="radar-circle circle-2" />
            <div className="radar-circle circle-3" />
            <Bot className="radar-icon" />
          </div>

          <h2 className="scanning-title">Yapay Zekâ Motorları Taranıyor</h2>
          <p className="scanning-company">{formData.companyName} ({formData.website}) için LLM varlık sorgusu yapılıyor...</p>

          <div className="scanning-progress-box">
            <div className="scanning-progress-bar">
              <div 
                className="scanning-progress-fill" 
                style={{ width: `${((scanningStep + 1) / scanningSteps.length) * 100}%` }} 
              />
            </div>
            <div className="scanning-active-text">
              <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
              <span>{scanningSteps[scanningStep] || 'Sonuçlar birleştiriliyor...'}</span>
            </div>
          </div>

          <div className="scanning-engines-tags">
            <span className={scanningStep >= 0 ? 'active' : ''}>ChatGPT</span>
            <span className={scanningStep >= 1 ? 'active' : ''}>Perplexity Pro</span>
            <span className={scanningStep >= 2 ? 'active' : ''}>Google AI</span>
            <span className={scanningStep >= 2 ? 'active' : ''}>Claude</span>
            <span className={scanningStep >= 3 ? 'active' : ''}>Copilot</span>
          </div>
        </div>
      )}

      {/* SONUÇ RAPORU EKRANI */}
      {status === 'result' && result && (
        <div className="audit-results-container">
          {/* Üst Bar */}
          <div className="results-top-bar">
            <div>
              <span className="results-badge">DENETİM TAMAMLANDI</span>
              <h2 className="results-heading">{formData.companyName} İçin Yapay Zekâ Görünürlük Raporu</h2>
              <p className="results-sub">{formData.website} · Test Edilen: ChatGPT, Perplexity, Gemini, Claude</p>
            </div>
            <button onClick={handleReset} className="results-reset-btn">
              <RefreshCw className="w-4 h-4" /> Yeni Analiz Yap
            </button>
          </div>

          {/* Skor & Karar Kartı */}
          <div className="verdict-card">
            <div className="verdict-score-side">
              <div className="score-circle">
                <span className="score-num">{result.summary.overallScore}</span>
                <span className="score-max">/100</span>
              </div>
              <div className="score-status-pill">{result.summary.statusLabel}</div>
              <div className="score-metrics-grid">
                <div>
                  <span className="metric-label">Alıntılanma</span>
                  <span className="metric-val">{result.summary.citationRatio}</span>
                </div>
                <div>
                  <span className="metric-label">Varlık Otoritesi</span>
                  <span className="metric-val">{result.summary.entityAuthority}</span>
                </div>
              </div>
            </div>

            <div className="verdict-content-side">
              <h2 className="verdict-title">{result.summary.verdictTitle}</h2>
              <p className="verdict-core">{result.summary.coreMessage}</p>
              <p className="verdict-rec">{result.summary.recommendationMessage}</p>

              {/* Model Dağılım Skorları */}
              <div className="engines-score-list">
                {result.engineScores.map((eng) => (
                  <div key={eng.engine} className="engine-score-item">
                    <div className="engine-info">
                      <span className="engine-name">{eng.engine}</span>
                      <span className="engine-status">{eng.status}</span>
                    </div>
                    <div className="engine-bar-wrap">
                      <div className="engine-bar" style={{ width: `${eng.score}%` }} />
                      <span className="engine-num">%{eng.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Test Edilen Sektörel Sorular */}
          <div className="result-section">
            <div className="section-head">
              <HelpCircle className="w-5 h-5 text-emerald-400" />
              <h3>Yapay Zekâya Sorulan Sektörel Sorular ve Alınan Yanıtlar</h3>
            </div>
            <div className="questions-grid">
              {result.testedQuestions.map((q, idx) => (
                <div key={q.id || idx} className="question-card">
                  <div className="q-badge">0{idx + 1} / TEST SORUSU</div>
                  <h4 className="q-title">"{q.question}"</h4>
                  <div className="q-intent"><strong>Arama Niyeti:</strong> {q.intent}</div>
                  <div className="q-outcome">
                    <strong>Model Sonucu:</strong>
                    <span className="outcome-tag not-cited">{q.llmOutcome}</span>
                  </div>
                  <div className="q-simulated">
                    <strong>Simüle Edilen Cevap Dinamiği:</strong>
                    <p>{q.simulatedAnswer}</p>
                  </div>
                  <div className="q-missing">
                    <strong>Eksik Faktör:</strong> {q.missingFactor}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* İki Kolon: Güçlü Yanlar & Sınırlayıcı Faktörler */}
          <div className="points-grid">
            {/* Güçlü Yanlar */}
            <div className="points-card good">
              <div className="points-head">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <h3>Güçlü Yanlarınız (İyi Yaptıklarınız)</h3>
              </div>
              <div className="points-list">
                {result.goodPoints.map((pt, i) => (
                  <div key={i} className="point-item">
                    <span className="point-badge-good">{pt.badge}</span>
                    <h4>{pt.title}</h4>
                    <p>{pt.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sınırlayıcı Faktörler */}
            <div className="points-card limiting">
              <div className="points-head">
                <AlertTriangle className="w-5 h-5 text-rose-400" />
                <h3>Görünürlüğünüzü Sınırlayan Noktalar</h3>
              </div>
              <div className="points-list">
                {result.limitingFactors.map((pt, i) => (
                  <div key={i} className="point-item">
                    <span className="point-badge-lim">{pt.severity} · {pt.category}</span>
                    <h4>{pt.title}</h4>
                    <p>{pt.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Öncelikli 3 Adım */}
          <div className="result-section">
            <div className="section-head">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <h3>Yapay Zekâda İlk Sıraya Çıkmak İçin Öncelikli 3 Eylem Adımı</h3>
            </div>
            <div className="steps-grid">
              {result.prioritySteps.map((step) => (
                <div key={step.stepNumber} className="step-card">
                  <div className="step-num">0{step.stepNumber}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                  <div className="step-meta">
                    <span className="step-time">{step.timeframe}</span>
                    <span className="step-impact">{step.expectedImpact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Dönüşüm Kartı */}
          <div className="audit-cta-card">
            <div className="cta-icon-box">
              <Sparkles className="w-8 h-8 text-emerald-400" />
            </div>
            <h2>Bu Eksikleri Kapatıp ChatGPT ve Yapay Zekâda Önerilmek İster misiniz?</h2>
            <p>
              Uzman ekibimiz {formData.companyName} için kapsamlı GEO (Generative Engine Optimization) yol haritasını hazırlasın. Sorularınızı hemen doğrudan uzmanımıza iletin.
            </p>
            <div className="cta-btn-group">
              <a 
                href={`https://wa.me/905363197697?text=${encodeURIComponent(`Merhaba, web sitemiz (${formData.website}) için yaptığımız Yapay Zekâ Görünürlük Analizinde ${result.summary.overallScore}/100 skor aldık. ChatGPT ve AI modellerinde markamızı öne çıkarmak için detaylı bilgi almak istiyorum.`)}`}
                target="_blank" 
                rel="noreferrer"
                className="button primary"
              >
                WhatsApp İle Ön Görüşme Yap ↗
              </a>
              <a href="tel:+905363197697" className="button secondary">
                Hemen Ara: 0536 319 76 97
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
