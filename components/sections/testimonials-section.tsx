import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedSection from "@/components/animated-section"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Skincare Enthusiast",
    content:
      "Skiny completely transformed my skincare routine. The AI recommendations were spot-on and my skin has never looked better!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Busy Professional",
    content:
      "As someone with limited time, Skiny's personalized routine made skincare simple and effective. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Beauty Blogger",
    content:
      "The progress tracking feature is amazing. I can actually see the improvements in my skin over time. Love this app!",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <AnimatedSection id="testimonials" className="container-padding section-padding">
      <div className="text-center space-y-4 mb-16">
        <Badge className="bg-[#6B88EB]/10 text-[#6B88EB] font-medium border-0">Testimonials</Badge>
        <h2 className="text-4xl font-bold font-sans text-[#323232]">
          Hear From Our <span className="text-gradient-accent">Happy Users</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6 border-0 shadow-lg hover-lift">
            <CardContent className="p-0 space-y-4">
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#1BCEE0] text-[#1BCEE0]" />
                ))}
              </div>
              <p className="text-[#323232]/70 italic font-sans leading-relaxed">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#1BCEE0] to-[#6B88EB] rounded-full shadow-sm" />
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
