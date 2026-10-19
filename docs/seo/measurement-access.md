# YZR-01 ve YZR-04 — Ölçüm erişimi ve baseline

## 17 Ekim 2026 — GSC erişimi gerçekten denetlendi

Chrome'daki etkin Google hesabıyla `sc-domain:yapayzekadareklam.com` mülkü açıldı. Search Console “Maalesef bu mülke erişiminiz yok” yanıtı verdi. Mülk seçicide erişilebilir kayıt yerine yalnız “Mülk ekle” seçeneği göründü. Yeni mülk oluşturulmadı, sahiplik doğrulaması veya hesap/izin değişikliği yapılmadı.

YZR-01 kapanışı için mülk sahibinin bu hesapla veri erişimi sağlaması veya doğrulanmış mülkten son tamamlanmış 90 gün + önceki 90 gün export'unu paylaşması gerekiyor. Sekiz sorgu, sayfa, ülke ve cihaz kesitleri önceki talimatlarla aynı filtrelerde alınmalı. 550 kelime dosyası da hâlâ mevcut değil. `gsc-baseline-template.csv` ölçülmüş veri içermez; boş metrikler sıfırla doldurulmadı. YZR-02'nin gerçek sıralanan URL ve cannibalization kararı bu veri gelene kadar açık.

Niyet ve mevcut kod üzerinden ilerletilen bağımsız teslimler: `architecture-plan.md` ve sitemap'teki 46 sayfayı kapsayan `page-decisions.csv`. Bunlar GSC gözlemi yerine geçmez.

11 Ekim 2026 tarihinde kodda GA4 `G-0C7ERE4GWG` ve Google site doğrulama meta etiketi mevcut. Bu, GA4 veya Search Console yönetim erişiminin bulunduğunu veya verinin doğru toplandığını kanıtlamaz. Bu oturumda GSC/GA4 verisi okuyabilen bağlı araç bulunamadı.

## Search Console başlangıcı

- Mülk: doğrulanacak domain mülkü `yapayzekadareklam.com` veya canonical host'un URL-prefix mülkü `https://www.yapayzekadareklam.com/`.
- Performans / Arama sonuçları: Web türünde son tamamlanmış 90 gün; önceki 90 günle karşılaştırma. Son tamamlanmış tarihi GSC'den al; bugünün eksik verisini kıyaslama.
- Sorgular ve Sayfalar tablolarını ayrı dışa aktar. Ülke ve cihaz tablolarını da al. Bu tabloların satır bazında birbiriyle birleşebildiğini varsayma.
- Sekiz öncelikli sorgu için sorgu filtresi açıp Sayfalar tablosunu dışa aktar; bir sorguda iki URL varsa cannibalization adayı olarak kaydet. Ülke/cihaz kesitleri gerekiyorsa filtreli ayrı rapor al.
- Export'un mülkünü, filtrelerini, tarih aralığını ve elde edilme tarihini yaz. Veri vermeyen sorguda sıfır gösterim varsayma; “export'ta yok” durumunu koru.

`gsc-baseline-template.csv` henüz ölçülmemiş, boş metrikli şablondur. `query-ownership.csv` niyet bazında önerilen hedefleri içerir; GSC'de gerçekten sıralanan URL'ler değildir.

## Lead akışında görülen durum

`src/App.tsx` içindeki LeadContactForm, formu dolduran kişinin bilgileriyle WhatsApp URL'si oluşturup yeni pencere açıyor. Bir API/CRM kaydı oluşturmuyor. Mesajın gerçekten gönderildiği veya nitelikli lead'e dönüştüğü uygulamadan anlaşılamaz.

İlk düzeltme: “iletildi” başarı iddiası kaldırıldı; kullanıcıya WhatsApp'ta Gönder'e basması gerektiği söyleniyor. Bu iş akışının açılması `generate_lead` olarak sayılmamalı. CRM entegrasyonundan sonra yalnız sunucuda doğrulanmış başvuru bu olayı üretmeli. Şimdilik analytics ve CRM test lead'i kabul kriteri tamamlanmadı.

## İlerleme için eksikler

GSC export'u/okuma erişimi, GA4 okuma erişimi, gerçek CRM veya başvuru saklama yöntemi ve nitelikli lead tanımı. Mevcut kimlik/doğrulama etiketleri değiştirilmedi. Örnek müşteriye veya WhatsApp alıcısına test mesajı gönderilmedi.
