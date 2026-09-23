import React from 'react';
import { Sparkles, Shield, Cpu, RefreshCw, Printer } from 'lucide-react';

interface HeaderProps {
  hasResult: boolean;
  onReset: () => void;
  onPrint?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ hasResult, onReset, onPrint }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={onReset}>
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Cpu className="w-6 h-6 text-cyan-400 animate-pulse" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full blur-[2px]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white">
                Aura<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">GEO</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                GEO 2026 Audit
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Yapay Zekâ & Arama Motoru Görünürlük Testi
            </p>
          </div>
        </div>

        {/* Status / Quick Action */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Canlı Algoritma: <strong>ChatGPT, Perplexity & AI Overviews</strong></span>
          </div>

          {hasResult && (
            <>
              {onPrint && (
                <button
                  onClick={onPrint}
                  className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 transition-colors shadow-sm"
                  title="Raporu Yazdır veya PDF Kaydet"
                >
                  <Printer className="w-4 h-4 text-cyan-400" />
                  <span>PDF / Yazdır</span>
                </button>
              )}
              <button
                onClick={onReset}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-xs font-semibold text-indigo-300 transition-all hover:scale-[1.02]"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Yeni Test Yap</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
