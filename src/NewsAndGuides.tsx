import type { ReactNode } from 'react'

export interface NewsAndGuidesProps {
  Detail: React.ComponentType<{ eyebrow: string; title: string; summary: string; children: ReactNode; cta?: string }>
  Arrow: React.ComponentType
}

// ============================================================================
// 1. GÜNCEL REHBER: ChatGPT Reklam Verme: Türkiye'den İlk Kampanya Rehberi (2026)
// ============================================================================
export function ChatGPTGuideUpdatedPage({ Detail, Arrow }: NewsAndGuidesProps) {
  return (
    <Detail
      eyebrow="2026 Kampanya Kurulum Rehberi"
      title="ChatGPT reklam verme: Türkiye'den ilk kampanya nasıl açılır?"
      summary="Türkiye'den ChatGPT reklamı vermek için Ads Manager hesabı, uygunluk, kampanya hedefi, bağlam ipuçları, açılış sayfası ve ölçüm adımlarını inceleyin."
      cta="ChatGPT Ads Uygunluk ve İlk Test Planı İsteyin"
    >
      <div style={{ maxWidth: '920px', margin: '0 auto' }}>
        {/* Giriş */}
        <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
          ChatGPT reklamı, bir işletmenin OpenAI Ads Manager üzerinden oluşturduğu, ChatGPT yanıtından ayrı ve sponsorlu olarak işaretlenen ücretli yerleşimdir. Türkiye merkezli uygun bir tüzel kişi için Ads Manager self servis erişimi, OpenAI'ın güncel ülke listesinde “Available” görünüyor. Ancak ülke erişimi, <strong>her sektörün, hizmetin veya reklamın otomatik onaylandığı anlamına gelmez</strong>. Önce işletme ve reklam kategorisi uygunluğunu kontrol edin; ardından hesap, kampanya, reklam grubu, reklam ve ölçüm kurulumuna geçin.
        </p>

        {/* 30 Saniyede Doğrudan Cevap Kutusu */}
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '2.5rem', borderLeft: '4px solid var(--chat-green)' }}>
          <h2 style={{ color: '#ffffff', fontSize: '1.3rem', marginBottom: '0.8rem', marginTop: 0 }}>
            ⚡ 30 Saniyede Cevap: ChatGPT'de Reklam Vermek Mümkün mü?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.02rem', margin: '0 0 1rem' }}>
            <strong>Evet.</strong> OpenAI, ChatGPT içinde sponsorlu reklam gösterimi için <strong>OpenAI Ads Manager (ads.openai.com)</strong> altyapısını kullanmaktadır. Reklamlar organik ChatGPT cevaplarından tamamen ayrı tutulur ve açıkça "Sponsorlu / Ad" olarak etiketlenir. Kampanyalarda klasik arama motoru anahtar kelime mantığı yerine; konuşma bağlamı, kullanıcı amacı, açılış sayfası uyumu ve reklamverenin tanımladığı <strong>context hints (bağlam ipuçları)</strong> kullanılır.
          </p>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <a href="/blog/chatgpt-ads-context-hints/" style={{ background: '#121212', color: 'var(--chat-green)', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600 }}>25 Context Hints Örneği ➔</a>
            <a href="/chatgpt-reklam-fiyatlari/" style={{ background: '#121212', color: 'var(--chat-green)', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600 }}>TBM & Bütçe Hesaplama ➔</a>
            <a href="/chatgpt-reklamlari-turkiye/" style={{ background: '#121212', color: 'var(--chat-green)', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600 }}>Türkiye Vergi & Fatura ➔</a>
          </div>
        </div>

        {/* ChatGPT'de reklam vermek ile cevaplarda önerilmek aynı mı? */}
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '3rem', borderLeft: '4px solid #60a5fa' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.8rem', marginTop: 0 }}>
            ChatGPT'de reklam vermek ile organik cevaplarda önerilmek aynı şey mi?
          </h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.02rem', margin: 0 }}>
            Hayır. Reklamlar organik yanıttan ayrı gösterilir. OpenAI, reklamverenin modelin verdiği cevabı şekillendiremediğini ve reklamların cevapları etkilemediğini açıkça belirtir. “ChatGPT'de markam nasıl çıkar?” sorusuyla kastınız organik marka görünürlüğüyse <a href="/chatgptde-markam-nasil-cikar/" style={{ color: 'var(--chat-green)', fontWeight: 600 }}>organik GEO rehberimize</a> bakın. Bu sayfa yalnız ücretli kampanya kurulumunu anlatır.
          </p>
        </div>

        {/* 1. Adım */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            1. Reklamveren ülkesini ve sektörünü doğrulayın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Self servis Ads Manager kullanacak ve faturalandırılacak tüzel kişinin OpenAI'ın erişim listesinde yer alan bir ülkede bulunması gerekir. Türkiye listede yer alıyor. Bundan sonra reklamı göstermek istediğiniz ülkeyi, ürün veya hizmetin reklam politikasındaki kategorisini ve açılış sayfanızın uygunluğunu ayrıca denetleyin. Özellikle sağlık, finans ve başka düzenlemeye tabi alanlarda şirket hesabı açılabilmesi kampanya onayı anlamına gelmez.
          </p>
          <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '14px', padding: '1.4rem' }}>
            <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.6rem' }}>Bu aşamada şu üç soruyu yazılı yanıtlayın:</strong>
            <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, margin: 0, paddingLeft: '1.2rem' }}>
              <li>Reklam hesabı hangi şirketin adına?</li>
              <li>Hangi ülkelerde gösterim hedefleniyor?</li>
              <li>Tıklayan kullanıcı hangi şirketin hangi sayfasına gidecek?</li>
            </ul>
            <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', marginTop: '0.8rem', marginBottom: 0 }}>
              Ajansla çalışıyorsanız hesabın ve verinin sahibini sözleşmede açık belirleyin.
            </p>
          </div>
        </section>

        {/* 2. Adım */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            2. Ads Manager hesabını kurun
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Resmî başlangıç adresi <a href="https://ads.openai.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}><code>ads.openai.com</code></a>dur. İş e-postanızla giriş yapın veya hesap oluşturun. Reklamveren adını, marka bilgilerini, ödeme profilini ve ödeme yöntemini tamamlayın; istenen doğrulama adımlarını geçin. Ekip üyelerine görevlerine uygun erişim verin. OpenAI'ın hızlı başlangıç rehberi, kampanyaların Ads Manager Beta'da oluşturulduğunu ve yönetildiğini belirtiyor.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Arayüz beta aşamasında değişebilir. Bu nedenle ekran görüntüsü yayımlarsanız görüntüleme tarihini yazın. Türkiye'deki vergi/muhasebe durumunu her şirkete aynı cümleyle kesinleştirmek yerine kendi mali müşavirinizle değerlendirin.
          </p>
        </section>

        {/* 3. Adım */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            3. Kampanya hedefini ve başarı ölçüsünü seçin
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            İlk kampanyadan beklenen işi tek cümleyle tanımlayın: markanın görünmesi, nitelikli site ziyareti veya ölçülebilir başvuru/satış. Kampanyanın hedefi, bütçesi, tarihleri ve hedeflemesi bu karara göre kurulmalı. “Tıklama aldık” ile “satış yaptık” farklı sonuçlardır. Dönüşüm hedefi istiyorsanız Pixel veya Conversions API gibi desteklenen ölçüm yollarını ve ilgili olayları önceden hazırlayın.
          </p>
          <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '12px', padding: '1.3rem' }}>
            <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, margin: 0 }}>
              <strong>Örnek plan:</strong> B2B yazılım şirketi için “demo talebi”, e-ticaret için “satın alma”, içerik yayını için “nitelikli ziyaret” farklı açılış sayfalarına ve ölçüm olaylarına ihtiyaç duyar. Bu örnekler performans vaadi veya sabit bütçe tavsiyesi değildir.
            </p>
          </div>
        </section>

        {/* 4. Adım */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            4. Kampanya, reklam grubu ve reklamı ayırın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            OpenAI'ın kampanya yapısında <strong>campaign</strong> hedef, bütçe, tarih ve hedeflemeyi; <strong>ad group</strong> benzer niyet alanındaki reklamları; <strong>ad</strong> ise kullanıcıya gösterilecek başlık, metin, görsel ve açılış sayfasını taşır. İlk testte her şeyi tek reklam grubuna sıkıştırmak yerine farklı kullanıcı karar anları için anlaşılır gruplar oluşturun.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Örneğin bir CRM markası “ilk CRM'ini seçen küçük ekip”, “mevcut sistemi değiştiren satış yöneticisi” ve “WhatsApp entegrasyonu arayan işletme” için ayrı bağlam hipotezleri kurabilir. Gerçek kampanya koşullarını panelde kontrol edin; sektör ve ülke onayı geçmeyen bir reklamı başka kelimelerle gizleyerek yayımlamaya çalışmayın.
          </p>
        </section>

        {/* 5. Adım */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            5. Context hints nasıl yazılır?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Context hints, reklamın hangi konuşma bağlamlarıyla ilişkili olabileceğini anlatan ek ipuçlarıdır. Klasik arama motorundaki tam eşleşen anahtar kelime listesi değildir ve belirli bir soruda gösterim garantisi vermez. İşletmenin sunduğu şey, kullanıcı ihtiyacı ve karar aşaması net olmalı. “Her sohbetten lead istiyorum” gibi geniş bir tanım yerine ürünle ilgili gerçek soruları seçin.
          </p>
          <div style={{ background: 'var(--chat-surface)', borderLeft: '4px solid var(--chat-green)', borderRadius: '12px', padding: '1.3rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--chat-green)', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>BAĞLAM İPUCU ÖRNEĞİ:</span>
            <p style={{ color: '#e5e7eb', fontStyle: 'italic', margin: 0, lineHeight: 1.7 }}>
              “Küçük bir B2B satış ekibi, WhatsApp'tan gelen talepleri ekip içinde dağıtabilen ve görüşmeleri CRM'de takip edebilen bir çözüm karşılaştırıyor.”
            </p>
          </div>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Reklam metni ve açılış sayfası da bu ihtiyacı gerçekten karşılamalı. Daha fazla örnek için <a href="/blog/chatgpt-ads-context-hints/" style={{ color: 'var(--chat-green)', fontWeight: 600 }}>context hints rehberine</a> bağlantı verin.
          </p>
        </section>

        {/* 6. Adım */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            6. Reklamı doğru açılış sayfasına bağlayın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Reklam başlığı, marka adı, açıklama, görsel ve gidilen sayfa aynı teklifi anlatmalı. Kullanıcı “WhatsApp CRM” bağlamından geldiyse yalnız genel ana sayfaya göndermek yerine entegrasyonu, kurulum koşullarını ve demo adımını açıklayan sayfaya yönlendirin. Formun mobilde çalışmasını, gizlilik metnini, sayfa hızını ve reklam incelemesinde erişilebilirliğini test edin.
          </p>
          <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '12px', padding: '1.3rem' }}>
            <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, margin: 0 }}>
              OpenAI reklam açılış sayfalarını denetlemek için <code>OAI-AdsBot</code> erişimini gerekli görüyor. Bu bot, organik ChatGPT arama görünürlüğüyle ilgili <code>OAI-SearchBot</code>tan farklıdır. Bot engeli varsa reklam incelemesi başarısız olabilir; teknik ekip <code>robots.txt</code> ve WAF kayıtlarını kontrol etmeli.
            </p>
          </div>
        </section>

        {/* 7. Adım */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            7. Ölçümü kurup yayına alın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Kampanya onaylandıktan sonra gösterim, tıklama, harcama, CTR, ortalama CPC ve CPM gibi panel metriklerini takip edin. Dönüşüm ölçümü yapılandırıldıysa dönüşüm olaylarını ayrıca inceleyin. Açılış sayfası ve CRM'de UTM ile nitelikli başvuruyu ayırın. Sadece tıklama ucuz diye başarılı kampanya ilan etmeyin; başvuru ve satış verisiyle ilişkilendirin.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            İlk günlerde “harcama sıfır” görünürse paniğe kapılmadan durum ve rapor gecikmesini kontrol edin; OpenAI bazı harcama verilerinin gecikmeli işlenebileceğini belirtiyor. Kampanyayı test sonuçlarına göre güncelleyin; başlangıç bütçesi, CPC veya lead sayısı için genel geçer garanti vermeyin.
          </p>
        </section>

        {/* SSS */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Sık sorulan sorular
          </h2>
          <div className="faq-list">
            <div style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Türkiye'deki şirketler hesap açabilir mi?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
                OpenAI'ın güncel ülke listesinde Türkiye self servis erişim için uygun görünüyor. Şirketin ve reklam kategorisinin ayrıca onaylanması gerekir.
              </p>
            </div>
            <div style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>ChatGPT reklamı cevapların içine mi giriyor?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
                OpenAI reklamları yanıttan ayrı ve sponsorlu etiketle gösterdiğini belirtiyor. Reklam, organik yanıtı değiştirmez.
              </p>
            </div>
            <div style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Minimum bütçe ve tıklama fiyatı nedir?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
                Tek bir evrensel CPC veya herkese uygulanacak zorunlu bütçe rakamı varsaymayın. Güncel panel koşullarını, hedefi ve teklif modelini kontrol edin. Kendi önerdiğiniz test bütçesini OpenAI'ın resmî asgari tutarı gibi sunmayın.
              </p>
            </div>
            <div style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ajansla çalışırsam hesap kimin olur?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
                İşletmenin tüzel kişiliği, ödeme ve erişim rolleri baştan tanımlanmalıdır. Ajans yönetimi ayrı hizmettir; hesap ve veri sahipliği açıkça yazılmalıdır.
              </p>
            </div>
          </div>
        </section>

        {/* İç Bağlantılar */}
        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '1rem' }}>İç Bağlantılar ve Rehberler</h3>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <a href="/chatgpt-reklamlari/" style={{ background: 'var(--chat-bg-secondary)', color: 'var(--chat-green)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              ChatGPT reklam yönetimi ➔
            </a>
            <a href="/chatgpt-reklam-fiyatlari/" style={{ background: 'var(--chat-bg-secondary)', color: 'var(--chat-green)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              ChatGPT reklam fiyatları ➔
            </a>
            <a href="/chatgptde-markam-nasil-cikar/" style={{ background: 'var(--chat-bg-secondary)', color: 'var(--chat-green)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              Organik cevaplarda marka görünürlüğü ➔
            </a>
            <a href="/blog/chatgpt-ads-context-hints/" style={{ background: 'var(--chat-bg-secondary)', color: 'var(--chat-green)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              Context hints ➔
            </a>
          </div>
        </section>

        {/* Resmî Kaynaklar */}
        <section style={{ marginBottom: '3.5rem', fontSize: '0.9rem', color: 'var(--chat-text-secondary)', borderTop: '1px solid var(--chat-border)', paddingTop: '1.5rem' }}>
          <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem' }}>Resmî Kaynaklar:</strong>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 1.8 }}>
            <li><a href="https://help.openai.com/en/articles/20001245-ads-manager-availability" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>OpenAI ülke erişim listesi</a></li>
            <li><a href="https://help.openai.com/en/articles/20001224-quickstart-launch-your-first-campaign" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>İlk kampanya rehberi</a></li>
            <li><a href="https://help.openai.com/en/articles/20001047-ads-in-chatgpt" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>ChatGPT reklamları SSS</a></li>
            <li><a href="https://help.openai.com/en/articles/20001243-advertiser-guidance-for-allowing-openai-web-crawlers" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>Reklam açılış sayfası tarayıcısı</a></li>
          </ul>
        </section>

        {/* CTA Box */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Şirketiniz ve Sektörünüz İçin ChatGPT Ads Uygunluk ve İlk Test Planı İsteyin
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '640px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            İşletmenizin Ads Manager uygunluğunu doğrulayalım, context hints kütüphanenizi hazırlayalım ve ilk kontrollü test kampanyasını birlikte hayata geçirelim.
          </p>
          <a className="button primary" href="/iletisim/">
            Uygunluk & İlk Test Planı İsteyin <Arrow />
          </a>
        </div>
      </div>
    </Detail>
  )
}

// ============================================================================
// 2. YENİ REHBER: OpenAI Ads Manager Nedir? ChatGPT Reklam Paneli Rehberi
// ============================================================================
export function OpenAIAdsManagerPage({ Detail, Arrow }: NewsAndGuidesProps) {
  return (
    <Detail
      eyebrow="OpenAI Reklamveren Paneli Rehberi"
      title="OpenAI Ads Manager: hesap, kampanya, ölçüm ve raporlama"
      summary="OpenAI Ads Manager Beta'nın ne işe yaradığını, Türkiye'den erişimi, kampanya yapısını, hedeflemeyi ve ölçüm seçeneklerini tek rehberde inceleyin."
      cta="Ads Manager Kurulum ve İlk Test Kampanyası Taslağı Alın"
    >
      <div style={{ maxWidth: '920px', margin: '0 auto' }}>
        {/* Arama Niyeti Ayrımı Uyarısı */}
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '3rem', borderLeft: '4px solid #3b82f6' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.6rem' }}>ℹ️ Bu Rehberin Amacı ve Arama Niyeti Ayrımı</h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.02rem', margin: 0 }}>
            Bu sayfa, OpenAI reklamveren konsolunun (Ads Manager Beta) <strong>ne sunduğunu, mimarisini ve panodaki özellikleri</strong> anlatır. Sıfırdan bir işletmenin adım adım reklam açma aşamalarını öğrenmek istiyorsanız <a href="/chatgpt-reklam-verme/" style={{ color: '#60a5fa', fontWeight: 600 }}>ChatGPT'de Reklam Nasıl Verilir?</a> rehberimize bakabilirsiniz.
          </p>
        </div>

        {/* 1. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            OpenAI Ads Manager Beta nedir?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            OpenAI Ads Manager (Beta), OpenAI'ın ChatGPT ekosisteminde yer alan sponsorlu reklam alanlarını yönetmek için geliştirdiği resmî self-servis reklam yönetim platformudur. Tıpkı Meta Ads Manager veya Google Ads paneli gibi, reklamverenlerin kampanyalarını, hedef kitle bağlamlarını, günlük bütçelerini ve dönüşüm piksellerini tek bir kurumsal merkezden yönetmelerini sağlar.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            En kritik yapısal özelliği, kullanıcı sohbet arayüzünden (chatgpt.com) tamamen izole edilmiş bağımsız bir iş portalı (<a href="https://ads.openai.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>ads.openai.com</a>) olarak çalışmasıdır. Resmî çerçeve için <a href="https://help.openai.com/en/articles/20001206-ads-manager-beta-overview" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>OpenAI Ads Manager Beta Overview</a> belgesini inceleyebilirsiniz.
          </p>
        </section>

        {/* 2. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Türkiye'den kimler self servis erişebilir?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            OpenAI'ın resmî kullanılabilirlik listesine (<a href="https://help.openai.com/en/articles/20001245-ads-manager-availability" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>Availability Documentation</a>) göre Türkiye, self-servis erişime açık ülkeler arasında yer almaktadır. Ancak bu erişim bireysel anonim kullanıcılara değil, resmî tüzel kişilere yöneliktir:
          </p>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.4rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.6rem' }}><strong style={{ color: '#ffffff' }}>Vergi Mükellefiyeti:</strong> Şirketinizin Türkiye'de kayıtlı geçerli bir Vergi Kimlik Numarası (VKN) ve vergi dairesi bulunmalıdır.</li>
            <li style={{ marginBottom: '0.6rem' }}><strong style={{ color: '#ffffff' }}>Faturalandırma Şartları:</strong> Hizmet yurt dışından faturalandırıldığı için Türkiye vergi mevzuatı uyarınca 2 No'lu KDV beyanına uygun kurumsal kredi kartı tanımlanmalıdır.</li>
            <li style={{ marginBottom: '0.6rem' }}><strong style={{ color: '#ffffff' }}>Politika Uygunluğu:</strong> OpenAI Reklam Politikaları'na aykırı (yasaklı sağlık iddiaları, lisanssız finans, kripto spekülasyonu vb.) sektörlerin hesapları onaylanmaz.</li>
          </ul>
        </section>

        {/* 3. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Panelde kampanya, reklam grubu ve reklamın görevi
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            OpenAI Ads Manager, endüstri standardı olan 3 seviyeli bir hiyerarşi üzerine inşa edilmiştir:
          </p>
          <div className="table-wrap" style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem' }}>Seviye</th>
                  <th style={{ padding: '0.9rem' }}>Yönetilen Alanlar</th>
                  <th style={{ padding: '0.9rem' }}>Temel Sorumluluk</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Kampanya (Campaign)</td>
                  <td style={{ padding: '0.9rem' }}>Hedef seçimi, toplam veya günlük bütçe, faturalandırma</td>
                  <td style={{ padding: '0.9rem' }}>İşletmenin ana ticari amacını (trafik, lead veya satış) belirler.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Reklam Grubu (Ad Set)</td>
                  <td style={{ padding: '0.9rem' }}>Context hints, coğrafi konum, negatif filtreler, teklif stratejisi</td>
                  <td style={{ padding: '0.9rem' }}>Reklamın hangi kullanıcı karar bağlamında ve hangi ülkede çıkacağını yönetir.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.9rem', fontWeight: 600, color: '#ffffff' }}>Reklam (Ad Creative)</td>
                  <td style={{ padding: '0.9rem' }}>Başlık, açıklama metni, CTA düğmesi, açılış sayfası URL'si</td>
                  <td style={{ padding: '0.9rem' }}>Kullanıcının gördüğü konuşma içi sponsorlu kart ve tıklama deneyimidir.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Kampanya hedefleri ve ücretlendirme seçenekleri
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            OpenAI Ads Manager güncel belgelerine göre iki temel ücretlendirme modeli sunulmaktadır:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <h4 style={{ color: 'var(--chat-green)', marginBottom: '0.5rem' }}>Bin Gösterim Başı Maliyet (CPM)</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Sponsorlu yerleşimin konuşma ekranında 1.000 kez görüntülenmesi karşılığında açık artırma teklifi verilir. Marka bilinirliği ve geniş erişim için kullanılır.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <h4 style={{ color: 'var(--chat-green)', marginBottom: '0.5rem' }}>Tıklama Başı Maliyet (CPC)</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Kullanıcı reklam bağlantısına tıklayıp açılış sayfasına yönlendirildiğinde ücretlendirilir. Nitelikli müşteri ve web sitesi trafiği için esastır.
              </p>
            </div>
          </div>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Maliyetler sabit bir tarifeyle belirlenmez; sektörün bağlam rekabetine göre açık artırma algoritması tarafından hesaplanır. Ayrıntılı bütçe seviyeleri için <a href="/chatgpt-reklam-fiyatlari/" style={{ color: 'var(--chat-green)' }}>ChatGPT Reklam Fiyatları</a> analizimizi inceleyebilirsiniz.
          </p>
        </section>

        {/* 5. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Bağlam ipuçları, konum ve diğer hedefleme alanları
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            OpenAI Ads Manager'ı geleneksel reklam panellerinden ayıran en büyük fark hedefleme metodolojisidir:
          </p>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.4rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.6rem' }}><strong style={{ color: '#ffffff' }}>Semantik Bağlam Hedeflemesi:</strong> Sabit anahtar kelime eşleşmesi yerine, kullanıcının niyetini betimleyen doğal dil cümleleri girilir.</li>
            <li style={{ marginBottom: '0.6rem' }}><strong style={{ color: '#ffffff' }}>Coğrafi Konum Kısıtlamaları:</strong> Ülke bazında gösterim hedefi veya negatif coğrafi hariç tutmalar belirlenebilir.</li>
            <li style={{ marginBottom: '0.6rem' }}><strong style={{ color: '#ffffff' }}>Dinamik Sürüm Uyarısı:</strong> Panel halen Beta aşamasında olduğundan demografik filtreler, cihaz seçimleri ve bağlam alanları OpenAI tarafından kademeli olarak güncellenmektedir.</li>
          </ul>
        </section>

        {/* 6. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            OpenAI Pixel, Conversions API ve raporlama
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            Panelin "Data Sources" (Veri Kaynakları) sekmesi üzerinden iki temel dönüşüm motoru yapılandırılır (<a href="https://help.openai.com/en/articles/20001409-conversion-measurement" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>OpenAI Conversion Measurement Guide</a>):
          </p>
          <div style={{ background: 'var(--chat-surface)', borderRadius: '14px', border: '1px solid var(--chat-border)', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <p style={{ color: '#ffffff', fontWeight: 600, marginBottom: '0.8rem' }}>İzlenebilen Standart Olaylar:</p>
            <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, margin: 0, paddingLeft: '1.2rem' }}>
              <li><code>PageView</code>: Açılış sayfasının yüklenmesi.</li>
              <li><code>Lead</code>: Form doldurma, teklif veya demo başvurusu.</li>
              <li><code>Purchase</code>: E-ticaret sipariş tamamlanması ve gelir verisi.</li>
              <li><code>CompleteRegistration</code>: Üye kaydı veya yazılım hesabı aktivasyonu.</li>
            </ul>
          </div>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Raporlama ekranında gösterim, tıklama, harcanan bütçe, ortalama CPC, dönüşüm adedi ve CPA (Edinme Başı Maliyet) metrikleri gerçek zamanlı izlenebilir. Ayrıntılar için <a href="/blog/chatgpt-reklam-olcumu/" style={{ color: 'var(--chat-green)' }}>Dönüşüm Ölçümü ve CAPI Rehberi</a> sayfamıza bakın.
          </p>
        </section>

        {/* 7. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Toplu yükleme ve ürün feed'i hangi işletmeler için anlamlı?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            OpenAI Ads Manager, geniş ürün envanterine sahip e-ticaret markaları için ürün kataloglarını (Product Feeds) bağlama imkanı sunar. Bu yapı:
          </p>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.4rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.6rem' }}><strong style={{ color: '#ffffff' }}>E-Ticaret ve Perakende:</strong> Yüzlerce ürün varyasyonunu tek tek reklam grubu açmadan otomatik eşleştirir.</li>
            <li style={{ marginBottom: '0.6rem' }}><strong style={{ color: '#ffffff' }}>B2B & Hizmet Sektörü:</strong> Ürün feed'i yerine niyet odaklı özel açılış sayfaları ve context hints kurgusu çok daha yüksek verim sağlar.</li>
          </ul>
        </section>

        {/* Özgün Katkı: Karar Tablosu */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Hangi işletme nereden başlamalı? Karar Tablosu
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            Her işletmenin iş modeli farklıdır. Aşağıdaki matrisi kullanarak işletmeniz için en doğru başlangıç stratejisini seçebilirsiniz:
          </p>
          <div className="table-wrap" style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.8rem' }}>İşletme Türü</th>
                  <th style={{ padding: '0.8rem' }}>Öncelikli Kampanya Amacı</th>
                  <th style={{ padding: '0.8rem' }}>Tavsiye Edilen Kurulum</th>
                  <th style={{ padding: '0.8rem' }}>Kritik Başarı Faktörü</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>B2B SaaS & Hizmet</td>
                  <td style={{ padding: '0.8rem' }}>Potansiyel Müşteri (Lead)</td>
                  <td style={{ padding: '0.8rem' }}>3-5 derin context hints + CAPI lead takibi</td>
                  <td style={{ padding: '0.8rem' }}>İlk ekranda form ve şeffaf değer vaadi.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>E-Ticaret & D2C</td>
                  <td style={{ padding: '0.8rem' }}>Dönüşüm / Satın Alma</td>
                  <td style={{ padding: '0.8rem' }}>Ürün feed'i + dinamik kartlar + satın alma CAPI</td>
                  <td style={{ padding: '0.8rem' }}>Stok doğruluğu ve mobil ödeme hızı.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>İhracat / Global Marka</td>
                  <td style={{ padding: '0.8rem' }}>Uluslararası Lead / Satış</td>
                  <td style={{ padding: '0.8rem' }}>Çok dilli reklam grupları + hedef ülke filtreleri</td>
                  <td style={{ padding: '0.8rem' }}>Yerelleştirilmiş açılış sayfası dili.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Organik Görünürlük Arayan</td>
                  <td style={{ padding: '0.8rem' }}>Kaynak Gösterilme (Tavsiye)</td>
                  <td style={{ padding: '0.8rem' }}>Reklam değil; doğrudan <a href="/geo-yapay-zeka-gorunurlugu/" style={{ color: 'var(--chat-green)' }}>GEO Hizmeti</a></td>
                  <td style={{ padding: '0.8rem' }}>OAI-SearchBot erişimi ve bağımsız alıntılar.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 8. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Beta sürümün sınırları ve sık sorulan sorular
          </h2>
          <div className="faq-list">
            <div style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ads Manager paneli Türkçe arayüz destekliyor mu?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
                Beta sürüm arayüzü ağırlıklı olarak İngilizce olmakla birlikte, oluşturulan reklam metinleri, başlıklar ve context hints ifadeleri tamamen Türkçe olarak hazırlanıp optimize edilebilir.
              </p>
            </div>
            <div style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ajansıma veya ekip arkadaşlarıma nasıl yetki verebilirim?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
                Panelin "Business Settings & Members" sekmesinden e-posta daveti göndererek ajans uzmanlarınıza 'Admin' veya 'Campaign Manager' yetkisi atayabilirsiniz. Hesap sahipliği her zaman sizin tüzel kişiliğinizde kalır.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Box */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Ads Manager Kurulum ve İlk Test Kampanyası Taslağı Alın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '620px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Şirketiniz adına OpenAI Ads Manager kurulumunu eksiksiz yapalım, CAPI dönüşüm hattını bağlayalım ve sektörünüze özel bağlam haritasını çıkaralım.
          </p>
          <a className="button primary" href="/iletisim/">
            Panel Kurulum Desteği İsteyin <Arrow />
          </a>
        </div>
      </div>
    </Detail>
  )
}

// ============================================================================
// 3. YENİ HABER: ChatGPT Ads 60'tan Fazla Ülkeye Ulaştı
// ============================================================================
export function ChatGptAds60UlkePage({ Detail, Arrow }: NewsAndGuidesProps) {
  return (
    <Detail
      eyebrow="Resmî Duyuru & Sektörel Haber"
      title="ChatGPT Ads 60'tan fazla ülkede: reklamverenler için yeni tablo"
      summary="OpenAI, ChatGPT Ads platformunun 60'tan fazla ülkede kullanılabilir olduğunu duyurdu. Güneydoğu Asya'daki 7 yeni pazar, Türkiye merkezli reklamverenlerin durumu ve ihracatçı markalar için stratejik adımlar."
      cta="Global ChatGPT Reklam Planı İsteyin"
    >
      <div style={{ maxWidth: '920px', margin: '0 auto' }}>
        {/* Haber Meta Kutusu */}
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '14px', padding: '1.4rem 1.8rem', marginBottom: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--chat-text-secondary)', textTransform: 'uppercase', display: 'block' }}>YAYIN TARİHİ</span>
            <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>29 Eylül 2026</strong>
          </div>
          <div style={{ borderLeft: '1px solid var(--chat-border)', paddingLeft: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--chat-text-secondary)', textTransform: 'uppercase', display: 'block' }}>RESMÎ DUYURU TARİHİ</span>
            <strong style={{ color: 'var(--chat-green)', fontSize: '0.95rem' }}>23 Eylül 2026</strong>
          </div>
          <div style={{ borderLeft: '1px solid var(--chat-border)', paddingLeft: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--chat-text-secondary)', textTransform: 'uppercase', display: 'block' }}>YAZAR</span>
            <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>Overseas Marketing AI Masası</strong>
          </div>
          <div style={{ borderLeft: '1px solid var(--chat-border)', paddingLeft: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--chat-text-secondary)', textTransform: 'uppercase', display: 'block' }}>KAYNAK</span>
            <a href="https://openai.com/index/chatgpt-ads-expands-southeast-asia-taiwan/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)', fontSize: '0.95rem', fontWeight: 600 }}>OpenAI Duyurusu ↗</a>
          </div>
        </div>

        {/* Doğrudan Haber Girişi */}
        <div style={{ fontSize: '1.1rem', lineHeight: 1.85, color: '#e5e7eb', marginBottom: '3rem' }}>
          <p>
            OpenAI, <strong>23 Eylül 2026</strong> tarihinde yayımladığı genişleme duyurusuyla ChatGPT Ads altyapısının Güneydoğu Asya’daki yedi stratejik pazara açıldığını ve platformun dünya genelinde <strong>60'tan fazla ülkede</strong> kullanılabilir hale geldiğini kamuoyuna açıkladı. 
          </p>
          <p style={{ color: 'var(--chat-text-secondary)' }}>
            OpenAI'ın güncel yardım belgelerindeki kullanılabilirlik listesinde (<a href="https://help.openai.com/en/articles/20001245-ads-manager-availability" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>Ads Manager Availability</a>) Türkiye, self-servis erişim listesinde "Available" (Kullanılabilir) olarak yer almayı sürdürüyor. Bu gelişme, hem iç pazarda yapay zekâ kullanıcılarına ulaşmak isteyen şirketler hem de yurt dışına e-ihracat veya B2B hizmet sunan Türk markaları için önemli fırsatlar barındırıyor.
          </p>
        </div>

        {/* 1. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Hangi yedi pazar eklendi?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            OpenAI'ın 23 Eylül duyurusuyla ChatGPT Ads ekosistemine dahil olan yedi yeni pazar şunlardır:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {['Endonezya', 'Malezya', 'Filipinler', 'Singapur', 'Tayland', 'Vietnam', 'Tayvan'].map((c) => (
              <div key={c} style={{ background: 'var(--chat-surface)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--chat-border)', textAlign: 'center', color: '#ffffff', fontWeight: 600 }}>
                🌍 {c}
              </div>
            ))}
          </div>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Bu pazarlar özellikle genç nüfus, yüksek yapay zekâ benimsenme hızı ve hızla büyüyen e-ticaret hacimleriyle öne çıkıyor.
          </p>
        </section>

        {/* 2. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            60+ ülke reklamveren için ne anlama geliyor?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            ChatGPT Ads ilk döneminde yalnızca sınırlı sayıda büyük kurumsal reklamverenle test edilirken, 60+ ülkeye ulaşması platformun olgunlaştığını ve ölçeklenebilir bir küresel reklam ağı haline geldiğini gösteriyor. Artık markalar, tek bir <a href="/openai-ads-manager/" style={{ color: 'var(--chat-green)', fontWeight: 600 }}>OpenAI Ads Manager</a> paneli üzerinden farklı kıtalardaki kullanıcıların karar anlarına hitap edebiliyor.
          </p>
        </section>

        {/* 3. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Türkiye'deki şirketler reklam hesabı açabilir mi?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            Evet. Türkiye merkezli şirketler <a href="https://ads.openai.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>ads.openai.com</a> üzerinden tüzel kişi bilgilerini, vergi numaralarını ve kurumsal ödeme yöntemlerini girerek doğrudan reklam hesabı oluşturabilir. Kurulum aşamalarını görmek için <a href="/chatgpt-reklam-verme/" style={{ color: 'var(--chat-green)', fontWeight: 600 }}>ChatGPT Reklam Verme Rehberimizi</a> inceleyin.
          </p>
        </section>

        {/* 4. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Türkiye'deki kullanıcıların reklam görmesi aynı şey mi?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            Bu noktada editoryal bir dikkat şarttır: <strong>Bir ülkeden reklam hesabı açabilmek ile o ülkedeki kullanıcılara reklam gösterilmesi aynı şey değildir.</strong>
          </p>
          <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '14px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <p style={{ color: '#ffffff', fontWeight: 600, marginBottom: '0.8rem' }}>Üçlü Kontrol Noktası Ayrımı:</p>
            <div className="table-wrap" style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                    <th style={{ padding: '0.7rem' }}>Kontrol Noktası</th>
                    <th style={{ padding: '0.7rem' }}>Durum & Anlamı</th>
                    <th style={{ padding: '0.7rem' }}>Kimleri Kapsar?</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                  <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                    <td style={{ padding: '0.7rem', fontWeight: 600, color: '#ffffff' }}>1. Reklamveren Hesabı</td>
                    <td style={{ padding: '0.7rem' }}>Türkiye tüzel kişileri self-servis hesap açabilir (Available).</td>
                    <td style={{ padding: '0.7rem' }}>Şirketler, ajanslar ve pazarlama ekipleri.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                    <td style={{ padding: '0.7rem', fontWeight: 600, color: '#ffffff' }}>2. Hedef Ülkede Gösterim</td>
                    <td style={{ padding: '0.7rem' }}>Reklamın hedef kitlesinin bulunduğu ülkenin envantere açık olması gerekir.</td>
                    <td style={{ padding: '0.7rem' }}>Kampanya coğrafi hedef ayarı.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                    <td style={{ padding: '0.7rem', fontWeight: 600, color: '#ffffff' }}>3. Kullanıcı Abonelik Türü</td>
                    <td style={{ padding: '0.7rem' }}>Yalnızca reklam destekli ücretsiz/uygun katmanlar; Plus/Team'e reklam çıkmaz.</td>
                    <td style={{ padding: '0.7rem' }}>Son kullanıcı gizlilik koruması.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Dolayısıyla "60+ ülkede herkes reklam görüyor" veya "her ülkede tüm formatlar açık" gibi genellemeler gerçeği yansıtmaz.
          </p>
        </section>

        {/* 5. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            İhracat yapan markalar için ilk test nasıl planlanır?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            Türkiye merkezli ihracatçılar için bu genişleme büyük bir stratejik avantajdır. İstanbul'daki şirketinizden açacağınız tek bir OpenAI reklam hesabıyla Güneydoğu Asya, Avrupa veya Kuzey Amerika pazarlarındaki potansiyel alıcıları hedefleyebilirsiniz:
          </p>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.4rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.6rem' }}><strong style={{ color: '#ffffff' }}>Yerelleştirilmiş Context Hints:</strong> Hedef ülkenin dilinde ve ticari arama alışkanlıklarına uygun bağlam ipuçları kurgulayın.</li>
            <li style={{ marginBottom: '0.6rem' }}><strong style={{ color: '#ffffff' }}>Çok Para Birimli Fiyatlandırma:</strong> Açılış sayfasında yerel para birimi ve net teslimat/ithalat koşulları sunun.</li>
            <li style={{ marginBottom: '0.6rem' }}><strong style={{ color: '#ffffff' }}>Bütçe Dağılımı:</strong> Tahmini maliyetleri hesaplamak için <a href="/chatgpt-reklam-fiyatlari/" style={{ color: 'var(--chat-green)' }}>Fiyatlandırma Rehberimizi</a> inceleyin.</li>
          </ul>
        </section>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Global Pazarlar İçin ChatGPT Ads Kampanyası Başlatın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '620px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            İhracat veya yurt içi pazarlarınız için OpenAI Ads Manager uygunluğunu doğrulayalım ve ilk çok dilli bağlam matrisinizi oluşturalım.
          </p>
          <a className="button primary" href="/iletisim/">
            Uluslararası Reklam Planı İsteyin <Arrow />
          </a>
        </div>
      </div>
    </Detail>
  )
}

// ============================================================================
// 4. GÜNCEL FİYAT REHBERİ: ChatGPT Reklam Fiyatları 2026
// ============================================================================
export function ChatGPTPriceUpdatedPage({ Detail, Arrow }: NewsAndGuidesProps) {
  return (
    <Detail
      eyebrow="2026 Şeffaf Maliyet Rehberi"
      title="ChatGPT Reklam Fiyatları 2026: TBM, Bütçe ve Yönetim Maliyeti"
      summary="ChatGPT reklam maliyetleri nasıl hesaplanır? Resmî OpenAI Ads Manager açık artırma modelleri (CPC/CPM), ajans önerili pilot test bütçeleri ve dönüşüm simülasyonu."
      cta="Sektörünüze Özel Bütçe Senaryosu İsteyin"
    >
      <div style={{ maxWidth: '920px', margin: '0 auto' }}>
        {/* Kritik Editoryal Edit / Şeffaflık Notu */}
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '3rem', borderLeft: '4px solid #f59e0b' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.6rem' }}>💡 Kritik Şeffaflık Notu: Resmî Ücretlendirme ve Pilot Senaryolar</h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.02rem', margin: 0 }}>
            Bu sayfada veya sektörel analizlerde göreceğiniz $1.500–$3.000/ay gibi rakamlar, <strong>OpenAI'ın zorunlu kıldığı bir taban harcama barajı değildir</strong>. Bunlar, yapay zekânın karar anlarını ve semantik bağlamlarını sağlıklı öğrenebilmesi adına <strong>ajansımız tarafından tavsiye edilen kontrollü pilot test senaryolarıdır</strong>. Platform, açık artırma usulüyle çalışır ve katı bir minimum bütçe zorunluluğu yoktur.
          </p>
        </div>

        {/* 1. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Reklam ücreti nasıl oluşur?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            ChatGPT reklam maliyetleri basılı bir fiyat listesine dayanmaz. Tıpkı modern programmatic veya arama ağı reklamlarında olduğu gibi <strong>gerçek zamanlı açık artırma (real-time auction)</strong> ve semantik bağlam rekabeti esasına göre şekillenir.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Bir kullanıcının konuşmasında reklamınızın gösterilmesi; verdiğiniz maksimum teklif (Bid), bağlam ipucunuzun (Context Hints) kullanıcının niyetine uygunluk skoru ve reklam metninizin beklenen tıklama oranının (eCTR) birleşik fonksiyonu ile belirlenir.
          </p>
        </section>

        {/* 2. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            CPC ve CPM farkı
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            OpenAI Ads Manager faturalandırma altyapısında (<a href="https://help.openai.com/en/articles/20001216-billing-payment" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>Billing & Payment Documentation</a>) iki temel model desteklenmektedir:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'var(--chat-surface)', padding: '1.6rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.25rem', marginBottom: '0.6rem' }}>CPC (Tıklama Başı Maliyet)</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
                Reklam bağlantısına fiilen tıklanıp kullanıcı açılış sayfasına aktarıldığında ücret yansır. Satın alma niyeti yüksek karar anlarını yakalamak ve doğrudan müşteri adayı toplamak için önerilir.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.6rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.25rem', marginBottom: '0.6rem' }}>CPM (Bin Gösterim Başı Maliyet)</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
                Reklam kartı ilgili konuşma penceresinde 1.000 kez görüntülendiğinde ücretlendirilir. Marka bilinirliği inşa etmek ve yeni ürün lansmanlarında geniş kitleye ulaşmak için kullanılır.
              </p>
            </div>
          </div>
        </section>

        {/* 3. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Resmî minimum bütçe var mı?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            <strong>Resmî Durum:</strong> OpenAI Yardım Merkezi'nin kampanya oluşturma kılavuzuna (<a href="https://help.openai.com/en/articles/20001210-create-campaigns-for-chatgpt-ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>Campaign Creation Rules</a>) göre platformda zorunlu, katı bir minimum harcama alt sınırı bulunmamaktadır. Günlük birkaç dolar gibi sembolik bütçelerle de teknik olarak kampanya açılabilir.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Ancak günlük $5 - $10 gibi mikro bütçelerle yola çıkıldığında, modelin açık artırmada yeterli gösterim kazanması ve semantik bağlamları optimize edebilmesi aylar sürebilir. Bu nedenle istatistiksel geçerlilik için kontrollü bütçeler gereklidir.
          </p>
        </section>

        {/* 4. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Test bütçesi nasıl hesaplanır?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            Sağlıklı bir test bütçesi tahmini matematiksel bir formüle dayanmalıdır:
          </p>
          <div style={{ background: 'var(--chat-surface)', borderRadius: '12px', border: '1px solid var(--chat-border)', padding: '1.4rem', marginBottom: '1.5rem', fontFamily: 'monospace', color: '#10a37f' }}>
            Test Bütçesi = (Hedeflenen Asgari Dönüşüm Sinyali / Beklenen Sayfa Dönüşüm Oranı) × Tahmini TBM (CPC)
          </div>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Örneğin: Yapay zekâ algoritmasının öğrenmesi için ilk 30 günde en az 40 nitelikli lead (form) toplamak istiyorsanız ve açılış sayfanızın form dönüşüm oranı %8, ortalama TBM ise $1.80 ise:
            <br />
            <code>(40 / 0.08) × $1.80 = 500 tıklama × $1.80 = $900</code> medya bütçesi gerekir. Sektör rekabeti arttıkça bu tutar pilot senaryolara ($1.500–$3.000) göre ölçeklenir.
          </p>
        </section>

        {/* 5. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Ajans ücreti ile medya bütçesi
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            Şeffaflık ilkemiz gereği iki maliyet kalemini kesin çizgilerle ayırıyoruz:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '0.5rem' }}>1. Medya Bütçesi (Doğrudan OpenAI'a)</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Tamamen kendi kurumsal kredi kartınızdan OpenAI'a ödenir. Ajansımız medya harcamanızın arasına girmez, bütçeden gizli komisyon kesmez.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '0.5rem' }}>2. Ajans Yönetim Ücreti</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Hesap kurulumu, semantik context hints kütüphanesi mimarisi, açılış sayfası CRO optimizasyonu, CAPI entegrasyonu ve haftalık analitik danışmanlık bedelidir.
              </p>
            </div>
          </div>
        </section>

        {/* 6. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Örnek hesap: gösterim → tıklama → lead → satış
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            Aşağıdaki tablo, kurumsal bir B2B SaaS veya hizmet şirketinin 30 günlük pilot ChatGPT kampanyasındaki gerçekçi dönüşüm simülasyonunu göstermektedir:
          </p>
          <div className="table-wrap" style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.8rem' }}>Huni Aşaması</th>
                  <th style={{ padding: '0.8rem' }}>Hacim / Metrik</th>
                  <th style={{ padding: '0.8rem' }}>Dönüşüm Oranı</th>
                  <th style={{ padding: '0.8rem' }}>Birim Maliyet</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>1. Gösterim (Impressions)</td>
                  <td style={{ padding: '0.8rem' }}>25.000 Gösterim</td>
                  <td style={{ padding: '0.8rem' }}>—</td>
                  <td style={{ padding: '0.8rem' }}>CPM: ~$12.00</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>2. Tıklama (Clicks)</td>
                  <td style={{ padding: '0.8rem' }}>500 Ziyaretçi</td>
                  <td style={{ padding: '0.8rem' }}>%2.00 CTR</td>
                  <td style={{ padding: '0.8rem' }}>TBM: ~$1.80</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>3. Nitelikli Talep (Lead)</td>
                  <td style={{ padding: '0.8rem' }}>40 Form Başvurusu</td>
                  <td style={{ padding: '0.8rem' }}>%8.00 Sayfa CR</td>
                  <td style={{ padding: '0.8rem' }}>CPL: $22.50</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>4. Satış / Müşteri</td>
                  <td style={{ padding: '0.8rem' }}>6 Yeni Müşteri</td>
                  <td style={{ padding: '0.8rem' }}>%15 Satış Kapanış</td>
                  <td style={{ padding: '0.8rem' }}>CAC: $150.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
            *Yukarıdaki simülasyon B2B yazılım sektörü ortalamalarına dayalıdır. Gerçek rakamlar sektör rekabetine, açılış sayfası kalitesine ve teklifin gücüne göre farklılık gösterir.
          </p>
        </section>

        {/* 7. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Güncel kampanya ve kredi koşulları
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            OpenAI zaman zaman yeni reklamverenleri teşvik etmek amacıyla başlangıç reklam kredileri (promotional ad credits) sunabilmektedir. Ancak bu kampanyalar bölgeye, para birimine ve hesap türüne göre değişiklik gösterir:
          </p>
          <div style={{ background: 'rgba(59, 130, 246, 0.08)', border: '1px solid rgba(59, 130, 246, 0.25)', borderRadius: '12px', padding: '1.4rem', marginBottom: '1.5rem' }}>
            <strong style={{ color: '#60a5fa', display: 'block', marginBottom: '0.5rem' }}>⚠️ Doğrulama Şartları:</strong>
            <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
              İnternetteki spekülatif rakamlara dayanarak kesin bir promosyon tutarı vaat edilemez. Herhangi bir teşvik teklifinin geçerli olabilmesi için; hesabınızın yeni olması, şirket tüzel kişiliğinin onaylanması, harcama son tarihi ve kredinin kullanım sürelerinin <a href="https://ads.openai.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>ads.openai.com</a> başlangıç ekranında yazılı olarak teyit edilmesi gerekir.
            </p>
          </div>
        </section>

        {/* CTA Box */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Sektörünüze Özel Bütçe Senaryosu İsteyin
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '620px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Web sitenizi, ürün marjınızı ve hedef pazarınızı inceleyelim; tahmini TBM aralıkları ve kontrollü bir test bütçesiyle kampanya planınızı 1 iş gününde hazırlayalım.
          </p>
          <a className="button primary" href="/iletisim/">
            Bütçe ve Teklif İsteyin <Arrow />
          </a>
        </div>
      </div>
    </Detail>
  )
}

// ============================================================================
// 5. YENİ HABER/ANALİZ: OpenAI Sponsored Agents'ı Duyurdu
// ============================================================================
export function SponsoredAgentsPage({ Detail, Arrow }: NewsAndGuidesProps) {
  return (
    <Detail
      eyebrow="Yeni Reklam Formatı Analizi"
      title="OpenAI Sponsored Agents'ı duyurdu: reklamdan markayla sohbete"
      summary="OpenAI, 16 Eylül duyurusuyla ChatGPT Ads ekosistemine yeni bir soluk getiren Sponsored Agents formatını tanıttı. Reklam tıklandığında web sitesi yerine markanın özel AI asistanıyla sohbet başlatan bu yeniliğin kapsamı ve sınırları."
      cta="Geleceğin AI Reklamcılığı İçin Hazırlanın"
    >
      <div style={{ maxWidth: '920px', margin: '0 auto' }}>
        {/* Haber Meta Kutusu */}
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '14px', padding: '1.4rem 1.8rem', marginBottom: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--chat-text-secondary)', textTransform: 'uppercase', display: 'block' }}>YAYIN TARİHİ</span>
            <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>29 Eylül 2026</strong>
          </div>
          <div style={{ borderLeft: '1px solid var(--chat-border)', paddingLeft: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--chat-text-secondary)', textTransform: 'uppercase', display: 'block' }}>DUYURU TARİHİ</span>
            <strong style={{ color: 'var(--chat-green)', fontSize: '0.95rem' }}>16 Eylül 2026</strong>
          </div>
          <div style={{ borderLeft: '1px solid var(--chat-border)', paddingLeft: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--chat-text-secondary)', textTransform: 'uppercase', display: 'block' }}>YAZAR</span>
            <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>Overseas Marketing AI Masası</strong>
          </div>
          <div style={{ borderLeft: '1px solid var(--chat-border)', paddingLeft: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--chat-text-secondary)', textTransform: 'uppercase', display: 'block' }}>KAYNAK</span>
            <a href="https://openai.com/index/reimagining-advertising-with-ai/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)', fontSize: '0.95rem', fontWeight: 600 }}>OpenAI Duyurusu ↗</a>
          </div>
        </div>

        {/* Giriş */}
        <div style={{ fontSize: '1.1rem', lineHeight: 1.85, color: '#e5e7eb', marginBottom: '3rem' }}>
          <p>
            OpenAI, <strong>16 Eylül 2026</strong> tarihinde yayımladığı analizinde (<a href="https://openai.com/index/reimagining-advertising-with-ai/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>Reimagining Advertising with AI</a>) dijital pazarlamada radikal bir paradigma değişimini simgeleyen <strong>Sponsored Agents (Sponsorlu Marka Asistanları)</strong> formatını duyurdu.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)' }}>
            Geleneksel web reklamcılığında kullanıcı bir sponsorlu bağlantıya tıkladığında harici bir açılış sayfasına yönlendirilirken; Sponsored Agents modeliyle kullanıcı doğrudan konuşma penceresi içinde markanın özel eğitilmiş AI danışmanıyla sohbete geçiş yapabiliyor.
          </p>
        </div>

        {/* 1. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            16 Eylül'de ne açıklandı?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            OpenAI, klasik statik banner veya tek satırlık metin reklamların yapay zekâ çağındaki zengin konuşma deneyimine yetersiz kaldığını vurguladı. Açıklanan Sponsored Agents vizyonu, reklamverenlerin kendi bilgi tabanları (knowledge base), ürün katalogları ve CRM servisleriyle entegre çalışan akıllı asistanları sponsorlu bir kanal olarak konuşmalara dahil etmesini hedefliyor.
          </p>
        </section>

        {/* 2. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Kullanıcı deneyimi nasıl işliyor?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            Kullanıcı bir satın alma veya problem çözümü konusunda ChatGPT ile konuşurken, model kullanıcının ihtiyacına cevap verebilecek sponsorlu bir marka asistanı önerir:
          </p>
          <div style={{ background: 'var(--chat-surface)', borderRadius: '14px', border: '1px solid var(--chat-border)', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ background: 'var(--chat-green)', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700 }}>ADIM 1</span>
              <p style={{ color: 'var(--chat-text-secondary)', margin: 0, fontSize: '0.95rem' }}>
                Kullanıcı: <em>"Yeni ofisimiz için ergonomik çalışma koltuğu arıyorum, bel ağrısı için hangi modeller uygun?"</em>
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ background: '#3b82f6', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700 }}>ADIM 2</span>
              <p style={{ color: 'var(--chat-text-secondary)', margin: 0, fontSize: '0.95rem' }}>
                ChatGPT: Organik cevabın altında sponsorlu kart: <strong>[Marka] Ergonomi Asistanı ile Sohbet Edin</strong>.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ background: '#8b5cf6', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700 }}>ADIM 3</span>
              <p style={{ color: 'var(--chat-text-secondary)', margin: 0, fontSize: '0.95rem' }}>
                Kullanıcı butona bastığında harici siteye gitmeden, markanın asistanıyla anında garanti koşulları, kumaş türü ve kurumsal indirimleri konuşur.
              </p>
            </div>
          </div>
        </section>

        {/* 3. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Organik ChatGPT yanıtından farkı
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            Sponsored Agents kesinlikle tarafsız ChatGPT modelinin organik cevabı yerine geçmez. Kullanıcının konuştuğu pencerede net bir "Sponsorlu / Sponsored Agent" rozeti bulunur. Kullanıcı dilediği an bağımsız ChatGPT konuşmasına geri dönebilir. Bu ayrım, OpenAI'ın kullanıcı güvenini koruma politikasının temel taşıdır.
          </p>
        </section>

        {/* 4. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Kimler bugün kullanabiliyor? (Önemli Sınır)
          </h2>
          <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '14px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h4 style={{ color: '#f87171', margin: '0 0 0.5rem 0', fontSize: '1.15rem' }}>⚠️ Önemli Sınır: Sınırlı Alpha Testi</h4>
            <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
              Sponsored Agents şu anda <strong>genel kullanıma, Türkiye'ye veya tüm reklamverenlere açık değildir</strong>. OpenAI Resmî Yardım Merkezi dokümanına (<a href="https://help.openai.com/en/articles/20001524-sponsored-agents-in-chatgpt-ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>Sponsored Agents Availability</a>) göre program, ABD merkezli seçilmiş birkaç kurumsal reklamverenle <strong>kapalı alpha</strong> olarak yürütülmektedir. Açık bir başvuru formu bulunmamaktadır.
            </p>
          </div>
        </section>

        {/* 5. H2 */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            E-ticaret ve hizmet şirketleri için olası kullanım alanları
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            <em>(Editoryal Değerlendirme & Gelecek Öngörüsü)</em>
            <br />
            Sponsored Agents modeli genel kullanıma açıldığında özellikle yüksek karar derinliği gerektiren sektörlerde devrim yaratma potansiyeline sahiptir:
          </p>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.4rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.8rem' }}><strong style={{ color: '#ffffff' }}>B2B & Danışmanlık:</strong> Müşterinin ihtiyaç parametrelerini anında alıp bütçeye göre ön fizibilite ve demo randevusu oluşturan kurumsal ajanlar.</li>
            <li style={{ marginBottom: '0.8rem' }}><strong style={{ color: '#ffffff' }}>E-Ticaret & Özel Sipariş:</strong> Kullanıcının odasının ölçüsüne veya tarzına göre canlı envanterden doğrudan kombin ve sepet oluşturan satış danışmanları.</li>
            <li style={{ marginBottom: '0.8rem' }}><strong style={{ color: '#ffffff' }}>Finans & Sigorta:</strong> Poliçe kapsamlarını karşılaştırıp kişiselleştirilmiş prim teklifini saniyeler içinde hesaplayan yetkili finans asistanları.</li>
          </ul>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Bugün mevcut self-servis panel imkanlarını kullanmak için <a href="/chatgpt-reklam-verme/" style={{ color: 'var(--chat-green)', fontWeight: 600 }}>ChatGPT Reklam Verme Rehberimizi</a> ve <a href="/openai-ads-manager/" style={{ color: 'var(--chat-green)', fontWeight: 600 }}>OpenAI Ads Manager İncelememizi</a> takip edebilirsiniz.
          </p>
        </section>

        {/* CTA Box */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Yapay Zekâ Reklamcılığındaki Gelişmeleri Kaçırmayın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '620px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            OpenAI Ads Manager, Sponsored Agents ve GEO dünyasındaki en son güncellemeleri işletmeniz için analiz ediyor ve şeffaf çözümler sunuyoruz.
          </p>
          <a className="button primary" href="/iletisim/">
            Ekibimizle İletişime Geçin <Arrow />
          </a>
        </div>
      </div>
    </Detail>
  )
}

// ============================================================================
// 6. HABERLER İNDEKS SAYFASI: /haberler/
// ============================================================================
export function HaberlerIndexPage({ Detail, Arrow }: NewsAndGuidesProps) {
  const newsList = [
    {
      title: "ChatGPT Ads 60'tan Fazla Ülkeye Ulaştı: Türkiye İçin Ne Değişiyor?",
      href: "/haberler/chatgpt-ads-60-ulkeye-ulasti/",
      date: "29 Eylül 2026",
      officialDate: "23 Eylül 2026",
      tag: "KÜRESEL GENİŞLEME",
      desc: "OpenAI, Güneydoğu Asya'daki 7 yeni pazara açıldığını ve ChatGPT Ads'in 60'tan fazla ülkede kullanılabilir olduğunu duyurdu. Türkiye merkezli şirketlerin erişim durumu ve ihracatçılar için etkileri."
    },
    {
      title: "OpenAI Sponsored Agents'ı Duyurdu: Reklamdan Markayla Sohbete",
      href: "/haberler/sponsored-agents-duyuruldu/",
      date: "29 Eylül 2026",
      officialDate: "16 Eylül 2026",
      tag: "YENİ REKLAM FORMATI",
      desc: "OpenAI, kullanıcıların reklama tıkladığında web sitesi yerine doğrudan markanın özel yapay zekâ asistanıyla sohbet başlattığı yeni Sponsored Agents formatını duyurdu. Kapsam ve alpha test detayları."
    }
  ]

  return (
    <Detail
      eyebrow="Haberler & Analiz Masası"
      title="Yapay Zekâ Reklamcılığı Haberleri & Resmî Duyurular"
      summary="OpenAI Ads Manager, ChatGPT reklam ekosistemi, küresel pazar erişimleri ve üretken yapay zekâ pazarlamasına dair en güncel haberler, analizler ve resmî duyurular."
      cta="Haber Bültenine Katılın"
    >
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        {/* Editoryal Standart Kutusu */}
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '3rem', borderLeft: '4px solid var(--chat-green)' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.6rem' }}>📰 Editoryal Haber İlkelerimiz ve Kaynak Doğrulama</h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '0.98rem', marginBottom: '1rem' }}>
            Yapay Zekâda Reklam Haber Masası, üretken yapay zekâ ve arama ekosistemindeki gelişmeleri bağımsız bir gözle izler. Haberlerimizde doğrulanmamış söylentilere, abartılı pazarlama iddialarına veya spekülasyonlara kesinlikle yer vermeyiz.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '0.98rem', margin: 0 }}>
            Her haber analizimizde dört temel sorunun cevabını belgeleriyle ortaya koyarız: <strong>(1) Ne oldu?</strong> OpenAI veya ilgili platformun resmî açıklaması nedir? <strong>(2) Kimi etkiler?</strong> Hangi sektörler ve reklamverenler doğrudan etkilenir? <strong>(3) Türkiye'ye etkisi nedir?</strong> Yerel şirketler için hesap açılışı, fatura ve hedefleme durumu nedir? <strong>(4) Resmî kaynak neresidir?</strong> Doğrudan OpenAI resmî belgelerine veya yardım sayfalarına verilen bağlantılarla teyit edilir.
          </p>
        </div>

        {/* Haber Listesi */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.8rem', marginBottom: '3.5rem' }}>
          {newsList.map((item) => (
            <article key={item.href} style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ background: 'rgba(16, 163, 127, 0.15)', color: '#10a37f', padding: '0.3rem 0.7rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700 }}>
                    {item.tag}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--chat-text-secondary)' }}>
                    Duyuru: {item.officialDate}
                  </span>
                </div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '0.8rem' }}>
                  <a href={item.href} style={{ color: '#ffffff', textDecoration: 'none' }}>{item.title}</a>
                </h2>
                <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {item.desc}
                </p>
              </div>
              <div>
                <a href={item.href} style={{ color: 'var(--chat-green)', fontWeight: 600, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  Haberi Oku <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Yapay Zekâ Reklam Masası Neleri Takip Ediyor? */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Yapay Zekâ Reklam Masası Hangi Gelişmeleri Takip Eder?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.02rem', marginBottom: '1.5rem' }}>
            Dijital reklamcılık, arama motoru sonuç sayfalarından (SERP) doğrudan yapay zekâ modellerinin konuşma pencerelerine doğru evrilmektedir. Ekibimiz bu geçiş sürecinde reklamverenleri ilgilendiren beş kritik alanı kesintisiz takip eder:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
            <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '12px', padding: '1.3rem' }}>
              <h4 style={{ color: '#ffffff', margin: '0 0 0.5rem 0', fontSize: '1.05rem' }}>1. OpenAI Ads Manager Güncellemeleri</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                Açılan yeni ülkeler, self-servis erişim listeleri, faturalandırma kuralları ve kampanya yönetim araçları.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '12px', padding: '1.3rem' }}>
              <h4 style={{ color: '#ffffff', margin: '0 0 0.5rem 0', fontSize: '1.05rem' }}>2. Yeni Reklam Formatları & Alpha Programları</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                Sponsorlu konuşma ajanları (Sponsored Agents), ürün feed entegrasyonları ve doğrudan satın alma butonları.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '12px', padding: '1.3rem' }}>
              <h4 style={{ color: '#ffffff', margin: '0 0 0.5rem 0', fontSize: '1.05rem' }}>3. GEO & LLM Kaynak Gösterme Algoritmaları</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                ChatGPT Search, Perplexity ve Google Gemini gibi modellerin markaları tavsiye etme ve kaynak gösterme kriterleri.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '12px', padding: '1.3rem' }}>
              <h4 style={{ color: '#ffffff', margin: '0 0 0.5rem 0', fontSize: '1.05rem' }}>4. Türkiye Mevzuat ve Vergi Uyumu</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                Yurt dışı reklam faturaları, 2 No'lu KDV beyannamesi, kurumsal kart harcamaları ve stopaj düzenlemeleri.
              </p>
            </div>
          </div>
        </section>

        {/* Diğer Rehberlere Bağlantı */}
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>Teknik Rehberlerimizi İncelediniz mi?</h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            Haberlerin ötesinde uygulama adımlarını merak ediyorsanız kapsamlı kurulum rehberlerimizi inceleyin:
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/chatgpt-reklam-verme/" className="button secondary" style={{ fontSize: '0.9rem' }}>ChatGPT Reklam Kurulumu <Arrow /></a>
            <a href="/openai-ads-manager/" className="button secondary" style={{ fontSize: '0.9rem' }}>OpenAI Ads Manager Paneli <Arrow /></a>
            <a href="/chatgpt-reklam-fiyatlari/" className="button secondary" style={{ fontSize: '0.9rem' }}>Reklam Fiyatları 2026 <Arrow /></a>
          </div>
        </div>
      </div>
    </Detail>
  )
}
