'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 12
      const y = (clientY / innerHeight - 0.5) * 12
      el.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--c-bg)]">
      {/* Background image */}
      <div ref={videoRef} className="absolute inset-0 transition-transform duration-700 ease-out will-change-transform scale-105">
        <Image
          src="/images/hero.jpg"
          alt="Smart home interior by Evoto Technologies"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay — darker in dark mode, lighter tint in light mode */}
      <div className="absolute inset-0 bg-[var(--c-bg)]/75" />

      {/* Subtle grid on top of overlay */}
      <div className="absolute inset-0 bg-grid" />

      {/* Accent lines */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[var(--c-accent)]/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--c-accent)]/40 text-[var(--c-accent)] text-xs tracking-[0.2em] uppercase mb-10 bg-[var(--c-bg)]/30 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-accent)] animate-pulse" />
          KNX Certified · BIS/WPC Certified
        </div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(2.4rem,4.5vw,4rem)] text-[var(--c-text)] mb-6">
          Every Home Will Be<br />
          <span className="text-gradient">A Smart Home</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[var(--c-muted)] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Premium smart automation for residences, commercial spaces, and industrial facilities.
          Designed to feel invisible. Built to last a lifetime.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--c-accent)] text-[#0A0A0A] text-sm font-medium tracking-wide hover:bg-[var(--c-accent-h)] transition-all duration-300 active:scale-[0.98] group"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--c-text)]/30 text-[var(--c-text)] text-sm font-medium tracking-wide hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition-all duration-300 bg-[var(--c-bg)]/20 backdrop-blur-sm"
          >
            Contact Us
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-[var(--c-border)] max-w-3xl mx-auto overflow-hidden">
          {[
            { value: '4+', label: 'Years Experience' },
            { value: '70+', label: 'Projects Done' },
            { value: '65+', label: 'Happy Clients' },
            { value: '6+', label: 'Cities Served' },
          ].map((s) => (
            <div key={s.label} className="bg-[var(--c-bg)]/80 backdrop-blur-sm px-6 py-5 text-center">
              <div className="font-display text-3xl text-[var(--c-accent)] mb-1">{s.value}</div>
              <div className="text-[var(--c-muted)] text-xs tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--c-faint)]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}
