"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const slides = [
  {
    id: 1,
    image: "/images/shot-1.png",
    alt: "AI Skin Analysis - Understand Your Skin",
  },
  {
    id: 2,
    image: "/images/shot-2.png",
    alt: "Routine Recommendations - Personalized skincare routines",
  },
  {
    id: 3,
    image: "/images/shot-3.png",
    alt: "Track Progress - Before and after results",
  },
]

export default function PhoneSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="relative w-80 h-[600px]"
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.2,
      }}
    >
      {/* Screen Content - Behind the transparent frame */}
      <div className="absolute inset-0 z-10">
        {/* Screen area that will show through the transparent frame */}
        <div
          className="absolute overflow-hidden rounded-[42px] bg-black"
          style={{
            top: "20px",
            left: "22px",
            right: "22px",
            bottom: "20px",
          }}
        >
          {/* Sliding Images - Improved without black screens */}
          <div className="absolute inset-0 w-full h-full">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                className="absolute inset-0 w-full h-full"
                initial={false}
                animate={{
                  x: index === currentSlide ? 0 : index < currentSlide ? -100 : 100,
                  opacity: index === currentSlide ? 1 : 0,
                  scale: index === currentSlide ? 1 : 0.95,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{
                  zIndex: index === currentSlide ? 2 : 1,
                }}
              >
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt}
                  fill
                  className="object-contain "
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots - Improved */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 space-x-2 z-20 hidden">
            {slides.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/60"}`}
                animate={{
                  scale: index === currentSlide ? 1.2 : 1,
                  opacity: index === currentSlide ? 1 : 0.6,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.3 }}
                onClick={() => setCurrentSlide(index)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Transparent Phone Frame Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Image
          src="/images/iphon-pro-max-frame.png"
          alt="iPhone Frame"
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </motion.div>
  )
}
