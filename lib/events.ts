import { cacheLife } from 'next/cache'

export type EventCategory = 'Kültür' | 'Eğitim' | 'Dayanışma' | 'Spor' | 'Söyleşi'

export type EventItem = {
  slug: string
  title: string
  category: EventCategory
  startsAt: string
  endsAt?: string
  location: string
  access: string
  summary: string
  body: string[]
  image?: string
}

// Sample events for the design stage; the admin panel will replace them.
export const events: EventItem[] = [
  {
    slug: 'turk-dunyasi-kultur-aksami',
    title: 'Türk Dünyası Kültür Akşamı',
    category: 'Kültür',
    startsAt: '2026-11-21T19:00:00+03:00',
    endsAt: '2026-11-21T22:00:00+03:00',
    location: 'Kültür Merkezi Büyük Salon',
    access: 'Ücretsiz · Ön kayıtlı',
    summary:
      'Azerbaycan’dan Kırgızistan’a, Türk dünyasının müziği, dansları ve şiirleriyle dolu bir akşamda buluşuyoruz.',
    body: [
      'Türk dünyasının farklı bölgelerinden sanatçıların sahne alacağı kültür akşamımızda geleneksel müzik, halk dansları ve şiir dinletisi sizi bekliyor.',
      'Program boyunca kopuz, komuz, dombra ve dutar gibi ortak mirasımız olan çalgıları yakından tanıma fırsatı bulacak; etkinliğin sonunda yöresel ikramlar eşliğinde sohbet edeceğiz.',
      'Etkinliğimiz ücretsizdir ve tüm ailelere açıktır. Salonun kapasitesi sınırlı olduğu için yerinizi önceden ayırtmanızı öneririz.',
    ],
  },
  {
    slug: 'genclik-bulusmasi-kariyer',
    title: 'Gençlik Buluşması: Türk Dünyasında Kariyer',
    category: 'Eğitim',
    startsAt: '2026-12-05T14:00:00+03:00',
    endsAt: '2026-12-05T17:00:00+03:00',
    location: 'Dernek Merkezi',
    access: 'Ücretsiz · Öğrencilere açık',
    summary:
      'Üniversite öğrencileri ve yeni mezunlarla Türk dünyası ülkelerindeki iş ve kariyer fırsatlarını konuşuyoruz.',
    body: [
      'Farklı sektörlerde çalışan konuklarımız; Türkiye, Azerbaycan, Kazakistan ve Özbekistan’daki iş deneyimlerini paylaşacak.',
      'Panelin ardından yapılacak birebir görüşmelerde özgeçmişinizi gözden geçirebilir, staj ve burs olanakları hakkında soru sorabilirsiniz.',
    ],
  },
  {
    slug: 'kis-dayanisma-kampanyasi',
    title: 'Kış Dayanışma Kampanyası',
    category: 'Dayanışma',
    startsAt: '2026-12-14T10:00:00+03:00',
    endsAt: '2027-01-31T18:00:00+03:00',
    location: 'Dernek Merkezi',
    access: 'Bağış kabulü · Hafta içi her gün',
    summary:
      'Mont, bot, battaniye ve gıda kolisi bağışlarınızı ihtiyaç sahibi ailelere ulaştırıyoruz.',
    body: [
      'Kış aylarında zorluk yaşayan soydaşlarımız ve ihtiyaç sahibi aileler için yardım topluyoruz.',
      'Temiz ve kullanılabilir durumdaki kışlık giysileri, battaniyeleri ve kuru gıdaları çalışma saatlerimiz içinde dernek merkezimize bırakabilirsiniz. Gönüllü olarak paketleme ve dağıtıma katılmak isterseniz bizimle iletişime geçin.',
    ],
  },
  {
    slug: 'nevruz-bayrami-2027',
    title: 'Nevruz Bayramı Kutlaması',
    category: 'Kültür',
    startsAt: '2027-03-21T12:00:00+03:00',
    endsAt: '2027-03-21T18:00:00+03:00',
    location: 'Şehir Parkı Etkinlik Alanı',
    access: 'Ücretsiz · Herkese açık',
    summary:
      'Baharın ve yeniden doğuşun bayramı Nevruz’u ateşten atlayarak, sümelek ve halk oyunlarıyla birlikte kutluyoruz.',
    body: [
      'Nevruz, Türk dünyasının binlerce yıldır birlikte kutladığı ortak bayramıdır. Bu yıl da baharı hep birlikte karşılıyoruz.',
      'Programda Nevruz ateşi, halk oyunları, çocuklar için yumurta tokuşturma ve geleneksel sümelek ikramı yer alacak.',
    ],
  },
  {
    slug: 'geleneksel-okculuk-tanitim-gunu',
    title: 'Geleneksel Okçuluk Tanıtım Günü',
    category: 'Spor',
    startsAt: '2026-10-11T11:00:00+03:00',
    endsAt: '2026-10-11T16:00:00+03:00',
    location: 'Şehir Parkı Okçuluk Alanı',
    access: 'Ücretsiz · Her yaşa açık',
    summary:
      'Türk okçuluğunun tarihini dinledik, eğitmenler eşliğinde ilk atışlarımızı yaptık.',
    body: [
      'Atalarımızın binlerce yıllık mirası olan geleneksel okçuluğu tanıttığımız etkinliğimize her yaştan katılımcı geldi.',
      'Eğitmenlerimiz yay ve okun yapımını anlattı, katılımcılar güvenli atış alanında ilk atışlarını yaptı.',
    ],
  },
  {
    slug: 'cengiz-aytmatov-anma-soylesisi',
    title: 'Cengiz Aytmatov’u Anma Söyleşisi',
    category: 'Söyleşi',
    startsAt: '2026-06-10T18:30:00+03:00',
    endsAt: '2026-06-10T20:30:00+03:00',
    location: 'Dernek Merkezi',
    access: 'Ücretsiz · Herkese açık',
    summary:
      'Ölüm yıl dönümünde büyük yazar Cengiz Aytmatov’u eserleri ve Türk dünyasına bıraktığı mirasla andık.',
    body: [
      '“Gün Olur Asra Bedel” ve “Cemile” gibi eserleriyle dünya edebiyatına damga vuran Cengiz Aytmatov’u andık.',
      'Söyleşide yazarın eserlerinde Türk dünyasının ortak değerlerinin nasıl yer aldığını konuştuk.',
    ],
  },
]

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug)
}

// Splits events around the current time; cached so the result is part of the
// static page and refreshed hourly.
export async function getEventTimeline() {
  'use cache'
  cacheLife('hours')
  const now = Date.now()
  const end = (e: EventItem) => Date.parse(e.endsAt ?? e.startsAt)
  const upcoming = events
    .filter((e) => end(e) >= now)
    .sort((a, b) => Date.parse(a.startsAt) - Date.parse(b.startsAt))
  const past = events
    .filter((e) => end(e) < now)
    .sort((a, b) => Date.parse(b.startsAt) - Date.parse(a.startsAt))
  return { upcoming, past }
}
