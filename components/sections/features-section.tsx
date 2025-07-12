"use client";

import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/animated-section";
import { staggerContainer, staggerItem } from "@/lib/variants";
import { motion, Variants } from "framer-motion";
import { features } from "@/lib/features-data";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <AnimatedSection
      id="features"
      className="bg-white py-12  md:py-16 lg:py-24"
    >
      <div className="container-padding">
        <div className="text-center space-y-4 mb-20">
          <Badge className="bg-[#1BCEE0]/10 text-[#1E63A3] font-medium border-0">
            Özellikler
          </Badge>
          <h2 className="text-4xl font-bold font-sans text-[#323232]">
            Cildinizin Neye İhtiyacı Olduğunu <br />{" "}
            <span className="text-gradient-primary">
              Yapay Zeka Destekli 
            </span>{" "}
            Analizle Öğrenin
          </h2>
          <p className="text-xl text-[#323232]/70 max-w-2xl mx-auto font-sans">
            Gelişmiş yapay zeka teknolojimiz, cilt durumunuzu analiz eder ve en
            iyi cilt bakım sonuçları için size özel öneriler sunar.
          </p>
        </div>

        <motion.div
          className="space-y-12 md:space-y-28 "
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          animate="show"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={staggerItem() as Variants}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center `}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-[#323232] font-sans flex items-center gap-3">
                    <span
                      className="text-2xl md:text-3xl w-10 h-10 p-4 md:p-8 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: feature.iconBgColor,
                        color: feature.iconColor,
                      }}
                    >
                      {feature.number}
                    </span>
                    {feature.title}
                  </h3>
                  <p className="text-lg text-[#323232]/70 font-sans leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Feature Points */}
                <div className=" space-y-4 md:space-y-6">
                  {feature.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start gap-4">
                      <div
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: feature.iconBgColor }}
                      >
                        <point.icon
                          className="h-4 w-4 md:w-5 md:h-5"
                          style={{ color: feature.iconColor }}
                        />
                      </div>
                      <p className="text-[#323232]/80 font-sans leading-relaxed pt-2 font-semibold">
                        {point.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 relative">
                <div className="relative max-w-lg">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-3xl shadow-md"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
