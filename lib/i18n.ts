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

// Server component'lerde kullanılacak fonksiyon
export async function getLocale(): Promise<Locale> {
  // Dynamic import to avoid issues in client components
  const { headers, cookies } = await import('next/headers');
  const headersList = await headers();
  const locale = headersList.get('x-locale') as Locale;
  
  if (locale && locales.includes(locale)) {
    return locale;
  }
  
  // Cookie'den kontrol et
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('locale')?.value;
  
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }
  
  return defaultLocale;
}

// Çeviri fonksiyonu
export async function getTranslations(namespace?: string) {
  const locale = await getLocale();
  const translations = messages[locale];
  
  if (!namespace) {
    return translations;
  }
  
  // Nested namespace desteği (örn: 'legal.privacy')
  const keys = namespace.split('.');
  let result: any = translations;
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      console.warn(`Translation key not found: ${namespace}`);
      return {};
    }
  }
  
  return result;
}

// Client component'ler için ayrı dosyaya taşındı: lib/i18n-client.ts
// Bu dosyayı client component'lerde kullanmayın, lib/i18n-client.ts kullanın

