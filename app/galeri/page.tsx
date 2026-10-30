import type { Metadata } from 'next'
import { Camera, Images } from 'lucide-react'
import { albums } from '@/lib/content'
import { formatMonthYear } from '@/lib/format'
import { site } from '@/lib/site'
import { Cover } from '@/components/cards'
import { InstagramIcon } from '@/components/brand-icons'
import { PageHero } from '@/components/page-hero'
import { buttonClass } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Galeri',
  description: 'Turan Birlik Derneği etkinliklerinden fotoğraflar.',
}

const instagram = site.socials.find((s) => s.name === 'Instagram')

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Anılar"
        title="Galeri"
        description="Etkinliklerimizden kareler. Her fotoğraf, birlikte biriktirdiğimiz bir hatıra."
      />
      <section className="py-16 sm:py-24">
        <div className="wrap">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {albums.map((a) => (
              <li key={a.title} className="group overflow-hidden rounded-3xl border border-line bg-white">
                <Cover tone={a.tone} icon={Camera} className="aspect-[4/3]" />
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <h2 className="font-display text-lg font-semibold leading-snug text-brand-900">{a.title}</h2>
                    <p className="mt-1 text-sm text-muted">{formatMonthYear(a.date)}</p>
                  </div>
                  <Images className="size-5 shrink-0 text-gold-600" />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-col items-center gap-5 rounded-[2rem] bg-sand p-10 text-center">
            <p className="max-w-lg text-pretty text-lg text-muted">
              Daha fazla fotoğraf ve video için sosyal medya hesaplarımızı takip edin.
            </p>
            {instagram && (
              <a href={instagram.href} className={buttonClass('brand', 'md')}>
                <InstagramIcon className="size-5" />
                Instagram’da takip edin
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
