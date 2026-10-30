import type { Metadata } from 'next'
import { CalendarCheck, HandHeart, Users, Vote } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Eyebrow, SectionHeading } from '@/components/ui'
import { MembershipForm } from './membership-form'

export const metadata: Metadata = {
  title: 'Üyelik',
  description: 'Turan Birlik Derneği’ne üye olun: üyelik koşulları, başvuru adımları ve çevrim içi ön başvuru formu.',
}

const benefits = [
  { icon: CalendarCheck, title: 'Öncelikli katılım', text: 'Etkinliklerimize, gezilerimize ve atölyelerimize öncelikli olarak katılırsınız.' },
  { icon: HandHeart, title: 'Gönüllü projeler', text: 'Eğitim, kültür ve dayanışma projelerimizde aktif olarak yer alırsınız.' },
  { icon: Users, title: 'Güçlü bir topluluk', text: 'Türk dünyasının dört bir yanından insanlarla tanışır, yeni dostluklar kurarsınız.' },
  { icon: Vote, title: 'Söz hakkı', text: 'Genel kurulda oy kullanır, derneğimizin geleceğine birlikte karar verirsiniz.' },
]

const steps = [
  { title: 'Ön başvuru', text: 'Bu sayfadaki formu doldurun. Yalnızca birkaç dakikanızı alır.' },
  { title: 'Tanışma', text: 'Ekibimiz sizi arar, sorularınızı yanıtlar ve imzalı üyelik formunu birlikte tamamlarız.' },
  { title: 'Onay', text: 'Yönetim kurulumuz başvurunuzu en geç 30 gün içinde değerlendirir ve sonucu size bildirir.' },
]

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Birliğe katılın"
        title="Üyelik"
        description="Türk dünyasının ortak geleceği için emek vermek istiyorsanız yeriniz burası. Üyelik başvurusu yapmak çok kolay."
      />

      <section className="py-16 sm:py-24">
        <div className="wrap">
          <SectionHeading align="center" eyebrow="Neden üye olmalı?" title="Üyelerimizi neler bekliyor?" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-3xl border border-line bg-white p-6">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gold-100 text-gold-800">
                  <Icon className="size-6" strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-brand-900">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="basvuru" className="relative scroll-mt-20 bg-sand py-16 sm:py-24">
        <div className="pattern-teal absolute inset-0" aria-hidden="true" />
        <div className="wrap relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="space-y-10">
            <div>
              <Eyebrow>Kimler üye olabilir?</Eyebrow>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-ink/85">
                18 yaşını doldurmuş, derneğimizin amaçlarını benimseyen herkes üye olabilir. Türkiye’de yerleşme hakkına
                sahip yabancı uyruklu soydaşlarımız da başvuru yapabilir.
              </p>
            </div>

            <div>
              <Eyebrow>Üç adımda üyelik</Eyebrow>
              <ol className="mt-6 space-y-6">
                {steps.map((s, i) => (
                  <li key={s.title} className="relative flex gap-5">
                    {i < steps.length - 1 && <span className="absolute left-[21px] top-12 h-[calc(100%-1.5rem)] w-px bg-gold-300" aria-hidden="true" />}
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-700 font-display text-lg font-semibold text-gold-300">
                      {i + 1}
                    </span>
                    <div className="pt-1.5">
                      <h3 className="font-display text-xl font-semibold text-brand-900">{s.title}</h3>
                      <p className="mt-1 text-pretty leading-relaxed text-muted">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-line">
              <h3 className="font-display text-lg font-semibold text-brand-900">Üyelik aidatı</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted">
                Yıllık aidat tutarı genel kurul tarafından belirlenir. Güncel tutarı tanışma görüşmesinde sizinle paylaşırız.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 font-display text-3xl font-semibold text-brand-900">Ön başvuru formu</h2>
            <MembershipForm />
          </div>
        </div>
      </section>
    </>
  )
}
