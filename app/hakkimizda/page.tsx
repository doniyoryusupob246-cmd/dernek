import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Compass, Eye, FileText, UserRound } from 'lucide-react'
import { board, goals, logoMeaning } from '@/lib/content'
import { site } from '@/lib/site'
import { PageHero } from '@/components/page-hero'
import { Octagram, Rosette } from '@/components/ornaments'
import { buttonClass, Eyebrow, SectionHeading } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Turan Birlik Derneği’nin hikâyesi, misyonu, vizyonu, amaçları ve yönetim kurulu.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Kurumsal"
        title="Hakkımızda"
        description="Kim olduğumuzu, neden var olduğumuzu ve nereye yürüdüğümüzü anlatan kısa bir yolculuk."
      />

      {/* Story */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Eyebrow>Hikâyemiz</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight text-brand-900 sm:text-[2.75rem]">
              Bir hayalle başladık
            </h2>
            <div className="mt-6 space-y-5 text-pretty text-lg leading-relaxed text-muted">
              <p>
                {site.name}, Türk dünyasına gönül vermiş bir grup gönüllünün ortak hayaliyle kuruldu. Bu hayal çok basitti:
                Farklı ülkelerde doğmuş olsak da aynı kökten geldiğimizi hatırlamak ve bu bağı güçlendirmek.
              </p>
              <p>
                Bugün Türkiye’de yaşayan ve Türk dünyasının farklı bölgelerinden gelen insanları kültür, eğitim ve dayanışma
                etrafında bir araya getiriyoruz. Düzenlediğimiz her etkinlik, kurduğumuz her dostluk bu ortak evin bir
                tuğlası.
              </p>
              <p>
                Gönüllülük esasıyla çalışan, kâr amacı gütmeyen bir sivil toplum kuruluşuyuz. Kapımız, bu ortak hedefe
                inanan herkese açık.
              </p>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="pattern-teal absolute inset-0 rounded-[2.5rem] bg-sand" />
            <Rosette className="absolute inset-[6%] size-[88%] text-brand-500/60" />
            <Image
              src="/logo.png"
              alt={`${site.name} logosu`}
              width={480}
              height={480}
              className="absolute inset-[22%] size-[56%] drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="relative bg-sand py-16 sm:py-24 lg:py-28">
        <div className="pattern-teal absolute inset-0" aria-hidden="true" />
        <div className="wrap relative grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Compass,
              title: 'Misyonumuz',
              text: 'Türk dünyasının halkları arasında kültürel, sosyal ve ekonomik bağları güçlendirmek; ortak mirasımızı korumak ve gelecek kuşaklara aktarmak; ihtiyaç sahibi soydaşlarımıza dayanışma ruhuyla destek olmak.',
            },
            {
              icon: Eye,
              title: 'Vizyonumuz',
              text: 'Türk dünyasının dört bir yanındaki insanları buluşturan, güvenilir ve örnek gösterilen bir sivil toplum kuruluşu olmak.',
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-line sm:p-10">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-600 text-gold-300">
                <Icon className="size-7" strokeWidth={1.6} />
              </span>
              <h2 className="mt-6 font-display text-2xl font-semibold text-brand-900 sm:text-3xl">{title}</h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Goals */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Amaçlarımız"
              title="Neden çalışıyoruz?"
              description="Tüzüğümüzde yer alan başlıca amaçlarımız şunlardır."
            />
          </div>
          <ol className="grid gap-4">
            {goals.map((goal, i) => (
              <li key={goal} className="flex gap-5 rounded-3xl border border-line bg-white p-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold-100 font-display text-lg font-semibold text-gold-800">
                  {i + 1}
                </span>
                <p className="self-center text-pretty text-[17px] leading-relaxed text-ink/85">{goal}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Logo meaning */}
      <section className="relative isolate overflow-hidden bg-brand-900 py-20 text-white sm:py-28">
        <div className="pattern-gold absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
        <div className="wrap grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <Rosette className="absolute inset-0 size-full animate-spin-slow text-gold-500" />
            <Image src="/logo.png" alt="" width={480} height={480} className="absolute inset-[19%] size-[62%] drop-shadow-2xl" />
          </div>
          <div>
            <SectionHeading tone="dark" eyebrow="Sembollerimiz" title="Logomuzun anlamı" />
            <ul className="mt-10 space-y-7">
              {logoMeaning.map((m) => (
                <li key={m.title} className="flex gap-5">
                  <Octagram className="mt-1 size-6 shrink-0 text-gold-400" />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">{m.title}</h3>
                    <p className="mt-2 text-pretty leading-relaxed text-white/75">{m.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="wrap">
          <SectionHeading
            align="center"
            eyebrow="Yönetim"
            title="Yönetim kurulumuz"
            description="Derneğimiz, genel kurulun seçtiği yönetim kurulu tarafından yönetilir."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {board.map((m, i) => (
              <li key={i} className="rounded-3xl border border-line bg-white p-6 text-center">
                <span className="mx-auto flex size-24 items-center justify-center rounded-full bg-brand-50 text-brand-400 ring-4 ring-gold-200 ring-offset-4 ring-offset-white">
                  <UserRound className="size-11" strokeWidth={1.4} />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-brand-900">{m.name}</h3>
                <p className="mt-1 text-sm text-muted">{m.role}</p>
              </li>
            ))}
          </ul>

          <div className="mt-16 flex flex-col items-start gap-6 rounded-[2rem] bg-sand p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="flex gap-5">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-sm">
                <FileText className="size-7" strokeWidth={1.6} />
              </span>
              <div>
                <h2 className="font-display text-2xl font-semibold text-brand-900">Dernek Tüzüğü</h2>
                <p className="mt-1 max-w-xl text-pretty text-muted">
                  Amaçlarımızı, üyelik koşullarını ve yönetim yapımızı belirleyen tüzüğümüzü inceleyebilirsiniz.
                </p>
              </div>
            </div>
            {site.charterUrl ? (
              <a href={site.charterUrl} className={buttonClass('brand', 'md')}>
                Tüzüğü İndir (PDF)
              </a>
            ) : (
              <span className={buttonClass('outline', 'md', 'cursor-default opacity-70 hover:bg-transparent')}>
                Yakında yayınlanacak
              </span>
            )}
          </div>

          <div className="mt-10 text-center">
            <Link href="/uyelik" className={buttonClass('gold', 'lg')}>
              Aramıza katılın
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
