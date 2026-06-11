import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = 'moaaz@rightspc.com';
const FROM_EMAIL = 'Horus Desk Bookings <onboarding@resend.dev>';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Basic CORS headers for local dev / preflight
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Allow only POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fullName, email, companyName, phone, interest, notes } = req.body || {};

    if (!fullName || !email) {
      return res.status(400).json({ error: 'Full name and email are required' });
    }

    const html = `
      <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #0f172a;">
        <h2 style="color: #0f172a;">New booking request from HorusDesk.com</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 140px;">Name</td>
            <td style="padding: 8px 0;">${escapeHtml(fullName)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600;">Email</td>
            <td style="padding: 8px 0;">${escapeHtml(email)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600;">Company</td>
            <td style="padding: 8px 0;">${companyName ? escapeHtml(companyName) : '—'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600;">Phone</td>
            <td style="padding: 8px 0;">${phone ? escapeHtml(phone) : '—'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600;">Interest</td>
            <td style="padding: 8px 0;">${interest ? escapeHtml(interest) : '—'}</td>
          </tr>
        </table>
        ${notes ? `<div style="margin-top: 16px;"><strong>Notes:</strong><p style="margin: 8px 0 0; white-space: pre-line;">${escapeHtml(notes)}</p></div>` : ''}
        <p style="margin-top: 24px; color: #64748b; font-size: 14px;">
          The visitor will pick a time on Calendly next. This email was sent from the booking form on HorusDesk.com.
        </p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `New Horus Desk booking request from ${fullName}`,
      html,
      reply_to: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ error: error.message || 'Failed to send email' });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Booking email error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
