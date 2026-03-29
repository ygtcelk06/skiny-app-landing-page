import type { Locale } from '@/middleware';

// Çeviri dosyalarını import et
import tr from '@/messages/tr.json';
import en from '@/messages/en.json';

export const locales = ['tr', 'en'] as const;
export const defaultLocale: Locale = 'en';

const messages = {
  tr,
  en,
};

// Route'a göre locale belirle
export function getLocaleFromRoute(): Locale {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }
  
  let pathname = window.location.pathname;
  if (pathname.length > 1 && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  // İngilizce route'lar
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
  
  // Türkçe route'lar
  const turkishRoutes = [
    '/hakkimizda',
    '/iletisim',
    '/gizlilik-politikasi',
    '/kullanici-sozlesmesi',
    '/abonelik-sozlesmesi',
    '/kvkk-aydinlatma-metni',
    '/acik-riza-metni',
  ];
  
  if (englishRoutes.includes(pathname)) {
    return 'en';
  }
  
  if (turkishRoutes.includes(pathname)) {
    return 'tr';
  }
  
  // Route'a göre belirlenemezse cookie'den al
  const cookies = document.cookie.split(';');
  const localeCookie = cookies.find(c => c.trim().startsWith('locale='));
  const locale = localeCookie?.split('=')[1]?.trim();
  
  if (locale && locales.includes(locale as Locale)) {
    return locale as Locale;
  }
  
  // Accept-Language header'ını kontrol et
  const acceptLanguage = navigator.language || navigator.languages?.[0] || '';
  if (acceptLanguage.toLowerCase().includes('tr')) {
    return 'tr';
  }
  
  return defaultLocale;
}

// Client component'lerde kullanılacak fonksiyon
export function getClientTranslations(namespace?: string, forceLocale?: Locale) {
  if (typeof window === 'undefined') {
    return (key: string) => key;
  }
  
  // Locale'i belirle: önce forceLocale, sonra route'a göre, sonra cookie'den
  const locale = forceLocale || getLocaleFromRoute();
  const translations = messages[locale];
  
  if (!namespace) {
    return (key: string) => {
      const keys = key.split('.');
      let result: any = translations;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          console.warn(`Translation key not found: ${key}`);
          return key;
        }
      }
      
      return typeof result === 'string' ? result : key;
    };
  }
  
  // Nested namespace desteği
  if (!namespace || typeof namespace !== 'string') {
    return (key: string) => key || '';
  }
  
  const keys = namespace.split('.');
  let namespaceTranslations: any = translations;
  
  for (const key of keys) {
    if (namespaceTranslations && typeof namespaceTranslations === 'object' && key in namespaceTranslations) {
      namespaceTranslations = namespaceTranslations[key];
    } else {
      console.warn(`Translation namespace not found: ${namespace}`);
      namespaceTranslations = {};
    }
  }
  
  const translationFn = (key: string | null | undefined) => {
    if (!key || typeof key !== 'string') {
      console.warn(`Translation key is null or undefined: ${namespace}`);
      return key || '';
    }
    
    const keyParts = key.split('.');
    let result: any = namespaceTranslations;
    
    for (const k of keyParts) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${namespace}.${key}`);
        return key;
      }
    }
    
    // String, array veya object döndürebilir
    return result;
  };
  
  // Translation objesini de direkt erişim için ekle
  (translationFn as any).__translations = namespaceTranslations;
  
  return translationFn;
}

