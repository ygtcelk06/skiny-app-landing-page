import type { Locale } from '@/middleware';

/**
 * Locale'e göre görsel yolu döndürür
 * Eğer İngilizce için özel görsel varsa onu, yoksa varsayılan görseli döndürür
 */
export function getLocalizedImage(imagePath: string, locale?: Locale): string {
  if (typeof window === 'undefined') {
    // Server-side: locale'i route'dan al
    return imagePath;
  }

  // Client-side: locale'i belirle
  if (!locale) {
    const cookies = document.cookie.split(';');
    const localeCookie = cookies.find(c => c.trim().startsWith('locale='));
    const cookieLocale = localeCookie?.split('=')[1]?.trim();
    
    if (cookieLocale === 'en' || cookieLocale === 'tr') {
      locale = cookieLocale as Locale;
    } else {
      // Route'a göre locale belirle
      const pathname = window.location.pathname;
      const englishRoutes = [
        '/about-us',
        '/contact',
        '/privacy-policy',
        '/user-agreement',
        '/subscription-agreement',
        '/privacy-notice',
        '/consent-form',
        '/contact-us',
      ];
      
      if (englishRoutes.includes(pathname)) {
        locale = 'en';
      } else {
        locale = 'tr';
      }
    }
  }

  // Eğer İngilizce ise ve görsel /images/ ile başlıyorsa, /images/en/ klasörünü kontrol et
  if (locale === 'en' && imagePath.startsWith('/images/')) {
    const imageName = imagePath.replace('/images/', '');
    const englishImagePath = `/images/en/${imageName}`;
    
    // Görselin var olup olmadığını kontrol etmek için bir test yapabiliriz
    // Şimdilik direkt İngilizce yolunu döndürelim, eğer yoksa fallback yapılabilir
    return englishImagePath;
  }

  return imagePath;
}

