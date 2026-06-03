import type { Metadata } from 'next'
import Link from 'next/link'
import { Cpu, Wifi, AlignJustify, DoorOpen, Shield, Monitor, Music, Thermometer, Lightbulb, Blinds, PhoneCall } from 'lucide-react'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Smart Home Services | Evoto Technologies India',
  description:
    'Smart home automation services by Evoto Technologies: KNX wired automation, wireless smart home, motorised curtains & gates, CCTV, video door phone, multi-zone audio, HVAC control, and smart lighting. Chandigarh, Punjab, India.',
  keywords: [
    'smart home services India',
    'KNX installation India',
    'motorised curtain India',
    'CCTV installation India',
    'video door phone India',
    'multi zone audio India',
    'HVAC controller India',
    'smart lighting India',
    'motorised gate India',
    'EPABX India',
  ],
  alternates: { canonical: 'https://evototechnologies.com/services' },
}

const iconMap: Record<string, React.ReactNode> = {
  cpu:          <Cpu size={24} strokeWidth={1.5} />,
  wifi:         <Wifi size={24} strokeWidth={1.5} />,
  alignjustify: <AlignJustify size={24} strokeWidth={1.5} />,
  dooropen:     <DoorOpen size={24} strokeWidth={1.5} />,
  shield:       <Shield size={24} strokeWidth={1.5} />,
  monitor:      <Monitor size={24} strokeWidth={1.5} />,
  music:        <Music size={24} strokeWidth={1.5} />,
  thermometer:  <Thermometer size={24} strokeWidth={1.5} />,
  lightbulb:    <Lightbulb size={24} strokeWidth={1.5} />,
  blinds:       <Blinds size={24} strokeWidth={1.5} />,
  phonecall:    <PhoneCall size={24} strokeWidth={1.5} />,
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Smart Home Automation Services by Evoto Technologies',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.headline,
    url: `https://evototechnologies.com/services/${s.slug}`,
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* Hero */}
      <section className="pt-40 pb-16 bg-[var(--c-bg)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--c-accent)]/4 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[var(--c-accent)] text-xs tracking-[0.25em] uppercase mb-6">What We Do</p>
          <h1 className="font-display text-[clamp(2.4rem,4.5vw,4rem)] text-[var(--c-text)] max-w-3xl mb-8">
            Smart Home &amp; Building Automation Services
          </h1>
          <p className="text-[var(--c-muted)] text-xl max-w-2xl leading-relaxed">
            From KNX wired automation to wireless smart home, motorised curtains, CCTV, HVAC
            control, and audio-video — Evoto Technologies is your complete automation partner
            in Chandigarh, Punjab, and pan-India.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-20 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--c-border)]">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-[var(--c-surface)] p-8 hover:bg-[var(--c-surface-h)] transition-colors duration-300 flex flex-col"
              >
                <div className="w-12 h-12 border border-[var(--c-border)] group-hover:border-[var(--c-accent)]/50 flex items-center justify-center text-[var(--c-accent)] mb-6 transition-colors duration-300">
                  {iconMap[service.icon]}
                </div>
                <h2 className="font-display text-2xl font-normal text-[var(--c-text)] mb-3 group-hover:text-[var(--c-accent)] transition-colors duration-200">
                  {service.title}
                </h2>
                <p className="text-[var(--c-muted)] text-sm leading-relaxed flex-1 mb-6">
                  {service.description}
                </p>
                {service.brands.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {service.brands.slice(0, 3).map((brand) => (
                      <span key={brand} className="text-xs text-[var(--c-faint)] border border-[var(--c-border)] px-2 py-0.5">
                        {brand}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--c-surface)] border-t border-[var(--c-border)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-[clamp(1.6rem,2.5vw,2.5rem)] text-[var(--c-text)] mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-[var(--c-muted)] mb-8">
            Tell us about your space and we&apos;ll recommend the right solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--c-accent)] text-[#0A0A0A] text-sm font-medium tracking-wide hover:bg-[var(--c-accent-h)] transition-all duration-300"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
    </>
  )
}
