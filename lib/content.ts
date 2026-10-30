export const values = [
  {
    title: 'Birlik',
    text: 'Farklılıklarımızı zenginlik, ortak köklerimizi güç olarak görürüz.',
  },
  {
    title: 'Kardeşlik',
    text: 'Nerede yaşarsa yaşasın, her soydaşımızı ailemizin bir parçası sayarız.',
  },
  {
    title: 'Kültür',
    text: 'Dilimizi, destanlarımızı, müziğimizi ve geleneklerimizi gelecek kuşaklara aktarırız.',
  },
  {
    title: 'Dayanışma',
    text: 'Zor gününde yanında oluruz; ihtiyacı olana elimizi uzatırız.',
  },
] as const

export const activities = [
  {
    key: 'culture',
    title: 'Kültür ve Sanat',
    text: 'Konserler, sergiler, film gösterimleri ve Nevruz gibi ortak bayramlarımızın kutlamalarını düzenliyoruz.',
  },
  {
    key: 'education',
    title: 'Eğitim ve Gençlik',
    text: 'Öğrencilere rehberlik ediyor; dil kursları, seminerler ve kariyer buluşmalarıyla gençlerimizin yanında oluyoruz.',
  },
  {
    key: 'solidarity',
    title: 'Sosyal Dayanışma',
    text: 'Türkiye’ye yeni gelen soydaşlarımıza yol gösteriyor, ihtiyaç sahibi ailelere yardım ulaştırıyoruz.',
  },
  {
    key: 'research',
    title: 'Bilim ve Araştırma',
    text: 'Türk dünyasının tarihini, dilini ve edebiyatını konu alan konferans, panel ve söyleşiler hazırlıyoruz.',
  },
  {
    key: 'sport',
    title: 'Geleneksel Sporlar',
    text: 'Okçuluk, güreş ve geleneksel oyunlarımızı tanıtıyor, yeni kuşakların bu mirası yaşatmasını sağlıyoruz.',
  },
  {
    key: 'network',
    title: 'İş Birliği ve Ağ',
    text: 'Türk dünyasından girişimcileri, akademisyenleri ve kurumları ortak projelerde buluşturuyoruz.',
  },
] as const

export type ActivityKey = (typeof activities)[number]['key']

export const goals = [
  'Türk dünyası halkları arasında kültürel, sosyal ve ekonomik iş birliğini geliştirmek.',
  'Ortak dil, tarih ve kültür mirasımızı araştırmak, korumak ve tanıtmak.',
  'Türkiye’de yaşayan soydaşlarımızın eğitim, uyum ve sosyal ihtiyaçlarına destek olmak.',
  'Gençlerin kişisel ve mesleki gelişimine katkı sağlamak.',
  'Kamu kurumları, üniversiteler ve sivil toplum kuruluşlarıyla ortak projeler yürütmek.',
  'İhtiyaç sahiplerine, yasal çerçeve içinde yardım ulaştırmak.',
] as const

export const logoMeaning = [
  {
    title: 'Sekiz köşeli yıldız',
    text: 'Selçuklu mimarisinden tanıdığımız bu yıldız, köklü geçmişimizi ve dört bir yana yayılan Türk dünyasını simgeler.',
  },
  {
    title: 'Yay ve üç ok',
    text: 'Oğuz Kağan Destanı’nda Oğuz boyları Bozoklar ve Üçoklar olarak anılır. Tek ok kolayca kırılır, bir arada tutulan oklar ise kırılmaz. Bu, birliğin gücünü anlatır.',
  },
  {
    title: 'Turkuaz ve altın',
    text: 'Adını Türklerden alan turkuaz, Türk dünyasının ortak rengidir. Altın ise bereketi ve değeri temsil eder.',
  },
] as const

// Names are placeholders until the association shares its board list.
export const board = [
  { name: 'Ad Soyad', role: 'Yönetim Kurulu Başkanı' },
  { name: 'Ad Soyad', role: 'Başkan Yardımcısı' },
  { name: 'Ad Soyad', role: 'Genel Sekreter' },
  { name: 'Ad Soyad', role: 'Sayman' },
  { name: 'Ad Soyad', role: 'Yönetim Kurulu Üyesi' },
] as const

export const interestOptions = [
  'Kültür ve Sanat',
  'Eğitim ve Gençlik',
  'Sosyal Dayanışma',
  'Bilim ve Araştırma',
  'Geleneksel Sporlar',
  'Gönüllü çalışmalar',
] as const

export const contactTopics = ['Genel bilgi', 'Üyelik', 'Etkinlikler', 'Bağış', 'Gönüllülük', 'Diğer'] as const

export const albums = [
  { title: 'Geleneksel Okçuluk Tanıtım Günü', date: '2026-10-11T12:00:00+03:00', tone: 'brand' },
  { title: 'Gönüllü Tanışma Buluşması', date: '2026-09-20T12:00:00+03:00', tone: 'gold' },
  { title: 'Cengiz Aytmatov’u Anma Söyleşisi', date: '2026-06-10T12:00:00+03:00', tone: 'deep' },
  { title: 'Nevruz Bayramı 2026', date: '2026-03-21T12:00:00+03:00', tone: 'gold' },
  { title: 'Türk Dünyası Edebiyat Akşamı', date: '2026-02-14T12:00:00+03:00', tone: 'deep' },
  { title: 'Kış Dayanışma Kampanyası 2025', date: '2026-01-10T12:00:00+03:00', tone: 'brand' },
] as const
