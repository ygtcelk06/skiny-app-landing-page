# Gereksinimler Belgesi

## Giriş

Skinly Geri Bildirim ve Oylama Sistemi, Skinly kullanıcılarının uygulama için öneri, fikir ve özellik isteklerini paylaşabilecekleri topluluk odaklı bir platformdur. Diğer kullanıcılar bu önerilere oy vererek en çok talep edilen özelliklerin önceliklendirilmesine yardımcı olabilir. Sistem, mevcut Skinly web platformuna skinly.com.tr/feedback adresinde entegre edilecek ve mevcut Supabase altyapısı ile kullanıcı kimlik doğrulama sistemini kullanacaktır.

## Sözlük

- **Geri_Bildirim_Sistemi**: Skinly kullanıcıları için eksiksiz geri bildirim ve oylama platformu
- **Kullanici**: Geçerli kimlik doğrulama bilgilerine sahip kayıtlı Skinly kullanıcısı
- **Admin**: Geri bildirim durumunu yönetme yetkisine sahip Skinly ekip üyeleri
- **Geri_Bildirim_Ogesi**: Başlık, açıklama ve meta veriler içeren kullanıcı tarafından gönderilen öneri
- **Oy**: Belirli bir geri bildirim öğesi üzerindeki kullanıcının beğeni eylemi
- **Durum**: Geri bildirim öğesinin mevcut durumu (Beklemede, Değerlendiriliyor, Geliştiriliyor, Yayında)
- **Supabase_Veritabani**: Skinly tarafından kullanılan mevcut veritabanı altyapısı

## Gereksinimler

### Gereksinim 1

**Kullanıcı Hikayesi:** Skinly kullanıcısı olarak, yeni özellikler veya iyileştirmeler için fikirlerimi paylaşabilmek amacıyla geri bildirim önerileri göndermek istiyorum.

#### Kabul Kriterleri

1. Kullanici başlık ve açıklama içeren geri bildirim formu gönderdiğinde, Geri_Bildirim_Sistemi Supabase_Veritabani'nda yeni bir Geri_Bildirim_Ogesi oluşturmalıdır
2. Geri_Bildirim_Sistemi geri bildirim göndermeye izin vermeden önce Kullanici kimlik doğrulaması gerektirmelidir
3. Geri_Bildirim_Sistemi başlığın 5 ile 100 karakter arasında olduğunu doğrulamalıdır
4. Geri_Bildirim_Sistemi açıklamanın 10 ile 500 karakter arasında olduğunu doğrulamalıdır
5. Geri_Bildirim_Ogesi oluşturulduğunda, Geri_Bildirim_Sistemi başlangıç durumunu "Beklemede" olarak ayarlamalıdır

### Gereksinim 2

**Kullanıcı Hikayesi:** Skinly kullanıcısı olarak, en önemli özelliklerin önceliklendirilmesine yardımcı olmak için geri bildirim önerilerine oy vermek istiyorum.

#### Kabul Kriterleri

1. Kullanici bir Geri_Bildirim_Ogesi üzerindeki oy butonuna tıkladığında, Geri_Bildirim_Sistemi oyu Supabase_Veritabani'na kaydetmelidir
2. Geri_Bildirim_Sistemi oy göndermeye izin vermeden önce Kullanici kimlik doğrulaması gerektirmelidir
3. Kullanici daha önce bir Geri_Bildirim_Ogesi'ne oy verdiyse, Geri_Bildirim_Sistemi tekrar tıklandığında mevcut oyu kaldırmalıdır
4. Geri_Bildirim_Sistemi bir Kullanici'nin aynı Geri_Bildirim_Ogesi'ne birden fazla kez oy vermesini engellemelidir
5. Oy eklendiğinde veya kaldırıldığında, Geri_Bildirim_Sistemi oy sayısı görüntüsünü 2 saniye içinde güncellemelidir

### Gereksinim 3

**Kullanıcı Hikayesi:** Skinly kullanıcısı olarak, en çok talep edilen özellikleri kolayca bulabilmek için geri bildirim önerilerini popülerlik sırasına göre görmek istiyorum.

#### Kabul Kriterleri

1. Geri_Bildirim_Sistemi Geri_Bildirim_Ogesi'lerini oy sayısına göre azalan sırada görüntülemelidir
2. Geri_Bildirim_Sistemi her Geri_Bildirim_Ogesi için toplam oy sayısını görüntülemelidir
3. Geri_Bildirim_Sistemi her Geri_Bildirim_Ogesi için mevcut durumu görüntülemelidir
4. Geri_Bildirim_Sistemi oylar eklendiğinde veya kaldırıldığında oy sayısı görüntüsünü yenilemelidir
5. Geri_Bildirim_Sistemi sayfa erişiminden itibaren 3 saniye içinde tüm Geri_Bildirim_Ogesi'lerini yüklemeli ve görüntülemelidir

### Gereksinim 4

**Kullanıcı Hikayesi:** Skinly admin'i olarak, geliştirme ilerlemesini kullanıcılara iletebilmek için geri bildirim durumunu yönetmek istiyorum.

#### Kabul Kriterleri

1. Admin bir Geri_Bildirim_Ogesi'ne eriştiğinde, Geri_Bildirim_Sistemi durum yönetimi kontrollerini görüntülemelidir
2. Geri_Bildirim_Sistemi Admin kullanıcılarının durumu "Beklemede", "Değerlendiriliyor", "Geliştiriliyor" veya "Yayında" olarak değiştirmesine izin vermelidir
3. Geri_Bildirim_Sistemi Admin olmayan kullanıcıların Geri_Bildirim_Ogesi durumunu değiştirmesini engellemelidir
4. Admin durumu güncellediğinde, Geri_Bildirim_Sistemi değişikliği anında Supabase_Veritabani'na kaydetmelidir
5. Geri_Bildirim_Sistemi güncellenmiş durumu tüm kullanıcılara 5 saniye içinde görüntülemelidir

### Gereksinim 5

**Kullanıcı Hikayesi:** Skinly kullanıcısı olarak, henüz topluluk ilgisi görmemiş önerilerimi kaldırabilmek için kendi geri bildirim gönderilerimi yönetmek istiyorum.

#### Kabul Kriterleri

1. Kullanici kendi Geri_Bildirim_Ogesi'ni görüntülediğinde ve oy sayısı sıfırsa, Geri_Bildirim_Sistemi silme seçeneğini görüntülemelidir
2. Geri_Bildirim_Sistemi bir veya daha fazla oy almış Geri_Bildirim_Ogesi'lerinin sahibi tarafından silinmesini engellemelidir
3. Geri_Bildirim_Sistemi Kullanici'ların diğer Kullanici'lar tarafından oluşturulan Geri_Bildirim_Ogesi'lerini silmesini engellemelidir
4. Kullanici kendi oysuz Geri_Bildirim_Ogesi'ni sildiğinde, Geri_Bildirim_Sistemi onu Supabase_Veritabani'ndan kaldırmalıdır
5. Geri_Bildirim_Sistemi bir Geri_Bildirim_Ogesi'ni silmeden önce onay gerektirmelidir

### Gereksinim 6

**Kullanıcı Hikayesi:** Skinly admin'i olarak, kaliteli bir geri bildirim ortamı sürdürebilmek için uygunsuz içeriği denetlemek istiyorum.

#### Kabul Kriterleri

1. Admin uygunsuz içerik tespit ettiğinde, Geri_Bildirim_Sistemi herhangi bir Geri_Bildirim_Ogesi'nin silinmesine izin vermelidir
2. Geri_Bildirim_Sistemi Admin bir Geri_Bildirim_Ogesi'ni sildiğinde ilişkili tüm oyları kaldırmalıdır
3. Geri_Bildirim_Sistemi Admin silme eylemlerini zaman damgası ve admin tanımlayıcısı ile kaydetmelidir
4. Geri_Bildirim_Sistemi içerik denetlemeye izin vermeden önce Admin kimlik doğrulaması gerektirmelidir
5. Admin içerik sildiğinde, Geri_Bildirim_Sistemi görüntüyü anında güncellemelidir

### Gereksinim 7

**Kullanıcı Hikayesi:** Skinly kullanıcısı olarak, geri bildirim sistemini herhangi bir cihazda kolayca kullanabilmek için duyarlı ve sezgisel bir arayüz istiyorum.

#### Kabul Kriterleri

1. Geri_Bildirim_Sistemi 320px ile 1920px arasındaki ekran genişliklerinde düzgün görüntülenmelidir
2. Geri_Bildirim_Sistemi Kullanici'lar oy butonları ile etkileşime geçtiğinde görsel geri bildirim sağlamalıdır
3. Geri_Bildirim_Sistemi Geri_Bildirim_Ogesi'lerini net görsel hiyerarşiye sahip bireysel kartlar olarak görüntülemelidir
4. Geri_Bildirim_Sistemi "Yeni Geri Bildirim Ekle" butonunu belirgin ve erişilebilir şekilde konumlandırmalıdır
5. Kullanici oy verdiğinde, Geri_Bildirim_Sistemi oy sayısı değişikliğini 1 saniye içinde animasyonla göstermelidir