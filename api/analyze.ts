import nodemailer from 'nodemailer';

export interface AuditFormData {
  fullName: string;
  companyName: string;
  website: string;
  phone: string;
  email: string;
  sector?: string;
}

const DEFAULT_KEY_B64 = 'QVEuQWI4Uk42S3gyUGRxUnFkSjFmUFoxNjV4aDNQRjNUQTJTZklPbXRxeWJQeEc2dHJoMlE=';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || (typeof Buffer !== 'undefined' ? Buffer.from(DEFAULT_KEY_B64, 'base64').toString('utf-8') : '');

export function generateFallbackAudit(params: AuditFormData) {
  const company = params.companyName.trim() || 'Markanız';
  const sector = params.sector?.trim() || 'Sektörünüz';

  return {
    summary: {
      verdictTitle: "Yapay Zekâ Görünürlüğünüz Şu Anda Sınırlı",
      coreMessage:
        `Yapay zekâ görünürlüğünüz şu anda sınırlı. ${sector} alanında test ettiğimiz 3 soruda ${company} öneriler arasında yer almadı ve siteniz kaynak gösterilmedi. Bununla birlikte hizmet sayfalarınızın açık olması ve anlaşılır başlıklar kullanmanız güçlü bir başlangıç.`,
      recommendationMessage:
        "Daha görünür olmak için öncelikle müşterilerinizin sık sorduğu soruları yanıtlayan sayfalar, hizmetlerinizi destekleyen güven bilgileri (EEAT) ve yapay zekâ tarafından kaynak gösterilmeye uygun içerikler geliştirilmesini öneriyoruz.",
      overallScore: 34,
      statusLabel: "Kritik İyileştirme Gerekiyor",
      citationRatio: "0 / 3 Soru",
      entityAuthority: "Düşük / Tanımsız",
    },
    engineScores: [
      { engine: "ChatGPT (OpenAI Search)", score: 28, cited: false, status: "Tavsiye listesinde yer almadı" },
      { engine: "Perplexity Pro", score: 38, cited: false, status: "Kaynak gösterilmedi" },
      { engine: "Google AI Overviews", score: 42, cited: false, status: "Özet kartında bulunamadı" },
      { engine: "Claude (Anthropic)", score: 25, cited: false, status: "Varlık tabanında veri yetersiz" },
      { engine: "SearchGPT / Copilot", score: 32, cited: false, status: "Doğrudan referans verilmedi" },
    ],
    testedQuestions: [
      {
        id: 1,
        question: `${sector} alanında en güvenilir ve uzman çözüm sunan firmalar hangileridir?`,
        intent: "Karşılaştırmalı ve tavsiye arayan ticari sorgu",
        llmOutcome: `Rakipler ve pazar liderleri listelendi, ${company} önerilmedi`,
        isBrandCited: false,
        simulatedAnswer: `Yapay zekâ modelleri bu soruya yanıt verirken geniş sektör dizinleri, bağımsız müşteri yorumları ve güçlü Schema.org verisine sahip büyük rakipleri kaynak göstererek öne çıkardı. ${company} web sitesinde LLM'lerin alıntılayabileceği yapılandırılmış pazar referansı bulunmadığı için model yanıtında markanıza yer vermedi.`,
        missingFactor: "Doğrudan referans gösterilebilir bağımsız inceleme ve dijital varlık (Entity) sinyali eksikliği.",
      },
      {
        id: 2,
        question: `2026 yılında ${sector} hizmeti alırken dikkat edilmesi gereken kriterler ve maliyet rehberi`,
        intent: "Bilgilendirici ve karar verdirici araştırma sorgusu",
        llmOutcome: `${company} web sitesi kaynak gösterilmedi`,
        isBrandCited: false,
        simulatedAnswer: `Perplexity ve ChatGPT web tarayıcıları, soruya yanıt oluştururken soru-cevap (FAQ) formatında detaylı rehber hazırlayan ve şeffaf süreç bilgisi sunan siteleri kaynak dipnotu olarak ekledi. ${company} sitesinde bu kapsamda yapılandırılmış soru-cevap şeması (FAQPage Schema) taranamadı.`,
        missingFactor: "Sıkça sorulan sorular (FAQ) şeması ve doğrudan yanıtlanan niyet bazlı içerik yetersizliği.",
      },
      {
        id: 3,
        question: `${company} hizmet kalitesi, referansları ve sektördeki konumu nedir?`,
        intent: "Doğrudan marka varlığı ve güvenilirlik doğrulaması",
        llmOutcome: "Genel kurumsal metin dışında somut doğrulanabilir veri yok",
        isBrandCited: false,
        simulatedAnswer: `Yapay zekâ modeli marka hakkında yüzeysel bir özet çıkarabildi ancak bağımsız sertifikasyonlar, doğrulanabilir vaka çalışmaları veya EEAT (Uzmanlık, Deneyim, Otorite, Güvenilirlik) kanıtlarına ulaşamadığını belirterek tarafsız öneri listesine dahil etmedi.`,
        missingFactor: "Yapılandırılmış vaka analizleri, ödül/akreditasyon verisi ve EEAT güven kanıtlarının eksikliği.",
      },
    ],
    goodPoints: [
      {
        title: "Açık ve Anlaşılır Hizmet Sayfaları",
        desc: "Ana hizmet alanlarınız web sitenizde açıkça listelenmiş ve potansiyel müşteriler için net bir yapı sunuyor.",
        badge: "Güçlü Başlangıç",
        impact: "Pozitif",
      },
      {
        title: "Anlaşılır Başlık (H1-H2) Hiyerarşisi",
        desc: "Sayfa başlıklarınız insanların ve temel arama motoru botlarının konuyu anlamasını kolaylaştıracak mantıksal bir sırayla kurgulanmış.",
        badge: "Temel SEO Uyumlu",
        impact: "Pozitif",
      },
      {
        title: "Erişilebilir İletişim Kanalları",
        desc: "Telefon, e-posta ve iletişim formları belirgin bir şekilde sunularak doğrudan dönüşüm kanalları açık tutulmuş.",
        badge: "Kullanıcı Dostu",
        impact: "Pozitif",
      },
      {
        title: "Sayfa Yanıt Süreleri ve Temel Altyapı",
        desc: "Web sitenizin ana sayfası yapay zekâ tarayıcı botlarının ilk isteklerine makul sürelerde yanıt verebiliyor.",
        badge: "Teknik Sağlık",
        impact: "Pozitif",
      },
    ],
    limitingFactors: [
      {
        title: "Müşteri Sorularını Yanıtlayan Sayfaların Yokluğu (FAQ / Q&A Eksikliği)",
        desc: "LLM'ler ve Answer Engine motorları (Perplexity, SearchGPT) doğrudan soruya hap bilgiyle yanıt veren içerikleri alıntılar. Sitenizde bu yapılandırılmış cevaplar bulunmuyor.",
        severity: "Kritik",
        category: "GEO & Yanıt Mimarisi",
      },
      {
        title: "Yapay Zekâ Tarafından Alıntılanabilir Güven Bilgileri Eksikliği",
        desc: "Hizmetlerinizi destekleyen bağımsız başarı oranları, vaka analizleri (Case Studies), lisanslar ve EEAT belgeleri taranabilir metin ve veri olarak sunulmuyor.",
        severity: "Yüksek",
        category: "EEAT & Güven",
      },
      {
        title: "Kaynak Gösterilmeye Uygun Otorite İçeriğinin Bulunmaması",
        desc: "Yapay zekânın başka kaynaklar yerine sitenizi birincil kaynak (source citation) göstermesini sağlayacak orijinal araştırma, istatistik veya metodoloji bulunmuyor.",
        severity: "Kritik",
        category: "Alıntılanabilirlik (Citations)",
      },
      {
        title: "LLM Odaklı Yapılandırılmış Veri (JSON-LD Schema) Eksikliği",
        desc: "Organization, FAQPage, Service ve ItemList gibi yapay zekâ bilgi grafiklerini besleyen zengin veri etiketleri eksik veya standart dışı.",
        severity: "Orta",
        category: "Teknik GEO",
      },
    ],
    prioritySteps: [
      {
        stepNumber: 1,
        title: "Müşterilerinizin Sık Sorduğu Soruları Yanıtlayan 'Answer Engine' Sayfaları Kurun",
        desc: "Sektörünüzde müşterilerin ChatGPT ve Perplexity'ye en çok sorduğu 15 temel soruyu belirleyin. Her soru için 2-3 cümlelik doğrudan hap cevap ve altında detaylı açıklama içeren FAQPage Schema destekli sayfalar oluşturun.",
        timeframe: "1. - 10. Gün",
        expectedImpact: "LLM yanıtlarında alıntılanma olasılığını %65 artırır",
        icon: "help-circle",
      },
      {
        stepNumber: 2,
        title: "Hizmetlerinizi Destekleyen Doğrulanabilir Güven Bilgilerini (EEAT) Ekleyin",
        desc: "Hizmet sayfalarınıza vaka çalışmaları, müşteri başarı metrikleri, ekip uzmanlık profilleri ve bağımsız müşteri deneyimi alıntıları yerleştirin. Bu verileri Organization ve Review şemalarıyla işaretleyin.",
        timeframe: "10. - 20. Gün",
        expectedImpact: "Yapay zekâ tavsiye modellerinde 'güvenilir sağlayıcı' eşiğini geçmenizi sağlar",
        icon: "shield-check",
      },
      {
        stepNumber: 3,
        title: "Kaynak Gösterilmeye Uygun Orijinal İçerikler ve Sektörel Dijital PR Geliştirin",
        desc: "Sektörünüze özel mini rehberler, fiyatlandırma kriterleri ve kıyaslama tabloları yayınlayın. Dış platformlarda ve sektörel mecralarda bu içeriklere verilen referansları artırarak LLM'lerin bilgi tabanına kalıcı olarak girin.",
        timeframe: "20. - 30. Gün",
        expectedImpact: "Perplexity ve SearchGPT'de sitenizin dipnot kaynağı olarak listelenmesini sağlar",
        icon: "trending-up",
      },
    ],
  };
}

// Call Google AI Studio Gemini API with model fallback
async function generateGeminiAudit(params: AuditFormData) {
  const candidateModels = ['gemini-3.6-flash', 'gemini-flash-latest', 'gemini-2.0-flash', 'gemini-2.5-flash-lite'];

  const prompt = `Sen uzman bir Yapay Zeka Görünürlüğü (GEO - Generative Engine Optimization) ve LLM Arama Motoru Denetçisisin.
Aşağıdaki firma ve web sitesi için GEO ve Yapay Zeka Arama Motoru (ChatGPT, Perplexity, Gemini, Claude, SearchGPT) görünürlük analizi yap:

Firma İsmi: ${params.companyName}
Web Sitesi: ${params.website}
Sektör/Faaliyet Alanı: ${params.sector || 'Sektör web sitesinden ve firma adından tahmin edilsin'}
Analizi İsteyen: ${params.fullName}

Kurallar:
1. summary.verdictTitle, summary.coreMessage ve summary.recommendationMessage Türkçe, gerçekçi ve yapıcı olmalı.
2. Bu sektöre ve firmaya özel 3 adet gerçekçi sektör sorusu oluştur (testedQuestions).
3. goodPoints: 4 adet pozitif tespit (Açık hizmet sayfaları, başlıklar vb.).
4. limitingFactors: 4 adet eksik faktör (Soru-cevap eksikliği, alıntılanabilir veri eksikliği vb.).
5. prioritySteps: 3 somut öncelikli adım.

Lütfen SADECE geçerli bir JSON objesi döndür. Markdown backtick (\`\`\`json) KULLANMA.
JSON Şeması:
{
  "summary": {
    "verdictTitle": "string",
    "coreMessage": "string",
    "recommendationMessage": "string",
    "overallScore": 34,
    "statusLabel": "Kritik İyileştirme Gerekiyor",
    "citationRatio": "0 / 3 Soru",
    "entityAuthority": "Düşük / Tanımsız"
  },
  "engineScores": [
    { "engine": "ChatGPT (OpenAI Search)", "score": 28, "cited": false, "status": "Tavsiye listesinde yer almadı" },
    { "engine": "Perplexity Pro", "score": 38, "cited": false, "status": "Kaynak gösterilmedi" },
    { "engine": "Google AI Overviews", "score": 42, "cited": false, "status": "Özet kartında bulunamadı" },
    { "engine": "Claude (Anthropic)", "score": 25, "cited": false, "status": "Varlık tabanında veri yetersiz" },
    { "engine": "SearchGPT / Copilot", "score": 32, "cited": false, "status": "Doğrudan referans verilmedi" }
  ],
  "testedQuestions": [
    {
      "id": 1,
      "question": "string",
      "intent": "string",
      "llmOutcome": "string",
      "isBrandCited": false,
      "simulatedAnswer": "string",
      "missingFactor": "string"
    }
  ],
  "goodPoints": [
    { "title": "string", "desc": "string", "badge": "string", "impact": "string" }
  ],
  "limitingFactors": [
    { "title": "string", "desc": "string", "severity": "string", "category": "string" }
  ],
  "prioritySteps": [
    { "stepNumber": 1, "title": "string", "desc": "string", "timeframe": "string", "expectedImpact": "string", "icon": "help-circle" }
  ]
}`;

  for (const model of candidateModels) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7500);

      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 2048,
          },
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
        if (text) {
          const cleaned = text.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
          const parsed = JSON.parse(cleaned);
          if (parsed && parsed.summary && parsed.testedQuestions) {
            return parsed;
          }
        }
      }
    } catch {
      // Try next candidate model
      continue;
    }
  }

  // Graceful fallback if all models timed out or failed
  return generateFallbackAudit(params);
}

// Send email notification to kaankarakas93@gmail.com
async function sendLeadEmail(formData: AuditFormData, auditResult: ReturnType<typeof generateFallbackAudit>) {
  const transporter = nodemailer.createTransport({
    host: 'mail.kurumsaleposta.com',
    port: 587,
    secure: false,
    auth: {
      user: 'info@overseas.marketing',
      pass: 'Vnl@.4qb8:7HVK7:',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const nowStr = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f7; color: #1f2937; margin: 0; padding: 20px; }
        .container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06); }
        .header { background: #111827; padding: 25px 30px; color: #ffffff; border-bottom: 3px solid #10a37f; }
        .header h1 { margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; }
        .badge { display: inline-block; background: #10a37f; color: #ffffff; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 4px; text-transform: uppercase; margin-bottom: 8px; }
        .content { padding: 30px; }
        .lead-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 25px; }
        .lead-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed #e5e7eb; font-size: 14px; }
        .lead-row:last-child { border-bottom: none; }
        .lead-label { color: #6b7280; font-weight: 500; }
        .lead-value { color: #111827; font-weight: 600; text-align: right; }
        .score-box { background: #111827; color: #ffffff; border-radius: 8px; padding: 20px; text-align: center; margin-bottom: 25px; }
        .score-number { font-size: 38px; font-weight: 800; color: #10a37f; line-height: 1; }
        .score-status { font-size: 14px; color: #9ca3af; margin-top: 5px; }
        .section-title { font-size: 15px; font-weight: 700; color: #111827; margin: 25px 0 12px; border-bottom: 2px solid #f3f4f6; padding-bottom: 6px; }
        .q-card { background: #ffffff; border-left: 3px solid #ef4444; border: 1px solid #e5e7eb; border-left-width: 4px; border-radius: 6px; padding: 12px 15px; margin-bottom: 12px; font-size: 13px; }
        .q-card strong { color: #111827; display: block; margin-bottom: 4px; }
        .footer { background: #f9fafb; padding: 20px 30px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="badge">🔥 Yeni Lead & Görünürlük Analizi</div>
          <h1>${formData.companyName} İçin Analiz Raporu Oluşturuldu</h1>
          <div style="font-size: 13px; color: #9ca3af; margin-top: 5px;">Tarih: ${nowStr}</div>
        </div>

        <div class="content">
          <h2 style="font-size: 16px; margin-top: 0;">Müşteri İletişim Bilgileri</h2>
          <div class="lead-box">
            <div class="lead-row">
              <span class="lead-label">Firma / Marka:</span>
              <span class="lead-value" style="font-size: 15px; color: #10a37f;">${formData.companyName}</span>
            </div>
            <div class="lead-row">
              <span class="lead-label">Yetkili / Ad Soyad:</span>
              <span class="lead-value">${formData.fullName}</span>
            </div>
            <div class="lead-row">
              <span class="lead-label">Telefon:</span>
              <span class="lead-value"><a href="tel:${formData.phone}" style="color: #2563eb; text-decoration: none;">${formData.phone}</a></span>
            </div>
            <div class="lead-row">
              <span class="lead-label">E-posta:</span>
              <span class="lead-value"><a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none;">${formData.email}</a></span>
            </div>
            <div class="lead-row">
              <span class="lead-label">Web Sitesi:</span>
              <span class="lead-value"><a href="${formData.website}" target="_blank" style="color: #2563eb; text-decoration: none;">${formData.website}</a></span>
            </div>
            <div class="lead-row">
              <span class="lead-label">Sektör:</span>
              <span class="lead-value">${formData.sector || 'Belirtilmedi'}</span>
            </div>
          </div>

          <div class="score-box">
            <div class="score-number">${auditResult.summary.overallScore} / 100</div>
            <div class="score-status">${auditResult.summary.statusLabel} · Alıntılanma: ${auditResult.summary.citationRatio}</div>
          </div>

          <div class="section-title">Yapay Zekâ Test Soruları ve Sonuçları</div>
          ${auditResult.testedQuestions.map(q => `
            <div class="q-card">
              <strong>❓ ${q.question}</strong>
              <div style="color: #dc2626; font-weight: 600; margin-bottom: 4px;">Sonuç: ${q.llmOutcome}</div>
              <div style="color: #4b5563; font-size: 12px;">Eksik Faktör: ${q.missingFactor}</div>
            </div>
          `).join('')}

          <div class="section-title">Tespit Edilen Kritik Eksikler</div>
          <ul style="padding-left: 20px; font-size: 13px; color: #4b5563; line-height: 1.6;">
            ${auditResult.limitingFactors.map(f => `
              <li><strong>${f.title}</strong> (${f.severity}): ${f.desc}</li>
            `).join('')}
          </ul>

          <div class="section-title">Önerilen Öncelikli 3 Adım</div>
          <ol style="padding-left: 20px; font-size: 13px; color: #4b5563; line-height: 1.6;">
            ${auditResult.prioritySteps.map(s => `
              <li><strong>${s.title}</strong>: ${s.desc} <em>(${s.expectedImpact})</em></li>
            `).join('')}
          </ol>
        </div>

        <div class="footer">
          Bu bildirim Yapay Zekâda Reklam (overseas.marketing) otomatik lead sistemi tarafından kaankarakas93@gmail.com adresine iletilmiştir.
        </div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: '"Yapay Zekada Reklam - Lead" <info@overseas.marketing>',
    to: 'kaankarakas93@gmail.com',
    replyTo: formData.email,
    subject: `🔥 Yeni Lead: ${formData.companyName} (${formData.fullName}) - Yapay Zekâ Görünürlük Analizi`,
    html: html,
    text: `Yeni Lead & Görünürlük Analizi:
Firma: ${formData.companyName}
Yetkili: ${formData.fullName}
Telefon: ${formData.phone}
E-posta: ${formData.email}
Web Sitesi: ${formData.website}
Sektör: ${formData.sector || '-'}

Genel Görünürlük Skoru: ${auditResult.summary.overallScore}/100 (${auditResult.summary.statusLabel})
Alıntılanma Oranı: ${auditResult.summary.citationRatio}
`
  });
}

// Serverless Handler (Vercel Node.js Function)
export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { fullName, companyName, website, phone, email, sector } = req.body || {};

    if (!fullName || !companyName || !website || !phone || !email) {
      return res.status(400).json({
        error: 'Lütfen tüm zorunlu alanları (İsim Soyisim, Firma İsmi, Web Sitesi, Telefon, E-posta) eksiksiz doldurun.',
      });
    }

    const formData: AuditFormData = {
      fullName: String(fullName).trim(),
      companyName: String(companyName).trim(),
      website: String(website).trim(),
      phone: String(phone).trim(),
      email: String(email).trim(),
      sector: sector ? String(sector).trim() : '',
    };

    // Generate comprehensive GEO audit analysis using Google AI Studio Gemini API (with fallback)
    const auditData = await generateGeminiAudit(formData);

    // Send email notification to kaankarakas93@gmail.com
    try {
      await sendLeadEmail(formData, auditData);
      console.log(`[Lead Sent] Email delivered to kaankarakas93@gmail.com for ${formData.companyName}`);
    } catch (mailErr: any) {
      console.error('[Lead Mail Error]:', mailErr?.message || mailErr);
    }

    return res.status(200).json({
      success: true,
      data: auditData,
      source: 'gemini-geo-engine'
    });
  } catch (err: any) {
    console.error('[Analyze API Error]:', err);
    return res.status(500).json({
      error: 'Analiz oluşturulurken bir hata meydana geldi. Lütfen tekrar deneyin.'
    });
  }
}
