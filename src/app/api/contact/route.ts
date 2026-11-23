import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().min(1).max(200),
  role: z.string().max(100).optional(),
  subject: z.string().min(1).max(200),
  message: z.string().min(20).max(5000),
  consent: z.boolean().refine((v) => v === true),
});

// Simple in-memory rate limiting (use Redis in production)
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  const record = rateLimit.get(ip);
  if (!record || now > record.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (record.count >= maxRequests) return false;
  record.count++;
  return true;
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown';
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in 15 minutes.' },
      { status: 429 }
    );
  }

  // Parse and validate body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const { name, email, company, role, subject, message } = parsed.data;

  // 1. Send email via Resend
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';
  const toEmail = process.env.RESEND_TO_EMAIL ?? 'team@genquantaa.com';

  if (resendApiKey && resendApiKey !== 're_xxxxxxxxxxxxxxxxxxxxxxxxxxxx') {
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: `GenQuantaa Contact Form <${fromEmail}>`,
        to: [toEmail],
        replyTo: email,
        subject: `[Contact Form] ${subject} — ${company}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #030712; color: #f0f4ff; padding: 32px; border-radius: 12px;">
            <div style="background: linear-gradient(135deg, #06b6d4, #818cf8); height: 4px; border-radius: 4px; margin-bottom: 24px;"></div>
            <h2 style="color: #22d3ee; margin-bottom: 8px;">New Contact Form Submission</h2>
            <p style="color: #94a3b8; margin-bottom: 24px; font-size: 14px;">From the GenQuantaa website</p>

            <table style="width: 100%; border-collapse: collapse;">
              ${[
                ['Name', name],
                ['Email', email],
                ['Company', company],
                ['Role', role ?? '—'],
                ['Subject', subject],
              ].map(([label, value]) => `
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 100px; vertical-align: top;">${label}</td>
                  <td style="padding: 8px 0; color: #e2e8f0; font-size: 13px;">${value}</td>
                </tr>
              `).join('')}
            </table>

            <div style="margin-top: 20px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #06b6d4;">
              <div style="color: #64748b; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.08em;">Message</div>
              <div style="color: #e2e8f0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>

            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.08); color: #475569; font-size: 12px;">
              Sent from genquantaa.com • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
            </div>
          </div>
        `,
      });

      // Auto-reply to sender
      await resend.emails.send({
        from: `GenQuantaa <${fromEmail}>`,
        to: [email],
        subject: 'Thanks for reaching out — GenQuantaa',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #030712; color: #f0f4ff; padding: 32px; border-radius: 12px;">
            <div style="background: linear-gradient(135deg, #06b6d4, #818cf8); height: 4px; border-radius: 4px; margin-bottom: 24px;"></div>
            <h2 style="color: #22d3ee; margin-bottom: 4px;">Thanks, ${name.split(' ')[0]}.</h2>
            <p style="color: #94a3b8; font-size: 14px; margin-bottom: 20px;">We received your message and will get back to you within 24 business hours.</p>
            <div style="padding: 16px; background: rgba(6,182,212,0.08); border: 1px solid rgba(6,182,212,0.2); border-radius: 8px; margin-bottom: 24px;">
              <div style="color: #67e8f9; font-size: 13px; font-weight: 600; margin-bottom: 4px;">Your inquiry: ${subject}</div>
              <div style="color: #94a3b8; font-size: 12px;">From: ${company}</div>
            </div>
            <p style="color: #64748b; font-size: 13px; line-height: 1.6;">In the meantime, feel free to explore our <a href="https://genquantaa.com/case-studies" style="color: #06b6d4;">case studies</a> or <a href="https://genquantaa.com/blog" style="color: #06b6d4;">research blog</a>.</p>
            <div style="margin-top: 24px; color: #475569; font-size: 12px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px;">
              GenQuantaa Pvt Ltd · Bangalore · Dubai · Singapore<br/>
              <a href="https://genquantaa.com" style="color: #64748b;">genquantaa.com</a>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('[Contact API] Resend error:', emailError);
      // Don't fail the request — log and continue to CRM
    }
  } else {
    console.warn('[Contact API] Resend API key not configured. Email not sent.');
  }

  // 2. Create HubSpot contact + deal
  const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;
  if (hubspotToken && hubspotToken !== 'pat-na1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx') {
    try {
      // Create or update contact
      const contactRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${hubspotToken}`,
        },
        body: JSON.stringify({
          properties: {
            email,
            firstname: name.split(' ')[0],
            lastname: name.split(' ').slice(1).join(' ') || '',
            company,
            jobtitle: role ?? '',
            message,
            hs_lead_status: 'NEW',
            lifecyclestage: 'lead',
          },
        }),
      });

      if (!contactRes.ok && contactRes.status !== 409) {
        console.error('[Contact API] HubSpot contact error:', await contactRes.text());
      }
    } catch (hubspotError) {
      console.error('[Contact API] HubSpot error:', hubspotError);
    }
  } else {
    console.warn('[Contact API] HubSpot token not configured. Lead not logged.');
  }

  return NextResponse.json(
    { success: true, message: 'Your message has been received.' },
    { status: 200 }
  );
}
