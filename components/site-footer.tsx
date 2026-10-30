import Image from 'next/image'
import Link from 'next/link'
import { cacheLife } from 'next/cache'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { site } from '@/lib/site'
import { socialIcons } from '@/components/brand-icons'
import { Octagram } from '@/components/ornaments'

async function CurrentYear() {
  'use cache'
  cacheLife('days')
  return new Date().getFullYear()
}

const columns = [
  {
    title: 'Dernek',
    links: [
      { href: '/hakkimizda', label: 'Hakkımızda' },
      { href: '/etkinlikler', label: 'Etkinlikler' },
      { href: '/haberler', label: 'Haberler' },
      { href: '/galeri', label: 'Galeri' },
    ],
  },
  {
    title: 'Destek Olun',
    links: [
      { href: '/uyelik', label: 'Üye Ol' },
      { href: '/bagis', label: 'Bağış Yap' },
      { href: '/uyelik#basvuru', label: 'Gönüllü Ol' },
      { href: '/iletisim', label: 'Bize Yazın' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-white/70">
      <div className="pattern-gold absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative">
        <div className="wrap grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr] lg:gap-10">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/logo.png" alt="" width={128} height={128} className="size-16" />
              <span className="leading-tight">
                <span className="block font-display text-xl font-semibold text-white">{site.name}</span>
                <span lang="en" className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-400">{site.nameEn}</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">{site.description}</p>
            <ul className="mt-6 flex gap-2">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.name]
                return (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      aria-label={s.name}
                      className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-gold-400 hover:bg-gold-500 hover:text-brand-950"
                    >
                      <Icon className="size-[18px]" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="font-display text-lg font-semibold text-white">{col.title}</h2>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="transition hover:text-gold-400">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 lg:col-span-1">
            <h2 className="font-display text-lg font-semibold text-white">İletişim</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" />
                {site.contact.address}
              </li>
              <li>
                <a href={site.contact.phoneHref} className="flex gap-3 transition hover:text-gold-400">
                  <Phone className="mt-0.5 size-4 shrink-0 text-gold-400" />
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="flex gap-3 transition hover:text-gold-400">
                  <Mail className="mt-0.5 size-4 shrink-0 text-gold-400" />
                  {site.contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold-400" />
                {site.contact.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="wrap flex flex-col gap-3 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
            <p>
              © <CurrentYear /> {site.name}. Tüm hakları saklıdır.
            </p>
            <p className="flex items-center gap-2 font-display text-sm italic text-gold-400/90">
              <Octagram className="size-3" filled />
              {site.motto}
            </p>
            <Link href="/kvkk" className="transition hover:text-gold-400">
              KVKK Aydınlatma Metni
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
