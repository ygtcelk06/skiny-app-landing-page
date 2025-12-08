'use client';

import { useState, useEffect } from 'react';
import AnimatedSection from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { getClientTranslations } from '@/lib/i18n-client';

export default function AboutUs() {
  const [translations, setTranslations] = useState<any>(null);

  useEffect(() => {
    // /about-us route'u İngilizce olduğu için 'en' locale zorla
    const t = getClientTranslations('legal.about', 'en');
    setTranslations({
      badge: t('badge'),
      heading: t('heading'),
      description: t('description'),
      scientificApproach: {
        title: t('scientificApproach.title'),
        content: t('scientificApproach.content'),
      },
      mission: {
        title: t('mission.title'),
        content: t('mission.content'),
        values: {
          accessible: {
            title: t('mission.values.accessible.title'),
            description: t('mission.values.accessible.description'),
          },
          reliable: {
            title: t('mission.values.reliable.title'),
            description: t('mission.values.reliable.description'),
          },
          personalized: {
            title: t('mission.values.personalized.title'),
            description: t('mission.values.personalized.description'),
          },
        },
      },
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
      {/* Hero Section */}
      <AnimatedSection className="container-padding py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="mb-6">{translations.badge}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-[#323232] mb-8">
            {translations.heading}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {translations.description}
          </p>
        </div>
      </AnimatedSection>

      {/* Content Section */}
      <AnimatedSection className="container-padding py-16 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#323232]">
              {translations.scientificApproach.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {translations.scientificApproach.content}
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/images/model.jpg"
              alt="Skinly AI Analysis"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Mission Section */}
      <AnimatedSection className="container-padding py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-[#323232]">
            {translations.mission.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {translations.mission.content}
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{translations.mission.values.accessible.title}</h3>
              <p className="text-gray-600">{translations.mission.values.accessible.description}</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{translations.mission.values.reliable.title}</h3>
              <p className="text-gray-600">{translations.mission.values.reliable.description}</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{translations.mission.values.personalized.title}</h3>
              <p className="text-gray-600">{translations.mission.values.personalized.description}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}

