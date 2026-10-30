'use client'

import Link from 'next/link'
import { useActionState, type ReactNode } from 'react'
import { CheckCircle2, LoaderCircle, Send } from 'lucide-react'
import { interestOptions } from '@/lib/content'
import { initialFormState } from '@/lib/forms'
import { Field, FormAlert, Honeypot, inputClass } from '@/components/form-fields'
import { buttonClass } from '@/components/ui'
import { submitMembership } from './actions'

export function MembershipForm() {
  const [state, action, pending] = useActionState(submitMembership, initialFormState)

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-[2rem] border border-brand-100 bg-white p-10 text-center shadow-sm" role="status">
        <span className="flex size-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <CheckCircle2 className="size-9" strokeWidth={1.6} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-brand-900">Teşekkür ederiz!</h3>
        <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted">
          Başvurunuz bize ulaştı. Ekibimiz en kısa sürede sizinle iletişime geçecek ve sonraki adımları anlatacak.
        </p>
        <Link href="/etkinlikler" className={buttonClass('outline', 'md', 'mt-8')}>
          Etkinliklerimize göz atın
        </Link>
      </div>
    )
  }

  const v = state.values ?? {}
  const e = state.errors ?? {}
  const val = (k: string) => (typeof v[k] === 'string' ? (v[k] as string) : '')
  const interests = Array.isArray(v.interests) ? v.interests : []
  const invalid = (k: string) => (e[k] ? { 'aria-invalid': true, 'aria-describedby': `${k}-error` } : {})

  return (
    <form action={action} noValidate className="relative space-y-6 rounded-[2rem] border border-line bg-white p-6 shadow-sm sm:p-10">
      <Honeypot />
      {state.status === 'error' && state.message && <FormAlert tone="error">{state.message}</FormAlert>}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Ad Soyad" htmlFor="fullName" required error={e.fullName} className="sm:col-span-2">
          <input id="fullName" name="fullName" autoComplete="name" defaultValue={val('fullName')} className={inputClass} {...invalid('fullName')} />
        </Field>
        <Field label="E-posta" htmlFor="email" required error={e.email}>
          <input id="email" name="email" type="email" autoComplete="email" defaultValue={val('email')} className={inputClass} {...invalid('email')} />
        </Field>
        <Field label="Telefon" htmlFor="phone" required error={e.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+90 5XX XXX XX XX"
            defaultValue={val('phone')}
            className={inputClass}
            {...invalid('phone')}
          />
        </Field>
        <Field label="Yaşadığınız şehir" htmlFor="city" required error={e.city}>
          <input id="city" name="city" autoComplete="address-level2" defaultValue={val('city')} className={inputClass} {...invalid('city')} />
        </Field>
        <Field label="Mesleğiniz" htmlFor="occupation">
          <input id="occupation" name="occupation" autoComplete="organization-title" defaultValue={val('occupation')} className={inputClass} />
        </Field>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-brand-900">Hangi alanlarda yer almak istersiniz?</legend>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((opt) => (
            <label key={opt} className="cursor-pointer">
              <input type="checkbox" name="interests" value={opt} defaultChecked={interests.includes(opt)} className="peer sr-only" />
              <span className="inline-flex items-center rounded-full border border-line bg-cream px-4 py-2 text-sm font-medium text-ink/80 transition peer-checked:border-brand-600 peer-checked:bg-brand-600 peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-brand-500/25 hover:border-brand-300">
                {opt}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Eklemek istedikleriniz" htmlFor="message" hint="İsteğe bağlı. Kendinizi kısaca tanıtabilirsiniz.">
        <textarea id="message" name="message" rows={4} defaultValue={val('message')} className={inputClass} />
      </Field>

      <div className="space-y-3 rounded-2xl bg-cream p-5">
        <Checkbox name="adult" error={e.adult} defaultChecked={val('adult') === 'on'}>
          18 yaşını doldurdum.
        </Checkbox>
        <Checkbox name="kvkk" error={e.kvkk} defaultChecked={val('kvkk') === 'on'}>
          <Link href="/kvkk" target="_blank" className="font-semibold text-brand-700 underline underline-offset-2">
            Kişisel Verilerin Korunması Aydınlatma Metni
          </Link>
          ’ni okudum ve anladım.
        </Checkbox>
      </div>

      <button type="submit" disabled={pending} className={buttonClass('gold', 'lg', 'w-full sm:w-auto')}>
        {pending ? <LoaderCircle className="size-5 animate-spin" /> : <Send className="size-5" />}
        {pending ? 'Gönderiliyor…' : 'Başvurumu Gönder'}
      </button>
    </form>
  )
}

function Checkbox({ name, error, children, defaultChecked }: { name: string; error?: string; children: ReactNode; defaultChecked?: boolean }) {
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-3 text-[15px] leading-relaxed text-ink/85">
        <input
          type="checkbox"
          name={name}
          defaultChecked={defaultChecked}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${name}-error` : undefined}
          className="mt-1 size-5 shrink-0 cursor-pointer rounded accent-brand-600"
        />
        <span>{children}</span>
      </label>
      {error && (
        <p id={`${name}-error`} className="mt-1 pl-8 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
