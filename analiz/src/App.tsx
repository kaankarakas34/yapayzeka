import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { AuditForm } from './components/AuditForm.tsx';
import { ScanningAnimation } from './components/ScanningAnimation.tsx';
import { ExecutiveVerdictCard } from './components/ExecutiveVerdictCard.tsx';
import { TestedQuestionsSection } from './components/TestedQuestionsSection.tsx';
import { GoodPointsSection } from './components/GoodPointsSection.tsx';
import { LimitingFactorsSection } from './components/LimitingFactorsSection.tsx';
import { PriorityStepsSection } from './components/PriorityStepsSection.tsx';
import { RequestPlanSection } from './components/RequestPlanSection.tsx';
import { Footer } from './components/Footer.tsx';
import { AuditFormData, AuditResult } from './types.ts';
import { 
  Bot, 
  HelpCircle, 
  ThumbsUp, 
  AlertTriangle, 
  ListOrdered, 
  Send, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Search,
  CheckCircle2,
  Cpu
} from 'lucide-react';

export default function App() {
  const [status, setStatus] = useState<'form' | 'scanning' | 'result'>('form');
  const [formData, setFormData] = useState<AuditFormData | null>(null);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleStartAudit = async (data: AuditFormData) => {
    setFormData(data);
    setStatus('scanning');
    setErrorMsg(null);

    const startTime = Date.now();

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Analiz tamamlanamadı. Lütfen bilgilerinizi kontrol edip tekrar deneyin.');
      }

      const resJson = await response.json();

      // Ensure scanning animation runs for at least 4.5 seconds for realistic multi-agent verification feel
      const elapsed = Date.now() - startTime;
      const minDelay = 4500;
      if (elapsed < minDelay) {
        await new Promise((resolve) => setTimeout(resolve, minDelay - elapsed));
      }

      if (resJson.success && resJson.data) {
        setResult(resJson.data);
        setStatus('result');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error(resJson.error || 'Analiz sonucu alınamadı.');
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Bir hata oluştu.');
      setStatus('form');
    }
  };

  const handleReset = () => {
    setStatus('form');
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToPlan = () => {
    const el = document.getElementById('request-plan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <Header
        hasResult={status === 'result'}
        onReset={handleReset}
        onPrint={() => window.print()}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {errorMsg && (
          <div className="max-w-xl mx-auto mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-center justify-between">
            <span>{errorMsg}</span>
            <button
              onClick={() => setErrorMsg(null)}
              className="text-xs text-rose-400 hover:text-white underline ml-3 font-semibold"
            >
              Kapat
            </button>
          </div>
        )}

        {status === 'form' && (
          <div className="space-y-16">
            <AuditForm onSubmit={handleStartAudit} isLoading={false} />

            {/* Explanatory Educational Section below the form */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-900">
              <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-3">
                  <Bot className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">GEO (Generative Engine Optimization) Nedir?</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  ChatGPT, Perplexity ve Gemini gibi yapay zeka arama motorlarında markanızın ve web sitenizin doğrudan kaynak olarak gösterilmesini sağlayan yeni nesil optimizasyon disiplinidir.
                </p>
              </div>

              <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-3">
                  <Search className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">Neden Kaynak Gösterilmiyorsunuz?</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Yapay zeka modelleri doğrudan soru-cevap mimarisi (FAQ), doğrulanabilir EEAT güven kanıtları ve alıntılanabilir veri formatına sahip siteleri birincil kaynak seçer.
                </p>
              </div>

              <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-3">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">3 Adımda Dönüşüm</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Test sonrasında alacağınız 3 stratejik adımı sitenize uygulayarak yapay zeka aramalarından organik, nitelikli ve satın alma niyeti yüksek potansiyel müşteriler kazanırsınız.
                </p>
              </div>
            </div>
          </div>
        )}

        {status === 'scanning' && formData && (
          <ScanningAnimation
            companyName={formData.companyName}
            website={formData.website}
          />
        )}

        {status === 'result' && result && formData && (
          <div className="space-y-10">
            {/* Quick Navigation Pills for Easy Review */}
            <div className="no-print flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
              <span className="text-slate-500 font-semibold shrink-0">Hızlı Bölümler:</span>
              <a
                href="#executive-summary"
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 shrink-0 font-medium transition-colors"
              >
                Genel Teshis
              </a>
              <a
                href="#tested-questions"
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 shrink-0 font-medium transition-colors"
              >
                Test Edilen 3 Soru
              </a>
              <a
                href="#good-points"
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-emerald-300 shrink-0 font-medium transition-colors"
              >
                İyi Yaptıklarınız
              </a>
              <a
                href="#limiting-factors"
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-300 shrink-0 font-medium transition-colors"
              >
                Sınırlayan Noktalar
              </a>
              <a
                href="#priority-steps"
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-cyan-300 shrink-0 font-medium transition-colors"
              >
                Öncelikli 3 Adım
              </a>
              <a
                href="#request-plan"
                className="px-3 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/50 text-indigo-200 shrink-0 font-bold transition-colors"
              >
                Size Özel Çalışma Planı
              </a>
            </div>

            {/* 1. EXECUTIVE VERDICT CARD (EXACT VERDICT TEXT HIGHLIGHT) */}
            <div id="executive-summary" className="print-break-inside">
              <ExecutiveVerdictCard
                summary={result.summary}
                engineScores={result.engineScores}
                companyName={formData.companyName}
                website={formData.website}
              />
            </div>

            {/* 2. TESTED QUESTIONS SECTION (3 Sektörel Soru Analizi) */}
            <div id="tested-questions" className="print-break-inside">
              <TestedQuestionsSection
                questions={result.testedQuestions}
                companyName={formData.companyName}
              />
            </div>

            {/* 3. İYİ YAPTIKLARINIZ */}
            <div id="good-points" className="print-break-inside">
              <GoodPointsSection points={result.goodPoints} />
            </div>

            {/* 4. GÖRÜNÜRLÜĞÜNÜZÜ SINIRLAYAN NOKTALAR */}
            <div id="limiting-factors" className="print-break-inside">
              <LimitingFactorsSection factors={result.limitingFactors} />
            </div>

            {/* 5. ÖNCELİKLİ 3 ADIM */}
            <div id="priority-steps" className="print-break-inside">
              <PriorityStepsSection
                steps={result.prioritySteps}
                onRequestPlan={handleScrollToPlan}
              />
            </div>

            {/* 6. SİZE ÖZEL ÇALIŞMA PLANI İSTEYİN */}
            <div className="print-break-inside">
              <RequestPlanSection formData={formData} />
            </div>
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
