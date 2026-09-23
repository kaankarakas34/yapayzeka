import React from 'react';
import { ListOrdered, ArrowRight, Clock, Target, Sparkles, HelpCircle, ShieldCheck, TrendingUp } from 'lucide-react';
import { PriorityStep } from '../types.ts';

interface PriorityStepsSectionProps {
  steps: PriorityStep[];
  onRequestPlan: () => void;
}

export const PriorityStepsSection: React.FC<PriorityStepsSectionProps> = ({ steps, onRequestPlan }) => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <HelpCircle className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 2:
      default:
        return <TrendingUp className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
            <ListOrdered className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              Öncelikli 3 Adım
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                Stratejik Yol Haritası
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Yapay zeka arama motorlarında kaynak gösterilmek ve önerilmek için atılması gereken ilk 3 aksiyon
            </p>
          </div>
        </div>

        <button
          onClick={onRequestPlan}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white transition-all shadow-md shadow-indigo-600/20 hover:scale-[1.02]"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span>Bu Adımları Uygulayın</span>
        </button>
      </div>

      <div className="space-y-4">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-slate-950/80 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-5 sm:p-6 transition-all relative overflow-hidden group"
          >
            {/* Step badge left */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center justify-center w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-extrabold text-base shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                  <span>{step.stepNumber || idx + 1}</span>
                  <span className="text-[9px] font-normal uppercase tracking-wider text-slate-400">Adım</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                    {step.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Uygulama Süresi: <strong className="text-slate-200">{step.timeframe}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      <Target className="w-3.5 h-3.5" />
                      <span>Beklenen Etki: <strong>{step.expectedImpact}</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
