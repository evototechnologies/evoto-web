import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Check, ArrowLeft } from 'lucide-react'
import { services } from '@/data/services'
import FAQSection from '@/components/sections/FAQ'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://evototechnologies.com/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://evototechnologies.com/services/${slug}`,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.headline,
    description: service.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Evoto Technologies',
      url: 'https://evototechnologies.com',
    },
    areaServed: ['Chandigarh', 'Punjab', 'Delhi NCR', 'India'],
    serviceType: service.title,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="pt-40 pb-20 bg-[var(--c-bg)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--c-accent)]/4 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs text-[var(--c-muted)] hover:text-[var(--c-accent)] transition-colors mb-8"
          >
            <ArrowLeft size={12} />
            All Services
          </Link>
          <p className="text-[var(--c-accent)] text-xs tracking-[0.25em] uppercase mb-5">
            {service.title}
          </p>
          <h1 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] text-[var(--c-text)] max-w-3xl mb-6">
            {service.headline}
          </h1>
          <p className="text-[var(--c-muted)] text-xl max-w-2xl leading-relaxed mb-10">
            {service.longDescription.split('.').slice(0, 2).join('. ') + '.'}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--c-accent)] text-[#0A0A0A] text-sm font-medium tracking-wide hover:bg-[var(--c-accent-h)] transition-all duration-300"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* About the service */}
      <section className="py-20 bg-[var(--c-surface)] border-y border-[var(--c-border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-[clamp(1.6rem,2.5vw,2.5rem)] text-[var(--c-text)] mb-5">
              What We Deliver
            </h2>
            <p className="text-[var(--c-muted)] text-base leading-relaxed">
              {service.longDescription}
            </p>
          </div>
          <div>
            <h3 className="text-xs text-[var(--c-faint)] tracking-[0.2em] uppercase mb-6">
              What&apos;s included
            </h3>
            <ul className="space-y-4">
              {service.features.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <Check size={15} className="text-[var(--c-accent)] mt-0.5 shrink-0" strokeWidth={2.5} />
                  <span className="text-[var(--c-muted)] text-sm leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Brands */}
      {service.brands.length > 0 && (
        <section className="py-16 bg-[var(--c-bg)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-xs text-[var(--c-faint)] tracking-[0.2em] uppercase mb-6">
              Brands we work with
            </p>
            <div className="flex flex-wrap gap-3">
              {service.brands.map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 border border-[var(--c-border)] text-[var(--c-muted)] text-sm hover:border-[var(--c-accent)]/50 hover:text-[var(--c-text)] transition-colors duration-200"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQSection faqs={service.faqs} includeSchema />

      {/* CTA */}
      <section className="py-20 bg-[var(--c-surface)] border-t border-[var(--c-border)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-[clamp(1.6rem,2.5vw,2.5rem)] text-[var(--c-text)] mb-5">
            Interested in {service.title}?
          </h2>
          <p className="text-[var(--c-muted)] mb-8">
            Tell us about your space and we&apos;ll put together a tailored proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--c-accent)] text-[#0A0A0A] text-sm font-medium tracking-wide hover:bg-[var(--c-accent-h)] transition-all duration-300"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--c-border)] text-[var(--c-muted)] text-sm tracking-wide hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
