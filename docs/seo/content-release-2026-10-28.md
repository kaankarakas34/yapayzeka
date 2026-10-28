# 28 Ekim 2026 — Haber ve GEO rehber paketi

Kapsam: kullanıcının verdiği 18 içeriklik haber paketi ve 15 içeriklik GEO paketi. Toplam 33 içerik işlendi. Site toplamı 74 URL; bunların 28’i yeni URL (17 haber, 10 rehber ve rehber merkezi). Türkiye rehberi ve beş GEO konusu mevcut URL’lerinde geliştirildi. Kaynak dosyalar yerel `output/seo/news-2026-10-28/` altında korunuyor.

## İçerik ve URL kararları

- `/haberler/`: 18 içerik, kategori filtresi, Türkçe arama, arşiv ve `/haberler/rss.xml`. RSS yalnız haber klasöründeki 17 yeni kaydı içerir; rehberler haber olarak etiketlenmez.
- `/rehber/`: 15 rehber, Türkçe arama, ana rehber ve 30 günlük plan bağlantıları.
- Türkiye paketi `/chatgpt-reklamlari-turkiye/` içinde güncellendi. Önerilen ikinci Türkiye haber URL’si açılmadı.
- Marka önerisi → `/chatgptde-markam-nasil-cikar/`; teknik görünme → `/chatgptde-web-sitem-neden-cikmiyor/`; içerik teknikleri → `/chatgpt-seo/`; ölçüm → `/blog/geo-performansi-nasil-olculur/`.
- llms.txt/robots/schema bölümleri mevcut teknik pilota eklendi. Pilotun ilk el kontrol kaydı ve kaynakları korundu; 46 sayfalık gözlemin paket öncesine ait olduğu açıklandı.
- Önerilen fakat hiç yayımlanmamış kopya URL’ler için 301 eklenmedi. Ayrıntılı kararlar `geo-guide-url-map-2026-10-28.csv` içinde.
- Eylül ayındaki 60 ülke haberi tarihsel kayıt olarak korundu; 21 Ekim’deki 89 ülke açıklamasına güncelleme bağlantısı eklendi.

## Kaynak doğrulama ve editoryal düzeltmeler

Kaynak kayıtları: `content-source-register-2026-10-28.csv`. Platform açıklaması, özgün araştırma ve haber aktarımı ayrı etiketlenir. Hayalî yazar, müşteri veya kampanya sonucu eklenmedi. Yazar mevcut kurumdur; profil `/hakkimizda/` adresine bağlıdır.

- Creative enhancements için resmî OpenAI belgesi bulundu. 30 Ekim değişikliği gelecek tarih olarak korunuyor; özelliğin hesapta başladığı veya sonuç verdiği söylenmiyor.
- Semrush araştırmasının özgün yayını 21 Ekim. %88 oranı 400 ABD masaüstü sorgusu ve Eylül 2025–Ağustos 2026 örneklemiyle sınırlandı; tüm ticari sorgulara genellenmedi.
- Trafik araştırmasında Marie Haynes’in özgün analizi eklendi. %0,62, Google organik oturumlarına göre orandır; tüm web trafiğindeki pay değildir.
- Google yorum özetleri için resmî yardım belgesi eklendi; ülke/dil ve hassas sektör sınırları korundu.
- ChatGPT alışveriş, ücretli reklam, organik kaynak ve marka tavsiyesi ayrı anlatıldı. Doğrudan ürün feed katılımının onaya bağlı olduğu doğrulandı.
- Google’ın 3 Haziran 2026 AI raporlama duyurusu ve 31 Ağustos yayılım notu kontrol edildi. Rapor gösterimleri ile tıklama/CRM sonucu aynı metrik gibi sunulmuyor.
- Taslaktaki 2023 FAQ zengin sonuç kapsamı güncel değildi. 7 Mayıs 2026 kaldırılma kaydıyla düzeltildi. Özel AI schema veya FAQ görünüm garantisi yok.
- Akademik GEO çalışmasının “%40’a kadar” bulgusu deney ortamıyla sınırlandı.
- Yeni içeriklerin yayın günü 28 Ekim 2026; kaynak olay tarihi ayrı alanda. Güncellenen mevcut sayfaların önceki yayın kaydı korundu. RSS’de bilinmeyen yayın saati üretilmedi.

## Teknik uygulama

- Tek içerik kaynağı: haberler `src/content/news-2026-10.json`, rehberler `src/content/geo-guides-2026-10.json`; mevcut teknik pilot kendi ortak JSON kaynağını korur. React ve JavaScript gerektirmeyen HTML aynı veriden üretilir.
- Habere uygun NewsArticle; araştırma/rehberlere Article. Görünür H1, yazar, tarihler, kapak, kaynaklar ve mainEntityOfPage ile uyumlu JSON-LD. Merkezlerde CollectionPage / ItemList ve gerçek breadcrumb hedefleri.
- Benzersiz title/description, canonical, Article OG türü, PNG sosyal paylaşım kapakları, WebP ve küçük kart görselleri. Toplam 33 özgün açıklayıcı illüstrasyon; kaynak görsel veya platform ekranı kopyalanmadı. Yeniden üretim: `python scripts/generate-news-covers.py` (Pillow).
- Sitemap’te gerçek son değişiklik günleri ve görsel URL’leri; haber RSS keşif bağlantısı. Erişim/indeksleme politikaları içerik örnekleri yüzünden değiştirilmedi.
- Haber/rehber CSS’i statik HTML’de de yüklenir. Uzun kod ve ölçüm tablosu kendi içinde kayar; klavyeyle odaklanabilir.
- İçerik modülü ana sayfanın başlangıç JavaScript paketinden ayrı yüklenir. Haber/rehber kalite kapısı build sonunda otomatik çalışır.
- OneDrive’da gözlenen geçici dosya kilidi için generator değişmeyen dosyaları tekrar yazmaz; sınırlı Windows kilitlerini en fazla üç yazma denemesiyle ele alır, kalıcı hatayı gizlemez.

## Doğrulama

| Kontrol | Sonuç | Kanıt |
|---|---|---|
| TypeScript / Vite production build | Geçti | `output/seo/news-2026-10-28/build.log` |
| Commit’e girecek kaynakların ayrı derlemesi | Geçti; 74 sayfa, 0 hata/uyarı; başlangıç JS 305.526 bayt / 340.000 sınır | `output/seo/news-2026-10-28/staged-build.log` |
| Teknik SEO | 74 sayfa, 0 hata, 0 uyarı | `output/seo/build-gate.json` |
| Haber/rehber kalite kapısı | Ortak şablondaki 32 içerik geçti; özel pilot genel SEO ve tarayıcı kontrolünde ayrıca doğrulandı | `output/seo/news-gate.json` |
| JavaScript açık/kapalı | 33 içerikte metin ve bağlantı eşleşmesi | `output/seo/news-2026-10-28/browser-check.json` |
| Mobil görünüm | 33 içerik 390 px; sayfa taşması yok | Aynı tarayıcı raporu |
| Merkezler | 390 ve 1440 px; 18 haber/15 rehber, arama/filtre/boş durum geçti | Aynı rapor; `output/playwright/content-*.png` |
| Klavye / RSS | SSS Enter, yatay tablo ve RSS geçti | Aynı rapor |
| axe-core 4.14.0 | Dört örnek ana içerikte WCAG 2/2.1 A/AA otomatik ihlal 0; iki sayfada birer manuel inceleme kaydı | Aynı rapor |
| Çalışma hatası / başarısız yerel istek | 0 / 0 | Aynı rapor |
| Önceki bağımsız çalışma | Kapsam dışında kalan 39 dosyanın önceki Git farkı birebir korundu | `output/seo/news-2026-10-28/preservation.json` |

Son görseller ayrıca gözle incelendi. Tam WCAG uygunluğu, Lighthouse/Core Web Vitals veya gerçek kullanıcı performansı iddiası değildir. Analytics tarayıcı testinde boş yanıtla karşılandı; form gönderilmedi.

## Yayın sonrası ölçüm ve bakım

GSC yönetim erişimi ve gerçek sorgu/URL verisi bu oturumda yoktur. Sitemap gönderimi, indekslenme, gerçek doğrulanmış bot IP/WAF logları ve AI atıf artışı tamamlanmış sayılmaz. Yayın sonrası HTTP/metadata doğrulaması bu ölçümlerin yerine geçmez.

30 Ekim creative enhancements durumu, görsel reklam test kapsamı ve Türkiye erişimi değiştiğinde ilgili kayıtlar yeniden kontrol edilmeli. İçerik değiştirilmeden ilk yayın günü yenilenmemeli. Sahiplik: kaynak ve kapsam kontrolü editör ekibi; teknik kapılar geliştirme; GSC/analitik/CRM ölçümü yetkili hesap sahibi. Bu bir bakım önerisidir; zamanlanmış otomasyon kurulmadı.

Başlangıçtaki bağımsız performans/font/logo düzenlemeleri korunur ve bu içerik commit’ine eklenmez. İlgili başlangıç farkı `output/seo/news-2026-10-28/backup/before.patch` içinde; commit öncesi kaynak kopyaları aynı klasördedir.
