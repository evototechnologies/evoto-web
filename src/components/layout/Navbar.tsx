'use client'

import { useState, useEffect } from 'react'
// scrolled state removed — navbar is always solid white
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--c-bg)] border-b border-[var(--c-border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/evoto-logo.png"
            alt="Evoto Technologies"
            className="h-8 w-auto object-contain logo-img"
          />
        </Link>

        {/* Desktop nav — full-contrast, medium weight, tight tracking */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] font-medium tracking-normal transition-colors duration-150 ${
                  active
                    ? 'text-[var(--c-accent)]'
                    : 'text-[var(--c-text)] hover:text-[var(--c-accent)]'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[var(--c-accent)] rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+917009861539"
            className="flex items-center gap-1.5 text-[13px] font-medium text-[var(--c-text)] hover:text-[var(--c-accent)] transition-colors duration-150"
          >
            <Phone size={13} strokeWidth={2} />
            +91 700 986 1539
          </a>

          {/* Divider */}
          <span className="w-px h-4 bg-[var(--c-border)]" />

          <ThemeToggle />

          <Link
            href="/contact"
            className="px-5 py-2 text-[13px] font-semibold bg-[var(--c-accent)] text-white hover:bg-[var(--c-accent-h)] transition-colors duration-150"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="p-1 text-[var(--c-text)] hover:text-[var(--c-accent)] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--c-bg)] border-t border-[var(--c-border)]">
          <nav className="flex flex-col px-6 py-5 gap-1">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2.5 text-[15px] font-medium border-b border-[var(--c-border)] transition-colors duration-150 ${
                    active ? 'text-[var(--c-accent)]' : 'text-[var(--c-text)]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-4 flex flex-col gap-3">
              <a href="tel:+917009861539" className="flex items-center gap-2 text-sm font-medium text-[var(--c-text)]">
                <Phone size={14} strokeWidth={2} />
                +91 700 986 1539
              </a>
              <Link
                href="/contact"
                className="w-full py-3 text-sm font-semibold bg-[var(--c-accent)] text-white text-center"
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
