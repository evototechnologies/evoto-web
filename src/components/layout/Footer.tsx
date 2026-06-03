import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

const serviceLinks = [
  { label: 'Smart Home', href: '/services#smart-home' },
  { label: 'Home Security', href: '/services#home-security' },
  { label: 'Industrial Application', href: '/services#industrial-application' },
  { label: 'Smart Ambient Lights', href: '/services#smart-ambient-lights' },
  { label: 'Smart Shading System', href: '/services#smart-shading-system' },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/evototechnologies',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/evototechnologies',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/evototechnologies',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--c-bg)] border-t border-[var(--c-border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/evoto-logo.png"
                alt="Evoto Technologies"
                className="h-8 w-auto object-contain logo-img"
              />
            </Link>
            <p className="text-[var(--c-muted)] text-sm leading-relaxed mb-6">
              Every home will be a smart home. KNX certified smart automation for residences,
              commercial spaces, and industrial facilities across India.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-[var(--c-muted)] hover:text-[var(--c-accent)] transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[var(--c-text)] text-sm tracking-widest uppercase mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[var(--c-muted)] text-sm hover:text-[var(--c-accent)] transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[var(--c-text)] text-sm tracking-widest uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[var(--c-muted)] text-sm hover:text-[var(--c-accent)] transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--c-text)] text-sm tracking-widest uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+917009861539" className="flex items-start gap-3 text-[var(--c-muted)] text-sm hover:text-[var(--c-accent)] transition-colors duration-200">
                  <Phone size={14} className="mt-0.5 shrink-0" />
                  +91 700 986 1539
                </a>
              </li>
              <li>
                <a href="mailto:info@evototechnologies.com" className="flex items-start gap-3 text-[var(--c-muted)] text-sm hover:text-[var(--c-accent)] transition-colors duration-200">
                  <Mail size={14} className="mt-0.5 shrink-0" />
                  info@evototechnologies.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-[var(--c-muted)] text-sm">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  Chandigarh, Punjab, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-[var(--c-border)] pt-8 mb-8 flex flex-wrap items-center gap-6">
          {/* KNX Partner logo */}
          <img
            src="/images/knx-partner.svg"
            alt="KNX Partner"
            className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <div className="flex flex-wrap gap-3">
            {['BIS Certified', 'WPC Certified'].map((cert) => (
              <span key={cert} className="px-3 py-1 text-xs border border-[var(--c-border)] text-[var(--c-muted)] tracking-wider uppercase">
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--c-faint)]">
          <p>© {new Date().getFullYear()} Evoto Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[var(--c-muted)] transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-[var(--c-muted)] transition-colors duration-200">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
