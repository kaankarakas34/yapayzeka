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
  RefreshCw
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
    'ChatGPT & OpenAI Search dizinleri taranıyor...',
    'Perplexity Pro & Claude 3.7 varlık veritabanı sorgulanıyor...',
    'Google AI Overviews & Gemini kaynak referansları kontrol ediliyor...',
    'Sektörel arama niyetleri ve Schema.org mimarisi doğrulanıyor...',
    'Kapsamlı Yapay Zekâ Görünürlük Raporu oluşturuluyor...',
  ];

  return (
    <div ref={containerRef} className="audit-module-wrapper">
      {errorMsg && (
        <div className="audit-error-banner">
          <span>{errorMsg}</span>
          <button onClick={() => setErrorMsg(null)} className="audit-error-close">Kapat</button>
        </div>
      )}

      {/* FORM EKRANI */}
      {status === 'form' && (
        <div className="audit-form-container">
          <div className="audit-form-hero">
            <span className="audit-badge">
              <Sparkles className="w-4 h-4 text-emerald-400" /> ÜCRETSİZ GEO & LLM TESTİ
            </span>
            <h2 className="audit-hero-title">
              Markanız Yapay Zekâ Aramalarında <br />
              <span className="text-emerald-400">Ne Kadar Tavsiye Ediliyor?</span>
            </h2>
            <p className="audit-hero-desc">
              Web sitenizi ChatGPT, Perplexity, Gemini ve Claude gibi küresel büyük dil modelleri ve yapay zekâ arama motorları üzerinden test edin. Rakiplerinizin nasıl alıntılandığını ve eksiklerinizi anında görün.
            </p>
          </div>

          <form className="audit-form-card" onSubmit={handleSubmit}>
            <div className="audit-form-grid">
              <div className="audit-field">
                <label>
                  <User className="field-icon" /> Ad Soyad *
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

              <div className="audit-field">
                <label>
                  <Building2 className="field-icon" /> Firma / Marka Adı *
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

              <div className="audit-field">
                <label>
                  <Globe className="field-icon" /> Web Sitesi *
                </label>
                <input
                  type="text"
                  placeholder="Örn: www.acme.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className={errors.website ? 'has-error' : ''}
                />
                {errors.website && <span className="error-text">{errors.website}</span>}
              </div>

              <div className="audit-field">
                <label>
                  <Phone className="field-icon" /> Telefon Numarası *
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

              <div className="audit-field">
                <label>
                  <Mail className="field-icon" /> E-posta Adresi *
                </label>
                <input
                  type="email"
                  placeholder="Örn: ahmet@acme.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={errors.email ? 'has-error' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="audit-field">
                <label>
                  <Layers className="field-icon" /> Sektör / Faaliyet Alanı (Opsiyonel)
                </label>
                <input
                  type="text"
                  placeholder="Örn: E-ticaret, B2B Yazılım, Sağlık, Hukuk..."
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                />
              </div>
            </div>

            <div className="audit-form-footer">
              <button type="submit" className="audit-submit-btn">
                <span>Yapay Zekâ Görünürlük Analizini Başlat</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="audit-privacy-note">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Bilgileriniz KVKK uyumlu olup, analiz raporunuz danışmanlarımıza anında iletilmektedir.</span>
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
            <span className={scanningStep >= 2 ? 'active' : ''}>Claude 3.7</span>
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
