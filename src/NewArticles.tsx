import type { ReactNode } from 'react'

export interface ArticleProps {
  Detail: React.ComponentType<{ eyebrow: string; title: string; summary: string; children: ReactNode; cta?: string }>
  Arrow: React.ComponentType
}

// 1. Markam ChatGPT’de Neden Görünmüyor? 12 Olası Neden ve Kontrol Listesi
export function MarkamNedenGorunmuyorPage({ Detail, Arrow }: ArticleProps) {
  return (
    <Detail
      eyebrow="Sorun Odaklı GEO Teşhisi"
      title="Markam ChatGPT’de Neden Görünmüyor? 12 Olası Neden ve Kontrol Listesi"
      summary="Sektörünüzle veya ürünlerinizle ilgili sorular sorulduğunda ChatGPT neden şirketinizi önermiyor? Tarama engelleri, bilgi tutarsızlıkları ve rekabet analizi için 12 maddelik teşhis rehberi."
      cta="Ücretsiz AI Görünürlük Analizi Başlatın"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Kısa Doğrudan Yanıt */}
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '3rem', borderLeft: '4px solid var(--chat-green)' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.6rem' }}>📌 Kısa ve Doğrudan Teşhis</h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, margin: 0 }}>
            Bir markanın ChatGPT yanıtında görünmemesi tek bir “algoritma cezası” ile açıklanamaz. 
            Önce hangi soruda görünmediğinizi belirleyin: marka adınız sorulunca mı, kategoriniz sorulunca mı, yoksa bir karşılaştırmada mı? 
            Ardından aşağıdaki 12 kontrolü sırayla yapın. Kurulum ve geliştirme adımları için <a href="/chatgptde-markam-nasil-cikar/" style={{ color: 'var(--chat-green)', fontWeight: 600 }}>adım adım görünürlük rehberini</a> uygulayabilirsiniz.
          </p>
        </div>

        {/* 12 Somut Kontrol Adımı */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            12 Somut Neden ve Teşhis Adımları
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>1. Soru markayı zaten içermiyor olabilir</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                “X markası ne yapıyor?” sorusunda görünmek ile “Bu iş için hangi marka uygun?” sorusunda görünmek farklıdır. Önce her iki sorgu türünü ayrı ölçün; sonuçları tek bir görünürlük puanına sıkıştırmayın.
              </p>
            </div>

            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>2. <code>OAI-SearchBot</code> erişimi engelleniyor olabilir</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                OpenAI, ChatGPT aramasında sitenin özet ve alıntılarla görünmesi için bu tarayıcının engellenmemesini önerir. <code>robots.txt</code>, WAF ve sunucu loglarını kontrol edin. Bot izni kaynak gösterimi garantisi değildir.
              </p>
            </div>

            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>3. Sayfa herkese açık ve okunabilir olmayabilir</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Giriş duvarı, erişim hatası veya içeriğin sadece uygulama çalışınca görünmesi bilgiyi keşfetmeyi zorlaştırabilir. En önemli marka ve ürün cümlelerinin sayfanın erişilebilir HTML'inde bulunmasını sağlayın.
              </p>
            </div>

            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>4. Yanlış veya eski canonical sayfa işaretlenmiş olabilir</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Farklı URL'lerde aynı içerik varsa hangisinin esas sayfa olduğu belirsizleşir. Yönlendirmeleri, canonical etiketini ve gerçek içerik adresini kontrol edin.
              </p>
            </div>

            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>5. Marka kimliği sayfalar arasında tutarsız olabilir</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Ana sayfa, iletişim, ürün ve sosyal hesaplarda farklı şirket adı veya hizmet tanımı varsa müşterinin de kafası karışır. Ticari ad, alan adı, konum ve hizmet kapsamını aynı gerçeklere dayandırın.
              </p>
            </div>

            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>6. Ürün veya hizmet farkı açıklanmıyor olabilir</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                “Yenilikçi çözümler sunuyoruz” cümlesi hangi soruda markanızın ilgili olduğunu anlatmaz. Kim için, hangi işi, hangi koşullarda yaptığınızı örneklerle gösterin.
              </p>
            </div>

            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>7. Kullanıcının karar sorularına cevap veren sayfa olmayabilir</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Genel bir ana sayfa bütün karşılaştırma ve kullanım sorularına yetmez. En sık gelen satış sorularını kendi veri ve süreçlerinize dayanarak ayrı bölümlerde yanıtlayın.
              </p>
            </div>

            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>8. İddialar doğrulanabilir kanıt taşımıyor olabilir</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Müşteri örneği, ürün ekranı, yöntem ve kaynak eksikse “en iyi” gibi sıfatlar açıklama yerine geçmez. İzinli ve gerçek kanıt sunun; vaka sonucu uydurmayın.
              </p>
            </div>

            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>9. Üçüncü taraf bilgiler yanlış veya eksik olabilir</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Bağımsız yayın, iş ortaklığı ve dizin bilgilerindeki marka adı ile faaliyet tanımı güncel olmalıdır. Ücretli yerleştirmeleri bağımsız kaynak gibi göstermeyin.
              </p>
            </div>

            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>10. Yanlış ülke veya dilde test yapıyor olabilirsiniz</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                İngiltere'de İngilizce sorulan bir sorunun kaynakları Türkiye'de Türkçe sorulana benzeyebilir veya farklılaşabilir. Hedef pazarı ve dili test kayıtlarına ekleyin.
              </p>
            </div>

            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>11. Tek denemeye bakıyor olabilirsiniz</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Yanıtlar zaman, soru biçimi, konuşma bağlamı ve arama kullanımına göre değişir. Önceden tanımlanmış soru setini tekrarlayın; bir ekran görüntüsünden kalıcı sıralama sonucu çıkarmayın.
              </p>
            </div>

            <div style={{ background: 'var(--chat-surface)', padding: '1.5rem', borderRadius: '14px', border: '1px solid var(--chat-border)' }}>
              <h3 style={{ color: 'var(--chat-green)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>12. Anılmayı trafik ve doğrulukla karıştırıyor olabilirsiniz</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Adınızın geçmesi her zaman tıklama getirmez; bir kaynak bağlantısı da her zaman doğru tanıtım anlamına gelmez. Marka anılması, tıklanabilir atıf, bilgi doğruluğu ve gerçek yönlendirme trafiğini ayrı kaydedin.
              </p>
            </div>
          </div>
        </section>

        {/* Rakiplerle Karşılaştırma Matrisi */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Rakiplerle Karşılaştırmalı Görünürlük Testi Nasıl Yapılır?
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
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Markalı (Navigational)</td>
                  <td style={{ padding: '0.8rem' }}>"[Marka Adınız] ne iş yapar, güvenilir mi?"</td>
                  <td style={{ padding: '0.8rem' }}>Doğruluk oranı, alıntılanan kaynaklar</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Kategori Araması</td>
                  <td style={{ padding: '0.8rem' }}>"Türkiye'de [Sektörünüz] alanında hangi firmalar uygun?"</td>
                  <td style={{ padding: '0.8rem' }}>Önerilen markalar ve gerekçeleri</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Karşılaştırma (Kıyas)</td>
                  <td style={{ padding: '0.8rem' }}>"[Rakip A] ile [Markanız] arasında nasıl seçim yapılır?"</td>
                  <td style={{ padding: '0.8rem' }}>Eksik bulunan yönler, bilgi ve veri boşlukları</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Resmî Dayanak */}
        <section style={{ marginBottom: '3.5rem', fontSize: '0.9rem', color: 'var(--chat-text-secondary)', borderTop: '1px solid var(--chat-border)', paddingTop: '1.5rem' }}>
          <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.4rem' }}>Resmî Kılavuz Referansı:</strong>
          <p style={{ margin: 0, lineHeight: 1.7 }}>
            OpenAI arama dizinlemesi ve kaynak gösterimi için <a href="https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>OpenAI Yayıncı ve Geliştirici Kılavuzu</a> esas alınmalıdır. Yapılandırılmış veriler (Schema) bilgiyi düzenli sunmak için faydalıdır; ancak OpenAI herhangi bir kapalı “güven skoru” formülü yayımlamaz.
          </p>
        </section>

        {/* Kapanış CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.8rem' }}>
            Bu 12 kontrolden hangisinin markanızda sorun yarattığını birlikte inceleyelim
          </h3>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '640px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Teknik tarama engellerinden karar soruları içeriklerine kadar markanızın LLM motorlarındaki teşhisini yapalım.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="button primary" href="/chatgptde-markam-nasil-cikar/">
              Adım adım görünürlük rehberi <Arrow />
            </a>
            <a className="button secondary" href="/yapay-zeka-gorunurluk-analizi/">
              Canlı analiz sayfası <Arrow />
            </a>
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
                  <td style={{ padding: '0.8rem' }}>Citation tıklanabilir bir kaynak yolu sunar; gerçek tıklamayı analitikte ölçmek gerekir.</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>3. Recommendation (Tavsiye)</td>
                  <td style={{ padding: '0.8rem' }}>Modelin kullanıcının sorununa çözüm olarak doğrudan markanızı önermesi.</td>
                  <td style={{ padding: '0.8rem' }}>Kullanıcının karar anında markanızın alternatif veya doğrudan çözüm olarak tavsiye edilmesidir.</td>
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

// ============================================================================
// YENİ REHBER: ChatGPT'de Markam Nasıl Çıkar? 2026 Görünürlük Rehberi
// ============================================================================
export function ChatGptdeMarkamNasilCikarPage({ Detail, Arrow }: ArticleProps) {
  return (
    <Detail
      eyebrow="2026 Görünürlük Rehberi"
      title="ChatGPT'de markam nasıl çıkar? Organik görünürlük için 7 adım"
      summary="Markanızın ChatGPT'de organik olarak anlaşılması ve kaynak gösterilmesi için teknik erişim, marka bilgisi, içerik ve ölçüm adımlarını öğrenin."
      cta="20 Soruluk Görünürlük İncelemesi İsteyin"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Giriş & Ayrım */}
        <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
          Markanızın ChatGPT'de görünmesi iki farklı anlama gelebilir: ChatGPT'nin bir soruya verdiği <strong>organik yanıtta</strong> markanızdan söz etmesi veya yanıtın altında <strong>sponsorlu reklam</strong> gösterilmesi. Organik cevap satın alınamaz. Reklam içinse ayrı bir OpenAI Ads Manager hesabı, uygun bir kategori ve kampanya gerekir. Bu rehber organik görünürlüğü ele alıyor. Ücretli kampanya kurmak istiyorsanız <a href="/chatgpt-reklam-verme/" style={{ color: 'var(--chat-green)', fontWeight: 600 }}>ChatGPT reklam verme rehberine</a> geçin.
        </p>

        {/* Kısa Yanıt Kutusu */}
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '3rem', borderLeft: '4px solid var(--chat-green)' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.6rem' }}>📌 Kısa Yanıt</h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, margin: 0 }}>
            Önce sitenizin erişilebilirliğini kontrol edin; marka, ürün ve kurum bilgilerinizi tutarlı biçimde yayımlayın; müşterinin karar sorularına özgün ve doğrulanabilir cevaplar verin; hedef sorularda kaynak gösterimi ve gerçek yönlendirme trafiğini ölçün. Bu çalışmalar belirli bir yanıtta görünme garantisi vermez, ancak doğru bilginin keşfedilmesi için sağlam bir temel oluşturur.
          </p>
        </div>

        {/* 1. Adım */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            1. “Markam çıktı” derken neyi ölçüyorsunuz?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            “Markamı ChatGPT'ye sordum ve adını yazdı” tek başına yeterli test değildir. Kullanıcının markayı zaten adıyla sorması ile “İstanbul'da küçük işletmeler için hangi CRM daha uygun?” gibi kategori sorusunda markanın anılması farklı sonuçlardır. Üç ölçüm ayırın:
          </p>
          <div className="table-wrap" style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.8rem' }}>Ölçüm</th>
                  <th style={{ padding: '0.8rem' }}>Örnek</th>
                  <th style={{ padding: '0.8rem' }}>Ne anlatır?</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Marka anılması</td>
                  <td style={{ padding: '0.8rem' }}>Yanıtta marka adı geçer</td>
                  <td style={{ padding: '0.8rem' }}>Model markayı bu bağlamla ilişkilendirmiş olabilir</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Kaynak bağlantısı</td>
                  <td style={{ padding: '0.8rem' }}>Web sayfanıza tıklanabilir atıf verir</td>
                  <td style={{ padding: '0.8rem' }}>Kullanıcı ilgili içeriğe gidebilir; tıklama garanti değildir</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Doğruluk</td>
                  <td style={{ padding: '0.8rem' }}>Ürün, fiyat, lokasyon ve yetkinlik doğru aktarılır</td>
                  <td style={{ padding: '0.8rem' }}>Görünürlük yararlı mı, yanıltıcı mı anlaşılır</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8 }}>
            Aynı soruyu bir kez sormak yerine soruları, ülkeyi, dili, tarihi ve yanıtın kaynaklarını kaydedin. Sohbet geçmişi, kişiselleştirme ve arama kullanımının sonuçları etkileyebileceğini hesaba katın.
          </p>
        </section>

        {/* 2. Adım */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            2. Sitenizin ChatGPT aramasına açık olduğunu kontrol edin
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            OpenAI, kamuya açık bir sitenin ChatGPT aramasında görünebileceğini; özet ve alıntılarda kullanılabilmesi için <code>OAI-SearchBot</code> erişiminin engellenmemesini öneriyor. <code>robots.txt</code>, sayfanın <code>noindex</code> etiketi, Cloudflare/WAF kuralları, sunucu hataları ve önemli bilgilerin yalnız JavaScript çalışınca görünmesi denetlenecek ilk alanlardır. Teknik ekipteki kişinin gerçek sunucu yanıtını ve erişim günlüklerini kontrol etmesi gerekir; yalnız bir araçtan “erişilebilir” sonucu almak yeterli olmayabilir.
          </p>
          <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '12px', padding: '1.2rem', marginTop: '1rem' }}>
            <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>
              <strong>İki botu karıştırmayın:</strong> <code>OAI-SearchBot</code> arama görünürlüğüyle, <code>OAI-AdsBot</code> ise ChatGPT Ads açılış sayfasının reklam incelemesiyle ilişkilidir. Birine izin vermek öteki işlevin hazır olduğu anlamına gelmez. Arama erişimine açık olmak da kaynak gösterimi garantisi değildir.
            </p>
          </div>
        </section>

        {/* 3. Adım */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            3. Markanızın ne yaptığını açık bir sayfada anlatın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Ana sayfada ve ilgili ürün/hizmet sayfalarında şu sorular cevapsız kalmamalı: Tam ticari adınız nedir? Hangi ürünü veya hizmeti sunuyorsunuz? Kimler için uygunsunuz? Hangi şehir veya ülkelerde çalışıyorsunuz? Ücret, kapsam, teslimat ve destek hakkında hangi bilgiler kamuya açık? Bir markanın aynı hizmeti farklı kaynaklarda çelişkili adlarla tanımlaması insan için de yapay zekâ için de belirsizlik yaratır.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Kurumsal iletişim, ekip, gerçek müşteri örnekleri ve güncel hizmet açıklamaları kolay bulunmalı. Yapılandırılmış veriyi yalnız sayfada gerçekten görünen bilgiyi makineye daha düzenli anlatmak için kullanın; <code>schema</code> eklemek tek başına ChatGPT'de üst sıralara çıkma yöntemi değildir.
          </p>
        </section>

        {/* 4. Adım */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            4. Müşterinin gerçek karar sorularını ayrı ayrı yanıtlayın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Genel bir “biz en iyiyiz” sayfası yerine müşterinin karar verirken sorduğu sorulara cevap veren içerikler hazırlayın. Örneğin bir CRM markası için “WhatsApp görüşmeleri CRM'de nasıl takip edilir?”, “10 kişilik satış ekibi için kurulum ne sürer?”, “Hangi entegrasyonlar var?” gibi sorular, yalnız “akıllı CRM” anahtar kelimesinden daha açıklayıcıdır.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Her sayfada kapsam, sınırlamalar, kimin için uygun olmadığı, örnek kullanım ve güncel tarih bulunabilir. Başka sitelerdeki genel tanımları yeniden yazmak yerine kendi ürün ekranınızı, yönteminizin örneğini veya anonimleştirilmiş bir uygulama sonucunu gösterin. Ölçmediğiniz sonuç için yüzde veya garanti eklemeyin.
          </p>
        </section>

        {/* 5. Adım */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            5. Bağımsız ve doğrulanabilir kaynakları geliştirin
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Gerçek yayınlarda marka adınızın, ürününüzün ve yaptığınız işin doğru anlatılması kullanıcı güvenini artırır. Mesleki dizin, iş ortaklığı duyurusu, bağımsız inceleme veya özgün araştırma; varsa kendi bağlamında değer taşır. Ücretli övgü metnini bağımsız haber gibi göstermeyin. Başka sitelerde markanızın anılması ChatGPT'nin sizi mutlaka önereceği anlamına da gelmez.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            İşe marka kimliğinin tutarlılığıyla başlayın: sosyal profillerde, şirket kayıtlarında ve referans verilen yayınlarda aynı marka, alan adı ve hizmet tanımı kullanılsın. Yanlış bilgi varsa düzeltilmesi, yeni bir bağlantı almaktan daha önemli olabilir.
          </p>
        </section>

        {/* 6. Adım */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            6. Görünürlüğü soru seti ve gerçek trafikle ölçün
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Üç grup soru hazırlayın: <strong>markalı</strong> (“X markası ne yapıyor?”), <strong>kategori</strong> (“Bu ihtiyaca hangi hizmetler uygun?”) ve <strong>karşılaştırma</strong> (“X ile Y arasında nasıl seçim yapılır?”). Her grupta Türkçe ve hedeflediğiniz diğer dillerde sorular deneyin. Sonuçları tarih, model, arama durumu, ülke, marka anılması, kaynak bağlantısı ve bilgi doğruluğuyla kaydedin.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Analitikte ChatGPT'den gelen yönlendirme trafiğine ayrıca bakın. OpenAI, ChatGPT arama bağlantılarında <code>utm_source=chatgpt.com</code> parametresinin yer aldığını belirtiyor. Trafik yükseldiğinde hangi sayfaya ve hangi eyleme dönüştüğünü inceleyin; “bir yanıtta adımız geçti” raporunu tek başarı ölçüsü yapmayın.
          </p>
        </section>

        {/* 7. Adım */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            7. Eksik kalan yeri doğru hizmete bağlayın
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            Tarama engeli varsa teknik düzeltme; marka tanımı zayıfsa kurumsal içerik; karar sorularında içerik boşluğu varsa rehber üretimi; yanlış bilgi varsa kaynak düzeltmesi gerekir. Bunların hepsine aynı “GEO paketi” cevabını vermek yerine <a href="/blog/markam-chatgptde-neden-gorunmuyor/" style={{ color: 'var(--chat-green)', fontWeight: 600 }}>12 neden kontrol listesini</a> kullanın ve <a href="/yapay-zeka-gorunurluk-analizi/" style={{ color: 'var(--chat-green)', fontWeight: 600 }}>görünürlük analizinde</a> hangi soruda ne çıktığını kaydedin.
          </p>
        </section>

        {/* SSS */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Sık sorulan sorular
          </h2>
          <div className="faq-list">
            <div style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>ChatGPT'ye para ödeyip organik yanıtta ilk sıraya çıkabilir miyim?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
                Hayır. OpenAI reklamların organik cevaplardan ayrı çalıştığını ve reklamverenin cevabı şekillendiremediğini belirtiyor. Sponsorlu alanda görünmek için <a href="/chatgpt-reklam-verme/" style={{ color: 'var(--chat-green)', fontWeight: 600 }}>ChatGPT Ads rehberine</a> bakın.
              </p>
            </div>
            <div style={{ borderBottom: '1px solid var(--chat-border)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ne kadar sürede görünürüm?</h3>
              <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
                Sabit bir süre yoktur. Önce erişim ve bilgi doğruluğu kontrol edilir; ardından hedef sorularda farklı tarihlerde tekrar ölçüm yapılır. Sonuçlar sorgu ve bağlama göre değişebilir.
              </p>
            </div>
          </div>
        </section>

        {/* İlgili Bağlantılar */}
        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '1rem' }}>İlgili Rehberler ve Hizmetler</h3>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <a href="/chatgpt-reklam-verme/" style={{ background: 'var(--chat-bg-secondary)', color: 'var(--chat-green)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              Sponsorlu ChatGPT reklamı nasıl verilir? ➔
            </a>
            <a href="/blog/markam-chatgptde-neden-gorunmuyor/" style={{ background: 'var(--chat-bg-secondary)', color: 'var(--chat-green)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              12 Neden Teşhis Listesi ➔
            </a>
            <a href="/geo-yapay-zeka-gorunurlugu/" style={{ background: 'var(--chat-bg-secondary)', color: 'var(--chat-green)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              GEO Danışmanlığı ➔
            </a>
            <a href="/yapay-zeka-gorunurluk-analizi/" style={{ background: 'var(--chat-bg-secondary)', color: 'var(--chat-green)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              Canlı AI Görünürlük Testi ➔
            </a>
          </div>
        </section>

        {/* Resmî Kaynaklar */}
        <section style={{ marginBottom: '3.5rem', fontSize: '0.9rem', color: 'var(--chat-text-secondary)', borderTop: '1px solid var(--chat-border)', paddingTop: '1.5rem' }}>
          <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem' }}>Resmî Kaynaklar:</strong>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 1.8 }}>
            <li><a href="https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>OpenAI yayıncı ve geliştirici SSS</a></li>
            <li><a href="https://help.openai.com/en/articles/20001047-ads-in-chatgpt" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>OpenAI ChatGPT reklam SSS</a></li>
            <li><a href="https://help.openai.com/en/articles/20001243-advertiser-guidance-for-allowing-openai-web-crawlers" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chat-green)' }}>OpenAI reklamveren tarayıcı rehberi</a></li>
          </ul>
        </section>

        {/* CTA Box */}
        <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.8rem', color: '#ffffff' }}>
            Markanız İçin 20 Soruluk Görünürlük ve Kaynak Doğruluğu İncelemesi İsteyin
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '640px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Hedef sektörünüzdeki karar sorularını simüle edelim; OAI-SearchBot erişimini, marka tutarlılığını ve kaynak dipnot durumunuzu analiz edip raporlayalım.
          </p>
          <a className="button primary" href="/iletisim/">
            20 Soruluk Görünürlük İncelemesi İsteyin <Arrow />
          </a>
        </div>
      </div>
    </Detail>
  )
}

// ============================================================================
// YENİ REHBER: ChatGPT SEO Nedir? AI Arama ve GEO Rehberi
// ============================================================================
export function ChatGptSeoPage({ Detail, Arrow }: ArticleProps) {
  return (
    <Detail
      eyebrow="Yeni Nesil Arama Stratejisi"
      title="ChatGPT SEO Nedir? ChatGPT'de Görünür Olmak İçin SEO Nasıl Değişiyor?"
      summary="ChatGPT SEO'yu sihirli bir kod hilesi gibi değil; teknik erişilebilirlik, entity otoritesi, cevaplanabilir içerik formatları ve ölçümleme çerçevesinde öğrenin."
      cta="Sitenizin ChatGPT SEO Denetimini İsteyin"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* 30 Saniyelik Cevap */}
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '3rem', borderLeft: '4px solid var(--chat-green)' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.6rem' }}>📌 30 Saniyelik Cevap</h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, margin: 0 }}>
            “ChatGPT SEO”, geleneksel 10 mavi link sıralamasından farklı olarak büyük dil modellerinin (LLM) kullanıcıların derin ve çok adımlı sorularına doğrudan sentezlenmiş yanıt verirken <strong>web sitenizi anlamasını, referans almasını ve kaynak (citation) olarak göstermesini</strong> sağlayan optimizasyon disiplinidir (GEO). 
            Tek bir meta etiketle çözülmez; teknik taranabilirlik, marka varlığı (entity), birinci el veri ve karar odaklı içerik mimarisi gerektirir.
          </p>
        </div>

        {/* 1. Klasik SEO vs GEO / ChatGPT SEO */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Klasik SEO ile ChatGPT SEO (GEO) Arasındaki Fark
          </h2>
          <div className="table-wrap" style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--chat-border)', color: '#ffffff' }}>
                  <th style={{ padding: '0.85rem' }}>Metrik</th>
                  <th style={{ padding: '0.85rem' }}>Klasik Google SEO</th>
                  <th style={{ padding: '0.85rem', color: 'var(--chat-green)' }}>ChatGPT SEO / GEO</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--chat-text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.85rem', fontWeight: 600, color: '#ffffff' }}>Kullanıcı Sonucu</td>
                  <td style={{ padding: '0.85rem' }}>SERP listesi (10 mavi bağlantı)</td>
                  <td style={{ padding: '0.85rem' }}>Sentezlenmiş doğrudan cevap + dipnot kaynak linki</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.85rem', fontWeight: 600, color: '#ffffff' }}>Hedeflenen Birim</td>
                  <td style={{ padding: '0.85rem' }}>Anahtar kelime yoğunluğu & arama hacmi</td>
                  <td style={{ padding: '0.85rem' }}>Semantik varlık (Entity) ve problem çözme bağlamı</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--chat-border)' }}>
                  <td style={{ padding: '0.85rem', fontWeight: 600, color: '#ffffff' }}>Tarama Botu</td>
                  <td style={{ padding: '0.85rem' }}>Googlebot</td>
                  <td style={{ padding: '0.85rem' }}>OAI-SearchBot (arama için), GPTBot (model eğitimi)</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.85rem', fontWeight: 600, color: '#ffffff' }}>Başarı Kriteri</td>
                  <td style={{ padding: '0.85rem' }}>Organik Sıra (1-10)</td>
                  <td style={{ padding: '0.85rem' }}>Mention (Anılma), Citation (Alıntı), Recommendation (Tavsiye)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 2. ChatGPT Web'i Nasıl Kullanır? */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            ChatGPT Web'i Nasıl Kullanır ve Kaynak Seçer?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            ChatGPT arama motoru (SearchGPT altyapısı), kullanıcı bir güncel bilgi veya ticari karşılaştırma istediğinde web indeksinde canlı arama yapar. Model, bulunan sayfaları hızlıca okur, özetler ve en net kanıt sunan 2-3 sayfayı alıntı bağlantısı olarak cevabına iliştirir.
          </p>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            İnternette zaten onlarca sitede bulunan genel tanımları tekrarlayan sayfalar yerine; <strong>özgün tablo, net fiyat/süreç sınırları, vaka incelemeleri ve birinci el veri</strong> sunan sayfalar alıntı kazanır (Information Gain).
          </p>
        </section>

        {/* 3. İçerik Hangi Formatta Daha Kolay Alıntılanır? */}
        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Yapay Zekâların Kolay Alıntıladığı 5 İçerik Formatı
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>
            <div style={{ background: '#171717', padding: '1.2rem', borderRadius: '12px' }}>
              <span style={{ color: 'var(--chat-green)', fontWeight: 700, fontSize: '0.9rem' }}>1. 30 Saniyelik Net Tanım</span>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', margin: '0.4rem 0 0', lineHeight: 1.6 }}>Her başlığın ilk paragrafında sorunun net, doğrulanabilir 2 cümlelik cevabı.</p>
            </div>
            <div style={{ background: '#171717', padding: '1.2rem', borderRadius: '12px' }}>
              <span style={{ color: 'var(--chat-green)', fontWeight: 700, fontSize: '0.9rem' }}>2. Karşılaştırma Tabloları</span>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', margin: '0.4rem 0 0', lineHeight: 1.6 }}>Modeller tabloları hızla ayrıştırıp kullanıcıya özet çıkarabilir.</p>
            </div>
            <div style={{ background: '#171717', padding: '1.2rem', borderRadius: '12px' }}>
              <span style={{ color: 'var(--chat-green)', fontWeight: 700, fontSize: '0.9rem' }}>3. Adım Adım İşlem Listeleri</span>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', margin: '0.4rem 0 0', lineHeight: 1.6 }}>Sıralı mantık zincirleri LLM akıl yürütme motorları için ideal kaynaktır.</p>
            </div>
            <div style={{ background: '#171717', padding: '1.2rem', borderRadius: '12px' }}>
              <span style={{ color: 'var(--chat-green)', fontWeight: 700, fontSize: '0.9rem' }}>4. Tarih ve Uzman Damgası</span>
              <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.92rem', margin: '0.4rem 0 0', lineHeight: 1.6 }}>Son güncelleme tarihi ve yazar uzmanlık profili güncellik sinyalini güçlendirir.</p>
            </div>
          </div>
        </section>

        {/* 4. Schema Tek Başına Yeterli mi? */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
            Schema Tek Başına ChatGPT'de Çıkmayı Sağlar mı?
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            <strong>Hayır.</strong> Schema.org (JSON-LD) yapılandırılmış verileri, sayfadaki bilgilerin arama motoru ve LLM ayrıştırıcıları tarafından daha hatasız anlaşılmasını sağlar. Ancak zayıf, kopyalanmış veya kanıtsız bir içeriğe schema eklemek tek başına ChatGPT'de önerilmeyi sağlamaz. Schema bir sıralama hilesi değil; bilgiyi makineler için düzenleme aracıdır.
          </p>
        </section>

        {/* İlgili Sayfalar */}
        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '1rem' }}>İlgili GEO ve Görünürlük Rehberleri</h3>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <a href="/chatgptde-markam-nasil-cikar/" style={{ background: '#1f2937', color: 'var(--chat-green)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              ChatGPT'de Markam Nasıl Çıkar? ➔
            </a>
            <a href="/geo-yapay-zeka-gorunurlugu/" style={{ background: '#1f2937', color: 'var(--chat-green)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              GEO Danışmanlığı ➔
            </a>
            <a href="/blog/markam-chatgptde-neden-gorunmuyor/" style={{ background: '#1f2937', color: 'var(--chat-green)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              12 Neden Kontrol Listesi ➔
            </a>
            <a href="/yapay-zeka-gorunurluk-analizi/" style={{ background: '#1f2937', color: 'var(--chat-green)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              Canlı AI Görünürlük Testi ➔
            </a>
          </div>
        </section>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Sitenizi Yapay Zekâ Aramalarına Hazırlayalım
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '640px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Teknik bot erişiminden entity yapılandırmasına, alıntılanabilir içerik üretiminden aylık Share of Model Voice raporlamasına kadar GEO sürecinizi yönetelim.
          </p>
          <a className="button primary" href="/iletisim/">ChatGPT SEO Denetimi İsteyin <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

// ============================================================================
// YENİ REHBER: ChatGPT'de Web Sitem Neden Çıkmıyor?
// ============================================================================
export function ChatGptdeWebSitemNedenCikmiyorPage({ Detail, Arrow }: ArticleProps) {
  const diagnosticChecks = [
    { title: '1. OAI-SearchBot robots.txt veya WAF Engeli', desc: 'robots.txt dosyanızda User-agent: OAI-SearchBot engellenmiş veya Cloudflare bot koruması OpenAI IP aralıklarını blokluyor olabilir.' },
    { title: '2. noindex veya Korumalı Sayfa Etiketi', desc: 'Kritik ürün ve hizmet sayfalarında yanlışlıkla noindex meta etiketi kalmış olabilir.' },
    { title: '3. Yalnızca JavaScript ile Yüklenen İçerik (JS-Only)', desc: 'Botlar sayfayı ziyaret ettiğinde ham HTML boş dönüyorsa ve kritik içerik yalnız JS çalışınca geliyorsa metin okunamayabilir.' },
    { title: '4. Zayıf ve Belirsiz Varlık (Entity) Sinyalleri', desc: 'Markanın ne yaptığı, kime hizmet verdiği, iletişim ve şirket bilgileri tek bir net cümleyle tanımlanmamış olabilir.' },
    { title: '5. Bilgi Kazancı (Information Gain) Eksikliği', desc: 'İçerik internetteki diğer 100 sayfanın kopyasıysa, model alıntı yapmak için sizin sitenizi seçmek yerine orijinal kaynağı seçer.' },
    { title: '6. Çelişkili ve Tutarsız Kurumsal Bilgiler', desc: 'Sosyal medyada, dizinlerde ve web sitenizde farklı şirket unvanı veya farklı hizmet tanımları kullanılması güveni düşürür.' },
    { title: '7. Bağımsız 3. Taraf Doğrulama Eksikliği', desc: 'Sektörel haberlerde, bağımsız inceleme sitelerinde ve kurumsal dizinlerde marka adınızın yer almaması.' },
    { title: '8. Karar Sorularına Yanıt Veren Sayfa Bulunmaması', desc: 'Sadece ana sayfa kurup müşterilerin satın alma öncesi sorduğu fiyat, karşılaştırma ve süreç sorularına sayfa açmamak.' },
    { title: '9. Yanlış Canonical ve Yönlendirme Hataları', desc: 'Eski URL yönlendirmeleri veya sayfalar arası çakışan canonical etiketleri botların kafasını karıştırır.' },
    { title: '10. Tek Denemeyle Yanılgıya Düşmek', desc: 'LLM yanıtları olasılıksaldır. Tek bir prompt yerine farklı dillerde, ülkelerde ve bağlamlarda en az 20 soruluk test seti uygulanmalıdır.' },
  ]

  return (
    <Detail
      eyebrow="Teknik Teşhis & Kontrol Listesi"
      title="ChatGPT'de Web Sitem Neden Çıkmıyor? 10 Maddelik Teşhis Rehberi"
      summary="ChatGPT web sitemi görmüyor, şirketimi bulmuyor veya markamı önermiyor diyorsanız teknik erişimden bilgi mimarisine 10 kritik kontrolü uygulayın."
      cta="Ücretsiz Görünürlük Teşhisi Başlatın"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Kısa Doğrudan Yanıt */}
        <div style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '3rem', borderLeft: '4px solid var(--chat-green)' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.6rem' }}>📌 Kısa ve Doğrudan Teşhis</h3>
          <p style={{ color: 'var(--chat-text-secondary)', lineHeight: 1.8, margin: 0 }}>
            ChatGPT bir web sitesini "cezalandırdığı" için değil; genellikle <strong>teknik olarak tarayamadığı</strong>, <strong>markanın ne iş yaptığını net entity sinyalleriyle anlayamadığı</strong> ya da <strong>kullanıcının sorusuna yeterli özgün kanıt sunulmadığı</strong> için önermez. 
            Aşağıdaki 10 adımlık teşhis listesini sırayla kontrol ederek sorunun kaynağını belirleyebilirsiniz.
          </p>
        </div>

        {/* 10 Teşhis Adımı */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
            10 Maddelik Teşhis Kontrol Listesi
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {diagnosticChecks.map((check, idx) => (
              <div key={idx} style={{ background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '14px', padding: '1.4rem' }}>
                <h3 style={{ color: 'var(--chat-green)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>{check.title}</h3>
                <p style={{ color: 'var(--chat-text-secondary)', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>{check.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* İlgili Sayfalar */}
        <section style={{ marginBottom: '3.5rem', background: 'var(--chat-surface)', border: '1px solid var(--chat-border)', borderRadius: '16px', padding: '1.8rem' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '1rem' }}>Çözüm ve Uygulama Rehberleri</h3>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <a href="/chatgptde-markam-nasil-cikar/" style={{ background: '#1f2937', color: 'var(--chat-green)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              ChatGPT'de Markam Nasıl Çıkar? ➔
            </a>
            <a href="/chatgpt-seo/" style={{ background: '#1f2937', color: 'var(--chat-green)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              ChatGPT SEO Nedir? ➔
            </a>
            <a href="/geo-yapay-zeka-gorunurlugu/" style={{ background: '#1f2937', color: 'var(--chat-green)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              GEO Danışmanlığı ➔
            </a>
            <a href="/yapay-zeka-gorunurluk-analizi/" style={{ background: '#1f2937', color: 'var(--chat-green)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              Canlı AI Teşhis Aracı ➔
            </a>
          </div>
        </section>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2.5rem', background: 'var(--chat-surface)', borderRadius: '16px', border: '1px solid var(--chat-border)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            Web Sitenizin Neden Çıkmadığını Birlikte Teşhis Edelim
          </h2>
          <p style={{ color: 'var(--chat-text-secondary)', marginBottom: '1.8rem', maxWidth: '640px', margin: '0 auto 1.8rem', lineHeight: 1.7 }}>
            Teknik tarama loglarından marka entity haritasına kadar sitenizi LLM motorlarında analiz edelim ve adım adım eylem planını çıkaralım.
          </p>
          <a className="button primary" href="/iletisim/">Ücretsiz Görünürlük Analizi İsteyin <Arrow /></a>
        </div>
      </div>
    </Detail>
  )
}

