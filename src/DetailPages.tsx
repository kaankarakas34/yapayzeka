import { Detail } from './DetailLayout'
import { Arrow, Layout, updated } from './SiteChrome'
import { LeadContactForm } from './LeadContactForm'
import { AuditWidget } from './AuditWidget'

const Features = ({ items }: { items: [string, string][] }) => (
  <div className="feature-grid">
    {items.map((x, i) => (
      <div className="feature-card" key={x[0]}>
        <span style={{ fontSize: '0.75rem', color: 'var(--chat-green-text)', fontWeight: 600 }}>0{i + 1} / AŞAMA</span>
        <h3>{x[0]}</h3>
        <p>{x[1]}</p>
      </div>
    ))}
  </div>
)

const pages: { [key: string]: { e: string; t: string; s: string; items: [string, string][] } } = {
  '/chatgpt-reklamlari': {
    e: 'Ana Hizmet',
    t: 'ChatGPT Reklam Ajansı ve Uçtan Uca Ads Yönetimi',
    s: 'ChatGPT reklamları uygun konuşma bağlamlarında organik cevaptan ayrı gösterilen sponsorlu alanlardır. "chat gpt de reklam ver" arayan markalar için niyet analizi, context hints, landing page ve dönüşüm ölçümünü tek sistem olarak yönetiyoruz.',
    items: [
      ['Hesap ve İşletme Kurulumu', 'Ads Manager, doğrulama, ekip erişimleri ve politika kontrolleri.'],
      ['Kampanya & Bütçe Stratejisi', 'Hedef kitle, ülke parametreleri ve öğrenme süresi planlaması.'],
      ['Context Hints Geliştirme', 'Müşteri ihtiyaçlarını doğal, etkili bağlam açıklamalarına dönüştürme.'],
      ['Ölçümleme & Entegrasyon', 'Conversions API, Pixel, UTM ve CRM satış eşleştirmesi.']
    ]
  },
  '/yapay-zeka-platformlarinda-reklam': {
    e: 'Kanal Stratejisi',
    t: 'Yapay Zekâ Platformlarında Reklam Verme',
    s: 'Her AI platformunun erişimi, formatı ve ölçüm araçları farklıdır. ChatGPT, Google AI Mode, Copilot ve Perplexity ekosisteminde doğru kanalı seçip yönetiyoruz.',
    items: [
      ['ChatGPT Ads', 'Konuşma bağlamı ve dönüşüm ölçümünün birlikte planlandığı ana uzmanlık alanımız.'],
      ['Google AI Mode', 'Google Ads altyapısı, ürün verisi ve AI landing page hazırlığı.'],
      ['Microsoft Copilot', 'Microsoft Advertising ve Bing ekosistemindeki AI yerleşimleri.'],
      ['Perplexity & Diğerleri', 'Hazırlık, taranabilirlik ve organik AI görünürlük stratejisi.']
    ]
  },
  '/geo-yapay-zeka-gorunurlugu': {
    e: 'Organik Görünürlük',
    t: 'Yapay Zekâ Aramalarında Görünürlük: GEO Ajansı',
    s: 'GEO (Generative Engine Optimization); marka bilgilerinin anlaşılabilirliğini ve kaynak olarak bulunabilirliğini geliştirme ve ölçme çalışmasıdır.',
    items: [
      ['Varlık Netliği', 'Marka, ürün ve hizmet bilgilerinin AI modellerine uygun tanımlanması.'],
      ['Cevap Mimarisi', 'Yapay zekânın kaynak gösterilebileceği derinlikte otoriter içerikler.'],
      ['Teknik Erişim & Schema', 'Taranabilirlik, LLM bot erişimleri ve yapısal veri entegrasyonu.'],
      ['Sürekli İzleme & Raporlama', 'Marka geçiş oranı, tavsiye edilme sıklığı ve rakip analizleri.']
    ]
  },
  '/yapay-zeka-ile-reklam-uretimi': {
    e: 'AI Destekli Üretim',
    t: 'Yapay Zekâ ile Reklam Üretimi',
    s: 'Yapay zekâyı tek tuşla sıradan içerik üretmek için değil; güçlü bir stratejiyi farklı karar bağlamlarında insan denetimiyle test etmek için kullanıyoruz.',
    items: [
      ['Strateji & Hipotez', 'Ürün faydası ve dönüşüm hedefi prodüksiyondan önce netleşir.'],
      ['Gerçek Varyasyon', 'Farklı satın alma motivasyonlarını sınayan zengin kreatifler.'],
      ['İnsan Denetimi', 'Marka dili, telif hakları, doğruluk ve etik kontrolü.'],
      ['Performans Döngüsü', 'En iyi performans gösteren varyasyonlar ölçeklenir.']
    ]
  },
  '/hakkimizda': {
    e: 'Hakkımızda',
    t: 'Yapay Zekâda Reklam: Yeni Nesil AI Büyüme Ajansı',
    s: 'Yapay Zekâda Reklam, markaların gelişen yapay zekâ kanallarında hem sponsorlu reklamlarla hem de organik GEO otoritesiyle büyümesini sağlayan bağımsız bir uzmanlık markasıdır.',
    items: [
      ['Doğru Teklif', 'Sunulmayan faydayı vaat etmeyen şeffaf yaklaşımlar.'],
      ['Gerçek Niyet', 'Kuru anahtar kelimeler yerine gerçek kullanıcı ihtiyaçları.'],
      ['Ölçülebilir Sonuç', 'Tıklamanın ötesinde lead kalitesi ve gerçek ciro etkisi.']
    ]
  },
  '/hizmetler/yapay-zeka-google-ads': {
    e: 'Performans Pazarlaması',
    t: 'Yapay Zekâ ile Google Ads Yönetimi',
    s: 'Performance Max ve Akıllı Teklif algoritmalarını iş veriniz ve birinci taraf dönüşüm sinyallerinizle besleyerek maksimum kârlılık sağlıyoruz.',
    items: [
      ['Veri Altyapısı', 'Dönüşüm eylemleri ve analitik bağlantılarının eksiksiz kurulumu.'],
      ['Kampanya Kurgusu', 'Arama, PMax ve yeniden pazarlama yapılarının hedefe göre ayrımı.'],
      ['AI Test Sistemi', 'Başlık, açıklama ve görsel bileşenlerinin çoklu testi.'],
      ['Kârlılık Odaklı Teklif', 'Bütçeyi doğrudan marj ve ciro hedefine göre optimize etme.']
    ]
  },
  '/hizmetler/meta-reklam': {
    e: 'Sosyal Medya Reklamı',
    t: 'Yapay Zekâ Destekli Meta Reklam Yönetimi',
    s: 'Advantage+ kampanyalarını, gelişmiş piksel sinyallerini ve dinamik kreatif testlerini satış odaklı yönetiyoruz.',
    items: [
      ['Katalog & Kampanya Kurulumu', 'Satış huninize uygun hedef ve yerleşim kurgusu.'],
      ['Kreatif Test Sistemi', 'Dönüşüm getiren varyasyonların hızlı üretimi ve test edilmesi.'],
      ['CAPI & Veri Güvenliği', 'Conversions API ve sunucu taraflı doğru ölçümleme.'],
      ['Sürekli İyileştirme', 'Maliyet artışlarını önleyen proaktif kampanya bakımı.']
    ]
  },
  '/hizmetler/sosyal-medya-reklami': {
    e: 'Çok Kanallı Kampanya',
    t: 'Yapay Zekâ ile Sosyal Medya Reklamı',
    s: 'Instagram, LinkedIn ve Facebook kanallarında AI destekli hedef kitle araştırması ve yüksek etkili reklam kreatifleri sunuyoruz.',
    items: [
      ['Kanal Eşleşmesi', 'İş modelinize en uygun sosyal mecraların belirlenmesi.'],
      ['Özgün Formatlar', 'Platform dinamiklerine uygun dikey video ve carousel tasarımları.'],
      ['Hızlı Test', 'Düşük bütçelerle çoklu mesaj testi ve kazananı ölçekleme.'],
      ['Detaylı Raporlama', 'Satış ve potansiyel müşteri kalitesinin şeffaf takibi.']
    ]
  },
  '/hizmetler/reklam-filmi-video': {
    e: 'AI Prodüksiyon',
    t: 'Yapay Zekâ Reklam Filmi ve Video Üretimi',
    s: 'Senaryo, görsel tasarım, seslendirme ve kurguyu yapay zekâ ile hızlandırıyor; marka kontrollü profesyonel videolar üretiyoruz.',
    items: [
      ['Yaratıcı Senaryo', 'Hedef kitleyi ilk saniyede yakalayan senaryo kurguları.'],
      ['AI Görsel & Ses', 'Yüksek kaliteli yapay zekâ görsel ve ses prodüksiyonu.'],
      ['İnsan Kurgusu', 'Ritim, marka renkleri ve mesaj bütünlüğünün profesyonel denetimi.'],
      ['Çoklu Boyut', 'Reels, Shorts ve web için hazır teslim formatları.']
    ]
  },
  '/hizmetler/urun-gorseli': {
    e: 'E-Ticaret Kreatifi',
    t: 'Yapay Zekâ ile Ürün Görseli Üretimi',
    s: 'Ürün fotoğraflarınızı gerçek formunu bozmadan stüdyo kalitesinde yaşam alanı sahnelerine dönüştürüyoruz.',
    items: [
      ['Ürün Koruma', 'Ürünün dokusu, geometrisi ve etiketlerinin birebir korunması.'],
      ['Sınırsız Sahne', 'Farklı konsept ve mevsimsel arka plan uygulamaları.'],
      ['Yüksek Çözünürlük', 'Baskı ve e-ticaret siteleri için ultra net çıktılar.'],
      ['Hızlı Teslim', 'Geleneksel fotoğraf çekimlerine kıyasla 10 kat daha hızlı üretim.']
    ]
  },
  '/hizmetler/chatbot': {
    e: 'Konuşmalı Satış',
    t: 'Yapay Zekâ Chatbot ve Satış Asistanı Kurulumu',
    s: 'Müşterilerinizin sorularını anında yanıtlayan ve onları randevuya ya da satın almaya yönlendiren akıllı AI asistanlar.',
    items: [
      ['Bilgi Bankası Entegrasyonu', 'Ürün ve hizmet verilerinizin yapay zekâya güvenle öğretilmesi.'],
      ['Doğru Yönlendirme', 'Müşteri talebine göre doğru teklife veya ekibinize aktarma.'],
      ['Güvenlik & Sınırlar', 'Şirket politikası dışına çıkmayan kontrollü yanıt sistemi.'],
      ['Dönüşüm Takibi', 'Chatbot üzerinden gerçekleşen lead ve satışların analizi.']
    ]
  }
}

function GenericPage({ data }: { data: (typeof pages)[string] }) {
  return (
    <Detail eyebrow={data.e} title={data.t} summary={data.s}>
      <Features items={data.items} />
      <div style={{ maxWidth: '780px', margin: '3rem auto 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '1rem' }}>Şeffaf ve Ölçülebilir Çalışma İlkesi</h2>
        <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7 }}>
          Platformların erişim şartları ve AI modellerinin reklam kuralları sürekli güncellenmektedir. 
          Biz her aşamada resmî platform kaynaklarını doğrular, sponsorlu reklam ile organik GEO görünürlüğünü şeffaf bir şekilde yönetiriz.
        </p>
        <div style={{ marginTop: '1.8rem' }}>
          <a className="button primary" href="/iletisim/">Markanız İçin Test Planı Başlatın <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function ChatGPTAdsPage() {
  return (
    <Detail
      eyebrow="Resmî Ads Manager & Performans Yönetimi"
      title="ChatGPT Reklam Ajansı: ChatGPT Ads Kampanya Yönetimi"
      summary="ChatGPT reklamları, kullanıcıların satın alma ve araştırma kararı verdiği konuşma anlarında organik cevaptan ayrı ve sponsorlu etiketli olarak gösterilir. Hesap kurulumundan context hints optimizasyonuna, dönüşüm takibinden GEO sinerjisine kadar tüm süreci uçtan uca yönetiyoruz."
      cta="ChatGPT Reklam Kampanyası Başlatın"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Konuşma ve Karar Anlarında Reklam: ChatGPT Ads Mantığı
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Geleneksel arama motorlarında kullanıcılar kısa anahtar kelimelerle yüzlerce mavi bağlantı arasında gezinir. 
            ChatGPT'de ise kullanıcılar bir problemi çözmek, karmaşık bir satın alma kararını netleştirmek veya bir ürün/hizmet karşılaştırması yapmak için yapay zekâ ile derinlemesine diyalog kurar. 
            ChatGPT Ads, kullanıcının tam bu karar anında ihtiyaç duyduğu ilgili çözümü <strong>sponsorlu</strong> olarak sunar.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Overseas Marketing olarak sunduğumuz <strong>ChatGPT Reklam Ajansı</strong> hizmeti; markanızın yalnızca tıklama almasını değil, yüksek niyetli (high-intent) potansiyel müşterileri doğrudan nitelikli satış ve dönüşüme dönüştürmesini sağlar. Kampanya stratejinizi, hedefleme bağlamını ve ölçüm altyapısını işletmenizin ticari hedeflerine göre kurarız.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#ffffff' }}>
            Context Hints (Bağlam İpuçları) Mimarisi
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, marginBottom: '1.2rem' }}>
            ChatGPT reklamcılığında geleneksel "kelime eşleme" mantığı yerini <strong>Context Hints (Bağlam İpuçları)</strong> sistemine bırakmıştır. Reklamveren olarak sisteme yalnızca anahtar kelime girmek yerine:
          </p>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.2rem' }}>
            <li><strong>Kullanıcı Durumu:</strong> Kullanıcının hangi problem veya karar aşamasında olduğu (Örn: B2B muhasebe yazılımı arayan, ekibini büyüten KOBİ).</li>
            <li><strong>Ürün / Çözüm Kapsamı:</strong> Ürününüzün hangi özel ihtiyacı nasıl çözdüğü ve temel ayırt edici değeri.</li>
            <li><strong>Niyet ve Hedefleme Kontrolü:</strong> Desteklenen panel ayarlarını ve reklam–açılış sayfası uyumunu değerlendiririz. Context hints bir negatif hedefleme sistemi değildir.</li>
          </ul>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Context hints bir gösterim veya birinci sıra garantisi değildir; yapay zekâ modelinin kullanıcı sorusunun semantik bağlamını kavrayıp sizin çözümünüzü en doğru anda önermesini sağlayan yönlendirici rehberdir.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Hizmet Kapsamı ve Teslim Edilecek Çıktılar (Deliverables)
          </h2>
          <div className="table-wrap" tabIndex={0} style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem' }}>Aşama</th>
                  <th style={{ padding: '0.9rem' }}>Hizmet Modülü</th>
                  <th style={{ padding: '0.9rem' }}>Teslim Edilecek Çıktı & Doğrulama</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: 'var(--chat-green-text)' }}>01. Kurulum</td>
                  <td style={{ padding: '0.9rem' }}>Hesap & Uygunluk Doğrulaması</td>
                  <td style={{ padding: '0.9rem' }}>OpenAI Ads Manager şirket hesabı, tüzel kişilik onayı, faturalandırma ve ekip erişim yetkileri.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: 'var(--chat-green-text)' }}>02. Strateji</td>
                  <td style={{ padding: '0.9rem' }}>Context Hints Kütüphanesi</td>
                  <td style={{ padding: '0.9rem' }}>Hedeflenen arama niyetleri, negatif bağlam filtreleri ve sektörünüze özel bağlam haritası.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: 'var(--chat-green-text)' }}>03. Kreatif</td>
                  <td style={{ padding: '0.9rem' }}>Reklam Mesajları & Format Testi</td>
                  <td style={{ padding: '0.9rem' }}>Konuşma akışına doğal uyum sağlayan, abartısız ve marka rehberine tam uyumlu reklam metin varyasyonları.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: 'var(--chat-green-text)' }}>04. Ölçüm</td>
                  <td style={{ padding: '0.9rem' }}>Pixel, CAPI & UTM İzleme</td>
                  <td style={{ padding: '0.9rem' }}>Web sitenizde satın alma ve lead eventlerinin OpenAI sunucu dönüşüm API'si ve CRM ile entegrasyonu.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: 'var(--chat-green-text)' }}>05. Yönetim</td>
                  <td style={{ padding: '0.9rem' }}>Haftalık Optimizasyon & Rapor</td>
                  <td style={{ padding: '0.9rem' }}>Tıklama başı maliyet (TBM), lead kalitesi, ROAS ve öğrenme verisi analiz raporu.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '14px', padding: '1.8rem' }}>
          <h3 style={{ color: '#f87171', fontSize: '1.2rem', marginBottom: '0.8rem', fontWeight: 600 }}>
            Şeffaflık ve Etik İlkemiz: Sponsorlu Reklam vs Organik Cevap
          </h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            OpenAI reklam politikalarına göre sponsorlu reklamlar, modelin tarafsız ve organik yanıtlarından tamamen ayrı tutulur. 
            ChatGPT'de reklam vermek modelin organik yanıtını, kaynak seçimini veya tarafsız tavsiyelerini <strong>kesinlikle değiştirmez</strong>. 
            Organik cevaplarda kaynak olmak için bağımsız <strong>GEO (Generative Engine Optimization)</strong> danışmanlığı yürütülmelidir. 
            Ajansımız bu iki kulvarı hiçbir zaman birbirine karıştırmaz ve müşterilerine gerçek dışı sıralama vaadinde bulunmaz.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Hesap Mülkiyeti ve Bütçe Çerçevesi
          </h2>
          <div className="compare-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="compare-card" style={{ background: 'var(--chat-surface)', padding: '1.8rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: '#ffffff', marginBottom: '0.8rem', fontSize: '1.2rem' }}>%100 Hesap Mülkiyeti</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.6, fontSize: '0.92rem' }}>
                OpenAI Ads Manager hesabı doğrudan firmanızın tüzel kişiliği adına açılır. Reklam hesabının, kampanya verilerinin ve piksel sinyallerinin yegâne sahibi siz olursunuz. Ajansımız yönetici / uzman yetkisiyle hesabı yönetir.
              </p>
            </div>
            <div className="compare-card" style={{ background: 'var(--chat-surface)', padding: '1.8rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: '#ffffff', marginBottom: '0.8rem', fontSize: '1.2rem' }}>Şeffaf Bütçe Ayrımı</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.6, fontSize: '0.92rem' }}>
                Medya bütçesi doğrudan kendi kurumsal kredi kartınızla OpenAI platformuna ödenir. Ajansımıza ise sadece kampanya kurgusu, context hints optimizasyonu ve analitik yönetim hizmet bedeli ödersiniz; bütçenizde gizli kesinti olmaz.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Sıkça Sorulan Sorular
          </h2>
          <div className="faq-list">
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Türkiye'deki işletmeler ChatGPT reklamı verebilir mi?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Evet. 23 Eylül 2026 itibarıyla Türkiye, OpenAI Ads Manager Beta self-servis kullanılabilir ülke listesinde yer almaktadır. İşletme doğrulamasını tamamlayan Türk şirketleri uygun kampanyaları yayına alabilir.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>ChatGPT reklamları nerede ve nasıl görüntülenir?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Reklamlar, kullanıcının sorduğu soru veya yürüttüğü araştırma konusuyla ilgili bir bağlam oluştuğunda, konuşma ekranında model cevabının yanında veya altında "Sponsorlu / Ad" ibaresiyle net bir şekilde işaretlenerek gösterilir.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>İlk test kampanyası için önerilen süre ve bütçe nedir?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Yapay zekâ algoritmalarının bağlamı öğrenmesi ve dönüşüm sinyallerini toplaması için ilk test sürecinin en az 30-45 gün sürdürülmesi önerilir. Sektörünüze göre minimum pilot medya bütçesi strateji görüşmesinde belirlenir.
              </p>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Markanız İçin ChatGPT Ads Kampanyası Başlatalım</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '640px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Ürün veya hizmetinizin ChatGPT ekosistemindeki arama niyetlerini çıkaralım, 25+ context hints bağlam haritasını kuralım, CAPI dönüşüm takibini bağlayalım ve kontrollü pilot testinizi başlatalım. Adım adım kurulum için <a href="/chatgpt-reklam-verme/" style={{ color: 'var(--chat-green-text)', fontWeight: 600 }}>İlk kampanya kurulum adımları</a> rehberimizi inceleyin.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="button primary" href="/iletisim/">ChatGPT Ads Kampanya Planı İsteyin <Arrow /></a>
            <a className="button secondary" href="/chatgpt-reklam-fiyatlari/">Fiyat ve Bütçe Seviyeleri <Arrow /></a>
          </div>
        </div>
      </div>
    </Detail>
  )
}

function ChatGPTTurkeyPage() {
  return (
    <Detail
      eyebrow="Türkiye Pazarı & Yasal Çerçeve"
      title="ChatGPT Reklamları Türkiye: Erişim, Kurulum ve Uygunluk Rehberi"
      summary="OpenAI Ads Manager Beta Türkiye durumu: Self-servis panel erişimi, şirket tüzel kişilik evrakları, fatura ve 2 No'lu KDV vergilendirmesi ile Türkçe dil modellerinde reklam optimizasyonu."
      cta="Türkiye Kampanyanızı Başlatın"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Türkiye'de ChatGPT Reklamları Durumu: 2026 Son Durum
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Türkiye, yapay zekâ adaptasyonunda dünyanın en hızlı büyüyen pazarlarından biridir. Milyonlarca profesyonel, öğrenci ve karar verici her gün ChatGPT'yi araştırma, satın alma ve analiz aracı olarak kullanmaktadır.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            <strong>Resmî Durum:</strong> 23 Eylül 2026 tarihi itibarıyla OpenAI Ads Manager Beta programında Türkiye, reklamveren self-servis erişimine açık ülkeler arasında yer almaktadır. Türk şirketleri resmî vergi ve fatura bilgileriyle doğrudan OpenAI Ads Manager hesabı açabilir ve Türkiye veya global hedef kitlelere yönelik kampanyalarını başlatabilir.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.2rem', color: '#ffffff' }}>
            Başvuru ve Hesap Kurulumu İçin Gerekenler
          </h2>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li><strong>Tüzel Kişilik:</strong> Anonim Şirket (A.Ş.), Limited Şirket (Ltd. Şti.) veya tescilli Şahıs Şirketi kaydı.</li>
            <li><strong>Vergi Kimlik Numarası (VKN) & Vergi Dairesi:</strong> Faturanın yasal muhasebe kaydı için eksiksiz şirket unvanı ve VKN bilgisi.</li>
            <li><strong>Kurumsal Alan Adı & E-posta:</strong> @sirketiniz.com uzantılı resmî iş e-posta adresi (ücretsiz genel servisler onay gecikmesine neden olabilir).</li>
            <li><strong>Web Sitesi ve Açılış Sayfası:</strong> SSL sertifikalı, çalışan iletişim bilgileri, gizlilik politikası ve KVKK aydınlatma metnine sahip kurumsal web sitesi.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Faturalandırma, Vergi ve 2 No'lu KDV Süreci
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            OpenAI merkezli harcamalar uluslararası dijital hizmet alımı kapsamındadır. Türkiye'deki mali mevzuat uyarınca:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>2 No'lu KDV Beyanı</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Yurtdışından alınan dijital reklam hizmeti için şirketiniz tarafından sorumlu sıfatıyla 2 No'lu KDV beyannamesi verilerek KDV tahakkuk ettirilir ve 1 No'lu KDV'de indirim konusu yapılır.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Stopaj Yükümlülüğü</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Cumhurbaşkanı Kararı uyarınca yurtdışı mukimi firmalara yapılan dijital reklam ödemelerinde geçerli stopaj oranları dikkate alınarak muhtasar beyanname ile beyan edilir.
              </p>
            </div>
          </div>
          <p style={{ color: 'var(--chat-text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
            *Not: Vergi mevzuatı güncellemeleri için mali müşaviriniz veya muhasebe departmanınızla teyit etmeniz tavsiye edilir.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Türkiye Pazarında Sektörel Uygunluk Matrisi
          </h2>
          <div className="table-wrap" tabIndex={0} style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem' }}>Sektör</th>
                  <th style={{ padding: '0.9rem' }}>Uygunluk Derecesi</th>
                  <th style={{ padding: '0.9rem' }}>Kullanım Senaryosu & Karar Anı</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>B2B Yazılım & SaaS</td>
                  <td style={{ padding: '0.9rem', color: 'var(--chat-green-text)', fontWeight: 600 }}>Çok Yüksek</td>
                  <td style={{ padding: '0.9rem' }}>ERP, CRM, insan kaynakları ve muhasebe yazılımı araştırmalarında yüksek niyetli karar vericilere ulaşma.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Kurumsal Danışmanlık & Hukuk</td>
                  <td style={{ padding: '0.9rem', color: 'var(--chat-green-text)', fontWeight: 600 }}>Yüksek</td>
                  <td style={{ padding: '0.9rem' }}>Vergi, gümrük, şirket kuruluşu ve strateji danışmanlığı arayan yöneticiler için uzmanlık teklifleri.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Sağlık Turizmi & Yüksek Değerli Hizmet</td>
                  <td style={{ padding: '0.9rem', color: 'var(--chat-green-text)', fontWeight: 600 }}>Yüksek</td>
                  <td style={{ padding: '0.9rem' }}>Yurtdışından Türkiye'deki klinikleri araştıran hastalara yönelik yabancı dil context hints kampanyaları.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>E-Ticaret & Niş Tüketici Ürünleri</td>
                  <td style={{ padding: '0.9rem', color: '#f59e0b', fontWeight: 600 }}>Orta - Yüksek</td>
                  <td style={{ padding: '0.9rem' }}>Derin ürün karşılaştırması ve teknik inceleme yapılan lüks, teknoloji ve özel tasarım ürünler.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Sıkça Sorulan Sorular
          </h2>
          <div className="faq-list">
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Türkiye'den reklam verirken hedefleme nasıl yapılır?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Kampanyanızı Türkiye'deki Türkçe konuşan kullanıcılara hedefleyebileceğiniz gibi, Türkiye'den yurtdışına (ABD, Avrupa, Körfez vb.) ihracat yapan firmalar için ilgili ülke ve dillerde de yayınlayabilirsiniz.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ödemeler Türk Lirası ile mi yapılır?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                OpenAI platformu faturalandırmayı genellikle USD bazında gerçekleştirir; kurumsal kredi kartınız bankanız tarafından güncel döviz kuru üzerinden Türk Lirası olarak ekstreye yansıtılır.
              </p>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Türkiye Pazarında Erken Avantaj Elde Edin</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Rakipleriniz henüz ChatGPT Ads'i keşfetmemişken sektörünüzdeki en kârlı arama ve karar anlarını kapatın.
          </p>
          <a className="button primary" href="/iletisim/">Türkiye Kurulum Danışmanlığı Alın <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function GEOPage() {
  return (
    <Detail
      eyebrow="Organik AI Görünürlüğü & Kaynak Olma"
      title="GEO Ajansı: Yapay Zekâ Aramalarında Organik Görünürlük"
      summary="Generative Engine Optimization (GEO); marka bilgilerinin anlaşılabilirliğini ve kaynak olarak bulunabilirliğini geliştirme ve ölçme çalışmasıdır."
      cta="Ücretsiz GEO Analizi İsteyin"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Generative Engine Optimization (GEO) Nedir?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Kullanıcılar artık Google'a sadece 2-3 kelimelik sorgular yazıp çıkan 10 mavi linki tek tek gezmekle yetinmiyor. 
            Doğrudan ChatGPT, Perplexity veya Gemini'ye giderek: <em>"İstanbul'da B2B lojistik için en güvenilir 3 yazılım hangisi ve aralarındaki farklar neler?"</em> gibi karmaşık sorular soruyorlar.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            <strong>GEO (Üretken Motor Optimizasyonu)</strong>; web sitenizin, içeriklerinizin ve marka varlığınızın büyük dil modelleri (LLM) tarafından anlaşılabilirliğini ve kaynak olarak bulunabilirliğini geliştirme ve ölçme çalışmasıdır.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Klasik SEO ile GEO Arasındaki Temel Farklar
          </h2>
          <div className="table-wrap" tabIndex={0} style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem' }}>Kriter</th>
                  <th style={{ padding: '0.9rem' }}>Geleneksel SEO</th>
                  <th style={{ padding: '0.9rem' }}>GEO (Generative Engine Optimization)</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Kullanıcı Deneyimi</td>
                  <td style={{ padding: '0.9rem' }}>Bağlantı listesi (SERP) ve siteye tıklama.</td>
                  <td style={{ padding: '0.9rem' }}>Tek sentezlenmiş doğrudan cevap ve kaynak alıntısı.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Hedefleme Mantığı</td>
                  <td style={{ padding: '0.9rem' }}>Spesifik anahtar kelime hacmi ve yoğunluğu.</td>
                  <td style={{ padding: '0.9rem' }}>Semantik varlık (Entity), net gerçekler ve problem çözme derinliği.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Taranabilirlik</td>
                  <td style={{ padding: '0.9rem' }}>Googlebot indekslemesi ve HTML analizi.</td>
                  <td style={{ padding: '0.9rem' }}>GPTBot, ClaudeBot, PerplexityBot ve yapısal veri (JSON-LD) çıkarımı.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Otorite Ölçütü</td>
                  <td style={{ padding: '0.9rem' }}>Backlink sayısı ve Domain Authority skoru.</td>
                  <td style={{ padding: '0.9rem' }}>EEAT kanıtları, bağımsız incelemeler ve alıntı tutarlılığı.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.2rem', color: '#ffffff' }}>
            4 Temel GEO Sütunu: Başarıyı Getiren Mimari
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div>
              <strong style={{ color: 'var(--chat-green-text)', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>1. Taranabilirlik ve Bot İzinleri</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Web sitenizin robots.txt dosyasında GPTBot, Claude-Web, PerplexityBot ve Google-Extended gibi yapay zekâ tarayıcılarının engellenmemiş olması ve hızlı yanıt vermesi.
              </p>
            </div>
            <div>
              <strong style={{ color: 'var(--chat-green-text)', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>2. Varlık Netliği ve Bilgi Mimarisi</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Markanızın ne yaptığını, hangi fiyata hangi faydayı sunduğunu ve rakiplerden farkını yapay zekânın hiçbir çıkarım yapmadan doğrudan okuyabileceği net cümlelerle sunmak.
              </p>
            </div>
            <div>
              <strong style={{ color: 'var(--chat-green-text)', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>3. Derin Yapısal Veri (Schema.org)</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Organization, Service, Product, FAQPage ve Review schema şablonlarının kod düzeyinde eksiksiz gömülmesi, LLM'lerin verinizi hatasız ayrıştırmasını sağlar.
              </p>
            </div>
            <div>
              <strong style={{ color: 'var(--chat-green-text)', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>4. Üçüncü Taraf Kanıt ve Güvenilirlik</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Yapay zekâ modelleri yalnızca sizin sitenize bakmaz; sektör sitelerindeki incelemeler, forumlar, basın bültenleri ve tarafsız dizinlerdeki marka bahsini doğrular.
              </p>
            </div>
          </div>
        </section>

        {/* Yeni Bölüm: Markam Neden Önerilmiyor? */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Markam ChatGPT ve Diğer Modellerde Neden Önerilmiyor?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            Şirketiniz sektöründe lider olsa dahi yapay zekâ yanıtlarında çıkmamasının 3 somut nedeni vardır:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'var(--chat-surface)', padding: '1.6rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <h4 style={{ color: 'var(--chat-green-text)', marginBottom: '0.6rem', fontSize: '1.1rem' }}>1. Taranabilirlik ve Bot İzinleri</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                OpenAI'ın arama indeksleyicisi <code>OAI-SearchBot</code> veya Perplexity botları robots.txt veya WAF duvarında engelliyse siteniz taranamaz. 
                Ayrıntılı rehber için <a href="/blog/markam-chatgptde-neden-gorunmuyor/">Markam ChatGPT’de Neden Görünmüyor?</a> yazımızı okuyun.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.6rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <h4 style={{ color: 'var(--chat-green-text)', marginBottom: '0.6rem', fontSize: '1.1rem' }}>2. Varlık (Entity) & Veri Boşlukları</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Yapay zekâ modelleri tarafsız 3. taraf kanıtlar (basın, vaka incelemeleri, dizinler) görmediği sürece halüsinasyon riskinden kaçınmak için markanızı önermez.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.6rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <h4 style={{ color: 'var(--chat-green-text)', marginBottom: '0.6rem', fontSize: '1.1rem' }}>3. Bilgi Kazancı (Information Gain) Eksikliği</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Genel geçer laflar yerine doğrudan kullanıcının karar anına hitap eden rakamsal veri, süreç ve fiyat şeffaflığı sunan sayfalar alıntı kazanır.
              </p>
            </div>
          </div>
          <div style={{ background: 'var(--chat-surface)', borderRadius: '12px', padding: '1.2rem', border: '1px solid var(--chat-border)' }}>
            <p style={{ color: 'var(--chat-text-secondary)', margin: 0, fontSize: '0.95rem' }}>
              Adım adım organik görünürlük adımları ve kaynak gösterilme rehberi için <a href="/chatgptde-markam-nasil-cikar/" style={{ color: 'var(--chat-green-text)', fontWeight: 600 }}>ChatGPT'de markam nasıl çıkar?</a> sayfamızı inceleyin.
            </p>
          </div>
        </section>

        {/* Yeni Bölüm: Hangi Sorularda Kaynak Gösteriliyorum? */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Hangi Sorularda Kaynak Gösteriliyorum? (Mention vs. Citation vs. Recommendation)
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
            GEO başarısı 3 aşamalı görünürlük piramidinde ölçülür:
          </p>
          <div className="table-wrap" tabIndex={0} style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem' }}>Aşama</th>
                  <th style={{ padding: '0.9rem' }}>Tanım</th>
                  <th style={{ padding: '0.9rem' }}>Örnek Soru & Sonuç</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Mention (Anılma)</td>
                  <td style={{ padding: '0.9rem' }}>Markanın sektör listelerinde isminin geçmesi.</td>
                  <td style={{ padding: '0.9rem' }}>"Sektördeki firmalar: X, Y, Markanız."</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Citation (Kaynak Linki)</td>
                  <td style={{ padding: '0.9rem' }}>Modelin bilgiyi sitenizden alıntılayıp tıklanabilir link vermesi.</td>
                  <td style={{ padding: '0.9rem' }}>"Araştırmaya göre maliyetler %30 düştü [1]."</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Recommendation (Tavsiye)</td>
                  <td style={{ padding: '0.9rem' }}>Modelin kullanıcının sorununa doğrudan sizi çözüm olarak sunması.</td>
                  <td style={{ padding: '0.9rem' }}>"İhtiyacınız için en uygun çözüm Markanızdır."</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Ölçüm detayları için <a href="/blog/geo-performansi-nasil-olculur/">GEO Performansı Nasıl Ölçülür?</a> rehberimize göz atın.
          </p>
        </section>

        {/* Canlı Test Konsolu Banner */}
        <section style={{ marginBottom: '3.5rem', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(13, 17, 23, 0.9) 100%)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
          <span style={{ color: 'var(--chat-green-text)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            CANLI TEŞHİS MOTORU
          </span>
          <h3 style={{ fontSize: '1.8rem', color: '#ffffff', margin: '0.8rem 0' }}>
            Sitenizin Yapay Zekâ Görünürlüğünü Şimdi Canlı Test Edin
          </h3>
          <p style={{ color: 'var(--chat-text-secondary)', maxWidth: '680px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Desteklenen modeller (Son kontrol: Eylül 2026: ChatGPT, Perplexity, Gemini, Claude) üzerinde sitenizin taranabilirlik durumunu, marka referanslarını ve alıntı potansiyelini test simülasyonuyla anında inceleyin.
          </p>
          <a className="button primary" href="/yapay-zeka-gorunurluk-analizi/">
            ⚡ Canlı AI Denetim Konsolunu Başlat <Arrow />
          </a>
        </section>

        <section style={{ marginBottom: '3.5rem', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '14px', padding: '1.8rem' }}>
          <h3 style={{ color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.8rem', fontWeight: 600 }}>
            Ölçümleme Sınırlamaları ve Şeffaflık Taahhüdümüz
          </h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Yapay zekâ yanıtları deterministik değildir; kullanıcının önceki sohbet geçmişine, coğrafyasına, kullandığı modele ve rastgelelik parametresine (temperature) göre değişiklik gösterir. 
            Hiçbir ajans veya araç <em>"ChatGPT her aramada kesin olarak sadece sizi önerecek"</em> garantisi veremez. 
            Google da üretken arama yönergelerinde özel bir <code>llms.txt</code> şartı koşmamakta; taranabilir, özgün ve yüksek uzmanlıklı içerikleri ödüllendirmektedir. 
            Overseas Marketing olarak GEO çalışmalarımızda düzenli çoklu model sorgu testleri, alıntı oranı (citation rate) analizi ve arama niyetlerindeki görünürlük frekansını objektif metriklerle raporlarız.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Sıkça Sorulan Sorular
          </h2>
          <div className="faq-list">
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>GEO çalışması yapmak geleneksel Google SEO'muza zarar verir mi?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Tam tersine; GEO prensipleri (derin içerik, yapısal veri, taranabilirlik, EEAT) Google'ın Helpful Content ve AI Overview algoritmalarıyla %100 örtüşür. GEO çalışması SEO performansınızı da doğrudan güçlendirir.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>GEO sonuçlarını ne kadar sürede görürüz?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Perplexity gibi canlı web araması yapan modellerde yapılan değişiklikler birkaç gün veya hafta içinde yansıyabilir. Temel dil modellerinin ağırlık güncellemelerinde ise periyodik indeksleme döngüleri takip edilir; ortalama etki 2-3 ay içinde belirginleşir.
              </p>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Sitenizin Yapay Zekâ Görünürlüğünü Ölçün</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Ücretsiz GEO analizi formumuzu doldurun; markanızın ChatGPT, Perplexity ve Gemini'de tavsiye edilme durumunu raporlayalım.
          </p>
          <a className="button primary" href="/#ucretsiz-analiz">Ücretsiz GEO Analizi Başlatın <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function AIPlatformsPage() {
  return (
    <Detail
      eyebrow="Platform Seçimi & Karar Matrisi"
      title="Yapay Zekâ Platformlarında Reklam Verme: Platform Seçim Rehberi"
      summary="ChatGPT Ads, Google AI Mode, Microsoft Copilot ve Perplexity AI... Hangi yapay zekâ reklam platformu işletmeniz, sektörünüz ve bütçeniz için en uygunudur? Doğru kanal seçimi, formatlar ve ölçüm stratejisi."
      cta="AI Reklam Stratejinizi Belirleyin"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            AI Reklamcılığının 4 Büyük Ekosistemi
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Yapay zekâ reklamcılığı tek bir platformdan ibaret değildir. Her platformun kullanıcı profili, niyet derinliği, reklam formatları ve ölçüm kabiliyeti birbirinden farklıdır. 
            Başarılı bir yapay zekâ reklam yatırımı, doğru kitleyi doğru platformun karar anında yakalamakla başlar.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            AI Reklam Platformları Karşılaştırma Matrisi
          </h2>
          <div className="table-wrap" tabIndex={0} style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem' }}>Platform</th>
                  <th style={{ padding: '0.9rem' }}>Hedefleme Mantığı</th>
                  <th style={{ padding: '0.9rem' }}>En Uygun Sektörler</th>
                  <th style={{ padding: '0.9rem' }}>Ölçümleme & Veri</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: 'var(--chat-green-text)' }}>ChatGPT Ads (OpenAI)</td>
                  <td style={{ padding: '0.9rem' }}>Context Hints (Konuşma Bağlamı), karar anı niyetleri ve negatif bağlamlar.</td>
                  <td style={{ padding: '0.9rem' }}>B2B SaaS, Kurumsal Hizmetler, Profesyonel Danışmanlık, Niş E-ticaret.</td>
                  <td style={{ padding: '0.9rem' }}>OpenAI Pixel, CAPI, UTM etiketleri ve CRM satış eşleşmesi.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Google AI Mode / PMax</td>
                  <td style={{ padding: '0.9rem' }}>Arama niyeti sentezi, kitle sinyalleri ve Merchant Center ürün beslemeleri.</td>
                  <td style={{ padding: '0.9rem' }}>Geniş ölçekli E-ticaret, Perakende, Yerel Hizmetler, Hızlı Tüketim.</td>
                  <td style={{ padding: '0.9rem' }}>Google Ads Dönüşüm İzleme, GA4 ve Gelişmiş Dönüşümler (Enhanced Conversions).</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Microsoft Copilot Ads</td>
                  <td style={{ padding: '0.9rem' }}>Edge/Windows kullanıcı profili, LinkedIn veri eşleştirmesi ve Bing araması.</td>
                  <td style={{ padding: '0.9rem' }}>Kurumsal B2B, Finans, BT Donanım ve Profesyonel İş Çözümleri.</td>
                  <td style={{ padding: '0.9rem' }}>Microsoft Advertising UET etiketi ve LinkedIn B2B kitle sinyalleri.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Perplexity & Diğerleri</td>
                  <td style={{ padding: '0.9rem' }}>Sponsorlu sorular, arama motoru alıntıları ve GEO organik görünürlüğü.</td>
                  <td style={{ padding: '0.9rem' }}>Teknoloji, Finans, Sağlık ve Araştırma odaklı tüketici ürünleri.</td>
                  <td style={{ padding: '0.9rem' }}>Referral trafik analizi, kaynak alıntı oranı ve marka bahsi takibi.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.2rem', color: '#ffffff' }}>
            Hangi Platformla Başlamalısınız?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Her markanın yapay zekâ stratejisi aynı olamaz:
          </p>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li><strong>B2B ve Yüksek Müşteri Değeri (LTV) Olanlar:</strong> Doğrudan <em>ChatGPT Ads</em> ve <em>GEO Danışmanlığı</em> ile başlamalıdır; çünkü karar vericiler karmaşık değerlendirmelerini bu ortamlarda yapar.</li>
            <li><strong>Hızlı Dönen E-Ticaret ve Perakende:</strong> <em>Google AI Mode / PMax</em> ve <em>Meta Advantage+</em> kampanyalarını birinci taraf ürün verisiyle güçlendirip eş zamanlı olarak ChatGPT ürün önerileri için GEO hazırlığı yapmalıdır.</li>
            <li><strong>Global B2B İhracatçıları:</strong> <em>ChatGPT Ads</em> ve <em>Microsoft Copilot</em> kombinasyonu ile yurt dışı kurumsal alıcılara konuşma bağlamında ulaşmalıdır.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Sıkça Sorulan Sorular
          </h2>
          <div className="faq-list">
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Tüm AI platformlarını aynı anda mı kullanmalıyız?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Hayır. Bütçeyi parçalamak yerine önce hedef kitlenizin en yoğun olduğu kanalda (genellikle ChatGPT veya Google AI) kontrollü bir pilot test yaparak kârlılığı kanıtlamanızı ve ardından diğer platformlara ölçeklenmenizi öneririz.
              </p>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Markanız İçin Doğru AI Platformunu Seçelim</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Hedef kitlenizi, ürününüzü ve bütçenizi analiz edelim; en yüksek geri dönüş sağlayacak yapay zekâ reklam kanalını belirleyelim.
          </p>
          <a className="button primary" href="/iletisim/">Platform Değerlendirmesi İsteyin <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function YapayZekadaReklamAjansiPage() {
  return (
    <Detail
      eyebrow="Bağımsız AI Reklam & Büyüme Ajansı"
      title="Yapay Zekada Reklam Ajansı"
      summary="Yapay zekada reklam ajansı, markanın AI destekli ortamlardaki sponsorlu reklamlarını planlayan ve ölçen uzman ekiptir. Biz ChatGPT Ads kampanyalarını, AI yanıtlarında organik görünürlüğü ve geleneksel reklam platformlarındaki AI destekli optimizasyonu birbirinden ayırarak yönetiyoruz. Böylece hangi bütçenin hangi sonuca hizmet ettiğini görebilirsiniz."
      cta="Markam İçin İlk Test Planı İste"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Yapay Zekada Reklam Ajansı Ne Yapar?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Yapay zekada reklam ajansı; markanızın OpenAI ChatGPT, Google AI Overviews, Microsoft Copilot ve Perplexity gibi yeni nesil üretken zekâ ortamlarında doğru zamanda, doğru arama niyetinde ve şeffaf biçimde yer almasını sağlar.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Kanal uygunluğunu değerlendirir; işletme hesabını, kampanya kurgusunu, reklam mesajını, açılış sayfasını ve dönüşüm ölçümünü kurar; sonuçları nitelikli talep ve satış hedeflerine göre sürekli optimize eder.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Üç Ayrı Hizmetin Kapsamı
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'var(--chat-surface)', padding: '1.8rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green-text)', fontSize: '1.25rem', marginBottom: '0.8rem' }}>1. ChatGPT Ads Kampanya Yönetimi</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.92rem' }}>
                OpenAI Ads Manager üzerinden konuşma bağlamında sponsorlu reklam gösterimi. Context hints, desteklenen hedefleme ayarları, pixel ve CRM dönüşüm takibi.
              </p>
              <a href="/chatgpt-reklamlari/" style={{ color: 'var(--chat-green-text)', fontWeight: 600, fontSize: '0.9rem', display: 'inline-block', marginTop: '0.8rem' }}>
                ChatGPT Ads Yönetimi İnceleyin <Arrow />
              </a>
            </div>

            <div style={{ background: 'var(--chat-surface)', padding: '1.8rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green-text)', fontSize: '1.25rem', marginBottom: '0.8rem' }}>2. GEO ve Organik AI Görünürlüğü</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.92rem' }}>
                Markanızın ChatGPT, Perplexity ve Gemini tarafından anlaşılması ve organik yanıtlar üretilirken güvenilir kaynak olarak gösterilmesi.
              </p>
              <a href="/geo-yapay-zeka-gorunurlugu/" style={{ color: 'var(--chat-green-text)', fontWeight: 600, fontSize: '0.9rem', display: 'inline-block', marginTop: '0.8rem' }}>
                AI Yanıtlarında Organik Görünürlük <Arrow />
              </a>
            </div>

            <div style={{ background: 'var(--chat-surface)', padding: '1.8rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green-text)', fontSize: '1.25rem', marginBottom: '0.8rem' }}>3. AI Destekli Google Ads ve Meta</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.92rem' }}>
                Performance Max, Akıllı Teklif, Advantage+ ve Conversions API entegrasyonu ile satış ve kârlılık odaklı geleneksel kanal optimizasyonu.
              </p>
              <a href="/hizmetler/yapay-zeka-google-ads/" style={{ color: 'var(--chat-green-text)', fontWeight: 600, fontSize: '0.9rem', display: 'inline-block', marginTop: '0.8rem' }}>
                Google Ads Hizmetini İnceleyin <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.2rem', color: '#ffffff' }}>
            İlk 30 Günde Neleri Teslim Ediyoruz?
          </h2>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li><strong>Kanal & Uygunluk Raporu:</strong> İşletmenizin ChatGPT Ads ve sektörel kısıtlamalara uygunluk analizi.</li>
            <li><strong>Context Hints Kütüphanesi:</strong> Müşterilerinizin karar anlarını yapay zekâya anlatan doğal dil bağlam haritası.</li>
            <li><strong>Açılış Sayfası Denetimi:</strong> Ziyaretçiyi karşılayan landing page'in hız, netlik ve dönüşüm uyumu.</li>
            <li><strong>Pixel & CAPI Entegrasyonu:</strong> OpenAI sunucu tarafı dönüşüm API'si ve UTM şablonlarının eksiksiz kurulumu.</li>
            <li><strong>İlk Kontrollü Pilot Kampanya:</strong> Uygun bütçe ve desteklenen hedefleme ayarlarıyla kontrollü test ve haftalık raporlama.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Reklam Bütçesi ile Ajans Hizmet Bedeli Nasıl Ayrılır?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Şeffaflık temel ilkemizdir:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Medya Harcaması</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Doğrudan OpenAI Ads Manager veya ilgili platforma, işletmenizin kendi kredi kartıyla ödenir. Ajansımız medya harcamanızdan komisyon gizlemez.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Ajans Yönetim Bedeli</strong>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Strateji, bağlam kütüphanesi üretimi, kreatif varyasyon testleri, teknik CAPI entegrasyonu ve haftalık optimizasyon için sabit veya performans bazlı faturalandırılır. Detaylar için <a href="/blog/chatgpt-reklam-maliyeti/">ChatGPT reklam maliyeti</a> sayfamıza bakın.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Hesap Sahipliği ve Erişim Modeli
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Reklam hesapları hiçbir zaman ajansın mülkiyetinde tutulmaz. Hesap doğrudan firmanızın tüzel kişiliği adına açılır. Şirketiniz hesap sahibi, ajansımız ise davet edilmiş yetkili yönetici olarak çalışır. İstediğiniz an yetkileri değiştirme veya sonlandırma hakkı sizde kalır.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Ekibimiz, Deneyimimiz ve Kanıtlarımız
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Yapay Zekâda Reklam, <strong>Overseas Marketing</strong> uzmanlığı altında faaliyet gösteren bağımsız bir performans ve GEO danışmanlığı birimidir. Ekibimiz uluslararası dijital pazarlama, LLM semantik arama mimarisi ve dönüşüm optimizasyonu alanında deneyimli uzmanlardan oluşur.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Müşterilerimize hiçbir zaman yapay veya doğrulanmamış sonuçlar sunmayız. Her hipotezi gerçek iş verisiyle (CRM leadleri, satışlar ve kârlılık) test ederiz.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Sık Sorulan Sorular
          </h2>
          <div className="faq-list">
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Yapay zekada reklam ajansı ile geleneksel ajansın farkı nedir?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Geleneksel ajanslar sadece anahtar kelime veya görsel banner satın alır. Yapay zekada reklam ajansı ise kullanıcının diyalog akışındaki karar anlarını semantik context hints ile hedefler ve eş zamanlı olarak markanızı organik GEO ile güçlendirir.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Nasıl başlarız?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Web sitenizi ve ürününüzü inceleyerek ücretsiz bir ön analiz hazırlarız. Uygunluk, önerilen pilot bütçe ve ilk 30 günlük test planını paylaştıktan sonra onayınızla kurulumu başlatırız.
              </p>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Markanız İçin İlk Test Planı İsteyin</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Ürününüze özel ChatGPT reklam stratejisini ve GEO analizini aynı gün içinde hazırlayalım.
          </p>
          <a className="button primary" href="/iletisim/">Markam İçin İlk Test Planı İste <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function YapayZekadaReklamNasilVerilirPage() {
  return (
    <Detail
      eyebrow="2026 Uygulama Rehberi"
      title="Yapay Zekada Reklam Nasıl Verilir? 2026 Uygulama Rehberi"
      summary="Yapay zekada reklam vermek için platform, hesap, hedef, bütçe, kreatif ve ölçüm adımlarını öğrenin. ChatGPT Ads ile GEO arasındaki farkı görün."
      cta="Uygun AI Kanalını Birlikte Belirleyelim"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '2rem', marginBottom: '3rem' }}>
          <strong style={{ color: 'var(--chat-green-text)', fontSize: '1.1rem', display: 'block', marginBottom: '0.6rem' }}>Kısa Cevap:</strong>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', margin: 0 }}>
            Yapay zekada reklam vermek için önce hangi AI ortamında gerçek bir sponsorlu reklam ürünü bulunduğunu ve işletmenizin o ürüne erişebildiğini doğrulayın. Ardından işletmenin kendi reklam hesabını kurun; hedef, bütçe, reklam mesajı ve ilgili açılış sayfasını hazırlayın. Dönüşümleri ölçerek küçük bir test kampanyasıyla başlayın. ChatGPT Ads bu sürecin bir örneğidir. AI yanıtlarında organik kaynak olarak görünmek ise GEO çalışmasıdır; reklam satın alarak organik cevabı değiştiremezsiniz.
          </p>
        </div>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Yapay Zekada Reklam Vermek Ne Anlama Gelir?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Bu ifade iki farklı iş için kullanılıyor. Birincisi, ChatGPT gibi bir ortamın açıkça etiketlenen sponsorlu reklam alanında kampanya yayımlamaktır. İkincisi, Google Ads veya Meta gibi mevcut reklam platformlarının yapay zekâ özelliklerini kullanarak kampanyaları yönetmektir. Bir marka AI yanıtlarında kaynak olarak görünmek de isteyebilir; bu organik görünürlük çalışmasıdır. Kampanya planına başlamadan önce hangi sonucun istendiği netleşmelidir.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.8rem', color: '#ffffff' }}>
            1. Reklam verebileceğiniz platformu ve ülke erişimini doğrulayın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Bir AI aracının kullanıcıya yanıt vermesi, o araçta reklam hesabı açılabildiği anlamına gelmez. Her platform için resmî reklam ürünü, hesap açma yolu, ülke uygunluğu, reklam formatı ve ölçüm seçeneklerini kontrol edin. OpenAI'ın güncel belgelerine göre Türkiye merkezli uygun işletmeler ChatGPT Ads Manager için self servis erişim listesinde bulunuyor. Erişim, hesap doğrulaması ve reklam incelemesi ayrı adımlardır. Başka platformların erişim durumunu aynı varsayımla değerlendirmeyin.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.8rem', color: '#ffffff' }}>
            2. İş hedefini ve başarı ölçüsünü yazın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            “Yapay zekada görünmek” tek başına kampanya hedefi değildir. Form talebi, satış, demo başvurusu veya nitelikli müşteri görüşmesi gibi ölçülebilir bir hedef seçin. Kampanya öncesinde mevcut talep sayısını, talep kalitesini ve açılış sayfası dönüşümünü kaydedin. Reklam sonucu ile organik GEO sonucunu ayrı raporlayın.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.8rem', color: '#ffffff' }}>
            3. İşletme hesabını ve erişimleri kurun
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Reklam hesabı ve ödeme bilgileri işletmenin kontrolünde olmalıdır. Ajans desteği alıyorsanız yetkiyi davet/rol üzerinden verin. OpenAI'ın hesap kurulumu belgeleri, uygun işletmenin hesap oluşturması ve ajansın sonradan davet edilmesi gibi erişim akışlarını açıklıyor. Şirket bilgisi, site ve faturalandırma alanlarını göndermeden önce kontrol edin.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.8rem', color: '#ffffff' }}>
            4. Müşterinin karar anını ve reklam mesajını belirleyin
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Reklamı yalnızca ürün adıyla değil, kullanıcının çözmeye çalıştığı ihtiyaçla eşleştirin. Ürün kimin için, hangi durumda, hangi bölgede ve hangi koşullarda uygundur? ChatGPT Ads'teki “context hints” alanı da reklam sistemine ürünün uygun olduğu bağlamı doğal dille açıklamak için kullanılır. Bağlantısız anahtar kelimeleri art arda yazmak yerine tek bir fikri açık anlatın.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.8rem', color: '#ffffff' }}>
            5. Reklamı doğru açılış sayfasına bağlayın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Reklamdaki vaat açılış sayfasında karşılanmalıdır. Sayfa, teklifin ne olduğunu, kime uygun olduğunu, fiyat/teklif yolunu, güven kanıtını ve sonraki adımı açıkça göstermelidir. Mobilde okunabilirlik, hız ve çalışan form veya ödeme akışı kampanya açılmadan önce kontrol edilmelidir.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.8rem', color: '#ffffff' }}>
            6. Bütçeyi test olarak planlayın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Yeni bir platformda bütçeyi garanti edilen müşteri sayısına göre değil, öğrenmek istediğiniz sorulara göre ayırın: Hangi mesaj daha iyi talep üretiyor? Hangi açılış sayfası daha iyi dönüşüyor? Hangi müşteri segmenti gerçekten satın alıyor? Platform reklam harcaması ile ajans hizmet bedelini ayrı tutun. Güncel platform ücretlerini yalnızca resmî panel veya tekliften doğrulayın; geçmiş pilot rakamlarını bugünün kesin fiyatı gibi sunmayın.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.8rem', color: '#ffffff' }}>
            7. Dönüşümleri ve talep kalitesini ölçün
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Gösterim ve tıklama kampanyanın çalıştığını gösterir; ticari sonucu tek başına kanıtlamaz. Form, satış, demo ve CRM aşamalarını izleyin. UTM parametreleriyle kampanya trafiğini ayırın; platformun desteklediği dönüşüm ölçümünü kurun. Aynı ziyaretçinin farklı kanallarla karşılaşabileceğini göz önüne alarak sonuçları tek bir tıklamaya aşırı bağlamayın.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.8rem', color: '#ffffff' }}>
            8. İlk testten sonra kampanyayı geliştirin
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Test dönemi bitince en çok tıklanan reklamı değil, nitelikli talep üreten mesajı değerlendirin. Açılış sayfasındaki itirazları, form düşüşlerini ve satış ekibinin geri bildirimini inceleyin. Sonraki testte tek bir ana değişkeni değiştirin. Böylece mesaj, bağlam ve teklif etkisini daha açık okuyabilirsiniz.
          </p>
        </section>

        <section style={{ marginBottom: '3rem', background: 'var(--chat-surface)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#ffffff' }}>
            ChatGPT Ads ile GEO Aynı Şey mi?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, margin: 0 }}>
            Hayır. ChatGPT Ads, desteklenen deneyimlerde açıkça etiketlenmiş sponsorlu alanlar için bütçe ayırmaktır. GEO, markanın ve içeriğinin AI sistemleri tarafından anlaşılabilir ve doğrulanabilir olmasına yönelik organik çalışmadır. Reklamveren organik AI yanıtını satın alamaz. Bu iki alan birlikte planlanabilir, fakat ayrı hedef ve raporlarla yönetilmelidir.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Sık Sorulan Sorular
          </h2>
          <div className="faq-list">
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Türkiye'den yapay zekada reklam verilebilir mi?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Platforma göre değişir. OpenAI'ın güncel ülke listesinde Türkiye, uygun işletmeler için Ads Manager self servis erişimine açıktır. Başka bir platform için onun resmî ülke ve ürün belgelerini kontrol edin.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Yapay zekâ reklamı için ajans gerekir mi?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Hesabı işletme kendisi açabilir. Ajans, kanal seçimi, reklam mesajı, açılış sayfası, ölçüm ve sürekli optimizasyonda destek verebilir.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>ChatGPT'de reklam vermek, ChatGPT'nin beni önermesini sağlar mı?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Sponsorlu reklam ile organik yanıt ayrı sistemlerdir. Reklam satın almak organik tavsiyeyi garanti etmez.
              </p>
            </div>
            <div className="faq-item" style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Her yapay zekâ aracında reklam verebilir miyim?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Hayır. Her aracın reklam ürünü, satın alma yolu ve ülke erişimi ayrı ayrı doğrulanmalıdır.
              </p>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Markanız İçin Uygun AI Reklam Kanalını Birlikte Belirleyelim</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            <a href="/chatgpt-reklam-verme/">ChatGPT'de reklam vermenin adımları</a> veya <a href="/yapay-zeka-platformlarinda-reklam/">AI reklam platformlarını karşılaştırın</a>.
          </p>
          <a className="button primary" href="/iletisim/">Danışmanlık Alın <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function BlogCostPage() {
  return (
    <Detail
      eyebrow="Bütçe ve Maliyet Analizi"
      title="ChatGPT Reklam Maliyeti Nasıl Hesaplanır?"
      summary="ChatGPT reklam maliyetleri, medya bütçesi ve ajans yönetim ücretleri nasıl planlanır? TBM açık artırması ve test bütçesi rehberi."
      cta="Bütçe Planınızı Çıkaralım"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Medya Bütçesi ve Hizmet Bedeli Ayrımı
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            ChatGPT reklam maliyeti iki ayrı kalemden meydana gelir: Doğrudan OpenAI'ye yapılan tıklama veya gösterim harcamaları (medya bütçesi) ve profesyonel ajansın yürüttüğü context hints, açılış sayfası, piksel kurulumu ve optimizasyon süreci (hizmet bedeli).
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Bütçeyi Etkileyen Değişkenler
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Sektör rekabeti, hedeflenen coğrafya (Türkiye içi vs ABD/Avrupa ihracatı), bağlam yoğunluğu ve kullanıcı niyetinin derinliği maliyetleri belirler. Doğrulanmamış sabit bir minimum harcama eşiği iddia etmek yerine, sistemin açık artırma dinamiklerine göre test bütçesi kurgulanmalıdır.
          </p>
        </section>

        <section style={{ marginBottom: '3rem', background: 'var(--chat-surface)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#ffffff' }}>
            Test Bütçesi Nasıl Kurulur?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            İlk 30-45 günlük periyotta hedef, büyük harcama yapmak değil; yapay zekânın karar anlarını yakalayarak hangi bağlam ipuçlarının en kaliteli lead ve satış getirdiğini doğrulamaktır.
          </p>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Sektörünüze Özel Maliyet Senaryosu</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            <a href="/chatgpt-reklamlari/">ChatGPT reklam yönetimi</a> hizmetimiz kapsamında bütçe simülasyonunuzu hazırlayalım.
          </p>
          <a className="button primary" href="/iletisim/">Teklif ve Bütçe Planı İsteyin <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function BlogGeoDiffPage() {
  return (
    <Detail
      eyebrow="Strateji Karşılaştırması"
      title="ChatGPT Ads ve GEO Arasındaki Fark Nedir?"
      summary="ChatGPT Ads ile organik GEO arasındaki temel farklar: Görünürlük, ödeme modeli, ölçüm kriterleri ve iki sistemin birlikte kullanımı."
      cta="Stratejinizi Belirleyin"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Sponsorlu Reklam ile Organik AI Tavsiyesi Arasındaki Kesin Sınır
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            ChatGPT Ads; OpenAI Ads Manager üzerinden sponsorlu alanlarda ücretli kampanya yayınlamaktır. GEO (Generative Engine Optimization) ise web sitenizin yapay zekâ motorları tarafından anlaşılıp organik cevaplarda kaynak gösterilmesini sağlayan içerik ve teknik optimizasyon sürecidir.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            <strong>Kesin Kural:</strong> Reklam satın alarak ChatGPT'nin organik yanıtını veya tarafsız tavsiyesini değiştiremezsiniz.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            Karşılaştırma Tablosu
          </h2>
          <div className="table-wrap" tabIndex={0} style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem' }}>Kriter</th>
                  <th style={{ padding: '0.9rem' }}>ChatGPT Ads (Ücretli)</th>
                  <th style={{ padding: '0.9rem' }}>GEO (Organik AI Görünürlüğü)</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Amaç</td>
                  <td style={{ padding: '0.9rem' }}>Hızlı niyet yakalama ve doğrudan dönüşüm.</td>
                  <td style={{ padding: '0.9rem' }}>Kalıcı marka güveni ve organik kaynak alıntısı.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Ödeme</td>
                  <td style={{ padding: '0.9rem' }}>Tıklama / Gösterim başına açık artırma.</td>
                  <td style={{ padding: '0.9rem' }}>Teknik & İçerik danışmanlığı (Medya harcaması yok).</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Görünüm</td>
                  <td style={{ padding: '0.9rem' }}>Açıkça 'Sponsorlu / Ad' etiketli kutu.</td>
                  <td style={{ padding: '0.9rem' }}>Yapay zekânın yanıt metninde kaynak ve dipnot linki.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>İki Stratejiyi Birlikte Yönetin</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            <a href="/chatgpt-reklamlari/">ChatGPT Ads kampanya yönetimi</a> ve <a href="/geo-yapay-zeka-gorunurlugu/">GEO danışmanlığımız</a> ile markanızı tam donanımlı hale getirin.
          </p>
          <a className="button primary" href="/iletisim/">Bütünleşik Strateji İsteyin <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function BlogContextHintsPage() {
  const exampleCategories = [
    {
      category: 'B2B SaaS & Kurumsal Yazılım',
      color: 'var(--chat-green-text)',
      items: [
        'Türkiye\'de 10-50 çalışanlı satış ekibi için WhatsApp entegrasyonlu ve e-fatura uyumlu CRM çözümü arayan şirket yöneticileri.',
        'HubSpot veya Salesforce alternatiflerini maliyet ve yerel destek açısından karşılaştıran Türk teknoloji kurucuları.',
        'Bulut tabanlı muhasebe ve ön muhasebe yazılımı geçiş maliyetini hesaplayan, Paraşüt/BizimHesap kıyaslaması yapan finans müdürleri.',
        'Personel vardiya, izin ve bordro takibini otomatikleştirmek isteyen insan kaynakları direktörleri.',
        'B2B e-ihracat yapan firmalar için çok dilli müşteri destek masası (Helpdesk) ve bilet yönetim sistemi araştıran operasyon liderleri.'
      ]
    },
    {
      category: 'E-Ticaret & D2C Tüketici Markaları',
      color: '#60a5fa',
      items: [
        'Günlük şehir koşusu ile yarı maraton antrenmanı arasındaki ayakkabı farkını soran ve darbe emici taban araştıran koşucular.',
        'Yeni doğan bebek için ergonomik, toksik madde içermeyen ve katlanabilir bebek arabası tavsiyesi isteyen ebeveynler.',
        'Evden çalışanlar için bel destekli ergonomik çalışma koltuğu ve ayarlanabilir masa modellerini kıyaslayan profesyoneller.',
        'Kuru ve hassas ciltler için seramid ve hyaluronik asit içerikli vegan nemlendirici krem önerisi arayan kullanıcılar.',
        'Kahve demleme ekipmanları arasında V60, Aeropress ve filtre kahve makinesi lezzet farkını araştıran gurmeler.'
      ]
    },
    {
      category: 'Sağlık Turizmi & Klinikler',
      color: '#34d399',
      items: [
        'İngiltere veya Almanya\'dan İstanbul\'da all-on-4 diş implantı yaptırmayı planlayan, klinik akreditasyonu ve paket fiyat soran hastalar.',
        'Avrupa\'dan Türkiye\'de FUE/DHI saç ekimi operasyonu için hekim deneyimi, operasyon süresi ve konaklama dahil maliyet araştıranlar.',
        'Göz lazer cerrahisi (No-Touch / SMILE) risklerini ve Türkiye\'deki özel hastane standartlarını kıyaslayan yurt dışı hastalar.',
        'Rinoplasti cerrahisi sonrası iyileşme sürecini ve Türkiye\'deki uzman cerrahların vaka sonuçlarını inceleyen ziyaretçiler.',
        'Termal sağlık oteli ve fizik tedavi rehabilitasyon merkezleri arayan ileri yaş hasta yakınları.'
      ]
    },
    {
      category: 'Kurumsal Danışmanlık & Finans',
      color: '#f59e0b',
      items: [
        'İngiltere\'de (LLC/LTD) veya ABD Delaware\'de şirket kurarak Stripe açmak isteyen Türk yazılımcı ve e-ihracatçılar.',
        'Ar-Ge merkezi ve Teknopark vergi muafiyetleri ile kurumlar vergisi teşviklerini karşılaştıran ölçeklenen girişimler.',
        'Şirket birleşme ve devralma (M&A) süreçlerinde bağımsız finansal değerleme ve due diligence raporu talep eden fonlar.',
        'KVKK ve GDPR uyumluluk denetimi yaptırmak isteyen veri işleyen orta ölçekli finans ve sağlık şirketleri.',
        'Yurt dışı pazar araştırması için Ticaret Bakanlığı Turquality hibe ve destek oranlarını araştıran üreticiler.'
      ]
    },
    {
      category: 'Gayrimenkul, Mimarlık & Yatırım',
      color: '#a78bfa',
      items: [
        'İstanbul Anadolu Yakası\'nda metroya yakın, deprem yönetmeliğine uygun 2+1 ve 3+1 sıfır daire arayan aileler.',
        'Bodrum veya Urla\'da müstakil havuzlu villa yatırımı yaparak yüksek sezonluk kira getirisi hedefleyen yatırımcılar.',
        'Ofis ve ticari plaza alanlarında kurumsal iç mimari tasarım, anahtar teslim uygulama ve akustik düzenleme arayan şirketler.',
        'Vatandaşlık veya ikamet izni amacıyla Türkiye\'de minimum yatırım tutarını sağlayan gayrimenkul portföyü araştıran yabancılar.',
        'Prefabrik çelik konstrüksiyon ev maliyetleri ve ruhsat izin süreçlerini betonarme ile kıyaslayan arsa sahipleri.'
      ]
    }
  ]

  return (
    <Detail
      eyebrow="Teknik Uzmanlık Rehberi"
      title="ChatGPT Context Hints Nedir? OpenAI Ads İçin 25 Örnekle Bağlam İpuçları Rehberi"
      summary="OpenAI Ads Manager'da context hints nasıl yazılır? Klasik anahtar kelimelerden farkı, 25 sektörel karar anı örneği, hedefleme sınırları ve açılış sayfası uyumu."
      cta="Sektörünüze Özel Context Hints Kütüphanesi İsteyin"
    >
      <div style={{ maxWidth: '920px', margin: '0 auto' }}>
        {/* 30 Saniyelik Özeti */}
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '3rem', borderLeft: '4px solid var(--chat-green)' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.6rem' }}>📌 30 Saniyede Özeti</h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, margin: 0 }}>
            ChatGPT context hints (bağlam ipuçları); OpenAI Ads Manager reklam grubunda kullanılan, modelin reklamınızı <strong>hangi konuşma bağlamında, hangi kullanıcı profilinde ve hangi karar anında</strong> sponsorlu olarak gösterebileceğini doğal dille anlatan sinyallerdir. 
            Klasik Google Ads tam eşleşmeli kelime mantığı değildir; semantik anlamsal yakınlık ve konuşma niyeti üzerinden çalışır.
          </p>
        </div>

        {/* Klasik Anahtar Kelime vs Context Hint */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Context Hints Klasik Google Ads Anahtar Kelimesi Değildir
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
            Arama motorlarında kullanıcı <em>"crm fiyatları"</em> gibi 2 kelime arar. ChatGPT'de ise kullanıcı bir durum anlatır: <em>"12 kişilik satış ekibimiz var, WhatsApp görüşmelerini kaçırıyoruz, HubSpot pahalı geldi, alternatif ne var?"</em> Context hints bu akıl yürütme sürecini yakalar.
          </p>
          <div className="table-wrap" tabIndex={0} style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.85rem' }}>Özellik</th>
                  <th style={{ padding: '0.85rem' }}>Klasik Google Ads Kelimesi</th>
                  <th style={{ padding: '0.85rem', color: 'var(--chat-green-text)' }}>ChatGPT Ads Context Hint</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.85rem', fontWeight: 600, color: '#ffffff' }}>Biçim</td>
                  <td style={{ padding: '0.85rem' }}>Kısa kelime öbeği: [crm programı]</td>
                  <td style={{ padding: '0.85rem' }}>Doğal dil cümlesi veya bağlamsal paragraf</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.85rem', fontWeight: 600, color: '#ffffff' }}>Eşleşme Mantığı</td>
                  <td style={{ padding: '0.85rem' }}>Harf/kelime sözdizimsel eşleşmesi (Exact/Phrase)</td>
                  <td style={{ padding: '0.85rem' }}>Semantik vektör benzerliği ve konuşma niyeti</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.85rem', fontWeight: 600, color: '#ffffff' }}>Kullanıcı Anı</td>
                  <td style={{ padding: '0.85rem' }}>Hızlı arama ve link tarama anı</td>
                  <td style={{ padding: '0.85rem' }}>Derin değerlendirme, analiz ve karar anı</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.85rem', fontWeight: 600, color: '#ffffff' }}>Gereksinim</td>
                  <td style={{ padding: '0.85rem' }}>Geniş negatif anahtar kelime listeleri</td>
                  <td style={{ padding: '0.85rem' }}>Net hedef kitle sınırları ve konu dışı negatif bağlamlar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* İyi Bir Context Hint'in 4 Bileşeni */}
        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            İyi Bir Context Hint Hangi Bileşenlerden Oluşur?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>
            <div style={{ background: '#171717', padding: '1.2rem', borderRadius: '12px' }}>
              <span style={{ color: 'var(--chat-green-text)', fontWeight: 700, fontSize: '0.85rem' }}>1. HEDEF KİTLE KİMDİR?</span>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', margin: '0.4rem 0 0', lineHeight: 1.6 }}>Küçük işletme sahibi mi, kurumsal İK direktörü mü, amatör sporcu mu?</p>
            </div>
            <div style={{ background: '#171717', padding: '1.2rem', borderRadius: '12px' }}>
              <span style={{ color: 'var(--chat-green-text)', fontWeight: 700, fontSize: '0.85rem' }}>2. YAŞANAN PROBLEM NEDİR?</span>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', margin: '0.4rem 0 0', lineHeight: 1.6 }}>Mevcut yazılımın pahalı olması, teslimat gecikmesi, bel ağrısı, vergi belirsizliği vb.</p>
            </div>
            <div style={{ background: '#171717', padding: '1.2rem', borderRadius: '12px' }}>
              <span style={{ color: 'var(--chat-green-text)', fontWeight: 700, fontSize: '0.85rem' }}>3. HANGİ SORULAR SORULUYOR?</span>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', margin: '0.4rem 0 0', lineHeight: 1.6 }}>Alternatif arayışı, fiyat/maliyet hesabı, kurulum süresi, hekim tecrübesi.</p>
            </div>
            <div style={{ background: '#171717', padding: '1.2rem', borderRadius: '12px' }}>
              <span style={{ color: 'var(--chat-green-text)', fontWeight: 700, fontSize: '0.85rem' }}>4. COĞRAFYA VE KAPSAM</span>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', margin: '0.4rem 0 0', lineHeight: 1.6 }}>Türkiye geneli, belirli bir metropol veya yurt dışı ihracat hedef pazarı.</p>
            </div>
          </div>
        </section>

        {/* 25 Örnek Kütüphanesi */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.8rem', color: '#ffffff' }}>
            25 Örnek ChatGPT Ads Context Hint Şablonu
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Aşağıdaki bağlam kalıplarını reklam gruplarınızda başlangıç noktası olarak kullanabilir, ürününüze göre özelleştirebilirsiniz:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {exampleCategories.map((cat, idx) => (
              <div key={cat.category} style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                  <span style={{ background: cat.color, color: '#000000', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.8rem' }}>
                    GRUP {idx + 1}
                  </span>
                  <h3 style={{ color: '#ffffff', margin: 0, fontSize: '1.25rem' }}>{cat.category}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} style={{ background: '#121212', padding: '1rem 1.2rem', borderRadius: '10px', borderLeft: `3px solid ${cat.color}` }}>
                      <span style={{ color: 'var(--chat-text-muted)', fontSize: '0.8rem', display: 'block', marginBottom: '0.2rem' }}>Örnek #{idx * 5 + itemIdx + 1}</span>
                      <p style={{ color: '#e5e7eb', margin: 0, fontSize: '0.94rem', lineHeight: 1.6 }}>“{item}”</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Negatif Context Hint Var mı? */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Negatif Context Hints bir hariç tutma sistemi mi?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Hayır. <a href="https://help.openai.com/en/articles/20001211-create-ad-groups-for-chatgpt-ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green-text)' }}>OpenAI'ın resmî ad group rehberine</a> göre context hints alaka düzeyini açıklayan ipuçlarıdır; kesin eşlemeli anahtar kelime veya hedefleme kuralı değildir. Bir ifadeye “gösterme” yazmak o kitleyi hariç tutmaz. Son kontrol: 11 Ekim 2026.
          </p>
          <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '14px', padding: '1.5rem' }}>
            <h4 style={{ color: '#f87171', margin: '0 0 0.8rem', fontSize: '1.1rem' }}>Niyet incelemesinde ayırabileceğiniz örnekler — panel hariç tutma kuralları değildir:</h4>
            <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, margin: 0, paddingLeft: '1.2rem' }}>
              <li><strong>Akademik / Ödev Araştırmaları:</strong> "CRM yazılımının tarihçesi, üniversite tez veya ders slaytı arayan öğrenciler."</li>
              <li><strong>İş Başvurusu & Staj:</strong> "Yazılım şirketlerinde açık pozisyonlar, staj imkanları ve maaş araştırması yapan adaylar."</li>
              <li><strong>Ücretsiz / Açık Kaynak:</strong> "Açık kaynak kodlu (open-source), tamamen ücretsiz ve sıfır bütçeli çözüm arayan bireysel kullanıcılar."</li>
              <li><strong>Teknik Destek / Hata Çözümü:</strong> "Mevcut rakip yazılımın kurulum hatası kodlarını ve şifre sıfırlama adımlarını soranlar."</li>
            </ul>
          </div>
        </section>

        {/* Context Hints ile Açılış Sayfası Uyumu (Message Match) */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Context Hints ile Açılış Sayfası (Landing Page) İlişkisi
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            Context hint'te tanımladığınız senaryo ile kullanıcının yönlendirildiği sayfanın ilk 3 saniyesindeki mesaj birebir örtüşmelidir (Message Match). OpenAI'ın reklam tarayıcısı <code>OAI-AdsBot</code> bu ilişkiyi ve vaat tutarlılığını denetler. Detaylı mimari için <a href="/blog/chatgpt-reklamlari-icin-acilis-sayfasi-kontrol-listesi/" style={{ color: 'var(--chat-green-text)', fontWeight: 600 }}>açılış sayfası kontrol listesini</a> inceleyin.
          </p>
        </section>

        {/* İlgili Bağlantılar */}
        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '1rem' }}>İlgili ChatGPT Ads Rehberleri</h3>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <a href="/chatgpt-reklam-verme/" style={{ background: '#1f2937', color: 'var(--chat-green-text)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              ChatGPT Reklam Verme Rehberi ➔
            </a>
            <a href="/chatgpt-reklamlari/" style={{ background: '#1f2937', color: 'var(--chat-green-text)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              ChatGPT Reklam Yönetimi Servisimiz ➔
            </a>
            <a href="/chatgpt-reklam-fiyatlari/" style={{ background: '#1f2937', color: 'var(--chat-green-text)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              Fiyatlar ve Bütçe Planı ➔
            </a>
            <a href="/blog/chatgpt-reklam-olcumu/" style={{ background: '#1f2937', color: 'var(--chat-green-text)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              Conversions API & Ölçümleme ➔
            </a>
          </div>
        </section>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Sektörünüze Özel Context Hints Kütüphanesi Hazırlayalım
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '640px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Ürününüze ve müşteri ihtiyacına uygun bağlam senaryoları hazırlayalım; reklam mesajı, açılış sayfası ve desteklenen hedefleme ayarlarını kontrollü testlerle değerlendirelim. Context hints belirli bir kullanıcıya gösterim veya hariç tutma garantisi vermez.
          </p>
          <a className="button primary" href="/iletisim/">Context Hints Stratejisi İsteyin <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function BlogMeasurementPage() {
  return (
    <Detail
      eyebrow="Performans & Analitik"
      title="ChatGPT Reklam Performansı Nasıl Ölçülür?"
      summary="ChatGPT Ads dönüşüm takibi, Pixel ve Conversions API entegrasyonu, UTM şablonları ve nitelikli talep kalitesinin ölçümü."
      cta="Ölçüm Altyapınızı Kuralım"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Yalnızca Tıklama Değil, Nitelikli Talep ve CRM Satışı
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            ChatGPT reklamlarında başarı, gelen trafiğin sayısıyla değil; gelen potansiyel müşterilerin form doldurma, demo talep etme ve gerçek satışa dönüşme oranıyla ölçülür.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Ölçüm Zincirinin 4 Temel Halkası
          </h2>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li><strong>UTM Parametreleri:</strong> Kampanya, reklam grubu ve bağlam seviyesinde ayrıştırılmış izleme etiketleri.</li>
            <li><strong>OpenAI Pixel:</strong> Web sitenizdeki sayfa görüntüleme, sepete ekleme ve form tamamlama tetikleyicileri.</li>
            <li><strong>Conversions API (CAPI):</strong> Reklam engelleyicilerden etkilenmeyen güvenli sunucu tarafı dönüşüm sinyalleri.</li>
            <li><strong>CRM Eşleşmesi:</strong> Gelen lead'lerin satış ekibi tarafından kapatılma süresi ve nihai ciro katkısı.</li>
          </ul>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Şeffaf Dönüşüm Ölçümü Kurulumu</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            <a href="/chatgpt-reklamlari/">ChatGPT Ads yönetimi</a> hizmetimizle piksel ve CAPI kurulumunuzu hatasız yapın.
          </p>
          <a className="button primary" href="/iletisim/">Ölçüm Danışmanlığı Alın <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function BlogTurkeyAccountPage() {
  return (
    <Detail
      eyebrow="Türkiye Uygulama Kılavuzu"
      title="Türkiye'den ChatGPT Reklam Hesabı Nasıl Açılır?"
      summary="Türkiye merkezli işletmeler için OpenAI Ads Manager hesabı açma, tüzel kişilik doğrulaması, vergilendirme ve fatura süreci."
      cta="Hesap Açılış Desteği Alın"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Türkiye'de Erişim Durumu (Son Kontrol: 23 Eylül 2026)
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            OpenAI resmî yardım belgelerine göre Türkiye, Ads Manager Beta programında self-servis erişim listesinde yer almaktadır. Türk şirketleri ads.openai.com üzerinden doğrudan işletme hesabı açabilir.
          </p>
        </section>

        <section style={{ marginBottom: '3rem', background: 'var(--chat-surface)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#ffffff' }}>
            Kimler Hesap Açabilir ve Neler Gerekir?
          </h2>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li>Tüzel kişilik (A.Ş., Ltd. Şti. veya Şahıs şirketi).</li>
            <li>Vergi kimlik numarası (VKN) ve vergi dairesi.</li>
            <li>Şirket uzantılı kurumsal e-posta adresi.</li>
            <li>Yasal gereksinimlere (KVKK, Gizlilik) uygun kurumsal web sitesi.</li>
            <li>Uluslararası ödemelere açık kurumsal kredi kartı.</li>
          </ul>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>Türkiye'den Sorunsuz Hesap Açılışı</h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            <a href="/chatgpt-reklamlari-turkiye/">ChatGPT reklamları Türkiye</a> rehberimizi inceleyin veya uzmanlarımızdan kurulum desteği alın.
          </p>
          <a className="button primary" href="/iletisim/">Kurulum Desteği İsteyin <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function Contact() {
  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null
  const defaultQuestion = urlParams ? urlParams.get('soru') || '' : ''

  return (
    <Layout>
      <main id="main-content" tabIndex={-1}>
        <section className="detail-hero section-pad" style={{ paddingBottom: '0.5rem', textAlign: 'center' }}>
          <div className="model-badge" style={{ margin: '0 auto 1.5rem' }}>
            <i /> İletişim & Danışmanlık · {updated}
          </div>
          <h1 style={{ maxWidth: '850px', margin: '0 auto 1rem' }}>Bize Ulaşın & AI Reklam Planınızı Çıkarın</h1>
          <p style={{ maxWidth: '720px', margin: '0 auto 2rem', color: 'var(--chat-text-secondary)', fontSize: '1.1rem' }}>
            ChatGPT Ads, GEO organik arama görünürlüğü ve yapay zekâ reklam stratejisi için uzman ekibimizle görüşün; markanıza özel ilk test planını oluşturalım.
          </p>
        </section>

        <LeadContactForm
          isContactPage
          title="Markanıza Özel Analiz & Teklif Formu"
          subtitle="Formu doldurarak veya doğrudan WhatsApp / telefon hatlarımızdan bize ulaşarak aynı gün içinde strateji seansı planlayabilirsiniz."
          defaultQuestion={defaultQuestion}
        />
      </main>
    </Layout>
  )
}

function Blog() {
  const geoPosts = [
    { title: "ChatGPT'de Markam Nasıl Çıkar? 2026 Görünürlük Rehberi", href: '/chatgptde-markam-nasil-cikar/', tag: 'UYGULAMA REHBERİ', desc: 'Organik görünürlük için 7 adım: teknik erişim, marka tanımı, karar soruları ve gerçek yönlendirme trafiği ölçümü.' },
    { title: "ChatGPT SEO Nedir? AI Arama ve GEO Rehberi", href: '/chatgpt-seo/', tag: 'YENİ REHBER', desc: 'Klasik SEO vs GEO farkı, OAI-SearchBot tarama mantığı, entity netliği ve alıntılanabilir formatlar.' },
    { title: "ChatGPT'de Web Sitem Neden Çıkmıyor? 10 Maddelik Teşhis", href: '/chatgptde-web-sitem-neden-cikmiyor/', tag: 'TEŞHİS LİSTESİ', desc: 'robots.txt, noindex, JS-only rendering, zayıf entity ve bilgi kazancı kontrolleri.' },
    { title: 'Markam ChatGPT’de Neden Görünmüyor? 12 Olası Neden ve Kontrol Listesi', href: '/blog/markam-chatgptde-neden-gorunmuyor/', tag: 'TEŞHİS LİSTESİ', desc: 'Tarama engelleri, marka bilgisi tutarsızlıkları ve rakiplerle karşılaştırmalı görünürlük testi.' },
    { title: 'ChatGPT’de Kaynak Olarak Gösterilmek İçin Site Nasıl Hazırlanır?', href: '/blog/chatgptde-kaynak-gosterilmek-icin-site-nasil-hazirlanir/', tag: 'TEKNİK GEO', desc: 'OAI-SearchBot izinleri, birinci el bilgi kazancı ve dipnot alıntı mimarisi.' },
    { title: 'GEO Performansı Nasıl Ölçülür? Marka, Rakip ve Kaynak Gösterimi', href: '/blog/geo-performansi-nasil-olculur/', tag: 'ÖLÇÜMLEME', desc: 'Mention, Citation ve Recommendation metrikleri ile aylık Share of Model Voice takibi.' },
    { title: 'ChatGPT Ads ile GEO (AI Görünürlüğü) Farkı', href: '/blog/chatgpt-ads-geo-farki/', tag: 'TEMEL FARK', desc: 'Sponsorlu konuşma reklamları ile organik model önerileri arasındaki kritik farklar.' },
    { title: 'GEO Ajansı: Yapay Zekâ Aramalarında Organik Görünürlük Ana Rehberi', href: '/geo-yapay-zeka-gorunurlugu/', tag: 'ANA REHBER', desc: 'Markanızın üretken yapay zekâ motorlarında güvenilir tavsiye kaynağı olarak listelenmesi.' },
  ]

  const adsPosts = [
    { title: "ChatGPT Reklam Verme: Türkiye'den İlk Kampanya Rehberi (2026)", href: '/chatgpt-reklam-verme/', tag: 'KURULUM REHBERİ', desc: 'OpenAI Ads Manager üzerinden hesap açma, context hints kurgusu ve kampanya yayını.' },
    { title: 'ChatGPT Reklam Kampanyası Nasıl Planlanır? İlk 30 Günlük Test Örneği', href: '/blog/chatgpt-reklam-kampanyasi-nasil-planlanir/', tag: 'YENİ REHBER', desc: 'Hedef kitle, context hints, 30 günlük bütçe planı ve durdurma (stop-loss) kararları.' },
    { title: 'OpenAI Ads Manager Nedir? ChatGPT Reklam Paneli Rehberi', href: '/openai-ads-manager/', tag: 'PANEL REHBERİ', desc: 'OpenAI Ads Manager Beta özellikleri, hesap açma, kampanya yapısı ve ölçüm araçları.' },
    { title: 'ChatGPT Reklamları İçin Açılış Sayfası Kontrol Listesi', href: '/blog/chatgpt-reklamlari-icin-acilis-sayfasi-kontrol-listesi/', tag: 'CRO REHBERİ', desc: 'Reklam vaadi ve ilk ekran uyumu, form sadeliği, mobil in-app browser hızı ve güven kanıtları.' },
    { title: 'ChatGPT Reklam Fiyatları 2026: TBM, Bütçe ve Yönetim Modeli', href: '/chatgpt-reklam-fiyatlari/', tag: 'FİYAT MATRİSİ', desc: 'Açık artırma dinamikleri, CPM ve CPC modelleri, pilot bütçe seviyeleri ve ajans ücretleri.' },
    { title: 'ChatGPT Reklam Maliyeti Nasıl Hesaplanır? | Bütçe Planlama', href: '/blog/chatgpt-reklam-maliyeti/', tag: 'BÜTÇE HESABI', desc: 'Medya bütçesi ve ajans bedeli ayrımı, sektör rekabeti ve ROI/ROAS simülasyonu.' },
    { title: 'ChatGPT Ads Context Hints (Bağlam İpuçları) Nasıl Yazılır?', href: '/blog/chatgpt-ads-context-hints/', tag: 'CONTEXT HINTS', desc: 'Anahtar kelime yerine doğal dilli kullanıcı karar anı bağlamları kurgulama rehberi.' },
    { title: 'ChatGPT Reklam Performansı ve Dönüşüm Ölçümü', href: '/blog/chatgpt-reklam-olcumu/', tag: 'CAPI & PIXEL', desc: 'Conversions API, UTM etiketleme, CRM satış eşleşmesi ve nitelikli lead analizi.' },
    { title: 'Türkiye’den ChatGPT Reklam Hesabı Açma Rehberi', href: '/blog/turkiyeden-chatgpt-reklam-hesabi/', tag: 'TÜRKİYE ERİŞİMİ', desc: 'Vergi numarası, fatura, 2 No’lu KDV ve Türkiye merkezli şirketler için doğrulama adımları.' },
  ]

  const strategyPosts = [
    { title: 'ChatGPT Reklamı mı Google Ads mi? Hangi Hedef İçin Hangisi Seçilmeli?', href: '/blog/chatgpt-reklami-mi-google-ads-mi/', tag: 'YENİ REHBER', desc: 'Kullanıcı niyeti, açık artırma dinamikleri, hacim vs derinlik ve iki kanallı hibrit bütçe modeli.' },
    { title: 'Yapay Zekâda Reklam Nasıl Verilir? 2026 Stratejik Uygulama Rehberi', href: '/blog/yapay-zekada-reklam-nasil-verilir/', tag: 'STRATEJİ', desc: 'Kanal uygunluğu doğrulama, kampanya kurgusu ve AI reklamcılığı yol haritası.' },
    { title: 'Yapay Zekâ ile Reklam Verme Nasıl Yapılır? | Temel Rehber', href: '/blog/yapay-zeka-ile-reklam-verme-nasil-yapilir/', tag: 'TEMEL REHBER', desc: 'Hedef kitle modellemesi, teklif optimizasyonu ve birinci taraf veri stratejisi.' },
    { title: 'Yapay Zekâ Platformlarında Reklam Verme & Kanal Rehberi', href: '/yapay-zeka-platformlarinda-reklam/', tag: 'KANAL REHBERİ', desc: 'ChatGPT, Google AI, Microsoft Copilot ve Perplexity reklam seçeneklerinin karşılaştırması.' },
  ]

  return (
    <Detail
      eyebrow="Bilgi Merkezi & Rehberler"
      title="Yapay Zekâ Reklamcılığı ve GEO Bilgi Bankası"
      summary="ChatGPT Ads kampanya yönetimi, OpenAI Ads Manager rehberleri, Generative Engine Optimization (GEO) ve AI arama görünürlüğü üzerine derinlemesine teknik analizler."
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Kategori 1: GEO ve Yapay Zekâ Görünürlüğü */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--chat-border)', paddingBottom: '0.8rem' }}>
            <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: 'var(--chat-green-text)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
              ORGANİK AI ARAMASI
            </span>
            <h2 style={{ fontSize: '1.6rem', color: '#ffffff', margin: 0 }}>GEO ve Yapay Zekâ Görünürlüğü</h2>
          </div>
          <div className="post-grid">
            {geoPosts.map((p) => (
              <a href={p.href} key={p.href} className="post-card">
                <span>{p.tag}</span>
                <h2>{p.title}</h2>
                <p>{p.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Kategori 2: ChatGPT Reklamları */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--chat-border)', paddingBottom: '0.8rem' }}>
            <span style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
              SPONSORLU YERLEŞİM
            </span>
            <h2 style={{ fontSize: '1.6rem', color: '#ffffff', margin: 0 }}>ChatGPT Reklamları & Ads Manager</h2>
          </div>
          <div className="post-grid">
            {adsPosts.map((p) => (
              <a href={p.href} key={p.href} className="post-card">
                <span>{p.tag}</span>
                <h2>{p.title}</h2>
                <p>{p.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Kategori 3: Strateji ve Karşılaştırma */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--chat-border)', paddingBottom: '0.8rem' }}>
            <span style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
              KANAL STRATEJİSİ
            </span>
            <h2 style={{ fontSize: '1.6rem', color: '#ffffff', margin: 0 }}>Platform & Strateji Karşılaştırmaları</h2>
          </div>
          <div className="post-grid">
            {strategyPosts.map((p) => (
              <a href={p.href} key={p.href} className="post-card">
                <span>{p.tag}</span>
                <h2>{p.title}</h2>
                <p>{p.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Canlı Test CTA */}
        <div style={{ textAlign: 'center', marginTop: '4rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '0.8rem' }}>Sitenizin Yapay Zekâ Görünürlüğünü Test Ettiniz mi?</h3>
          <p style={{ color: 'var(--chat-text-secondary)', maxWidth: '680px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Desteklenen modeller (Son kontrol: Eylül 2026: ChatGPT, Perplexity, Gemini, Claude) üzerindeki marka ve kaynak görünürlüğünüzü ücretsiz canlı konsol simülasyonumuzla inceleyin.
          </p>
          <a className="button primary" href="/yapay-zeka-gorunurluk-analizi/">
            ⚡ Canlı Teşhis Aracını Başlat <Arrow />
          </a>
        </div>
      </div>
    </Detail>
  )
}

function PillarGuide() {
  const phases: [string, string][] = [
    ['Hedefi ve Dönüşüm Kriterlerini Belirleyin', 'Satış, nitelikli lead veya marka bilinirliği hedeflerini netleştirip ölçüm altyapısını kurun.'],
    ['AI Okunabilirliği ve GEO Hazırlığı', 'İçeriklerinizi ve ürün verilerinizi ChatGPT ve AI modellerinin referans alabileceği şekilde optimize edin.'],
    ['Kanal ve Model Seçimini Yapın', 'Google AI, Meta Advantage+ veya ChatGPT Ads seçeneklerini müşteri satın alma yolculuğuna göre belirleyin.'],
    ['Context Hints ve Kreatifleri Üretin', 'Tek bir şablon yerine farklı müşteri arama niyetlerini karşılayan bağlamsal ipuçları ve varyasyonlar hazırlayın.'],
    ['Kontrollü Pilot Test Başlatın', 'Algoritmaların öğrenme süreci için yeterli test bütçesi ayırın ve süreci insan denetiminde tutun.'],
    ['İş Verisiyle Okuyun ve Ölçekleyin', 'Yalnızca tıklama maliyetine değil, gerçek satış kârlılığına ve dönüşüm oranına bakarak bütçeyi ölçekleyin.']
  ]

  return (
    <Detail
      eyebrow="Temel Rehber"
      title="Yapay Zekâ ile Reklam Verme Nasıl Yapılır?"
      summary="Yapay zekâ ile reklam verme; hedef kitle modellemesi, teklif optimizasyonu ve içerik üretiminde AI araçlarını kullanırken kararları doğrulanmış iş verisiyle yönetmektir."
    >
      <div style={{ maxWidth: '850px', margin: '0 auto 3rem', color: 'var(--chat-text-secondary)', fontSize: '1.15rem', lineHeight: 1.75 }}>
        <p>
          Yapay zekâ dijital reklamcılığı kökten dönüştürüyor; ancak eksik dönüşüm verisini veya zayıf bir teklifi kendiliğinden düzeltemez. 
          Başarılı bir yapay zekâ reklam stratejisi; doğru veri ölçümü, net bağlam (context hints) ve insan aklıyla şekillenen test disipliniyle kurulur.
        </p>
      </div>

      <div className="feature-grid">
        {phases.map((x, i) => (
          <div className="feature-card" key={x[0]}>
            <span style={{ fontSize: '0.75rem', color: 'var(--chat-green-text)', fontWeight: 600 }}>0{i + 1} / ADIM</span>
            <h3>{x[0]}</h3>
            <p>{x[1]}</p>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '800px', margin: '4rem auto 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1rem' }}>Ücretli Reklam ile GEO Birlikte Nasıl Çalışır?</h2>
        <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
          Google, Meta ve ChatGPT Ads kısa vadede sponsorlu erişim sağlar. GEO ise markanızın yapay zekâ sistemleri tarafından organik bir otorite olarak kabul edilmesini sağlayarak ücretsiz ve kalıcı önerilmeyi mümkün kılar.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="button primary" href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmetini İnceleyin <Arrow /></a>
          <a className="button secondary" href="/iletisim/">Ücretsiz Ön Analiz İsteyin <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

function Legal({ title }: { title: string }) {
  return (
    <Detail
      eyebrow="Yasal Bilgilendirme"
      title={title}
      summary="Yapay Zekâda Reklam yasal çerçeve, veri gizliliği ve kullanıcı hakları bilgilendirmesi."
    >
      <div style={{ maxWidth: '780px', margin: '0 auto', color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
        <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Veri Güvenliği ve Şeffaflık</h2>
        <p>
          Yapay Zekâda Reklam olarak müşteri gizliliğine, KVKK ve ilgili uluslararası veri koruma mevzuatına tam uyum gösteriyoruz. 
          Sitemiz üzerinden paylaşılan analiz talepleri yalnızca hizmet sunumu ve teklif hazırlığı amacıyla işlenmektedir.
        </p>
      </div>
    </Detail>
  )
}

function AuditPage() {
  return (
    <Layout>
      <main id="main-content" tabIndex={-1}>
        <AuditWidget eager />
      </main>
    </Layout>
  )
}

function App() {
  const path = location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/yapay-zekada-reklam-ajansi') return <YapayZekadaReklamAjansiPage />
  if (path === '/blog/yapay-zekada-reklam-nasil-verilir') return <YapayZekadaReklamNasilVerilirPage />
  if (path === '/chatgpt-reklamlari') return <ChatGPTAdsPage />
  if (path === '/chatgpt-reklamlari-turkiye') return <ChatGPTTurkeyPage />
  if (path === '/geo-yapay-zeka-gorunurlugu') return <GEOPage />
  if (path === '/yapay-zeka-platformlarinda-reklam') return <AIPlatformsPage />
  if (path === '/blog/chatgpt-reklam-maliyeti') return <BlogCostPage />
  if (path === '/blog/chatgpt-ads-geo-farki') return <BlogGeoDiffPage />
  if (path === '/blog/chatgpt-ads-context-hints') return <BlogContextHintsPage />
  if (path === '/blog/chatgpt-reklam-olcumu') return <BlogMeasurementPage />
  if (path === '/blog/turkiyeden-chatgpt-reklam-hesabi') return <BlogTurkeyAccountPage />
  if (path === '/blog/yapay-zeka-ile-reklam-verme-nasil-yapilir') return <PillarGuide />
  if (path === '/iletisim') return <Contact />
  if (path === '/blog') return <Blog />
  if (path === '/yapay-zeka-gorunurluk-analizi' || path === '/analiz') return <AuditPage />
  if (path === '/gizlilik' || path === '/kvkk' || path === '/cerez-politikasi') {
    return <Legal title={path === '/kvkk' ? 'KVKK Aydınlatma Metni' : path === '/gizlilik' ? 'Gizlilik Politikası' : 'Çerez Politikası'} />
  }
  const data = pages[path]
  return data ? (
    <GenericPage data={data} />
  ) : (
    <Detail eyebrow="404" title="Sayfa Bulunamadı" summary="Aradığınız sayfa taşınmış veya güncellenmiş olabilir.">
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a className="button primary" href="/">Ana Sayfaya Dön <Arrow /></a>
      </div>
    </Detail>
  )
}

export { Features, pages, GenericPage, ChatGPTAdsPage, ChatGPTTurkeyPage, GEOPage, AIPlatformsPage, YapayZekadaReklamAjansiPage, YapayZekadaReklamNasilVerilirPage, BlogCostPage, BlogGeoDiffPage, BlogContextHintsPage, BlogMeasurementPage, BlogTurkeyAccountPage, Contact, Blog, PillarGuide, Legal, AuditPage, App }
export default App
