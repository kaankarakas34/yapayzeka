import type { ReactNode } from 'react'

export interface ArticleProps {
  Detail: React.ComponentType<{ eyebrow: string; title: string; summary: string; children: ReactNode; cta?: string }>
  Arrow: React.ComponentType
}

// 1. Markam ChatGPT’de Neden Görünmüyor? 12 Olası Neden ve Kontrol Listesi
export function MarkamNedenGorunmuyorPage({ Detail, Arrow }: ArticleProps) {
  return (
    <Detail
      eyebrow="Sorun Odaklı GEO Denetimi"
      title="Markam ChatGPT’de Neden Görünmüyor? 12 Olası Neden ve Kontrol Listesi"
      summary="Sektörünüzle veya ürünlerinizle ilgili sorular sorulduğunda ChatGPT neden şirketinizi önermiyor? Tarama engelleri, bilgi tutarsızlıkları ve rekabet analizi için kapsamlı teşhis rehberi."
      cta="Ücretsiz AI Görünürlük Analizi Başlatın"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Kısa Doğrudan Yanıt */}
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '3rem', borderLeft: '4px solid var(--chat-green)' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.6rem' }}>📌 Kısa ve Doğrudan Yanıt</h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, margin: 0 }}>
            ChatGPT klasik bir arama motoru gibi yalnızca anahtar kelime eşleştirerek web sayfalarını listelemez. 
            Bir markayı önermesi için: <strong>1)</strong> Arama botu olan <code>OAI-SearchBot</code>’un sitenizi engelsiz tarayabilmesi, 
            <strong>2)</strong> Marka varlığınızın (entity) tarafsız 3. taraf kaynaklarda ve yapısal verilerde tutarlı doğrulanması, 
            <strong>3)</strong> Kullanıcının karar anına doğrudan yanıt veren özgün bilgi (information gain) sunmanız gerekir. 
            Unutmayın: Hiçbir platformda yapay zekânın organik yanıtında %100 kesin ilk sıra garantisi verilemez; ancak doğru GEO mimarisi önerilme olasılığını katlar.
          </p>
        </div>

        {/* 1. Alt Başlık */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            1. Tarama, Erişim ve İndeksleme Sorunları
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
            Bir markanın ChatGPT, Perplexity veya Gemini yanıtlarında yer alamamasının ilk ve en yaygın nedeni teknik erişim kısıtlamalarıdır:
          </p>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.6rem' }}>
              <strong style={{ color: '#ffffff' }}>OAI-SearchBot ve GPTBot Engelleri:</strong> robots.txt dosyanızda bilmeyerek tüm botları engellemiş olabilirsiniz. ChatGPT’nin arama yeteneği <code>OAI-SearchBot</code> ajanını kullanır.
            </li>
            <li style={{ marginBottom: '0.6rem' }}>
              <strong style={{ color: '#ffffff' }}>İstemci Taraflı JavaScript (SPA) Çıkmazı:</strong> Sayfanızın ilk ham HTML çıktısında metin ve içerik yoksa, arama botları içeriği boş görebilir.
            </li>
            <li style={{ marginBottom: '0.6rem' }}>
              <strong style={{ color: '#ffffff' }}>WAF ve Cloudflare Güvenlik Duvarı Engelleri:</strong> Sıkı güvenlik kuralları OpenAI IP bloklarını yanlışlıkla zararlı bot sanıp engelleyebilir.
            </li>
          </ul>
        </section>

        {/* 2. Alt Başlık */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            2. Marka Bilgilerindeki Tutarsızlıklar ve İçerik Boşlukları
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
            Yapay zekâ modelleri halüsinasyonu engellemek için yüksek güven skoruna sahip varlıkları referans gösterir. Şu boşluklar önerilmeyi engeller:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.2rem' }}>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <h4 style={{ color: 'var(--chat-green)', marginBottom: '0.5rem' }}>Tutarsız Şirket Tanımı</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Farklı platformlarda (LinkedIn, web sitesi, sektörel dizinler) farklı faaliyet alanları tanımlandığında model şirketin ana uzmanlığını netleştiremez.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <h4 style={{ color: 'var(--chat-green)', marginBottom: '0.5rem' }}>Otoriter Dış Kaynak Eksikliği</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Yalnızca kendi web sitenizde kendinizi övmeniz yeterli değildir. Tarafsız haber kaynakları, sektörel incelemeler ve bağımsız vaka analizleri şarttır.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Alt Başlık */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            3. Rakiplerle Karşılaştırmalı Görünürlük Testi
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
            Rakibiniz aynı soruda önerilirken siz neden önerilmiyorsunuz? Bunu tespit etmek için 3 adımlı test matrisi uygulanır:
          </p>
          <div className="table-wrap" style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.8rem' }}>Test Adımı</th>
                  <th style={{ padding: '0.8rem' }}>Uygulanan Prompt Örneği</th>
                  <th style={{ padding: '0.8rem' }}>İncelenen AI Çıktısı</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Navigational</td>
                  <td style={{ padding: '0.8rem' }}>"[Marka Adınız] ne iş yapar, güvenilir mi?"</td>
                  <td style={{ padding: '0.8rem' }}>Doğruluk oranı, alıntılanan kaynaklar</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Kategori Araması</td>
                  <td style={{ padding: '0.8rem' }}>"Türkiye'de [Sektörünüz] alanında en iyi 3 firma"</td>
                  <td style={{ padding: '0.8rem' }}>Önerilen ilk 3 marka ve nedenleri</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Rakip Kıyası</td>
                  <td style={{ padding: '0.8rem' }}>"[Rakip A] ile [Markanız] arasındaki farklar"</td>
                  <td style={{ padding: '0.8rem' }}>Eksik bulunan yönler, bilgi boşlukları</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Kontrol Listesi */}
        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            📋 12 Maddelik Hızlı Teşhis Kontrol Listesi
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem', color: 'var(--chat-text-secondary)', fontSize: '0.95rem' }}>
            <div>✓ 1. robots.txt OAI-SearchBot izinleri</div>
            <div>✓ 2. HTML'de sunucu taraflı içerik çıktısı</div>
            <div>✓ 3. Organization & Service Schema işaretlemeleri</div>
            <div>✓ 4. Net ve çelişkisiz kurumsal künye bilgisi</div>
            <div>✓ 5. İlk ekranda doğrudan soru-cevap blokları</div>
            <div>✓ 6. Doğrulanabilir fiyat ve süreç şeffaflığı</div>
            <div>✓ 7. Tarafsız 3. taraf basın ve sektörel alıntılar</div>
            <div>✓ 8. llms.txt ve semantik dokümantasyon</div>
            <div>✓ 9. Güncel müşteri yorumları ve vaka kanıtları</div>
            <div>✓ 10. Çok dilli veya yerelleştirilmiş içerik uyumu</div>
            <div>✓ 11. Karar anı odaklı derinlikli rehberler</div>
            <div>✓ 12. Düzenli LLM model görünürlük denetimleri</div>
          </div>
        </section>

        {/* İç Bağlantı ve Çağrı */}
        <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.8rem' }}>Sitenizin AI Görünürlüğünü Şimdi Test Edin</h3>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.5rem' }}>
            Canlı teşhis konsolumuzla sitenizin ChatGPT, Perplexity ve Gemini üzerindeki görünürlük durumunu anında analiz edin.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="button primary" href="/yapay-zeka-gorunurluk-analizi/">Canlı Görünürlük Analizini Başlat <Arrow /></a>
            <a className="button secondary" href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmet Detayları <Arrow /></a>
          </div>
        </div>
      </div>
    </Detail>
  )
}

// 2. ChatGPT’de Kaynak Olarak Gösterilmek İçin Site Nasıl Hazırlanır?
export function KaynakGosterilmekIcinSitePage({ Detail, Arrow }: ArticleProps) {
  return (
    <Detail
      eyebrow="Teknik & İçerik Mimarisi"
      title="ChatGPT’de Kaynak Olarak Gösterilmek İçin Site Nasıl Hazırlanır?"
      summary="OpenAI Search motorunun web sitenizi alıntılaması ve dipnot kaynak bağlantısı göstermesi için OAI-SearchBot erişimi, bilgi kazancı (information gain) ve referans takibi rehberi."
      cta="Sitenizi Kaynak Gösterilmeye Hazırlayın"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '3rem', borderLeft: '4px solid var(--chat-green)' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.6rem' }}>📌 Kısa ve Doğrudan Yanıt</h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, margin: 0 }}>
            ChatGPT web yanıtlarında sitenizi kaynak göstermek için rastgele web sayfaları seçmez. 
            Doğrudan kullanıcının sorusuna net, tırnak içine alınabilir ve kanıtlanmış birinci el veri sunan sayfaları tercih eder. 
            Teknik olarak <code>OAI-SearchBot</code> erişimine izin vermek şarttır; içerik tarafında ise jenerik tanımlar yerine spesifik rakamlar, tablolar ve süreç sınırları sunan sayfalar alıntı kazanır.
          </p>
        </div>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            1. OAI-SearchBot Erişimi ve Teknik Kontroller
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
            OpenAI'ın arama indeksleme süreçleri için özel botu <code>OAI-SearchBot</code>'tur. Bu bot sitenizi model eğitimi için değil, doğrudan kullanıcının canlı arama sorgularına güncel kaynak bulmak için ziyaret eder:
          </p>
          <pre style={{ background: '#0d1117', padding: '1.2rem', borderRadius: '10px', color: '#58a6ff', fontSize: '0.9rem', overflowX: 'auto', marginBottom: '1.2rem' }}>
{`# robots.txt dosyanızda bulunması önerilen yapılandırma:
User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Allow: /`}
          </pre>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Google’ın yapay zekâ arama kılavuzlarında da vurguladığı gibi, harici yapay zekâ arama botlarına özel bir <code>llms.txt</code> şartı Google dizini için zorunlu değildir; ancak OpenAI ekosisteminde içeriğin yapısını hızlı anlamak adına faydalıdır.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            2. Kaynak Gösterilmeye Uygun Özgün Bilgi ve Kanıt (Information Gain)
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
            İnternette zaten 100 farklı sitede bulunan genel geçer cümleleri tekrarlayan bir sayfayı yapay zekâ kaynak göstermez. Alıntı almak için 3 altın kural:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '0.5rem' }}>Doğrudan Tanım Cümlesi</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Her bölümün ilk paragrafında lafı uzatmadan soruya 2 cümlelik kesin cevap verin. LLM bu cümleyi alıntı olarak seçer.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '0.5rem' }}>Özgün Veri & Karşılaştırma</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Kendi iş verinizden çıkarılmış fiyat aralıkları, başarı oranları veya karşılaştırma tabloları ekleyin.
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '0.5rem' }}>Süreç ve Sınırlar</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                "Her şeyi yaparız" iddiası yerine, hizmetin kimler için uygun olmadığını ve sınırlarını belirtin. Güvenilirlik skorunu artırır.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            3. Kaynak Bağlantılarını ve Gelen Trafiği İzleme
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
            ChatGPT web aramasında kaynak gösterildiğinizde ziyaretçiler doğrudan sitenize yönlendirilir. Bu trafiği takip etmek için:
          </p>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.2rem' }}>
            <li>Analitik panelinizde <code>chatgpt.com / referral</code> veya <code>oaifunction / direct</code> kaynaklarını filtreleyin.</li>
            <li>Kaynak gösterilen sayfalarınızın ortalama oturum süresini ve form doldurma oranını inceleyin; bu kullanıcılar genellikle satın alma kararına çok daha yakındır.</li>
          </ul>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.8rem' }}>GEO Optimizasyonuyla Kaynak Görünürlüğünüzü Artırın</h3>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.5rem' }}>
            Sitenizin taranabilirlik, içerik otoritesi ve alıntı potansiyelini profesyonel ekibimizle optimize edin.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="button primary" href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmetimizi İnceleyin <Arrow /></a>
            <a className="button secondary" href="/yapay-zeka-gorunurluk-analizi/">Canlı AI Analizi Alın <Arrow /></a>
          </div>
        </div>
      </div>
    </Detail>
  )
}

// 3. GEO Performansı Nasıl Ölçülür? Marka, Rakip ve Kaynak Gösterimi Takibi
export function GeoPerformansiNasilOlculurPage({ Detail, Arrow }: ArticleProps) {
  return (
    <Detail
      eyebrow="Ölçümleme & KPI Metrikleri"
      title="GEO Performansı Nasıl Ölçülür? Marka, Rakip ve Kaynak Gösterimi Takibi"
      summary="Yapay zekâ yanıtlarındaki görünürlüğünüzü nasıl ölçeceksiniz? Marka anılması (mention), kaynak bağlantısı (citation) ve tavsiye (recommendation) arasındaki kritik hiyerarşi ve takip metodolojisi."
      cta="GEO Ölçümleme Planı İsteyin"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '3rem', borderLeft: '4px solid var(--chat-green)' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.6rem' }}>📌 Kısa ve Doğrudan Yanıt</h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, margin: 0 }}>
            GEO performansı klasik SEO gibi tek bir anahtar kelimenin Google sıra numarasıyla ölçülmez. 
            Çünkü LLM yanıtları dinamik ve olasılıksaldır (stokastik). 
            Doğru GEO ölçümü; belirlenen sektörel soru havuzunda markanızın <strong>anılma oranı (Mention)</strong>, 
            <strong>tıklanabilir kaynak bağlantısı alma oranı (Citation)</strong> ve kullanıcıya <strong>doğrudan çözüm olarak önerilme sıklığı (Recommendation)</strong> üzerinden hesaplanır.
          </p>
        </div>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            1. Ölçülecek Soru Seti Nasıl Oluşturulur?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
            Tek bir prompt ile yapılan sorgu ölçüm için yeterli değildir. Her sektör için 3 kademeli en az 30 soruluk bir test seti kurgulanmalıdır:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <h4 style={{ color: 'var(--chat-green)', marginBottom: '0.5rem' }}>Aşama 1: Keşif & Bilgi</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                "Sektör X'te en sık karşılaşılan problemler ve çözüm yöntemleri nelerdir?" (Sektörel otorite ve kaynak testi).
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <h4 style={{ color: 'var(--chat-green)', marginBottom: '0.5rem' }}>Aşama 2: Değerlendirme & Kıyas</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                "Türkiye'de [Hizmet] sunan en güvenilir 5 firma hangisi ve kriterler neler?" (Doğrudan tavsiye testi).
              </p>
            </div>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--chat-border)' }}>
              <h4 style={{ color: 'var(--chat-green)', marginBottom: '0.5rem' }}>Aşama 3: Satın Alma Kararı</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                "[Marka X] güvenilir mi, fiyat politikası ve müşteri yorumları nasıl?" (Marka itibarı ve duyarlılık analizi).
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            2. Marka Anılması, Kaynak Bağlantısı ve Tavsiye Arasındaki Fark
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
            Yapay zekâ yanıtlarında görünürlük 3 farklı değer kademesine ayrılır:
          </p>
          <div className="table-wrap" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.8rem' }}>Metrik</th>
                  <th style={{ padding: '0.8rem' }}>Tanım</th>
                  <th style={{ padding: '0.8rem' }}>İş Değeri & Etkisi</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>1. Mention (Anılma)</td>
                  <td style={{ padding: '0.8rem' }}>Marka adının metin içinde geçmesi.</td>
                  <td style={{ padding: '0.8rem' }}>Temel bilinirlik. Model markayı biliyor.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>2. Citation (Alıntı/Link)</td>
                  <td style={{ padding: '0.8rem' }}>Cevabın altında sitenize tıklanabilir kaynak bağlantısı verilmesi.</td>
                  <td style={{ padding: '0.8rem' }}>Yüksek nitelikli doğrudan referral trafiği.</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>3. Recommendation (Tavsiye)</td>
                  <td style={{ padding: '0.8rem' }}>Modelin kullanıcının sorununa çözüm olarak doğrudan markanızı önermesi.</td>
                  <td style={{ padding: '0.8rem' }}>En yüksek dönüşüm: Müşteri satın almaya hazır gelir.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            3. Aylık Rapor ve Değişim Takibi (Share of Model Voice)
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Haftalık ve aylık periyotlarda ChatGPT (GPT-4o), Perplexity Pro, Google Gemini ve Claude üzerinde aynı soru seti çalıştırılır. 
            Elde edilen verilerle <strong>Yapay Zekâ Ses Payı (Share of Model Voice - SoMV)</strong> ve <strong>Duyarlılık (Sentiment)</strong> skoru çıkarılır. 
            Böylece yapılan içerik optimizasyonlarının ve teknik düzeltmelerin model yanıtlarını ne kadar geliştirdiği somut olarak raporlanır.
          </p>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.8rem' }}>Markanızın GEO Skorunu Bugün Ölçelim</h3>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.5rem' }}>
            Ücretsiz ön analiz modülümüzü kullanarak sitenizin LLM motorlarındaki mevcut durumunu hemen görüntüleyin.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="button primary" href="/yapay-zeka-gorunurluk-analizi/">Canlı Analiz Başlat <Arrow /></a>
            <a className="button secondary" href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmet Kapsamı <Arrow /></a>
          </div>
        </div>
      </div>
    </Detail>
  )
}

// 10. ChatGPT Reklam Kampanyası Nasıl Planlanır? İlk 30 Günlük Test Örneği
export function ChatGptReklamKampanyasiPlanlamaPage({ Detail, Arrow }: ArticleProps) {
  return (
    <Detail
      eyebrow="Kampanya & Bütçe Yönetimi"
      title="ChatGPT Reklam Kampanyası Nasıl Planlanır? İlk 30 Günlük Test Örneği"
      summary="OpenAI Ads Manager üzerinde ilk ChatGPT sponsorlu reklam kampanyasını kurgularken hedef kitle uygunluğu, context hints yazımı, bütçe yönetimi ve durdurma kriterleri rehberi."
      cta="ChatGPT Reklam Pilot Kampanyası Başlatın"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '3rem', borderLeft: '4px solid var(--chat-green)' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.6rem' }}>📌 Kısa ve Doğrudan Yanıt</h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, margin: 0 }}>
            İlk ChatGPT reklam kampanyasını planlarken Google Ads mantığıyla yüzlerce anahtar kelime girmek yanlıştır. 
            Doğru yöntem: <strong>1)</strong> İşletmenizin OpenAI Ads Manager uygunluğunu doğrulamak (Türkiye self-servis erişime açıktır), 
            <strong>2)</strong> Kullanıcının karar verdiği 2-3 spesifik bağlamı (Context Hints) belirlemek, 
            <strong>3)</strong> İlk 30 gün için kontrollü bir pilot test bütçesi ($1,500 - $3,000) belirleyip net durdurma/ölçekleme hedefleri koymaktır.
          </p>
        </div>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            1. Hedef, Ülke ve Uygunluk Kontrolü
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
            OpenAI'ın 2026 güncel belgelerine göre Türkiye, Ads Manager self servis reklamveren listesinde yer almaktadır. 
            Ancak kampanyaya başlamadan önce şu şartlar doğrulanmalıdır:
          </p>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.2rem' }}>
            <li>Resmî vergi numarası ve kurumsal fatura bilgileri eksiksiz olmalı.</li>
            <li>Sektörünüz OpenAI Reklam Politikaları'na uygun olmalı (sağlık, finans veya yasal kısıtlı sektörlerde özel inceleme gerekir).</li>
            <li>Açılış sayfanız doğrudan vadedilen çözümü sunmalı, kullanıcıyı yanıltıcı pop-up ve engeller içermemelidir.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            2. Reklam Grupları, Mesajlar ve Açılış Sayfaları (Context Hints)
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
            ChatGPT reklamlarında reklam grupları "bağlam ipuçları" (Context Hints) ile çalışır. 
            Örneğin bir B2B ERP yazılımı için context hint şu şekilde yazılır:
          </p>
          <div style={{ background: '#0d1117', padding: '1.2rem', borderRadius: '10px', color: '#a5d6ff', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
            <em>"Kullanıcı Türkiye'de 50'den fazla çalışanı olan üretim veya e-ticaret şirketi için muhasebe, stok ve lojistik entegrasyonu sağlayan kurumsal ERP yazılımı araştırdığında veya maliyet sorduğunda göster."</em>
          </div>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Reklam mesajı bu bağlama tam oturmalı ve yönlendirilen açılış sayfası kullanıcının diyalogdaki sorusuna anında yanıt vermelidir.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            3. Test Bütçesi ve Durdurma Kararları (Stop-Loss Kriterleri)
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
            ChatGPT reklamlarında ücretlendirme hem <strong>bin gösterim (CPM)</strong> hem de <strong>geçerli tıklama (CPC)</strong> seçenekleri üzerinden işler. 
            İlk 30 günde riskleri minimize etmek için şu yol haritası izlenir:
          </p>
          <div className="table-wrap" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.8rem' }}>Dönem</th>
                  <th style={{ padding: '0.8rem' }}>Odak Alanı</th>
                  <th style={{ padding: '0.8rem' }}>Durdurma / Karar Eşiği</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Gün 1 - 7</td>
                  <td style={{ padding: '0.8rem' }}>Teknik Kurulum, CAPI & Düşük Bütçeli Test</td>
                  <td style={{ padding: '0.8rem' }}>Tıklama gelmiyorsa Context Hints daraltılır.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Gün 8 - 20</td>
                  <td style={{ padding: '0.8rem' }}>Tıklama Başına Talep Kalitesi & Form Dönüşümü</td>
                  <td style={{ padding: '0.8rem' }}>Hedef CPL aşılırsa ilgili bağlam durdurulur.</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Gün 21 - 30</td>
                  <td style={{ padding: '0.8rem' }}>Satış Eşleşmesi ve Kazanan Bağlamı Ölçekleme</td>
                  <td style={{ padding: '0.8rem' }}>Yüksek kârlı bağlamlara bütçe artırımı yapılır.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.8rem' }}>ChatGPT Reklam Kampanyanızı Birlikte Kuralım</h3>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.5rem' }}>
            OpenAI Ads Manager kurulumundan açılış sayfası ve CAPI entegrasyonuna kadar tüm süreci uçtan uca yönetiyoruz.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="button primary" href="/chatgpt-reklamlari/">ChatGPT Reklam Hizmetimiz <Arrow /></a>
            <a className="button secondary" href="/iletisim/">Test Kampanyası Danışmanlığı <Arrow /></a>
          </div>
        </div>
      </div>
    </Detail>
  )
}

// 13. ChatGPT Reklamları İçin Açılış Sayfası Kontrol Listesi
export function ChatGptAcilisSayfasiKontrolPage({ Detail, Arrow }: ArticleProps) {
  return (
    <Detail
      eyebrow="Dönüşüm Optimizasyonu (CRO)"
      title="ChatGPT Reklamları İçin Açılış Sayfası Kontrol Listesi"
      summary="ChatGPT diyalogundan tıklayan bilinçli ziyaretçiyi müşteriye dönüştüren landing page mimarisi: İlk ekran uyumu, güven kanıtları, mobil hız ve form sadeliği."
      cta="Açılış Sayfası Analizi İsteyin"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '3rem', borderLeft: '4px solid var(--chat-green)' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.6rem' }}>📌 Kısa ve Doğrudan Yanıt</h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, margin: 0 }}>
            ChatGPT reklamından gelen kullanıcı sıradan bir sosyal medya kaydırıcısı değildir; yapay zekâya derin bir problem sorup akıl yürütürken reklamınızı görmüştür. 
            Bu nedenle genel ana sayfanıza yönlendirilirse sayfayı 3 saniyede terk eder. 
            Açılış sayfası diyalogdaki bağlama doğrudan cevap vermeli, fiyat ve teslim süreçlerinde şeffaf olmalı, mobilde 1.5 saniyenin altında açılmalı ve sürtünmesiz bir teklif formu sunmalıdır.
          </p>
        </div>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            1. Reklam Vaadi ve İlk Ekran Uyumu (Message Match)
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
            Kullanıcı ChatGPT ekranında hangi vaatle tıkladıysa, sayfanın H1 başlığında ve ilk cümlesinde tam olarak o konuyu görmelidir:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '1.5rem', borderRadius: '12px' }}>
              <h4 style={{ color: '#f87171', marginBottom: '0.5rem' }}>❌ Yanlış Yaklaşım</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Context hint "Almanya e-ihracat lojistiği" iken ziyaretçiyi şirketin genel "Hoş Geldiniz" kurumsal ana sayfasına göndermek.
              </p>
            </div>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '1.5rem', borderRadius: '12px' }}>
              <h4 style={{ color: 'var(--chat-green)', marginBottom: '0.5rem' }}>✓ Doğru Yaklaşım</h4>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                "Almanya E-İhracat Lojistiği: 48 Saatte Depo Teslimatı & Gümrük Çözümleri" başlıklı özel hazırlanmış açılış sayfasına yönlendirmek.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            2. Güven Kanıtları, Form ve Dönüşüm Yolu
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
            ChatGPT kullanıcıları analitiktir. Süslü pazarlama sloganları yerine somut veriler görmek ister:
          </p>
          <ul style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, paddingLeft: '1.2rem' }}>
            <li><strong>Şeffaf Fiyatlandırma ya da Hesaplama Aracı:</strong> Fiyatı saklamak terk oranını artırır. Başlangıç bütçeleri net yazılmalıdır.</li>
            <li><strong>Maksimum 3-4 Alanlı Form:</strong> TC kimlik, faks, adres gibi gereksiz sorular yerine yalnızca İsim, Şirket, E-posta ve Web Sitesi istenmelidir.</li>
            <li><strong>Sosyal Kanıt ve Referanslar:</strong> Gerçek müşteri logoları, vaka incelemeleri ve bağımsız değerlendirme skorları yer almalıdır.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            3. Mobil Deneyim ve Uygulama İçi Tarayıcı (In-App Browser) Erişimi
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            ChatGPT mobil uygulamasından gelen tıklamalar uygulama içi webview tarayıcısında açılır. 
            Burada ağır JavaScript kütüphaneleri, pop-up pencereler veya oturum açma zorunlulukları dönüşümü anında sıfırlar. 
            Sayfanın LCP (Largest Contentful Paint) süresi mobilde 1.8 saniyenin altında olmalı ve ilk ekranda doğrudan aksiyon butonu bulunmalıdır.
          </p>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.8rem' }}>Açılış Sayfanızı Dönüşüm İçin Optimize Edelim</h3>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.5rem' }}>
            ChatGPT Ads kampanyalarınız için yüksek dönüşüm sağlayan, hızlı ve güven odaklı açılış sayfası mimarisi tasarlıyoruz.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="button primary" href="/chatgpt-reklamlari/">ChatGPT Reklam Yönetimi <Arrow /></a>
            <a className="button secondary" href="/blog/chatgpt-ads-context-hints/">Context Hints Rehberi <Arrow /></a>
          </div>
        </div>
      </div>
    </Detail>
  )
}

// 14. ChatGPT Reklamı mı Google Ads mi? Hangi Hedef İçin Hangisi Seçilmeli?
export function ChatGptReklamiMiGoogleAdsMiPage({ Detail, Arrow }: ArticleProps) {
  return (
    <Detail
      eyebrow="Platform Karşılaştırması"
      title="ChatGPT Reklamı mı Google Ads mi? Hangi Hedef İçin Hangisi Seçilmeli?"
      summary="Kullanıcı niyeti, bütçe dinamikleri, açık artırma modelleri ve satın alma hunisindeki rolleri açısından ChatGPT Ads ve Google Ads'in derinlemesine analizi."
      cta="Kanal Stratejinizi Belirleyin"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '3rem', borderLeft: '4px solid var(--chat-green)' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.6rem' }}>📌 Kısa ve Doğrudan Yanıt</h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, margin: 0 }}>
            Bu iki kanal birbirinin rakibi değil, satın alma yolculuğunun farklı anlarını yakalayan tamamlayıcı güçlerdir. 
            <strong>Google Ads</strong>, kullanıcının ne istediğini tam olarak bildiği ve 10 mavi link arasında arama yaptığı "anlık talep" anında rakipsizdir. 
            <strong>ChatGPT Ads</strong> ise kullanıcının karmaşık bir sorunu çözmek için akıl yürüttüğü ve tavsiye aradığı "derin karar anında" yüksek güvenilirlikle öne çıkar.
          </p>
        </div>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            1. Kullanıcı Niyeti ve Reklamın Göründüğü An
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
            Google aramasında kullanıcı hızlı bir bilgi veya ürün linki ister; sayfada genellikle 10 saniye kalır. 
            ChatGPT'de ise ortalama oturum süresi dakikalar sürer. Kullanıcı modelle çok adımlı diyalog kurar, soru sorar, karşılaştırma ister. 
            Sponsorlu mesaj bu düşünme sürecinin tam ortasında, çözüm bağlamıyla organik biçimde yer alır.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            2. Karşılaştırma Matrisi: ChatGPT Ads vs. Google Ads
          </h2>
          <div className="table-wrap" style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.8rem' }}>Kriter</th>
                  <th style={{ padding: '0.8rem' }}>Google Ads</th>
                  <th style={{ padding: '0.8rem' }}>ChatGPT Ads</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Hedefleme Mantığı</td>
                  <td style={{ padding: '0.8rem' }}>Anahtar Kelimeler + Kitleler</td>
                  <td style={{ padding: '0.8rem' }}>Konuşma Bağlamı (Context Hints)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Kullanıcı Zihniyeti</td>
                  <td style={{ padding: '0.8rem' }}>Hızlı gezinme, link tıklama</td>
                  <td style={{ padding: '0.8rem' }}>Derin araştırma, tavsiye arayışı</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Ücretlendirme</td>
                  <td style={{ padding: '0.8rem' }}>TBM (CPC) & tCPA</td>
                  <td style={{ padding: '0.8rem' }}>Açık artırma: Hem CPM hem Geçerli CPC</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Rekabet Yoğunluğu</td>
                  <td style={{ padding: '0.8rem' }}>Çok yüksek, doymuş açık artırma</td>
                  <td style={{ padding: '0.8rem' }}>Yeni, ilk benimseyenler için yüksek avantaj</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>En Uygun Sektörler</td>
                  <td style={{ padding: '0.8rem' }}>E-ticaret, acil hizmetler, lokal işletmeler</td>
                  <td style={{ padding: '0.8rem' }}>B2B SaaS, profesyonel hizmetler, yüksek biletli satışlar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            3. İki Kanallı Pilot Kampanya Örneği (Hibrit Strateji)
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            En başarılı markalar bütçeyi bölerek yönetir: 
            Aylık reklam bütçesinin %70'i Google Ads Arama ve Performance Max ile doğrudan marka ve ürün arayanlara ayrılırken, 
            %30'u ChatGPT Ads ile pazar araştırması yapan ve henüz karar vermemiş nitelikli karar vericilere ayrılır. 
            Bu kurgu hem anlık ciroyu korur hem de müşteri edinme maliyetini (CAC) düşürür.
          </p>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.8rem' }}>Hangi Kanalın Size Uygun Olduğunu Belirleyelim</h3>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.5rem' }}>
            İşletmenizin sektörel hedeflerine göre Google Ads ve ChatGPT Ads bütçe simülasyonunu hazırlayalım.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="button primary" href="/chatgpt-reklamlari/">ChatGPT Reklam Hizmeti <Arrow /></a>
            <a className="button secondary" href="/hizmetler/yapay-zeka-google-ads/">Google Ads AI Hizmeti <Arrow /></a>
          </div>
        </div>
      </div>
    </Detail>
  )
}
