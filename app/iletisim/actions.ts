'use server'

import { isEmail, text, type FormState } from '@/lib/forms'

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  if (text(formData, 'website')) return { status: 'success' }

  const values = {
    fullName: text(formData, 'fullName', 120),
    email: text(formData, 'email', 160),
    phone: text(formData, 'phone', 40),
    topic: text(formData, 'topic', 40),
    message: text(formData, 'message', 3000),
    kvkk: formData.get('kvkk') === 'on' ? 'on' : '',
  }

  const errors: Record<string, string> = {}
  if (values.fullName.length < 3) errors.fullName = 'Lütfen adınızı ve soyadınızı yazın.'
  if (!isEmail(values.email)) errors.email = 'Geçerli bir e-posta adresi yazın.'
  if (values.message.length < 10) errors.message = 'Mesajınız en az 10 karakter olmalı.'
  if (!values.kvkk) errors.kvkk = 'Devam etmek için aydınlatma metnini onaylayın.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Lütfen işaretli alanları kontrol edin.', errors, values }
  }

  // TODO: deliver the message by e-mail once the mail service is connected.
  console.info('[iletisim] new contact message received')

  return { status: 'success' }
}
