'use client';

import { motion } from 'framer-motion';

export default function AbonelikSozlesmesi() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">ABONELİK SÖZLEŞMESİ</h1>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold mb-4">1. Taraflar</h2>
              <p>
                İşbu Abonelik Sözleşmesi ("Sözleşme"); bir tarafta Ragıp Tüzün Mahallesi Coşkun Sokak 33/3 Yenimahalle Ankara adresinde mukim Ahmet Yiğit Çelik (T.C:49285044668) ("Hizmet Sağlayıcı") ile diğer tarafta mobil uygulama veya internet sitesi aracılığıyla hizmeti kullanan kullanıcı ("Abone") arasında elektronik ortamda kurulmuştur. Kullanıcı, sözleşmeyi onaylayarak tüm hükümleri kabul etmiş sayılır.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">2. Sözleşmenin Konusu</h2>
              <p>
                Bu Sözleşme, Hizmet Sağlayıcı tarafından sunulan yapay zekâ destekli cilt analizi hizmetine ilişkin abonelik türlerini, ödeme şartlarını, iptal ve fesih süreçlerini düzenler.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">3. Abonelik Türleri ve Kapsamı</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">3.1 Ücretsiz Sürüm</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ücretsiz sürüm, süreye bağlı değildir ancak içerik ve özellik yönünden kısıtlıdır.</li>
                    <li>Kullanıcılar bu sürümde temel cilt analizi hizmetlerinden sınırlı ölçüde yararlanabilir.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">3.2 Ücretli Abonelik Paketleri</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Sunulan paketler aşağıda belirtilecektir:</li>
                    <li>Premium Paket: haftalık 29.99 TL veya yıllık 699.99 TL (fiyatlar vergiler dahil ve Türk Lirası üzerinden hesaplanmıştır)</li>
                    <li>Paket içerikleri ve ücretlendirme, uygulama içinde ayrıca duyurulacaktır.</li>
                    <li>Hizmet Sağlayıcı, paket içeriklerinde ve ücretlendirmede değişiklik yapma hakkını saklı tutar.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">4. Abonelik Süresi, Yenileme ve Fesih</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">4.1 Süre ve Yenileme</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Abonelikler haftalık veya yıllık olarak sunulur. Bu sözleşmenin onaylanması ve de uygulamanın kullanılmaya başlanmasıyla birlikte işbu sözleşme kurulmuş sayılır.</li>
                    <li>Süre sonunda kullanıcı iptal etmediği takdirde abonelik otomatik olarak yenilenir ve ödeme, kayıtlı kart üzerinden tahsil edilir. Ödeme ve üyeliklerin takibi konusunda RevenueCat isimli üçüncü parti şahısların sunduğu hizmet kullanılmaktadır. Abone bu sözleşmenin imzalanmasıyla birlikte, Abone tarafından iptal talebi iletilmediği sürece, üyeliği yenilemek istediği beyan ve kabul edilmiş sayılır.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">4.2 Fesih ve İptal Hakkı</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Abone, aboneliğini istediği zaman sonlandırabilir.</li>
                    <li>Fesih bildirimi yazılı veya kalıcı veri saklayıcısı (örneğin e-posta, mobil uygulama içi bildirim) ile yapılır.</li>
                    <li>Bildirimin alınmasından itibaren en geç 3 iş günü içinde fesih işleme alınır.</li>
                    <li>Cayma hakkı, dijital içeriğin teslimi başladıktan sonra kullanılamaz.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">4.3 Fesih Bildirimi ve Süresi</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fesih bildirimi, kullanıcı tarafından yazılı veya kalıcı veri saklayıcısı ile yapılır.</li>
                    <li>Sağlayıcı, bildirimi aldıktan sonra en geç 7 gün içinde fesih işlemini tamamlar.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">4.4 Feshin Sonuçları</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fesih işlemi tamamlandığında sözleşme kapsamındaki hizmet durdurulur.</li>
                    <li>Sözleşme sona erdikten sonra kullanıcıdan herhangi bir ek ücret talep edilmez.</li>
                    <li>Abonelik devri mümkün değildir.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">5. Ödeme Koşulları</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Abonelik ücretleri kredi kartı, sanal kart veya diğer ödeme araçlarıyla tahsil edilir.</li>
                <li>Ödeme alınmadan hizmet aktifleşmez.</li>
                <li>Tüm fiyatlara yasal vergiler dahildir.</li>
                <li>Gecikmeli ödeme durumunda kullanıcı uyarılır, ödeme yapılmazsa hizmet durdurulur.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">6. Mücbir Sebepler Nedeniyle Hizmetin Aksaması</h2>
              <p>
                Deprem, sel, yangın v.s. gibi mücbir sebepler nedeniyle, hizmet sağlayıcının herhangi bir şekilde taahhüt edilen hizmeti sunamaması durumunda, Hizmet Sağlayıcının sorumluluğuna başvurulamaz.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">7. Kullanıcı Yükümlülükleri</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kullanıcı, hizmeti yalnızca şahsi amaçla kullanır.</li>
                <li>Bilgilerin doğruluğundan kullanıcı sorumludur.</li>
                <li>Beyan esas alınır; yanlış beyanlardan Hizmet Sağlayıcı sorumlu değildir.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">8. Yaş Sınırı</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Uygulama yalnızca 18 yaş ve üzeri bireyler içindir.</li>
                <li>18 yaş altı kullanıcılar uygulamayı kullanamaz.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">9. Hizmet Sağlayıcının Yükümlülükleri</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hizmetin teknik olarak düzgün işlemesini sağlar.</li>
                <li>Kesinti durumunda kullanıcıyı bilgilendirir.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">10. Sözleşme Değişiklikleri</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Değişiklik hakkı Hizmet Sağlayıcıya aittir.</li>
                <li>Değişiklikler kullanıcılara bildirilir. Abonelik sözleşmesinde, bulunması zorunlu unsurlardan bir veya birkaçının bulunmaması sözleşmenin geçerliliğini etkilemez ve bu durumda, hizmet sağlayıcı malın teslimini veya hizmetin ifasını durdurmaz. Sözleşmedeki eksiklik, sözleşmeyi düzenleyen tarafından tüketiciden ilave bir ödemede bulunmasını istemeksizin derhal giderilir. Aksi takdirde, tüketici cezai şart, tazminat ve benzeri adlarla herhangi bir ödemede bulunmaksızın sözleşmeyi feshedebilir.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">11. Bilgilendirme Yükümlülüğü</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hizmet kullanımı, tarife değişiklikleri, kesintiler ve cayma/fesih hakları konusunda kullanıcı bilgilendirilir.</li>
                <li>Bilgilendirme kalıcı veri saklayıcısıyla yapılır.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">12. Uygulanacak Hukuk ve Yetki</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Türkiye Cumhuriyeti kanunları geçerlidir.</li>
                <li>Uyuşmazlıklarda Ankara Mahkemeleri ve İcra Daireleri yetkilidir.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">13. Ücretin İade Edilmesi</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ücret iadesi yalnızca, Hizmet Sağlayıcı'dan kaynaklı sorunlarda mümkündür.</li>
                <li>Uygulama yöneticisinin kusurundan kaynaklı durumlarda, abone satın aldığı hizmeti alamazsa, hizmeti alamadığı süre boyunca olan ücret tarafına iade edilir.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">14. Hizmetin Geçici Olarak Durdurulması</h2>
              <p>
                Hizmet sağlayıcı, planlı bakım onarım çalışmaları boyunca Abonelere sunamadığı hizmeti, hizmetin geçici olarak durdurulduğu süre kadar, abonelik süresinin sonuna ekler.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">15. Yürürlük</h2>
              <p>
                Kullanıcının sözleşmeyi elektronik ortamda onaylamasıyla yürürlüğe girer.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 