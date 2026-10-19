# YZR-02 — Mevcut URL'lerle mimari ve karar planı

İnceleme tarihi: 17 Ekim 2026. Kaynaklar: `page-inventory.csv`, `query-ownership.csv`, mevcut HTML ve React navigasyonu. GSC sıralama verisi erişilemedi; bu dosya niyet ve kod incelemesine dayalı öneridir. Yeni sayfa veya 301 uygulanmadı.

## Üç hizmet hattı ve dönüşüm yolu

| Hat | Ana ticari URL | Pillar / araştırma yolu | Dönüşüm hedefi |
|---|---|---|---|
| Ads | `/chatgpt-reklamlari/` | `/chatgpt-reklam-verme/`; fiyat niyeti `/chatgpt-reklam-fiyatlari/` | `/iletisim/` |
| GEO | `/geo-yapay-zeka-gorunurlugu/` | `/chatgptde-markam-nasil-cikar/` | `/yapay-zeka-gorunurluk-analizi/` ve `/iletisim/` |
| AI Marketing | `/yapay-zeka-ile-reklam-uretimi/`, mevcut Google/Meta hizmetleri | `/yapay-zeka-platformlarinda-reklam/` kanal karşılaştırması | `/iletisim/` |

AI kreatif üretimi, Google/Meta yönetimi ve chatbot ayrı hizmet rollerini korur. Ads ile organik GEO aynı sonuç veya tek ölçüm segmenti olarak sunulmamalıdır. `page-decisions.csv` sitemap'teki 46 URL için rol, segment, dönüşüm hedefi, koru/güncelle kararı ve gerekçeyi içerir. Dönüşüm hedefleri önerilen sonraki adımdır; gerçekleşmiş satış veya ölçülen olay değildir.

## Menü önerisi

Mevcut sol menü korunarak öncelik sırası: ChatGPT Reklamları → GEO Organik Görünürlük → AI ile Reklam Üretimi → Google ve Meta AI reklamları. Google Ads `/hizmetler/yapay-zeka-google-ads/`, Meta `/hizmetler/meta-reklam/` ile ayrı erişilebilir olmalı. Rehberler `/blog/`, haberler `/haberler/`, hakkımızda `/hakkimizda/` ve iletişim `/iletisim/` mevcut URL'lerini kullanır. `/hizmetler/` gibi bulunmayan bir menü merkezi oluşturulmaz.

Hızlı rehberler: reklam verme, fiyatlar, marka görünürlüğü ve Context Hints. Menü değişikliklerinin trafik etkisini ölçmek için GSC baseline gerekir; bu turda navigasyon yalnız erişilebilirlik açısından düzeltildi.

## Niyet çakışması adayları

| Aday küme | Ana niyet / sahiplik | Destek sayfanın ayrı rolü ve sonraki karar |
|---|---|---|
| Reklam verme / vermek / reklam yönetimi | Kurulum: `/chatgpt-reklam-verme/`; hizmet: `/chatgpt-reklamlari/` | Aynı kelimenin iki fiil biçimi için yeni URL açma. Hizmet teslimleri ile nasıl yapılır adımlarını ayır. |
| Fiyat / maliyet | Fiyat: `/chatgpt-reklam-fiyatlari/` | `/blog/chatgpt-reklam-maliyeti/` bütçe modelleme ve hesaplama desteği olarak kalır. |
| Marka görünürlüğü / ChatGPT SEO | `/chatgptde-markam-nasil-cikar/` | `/chatgpt-seo/` kavram/metot; `/chatgptde-web-sitem-neden-cikmiyor/` tarama/indeks sorunu; blogdaki marka rehberi teşhis rolü. GSC sonrası birleştirme gereğini değerlendir. |
| Yapay zekâda reklam / yapay zekâ ile reklam verme | `/yapay-zeka-platformlarinda-reklam/` kanal seçimi | İki mevcut blog rehberi için kanal seçimi ile kreatif üretimi/uygulama ayrımını netleştir. Sorgu-sayfa verisi gelmeden silme. |
| Türkiye erişimi / hesap açma | `/chatgpt-reklamlari-turkiye/` ülke uygunluğu | `/blog/turkiyeden-chatgpt-reklam-hesabi/` hesap süreci desteği. Ürün iddiaları güncellemesinde resmî kaynak gerekir. |
| Context Hints | `/blog/chatgpt-ads-context-hints/` teknik rehber | Hizmet sayfası kısa kapsam açıklaması ve rehbere bağlantı sunar; ikinci teknik rehber üretilmez. |

Bu liste gözlenen cannibalization kanıtı değildir. Birden çok URL'nin aynı sorguda görünmesi tek başına hata sayılmaz; niyet, dönem, ülke, cihaz ve performans birlikte değerlendirilir.

## GSC sonrasında kapanış

Sekiz sorgunun gerçek sıralanan URL'lerini mevcut sahiplik tablosuna ekle. Son tamamlanmış 90 gün ve önceki 90 gün için aynı filtreleri kullan. Menü ve içerik kararını bu verilerle kesinleştir. Taşıma gerektiren somut karar oluşursa eski → yeni URL için tek atlamalı 301, canonical, sitemap ve iç linkleri aynı yayında güncelle; karşılaştırmalı kayıt tut. Şimdiki taşıma listesi boştur.
