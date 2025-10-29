"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

import {
  mobileMenuAnimation,
  staggerContainer,
  staggerItem,
} from "@/lib/variants";
import { Link } from "react-scroll";
import NextLink from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Ana Sayfa", href: "hero" },
  { label: "Nasıl Çalışır", href: "features" },
  { label: "Yorumlar", href: "testimonials" },
  { label: "Fiyatlandırma", href: "pricing" },
  { label: "SSS", href: "faq" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
            className="md:hidden absolute top-full left-0 right-0 bg-white  shadow-sm mt-1 mx-4 py-4 z-50 rounded-2xl"
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
                <div className="flex md:hidden gap-2 ">
                  <div className="hover:opacity-90">
                    <NextLink
                      href="https://apps.apple.com/tr/app/skinly-ai-cilt-bak%C4%B1m-asistan%C4%B1/id6749868115?l=tr"
                      target="_blank"
                    >
                      <Image
                        src="/images/apple.svg"
                        alt="Download on the App Store"
                        width={40}
                        height={40}
                      />
                    </NextLink>
                  </div>
                  <div className="hover:opacity-90">
                    <NextLink
                      href="https://play.google.com/store/apps/details?id=com.skinly.app"
                      target="_blank"
                    >
                      <Image
                        src="/images/android.svg"
                        alt="Google Play"
                        width={40}
                        height={40}
                      />
                    </NextLink>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
