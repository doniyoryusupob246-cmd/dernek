'use client'

import Link from 'next/link'
import { useActionState } from 'react'
import { CheckCircle2, LoaderCircle, Send } from 'lucide-react'
import { contactTopics } from '@/lib/content'
import { initialFormState } from '@/lib/forms'
import { Field, FormAlert, Honeypot, inputClass } from '@/components/form-fields'
import { buttonClass } from '@/components/ui'
import { submitContact } from './actions'

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialFormState)

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-[2rem] border border-brand-100 bg-white p-10 text-center shadow-sm" role="status">
        <span className="flex size-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <CheckCircle2 className="size-9" strokeWidth={1.6} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-brand-900">Mesajınız ulaştı</h3>
        <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted">
          Bize yazdığınız için teşekkür ederiz. En geç iki iş günü içinde size dönüş yapacağız.
        </p>
      </div>
    )
  }

  const v = state.values ?? {}
  const e = state.errors ?? {}
  const val = (k: string) => (typeof v[k] === 'string' ? (v[k] as string) : '')
  const invalid = (k: string) => (e[k] ? { 'aria-invalid': true, 'aria-describedby': `${k}-error` } : {})

  return (
    <form action={action} noValidate className="relative space-y-5 rounded-[2rem] border border-line bg-white p-6 shadow-sm sm:p-10">
      <Honeypot />
      {state.status === 'error' && state.message && <FormAlert tone="error">{state.message}</FormAlert>}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Ad Soyad" htmlFor="c-fullName" required error={e.fullName}>
          <input id="c-fullName" name="fullName" autoComplete="name" defaultValue={val('fullName')} className={inputClass} {...invalid('fullName')} />
        </Field>
        <Field label="E-posta" htmlFor="c-email" required error={e.email}>
          <input id="c-email" name="email" type="email" autoComplete="email" defaultValue={val('email')} className={inputClass} {...invalid('email')} />
        </Field>
        <Field label="Telefon" htmlFor="c-phone">
          <input id="c-phone" name="phone" type="tel" autoComplete="tel" defaultValue={val('phone')} className={inputClass} />
        </Field>
        <Field label="Konu" htmlFor="c-topic">
          <select id="c-topic" name="topic" defaultValue={val('topic') || contactTopics[0]} className={inputClass}>
            {contactTopics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Mesajınız" htmlFor="c-message" required error={e.message}>
        <textarea id="c-message" name="message" rows={5} defaultValue={val('message')} className={inputClass} {...invalid('message')} />
      </Field>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-[15px] leading-relaxed text-ink/85">
          <input
            type="checkbox"
            name="kvkk"
            defaultChecked={val('kvkk') === 'on'}
            aria-invalid={e.kvkk ? true : undefined}
            aria-describedby={e.kvkk ? 'kvkk-error' : undefined}
            className="mt-1 size-5 shrink-0 cursor-pointer rounded accent-brand-600"
          />
          <span>
            <Link href="/kvkk" target="_blank" className="font-semibold text-brand-700 underline underline-offset-2">
              Aydınlatma Metni
            </Link>
            ’ni okudum ve anladım.
          </span>
        </label>
        {e.kvkk && (
          <p id="kvkk-error" className="mt-1 pl-8 text-sm text-red-600">
            {e.kvkk}
          </p>
        )}
      </div>

      <button type="submit" disabled={pending} className={buttonClass('brand', 'lg', 'w-full sm:w-auto')}>
        {pending ? <LoaderCircle className="size-5 animate-spin" /> : <Send className="size-5" />}
        {pending ? 'Gönderiliyor…' : 'Mesajı Gönder'}
      </button>
    </form>
  )
}
