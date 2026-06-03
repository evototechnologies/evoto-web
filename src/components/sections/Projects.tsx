'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { projects, projectCategories } from '@/data/projects'

type Props = { preview?: boolean }

export default function ProjectsSection({ preview = false }: Props) {
  const [activeCategory, setActiveCategory] = useState('all')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const displayed = preview ? projects.slice(0, 6) : projects
  const filtered =
    activeCategory === 'all'
      ? displayed
      : displayed.filter((p) => p.categorySlug === activeCategory)

  return (
    <section id="projects" className="py-28 bg-[var(--c-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[var(--c-accent)] text-xs tracking-[0.25em] uppercase mb-4"
            >
              Our Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-[clamp(1.8rem,3vw,3rem)] text-[var(--c-text)]"
            >
              Selected Projects
            </motion.h2>
          </div>
          {!preview && (
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-4 py-1.5 text-xs tracking-wide border transition-all duration-200 ${
                    activeCategory === cat.slug
                      ? 'border-[var(--c-accent)] bg-[var(--c-accent)] text-white'
                      : 'border-[var(--c-border)] text-[var(--c-muted)] hover:border-[var(--c-accent)]/50 hover:text-[var(--c-text)]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--c-border)]">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group bg-[var(--c-surface)] hover:bg-[var(--c-surface-h)] transition-colors duration-300"
              >
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </>
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-xs border border-[var(--c-accent)]/60 text-[var(--c-accent)] tracking-wide bg-black/30 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl text-[var(--c-text)] mb-2 group-hover:text-[var(--c-accent)] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-[var(--c-muted)] text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[var(--c-faint)] text-xs">
                      <MapPin size={11} />
                      {project.location}
                    </span>
                    <div className="flex gap-2 flex-wrap justify-end">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs text-[var(--c-faint)] border border-[var(--c-border)] px-2 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {preview && (
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--c-accent)] text-[var(--c-accent)] text-sm font-medium tracking-wide hover:bg-[var(--c-accent)] hover:text-white transition-all duration-300"
            >
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
