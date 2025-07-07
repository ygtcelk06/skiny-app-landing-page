import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animated-section";
import AnimatedButton from "@/components/animated-button";
import Link from "next/link";

const plans = [
  {
    name: "Aylık Plan",
    description:
      "Kişisel cilt bakımı takibi yapmak isteyen kullanıcılar için ideal.",
    price: "₺69",
    period: "/ay",
    features: [
      "En fazla 10 sayfa analizi",
      "Temel kişiselleştirme seçenekleri",
      "Temel analiz araçları",
      "E-posta desteği",
    ],
    buttonText: "Hemen Başla",
    popular: false,
  },
  {
    name: "Yıllık Plan",
    description: "Uzun vadeli kullanım için en avantajlı seçenek.",
    price: "₺399",
    period: "/yıl",
    discount: "%50 İNDİRİM",
    features: [
      "Sınırsız analiz sayfası",
      "Tam özelleştirme ve marka kişiselleştirme",
      "Gelişmiş analiz & A/B test araçları",
      "Öncelikli e-posta desteği",
    ],
    buttonText: "Başla",
    popular: true,
  },
];

export default function PricingSection() {
  return (
    <AnimatedSection
      id="pricing"
      className="container-padding py-10 md:py-20 bg-[#DBEAFE]/15 rounded-3xl"
    >
      <div className="text-center space-y-4 mb-12">
        <Badge className="bg-[#323232] text-white font-medium border-0 px-6 py-2 rounded-full">
          Fiyatlandırma
        </Badge>
        <h2 className=" text-3xl md:text-4xl font-bold font-sans text-[#323232]">
          Her İhtiyaca Uygun Basit Planlar
        </h2>
        <p className="text-xl text-[#323232]/70 max-w-2xl mx-auto font-sans">
          Küçük başlayın ya da tüm özellikleri deneyin—sizin için bir plan var.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative p-8 border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover-lift ${
              plan.popular
                ? "bg-gradient-to-br from-[#C838F8] to-[#6B88EB] text-white"
                : "bg-white"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#1BCEE0] text-white font-medium border-0 px-4 py-1">
                  {plan.discount}
                </Badge>
              </div>
            )}

            <CardContent className="p-0 space-y-6">
              {/* Plan Header */}
              <div className="space-y-2">
                <h3
                  className={`text-2xl font-bold font-sans ${
                    plan.popular ? "text-white" : "text-[#323232]"
                  }`}
                >
                  {plan.name} {plan.discount && `(${plan.discount})`}
                </h3>
                <p
                  className={`font-sans ${
                    plan.popular ? "text-white/90" : "text-[#323232]/70"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="space-y-1">
                <div className="flex items-baseline space-x-2">
                  <span
                    className={`text-5xl font-bold font-sans ${
                      plan.popular ? "text-white" : "text-[#323232]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-lg font-sans ${
                      plan.popular ? "text-white/80" : "text-[#323232]/60"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular ? "bg-white/20" : "bg-[#1E63A3]/10"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.popular ? "text-white" : "text-[#1E63A3]"
                        }`}
                      />
                    </div>
                    <span
                      className={`font-sans ${
                        plan.popular ? "text-white/90" : "text-[#323232]/80"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <AnimatedButton
                  className={`w-full font-semibold py-3 ${
                    plan.popular
                      ? "bg-white text-[#C838F8] hover:bg-white/90"
                      : "gradient-secondary text-white hover:opacity-90"
                  }`}
                >
                  <Link
                    href="https://apps.apple.com/us/app/new-skin-scan-stop-wrinkles/id6739453891"
                    target="_blank"
                  >
                    {" "}
                    {plan.buttonText}
                  </Link>
                </AnimatedButton>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <div className="text-center mt-12 space-y-4">
        <p className="text-[#323232]/60 font-sans">
          Ödeme Stripe tarafından güvence altına alınmıştır
        </p>
        <div className="  flex flex-col gap-y-3 items-center md:flex-row md:justify-center space-x-8 text-sm ">
          <span className="flex items-center space-x-2 text-[#323232]/70">
            <Check className="w-4 h-4 text-[#1BCEE0]" />
            <span className="font-sans">Kurulum ücreti yok</span>
          </span>
          <span className="flex items-center space-x-2 text-[#323232]/70">
            <Check className="w-4 h-4 text-[#1BCEE0]" />
            <span className="font-sans">İstediğin zaman iptal et</span>
          </span>
          <span className="flex items-center space-x-2 text-[#323232]/70">
            <Check className="w-4 h-4 text-[#1BCEE0]" />
            <span className="font-sans">7/24 destek</span>
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
}
