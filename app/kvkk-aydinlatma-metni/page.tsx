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
              <h2 className="text-xl font-semibold mb-4">1. Veri Sorumlusu ve Temsilcisi</h2>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz; veri sorumlusu olarak Ahmet Yiğit ÇELİK (T.C:49285044668) ("Şirket") tarafından aşağıda açıklanan kapsamda işlenebilecektir.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">2. Kişisel Verilerin İşlenme Amacı</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kullanıcı hesabı oluşturulması ve yönetilmesi</li>
                <li>Cilt analizi hizmetinin sunulması ve kişiselleştirilmiş önerilerin oluşturulması</li>
                <li>Uygulama kullanım deneyiminin iyileştirilmesi ve analizi</li>
                <li>Kullanıcı destek hizmetlerinin sağlanması</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                <li>Hizmet kalitesinin artırılması ve yeni özelliklerin geliştirilmesi</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">3. İşlenen Kişisel Veri Kategorileri</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kimlik Bilgileri: Ad, soyad, doğum tarihi, cinsiyet</li>
                <li>İletişim Bilgileri: E-posta adresi, telefon numarası</li>
                <li>Kullanıcı Bilgileri: Cilt tipi, cilt hassasiyetleri, kozmetik alışkanlıkları</li>
                <li>Görsel Veriler: Yüz fotoğrafı</li>
                <li>Kullanım Verileri: Uygulama kullanım istatistikleri, tercihler</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">4. Kişisel Verilerin Aktarılması</h2>
              <p>
                Kişisel verileriniz, aşağıdaki amaçlar ve hukuki sebepler ile üçüncü kişilere aktarılabilir:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hizmet alınan yurt içi/yurt dışı teknik destek firmaları ve bulut hizmet sağlayıcıları</li>
                <li>Yasal yükümlülükler kapsamında yetkili kamu kurum ve kuruluşları</li>
                <li>İş ortakları ve hizmet sağlayıcılar</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
              <p>
                Kişisel verileriniz, mobil uygulama ve internet sitesi üzerinden elektronik ortamda toplanmaktadır. Bu toplama işlemi:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Açık rızanız</li>
                <li>Sözleşmenin kurulması ve ifası</li>
                <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
                <li>Meşru menfaat</li>
              </ul>
              <p className="mt-4">
                hukuki sebeplerine dayanılarak gerçekleştirilmektedir.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">6. Kişisel Veri Sahibinin Hakları</h2>
              <p>
                KVKK'nın 11. maddesi uyarınca herkes, veri sorumlusuna başvurarak kendisiyle ilgili:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
                <li>Düzeltme, silme ve yok etme talepleri neticesinde yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
                <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme haklarına sahiptir</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">7. Başvuru Yöntemi</h2>
              <p>
                KVKK kapsamındaki haklarınızı kullanmak için:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>info@skinly.com.tr adresine e-posta göndererek</li>
                <li>Ragıp Tüzün Mahallesi Coşkun Sokak 33/3 Yenimahalle Ankara adresine ıslak imzalı dilekçe göndererek</li>
                <li>Uygulama içi destek bölümünden mesaj göndererek</li>
              </ul>
              <p className="mt-4">
                başvuruda bulunabilirsiniz. Başvurunuz en kısa sürede ve en geç 30 (otuz) gün içinde yanıtlanacaktır.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">8. Değişiklikler</h2>
              <p>
                İşbu Aydınlatma Metni, değişen süreçler veya mevzuat değişiklikleri nedeniyle güncellenebilir. Güncellemeler uygulama üzerinden yayınlanacak olup, yayınlandığı tarih itibariyle geçerli olacaktır.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 