import React from 'react'

interface CTAButtonProps {
  variant: 'filled' | 'ghost'
  href: string
  children: React.ReactNode
  className?: string
}

export default function CTAButton({ variant, href, children, className = '' }: CTAButtonProps) {
  const base =
    'inline-block px-7 py-3 text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer'

  const styles = {
    filled:
      'bg-accent text-white border border-accent hover:opacity-85',
    ghost:
      'bg-transparent text-ink border border-ink hover:bg-ink hover:text-background',
  }

  const isExternal = href.startsWith('http') || href.startsWith('mailto')

  return (
    <a
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </a>
  )
}
