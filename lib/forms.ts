export type FormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Record<string, string>
  values?: Record<string, string | string[]>
}

export const initialFormState: FormState = { status: 'idle' }

export function text(formData: FormData, key: string, max = 500) {
  const v = formData.get(key)
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
export const isPhone = (v: string) => v.replace(/\D/g, '').length >= 10
