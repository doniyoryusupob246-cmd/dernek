import type { Metadata } from 'next'
import { Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react'
import { site } from '@/lib/site'
import { socialIcons, WhatsappIcon } from '@/components/brand-icons'
import { PageHero } from '@/components/page-hero'
import { Rosette } from '@/components/ornaments'
import { buttonClass, Eyebrow } from '@/components/ui'
import { ContactForm } from './contact-form'

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Turan Birlik Derneği ile iletişime geçin: adres, telefon, e-posta, WhatsApp ve iletişim formu.',
}

export default function ContactPage() {
  const { contact } = site
  const channels = [
    { icon: Phone, label: 'Telefon', value: contact.phone, href: contact.phoneHref },
    { icon: WhatsappIcon, label: 'WhatsApp', value: 'Hemen yazın', href: contact.whatsappHref },
    { icon: Mail, label: 'E-posta', value: contact.email, href: `mailto:${contact.email}` },
    { icon: Clock, label: 'Çalışma saatleri', value: contact.hours },
  ]

  return (
    <>
      <PageHero
        eyebrow="Bize ulaşın"
        title="İletişim"
        description="Sorularınız, önerileriniz veya iş birliği teklifleriniz için bize yazın. Kapımız ve telefonumuz herkese açık."
      />

      <section className="py-16 sm:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="space-y-5">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {channels.map(({ icon: Icon, label, value, href }) => {
                const body = (
                  <>
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-gold-300">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-wider text-muted">{label}</span>
                      <span className="mt-1 block break-words font-semibold text-brand-900">{value}</span>
                    </span>
                  </>
                )
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} className="group flex h-full items-start gap-4 rounded-3xl border border-line bg-white p-5 transition hover:border-gold-300 hover:shadow-lg hover:shadow-brand-900/5">
                        {body}
                      </a>
                    ) : (
                      <div className="flex h-full items-start gap-4 rounded-3xl border border-line bg-white p-5">{body}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-800 p-7 text-white sm:p-8">
              <div className="pattern-gold absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
              <Rosette className="absolute -bottom-28 -right-28 -z-10 size-80 text-gold-500/50" />
              <MapPin className="size-7 text-gold-400" strokeWidth={1.6} />
              <h2 className="mt-4 font-display text-2xl font-semibold">Bizi ziyaret edin</h2>
              <p className="mt-2 max-w-sm leading-relaxed text-white/75">{contact.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass('gold', 'md', 'mt-6')}
              >
                <Navigation className="size-4" />
                Yol tarifi al
              </a>
            </div>

            <div className="pt-2">
              <Eyebrow>Sosyal medya</Eyebrow>
              <ul className="mt-4 flex flex-wrap gap-2">
                {site.socials.map((s) => {
                  const Icon = socialIcons[s.name]
                  return (
                    <li key={s.name}>
                      <a
                        href={s.href}
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-brand-800 transition hover:border-brand-600 hover:bg-brand-600 hover:text-white"
                      >
                        <Icon className="size-4" />
                        {s.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="mb-6 font-display text-3xl font-semibold text-brand-900">Bize yazın</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
