'use server'

import { interestOptions } from '@/lib/content'
import { isEmail, isPhone, text, type FormState } from '@/lib/forms'

export async function submitMembership(_prev: FormState, formData: FormData): Promise<FormState> {
  // Bots fill the hidden field; pretend success so they move on.
  if (text(formData, 'website')) return { status: 'success' }

  const values = {
    fullName: text(formData, 'fullName', 120),
    email: text(formData, 'email', 160),
    phone: text(formData, 'phone', 40),
    city: text(formData, 'city', 80),
    occupation: text(formData, 'occupation', 120),
    message: text(formData, 'message', 2000),
    interests: formData.getAll('interests').filter((v): v is string => (interestOptions as readonly string[]).includes(v as string)),
    adult: formData.get('adult') === 'on' ? 'on' : '',
    kvkk: formData.get('kvkk') === 'on' ? 'on' : '',
  }

  const errors: Record<string, string> = {}
  if (values.fullName.length < 3) errors.fullName = 'Lütfen adınızı ve soyadınızı yazın.'
  if (!isEmail(values.email)) errors.email = 'Geçerli bir e-posta adresi yazın.'
  if (!isPhone(values.phone)) errors.phone = 'Telefon numaranızı alan koduyla birlikte yazın.'
  if (!values.city) errors.city = 'Yaşadığınız şehri yazın.'
  if (!values.adult) errors.adult = 'Üyelik için 18 yaşını doldurmuş olmanız gerekir.'
  if (!values.kvkk) errors.kvkk = 'Devam etmek için aydınlatma metnini onaylayın.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Lütfen işaretli alanları kontrol edin.', errors, values }
  }

  // TODO: save the application and notify the board once the database is connected.
  console.info('[uyelik] new membership application received')

  return { status: 'success' }
}
