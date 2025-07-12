'use client';

import { motion } from 'framer-motion';

export default function AcikRizaMetni() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">AÇIK RIZA METNİ</h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, [Uygulama Adı] isimli mobil uygulama kapsamında sunulan cilt analizi hizmetinden yararlanabilmem için aşağıda belirtilen kişisel verilerimin işlenmesine, aktarılmasına ve saklanmasına açıkça rıza verdiğimi kabul ve beyan ederim:
            </p>

            <div>
              <h2 className="text-xl font-semibold mb-4">1. İşlenecek Veriler:</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Yüz fotoğrafı</li>
                <li>Cilt tipi bilgisi</li>
                <li>Cinsiyet, doğum tarihi ve iletişim bilgileri</li>
                <li>Cilt analizine bağlı olarak oluşturulan kullanıcıya özel rapor ve veriler</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">2. Amaç:</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cilt analizinin yapılması</li>
                <li>Kullanıcıya özel rapor ve önerilerin sunulması</li>
                <li>Kullanıcı geçmişi takibi ve analizlerin arşivlenmesi</li>
                <li>Uygulamanın teknik olarak çalışmasının sağlanması</li>
                <li>Mevzuattan doğan yükümlülüklerin yerine getirilmesi</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">3. Aktarım:</h2>
              <div className="space-y-4">
                <p>
                  Yukarıda belirtilen kişisel verilerimin, uygulamanın teknik altyapısını sağlayan ve hizmet sunmamıza imkan sağlayan yurt içi ve yurt dışındaki hizmet sağlayıcılarla, bilişim ve yapay zekâ şirketleriyle, sunucu (server) sağlayıcılarla ve veri güvenliğini sağlamakla yükümlü çözüm ortaklarıyla paylaşılmasına açıkça rıza gösteriyorum.
                </p>
                <p>
                  Bu kapsamda kişisel verilerimin yurt dışına aktarılmasına rıza gösteriyorum. Kişisel verilerim yalnızca KVKK m.9/1 uyarınca yurtdışına aktarımı yalnızca açık rızamla yapılacaktır.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">4. Saklama Süresi:</h2>
              <p>
                Verilerim, uygulamada kayıtlı kaldığım süre boyunca ve hesabımı silmemi izleyen 2 yıl süreyle saklanacak; sonrasında ise silinecek, yok edilecek veya anonim hale getirilecektir. Uygulama yöneticisinin gerekli görmesi durumunda kişisel verilerimin silinmesi yerine anonim hale getirilmesine açıkça rıza gösteriyorum.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">5. Bilgilendirme:</h2>
              <p>
                "Aydınlatma Metni'ni" okudum, anladım ve kişisel verilerimin işlenmesine ilişkin olarak bilgilendirildim.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">6. Teknik Zorunluluk:</h2>
              <p>
                Bu hizmetin sunulabilmesi, yüz fotoğrafımın ve cilt tipi bilgilerimin işlenmesini teknik olarak zorunlu kılmaktadır. Bu nedenle, açık rıza vermemem halinde hizmetten yararlanamayacağımı bilerek karar veriyorum.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 