/**
 * Email transport for inquiry form submissions.
 *
 * Required env vars (set in .env.local once credentials arrive):
 *   SMTP_HOST      — e.g. smtp.gmail.com
 *   SMTP_PORT      — e.g. 587
 *   SMTP_USER      — sender account (your Gmail / G Suite address)
 *   SMTP_PASS      — app password (never the account password)
 *   INQUIRY_TO     — destination inbox, e.g. info@briggsbrothersranch.com
 *
 * Until credentials are configured the function logs the payload and resolves
 * normally so form submissions still "succeed" gracefully in demo mode.
 */

import nodemailer from 'nodemailer';

const configured =
  process.env.SMTP_HOST &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS &&
  process.env.INQUIRY_TO;

function buildTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

/**
 * @param {object} payload  — the full inquiry form payload from the frontend
 * @returns {Promise<void>}
 */
export async function sendInquiryEmail(payload) {
  if (!configured) {
    console.info('[mailer] SMTP not configured — logging inquiry instead:', payload);
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

  const transport = buildTransport();
  await transport.sendMail({
    from: `"Briggs Brothers Ranch" <${process.env.SMTP_USER}>`,
    to: process.env.INQUIRY_TO,
    replyTo: email,
    subject: `[Inquiry] ${name} — ${eventType} · ${guestCount} guests`,
    text,
    html,
  });

  console.info('[mailer] Inquiry email sent to', process.env.INQUIRY_TO);
}
