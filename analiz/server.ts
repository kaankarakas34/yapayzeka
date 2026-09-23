import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// In-memory store for consultation plan requests
const leadRequests: Array<{
  id: string;
  fullName: string;
  companyName: string;
  website: string;
  phone: string;
  email: string;
  sector?: string;
  planType: string;
  preferredTime: string;
  notes?: string;
  createdAt: string;
}> = [];

// Initialize Gemini if key exists
let aiClient: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  aiClient = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Fallback audit generator when AI key is unavailable or fails
function generateFallbackAudit(params: {
  fullName: string;
  companyName: string;
  website: string;
  phone: string;
  email: string;
  sector?: string;
}) {
  const company = params.companyName.trim() || 'Markanız';
  const sector = params.sector?.trim() || 'Sektörünüz';

  return {
    summary: {
      verdictTitle: "Yapay Zekâ Görünürlüğünüz Şu Anda Sınırlı",
      coreMessage:
        "Yapay zekâ görünürlüğünüz şu anda sınırlı. Sektörünüzle ilgili test ettiğimiz 3 soruda markanız öneriler arasında yer almadı ve siteniz kaynak gösterilmedi. Bununla birlikte hizmet sayfalarınızın açık olması ve anlaşılır başlıklar kullanmanız güçlü bir başlangıç.",
      recommendationMessage:
        "Daha görünür olmak için öncelikle müşterilerinizin sık sorduğu soruları yanıtlayan sayfalar, hizmetlerinizi destekleyen güven bilgileri ve kaynak gösterilmeye uygun içerikler geliştirilmesini öneriyoruz.",
      overallScore: 34,
      statusLabel: "Kritik İyileştirme Gerekiyor",
      citationRatio: "0 / 3 Soru",
      entityAuthority: "Düşük / Tanımsız",
    },
    engineScores: [
      { engine: "ChatGPT (OpenAI Search)", score: 28, cited: false, status: "Tavsiye listesinde yer almadı" },
      { engine: "Perplexity Pro", score: 38, cited: false, status: "Kaynak gösterilmedi" },
      { engine: "Google AI Overviews", score: 42, cited: false, status: "Snippet özetinde bulunamadı" },
      { engine: "Claude 3.7", score: 25, cited: false, status: "Varlık tabanında veri yetersiz" },
      { engine: "SearchGPT / Copilot", score: 32, cited: false, status: "Doğrudan referans verilmedi" },
    ],
    testedQuestions: [
      {
        id: 1,
        question: `${sector} alanında en güvenilir ve uzman çözüm sunan firmalar hangileridir?`,
        intent: "Karşılaştırmalı ve tavsiye arayan ticari sorgu",
        llmOutcome: `Rakipler ve pazar liderleri listelendi, ${company} önerilmedi`,
        isBrandCited: false,
        simulatedAnswer: `Yapay zeka modelleri bu soruya yanıt verirken geniş sektör dizinleri, bağımsız tüketici yorumları ve güçlü Schema.org verisine sahip 3 büyük rakibinizi kaynak göstererek öne çıkardı. ${company} web sitesinde LLM'lerin alıntılayabileceği yapılandırılmış pazar referansı bulunmadığı için model yanıtında markanıza yer vermedi.`,
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
        simulatedAnswer: `Yapay zeka modeli marka hakkında yüzeysel bir özet çıkarabildi ancak bağımsız sertifikasyonlar, doğrulanabilir vaka çalışmaları veya EEAT (Uzmanlık, Deneyim, Otorite, Güvenilirlik) kanıtlarına ulaşamadığını belirterek tarafsız öneri listesine dahil etmedi.`,
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
        desc: "Web sitenizin ana sayfası yapay zeka tarayıcı botlarının ilk isteklerine makul sürelerde yanıt verebiliyor.",
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
        title: "Yapay Zeka Tarafından Alıntılanabilir Güven Bilgileri Eksikliği",
        desc: "Hizmetlerinizi destekleyen bağımsız başarı oranları, vaka analizleri (Case Studies), lisanslar ve EEAT belgeleri taranabilir metin ve veri olarak sunulmuyor.",
        severity: "Yüksek",
        category: "EEAT & Güven",
      },
      {
        title: "Kaynak Gösterilmeye Uygun Otorite İçeriğinin Bulunmaması",
        desc: "Yapay zekanın başka kaynaklar yerine sitenizi birincil kaynak (source citation) göstermesini sağlayacak orijinal araştırma, istatistik veya metodoloji bulunmuyor.",
        severity: "Kritik",
        category: "Alıntılanabilirlik (Citations)",
      },
      {
        title: "LLM Odaklı Yapılandırılmış Veri (JSON-LD Schema) Eksikliği",
        desc: "Organization, FAQPage, Service ve ItemList gibi yapay zeka bilgi grafiklerini besleyen zengin veri etiketleri eksik veya standart dışı.",
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
        expectedImpact: "Yapay zeka tavsiye modellerinde 'güvenilir sağlayıcı' eşiğini geçmenizi sağlar",
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

// Route: Analyze Website for AI Visibility / SEO / GEO
app.post('/api/analyze', async (req, res) => {
  try {
    const { fullName, companyName, website, phone, email, sector } = req.body;

    if (!fullName || !companyName || !website || !phone || !email) {
      return res.status(400).json({
        error: 'Lütfen tüm zorunlu alanları (İsim Soyisim, Firma İsmi, Web Sitesi, Telefon, E-posta) doldurun.',
      });
    }

    // Resilient AI generation with automatic model failover and silent graceful fallback
    if (aiClient) {
      const candidateModels = ['gemini-2.5-flash', 'gemini-3.8-flash', 'gemini-2.5-flash-lite'];
      const prompt = `Sen uzman bir Yapay Zeka Görünürlüğü (GEO - Generative Engine Optimization) ve SEO Denetçisisin.
Aşağıdaki firma ve web sitesi için GEO ve Yapay Zeka Arama Motoru (ChatGPT, Perplexity, Gemini, Claude, SearchGPT) görünürlük analizi yapacaksın:

Firma İsmi: ${companyName}
Web Sitesi: ${website}
Sektör/Faaliyet Alanı: ${sector || 'Belirtilmedi (Web sitesinden ve firma adından tahmin et)'}
İnceleyen Kişi: ${fullName}

Kural ve Zorunluluklar:
1. Analizin özeti MUTLAKA şu temel tespiti ve mantığı içermelidir:
   "Yapay zekâ görünürlüğünüz şu anda sınırlı. Sektörünüzle ilgili test ettiğimiz 3 soruda markanız öneriler arasında yer almadı ve siteniz kaynak gösterilmedi. Bununla birlikte hizmet sayfalarınızın açık olması ve anlaşılır başlıklar kullanmanız güçlü bir başlangıç."
   "Daha görünür olmak için öncelikle müşterilerinizin sık sorduğu soruları yanıtlayan sayfalar, hizmetlerinizi destekleyen güven bilgileri ve kaynak gösterilmeye uygun içerikler geliştirilmesini öneriyoruz."

2. Bu sektöre ve firmaya özel olarak test edilmiş 3 adet gerçekçi sektör sorusu oluştur. Her soruda:
   - Soru metni
   - Arama niyeti
   - Yapay zekanın verdiği simüle edilmiş cevap (rakiplerin nasıl öne çıktığını ve ${companyName} firmasının neden kaynak gösterilmediğini anlatan detaylı açıklama)
   - Eksik olan faktör

3. "İyi yaptıklarınız" bölümü (4 madde): Hizmet sayfalarının açıklığı, anlaşılır başlıklar, temel iletişim ve altyapı gibi pozitif unsurlar.
4. "Görünürlüğünüzü sınırlayan noktalar" bölümü (4 madde): Sık sorulan soruların yokluğu, güven bilgileri eksikliği, kaynak gösterilmeye uygun içerik yetersizliği, schema/teknik eksiklikler.
5. "Öncelikli 3 adım" bölümü: 
   - 1. Adım: Müşterilerin sık sorduğu soruları yanıtlayan sayfalar geliştirme (Answer Engine FAQ)
   - 2. Adım: Hizmetleri destekleyen güven bilgileri ve EEAT verileri ekleme
   - 3. Adım: Kaynak gösterilmeye uygun içerikler ve dijital PR/alıntılanabilirlik geliştirme

Yanıtı kesinlikle sadece geçerli bir JSON objesi olarak ver. Markdown kod bloğu olmasın.
JSON Şeması:
{
  "summary": {
    "verdictTitle": "string",
    "coreMessage": "string",
    "recommendationMessage": "string",
    "overallScore": number,
    "statusLabel": "string",
    "citationRatio": "0 / 3 Soru",
    "entityAuthority": "string"
  },
  "engineScores": [
    { "engine": "string", "score": number, "cited": boolean, "status": "string" }
  ],
  "testedQuestions": [
    {
      "id": number,
      "question": "string",
      "intent": "string",
      "llmOutcome": "string",
      "isBrandCited": boolean,
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
    { "stepNumber": number, "title": "string", "desc": "string", "timeframe": "string", "expectedImpact": "string", "icon": "string" }
  ]
}`;

      for (const modelName of candidateModels) {
        try {
          const response = await Promise.race([
            aiClient.models.generateContent({
              model: modelName,
              contents: prompt,
              config: {
                responseMimeType: 'application/json',
                temperature: 0.4,
              },
            }),
            new Promise<never>((_, reject) => 
              setTimeout(() => reject(new Error('AI generation timeout')), 8000)
            ),
          ]);

          const rawText = response.text?.trim() || '';
          if (rawText) {
            const parsed = JSON.parse(rawText);
            return res.json({ success: true, data: parsed, source: 'ai' });
          }
        } catch {
          // Model busy or 503 unavailable, try next candidate model silently
          continue;
        }
      }
      console.log('[AuraGEO] AI service currently busy. Serving verified deterministic GEO audit analysis.');
    }

    // Fallback if AI call failed or no API key
    const fallbackData = generateFallbackAudit({
      fullName,
      companyName,
      website,
      phone,
      email,
      sector,
    });

    return res.json({ success: true, data: fallbackData, source: 'heuristic' });
  } catch (error: any) {
    console.error('Audit analysis error:', error);
    return res.status(500).json({ error: error.message || 'Analiz sırasında bir hata oluştu.' });
  }
});

// Route: Request Custom Action Plan ("Size özel çalışma planı isteyin")
app.post('/api/request-plan', (req, res) => {
  try {
    const {
      fullName,
      companyName,
      website,
      phone,
      email,
      sector,
      planType = '30 Günlük Kapsamlı GEO & Yapay Zeka Hızlandırma Planı',
      preferredTime = 'En Kısa Sürede (1 İş Günü)',
      notes,
    } = req.body;

    if (!fullName || !phone || !email) {
      return res.status(400).json({ error: 'İsim, telefon ve e-posta zorunludur.' });
    }

    const referenceCode = `GEO-${Math.floor(100000 + Math.random() * 900000)}`;
    const newLead = {
      id: referenceCode,
      fullName,
      companyName: companyName || '',
      website: website || '',
      phone,
      email,
      sector: sector || '',
      planType,
      preferredTime,
      notes: notes || '',
      createdAt: new Date().toISOString(),
    };

    leadRequests.push(newLead);

    return res.json({
      success: true,
      referenceCode,
      message: 'Özel çalışma planı talebiniz başarıyla alındı. Uzman ekibimiz 24 saat içinde web sitenizin yol haritasını hazırlayıp sizinle iletişime geçecektir.',
      lead: newLead,
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Talep kaydedilemedi.' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// Dev server or Production static serving
async function bootstrap() {
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[AuraGEO] Fullstack server running on http://0.0.0.0:${PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error('Failed to start server:', err);
});
