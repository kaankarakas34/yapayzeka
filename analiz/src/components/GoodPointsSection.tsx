import React from 'react';
import { CheckCircle2, ThumbsUp, Sparkles } from 'lucide-react';
import { GoodPoint } from '../types.ts';

interface GoodPointsSectionProps {
  points: GoodPoint[];
}

export const GoodPointsSection: React.FC<GoodPointsSectionProps> = ({ points }) => {
  return (
    <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
          <ThumbsUp className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            İyi Yaptıklarınız
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              Güçlü Başlangıç
            </span>
          </h3>
          <p className="text-xs text-slate-400">
            Sitenizin yapay zeka optimizasyonuna zemin hazırlayan mevcut olumlu yapıları
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {points.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-950/60 border border-slate-800/80 hover:border-emerald-500/40 rounded-2xl p-5 transition-all group"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
