import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedSection from "@/components/animated-section"
import Image from "next/image"

const testimonials = [
  {
    name: "Elif Yılmaz",
    role: "Cilt Bakım Meraklısı",
    content:
      "Skinly cilt bakım rutinimi tamamen değiştirdi. Yapay zeka önerileri tam isabetti ve cildim hiç bu kadar iyi görünmemişti!",
    rating: 5,
    image: "/images/ava1.png",
  },
  {
    name: "Mehmet Kaya",
    role: "Yoğun Bir Profesyonel",
    content:
      "Zamanı kısıtlı biri olarak, Skinly'nin kişiselleştirilmiş rutini cilt bakımını benim için basit ve etkili hale getirdi. Kesinlikle tavsiye ederim!",
    rating: 5,
    image: "/images/ava2.png",
  },
  {
    name: "Ayşe Demir",
    role: "Güzellik Blog Yazarı",
    content:
      "Gelişimi takip etme özelliği harika. Zaman içinde cildimdeki iyileşmeleri gerçekten görebiliyorum. Bu uygulamaya bayıldım!",
    rating: 5,
    image: "/images/ava3.png",
  },
]


export default function TestimonialsSection() {
  return (
    <AnimatedSection id="testimonials" className="container-padding  py-10 md:py-20   ">
     <div className="text-center space-y-4 mb-16">
  <Badge className="bg-[#6B88EB]/10 text-[#6B88EB] font-medium border-0">Kullanıcı Yorumları</Badge>
  <h2 className="text-4xl font-bold font-sans text-[#323232]">
    <span className="text-gradient-accent ">Mutlu Kullanıcılarımızın<br/></span> Yorumlarına Kulak Verin
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
                    src={testimonial.image} 
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
