"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animated-section";
import AnimatedButton from "@/components/animated-button";
import Link from "next/link";
import { getClientTranslations } from "@/lib/i18n-client";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);
  const [translations, setTranslations] = useState<any>(null);

  useEffect(() => {
    const t = getClientTranslations('pricing');
    setTranslations({
      badge: t('badge'),
      title: t('title'),
      description: t('description'),
      free: {
        title: t('free.title'),
        description: t('free.description'),
        price: t('free.price'),
        period: t('free.period'),
        features: t('free.features') as string[],
      },
      premium: {
        title: t('premium.title'),
        description: t('premium.description'),
        weekly: t('premium.weekly'),
        yearly: t('premium.yearly'),
        popular: t('premium.popular'),
        priceWeekly: t('premium.priceWeekly'),
        priceYearly: t('premium.priceYearly'),
        period: t('premium.period'),
        yearlyBilling: t('premium.yearlyBilling'),
        originalPrice: t('premium.originalPrice'),
        discountedPrice: t('premium.discountedPrice'),
        savings: t('premium.savings'),
        features: t('premium.features') as string[],
      },
      additionalInfo: {
        noSetupFee: t('additionalInfo.noSetupFee'),
        cancelAnytime: t('additionalInfo.cancelAnytime'),
        support24: t('additionalInfo.support24'),
      },
    });
  }, []);

  if (!translations) {
    return <div className="min-h-[400px]"></div>;
  }

  // Haftalık fiyatı sayısal değere çevir (currency symbol'ü kaldır)
  const weeklyPriceNum = parseFloat(translations.premium.priceWeekly.replace(/[^0-9.]/g, ''));
  const yearlyPriceNum = parseFloat(translations.premium.priceYearly.replace(/[^0-9.]/g, ''));
  const currencySymbol = translations.premium.priceWeekly.match(/[^\d.,]/)?.[0] || '$';
  
  // Haftalık * 52 hesapla (indirim hesaplaması için)
  const weeklyTimes52 = weeklyPriceNum * 52;
  const savingsAmount = weeklyTimes52 - yearlyPriceNum;
  const savingsPercentage = Math.round((savingsAmount / weeklyTimes52) * 100);

  // Yıllık seçildiğinde haftalık eşdeğeri göster, değilse direkt yıllık fiyat
  const premiumPrice = isYearly 
    ? `${currencySymbol}${(yearlyPriceNum / 52).toFixed(2)}` 
    : translations.premium.priceWeekly;
  const premiumPeriod = translations.premium.period;
  const yearlyBillingInfo = isYearly ? translations.premium.yearlyBilling : "";
  const originalPrice = isYearly ? `${currencySymbol}${weeklyTimes52.toFixed(2)}` : "";
  const discountedPrice = isYearly ? translations.premium.discountedPrice : "";
  const savingsText = isYearly ? `Save ${savingsPercentage}%!` : "";

  return (
    <AnimatedSection
      id="pricing"
      className="container-padding py-10 md:py-20 bg-[#DBEAFE]/15 rounded-3xl"
    >
      <div className="text-center space-y-4 mb-12">
        <Badge className="bg-[#323232] text-white font-medium border-0 px-6 py-2 rounded-full">
          {translations.badge}
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold font-sans text-[#323232]">
          {translations.title}
        </h2>
        <p className="text-xl text-[#323232]/70 max-w-2xl mx-auto font-sans">
          {translations.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free Plan */}
        <Card className="relative p-8 border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover-lift bg-white">
          <CardContent className="p-0 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-sans text-[#323232]">
                {translations.free.title}
              </h3>
              <p className="font-sans text-[#323232]/70">
                {translations.free.description}
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline space-x-2">
                <span className="text-5xl font-bold font-sans text-[#323232]">
                  {translations.free.price}
                </span>
                <span className="text-lg font-sans text-[#323232]/60">
                  {translations.free.period}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {translations.free.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full flex items-center justify-center bg-[#1E63A3]/10 mt-1">
                    <Check className="w-3.5 h-3.5 text-[#1E63A3] stroke-[2.5] stroke-round" />
                  </div>
                  <span className="font-sans text-[#323232]/80 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            {/* Pricing CTAs kaldırıldı: bu bölümden yönlendirme yapılmıyor */}
          </CardContent>
        </Card>

        {/* Premium Plan */}
        <Card className="relative p-8 border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover-lift bg-gradient-to-br from-[#C838F8] to-[#6B88EB] text-white">
          {/* Toggle Switch */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md p-1">
            <div className="flex items-center space-x-2 text-sm">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  !isYearly ? 'bg-[#C838F8] text-white' : 'text-[#323232]'
                }`}
              >
                {translations.premium.weekly}
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  isYearly ? 'bg-[#C838F8] text-white' : 'text-[#323232]'
                }`}
              >
                {translations.premium.yearly}
              </button>
            </div>
          </div>

          {/* Popular Badge */}
          {isYearly && (
            <div className="absolute -top-4 right-8">
              <Badge className="bg-[#1BCEE0] text-white font-medium border-0 px-4 py-1">
                {translations.premium.popular}
              </Badge>
            </div>
          )}

          <CardContent className="p-0 space-y-6 mt-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-sans text-white">
                {translations.premium.title}
              </h3>
              <p className="font-sans text-white/90">
                {translations.premium.description}
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-x-2">
                <span className="text-5xl font-bold font-sans text-white">
                  {premiumPrice}
                </span>
                <span className="text-lg font-sans text-white/80">
                  {premiumPeriod}
                </span>
              </div>
              {isYearly && (
                <div className="space-y-3">
                  <p className="text-sm text-white/80 font-sans">
                    {yearlyBillingInfo}
                  </p>
                  <div className="flex items-center gap-x-2">
                    <span className="text-lg text-white/60 line-through font-sans">
                      {originalPrice}
                    </span>
                    <span className="text-xl font-bold text-white font-sans">
                      {discountedPrice}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white bg-white/20 inline-block px-3 py-1 rounded-full">
                    {savingsText}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {translations.premium.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full flex items-center justify-center bg-white/20 mt-1">
                    <Check className="w-3.5 h-3.5 text-white stroke-[2.5] stroke-round" />
                  </div>
                  <span className="font-sans text-white/90 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            {/* Pricing CTAs kaldırıldı: bu bölümden yönlendirme yapılmıyor */}
          </CardContent>
        </Card>
      </div>

      {/* Additional Info */}
      <div className="text-center mt-12 space-y-4">
        <p className="text-[#323232]/60 font-sans">
          
        </p>
        <div className="flex flex-col gap-y-3 items-center md:flex-row md:justify-center space-x-8 text-sm">
          <span className="flex items-center gap-2 text-[#323232]/70">
            <div className="min-w-4 h-4 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-[#1BCEE0] stroke-[2.5] stroke-round" />
            </div>
            <span className="font-sans">{translations.additionalInfo.noSetupFee}</span>
          </span>
          <span className="flex items-center gap-2 text-[#323232]/70">
            <div className="min-w-4 h-4 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-[#1BCEE0] stroke-[2.5] stroke-round" />
            </div>
            <span className="font-sans">{translations.additionalInfo.cancelAnytime}</span>
          </span>
          <span className="flex items-center gap-2 text-[#323232]/70">
            <div className="min-w-4 h-4 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-[#1BCEE0] stroke-[2.5] stroke-round" />
            </div>
            <span className="font-sans">{translations.additionalInfo.support24}</span>
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
}
