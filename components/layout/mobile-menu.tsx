"use client"

import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { Menu, X } from "lucide-react"
import AnimatedButton from "@/components/animated-button"
import { mobileMenuAnimation, staggerContainer, staggerItem } from "@/lib/variants"
import { Link } from 'react-scroll'
import NextLink from 'next/link'

const navItems = [
  { label: "Home", href: "hero" },
  { label: "How it Works", href: "features" },
  { label: "Reviews", href: "testimonials" },
  { label: "Pricing", href: "pricing" },
  { label: "FAQ", href: "faq" },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden p-2 text-[#323232] hover:text-[#1E63A3] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle mobile menu"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "menu"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white/70 backdrop-blur-sm shadow-sm mt-2 mx-4 py-4 z-50 rounded-2xl"
            variants={mobileMenuAnimation() as Variants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.div
              className="flex flex-col space-y-4 px-6"
              variants={staggerContainer(0.1, 0)}
              initial="hidden"
              animate="show"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={staggerItem() as Variants}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={item.href}
                    smooth={true}
                    spy={true}
                    offset={-70}
                    duration={500}
                    className="text-[#323232] hover:text-[#1E63A3] transition-colors py-2 font-medium block cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <hr className="border-gray-200" />
              <motion.div variants={staggerItem() as Variants}>
                <AnimatedButton
                  className="gradient-primary hover:opacity-90 text-white w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <NextLink href="https://apps.apple.com/us/app/new-skin-scan-stop-wrinkles/id6739453891" target="_blank">
                    Download App
                  </NextLink>
                </AnimatedButton>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
