"use client"
import AnimatedSection from "@/components/animated-section"
import { motion, Variants } from "framer-motion"
import { fadeIn, staggerContainer, staggerItem } from "@/lib/variants"
import Image from "next/image"

export default function CTASection() {
  return (
    <AnimatedSection className="section-padding bg-[#DBEAFE]  mt-10">
      <div className="container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text and Badges */}
          <motion.div className="space-y-8" variants={staggerContainer(0.2, 0.1)} initial="hidden" animate="show">
            <motion.h2 className="text-4xl font-bold font-sans text-[#323232] leading-tight" variants={staggerItem() as Variants}>
              What are you waiting for, track your skincare routine now!
            </motion.h2>

            {/* App Store Badges */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={staggerItem() as Variants}>
              <motion.div className="cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Image
                  src="/images/store-btn.svg"
                  alt="Download on the App Store"
                  className="h-14 w-auto"
                  width={180}
                  height={60}
                />
              </motion.div>     
            </motion.div>
          </motion.div>

          {/* Right Side - Phone Mockups */}
          <motion.div
            className="relative flex justify-center items-center"
            variants={fadeIn("left", 0.4) as Variants}
            initial="hidden"
            animate="show"
          >
            

            {/* Phone Mockups */}
            <div className="relative">
              {/* First Phone */}
              <motion.div
                className="relative z-20"
                initial={{ opacity: 0, x: 50, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 5 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="w-64 h-[520px] bg-black rounded-[42px] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[36px] overflow-hidden">
                    <Image
                      src="/images/Homesscreen.png"
                      alt="Skiny App Interface"
                      className="w-full h-full object-cover object-bottom"
                      width={250}
                      height={500}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Second Phone - Overlapping */}
              <motion.div
                className="absolute top-8 -left-20 z-10"
                initial={{ opacity: 0, x: -50, rotate: -8 }}
                animate={{ opacity: 1, x: -20, rotate: -8 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="w-56 h-[450px] bg-black rounded-[36px] p-2 shadow-xl">
                  <div className="w-full h-full bg-white rounded-[30px] overflow-hidden">
                    <Image
                      src="/images/Achievements.png"
                      alt="Skiny Progress Tracking"
                      className="w-full h-full object-cover object-bottom"
                      width={220}
                      height={430}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
