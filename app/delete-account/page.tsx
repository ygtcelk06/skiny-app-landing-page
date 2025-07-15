import React from 'react';

const DeleteAccountPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Skinly Hesap Silme Talimatları</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-8">
          Skinly uygulamasında hesabınızı kalıcı olarak silebilir ve tüm verilerinizi kaldırabilirsiniz. 
          Bu işlem geri alınamaz. Aşağıda adımları bulabilirsiniz.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Uygulama İçi Hesap Silme Adımları</h2>
          <p>Hesabınızı silmek için lütfen aşağıdaki adımları izleyin:</p>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li>Uygulamayı açın</li>
            <li>Sağ üstteki profil simgesine dokunun</li>
            <li>&quot;Ayarlar&quot; &gt; &quot;Hesabımı Sil&quot; seçeneğine dokunun</li>
            <li>&quot;Hesabımı Kalıcı Olarak Sil&quot;e basın</li>
          </ol>
          <p className="mt-4">
            İşlem tamamlandıktan sonra verileriniz 7 gün içinde sistemden silinecektir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Silinen Veriler</h2>
          <p>Hesabınız silindiğinde aşağıdaki veriler kalıcı olarak silinir:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Profil bilgileri (isim, e-posta, giriş verileri)</li>
            <li>Cilt analiz geçmişi</li>
            <li>AI öneri kayıtları</li>
            <li>Günlük tutma verileri</li>
          </ul>
          <p className="mt-4 text-sm italic">
            Not: Abonelik bilgileri (ödeme geçmişi vs.) yasal yükümlülükler gereği sistemimizde anonimleştirilerek saklanabilir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">İşlem Süresi ve Geri Alma</h2>
          <p>
            Silme işlemi anında başlatılır, 7 gün içinde kalıcı olarak tamamlanır.
            <br />
            Bu süre zarfında hesabınızı yeniden aktif etmezseniz veriler geri getirilemez.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">İletişim</h2>
          <p>
            Herhangi bir sorunla karşılaşırsanız bizimle şu adresten iletişime geçebilirsiniz:
            <br />
            <a href="mailto:support@skinly.com.tr" className="text-blue-600 hover:text-blue-800">
              📧 support@skinly.com.tr
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default DeleteAccountPage; 