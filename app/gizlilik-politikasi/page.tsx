'use client';

import { motion } from 'framer-motion';

export default function GizlilikPolitikasi() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">GİZLİLİK POLİTİKASI</h1>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold mb-4">1. Giriş</h2>
              <p>
                Bu Gizlilik Politikası, Skinly - Cilt Analiz Asistanı mobil uygulamasının ("Uygulama") kullanıcılarından toplanan kişisel verilerin, nasıl işlendiği, saklandığı ve korunduğuna ilişkin ilkeleri içermektedir. Kullanıcılar, uygulamayı kullanarak bu Gizlilik Politikasını kabul etmiş sayılırlar.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">2. Toplanan Veriler</h2>
              <p>
                Uygulama aracılığıyla kullanıcılardan şu kişisel veriler toplanabilir:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Kimlik Bilgileri:</strong> Ad, soyad</li>
                <li><strong>İletişim Bilgileri:</strong> E-posta adresi</li>
                <li><strong>Görsel Veriler:</strong> Kullanıcı tarafından yüklenen yüz fotoğrafları</li>
                <li><strong>Alışkanlık ve Tercih Bilgileri:</strong> Cilt tipi, yaşam tarzına dair yanıtlar</li>
                <li><strong>Kullanım Verileri:</strong> Uygulama içerisindeki gezinme ve tercih bilgileri</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">3. Verilerin Toplanma Yöntemi ve Hukuki Sebepler</h2>
              <p>
                Veriler, uygulama üzerinden kullanıcının beyanı yoluyla ve uygulamanın kullanımı sırasında otomatik yollarla toplanabilir.
              </p>
              <p className="font-medium mt-4">Hukuki sebepler:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>KVKK m.5/1 (açık rıza)</li>
                <li>KVKK m.5/2(f) (meşru menfaat - anonim kullanım verileri)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">4. Verilerin İşlenme Amaçları</h2>
              <p>
                Toplanan veriler aşağıdaki amaçlarla işlenebilir:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Yüz tanıma tabanlı cilt analizinin gerçekleştirilmesi</li>
                <li>Kişiselleştirilmiş ürün ve önerilerin sunulması</li>
                <li>Hizmetin sunulması ve iyileştirilmesi</li>
                <li>Kullanıcıyla iletişimin sağlanması</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">5. Verilerin Saklanması ve Korunması</h2>
              <p>
                Kullanıcıya ait kişisel veriler, yurt içi ve/veya yurt dışında bulunan güvenli sunucularda, teknik ve idari tedbirler alınarak saklanmaktadır. Veriler, uygulama kullanıldığı sürece saklanmakta olup, kullanıcının üyeliğinin sonlanmasından itibaren 2 yıl süreyle muhafaza edilir. Bu sürenin sonunda veriler silinir veya anonim hale getirilir. Verilerin anonimleştirilip getirilmeyeceğine uygulama yöneticisi karar verir.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Yüz Verilerine İlişkin Ek Bilgilendirme</h2>
              <p>
                Kullanıcı tarafından yüklenen yüz fotoğrafları, yalnızca yapay zekâ destekli cilt analizinin gerçekleştirilmesi amacıyla işlenir. Bu görseller, güvenli bir şekilde Supabase altyapısında saklanır ve kullanıcı hesabı aktif olduğu sürece muhafaza edilir. Kullanıcı hesabını silerse veya verilerinin silinmesini talep ederse, bu görseller ve ilişkili analiz sonuçları kalıcı olarak silinir. Skinly, yüz verilerini yalnızca hizmetin sağlanması için iş ortaklarıyla paylaşır. Bu kapsamda, görseller Face++ (Megvii) tarafından analiz edilmekte olup, bu üçüncü taraf hizmet sağlayıcı yüz fotoğraflarını analiz tamamlandıktan sonra sistemlerinde saklamaz. Yüz verileri hiçbir şekilde yetkisiz üçüncü kişilerle paylaşılmaz veya ticari amaçlarla kullanılmaz.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">6. Verilerin Üçüncü Kişilerle Paylaşımı</h2>
              <p>
                Veriler, aşağıdaki durumlar dışında üçüncü kişi ve kurumlarla paylaşılmaz:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kullanıcının açık rızasını vermiş olması</li>
                <li>Hizmetin sağlanabilmesi için alt hizmet sağlayıcılarla (bulut barındırma, yapay zeka işlemleri vb.)</li>
                <li>Kanuni zorunluluklar kapsamında yetkili kamu kurum ve kuruluşlarıyla</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">6.1. Üçüncü Taraf Analiz Araçları</h2>
              <p>
                Uygulamamızda kullanıcı deneyimini geliştirmek, uygulama performansını ölçmek ve teknik hataları tespit etmek amacıyla bazı üçüncü taraf analiz araçları kullanılmaktadır. Bu kapsamda PostHog ve Meta App Events (Facebook Analytics) gibi hizmetler anonim kullanım verilerini işleyebilir. Bu araçlar; uygulama içi davranışlar, gezinme verileri, belirli buton tıklamaları ve abonelikle ilgili etkileşimler gibi teknik bilgileri toplayabilir.
              </p>
              <p className="mt-4">
                Bu veriler kişisel kimlik bilgilerinizi içermez ve reklam hedefleme amacıyla kullanılmaz. Toplanan tüm anonim veriler yalnızca uygulamanın geliştirilmesi ve performans analizleri için işlenmektedir.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">7. Yurtdışına Veri Aktarımı</h2>
              <p>
                Uygulama kapsamında kişisel veriler yurt dışına aktarılmaktadır. Bu aktarma, Kullanıcı Sözleşmesi, Aydınlatma Metni ve Açık Rıza Metni ile birlikte kullanıcıya bildirilmekte ve açık rıza alınarak gerçekleştirilmektedir.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">8. 18 Yaş Altı Kullanıcılar</h2>
              <p>
                Uygulama 18 yaş altı bireylerin kullanımına kapalıdır. Bu yaş grubuna ait olduğu tespit edilen kullanıcılara ait veriler derhal silinir.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">9. Kullanıcı Hakları</h2>
              <p>
                KVKK m.11 uyarınca kullanıcılar:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Veri işlenip işlenmediğini öğrenme</li>
                <li>Veri işlenmişse bilgi talep etme</li>
                <li>Amaca uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
                <li>KVKK m.7 uyarınca verilerin silinmesini/anonim hale getirilmesini talep etme</li>
                <li>Aktarıldığı üçüncü kişilere bildirimi isteme</li>
                <li>Otomatik sistemlerce analiz sonucu aleyhe bir sonuç çıkmasına itiraz etme</li>
                <li>Zarar halinde tazminat talep etme haklarına sahiptir</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">10. Başvuru Yöntemi</h2>
              <p>
                Kullanıcılar, bu haklarını kullanmak için info@skinly.com.tr üzerinden başvuru yapabilir. Tüm talepler yasal süreler içinde cevaplandırılır.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">11. Değişiklikler ve Güncellemeler</h2>
              <p>
                Bu Gizlilik Politikası, gerek duyulduğunda uygulama yöneticisi tarafından güncellenebilir. En güncel versiyon, uygulama içinde ve/veya web sitesi aracılığıyla yayınlanır.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 