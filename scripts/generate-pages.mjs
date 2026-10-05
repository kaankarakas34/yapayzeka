import { mkdir, readFile, writeFile } from 'node:fs/promises'

const pages = {
  'chatgpt-reklamlari': [
    'ChatGPT Reklam Yönetimi ve OpenAI Ads Ajansı | Yapay Zekâda Reklam',
    'OpenAI Ads Manager şirket hesabı kurulumu, 25+ context hints kütüphanesi, CAPI dönüşüm takibi ve açılış sayfası mimarisiyle uçtan uca kampanya yönetimi.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/yapay-zekada-reklam-ajansi/">Yapay Zekada Reklam Ajansı</a> | <a href="/chatgpt-reklam-verme/">ChatGPT'de Reklam Nasıl Verilir?</a> | <a href="/yapay-zeka-gorunurluk-analizi/">AI Görünürlük Testi</a></nav>
      </header>
      <main>
        <h1>ChatGPT Reklam Yönetimi ve OpenAI Ads Ajansı</h1>
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
        <p>Klasik anahtar kelimeler yerine doğal dil ile kullanıcının karar anını yakalayan bağlamsal ipuçları kütüphanesi.</p>
        <h3>Açılış sayfası ve dönüşüm ölçümü</h3>
        <p>ChatGPT in-app tarayıcısına uygun, sürtünmesiz form ve hızlı açılan özel landing page mimarisi.</p>
        <h2>Hesap kimin adına açılır, ödemeyi kim yapar?</h2>
        <p>Hesap ve veriler işletmenizin tüzel kişiliğine aittir. Medya bütçesi doğrudan OpenAI'ya ödenir; ajansımıza sadece stratejik yönetim bedeli ödersiniz.</p>
        <h2>Yönetim ücreti ve medya bütçesi</h2>
        <p><a href="/chatgpt-reklam-fiyatlari/">ChatGPT reklam fiyatları ve bütçe seviyeleri</a> ile <a href="/blog/chatgpt-reklam-maliyeti/">ChatGPT reklam maliyeti nasıl hesaplanır</a> rehberlerimizi inceleyin.</p>
        <h2>ChatGPT Ads hakkında sık sorulan sorular</h2>
        <p>ChatGPT reklamları Türkiye'de self-servis erişime açıktır. Kampanya açmak ve panel adımlarını görmek için <a href="/chatgpt-reklam-verme/">İlk kampanya kurulum adımları</a> rehberimizi veya <a href="/blog/chatgpt-reklam-kampanyasi-nasil-planlanir/">30 günlük test örneğimizi</a> inceleyebilirsiniz.</p>
        <div class="actions">
          <a href="/iletisim/">ChatGPT Ads Kampanya Planı İsteyin</a>
          <a href="/chatgpt-reklam-fiyatlari/">Fiyat ve Bütçe Planını Görün</a>
        </div>
      </main>
    `
  ],
  'chatgpt-reklam-verme': [
    'ChatGPT\'de Reklam Nasıl Verilir? Türkiye İçin 2026 Rehberi',
    'Türkiye\'den ChatGPT reklamı vermek için Ads Manager hesabı, uygunluk, kampanya hedefi, bağlam ipuçları, açılış sayfası ve ölçüm adımlarını inceleyin.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/openai-ads-manager/">OpenAI Ads Manager</a> | <a href="/chatgpt-reklamlari/">ChatGPT Reklam Yönetimi</a> | <a href="/chatgpt-reklam-fiyatlari/">Reklam Fiyatları</a> | <a href="/chatgptde-markam-nasil-cikar/">Organik AI Görünürlüğü</a></nav>
      </header>
      <main>
        <h1>ChatGPT reklam verme: Türkiye'den ilk kampanya nasıl açılır?</h1>
        <p>ChatGPT reklamı, bir işletmenin OpenAI Ads Manager üzerinden oluşturduğu, ChatGPT yanıtından ayrı ve sponsorlu olarak işaretlenen ücretli yerleşimdir. Türkiye merkezli uygun bir tüzel kişi için Ads Manager self servis erişimi, OpenAI'ın güncel ülke listesinde "Available" görünüyor. Ancak ülke erişimi, her sektörün veya reklamın otomatik onaylandığı anlamına gelmez. Önce işletme ve reklam kategorisi uygunluğunu kontrol edin; ardından hesap, kampanya, reklam grubu, reklam ve ölçüm kurulumuna geçin.</p>

        <section class="quick-answer" style="background:#171717;border-left:4px solid #10a37f;padding:1.2rem;margin:1.5rem 0;border-radius:10px;">
          <h2>30 Saniyede Cevap: ChatGPT'de reklam vermek mümkün mü?</h2>
          <p>Evet. OpenAI, ChatGPT içinde sponsorlu reklam gösterimi için OpenAI Ads Manager (ads.openai.com) altyapısını kullanıyor. Reklamlar organik ChatGPT yanıtlarından ayrı tutuluyor ve 'Sponsorlu / Ad' olarak etiketleniyor. Kampanyalarda klasik arama motoru anahtar kelime mantığı yerine konuşma bağlamı, kullanıcı niyeti, reklam mesajı, landing page ve reklamverenin sağladığı context hints gibi sinyaller önem taşıyor.</p>
        </section>

        <section>
          <h2>ChatGPT'de reklam vermek ile cevaplarda önerilmek aynı mı?</h2>
          <p>Hayır. Reklamlar organik yanıttan ayrı gösterilir. OpenAI, reklamverenin modelin verdiği cevabı şekillendiremediğini ve reklamların cevapları etkilemediğini açıklıyor. “ChatGPT'de markam nasıl çıkar?” sorusuyla kastınız organik marka görünürlüğüyse <a href="/chatgptde-markam-nasil-cikar/">ayrı rehberimize</a> bakın. Bu sayfa yalnız ücretli kampanya kurulumunu anlatır.</p>
        </section>

        <section>
          <h2>1. Reklamveren ülkesini ve sektörünü doğrulayın</h2>
          <p>Self servis Ads Manager kullanacak ve faturalandırılacak tüzel kişinin OpenAI'ın erişim listesinde yer alan bir ülkede bulunması gerekir. Türkiye listede yer alıyor. Bundan sonra reklamı göstermek istediğiniz ülkeyi, ürün veya hizmetin reklam politikasındaki kategorisini ve açılış sayfanızın uygunluğunu ayrıca denetleyin. Özellikle sağlık, finans ve düzenlemeye tabi alanlarda hesap açılabilmesi kampanya onayı garantisi değildir.</p>
          <p>Reklam hesabı hangi şirketin adına? Hangi ülkelerde gösterim hedefleniyor? Tıklayan kullanıcı hangi şirketin hangi sayfasına gidecek? Ajansla çalışıyorsanız hesabın ve verinin sahibini baştan belirleyin.</p>
        </section>

        <section>
          <h2>2. Ads Manager hesabını kurun</h2>
          <p>Resmî başlangıç adresi <a href="https://ads.openai.com" target="_blank" rel="noopener noreferrer">ads.openai.com</a> adresidir. İş e-postanızla kayıt olun; şirket yasal unvanını, Türkiye vergi kimlik numarasını (VKN), vergi dairesini ve 2 No'lu KDV süreçleriyle uyumlu kurumsal ödeme kartını tanımlayın. İki aşamalı doğrulamayı (2FA) etkinleştirin.</p>
        </section>

        <section>
          <h2>3. Kampanya hedefini ve başarı ölçüsünü seçin</h2>
          <p>İlk kampanyadan beklenen işi tek cümleyle tanımlayın: markanın görünmesi (Traffic/Awareness), nitelikli site ziyareti veya ölçülebilir başvuru/satış (Conversions/Leads). Katı bir resmi minimum bütçe alt sınırı yoktur; ancak modelin semantik bağlamları sağlıklı öğrenmesi için kontrollü pilot test bütçeleri kurgulanmalıdır.</p>
        </section>

        <section>
          <h2>4. Kampanya, reklam grubu ve reklamı ayırın</h2>
          <p>OpenAI Ads Manager mimarisinde kampanya seviyesinde hedef ve bütçe; reklam grubu seviyesinde context hints (bağlam ipuçları) ve hedef ülke; reklam seviyesinde ise başlık, metin, görsel ve açılış sayfası URL'si tanımlanır. Farklı kullanıcı karar anları için ayrı reklam grupları oluşturun.</p>
        </section>

        <section>
          <h2>5. Context hints nasıl yazılır?</h2>
          <p>Context hints, reklamın hangi konuşma bağlamlarıyla ilişkili olabileceğini anlatan ek ipuçlarıdır. Klasik anahtar kelimeler yerine doğal dil cümleleri kullanılır. Örneğin: <em>'Küçük bir B2B satış ekibi, WhatsApp'tan gelen talepleri ekip içinde dağıtabilen ve CRM'de takip edebilen bir çözüm arıyor.'</em> Bağlam ipuçları olasılıksal çalışır; kesin gösterim garantisi taşımaz. Detaylar için <a href="/blog/chatgpt-ads-context-hints/">Context Hints rehberimize</a> bakın.</p>
        </section>

        <section>
          <h2>6. Reklamı doğru açılış sayfasına bağlayın</h2>
          <p>Kullanıcı diyalogdaki problemine anında cevap veren şeffaf bir açılış sayfasına yönlendirilmelidir. OpenAI reklam açılış sayfalarını denetlemek için <code>OAI-AdsBot</code> tarayıcısını kullanır. Bu bot, organik arama botu olan <code>OAI-SearchBot</code>tan farklıdır. Bot engellenirse reklam onaylanmaz.</p>
        </section>

        <section>
          <h2>7. Ölçümü kurup yayına alın</h2>
          <p>OpenAI Pixel ve Conversions API (CAPI) kurularak Lead ve Satış olayları anlık olarak eşleştirilmelidir. Kampanya 24-48 saatlik incelemenin ardından yayına girer. İlk 14 günde CTR, CPC ve veri kalitesi izlenerek optimize edilir.</p>
        </section>

        <section>
          <h2>Sık sorulan sorular</h2>
          <p>Türkiye'deki şirketler Ads Manager üzerinden self servis hesap açabilir. Zorunlu bir resmi minimum harcama alt sınırı yoktur. Sponsorlu reklam vermek ChatGPT'nin organik cevaplarını kesinlikle etkilemez ve reklamlar yalnızca reklam destekli uygun katmanlardaki kullanıcılara gösterilir.</p>
        </section>

        <section class="sources">
          <p><strong>Resmî Kaynaklar:</strong></p>
          <ul>
            <li><a href="https://help.openai.com/en/articles/20001245-ads-manager-availability" target="_blank" rel="noopener noreferrer">OpenAI Ads Manager Ülke Kullanılabilirlik Listesi</a></li>
            <li><a href="https://help.openai.com/en/articles/20001224-quickstart-launch-your-first-campaign" target="_blank" rel="noopener noreferrer">İlk Kampanya Rehberi</a></li>
            <li><a href="https://help.openai.com/en/articles/20001047-ads-in-chatgpt" target="_blank" rel="noopener noreferrer">ChatGPT Reklamları ve Tarafsızlık İlkeleri</a></li>
            <li><a href="https://help.openai.com/en/articles/20001243-advertiser-guidance-for-allowing-openai-web-crawlers" target="_blank" rel="noopener noreferrer">Reklam Açılış Sayfası Tarayıcısı (OAI-AdsBot)</a></li>
          </ul>
        </section>

        <div class="actions">
          <a href="/chatgptde-markam-nasil-cikar/">Organik cevaplarda marka görünürlüğü</a>
          <a href="/chatgpt-reklamlari/">ChatGPT Reklam Yönetimi Servisimiz</a>
          <a href="/chatgpt-reklam-fiyatlari/">ChatGPT Reklam Fiyatları</a>
          <a href="/openai-ads-manager/">OpenAI Ads Manager Rehberi</a>
          <a href="/iletisim/">İşletmeniz için ChatGPT Ads uygunluk ve ilk kampanya planı isteyin</a>
        </div>
      </main>
    `
  ],
  'chatgptde-markam-nasil-cikar': [
    'ChatGPT\'de Markam Nasıl Çıkar? 2026 Görünürlük Rehberi',
    'Markanızın ChatGPT\'de organik olarak anlaşılması ve kaynak gösterilmesi için teknik erişim, marka bilgisi, içerik ve ölçüm adımlarını öğrenin.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmeti</a> | <a href="/chatgpt-reklam-verme/">ChatGPT Reklam Verme</a> | <a href="/yapay-zeka-gorunurluk-analizi/">Görünürlük Testi</a> | <a href="/blog/">Bilgi Merkezi</a></nav>
      </header>
      <main>
        <h1>ChatGPT'de markam nasıl çıkar? Organik görünürlük için 7 adım</h1>
        <p>Markanızın ChatGPT'de görünmesi iki farklı anlama gelebilir: ChatGPT'nin bir soruya verdiği <strong>organik yanıtta</strong> markanızdan söz etmesi veya yanıtın altında <strong>sponsorlu reklam</strong> gösterilmesi. Organik cevap satın alınamaz. Reklam içinse ayrı bir OpenAI Ads Manager hesabı, uygun bir kategori ve kampanya gerekir. Bu rehber organik görünürlüğü ele alıyor. Ücretli kampanya kurmak istiyorsanız <a href="/chatgpt-reklam-verme/">ChatGPT reklam verme rehberine</a> geçin.</p>

        <section>
          <h2>Kısa Yanıt</h2>
          <p>Önce sitenizin erişilebilirliğini kontrol edin; marka, ürün ve kurum bilgilerinizi tutarlı biçimde yayımlayın; müşterinin karar sorularına özgün ve doğrulanabilir cevaplar verin; hedef sorularda kaynak gösterimi ve gerçek yönlendirme trafiğini ölçün. Bu çalışmalar belirli bir yanıtta görünme garantisi vermez, ancak doğru bilginin keşfedilmesi için sağlam bir temel oluşturur.</p>
        </section>

        <section>
          <h2>1. “Markam çıktı” derken neyi ölçüyorsunuz?</h2>
          <p>“Markamı ChatGPT'ye sordum ve adını yazdı” tek başına yeterli test değildir. Kullanıcının markayı zaten adıyla sorması ile “İstanbul'da küçük işletmeler için hangi CRM daha uygun?” gibi kategori sorusunda markanın anılması farklı sonuçlardır. Üç ölçüm ayırın:</p>
          <table>
            <thead>
              <tr>
                <th>Ölçüm</th>
                <th>Örnek</th>
                <th>Ne anlatır?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Marka anılması</strong></td>
                <td>Yanıtta marka adı geçer</td>
                <td>Model markayı bu bağlamla ilişkilendirmiş olabilir</td>
              </tr>
              <tr>
                <td><strong>Kaynak bağlantısı</strong></td>
                <td>Web sayfanıza tıklanabilir atıf verir</td>
                <td>Kullanıcı ilgili içeriğe gidebilir; tıklama garanti değildir</td>
              </tr>
              <tr>
                <td><strong>Doğruluk</strong></td>
                <td>Ürün, fiyat, lokasyon ve yetkinlik doğru aktarılır</td>
                <td>Görünürlük yararlı mı, yanıltıcı mı anlaşılır</td>
              </tr>
            </tbody>
          </table>
          <p>Aynı soruyu bir kez sormak yerine soruları, ülkeyi, dili, tarihi ve yanıtın kaynaklarını kaydedin.</p>
        </section>

        <section>
          <h2>2. Sitenizin ChatGPT aramasına açık olduğunu kontrol edin</h2>
          <p>OpenAI, kamuya açık bir sitenin ChatGPT aramasında görünebileceğini; özet ve alıntılarda kullanılabilmesi için <code>OAI-SearchBot</code> erişiminin engellenmemesini öneriyor. <code>robots.txt</code>, sayfanın <code>noindex</code> etiketi, Cloudflare/WAF kuralları ve önemli bilgilerin yalnız JavaScript çalışınca görünmesi denetlenecek ilk alanlardır.</p>
          <p><em>İki botu karıştırmayın:</em> <code>OAI-SearchBot</code> arama görünürlüğüyle, <code>OAI-AdsBot</code> ise ChatGPT Ads açılış sayfasının reklam incelemesiyle ilişkilidir. Birine izin vermek ötekinin hazır olduğu anlamına gelmez.</p>
        </section>

        <section>
          <h2>3. Markanızın ne yaptığını açık bir sayfada anlatın</h2>
          <p>Tam ticari adınız nedir? Hangi ürünü veya hizmeti sunuyorsunuz? Kimler için uygunsunuz? Hangi şehir veya ülkelerde çalışıyorsunuz? Fiyat, kapsam ve teslimat hakkında hangi bilgiler kamuya açık? Yapılandırılmış veriyi (Schema.org) yalnız sayfada gerçekten görünen bilgiyi düzenli anlatmak için kullanın; schema eklemek tek başına ChatGPT'de üst sıralara çıkma yöntemi değildir.</p>
        </section>

        <section>
          <h2>4. Müşterinin gerçek karar sorularını ayrı ayrı yanıtlayın</h2>
          <p>Genel bir “biz en iyiyiz” sayfası yerine müşterinin karar verirken sorduğu sorulara cevap veren içerikler hazırlayın. Örneğin bir CRM markası için “WhatsApp görüşmeleri CRM'de nasıl takip edilir?”, “10 kişilik satış ekibi için kurulum ne sürer?” gibi sorular genel anahtar kelimelerden daha açıklayıcıdır. Kendi ürün ekranınızı, yönteminizin örneğini veya anonimleştirilmiş bir uygulama sonucunu gösterin.</p>
        </section>

        <section>
          <h2>5. Bağımsız ve doğrulanabilir kaynakları geliştirin</h2>
          <p>Gerçek yayınlarda marka adınızın, ürününüzün ve yaptığınız işin doğru anlatılması kullanıcı güvenini artırır. Mesleki dizin, iş ortaklığı duyurusu, bağımsız inceleme veya özgün araştırma değer taşır. Sosyal profillerde, şirket kayıtlarında ve referans verilen yayınlarda aynı marka, alan adı ve hizmet tanımı kullanılmalıdır.</p>
        </section>

        <section>
          <h2>6. Görünürlüğü soru seti ve gerçek trafikle ölçün</h2>
          <p>Üç grup soru hazırlayın: <strong>markalı</strong>, <strong>kategori</strong> ve <strong>karşılaştırma</strong>. OpenAI, ChatGPT arama bağlantılarında <code>utm_source=chatgpt.com</code> parametresinin yer aldığını belirtiyor. Analitikte gelen referral trafiğini ve dönüşümleri izleyin.</p>
        </section>

        <section>
          <h2>7. Eksik kalan yeri doğru hizmete bağlayın</h2>
          <p>Tarama engeli varsa teknik düzeltme; marka tanımı zayıfsa kurumsal içerik; karar sorularında içerik boşluğu varsa rehber üretimi; yanlış bilgi varsa kaynak düzeltmesi gerekir. Bunların hepsine aynı standart paket cevabını vermek yerine <a href="/blog/markam-chatgptde-neden-gorunmuyor/">12 neden kontrol listesini</a> kullanın ve <a href="/yapay-zeka-gorunurluk-analizi/">görünürlük analizinde</a> hangi soruda ne çıktığını kaydedin.</p>
        </section>

        <section>
          <h2>Sık sorulan sorular</h2>
          <p>ChatGPT'ye para ödeyip organik yanıtta ilk sıraya çıkamazsınız; OpenAI reklamların organik yanıtlardan ayrı olduğunu belirtir. Sponsorlu görünüm için <a href="/chatgpt-reklam-verme/">Sponsorlu ChatGPT reklamı nasıl verilir?</a> rehberimize bakın. Sabit bir görünürlük süresi yoktur; erişim, içerik ve kaynak optimizasyonu aşamalı olarak doğrulanmalıdır.</p>
        </section>

        <section class="sources">
          <p><strong>Resmî Kaynaklar:</strong></p>
          <ul>
            <li><a href="https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" target="_blank" rel="noopener noreferrer">OpenAI Yayıncı ve Geliştirici SSS</a></li>
            <li><a href="https://help.openai.com/en/articles/20001047-ads-in-chatgpt" target="_blank" rel="noopener noreferrer">OpenAI ChatGPT Reklam SSS</a></li>
            <li><a href="https://help.openai.com/en/articles/20001243-advertiser-guidance-for-allowing-openai-web-crawlers" target="_blank" rel="noopener noreferrer">OpenAI Reklamveren Tarayıcı Rehberi</a></li>
          </ul>
        </section>

        <div class="actions">
          <a href="/chatgpt-reklam-verme/">Sponsorlu ChatGPT reklamı nasıl verilir?</a>
          <a href="/blog/markam-chatgptde-neden-gorunmuyor/">12 Neden Teşhis Listesi</a>
          <a href="/geo-yapay-zeka-gorunurlugu/">GEO Danışmanlığı</a>
          <a href="/yapay-zeka-gorunurluk-analizi/">Canlı AI Görünürlük Testi</a>
          <a href="/iletisim/">20 Soruluk Görünürlük İncelemesi İsteyin</a>
        </div>
      </main>
    `
  ],
  'openai-ads-manager': [
    'OpenAI Ads Manager Nedir? ChatGPT Reklam Paneli Rehberi',
    'OpenAI Ads Manager Beta\'nın ne işe yaradığını, Türkiye\'den erişimi, kampanya yapısını, hedeflemeyi ve ölçüm seçeneklerini tek rehberde inceleyin.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklam-verme/">ChatGPT Reklam Kurulumu</a> | <a href="/chatgpt-reklam-fiyatlari/">Fiyatlar</a> | <a href="/chatgpt-reklamlari/">Hizmet Kapsamı</a></nav>
      </header>
      <main>
        <h1>OpenAI Ads Manager: hesap, kampanya, ölçüm ve raporlama</h1>
        <p><strong>Arama Niyeti Ayrımı:</strong> Bu sayfa OpenAI reklamveren konsolunun (Ads Manager Beta) ne sunduğunu ve nasıl düzenlendiğini anlatır. İlk reklamınızı sıfırdan kurma adımları için <a href="/chatgpt-reklam-verme/">ChatGPT'de Reklam Nasıl Verilir?</a> rehberimize bakabilirsiniz.</p>

        <h2>OpenAI Ads Manager Beta nedir?</h2>
        <p>OpenAI Ads Manager (ads.openai.com), ChatGPT içi sponsorlu reklam yerleşimlerini, bağlam eşleşmelerini ve bütçeleri yönetmek üzere tasarlanmış resmî self-servis reklam yönetim platformudur. Resmî belgeler için <a href="https://help.openai.com/en/articles/20001206-ads-manager-beta-overview" target="_blank" rel="noopener noreferrer">Ads Manager Beta Overview</a> sayfasını inceleyin.</p>

        <h2>Türkiye'den kimler self servis erişebilir?</h2>
        <p>OpenAI'ın resmî ülke listesine göre Türkiye, self-servis erişime açıktır. Türkiye merkezli vergi kimlik numarası (VKN), vergi levhası ve 2 No'lu KDV süreçlerine uygun kurumsal ödeme kartı olan faal tüzel kişiler hesap açabilir.</p>

        <h2>Panelde kampanya, reklam grubu ve reklamın görevi</h2>
        <p>Panel 3 aşamalı yapıdan oluşur: 1) Kampanya seviyesinde ana hedef (trafik, lead, satış) ve bütçe belirlenir; 2) Reklam grubu seviyesinde context hints (bağlam ipuçları), ülke ve negatif filtreler tanımlanır; 3) Reklam seviyesinde kreatif metin, başlık ve açılış sayfası URL'si girilir.</p>

        <h2>Kampanya hedefleri ve ücretlendirme seçenekleri</h2>
        <p>Panelde geçerli tıklama (CPC) ve bin gösterim (CPM) teklif modelleri yer alır. Açık artırma dinamikleri bağlam alakası ve teklif kombinasyonuna göre çalışır. Ortalama maliyetler için <a href="/chatgpt-reklam-fiyatlari/">ChatGPT Reklam Fiyatları</a> sayfamıza göz atın.</p>

        <h2>Bağlam ipuçları, konum ve diğer hedefleme alanları</h2>
        <p>Statik kelimeler yerine doğal dil ile tanımlanan bağlam ipuçları kullanılır. Ülke düzeyinde hedefleme ve hariç tutmalar yapılabilir. Beta sürüm gereği hedefleme parametreleri OpenAI tarafından düzenli geliştirilmektedir.</p>

        <h2>OpenAI Pixel, Conversions API ve raporlama</h2>
        <p>Veri Kaynakları menüsünden OpenAI Pixel ve sunucu taraflı Conversions API kurulur. PageView, Lead, Purchase ve CompleteRegistration olayları eşleştirilerek gerçek zamanlı raporlanır. Ayrıntılar için <a href="/blog/chatgpt-reklam-olcumu/">Ölçüm Rehberi</a> ve <a href="https://help.openai.com/en/articles/20001409-conversion-measurement" target="_blank" rel="noopener noreferrer">Resmî Dönüşüm Dokümanı</a> referans alınabilir.</p>

        <h2>Toplu yükleme ve ürün feed'i hangi işletmeler için anlamlı?</h2>
        <p>Geniş ürün kataloğuna sahip e-ticaret siteleri ürün feed'i ile yüzlerce ürünü otomatik bağlayabilir. B2B ve profesyonel hizmet şirketleri içinse derin niyet odaklı context hints kurgusu daha verimlidir.</p>

        <h2>Hangi işletme nereden başlamalı? Karar Tablosu</h2>
        <p>B2B SaaS şirketleri Lead hedefi ve CAPI entegrasyonu ile; E-ticaret markaları Ürün Feed'i ve dinamik katalog ile; İhracatçılar çok dilli context hints ile başlamalıdır. Organik aramalarda kaynak gösterilmek isteyenler içinse reklam değil, <a href="/geo-yapay-zeka-gorunurlugu/">GEO Danışmanlığı</a> gereklidir.</p>

        <h2>Beta sürümün sınırları ve sık sorulan sorular</h2>
        <p>Panel arayüzü İngilizce olmakla birlikte Türkçe reklam ve bağlamlar sorunsuz yönetilir. Business Settings sekmesinden ajans uzmanlarına yetki atanabilir.</p>

        <div class="actions">
          <a href="/iletisim/">Ads Manager kurulum ve ilk test kampanyası taslağı alın</a>
        </div>
      </main>
    `
  ],
  'chatgpt-seo': [
    'ChatGPT SEO Nedir? ChatGPT\'de Görünür Olmak İçin SEO Rehberi',
    'ChatGPT SEO ve GEO optimizasyonu: Klasik SEO ile farklar, OAI-SearchBot tarama mantığı, entity netliği, alıntılanabilir formatlar ve görünürlük ölçümü.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgptde-markam-nasil-cikar/">Markam Nasıl Çıkar?</a> | <a href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmeti</a> | <a href="/yapay-zeka-gorunurluk-analizi/">AI Testi</a></nav>
      </header>
      <main>
        <h1>ChatGPT SEO Nedir? ChatGPT'de Görünür Olmak İçin SEO Nasıl Değişiyor?</h1>
        <p><strong>30 Saniyelik Cevap:</strong> ChatGPT SEO, büyük dil modellerinin (LLM) kullanıcıların derin ve çok adımlı sorularına doğrudan cevap üretirken web sitenizi anlamasını, referans almasını ve kaynak (citation) olarak göstermesini sağlayan Generative Engine Optimization (GEO) çalışmasıdır.</p>
        
        <h2>Klasik SEO ile ChatGPT SEO Arasındaki Fark</h2>
        <p>Klasik SEO Google SERP üzerindeki 10 mavi bağlantıda sıra almayı hedeflerken; ChatGPT SEO, modelin sentezlediği doğrudan yanıtta tavsiye edilmeyi ve kaynak gösterilmeyi hedefler.</p>

        <h2>ChatGPT Web'i Nasıl Kullanır?</h2>
        <p>Kullanıcı güncel pazar veya ürün bilgisi istediğinde arama motoru dizini taranır; birinci el veri, karşılaştırma tablosu ve net sınırlar sunan sayfalar alıntı bağlantısı olarak seçilir.</p>

        <h2>Yapay Zekâların Kolay Alıntıladığı İçerik Formatları</h2>
        <p>1) İlk paragrafta 2 cümlelik net cevap, 2) Karşılaştırma tabloları, 3) Adım adım işlem listeleri, 4) Şeffaf fiyat ve süreç sınırları, 5) Tarih ve uzman doğrulaması.</p>

        <h2>Schema Tek Başına Yeterli mi?</h2>
        <p>Hayır. Schema.org yapılandırılmış verisi makinelerin bilgiyi hatasız okumasına yardım eder; ancak zayıf içeriği ChatGPT'de öne çıkaracak bir sıralama hilesi değildir.</p>

        <div class="actions">
          <a href="/chatgptde-markam-nasil-cikar/">ChatGPT'de Markam Nasıl Çıkar?</a>
          <a href="/geo-yapay-zeka-gorunurlugu/">GEO Danışmanlığı</a>
          <a href="/yapay-zeka-gorunurluk-analizi/">Canlı AI Görünürlük Testi</a>
        </div>
      </main>
    `
  ],
  'chatgptde-web-sitem-neden-cikmiyor': [
    'ChatGPT\'de Web Sitem Neden Çıkmıyor? 10 Maddelik Teşhis Rehberi',
    'ChatGPT web sitemi görmüyor, şirketimi bulmuyor veya markamı önermiyor diyorsanız robots.txt, JS-only rendering, entity ve bilgi kazancı kontrollerini inceleyin.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgptde-markam-nasil-cikar/">Markam Nasıl Çıkar?</a> | <a href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmeti</a> | <a href="/chatgpt-seo/">ChatGPT SEO</a></nav>
      </header>
      <main>
        <h1>ChatGPT'de Web Sitem Neden Çıkmıyor? 10 Maddelik Teşhis Rehberi</h1>
        <p><strong>Kısa Teşhis:</strong> ChatGPT bir siteyi 'cezalandırdığı' için değil; genellikle OAI-SearchBot engeli, JS-only rendering, belirsiz entity sinyalleri veya karar sorularına cevap veren özgün içerik eksikliği nedeniyle önermez.</p>

        <h2>10 Maddelik Teşhis Kontrol Listesi</h2>
        <ol>
          <li><strong>OAI-SearchBot robots.txt veya WAF Engeli:</strong> OpenAI arama botunun erişiminin engellenmesi.</li>
          <li><strong>noindex Etiketi:</strong> Önemli sayfalarda yanlışlıkla noindex bulunması.</li>
          <li><strong>Yalnızca JavaScript ile Yüklenen İçerik:</strong> Ham HTML çıktısında kritik metinlerin bulunmaması.</li>
          <li><strong>Zayıf Entity Sinyalleri:</strong> Markanın ne yaptığının net tanımlanmaması.</li>
          <li><strong>Bilgi Kazancı Eksikliği:</strong> İnternetteki diğer siteleri tekrarlayan jenerik metinler.</li>
          <li><strong>Çelişkili Kurumsal Bilgiler:</strong> Farklı platformlarda tutarsız marka tanımları.</li>
          <li><strong>3. Taraf Doğrulama Eksikliği:</strong> Bağımsız dizin ve sektörel haberlerde marka bahsinin olmaması.</li>
          <li><strong>Karar Sorularına Sayfa Açılmaması:</strong> Müşterinin satın alma öncesi sorularına yanıt veren sayfaların bulunmaması.</li>
          <li><strong>Canonical ve Yönlendirme Hataları:</strong> Botların doğru sayfayı seçmesini zorlaştıran URL çakışmaları.</li>
          <li><strong>Tek Denemeyle Karar Vermek:</strong> Çoklu dilli ve bağlamlı soru setleriyle test yapılmaması.</li>
        </ol>

        <div class="actions">
          <a href="/chatgptde-markam-nasil-cikar/">Adım Adım Görünürlük Rehberi</a>
          <a href="/yapay-zeka-gorunurluk-analizi/">Canlı AI Teşhis Aracı</a>
          <a href="/iletisim/">Görünürlük Analizi İsteyin</a>
        </div>
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
        <nav><a href="/">Ana Sayfa</a> | <a href="/yapay-zekada-reklam-ajansi/">Yapay Zekada Reklam Ajansı</a> | <a href="/chatgptde-markam-nasil-cikar/">Markam Nasıl Çıkar?</a> | <a href="/yapay-zeka-gorunurluk-analizi/">Canlı Görünürlük Testi</a> | <a href="/blog/chatgpt-ads-geo-farki/">ChatGPT Ads ve GEO Farkı</a></nav>
      </header>
      <main>
        <h1>GEO ve yapay zekâ aramalarında organik görünürlük</h1>
        <p>Generative Engine Optimization (GEO); yapay zekâ yanıtlarında marka bilgilerinin anlaşılabilirliğini ve kaynak olarak bulunabilirliğini geliştirme ve ölçme çalışmasıdır. Markanızın ChatGPT, Perplexity, Gemini ve Claude gibi üretken yapay zekâ motorları tarafından anlaşılması ve organik yanıtlarda kaynak olarak gösterilmesi hedeflenir.</p>
        <h2>GEO nedir?</h2>
        <p>Kullanıcıların karmaşık sektör ve ürün sorularında büyük dil modellerinin (LLM) sentezlediği doğrudan yanıtlar içerisinde markanızın güvenilir kaynak ve tavsiye olarak yer almasını sağlayan stratejidir. Adım adım optimizasyon süreci için <a href="/chatgptde-markam-nasil-cikar/">ChatGPT'de markam nasıl çıkar?</a> rehberimize göz atabilirsiniz.</p>
        <h2>Markam ChatGPT'de neden önerilmiyor?</h2>
        <p>En sık karşılaşılan üç neden: 1) OAI-SearchBot gibi botların robots.txt veya WAF tarafından engellenmesi, 2) Marka varlığının (entity) bağımsız 3. taraf kaynaklarda yetersiz kalması, 3) Karar vericiye doğrudan yanıt veren bilgi kazancı (information gain) eksikliğidir. Ayrıntılar için <a href="/blog/markam-chatgptde-neden-gorunmuyor/">12 Neden ve Kontrol Listesi</a> yazımızı inceleyin.</p>
        <h2>Hangi sorularda kaynak gösteriliyorum?</h2>
        <p>Yapay zekâ görünürlüğü üç kademede ölçülür: Marka anılması (Mention), tıklanabilir dipnot bağlantısı (Citation) ve doğrudan problem çözümü olarak tavsiye edilme (Recommendation). Metodoloji için <a href="/blog/geo-performansi-nasil-olculur/">GEO Performansı Nasıl Ölçülür?</a> sayfamıza bakın.</p>
        <h2>Rakiplerle karşılaştırma ve AI Ses Payı (SoMV)</h2>
        <p>Sektörel soru setleriyle yapılan testlerde markanızın modeller tarafından rakiplere kıyasla ne sıklıkla ve hangi tonda (sentiment) önerildiğini ölçeriz.</p>
        <h2>Ücretli reklamdan farkı nedir?</h2>
        <p>Reklam satın almak yapay zekânın organik cevabını veya tavsiyesini kesinlikle değiştirmez. Belirli modelde veya soruda ilk sırada çıkma garantisi verilmez.</p>
        <div class="actions">
          <a href="/chatgptde-markam-nasil-cikar/">ChatGPT'de Markam Nasıl Çıkar?</a>
          <a href="/yapay-zeka-gorunurluk-analizi/">⚡ Canlı AI Teşhis Konsolunu Başlat</a>
          <a href="/iletisim/">Ücretsiz GEO Analizi İsteyin</a>
        </div>
      </main>
    `
  ],
  'chatgpt-reklam-fiyatlari': [
    'ChatGPT Reklam Fiyatları 2026: TBM, Bütçe ve Yönetim Ücreti',
    'ChatGPT reklam maliyetleri nasıl hesaplanır? Resmî OpenAI Ads Manager açık artırma modelleri (CPC/CPM), ajans önerili pilot test bütçeleri ve dönüşüm simülasyonu.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari/">ChatGPT Reklam Yönetimi</a> | <a href="/chatgpt-reklam-verme/">Reklam Verme Adımları</a> | <a href="/openai-ads-manager/">OpenAI Ads Manager</a> | <a href="/iletisim/">Teklif Alın</a></nav>
      </header>
      <main>
        <h1>ChatGPT Reklam Fiyatları 2026: TBM, Bütçe ve Yönetim Maliyeti</h1>
        <p><strong>Kritik Şeffaflık Notu:</strong> Sitemizde veya sektörel analizlerde yer alan $1.500–$3.000/ay gibi tutarlar, <em>OpenAI'ın zorunlu kıldığı bir alt harcama barajı değildir</em>. Bunlar, yapay zekânın karar anlarını ve semantik bağlamlarını sağlıklı öğrenebilmesi adına <em>ajansımız tarafından önerilen kontrollü pilot test senaryolarıdır</em>. Platform gerçek zamanlı açık artırma esasıyla çalışır ve katı bir resmî minimum bütçe zorunluluğu yoktur.</p>

        <h2>Reklam ücreti nasıl oluşur?</h2>
        <p>ChatGPT reklam maliyetleri basılı veya sabit bir fiyat listesine dayanmaz. OpenAI Ads Manager açık artırma sistemi; maksimum teklifiniz (Bid), context hints (bağlam ipucu) alaka düzeyiniz ve reklam metninin beklenen tıklama performansı (eCTR) bileşenlerine göre anlık açık artırmayla şekillenir.</p>

        <h2>CPC ve CPM farkı</h2>
        <p>OpenAI Ads Manager faturalandırma altyapısında (<a href="https://help.openai.com/en/articles/20001216-billing-payment" target="_blank" rel="noopener noreferrer">Billing & Payment Documentation</a>) iki temel ücretlendirme modeli sunulur: Tıklama Başı Maliyet (CPC / TBM) reklam tıklandığında ve kullanıcı sitenize yönlendirildiğinde ücretlendirilir; satın alma niyetli kitleleri toplamak için esastır. Bin Gösterim Başı Maliyet (CPM / BGBM) ise reklam kartının konuşma penceresinde 1.000 kez görüntülenmesi karşılığında tahsil edilir ve marka bilinirliği için tercih edilir.</p>

        <h2>Resmî minimum bütçe var mı?</h2>
        <p>OpenAI Yardım Merkezi kampanya oluşturma kurallarına (<a href="https://help.openai.com/en/articles/20001210-create-campaigns-for-chatgpt-ads" target="_blank" rel="noopener noreferrer">Campaign Creation Guide</a>) göre zorunlu, katı bir alt harcama eşiği bulunmamaktadır. Günlük küçük bütçelerle de kampanya başlatılabilir; ancak modelin yeterli bağlam verisi toplayıp optimize olabilmesi için istatistiksel geçerliliğe sahip pilot bütçeler önerilir.</p>

        <h2>Test bütçesi nasıl hesaplanır?</h2>
        <p>Test bütçesi formülü: <code>(Hedeflenen Asgari Dönüşüm Sayısı / Sayfa Dönüşüm Oranı) × Tahmini TBM</code> şeklinde hesaplanır. Örneğin ilk 30 günde modelin öğrenmesi için 40 nitelikli lead hedefleniyorsa, %8 açılış sayfası dönüşüm oranı ve $1.80 ortalama TBM ile en az 500 tıklama ve ~$900 test medya bütçesi hedeflenir.</p>

        <h2>Ajans ücreti ile medya bütçesi</h2>
        <p>Medya bütçesi doğrudan işletmenizin kurumsal kartından OpenAI'a ödenir; ajansımız medya harcamanızdan komisyon almaz veya bütçeyi gizlemez. Ajans yönetim ücreti ise hesap kurulumu, semantik context hints kütüphanesi, CAPI entegrasyonu ve haftalık optimizasyon danışmanlığını kapsayan şeffaf hizmet bedelidir.</p>

        <h2>Örnek hesap: gösterim → tıklama → lead → satış</h2>
        <p>Tipik bir B2B pilot kampanyası simülasyonu: 25.000 Gösterim (~$12 CPM) → 500 Tıklama (%2 CTR, ~$1.80 TBM) → 40 Nitelikli Form Lead (%8 CR, $22.50 CPL) → 6 Yeni Müşteri/Satış (%15 Kapanış, $150 CAC). Veriler sektör rekabetine göre değişiklik gösterir.</p>

        <h2>Güncel kampanya ve kredi koşulları</h2>
        <p>OpenAI zaman zaman yeni reklamverenlere teşvik kredileri sunabilir. Ancak doğrulanmamış spekülatif rakamlara itibar edilmemelidir; uygunluk, şirket tüzel kişiliği, harcama son tarihi ve kredi kullanım süreleri <a href="https://ads.openai.com" target="_blank" rel="noopener noreferrer">ads.openai.com</a> başlangıç ekranından yazılı olarak teyit edilmelidir.</p>

        <div class="actions">
          <a href="/iletisim/">Sektörünüze Özel Bütçe Senaryosu İsteyin</a>
          <a href="/chatgpt-reklam-verme/">ChatGPT Reklam Kurulum Rehberi</a>
          <a href="/openai-ads-manager/">OpenAI Ads Manager Rehberi</a>
        </div>
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
    'ChatGPT Context Hints Nedir? OpenAI Ads İçin 25 Örnekle Bağlam İpuçları Rehberi',
    'OpenAI Ads Manager context hints (bağlam ipuçları) nasıl yazılır? Klasik anahtar kelimelerden farkı, 25 sektörel karar anı örneği, negatif filtreler ve açılış sayfası eşleşmesi.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklam-verme/">ChatGPT Reklam Verme</a> | <a href="/chatgpt-reklamlari/">ChatGPT Ads Ajansı</a> | <a href="/chatgpt-reklam-fiyatlari/">Fiyatlar</a></nav>
      </header>
      <main>
        <h1>ChatGPT Ads Context Hints Nedir ve Nasıl Yazılır? 25 Örnekle Rehber</h1>
        <p><strong>30 Saniyede Özeti:</strong> ChatGPT context hints (bağlam ipuçları); OpenAI Ads Manager reklam grubunda kullanılan, modelin reklamınızı hangi konuşma bağlamında, hangi kullanıcı profilinde ve hangi karar anında sponsorlu olarak gösterebileceğini doğal dille anlatan sinyallerdir. Klasik Google Ads tam eşleşmeli kelime mantığı değildir; semantik anlamsal yakınlık ve konuşma niyeti üzerinden çalışır.</p>
        
        <h2>Context hints klasik Google Ads anahtar kelimesi değildir</h2>
        <p>Google Arama motorunda kullanıcı 'crm programı' ararken, ChatGPT'de '12 kişilik ekibimiz var, WhatsApp görüşmelerini takip edecek HubSpot alternatifi arıyoruz' şeklinde problem anlatır. Context hints bu düşünme sürecini yakalar.</p>

        <h2>İyi bir context hint hangi bileşenlerden oluşur?</h2>
        <p>1) Hedef kitle tanımı, 2) Yaşanan problem, 3) Karar anında sorulan spesifik sorular, 4) Coğrafya ve kapsam.</p>

        <h2>25 Örnek ChatGPT Ads Context Hint Şablonu</h2>
        <h3>B2B SaaS & Kurumsal Yazılım</h3>
        <ul>
          <li>1. Türkiye'de 10-50 çalışanlı satış ekibi için WhatsApp entegrasyonlu ve e-fatura uyumlu CRM çözümü arayan şirket yöneticileri.</li>
          <li>2. HubSpot veya Salesforce alternatiflerini maliyet ve yerel destek açısından karşılaştıran Türk teknoloji kurucuları.</li>
          <li>3. Bulut tabanlı muhasebe ve ön muhasebe yazılımı geçiş maliyetini hesaplayan, Paraşüt/BizimHesap kıyaslaması yapan finans müdürleri.</li>
          <li>4. Personel vardiya, izin ve bordro takibini otomatikleştirmek isteyen insan kaynakları direktörleri.</li>
          <li>5. B2B e-ihracat yapan firmalar için çok dilli müşteri destek masası (Helpdesk) ve bilet yönetim sistemi araştıran operasyon liderleri.</li>
        </ul>

        <h3>E-Ticaret & D2C Tüketici Markaları</h3>
        <ul>
          <li>6. Günlük şehir koşusu ile yarı maraton antrenmanı arasındaki ayakkabı farkını soran ve darbe emici taban araştıran koşucular.</li>
          <li>7. Yeni doğan bebek için ergonomik, toksik madde içermeyen ve katlanabilir bebek arabası tavsiyesi isteyen ebeveynler.</li>
          <li>8. Evden çalışanlar için bel destekli ergonomik çalışma koltuğu ve ayarlanabilir masa modellerini kıyaslayan profesyoneller.</li>
          <li>9. Kuru ve hassas ciltler için seramid ve hyaluronik asit içerikli vegan nemlendirici krem önerisi arayan kullanıcılar.</li>
          <li>10. Kahve demleme ekipmanları arasında V60, Aeropress ve filtre kahve makinesi lezzet farkını araştıran gurmeler.</li>
        </ul>

        <h3>Sağlık Turizmi & Klinikler</h3>
        <ul>
          <li>11. İngiltere veya Almanya'dan İstanbul'da all-on-4 diş implantı yaptırmayı planlayan, klinik akreditasyonu ve paket fiyat soran hastalar.</li>
          <li>12. Avrupa'dan Türkiye'de FUE/DHI saç ekimi operasyonu için hekim deneyimi, operasyon süresi ve konaklama dahil maliyet araştıranlar.</li>
          <li>13. Göz lazer cerrahisi (No-Touch / SMILE) risklerini ve Türkiye'deki özel hastane standartlarını kıyaslayan yurt dışı hastalar.</li>
          <li>14. Rinoplasti cerrahisi sonrası iyileşme sürecini ve Türkiye'deki uzman cerrahların vaka sonuçlarını inceleyen ziyaretçiler.</li>
          <li>15. Termal sağlık oteli ve fizik tedavi rehabilitasyon merkezleri arayan ileri yaş hasta yakınları.</li>
        </ul>

        <h3>Kurumsal Danışmanlık & Finans</h3>
        <ul>
          <li>16. İngiltere'de (LLC/LTD) veya ABD Delaware'de şirket kurarak Stripe açmak isteyen Türk yazılımcı ve e-ihracatçılar.</li>
          <li>17. Ar-Ge merkezi ve Teknopark vergi muafiyetleri ile kurumlar vergisi teşviklerini karşılaştıran ölçeklenen girişimler.</li>
          <li>18. Şirket birleşme ve devralma (M&A) süreçlerinde bağımsız finansal değerleme ve due diligence raporu talep eden fonlar.</li>
          <li>19. KVKK ve GDPR uyumluluk denetimi yaptırmak isteyen veri işleyen orta ölçekli finans ve sağlık şirketleri.</li>
          <li>20. Yurt dışı pazar araştırması için Ticaret Bakanlığı Turquality hibe ve destek oranlarını araştıran üreticiler.</li>
        </ul>

        <h3>Gayrimenkul, Mimarlık & Yatırım</h3>
        <ul>
          <li>21. İstanbul Anadolu Yakası'nda metroya yakın, deprem yönetmeliğine uygun 2+1 ve 3+1 sıfır daire arayan aileler.</li>
          <li>22. Bodrum veya Urla'da müstakil havuzlu villa yatırımı yaparak yüksek sezonluk kira getirisi hedefleyen yatırımcılar.</li>
          <li>23. Ofis ve ticari plaza alanlarında kurumsal iç mimari tasarım, anahtar teslim uygulama ve akustik düzenleme arayan şirketler.</li>
          <li>24. Vatandaşlık veya ikamet izni amacıyla Türkiye'de minimum yatırım tutarını sağlayan gayrimenkul portföyü araştıran yabancılar.</li>
          <li>25. Prefabrik çelik konstrüksiyon ev maliyetleri ve ruhsat izin süreçlerini betonarme ile kıyaslayan arsa sahipleri.</li>
        </ul>

        <h2>Negatif Context Hints: Bütçenizi koruyun</h2>
        <p>Akademik tez/ödev arayanları, ücretsiz veya açık kaynak yazılım isteyenleri, iş arayan stajyerleri negatif bağlam kurallarıyla hariç tutun.</p>

        <h2>Açılış sayfası ile uyum (Message Match)</h2>
        <p>Context hint ile vadedilen spesifik değer önerisi, açılış sayfasının H1 başlığında ilk 3 saniyede karşılanmalıdır. <a href="/blog/chatgpt-reklamlari-icin-acilis-sayfasi-kontrol-listesi/">Açılış sayfası kontrol listesi</a> rehberimize bakın.</p>

        <div class="actions">
          <a href="/chatgpt-reklam-verme/">ChatGPT Reklam Verme Rehberi</a>
          <a href="/chatgpt-reklamlari/">ChatGPT Ads Kampanya Yönetimi</a>
          <a href="/iletisim/">Context Hints Stratejisi İsteyin</a>
        </div>
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
        <nav><a href="/">Ana Sayfa</a> | <a href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmeti</a> | <a href="/chatgptde-markam-nasil-cikar/">Markam Nasıl Çıkar?</a> | <a href="/yapay-zeka-gorunurluk-analizi/">Canlı AI Testi</a> | <a href="/blog/">Bilgi Merkezi</a></nav>
      </header>
      <main>
        <h1>Markam ChatGPT’de Neden Görünmüyor? 12 Olası Neden ve Kontrol Listesi</h1>
        <p><strong>Kısa ve Doğrudan Teşhis:</strong> Bir markanın ChatGPT yanıtında görünmemesi tek bir "algoritma cezası" ile açıklanamaz. Önce hangi soruda görünmediğinizi belirleyin: marka adınız sorulunca mı, kategoriniz sorulunca mı, yoksa bir karşılaştırmada mı? Ardından aşağıdaki 12 kontrolü sırayla yapın. Kurulum ve geliştirme adımları için <a href="/chatgptde-markam-nasil-cikar/">Adım adım görünürlük rehberi</a> sayfamızı uygulayabilirsiniz.</p>

        <section>
          <h2>12 Somut Neden ve Teşhis Kontrol Listesi</h2>
          <ol>
            <li><strong>Soru markayı zaten içermiyor olabilir:</strong> Markalı soru ile kategori sorusunda görünmek farklıdır; iki sorgu türünü ayrı ölçün.</li>
            <li><strong>OAI-SearchBot erişimi engelleniyor olabilir:</strong> robots.txt, WAF kuralları veya Cloudflare bot koruması OpenAI arama botunu engelliyor olabilir.</li>
            <li><strong>Sayfa herkese açık ve okunabilir olmayabilir:</strong> Önemli marka ve ürün bilgileri ham HTML çıktısında bulunmalıdır; JavaScript bağımlılığını azaltın.</li>
            <li><strong>Yanlış veya eski canonical sayfa işaretlenmiş olabilir:</strong> Yinelenen sayfalar veya yanlış yönlendirmeler bilgi tespitini zorlaştırır.</li>
            <li><strong>Marka kimliği sayfalar arasında tutarsız olabilir:</strong> Farklı platformlardaki çelişkili tanımlar insan için de makine için de belirsizlik yaratır.</li>
            <li><strong>Ürün veya hizmet farkı açıklanmıyor olabilir:</strong> Jenerik sloganlar yerine kim için, hangi işi yaptığınızı somut örneklerle belirtin.</li>
            <li><strong>Kullanıcının karar sorularına cevap veren sayfa olmayabilir:</strong> Sık sorulan satın alma ve karşılaştırma sorularına özel içerik üretin.</li>
            <li><strong>İddialar doğrulanabilir kanıt taşımıyor olabilir:</strong> Müşteri örneği, ürün ekranı ve metodoloji sunun; dayanaksız süperlatiflerden kaçının.</li>
            <li><strong>Üçüncü taraf bilgiler yanlış veya eksik olabilir:</strong> Bağımsız yayın, dizin ve sektör profillerindeki verileri güncelleyin.</li>
            <li><strong>Yanlış ülke veya dilde test yapıyor olabilirsiniz:</strong> Farklı dil ve ülke bağlamlarını ayrı test edin.</li>
            <li><strong>Tek denemeye bakıyor olabilirsiniz:</strong> Yanıtlar zaman ve arama bağlamına göre değişir; soru setleriyle test edin.</li>
            <li><strong>Anılmayı trafik ve doğrulukla karıştırıyor olabilirsiniz:</strong> Mention, citation ve yönlendirme trafiğini ayrı analiz edin.</li>
          </ol>
        </section>

        <section>
          <h2>Rakiplerle Karşılaştırmalı Görünürlük Testi</h2>
          <p>Aynı prompt varyasyonlarında rakiplerin hangi kaynaklardan alıntılandığını analiz ederek eksik içerik boşlukları kapatılır.</p>
        </section>

        <div class="actions">
          <a href="/chatgptde-markam-nasil-cikar/">Adım adım görünürlük rehberi</a>
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
        <p>Mention temel bilinirliktir; Citation tıklanabilir bir kaynak yolu sunar; gerçek tıklamayı analitikte ölçmek gerekir. Recommendation ise kullanıcının karar anında markanızın alternatif veya doğrudan çözüm olarak tavsiye edilmesidir.</p>
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
            <h3><a href="/chatgptde-markam-nasil-cikar/">ChatGPT'de Markam Nasıl Çıkar? 2026 Görünürlük ve GEO Rehberi</a></h3>
            <p>Markanızın ChatGPT'de anlaşılması, kaynak gösterilmesi ve bulunabilir olması için 7 adımlı kılavuz.</p>
          </article>
          <article>
            <h3><a href="/chatgpt-seo/">ChatGPT SEO Nedir? ChatGPT'de Görünür Olmak İçin SEO Nasıl Değişiyor?</a></h3>
            <p>Klasik SEO vs GEO farkı, OAI-SearchBot taraması, entity otoritesi ve alıntılanabilir formatlar.</p>
          </article>
          <article>
            <h3><a href="/chatgptde-web-sitem-neden-cikmiyor/">ChatGPT'de Web Sitem Neden Çıkmıyor? 10 Maddelik Teşhis Rehberi</a></h3>
            <p>robots.txt, noindex, JS-only rendering, zayıf entity ve bilgi kazancı eksiklikleri teşhisi.</p>
          </article>
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
        <nav><a href="/">Ana Sayfa</a> | <a href="/geo-yapay-zeka-gorunurlugu/">GEO Ajansı</a> | <a href="/chatgptde-markam-nasil-cikar/">Markam Nasıl Çıkar?</a> | <a href="/chatgpt-reklamlari/">ChatGPT Ads</a></nav>
      </header>
      <main>
        <h1>Ücretsiz Yapay Zekâ Görünürlük Analizi ve Denetim Konsolu</h1>
        <p>Web sitenizin ChatGPT, Perplexity Pro, Google Gemini ve Claude gibi büyük dil modellerinde taranabilirlik, marka varlığı, alıntı ve tavsiye edilme durumunu anında test edin.</p>
        <h2>Canlı AI Denetim Konsolu Nasıl Çalışır?</h2>
        <p>1. Web sitenizin URL'si girilir.<br />
        2. Taranacak modeller (ChatGPT, Perplexity Pro, Gemini, Claude) ve denetim kapsamı seçilir.<br />
        3. Model arka planda sektörel karar sorgularını simüle ederek sitenizin tavsiye indeksini ve kaynak bağlantılarını puanlar.</p>
        <p><small>Tarama skorları anlık test simülasyonu olup model güncellemelerine ve prompt varyasyonlarına göre değişebilir. Desteklenen modeller: ChatGPT, Perplexity, Gemini, Claude (Son kontrol: 29 Eylül 2026).</small></p>
        <div class="actions">
          <a href="/chatgptde-markam-nasil-cikar/">ChatGPT'de Markam Nasıl Çıkar?</a>
          <a href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmet Kapsamını İnceleyin</a>
        </div>
      </main>
    `
  ],
  'gizlilik': [
    'Gizlilik Politikası | Yapay Zekâda Reklam',
    'Yapay Zekâda Reklam veri güvenliği ve gizlilik politikası. Kullanıcı verilerinin işlenmesi, korunması ve haklarınız hakkında bilgilendirme.',
    `<main><h1>Gizlilik Politikası</h1><p>Veri güvenliği ve gizlilik politikamız. Müşteri analiz talepleri yalnızca teklif ve denetim amacıyla işlenir.</p></main>`
  ],
  'kvkk': [
    'KVKK Aydınlatma Metni | Yapay Zekâda Reklam',
    '6698 sayılı KVKK kapsamında kişisel verilerin işlenmesi, saklanması ve haklarınıza ilişkin Yapay Zekâda Reklam aydınlatma metni.',
    `<main><h1>KVKK Aydınlatma Metni</h1><p>6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca aydınlatma metnimiz.</p></main>`
  ],
  'cerez-politikasi': [
    'Çerez Politikası | Yapay Zekâda Reklam',
    'Yapay Zekâda Reklam web sitesinde kullanıcı deneyimini artırmak ve analiz yapmak için kullanılan çerez türleri ve yönetim rehberi.',
    `<main><h1>Çerez Politikası</h1><p>Web sitemizde kullanıcı deneyimini iyileştirmek için kullanılan zorunlu ve analitik çerezler.</p></main>`
  ],
  'haberler': [
    'Yapay Zekâ ve ChatGPT Reklam Haberleri | Güncel Gelişmeler',
    'OpenAI Ads Manager, ChatGPT reklam ekosistemi, küresel pazar erişimleri ve üretken yapay zekâ pazarlamasına dair en güncel haberler, analizler ve resmî duyurular.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklam-verme/">ChatGPT Reklam Kurulumu</a> | <a href="/openai-ads-manager/">OpenAI Ads Manager</a> | <a href="/blog/">Bilgi Merkezi</a></nav>
      </header>
      <main>
        <h1>Yapay Zekâ Reklamcılığı Haberleri & Resmî Duyurular</h1>
        <p>OpenAI Ads Manager, ChatGPT reklam ekosistemi, küresel pazar erişimleri ve üretken yapay zekâ pazarlamasına dair en güncel haberler, analizler ve resmî duyurular.</p>
        
        <h2>Editoryal Haber Standartlarımız ve Doğrulama İlkelerimiz</h2>
        <p>Yapay Zekâda Reklam Haber Masası, üretken yapay zekâ ve arama ekosistemindeki gelişmeleri bağımsız bir gözle izler. Haberlerimizde spekülasyonlara ve doğrulanmamış söylentilere yer vermeyiz. Yayın tarihi ile resmî duyuru tarihlerini şeffaf olarak belirtir; 'Ne oldu, kimi etkiler, Türkiye'ye etkisi nedir ve resmî kaynak neresidir?' metodolojisiyle sektörel analiz sunarız.</p>
        <p>Her haber analizimiz doğrudan OpenAI yardım merkezi (help.openai.com) ve resmi duyuru bültenleriyle teyit edilir; Türkiye merkezli tüzel kişilerin vergi, hesap açılışı ve hedefleme hakları netleştirilir.</p>

        <section class="articles-list">
          <article>
            <h3><a href="/haberler/chatgpt-ads-60-ulkeye-ulasti/">ChatGPT Ads 60'tan Fazla Ülkeye Ulaştı: Türkiye İçin Ne Değişiyor?</a></h3>
            <p><strong>Yayın:</strong> 29 Eylül 2026 | <strong>Duyuru:</strong> 23 Eylül 2026</p>
            <p>OpenAI, Güneydoğu Asya'daki 7 yeni pazara açıldığını ve ChatGPT Ads'in 60'tan fazla ülkede kullanılabilir olduğunu duyurdu. Türkiye merkezli şirketlerin erişim durumu ve ihracatçılar için yeni imkanlar.</p>
          </article>
          <article>
            <h3><a href="/haberler/sponsored-agents-duyuruldu/">OpenAI Sponsored Agents'ı Duyurdu: Reklamdan Markayla Sohbete</a></h3>
            <p><strong>Yayın:</strong> 29 Eylül 2026 | <strong>Duyuru:</strong> 16 Eylül 2026</p>
            <p>OpenAI, kullanıcıların reklama tıkladığında harici web sitesi yerine doğrudan markanın özel yapay zekâ asistanıyla sohbet başlattığı yeni Sponsored Agents formatını duyurdu. Kapsam ve alpha test detayları.</p>
          </article>
        </section>

        <h2>Yapay Zekâ Reklam Masası Neleri Takip Ediyor?</h2>
        <p>Dijital reklamcılık, arama motoru sonuç sayfalarından (SERP) doğrudan yapay zekâ modellerinin konuşma pencerelerine doğru evrilmektedir. Ekibimiz bu geçiş sürecinde reklamverenleri ilgilendiren dört kritik alanı kesintisiz takip eder:</p>
        <ul>
          <li><strong>1. OpenAI Ads Manager Güncellemeleri:</strong> Açılan yeni ülkeler, self-servis erişim listeleri, faturalandırma kuralları ve kampanya yönetim araçları.</li>
          <li><strong>2. Yeni Reklam Formatları & Alpha Programları:</strong> Sponsorlu konuşma ajanları (Sponsored Agents), ürün feed entegrasyonları ve doğrudan satın alma butonları.</li>
          <li><strong>3. GEO & LLM Kaynak Gösterme Algoritmaları:</strong> ChatGPT Search, Perplexity ve Google Gemini gibi modellerin markaları tavsiye etme ve kaynak gösterme kriterleri.</li>
          <li><strong>4. Türkiye Mevzuat ve Vergi Uyumu:</strong> Yurt dışı reklam faturaları, 2 No'lu KDV beyannamesi, kurumsal kart harcamaları ve stopaj düzenlemeleri.</li>
        </ul>

        <div class="actions">
          <a href="/chatgpt-reklam-verme/">ChatGPT Reklam Verme Rehberi</a>
          <a href="/openai-ads-manager/">OpenAI Ads Manager Rehberi</a>
          <a href="/chatgpt-reklam-fiyatlari/">ChatGPT Reklam Fiyatları</a>
        </div>
      </main>
    `
  ],
  'haberler/chatgpt-ads-60-ulkeye-ulasti': [
    'ChatGPT Ads 60\'tan Fazla Ülkeye Ulaştı: Türkiye İçin Ne Değişiyor?',
    'ChatGPT Ads 60\'tan fazla ülkede açıldı. Güneydoğu Asya pazarları, Türkiye merkezli şirketlerin erişim durumu ve ihracatçılar için kritik etkiler.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/haberler/">Haberler</a> | <a href="/chatgpt-reklam-verme/">Reklam Kurulumu</a> | <a href="/openai-ads-manager/">Ads Manager</a></nav>
      </header>
      <main>
        <h1>ChatGPT Ads 60'tan fazla ülkede: reklamverenler için yeni tablo</h1>
        <div class="news-meta">
          <p><strong>Yayın Tarihi:</strong> 29 Eylül 2026 | <strong>OpenAI Duyuru Tarihi:</strong> 23 Eylül 2026 | <strong>Son Doğrulama:</strong> 29 Eylül 2026 | <strong>Yazar:</strong> Overseas Marketing AI Masası</p>
        </div>
        <p><strong>Haber Özeti & Doğrudan Giriş:</strong> OpenAI, 23 Eylül 2026 tarihinde yayımladığı genişleme duyurusuyla ChatGPT Ads altyapısının Güneydoğu Asya ve Tayvan'daki yedi kritik pazara açıldığını ve platformun dünya genelinde 60'tan fazla ülkede kullanılabilir hale geldiğini resmen açıkladı. OpenAI'ın güncel yardım merkezi kullanılabilirlik listesinde (<a href="https://help.openai.com/en/articles/20001245-ads-manager-availability" target="_blank" rel="noopener noreferrer">Ads Manager Availability Listesi</a>) Türkiye, self-servis erişim listesinde 'Available' (Kullanılabilir) statüsünde yer almaktadır. Bu gelişme, hem iç pazardaki yapay zekâ kullanıcılarına ulaşmak isteyen markalar hem de ihracat odaklı Türk şirketleri için yepyeni bir reklam envanteri sunmaktadır.</p>

        <h2>Hangi yedi pazar eklendi?</h2>
        <p>OpenAI'ın 23 Eylül duyurusuyla eklenen pazarlar: Endonezya, Malezya, Filipinler, Singapur, Tayland, Vietnam ve Tayvan'dır. Bu pazarlar özellikle genç nüfus yoğunluğu, mobil öncelikli dijital tüketim alışkanlıkları ve hızla büyüyen sınır ötesi e-ticaret hacimleriyle öne çıkmaktadır. Singapur bölgesel finans ve teknoloji merkezi rolüyle; Endonezya ve Filipinler ise devasa tüketici kitleleriyle yapay zekâ tabanlı karar anı reklamcılığı için yüksek potansiyel taşımaktadır.</p>

        <h2>60+ ülke reklamveren için ne anlama geliyor?</h2>
        <p>ChatGPT Ads ilk lansman döneminde yalnızca sınırlı sayıda global kurumsal reklamverenle kapalı devre test edilmişti. Platformun 60'tan fazla ülkeye yayılması, OpenAI'ın reklam teknolojisi ve sunucu altyapısının ölçeklenebilir, kararlı ve ticari kullanıma hazır bir ekosisteme dönüştüğünü kanıtlamaktadır. Reklamverenler artık tek bir <a href="/openai-ads-manager/">OpenAI Ads Manager</a> paneli üzerinden Kuzey Amerika, Avrupa ve Asya-Pasifik genelindeki kullanıcılara aynı kurumsal hesaptan erişebilmektedir.</p>

        <h2>Türkiye'deki şirketler reklam hesabı açabilir mi?</h2>
        <p>Evet. Türkiye merkezli şirketler <a href="https://ads.openai.com" target="_blank" rel="noopener noreferrer">ads.openai.com</a> portalı üzerinden şirket yasal unvanı, vergi kimlik numarası (VKN), vergi dairesi ve geçerli bir kurumsal ödeme kartı tanımlayarak doğrudan self-servis reklam hesabı açabilmektedir. Fatura süreçleri yurt dışı hizmet alımı kapsamında Türkiye mevzuatına uygun 2 No'lu KDV beyannamesi ile muhasebeleştirilir. Ayrıntılı adımlar için <a href="/chatgpt-reklam-verme/">ChatGPT'de Reklam Nasıl Verilir?</a> rehberimizi inceleyebilirsiniz.</p>

        <h2>Türkiye'deki kullanıcıların reklam görmesi aynı şey mi?</h2>
        <p>Bu noktada editoryal bir titizlik şarttır: Bir ülkeden reklamveren hesabı açabilmek ile o ülkedeki kullanıcılara reklam gösterilmesi iki ayrı teknik kontrol noktasıdır. Yanıltıcı genellemeleri önlemek için şu üç sütunlu kontrol matrisini dikkate almalısınız:</p>
        <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; margin-bottom: 1.5rem;">
          <thead>
            <tr>
              <th>Kontrol Noktası</th>
              <th>Tanım & Resmî Durum</th>
              <th>Etkilenen Kitle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Reklamveren Hesabı (Advertiser Country)</strong></td>
              <td>Türkiye merkezli tüzel kişiler Ads Manager hesabı açabilir ve fatura tanımlayabilir (Available).</td>
              <td>Şirketler, reklam ajansları, pazarlama direktörleri.</td>
            </tr>
            <tr>
              <td><strong>2. Hedef Ülkede Gösterim (Ad Delivery Country)</strong></td>
              <td>Reklamın hedef kitlesinin bulunduğu ülkenin envantere açık olması gerekir. Türkiye'den bir şirket ABD veya Asya'daki kullanıcıları hedefleyebilir.</td>
              <td>Kampanya coğrafi hedefleme ayarları.</td>
            </tr>
            <tr>
              <td><strong>3. Kullanıcı Abonelik Türü</strong></td>
              <td>Yalnızca reklam destekli ücretsiz veya uygun katmanlardaki kullanıcılara reklam gösterilir; Plus, Team ve Kurumsal abonelere reklam gösterilmez.</td>
              <td>Son kullanıcı gizlilik ve deneyim koruması.</td>
            </tr>
          </tbody>
        </table>
        <p>'60+ ülkede herkes reklam görüyor' veya 'her hesap türünde reklam çıkıyor' çıkarımı gerçeği yansıtmaz. Reklamlar yalnızca uygun bağlamlarda, organik cevaptan ayrı ve sponsorlu etiketli olarak sunulur.</p>

        <h2>İhracat yapan markalar için ilk test nasıl planlanır?</h2>
        <p>Türkiye merkezli e-ihracat, B2B SaaS, tekstil, mobilya veya sağlık turizmi markaları için bu genişleme büyük bir stratejik avantajdır. İstanbul'daki şirketinizden açacağınız tek bir OpenAI Ads Manager paneliyle:</p>
        <ul>
          <li><strong>Yerelleştirilmiş Bağlam İpuçları (Context Hints):</strong> Hedef ülkenin yerel dilinde (İngilizce, Vietnamca, Tayca vb.) kullanıcı karar anlarına odaklanan spesifik bağlamlar kurgulayabilirsiniz.</li>
          <li><strong>Sürtünmesiz Açılış Sayfaları:</strong> Yerel para birimini, uluslararası kargo veya teslimat sürelerini şeffaf belirten hızlı landing page mimarileri kurmalısınız.</li>
          <li><strong>Kontrollü Pilot Bütçe:</strong> Belirsizliği yönetmek adına ilk 30 günde hedef pazar başına kontrollü bir test bütçesi ayırarak TBM ve lead kalitesini ölçebilirsiniz. Bütçe simülasyonu için <a href="/chatgpt-reklam-fiyatlari/">ChatGPT Reklam Fiyatları</a> analizimize bakın.</li>
        </ul>

        <section class="sources">
          <p><strong>Resmî Dayanak Dokümanları:</strong></p>
          <ul>
            <li><a href="https://openai.com/index/chatgpt-ads-expands-southeast-asia-taiwan/" target="_blank" rel="noopener noreferrer">OpenAI 23 Eylül Genişleme Duyurusu (Resmî Blog)</a></li>
            <li><a href="https://help.openai.com/en/articles/20001245-ads-manager-availability" target="_blank" rel="noopener noreferrer">OpenAI Ads Manager Ülke Kullanılabilirlik Listesi</a></li>
            <li><a href="https://help.openai.com/en/articles/20001047-ads-in-chatgpt" target="_blank" rel="noopener noreferrer">ChatGPT'de Reklamlar ve Şeffaflık İlkeleri</a></li>
          </ul>
        </section>

        <div class="actions">
          <a href="/chatgpt-reklam-verme/">ChatGPT Reklam Kurulum Rehberi</a>
          <a href="/openai-ads-manager/">OpenAI Ads Manager Rehberi</a>
          <a href="/iletisim/">Global Reklam Planı İsteyin</a>
        </div>
      </main>
    `
  ],
  'haberler/sponsored-agents-duyuruldu': [
    'OpenAI Sponsored Agents Duyuruldu: Reklamdan Markayla Sohbete',
    'OpenAI Sponsored Agents reklam formatını duyurdu. Tıklamayla web sitesi yerine marka asistanıyla sohbet başlatan yeni modelin kapsamı ve sınırları.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/haberler/">Haberler</a> | <a href="/openai-ads-manager/">Ads Manager</a> | <a href="/chatgpt-reklam-verme/">Reklam Verme</a></nav>
      </header>
      <main>
        <h1>OpenAI Sponsored Agents'ı duyurdu: reklamdan markayla sohbete</h1>
        <div class="news-meta">
          <p><strong>Yayın Tarihi:</strong> 29 Eylül 2026 | <strong>OpenAI Duyuru Tarihi:</strong> 16 Eylül 2026 | <strong>Son Doğrulama:</strong> 29 Eylül 2026 | <strong>Yazar:</strong> Overseas Marketing AI Masası</p>
        </div>
        <p><strong>Haber Özeti & Doğrudan Giriş:</strong> OpenAI, 16 Eylül 2026 tarihinde yayımladığı vizyon makalesiyle (<a href="https://openai.com/index/reimagining-advertising-with-ai/" target="_blank" rel="noopener noreferrer">Reimagining Advertising with AI</a>) dijital pazarlamada devrim niteliğinde bir yenilik olan <strong>Sponsored Agents (Sponsorlu Marka Asistanları)</strong> formatını duyurdu. Bu modelde kullanıcı sponsorlu bir karta tıkladığında harici bir web sitesine gitmek yerine, doğrudan ChatGPT konuşma penceresi içerisinde markanın kendi özel yapay zekâ asistanıyla sohbete başlayabiliyor. Bu analizde 16 Eylül duyurusunun getirdiklerini, kullanıcı deneyimini, organik yanıtlardan farkını ve reklamverenler için kritik sınırları inceliyoruz.</p>

        <h2>16 Eylül'de ne açıklandı?</h2>
        <p>OpenAI, klasik banner veya arama motoru metin reklamlarının üretken yapay zekânın sunduğu derin akıl yürütme ortamında yetersiz kaldığını vurguladı. Açıklanan Sponsored Agents vizyonu; markaların kendi ürün katalogları, teknik servis kılavuzları ve canlı CRM sistemleriyle entegre çalışan akıllı sohbet ajanlarını bir reklam ürünü olarak konuşmalara dahil etmesini amaçlıyor. Böylece reklam, pasif bir tıklama bağlantısından interaktif bir danışmanlık deneyimine dönüşüyor.</p>

        <h2>Kullanıcı deneyimi nasıl işliyor?</h2>
        <p>Kullanıcı belirli bir satın alma veya problem çözümü konusunda ChatGPT ile konuşurken, yapay zekâ kullanıcının karar bağlamına uygun bir sponsorlu asistan kartı gösterir. Örneğin:</p>
        <ul>
          <li><strong>Diyalog Başlangıcı:</strong> Kullanıcı ChatGPT'ye 'Şirketimiz için bulut tabanlı siber güvenlik yazılımı seçerken nelere dikkat etmeliyiz?' diye sorar.</li>
          <li><strong>Sponsorlu Kart:</strong> Organik model yanıtının hemen altında net bir rozetle '[Marka] Güvenlik Danışmanı ile Sohbet Edin' seçeneği belirir.</li>
          <li><strong>Anında Görüşme:</strong> Kullanıcı karta tıkladığında sayfadan ayrılmadan markanın asistanıyla anlık konuşmaya geçer; şirket ölçeğine göre paket karşılaştırması ve demo rezervasyonu sohbet içinde tamamlanır.</li>
        </ul>

        <h2>Organik ChatGPT yanıtından farkı</h2>
        <p>Sponsored Agents modeli hiçbir şekilde tarafsız ChatGPT modelinin bağımsız cevabı yerine geçmez. Kullanıcının konuştuğu pencerede açıkça 'Sponsorlu / Sponsored Agent' ibaresi yer alır. Kullanıcı dilediği an görüşmeyi sonlandırıp bağımsız ChatGPT genel konuşmasına dönebilir. OpenAI, modelin editoryal ve organik tarafsızlığını korumayı en temel ilke olarak konumlandırmıştır.</p>

        <h2>Kimler bugün kullanabiliyor? (Önemli Sınır)</h2>
        <p><strong>Kritik Editoryal Sınır:</strong> Sponsored Agents şu anda <em>yalnızca ABD'deki seçilmiş kurumsal reklamverenlerle sınırlı kapalı bir alpha testi</em> aşamasındadır. Türkiye'ye, global pazarlara veya standart self-servis Ads Manager panellerine henüz açılmamıştır. OpenAI açık bir başvuru formu sunmamakta, katılımcıları doğrudan davet etmektedir. Dolayısıyla bugün genel kullanıma açık bir ürün gibi sunulması yanıltıcıdır.</p>

        <h2>E-ticaret ve hizmet şirketleri için olası kullanım alanları</h2>
        <p><em>(Editoryal Değerlendirme & Gelecek Senaryosu)</em>: Format küresel ölçekte açıldığında özellikle yüksek karar derinliği gerektiren sektörlerde köklü değişim yaratacaktır:</p>
        <ul>
          <li><strong>B2B SaaS ve Profesyonel Hizmetler:</strong> Ziyaretçinin sorularına anında yanıt veren, özel teklif simülasyonu yapan ve takvim rezervasyonu oluşturan dijital satış temsilcileri.</li>
          <li><strong>E-Ticaret ve Moda/Mobilya:</strong> Kullanıcının bütçesine, bedenine veya ev dekorasyonuna göre canlı stok verisiyle doğrudan ürün öneren stilist ajanlar.</li>
          <li><strong>Finans ve Sigorta:</strong> Müşteri kriterlerine göre kasko, sağlık veya yatırım poliçesi simülasyonu yapan lisanslı finansal rehberler.</li>
        </ul>
        <p>Bugün mevcut self-servis imkanlarıyla kampanya başlatmak isteyen işletmeler için <a href="/chatgpt-reklam-verme/">ChatGPT Reklam Verme Rehberimizi</a> ve <a href="/openai-ads-manager/">OpenAI Ads Manager Paneli</a> incelememizi tavsiye ederiz.</p>

        <section class="sources">
          <p><strong>Resmî Kaynaklar:</strong></p>
          <ul>
            <li><a href="https://openai.com/index/reimagining-advertising-with-ai/" target="_blank" rel="noopener noreferrer">OpenAI 16 Eylül Duyurusu: Reimagining Advertising with AI</a></li>
            <li><a href="https://help.openai.com/en/articles/20001524-sponsored-agents-in-chatgpt-ads" target="_blank" rel="noopener noreferrer">OpenAI Yardım Merkezi: Sponsored Agents in ChatGPT Ads Dokümantasyonu</a></li>
          </ul>
        </section>

        <div class="actions">
          <a href="/chatgpt-reklam-verme/">ChatGPT Reklam Kurulum Rehberi</a>
          <a href="/openai-ads-manager/">OpenAI Ads Manager Rehberi</a>
          <a href="/iletisim/">Yapay Zekâ Strateji Seansı Planlayın</a>
        </div>
      </main>
    `
  ],
  'sozluk': [
    'Yapay Zekâ ve Reklamcılık Sözlüğü | Yapay Zekâda Reklam',
    'ChatGPT Ads, GEO, bağlam ipuçları (context hints), Share of Model Voice ve yapay zekâ arama terimlerinin tanımları, örnekleri ve kılavuzu.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/blog/chatgpt-ads-context-hints/">Context Hints</a> | <a href="/geo-yapay-zeka-gorunurlugu/">GEO Hizmeti</a> | <a href="/chatgpt-reklamlari/">ChatGPT Reklamları</a></nav>
      </header>
      <main>
        <h1>Yapay Zekâ ve Reklamcılık Sözlüğü</h1>
        <p>Yapay zekâ platformlarında reklam verme ve organik görünürlük (GEO) dili, geleneksel Google Ads veya klasik SEO'dan farklı kavramlar kullanır. Bu sözlük, doğru terminolojiyle stratejinizi kurmanız ve bütçenizi doğru yönetmeniz için hazırlanmıştır.</p>

        <section>
          <h2>Temel Kavramlar ve Tanımlar</h2>
          <h3>Context Hints (Bağlam İpuçları)</h3>
          <p>OpenAI Ads Manager reklam grubunda tanımlanan, konuşmanın hangi tematik niyet veya konu bağlamıyla örtüştüğünü modele anlatan doğal dil yönlendirmeleridir. Klasik anahtar kelime eşleşmesi değildir. Detaylar için <a href="/blog/chatgpt-ads-context-hints/">Context Hints Rehberimize</a> bakın.</p>

          <h3>GEO (Generative Engine Optimization)</h3>
          <p>Web sitelerinin ChatGPT, Perplexity, Gemini ve Copilot gibi üretken yapay zekâ motorlarında doğru alıntılanması, kaynak gösterilmesi ve önerilmesi için yapılan yapısal optimizasyon sürecidir. İncelemek için <a href="/geo-yapay-zeka-gorunurlugu/">GEO Danışmanlığı</a> sayfamızı ziyaret edin.</p>

          <h3>ChatGPT Ads (OpenAI Sponsorlu Reklamlar)</h3>
          <p>OpenAI Ads Manager üzerinden yönetilen, ChatGPT konuşma ekranında model yanıtının yanında veya altında 'Sponsorlu / Ad' etiketiyle açıkça gösterilen ücretli yerleşimlerdir.</p>

          <h3>Sponsored Agents (Sponsorlu Ajanlar)</h3>
          <p>OpenAI tarafından duyurulan, kullanıcının konuşma anında davet edebileceği, sipariş tamamlama veya rezervasyon yapma gibi etkileşimli görevleri yerine getiren sponsorlu yapay zekâ asistanlarıdır. İncelemek için <a href="/haberler/sponsored-agents-duyuruldu/">Sponsored Agents analizimize</a> bakın.</p>

          <h3>Share of Model Voice (SoMV)</h3>
          <p>Bir sektörde kullanıcıların yapay zekâya sorduğu soru setlerinde bir markanın rakiplere kıyasla tavsiye edilme, listelenme veya kaynak gösterilme yüzdesidir.</p>

          <h3>OAI-SearchBot</h3>
          <p>OpenAI'ın ChatGPT arama özelliğinde web sitelerinden anlık özet ve kaynak alıntıları oluşturmak için sayfaları tarayan resmî arama botudur.</p>

          <h3>OAI-AdsBot</h3>
          <p>OpenAI Ads Manager'a girilen reklamların açılış sayfalarını politika ve içerik uygunluğu açısından denetleyen ayrı reklam denetim tarayıcısıdır.</p>

          <h3>Information Gain (Bilgi Kazancı)</h3>
          <p>Bir web sayfasının internetteki mevcut diğer kaynaklara kıyasla sunduğu özgün, birinci el, ölçümlenmiş veya daha önce yayınlanmamış ek katma değerdir.</p>
        </section>

        <div class="actions">
          <a href="/iletisim/">Yapay Zekâ Strateji Seansı Planlayın</a>
          <a href="/chatgpt-reklam-verme/">ChatGPT Reklam Kurulum Rehberi</a>
        </div>
      </main>
    `
  ],
  'chatgpt-reklamlari-nerede-gorunur': [
    'ChatGPT Reklamları Nerede Görünür? Yerleşimler ve Görünüm Formatı | Yapay Zekâda Reklam',
    'Sponsorlu ChatGPT reklamları arayüzde tam olarak hangi alanda belirir? Organik tavsiyelerden nasıl ayırt edilir? Reklam yerleşimleri ve kullanıcı deneyimi rehberi.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/chatgpt-reklamlari/">ChatGPT Reklam Yönetimi</a> | <a href="/chatgpt-reklam-verme/">Reklam Verme</a> | <a href="/chatgptde-markam-nasil-cikar/">Organik Görünürlük</a></nav>
      </header>
      <main>
        <h1>ChatGPT Reklamları Nerede Görünür? Yerleşimler ve Görünüm Formatı</h1>
        <p>ChatGPT reklamları, kullanıcının sohbet penceresinde modelin organik yanıtının hemen altında veya yanında, açıkça 'Sponsorlu / Sponsored / Ad' etiketiyle yer alan özel bir kart formatında görünür. Reklamlar asla modelin kendi cümlelerinin içine gizlenmez veya tarafsız bir öneri gibi maskelenmez.</p>

        <h2>1. ChatGPT Arayüzünde Reklam Yerleşim Noktaları</h2>
        <h3>Yanıt Altı Sponsorlu Kart</h3>
        <p>Kullanıcı bir ürün veya çözüm araştırdığında, model cevabını tamamladıktan sonra ilgili işletmenin başlığı, kısa açıklama metni ve yönlendirme butonunu içeren kart gösterilir.</p>

        <h3>Yanıt İçi Ayrılmış Sponsorlu Bölüm</h3>
        <p>Karşılaştırmalı ve çoklu seçenekli sorularda cevaptan görsel olarak kalın sınırlarla ayrılmış, arka planı farklılaştırılmış sponsorlu alternatif kutusu olarak sunulur.</p>

        <h3>Sponsored Agents (Sponsorlu Ajanlar)</h3>
        <p>Kullanıcının diyalog içinde doğrudan çağırabileceği ve işlem (sipariş, rezervasyon, randevu) tamamlayabileceği interaktif kurumsal asistan kartı formatıdır.</p>

        <h2>2. Sponsorlu Reklam ile Organik ChatGPT Tavsiyesi Farkı</h2>
        <p>Sponsorlu reklam açık 'Sponsorlu' ibaresi taşırken, organik tavsiyeler modelin web indeksinden sentezlediği tarafsız alıntılardır. Ücretli reklam vermek modelin tarafsız tavsiyesini etkilemez.</p>

        <div class="actions">
          <a href="/chatgpt-reklamlari/">ChatGPT Reklam Yönetimi</a>
          <a href="/chatgpt-reklam-verme/">ChatGPT Reklam Verme Rehberi</a>
        </div>
      </main>
    `
  ],
  'chatgpt-reklam-verme-sartlari': [
    'ChatGPT Reklam Verme Şartları: OpenAI Ads Uygunluk ve Politika Rehberi | Yapay Zekâda Reklam',
    'OpenAI Ads Manager üzerinden reklam yayınlamak için gereken tüzel kişilik, vergi doğrulaması, yasaklı sektörler ve açılış sayfası uygunluk kriterleri.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/openai-ads-manager/">OpenAI Ads Manager</a> | <a href="/chatgpt-reklam-verme/">Reklam Kurulumu</a> | <a href="/chatgpt-reklamlari/">Ajans Desteği</a></nav>
      </header>
      <main>
        <h1>ChatGPT Reklam Verme Şartları: OpenAI Ads Uygunluk ve Politika Rehberi</h1>
        <p>OpenAI Ads Manager self-servis erişimi Türkiye'de aktif durumdadır. Ancak bir hesap açabilmeniz, her reklamınızın veya her sektörün onaylanacağı anlamına gelmez. Reklam verebilmek için tüzel şirket kaydı, şeffaf açılış sayfası ve OpenAI Reklam Politikalarına tam uyum şarttır.</p>

        <h2>1. Zorunlu Hesap ve Tüzel Kişilik Kriterleri</h2>
        <p>Bireysel şahıslar için reklam hesabı açılamaz; geçerli bir vergi kimlik numarası (VKN) ve yasal unvan beyan edilmelidir. Şirket alan adına bağlı kurumsal e-posta ve iki aşamalı doğrulama (2FA) zorunludur.</p>

        <h2>2. Yasaklı ve Kısıtlı Sektörler</h2>
        <p>Yetişkin içerik, silah/tütün, yasa dışı maddeler, bahis/kumar, regülasyonsuz kripto para projeleri ve yanıltıcı içerikler kesinlikle yasaktır. Sağlık, finans, hukuk ve eğitim alanları özel belge ve incelemeye tabidir.</p>

        <h2>3. Açılış Sayfası (Landing Page) Şartları</h2>
        <p>OpenAI OAI-AdsBot tarayıcısı sayfanızı ziyaret ettiğinde sayfa hızlı açılmalı, tüzel unvan ve KVKK bilgileri yer almalı, manipülatif sayaçlar bulunmamalı ve reklam metniyle tam mesaj uyumu (message match) sağlanmalıdır.</p>

        <div class="actions">
          <a href="/iletisim/">Uygunluk Denetimi İsteyin</a>
          <a href="/chatgpt-reklam-verme/">İlk Kampanyanızı Kurun</a>
        </div>
      </main>
    `
  ],
  'chatgpt-reklam-ajansi-nasil-secilir': [
    'ChatGPT Reklam Ajansı Nasıl Seçilir? 15 Maddelik Karar Rehberi | Yapay Zekâda Reklam',
    'Şirketiniz için yapay zekâ ve ChatGPT reklam ajansı seçerken sormanız gereken 15 kritik soru, şeffaflık kriterleri ve bütçe tuzakları.',
    `
      <header class="site-header">
        <nav><a href="/">Ana Sayfa</a> | <a href="/yapay-zekada-reklam-ajansi/">Yapay Zekada Reklam Ajansı</a> | <a href="/chatgpt-reklamlari/">ChatGPT Reklam Yönetimi</a> | <a href="/chatgpt-reklam-fiyatlari/">Fiyatlar</a></nav>
      </header>
      <main>
        <h1>ChatGPT Reklam Ajansı Nasıl Seçilir? 15 Maddelik Karar Rehberi</h1>
        <p>ChatGPT reklamları yeni bir mecra olduğu için piyasada klasik Google Ads kalıplarını kopyalamaya çalışan veya gerçek dışı vaatlerde bulunan yaklaşımlar görülebilir. Doğru ajansı seçmek için 15 maddelik denetim listesini inceleyin.</p>

        <h2>Kritik Ajans Seçim Kriterleri</h2>
        <p>Ajansın OpenAI Ads Manager ve self-servis panel mimarisine hakim olması, klasik anahtar kelimeler yerine doğal dil 'Context Hints' yazabilmesi, reklam hesabını işletmenizin tüzel mülkiyetinde açması ve medya bütçesi ile yönetim bedelini şeffaf biçimde ayırması şarttır.</p>
        <p>Ayrıca OAI-AdsBot ile OAI-SearchBot farkını bilmeli, özel açılış sayfası optimizasyonu ve Conversions API (CAPI) kurabilmelidir.</p>

        <div class="actions">
          <a href="/yapay-zekada-reklam-ajansi/">Ajans Hizmetimizi İnceleyin</a>
          <a href="/iletisim/">Ücretsiz Strateji Seansı Başlatın</a>
        </div>
      </main>
    `
  ],
}

const source = await readFile('index.html', 'utf8')
for (const [slug, [title, description, staticHtml]] of Object.entries(pages)) {
  const url = `https://www.yapayzekadareklam.com/${slug}/`
  const isService = slug.startsWith('hizmetler/') || ['chatgpt-reklamlari','geo-yapay-zeka-gorunurlugu','yapay-zeka-ile-reklam-uretimi','yapay-zeka-platformlarinda-reklam','yapay-zekada-reklam-ajansi'].includes(slug)
  const isNews = slug.startsWith('haberler/') && slug !== 'haberler'
  const isArticle = isNews || slug.startsWith('blog/') || ['chatgptde-markam-nasil-cikar','chatgpt-reklam-verme','chatgpt-reklam-fiyatlari','chatgpt-reklamlari-turkiye','openai-ads-manager','chatgpt-seo','chatgptde-web-sitem-neden-cikmiyor','sozluk','chatgpt-reklamlari-nerede-gorunur','chatgpt-reklam-verme-sartlari','chatgpt-reklam-ajansi-nasil-secilir'].includes(slug)
  const primarySchema = {
    '@type': isNews ? 'NewsArticle' : isArticle ? 'Article' : isService ? 'Service' : 'WebPage',
    name: title,
    headline: isArticle ? title : undefined,
    datePublished: isNews ? '2026-09-29' : undefined,
    dateModified: '2026-09-29',
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
