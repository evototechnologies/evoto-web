import { NextRequest, NextResponse } from 'next/server'
import { getResend, buildLeadEmail, type ContactPayload } from '@/lib/resend'

export async function POST(req: NextRequest) {
  let body: ContactPayload

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, phone, email } = body
  if (!name?.trim() || !phone?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Name, phone, and email are required' }, { status: 422 })
  }

  const errors: string[] = []

  // Send email via Resend
  try {
    const resend = getResend()
    await resend.emails.send({
      from: 'admin@evototechnologies.com',
      to: 'karan@evototechnologies.com',
      subject: `New Lead: ${name} — ${body.service || 'General Enquiry'}`,
      html: buildLeadEmail(body),
      replyTo: email,
    })
  } catch (err) {
    console.error('Resend error:', err)
    errors.push('email')
  }

  // Push to CRM (optional — skipped if env vars not set)
  const crmEndpoint = process.env.CRM_API_ENDPOINT
  const crmKey = process.env.CRM_API_KEY
  if (crmEndpoint) {
    try {
      await fetch(crmEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(crmKey ? { Authorization: `Bearer ${crmKey}` } : {}),
        },
        body: JSON.stringify({
          name: body.name,
          phone: body.phone,
          email: body.email,
          city: body.city,
          service: body.service,
          message: body.message,
          source: 'website',
        }),
      })
    } catch (err) {
      console.error('CRM error:', err)
      errors.push('crm')
    }
  }

  if (errors.includes('email') && errors.includes('crm')) {
    return NextResponse.json({ error: 'Failed to process your request' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
