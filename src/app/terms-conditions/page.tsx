import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Terms & Conditions — Evoto Technologies' }

export default function TermsPage() {
  return (
    <section className="pt-40 pb-24 bg-[var(--c-bg)]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <p className="text-[var(--c-accent)] text-xs tracking-[0.25em] uppercase mb-6">Legal</p>
        <h1 className="font-display text-5xl text-[var(--c-text)] mb-10">Terms &amp; Conditions</h1>
        <div className="space-y-8 text-[var(--c-muted)] leading-relaxed text-sm">
          <p>Last updated: June 2026</p>
          <div>
            <h2 className="font-display text-2xl text-[var(--c-text)] mb-3">1. Use of This Website</h2>
            <p>By accessing evototechnologies.com, you agree to use the site only for lawful purposes. You may not misuse, duplicate, or republish any content without written permission from Evoto Technologies.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-[var(--c-text)] mb-3">2. Services</h2>
            <p>All service descriptions on this website are for informational purposes. Final scope, pricing, and timelines are confirmed in writing after a site consultation.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-[var(--c-text)] mb-3">3. Intellectual Property</h2>
            <p>All content on this site — including text, images, and design — is the property of Evoto Technologies and protected by applicable intellectual property laws.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-[var(--c-text)] mb-3">4. Limitation of Liability</h2>
            <p>Evoto Technologies will not be liable for any indirect, incidental, or consequential damages arising from the use of this website or reliance on any information herein.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-[var(--c-text)] mb-3">5. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Chandigarh, Punjab.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-[var(--c-text)] mb-3">6. Contact</h2>
            <p>For any questions regarding these terms, contact us at <a href="mailto:info@evototechnologies.com" className="text-[var(--c-accent)] hover:underline">info@evototechnologies.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
