export type NewsItem = {
  slug: string
  title: string
  category: 'Duyuru' | 'Etkinlik' | 'Dernekten'
  date: string
  excerpt: string
  body: string[]
  image?: string
}

// Sample posts for the design stage; the admin panel will replace them.
export const news: NewsItem[] = [
  {
    slug: 'web-sitemiz-yayinda',
    title: 'Web sitemiz yayında!',
    category: 'Duyuru',
    date: '2026-10-30T10:00:00+03:00',
    excerpt:
      'Derneğimizin çalışmalarını, etkinlik takvimini ve duyurularını artık tek bir adresten takip edebilirsiniz.',
    body: [
      'Uzun zamandır hazırladığımız web sitemizi sizlerle buluşturmaktan mutluluk duyuyoruz.',
      'Sitemizde derneğimizin hikâyesini, faaliyet alanlarımızı, yaklaşan etkinliklerimizi ve güncel duyurularımızı bulabilirsiniz. Üyelik başvurunuzu da artık birkaç dakika içinde çevrim içi olarak yapabilirsiniz.',
      'Görüş ve önerilerinizi iletişim sayfamızdan bize iletmeyi unutmayın. Birlikte daha güçlüyüz.',
    ],
  },
  {
    slug: 'kultur-aksami-kayitlari-basladi',
    title: 'Türk Dünyası Kültür Akşamı için kayıtlar başladı',
    category: 'Etkinlik',
    date: '2026-10-27T12:00:00+03:00',
    excerpt:
      '21 Kasım’daki kültür akşamımız için ön kayıtlar başladı. Salonun kapasitesi sınırlı, yerinizi şimdiden ayırtın.',
    body: [
      'Türk dünyasının müziğini, danslarını ve şiirini bir araya getirecek kültür akşamımız için ön kayıtlar başladı.',
      'Kayıt için telefon veya WhatsApp hattımızdan bize ulaşabilirsiniz. Etkinlik ücretsizdir; çocuklu aileler de davetlidir.',
    ],
  },
  {
    slug: 'okculuk-gunune-yogun-ilgi',
    title: 'Okçuluk tanıtım gününe yoğun ilgi',
    category: 'Etkinlik',
    date: '2026-10-12T15:00:00+03:00',
    excerpt:
      'Geleneksel Türk okçuluğunu tanıttığımız etkinliğimize her yaştan katılımcı geldi.',
    body: [
      'Şehir Parkı’nda düzenlediğimiz okçuluk tanıtım gününde katılımcılar, Türk okçuluğunun tarihini dinledi ve eğitmenler eşliğinde ilk atışlarını yaptı.',
      'Gösterdiğiniz ilgi için teşekkür ederiz. Okçuluk etkinliklerimizi düzenli hâle getirmek için çalışıyoruz.',
    ],
  },
  {
    slug: 'gonullu-ekibimiz-buyuyor',
    title: 'Gönüllü ekibimiz büyüyor',
    category: 'Dernekten',
    date: '2026-09-20T11:00:00+03:00',
    excerpt:
      'Etkinlik, eğitim ve sosyal yardım ekiplerimize katılan yeni gönüllülerimize hoş geldiniz diyoruz.',
    body: [
      'Yeni dönemde etkinlik, eğitim ve sosyal yardım ekiplerimize katılan gönüllülerimize hoş geldiniz diyoruz.',
      'Siz de zamanınızın bir kısmını Türk dünyasının ortak geleceğine ayırmak istiyorsanız üyelik sayfamızdaki formu doldurabilirsiniz.',
    ],
  },
]

export function getNews(slug: string) {
  return news.find((n) => n.slug === slug)
}

export const latestNews = [...news].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
