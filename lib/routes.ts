import type { Locale } from '@/middleware';
import { getLocaleFromRoute } from '@/lib/i18n-client';

// URL route mapping - Türkçe ve İngilizce route'lar
export const routes = {
  tr: {
    about: '/hakkimizda',
    contact: '/iletisim',
    deleteAccount: '/delete-account',
    kvkk: '/kvkk-aydinlatma-metni',
    consent: '/acik-riza-metni',
    subscription: '/abonelik-sozlesmesi',
    userAgreement: '/kullanici-sozlesmesi',
    privacy: '/gizlilik-politikasi',
    contactUs: '/contact-us',
  },
  en: {
    about: '/about-us',
    contact: '/contact',
    deleteAccount: '/delete-account',
    kvkk: '/privacy-notice',
    consent: '/consent-form',
    subscription: '/subscription-agreement',
    userAgreement: '/user-agreement',
    privacy: '/privacy-policy',
    contactUs: '/contact-us',
  },
} as const;

// Locale'e göre route döndür
export function getRoute(key: keyof typeof routes.tr, locale: Locale): string {
  return routes[locale][key];
}

// Client-side için — getLocaleFromRoute ile aynı dil mantığı (çerez + path + tarayıcı dili)
export function getClientRoute(key: keyof typeof routes.tr): string {
  if (typeof window === 'undefined') {
    return routes.en[key];
  }

  const locale = getLocaleFromRoute();
  return routes[locale][key];
}

