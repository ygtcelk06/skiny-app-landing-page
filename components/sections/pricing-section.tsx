import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedSection from "@/components/animated-section"
import AnimatedButton from "@/components/animated-button"
import Link from "next/link"

const plans = [
  {
    name: "Monthly",
    description: "Ideal for individuals and small teams looking for simple, powerful tools.",
    price: "$7",
    period: "/month",
    features: ["Up to 10 Pages", "Basic Customization Options", "Core Analytics Tools", "Email Support"],
    buttonText: "Download Now",
    popular: false,
  },
  {
    name: "Yearly",
    description: "Ideal for individuals and small teams looking for simple, powerful tools.",
    price: "$39",
    period: "/year",
    discount: "50% OFF",
    features: [
      "Unlimited Pages",
      "Full Customization & Branding",
      "Advanced Analytics & A/B Testing",
      "Priority Email Support",
    ],
    buttonText: "Download",
    popular: true,
  },
]

export default function PricingSection() {
  return (
    <AnimatedSection id="pricing" className="container-padding section-padding bg-[#DBEAFE]/15 rounded-3xl">
      <div className="text-center space-y-4 mb-16">
        <Badge className="bg-[#323232] text-white font-medium border-0 px-6 py-2 rounded-full">Pricing</Badge>
        <h2 className="text-4xl font-bold font-sans text-[#323232]">Simple Plans for Every Need</h2>
        <p className="text-xl text-[#323232]/70 max-w-2xl mx-auto font-sans">
          Start small or go all-in—there&apos;s a plan for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan, ) => (
          <Card
            key={plan.name}
            className={`relative p-8 border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover-lift ${
              plan.popular ? "bg-gradient-to-br from-[#C838F8] to-[#6B88EB] text-white" : "bg-white"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#1BCEE0] text-white font-medium border-0 px-4 py-1">{plan.discount}</Badge>
              </div>
            )}

            <CardContent className="p-0 space-y-6">
              {/* Plan Header */}
              <div className="space-y-2">
                <h3 className={`text-2xl font-bold font-sans ${plan.popular ? "text-white" : "text-[#323232]"}`}>
                  {plan.name} {plan.discount && `(${plan.discount})`}
                </h3>
                <p className={`font-sans ${plan.popular ? "text-white/90" : "text-[#323232]/70"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="space-y-1">
                <div className="flex items-baseline space-x-2">
                  <span className={`text-5xl font-bold font-sans ${plan.popular ? "text-white" : "text-[#323232]"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg font-sans ${plan.popular ? "text-white/80" : "text-[#323232]/60"}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular ? "bg-white/20" : "bg-[#1E63A3]/10"
                      }`}
                    >
                      <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-[#1E63A3]"}`} />
                    </div>
                    <span className={`font-sans ${plan.popular ? "text-white/90" : "text-[#323232]/80"}`}>
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
                 <Link href="https://apps.apple.com/us/app/new-skin-scan-stop-wrinkles/id6739453891" target="_blank"> {plan.buttonText}</Link>
                </AnimatedButton>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <div className="text-center mt-12 space-y-4">
        <p className="text-[#323232]/60 font-sans">Payment secured by Stripe</p>
        <div className="flex justify-center space-x-8 text-sm">
          <span className="flex items-center space-x-2 text-[#323232]/70">
            <Check className="w-4 h-4 text-[#1BCEE0]" />
            <span className="font-sans">No setup fees</span>
          </span>
          <span className="flex items-center space-x-2 text-[#323232]/70">
            <Check className="w-4 h-4 text-[#1BCEE0]" />
            <span className="font-sans">Cancel anytime</span>
          </span>
          <span className="flex items-center space-x-2 text-[#323232]/70">
            <Check className="w-4 h-4 text-[#1BCEE0]" />
            <span className="font-sans">24/7 support</span>
          </span>
        </div>
      </div>
    </AnimatedSection>
  )
}
