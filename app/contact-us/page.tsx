"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/animated-section";
import { Input } from "@/components/ui/input";
import AnimatedButton from "@/components/animated-button";
import { useRef } from 'react';
import { getClientTranslations } from '@/lib/i18n-client';

// EmailJS yapılandırması
const PUBLIC_KEY = "XCVBgRHHHdRZVDpmX";
const SERVICE_ID = "service_755kkoq";
const TEMPLATE_ID = "template_w3cqony";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [translations, setTranslations] = useState<any>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // /contact-us route'u İngilizce olduğu için 'en' locale zorla
    const t = getClientTranslations('legal.contactUs', 'en');
    setTranslations({
      badge: t('badge'),
      title: t('title'),
      description: t('description'),
      nameLabel: t('nameLabel'),
      namePlaceholder: t('namePlaceholder'),
      emailLabel: t('emailLabel'),
      emailPlaceholder: t('emailPlaceholder'),
      messageLabel: t('messageLabel'),
      messagePlaceholder: t('messagePlaceholder'),
      sendButton: t('sendButton'),
      sending: t('sending'),
      errorMessage: t('errorMessage'),
      successMessage: t('successMessage'),
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setLoading(true);
      setError("");
      
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: {
            user_name: formRef.current.user_name.value,
            user_email: formRef.current.user_email.value,
            message: formRef.current.message.value,
          },
        }),
      });

      if (response.ok) {
        setSuccess(true);
        formRef.current.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setError(translations?.errorMessage || "Your message could not be sent. Please try again later.");
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!translations) {
    return (
      <AnimatedSection className="container-padding py-10 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-8"></div>
          </div>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection className="container-padding py-10 md:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <Badge className="bg-[#323232] text-white font-medium border-0 px-6 py-2 rounded-full">
            {translations.badge}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-[#323232]">
            {translations.title}
          </h2>
          <p className="text-xl text-[#323232]/70 font-sans">
            {translations.description}
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm">
          <div className="space-y-2">
            <label htmlFor="user_name" className="block text-sm font-medium text-[#323232]">
              {translations.nameLabel}
            </label>
            <Input
              id="user_name"
              name="user_name"
              type="text"
              className="w-full"
              placeholder={translations.namePlaceholder}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="user_email" className="block text-sm font-medium text-[#323232]">
              {translations.emailLabel}
            </label>
            <Input
              id="user_email"
              name="user_email"
              type="email"
              className="w-full"
              placeholder={translations.emailPlaceholder}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-[#323232]">
              {translations.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full min-h-[150px] p-3 rounded-md border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#C838F8] focus:border-transparent"
              placeholder={translations.messagePlaceholder}
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm font-medium text-center">
              {error}
            </div>
          )}

          {success && (
            <div className="text-green-500 text-sm font-medium text-center">
              {translations.successMessage}
            </div>
          )}

          <AnimatedButton
            onClick={() => formRef.current?.requestSubmit()}
            className={`w-full font-semibold py-3 bg-gradient-to-r from-[#C838F8] to-[#6B88EB] text-white transition-all duration-200 ${
              loading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
            }`}
            disabled={loading}
          >
            {loading ? translations.sending : translations.sendButton}
          </AnimatedButton>
        </form>
      </div>
    </AnimatedSection>
  );
} 