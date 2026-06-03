import type { Metadata } from 'next'
import ProjectsSection from '@/components/sections/Projects'

export const metadata: Metadata = {
  title: 'Smart Home Projects | Portfolio — Evoto Technologies',
  description:
    'Explore Evoto Technologies smart home projects: residential villas, farmhouses, commercial offices, dental clinics, and industrial automation across Punjab, Chandigarh, and India.',
  keywords: ['smart home project India', 'KNX project India', 'home automation villa Punjab', 'smart office Chandigarh'],
  alternates: { canonical: 'https://evototechnologies.com/projects' },
}

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-40 pb-8 bg-[var(--c-bg)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--c-accent)]/4 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[var(--c-accent)] text-xs tracking-[0.25em] uppercase mb-6">Portfolio</p>
          <h1 className="font-display text-[clamp(2.4rem,4.5vw,4rem)] text-[var(--c-text)] max-w-2xl mb-8">
            Our Work Speaks for Itself
          </h1>
          <p className="text-[var(--c-muted)] text-xl max-w-xl leading-relaxed">
            A selection of residential, commercial, and industrial automation projects across
            Chandigarh, Punjab, and pan-India — each tailored to the client&apos;s vision.
          </p>
        </div>
      </section>
      <ProjectsSection />
    </>
  )
}
