import type { Metadata } from 'next'
import { site } from '@/lib/site'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni',
  description: 'Turan Birlik Derneği kişisel verilerin korunması aydınlatma metni.',
}

// General template — have it reviewed by the association's legal adviser before going live.
const sections: { title: string; body: (string | string[])[] }[] = [
  {
    title: '1. Veri sorumlusu',
    body: [
      `6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca kişisel verileriniz, veri sorumlusu sıfatıyla ${site.name} (“Dernek”) tarafından aşağıda açıklanan kapsamda işlenmektedir.`,
    ],
  },
  {
    title: '2. İşlenen kişisel veriler',
    body: [
      'Kimlik bilgileri (ad, soyad), iletişim bilgileri (telefon, e-posta, yaşadığınız şehir), mesleki bilgiler, ilgi alanlarınız ve bize ilettiğiniz mesajların içeriği; ayrıca sitemizi ziyaretiniz sırasında oluşan teknik kayıtlar (IP adresi, tarayıcı bilgileri).',
    ],
  },
  {
    title: '3. İşleme amaçları',
    body: [
      [
        'Üyelik başvurunuzun alınması ve değerlendirilmesi,',
        'Sizinle iletişime geçilmesi, soru ve taleplerinizin yanıtlanması,',
        'Etkinlik ve duyurularımız hakkında bilgilendirme yapılması,',
        'Dernekler mevzuatından doğan yükümlülüklerin yerine getirilmesi,',
        'Sitemizin ve bilgi sistemlerimizin güvenliğinin sağlanması.',
      ],
    ],
  },
  {
    title: '4. Hukuki sebepler',
    body: [
      'Kişisel verileriniz, KVKK’nın 5. maddesinin 2. fıkrasında yer alan; bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması (c), Derneğin hukuki yükümlülüğünü yerine getirebilmesi (ç) ve temel hak ve özgürlüklerinize zarar vermemek kaydıyla Derneğin meşru menfaati (f) hukuki sebeplerine dayanılarak işlenir. Bu sebeplerin bulunmadığı hâllerde verileriniz yalnızca açık rızanızla işlenir.',
    ],
  },
  {
    title: '5. Kişisel verilerin aktarılması',
    body: [
      'Kişisel verileriniz; yasal yükümlülüklerimiz kapsamında yetkili kamu kurum ve kuruluşlarına ve barındırma, e-posta gibi hizmetlerini aldığımız teknik hizmet sağlayıcılarına, KVKK’nın 8. ve 9. maddelerine uygun olarak aktarılabilir. Hizmet sağlayıcılarımızın sunucularının yurt dışında bulunması hâlinde aktarım, KVKK’nın 9. maddesinde öngörülen şartlara uygun olarak yapılır.',
    ],
  },
  {
    title: '6. Toplama yöntemi',
    body: [
      'Kişisel verileriniz, internet sitemizdeki üyelik ve iletişim formları aracılığıyla elektronik ortamda, kısmen otomatik yollarla toplanır.',
    ],
  },
  {
    title: '7. Saklama süresi',
    body: [
      'Kişisel verileriniz, işleme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen saklama süreleri boyunca saklanır. Bu sürelerin sonunda silinir, yok edilir veya anonim hâle getirilir.',
    ],
  },
  {
    title: '8. Haklarınız',
    body: [
      'KVKK’nın 11. maddesi uyarınca Derneğe başvurarak:',
      [
        'Kişisel verilerinizin işlenip işlenmediğini öğrenme,',
        'İşlenmişse buna ilişkin bilgi talep etme,',
        'İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,',
        'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,',
        'Eksik veya yanlış işlenmişse düzeltilmesini isteme,',
        'KVKK’nın 7. maddesindeki şartlar çerçevesinde silinmesini veya yok edilmesini isteme,',
        'Düzeltme, silme ve yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,',
        'Münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz etme,',
        'Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.',
      ],
    ],
  },
  {
    title: '9. Başvuru',
    body: [
      `Haklarınızı kullanmak için taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ’e uygun olarak yazılı şekilde dernek adresimize veya ${site.contact.email} adresine iletebilirsiniz. Başvurunuz en geç 30 gün içinde sonuçlandırılır.`,
    ],
  },
]

export default function KvkkPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal bilgilendirme"
        title="KVKK Aydınlatma Metni"
        description="Kişisel verilerinizi nasıl işlediğimizi ve haklarınızı sade bir dille anlatıyoruz."
      />
      <section className="py-16 sm:py-24">
        <article className="wrap max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-2xl font-semibold text-brand-900">{s.title}</h2>
              <div className="mt-4 space-y-4 text-pretty leading-relaxed text-ink/85">
                {s.body.map((b, i) =>
                  Array.isArray(b) ? (
                    <ul key={i} className="space-y-2 pl-1">
                      {b.map((li) => (
                        <li key={li} className="flex gap-3">
                          <span className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-gold-500" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i}>{b}</p>
                  ),
                )}
              </div>
            </div>
          ))}
          <p className="border-t border-line pt-6 text-sm text-muted">Son güncelleme: 30 Ekim 2026</p>
        </article>
      </section>
    </>
  )
}
