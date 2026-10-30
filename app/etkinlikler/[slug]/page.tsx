import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays, Clock, MapPin, Ticket } from 'lucide-react'
import { events, getEvent } from '@/lib/events'
import { formatDate, formatDateRange, formatTimeRange, formatWeekday } from '@/lib/format'
import { site } from '@/lib/site'
import { WhatsappIcon } from '@/components/brand-icons'
import { PageHero } from '@/components/page-hero'
import { buttonClass } from '@/components/ui'

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: PageProps<'/etkinlikler/[slug]'>): Promise<Metadata> {
  const event = getEvent((await params).slug)
  return event ? { title: event.title, description: event.summary } : {}
}

export default async function EventPage({ params }: PageProps<'/etkinlikler/[slug]'>) {
  const event = getEvent((await params).slug)
  if (!event) notFound()

  const multiDay = !!event.endsAt && formatDate(event.startsAt) !== formatDate(event.endsAt)
  const details = [
    {
      icon: CalendarDays,
      label: 'Tarih',
      value: multiDay ? formatDateRange(event.startsAt, event.endsAt) : `${formatDate(event.startsAt)}, ${formatWeekday(event.startsAt)}`,
    },
    { icon: Clock, label: 'Saat', value: multiDay ? 'Çalışma saatleri içinde' : formatTimeRange(event.startsAt, event.endsAt) },
    { icon: MapPin, label: 'Yer', value: event.location },
    { icon: Ticket, label: 'Katılım', value: event.access },
  ]

  return (
    <>
      <PageHero
        eyebrow={event.category}
        title={event.title}
        description={event.summary}
        crumbs={[{ href: '/etkinlikler', label: 'Etkinlikler' }]}
      />

      <section className="py-16 sm:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          <article className="max-w-2xl space-y-5 text-pretty text-lg leading-relaxed text-ink/85">
            {event.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <Link href="/etkinlikler" className="inline-flex items-center gap-2 pt-6 text-base font-semibold text-brand-600 hover:text-brand-800">
              <ArrowLeft className="size-4" />
              Tüm etkinlikler
            </Link>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <dl className="divide-y divide-line rounded-3xl border border-line bg-white px-6">
              {details.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4 py-5">
                  <Icon className="mt-0.5 size-5 shrink-0 text-gold-600" />
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-muted">{label}</dt>
                    <dd className="mt-1 font-medium text-brand-900">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <div className="rounded-3xl bg-brand-800 p-6 text-white">
              <h2 className="font-display text-xl font-semibold">Katılmak ister misiniz?</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Yer ayırtmak veya bilgi almak için bize WhatsApp’tan yazın ya da iletişim sayfamızdan ulaşın.
              </p>
              <div className="mt-5 grid gap-2">
                <a href={site.contact.whatsappHref} className={buttonClass('gold', 'md')}>
                  <WhatsappIcon className="size-4" />
                  WhatsApp’tan yazın
                </a>
                <Link href="/iletisim" className={buttonClass('light', 'md')}>
                  İletişim sayfası
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
