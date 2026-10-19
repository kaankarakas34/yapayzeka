# YZR-04 — Resmî kaynak ve iddia kontrolü

Kontrol tarihi: 11 Ekim 2026. Bu tablo, incelenen iddiaların kaydıdır; sitedeki bütün iddiaların doğrulandığı anlamına gelmez. Kaynak değiştiğinde ilgili görünen React içeriği ve generator'daki statik HTML birlikte güncellenir.

| İddia | Kanıt ve durum | Uygulama |
|---|---|---|
| Türkiye self servis erişimi | [Ads Manager Availability](https://help.openai.com/en/articles/20001245-ads-manager-availability) Türkiye'yi Available gösteriyor; faturalandırılan tüzel kişinin ülkesi önem taşıyor. | Mevcut uygunluk ayrımı korundu. Her hesap/reklam için onay varsayılmıyor. |
| Resmî minimum günlük bütçe yok | [Create Campaigns](https://help.openai.com/en/articles/20001210-create-campaigns-for-chatgpt-ads) para birimine bağlı minimum tablosu içeriyor. Eski iddia yanlış. | Fiyat ve statik kurulum rehberi düzeltildi. Resmî minimum ile ajansın örnek pilot bütçesi ayrıldı. |
| Context Hints negatif anahtar kelime gibi engeller | [Create Ad Groups](https://help.openai.com/en/articles/20001211-create-ad-groups-for-chatgpt-ads) bunları kesin eşleme/hedefleme kuralı olarak tanımlamıyor. | Context Hints rehberi, hizmet metinleri, ana sayfa kartı ve panel tablosundaki bu vaatler kaldırıldı. Örnekler gerçekleşmiş kampanya diye etiketlenmiyor. |
| Pixel/CAPI belgelenmiş mi? | [Conversion Measurement](https://help.openai.com/en/articles/20001409-conversion-measurement) iki yöntemi de ve aynı event ID ile tekilleştirmeyi açıklıyor. | Belgelenmiş yetenek olarak kayıtlı; mevcut siteye kurulmuş/çalışıyor denmiyor. Gerçek entegrasyon YZR-08'de hesap ve veri akışıyla test edilecek. |
| CPM vs. CPC birim simülasyonu | [Create Campaigns](https://help.openai.com/en/articles/20001210-create-campaigns-for-chatgpt-ads) teklif modelleri. | Fiyat ve rehber sayfalarında TBM odaklı ($900 test bütçesi, ~$36 efektif CPM) ile salt CPM odaklı ($300 bütçe, ~$12 CPM) modeller netleştirilerek matematiksel tutarlılık sağlandı (YZR-06). |
| Sponsored Agents erişim ve coğrafi kısıtları | [Sponsored Agents in ChatGPT Ads](https://help.openai.com/en/articles/20001524-sponsored-agents-in-chatgpt-ads) ABD kapalı alpha. | Haber, sözlük ve hizmet sayfalarında Türkiye'ye açık olmadığı, yalnızca ABD kurumsal alpha aşamasında olduğu şeffaf olarak belirtildi. |
| İnceleme süresi ve onay garantisi | [Ad Review Process](https://help.openai.com/en/articles/20001206-ads-manager-beta-overview) politika incelemesi. | Kod ve içeriklerde 24-48 saat gibi evrensel onay garantisi verilmedi; her reklamın OpenAI reklam politikası onayına tabi olduğu korundu. |
| Canlı konsol simülasyonu vs. gerçek test (YZR-14) | LLM olasılıksal çıktı ve veri şeffaflığı ilkeleri. | AuditModule ve ilgili sayfalarda aracın algoritmik bir varlık (Entity) ve taranabilirlik simülatörü olduğu, deterministik kesinlik garantisi olmadığı şeffaflık notuyla belgelendi (YZR-14). |

## Tamamlanan Doğrulamalar

Tüm iddia ve şeffaflık kontrolleri tamamlandı. Kaynak kontrolü, gerçek reklam hesabı erişiminin veya kampanya sonucunun yerini tutmaz.


