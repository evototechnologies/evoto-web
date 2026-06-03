import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, Shield, Zap, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — Evoto Technologies',
  description:
    'Learn about Evoto Technologies — KNX certified smart home automation company based in Chandigarh, Punjab, serving residential, commercial, and industrial clients across India.',
}

const values = [
  {
    icon: <Award size={20} strokeWidth={1.5} />,
    title: 'KNX Certified Excellence',
    description:
      'We are KNX certified — the internationally recognised standard for intelligent building automation. Every installation is built to this benchmark.',
  },
  {
    icon: <Shield size={20} strokeWidth={1.5} />,
    title: 'Regulatory Compliance',
    description:
      'All products are BIS and WPC certified, ensuring full regulatory compliance and long-term reliability for every installation.',
  },
  {
    icon: <Zap size={20} strokeWidth={1.5} />,
    title: 'Technology-First',
    description:
      'We stay at the forefront of automation technology — from KNX protocol to AI-powered controls — to deliver systems that remain relevant for years.',
  },
  {
    icon: <Users size={20} strokeWidth={1.5} />,
    title: 'Client-Centred',
    description:
      'Every project starts with listening. We understand your space, lifestyle, and goals before recommending a single component.',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-[var(--c-bg)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--c-accent)]/4 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[var(--c-accent)] text-xs tracking-[0.25em] uppercase mb-6">Our Story</p>
          <h1 className="font-display text-[clamp(2.4rem,4.5vw,4rem)] text-[var(--c-text)] max-w-3xl mb-8">
            Building the Homes of Tomorrow, Today
          </h1>
          <p className="text-[var(--c-muted)] text-xl max-w-2xl leading-relaxed">
            Evoto Technologies was founded with a single conviction: intelligent automation
            should not be a luxury reserved for a few — it should be accessible, elegant, and
            transformative for every home and business.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[var(--c-surface)] border-y border-[var(--c-border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-[clamp(1.6rem,2.5vw,2.5rem)] text-[var(--c-text)] mb-6">
              Built on Precision and Trust
            </h2>
            <div className="space-y-5 text-[var(--c-muted)] text-base leading-relaxed">
              <p>
                Based in Chandigarh, Punjab, we have spent over four years designing and deploying
                smart automation systems for homes, clinics, offices, hotels, and industrial
                facilities across India.
              </p>
              <p>
                Our KNX certification sets us apart — it is the global gold standard for
                building automation, and every system we install is engineered to its rigorous
                specification. The result is a platform that is stable, future-proof, and
                genuinely smart.
              </p>
              <p>
                From a single room to an entire industrial complex, we bring the same level of
                precision, care, and craftsmanship to every project.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-[var(--c-border)]">
            {[
              { value: '4+', label: 'Years Experience' },
              { value: '70+', label: 'Projects Completed' },
              { value: '65+', label: 'Happy Clients' },
              { value: '6+', label: 'Cities Served' },
            ].map((s) => (
              <div key={s.label} className="bg-[var(--c-surface)] p-8 text-center">
                <div className="font-display text-5xl text-[var(--c-accent)] mb-2">{s.value}</div>
                <div className="text-[var(--c-muted)] text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-[var(--c-bg)] border-b border-[var(--c-border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-[var(--c-faint)] tracking-[0.2em] uppercase mb-8">Certifications &amp; Compliance</p>
          <div className="flex flex-wrap items-center gap-8">
            <img
              src="/images/knx-partner.svg"
              alt="KNX Partner Certified"
              className="h-16 w-auto object-contain opacity-90"
            />
            <div className="flex flex-wrap gap-3">
              {['BIS Certified', 'WPC Certified'].map((cert) => (
                <span key={cert} className="px-4 py-2 border border-[var(--c-border)] text-[var(--c-muted)] text-xs tracking-wider uppercase">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[var(--c-accent)] text-xs tracking-[0.25em] uppercase mb-4">Our Principles</p>
          <h2 className="font-display text-[clamp(1.6rem,2.5vw,2.5rem)] text-[var(--c-text)] mb-16 max-w-lg">
            Why Clients Choose Evoto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--c-border)]">
            {values.map((v) => (
              <div key={v.title} className="bg-[var(--c-bg)] p-8 hover:bg-[var(--c-surface)] transition-colors duration-300">
                <div className="w-10 h-10 border border-[var(--c-border)] flex items-center justify-center text-[var(--c-accent)] mb-5">
                  {v.icon}
                </div>
                <h3 className="font-display text-2xl text-[var(--c-text)] mb-3">{v.title}</h3>
                <p className="text-[var(--c-muted)] text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--c-surface)] border-t border-[var(--c-border)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-[clamp(1.6rem,2.5vw,2.5rem)] text-[var(--c-text)] mb-6">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-[var(--c-muted)] mb-8">
            Whether you have detailed plans or just an idea, we&apos;re here to help you bring it to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--c-accent)] text-white text-sm font-medium tracking-wide hover:bg-[var(--c-accent-h)] transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
