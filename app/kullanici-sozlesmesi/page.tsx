'use client';

import { motion } from 'framer-motion';

export default function KullaniciSozlesmesi() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">KULLANICI SÖZLEŞMESİ</h1>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold mb-4">1. Taraflar</h2>
              <p>
                Bu Kullanıcı Sözleşmesi ("Sözleşme"), Ahmet Yiğit ÇELİK (T.C:49285044668) ("Şirket") ile uygulamaya kayıt olarak hizmetlerden yararlanan kullanıcı ("Kullanıcı") arasında akdedilmiştir.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">2. Kabul ve Yürürlük</h2>
              <p>
                Bu uygulamayı indirerek ve/veya kayıt olarak kullanmakla, Kullanıcı bu Sözleşme hükümlerini okuduğunu, anladığını ve tüm koşulları kabul ettiğini beyan eder. Kullanıcı, 18 yaşından büyük olduğunu ve kendi adına yasal işlem yapma ehliyetine sahip olduğunu kabul eder.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">3. Hizmet Tanımı</h2>
              <p>
                Uygulama; kullanıcının yüklediği yüz fotoğrafı, cilt tipi, yaşam tarzı ve kozmetik alışkanlıklarına dair kendi beyanına dayalı veriler doğrultusunda, diğer kullanıcıların geri bildirimleri ve genel kullanım eğilimleri temel alınarak, tavsiye niteliğinde analiz ve yönlendirmeler sunar. Sunulan öneriler, kullanıcı topluluğunun görüş, deneyim ve geri bildirimlerine dayalı olarak oluşturulmakta olup, herhangi bir tıbbi değerlendirme, cilt sağlığı teşhisi veya dermatolojik inceleme anlamı taşımaz. Uygulama kapsamında sunulan analizler, yalnızca kullanıcılara kişiselleştirilmiş öneriler sunmaya yönelik kurgulanmıştır.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">4. Kullanım Koşulları</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Uygulama yalnızca 18 yaş ve üzeri bireyler tarafından kullanılabilir.</li>
                <li>Kullanıcı yalnızca kendisine ait doğru ve güncel bilgileri sunmakla yükümlüdür.</li>
                <li>Kullanıcı, uygulamayı kullanmakla 18 yaşından büyük olduğunu beyan eder.</li>
                <li>Kullanıcının yanlış beyan ve/veya beyanları sonucunda uğrayacağı doğrudan veya dolaylı zararlardan Şirket ve/veya veri sorumlusu hiçbir şekilde sorumlu değildir.</li>
                <li>Ayrıca, kullanıcının gerçeğe aykırı, yanıltıcı, eksik veya üçüncü kişilere ait bilgi sunması nedeniyle Şirket'in ve/veya iş ortaklarının uğrayacağı her türlü doğrudan ve dolaylı zarar, masraf, idari para cezası ve üçüncü kişi taleplerinden kullanıcı sorumlu olup, bu kapsamda oluşabilecek zararı tazmin etmeyi kabul ve taahhüt eder.</li>
                <li>Uygulama, tıbbi tanı, teşhis veya tedavi amacıyla kullanılamaz.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">5. Fikri Mülkiyet Hakları</h2>
              <p>
                Uygulama ve içeriği üzerindeki tüm haklar Şirket'e aittir. Kullanıcı, uygulamanın veya analiz çıktılarının izinsiz kopyalanması, dağıtılması veya değiştirilmesi gibi faaliyetlerde bulunamaz.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">6. Kişisel Verilerin Korunması ve Gizlilik</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kullanıcılardan yalnızca uygulamanın çalışması için gerekli olan sınırlı bilgiler talep edilmektedir. Bunlar; kullanıcının kendi beyanına dayalı olarak sunduğu ad, soyad, yaş, cinsiyet, cilt tipi, yaşam tarzı bilgileri (örneğin güneşe maruz kalma süresi, ortalama uyku süresi vb.) ve yüz fotoğrafı gibi verilerle sınırlıdır.</li>
                <li>Bu veriler, kullanıcılara kişiselleştirilmiş analiz ve öneriler sunmak amacıyla işlenmektedir.</li>
                <li>Uygulama, hiçbir şekilde kullanıcıların sağlık geçmişi, tanı bilgileri, hastalık öyküsü veya medikal kayıtlarına ilişkin veri talep etmez, bu verileri toplamaz, işlemez ve saklamaz.</li>
                <li>Kullanıcılardan alınan yüz fotoğrafları, yalnızca otomatik analiz süreçlerinde kullanılmakta olup, kullanıcıların açık rızası olmaksızın bu veriler saklanmaz veya üçüncü kişilerle paylaşılmaz. Kişisel veriler, güvenli bir şekilde saklanmakta olup, uygulamanın barındırıldığı sunucu hizmeti yurt içi ve/veya yurt dışında yerleşik veri işleyiciler tarafından sağlanabilir. Bu kapsamda, kişisel verilerin yurt dışına aktarımı yalnızca kullanıcıların açık rızası ile ve 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 9. maddesi uyarınca, yürürlükteki mevzuata uygun şekilde gerçekleştirilir.</li>
                <li>Veri işleme süreçleri, 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili ikincil mevzuata tam uyum içinde yürütülmektedir.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">7. Sorumluluk Reddi ve Feragat</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Uygulama yalnızca öneri ve tavsiye niteliğinde analiz çıktıları sunar. Hiçbir şekilde tıbbi teşhis, tedavi ya da dermatolojik değerlendirme hizmeti verilmez.</li>
                <li>Uygulama aracılığıyla sunulan yönlendirmeler, kullanıcının kendi beyan ettiği bilgiler temel alınarak oluşturulur ve kullanıcı topluluğunun deneyim ve geri bildirimlerine dayalı olarak yapılandırılır. Bu beyanların doğruluğu Şirket tarafından denetlenemez; yanlış, yanıltıcı veya eksik bilgi paylaşımı neticesinde ortaya çıkabilecek zarar, risk veya sonuçlardan Şirket ve veri sorumlusu sorumlu tutulamaz.</li>
                <li>Uygulama, hiçbir surette kullanıcıların sağlık geçmişi, tanı bilgileri, hastalık öyküsü veya medikal geçmişine dair bilgi talep etmez ve bu tür verileri işlememeyi taahhüt eder.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">8. Sözleşmenin Süresi ve Feshi</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bu Sözleşme, kullanıcının uygulamaya kaydolması ile yürürlüğe girer ve kullanıcının uygulamadaki üyeliği devam ettiği sürece geçerliliğini korur.</li>
                <li>Kullanıcı dilediği zaman, uygulamadaki hesap silme özelliğini kullanarak üyeliğini sonlandırabilir ve Sözleşmeyi feshedebilir. Şirket, önceden bildirimde bulunmaksızın; sözleşme ihlali, gerçeğe aykırı beyan, güvenlik ihlali veya hukuka aykırı kullanım hallerinde hesabı askıya alma veya feshetme hakkını saklı tutar.</li>
                <li>Şirket, uygulamanın kapsamını, özelliklerini ve sunulan hizmetleri önceden haber vermeksizin değiştirme, kaldırma veya sınırlama hakkına sahiptir.</li>
                <li>Sözleşme'nin sona ermesi hâlinde, yürürlükteki mevzuat saklı kalmak kaydıyla kullanıcı verileri silinir, yok edilir veya anonimleştirilir.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">9. Uygulanacak Hukuk ve Yetki</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bu Sözleşme, Türkiye Cumhuriyeti kanunlarına tabi olup, Türkiye Cumhuriyeti mevzuatına göre yorumlanır ve uygulanır. Taraflar arasında işbu Sözleşme'den doğabilecek her türlü uyuşmazlıkta Ankara Mahkemeleri ve İcra Daireleri yetkilidir.</li>
                <li>Kullanıcı, bu sözleşmeyi onaylayarak, belirtilen yetkili mahkemenin münhasır yargı yetkisini kabul etmiş sayılır.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">10. Değişiklikler</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Şirket, işbu Sözleşme hükümlerinde dilediği zaman, tek taraflı olarak değişiklik yapma hakkına sahiptir. Yapılan değişiklikler, uygulama içerisinde yayınlandığı tarihten itibaren geçerli olur ve kullanıcılar açısından bağlayıcıdır. Kullanıcının değişiklik tarihinden sonra uygulamayı kullanmaya devam etmesi, bu değişiklikleri kabul ettiği anlamına gelir.</li>
                <li>Şirket, önemli gördüğü değişiklikleri ayrıca kullanıcıya bildirim yoluyla duyurabilir; ancak bu, bilgilendirmenin geçerlilik koşulu olmadığı gibi, sözleşme değişikliğinin yürürlüğünü etkilemez.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">11. İletişim Bilgileri</h2>
              <ul className="list-none pl-6 space-y-2">
                <li><strong>Şirket İsmi:</strong> Ahmet Yiğit ÇELİK (T.C:49285044668)</li>
                <li><strong>İletişim:</strong> info@skinly.com.tr</li>
                <li><strong>Adres:</strong> Ragıp Tüzün Mahallesi Coşkun Sokak 33/3 Yenimahalle Ankara</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">12. Abonelik Sistemi ve Ücretlendirme</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Uygulama, "standart" ve "premium" olmak üzere iki farklı kullanım modeli sunmaktadır.</li>
                <li>Standart sürüm kullanıcıları, uygulamaya ücretsiz olarak kaydolabilir ve kaydolduktan sonra yalnızca bir defaya mahsus olmak üzere bir adet cilt analizi raporu alabilir. Ayrıca uygulamanın sunduğu diğer temel hizmetlere sınırsız erişim hakkına sahiptir.</li>
                <li>Premium sürüm kullanıcıları ise, standart sürümde sunulan tüm haklara ek olarak, satın aldıkları abonelik paketine uygun sayıda cilt analizi raporuna erişme hakkı elde eder. Ayrıca uygulamanın tüm gelişmiş özelliklerinden sınırsız şekilde yararlanabilirler.</li>
                <li>Premium abonelik bedelleri; sunulan paket türüne, süresine ve içeriğine göre değişiklik gösterebilir.</li>
                <li>Şirket, abonelik ücretlerini ve paket yapılarını, dilediği zaman ve oranda, önceden herhangi bir bildirime gerek olmaksızın değiştirme hakkını saklı tutar. Bu değişiklikler uygulama içerisinde ilan edilmekle yürürlüğe girer ve mevcut kullanıcılar açısından yeni dönem başlangıcında geçerli olur. Kullanıcı, premium üyelik satın alarak, seçtiği pakete ilişkin bedelin tahsil edilmesini ve bu sözleşmede belirtilen koşulları kabul ettiğini beyan eder.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 