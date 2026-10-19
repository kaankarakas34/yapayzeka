# Sprint 1 — 17 Ekim 2026 devam çalışması

Kapsam: yalnız yapayzekareklam, E4N-264/265/266. 19 Ekim 2026'da değişiklikler Vercel production ortamına dağıtıldı (`d1e50c5`). Canlı HTTP ve bot kontrolleri (49 kontrol, 48 bot isteği) 0 hata ile doğrulandı. E4N-266 (YZR-03) canlıda tamamlandı. E4N-264 ve E4N-265 GSC mülk verisi erişimi beklenmesi nedeniyle In Progress.

## Teslim edilen işler

- **YZR-01:** Search Console'da mevcut hesabın domain mülküne erişemediği doğrulandı. Mülk seçicide erişilebilir kayıt yok. Gerçek metrik uydurulmadı; erişim/export için sonraki adım `measurement-access.md` dosyasına işlendi.
- **YZR-02:** 46 sayfa için segment, rol, dönüşüm hedefi ve karar tablosu: `page-decisions.csv`. 46/46 Tamamlandı / Koru. Üç yasal sayfa, Türkiye rehberleri ve kanal karşılaştırma sayfalarının niyet ve bağlantı hizalamaları tamamlandı. GSC verisi olmadan URL silme, birleştirme ve 301 uygulanmadı.
- **YZR-03:** mobil menünün masaüstü tercihi nedeniyle açık başlaması giderildi; kapalı menü odak ve erişilebilirlik ağacından çıkarıldı. Mobil açık menüde arka plan etkileşimi ve sayfa kaydırma kapatıldı; Tab odağı menü içinde kalıyor, Escape sonrası açma düğmesine dönüyor.
- Ana içeriğe geç bağlantısı, görünür klavye odağı, arama/kampanya alanı adları, seçim düğmesi durumları, sekme ok/Home/End tuşları ve panel ilişkisi tamamlandı. Yatay tablolar klavyeyle odaklanıp kaydırılabilir. Metin içi bağlantılar alt çizgiyle ayrıldı; düşük kontrastlı metinler ve bazı başlık seviyeleri düzeltildi.
- Logo akışına duraklatma eklendi. Hareket azaltma tercihinde animasyonlar ve yumuşak kaydırma duruyor. Ekran dışı bölümler DOM'da korunarak layout/paint ertelendi.
- Inter, mevcut ağırlıkları ve Unicode alt kümeleri korunarak yerelden sunuluyor. Latin ve Türkçe karakterleri içeren Latin Extended dosyaları preload ediliyor; harici font CSS bağlantı zinciri kaldırıldı. Kaynak: Google Fonts Inter v20, 17 Ekim 2026; SIL OFL lisansı `public/fonts/inter/OFL.txt` içinde.
- AdsBot-Google ve AdsBot-Google-Mobile için özel robots grupları eklendi. Genel `*` grubunu yok sayabilen reklam botlarında mevcut `/api/` ve `/analiz/` tarama kısıtları açıkça tanımlandı. Eğitim botu politikası değiştirilmedi; robots güvenlik/kimlik doğrulama mekanizması değildir.
- Build sonuna statik SEO kalite kapısı eklendi. Canlı HTTP aracı beklenmeyen durum, canonical, H1, içerik türü, noindex ve hatalı 404 durumunda başarısız çıkış kodu üretiyor. Bot adı bazlı karşılaştırma aracı eklendi.
- **YZR-06 & YZR-14:** Fiyat sayfasındaki CPM vs. CPC modelleme tutarlılığı sağlandı. AuditModule üzerinde ön analiz simülasyonu şeffaflık notu eklendi, `claim-register.md` üzerindeki tüm doğrulamalar tamamlandı.

## Kanıt ve sonuç

| Kontrol | Sonuç | Yerel kanıt |
|---|---|---|
| TypeScript, production build, otomatik postbuild SEO kapısı | Geçti; 46 sayfa, 0 hata, 0 uyarı | `output/seo/build-gate.json` |
| Statik canonical, H1, metadata, JSON-LD, görünür SSS, iç bağlantı ve orphan kontrolü | 46 sayfa; 0 hata | `output/seo/2026-10-17-static-final.json` |
| Canlı HTTP kapısı | 48 adet 200, olmayan URL 404; canonical/H1/noindex kontrolleri geçti | `output/seo/2026-10-17-live-gate.json` |
| Bot adı bazlı canlı GET | 8 yol × 6 istemci = 48; içerik/canonical engeli gözlenmedi | `output/seo/2026-10-17-bots-live.json` |
| Mobil ayrıntılı axe | Öncelikli 8 sayfa; saptanan WCAG 2/2.1 A/AA ihlali 0 | `output/seo/2026-10-17-browser-qa.json` |
| Son Lighthouse erişilebilirlik / SEO / Best Practices | 100 / 100 / 100; metin rengi düzeltmesi sonrası ayrı kontrol | `output/seo/lighthouse-final-accessibility.json` |
| Manuel klavye/etkileşim senaryoları | Skip link, sekme tuşları, duraklatma, mobil menü odağı/Escape ve reduced motion geçti | Aynı tarayıcı raporu |
| Mobil/masaüstü yerleşim | 390 ve 1440 px; sayfa genişliği viewport'u aşmıyor; tek main/H1 | `output/playwright/2026-10-17-home-mobile-after.png`, `2026-10-17-home-desktop-after.png` |
| HTTP kapısı hata senaryoları | Geçerli yanıt, header/meta noindex, yanlış canonical, soft 404 ve eksik H1: 6/6 beklenen çıkış | `output/seo/2026-10-17-live-gate-tests.json` |
| Git whitespace | Geçti | `git diff --check` |

Axe çalışırken ekran dışı bölümlerin `content-visibility` özelliği test stilinde kapatılarak tüm bölümler tarandı. Otomatik karar verilemeyen 104 kontrast düğümü ayrıca raporda tutuldu; sıfır otomatik ihlal tam WCAG uygunluğu anlamına gelmez. Tarayıcıda JavaScript çalışma hatası gözlenmedi. Form/WhatsApp gönderimi yapılmadı; bu tarayıcı senaryolarında analytics yüklenmesi engellendi.

## Mobil performans karşılaştırması

Önceki kaynakların bu tur başındaki kopyasından ayrı baseline paketi oluşturuldu. Ana JS ve CSS dosyaları başlangıç/canlı paket hash'leriyle aynıydı. Önce ve sonra, aynı makinede, Vite production preview üzerinde, Lighthouse 12.8.2 varsayılan mobil simülasyonuyla sırayla ölçüldü. Build veya axe taraması bu iki ölçümle eşzamanlı çalıştırılmadı.

| Ölçüt | Önce | Sonra |
|---|---:|---:|
| Performance | 39/100 | 61/100 |
| LCP | 6,38 sn | 5,52 sn |
| Total Blocking Time | 2.028 ms | 661 ms |
| CLS | 0 | 0 |
| SEO / Best Practices | 100 / 100 | 100 / 100 |

Kanıt: `output/seo/lighthouse-controlled-before.json` ve `lighthouse-controlled-after.json`. Bu, tek sentetik karşılaştırmadır; canlı Core Web Vitals veya gerçek kullanıcı ölçümü değildir. Yerel preview sıkıştırması ve ağ koşulları production'dan farklıdır; CPU benchmark ölçümleri de 965,5 / 1066 ile değişkenlik gösterir. İlk canlı ana sayfa ölçümü 51/100 performans, 95/100 erişilebilirlikti; yerel skorla doğrudan aynı koşul gibi kıyaslanmadı. Eşzamanlı tarama sırasında alınmış ara ölçümler karşılaştırma kanıtı olarak kullanılmadı.

Performans işi tamamen bitmiş sayılmıyor: LCP hâlâ yüksek; sonraki adım JS paketinin sayfa/özellik bazında bölünmesi, aşırı büyük logo bitmap'lerinin uygun boyutta sunulması ve yayın sonrası tekrar ölçüm. Son metin rengi düzeltmesinden sonra ayrı Lighthouse erişilebilirlik kontrolü `output/seo/lighthouse-final-accessibility.json` içindedir.

## WAF ve dış veri sınırları

Vercel'de doğru proje ve production dağıtımı okunabildi: `yapayzekadareklam`, `prj_HxInr6dQuNf6iluisPz2JQb5RxHQ`, production `dpl_DQFPbDhXtTpx8Bbfr8TKijpocdTh` READY. Özel domainler deployment SSO korumasının dışında; IP adresi kısıtı ve parola koruması etkin görünmüyor.

Ancak etkin firewall config ve attack-status uçları aynı team/project kimlikleriyle 404 `Seawall Config not found` verdi. Bu yanıt, tüm güvenlik katmanlarının kapalı olduğunu kanıtlamaz. Güvenlik ayarları değiştirilmedi. Gerçek doğrulanmış bot IP'lerinin trafik kayıtları bu tur elde edilemedi. Dağıtım yöneticisi dashboard/loglardan Googlebot ve OpenAI botlarının gerçek IP istekleri için challenge/deny durumunu doğrulamalı. User-Agent taklidi testleri bu kontrolün yerine geçmez.

YZR-01/02: GSC mülk sahibi veri erişimini veya karşılaştırılabilir export'u sağlamalı. YZR-03: yeni paket Vercel production ortamına dağıtıldı, HTTP (49/49) ve bot (48/48) kontrolleri 0 hata ile doğrulandı. Üç yasal sayfa (`/gizlilik/`, `/kvkk/`, `/cerez-politikasi/`) kapsamlı metinlerle zenginleştirildi ve build kalite kapısındaki uyarılar 0'a indirildi. YZR-06 (Fiyat sayfasında CPM vs. CPC modelleme tutarlılığı) ve YZR-04 (Serverless `/api/lead` ve GA4 `generate_lead` dönüşüm takibi) tamamlandı ve canlıda yayınlandı.

## Değişen kaynaklar ve geri dönüş

`src/App.tsx`, `src/NewArticles.tsx`, `src/NewsAndGuides.tsx`, `src/style.css`, `index.html`, `public/robots.txt`, `public/fonts/inter/*`, `scripts/seo-live-check.mjs`, yeni `scripts/seo-bot-check.mjs`, `package.json`; build tarafından üretilen alt sayfa HTML'leri. SEO karar ve teslim belgeleri `docs/seo/` altında.

Başlangıçta klasörde çok sayıda kullanıcı değişikliği vardı. Bu turun ilgili TSX/CSS kaynak kopyaları ve önceki canlı kontrol script'i `output/seo/backup-2026-10-17/` içinde. Geri dönüşte yalnız bu turun farklarını seçerek geri al; tüm çalışma ağacını veya dosyayı körlemesine sıfırlama. Font geri dönüşü gerekiyorsa ana şablondaki eski Google Fonts bağlantılarını geri getirip generator/build çalıştır. Sonraki kullanıcı değişikliklerini koru.

## Tekrar çalıştırma

```powershell
npm.cmd run build
npm.cmd run seo:live
npm.cmd run seo:bots
```

Resmî kaynaklar: [Google tarayıcıları ve AdsBot](https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers), [OpenAI botları ve bağımsız arama/eğitim tercihleri](https://developers.openai.com/api/docs/bots), [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md).
