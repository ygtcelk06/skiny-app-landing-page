import AnimatedSection from "@/components/animated-section"
import Image from "next/image"

const footerSections = [
  {
    title: "Product",
    links: ["Features", "How it Works", "Pricing", "FAQ"],
  },
  {
    title: "Company",
    links: ["About Us", "Blog", "Careers", "Contact"],
  },
  {
    title: "Support",
    links: ["Help Center", "Privacy Policy", "Terms of Service", "Contact Support"],
  },
]

export default function Footer() {
  return (
    <AnimatedSection>
      <footer className="bg-[#323232] text-white py-12">
        <div className="container-padding">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Image 
                  src="/images/skiny-logo.svg" 
                  alt="Skiny" 
                  width={120} 
                  height={95}
                  className=" "
                />
              </div>
              <p className="text-white/70 font-sans">AI-powered skincare analysis for your best skin ever.</p>
            </div>

            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="font-semibold font-sans">{section.title}</h4>
                <div className="space-y-2 text-white/70">
                  {section.links.map((link) => (
                    <p key={link} className="cursor-pointer hover:text-white transition-colors font-sans">
                      {link}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p className="font-sans">&copy; 2025 Skiny. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  )
}
