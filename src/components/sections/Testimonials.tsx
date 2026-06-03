'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 bg-[var(--c-surface)] border-y border-[var(--c-border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[var(--c-accent)] text-xs tracking-[0.25em] uppercase mb-4"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-[clamp(1.8rem,3vw,3rem)] text-[var(--c-text)]"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-[var(--c-bg)] border border-[var(--c-border)] p-8 flex flex-col hover:border-[var(--c-accent)]/30 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" strokeWidth={0} className="text-[var(--c-accent)]" />
                ))}
              </div>

              <div className="font-display text-6xl text-[var(--c-accent)]/20 leading-none mb-2 select-none">"</div>

              <p className="text-[var(--c-muted)] text-sm leading-relaxed flex-1 mb-8 -mt-2">{t.quote}</p>

              {/* Author with avatar */}
              <div className="pt-6 border-t border-[var(--c-border)] flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[var(--c-border)]">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="text-[var(--c-text)] text-sm font-medium">{t.name}</div>
                  <div className="text-[var(--c-accent)] text-xs mt-0.5">{t.title}</div>
                  <div className="text-[var(--c-faint)] text-xs mt-0.5">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
