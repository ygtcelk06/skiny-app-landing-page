"use client"

import { motion, type Variants } from "framer-motion"
import type React from "react"

interface AnimatedCardProps {
  children: React.ReactNode
  delay?: number
  direction?: "left" | "right"
  className?: string
}

export default function AnimatedCard({ children, delay = 0, direction = "left", className = "" }: AnimatedCardProps) {
  const slideVariants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100,
      rotate: direction === "left" ? -12 : 12,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: direction === "left" ? -280 : 280,
      rotate: direction === "left" ? -12 : 12,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay,
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={slideVariants}
      whileHover={{
        scale: 1.05,
        rotate: direction === "left" ? -8 : 8,
        transition: { 
          type: "spring",
          stiffness: 400,
          damping: 10
        },
      }}
    >
      {children}
    </motion.div>
  )
}
