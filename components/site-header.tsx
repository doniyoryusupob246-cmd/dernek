'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Heart, Mail, Menu, Phone, X } from 'lucide-react'
import { mainNav, site } from '@/lib/site'
import { buttonClass, cn } from '@/components/ui'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)
  const close = () => setOpen(false)

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 border-b transition-colors duration-300',
          scrolled || open ? 'border-line bg-cream/90 backdrop-blur-md' : 'border-transparent bg-cream',
        )}
      >
        <div className="wrap flex h-[72px] items-center justify-between gap-4">
          <Link href="/" onClick={close} className="flex items-center gap-3" aria-label={`${site.name} — Ana Sayfa`}>
            <Image src="/logo.png" alt="" width={96} height={96} priority className="size-11 sm:size-12" />
            <span className="whitespace-nowrap leading-tight">
              <span className="block font-display text-[17px] font-semibold text-brand-900 sm:text-lg">{site.name}</span>
              <span lang="en" className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-700">{site.nameEn}</span>
            </span>
          </Link>

          <nav className="hidden lg:block" aria-label="Ana menü">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => {
                const active = isActive(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'relative block rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors',
                        active ? 'text-brand-700' : 'text-ink/75 hover:text-brand-700',
                      )}
                    >
                      {item.label}
                      {active && <span className="absolute inset-x-0 -bottom-0.5 mx-auto size-1.5 rotate-45 bg-gold-500" />}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/bagis" className={buttonClass('outline', 'sm', 'max-xl:hidden')}>
              <Heart className="size-4" />
              Bağış Yap
            </Link>
            <Link href="/uyelik" className={buttonClass('gold', 'sm', 'max-sm:hidden')}>
              Üye Ol
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
              className="inline-flex size-11 items-center justify-center rounded-full text-brand-800 transition hover:bg-brand-50 lg:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="pattern-gold fixed inset-x-0 bottom-0 top-[73px] z-40 overflow-y-auto bg-brand-950 lg:hidden"
        >
          <nav className="wrap flex min-h-full flex-col py-6" aria-label="Mobil menü">
            <ul className="divide-y divide-white/10">
              {[{ href: '/', label: 'Ana Sayfa' }, ...mainNav].map((item, i) => {
                const active = item.href === '/' ? pathname === '/' : isActive(item.href)
                return (
                  <li key={item.href} className="animate-rise" style={{ animationDelay: `${i * 40}ms` }}>
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'flex items-center justify-between py-4 font-display text-2xl',
                        active ? 'text-gold-400' : 'text-white',
                      )}
                    >
                      {item.label}
                      {active && <span className="size-2 rotate-45 bg-gold-500" />}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link href="/uyelik" onClick={close} className={buttonClass('gold', 'lg')}>
                Üye Ol
              </Link>
              <Link href="/bagis" onClick={close} className={buttonClass('light', 'lg')}>
                <Heart className="size-4" />
                Bağış Yap
              </Link>
            </div>

            <div className="mt-auto space-y-3 pt-10 text-sm text-white/70">
              <a href={site.contact.phoneHref} className="flex items-center gap-3 hover:text-white">
                <Phone className="size-4 text-gold-400" />
                {site.contact.phone}
              </a>
              <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail className="size-4 text-gold-400" />
                {site.contact.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
