'use client';

import { useState, useEffect } from 'react';
import AnimatedSection from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getClientTranslations } from '@/lib/i18n-client';

export default function Contact() {
  const [translations, setTranslations] = useState<any>(null);

  useEffect(() => {
    // /contact route'u İngilizce olduğu için 'en' locale zorla
    const t = getClientTranslations('legal.contact', 'en');
    setTranslations({
      badge: t('badge'),
      heading: t('heading'),
      description: t('description'),
      content: t('content'),
      email: t('email'),
      responseNote: t('responseNote'),
      supportText: t('supportText'),
      contactFormButton: t('contactFormButton'),
    });
  }, []);

  if (!translations) {
    return (
      <div className="min-h-screen bg-[#F9F9F9]">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-8"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F9F9F9]">
      <AnimatedSection className="container-padding py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">{translations.badge}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-[#323232] mb-8">
              {translations.heading}
            </h1>
            <p className="text-xl text-gray-600">
              {translations.description}
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
            <div className="space-y-8 text-center">
              <p className="text-lg text-gray-600">
                {translations.content}
              </p>

              <div className="py-8">
                <div className="inline-flex items-center space-x-3 text-xl font-medium text-[#323232]">
                  <span>📩</span>
                  <a href={`mailto:${translations.email}`} className="hover:text-black transition-colors">
                    {translations.email}
                  </a>
                </div>
              </div>

              <p className="text-gray-600">
                {translations.responseNote}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              {translations.supportText}
            </p>
            <Link 
              href="/contact-us"
              className="inline-block bg-[#323232] text-white px-8 py-4 rounded-full hover:bg-black transition-colors"
            >
              {translations.contactFormButton}
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}

