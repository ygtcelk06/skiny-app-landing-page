"use client"

import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import type React from "react"
import { buttonHover } from "@/lib/variants"

interface AnimatedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "ghost" | "outline"
  size?: "default" | "sm" | "lg"
  disabled?: boolean
}

export default function AnimatedButton({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "default",
  disabled = false,
}: AnimatedButtonProps) {
  const buttonAnimation = buttonHover() as Variants

  return (
    <motion.div variants={buttonAnimation} whileHover="hover" whileTap="tap">
      <Button onClick={onClick} className={className} variant={variant} size={size} disabled={disabled}>
        {children}
      </Button>
    </motion.div>
  )
}
