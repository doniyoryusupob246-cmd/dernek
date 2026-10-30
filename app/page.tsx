import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, HandHeart, Handshake, HeartHandshake, ScrollText, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { activities, values } from '@/lib/content'
import { getEventTimeline } from '@/lib/events'
import { latestNews } from '@/lib/news'
import { site, turkicStates } from '@/lib/site'
import { activityIcons } from '@/components/activity-icons'
import { EventCard, NewsCard } from '@/components/cards'
import { Octagram, Rosette, StarDivider } from '@/components/ornaments'
import { buttonClass, cn, Eyebrow, SectionHeading } from '@/components/ui'

const valueIcons: LucideIcon[] = [Users, Handshake, ScrollText, HeartHandshake]

// Phones get a horizontal swipe row instead of a tall stack of cards.
const swipeRow =
  '-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 md:mx-0 md:mt-12 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3'
const swipeItem = 'flex w-[82%] shrink-0 snap-start scroll-ml-5 *:w-full sm:w-[60%] md:w-auto'

export default async function HomePage() {
  const { upcoming } = await getEventTimeline()

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-950">
        <div
          className="pattern-gold absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_70%_45%,black,transparent_75%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_40%,rgba(0,130,155,0.55),transparent_55%)]"
          aria-hidden="true"
        />
        <div className="wrap grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="animate-rise">
            <Image src="/logo.png" alt="" width={192} height={192} priority className="mb-7 size-24 drop-shadow-xl lg:hidden" />
            <Eyebrow tone="dark">{site.name}</Eyebrow>
            <h1 className="mt-5 text-balance font-display text-[2.6rem] font-semibold leading-[1.05] text-white sm:text-6xl lg:text-[4.25rem]">
              Ortak köklerden <span className="italic text-gold-400">ortak geleceğe</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
              Türk dünyasının halklarını kültür, eğitim ve dayanışma etrafında buluşturuyoruz. Dilimizi, tarihimizi ve
              kardeşliğimizi yaşatmak için sizi de aramızda görmek istiyoruz.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/uyelik" className={buttonClass('gold', 'lg')}>
                Üye Ol
                <ArrowRight className="size-5" />
              </Link>
              <Link href="/hakkimizda" className={buttonClass('light', 'lg')}>
                Bizi Tanıyın
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-sm font-medium text-white/70">
              {['Kültür', 'Eğitim', 'Dayanışma'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Octagram className="size-3 text-gold-500" filled />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto hidden aspect-square w-full max-w-[480px] lg:block" aria-hidden="true">
            <div className="absolute inset-[14%] rounded-full bg-brand-400/30 blur-3xl" />
            <Rosette className="absolute inset-0 size-full animate-spin-slow text-gold-500" />
            <Image src="/logo.png" alt="" width={480} height={480} priority className="absolute inset-[19%] size-[62%] drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Turkic states strip */}
      <div className="overflow-hidden border-b border-gold-600/40 bg-gold-500 py-3.5">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} aria-label={copy === 0 ? 'Türk devletleri' : undefined} className="flex shrink-0">
              {[...turkicStates, ...turkicStates].map((state, i) => (
                <li key={i} className="flex items-center gap-8 pr-8 text-sm font-bold uppercase tracking-[0.25em] text-brand-950">
                  {state}
                  <Octagram className="size-3 text-brand-800/60" filled />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Biz Kimiz?</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight text-brand-900 sm:text-[2.75rem]">
              Türk dünyasına açılan bir gönül köprüsü
            </h2>
            <div className="mt-6 space-y-4 text-pretty text-lg leading-relaxed text-muted">
              <p>
                {site.name}, Türk dünyasının halkları arasındaki kardeşliği güçlendirmek için çalışan, kâr amacı
                gütmeyen bir sivil toplum kuruluşudur.
              </p>
              <p>
                Aynı dilin farklı lehçelerini konuşan, aynı destanlarla büyüyen ve aynı değerleri paylaşan insanları tek
                çatı altında buluşturuyoruz. Kültürel mirasımızı yaşatıyor, gençlerimizi geleceğe hazırlıyor ve ihtiyacı
                olana el uzatıyoruz.
              </p>
            </div>
            <Link href="/hakkimizda" className={buttonClass('outline', 'md', 'mt-8')}>
              Hikâyemizi okuyun
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <ul className="grid grid-cols-2 gap-3 pb-6 sm:gap-4 sm:pb-8">
            {values.map((v, i) => {
              const Icon = valueIcons[i]
              return (
                <li
                  key={v.title}
                  className={cn('rounded-3xl border border-line bg-white p-4 shadow-sm sm:p-6', i % 2 === 1 && 'translate-y-6 sm:translate-y-8')}
                >
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 sm:size-12">
                    <Icon className="size-5 sm:size-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-brand-900 sm:mt-5 sm:text-xl">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted sm:mt-2 sm:text-[15px]">{v.text}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Activities */}
      <section className="relative bg-sand py-16 sm:py-24 lg:py-28">
        <div className="pattern-teal absolute inset-0" aria-hidden="true" />
        <div className="wrap relative">
          <SectionHeading
            align="center"
            eyebrow="Ne Yapıyoruz?"
            title="Faaliyet alanlarımız"
            description="Çalışmalarımızı altı ana başlık altında yürütüyoruz. Her birinde gönüllülerimizin emeği, üyelerimizin desteği var."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a) => {
              const Icon = activityIcons[a.key]
              return (
                <li
                  key={a.key}
                  className="group relative flex gap-5 overflow-hidden rounded-3xl bg-white p-5 shadow-sm ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10 hover:ring-gold-300 sm:block sm:p-7"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-gold-300 transition duration-300 group-hover:bg-gold-500 group-hover:text-brand-950 sm:size-14">
                    <Icon className="size-6 sm:size-7" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-brand-900 sm:mt-6">{a.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted sm:mt-2">{a.text}</p>
                  </div>
                  <Octagram
                    strokeWidth={1}
                    className="absolute right-6 top-6 hidden size-14 text-brand-500/15 transition duration-700 group-hover:rotate-45 group-hover:text-gold-500/50 sm:block"
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Motto */}
      <section className="relative isolate overflow-hidden bg-brand-900 py-16 sm:py-24 lg:py-28">
        <div className="pattern-gold absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
        <Rosette className="absolute left-1/2 top-1/2 -z-10 size-[560px] -translate-x-1/2 -translate-y-1/2 text-gold-500/40" />
        <figure className="wrap text-center">
          <StarDivider className="text-gold-500" />
          <blockquote className="mt-8">
            <p className="text-balance font-display text-4xl font-medium italic leading-tight text-white sm:text-6xl">
              “{site.motto}”
            </p>
          </blockquote>
          <figcaption className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-gold-400">İsmail Gaspıralı</figcaption>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-white/70">
            Bir asrı aşkın süredir Türk dünyasına yol gösteren bu söz, derneğimizin de pusulasıdır.
          </p>
        </figure>
      </section>

      {/* Events */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="Takvim"
            title="Yaklaşan etkinlikler"
            description="Etkinliklerimiz herkese açıktır. Takvimimizi takip edin, aramıza katılın."
            action={
              <Link href="/etkinlikler" className={buttonClass('outline', 'md')}>
                Tüm etkinlikler
                <ArrowRight className="size-4" />
              </Link>
            }
          />
          {upcoming.length > 0 ? (
            <div className={swipeRow}>
              {upcoming.slice(0, 3).map((e) => (
                <div key={e.slug} className={swipeItem}>
                  <EventCard event={e} />
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-12 rounded-3xl border border-dashed border-line bg-white p-10 text-center text-muted">
              Yeni etkinliklerimiz çok yakında burada olacak.
            </p>
          )}
        </div>
      </section>

      {/* News */}
      <section className="border-y border-line bg-white py-16 sm:py-24 lg:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="Güncel"
            title="Son haberler"
            description="Derneğimizden duyurular, gelişmeler ve etkinliklerden notlar."
            action={
              <Link href="/haberler" className={buttonClass('outline', 'md')}>
                Tüm haberler
                <ArrowRight className="size-4" />
              </Link>
            }
          />
          <div className={swipeRow}>
            {latestNews.slice(0, 3).map((n) => (
              <div key={n.slug} className={swipeItem}>
                <NewsCard item={n} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join / donate */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="wrap grid gap-6 lg:grid-cols-2">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-800 p-8 text-white sm:p-12">
            <div className="pattern-gold absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
            <Rosette className="absolute -bottom-24 -right-24 -z-10 size-80 text-gold-500/60" />
            <span className="flex size-14 items-center justify-center rounded-2xl bg-gold-500 text-brand-950">
              <Users className="size-7" strokeWidth={1.7} />
            </span>
            <h2 className="mt-7 font-display text-3xl font-semibold sm:text-4xl">Birliğe katılın</h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-white/75">
              Üye olarak etkinliklerimize öncelikli katılabilir, projelerimizde gönüllü olarak yer alabilir ve derneğimizin
              geleceğinde söz sahibi olabilirsiniz.
            </p>
            <Link href="/uyelik" className={buttonClass('gold', 'lg', 'mt-8')}>
              Üyelik Başvurusu
              <ArrowRight className="size-5" />
            </Link>
          </div>

          <div className="relative isolate overflow-hidden rounded-[2rem] bg-gold-500 p-8 text-brand-950 sm:p-12">
            <div className="pattern-teal absolute inset-0 -z-10 opacity-90" aria-hidden="true" />
            <Rosette className="absolute -bottom-24 -right-24 -z-10 size-80 text-brand-800/40" />
            <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-800 text-gold-300">
              <HandHeart className="size-7" strokeWidth={1.7} />
            </span>
            <h2 className="mt-7 font-display text-3xl font-semibold sm:text-4xl">İyiliği birlikte büyütelim</h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-brand-950/80">
              Bağışlarınız; öğrencilerimize burs, ihtiyaç sahibi ailelere destek ve kültürel mirasımızı yaşatan etkinlikler
              olarak geri dönüyor.
            </p>
            <Link href="/bagis" className={buttonClass('deep', 'lg', 'mt-8')}>
              Bağış Yap
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
