'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Cpu, Wifi, AlignJustify, DoorOpen, Shield, Monitor, Music, Thermometer, Lightbulb, Blinds, PhoneCall, ArrowRight } from 'lucide-react'
import { services } from '@/data/services'

const iconMap: Record<string, React.ReactNode> = {
  cpu:          <Cpu size={22} strokeWidth={1.5} />,
  wifi:         <Wifi size={22} strokeWidth={1.5} />,
  alignjustify: <AlignJustify size={22} strokeWidth={1.5} />,
  dooropen:     <DoorOpen size={22} strokeWidth={1.5} />,
  shield:       <Shield size={22} strokeWidth={1.5} />,
  monitor:      <Monitor size={22} strokeWidth={1.5} />,
  music:        <Music size={22} strokeWidth={1.5} />,
  thermometer:  <Thermometer size={22} strokeWidth={1.5} />,
  lightbulb:    <Lightbulb size={22} strokeWidth={1.5} />,
  blinds:       <Blinds size={22} strokeWidth={1.5} />,
  phonecall:    <PhoneCall size={22} strokeWidth={1.5} />,
}

type Props = { preview?: boolean }

export default function ServicesSection({ preview = false }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const displayed = preview ? services.filter((s) => s.featured) : services

  return (
    <section id="services" className="py-28 bg-[var(--c-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[var(--c-accent)] text-xs tracking-[0.25em] uppercase mb-4"
            >
              What We Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-[clamp(1.8rem,3vw,3rem)] text-[var(--c-text)] max-w-xl"
            >
              Intelligence for Every Space
            </motion.h2>
          </div>
          {preview && (
            <Link
              href="/services"
              className="text-sm text-[var(--c-accent)] hover:underline underline-offset-4 shrink-0"
            >
              View all 11 services →
            </Link>
          )}
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--c-border)]">
          {displayed.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group bg-[var(--c-surface)] p-8 hover:bg-[var(--c-surface-h)] transition-colors duration-300 flex flex-col"
            >
              <div className="w-10 h-10 border border-[var(--c-border)] group-hover:border-[var(--c-accent)]/50 flex items-center justify-center text-[var(--c-accent)] mb-6 transition-colors duration-300">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-display text-xl text-[var(--c-text)] mb-3">{service.title}</h3>
              <p className="text-[var(--c-muted)] text-sm leading-relaxed flex-1 mb-6">{service.description}</p>
              <Link
                href={`/services/${service.slug}`}
                className="flex items-center gap-2 text-xs tracking-wide text-[var(--c-accent)]/70 group-hover:text-[var(--c-accent)] transition-colors duration-200"
              >
                Learn more
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
