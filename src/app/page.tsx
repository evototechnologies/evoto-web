import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/sections/Hero'
import ServicesSection from '@/components/sections/Services'
import StatsSection from '@/components/sections/Stats'
import ProjectsSection from '@/components/sections/Projects'
import TestimonialsSection from '@/components/sections/Testimonials'
import FAQSection from '@/components/sections/FAQ'

export const metadata: Metadata = {
  title: 'Evoto Technologies | Smart Home Automation Company India',
  description:
    'Evoto Technologies delivers premium smart home automation in India. KNX certified. Wired & wireless solutions: smart lighting, motorised curtains, CCTV, HVAC, audio-video, and more. Serving Chandigarh, Punjab, and pan-India.',
  keywords: [
    'smart home automation India',
    'KNX automation India',
    'home automation company Punjab',
    'smart home company Chandigarh',
    'wired home automation India',
    'wireless home automation India',
  ],
  alternates: { canonical: 'https://evototechnologies.com' },
  openGraph: {
    title: 'Evoto Technologies | Smart Home Automation India',
    description: 'Premium KNX-certified smart home automation for homes, villas, offices, and commercial spaces across India.',
    url: 'https://evototechnologies.com',
  },
}

const homeFaqs = [
  {
    q: 'What is KNX automation?',
    a: 'KNX is the world\'s only open international standard (ISO/IEC 14543) for home and building automation. It uses a dedicated wired bus to connect lighting, HVAC, shading, security, and audio-video into one unified system. Evoto Technologies is a KNX certified integrator in India.',
  },
  {
    q: 'What is the difference between wired and wireless home automation?',
    a: 'Wired automation (like KNX) offers maximum reliability and is ideal for new constructions and luxury projects. Wireless automation (Aqara, Schneider Wiser, LifeSmart) is ideal for retrofits where wall-breaking is not feasible. Evoto Technologies offers both.',
  },
  {
    q: 'Which brands does Evoto Technologies work with?',
    a: 'We work with Aqara, LifeSmart, Schneider Wiser, Schneider KNX (SpaceLogic), MDT, Zennio, Loxone, Savant, Control4, CP Plus, Dahua, Netgear, Nice, RTI, Coolmaster, Intesis, and 1homeserver.',
  },
  {
    q: 'Does Evoto Technologies serve clients outside Chandigarh?',
    a: 'Yes. Evoto Technologies serves clients across Punjab, Chandigarh, Delhi NCR, and pan-India for smart home, commercial, and industrial automation projects.',
  },
  {
    q: 'Is home automation worth it in India?',
    a: 'Yes — modern smart home systems are more affordable and reliable than ever. Beyond convenience, they deliver measurable energy savings (15–30% on lighting and HVAC), enhanced security, and lasting value-add to your property.',
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection preview />
      <StatsSection />
      <ProjectsSection preview />
      <TestimonialsSection />
      <FAQSection faqs={homeFaqs} title="Smart Home Automation — Common Questions" includeSchema />

      {/* CTA Section */}
      <section className="py-28 bg-[var(--c-surface)] border-t border-[var(--c-border)] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-[var(--c-accent)]/5 blur-[120px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[var(--c-accent)] text-xs tracking-[0.25em] uppercase mb-6">Get Started</p>
          <h2 className="font-display text-[clamp(1.8rem,3vw,3rem)] text-[var(--c-text)] mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-[var(--c-muted)] text-lg mb-10 leading-relaxed">
            Talk to our team about your project. We&apos;ll design a system that fits your space,
            your lifestyle, and your budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[var(--c-accent)] text-white text-sm font-medium tracking-wide hover:bg-[var(--c-accent-h)] transition-all duration-300"
            >
              Start a Conversation
            </Link>
            <a
              href="tel:+917009861539"
              className="inline-flex items-center gap-2 px-10 py-4 border border-[var(--c-border)] text-[var(--c-muted)] text-sm tracking-wide hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition-all duration-300"
            >
              +91 700 986 1539
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
