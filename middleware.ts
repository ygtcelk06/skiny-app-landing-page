import { NextRequest, NextResponse } from 'next/server';

// Desteklenen diller
export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];

// Varsayılan dil
export const defaultLocale: Locale = 'en';

// Türkiye IP aralıkları (basitleştirilmiş - production'da daha detaylı olabilir)
// Not: Gerçek uygulamada IP geolocation servisi kullanılabilir
function isTurkeyIP(request: NextRequest): boolean {
  // Accept-Language header'ını kontrol et
  const acceptLanguage = request.headers.get('accept-language') || '';
  
  // Eğer Accept-Language'de 'tr' varsa Türkiye olarak kabul et
  if (acceptLanguage.toLowerCase().includes('tr')) {
    return true;
  }
  
  // Cloudflare/Vercel gibi platformlarda CF-IPCountry header'ı olabilir
  const country = request.headers.get('cf-ipcountry') || 
                  request.headers.get('x-vercel-ip-country') || 
                  request.headers.get('x-country-code');
  
  if (country && country.toUpperCase() === 'TR') {
    return true;
  }
  
  return false;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Statik dosyalar ve API route'ları için middleware'i atla
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|eot)$/)
  ) {
    return NextResponse.next();
  }

  // Dil algılama
  const isTurkey = isTurkeyIP(request);
  const locale: Locale = isTurkey ? 'tr' : 'en';
  
  // Cookie'de saklanmış dil tercihini kontrol et
  const cookieLocale = request.cookies.get('locale')?.value;
  const finalLocale = (cookieLocale && locales.includes(cookieLocale as Locale)) 
    ? (cookieLocale as Locale) 
    : locale;

  // Response oluştur
  const response = NextResponse.next();
  
  // Cookie'ye dil tercihini kaydet
  response.cookies.set('locale', finalLocale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 yıl
  });

  // Request header'ına locale ekle (server component'lerde kullanmak için)
  response.headers.set('x-locale', finalLocale);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};

