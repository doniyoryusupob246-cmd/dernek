import type { ReactNode } from 'react'
import { Octagram } from '@/components/ornaments'

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const buttonVariants = {
  gold: 'bg-gold-500 text-brand-950 shadow-lg shadow-gold-700/20 hover:bg-gold-400',
  brand: 'bg-brand-600 text-white shadow-lg shadow-brand-900/15 hover:bg-brand-700',
  deep: 'bg-brand-800 text-white shadow-lg shadow-brand-950/20 hover:bg-brand-900',
  outline: 'border border-brand-600/25 text-brand-700 hover:border-brand-600/50 hover:bg-brand-50',
  light: 'border border-white/30 text-white hover:border-white/60 hover:bg-white/10',
  white: 'bg-white text-brand-800 shadow-lg shadow-brand-950/10 hover:bg-cream',
} as const

const buttonSizes = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-14 px-7 text-base',
} as const

export function buttonClass(
  variant: keyof typeof buttonVariants = 'brand',
  size: keyof typeof buttonSizes = 'md',
  className?: string,
) {
  return cn(
    'inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold transition duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
    buttonVariants[variant],
    buttonSizes[size],
    className,
  )
}

export function Eyebrow({ children, tone = 'light', className }: { children: ReactNode; tone?: 'light' | 'dark'; className?: string }) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em]',
        tone === 'light' ? 'text-gold-700' : 'text-gold-400',
        className,
      )}
    >
      <Octagram className="size-3.5" filled />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  action,
}: {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  action?: ReactNode
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-6',
        align === 'center' ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between',
      )}
    >
      <div className={cn('max-w-2xl', align === 'center' && 'mx-auto')}>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <h2
          className={cn(
            'mt-4 text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl',
            tone === 'light' ? 'text-brand-900' : 'text-white',
          )}
        >
          {title}
        </h2>
        {description && (
          <p className={cn('mt-4 text-pretty text-base leading-relaxed sm:text-lg', tone === 'light' ? 'text-muted' : 'text-white/75')}>
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  )
}
