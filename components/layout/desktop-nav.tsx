"use client"
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { getClientTranslations } from "@/lib/i18n-client"

export default function DesktopNav() {
  const [navItems, setNavItems] = useState<Array<{ label: string; href: string }>>([]);
  
  useEffect(() => {
    const t = getClientTranslations('nav');
    setNavItems([
      { label: t('home'), href: "hero" },
      { label: t('howItWorks'), href: "features" },
      { label: t('testimonials'), href: "testimonials" },
      { label: t('pricing'), href: "pricing" },
      { label: t('faq'), href: "faq" },
    ]);
  }, []);

  // İlk render'da boş array döndür, hydration hatasını önlemek için
  if (navItems.length === 0) {
    return (
      <div className="hidden md:flex items-center space-x-8">
        <div className="w-20 h-5 bg-transparent"></div>
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
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
  