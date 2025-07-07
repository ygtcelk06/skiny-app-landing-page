import Image from "next/image"

const footerSections = [
  {
    title: "Ürün",
    links: ["Özellikler", "Nasıl Çalışır", "Fiyatlandırma", "SSS"],
  },
  {
    title: "Şirket",
    links: ["Hakkımızda", "Blog", "Kariyer", "İletişim"],
  },
  {
    title: "Destek",
    links: ["Yardım Merkezi", "Gizlilik Politikası", "Hizmet Şartları", "Destek ile İletişime Geçin"],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#323232] text-white py-12">
      <div className="container-padding">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start">
              <Image 
                src="/images/skiny-logo.svg" 
                alt="Skiny" 
                width={120} 
                height={95}
                className=" "
              />
            </div>
            <p className="text-white/70 font-sans">En iyi cildin için yapay zeka destekli cilt analizi.</p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4 text-center sm:text-left">
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
          <p className="font-sans">&copy; 2025 Skiny. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
