# Yapay Zekâda Reklam (ChatGPT Ads & GEO Ajansı)

ChatGPT Ads yönetimi, yapay zekâ reklam stratejisi ve GEO (Generative Engine Optimization) odaklı web sitesi.

- **Canlı Yayın:** [https://www.yapayzekadareklam.com](https://www.yapayzekadareklam.com)
- **Teknoloji:** Vite, React 19, TypeScript
- **Tasarım:** OpenAI Brand Guidelines & ChatGPT UI Design System

## Geliştirme

```bash
npm install
npm run dev
```

## Üretim Derlemesi

```bash
npm run build
```

Derleme sonunda teknik SEO, JavaScript bütçesi, içerik tutarlılığı ve iç bağlantı kontrolleri otomatik çalışır. Hata bulunursa komut başarısız olur.

Bağlantı kontrolü tüm sitemap sayfalarında bölüm hedeflerini, tekrar eden HTML kimliklerini, yerel görsel/dosya referanslarını ve ana sayfadan statik bağlantılarla erişimi denetler. Sayfa başına bağlantılar ve erişim derinliği `output/seo/link-gate.json` raporunda tutulur.

```bash
npm run test:seo
npm run seo:links
npm run seo:live
```

`seo:links` mevcut `dist` çıktısını inceler; güncel çıktı için önce `npm run build` çalıştırın. Kaynak HTML için `npm run seo:links -- --root .` kullanılabilir. `seo:live` canlı sitenin HTTP/metadata durumunu inceler. Bu kontroller indekslenme, Search Console performansı veya AI kaynak gösterimi ölçmez.
