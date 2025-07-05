
import MobileMenu from "@/components/layout/mobile-menu"
import DesktopNav from "./desktop-nav"
import AnimatedButton from "@/components/animated-button"
import Image from "next/image"

export default function Header() {
  return (
    <header className="container-padding  relative ">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className=" flex items-center justify-center">
            <Image src="/images/skiny-logo.svg" alt="Skiny" width={150} height={119} />
          </div>
          
        </div>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Desktop Download Button */}
        <div className="hidden md:flex">
          <AnimatedButton className="gradient-primary hover:opacity-90 text-white font-medium">
            Download App
          </AnimatedButton>
        </div>

        {/* Mobile Menu Button */}
        <MobileMenu />
      </nav>
    </header>
  )
}
