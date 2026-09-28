import { mkdir, readFile, writeFile } from 'node:fs/promises'

const pages = {
  'chatgpt-reklamlari': [
    'ChatGPT Reklam Ajansı ve Ads Yönetimi | Yapay Zekâda Reklam',
    'ChatGPT Ads hesap kurulumu, reklam grupları, context hints, açılış sayfası ve dönüşüm ölçümü için kampanya yönetimi. Hizmet kapsamını ve süreci görün.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/yapay-zekada-reklam-ajansi/">Yapay Zekada Reklam Ajansı</a> | <a href="/chatgpt-reklam-verme/">ChatGPT'de Reklam Nasıl Verilir?</a> | <a href="/yapay-zeka-gorunurluk-analizi/">AI Görünürlük Testi</a></nav>
      </header>
      <main>
        <h1>ChatGPT reklam yönetimi ve Ads Ajansı</h1>
        <p>ChatGPT reklamları, kullanıcıların satın alma ve araştırma kararı verdiği konuşma anlarında organik cevaptan ayrı ve sponsorlu etiketli olarak gösterilir. Hesap kurulumundan context hints optimizasyonuna, dönüşüm takibinden GEO sinerjisine kadar tüm süreci uçtan uca yönetiyoruz.</p>
        <h2>ChatGPT reklamları nedir, nerede görünür?</h2>
        <p>Sponsorlu reklamlar, konuşma ekranında model cevabının yanında veya altında açıkça 'Sponsorlu / Ad' ibaresiyle yer alır. Reklam satın almak modelin organik yanıtını veya tarafsız tavsiyesini kesinlikle değiştirmez.</p>
        <h2>ChatGPT reklam ajansı olarak ne yapıyoruz?</h2>
        <p>İşletmenizin OpenAI Ads Manager uygunluğunu doğrular, bağlam kütüphanesini (context hints) kurar, yüksek dönüşümlü açılış sayfası tasarlar ve Conversions API (CAPI) ile satışları eşleştiririz.</p>
        <h3>İşletme hesabı ve uygunluk</h3>
        <p>OpenAI Ads Manager üzerinde kurumsal doğrulama, fatura ve 2 No'lu KDV süreçlerinin eksiksiz yapılandırılması.</p>
        <h3>Kampanya ve reklam grubu kurgusu</h3>
        <p>Satın alma niyeti, coğrafi hedefleme ve bütçe optimizasyonuyla kurgulanan reklam grupları.</p>
        <h3>Context hints ve reklam mesajı</h3>
        <p>Klasik anahtar kelimeler yerine doğal dil ile kullanıcının karar anını yakalayan bağlamsal ipuçları.</p>
        <h3>Açılış sayfası ve dönüşüm ölçümü</h3>
        <p>ChatGPT in-app tarayıcısına uygun, sürtünmesiz form ve hızlı açılan özel landing page mimarisi.</p>
        <h2>Hesap kimin adına açılır, ödemeyi kim yapar?</h2>
        <p>Hesap ve veriler işletmenizin tüzel kişiliğine aittir. Medya bütçesi doğrudan OpenAI'ya ödenir; ajansımıza sadece stratejik yönetim bedeli ödersiniz.</p>
        <h2>Yönetim ücreti ve medya bütçesi</h2>
        <p><a href="/chatgpt-reklam-fiyatlari/">ChatGPT reklam fiyatları ve bütçe seviyeleri</a> ile <a href="/blog/chatgpt-reklam-maliyeti/">ChatGPT reklam maliyeti nasıl hesaplanır</a> rehberlerimizi inceleyin.</p>
        <h2>ChatGPT Ads hakkında sık sorulan sorular</h2>
        <p>ChatGPT reklamları Türkiye'de self-servis erişime açıktır. Kampanya başlatmak için <a href="/blog/chatgpt-reklam-kampanyasi-nasil-planlanir/">30 günlük test örneğimizi</a> inceleyebilirsiniz.</p>
        <div class="actions"><a href="/iletisim/">ChatGPT reklam test planı iste</a></div>
      </main>
    `
  ],
  'chatgpt-reklam-verme': [
    'ChatGPT\'de Reklam Nasıl Verilir? 2026 Güncel Rehber',
    'Türkiye\'den ChatGPT Ads Manager hesabı açma, doğrulama, kampanya, context hints, reklam ve dönüşüm ölçümünü adım adım öğrenin. Güncel kaynaklarla.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari/">ChatGPT Reklam Yönetimi</a> | <a href="/blog/turkiyeden-chatgpt-reklam-hesabi/">Türkiye Reklam Hesabı Açma</a> | <a href="/blog/yapay-zekada-reklam-nasil-verilir/">AI Reklam Verme Stratejisi</a></nav>
      </header>
      <main>
        <h1>ChatGPT'de reklam vermek: adım adım teknik rehber</h1>
        <p>ChatGPT'de reklam vermek isteyen işletmeler için resmî OpenAI Ads Manager (ads.openai.com) panelinden kampanya kurulumuna, context hints yazımından bütçe yönetimi ve dönüşüm izlemeye kadar tüm aşamaları adım adım açıklıyoruz. Stratejik kanal seçimi için <a href="/blog/yapay-zekada-reklam-nasil-verilir/">Yapay Zekada Reklam Nasıl Verilir?</a> genel rehberimize de bakabilirsiniz.</p>
        <h2>ChatGPT'de reklam vermek bugün mümkün mü?</h2>
        <p>Evet. Uygun reklamverenler ChatGPT reklamlarını OpenAI Ads Manager Beta üzerinden oluşturup yönetebilir.</p>
        <h2>Türkiye'de Ads Manager erişimi var mı?</h2>
        <p>OpenAI'ın 2026 güncel belgelerine göre Türkiye, uygun işletmeler için Ads Manager self servis erişim listesindedir.</p>
        <h2>1. İşletme reklam hesabını oluşturun</h2>
        <p>ads.openai.com üzerinden kurumsal e-posta ile kayıt olun ve işletme tüzel kimliğini tanımlayın.</p>
        <h2>2. Kimlik, ödeme ve politika kontrollerini tamamlayın</h2>
        <p>Vergi dairesi, vergi numarası ve 2 No'lu KDV süreçlerine uygun kurumsal ödeme kartı tanımlanır.</p>
        <h2>3. Kampanya hedefi ve konumları seçin</h2>
        <p>Tıklama, potansiyel müşteri veya doğrudan satış hedeflerine göre coğrafi ülke kısıtlamaları belirlenir.</p>
        <h2>4. Reklam grubunu ve context hints'i hazırlayın</h2>
        <p>Kullanıcının hangi problem durumunda reklamınızı görmesi gerektiğini belirten doğal dilli bağlam kuralları oluşturun. Ayrıntılar için <a href="/blog/chatgpt-ads-context-hints/">Context Hints rehberimizi</a> inceleyin.</p>
        <h2>5. Reklamı ve açılış sayfasını ekleyin</h2>
        <p>Reklam metni karar anına hitap etmeli; açılış sayfası kullanıcının sorusuna anında yanıt vermelidir. <a href="/blog/chatgpt-reklamlari-icin-acilis-sayfasi-kontrol-listesi/">Açılış sayfası kontrol listesini</a> mutlaka uygulayın.</p>
        <h2>6. Dönüşüm ölçümünü kurun</h2>
        <p>Conversions API ve Pixel ile satın alma ve form doldurma olaylarını eşleştirin.</p>
        <h2>ChatGPT Ads ile organik GEO arasındaki fark</h2>
        <p>Sponsorlu reklam satın almak modelin organik yanıtını değiştirmez. Organik görünürlük için <a href="/geo-yapay-zeka-gorunurlugu/">GEO danışmanlığımızı</a> inceleyin.</p>
      </main>
    `
  ],
  'yapay-zekada-reklam-ajansi': [
    'Yapay Zekada Reklam Ajansı | ChatGPT Ads ve AI Stratejisi',
    'ChatGPT Ads, yapay zekâ reklam stratejisi ve GEO görünürlüğü için hesap kurulumu, ölçüm, kampanya yönetimi ve raporlama. Hizmet kapsamını inceleyin.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari/">ChatGPT Reklam Yönetimi</a> | <a href="/geo-yapay-zeka-gorunurlugu/">GEO Görünürlük</a> | <a href="/yapay-zeka-gorunurluk-analizi/">Canlı AI Testi</a></nav>
      </header>
      <main>
        <h1>Yapay zekada reklam ajansı</h1>
        <p>Yapay zekada reklam ajansı, markanın AI destekli ortamlardaki sponsorlu reklamlarını planlayan ve ölçen uzman ekiptir. Biz ChatGPT Ads kampanyalarını, AI yanıtlarında organik görünürlüğü (GEO) ve geleneksel reklam platformlarındaki AI optimizasyonunu birbirinden ayırarak yönetiyoruz. Böylece hangi bütçenin hangi sonuca hizmet ettiğini şeffaf olarak görürsünüz.</p>
        <h2>Yapay zekada reklam ajansı ne yapar?</h2>
        <p>Kanal uygunluğunu değerlendirir; hesap, kampanya, reklam mesajı, açılış sayfası ve ölçümü kurar; sonuçları nitelikli talep ve satış hedeflerine göre geliştirir.</p>
        <h2>Üç ayrı uzmanlık alanımız</h2>
        <h3>1. ChatGPT Ads kampanya yönetimi</h3>
        <p><a href="/chatgpt-reklamlari/">ChatGPT Ads kampanya yönetimi</a> ile konuşma anlarında sponsorlu yerleşim.</p>
        <h3>2. GEO ve organik AI görünürlüğü</h3>
        <p><a href="/geo-yapay-zeka-gorunurlugu/">AI yanıtlarında organik görünürlük</a> ve kaynak olma stratejisi.</p>
        <h3>3. AI destekli Google Ads ve Meta yönetimi</h3>
        <p><a href="/hizmetler/yapay-zeka-google-ads/">Google Ads PMax</a> ve <a href="/hizmetler/meta-reklam/">Meta Advantage+</a> optimizasyonu.</p>
        <h2>İlk 30 günde neleri teslim ediyoruz?</h2>
        <p>Hesap kurulumu, context hints kütüphanesi, CAPI dönüşüm takibi ve haftalık şeffaf raporlama.</p>
        <div class="actions"><a href="/iletisim/">Markam için ilk test planı iste</a></div>
      </main>
    `
  ],
  'blog/yapay-zekada-reklam-nasil-verilir': [
    'Yapay Zekada Reklam Nasıl Verilir? 2026 Uygulama Rehberi',
    'Yapay zekada reklam vermek için platform, hesap, hedef, bütçe, kreatif ve ölçüm adımlarını öğrenin. ChatGPT Ads ile GEO arasındaki farkı görün.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklam-verme/">ChatGPT'de Reklam Adımları</a> | <a href="/yapay-zeka-platformlarinda-reklam/">AI Reklam Platformları</a> | <a href="/blog/">Bilgi Merkezi</a></nav>
      </header>
      <main>
        <h1>Yapay zekada reklam nasıl verilir? Stratejik Karar Rehberi</h1>
        <p><strong>Kısa cevap:</strong> Yapay zekada reklam vermek için önce hangi AI ortamında gerçek bir sponsorlu reklam ürünü bulunduğunu ve işletmenizin o ürüne erişebildiğini doğrulayın. Doğrudan OpenAI Ads Manager panelinden kurulum yapmak istiyorsanız <a href="/chatgpt-reklam-verme/">ChatGPT'de Reklam Verme Adımları</a> sayfamızı inceleyin. AI yanıtlarında organik kaynak olarak görünmek ise GEO çalışmasıdır; reklam satın alarak organik cevabı değiştiremezsiniz.</p>
        <h2>Yapay zekada reklam vermek ne anlama gelir?</h2>
        <p>Bu ifade iki farklı iş için kullanılır: Birincisi ChatGPT gibi diyalog platformlarında sponsorlu reklam yayımlamak; ikincisi Google Ads veya Meta'nın AI algoritmalarını kullanmaktır.</p>
        <h2>1. Platform ve ülke erişimini doğrulayın</h2>
        <p>OpenAI'ın güncel belgelerine göre Türkiye merkezli uygun işletmeler ChatGPT Ads Manager için self servis erişim listesindedir.</p>
        <h2>2. Karar anını ve context hints'i belirleyin</h2>
        <p>Kullanıcının satın alma araştırması yaptığı konuşma anları doğal dille tanımlanır.</p>
        <h2>3. Reklamı doğru açılış sayfasına bağlayın</h2>
        <p>Kullanıcının diyalogdaki problemine anında cevap veren şeffaf bir landing page kullanılır.</p>
        <h2>ChatGPT Ads ile GEO aynı şey mi?</h2>
        <p>Hayır. Sponsorlu reklam bütçeyle satın alınır; GEO ise organik anlaşılabilirlik çalışmasıdır. Detaylı ayrım için <a href="/blog/chatgpt-ads-geo-farki/">ChatGPT Ads ve GEO Farkı</a> yazımızı okuyun.</p>
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
        <h2>ChatGPT Ads</h2>
        <p>OpenAI Ads Manager üzerinden diyalog ekranlarında gösterilen sponsorlu reklamlar. <a href="/chatgpt-reklamlari/">ChatGPT Ads Yönetimi</a> sayfamızdan detayları inceleyin.</p>
        <h2>Google AI Mode & Overviews</h2>
        <p>Google Arama sonuçlarında yapay zekâ özetleri altında gösterilen reklamlar. Google Ads altyapısıyla çalışır.</p>
        <h2>Microsoft Copilot</h2>
        <p>Microsoft Advertising üzerinden sunulan AI sohbet içi sponsorlu bağlantılar.</p>
        <h2>Perplexity & Organik AI Arama</h2>
        <p>Perplexity üzerinde görünürlük için taranabilirlik ve kaynak olma optimizasyonu esastır. <a href="/geo-yapay-zeka-gorunurlugu/">GEO hizmetimize</a> göz atın.</p>
      </main>
    `
  ],
  'geo-yapay-zeka-gorunurlugu': [
    'GEO Ajansı | Yapay Zekâ Aramalarında Organik Görünürlük',
    'AI yanıtlarında kaynak olma ihtimali için teknik erişim, özgün içerik, marka bilgisi ve alıntı takibi. GEO hizmetinin kapsamını ve sınırlarını görün.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/yapay-zekada-reklam-ajansi/">Yapay Zekada Reklam Ajansı</a> | <a href="/yapay-zeka-gorunurluk-analizi/">Canlı Görünürlük Testi</a> | <a href="/blog/chatgpt-ads-geo-farki/">ChatGPT Ads ve GEO Farkı</a></nav>
      </header>
      <main>
        <h1>GEO ve yapay zekâ aramalarında organik görünürlük</h1>
        <p>Generative Engine Optimization (GEO); markanızın ChatGPT, Perplexity, Gemini ve Claude gibi üretken yapay zekâ motorları tarafından anlaşılması ve organik yanıtlarda kaynak olarak gösterilmesi çalışmasıdır.</p>
        <h2>GEO nedir?</h2>
        <p>Kullanıcıların karmaşık sektör ve ürün sorularında büyük dil modellerinin (LLM) sentezlediği doğrudan yanıtlar içerisinde markanızın güvenilir kaynak ve tavsiye olarak yer almasını sağlayan stratejidir.</p>
        <h2>Markam ChatGPT'de neden önerilmiyor?</h2>
        <p>En sık karşılaşılan üç neden: 1) OAI-SearchBot gibi botların robots.txt veya WAF tarafından engellenmesi, 2) Marka varlığının (entity) bağımsız 3. taraf kaynaklarda yetersiz kalması, 3) Karar vericiye doğrudan yanıt veren bilgi kazancı (information gain) eksikliğidir. Ayrıntılar için <a href="/blog/markam-chatgptde-neden-gorunmuyor/">12 Neden ve Kontrol Listesi</a> yazımızı inceleyin.</p>
        <h2>Hangi sorularda kaynak gösteriliyorum?</h2>
        <p>Yapay zekâ görünürlüğü üç kademede ölçülür: Marka anılması (Mention), tıklanabilir dipnot bağlantısı (Citation) ve doğrudan problem çözümü olarak tavsiye edilme (Recommendation). Metodoloji için <a href="/blog/geo-performansi-nasil-olculur/">GEO Performansı Nasıl Ölçülür?</a> sayfamıza bakın.</p>
        <h2>Rakiplerle karşılaştırma ve AI Ses Payı (SoMV)</h2>
        <p>Sektörel soru setleriyle yapılan testlerde markanızın modeller tarafından rakiplere kıyasla ne sıklıkla ve hangi tonda (sentiment) önerildiğini ölçeriz.</p>
        <h2>Ücretli reklamdan farkı nedir?</h2>
        <p>Reklam satın almak yapay zekânın organik cevabını veya tavsiyesini kesinlikle değiştirmez. Belirli modelde veya soruda ilk sırada çıkma garantisi verilmez.</p>
        <div class="actions">
          <a href="/yapay-zeka-gorunurluk-analizi/">⚡ Canlı AI Teşhis Konsolunu Başlat</a>
          <a href="/iletisim/">Ücretsiz GEO Analizi İsteyin</a>
        </div>
      </main>
    `
  ],
  'chatgpt-reklam-fiyatlari': [
    'ChatGPT Reklam Fiyatları 2026: TBM, Bütçe ve Yönetim Ücreti',
    'ChatGPT reklam maliyetleri nasıl hesaplanır? TBM, CPM, minimum bütçe önerileri, ajans yönetim modelleri ve yatırım getirisi (ROAS) analizi.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari/">ChatGPT Reklam Yönetimi</a> | <a href="/blog/chatgpt-reklam-maliyeti/">Maliyet Hesaplama Rehberi</a> | <a href="/iletisim/">Teklif Alın</a></nav>
      </header>
      <main>
        <h1>ChatGPT Reklam Fiyatları 2026: TBM, Bütçe ve Yönetim Maliyeti</h1>
        <p>ChatGPT reklam maliyetleri, sabit bir fiyat listesine dayanmaz; Google ve Meta reklamlarında olduğu gibi <strong>açık artırma (auction-based)</strong> ve bağlam rekabeti esasına göre çalışır. Medya bütçesi doğrudan OpenAI'ya ödenir; ajans yönetim ücreti strateji ve optimizasyonu kapsar. Detaylı kampanya simülasyonu için <a href="/blog/chatgpt-reklam-maliyeti/">ChatGPT Reklam Maliyeti Nasıl Hesaplanır?</a> rehberimize bakın.</p>
        <h2>ChatGPT Reklam Maliyeti Nasıl Hesaplanır?</h2>
        <p>OpenAI Yardım Merkezi güncel belgelerine göre reklamverenlere hem <strong>bin gösterim (CPM)</strong> hem de <strong>geçerli tıklama (CPC)</strong> üzerinden açık artırma modelleri sunulmaktadır. Maliyetler sadece TBM'ye indirgenmemeli, bağlam derinliğine göre planlanmalıdır.</p>
        <h2>Örnek Bütçe ve Kampanya Büyüklükleri Karşılaştırma Matrisi</h2>
        <p>Kontrollü Pilot Test ($1,500 - $3,000 / ay): Temel bağlam testi ve ilk lead maliyeti tespiti.<br />
        Büyüme & Ölçeklenme ($5,000+ / ay): Çoklu bağlam segmentasyonu ve CAPI satış eşleştirmesi.<br />
        Kurumsal & B2B SaaS ($15,000+ / ay): Uluslararası pazar ve çok dilli context hints stratejisi.</p>
        <h2>İlk 30-60 Günlük Pilot Test Bütçesi Neden Hayatidir?</h2>
        <p>Yapay zekâ modellerinin bağlam öğrenme süreci boyunca hangi context hint ifadelerinin en kaliteli potansiyel müşteriyi çektiğini matematiksel olarak kanıtlamak için kontrollü bir test bütçesi şarttır.</p>
        <h2>Sıkça Sorulan Sorular</h2>
        <p>Medya bütçesi doğrudan kendi kurumsal kartınızdan OpenAI'ya ödenir. Ajansımıza ise kurulum, context hints kütüphanesi ve optimizasyon bedeli ödenir.</p>
        <div class="actions"><a href="/iletisim/">Sektörünüze Özel Bütçe Senaryosu İsteyin</a></div>
      </main>
    `
  ],
  'chatgpt-reklamlari-turkiye': [
    'ChatGPT Reklamları Türkiye: Erişim, Kurulum ve Uygunluk Rehberi',
    'OpenAI Ads Manager Beta Türkiye durumu: Self-servis panel erişimi, tüzel kişilik, vergi ve faturalandırma gereksinimleri ve Türkçe kampanya yönetimi.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklam-verme/">Reklam Kurulum Rehberi</a> | <a href="/blog/turkiyeden-chatgpt-reklam-hesabi/">Türkiye Hesap Açma</a></nav>
      </header>
      <main>
        <h1>ChatGPT Reklamları Türkiye: Erişim, Kurulum ve Uygunluk Rehberi</h1>
        <p>2026 yılı itibarıyla Türkiye, OpenAI Ads Manager Beta programında self servis kullanılabilir ülke listesindedir. Türk şirketleri resmî vergi bilgileriyle doğrudan reklam açabilir.</p>
        <h2>Türkiye'de ChatGPT Reklamları Durumu</h2>
        <p>Türkçe dil modellerinde diyalog bağlamına uygun reklam yerleşimleri yayınlanabilmektedir.</p>
        <h2>Başvuru ve Hesap Kurulumu İçin Gerekenler</h2>
        <p>Vergi levhası, şirket tüzel kişiliği, kurumsal ödeme kartı ve OpenAI reklam politikalarına uygunluk.</p>
        <h2>Faturalandırma ve 2 No'lu KDV</h2>
        <p>Yurt dışı kaynaklı reklam hizmeti faturası için Türkiye mevzuatına uygun 2 No'lu KDV beyannamesi süreçleri işletilir.</p>
        <div class="actions"><a href="/iletisim/">Türkiye Kampanyanızı Başlatın</a></div>
      </main>
    `
  ],
  'blog/chatgpt-reklam-maliyeti': [
    'ChatGPT Reklam Maliyeti Nasıl Hesaplanır? | Bütçe ve Ücretler',
    'ChatGPT reklam maliyetleri, medya bütçesi ve ajans yönetim ücretleri nasıl planlanır? TBM açık artırması ve test bütçesi rehberi.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklam-fiyatlari/">Fiyat Matrisi</a> | <a href="/chatgpt-reklamlari/">ChatGPT Reklam Ajansı</a></nav>
      </header>
      <main>
        <h1>ChatGPT reklam maliyeti nasıl hesaplanır?</h1>
        <p>ChatGPT reklam maliyetleri iki ana bileşenden oluşur: Doğrudan OpenAI Ads Manager üzerinden harcanan medya bütçesi ve ajans yönetim hizmet bedeli. 2026 güncel fiyat seviyeleri ve bütçe matrisi için <a href="/chatgpt-reklam-fiyatlari/">ChatGPT Reklam Fiyatları</a> sayfamızı inceleyin.</p>
        <h2>Medya bütçesi ve hizmet bedeli ayrımı</h2>
        <p>Medya bütçesi OpenAI'ya ödenen CPM ve CPC tutarlarıdır; hizmet bedeli context hints, CAPI ve haftalık optimizasyon danışmanlığıdır.</p>
        <h2>Bütçeyi etkileyen değişkenler</h2>
        <p>Sektör rekabeti, coğrafi hedefleme ve kullanıcının satın alma niyetinin derinliği maliyetleri belirler.</p>
        <h2>Test bütçesi nasıl kurulur?</h2>
        <p>İlk 30 gün için kontrollü bir öğrenme bütçesiyle başlayıp kazanan bağlamlar ölçeklenir.</p>
      </main>
    `
  ],
  'blog/chatgpt-ads-geo-farki': [
    'ChatGPT Ads ve GEO Arasındaki Fark Nedir? | Sponsorlu vs Organik',
    'ChatGPT Ads ile organik GEO arasındaki temel farklar: Görünürlük, ödeme modeli, ölçüm kriterleri ve iki sistemin birlikte kullanımı.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari/">ChatGPT Ads</a> | <a href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmeti</a></nav>
      </header>
      <main>
        <h1>ChatGPT Ads ve GEO arasındaki fark nedir?</h1>
        <p>ChatGPT Ads sponsorlu alanda bütçeyle reklam yayımlamaktır; GEO ise yapay zekânın organik yanıtlarında kaynak olarak gösterilme çalışmasıdır. Reklam satın almak organik tavsiyeyi kesinlikle değiştirmez.</p>
        <h2>Görünürlük ve ödeme farkı</h2>
        <p>ChatGPT Ads açık artırma usulüyle ücretlendirilir; GEO ise teknik erişim, varlık netliği ve özgün içerik çalışmasıdır.</p>
        <h2>Birlikte çalışma sinerjisi</h2>
        <p>Kısa vadeli sponsorlu dönüşümler için ChatGPT Ads; uzun vadeli ve kalıcı güvenilirlik için GEO birlikte yürütülür.</p>
      </main>
    `
  ],
  'blog/chatgpt-ads-context-hints': [
    'ChatGPT Ads Context Hints Nasıl Yazılır? | Bağlam İpuçları Rehberi',
    'ChatGPT Ads kampanyalarında context hints yazımı, kullanıcı karar anları, negatif bağlam filtreleri ve sektör örnekleri.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklam-verme/">Reklam Verme Adımları</a> | <a href="/chatgpt-reklamlari/">ChatGPT Ads Ajansı</a></nav>
      </header>
      <main>
        <h1>ChatGPT Ads context hints nasıl yazılır?</h1>
        <p>Context hints, klasik anahtar kelimeler yerine yapay zekâya ürününüzün kimler için, hangi durumda ve hangi problem için uygun olduğunu anlatan doğal dilli bağlam ipuçlarıdır.</p>
        <h2>Context hints nedir ve nasıl çalışır?</h2>
        <p>Kullanıcının diyalog geçmişi ve karar anı semantik benzerlik algoritmalarıyla analiz edilerek reklamla eşleştirilir.</p>
        <h2>Açılış sayfasıyla tutarlılık</h2>
        <p>Bağlam ipucunda vadedilen çözümün açılış sayfasının ilk ekranında yer alması şarttır. <a href="/blog/chatgpt-reklamlari-icin-acilis-sayfasi-kontrol-listesi/">Açılış Sayfası Kontrol Listesi</a> yazımızı inceleyin.</p>
      </main>
    `
  ],
  'blog/chatgpt-reklam-olcumu': [
    'ChatGPT Reklam Performansı Nasıl Ölçülür? | CAPI, Pixel & CRM',
    'ChatGPT Ads dönüşüm takibi, Pixel ve Conversions API entegrasyonu, UTM şablonları ve nitelikli talep kalitesinin ölçümü.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari/">ChatGPT Reklam Yönetimi</a> | <a href="/blog/chatgpt-reklam-kampanyasi-nasil-planlanir/">Kampanya Planlama</a></nav>
      </header>
      <main>
        <h1>ChatGPT reklam performansı nasıl ölçülür?</h1>
        <p>ChatGPT reklamlarında başarı yalnızca tıklama sayısıyla değil; form kalitesi, nitelikli lead ve CRM satış dönüşüm oranıyla ölçülür.</p>
        <h2>Dönüşüm kurulumu: Pixel ve CAPI</h2>
        <p>OpenAI Conversions API (CAPI) ve sunucu taraflı izleme ile veri kaybı önlenir.</p>
        <h2>Gösterimden satışa hunisi</h2>
        <p>Gösterim, tıklama, form doldurma ve satış aşamalarının şeffaf analizi.</p>
      </main>
    `
  ],
  'blog/turkiyeden-chatgpt-reklam-hesabi': [
    'Türkiye\'den ChatGPT Reklam Hesabı Nasıl Açılır? | Kurulum Rehberi',
    'Türkiye merkezli işletmeler için OpenAI Ads Manager hesabı açma, tüzel kişilik doğrulaması, vergilendirme ve fatura süreci.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari-turkiye/">Türkiye Pazarı</a> | <a href="/chatgpt-reklam-verme/">Adım Adım Rehber</a></nav>
      </header>
      <main>
        <h1>Türkiye'den ChatGPT reklam hesabı nasıl açılır?</h1>
        <p>Türkiye'deki işletmelerin OpenAI Ads Manager Beta üzerinden hesap açma, şirket doğrulama, ajans daveti ve fatura süreçleri rehberi.</p>
        <h2>Türkiye'de erişim durumu</h2>
        <p>2026 yılı itibarıyla Türkiye, self servis Ads Manager erişimine açıktır.</p>
        <h2>Hesap ve ödeme kurulumu</h2>
        <p>Kurumsal kredi kartı ve vergi numarası tanımlanarak hesap doğrulanır.</p>
      </main>
    `
  ],
  'blog/markam-chatgptde-neden-gorunmuyor': [
    'Markam ChatGPT’de Neden Görünmüyor? 12 Neden ve Kontrol Listesi',
    'Sektörünüzle veya ürünlerinizle ilgili sorularda ChatGPT neden şirketinizi önermiyor? Tarama engelleri, bilgi tutarsızlıkları ve rekabet analizi kontrol listesi.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmeti</a> | <a href="/yapay-zeka-gorunurluk-analizi/">Canlı AI Testi</a> | <a href="/blog/">Bilgi Merkezi</a></nav>
      </header>
      <main>
        <h1>Markam ChatGPT’de Neden Görünmüyor? 12 Olası Neden ve Kontrol Listesi</h1>
        <p><strong>Kısa yanıt:</strong> ChatGPT bir arama motoru gibi yalnızca anahtar kelime eşleştirmez. Bir markayı önermesi için OAI-SearchBot taranabilirliği, doğrulanmış 3. taraf varlık (entity) otoritesi ve doğrudan kullanıcının karar anına cevap veren bilgi kazancı (information gain) sunmanız gerekir. Yapay zekâda kesin ilk sıra garantisi verilemez.</p>
        <h2>1. Tarama, erişim ve indeksleme sorunları</h2>
        <p>robots.txt dosyasında <code>OAI-SearchBot</code> engelinin bulunması, istemci taraflı JavaScript (SPA) içeriğinin ham HTML'de çıkmaması veya Cloudflare WAF kurallarının OpenAI botlarını engellemesi ilk nedendir.</p>
        <h2>2. Marka bilgilerindeki tutarsızlıklar ve içerik boşlukları</h2>
        <p>Farklı platformlarda tutarsız faaliyet tanımları, tarafsız haber kaynaklarının eksikliği ve yapısal veri (Schema.org) bulunmaması modelin güven skorunu düşürür.</p>
        <h2>3. Rakiplerle karşılaştırmalı görünürlük testi</h2>
        <p>Aynı prompt varyasyonlarında rakiplerin hangi kaynaklardan alıntılandığını analiz ederek eksik içerik boşlukları kapatılır.</p>
        <div class="actions">
          <a href="/yapay-zeka-gorunurluk-analizi/">⚡ Sitenizi Canlı AI Konsolunda Test Edin</a>
          <a href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmet Detayları</a>
        </div>
      </main>
    `
  ],
  'blog/chatgptde-kaynak-gosterilmek-icin-site-nasil-hazirlanir': [
    'ChatGPT’de Kaynak Olarak Gösterilmek İçin Site Nasıl Hazırlanır?',
    'OpenAI Search motorunun web sitenizi alıntılaması ve dipnot kaynak bağlantısı göstermesi için OAI-SearchBot izinleri, bilgi kazancı ve referans takibi rehberi.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/geo-yapay-zeka-gorunurlugu/">GEO Ajansı</a> | <a href="/yapay-zeka-gorunurluk-analizi/">Görünürlük Testi</a></nav>
      </header>
      <main>
        <h1>ChatGPT’de Kaynak Olarak Gösterilmek İçin Site Nasıl Hazırlanır?</h1>
        <p><strong>Kısa yanıt:</strong> ChatGPT'de kaynak gösterilmek OAI-SearchBot erişimine izin vermek, doğrudan soruya net 2 cümlelik cevaplar sunmak ve birinci el doğrulanabilir veriler paylaşmaktır. Google da özgün içerik ve sağlam SEO temellerini önerir; özel bir llms.txt zorunlu değildir.</p>
        <h2>1. OAI-SearchBot erişimi ve teknik kontroller</h2>
        <p>robots.txt dosyasında <code>User-agent: OAI-SearchBot Allow: /</code> yapılandırması doğrulanmalı ve ham HTML çıktısı temiz sunulmalıdır.</p>
        <h2>2. Kaynak gösterilmeye uygun özgün bilgi ve kanıt</h2>
        <p>Genel geçer tanımlar yerine doğrudan fiyat, süreç, sınır ve karşılaştırma tabloları sunan sayfalar alıntı kazanır.</p>
        <h2>3. Kaynak bağlantılarını ve gelen trafiği izleme</h2>
        <p>Analitik panellerinde <code>chatgpt.com / referral</code> trafiği ve dönüşüm oranları izlenmelidir.</p>
        <div class="actions"><a href="/geo-yapay-zeka-gorunurlugu/">GEO Optimizasyon Danışmanlığı İsteyin</a></div>
      </main>
    `
  ],
  'blog/geo-performansi-nasil-olculur': [
    'GEO Performansı Nasıl Ölçülür? Marka, Rakip ve Kaynak Gösterimi',
    'Yapay zekâ yanıtlarındaki görünürlüğünüzü nasıl ölçeceksiniz? Marka anılması (mention), kaynak bağlantısı (citation) ve tavsiye (recommendation) takibi.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/yapay-zeka-gorunurluk-analizi/">Canlı AI Analizi</a> | <a href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmeti</a></nav>
      </header>
      <main>
        <h1>GEO Performansı Nasıl Ölçülür? Marka, Rakip ve Kaynak Gösterimi Takibi</h1>
        <p><strong>Kısa yanıt:</strong> GEO performansı Google sıra numarasıyla değil; çoklu prompt setlerinde markanın anılma oranı (Mention), kaynak bağlantısı alma oranı (Citation) ve doğrudan tavsiye edilme sıklığı (Recommendation) ile ölçülür.</p>
        <h2>1. Ölçülecek soru seti nasıl oluşturulur?</h2>
        <p>Keşif, değerlendirme ve satın alma niyeti içeren en az 30 soruluk sektörel soru havuzu kurgulanır.</p>
        <h2>2. Anılma, kaynak bağlantısı ve tavsiye farkı</h2>
        <p>Mention temel bilinirliktir; Citation doğrudan referral trafiği getirir; Recommendation ise en yüksek dönüşümlü müşteriyi sağlar.</p>
        <h2>3. Aylık rapor ve Yapay Zekâ Ses Payı (SoMV)</h2>
        <p>ChatGPT, Perplexity ve Gemini üzerinde periyodik testlerle duyarlılık (sentiment) ve pazar payı izlenir.</p>
        <div class="actions"><a href="/yapay-zeka-gorunurluk-analizi/">Markanızın GEO Skorunu Bugün Ölçün</a></div>
      </main>
    `
  ],
  'blog/chatgpt-reklam-kampanyasi-nasil-planlanir': [
    'ChatGPT Reklam Kampanyası Nasıl Planlanır? İlk 30 Günlük Test Örneği',
    'OpenAI Ads Manager üzerinde ilk ChatGPT sponsorlu reklam kampanyasını kurgularken hedef kitle, context hints, bütçe yönetimi ve durdurma kriterleri.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari/">ChatGPT Ads Ajansı</a> | <a href="/chatgpt-reklam-fiyatlari/">Fiyat Matrisi</a></nav>
      </header>
      <main>
        <h1>ChatGPT Reklam Kampanyası Nasıl Planlanır? İlk 30 Günlük Test Örneği</h1>
        <p><strong>Kısa yanıt:</strong> İlk ChatGPT kampanyasını planlarken klasik arama kelimeleri yerine karar anındaki kullanıcı niyetine odaklanılmalı, Ads Manager self-servis erişimi doğrulanmalı ve kontrollü bir pilot test bütçesiyle ($1,500 - $3,000) başlanmalıdır.</p>
        <h2>1. Hedef, ülke ve uygunluk kontrolü</h2>
        <p>Türkiye Ads Manager self servis erişimi, kurumsal fatura bilgileri ve reklam politikaları doğrulanır.</p>
        <h2>2. Reklam grupları, mesajlar ve context hints</h2>
        <p>Kullanıcının satın alma araştırması yaptığı spesifik karar durumları doğal dille tanımlanır.</p>
        <h2>3. Test bütçesi ve durdurma kararları (Stop-Loss)</h2>
        <p>İlk 30 günde CPM ve CPC sınırları konur; hedeflenen form kalitesi yakalanamazsa ilgili bağlam revize edilir.</p>
        <div class="actions"><a href="/chatgpt-reklamlari/">ChatGPT Reklam Pilot Kampanyası Başlatın</a></div>
      </main>
    `
  ],
  'blog/chatgpt-reklamlari-icin-acilis-sayfasi-kontrol-listesi': [
    'ChatGPT Reklamları İçin Açılış Sayfası Kontrol Listesi | CRO',
    'ChatGPT diyalogundan tıklayan bilinçli ziyaretçiyi müşteriye dönüştüren landing page mimarisi: İlk ekran uyumu, güven kanıtları, mobil hız ve form sadeliği.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari/">ChatGPT Reklamları</a> | <a href="/blog/chatgpt-ads-context-hints/">Context Hints</a></nav>
      </header>
      <main>
        <h1>ChatGPT Reklamları İçin Açılış Sayfası Kontrol Listesi</h1>
        <p><strong>Kısa yanıt:</strong> ChatGPT kullanıcısı derin bir araştırma ve akıl yürütme sürecinden gelmektedir. Bu nedenle standart süslü ana sayfa yerine, sorduğu soruya direkt cevap veren, şeffaf kanıtlar sunan ve hızlı açılan özel bir landing page gereklidir.</p>
        <h2>1. Reklam vaadi ve ilk ekran uyumu (Message Match)</h2>
        <p>Context hints ile vadedilen spesifik çözüm ilk 3 saniyede H1 başlığında net görünmelidir.</p>
        <h2>2. Güven kanıtları, şeffaf fiyat ve sürtünmesiz form</h2>
        <p>Fiyat aralıkları net olmalı; formda maksimum 3-4 alan yer almalıdır.</p>
        <h2>3. Mobil deneyim ve in-app browser hızı</h2>
        <p>ChatGPT mobil webview açılış süresi 1.5 saniyenin altında olmalı; gereksiz pop-up'lardan kaçınılmalıdır.</p>
        <div class="actions"><a href="/iletisim/">Açılış Sayfası Analizi İsteyin</a></div>
      </main>
    `
  ],
  'blog/chatgpt-reklami-mi-google-ads-mi': [
    'ChatGPT Reklamı mı Google Ads mi? Hangi Hedef İçin Hangisi?',
    'Kullanıcı niyeti, bütçe dinamikleri, açık artırma modelleri ve satın alma hunisindeki rolleri açısından ChatGPT Ads ve Google Ads karşılaştırması.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari/">ChatGPT Ads</a> | <a href="/hizmetler/yapay-zeka-google-ads/">Google Ads AI</a></nav>
      </header>
      <main>
        <h1>ChatGPT Reklamı mı Google Ads mi? Hangi Hedef İçin Hangisi Seçilmeli?</h1>
        <p><strong>Kısa yanıt:</strong> Bu iki kanal birbirinin rakibi değil, tamamlayıcısıdır. Google Ads yüksek arama hacminde anlık talep yakalamak için rakipsizdir; ChatGPT Ads ise kullanıcının bir sorunu çözmek için danıştığı ve karar aşamasında olduğu diyalog bağlamında yüksek nitelikli etki yaratır.</p>
        <h2>1. Kullanıcı niyeti ve reklamın göründüğü an</h2>
        <p>Google'da hızlı arama ve link tıklama varken; ChatGPT'de çok adımlı diyalog ve derin karar anı mevcuttur.</p>
        <h2>2. Bütçe ve açık artırma karşılaştırması</h2>
        <p>Google Ads doymuş açık artırma ve TBM yarışıdır; ChatGPT Ads ise yeni, hem CPM hem CPC modelleriyle erken benimseyenlere avantaj sunar.</p>
        <h2>3. İki kanallı hibrit bütçe kurgusu</h2>
        <p>Bütçenin %70'i anlık talebi toplamak için Google Ads'e; %30'u karar anında güven ve nitelikli lead inşa etmek için ChatGPT Ads'e ayrılır.</p>
        <div class="actions"><a href="/chatgpt-reklamlari/">Kanal Stratejinizi Birlikte Belirleyelim</a></div>
      </main>
    `
  ],
  'yapay-zeka-ile-reklam-uretimi': [
    'Yapay Zekâ ile Reklam Üretimi | AI Kreatif Ajansı',
    'AI destekli reklam metni, görsel, kısa video ve kreatif varyasyon üretimi. Marka dili, insan kontrolü ve performans testi.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/hizmetler/sosyal-medya-reklami/">Sosyal Medya Reklamı</a> | <a href="/hizmetler/reklam-filmi-video/">Video Üretimi</a></nav>
      </header>
      <main>
        <h1>Yapay Zekâ ile Reklam Üretimi</h1>
        <p>Yapay zekâyı tek tuşla sıradan içerik üretmek için değil; güçlü bir stratejiyi farklı karar bağlamlarında insan denetimiyle test etmek için kullanıyoruz.</p>
        <h2>Strateji ve Hipotez</h2>
        <p>Kreatif üretime geçmeden önce hedef kitlenin satın alma motivasyonları belirlenir.</p>
        <h2>Gerçek Varyasyon ve İnsan Denetimi</h2>
        <p>Üretilen AI görselleri ve metinleri marka renkleri, tipografi ve telif hakları açısından uzman kreatif direktörler tarafından onaylanır.</p>
        <div class="actions"><a href="/iletisim/">AI Kreatif Test Planı İsteyin</a></div>
      </main>
    `
  ],
  'hizmetler/yapay-zeka-google-ads': [
    'Yapay Zekâ ile Google Ads Yönetimi | AI Reklam Ajansı',
    'Performance Max, Akıllı Teklif, dönüşüm ölçümü ve AI destekli kreatif testleriyle Google Ads kampanyalarınızı yönetin.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari/">ChatGPT Reklamları</a> | <a href="/blog/chatgpt-reklami-mi-google-ads-mi/">Google Ads vs ChatGPT Ads</a></nav>
      </header>
      <main>
        <h1>Yapay Zekâ ile Google Ads Yönetimi</h1>
        <p>Performance Max ve Akıllı Teklif algoritmalarını birinci taraf iş veriniz ve marj hedeflerinizle besleyerek maksimum kârlılık sağlıyoruz.</p>
        <h2>Performance Max ve Akıllı Teklif Optimizasyonu</h2>
        <p>Yapay zekâ algoritmalarının eksik verilerle bütçeyi boşa harcamasını önleyen negatif filtreleme ve kitle sinyalleri mimarisi.</p>
        <h2>Dönüşüm Verisi ve CAPI Entegrasyonu</h2>
        <p>Gelişmiş dönüşümler ve birinci taraf CRM verisiyle kârlı müşteri segmentasyonu.</p>
        <div class="actions"><a href="/iletisim/">Google Ads AI Denetimi İsteyin</a></div>
      </main>
    `
  ],
  'hizmetler/meta-reklam': [
    'Yapay Zekâ Destekli Meta Reklam Yönetimi',
    'Facebook ve Instagram için Advantage+, kreatif varyasyon, Pixel ve Conversions API odaklı Meta reklam yönetimi.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/hizmetler/sosyal-medya-reklami/">Sosyal Medya Reklamı</a> | <a href="/yapay-zeka-ile-reklam-uretimi/">AI Kreatif Üretimi</a></nav>
      </header>
      <main>
        <h1>Yapay Zekâ Destekli Meta Reklam Yönetimi</h1>
        <p>Advantage+ kampanyalarını, gelişmiş piksel sinyallerini ve dinamik kreatif testlerini satış odaklı yönetiyoruz.</p>
        <h2>Advantage+ ve Dinamik Kreatif Testi</h2>
        <p>Yüksek dönüşümlü varyasyonların otomatik belirlenmesi ve kârlı ölçeklenmesi.</p>
        <h2>Conversions API (CAPI) ve Veri Güvenliği</h2>
        <p>iOS kısıtlamalarını aşan sunucu taraflı doğru dönüşüm izleme mimarisi.</p>
        <div class="actions"><a href="/iletisim/">Meta Reklam Planı İsteyin</a></div>
      </main>
    `
  ],
  'hizmetler/sosyal-medya-reklami': [
    'Yapay Zekâ ile Sosyal Medya Reklamı | Instagram, LinkedIn, TikTok',
    'AI destekli hedef kitle araştırması, reklam kreatifi, kanal planı ve performans analiziyle sosyal medya reklam yönetimi.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/hizmetler/meta-reklam/">Meta Reklamları</a> | <a href="/hizmetler/reklam-filmi-video/">Video Üretimi</a></nav>
      </header>
      <main>
        <h1>Yapay Zekâ ile Sosyal Medya Reklamı</h1>
        <p>Instagram, LinkedIn ve TikTok üzerinde markanız için en uygun kitleleri yapay zekâ analizleriyle tespit ediyor, yüksek dönüşümlü kreatif varyasyonlarla reklamlarınızı yönetiyoruz.</p>
        <h2>Kanal Eşleşmesi ve Kitle Modellemesi</h2>
        <p>B2B şirketler için LinkedIn karar verici kurguları; B2C ve e-ticaret için Instagram ve TikTok dinamik kurguları.</p>
        <h2>Hızlı Kreatif Testi ve ROAS Optimizasyonu</h2>
        <p>Düşük bütçelerle çoklu başlık ve görsel testi yaparak en düşük maliyetle müşteri kazandıran kreatifleri ölçeklendiririz.</p>
        <div class="actions"><a href="/iletisim/">Sosyal Medya Reklam Teklifi Alın</a></div>
      </main>
    `
  ],
  'hizmetler/reklam-filmi-video': [
    'Yapay Zekâ Reklam Filmi ve Video Üretimi | AI Video Prodüksiyon',
    'AI destekli senaryo, storyboard, görsel, ses ve kurgu süreçleriyle marka kontrollü reklam filmi ve kısa video üretimi.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/yapay-zeka-ile-reklam-uretimi/">AI Reklam Üretimi</a> | <a href="/hizmetler/sosyal-medya-reklami/">Sosyal Medya</a></nav>
      </header>
      <main>
        <h1>Yapay Zekâ Reklam Filmi ve Video Üretimi</h1>
        <p>Senaryo, storyboard, yapay zekâ video motorları ve insan post-prodüksiyonunu birleştirerek geleneksel prodüksiyon maliyetlerini %70 düşürüyor, günlerce süren çekimleri saatlere indiriyoruz.</p>
        <h2>AI Senaryo ve Storyboard Mimarisi</h2>
        <p>Hedef kitleyi ilk 3 saniyede yakalayan, psikolojik satın alma tetikleyicilerine göre optimize edilmiş video kurguları.</p>
        <h2>İnsan Kurgusu ve Marka Kalite Kontrolü</h2>
        <p>Yapay zekâ çıktılarının amatör görünmemesi için profesyonel renk, ses miksajı ve marka tipografi denetimi.</p>
        <div class="actions"><a href="/iletisim/">Reklam Filmi Teklifi Alın</a></div>
      </main>
    `
  ],
  'hizmetler/urun-gorseli': [
    'Yapay Zekâ ile Ürün Görseli Üretimi | E-Ticaret AI Render',
    'E-ticaret, katalog ve reklam kampanyaları için ürün doğruluğunu koruyan AI destekli ürün görselleri üretin.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/yapay-zeka-ile-reklam-uretimi/">Kreatif Üretim</a> | <a href="/hizmetler/meta-reklam/">Meta Katalog Reklamları</a></nav>
      </header>
      <main>
        <h1>Yapay Zekâ ile Ürün Görseli Üretimi</h1>
        <p>E-ticaret markaları için pahalı stüdyo ve mekan kiralama zorunluluğunu ortadan kaldırıyoruz. Ürününüzün geometrisini ve dokusunu %100 koruyarak binlerce gerçekçi yaşam alanı ve kullanım sahnesi üretiyoruz.</p>
        <h2>Ürün Aslına Sadakat (High Fidelity)</h2>
        <p>Ürün etiketleri, logo ve form detayları bozulmadan profesyonel arka plan ve ışık yerleşimleri.</p>
        <h2>Katalog ve Çoklu Format Çıktısı</h2>
        <p>Amazon, Trendyol, Shopify ve Meta katalogları için hazır beyaz fon ve lifestyle görselleri.</p>
        <div class="actions"><a href="/iletisim/">Ürün Görseli Örnekleri İsteyin</a></div>
      </main>
    `
  ],
  'hizmetler/chatbot': [
    'Yapay Zekâ Chatbot Kurulumu | Kurumsal AI Asistan',
    'Müşteri sorularını yanıtlayan, doğru hizmete yönlendiren ve gerektiğinde insana aktaran yapay zekâ chatbot kurulumu.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari/">ChatGPT Ads</a> | <a href="/iletisim/">İletişim</a></nav>
      </header>
      <main>
        <h1>Yapay Zekâ Chatbot Kurulumu</h1>
        <p>Web sitenizi ziyaret eden potansiyel müşterileri 7/24 karşılayan, ürün ve hizmetleriniz hakkında hatasız bilgi veren ve satın alma niyetli talepleri CRM'inize kaydeden kurumsal AI asistanları kuruyoruz.</p>
        <h2>RAG (Retrieval-Augmented Generation) Mimarisi</h2>
        <p>Yapay zekânın halüsinasyon görmesini engelleyen, yalnızca onaylı şirket belgelerinizden cevap üreten güvenli bilgi tabanı.</p>
        <h2>İnsan Temsilciye Kesintisiz Devir</h2>
        <p>Müşteri kritik bir aşamaya geldiğinde görüşmeyi anında WhatsApp veya canlı destek temsilcisine aktaran hibrit akış.</p>
        <div class="actions"><a href="/iletisim/">Chatbot Demosu İsteyin</a></div>
      </main>
    `
  ],
  'blog/yapay-zeka-ile-reklam-verme-nasil-yapilir': [
    'Yapay Zekâ ile Reklam Verme Nasıl Yapılır? | Temel Rehber',
    'Yapay zekâ ile reklam verme adımları: hedef, ölçüm, kanal seçimi, kreatif test, bütçe ve performans optimizasyonu rehberi.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/blog/yapay-zekada-reklam-nasil-verilir/">Strateji Rehberi</a> | <a href="/chatgpt-reklam-verme/">ChatGPT Kurulumu</a></nav>
      </header>
      <main>
        <h1>Yapay Zekâ ile Reklam Verme Nasıl Yapılır?</h1>
        <p>Yapay zekâ ile reklam verme; hedef kitle modellemesi, teklif optimizasyonu ve içerik üretiminde AI araçlarını kullanırken kararları doğrulanmış iş verisiyle yönetmektir.</p>
        <h2>6 Temel Uygulama Aşaması</h2>
        <p>Hedef kriterlerinin netleşmesi, AI okunabilirliği (GEO), kanal seçimi, context hints üretimi, pilot test ve iş verisiyle ölçekleme.</p>
        <div class="actions"><a href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmetini İnceleyin</a></div>
      </main>
    `
  ],
  'hakkimizda': [
    'Hakkımızda | Yapay Zekâda Reklam',
    'Yapay Zekâda Reklam markasının yaklaşımı, uzmanlık alanları ve şeffaf çalışma ilkeleri.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/yapay-zekada-reklam-ajansi/">Ajans Hizmetleri</a> | <a href="/iletisim/">İletişim</a></nav>
      </header>
      <main>
        <h1>Hakkımızda</h1>
        <p>Yapay Zekâda Reklam, Overseas Marketing bünyesinde bağımsız yapay zekâ reklam yönetimi ve GEO danışmanlığı servisidir.</p>
        <h2>Çalışma İlkelerimiz</h2>
        <p>Sunulmayan faydayı vaat etmeyen şeffaflık, kuru anahtar kelimeler yerine gerçek kullanıcı niyeti ve tıklamanın ötesinde lead kalitesi.</p>
        <div class="actions"><a href="/iletisim/">Ekibimizle Tanışın</a></div>
      </main>
    `
  ],
  'iletisim': [
    'Yapay Zekâ Reklam Danışmanlığı | İletişim & Teklif',
    'Markanız için uygun AI reklam kanalını, gerekli hazırlıkları ve ilk kontrollü test planını birlikte çıkaralım.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari/">ChatGPT Ads</a> | <a href="/geo-yapay-zeka-gorunurlugu/">GEO</a></nav>
      </header>
      <main>
        <h1>İletişim & Teklif</h1>
        <p>ChatGPT reklam planınızı ve GEO görünürlük analizinizi birlikte çıkaralım. Uzman ekibimiz aynı iş günü içinde ön analizle dönüş yapacaktır.</p>
        <p>E-posta: info@yapayzekadareklam.com | Telefon / WhatsApp destek hatlarımız mevcuttur.</p>
      </main>
    `
  ],
  'blog': [
    'Yapay Zekâ Reklamcılığı ve GEO Bilgi Bankası | Blog',
    'ChatGPT Ads kampanya yönetimi, OpenAI Ads Manager rehberleri, Generative Engine Optimization (GEO) ve AI arama görünürlüğü üzerine derinlemesine teknik analizler.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari/">ChatGPT Reklamları</a> | <a href="/geo-yapay-zeka-gorunurlugu/">GEO Görünürlük</a> | <a href="/yapay-zeka-gorunurluk-analizi/">Canlı AI Testi</a></nav>
      </header>
      <main>
        <h1>Yapay Zekâ Reklamcılığı ve GEO Bilgi Bankası</h1>
        <p>ChatGPT Ads yönetimi, OpenAI Ads Manager rehberleri, GEO optimizasyonu ve üretken yapay zekâ pazarlaması üzerine güncel teknik makaleler.</p>
        
        <h2>1. GEO ve Yapay Zekâ Görünürlüğü (Organik Kaynak)</h2>
        <div class="articles-list">
          <article>
            <h3><a href="/blog/markam-chatgptde-neden-gorunmuyor/">Markam ChatGPT’de Neden Görünmüyor? 12 Neden ve Kontrol Listesi</a></h3>
            <p>Tarama engelleri, marka bilgisi tutarsızlıkları ve rakiplerle karşılaştırmalı görünürlük testi.</p>
          </article>
          <article>
            <h3><a href="/blog/chatgptde-kaynak-gosterilmek-icin-site-nasil-hazirlanir/">ChatGPT’de Kaynak Olarak Gösterilmek İçin Site Nasıl Hazırlanır?</a></h3>
            <p>OAI-SearchBot izinleri, birinci el bilgi kazancı ve dipnot alıntı mimarisi.</p>
          </article>
          <article>
            <h3><a href="/blog/geo-performansi-nasil-olculur/">GEO Performansı Nasıl Ölçülür? Marka, Rakip ve Kaynak Gösterimi</a></h3>
            <p>Mention, Citation ve Recommendation metrikleri ile aylık Share of Model Voice takibi.</p>
          </article>
          <article>
            <h3><a href="/blog/chatgpt-ads-geo-farki/">ChatGPT Ads ile GEO (AI Görünürlüğü) Farkı</a></h3>
            <p>Sponsorlu konuşma reklamları ile organik model önerileri arasındaki kritik farklar.</p>
          </article>
          <article>
            <h3><a href="/geo-yapay-zeka-gorunurlugu/">GEO Ajansı: Yapay Zekâ Aramalarında Organik Görünürlük Ana Rehberi</a></h3>
            <p>Markanızın üretken yapay zekâ motorlarında güvenilir tavsiye kaynağı olarak listelenmesi.</p>
          </article>
        </div>

        <h2>2. ChatGPT Reklamları ve Ads Manager (Sponsorlu)</h2>
        <div class="articles-list">
          <article>
            <h3><a href="/blog/chatgpt-reklam-kampanyasi-nasil-planlanir/">ChatGPT Reklam Kampanyası Nasıl Planlanır? İlk 30 Günlük Test Örneği</a></h3>
            <p>Hedef kitle, context hints, 30 günlük bütçe planı ve durdurma (stop-loss) kararları.</p>
          </article>
          <article>
            <h3><a href="/blog/chatgpt-reklamlari-icin-acilis-sayfasi-kontrol-listesi/">ChatGPT Reklamları İçin Açılış Sayfası Kontrol Listesi</a></h3>
            <p>Reklam vaadi ve ilk ekran uyumu, form sadeliği, mobil in-app browser hızı ve güven kanıtları.</p>
          </article>
          <article>
            <h3><a href="/chatgpt-reklam-verme/">ChatGPT’de Reklam Verme: Adım Adım Resmî Kurulum Rehberi</a></h3>
            <p>OpenAI Ads Manager üzerinden hesap açma, context hints kurgusu ve kampanya yayını.</p>
          </article>
          <article>
            <h3><a href="/chatgpt-reklam-fiyatlari/">ChatGPT Reklam Fiyatları 2026: TBM, Bütçe ve Yönetim Modeli</a></h3>
            <p>Açık artırma dinamikleri, CPM ve CPC modelleri, pilot bütçe seviyeleri ve ajans ücretleri.</p>
          </article>
          <article>
            <h3><a href="/blog/chatgpt-reklam-maliyeti/">ChatGPT Reklam Maliyeti Nasıl Hesaplanır? | Bütçe Planlama</a></h3>
            <p>Medya bütçesi ve ajans bedeli ayrımı, sektör rekabeti ve ROI/ROAS simülasyonu.</p>
          </article>
          <article>
            <h3><a href="/blog/chatgpt-ads-context-hints/">ChatGPT Ads Context Hints (Bağlam İpuçları) Nasıl Yazılır?</a></h3>
            <p>Anahtar kelime yerine doğal dilli kullanıcı karar anı bağlamları kurgulama rehberi.</p>
          </article>
          <article>
            <h3><a href="/blog/chatgpt-reklam-olcumu/">ChatGPT Reklam Performansı ve Dönüşüm Ölçümü</a></h3>
            <p>Conversions API, UTM etiketleme, CRM satış eşleşmesi ve nitelikli lead analizi.</p>
          </article>
          <article>
            <h3><a href="/blog/turkiyeden-chatgpt-reklam-hesabi/">Türkiye’den ChatGPT Reklam Hesabı Açma Rehberi</a></h3>
            <p>Vergi numarası, fatura, 2 No’lu KDV ve Türkiye merkezli şirketler için doğrulama adımları.</p>
          </article>
        </div>

        <h2>3. Platform & Strateji Karşılaştırmaları</h2>
        <div class="articles-list">
          <article>
            <h3><a href="/blog/chatgpt-reklami-mi-google-ads-mi/">ChatGPT Reklamı mı Google Ads mi? Hangi Hedef İçin Hangisi Seçilmeli?</a></h3>
            <p>Kullanıcı niyeti, açık artırma dinamikleri, hacim vs derinlik ve iki kanallı hibrit bütçe modeli.</p>
          </article>
          <article>
            <h3><a href="/blog/yapay-zekada-reklam-nasil-verilir/">Yapay Zekada Reklam Nasıl Verilir? 2026 Stratejik Uygulama Rehberi</a></h3>
            <p>Kanal uygunluğu doğrulama, kampanya kurgusu ve AI reklamcılığı yol haritası.</p>
          </article>
          <article>
            <h3><a href="/blog/yapay-zeka-ile-reklam-verme-nasil-yapilir/">Yapay Zekâ ile Reklam Verme Nasıl Yapılır? | Temel Rehber</a></h3>
            <p>Hedef kitle modellemesi, teklif optimizasyonu ve birinci taraf veri stratejisi.</p>
          </article>
          <article>
            <h3><a href="/yapay-zeka-platformlarinda-reklam/">Yapay Zekâ Platformlarında Reklam Verme & Kanal Rehberi</a></h3>
            <p>ChatGPT, Google AI, Microsoft Copilot ve Perplexity reklam seçeneklerinin karşılaştırması.</p>
          </article>
        </div>
      </main>
    `
  ],
  'yapay-zeka-gorunurluk-analizi': [
    'Ücretsiz Yapay Zekâ Görünürlük Analizi | GEO & LLM Testi',
    'Web sitenizin ChatGPT, Perplexity, Gemini ve Claude gibi yapay zekâ motorlarında ne kadar önerildiğini ve kaynak gösterildiğini ücretsiz analiz edin.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/geo-yapay-zeka-gorunurlugu/">GEO Ajansı</a> | <a href="/chatgpt-reklamlari/">ChatGPT Ads</a></nav>
      </header>
      <main>
        <h1>Ücretsiz Yapay Zekâ Görünürlük Analizi ve Denetim Konsolu</h1>
        <p>Web sitenizin ChatGPT, Perplexity Pro, Google Gemini ve Claude gibi büyük dil modellerinde taranabilirlik, marka varlığı, alıntı ve tavsiye edilme durumunu anında test edin.</p>
        <h2>Canlı AI Denetim Konsolu Nasıl Çalışır?</h2>
        <p>1. Web sitenizin URL'si girilir.<br />
        2. Taranacak modeller (ChatGPT-4o, Perplexity Pro, Gemini 2.0, Claude 3.7) ve denetim kapsamı seçilir.<br />
        3. Model arka planda sektörel karar sorgularını simüle ederek sitenizin tavsiye indeksini ve kaynak bağlantılarını puanlar.</p>
        <div class="actions"><a href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmet Kapsamını İnceleyin</a></div>
      </main>
    `
  ],
  'gizlilik': [
    'Gizlilik Politikası | Yapay Zekâda Reklam',
    'Yapay Zekâda Reklam gizlilik politikası.',
    `<main><h1>Gizlilik Politikası</h1><p>Veri güvenliği ve gizlilik politikamız. Müşteri analiz talepleri yalnızca teklif ve denetim amacıyla işlenir.</p></main>`
  ],
  'kvkk': [
    'KVKK Aydınlatma Metni | Yapay Zekâda Reklam',
    'Yapay Zekâda Reklam KVKK aydınlatma metni.',
    `<main><h1>KVKK Aydınlatma Metni</h1><p>6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca aydınlatma metnimiz.</p></main>`
  ],
  'cerez-politikasi': [
    'Çerez Politikası | Yapay Zekâda Reklam',
    'Yapay Zekâda Reklam çerez politikası.',
    `<main><h1>Çerez Politikası</h1><p>Web sitemizde kullanıcı deneyimini iyileştirmek için kullanılan zorunlu ve analitik çerezler.</p></main>`
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
