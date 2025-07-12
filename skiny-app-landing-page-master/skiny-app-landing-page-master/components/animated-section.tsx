"use client"

import { motion, Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import type React from "react"
import { fadeIn } from "@/lib/variants"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  id?: string
  direction?: "up" | "down" | "left" | "right"
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      variants={fadeIn(direction, delay) as Variants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {children}
    </motion.section>
  )
}
