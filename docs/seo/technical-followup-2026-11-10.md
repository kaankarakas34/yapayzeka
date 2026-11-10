# 10 Kasım 2026 — Yayın sonrası teknik SEO kontrolü

74 sayfalık içerik yayınının ardından canlı HTTP/metadata kontrolü yeniden çalıştırıldı: 78 istek, 0 hata. Bilinmeyen URL gerçek 404 döndü; sitemap sayfalarında canonical, tek H1, HTML içerik türü ve noindex kontrolü geçti. Bu test GSC verisi veya indekslenme kanıtı değildir.

## Eklenen yayın kontrolü

`scripts/seo-link-audit.mjs`, `npm run build` sonundaki mevcut SEO kapılarına eklendi. Aşağıdaki sorunlarda sıfırdan farklı çıkış koduyla yayını durdurur:

- Sitemap sayfalarında eksik dosya veya kırık yerel bağlantı.
- Aynı veya farklı sayfada bulunamayan bölüm hedefi; bozuk yüzde kodlaması; tekrar eden HTML `id` değerleri.
- HTML'de referans verilen eksik yerel görsel, srcset adayı, sosyal paylaşım görseli, script, stil, font, manifest veya bağlantılı dosya.
- Ana sayfadan statik bağlantılar izlenerek ulaşılamayan sitemap sayfası; kendi aralarında bağlantısı olan kopuk gruplar da buna dahildir.

Sorgu parametreleri dosya adından ayrılır. Türkçe ve HTML karakter kodlamaları, eski `a[name]` hedefleri, tarayıcının `#top` hedefi ve metin parçaları desteklenir. Yorumlar, script/stil gövdeleri ve HTML olarak kaçırılmış kod örnekleri bağlantı sayılmaz. Dış sitelerden istek yapılmaz. Denetim, projenin ürettiği statik HTML biçimine yöneliktir; genel amaçlı tarayıcı/HTML doğrulayıcısı değildir. CSS içindeki URL'ler ve JavaScript sonrası DOM bu testin kapsamı dışındadır.

Rapor her sayfanın gelen/giden bağlantılarını ve ana sayfadan en kısa statik bağlantı mesafesini içerir. Bu mesafe arama motorunun gerçek tarama derinliği olarak yorumlanmaz.

## Doğrulama

- Kaynaklar: 74 sayfa, 715 bağlantı, 72 bölüm bağlantısı; 0 hata.
- Tüm sayfalara ana sayfadan en çok üç statik bağlantıyla ulaşılabiliyor. Ana sayfa dışındaki her sayfaya en az bir farklı sayfadan bağlantı var.
- Altı regresyon senaryosu geçti: Türkçe hedefler ve public dosyaları; bozuk bölüm hedefleri; eksik görsel/script/font/dosya; örnek kod ve dış URL ayrımı; tekrar eden kimlikler ve kopuk döngüler; hatalı yayın için CLI başarısız çıkış kodu.
- Yalnız commit'e girecek kaynakların ayrı üretim derlemesi geçti: TypeScript/Vite başarılı; 74 sayfada teknik SEO 0 hata/uyarı; 32 ortak içerik kontrolü geçti; başlangıç JavaScript'i 305.526 / 340.000 bayt.
- Aynı üretim çıktısında yeni kontrol: 715 bağlantı, 72 bölüm bağlantısı ve 76 farklı yerel HTML dosya referansı; 0 hata.

Kanıtlar: `output/seo/2026-11-10/live-baseline.json`, `source-links.json`, `existing-build-links.json`, `release-build.log` ve `staged-tree/output/seo/link-gate.json`. `output/` önceki teslimlerde olduğu gibi Git kapsamı dışındadır.

## Açık kalanlar

GSC mülk erişimi, gerçek sorgu/URL performansı, doğrulanmış bot/WAF kayıtları ve AI kaynak gösterimi ölçülmedi. Önceki yerel font/logo/ana sayfa performans değişiklikleri bu commit'e dahil edilmedi. Yeni içerik veya URL üretilmedi; içerik yayın/güncelleme tarihleri yenilenmedi.

Tekrar çalıştırma: `npm run test:seo`, `npm run build`; yalnız mevcut çıktıyı incelemek için `npm run seo:links`; canlı kontrol için `npm run seo:live`.
