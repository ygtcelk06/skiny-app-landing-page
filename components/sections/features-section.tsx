import { Brain, Sparkles, Camera } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedSection from "@/components/animated-section"

const features = [
  {
    icon: Brain,
    title: "AI Skin Analysis",
    description:
      "Advanced computer vision analyzes your skin condition, identifying concerns and tracking improvements over time.",
    gradient: "linear-gradient(to right, #1e63a3, #6b88eb)",
    bg: "linear-gradient(to bottom right, rgba(30, 99, 163, 0.05), #ffffff)",
  },
  {
    icon: Sparkles,
    title: "Personalized Routine",
    description:
      "Get customized skincare routines based on your unique skin type, concerns, and lifestyle preferences.",
    gradient: "linear-gradient(to right, #1bcee0, #6b88eb)",
    bg: "linear-gradient(to bottom right, rgba(27, 206, 224, 0.05), #ffffff)",
  },
  {
    icon: Camera,
    title: "Progress Tracking",
    description: "Monitor your skin's improvement with regular photo analysis and detailed progress reports.",
    gradient: "linear-gradient(to right, #6b88eb, #c838f8)",
    bg: "linear-gradient(to bottom right, rgba(107, 136, 235, 0.05), #ffffff)",
  },
]

export default function FeaturesSection() {
  return (
    <AnimatedSection id="features" className="container-padding section-padding">
      <div className="text-center space-y-4 mb-16">
        <Badge className="bg-[#1BCEE0]/10 text-[#1E63A3] font-medium border-0">Features</Badge>
        <h2 className="text-4xl font-bold font-sans text-[#323232]">
          Know What Your Skin Needs With <span className="text-gradient-primary">AI-Powered Analysis</span>
        </h2>
        <p className="text-xl text-[#323232]/70 max-w-2xl mx-auto font-sans">
          Our advanced AI technology analyzes your skin condition and provides personalized recommendations for optimal
          skincare results.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, ) => (
          <Card
            key={feature.title}
            className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
            style={{ background: feature.bg }}
          >
            <CardContent className="p-0 space-y-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
                style={{ background: feature.gradient }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#323232] font-sans">{feature.title}</h3>
              <p className="text-[#323232]/70 font-sans leading-relaxed">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  )
}
