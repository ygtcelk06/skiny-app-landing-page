import type { Locale } from '@/middleware';

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

// Client-side için
export function getClientRoute(key: keyof typeof routes.tr): string {
  if (typeof window === 'undefined') {
    return routes.en[key];
  }
  
  const cookies = document.cookie.split(';');
  const localeCookie = cookies.find(c => c.trim().startsWith('locale='));
  const locale = localeCookie?.split('=')[1]?.trim();
  
  if (locale === 'tr') {
    return routes.tr[key];
  }
  
  return routes.en[key];
}

