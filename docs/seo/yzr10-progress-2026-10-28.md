# YZR-10 — Teknik GEO / AEO pilot teslimi

Tarih: 28 Ekim 2026. Görev: E4N-273. Durum: yerel uygulama ve doğrulama tamam; canlı yayın yapılmadı. Görev tam kapanmadı: asıl C08/C09 brief listesi ve önceki görevlerin veri/yayın kapanışları bekleniyor.

## Sonuç

Mevcut `/blog/chatgptde-kaynak-gosterilmek-icin-site-nasil-hazirlanir/` URL’si uygulamalı teknik rehber olarak geliştirildi. Yeni URL, birleştirme veya yönlendirme eklenmedi. Ana rehber `/chatgptde-markam-nasil-cikar/`; üç destek rehberi ChatGPT SEO, site görünmeme teşhisi ve GEO ölçümü. İletişim CTA’sı `/iletisim/`.

- Arama/eğitim/kullanıcı ziyareti ayrımı düzeltildi. GPTBot için arama izni zorunluluğu, belgelenmemiş llms.txt faydası, kesin alıntı ve güven skoru iddiaları kaldırıldı.
- Gerçek kurum kimliği, tarihler, resmî kaynaklar, kısa cevap, içindekiler, üç tablo, iki kod örneği, üç görünür SSS, kendi sitemizden yerel kontrol kaydı ve ölçüm sınırları eklendi.
- React ve statik HTML aynı `src/content/technical-geo-guide.json` dosyasından besleniyor. Article yazar/tarih bilgileri görünen içerikle eşleşiyor. Pilot için FAQPage eklenmedi; özel AI schema iddiası yok.
- Yalnız pilotun `dateModified` ve sitemap `lastmod` tarihi 28 Ekim’e güncellendi. Mevcut ilk yayın kaydı korundu; bağımsız tarih doğrulaması yapılmadı. Diğer URL’lerin tarihleri yenilenmedi.
- `yzr10-brief-url-map.csv`: C08 12 + C09 12 öneri adayının mevcut URL ve bölümlere eşleştirmesi. Kaynak statüsü her satırda açık. Asıl Excel/Markdown dosyasının birebir eşleştirmesi yerine geçmez.
- `editorial-standard.md`: tekrar kullanılabilir brief, kanıt, kaynak, bakım, iç link ve yayın kontrol şablonu.

## Doğrulama

| Kontrol | Sonuç | Yerel kanıt |
|---|---|---|
| TypeScript ve production build | Geçti | `output/seo/yzr10-build.log` |
| Statik SEO kalite kapısı | 46 sayfa; 0 hata, 0 uyarı | `output/seo/build-gate.json` |
| Başlangıç JS bütçesi ve ertelenmiş modüller | 293.216 bayt; 340.000 bayt sınırının altında; ihlal yok | `output/seo/bundle-gate.json` |
| JavaScript açık/kapalı içerik | 101 metin bloğu ve 19 bağlantı eşleşiyor | `output/seo/yzr10-browser-check.json` |
| Article ve görünür bilgiler | Tek H1; yazar, yayın ve değişiklik tarihleri eşleşiyor | Aynı tarayıcı raporu |
| Mobil / masaüstü taşma | 390/390 ve 1440/1440 px; üç tablo kendi içinde kayıyor | Aynı rapor ve `output/playwright/yzr10-390.png`, `yzr10-1440.png` |
| Etkileşim | Klavyeyle yatay tablo kaydırma, Enter ile SSS, içindekiler ve iletişim CTA’sı geçti | Aynı tarayıcı raporu |
| İç bağlantılar | Altı farklı hedef 200; CTA sonrasında iletişim H1’i görüldü | Aynı tarayıcı raporu |
| Tarayıcı çalışma hatası | 0 pageerror | Aynı tarayıcı raporu |
| Önceden mevcut değişiklikler | Bu işin dokunmadığı 46 dosyanın önceki Git farkı birebir korundu | `output/seo/yzr10-preservation.json` |
| Whitespace | `git diff --check` geçti | Komut çıktısı |

Üretim önizlemesi yalnız yerelde incelendi. Analytics testte boş yanıtla karşılandı; form gönderilmedi, lead veya gerçek analitik sonucu ölçülmedi. Son görsellerde mobil tablo metni ayrıca gözle kontrol edildi. Bu, Lighthouse/CWV, tam erişilebilirlik, canlı bot/WAF veya AI kaynak gösterimi testi değildir.

## Değişen kaynaklar

`src/content/technical-geo-guide.json`, `src/NewArticles.tsx`, `src/style.css`, `scripts/render-technical-geo.mjs`, `scripts/generate-pages.mjs`, pilot URL’nin `index.html` dosyası, `public/sitemap.xml`, `public/llms.txt`, `docs/seo/claim-register.md` ve bu görevin üç yeni dokümanı.

Başlangıçta çok sayıda kullanıcı değişikliği vardı. İlgili kaynakların kopyaları ve önceki Git farkı `output/seo/yzr10-backup/` içinde saklandı. `src/Home.tsx`, logo dosyaları ve diğer önceki farklar korunuyor; bu teslimin değişikliği gibi değerlendirilmemeli.

## Açık kalanlar

1. Özgün C08/C09 listesini öneri matrisiyle karşılaştırmak; bu nedenle 24 gerçek brief’in eşleştirmesi tamamlandı denmiyor.
2. YZR-01/02 için gerçek GSC erişimi/export ve sorgu–URL gözlemleri. Önceki görevlerin tamamlandığı varsayılmıyor; YZR-09 kapsamı bu pilotta genişletilmedi.
3. Yayın sonrasında canlı HTTP, kaynak erişimi ve doğrulanmış bot logları; ardından aynı soru setiyle görünürlük ölçümü. Yerel kontrol 0 hatayla bitse de görünürlük artışı kanıtlanmış değildir.

Kaynaklar ve 28 Ekim kontrol kaydı `editorial-standard.md` ve görünür pilot rehberdedir. Tekrar üretim: `npm.cmd run build`. Tarayıcı kontrol fonksiyonu `output/seo/yzr10-browser-check.cjs` içinde; tamamlanmış paket üzerinde Vite preview açıldıktan sonra Playwright CLI `run-code --filename` ile çalıştırılabilir.
