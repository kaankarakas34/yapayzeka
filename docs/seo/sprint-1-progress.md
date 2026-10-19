# Sprint 1 — İlk uygulama teslimi

Tarih: 11 Ekim 2026. Proje: yalnız yapayzekareklam. Durum: değişiklikler production ortamına yayınlandı ve canlıda doğrulandı. İlk dört görevin tamamı bitmiş sayılmıyor.

## Canlı yayın — 11 Ekim 2026, 20:36 TRT

- Canlı adres: https://www.yapayzekadareklam.com
- Vercel dağıtımı: `dpl_DQFPbDhXtTpx8Bbfr8TKijpocdTh`, production, READY, Vite; yaklaşık 20 saniyede hazırlandı.
- Yayın mevcut çalışma klasöründen yapıldı. Temel commit `8388ee7099fe861a8b8d7f0680083763a8398b34`; commit edilmemiş hazırlık ve SEO değişiklikleri de pakete dahildir.
- İlk yayının loglarında API için eksik Node tipleri bulundu. `@types/node` doğrudan geliştirme bağımlılığı yapıldı ve tsconfig'e `node` eklendi. API ayrı TypeScript kontrolünden geçti; ikinci yayının 89 log kaydında hata bulunmadı.
- Canlı kontrol: 46 HTML sayfası + robots.txt + sitemap.xml HTTP 200, olmayan sayfa 404. Ana sayfa JS dosyaları yerel production paketiyle aynı; statik SSS ve schema 5 eşleşen kayıt içeriyor. API'ye GET beklenen 405 yanıtını veriyor; gerçek analiz veya e-posta gönderimi tetiklenmedi.
- Mobil 390 px kontrolde yatay taşma yok, tek H1 var; tarayıcı konsolunda hata/uyarı yok.
- Kanıt: `output/seo/live-after-deploy.json`, `output/seo/release-verification.json`. GSC/CRM erişim işleri açık kalıyor.

## YZR-03: Teknik düzeltmeler

- Sitemap'teki 46 sayfanın statik HTML, başlık, açıklama, canonical, H1, iç link, JSON-LD ve sitemap/noindex ilişkisi tarandı.
- Altı hizmet sayfasında olmayan `/hizmetler/` URL'sine bağlanan breadcrumb kaldırıldı; mevcut iki seviyeli URL hiyerarşisi kullanıldı.
- On açık bot grubuna `/api/` ve `/analiz/` kısıtları eklendi. Önceki genel grubun erişim niyeti korunuyor; eğitim botlarına mevcut kamu içeriği izni değiştirilmedi. Robots kuralları erişim güvenliği/kimlik doğrulama değildir.
- JavaScript çalışmadan ana sayfadan bağlantı yolu olmayan 13 sayfa için kaynak ve kurumsal bağlantılar eklendi. React footer'ındaki ilgili kaynak linkleri de tamamlandı.
- Ana sayfanın FAQ schema'sı görünür SSS'den farklıydı. React, statik HTML ve FAQ JSON-LD artık `src/content/home-faq.json` kullanıyor. Bu kontrol rich result uygunluğu veya görünürlük garantisi değildir.
- Ana sayfadaki iki `ucretsiz-analiz` kimliği ayrıldı; AI analiz CTA'sı doğru bölüme yöneliyor.
- 390 px ekran görüntüsünde kesilen marka logosu için mobil yerleşim düzeltildi.

Tekrar çalıştırma:

```powershell
npm.cmd run build
node scripts/seo-audit.mjs --root dist --output output/seo/after-build.json --inventory docs/seo/page-inventory.csv
node scripts/seo-live-check.mjs
```

## YZR-01 ve YZR-02: Veri ve URL sahipliği

`page-inventory.csv`: 46 URL'nin mevcut başlığı, açıklaması, canonical, H1, schema türü ve statik içerik uzunluğu.

`query-ownership.csv`: kaynak metindeki sekiz sorgu için niyet bazında ana ve destek URL'leri. “Reklam verme” ve “reklam vermek” aynı URL'ye; fiyat niyeti fiyat sayfasına; organik marka sorusu GEO rehberine eşlendi. Bu bir hedef haritasıdır, GSC'de gözlenen sıralama sonucu değildir. Trafik verisi görülmeden URL silme/birleştirme veya 301 uygulanmadı.

`gsc-baseline-template.csv`: boş metrikli başlangıç şablonu; `measured=false`. GA4 kimliği ve site doğrulama etiketi kodda var, fakat yönetim verisi erişimi doğrulanmadı. Gerçek GSC export'u/okuma erişimi ve önceki dönem karşılaştırması bekleniyor. İçe aktarma talimatları `measurement-access.md` içinde.

## YZR-04: Ölçüm ve iddia kontrolü

- WhatsApp formundaki “mesaj iletildi” metni düzeltildi. Form yalnız mesajı hazırlar; kullanıcı WhatsApp'ta Gönder'e basmalıdır. CRM kaydı ve nitelikli lead ölçümü henüz kurulmadı.
- Güncel resmî kaynakların kontrolüyle minimum bütçe iddiası düzeltildi: para birimine bağlı günlük minimum ile ajansın örnek aylık pilot bütçesi ayrıldı.
- Context Hints'in negatif anahtar kelime gibi kesin hariç tutma yaptığı iddiası rehber/hizmet metinlerinden kaldırıldı. Ad Group ile Campaign alanlarının panel tablosundaki ayrımı düzeltildi.
- Fiyat ve Context Hints sayfalarında hem görünen React içeriği hem generator'daki statik HTML güncellendi. Diğer ürün/politika iddialarının kontrol listesi `claim-register.md` içinde.

## Kontrol kanıtı

| Kontrol | Sonuç | Kanıt |
|---|---|---|
| TypeScript + production build | Geçti; 46 HTML giriş derlendi | `npm.cmd run build` |
| Yerel teknik kontrol | 46 sayfa, 0 hata, 3 uyarı | `output/seo/after-build.json` |
| Canlı HTTP başlangıç kontrolü | 46 sitemap sayfası + robots + sitemap = 48 adet 200; olmayan URL = 404 | `output/seo/live-baseline.json` |
| Mobil ana sayfa | 390 px, belge genişliği 390; logo ekrana sığıyor; duplicate ID yok | `output/playwright/yzr-home-mobile-after.png`, tarayıcı ölçümü |
| Masaüstü ana sayfa | 1440 px, belge genişliği 1440; tek H1; logo sığıyor | Tarayıcı ölçümü |
| Görünür SSS/schema | Beş soru ve cevap birebir eşleşiyor | Tarayıcı DOM/JSON-LD karşılaştırması |
| Fiyat/Context Hints mobil | Yeni bilgi görünüyor; eski yanlış ifadeler yok; yatay sayfa taşması yok | Yerel preview tarayıcı kontrolü |
| WhatsApp formu | Popup taklit edilerek mesaj hazırlama durumu ve yeni açıklama doğrulandı | Yerel test; dışarıya mesaj/API gönderimi yapılmadı |
| Browser console | Ana sayfa kontrolünde 0 hata/uyarı | Playwright CLI console |
| Git diff whitespace | Geçti | `git diff --check` |

İlk raporda 29 hata/13 uyarı vardı: 26 gerçek breadcrumb/robots tutarsızlığı düzeltildi. Üç kısa yasal sayfa, içerik uzunluğu tek başına erişim hatası olmadığından inceleme uyarısı olarak sınıflandırıldı. 13 statik bağlantı erişim uyarısı giderildi. İlk rapor `output/seo/before.json` içinde korunuyor. FAQ, ID ve mobil logo düzeltmeleri ek kontrollerde bulundu.

Bu sonuçlar bir Lighthouse/Core Web Vitals raporu, tam erişilebilirlik denetimi, tüm harici linklerin kontrolü, Google indexlenme kanıtı veya gerçek GEO görünürlük testi değildir.

## Kalan işler

1. Gerçek GSC/GA4 export'u veya okuma erişimiyle baseline ve sorgu–URL gözlemini tamamla (YZR-01/02).
2. Lead saklama/CRM yöntemini belirleyip Ads/GEO/AI Marketing için test başvurusunu kaynaktan satış aşamasına izleyebil (YZR-04).
3. Sentetik mobil performans ve detaylı erişilebilirlik ölçümü; WAF/bot durumunu dağıtım ortamında doğrula (YZR-03).
4. Kısa yasal sayfaların gerçek işletim süreçleriyle uyumu için içerik incelemesi; kalan ürün iddialarının resmî kaynak kontrolü.
5. Yerel paket yayınlandığında aynı HTTP/robots/schema kontrollerini canlıda tekrar çalıştır. Henüz canlı değişiklik başarısı raporlanmadı.

## Değişiklik sınırı ve geri dönüş

Çalışma başlarken çok sayıda commit edilmemiş değişiklik vardı. Bunlar sıfırlanmadı. Yeni düzeltmeler mevcut dosyaların üzerine küçük bölümler halinde uygulandı. İlgili dosyaların başlangıç kopyaları `output/seo/backup/` içinde. Geri dönüş gerekirse yalnız bu oturumun değişikliklerini karşılaştırarak geri al; sonraki kullanıcı değişikliklerini ezebileceği için dosyaları körlemesine eski kopyayla değiştirme. `output/` ve tarayıcı oturumları Git'ten hariç tutuldu.

Resmî teknik kaynaklar: [Google robots grupları](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt), [BreadcrumbList](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb), [OpenAI botları](https://developers.openai.com/api/docs/bots). Ürün iddialarının ayrı kaynakları `claim-register.md` içindedir.
