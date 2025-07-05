const navItems = [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ]
  
  export default function DesktopNav() {
    return (
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[#323232] hover:text-[#1E63A3] transition-colors font-medium"
          >
            {item.label}
          </a>
        ))}
      </div>
    )
  }
  