import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, CalendarDays, Clock, HandHeart, MapPin, Megaphone, Music, Newspaper, Target, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import type { EventCategory, EventItem } from '@/lib/events'
import type { NewsItem } from '@/lib/news'
import { formatDate, formatDateRange, formatDay, formatMonthShort, formatTimeRange } from '@/lib/format'
import { cn } from '@/components/ui'
import { Octagram } from '@/components/ornaments'

export type CoverTone = 'brand' | 'deep' | 'gold'

const toneClass: Record<CoverTone, string> = {
  brand: 'bg-linear-135 from-brand-500 to-brand-800 text-gold-300',
  deep: 'bg-linear-135 from-brand-800 to-brand-950 text-gold-400',
  gold: 'bg-linear-135 from-gold-400 to-gold-700 text-brand-900',
}

// Stand-in artwork for items without a photo yet.
export function Cover({
  tone,
  icon: Icon,
  image,
  className,
  children,
}: {
  tone: CoverTone
  icon: LucideIcon
  image?: string
  className?: string
  children?: ReactNode
}) {
  return (
    <div className={cn('relative overflow-hidden', image ? 'bg-brand-900' : toneClass[tone], className)}>
      {image ? (
        <Image src={image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      ) : (
        <>
          <div className={cn('absolute inset-0 opacity-70', tone === 'gold' ? 'pattern-teal' : 'pattern-gold')} />
          <Octagram strokeWidth={0.6} className="absolute -bottom-12 -right-12 size-48 opacity-40 transition duration-700 group-hover:rotate-45" />
          <Icon className="absolute bottom-5 right-6 size-9 opacity-90" strokeWidth={1.5} />
        </>
      )}
      {children}
    </div>
  )
}

export const eventStyle: Record<EventCategory, { tone: CoverTone; icon: LucideIcon }> = {
  Kültür: { tone: 'brand', icon: Music },
  Eğitim: { tone: 'deep', icon: Users },
  Dayanışma: { tone: 'gold', icon: HandHeart },
  Spor: { tone: 'deep', icon: Target },
  Söyleşi: { tone: 'brand', icon: BookOpen },
}

export function EventCard({ event, past = false }: { event: EventItem; past?: boolean }) {
  const style = eventStyle[event.category]
  const multiDay = !!event.endsAt && formatDate(event.startsAt) !== formatDate(event.endsAt)
  const when = past
    ? formatDate(event.startsAt)
    : multiDay
      ? formatDateRange(event.startsAt, event.endsAt)
      : formatTimeRange(event.startsAt, event.endsAt)
  return (
    <Link
      href={`/etkinlikler/${event.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-xl hover:shadow-brand-900/10"
    >
      <Cover tone={style.tone} icon={style.icon} image={event.image} className={cn('h-40', past && 'grayscale-[0.4]')}>
        <div className="absolute left-5 top-5 flex w-16 flex-col items-center rounded-2xl bg-white/95 py-2 text-center shadow-md">
          <span className="font-display text-2xl font-semibold leading-none text-brand-800">{formatDay(event.startsAt)}</span>
          <span className="mt-1 text-[11px] font-bold uppercase tracking-wider text-gold-700">{formatMonthShort(event.startsAt)}</span>
        </div>
        <span className="absolute right-5 top-5 rounded-full bg-brand-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {event.category}
        </span>
      </Cover>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold leading-snug text-brand-900 transition group-hover:text-brand-600">{event.title}</h3>
        <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-muted">{event.summary}</p>
        <div className="mt-auto space-y-1.5 pt-5 text-sm text-muted">
          <p className="flex items-center gap-2">
            <Clock className="size-4 text-gold-600" />
            {when}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="size-4 text-gold-600" />
            {event.location}
          </p>
        </div>
      </div>
    </Link>
  )
}

const newsStyle: Record<NewsItem['category'], { tone: CoverTone; icon: LucideIcon }> = {
  Duyuru: { tone: 'gold', icon: Megaphone },
  Etkinlik: { tone: 'brand', icon: CalendarDays },
  Dernekten: { tone: 'deep', icon: Newspaper },
}

export function NewsCard({ item }: { item: NewsItem }) {
  const style = newsStyle[item.category]
  return (
    <Link
      href={`/haberler/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-xl hover:shadow-brand-900/10"
    >
      <Cover tone={style.tone} icon={style.icon} image={item.image} className="h-36">
        <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-800 shadow-sm">
          {item.category}
        </span>
      </Cover>
      <div className="flex flex-1 flex-col p-6">
        <time dateTime={item.date} className="text-sm font-medium text-gold-700">
          {formatDate(item.date)}
        </time>
        <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-brand-900 transition group-hover:text-brand-600">{item.title}</h3>
        <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-muted">{item.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-600">
          Devamını oku
          <ArrowRight className="size-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

export { newsStyle }
