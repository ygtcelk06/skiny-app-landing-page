import Image from "next/image"
import Link from "next/link"

const footerSections = [
  {
    title: "Şirket",
    links: [
      { name: "Hakkımızda", href: "/hakkimizda" },
      { name: "İletişim", href: "/iletisim" },
    ],
  },
  {
    title: "Destek",
    links: [
      { name: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma-metni" },
      { name: "Açık Rıza Metni", href: "/acik-riza-metni" },
      { name: "Abonelik Sözleşmesi", href: "/abonelik-sozlesmesi" },
      { name: "Kullanıcı Sözleşmesi", href: "/kullanici-sozlesmesi" },
      { name: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
      { name: "Bize Ulaşın", href: "/contact-us" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#323232] text-white py-12">
      <div className="container-padding">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start">
              <Image 
                src="/images/skiny-logo.svg" 
                alt="Skinly" 
                width={120} 
                height={95}
                className=" "
              />
            </div>
            <p className="text-white/70 font-sans">Cildinin ihtiyaçlarını yapay zekayla keşfet.</p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4 text-center sm:text-left">
              <h4 className="font-semibold font-sans">{section.title}</h4>
              <div className="space-y-2 text-white/70">
                {section.links.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className="block cursor-pointer hover:text-white transition-colors font-sans"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
          <p className="font-sans">&copy; 2025 Skinly. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
