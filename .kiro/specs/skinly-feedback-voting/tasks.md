# Görev Listesi

- [x] 1. Veritabanı yapısını oluştur ve güvenlik politikalarını ayarla




  - Supabase'de feedbacks, votes ve admin_actions tablolarını oluştur
  - Row Level Security (RLS) politikalarını uygula
  - Gerekli indeksleri ve view'ları oluştur
  - _Gereksinimler: 1.1, 2.1, 4.4, 5.4, 6.2_

- [x] 2. Token doğrulama ve erişim kontrolü sistemini implement et



  - [x] 2.1 JWT token doğrulama middleware'ini oluştur


    - Token validation fonksiyonunu yaz
    - Token süresi ve kullanıcı aktiflik kontrollerini ekle
    - _Gereksinimler: 1.2, 2.2, 4.4, 6.4_

  - [x] 2.2 Server-side erişim kontrolü implement et


    - getServerSideProps fonksiyonunu oluştur
    - Token yoksa veya geçersizse hata döndür
    - _Gereksinimler: 1.2, 2.2_

  - [x] 2.3 AccessGuard bileşenini oluştur


    - Client-side erişim kontrolü bileşenini yaz
    - Yetkisiz erişim için hata sayfasını tasarla
    - _Gereksinimler: 1.2, 2.2_






- [x] 3. Temel UI bileşenlerini oluştur

  - [x] 3.1 FeedbackCard bileşenini implement et

    - Geri bildirim kartı tasarımını oluştur
    - Responsive tasarım uygula
    - Durum rozeti ve oy butonunu entegre et


    - _Gereksinimler: 3.1, 3.2, 3.3, 7.3_

  - [x] 3.2 VoteButton bileşenini oluştur

    - Oy verme butonunu tasarla (yukarı ok ikonu)
    - Toggle işlevselliği ekle
    - Animasyonlu sayı değişimi implement et


    - _Gereksinimler: 2.1, 2.3, 2.5, 7.2, 7.5_

  - [x] 3.3 StatusBadge bileşenini implement et

    - Durum rozetlerini tasarla (Beklemede, Değerlendiriliyor, vb.)
    - Renk kodlaması uygula
    - _Gereksinimler: 3.3, 4.2_

- [ ] 4. Geri bildirim listeleme ve görüntüleme sistemini oluştur
  - [ ] 4.1 Feedback listesi API endpoint'ini oluştur
    - Supabase'den geri bildirimleri çek
    - Oy sayısına göre sıralama uygula
    - Kullanıcının oy durumunu kontrol et
    - _Gereksinimler: 3.1, 3.2, 3.5_

  - [ ] 4.2 FeedbackList bileşenini implement et
    - Geri bildirim kartlarını listele
    - Loading durumu ekle
    - Boş liste durumunu handle et
    - _Gereksinimler: 3.1, 3.5_

  - [ ] 4.3 Ana feedback sayfasını oluştur
    - /feedback sayfasını implement et
    - AccessGuard ile sarmalama
    - Server-side data fetching ekle
    - _Gereksinimler: 3.5, 7.1_

- [x] 5. Geri bildirim ekleme sistemini implement et



  - [x] 5.1 AddFeedbackModal bileşenini oluştur


    - Modal tasarımını implement et
    - Form alanlarını ekle (başlık, açıklama)
    - Karakter sayacı ekle
    - _Gereksinimler: 1.3, 1.4, 7.4_

  - [x] 5.2 Form validasyonu implement et

    - Zod schema oluştur
    - Client-side validasyon ekle
    - Hata mesajlarını göster
    - _Gereksinimler: 1.3, 1.4_

  - [x] 5.3 Geri bildirim ekleme API'sini oluştur

    - Supabase'e yeni geri bildirim kaydetme
    - Server-side validasyon ekle
    - Başlangıç durumunu "Beklemede" olarak ayarla
    - _Gereksinimler: 1.1, 1.5_

- [-] 6. Oylama sistemini implement et

  - [x] 6.1 Oy verme API endpoint'ini oluştur


    - Vote ekleme/kaldırma fonksiyonunu yaz
    - Çift oylama kontrolü ekle
    - Oy sayısını güncelle
    - _Gereksinimler: 2.1, 2.3, 2.4_

  - [x] 6.2 VoteButton etkileşimlerini implement et


    - onClick handler'ını ekle
    - Loading durumu göster
    - Optimistic updates uygula
    - _Gereksinimler: 2.5, 7.2_

  - [ ] 6.3 Oylama sistemi için unit testler yaz
    - Vote toggle fonksiyonunu test et
    - Çift oylama engellemesini test et
    - _Gereksinimler: 2.3, 2.4_

- [ ] 7. Admin durum yönetimi sistemini oluştur
  - [ ] 7.1 Admin kontrollerini implement et
    - Admin yetkisi kontrolü ekle
    - Durum değiştirme dropdown'ını oluştur
    - Sadece adminlere göster
    - _Gereksinimler: 4.1, 4.2, 4.3_

  - [ ] 7.2 Durum güncelleme API'sini oluştur
    - Status update fonksiyonunu yaz
    - Admin yetkisi doğrulaması ekle
    - Admin action log'u kaydet
    - _Gereksinimler: 4.4, 6.3_

  - [ ] 7.3 Real-time durum güncellemelerini implement et
    - Supabase realtime subscription ekle
    - Durum değişikliklerini canlı göster
    - _Gereksinimler: 4.5_

- [ ] 8. Silme ve moderasyon sistemini implement et
  - [ ] 8.1 Kullanıcı silme fonksiyonunu oluştur
    - Sadece oysuz geri bildirimleri silme
    - Sahiplik kontrolü ekle
    - Onay modalı ekle
    - _Gereksinimler: 5.1, 5.2, 5.5_

  - [ ] 8.2 Admin moderasyon sistemini implement et
    - Admin için herhangi bir geri bildirim silme
    - Cascade silme (oylarla birlikte)
    - Admin action log'u kaydet
    - _Gereksinimler: 6.1, 6.2, 6.3, 6.5_

  - [ ] 8.3 Silme API endpoint'lerini oluştur
    - User delete ve admin delete fonksiyonları
    - Yetki kontrollerini implement et
    - _Gereksinimler: 5.3, 5.4, 6.2_

- [ ] 9. Responsive tasarım ve animasyonları implement et
  - [ ] 9.1 Mobil responsive tasarımı uygula
    - 320px-1920px arası ekran desteği
    - Grid layout'u responsive yap
    - Touch-friendly butonlar ekle
    - _Gereksinimler: 7.1_

  - [ ] 9.2 Framer Motion animasyonlarını ekle
    - Kart giriş/çıkış animasyonları
    - Oy butonu hover/click animasyonları
    - Sayı değişimi animasyonları
    - _Gereksinimler: 7.2, 7.5_

  - [ ] 9.3 Loading durumları ve skeleton UI ekle
    - Sayfa yüklenirken skeleton göster
    - Button loading durumları
    - _Gereksinimler: 3.5_

- [ ] 10. Hata yönetimi ve kullanıcı deneyimi iyileştirmeleri
  - [ ] 10.1 Kapsamlı hata yönetimi implement et
    - useErrorHandler hook'u oluştur
    - Toast bildirimleri ekle
    - Network hata handling
    - _Gereksinimler: Tüm gereksinimler için hata yönetimi_

  - [ ] 10.2 Erişilebilirlik (A11y) özelliklerini ekle
    - ARIA etiketleri ekle
    - Klavye navigasyonu implement et
    - Screen reader desteği
    - _Gereksinimler: 7.2, 7.4_

  - [ ] 10.3 Performance optimizasyonları uygula
    - React.memo kullanımı
    - useMemo ve useCallback optimizasyonları
    - Lazy loading implement et

- [ ] 11. Entegrasyon ve son testler
  - [ ] 11.1 End-to-end testler yaz
    - Kullanıcı akış testleri
    - Oylama sistemi testleri
    - Admin işlevleri testleri

  - [ ] 11.2 Production deployment hazırlığı
    - Environment variables ayarla
    - Vercel deployment konfigürasyonu
    - SSL ve güvenlik ayarları

  - [ ] 11.3 Mobil uygulama entegrasyon testleri
    - Token generation testleri
    - Cross-platform uyumluluk
    - In-app browser testleri