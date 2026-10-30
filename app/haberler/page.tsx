import type { Metadata } from 'next'
import { latestNews } from '@/lib/news'
import { NewsCard } from '@/components/cards'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Haberler ve Duyurular',
  description: 'Turan Birlik Derneği’nden son gelişmeler, duyurular ve etkinliklerden notlar.',
}

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Güncel"
        title="Haberler ve Duyurular"
        description="Derneğimizden son gelişmeler, duyurular ve etkinliklerden notlar."
      />
      <section className="py-16 sm:py-24">
        <div className="wrap grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((n) => (
            <NewsCard key={n.slug} item={n} />
          ))}
        </div>
      </section>
    </>
  )
}
