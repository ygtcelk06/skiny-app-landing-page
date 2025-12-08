"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/animated-section";
import { staggerContainer, staggerItem } from "@/lib/variants";
import { motion, Variants } from "framer-motion";
import { features } from "@/lib/features-data";
import Image from "next/image";
import { getClientTranslations } from "@/lib/i18n-client";
import { getLocalizedImage } from "@/lib/image-utils";
import type { Locale } from "@/middleware";

export default function FeaturesSection() {
  const [translations, setTranslations] = useState<{
    badge: string;
    title: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    features: any;
  } | null>(null);
  const [locale, setLocale] = useState<Locale>('tr');

  useEffect(() => {
    const t = getClientTranslations('features');
    setTranslations({
      badge: t('badge'),
      title: t('title'),
      titleHighlight: t('titleHighlight'),
      titleEnd: t('titleEnd'),
      description: t('description'),
      features: {
        scanFace: {
          title: t('scanFace.title'),
          description: t('scanFace.description'),
          points: {
            camera: t('scanFace.points.camera'),
            target: t('scanFace.points.target'),
            calendar: t('scanFace.points.calendar'),
          },
        },
        personalizedScore: {
          title: t('personalizedScore.title'),
          description: t('personalizedScore.description'),
          points: {
            track: t('personalizedScore.points.track'),
            chart: t('personalizedScore.points.chart'),
            info: t('personalizedScore.points.info'),
          },
        },
        personalizedRoutine: {
          title: t('personalizedRoutine.title'),
          description: t('personalizedRoutine.description'),
          points: {
            user: t('personalizedRoutine.points.user'),
            star: t('personalizedRoutine.points.star'),
            handshake: t('personalizedRoutine.points.handshake'),
          },
        },
      },
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
    return <div className="min-h-[400px]"></div>;
  }

  // Features data'yı çevirilerle birleştir
  const translatedFeatures = features.map((feature) => {
    let featureData;
    let pointKeys: string[] = [];
    
    if (feature.id === 'ai-analysis') {
      featureData = translations.features.scanFace;
      pointKeys = ['camera', 'target', 'calendar'];
    } else if (feature.id === 'personalized-score') {
      featureData = translations.features.personalizedScore;
      pointKeys = ['track', 'chart', 'info'];
    } else {
      featureData = translations.features.personalizedRoutine;
      pointKeys = ['user', 'star', 'handshake'];
    }
    
    return {
      ...feature,
      title: featureData.title,
      description: featureData.description,
      points: feature.points.map((point, pointIndex) => ({
        ...point,
        text: featureData.points[pointKeys[pointIndex]] || point.text,
      })),
    };
  });
  return (
    <AnimatedSection
      id="features"
      className="bg-white py-12  md:py-16 lg:py-24"
    >
      <div className="container-padding">
        <div className="text-center space-y-4 mb-20">
          <Badge className="bg-[#1BCEE0]/10 text-[#1E63A3] font-medium border-0">
            {translations.badge}
          </Badge>
          <h2 className="text-4xl font-bold font-sans text-[#323232]">
            {translations.title} <br />{" "}
            <span className="text-gradient-primary">
              {translations.titleHighlight}
            </span>{" "}
            {translations.titleEnd}
          </h2>
          <p className="text-xl text-[#323232]/70 max-w-2xl mx-auto font-sans">
            {translations.description}
          </p>
        </div>

        <motion.div
          className="space-y-12 md:space-y-28 "
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          animate="show"
        >
          {translatedFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={staggerItem() as Variants}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center `}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-[#323232] font-sans flex items-center gap-3">
                    <span
                      className="text-2xl md:text-3xl w-10 h-10 p-4 md:p-8 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: feature.iconBgColor,
                        color: feature.iconColor,
                      }}
                    >
                      {feature.number}
                    </span>
                    {feature.title}
                  </h3>
                  <p className="text-lg text-[#323232]/70 font-sans leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Feature Points */}
                <div className=" space-y-4 md:space-y-6">
                  {feature.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start gap-4">
                      <div
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: feature.iconBgColor }}
                      >
                        <point.icon
                          className="h-4 w-4 md:w-5 md:h-5"
                          style={{ color: feature.iconColor }}
                        />
                      </div>
                      <p className="text-[#323232]/80 font-sans leading-relaxed pt-2 font-semibold">
                        {point.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 relative">
                <div className="relative max-w-lg">
                  <Image
                    src={getLocalizedImage(feature.image || "/placeholder.svg", locale)}
                    alt={feature.title}
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-3xl shadow-md"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
