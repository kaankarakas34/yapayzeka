# Teknik GEO / AEO editoryal standardı

Tarih: 28 Ekim 2026. YZR-10 için tekrar kullanılabilir şablon. Pilot: `/blog/chatgptde-kaynak-gosterilmek-icin-site-nasil-hazirlanir/`.

## URL ve niyet kararı

Önce `query-ownership.csv` ve `page-decisions.csv` üzerinden ana sorunun sahibini seç. Aynı soruyu başka biçimde sormak yeni URL gerekçesi değildir. Yeni URL önerisi için ayrı kullanıcı ihtiyacı, mevcut sayfanın neden yetmediği, özgün veri ve bakım sorumlusu yazılmalı. GSC verisi olmadan çakışma yaşandığı veya birleştirme gerektiği sonucuna varma.

`yzr10-brief-url-map.csv` C08 için 12, C09 için 12 **önerilen** aday içerir. P kimliği bu adayların özgün brief olmadığını belirtir. 11 Ekim strateji metnindeki asıl Excel/Markdown listesi sağlanmadığı için birebir eşleştirme henüz doğrulanmış değildir. Bu dosya yayın kotası veya 24 tamamlanmış makale listesi değildir. Tam dosya geldiğinde başlıkları ve kapsamları karşılaştır, satırları güncelle.

## Kopyalanabilir içerik brief'i

```markdown
URL / korunacak niyet:
Okurun tek ana sorusu:
Hedef kitle ve kapsam dışı durum:
Hazırlayan gerçek kişi veya kurum / profil URL'si:
İlk yayın tarihi ve dayanağı:
Son esaslı değişiklik tarihi / son kaynak kontrol tarihi:

Kısa cevap:
İki-üç cümleyle soruyu cevapla; bu uzunluk editoryal tercihtir.

Uygulama:
Adımlar, gerekli erişimler, kontrolün beklenen çıktısı.
Karar vermeyi kolaylaştırıyorsa karşılaştırma tablosu.

Kanıt:
Kendi ölçümünde ortam, tarih, yöntem, URL/örneklem ve çıktı yolu.
Ürün iddiasında doğrudan resmî belge, ilgili bölüm ve kontrol tarihi.
Örnek hesaplamayı, varsayımı, müşteri sonucunu ve kendi testini ayrı etiketle.

Sınırlar:
Bu yöntem neyi ölçmedi? Kimler için uygun değil? Erişim/veri eksikleri neler?

Bağlantılar:
1 ana rehber (pillar), 2–4 ilgili destek rehberi ve gerekliyse 1 hizmet/iletişim CTA'sı.
Bağlantı etiketini hedef sayfanın amacıyla eşleştir.

SSS:
Okurdan gelen ek sorular ve görünür cevaplar.
Schema: yalnız görünür içerikle uyumlu, uygun mevcut tür.

Bakım:
Belge/ürün değişikliği tetikleyicisi, inceleme sorumlusu, sonraki kontrol.
Ölçüm:
GSC sorgu/URL, gerçek yönlendirme, doğrulanmış lead ve tekrarlı AI soru kaydı.
```

## Yayın kontrolü

- Hazırlayan kimliği gerçeğe dayanmalı. Bu pilotta mevcut kurum kullanıldı; kişi, unvan veya müşteri vakası üretilmedi.
- Pilotun mevcut `2026-09-29` yayın kaydı korundu; ilk yayın tarihi bağımsız olarak doğrulanmadı. Esaslı değişiklik ve kaynak kontrolü `2026-10-28`. Diğer sayfaların tarihleri bu çalışma nedeniyle yenilenmedi.
- Kaynak kontrol tarihi, yayın tarihi ve deney tarihi birbirinin yerine kullanılmamalı. Esaslı değişiklik yoksa `dateModified`/sitemap tarihi yenilenmemeli.
- Google AI özellikleri için özel schema veya llms.txt zorunluluğu iddia edilmemeli. SSS kullanıcıya hizmet eder; Google FAQ zengin sonuç özelliği güncel belge kaydına göre kaldırıldı.
- Arama/eğitim bot tercihleri bağımsız değerlendirilmeli; mevcut site politikası editoryal örnek yüzünden değiştirilmemeli.
- Pilotun HTML ve React içeriği `src/content/technical-geo-guide.json` kaynağından üretilir. Başlık, açıklama, yazar, tarihler, tablolar, kod örnekleri, SSS ve bağlantıları bu dosyada güncelle.
- `npm.cmd run build` ve 46 sayfalık SEO/bundle kapıları geçmeli. Pilotun JavaScript açık/kapalı ana metni, schema, bağlantı hedefleri, içindekiler ve SSS davranışı tarayıcıda karşılaştırılmalı.
- Mobilde tablolar/kod blokları kendi içinde kaymalı; sayfanın tamamında yatay taşma oluşmamalı. CTA ve SSS klavyeyle erişilebilir olmalı.

## Kaynak kaydı

28 Ekim 2026’da açılıp kontrol edildi:

- [OpenAI tarayıcıları](https://developers.openai.com/api/docs/bots): bot işlevleri, bağımsız izinler, IP doğrulama bağlantıları.
- [Google AI özellikleri](https://developers.google.com/search/docs/appearance/ai-features): teknik erişim ve görünen içerikle uyumlu işaretleme.
- [Google robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro) ve [robots meta](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag): tarama/indeksleme ayrımı.
- [Article](https://developers.google.com/search/docs/appearance/structured-data/article): kimlik ve tarih alanları.
- [Google değişiklik kaydı](https://developers.google.com/search/updates#may-2026): FAQ zengin sonucu değişikliği.

Kontrol sıfır hata verse bile bunun indekslenme, kaynak gösterimi veya satış artışı kanıtı olmadığı her teslimde korunmalı.
