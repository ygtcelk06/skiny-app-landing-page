"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import AnimatedSection from "@/components/animated-section"

const faqs = [
  {
    question: "How accurate is the AI skin analysis?",
    answer:
      "Our AI technology uses advanced computer vision and machine learning algorithms trained on thousands of dermatologist-verified skin images. The analysis accuracy is over 90% for common skin concerns like acne, wrinkles, dark spots, and skin type identification.",
  },
  {
    question: "Is my skin data and photos secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption to protect all your data. Your photos are processed securely and never shared with third parties. You can delete your data at any time, and we comply with GDPR and other privacy regulations.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees. If you cancel during your free trial, you won't be charged. For paid subscriptions, you'll continue to have access until the end of your billing period.",
  },
  {
    question: "Do you offer personalized product recommendations?",
    answer:
      "Yes! Based on your skin analysis, we provide personalized skincare product recommendations from trusted brands. Our AI considers your skin type, concerns, budget, and ingredient preferences to suggest the most suitable products for your routine.",
  },
  {
    question: "How often should I take skin analysis photos?",
    answer:
      "We recommend taking photos weekly for the first month to establish a baseline, then bi-weekly or monthly for ongoing progress tracking. The app will send you gentle reminders, but you can analyze your skin as often as you'd like.",
  },
  {
    question: "What's included in the free trial?",
    answer:
      "The 7-day free trial includes full access to all Premium features: unlimited skin analyses, personalized recommendations, progress tracking, and priority support. No credit card required to start your trial.",
  },
  {
    question: "Can I use Skiny if I have sensitive skin?",
    answer:
      "Skiny is designed for all skin types, including sensitive skin. Our recommendations specifically account for sensitivity levels and suggest gentle, hypoallergenic products. We also provide ingredient analysis to help you avoid potential irritants.",
  },
  {
    question: "Do you provide dermatologist consultations?",
    answer:
      "Premium subscribers get access to virtual dermatologist consultations. You can book 15-minute sessions to discuss your skin analysis results, get professional advice, and receive personalized treatment recommendations from licensed dermatologists.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <AnimatedSection
      id="faq"
      className="container-padding section-padding bg-gradient-to-br from-[#6B88EB]/5 to-[#1BCEE0]/5 rounded-3xl"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#6B88EB]/10 text-[#6B88EB] font-medium border-0 px-6 py-2 rounded-full">FAQ</Badge>
          <h2 className="text-4xl font-bold font-sans text-[#323232]">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="text-xl text-[#323232]/70 max-w-2xl mx-auto font-sans">
            Everything you need to know about Skiny&apos;s AI-powered skincare analysis.
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
                <h3 className="text-lg font-semibold text-[#323232] font-sans pr-4">{faq.question}</h3>
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
                      <p className="text-[#323232]/80 font-sans leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12 p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-[#323232] font-sans mb-2">Still have questions?</h3>
          <p className="text-[#323232]/70 font-sans mb-4">
            Our support team is here to help you get the most out of Skiny.
          </p>
          <motion.button
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1BCEE0] to-[#6B88EB] text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </div>
      </div>
    </AnimatedSection>
  )
}
