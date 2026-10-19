import nodemailer from 'nodemailer';

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
  sourceUrl?: string;
}

async function sendLeadNotification(data: LeadFormData) {
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
  const company = data.company?.trim() || 'Belirtilmedi';
  const service = data.service?.trim() || "ChatGPT'de Reklam Verme & Ads";
  const budget = data.budget?.trim() || 'Danışmak İstiyorum';
  const message = data.message?.trim() || 'Ek not iletilmedi';

  const html = `
    <!DOCTYPE html>
    <html lang="tr">
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
        .lead-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed #e5e7eb; font-size: 14px; }
        .lead-row:last-child { border-bottom: none; }
        .lead-label { color: #6b7280; font-weight: 500; min-width: 140px; }
        .lead-value { color: #111827; font-weight: 600; text-align: right; }
        .message-box { background: #f3f4f6; border-left: 4px solid #10a37f; border-radius: 6px; padding: 15px; margin-top: 15px; font-size: 14px; line-height: 1.6; color: #374151; }
        .footer { background: #f9fafb; padding: 20px 30px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="badge">🚀 Yeni İletişim & Teklif Talebi</div>
          <h1>${company} — ${data.name}</h1>
          <div style="font-size: 13px; color: #9ca3af; margin-top: 5px;">Tarih: ${nowStr}</div>
        </div>

        <div class="content">
          <h2 style="font-size: 16px; margin-top: 0; margin-bottom: 15px;">Müşteri ve Talep Detayları</h2>
          <div class="lead-box">
            <div class="lead-row">
              <span class="lead-label">Yetkili / Ad Soyad:</span>
              <span class="lead-value">${data.name}</span>
            </div>
            <div class="lead-row">
              <span class="lead-label">Firma / Web Sitesi:</span>
              <span class="lead-value" style="color: #10a37f;">${company}</span>
            </div>
            <div class="lead-row">
              <span class="lead-label">Telefon:</span>
              <span class="lead-value"><a href="tel:${data.phone}" style="color: #2563eb; text-decoration: none;">${data.phone}</a></span>
            </div>
            <div class="lead-row">
              <span class="lead-label">E-posta:</span>
              <span class="lead-value"><a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a></span>
            </div>
            <div class="lead-row">
              <span class="lead-label">İlgilenilen Hizmet:</span>
              <span class="lead-value">${service}</span>
            </div>
            <div class="lead-row">
              <span class="lead-label">Planlanan Bütçe:</span>
              <span class="lead-value">${budget}</span>
            </div>
            <div class="lead-row">
              <span class="lead-label">Başvuru Sayfası:</span>
              <span class="lead-value">${data.sourceUrl || 'Doğrudan Web Sitesi'}</span>
            </div>
          </div>

          <div style="font-size: 14px; font-weight: 600; color: #111827; margin-top: 20px;">Müşteri Notu / Talebi:</div>
          <div class="message-box">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>

        <div class="footer">
          Bu bildirim Yapay Zekâda Reklam (yapayzekadareklam.com) iletişim formu üzerinden kaankarakas93@gmail.com adresine iletilmiştir.
        </div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: '"Yapay Zekada Reklam" <info@overseas.marketing>',
    to: 'kaankarakas93@gmail.com',
    replyTo: data.email,
    subject: `🚀 Yeni Müşteri Talebi: ${company} - ${data.name} (${service})`,
    html: html,
    text: `Yeni İletişim / Teklif Talebi:
Ad Soyad: ${data.name}
Firma / Web: ${company}
Telefon: ${data.phone}
E-posta: ${data.email}
Hizmet: ${service}
Bütçe: ${budget}
Sayfa: ${data.sourceUrl || '-'}
Not: ${message}
Tarih: ${nowStr}
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
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        body = {};
      }
    }

    const { name, email, phone, company, service, budget, message, sourceUrl } = body || {};

    if (!name || (!email && !phone)) {
      return res.status(400).json({
        error: 'Lütfen adınızı ve en az bir iletişim bilginizi (e-posta veya telefon) eksiksiz girin.',
      });
    }

    const leadData: LeadFormData = {
      name: String(name).trim(),
      email: email ? String(email).trim() : '',
      phone: phone ? String(phone).trim() : '',
      company: company ? String(company).trim() : '',
      service: service ? String(service).trim() : '',
      budget: budget ? String(budget).trim() : '',
      message: message ? String(message).trim() : '',
      sourceUrl: sourceUrl ? String(sourceUrl).trim() : '',
    };

    // Send email notification asynchronously
    try {
      await sendLeadNotification(leadData);
      console.log(`[Lead Captured] Sent email to kaankarakas93@gmail.com for ${leadData.name} (${leadData.company || 'Bireysel'})`);
    } catch (mailErr: any) {
      console.error('[Lead Mail Error]:', mailErr?.message || mailErr);
    }

    return res.status(200).json({
      success: true,
      message: 'Talebiniz başarıyla kaydedildi. Ekibimiz en kısa sürede sizinle iletişime geçecektir.'
    });
  } catch (err: any) {
    console.error('[Lead API Error]:', err);
    return res.status(500).json({
      error: 'Talep kaydedilirken bir hata meydana geldi. Lütfen tekrar deneyin.'
    });
  }
}
