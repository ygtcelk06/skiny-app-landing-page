"use client"

import { useState, useEffect } from "react"
import Link from "next/link";
import Image from "next/image";
import { getClientTranslations } from "@/lib/i18n-client";
import { getLocalizedImage } from "@/lib/image-utils";
import type { Locale } from "@/middleware";

export default function CTASection() {
  const [translations, setTranslations] = useState<{ title: string } | null>(null);
  const [locale, setLocale] = useState<Locale>('tr');

  useEffect(() => {
    const t = getClientTranslations('cta');
    setTranslations({
      title: t('title'),
    });

    // Locale'i belirle
    const cookies = document.cookie.split(';');
    const localeCookie = cookies.find(c => c.trim().startsWith('locale='));
    const cookieLocale = localeCookie?.split('=')[1]?.trim();
    
    if (cookieLocale === 'en' || cookieLocale === 'tr') {
      setLocale(cookieLocale as Locale);
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
      
      setLocale(englishRoutes.includes(pathname) ? 'en' : 'tr');
    }
  }, []);

  if (!translations) {
    return <div className="min-h-[200px]"></div>;
  }
  return (
    <section className="pt-10 md:pt-20 relative bg-gradient-to-br from-[#C838F8]/60 via-[#6B88EB]/30 to-[#1BCEE0]/60">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          {/* Left Side - Text and Badges */}
          <div className="space-y-6 lg:space-y-8 pb-12 lg:pb-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] leading-tight max-w-xl">
              <span className="inline-block text-left">
              {translations.title}
              </span>
            </h2>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <Link href="https://apps.apple.com/tr/app/skinly-ai-cilt-bak%C4%B1m-asistan%C4%B1/id6749868115?l=tr" target="_blank" className="inline-block w-[180px]">
                <Image
                  src="/images/store-btn.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={53}
                  className="h-[53px] w-auto hover:opacity-90 transition-opacity"
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.skinly.app" target="_blank" className="inline-block w-[180px]">
                <Image
                  src="/images/google-btn.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={53}
                  className="h-[53px] w-auto hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
          </div>

          {/* Right Side - Phone Mockups */}
          <div className="relative flex justify-end">
            <div className="relative w-full max-w-[600px]">
              <Image
                src={getLocalizedImage("/images/footer-img.png", locale)}
                alt="Klaris App - Track Your Skincare Routine"
                width={600}
                height={500}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
