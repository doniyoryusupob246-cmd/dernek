import type { Metadata } from 'next'
import { getEventTimeline } from '@/lib/events'
import { EventCard } from '@/components/cards'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Etkinlikler',
  description: 'Turan Birlik Derneği’nin yaklaşan ve geçmiş etkinlikleri: kültür akşamları, gençlik buluşmaları, söyleşiler ve dayanışma kampanyaları.',
}

export default async function EventsPage() {
  const { upcoming, past } = await getEventTimeline()

  return (
    <>
      <PageHero
        eyebrow="Takvim"
        title="Etkinlikler"
        description="Kültür akşamlarından gençlik buluşmalarına kadar tüm etkinliklerimiz herkese açıktır. Takvimimizi takip edin, aramıza katılın."
      />

      <section className="py-16 sm:py-24">
        <div className="wrap">
          <SectionHeading eyebrow="Sırada ne var?" title="Yaklaşan etkinlikler" />
          {upcoming.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((e) => (
                <EventCard key={e.slug} event={e} />
              ))}
            </div>
          ) : (
            <p className="mt-10 rounded-3xl border border-dashed border-line bg-white p-10 text-center text-muted">
              Yeni etkinliklerimiz çok yakında burada olacak.
            </p>
          )}
        </div>
      </section>

      {past.length > 0 && (
        <section className="border-t border-line bg-sand/60 py-16 sm:py-24">
          <div className="wrap">
            <SectionHeading eyebrow="Arşiv" title="Geçmiş etkinlikler" />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {past.map((e) => (
                <EventCard key={e.slug} event={e} past />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
