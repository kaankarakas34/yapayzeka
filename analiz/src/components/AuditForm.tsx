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
  Compass, 
  Zap,
  Layers
} from 'lucide-react';
import { AuditFormData } from '../types.ts';

interface AuditFormProps {
  onSubmit: (data: AuditFormData) => void;
  isLoading: boolean;
}

export const AuditForm: React.FC<AuditFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<AuditFormData>({
    fullName: '',
    companyName: '',
    website: '',
    phone: '',
    email: '',
    sector: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AuditFormData, string>>>({});

  // Preset quick fill options for instant demonstration
  const handleQuickPreset = (preset: {
    fullName: string;
    companyName: string;
    website: string;
    phone: string;
    email: string;
    sector: string;
  }) => {
    setFormData(preset);
    setErrors({});
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AuditFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Lütfen adınızı ve soyadınızı girin.';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Lütfen firma / marka ismini girin.';
    }
    if (!formData.website.trim()) {
      newErrors.website = 'Lütfen web sitesi adresini girin.';
    } else if (!formData.website.includes('.')) {
      newErrors.website = 'Geçerli bir web sitesi adresi girin (örn: www.orneksite.com).';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Ensure URL has http/https prefix if omitted
      let cleanUrl = formData.website.trim();
      if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
        cleanUrl = `https://${cleanUrl}`;
      }
      onSubmit({
        ...formData,
        website: cleanUrl,
      });
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Background Ambient Glow */}
      <div className="absolute -top-12 -left-12 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Intro */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Generative Engine Optimization (GEO) & LLM Görünürlük Analitiği</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Web Siteniz Yapay Zekâ Motorlarında <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400">
            Tavsiye Ediliyor ve Kaynak Gösteriliyor mu?
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          ChatGPT, Perplexity ve Google AI Overviews üzerinde markanızın dijital varlığını, EEAT sinyallerini ve sektörel soru-cevap otoritesini anında test edin.
        </p>

        {/* Quick Demo Fillers */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-slate-400 font-medium">Hızlı Örnek Seç:</span>
          <button
            type="button"
            onClick={() => handleQuickPreset({
              fullName: 'Kaan Karakaş',
              companyName: 'Nova Dent Estetik',
              website: 'www.novadentestetik.com',
              phone: '0532 444 88 99',
              email: 'kaan@novadentestetik.com',
              sector: 'Sağlık Turizmi & Diş Kliniği',
            })}
            className="text-xs px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-300 transition-colors"
          >
            🦷 Nova Dent (Sağlık & Diş)
          </button>
          <button
            type="button"
            onClick={() => handleQuickPreset({
              fullName: 'Selin Yılmaz',
              companyName: 'Apex Cloud Yazılım',
              website: 'www.apexcloudtech.io',
              phone: '0541 333 22 11',
              email: 'selin@apexcloudtech.io',
              sector: 'B2B SaaS / Bulut Teknolojileri',
            })}
            className="text-xs px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-300 transition-colors"
          >
            ☁️ Apex Cloud (B2B SaaS)
          </button>
          <button
            type="button"
            onClick={() => handleQuickPreset({
              fullName: 'Av. Mehmet Demir',
              companyName: 'Demir & Ortakları Hukuk',
              website: 'www.demirlaw.com.tr',
              phone: '0555 777 66 55',
              email: 'mehmet@demirlaw.com.tr',
              sector: 'Hukuk & Arabuluculuk',
            })}
            className="text-xs px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-300 transition-colors"
          >
            ⚖️ Demir Hukuk (Hukuk Bürosu)
          </button>
        </div>
      </div>

      {/* Main Card */}
      <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl shadow-indigo-950/40">
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
              <Bot className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Yapay Zekâ Görünürlük & GEO Test Formu</h2>
              <p className="text-xs text-slate-400">Analizin tamamlanması yaklaşık 10-15 saniye sürer</p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            %100 Ücretsiz & Gizli
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* İsim Soyisim */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                İsim Soyisim <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  placeholder="Örn: Ahmet Yılmaz"
                  className={`w-full pl-10 pr-4 py-3 bg-slate-950/80 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName 
                      ? 'border-rose-500 focus:ring-rose-500/30' 
                      : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                  }`}
                />
              </div>
              {errors.fullName && <p className="mt-1 text-xs text-rose-400">{errors.fullName}</p>}
            </div>

            {/* Firma İsmi */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Firma İsmi (Marka / Şirket) <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Building2 className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => {
                    setFormData({ ...formData, companyName: e.target.value });
                    if (errors.companyName) setErrors({ ...errors, companyName: undefined });
                  }}
                  placeholder="Örn: Acme Lojistik & Danışmanlık"
                  className={`w-full pl-10 pr-4 py-3 bg-slate-950/80 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.companyName 
                      ? 'border-rose-500 focus:ring-rose-500/30' 
                      : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                  }`}
                />
              </div>
              {errors.companyName && <p className="mt-1 text-xs text-rose-400">{errors.companyName}</p>}
            </div>

            {/* Web Sitesi */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Web Sitesi Adresi <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Globe className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={formData.website}
                  onChange={(e) => {
                    setFormData({ ...formData, website: e.target.value });
                    if (errors.website) setErrors({ ...errors, website: undefined });
                  }}
                  placeholder="https://www.firmaniz.com veya firmaniz.com"
                  className={`w-full pl-10 pr-4 py-3 bg-slate-950/80 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.website 
                      ? 'border-rose-500 focus:ring-rose-500/30' 
                      : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                  }`}
                />
              </div>
              {errors.website && <p className="mt-1 text-xs text-rose-400">{errors.website}</p>}
            </div>

            {/* Telefon Numarası */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Telefon Numarası <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  placeholder="05XX XXX XX XX"
                  className={`w-full pl-10 pr-4 py-3 bg-slate-950/80 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.phone 
                      ? 'border-rose-500 focus:ring-rose-500/30' 
                      : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                  }`}
                />
              </div>
              {errors.phone && <p className="mt-1 text-xs text-rose-400">{errors.phone}</p>}
            </div>

            {/* E-posta Adresi */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                E-posta Adresi <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="adiniz@sirketiniz.com"
                  className={`w-full pl-10 pr-4 py-3 bg-slate-950/80 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.email 
                      ? 'border-rose-500 focus:ring-rose-500/30' 
                      : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                  }`}
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
            </div>

            {/* Sektör / Faaliyet Alanı (Opsiyonel ama önerilen) */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                <span>Sektör veya Ana Hizmet Alanı</span>
                <span className="text-[11px] text-slate-500">3 Sektörel LLM sorgusunu özelleştirir</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Layers className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={formData.sector || ''}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                  placeholder="Örn: Diş Kliniği, E-ticaret Moda, Hukuk & Danışmanlık, Endüstriyel İmalat..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-cyan-200" />
              <span>Yapay Zekâ Görünürlüğü & GEO Testini Başlat</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Security & Features footer */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/60 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>3 Sektörel Soru LLM Simülasyonu</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>EEAT & Kaynak Gösterilme Analizi</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Öncelikli 3 Adım & Çalışma Planı</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
