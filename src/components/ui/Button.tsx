import Link from 'next/link'
import { type ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

const base =
  'inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

const variants = {
  primary:
    'bg-[var(--c-accent)] text-white hover:bg-[var(--c-accent-h)] active:scale-[0.98]',
  outline:
    'border border-[var(--c-accent)] text-[var(--c-accent)] hover:bg-[var(--c-accent)] hover:text-white active:scale-[0.98]',
  ghost:
    'text-[var(--c-text)] hover:text-[var(--c-accent)] underline-offset-4 hover:underline',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}
