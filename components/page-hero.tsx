import Link from 'next/link'
import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { Eyebrow } from '@/components/ui'
import { Rosette } from '@/components/ornaments'

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
  children,
}: {
  eyebrow: string
  title: string
  description?: ReactNode
  crumbs?: { href: string; label: string }[]
  children?: ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900">
      <div className="pattern-gold absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(to_right,transparent,black_70%)]" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_0%,rgba(0,130,155,0.55),transparent_60%)]" aria-hidden="true" />
      <Rosette className="absolute -right-24 -top-24 -z-10 size-[420px] text-gold-500/70 sm:-right-16" />

      <div className="wrap py-14 sm:py-20">
        <nav aria-label="Sayfa yolu" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
            <li>
              <Link href="/" className="transition hover:text-gold-400">
                Ana Sayfa
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.href} className="flex items-center gap-1.5">
                <ChevronRight className="size-3.5" />
                <Link href={c.href} className="transition hover:text-gold-400">
                  {c.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-1.5">
              <ChevronRight className="size-3.5" />
              <span aria-current="page" className="line-clamp-1 text-white/85">
                {title}
              </span>
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl animate-rise">
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl">{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">{description}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
