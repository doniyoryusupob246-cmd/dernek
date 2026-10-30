import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { getNews, latestNews, news } from '@/lib/news'
import { formatDate } from '@/lib/format'
import { NewsCard } from '@/components/cards'
import { PageHero } from '@/components/page-hero'
import { StarDivider } from '@/components/ornaments'
import { SectionHeading } from '@/components/ui'

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: PageProps<'/haberler/[slug]'>): Promise<Metadata> {
  const item = getNews((await params).slug)
  return item ? { title: item.title, description: item.excerpt } : {}
}

export default async function NewsItemPage({ params }: PageProps<'/haberler/[slug]'>) {
  const item = getNews((await params).slug)
  if (!item) notFound()

  const more = latestNews.filter((n) => n.slug !== item.slug).slice(0, 3)

  return (
    <>
      <PageHero eyebrow={item.category} title={item.title} crumbs={[{ href: '/haberler', label: 'Haberler' }]}>
        <time dateTime={item.date} className="mt-5 block text-white/70">
          {formatDate(item.date)}
        </time>
      </PageHero>

      <section className="py-16 sm:py-24">
        <article className="wrap max-w-3xl">
          <p className="text-pretty font-display text-2xl leading-relaxed text-brand-900">{item.excerpt}</p>
          <StarDivider className="my-10 text-gold-500" />
          <div className="space-y-5 text-pretty text-lg leading-relaxed text-ink/85">
            {item.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link href="/haberler" className="mt-12 inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-800">
            <ArrowLeft className="size-4" />
            Tüm haberler
          </Link>
        </article>
      </section>

      {more.length > 0 && (
        <section className="border-t border-line bg-white py-16 sm:py-24">
          <div className="wrap">
            <SectionHeading eyebrow="Okumaya devam" title="Diğer haberler" />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {more.map((n) => (
                <NewsCard key={n.slug} item={n} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
