"use client"

import { useState, useEffect } from "react"
import MobileMenu from "@/components/layout/mobile-menu"
import DesktopNav from "./desktop-nav"
import AnimatedButton from "@/components/animated-button"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    // Initial check
    handleScroll()
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/70 backdrop-blur-md shadow-sm py-3 md:py-5" 
          : "bg-transparent py-5 md:py-8"
      }`}
    >
      <nav className="container-padding flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center ">
            <Image src="/images/skiny-logo.svg" alt="Skinly" width={100} height={40} />
          </div>
        </div>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Desktop Download Button */}
        <div className="hidden md:flex">
          <AnimatedButton className="gradient-primary hover:opacity-90 text-white font-medium">
            <Link href="https://apps.apple.com/us/app/new-skin-scan-stop-wrinkles/id6739453891" target="_blank">       
              Download App
            </Link>
          </AnimatedButton>
        </div>

        {/* Mobile Menu Button */}
        <MobileMenu />
      </nav>
    </header>
  )
}
