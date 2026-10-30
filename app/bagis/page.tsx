import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap, HandHeart, Landmark, Package, Palette, ShieldCheck } from 'lucide-react'
import { site } from '@/lib/site'
import { CopyButton } from '@/components/copy-button'
import { PageHero } from '@/components/page-hero'
import { Rosette } from '@/components/ornaments'
import { buttonClass, Eyebrow, SectionHeading } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Bağış',
  description: 'Turan Birlik Derneği’ne bağış yapın: burslar, ihtiyaç sahibi ailelere destek ve kültürel etkinlikler.',
}

const causes = [
  { icon: GraduationCap, title: 'Eğitim bursları', text: 'Maddi desteğe ihtiyaç duyan öğrencilerimizin eğitimlerini sürdürmelerine yardımcı oluyoruz.' },
  { icon: HandHeart, title: 'Ailelere destek', text: 'Zor günler geçiren ailelere gıda, giyim ve barınma desteği ulaştırıyoruz.' },
  { icon: Palette, title: 'Kültürel etkinlikler', text: 'Bayramlarımızı, konserlerimizi ve söyleşilerimizi herkese ücretsiz sunabiliyoruz.' },
]

export default function DonatePage() {
  const { bank } = site
  const rows = [
    { label: 'Hesap adı', value: bank.accountName },
    { label: 'Banka', value: bank.bankName },
  ]

  return (
    <>
      <PageHero
        eyebrow="Destek olun"
        title="Bağış"
        description="Her bağış, bir öğrencinin eğitimine, bir ailenin sofrasına ya da ortak kültürümüzü yaşatan bir etkinliğe dönüşür."
      />

      <section className="py-16 sm:py-24">
        <div className="wrap">
          <SectionHeading align="center" eyebrow="Bağışınız nereye gidiyor?" title="İyiliği birlikte büyütelim" />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {causes.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-3xl border border-line bg-white p-7 text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-brand-600 text-gold-300">
                  <Icon className="size-7" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-brand-900">{title}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative bg-sand py-16 sm:py-24">
        <div className="pattern-teal absolute inset-0" aria-hidden="true" />
        <div className="wrap relative grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-800 p-7 text-white shadow-xl shadow-brand-900/20 sm:p-10">
            <div className="pattern-gold absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
            <Rosette className="absolute -right-28 -top-28 -z-10 size-96 text-gold-500/50" />
            <div className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-gold-500 text-brand-950">
                <Landmark className="size-6" strokeWidth={1.7} />
              </span>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">Banka hesabımız</h2>
            </div>

            <dl className="mt-8 grid gap-5 sm:grid-cols-2">
              {rows.map((r) => (
                <div key={r.label}>
                  <dt className="text-xs font-bold uppercase tracking-wider text-gold-300">{r.label}</dt>
                  <dd className="mt-1 text-lg font-medium">{r.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
              <p className="text-xs font-bold uppercase tracking-wider text-gold-300">IBAN</p>
              <div className="mt-2 flex flex-col items-start gap-4">
                <p className="select-all break-all font-mono text-lg tracking-wide sm:whitespace-nowrap sm:text-xl">{bank.iban}</p>
                <CopyButton value={bank.iban.replace(/\s/g, '')} label="IBAN’ı kopyala" />
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-white/75">
              Havale veya EFT yaparken açıklama kısmına <strong className="text-white">“Bağış”</strong> yazmanız ve adınızı
              eklemeniz yeterlidir. Dilerseniz bağışınızı belirli bir amaca, örneğin <em>“Burs”</em> olarak
              yönlendirebilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl bg-white p-7 ring-1 ring-line">
              <Package className="size-7 text-gold-600" strokeWidth={1.6} />
              <h3 className="mt-4 font-display text-xl font-semibold text-brand-900">Ayni bağış</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted">
                Kıyafet, kitap, kırtasiye veya gıda bağışlamak isterseniz önce bizimle iletişime geçin; ihtiyaç listemizi
                sizinle paylaşalım.
              </p>
              <Link href="/iletisim" className={buttonClass('outline', 'sm', 'mt-5')}>
                Bize ulaşın
              </Link>
            </div>
            <div className="rounded-3xl bg-white p-7 ring-1 ring-line">
              <ShieldCheck className="size-7 text-gold-600" strokeWidth={1.6} />
              <h3 className="mt-4 font-display text-xl font-semibold text-brand-900">Şeffaflık sözümüz</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted">
                Bağışlarınız yalnızca tüzüğümüzde yazan amaçlar için kullanılır. Gelir ve giderlerimiz her yıl genel kurulda
                üyelerimize sunulur.
              </p>
            </div>
            <div className="px-2">
              <Eyebrow>Teşekkürler</Eyebrow>
              <p className="mt-3 font-display text-lg italic text-brand-800">
                “Bir elin nesi var, iki elin sesi var.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
