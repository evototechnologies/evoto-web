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
      const x = (clientX / innerWidth - 0.5) * 10
      const y = (clientY / innerHeight - 0.5) * 10
      el.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111]">
      {/* Background image — no overlay */}
      <div ref={videoRef} className="absolute inset-0 transition-transform duration-700 ease-out will-change-transform scale-105">
        <Image
          src="/images/hero.jpg"
          alt="Smart home interior by Evoto Technologies"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content — white text with subtle shadow for readability on the photo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/40 text-white text-xs tracking-[0.2em] uppercase mb-10 backdrop-blur-sm bg-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          KNX Certified · BIS/WPC Certified
        </div>

        {/* Headline */}
        <h1
          className="font-display text-[clamp(2.4rem,4.5vw,4rem)] text-white mb-6"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
        >
          Every Home Will Be<br />
          <span className="text-[var(--c-accent)]" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
            A Smart Home
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ textShadow: '0 1px 10px rgba(0,0,0,0.6)' }}
        >
          Premium smart automation for residences, commercial spaces, and industrial facilities.
          Designed to feel invisible. Built to last a lifetime.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--c-accent)] text-white text-sm font-semibold tracking-wide hover:bg-[var(--c-accent-h)] transition-all duration-200 active:scale-[0.98] group"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-sm border border-white/50 text-white text-sm font-medium tracking-wide hover:bg-white/25 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto overflow-hidden">
          {[
            { value: '4+', label: 'Years Experience' },
            { value: '70+', label: 'Projects Done' },
            { value: '65+', label: 'Happy Clients' },
            { value: '6+', label: 'Cities Served' },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-5 text-center backdrop-blur-md bg-white/15 ${i < 3 ? 'border-r border-white/20' : ''} border-t border-white/20`}
            >
              <div className="font-display text-3xl text-white font-semibold mb-1" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}>
                {s.value}
              </div>
              <div className="text-white/70 text-xs tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}
