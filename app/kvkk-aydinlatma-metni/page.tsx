'use client';

import { motion } from 'framer-motion';

export default function KvkkAydinlatmaMetni() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">KVKK AYDINLATMA METNİ</h1>

          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold mb-4">1. Veri Sorumlusu</h2>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca kişisel
                verileriniz; veri sorumlusu sıfatıyla <strong>Ahmet Yiğit ÇELİK</strong> (T.C.:
                49285044668) (&quot;Şirket&quot; / &quot;Veri Sorumlusu&quot;) tarafından, 6698 sayılı
                Kanunun 10. maddesi ile Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul
                ve Esaslar Hakkında Tebliğ kapsamında aşağıda açıklanan çerçevede işlenmektedir.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">
                2. İşlenme Amaçları ve Sözleşme Çerçevesi
              </h2>
              <p className="mb-4">
                Uygulamaya kayıt olup uygulamayı kullanan kişiler tarafından paylaşılan kişisel
                veriler; kullanıcı ile Veri Sorumlusu arasında kurulan sözleşme gereğince, aşağıdaki
                amaçlarla sınırlı olarak işlenir:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Talep edilen cilt analizlerinin yapılabilmesi</li>
                <li>Uygulama içinde gerçekleşen analizlerin takibi için fotoğraf arşivinin tutulması</li>
                <li>Kullanıcıya özel rutin ve önerilerin oluşturulması</li>
                <li>Kullanıcı hesabının oluşturulması ve yönetilmesi</li>
                <li>Uygulama kullanım deneyiminin iyileştirilmesi ve analizi</li>
                <li>Kullanıcı destek hizmetlerinin sağlanması</li>
                <li>Hizmet kalitesinin artırılması ve yeni özelliklerin geliştirilmesi</li>
                <li>
                  Türk Medeni Kanunu, Tüketicinin Korunması Hakkında Kanun, Kişisel Verilerin
                  Korunması Kanunu, Türk Borçlar Kanunu ve yürürlükteki diğer mevzuattan doğan
                  yükümlülüklerin yerine getirilmesi
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">3. İşlenen Kişisel Veri Kategorileri</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kimlik bilgileri: Ad, soyad, doğum tarihi, cinsiyet</li>
                <li>İletişim bilgileri: Elektronik posta adresi (uygulama kapsamında toplanması halinde telefon numarası)</li>
                <li>Görsel veriler: Yüz fotoğrafı</li>
                <li>Kullanıcı / sağlık niteliğindeki veriler: Cilt tipi, cilt hassasiyetleri, kozmetik alışkanlıkları</li>
                <li>Kullanım verileri: Uygulama kullanım istatistikleri ve tercihler</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">4. Saklama Süresi</h2>
              <p>
                Kişisel verileriniz, kullanıcının uygulamada kayıtlı kaldığı süre boyunca ve
                kullanıcının hesabını silmesinden itibaren <strong>2 (iki) yıl</strong> süreyle
                işlenmekte ve muhafaza edilmektedir. Bu süreler sonunda verileriniz silinir, yok
                edilir veya anonim hale getirilir; kanunda öngörülen zorunlu haller saklıdır.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">
                5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebepleri
              </h2>
              <p className="mb-4">
                Kişisel verileriniz mobil uygulama ve internet sitesi üzerinden elektronik ortamda,
                yazılı ve görüntülü olarak toplanmaktadır. İşleme faaliyeti; KVKK&apos;nın 5.
                maddesinde düzenlenen &quot;veri sorumlusunun hukuki yükümlülüğünü yerine
                getirebilmesi için zorunlu olması&quot; ve &quot;ilgili kişinin temel hak ve
                özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri
                işlenmesinin zorunlu olması&quot; hukuki sebeplerinin yanı sıra, veri türüne göre{' '}
                <strong>açık rıza</strong>, <strong>sözleşmenin kurulması veya ifası</strong> ile{' '}
                <strong>kanunlarda açıkça öngörülmesi</strong> gibi sebeplere dayanabilir.
              </p>
              <p>
                Ad-soyad, e-posta ve doğum tarihi gibi kimlik ve iletişim verileri KVKK m. 5/2-(c)
                ve (f) bentleri kapsamında; yüz fotoğrafı ve cilt tipi gibi <strong>özel nitelikli kişisel veriler</strong> ise açık rızanıza dayanarak işlenmektedir.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">
                6. Aktarım, Yurt Dışına Aktarım ve Üçüncü Kişiler
              </h2>
              <p className="mb-4">
                Cilt analizinin sağlanması için, kullanıcının açık rızasıyla paylaştığı veriler;
                analizi gerçekleştiren bilişim, teknoloji ve yapay zekâ yazılım hizmeti sunan gerçek
                ve/veya tüzel kişiler ile sunucu / bulut barındırma hizmeti veren üçüncü taraflarla,{' '}
                <strong>6698 sayılı KVKK</strong>,{' '}
                <strong>Personal Information Protection Law of the People&apos;s Republic of China (PIPL)</strong> ve{' '}
                <strong>General Data Protection Regulation (GDPR)</strong> çerçevesinde
                paylaşılabilir. Kullanıcı, bu aydınlatma metnini okuyup anladığını kabul ederek
                paylaştığı verilerin işlenmesine rıza gösterdiğini; verilerin yurt dışına ve/veya üçüncü
                kişilere aktarılabileceği konusunda bilgilendirildiğini beyan eder.
              </p>
              <p className="mb-4">
                Veri Sorumlusu, hizmetin sunulması, teknik ve idari güvenliğin sağlanması, veri
                sızıntısının önlenmesi ve saklama ihtiyacı doğrultusunda kişisel verileri; yurt içi ve
                yurt dışı <strong>sunucu sağlayıcılarına</strong>, <strong>yazılım ve teknoloji şirketlerine</strong>,{' '}
                <strong>yapay zekâ analiz hizmeti sağlayıcılarına</strong> ve benzeri hizmet
                sağlayıcılara; yasal yükümlülüklerin yerine getirilmesi için{' '}
                <strong>yetkili kamu kurum ve kuruluşlarına</strong> aktarabilir. Kanunlarda öngörülen
                zorunlu haller saklı kalmak kaydıyla, Veri Sorumlusu elde ettiği verileri resmi
                mercilerle paylaşma hakkını saklı tutar.
              </p>
              <p>
                <strong>Yurt dışına veri aktarımı</strong>, KVKK m. 9/1 uyarınca açık rızanıza
                dayanır. Aktarım yapılacak ülkelerde yeterli korumanın bulunup bulunmadığına ilişkin
                Kurul kararları ayrıca dikkate alınır.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">7. Güvenlik</h2>
              <p>
                İşlenen kişisel veriler Veri Sorumlusu tarafından dijital ve/veya fiziki ortamda
                saklanır; sayılan haller dışında kullanılamaz veya izinsiz paylaşılamaz. Kişisel
                verilerin güvenliği için gerekli teknik ve idari tedbirler alınmakta; veriler uygun
                şekilde <strong>şifrelenerek</strong> muhafaza edilmektedir.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">
                8. Hizmetin Niteliği ve Sorumluluk Sınırları
              </h2>
              <p className="mb-4">
                Sunulan cilt analizi hizmeti <strong>tıbbi tanı veya tedavi</strong> niteliğinde
                değildir; uygulama Tıbbi Cihaz Yönetmeliği anlamında tıbbi cihaz sayılmaz. Sağlık
                endişesi halinde en yakın sağlık kuruluşuna başvurmanız önerilir.
              </p>
              <p className="mb-4">
                Hizmet, Gıda ve Takviye Edici Gıdalarda Sağlık Beyanı Kullanımı Hakkında Yönetmelik
                kapsamında <strong>beşeri tıbbi ürün</strong> tanımına girmez; ticari ürün
                reklamı veya tanıtımı amacı taşımaz.
              </p>
              <p className="mb-4">
                Analiz raporları kullanıcı odaklı verilerle oluşturulur; <strong>teşhis, tanı veya tedavi</strong> sunmaz ve sağlık geçmişinizden bağımsızdır. Önerilen ürünlerin kullanımından doğabilecek
                istenmeyen etkilerde sağlık kuruluşuna başvurmanız tavsiye edilir.
              </p>
              <p>
                Veri Sorumlusu, uygulama kapsamında önerilen cilt bakım ürünleri bakımından{' '}
                <strong>08.05.2023 tarihli Resmî Gazete&apos;de yayımlanan Kozmetik Ürünler Yönetmeliği</strong> ile{' '}
                <strong>3359 sayılı Sağlık Hizmetleri Temel Kanunu</strong> kapsamında sorumlu
                tutulamaz.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">9. Silme ve İşlemenin Sonlandırılması</h2>
              <p>
                Uygulamayı kullanmaktan vazgeçmeniz, hesabınızın silinmesini istemeniz veya işlemenin
                hukuki sebebinin ortadan kalkması hâlinde kişisel verileriniz, talebiniz üzerine veya
                re’sen silinir, yok edilir veya anonim hâle getirilir.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">
                10. Özel Nitelikli Veriler, Açık Rıza ve Yaş Sınırı
              </h2>
              <p className="mb-4">
                Cilt analizi hizmeti; yüz fotoğrafı ve cilt tipi gibi özel nitelikli kişisel verilerin
                işlenmesini teknik olarak gerektirir. Bu verilere ilişkin <strong>açık rıza</strong>{' '}
                verilmemesi hâlinde söz konusu hizmet sunulamaz.
              </p>
              <p className="mb-4">
                Uygulama <strong>18 yaşından küçüklere</strong> hizmet vermemektedir.
              </p>
              <p>
                Alınacak açık rıza, tekil ve bütünsel onay olarak yapılandırılmıştır; rıza
                vermemeniz hâlinde uygulamayı kullanamayacağınızı bilerek tercih etmiş olursunuz.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">
                11. Kişisel Veri Sahibinin KVKK m. 11 Kapsamındaki Hakları
              </h2>
              <p className="mb-4">
                KVKK&apos;nın 11. maddesi uyarınca veri sorumlusuna başvurarak kendinizle ilgili:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                <li>İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                <li>KVKK m. 7 kapsamında silinmesini veya yok edilmesini isteme</li>
                <li>Düzeltme/silme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                <li>
                  Münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonucun
                  çıkmasına itiraz etme
                </li>
                <li>Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">12. Başvuru Yöntemi ve Cevaplama Süresi</h2>
              <p className="mb-4">Haklarınızı kullanmak için:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>info@klarisai.app</strong> adresine e-posta göndererek
                </li>
                <li>
                  Ragıp Tüzün Mahallesi Coşkun Sokak 33/3 Yenimahalle Ankara adresine ıslak imzalı
                  dilekçe göndererek
                </li>
                <li>Uygulama içi destek bölümünden mesaj göndererek</li>
              </ul>
              <p className="mt-4">
                başvuruda bulunabilirsiniz. Başvurular en geç <strong>30 (otuz) gün</strong> içinde
                sonuçlandırılır. Veri Sorumlusu talebi kabul edebilir veya gerekçesini açıklayarak
                reddedebilir; yanıt yazılı olarak veya kayıtlı iletişim kanalları üzerinden
                bildirilir.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">13. Değişiklikler</h2>
              <p>
                İşbu Aydınlatma Metni; iş süreçlerindeki veya mevzuattaki değişiklikler nedeniyle
                güncellenebilir. Güncel metin <strong>uygulama</strong> ve{' '}
                <strong>internet sitesi</strong> üzerinden yayınlanır ve yayım tarihinde yürürlüğe
                girer.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
