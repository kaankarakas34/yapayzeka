import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  PhoneCall, 
  Calendar, 
  ShieldCheck, 
  FileText, 
  MessageSquare, 
  ArrowRight,
  Clock,
  Check
} from 'lucide-react';
import { AuditFormData } from '../types.ts';

interface RequestPlanSectionProps {
  formData: AuditFormData;
  onOpenModal?: () => void;
}

export const RequestPlanSection: React.FC<RequestPlanSectionProps> = ({
  formData,
}) => {
  const [selectedPlan, setSelectedPlan] = useState('30 Günlük Kapsamlı GEO & Yapay Zeka Hızlandırma Planı');
  const [preferredContact, setPreferredContact] = useState<'whatsapp' | 'phone' | 'email'>('whatsapp');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<{
    referenceCode: string;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/request-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          companyName: formData.companyName,
          website: formData.website,
          phone: formData.phone,
          email: formData.email,
          sector: formData.sector,
          planType: selectedPlan,
          preferredTime: preferredContact === 'whatsapp' ? 'WhatsApp Hızlı İletişim' : preferredContact === 'phone' ? 'Telefon Araması' : 'E-posta Raporu',
          notes,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedResult({
          referenceCode: data.referenceCode,
          message: data.message,
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const planOptions = [
    {
      id: '30 Günlük Kapsamlı GEO & Yapay Zeka Hızlandırma Planı',
      title: '30 Günlük Kapsamlı GEO & Yapay Zeka Hızlandırma Planı',
      badge: 'En Çok Tercih Edilen',
      desc: 'Müşteri FAQ sayfaları, EEAT güven bilgileri ve Schema.org mimarisinin uçtan uca uygulanması.',
    },
    {
      id: 'Answer Engine & Müşteri Soru-Cevap Mimarisi',
      title: 'Answer Engine & Müşteri Soru-Cevap Mimarisi',
      badge: 'Hızlı Başlangıç',
      desc: 'ChatGPT ve Perplexity\'nin sektörünüzde en sık yanıtladığı 20 kritik sorunun sitenize entegrasyonu.',
    },
    {
      id: 'EEAT Otorite & Kaynak Gösterilme (Citations) Danışmanlığı',
      title: 'EEAT Otorite & Kaynak Gösterilme (Citations) Danışmanlığı',
      badge: 'Otorite Odaklı',
      desc: 'Doğrulanabilir vaka analizleri, dijital PR ve markanızın LLM bilgi tabanına yerleştirilmesi.',
    },
  ];

  return (
    <section id="request-plan" className="relative bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-950 border-2 border-indigo-500/40 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Size Özel Çalışma Planı İsteyin</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Yapay Zekâda Rakiplerinizin Önüne Geçin
        </h3>
        <p className="mt-2 text-sm text-slate-300">
          Sitenizin zayıf kalan noktalarını giderecek ve yapay zeka aramalarında ilk önerilen marka olmanızı sağlayacak 
          kişiselleştirilmiş eylem planınızı hemen talep edin.
        </p>
      </div>

      {submittedResult ? (
        <div className="relative bg-slate-950/90 border border-emerald-500/40 rounded-2xl p-8 text-center max-w-xl mx-auto space-y-4 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-white">Çalışma Planı Talebiniz Alındı!</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            {submittedResult.message}
          </p>
          <div className="inline-block bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 font-mono text-sm text-cyan-400 font-bold">
            Referans Kodu: {submittedResult.referenceCode}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `Merhaba, ${formData.companyName} (${formData.website}) için ${submittedResult.referenceCode} nolu Yapay Zeka & GEO Çalışma Planı başvurusu yaptım. Ön incelemeyi görüşmek istiyorum.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-600/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp ile Anında İletişime Geç</span>
            </a>
            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all border border-slate-700"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Raporu PDF Olarak Kaydet</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative max-w-3xl mx-auto space-y-6">
          {/* Plan Options Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              1. Hedeflediğiniz Öncelikli Çalışma Planını Seçin:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {planOptions.map((opt) => {
                const isSelected = selectedPlan === opt.id;
                return (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedPlan(opt.id)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-indigo-600/20 border-cyan-400 ring-2 ring-cyan-400/20 shadow-lg shadow-indigo-600/20'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {opt.badge}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-cyan-400" />}
                      </div>
                      <h5 className="text-xs font-bold text-white mb-1">{opt.title}</h5>
                      <p className="text-[11px] text-slate-400 leading-snug">{opt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Preference */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              2. Sizinle Nasıl İletişime Geçelim?
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setPreferredContact('whatsapp')}
                className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  preferredContact === 'whatsapp'
                    ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={() => setPreferredContact('phone')}
                className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  preferredContact === 'phone'
                    ? 'bg-cyan-600/20 border-cyan-500 text-cyan-300'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>Telefon Görüşmesi</span>
              </button>
              <button
                type="button"
                onClick={() => setPreferredContact('email')}
                className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  preferredContact === 'email'
                    ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>E-posta İle Rapor</span>
              </button>
            </div>
          </div>

          {/* Confirmed pre-filled client info snippet */}
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 text-xs space-y-1.5">
            <div className="text-slate-400 font-semibold mb-1 flex items-center justify-between">
              <span>İletişim Bilgileriniz (Formdan Alındı):</span>
              <span className="text-emerald-400 flex items-center gap-1 font-normal text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" /> Doğrulandı
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-300">
              <div>
                <span className="text-slate-500 block text-[10px]">İsim:</span>
                <strong className="text-white">{formData.fullName}</strong>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Firma:</span>
                <strong className="text-white">{formData.companyName}</strong>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Telefon:</span>
                <strong className="text-white">{formData.phone}</strong>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">E-posta:</span>
                <strong className="text-white truncate block">{formData.email}</strong>
              </div>
            </div>
          </div>

          {/* Optional notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Ek Not veya Özellikle Vurgulamak İstediğiniz Hizmetiniz (Opsiyonel):
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Örn: 2026 yılı için en çok öne çıkarmak istediğimiz ana ürünümüz veya hedef kitlemiz..."
              className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-indigo-700 hover:from-cyan-400 hover:to-indigo-600 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
            >
              <Send className="w-5 h-5 text-cyan-200" />
              <span>{isSubmitting ? 'Talebiniz İletiliyor...' : 'Size Özel Çalışma Planını Ücretsiz İsteyin'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-center text-[11px] text-slate-400 mt-2">
              Başvurunuz gizli tutulur. 24 saat içinde uzman ekibimiz tarafından detaylı strateji taslağı iletilir.
            </p>
          </div>
        </form>
      )}
    </section>
  );
};
