import { mkdir, readFile, writeFile } from 'node:fs/promises'

const pages = {
  'chatgpt-reklamlari': [
    'ChatGPT Reklam Ajansı ve Ads Yönetimi | Yapay Zekâda Reklam',
    'ChatGPT Ads hesap kurulumu, reklam grupları, context hints, açılış sayfası ve dönüşüm ölçümü için kampanya yönetimi. Hizmet kapsamını ve süreci görün.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/yapay-zekada-reklam-ajansi/">Yapay Zekada Reklam Ajansı</a> | <a href="/chatgpt-reklam-verme/">ChatGPT'de Reklam Nasıl Verilir?</a></nav>
      </header>
      <main>
        <h1>ChatGPT reklam yönetimi</h1>
        <p>ChatGPT reklamları, kullanıcıların satın alma ve araştırma kararı verdiği konuşma anlarında organik cevaptan ayrı ve sponsorlu etiketli olarak gösterilir. Hesap kurulumundan context hints optimizasyonuna, dönüşüm takibinden GEO sinerjisine kadar tüm süreci uçtan uca yönetiyoruz.</p>
        <h2>ChatGPT reklamları nedir, nerede görünür?</h2>
        <p>Sponsorlu reklamlar, konuşma ekranında model cevabının yanında veya altında açıkça 'Sponsorlu / Ad' ibaresiyle yer alır. Reklam satın almak organik yanıtı kesinlikle değiştirmez.</p>
        <h2>ChatGPT reklam ajansı olarak ne yapıyoruz?</h2>
        <h3>İşletme hesabı ve uygunluk</h3>
        <h3>Kampanya ve reklam grubu kurgusu</h3>
        <h3>Context hints ve reklam mesajı</h3>
        <h3>Açılış sayfası ve dönüşüm ölçümü</h3>
        <h2>Hesap kimin adına açılır, ödemeyi kim yapar?</h2>
        <p>Hesap ve veriler işletmenizin tüzel kişiliğine aittir. Medya bütçesi doğrudan OpenAI'ya ödenir; ajansımıza sadece yönetim bedeli ödersiniz.</p>
        <h2>İlk test ve haftalık optimizasyon</h2>
        <h2>Hangi raporları alırsınız?</h2>
        <h2>Yönetim ücreti ve medya bütçesi</h2>
        <p><a href="/blog/chatgpt-reklam-maliyeti/">ChatGPT reklam maliyeti nasıl planlanır</a> ve <a href="/blog/chatgpt-ads-context-hints/">context hints yazım örnekleri</a> sayfalarımızı inceleyin.</p>
        <h2>ChatGPT Ads hakkında sık sorulan sorular</h2>
        <div class="actions"><a href="/iletisim/">ChatGPT reklam test planı iste</a></div>
      </main>
    `
  ],
  'chatgpt-reklam-verme': [
    'ChatGPT\'de Reklam Nasıl Verilir? 2026 Güncel Rehber',
    'Türkiye\'den ChatGPT Ads Manager hesabı açma, doğrulama, kampanya, context hints, reklam ve dönüşüm ölçümünü adım adım öğrenin. Güncel kaynaklarla.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari/">ChatGPT Reklam Yönetimi</a> | <a href="/blog/turkiyeden-chatgpt-reklam-hesabi/">Türkiye Reklam Hesabı Açma</a></nav>
      </header>
      <main>
        <h1>ChatGPT'de reklam vermek: adım adım rehber</h1>
        <p>ChatGPT'de reklam vermek isteyen işletmeler için resmî OpenAI Ads Manager (ads.openai.com) panelinden kampanya kurulumuna, context hints yazımından bütçe yönetimi ve dönüşüm izlemeye kadar tüm aşamaları adım adım açıklıyoruz.</p>
        <h2>ChatGPT'de reklam vermek bugün mümkün mü?</h2>
        <p>Evet. Uygun reklamverenler ChatGPT reklamlarını OpenAI Ads Manager Beta üzerinden oluşturup yönetebilir.</p>
        <h2>Türkiye'de Ads Manager erişimi var mı?</h2>
        <p>OpenAI'ın 23 Eylül 2026 kontrol edilen güncel ülke listesinde Türkiye, uygun işletmeler için Ads Manager self servis erişimine açıktır.</p>
        <h2>Başlamadan önce gerekenler</h2>
        <h2>1. İşletme reklam hesabını oluşturun</h2>
        <h2>2. Kimlik, ödeme ve politika kontrollerini tamamlayın</h2>
        <h2>3. Kampanya hedefi ve konumları seçin</h2>
        <h2>4. Reklam grubunu ve context hints'i hazırlayın</h2>
        <h2>5. Reklamı ve açılış sayfasını ekleyin</h2>
        <h2>6. Dönüşüm ölçümünü kurun</h2>
        <h2>7. İnceleme, yayın ve optimizasyonu takip edin</h2>
        <h2>ChatGPT Ads ile organik GEO arasındaki fark</h2>
        <p><a href="/chatgpt-reklamlari/">ChatGPT Ads kurulum ve yönetim desteği</a> için ekibimizle iletişime geçebilirsiniz.</p>
        <h2>Sık sorulan sorular</h2>
      </main>
    `
  ],
  'yapay-zekada-reklam-ajansi': [
    'Yapay Zekada Reklam Ajansı | ChatGPT Ads ve AI Stratejisi',
    'ChatGPT Ads, yapay zekâ reklam stratejisi ve GEO görünürlüğü için hesap kurulumu, ölçüm, kampanya yönetimi ve raporlama. Hizmet kapsamını inceleyin.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari/">ChatGPT Reklam Yönetimi</a> | <a href="/geo-yapay-zeka-gorunurlugu/">GEO Görünürlük</a></nav>
      </header>
      <main>
        <h1>Yapay zekada reklam ajansı</h1>
        <p>Yapay zekada reklam ajansı, markanın AI destekli ortamlardaki sponsorlu reklamlarını planlayan ve ölçen uzman ekiptir. Biz ChatGPT Ads kampanyalarını, AI yanıtlarında organik görünürlüğü ve geleneksel reklam platformlarındaki AI destekli optimizasyonu birbirinden ayırarak yönetiyoruz. Böylece hangi bütçenin hangi sonuca hizmet ettiğini görebilirsiniz.</p>
        <h2>Yapay zekada reklam ajansı ne yapar?</h2>
        <p>Kanal uygunluğunu değerlendirir; hesap, kampanya, reklam mesajı, açılış sayfası ve ölçümü kurar; sonuçları nitelikli talep ve satış hedeflerine göre geliştirir.</p>
        <h2>Üç ayrı hizmetin kapsamı</h2>
        <h3>ChatGPT Ads kampanya yönetimi</h3>
        <p><a href="/chatgpt-reklamlari/">ChatGPT Ads kampanya yönetimi</a> ile konuşma anlarında sponsorlu yerleşim.</p>
        <h3>GEO ve organik AI görünürlüğü</h3>
        <p><a href="/geo-yapay-zeka-gorunurlugu/">AI yanıtlarında organik görünürlük</a> ve kaynak olma stratejisi.</p>
        <h3>AI destekli Google Ads ve Meta yönetimi</h3>
        <p>Performance Max ve Advantage+ optimizasyonu.</p>
        <h2>Sizin için hangi kanal uygundur?</h2>
        <h2>İlk 30 günde neleri teslim ediyoruz?</h2>
        <h2>Kampanya kurulumu ve ölçüm süreci</h2>
        <h2>Reklam bütçesi ile ajans hizmet bedeli nasıl ayrılır?</h2>
        <h2>Hesap sahipliği ve erişim modeli</h2>
        <h2>Ekibimiz, deneyimimiz ve kanıtlarımız</h2>
        <p>Overseas Marketing bünyesinde bağımsız AI reklam danışmanlığı.</p>
        <h2>Sık sorulan sorular</h2>
        <div class="actions"><a href="/iletisim/">Markam için ilk test planı iste</a></div>
      </main>
    `
  ],
  'blog/yapay-zekada-reklam-nasil-verilir': [
    'Yapay Zekada Reklam Nasıl Verilir? 2026 Uygulama Rehberi',
    'Yapay zekada reklam vermek için platform, hesap, hedef, bütçe, kreatif ve ölçüm adımlarını öğrenin. ChatGPT Ads ile GEO arasındaki farkı görün.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklam-verme/">ChatGPT'de Reklam Adımları</a> | <a href="/yapay-zeka-platformlarinda-reklam/">AI Reklam Platformları</a></nav>
      </header>
      <main>
        <h1>Yapay zekada reklam nasıl verilir?</h1>
        <p><strong>Kısa cevap:</strong> Yapay zekada reklam vermek için önce hangi AI ortamında gerçek bir sponsorlu reklam ürünü bulunduğunu ve işletmenizin o ürüne erişebildiğini doğrulayın. Ardından işletmenin kendi reklam hesabını kurun; hedef, bütçe, reklam mesajı ve ilgili açılış sayfasını hazırlayın. Dönüşümleri ölçerek küçük bir test kampanyasıyla başlayın. ChatGPT Ads bu sürecin bir örneğidir. AI yanıtlarında organik kaynak olarak görünmek ise GEO çalışmasıdır; reklam satın alarak organik cevabı değiştiremezsiniz.</p>
        <h2>Yapay zekada reklam vermek ne anlama gelir?</h2>
        <p>Bu ifade iki farklı iş için kullanılıyor: Birincisi ChatGPT gibi ortamlarda sponsorlu reklam yayımlamak; ikincisi Google Ads veya Meta'nın AI özelliklerini kullanmaktır.</p>
        <h2>1. Reklam verebileceğiniz platformu ve ülke erişimini doğrulayın</h2>
        <p>OpenAI'ın güncel belgelerine göre Türkiye merkezli uygun işletmeler ChatGPT Ads Manager için self servis erişim listesinde bulunuyor.</p>
        <h2>2. İş hedefini ve başarı ölçüsünü yazın</h2>
        <h2>3. İşletme hesabını ve erişimleri kurun</h2>
        <h2>4. Müşterinin karar anını ve reklam mesajını belirleyin</h2>
        <h2>5. Reklamı doğru açılış sayfasına bağlayın</h2>
        <h2>6. Bütçeyi test olarak planlayın</h2>
        <h2>7. Dönüşümleri ve talep kalitesini ölçün</h2>
        <h2>8. İlk testten sonra kampanyayı geliştirin</h2>
        <h2>ChatGPT Ads ile GEO aynı şey mi?</h2>
        <p>Hayır. Sponsorlu reklam bütçeyle satın alınır; GEO ise organik anlaşılabilirlik çalışmasıdır. Reklamveren organik cevabı satın alamaz.</p>
        <h2>Sık sorulan sorular</h2>
        <p><a href="/chatgpt-reklam-verme/">ChatGPT'de reklam vermenin adımları</a> ve <a href="/yapay-zeka-platformlarinda-reklam/">AI reklam platformlarını karşılaştırın</a>.</p>
        <div class="actions"><a href="/iletisim/">Markanız için uygun AI reklam kanalını birlikte belirleyelim</a></div>
      </main>
    `
  ],
  'yapay-zeka-platformlarinda-reklam': [
    'Yapay Zekâ Platformlarında Reklam | Kanal ve Erişim Rehberi',
    'ChatGPT ve diğer AI deneyimlerindeki sponsorlu reklam seçeneklerini, erişim durumunu ve organik görünürlükten farkını karşılaştırın.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari/">ChatGPT Ads</a> | <a href="/geo-yapay-zeka-gorunurlugu/">GEO</a></nav>
      </header>
      <main>
        <h1>Yapay zekâ platformlarında reklam</h1>
        <p>Yapay zekâ platformlarında reklam seçeneklerini, resmî ürünleri, satın alma yollarını ve ülke erişimlerini karşılaştırıyoruz.</p>
        <h2>Yapay zekâ platformunda reklam ne demektir?</h2>
        <h2>Platformları nasıl karşılaştırıyoruz?</h2>
        <h2>ChatGPT Ads</h2>
        <h2>Google'ın AI destekli arama reklamları</h2>
        <h2>Microsoft/Bing/Copilot reklam deneyimleri</h2>
        <h2>Diğer AI araçları: ürün, ülke ve satın alma erişimini doğrulama</h2>
        <h2>Hangi platformda neyi ölçebilirsiniz?</h2>
        <h2>Marka için kanal seçme kontrol listesi</h2>
        <h2>Sponsorlu reklam ve organik kaynak gösterimi farkı</h2>
      </main>
    `
  ],
  'geo-yapay-zeka-gorunurlugu': [
    'GEO Ajansı | Yapay Zekâ Aramalarında Organik Görünürlük',
    'AI yanıtlarında kaynak olma ihtimali için teknik erişim, özgün içerik, marka bilgisi ve alıntı takibi. GEO hizmetinin kapsamını ve sınırlarını görün.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/yapay-zekada-reklam-ajansi/">Yapay Zekada Reklam Ajansı</a> | <a href="/blog/chatgpt-ads-geo-farki/">ChatGPT Ads ve GEO Farkı</a></nav>
      </header>
      <main>
        <h1>GEO ve yapay zekâ aramalarında görünürlük</h1>
        <p>Generative Engine Optimization (GEO); markanızın ChatGPT, Perplexity, Gemini ve Claude gibi üretken yapay zekâ motorları tarafından anlaşılması ve organik yanıtlarda kaynak olarak gösterilmesi çalışmasıdır.</p>
        <h2>GEO nedir?</h2>
        <h2>Ücretli reklamdan farkı nedir?</h2>
        <p>Reklam satın almak yapay zekânın organik cevabını veya tavsiyesini kesinlikle değiştirmez. Belirli modelde veya soruda ilk sırada çıkma garantisi verilmez.</p>
        <h2>Teknik erişim ve indeksleme</h2>
        <h2>Kullanıcı sorularına cevap veren özgün içerik</h2>
        <h2>Marka ve şirket bilgilerinin tutarlılığı</h2>
        <h2>Birinci el kanıt ve uzmanlık</h2>
        <h2>AI kaynak gösterimini nasıl ölçüyoruz?</h2>
        <h2>İlk ay teslimatları ve sınırlar</h2>
        <h2>Sık sorulan sorular</h2>
        <div class="actions"><a href="/iletisim/">Ücretsiz GEO Analizi İsteyin</a></div>
      </main>
    `
  ],
  'chatgpt-reklam-fiyatlari': [
    'ChatGPT Reklam Fiyatları 2026: TBM, Bütçe ve Yönetim Ücreti',
    'ChatGPT reklam maliyetleri nasıl hesaplanır? TBM, CPM, minimum bütçe önerileri, ajans yönetim modelleri ve yatırım getirisi (ROAS) analizi.',
    `
      <main>
        <h1>ChatGPT Reklam Fiyatları 2026: TBM, Bütçe ve Yönetim Maliyeti</h1>
        <p>ChatGPT reklam maliyetleri açık artırma ve bağlam rekabeti esasına göre çalışır. Medya bütçesi doğrudan OpenAI'ya ödenir; ajans yönetim ücreti strateji ve optimizasyonu kapsar.</p>
        <h2>ChatGPT Reklam Maliyeti Nasıl Hesaplanır?</h2>
        <h2>Örnek Bütçe ve Kampanya Büyüklükleri Karşılaştırma Matrisi</h2>
        <h2>İlk 30-60 Günlük Pilot Test Bütçesi Neden Hayatidir?</h2>
        <h2>Sıkça Sorulan Sorular</h2>
      </main>
    `
  ],
  'chatgpt-reklamlari-turkiye': [
    'ChatGPT Reklamları Türkiye: Erişim, Kurulum ve Uygunluk Rehberi',
    'OpenAI Ads Manager Beta Türkiye durumu: Self-servis panel erişimi, tüzel kişilik, vergi ve faturalandırma gereksinimleri ve Türkçe kampanya yönetimi.',
    `
      <main>
        <h1>ChatGPT Reklamları Türkiye: Erişim, Kurulum ve Uygunluk Rehberi</h1>
        <p>23 Eylül 2026 itibarıyla Türkiye, OpenAI Ads Manager Beta programında self servis kullanılabilir ülke listesindedir. Türk şirketleri resmî vergi bilgileriyle doğrudan reklam açabilir.</p>
        <h2>Türkiye'de ChatGPT Reklamları Durumu</h2>
        <h2>Başvuru ve Hesap Kurulumu İçin Gerekenler</h2>
        <h2>Faturalandırma, Vergi ve 2 No'lu KDV Süreci</h2>
        <h2>Türkiye Pazarında Sektörel Uygunluk Matrisi</h2>
        <h2>Sıkça Sorulan Sorular</h2>
      </main>
    `
  ],
  'blog/chatgpt-reklam-maliyeti': [
    'ChatGPT Reklam Maliyeti Nasıl Hesaplanır? | Bütçe ve Ücretler',
    'ChatGPT reklam maliyetleri, medya bütçesi ve ajans yönetim ücretleri nasıl planlanır? TBM açık artırması ve test bütçesi rehberi.',
    `
      <main>
        <h1>ChatGPT reklam maliyeti nasıl hesaplanır?</h1>
        <p>ChatGPT reklam maliyetleri iki ana bileşenden oluşur: Doğrudan OpenAI Ads Manager üzerinden harcanan medya bütçesi ve ajans yönetim hizmet bedeli.</p>
        <h2>Medya bütçesi ve hizmet bedeli ayrımı</h2>
        <h2>Bütçeyi etkileyen değişkenler</h2>
        <h2>Test bütçesi nasıl kurulur?</h2>
        <h2>Toplam maliyet örneği ve varsayımlar</h2>
        <h2>Hangi metriklerle değerlendirilir?</h2>
        <h2>Teklif alırken sorulması gerekenler</h2>
        <h2>Sıkça sorulan sorular</h2>
        <p><a href="/chatgpt-reklamlari/">ChatGPT reklam yönetimi</a> hizmetimiz hakkında bilgi alın.</p>
      </main>
    `
  ],
  'blog/chatgpt-ads-geo-farki': [
    'ChatGPT Ads ve GEO Arasındaki Fark Nedir? | Sponsorlu vs Organik',
    'ChatGPT Ads ile organik GEO arasındaki temel farklar: Görünürlük, ödeme modeli, ölçüm kriterleri ve iki sistemin birlikte kullanımı.',
    `
      <main>
        <h1>ChatGPT Ads ve GEO arasındaki fark nedir?</h1>
        <p>ChatGPT Ads sponsorlu alanda bütçeyle reklam yayımlamaktır; GEO ise yapay zekânın organik yanıtlarında kaynak olarak gösterilme çalışmasıdır. Reklam satın almak organik tavsiyeyi değiştirmez.</p>
        <h2>ChatGPT Ads nedir?</h2>
        <h2>GEO nedir?</h2>
        <h2>Görünürlük ve ödeme farkı</h2>
        <h2>Kontrol ve ölçüm farkı</h2>
        <h2>Ne zaman hangisi tercih edilmeli?</h2>
        <h2>Birlikte çalışma örneği</h2>
        <h2>Sık sorulan sorular</h2>
        <p><a href="/chatgpt-reklamlari/">ChatGPT Ads yönetimi</a> veya <a href="/geo-yapay-zeka-gorunurlugu/">GEO hizmetimizi</a> inceleyin.</p>
      </main>
    `
  ],
  'blog/chatgpt-ads-context-hints': [
    'ChatGPT Ads Context Hints Nasıl Yazılır? | Bağlam İpuçları Rehberi',
    'ChatGPT Ads kampanyalarında context hints yazımı, kullanıcı karar anları, negatif bağlam filtreleri ve sektör örnekleri.',
    `
      <main>
        <h1>ChatGPT Ads context hints nasıl yazılır?</h1>
        <p>Context hints, klasik anahtar kelimeler yerine yapay zekâya ürününüzün kimler için, hangi durumda ve hangi problem için uygun olduğunu anlatan doğal dilli bağlam ipuçlarıdır.</p>
        <h2>Context hints nedir ve nasıl çalışır?</h2>
        <h2>Ürün, kullanıcı ve durum bilgisi</h2>
        <h2>Doğal dil ilkesi</h2>
        <h2>Üç sektör için context hints örnekleri</h2>
        <h2>Zayıf ve güçlü örnek karşılaştırması</h2>
        <h2>Açılış sayfasıyla tutarlılık</h2>
        <h2>Test ve güncelleme döngüsü</h2>
      </main>
    `
  ],
  'blog/chatgpt-reklam-olcumu': [
    'ChatGPT Reklam Performansı Nasıl Ölçülür? | CAPI, Pixel & CRM',
    'ChatGPT Ads dönüşüm takibi, Pixel ve Conversions API entegrasyonu, UTM şablonları ve nitelikli talep kalitesinin ölçümü.',
    `
      <main>
        <h1>ChatGPT reklam performansı nasıl ölçülür?</h1>
        <p>ChatGPT reklamlarında başarı yalnızca tıklama sayısıyla değil; form kalitesi, nitelikli lead ve CRM satış dönüşüm oranıyla ölçülür.</p>
        <h2>Kampanya öncesi başlangıç verileri</h2>
        <h2>Platform metrikleri</h2>
        <h2>UTM parametreleri</h2>
        <h2>Dönüşüm kurulumu: Pixel ve CAPI</h2>
        <h2>CRM ve nitelikli talep takibi</h2>
        <h2>Rapor şablonu ve yorumlama hataları</h2>
        <h2>Gösterimden satışa hunisi</h2>
      </main>
    `
  ],
  'blog/turkiyeden-chatgpt-reklam-hesabi': [
    'Türkiye\'den ChatGPT Reklam Hesabı Nasıl Açılır? | Kurulum Rehberi',
    'Türkiye merkezli işletmeler için OpenAI Ads Manager hesabı açma, tüzel kişilik doğrulaması, vergilendirme ve fatura süreci.',
    `
      <main>
        <h1>Türkiye'den ChatGPT reklam hesabı nasıl açılır?</h1>
        <p>Türkiye'deki işletmelerin OpenAI Ads Manager Beta üzerinden hesap açma, şirket doğrulama, ajans daveti ve fatura süreçleri rehberi. Son kontrol: 23 Eylül 2026.</p>
        <h2>Türkiye'de erişim durumu</h2>
        <h2>Kimler hesap açabilir?</h2>
        <h2>İşletme bilgilerini hazırlama</h2>
        <h2>Hesap ve ödeme kurulumu</h2>
        <h2>Ajansa erişim verme</h2>
        <h2>Kampanya öncesi kontroller</h2>
        <h2>Sık yapılan hatalar</h2>
        <h2>Güncel kaynaklar</h2>
      </main>
    `
  ],
  'yapay-zeka-ile-reklam-uretimi': [
    'Yapay Zekâ ile Reklam Üretimi | AI Kreatif Ajansı',
    'AI destekli reklam metni, görsel, kısa video ve kreatif varyasyon üretimi. Marka dili, insan kontrolü ve performans testi.',
    `
      <main>
        <h1>Yapay Zekâ ile Reklam Üretimi</h1>
        <p>Yapay zekâyı tek tuşla sıradan içerik üretmek için değil; güçlü bir stratejiyi farklı karar bağlamlarında insan denetimiyle test etmek için kullanıyoruz.</p>
        <h2>Strateji ve Hipotez</h2>
        <h2>Gerçek Varyasyon</h2>
        <h2>İnsan Denetimi</h2>
        <h2>Performans Döngüsü</h2>
      </main>
    `
  ],
  'hizmetler/yapay-zeka-google-ads': [
    'Yapay Zekâ ile Google Ads Yönetimi | AI Reklam Ajansı',
    'Performance Max, Akıllı Teklif, dönüşüm ölçümü ve AI destekli kreatif testleriyle Google Ads kampanyalarınızı yönetin.',
    `
      <main>
        <h1>Yapay Zekâ ile Google Ads Yönetimi</h1>
        <p>Performance Max ve Akıllı Teklif algoritmalarını iş veriniz ve birinci taraf dönüşüm sinyallerinizle besleyerek maksimum kârlılık sağlıyoruz.</p>
        <h2>Performance Max ve Akıllı Teklif</h2>
        <h2>Dönüşüm Verisi ve Ölçüm</h2>
        <h2>Feed ve Kreatif Kalitesi</h2>
        <h2>Deney Tasarımı ve ROAS/CPL</h2>
      </main>
    `
  ],
  'hizmetler/meta-reklam': [
    'Yapay Zekâ Destekli Meta Reklam Yönetimi',
    'Facebook ve Instagram için Advantage+, kreatif varyasyon, Pixel ve Conversions API odaklı Meta reklam yönetimi.',
    `
      <main>
        <h1>Yapay Zekâ Destekli Meta Reklam Yönetimi</h1>
        <p>Advantage+ kampanyalarını, gelişmiş piksel sinyallerini ve dinamik kreatif testlerini satış odaklı yönetiyoruz.</p>
        <h2>Advantage+ Kampanyaları</h2>
        <h2>Pixel ve Conversions API</h2>
        <h2>Kreatif Test Sistemi</h2>
        <h2>Kitle ve Katalog Yönetimi</h2>
      </main>
    `
  ],
  'hizmetler/sosyal-medya-reklami': [
    'Yapay Zekâ ile Sosyal Medya Reklamı',
    'AI destekli hedef kitle araştırması, reklam kreatifi, kanal planı ve performans analiziyle sosyal medya reklam yönetimi.',
    `<main><h1>Yapay Zekâ ile Sosyal Medya Reklamı</h1><p>Sosyal medya kanallarında AI destekli kreatif ve hedefleme stratejileri.</p></main>`
  ],
  'hizmetler/reklam-filmi-video': [
    'Yapay Zekâ Reklam Filmi ve Video Üretimi',
    'AI destekli senaryo, storyboard, görsel, ses ve kurgu süreçleriyle marka kontrollü reklam filmi ve kısa video üretimi.',
    `<main><h1>Yapay Zekâ Reklam Filmi ve Video Üretimi</h1><p>Marka kontrollü profesyonel video ve kreatif prodüksiyonu.</p></main>`
  ],
  'hizmetler/urun-gorseli': [
    'Yapay Zekâ ile Ürün Görseli Üretimi',
    'E-ticaret, katalog ve reklam kampanyaları için ürün doğruluğunu koruyan AI destekli ürün görselleri üretin.',
    `<main><h1>Yapay Zekâ ile Ürün Görseli Üretimi</h1><p>E-ticaret için gerçekçi ve marka uyumlu ürün görselleri.</p></main>`
  ],
  'hizmetler/chatbot': [
    'Yapay Zekâ Chatbot Kurulumu | AI Asistan',
    'Müşteri sorularını yanıtlayan, doğru hizmete yönlendiren ve gerektiğinde insana aktaran yapay zekâ chatbot kurulumu.',
    `<main><h1>Yapay Zekâ Chatbot Kurulumu</h1><p>Web siteniz için akıllı müşteri asistanı ve satış chatbotu.</p></main>`
  ],
  'blog/yapay-zeka-ile-reklam-verme-nasil-yapilir': [
    'Yapay Zekâ ile Reklam Verme Nasıl Yapılır?',
    'Yapay zekâ ile reklam verme adımları: hedef, ölçüm, kanal seçimi, kreatif test, bütçe ve performans optimizasyonu rehberi.',
    `<main><h1>Yapay Zekâ ile Reklam Verme Nasıl Yapılır?</h1><p>Hedef kitle modellemesi, teklif optimizasyonu ve birinci taraf veri stratejisi rehberi.</p></main>`
  ],
  'hakkimizda': [
    'Hakkımızda | Yapay Zekâda Reklam',
    'Yapay Zekâda Reklam markasının yaklaşımı, uzmanlık alanları ve şeffaf çalışma ilkeleri.',
    `<main><h1>Hakkımızda</h1><p>Yapay Zekâda Reklam, Overseas Marketing bünyesinde bağımsız yapay zekâ reklam yönetimi ve GEO danışmanlığı servisidir.</p></main>`
  ],
  'iletisim': [
    'Yapay Zekâ Reklam Danışmanlığı | İletişim',
    'Markanız için uygun AI reklam kanalını, gerekli hazırlıkları ve ilk kontrollü test planını birlikte çıkaralım.',
    `<main><h1>İletişim & Teklif</h1><p>ChatGPT reklam planınızı ve GEO görünürlük analizinizi birlikte çıkaralım.</p></main>`
  ],
  'blog': [
    'AI Reklamcılığı Kaynakları | Yapay Zekâda Reklam',
    'ChatGPT Ads, GEO, context hints, ölçümleme ve yapay zekâ reklam platformları hakkında güncel rehberler.',
    `<main><h1>AI Reklamcılığı Kaynakları</h1><p>ChatGPT Ads ve GEO üzerine güncel analizler ve rehberler.</p></main>`
  ],
  'yapay-zeka-gorunurluk-analizi': [
    'Ücretsiz Yapay Zekâ Görünürlük Analizi | GEO & LLM Testi',
    'Web sitenizin ChatGPT, Perplexity, Gemini ve Claude gibi yapay zekâ motorlarında ne kadar önerildiğini ve kaynak gösterildiğini ücretsiz analiz edin.',
    `<main><h1>Ücretsiz Yapay Zekâ Görünürlük Analizi</h1><p>Sitenizin yapay zekâ motorlarındaki görünürlük ve kaynak olma skorunu analiz edin.</p></main>`
  ],
  'gizlilik': [
    'Gizlilik Politikası | Yapay Zekâda Reklam',
    'Yapay Zekâda Reklam gizlilik politikası.',
    `<main><h1>Gizlilik Politikası</h1><p>Veri güvenliği ve gizlilik politikamız.</p></main>`
  ],
  'kvkk': [
    'KVKK Aydınlatma Metni | Yapay Zekâda Reklam',
    'Yapay Zekâda Reklam KVKK aydınlatma metni.',
    `<main><h1>KVKK Aydınlatma Metni</h1><p>Kişisel verilerin korunması kanunu aydınlatma metni.</p></main>`
  ],
  'cerez-politikasi': [
    'Çerez Politikası | Yapay Zekâda Reklam',
    'Yapay Zekâda Reklam çerez politikası.',
    `<main><h1>Çerez Politikası</h1><p>Çerez kullanım ilkelerimiz.</p></main>`
  ],
}

const source = await readFile('index.html', 'utf8')
for (const [slug, [title, description, staticHtml]] of Object.entries(pages)) {
  const url = `https://www.yapayzekadareklam.com/${slug}/`
  const isService = slug.startsWith('hizmetler/') || ['chatgpt-reklamlari','geo-yapay-zeka-gorunurlugu','yapay-zeka-ile-reklam-uretimi','yapay-zeka-platformlarinda-reklam','yapay-zekada-reklam-ajansi'].includes(slug)
  const isArticle = slug.startsWith('blog/') || ['chatgpt-reklam-verme','chatgpt-reklam-fiyatlari','chatgpt-reklamlari-turkiye'].includes(slug)
  const primarySchema = {
    '@type': isArticle ? 'Article' : isService ? 'Service' : 'WebPage',
    name: title,
    headline: isArticle ? title : undefined,
    description,
    url,
    provider: isService ? {'@id':'https://www.yapayzekadareklam.com/#organization'} : undefined,
    publisher: isArticle ? {'@id':'https://www.yapayzekadareklam.com/#organization'} : undefined,
    areaServed: isService ? 'Türkiye' : undefined,
  }
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [primarySchema, {
      '@type':'BreadcrumbList',
      itemListElement:[
        {'@type':'ListItem',position:1,name:'Ana sayfa',item:'https://www.yapayzekadareklam.com/'},
        {'@type':'ListItem',position:2,name:title,item:url},
      ],
    }],
  }
  let html = source
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/, `<meta name="description" content="${description}" />`)
    .replace('<link rel="canonical" href="https://www.yapayzekadareklam.com/" />', `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<script id="page-schema" type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="page-schema" type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .replace(/\s*<script id="faq-schema" type="application\/ld\+json">[\s\S]*?<\/script>/, '')

  // Pre-render static semantic HTML into <div id="app"> so that curl/crawlers without JS see full content and H1
  if (staticHtml) {
    html = html.replace(/<div id="app">[\s\S]*?<\/div>\s*<script/i, `<div id="app">${staticHtml.trim()}</div>\n    <script`)
  }

  await mkdir(slug, { recursive: true })
  await writeFile(`${slug}/index.html`, html)
}
console.log(`Generated ${Object.keys(pages).length} pages successfully.`)
