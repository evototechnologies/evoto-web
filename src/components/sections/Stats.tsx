'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { value: 4, suffix: '+', label: 'Years of Experience', description: 'Serving clients since 2021' },
  { value: 70, suffix: '+', label: 'Projects Completed', description: 'Across residential, commercial & industrial' },
  { value: 65, suffix: '+', label: 'Happy Clients', description: 'Pan-India and growing' },
  { value: 6, suffix: '+', label: 'Cities Served', description: 'With a focus on Punjab & North India' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + increment, target)
      setCount(Math.round(current))
      if (current >= target) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="font-display text-[clamp(3rem,6vw,5rem)] text-[var(--c-accent)] leading-none">
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-[var(--c-surface)] border-y border-[var(--c-border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <Counter target={s.value} suffix={s.suffix} />
              <div className="mt-3 text-[var(--c-text)] text-sm font-medium tracking-wide">{s.label}</div>
              <div className="mt-1 text-[var(--c-faint)] text-xs">{s.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
