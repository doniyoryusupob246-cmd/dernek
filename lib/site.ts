// Contact, bank and social details below are placeholders until the association
// sends the real ones. Everything that renders them reads from this file.

export const site = {
  name: 'Turan Birlik Derneği',
  nameEn: 'Turan Unity Association',
  shortName: 'Turan Birlik',
  motto: 'Dilde, fikirde, işte birlik.',
  description:
    'Turan Birlik Derneği; Türk dünyasının halklarını kültür, eğitim ve dayanışma etrafında buluşturan, kâr amacı gütmeyen bir sivil toplum kuruluşudur.',
  url: 'https://turanbirlik.org.tr',

  contact: {
    address: 'Mahalle, Cadde, No — İlçe / İl',
    phone: '+90 (5XX) XXX XX XX',
    phoneHref: 'tel:+905000000000',
    whatsappHref: 'https://wa.me/905000000000',
    email: 'info@turanbirlik.org.tr',
    hours: 'Hafta içi 10:00 – 18:00, Cumartesi 11:00 – 16:00',
  },

  bank: {
    accountName: 'Turan Birlik Derneği',
    bankName: 'Banka adı eklenecek',
    iban: 'TR00 0000 0000 0000 0000 0000 00',
  },

  socials: [
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'YouTube', href: '#' },
    { name: 'Telegram', href: '#' },
    { name: 'X', href: '#' },
  ],

  // Link to the charter PDF once it exists, e.g. '/tuzuk.pdf'.
  charterUrl: null as string | null,
} as const

export const mainNav = [
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/etkinlikler', label: 'Etkinlikler' },
  { href: '/haberler', label: 'Haberler' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/iletisim', label: 'İletişim' },
] as const

export const turkicStates = [
  'Türkiye',
  'Azerbaycan',
  'Kazakistan',
  'Kırgızistan',
  'Özbekistan',
  'Türkmenistan',
] as const
