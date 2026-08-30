/**
 * Email transport for inquiry form submissions — powered by Resend.
 *
 * Required env vars:
 *   RESEND_API_KEY  — from resend.com/api-keys
 *   RESEND_FROM     — verified sender, e.g. "Briggs Brothers Ranch <inquiries@briggsbrothersranch.com>"
 *   INQUIRY_TO      — destination inbox, e.g. info@1311events.com
 *
 * If RESEND_API_KEY is not set the function logs the payload and resolves
 * normally so the form still "succeeds" gracefully in demo mode.
 */

import { Resend } from 'resend';

const configured = process.env.RESEND_API_KEY && process.env.INQUIRY_TO;

/**
 * @param {object} payload  — the full inquiry form payload from the frontend
 * @returns {Promise<void>}
 */
export async function sendInquiryEmail(payload) {
  if (!configured) {
    console.info('[mailer] Resend not configured — logging inquiry instead:', payload);
    return;
  }

  const {
    name,
    company,
    email,
    phone,
    eventType,
    eventDate,
    guestCount,
    budget,
    message,
    leadTag,
    leadTier,
    submittedAt,
  } = payload;

  const text = [
    `New inquiry from briggsbrothersranch.com`,
    ``,
    `─── Contact ───────────────────────────────`,
    `Name:     ${name}`,
    `Company:  ${company || '—'}`,
    `Email:    ${email}`,
    `Phone:    ${phone}`,
    ``,
    `─── Event details ─────────────────────────`,
    `Type:     ${eventType}`,
    `Date:     ${eventDate || '—'}`,
    `Guests:   ${guestCount}`,
    `Budget:   ${budget}`,
    ``,
    `─── Lead qualification ─────────────────────`,
    `Tag:      ${leadTag}`,
    `Tier:     ${leadTier}`,
    ``,
    `─── Message ────────────────────────────────`,
    message,
    ``,
    `Submitted: ${submittedAt}`,
  ].join('\n');

  const html = `
<div style="font-family:Arial,sans-serif;max-width:600px;color:#222">
  <h2 style="background:#2c3e2d;color:#fff;padding:16px 20px;margin:0">
    New Inquiry — Briggs Brothers Ranch
  </h2>
  <table style="width:100%;border-collapse:collapse;margin-top:0">
    <tr style="background:#f5f5f0"><th colspan="2" style="text-align:left;padding:10px 16px;font-size:13px;color:#555">Contact</th></tr>
    <tr><td style="padding:8px 16px;width:140px;color:#555">Name</td><td style="padding:8px 16px"><strong>${name}</strong></td></tr>
    <tr style="background:#f9f9f6"><td style="padding:8px 16px;color:#555">Company</td><td style="padding:8px 16px">${company || '—'}</td></tr>
    <tr><td style="padding:8px 16px;color:#555">Email</td><td style="padding:8px 16px"><a href="mailto:${email}">${email}</a></td></tr>
    <tr style="background:#f9f9f6"><td style="padding:8px 16px;color:#555">Phone</td><td style="padding:8px 16px">${phone}</td></tr>
    <tr style="background:#f5f5f0"><th colspan="2" style="text-align:left;padding:10px 16px;font-size:13px;color:#555">Event Details</th></tr>
    <tr><td style="padding:8px 16px;color:#555">Type</td><td style="padding:8px 16px">${eventType}</td></tr>
    <tr style="background:#f9f9f6"><td style="padding:8px 16px;color:#555">Date</td><td style="padding:8px 16px">${eventDate || '—'}</td></tr>
    <tr><td style="padding:8px 16px;color:#555">Guests</td><td style="padding:8px 16px">${guestCount}</td></tr>
    <tr style="background:#f9f9f6"><td style="padding:8px 16px;color:#555">Budget</td><td style="padding:8px 16px">${budget}</td></tr>
    <tr style="background:#f5f5f0"><th colspan="2" style="text-align:left;padding:10px 16px;font-size:13px;color:#555">Lead</th></tr>
    <tr><td style="padding:8px 16px;color:#555">Tag</td><td style="padding:8px 16px"><strong>${leadTag}</strong></td></tr>
    <tr style="background:#f9f9f6"><td style="padding:8px 16px;color:#555">Tier</td><td style="padding:8px 16px">${leadTier}</td></tr>
  </table>
  <div style="padding:16px 20px;border-top:2px solid #2c3e2d;margin-top:8px">
    <p style="margin:0 0 6px;color:#555;font-size:13px">Message</p>
    <p style="margin:0;white-space:pre-wrap">${message}</p>
  </div>
  <p style="padding:12px 20px;font-size:11px;color:#999">Submitted ${submittedAt}</p>
</div>`;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const from = process.env.RESEND_FROM ?? 'Briggs Brothers Ranch <onboarding@resend.dev>';

  const { error } = await resend.emails.send({
    from,
    to: [process.env.INQUIRY_TO],
    reply_to: email,
    subject: `[Inquiry] ${name} — ${eventType} · ${guestCount} guests`,
    text,
    html,
  });

  if (error) {
    console.error('[mailer] Resend error:', error);
    throw new Error(error.message);
  }

  console.info('[mailer] Inquiry email sent via Resend to', process.env.INQUIRY_TO);
}
