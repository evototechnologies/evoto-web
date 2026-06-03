'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type FAQItem = { q: string; a: string }

type Props = {
  faqs: FAQItem[]
  title?: string
  includeSchema?: boolean
}

export default function FAQSection({ faqs, title = 'Frequently Asked Questions', includeSchema = false }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section className="py-24 bg-[var(--c-bg)]">
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="font-display text-[clamp(1.6rem,2.5vw,2.5rem)] text-[var(--c-text)] mb-12">
          {title}
        </h2>
        <div className="divide-y divide-[var(--c-border)]">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left group"
              >
                <span className="text-[var(--c-text)] text-sm font-medium leading-relaxed group-hover:text-[var(--c-accent)] transition-colors duration-200">
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-[var(--c-muted)] shrink-0 mt-0.5 transition-transform duration-300 ${
                    open === i ? 'rotate-180 text-[var(--c-accent)]' : ''
                  }`}
                />
              </button>
              {open === i && (
                <p className="pb-5 text-sm text-[var(--c-muted)] leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
