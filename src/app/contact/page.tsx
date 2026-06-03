import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Evoto Technologies',
  description:
    'Get in touch with Evoto Technologies for smart home automation, security, lighting, and industrial automation solutions. Based in , Punjab.',
}

const contactDetails = [
  { icon: <Phone size={18} strokeWidth={1.5} />, label: 'Phone', value: '+91 700 986 1539', href: 'tel:+917009861539' },
  { icon: <Mail size={18} strokeWidth={1.5} />, label: 'Email', value: 'info@evototechnologies.com', href: 'mailto:info@evototechnologies.com' },
  { icon: <MapPin size={18} strokeWidth={1.5} />, label: 'Location', value: 'Chandigarh, Punjab, India', href: null },
  { icon: <Clock size={18} strokeWidth={1.5} />, label: 'Working Hours', value: 'Mon–Sat, 9:30 AM – 6:30 PM', href: null },
]

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-[var(--c-bg)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--c-accent)]/4 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[var(--c-accent)] text-xs tracking-[0.25em] uppercase mb-6">Get In Touch</p>
          <h1 className="font-display text-[clamp(2.4rem,4.5vw,4rem)] text-[var(--c-text)] max-w-2xl mb-8">
            Let&apos;s Talk About Your Project
          </h1>
          <p className="text-[var(--c-muted)] text-xl max-w-xl leading-relaxed">
            Fill in the form and our team will reach out within 24 hours.
            Or call us directly — we&apos;re always happy to talk.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-6 mb-12">
              {contactDetails.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[var(--c-border)] flex items-center justify-center text-[var(--c-accent)] shrink-0">
                    {d.icon}
                  </div>
                  <div>
                    <div className="text-xs text-[var(--c-faint)] tracking-wide uppercase mb-1">{d.label}</div>
                    {d.href ? (
                      <a href={d.href} className="text-[var(--c-text)] text-sm hover:text-[var(--c-accent)] transition-colors duration-200">
                        {d.value}
                      </a>
                    ) : (
                      <span className="text-[var(--c-text)] text-sm">{d.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[var(--c-border)] pt-10">
              <p className="text-xs text-[var(--c-faint)] tracking-[0.2em] uppercase mb-5">Certified &amp; Compliant</p>
              <div className="flex flex-wrap gap-3">
                {['KNX Certified', 'BIS Certified', 'WPC Certified'].map((c) => (
                  <span key={c} className="px-4 py-2 border border-[var(--c-border)] text-[var(--c-muted)] text-xs tracking-wide uppercase">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[var(--c-surface)] border border-[var(--c-border)] p-8 lg:p-10">
            <h2 className="font-display text-3xl text-[var(--c-text)] mb-2">Send Us a Message</h2>
            <p className="text-[var(--c-muted)] text-sm mb-8">We typically respond within a business day.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
