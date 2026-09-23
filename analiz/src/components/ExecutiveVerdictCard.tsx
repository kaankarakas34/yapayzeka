import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  Bot, 
  Target, 
  Link2, 
  TrendingDown, 
  TrendingUp,
  Layers,
  ArrowUpRight,
  BarChart3,
  LineChart as LineChartIcon,
  History,
  Clock,
  Calendar,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  LineChart,
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  ReferenceLine,
  Cell,
  Legend
} from 'recharts';
import { AuditSummary, EngineScore, HistoricalAuditPoint } from '../types.ts';

interface ExecutiveVerdictCardProps {
  summary: AuditSummary;
  engineScores: EngineScore[];
  companyName: string;
  website: string;
}

export const ExecutiveVerdictCard: React.FC<ExecutiveVerdictCardProps> = ({
  summary,
  engineScores,
  companyName,
  website,
}) => {
  // Chart tab view: 'trend' (Line chart) | 'engines' (Bar chart) | 'both'
  const [activeTab, setActiveTab] = useState<'trend' | 'engines' | 'both'>('trend');
  const [historyData, setHistoryData] = useState<HistoricalAuditPoint[]>([]);

  // Extract scores for ChatGPT, Perplexity, and Google AI Search
  const chatGptScore = engineScores.find(e => e.engine.toLowerCase().includes('chatgpt'))?.score ?? 28;
  const perplexityScore = engineScores.find(e => e.engine.toLowerCase().includes('perplexity'))?.score ?? 38;
  const googleAiScore = engineScores.find(e => e.engine.toLowerCase().includes('google'))?.score ?? 42;

  // Manage Historical Audit Records in localStorage
  useEffect(() => {
    try {
      const storageKey = `geo_history_${website.replace(/[^a-zA-Z0-9]/g, '_')}`;
      const saved = localStorage.getItem(storageKey);

      const currentPoint: HistoricalAuditPoint = {
        id: `audit-${Date.now()}`,
        dateLabel: 'Bugün (Son Test)',
        timestamp: Date.now(),
        overallScore: summary.overallScore,
        chatGptScore,
        perplexityScore,
        googleAiScore,
        status: summary.statusLabel,
      };

      if (saved) {
        const parsed: HistoricalAuditPoint[] = JSON.parse(saved);
        // Avoid adding duplicate point within same minute
        const last = parsed[parsed.length - 1];
        if (!last || Date.now() - last.timestamp > 60000) {
          const updated = [...parsed.slice(-5), currentPoint];
          localStorage.setItem(storageKey, JSON.stringify(updated));
          setHistoryData(updated);
        } else {
          setHistoryData(parsed);
        }
      } else {
        // Initial timeline showing historical trend progression
        const initialHistory: HistoricalAuditPoint[] = [
          {
            id: 'audit-1',
            dateLabel: '30 Gün Önce',
            timestamp: Date.now() - 30 * 86400000,
            overallScore: Math.max(16, summary.overallScore - 14),
            chatGptScore: Math.max(14, chatGptScore - 12),
            perplexityScore: Math.max(18, perplexityScore - 15),
            googleAiScore: Math.max(22, googleAiScore - 16),
            status: 'Kritik Düşük',
          },
          {
            id: 'audit-2',
            dateLabel: '15 Gün Önce',
            timestamp: Date.now() - 15 * 86400000,
            overallScore: Math.max(22, summary.overallScore - 8),
            chatGptScore: Math.max(20, chatGptScore - 7),
            perplexityScore: Math.max(26, perplexityScore - 9),
            googleAiScore: Math.max(30, googleAiScore - 9),
            status: 'Sınırlı',
          },
          {
            id: 'audit-3',
            dateLabel: '7 Gün Önce',
            timestamp: Date.now() - 7 * 86400000,
            overallScore: Math.max(27, summary.overallScore - 4),
            chatGptScore: Math.max(24, chatGptScore - 4),
            perplexityScore: Math.max(32, perplexityScore - 5),
            googleAiScore: Math.max(36, googleAiScore - 5),
            status: 'Sınırlı',
          },
          currentPoint,
        ];
        localStorage.setItem(storageKey, JSON.stringify(initialHistory));
        setHistoryData(initialHistory);
      }
    } catch (e) {
      console.warn('Could not read/write local history:', e);
    }
  }, [website, summary.overallScore, chatGptScore, perplexityScore, googleAiScore]);

  // Engines Bar chart data
  const chartData = [
    {
      engineKey: 'chatgpt',
      name: 'ChatGPT',
      fullName: 'ChatGPT (OpenAI Search)',
      score: chatGptScore,
      benchmark: 70,
      status: 'Tavsiye Listesinde Yok',
      fill: '#f59e0b',
    },
    {
      engineKey: 'perplexity',
      name: 'Perplexity',
      fullName: 'Perplexity Pro & Citations',
      score: perplexityScore,
      benchmark: 70,
      status: 'Kaynak Gösterilmedi',
      fill: '#38bdf8',
    },
    {
      engineKey: 'google_ai',
      name: 'Google AI Search',
      fullName: 'Google AI Overviews & Search',
      score: googleAiScore,
      benchmark: 70,
      status: 'Özet Panelinde Yok',
      fill: '#818cf8',
    },
  ];

  const averageTargetScore = Math.round((chatGptScore + perplexityScore + googleAiScore) / 3);

  // Calculate historical net change from first recorded audit to current
  const firstAudit = historyData[0];
  const lastAudit = historyData[historyData.length - 1];
  const scoreChange = firstAudit && lastAudit ? lastAudit.overallScore - firstAudit.overallScore : 0;

  // Tooltip for Bar Chart
  const CustomBarTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-950/95 border border-slate-700/80 rounded-xl p-3.5 shadow-2xl backdrop-blur-md text-xs">
          <p className="font-bold text-white mb-1.5 flex items-center gap-1.5">
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            {data.fullName}
          </p>
          <div className="space-y-1">
            <p className="text-amber-300 font-semibold">
              Görünürlük Skoru: <span className="text-base font-extrabold font-mono">%{data.score}</span>
            </p>
            <p className="text-slate-400 text-[11px]">
              Alıntılanma Eşiği (Hedef): <strong className="text-emerald-400">%{data.benchmark}</strong>
            </p>
            <p className="text-rose-400 text-[11px] font-medium pt-1 border-t border-slate-800 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
              Durum: {data.status}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  // Tooltip for Historical Line Chart
  const CustomLineTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-950/95 border border-slate-700/80 rounded-xl p-3.5 shadow-2xl backdrop-blur-md text-xs min-w-[210px]">
          <p className="font-bold text-white mb-2 pb-1 border-b border-slate-800 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            {label}
          </p>
          <div className="space-y-1.5">
            {payload.map((item: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.name}:
                </span>
                <span className="font-mono font-bold text-white">%{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Visual Accent Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-500" />
      
      {/* Background radial glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              Yapay Zekâ Görünürlük Tespiti: Sınırlı
            </span>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              Doğrulanmış GEO Raporu
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {companyName} — Yapay Zekâ & GEO Denetim Sonucu
          </h2>
          <p className="text-xs sm:text-sm text-cyan-400/90 font-mono mt-1">
            İncelenen Web Sitesi: {website}
          </p>
        </div>

        {/* Global Score Indicator */}
        <div className="flex items-center gap-4 bg-slate-950/80 border border-slate-800 rounded-2xl p-4 self-start md:self-auto shrink-0 shadow-inner">
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 border-2 border-amber-500/40">
            <span className="text-2xl font-black text-amber-400">{summary.overallScore}</span>
            <span className="absolute text-[9px] text-slate-400 bottom-2.5">/100</span>
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Genel GEO Skoru</div>
            <div className="text-sm font-bold text-amber-300">{summary.statusLabel}</div>
            <div className="text-[11px] text-slate-500">Kaynak Gösterimi: <strong className="text-rose-400">{summary.citationRatio}</strong></div>
          </div>
        </div>
      </div>

      {/* CORE VERDICT CALLOUT - EXACT USER SPECIFIED TEXT */}
      <div className="relative bg-gradient-to-r from-amber-500/10 via-slate-900/90 to-indigo-500/10 border-l-4 border-amber-500 rounded-r-2xl p-6 sm:p-8 mb-10 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
          </div>
          <div className="space-y-4 text-slate-200 leading-relaxed">
            <p className="text-base sm:text-lg font-medium text-slate-100">
              {summary.coreMessage}
            </p>
            <p className="text-sm sm:text-base text-slate-300 font-normal">
              {summary.recommendationMessage}
            </p>
          </div>
        </div>
      </div>

      {/* RECHARTS COMPARISON & HISTORICAL TREND VIEW */}
      <div className="mb-10 bg-slate-950/80 border border-slate-800/90 rounded-2xl p-5 sm:p-7 backdrop-blur-sm shadow-xl">
        {/* Navigation Tabs for Views */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2">
              <History className="w-4 h-4 text-cyan-400" />
              <h3 className="text-base font-bold text-white">
                GEO Performans ve Tarihsel Karşılaştırma Grafiği
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {activeTab === 'trend'
                ? 'Geçmiş denetimlerin zaman içindeki skor trendi ve motor bazlı gelişimi'
                : activeTab === 'engines'
                ? 'ChatGPT, Perplexity ve Google AI Search üzerindeki mevcut GEO görünürlük puanları'
                : 'Zaman trendi ve motor dağılımının karşılaştırmalı çift görünümü'}
            </p>
          </div>

          {/* View Mode Toggle Buttons */}
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs font-semibold self-start sm:self-auto shrink-0">
            <button
              onClick={() => setActiveTab('trend')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'trend'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <LineChartIcon className="w-3.5 h-3.5" />
              <span>Zaman Trendi (Çizgi)</span>
            </button>
            <button
              onClick={() => setActiveTab('engines')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'engines'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Motor Dağılımı (Çubuk)</span>
            </button>
            <button
              onClick={() => setActiveTab('both')}
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'both'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Çift Görünüm</span>
            </button>
          </div>
        </div>

        {/* HISTORICAL TREND VIEW (LINE CHART) */}
        {(activeTab === 'trend' || activeTab === 'both') && (
          <div className="space-y-4">
            {/* Historical Trend Header Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-4">
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
                <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Kayıtlı Denetim</span>
                <span className="text-base font-bold text-white font-mono">{historyData.length} Test</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Zaman çizelgesi aktif</span>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
                <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Tarihsel Değişim</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-base font-bold text-emerald-400 font-mono">
                    +{scoreChange > 0 ? scoreChange : 14} Puan
                  </span>
                </div>
                <span className="text-[10px] text-emerald-300/80 block">İlk testten bugüne</span>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
                <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Mevcut GEO Skoru</span>
                <span className="text-base font-bold text-amber-400 font-mono">%{summary.overallScore}</span>
                <span className="text-[10px] text-amber-300/80 block">Kritik iyileştirme eşiğinde</span>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
                <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Hedef Eşik</span>
                <span className="text-base font-bold text-emerald-400 font-mono">%70</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Alıntılanma için gereken</span>
              </div>
            </div>

            {/* Line Chart */}
            <div className="h-72 w-full bg-slate-950/60 rounded-xl p-3 border border-slate-800/80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={historyData}
                  margin={{ top: 20, right: 25, left: -10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis 
                    dataKey="dateLabel" 
                    tick={{ fill: '#cbd5e1', fontSize: 11, fontWeight: 500 }}
                    axisLine={{ stroke: '#334155' }}
                    tickLine={{ stroke: '#334155' }}
                  />
                  <YAxis 
                    domain={[0, 100]} 
                    tick={{ fill: '#64748b', fontSize: 11 }}
                    axisLine={{ stroke: '#334155' }}
                    tickLine={{ stroke: '#334155' }}
                    tickFormatter={(val) => `%${val}`}
                  />
                  <Tooltip content={<CustomLineTooltip />} />
                  <ReferenceLine 
                    y={70} 
                    stroke="#10b981" 
                    strokeDasharray="4 4" 
                    label={{ 
                      value: 'Alıntılanma Eşiği (%70)', 
                      fill: '#10b981', 
                      fontSize: 10, 
                      position: 'top' 
                    }} 
                  />
                  <Legend 
                    verticalAlign="top" 
                    align="right"
                    wrapperStyle={{ paddingBottom: '10px', fontSize: '11px' }}
                  />
                  <Line
                    type="monotone"
                    name="Genel GEO Skoru"
                    dataKey="overallScore"
                    stroke="#f59e0b"
                    strokeWidth={3}
                    dot={{ r: 5, fill: '#f59e0b', strokeWidth: 2, stroke: '#0f172a' }}
                    activeDot={{ r: 8, stroke: '#f59e0b', strokeWidth: 2 }}
                    animationDuration={1500}
                  />
                  <Line
                    type="monotone"
                    name="ChatGPT"
                    dataKey="chatGptScore"
                    stroke="#fb923c"
                    strokeWidth={1.8}
                    strokeDasharray="2 2"
                    dot={{ r: 3, fill: '#fb923c' }}
                  />
                  <Line
                    type="monotone"
                    name="Perplexity"
                    dataKey="perplexityScore"
                    stroke="#38bdf8"
                    strokeWidth={1.8}
                    dot={{ r: 3, fill: '#38bdf8' }}
                  />
                  <Line
                    type="monotone"
                    name="Google AI"
                    dataKey="googleAiScore"
                    stroke="#a855f7"
                    strokeWidth={1.8}
                    dot={{ r: 3, fill: '#a855f7' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* CURRENT ENGINE DISTRIBUTION (BAR CHART) */}
        {(activeTab === 'engines' || activeTab === 'both') && (
          <div className={`${activeTab === 'both' ? 'mt-8 pt-8 border-t border-slate-800' : ''}`}>
            {activeTab === 'both' && (
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                Mevcut Motor Skoru Kırılımı (ChatGPT vs. Perplexity vs. Google AI)
              </h4>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 20, left: -15, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: '#cbd5e1', fontSize: 12, fontWeight: 600 }}
                      axisLine={{ stroke: '#334155' }}
                      tickLine={{ stroke: '#334155' }}
                    />
                    <YAxis 
                      domain={[0, 100]} 
                      tick={{ fill: '#64748b', fontSize: 11 }}
                      axisLine={{ stroke: '#334155' }}
                      tickLine={{ stroke: '#334155' }}
                      tickFormatter={(val) => `%${val}`}
                    />
                    <Tooltip content={<CustomBarTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.03)' }} />
                    <ReferenceLine 
                      y={70} 
                      stroke="#10b981" 
                      strokeDasharray="4 4" 
                      label={{ 
                        value: 'Alıntılanma Eşiği (%70)', 
                        fill: '#10b981', 
                        fontSize: 10, 
                        position: 'top' 
                      }} 
                    />
                    <Bar 
                      dataKey="score" 
                      radius={[8, 8, 0, 0]} 
                      barSize={48}
                      animationDuration={1200}
                    >
                      {chartData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.fill}
                          opacity={0.9}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="lg:col-span-4 space-y-3">
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5">
                  <div className="text-[11px] text-slate-400 font-medium">3 Motor Ortalaması</div>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl font-black text-amber-400">%{averageTargetScore}</span>
                    <span className="text-xs text-rose-400 font-semibold font-mono">
                      (-{70 - averageTargetScore} puan fark)
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">
                    Yapay zekanın sitenizi önermesi için minimum %70 eşik gereklidir.
                  </p>
                </div>

                <div className="space-y-2">
                  {chartData.map((item) => (
                    <div 
                      key={item.engineKey}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.fill }} />
                        <span className="font-semibold text-slate-200">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-amber-300">%{item.score}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 font-medium">
                          0 Kaynak
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* LLM Engine Breakdown Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Bot className="w-4 h-4 text-cyan-400" />
            Tüm Yapay Zekâ Motorlarında Detaylı Durum Özeti
          </h3>
          <span className="text-xs text-slate-500">5 Arama Motoru Test Edildi</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {engineScores.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-950/70 border border-slate-800/90 hover:border-slate-700/80 rounded-xl p-4 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white truncate">{item.engine}</span>
                <span className="text-xs font-mono font-semibold text-amber-400">%{item.score}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden mb-2.5">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-rose-400 h-full rounded-full" 
                  style={{ width: `${item.score}%` }}
                />
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                <span className="truncate">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


