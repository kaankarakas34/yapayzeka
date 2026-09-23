import React, { useEffect, useState } from 'react';
import { Bot, Search, Globe, ShieldAlert, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

interface ScanningAnimationProps {
  companyName: string;
  website: string;
}

const STEPS = [
  { id: 1, label: "Web sitesi taranıyor: Hizmet sayfaları, H1-H2 başlıkları ve DOM yapısı inceleniyor...", icon: Globe },
  { id: 2, label: "ChatGPT & Gemini 3: Sektörünüzle ilgili en kritik 3 soru motorlarda test ediliyor...", icon: Bot },
  { id: 3, label: "Perplexity & SearchGPT: Marka alıntılanma (citation) ve EEAT güven sinyalleri taranıyor...", icon: Search },
  { id: 4, label: "GEO Puanı, Sınırlayıcı Noktalar ve Öncelikli 3 Adım hazırlanıyor...", icon: Sparkles },
];

export const ScanningAnimation: React.FC<ScanningAnimationProps> = ({ companyName, website }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentStepIndex(1);
      setProgress(40);
    }, 2200);

    const timer2 = setTimeout(() => {
      setCurrentStepIndex(2);
      setProgress(70);
    }, 4800);

    const timer3 = setTimeout(() => {
      setCurrentStepIndex(3);
      setProgress(92);
    }, 7200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 text-center">
      {/* Central Radar Pulse */}
      <div className="relative w-28 h-28 mx-auto mb-8 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-indigo-500/20 animate-ping opacity-60" />
        <div className="absolute inset-2 rounded-full bg-cyan-500/20 animate-pulse-glow" />
        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/40 flex items-center justify-center shadow-xl shadow-indigo-500/30">
          <Cpu className="w-10 h-10 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-2">
        {companyName} İçin Yapay Zekâ & GEO Taraması Yapılıyor
      </h2>
      <p className="text-sm text-slate-400 font-mono mb-8">
        Hedef URL: <span className="text-cyan-400">{website}</span>
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-slate-900 rounded-full h-3 mb-8 overflow-hidden border border-slate-800 p-0.5">
        <div
          className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-400 h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step checklist */}
      <div className="space-y-3.5 text-left bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 backdrop-blur-md">
        {STEPS.map((step, idx) => {
          const isDone = idx < currentStepIndex;
          const isCurrent = idx === currentStepIndex;
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className={`flex items-center gap-3.5 p-2 rounded-lg transition-all ${
                isCurrent 
                  ? 'bg-indigo-500/10 border border-indigo-500/30 text-white' 
                  : isDone 
                  ? 'text-slate-300' 
                  : 'text-slate-500 opacity-60'
              }`}
            >
              <div className="shrink-0">
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : isCurrent ? (
                  <Icon className="w-5 h-5 text-cyan-400 animate-pulse" />
                ) : (
                  <Icon className="w-5 h-5 text-slate-600" />
                )}
              </div>
              <span className={`text-xs sm:text-sm font-medium ${isCurrent ? 'font-semibold text-cyan-200' : ''}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
