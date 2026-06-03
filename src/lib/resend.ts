import { Resend } from 'resend'

export function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

export type ContactPayload = {
  name: string
  phone: string
  email: string
  city: string
  service: string
  message: string
}

export function buildLeadEmail(data: ContactPayload): string {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f5f0; padding: 32px; border-radius: 8px;">
      <h2 style="color: #C9A96E; margin-top: 0;">New Lead — Evoto Technologies</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #888; width: 140px;">Name</td><td style="padding: 8px 0;">${data.name}</td></tr>
        <tr><td style="padding: 8px 0; color: #888;">Phone</td><td style="padding: 8px 0;">${data.phone}</td></tr>
        <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;">${data.email}</td></tr>
        <tr><td style="padding: 8px 0; color: #888;">City</td><td style="padding: 8px 0;">${data.city || '—'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888;">Service</td><td style="padding: 8px 0;">${data.service || '—'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Message</td><td style="padding: 8px 0;">${data.message || '—'}</td></tr>
      </table>
      <p style="color: #444; font-size: 12px; margin-bottom: 0; margin-top: 24px;">Submitted via evototechnologies.com</p>
    </div>
  `
}
