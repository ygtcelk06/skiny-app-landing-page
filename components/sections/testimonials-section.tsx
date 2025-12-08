"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedSection from "@/components/animated-section"
import Image from "next/image"
import { getClientTranslations } from "@/lib/i18n-client"

export default function TestimonialsSection() {
  const [translations, setTranslations] = useState<any>(null);

  useEffect(() => {
    const t = getClientTranslations('testimonials');
    setTranslations({
      badge: t('badge'),
      title: t('title'),
      titleHighlight: t('titleHighlight'),
      users: t('users') as any[],
    });
  }, []);

  if (!translations) {
    return <div className="min-h-[400px]"></div>;
  }

  const testimonials = translations.users.map((user: any, index: number) => ({
    ...user,
    rating: 5,
    image: user.image || `/images/ava${index + 1}.png`,
  }));
  return (
    <AnimatedSection id="testimonials" className="container-padding  py-10 md:py-20   ">
     <div className="text-center space-y-4 mb-16">
  <Badge className="bg-[#6B88EB]/10 text-[#6B88EB] font-medium border-0">{translations.badge}</Badge>
  <h2 className="text-4xl font-bold font-sans text-[#323232]">
    <span className="text-gradient-accent ">{translations.titleHighlight}<br/></span> {translations.title}
  </h2>
</div>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6 border-0 shadow-sm">
            <CardContent className="p-0 space-y-4">
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#1BCEE0] text-[#1BCEE0]" />
                ))}
              </div>
              <p className="text-[#323232]/70 italic font-sans leading-relaxed">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center space-x-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image 
                    src={testimonial.image || "/images/ava1.png"} 
                    alt={`${testimonial.name}'s avatar`} 
                    width={40} 
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#323232] font-sans">{testimonial.name}</p>
                  <p className="text-sm text-[#323232]/60 font-sans">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  )
}
