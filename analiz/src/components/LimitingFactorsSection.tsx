import React from 'react';
import { AlertOctagon, AlertTriangle, Layers, ShieldAlert, FileQuestion } from 'lucide-react';
import { LimitingFactor } from '../types.ts';

interface LimitingFactorsSectionProps {
  factors: LimitingFactor[];
}

export const LimitingFactorsSection: React.FC<LimitingFactorsSectionProps> = ({ factors }) => {
  return (
    <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
          <AlertOctagon className="w-5 h-5 text-amber-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            Görünürlüğünüzü Sınırlayan Noktalar
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
              Acil İyileştirme Alanları
            </span>
          </h3>
          <p className="text-xs text-slate-400">
            Yapay zeka arama motorlarının sitenizi önermesini ve kaynak göstermesini engelleyen faktörler
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {factors.map((item, idx) => {
          const isCritical = item.severity === 'Kritik';

          return (
            <div
              key={idx}
              className={`bg-slate-950/70 border rounded-2xl p-5 transition-all relative overflow-hidden group ${
                isCritical 
                  ? 'border-rose-500/30 hover:border-rose-500/50' 
                  : 'border-amber-500/30 hover:border-amber-500/50'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div 
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform group-hover:scale-110 ${
                    isCritical 
                      ? 'bg-rose-500/10 border border-rose-500/30 text-rose-400' 
                      : 'bg-amber-500/10 border border-amber-500/30 text-amber-400'
                  }`}
                >
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                      {item.title}
                    </h4>
                    <span 
                      className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded border shrink-0 ${
                        isCritical 
                          ? 'bg-rose-500/10 text-rose-400 border-rose-500/30' 
                          : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                      }`}
                    >
                      {item.severity}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="pt-1 text-[11px] text-slate-500 font-medium">
                    Kategori: <span className="text-slate-400">{item.category}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
