import React, { useState } from 'react';
import { Bot, HelpCircle, XCircle, ChevronDown, ChevronUp, AlertCircle, Quote } from 'lucide-react';
import { TestedQuestion } from '../types.ts';

interface TestedQuestionsSectionProps {
  questions: TestedQuestion[];
  companyName: string;
}

export const TestedQuestionsSection: React.FC<TestedQuestionsSectionProps> = ({
  questions,
  companyName,
}) => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shrink-0">
            <HelpCircle className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Sektörünüzle İlgili Test Edilen 3 Kritik Soru
            </h3>
            <p className="text-xs text-slate-400">
              ChatGPT, Perplexity ve Google AI Overviews üzerinde test edilen simüle kullanıcı sorguları
            </p>
          </div>
        </div>
        <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/30">
          3 Soruda 0 Kaynak Gösterimi
        </span>
      </div>

      <div className="space-y-4">
        {questions.map((q, index) => {
          const isExpanded = expandedId === q.id;

          return (
            <div
              key={q.id || index}
              className={`border rounded-2xl transition-all ${
                isExpanded 
                  ? 'bg-slate-950/90 border-slate-700 shadow-md' 
                  : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {/* Question Header */}
              <div
                onClick={() => toggleExpand(q.id)}
                className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-300 shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white leading-snug">
                      "{q.question}"
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800">
                        Niyet: {q.intent}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-md bg-rose-500/10 text-rose-300 border border-rose-500/20 font-medium">
                        <XCircle className="w-3 h-3 text-rose-400" />
                        {q.llmOutcome}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors shrink-0"
                >
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* Expanded Simulation Details */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-slate-800/80 text-xs sm:text-sm space-y-3.5 animate-fadeIn">
                  <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-1.5 text-xs">
                      <Bot className="w-4 h-4" />
                      Yapay Zekâ Motoru Simüle Yanıtı & Gerekçesi
                    </div>
                    <p className="text-slate-300 leading-relaxed italic">
                      "{q.simulatedAnswer}"
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-amber-200">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-amber-300">Neden Kaynak Gösterilemedi? </strong>
                      <span>{q.missingFactor}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
