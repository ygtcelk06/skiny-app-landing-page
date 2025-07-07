"use client"

import { motion, type Variants, AnimatePresence, useInView } from "framer-motion"
import Link from "next/link"
import { Sparkles } from "lucide-react"
import PhoneSlider from "@/components/phone-slider"
import AnimatedCard from "@/components/animated-card"
import AnimatedButton from "@/components/animated-button"
import { fadeIn,  } from "@/lib/variants"
import Image from "next/image"
import { useRef } from "react"

export default function HeroSection() {
  const fadeUpAnimation = fadeIn("up", 0.3) as Variants
  const fadeUpDelayedAnimation = fadeIn("up", 0.4) as Variants


  const buttonsRef = useRef(null)
  const isButtonsInView = useInView(buttonsRef, { once: true, margin: "-100px" })

  return (
    <AnimatePresence mode="wait">
      <section id="hero" className="container-padding  relative overflow-hidden mt-10">
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
            Cildini Yapay Zeka ile Analiz Et!
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
          Cilt Bakımını Zirveye Taşı <br />
             <span className="text-gradient-primary">Yapay Zeka Destekli Analizle!</span>
          </h1>
          <p className="text-lg text-[#323232]/70 max-w-2xl mx-auto leading-relaxed font-sans">
  Gelişmiş yapay zeka teknolojisiyle sana en uygun cilt bakım rutinini keşfet. <br />
  Kişiselleştirilmiş öneriler al ve cildindeki değişimi adım adım takip et!
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
            <Image src="/images/card-left.png" alt="Serum" width={203} height={350} />
            </div>
          </AnimatedCard>

          {/* Right Floating Card - Serum */}
          <AnimatedCard
            delay={0.6}
            direction="right"
            className="absolute right-1/2 top-75 transform translate-x-1/2 z-10 hidden md:block"
          >
            <div className="bg-white rounded-2xl p-2 shadow-brand-lg max-w-xs -ml-20">
              <Image src="/images/card-right-2.png" alt="Serum" width={203} height={350} />
            </div>
          </AnimatedCard>

          {/* Central Phone Mockup */}
          <div className="relative z-30 drop-shadow-2xl">
            <PhoneSlider />
          </div>
        </div>

        {/* Feature Tags */}
        <div ref={buttonsRef}>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-10 md:mt-16 px-4"
          variants={fadeIn("up", 0)  as Variants}
          initial="hidden"
          animate={isButtonsInView ? "show" : "hidden"}
        
        >
         <div className="flex flex-wrap justify-center gap-4  px-4">
          <Link href="https://apps.apple.com/us/app/new-skin-scan-stop-wrinkles/id6739453891" target="_blank">
          <Image
                  src="/images/store-btn.svg"
                  alt="Download on the App Store"
                  className="h-12 w-auto transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-1 active:scale-95"
                  width={180}
                  height={60}
                />
          </Link>
          <Link href="https://apps.apple.com/us/app/new-skin-scan-stop-wrinkles/id6739453891" target="_blank">
          <Image
                  src="/images/google-btn.svg"
                  alt="Download on the App Store"
                  className="h-12 w-auto transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-1 active:scale-95"
                  width={180}
                  height={60}
                />
          </Link>
         </div>
        </motion.div>
        </div>
      </section>
    </AnimatePresence>
  )
}
