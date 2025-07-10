"use client"

import { ArrowRight, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function WelcomePage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-white">
      {/* Ana İçerik */}
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf - Telefon İllüstrasyonu */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image src="/images/wlc-illustraion.png" alt="Hoş Geldiniz" width={500} height={500} />
            </div>
          </div>

          {/* Sağ Taraf - İçerik */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 max-w-md">
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-8">
                <Image src="/images/skiny-logo.svg" alt="Skiny" width={100} height={100} />
              </div>

              {/* Karşılama İçeriği */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-[#323232] font-sans mb-3">Skinly&apos;e Hoş Geldiniz!</h1>
                  <p className="text-[#323232]/70 text-sm leading-relaxed font-sans">
                    Hesabınız başarıyla oluşturuldu. En iyi deneyim için cilt bakım yolculuğunuza mobil uygulamamız üzerinden devam edin.
                  </p>
                </div>

                {/* Özellikler Listesi */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#1BCEE0] rounded-full"></div>
                    <span className="text-[#323232]/80 text-sm font-sans">Yapay zeka destekli cilt analizi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#1BCEE0] rounded-full"></div>
                    <span className="text-[#323232]/80 text-sm font-sans">Kişiselleştirilmiş cilt bakım rutinleri</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#1BCEE0] rounded-full"></div>
                    <span className="text-[#323232]/80 text-sm font-sans">İlerleme takibi ve analizler</span>
                  </div>
                </div>

                {/* CTA Butonu */}
                <Button
                  className="w-full bg-gradient-to-r from-[#1BCEE0] to-[#6B88EB] hover:opacity-90 text-white font-medium py-3 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 font-sans"
                  onClick={() => {
                    const userAgent = navigator.userAgent || navigator.vendor
                    if (/android/i.test(userAgent)) {
                      window.open("https://play.google.com/store/apps/details?id=com.skiny.app", "_blank")
                    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
                      window.open("https://apps.apple.com/app/skiny/id123456789", "_blank")
                    } else {
                      router.push("/")
                    }
                  }}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Mobil Uygulamada Devam Et</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
