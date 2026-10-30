const TZ = 'Europe/Istanbul'

function fmt(iso: string, options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat('tr-TR', { timeZone: TZ, ...options }).format(new Date(iso))
}

export const formatDate = (iso: string) => fmt(iso, { day: 'numeric', month: 'long', year: 'numeric' })
export const formatDay = (iso: string) => fmt(iso, { day: 'numeric' })
export const formatMonthShort = (iso: string) => fmt(iso, { month: 'short' })
export const formatWeekday = (iso: string) => fmt(iso, { weekday: 'long' })
export const formatTime = (iso: string) => fmt(iso, { hour: '2-digit', minute: '2-digit' })
export const formatMonthYear = (iso: string) => fmt(iso, { month: 'long', year: 'numeric' })

export function formatDateRange(startsAt: string, endsAt?: string) {
  if (!endsAt || formatDate(startsAt) === formatDate(endsAt)) return formatDate(startsAt)
  return `${formatDate(startsAt)} – ${formatDate(endsAt)}`
}

export function formatTimeRange(startsAt: string, endsAt?: string) {
  if (!endsAt || formatDate(startsAt) !== formatDate(endsAt)) return formatTime(startsAt)
  return `${formatTime(startsAt)} – ${formatTime(endsAt)}`
}
