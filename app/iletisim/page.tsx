'use client';

import AnimatedSection from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Iletisim() {
  return (
    <main className="min-h-screen bg-[#F9F9F9]">
      <AnimatedSection className="container-padding py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">İletişim</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-[#323232] mb-8">
              Bizimle iletişime geçmek ister misiniz?
            </h1>
            <p className="text-xl text-gray-600">
              Klaris ekibi olarak size yardımcı olmaktan memnuniyet duyarız.
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
            <div className="space-y-8 text-center">
              <p className="text-lg text-gray-600">
                Uygulamayla ilgili sorularınız, geri bildirimleriniz veya iş birliği talepleriniz için bize dilediğiniz zaman ulaşabilirsiniz.
              </p>

              <div className="py-8">
                <div className="inline-flex items-center space-x-3 text-xl font-medium text-[#323232]">
                  <span>📩</span>
                  <a href="mailto:info@klarisai.app" className="hover:text-black transition-colors">
                    info@klarisai.app
                  </a>
                </div>
              </div>

              <p className="text-gray-600">
                Tüm mesajlarınızı en kısa sürede yanıtlamaya özen gösteriyoruz.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Destek ekibimizle doğrudan iletişime geçmek ister misiniz?
            </p>
            <Link 
              href="/contact-us"
              className="inline-block bg-[#323232] text-white px-8 py-4 rounded-full hover:bg-black transition-colors"
            >
              İletişim Formu
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
} 