import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Rosette } from '@/components/ornaments'
import { buttonClass } from '@/components/ui'

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="pattern-teal absolute inset-0 -z-10" aria-hidden="true" />
      <div className="wrap flex flex-col items-center text-center">
        <div className="relative flex size-44 items-center justify-center">
          <Rosette className="absolute inset-0 size-full animate-spin-slow text-gold-500" />
          <span className="font-display text-5xl font-semibold text-brand-800">404</span>
        </div>
        <h1 className="mt-8 font-display text-3xl font-semibold text-brand-900 sm:text-4xl">Aradığınız sayfa bulunamadı</h1>
        <p className="mt-4 max-w-md text-pretty text-lg text-muted">
          Sayfa taşınmış ya da kaldırılmış olabilir. Ana sayfaya dönerek aradığınızı bulabilirsiniz.
        </p>
        <Link href="/" className={buttonClass('brand', 'lg', 'mt-8')}>
          <ArrowLeft className="size-5" />
          Ana sayfaya dön
        </Link>
      </div>
    </section>
  )
}
