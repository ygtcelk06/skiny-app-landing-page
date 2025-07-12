"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/animated-section";
import Link from "next/link";

const faqs = [
  {
    question: "Yapay zeka cilt analizi ne kadar doğru?",
    answer:
      "Yapay zeka destekli cilt analizimiz, binlerce dermatolog onaylı cilt görseli üzerinde eğitilmiş gelişmiş algoritmalarla çalışır. Akne, kırışıklık, koyu leke ve cilt tipi gibi yaygın sorunlarda %90’ın üzerinde doğrulukla analiz yapar.",
  },
  {
    question: "Cilt verilerim ve fotoğraflarım güvende mi?",
    answer:
      "Kesinlikle. Tüm cilt verileriniz ve fotoğraflarınız kurumsal düzeyde şifreleme ile güvenli bir şekilde saklanır ve işlenir. Verilerinizi dilediğiniz zaman silebilirsiniz. Uygulamamız, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) başta olmak üzere tüm ilgili gizlilik düzenlemelerine tam uyum sağlar.",
  },
  {
    question: "Aboneliğimi istediğim zaman iptal edebilir miyim?",
    answer:
      "Evet, aboneliğinizi dilediğiniz zaman iptal edebilirsiniz ve iptal ücreti alınmaz. Ücretli aboneliklerde ise faturalama dönemi sonuna kadar erişiminiz devam eder.",
  },
  {
    question: "Kişiselleştirilmiş ürün önerileri sunuyor musunuz?",
    answer:
      "Evet! Cilt analizine dayanarak, yapay zekamız cilt tipiniz, mevcut cilt problemleriniz ve rutin alışkanlıklarınızı dikkate alarak en uygun içerikleri önerir. Marka odaklı değil, içerik bazlı çalışan sistemimiz sayesinde gerçekten ihtiyacınız olan bileşenleri kolayca keşfedebilirsiniz.",
  },
  {
    question: "Cilt analiz fotoğraflarını ne sıklıkla çekmeliyim?",
    answer:
      "Cilt analiz fotoğraflarınızı haftada 1 kez çekmeniz yeterlidir. Uygulama sizi her hafta nazikçe hatırlatır ve bu düzenli takip sayesinde cildinizdeki değişimleri sağlıklı bir şekilde gözlemleyebilirsiniz.",
  },
  {
    question: "Ücretsiz plana neler dahil?",
    answer:
      "Uygulamamızı denemek tamamen ücretsizdir. Kayıt olduktan sonra tüm temel özellikleri kullanabilir ve 1 kez cilt analizi yapabilirsiniz.",
  },
  {
    question: "Hassas cildim varsa Skinly'i kullanabilir miyim?",
    answer:
      "Skinly, hassas cilt dahil olmak üzere tüm cilt tipleri için tasarlanmıştır. Önerilerimiz özellikle hassasiyet seviyelerini dikkate alır ve nazik, hipoalerjenik ürünler sunar. Ayrıca, tahrişe neden olabilecek içeriklerden kaçınmanıza yardımcı olur.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedSection
      id="faq"
      className="container-padding py-10 md:py-20 bg-gradient-to-br from-[#6B88EB]/5 to-[#1BCEE0]/5 rounded-3xl"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#6B88EB]/10 text-[#6B88EB] font-medium border-0 px-6 py-2 rounded-full">
            SSS
          </Badge>
          <h2 className="text-4xl font-bold font-sans text-[#323232]">
            Sıkça Sorulan <span className="text-gradient-primary">Sorular</span>
          </h2>
          <p className="text-xl text-[#323232]/70 max-w-2xl mx-auto font-sans">
            Skinly&apos;nin yapay zeka destekli cilt analizi hakkında bilmeniz gereken
            her şey.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-[#323232] font-sans pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#6B88EB]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#6B88EB]" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <div className="h-px bg-gradient-to-r from-[#1BCEE0]/20 to-[#6B88EB]/20 mb-4"></div>
                      <p className="text-[#323232]/80 font-sans leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12 p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-[#323232] font-sans mb-2">
            Hala sorularınız mı var?
          </h3>
          <p className="text-[#323232]/70 font-sans mb-4">
            Destek ekibimiz, Skinly&apos;den en iyi şekilde faydalanmanız için burada.
          </p>
          <Link href="/contact-us">
            <motion.button
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1BCEE0] to-[#6B88EB] text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Destek ile iletişime geçin
            </motion.button>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
