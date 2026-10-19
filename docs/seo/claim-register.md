# YZR-04 — Resmî kaynak ve iddia kontrolü

Kontrol tarihi: 11 Ekim 2026. Bu tablo, incelenen iddiaların kaydıdır; sitedeki bütün iddiaların doğrulandığı anlamına gelmez. Kaynak değiştiğinde ilgili görünen React içeriği ve generator'daki statik HTML birlikte güncellenir.

| İddia | Kanıt ve durum | Uygulama |
|---|---|---|
| Türkiye self servis erişimi | [Ads Manager Availability](https://help.openai.com/en/articles/20001245-ads-manager-availability) Türkiye'yi Available gösteriyor; faturalandırılan tüzel kişinin ülkesi önem taşıyor. | Mevcut uygunluk ayrımı korundu. Her hesap/reklam için onay varsayılmıyor. |
| Resmî minimum günlük bütçe yok | [Create Campaigns](https://help.openai.com/en/articles/20001210-create-campaigns-for-chatgpt-ads) para birimine bağlı minimum tablosu içeriyor. Eski iddia yanlış. | Fiyat ve statik kurulum rehberi düzeltildi. Resmî minimum ile ajansın örnek pilot bütçesi ayrıldı. |
| Context Hints negatif anahtar kelime gibi engeller | [Create Ad Groups](https://help.openai.com/en/articles/20001211-create-ad-groups-for-chatgpt-ads) bunları kesin eşleme/hedefleme kuralı olarak tanımlamıyor. | Context Hints rehberi, hizmet metinleri, ana sayfa kartı ve panel tablosundaki bu vaatler kaldırıldı. Örnekler gerçekleşmiş kampanya diye etiketlenmiyor. |
| Pixel/CAPI belgelenmiş mi? | [Conversion Measurement](https://help.openai.com/en/articles/20001409-conversion-measurement) iki yöntemi de ve aynı event ID ile tekilleştirmeyi açıklıyor. | Belgelenmiş yetenek olarak kayıtlı; mevcut siteye kurulmuş/çalışıyor denmiyor. Gerçek entegrasyon YZR-08'de hesap ve veri akışıyla test edilecek. |
| Reklam organik cevabı değiştirir | [Ads in ChatGPT](https://help.openai.com/en/articles/20001047-ads-in-chatgpt) sistemleri ayrı tutuyor. | Ads/GEO ayrımı korunuyor. |

## Hâlâ kontrol edilecekler

- Sponsored Agents, ürün feed ve hesap bazındaki coğrafi kısıtların tüm mevcut sayfalarda tutarlılığı.
- Evrensel 24–48 saat inceleme süresi ve 2FA/vergi zorunlulukları gibi panel/ülke bazındaki iddialar.
- Fiyat sayfasındaki simülasyonun birim kontrolü: 25.000 gösterim × 12 USD CPM = 300 USD; 500 tıklama × 1,80 USD CPC = 900 USD. Aynı kampanya için aynı harcama diye sunulmamalı. Bu tutarsızlık YZR-06'da ayrı model/senaryo olarak düzeltilecek.
- Gerçek model testleri ile “canlı konsol simülasyonu” tanımının ayrımı (YZR-14).

Kaynak kontrolü, gerçek reklam hesabı erişiminin veya kampanya sonucunun yerini tutmaz.
