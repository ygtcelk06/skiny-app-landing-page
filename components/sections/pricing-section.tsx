"use client";

import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animated-section";
import AnimatedButton from "@/components/animated-button";
import Link from "next/link";
import { useState } from "react";

const freePlanFeatures = [
  "Uygulamanın tüm özelliklerini dene",
  "1 kez Standart yüz analizi hakkı",
  "Yüzeysel analiz – sadece temel bilgiler",
  "Cilt skoru, yaş, gözenek, leke gibi detaylar yok",
  "Uygulamayı tanı, kendin gör – taahhüt yok!"
];

const premiumPlanFeatures = [
  "Haftalık düzenli Pro analiz",
  "Pro yüz analizi – gelişmiş yapay zeka ile detaylı tarama",
  "Cilt yaşı, skoru, gözenek, sivilce, leke, kırışıklık, parlaklık vb. değerlendirmeleri",
  "Cilt ihtiyaçlarına göre ürün ve içerik önerileri",
  "Sabah–akşam kişiselleştirilmiş cilt bakım rutini",
  "Zamanla değişimleri karşılaştırma ve iyileşme takibi",
  "Öncelikli destek"
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  const premiumPrice = isYearly ? "₺13,46" : "₺29,99";
  const premiumPeriod = isYearly ? "/hafta" : "/hafta";
  const yearlyBillingInfo = isYearly ? "Yıllık ₺699 olarak faturalandırılır" : "";
  const originalPrice = isYearly ? "₺1.560" : "";
  const discountedPrice = isYearly ? "₺699" : "";
  const savingsText = isYearly ? "%55 tasarruf edersin!" : "";

  return (
    <AnimatedSection
      id="pricing"
      className="container-padding py-10 md:py-20 bg-[#DBEAFE]/15 rounded-3xl"
    >
      <div className="text-center space-y-4 mb-12">
        <Badge className="bg-[#323232] text-white font-medium border-0 px-6 py-2 rounded-full">
          Fiyatlandırma
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold font-sans text-[#323232]">
          Her İhtiyaca Uygun Basit Planlar
        </h2>
        <p className="text-xl text-[#323232]/70 max-w-2xl mx-auto font-sans">
        İster küçük bir başlangıç yap, ister tüm özellikleri dene — senin için uygun bir plan mutlaka var.


        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free Plan */}
        <Card className="relative p-8 border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover-lift bg-white">
          <CardContent className="p-0 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-sans text-[#323232]">
                Ücretsiz Plan
              </h3>
              <p className="font-sans text-[#323232]/70">
                Uygulamayı keşfetmen için tek seferlik analiz hakkı!
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline space-x-2">
                <span className="text-5xl font-bold font-sans text-[#323232]">
                  ₺0
                </span>
                <span className="text-lg font-sans text-[#323232]/60">
                  /tek seferlik
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {freePlanFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full flex items-center justify-center bg-[#1E63A3]/10 mt-1">
                    <Check className="w-3.5 h-3.5 text-[#1E63A3] stroke-[2.5] stroke-round" />
                  </div>
                  <span className="font-sans text-[#323232]/80 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <AnimatedButton className="w-full font-semibold py-3 gradient-secondary text-white hover:opacity-90">
                <Link href="https://apps.apple.com/us/app/new-skin-scan-stop-wrinkles/id6739453891" target="_blank">
                  Hemen Başla
                </Link>
              </AnimatedButton>
            </div>
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
                Haftalık
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  isYearly ? 'bg-[#C838F8] text-white' : 'text-[#323232]'
                }`}
              >
                Yıllık
              </button>
            </div>
          </div>

          {/* Popular Badge */}
          {isYearly && (
            <div className="absolute -top-4 right-8">
              <Badge className="bg-[#1BCEE0] text-white font-medium border-0 px-4 py-1">
                En Popüler
              </Badge>
            </div>
          )}

          <CardContent className="p-0 space-y-6 mt-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-sans text-white">
                Premium Plan
              </h3>
              <p className="font-sans text-white/90">
                Gerçek sonuçlar, derinlemesine analizler burada.
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
              {premiumPlanFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full flex items-center justify-center bg-white/20 mt-1">
                    <Check className="w-3.5 h-3.5 text-white stroke-[2.5] stroke-round" />
                  </div>
                  <span className="font-sans text-white/90 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <AnimatedButton className="w-full font-semibold py-3 bg-white text-[#C838F8] hover:bg-white/90">
                <Link href="https://apps.apple.com/us/app/new-skin-scan-stop-wrinkles/id6739453891" target="_blank">
                  Premium'a Geç
                </Link>
              </AnimatedButton>
            </div>
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
            <span className="font-sans">Kurulum ücreti yok</span>
          </span>
          <span className="flex items-center gap-2 text-[#323232]/70">
            <div className="min-w-4 h-4 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-[#1BCEE0] stroke-[2.5] stroke-round" />
            </div>
            <span className="font-sans">İstediğin zaman iptal et</span>
          </span>
          <span className="flex items-center gap-2 text-[#323232]/70">
            <div className="min-w-4 h-4 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-[#1BCEE0] stroke-[2.5] stroke-round" />
            </div>
            <span className="font-sans">7/24 destek</span>
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
}
