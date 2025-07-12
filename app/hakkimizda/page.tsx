'use client';

import AnimatedSection from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-[#F9F9F9]">
      {/* Hero Section */}
      <AnimatedSection className="container-padding py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="mb-6">Hakkımızda</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-[#323232] mb-8">
            Cildinizi Daha Yakından Tanıyın
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Skinly, cilt bakımını bilimsel verilere ve teknolojik analizlere dayandırarak herkesin cildini daha yakından tanımasını sağlamayı amaçlayan bir yapay zeka destekli cilt analiz uygulamasıdır.
          </p>
        </div>
      </AnimatedSection>

      {/* Content Section */}
      <AnimatedSection className="container-padding py-16 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#323232]">
              Bilimsel Yaklaşım
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Güzellik sektöründeki ezbere önerilerden farklı olarak, biz cildin gerçek ihtiyaçlarını yüzeyin altına inerek anlamaya çalışıyoruz. Gelişmiş yapay zeka altyapımız, binlerce dermatolog onaylı görsel üzerinde eğitilmiş algoritmalarla çalışır ve kullanıcıya özel analizler sunar.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/images/model.jpg"
              alt="Skinly AI Analiz"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Mission Section */}
      <AnimatedSection className="container-padding py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-[#323232]">
            Misyonumuz
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Skinly olarak, cilt bakımının herkes için ulaşılabilir, güvenilir ve kişiselleştirilmiş olması gerektiğine inanıyoruz. Teknolojiyi, estetikle ve sağduyuyla birleştirerek, cildinizin en iyi haline ulaşmanız için buradayız.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Ulaşılabilir</h3>
              <p className="text-gray-600">Herkes için erişilebilir cilt bakımı çözümleri</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Güvenilir</h3>
              <p className="text-gray-600">Bilimsel verilere dayalı analizler</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Kişiselleştirilmiş</h3>
              <p className="text-gray-600">Size özel cilt bakım önerileri</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
} 