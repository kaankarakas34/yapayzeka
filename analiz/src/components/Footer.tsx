import React from 'react';
import { Cpu, ShieldCheck, Globe, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-slate-900 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <span className="font-bold text-white text-sm">
                Aura<span className="text-cyan-400">GEO</span>
              </span>
              <p className="text-[11px] text-slate-500">
                Generative Engine Optimization & Yapay Zekâ Görünürlük Analitiği
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              EEAT & Güven Standartları
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              ChatGPT, Perplexity & AI Overviews
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              2026 Answer Engine Mimarisi
            </span>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} AuraGEO. Tüm hakları saklıdır. Yapay zeka arama motorları için optimize edilmiştir.</p>
          <p>Verileriniz 256-bit SSL ile korunur ve üçüncü taraflarla paylaşılmaz.</p>
        </div>
      </div>
    </footer>
  );
};
