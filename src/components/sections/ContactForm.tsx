'use client'

import { useState } from 'react'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const serviceOptions = [
  { value: '', label: 'Select a service' },
  { value: 'Smart Home', label: 'Smart Home' },
  { value: 'Home Security', label: 'Home Security' },
  { value: 'Industrial Application', label: 'Industrial Application' },
  { value: 'Smart Ambient Lights', label: 'Smart Ambient Lights' },
  { value: 'Smart Shading System', label: 'Smart Shading System' },
  { value: 'Other', label: 'Other / Not Sure' },
]

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      city: (form.elements.namedItem('city') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Server error')
      setState('success')
      form.reset()
    } catch {
      setState('error')
      setErrorMsg('Something went wrong. Please try again or call us directly.')
    }
  }

  const inputCls =
    'w-full bg-[var(--c-bg)] border border-[var(--c-border)] text-[var(--c-text)] px-4 py-3 text-sm placeholder-[var(--c-faint)] focus:outline-none focus:border-[var(--c-accent)] transition-colors duration-200'

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
        <CheckCircle size={40} className="text-[var(--c-accent)]" strokeWidth={1.5} />
        <h3 className="font-display text-3xl text-[var(--c-text)]">Thank You</h3>
        <p className="text-[var(--c-muted)] max-w-sm">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setState('idle')}
          className="mt-4 text-sm text-[var(--c-accent)] underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-[var(--c-muted)] tracking-wide uppercase mb-1.5" htmlFor="name">
            Name <span className="text-[var(--c-accent)]">*</span>
          </label>
          <input id="name" name="name" type="text" required placeholder="Your full name" className={inputCls} />
        </div>
        <div>
          <label className="block text-xs text-[var(--c-muted)] tracking-wide uppercase mb-1.5" htmlFor="phone">
            Phone <span className="text-[var(--c-accent)]">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" className={inputCls} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-[var(--c-muted)] tracking-wide uppercase mb-1.5" htmlFor="email">
            Email <span className="text-[var(--c-accent)]">*</span>
          </label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputCls} />
        </div>
        <div>
          <label className="block text-xs text-[var(--c-muted)] tracking-wide uppercase mb-1.5" htmlFor="city">
            City
          </label>
          <input id="city" name="city" type="text" placeholder="Chandigarh" className={inputCls} />
        </div>
      </div>

      <div>
        <label className="block text-xs text-[var(--c-muted)] tracking-wide uppercase mb-1.5" htmlFor="service">
          Service Interest
        </label>
        <select id="service" name="service" className={`${inputCls} cursor-pointer`} defaultValue="">
          {serviceOptions.map((o) => (
            <option key={o.value} value={o.value} disabled={o.value === ''}>{o.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs text-[var(--c-muted)] tracking-wide uppercase mb-1.5" htmlFor="message">
          Message / Requirement
        </label>
        <textarea
          id="message" name="message" rows={4}
          placeholder="Tell us about your project, space size, timeline..."
          className={inputCls}
        />
      </div>

      {state === 'error' && (
        <div className="flex items-center gap-2 text-sm text-red-400 border border-red-900/50 bg-red-950/30 px-4 py-3">
          <AlertCircle size={14} />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full flex items-center justify-center gap-2 py-4 bg-[var(--c-accent)] text-white text-sm font-medium tracking-wide hover:bg-[var(--c-accent-h)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === 'loading' ? (
          <><Loader2 size={16} className="animate-spin" />Sending...</>
        ) : (
          'Send Message'
        )}
      </button>

      <p className="text-[var(--c-faint)] text-xs text-center">
        Or call us directly:{' '}
        <a href="tel:+917009861539" className="text-[var(--c-accent)] hover:underline">
          +91 700 986 1539
        </a>
      </p>
    </form>
  )
}
