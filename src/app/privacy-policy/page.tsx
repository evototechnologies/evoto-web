import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Privacy Policy — Evoto Technologies' }

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-40 pb-24 bg-[var(--c-bg)]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <p className="text-[var(--c-accent)] text-xs tracking-[0.25em] uppercase mb-6">Legal</p>
        <h1 className="font-display text-5xl text-[var(--c-text)] mb-10">Privacy Policy</h1>
        <div className="space-y-8 text-[var(--c-muted)] leading-relaxed text-sm">
          <p>Last updated: June 2026</p>
          <div>
            <h2 className="font-display text-2xl text-[var(--c-text)] mb-3">1. Information We Collect</h2>
            <p>When you submit the contact form on our website, we collect your name, phone number, email address, city, and any details you provide in the message field. We use this information solely to respond to your enquiry.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-[var(--c-text)] mb-3">2. How We Use Your Information</h2>
            <p>Your information is used to respond to your enquiry, schedule consultations, and provide quotes. We do not sell, rent, or share your personal information with third parties except as required to deliver our services.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-[var(--c-text)] mb-3">3. Data Retention</h2>
            <p>We retain your information for as long as necessary to fulfil the purpose for which it was collected or as required by applicable law.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-[var(--c-text)] mb-3">4. Cookies</h2>
            <p>This website does not use tracking cookies. We may use essential cookies necessary for the functioning of the site.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-[var(--c-text)] mb-3">5. Contact</h2>
            <p>For any privacy-related questions, contact us at <a href="mailto:info@evototechnologies.com" className="text-[var(--c-accent)] hover:underline">info@evototechnologies.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
