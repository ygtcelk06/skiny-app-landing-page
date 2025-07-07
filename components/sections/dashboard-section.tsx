"use client"

import { motion, Variants } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import { fadeIn, staggerContainer, staggerItem } from "@/lib/variants"
import Image from "next/image"

const skinMetrics = [
  { label: "Leke", score: 86, color: "#6b88eb", bgColor: "#e9edfc" },
  { label: "Kırışıklık", score: 45, color: "#8B5CF6", bgColor: "#F3E8FF" },
  { label: "Gözenek", score: 64, color: "#FCD34D", bgColor: "#FEF3C7" },
  { label: "Göz Altı Morluğu", score: 88, color: "#10B981", bgColor: "#D1FAE5" },
]

const suggestedProducts = [
  { image: "/images/product3.png?height=80&width=60", bgColor: "rgba(254, 215, 204, 0.3)" },
  { image: "/images/product1.png?height=80&width=60", bgColor: "rgba(243, 232, 255, 0.3)" },
  { image: "/images/product2.png?height=80&width=60", bgColor: "rgba(219, 234, 254, 0.3)" },
]

export default function DashboardSection() {
  return (
    <AnimatedSection className="container-padding  md:pt-5 bg-gradient-to-b from-[#DBEAFE]/15 to-white rounded-tl-3xl rounded-tr-3xl mt-5 md:mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center">
          {/* Left Side - Dashboard Analytics */}
          <motion.div className="space-y-8 bg-white p-8 rounded-2xl shadow-sm" variants={staggerContainer(0.1, 0.2)} initial="hidden" animate="show" >
            {/* Header Metrics */}
            <motion.div variants={staggerItem()  as Variants}  className="grid grid-cols-2 gap-8">
              <div className="space-y-1 md:flex md:items-center md:gap-x-4">
                <p className="text-4xl font-bold text-[#FF6B6B] font-sans">80</p>
                <p className="text-lg text-[#323232]/60 font-sans">Cilt Skoru</p>
              </div>
              <div className="space-y-1 md:flex md:items-center md:gap-x-4">
                <p className="text-4xl font-bold text-[#323232] font-sans">27</p>
                <p className="text-lg text-[#323232]/60 font-sans">Cilt Yaşı</p>
              </div>
            </motion.div>

            {/* Skin Metrics */}
            <motion.div variants={staggerItem() as Variants} className="grid grid-cols-4 gap-4">
              {skinMetrics.map((metric) => (
                <div key={metric.label} className="text-center space-y-3">
                  <div className="relative w-16 h-16 mx-auto">
                    {/* Background circle */}
                    <div className="absolute inset-0 rounded-full" style={{ backgroundColor: metric.bgColor }} />
                    {/* Progress ring */}
                    <svg className="w-16 h-16 transform -rotate-90 relative z-10" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={metric.color}
                        strokeWidth="2"
                        strokeDasharray={`${metric.score}, 100`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <span className="text-sm font-bold text-[#323232] font-sans">{metric.score}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#323232]/60 font-sans">{metric.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Suggested Products */}
            <motion.div variants={staggerItem() as Variants} className="space-y-4">
              <h4 className="text-xl font-semibold text-[#323232] font-sans">Önerilen Ürünler</h4>
              <div className="grid grid-cols-3 gap-4">
                {suggestedProducts.map((product, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-2xl p-4 flex items-center justify-center"
                    style={{ backgroundColor: product.bgColor }}
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Feature Image */}
          <motion.div className="relative shadow-sm  rounded-2xl " variants={fadeIn("left", 0.4) as Variants} initial="hidden" animate="show">

                <Image
                  src="/images/model.jpg"
                  alt="AI Skin Analysis Dashboard"
                  className="w-full h-full rounded-2xl transform scale-x-[-1] object-cover object-top max-h-[600px]"
                  width={350}
                  height={400}
                />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
