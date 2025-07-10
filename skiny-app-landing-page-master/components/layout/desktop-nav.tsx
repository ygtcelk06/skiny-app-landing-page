"use client"
import { Link } from 'react-scroll'

const navItems = [
  { label: "Ana Sayfa", href: "hero" },
  { label: "Nasıl Çalışır", href: "features" },
  { label: "Yorumlar", href: "testimonials" },
  { label: "Fiyatlandırma", href: "pricing" },
  { label: "SSS", href: "faq" },
]

  
  export default function DesktopNav() {
    return (
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            className="text-[#323232] hover:text-[#1E63A3] transition-colors font-semibold cursor-pointer"
          >
            {item.label}
          </Link>
        ))}
      </div>
    )
  }
  