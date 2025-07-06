"use client"

import { motion, type Variants, AnimatePresence } from "framer-motion"
import { Sparkles, Star, Brain, Camera, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import PhoneSlider from "@/components/phone-slider"
import AnimatedCard from "@/components/animated-card"
import AnimatedButton from "@/components/animated-button"
import { fadeIn, staggerContainer, staggerItem } from "@/lib/variants"
import Image from "next/image"

export default function HeroSection() {
  const fadeUpAnimation = fadeIn("up", 0.3) as Variants
  const fadeUpDelayedAnimation = fadeIn("up", 0.4) as Variants
  const staggerAnimation = staggerContainer(0.1, 1.2) as Variants
  const itemAnimation = staggerItem() as Variants

  return (
    <AnimatePresence mode="wait">
      <section id="hero" className="container-padding py-12 relative overflow-hidden mt-10">
        {/* Try Products Button */}
        <motion.div 
          className="text-center mb-8" 
          variants={fadeUpAnimation}
          initial="hidden" 
          whileInView="show"
          viewport={{ once: true }}
        >
          <AnimatedButton className="gradient-secondary rounded-full px-8 py-3 text-white font-medium shadow-brand">
            <Sparkles className="w-4 h-4 mr-2" />
            Analyze Your Skin with AI!
          </AnimatedButton>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto"
          variants={fadeUpDelayedAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 font-sans text-[#323232]">
            Elevate Your Skincare Game <br />
            with <span className="text-gradient-primary">AI-Powered Analysis!</span>
          </h1>
          <p className="text-lg text-[#323232]/70 max-w-2xl mx-auto leading-relaxed font-sans">
            Discover your perfect skincare routine with advanced AI technology. <br />
            Get personalized recommendations and track your skin&apos;s transformation journey!
          </p>
        </motion.div>

        {/* Phone Mockup with Floating Elements */}
        <div className="relative flex justify-center items-center min-h-[600px]">
          {/* Background Gradient Blobs */}
          <motion.div

            className="absolute top-24  transform  -translate-x-40 w-[350px] h-[450px] bg-gradient-to-br from-[#C838F8]/60 via-[#6B88EB]/30 to-[#1BCEE0]/60 rounded-full opacity-90 blur-3xl z-0"
          />
             <motion.div

className="absolute top-24  transform  translate-x-40 w-[350px] h-[450px] bg-gradient-to-br from-[#C838F8]/60 via-[#6B88EB]/30 to-[#1BCEE0]/60 rounded-full opacity-70 blur-3xl z-0"
/>
          

          {/* Left Floating Card - Cleanser */}
          <AnimatedCard delay={0.6} direction="left" className="absolute left-1/2 top-75 transform -translate-x-1/2 z-10 hidden md:block">
            <div className="bg-white rounded-2xl p-2 shadow-brand-lg max-w-xs -mr-20 ">
            <Image src="/images/left-card-2.png" alt="Serum" width={203} height={350} />
            </div>
          </AnimatedCard>

          {/* Right Floating Card - Serum */}
          <AnimatedCard
            delay={0.6}
            direction="right"
            className="absolute right-1/2 top-75 transform translate-x-1/2 z-10 hidden md:block"
          >
            <div className="bg-white rounded-2xl p-2 shadow-brand-lg max-w-xs -ml-20">
              <Image src="/images/card-right.png" alt="Serum" width={203} height={350} />
            </div>
          </AnimatedCard>

          {/* Central Phone Mockup */}
          <div className="relative z-30 drop-shadow-2xl">
            <PhoneSlider />
          </div>
        </div>

        {/* Feature Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-16 px-4"
          variants={staggerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { icon: Brain, text: "AI Skin Analysis", bg: "bg-[#1E63A3]/10", text_color: "text-[#1E63A3]" },
            { icon: Sparkles, text: "Personalized Routine", bg: "bg-[#1BCEE0]/10", text_color: "text-[#1BCEE0]" },
            { icon: Camera, text: "Progress Tracking", bg: "bg-[#6B88EB]/10", text_color: "text-[#6B88EB]" },
            { icon: Star, text: "Expert Recommendations", bg: "bg-[#C838F8]/10", text_color: "text-[#C838F8]" },
            { icon: ArrowRight, text: "Real Results", bg: "bg-amber-500/10", text_color: "text-amber-500" },
          ].map((badge) => (
            <motion.div 
              key={badge.text} 
              variants={itemAnimation}
              whileHover={{ scale: 1.05 }}
            >
              <Badge className={`${badge.bg} ${badge.text_color} px-6 py-2 rounded-full text-sm font-medium border-0`}>
                <badge.icon className="w-4 h-4 mr-2" />
                {badge.text}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </AnimatePresence>
  )
}
