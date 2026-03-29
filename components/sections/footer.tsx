"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { getClientTranslations } from "@/lib/i18n-client"
import { getClientRoute } from "@/lib/routes"

export default function Footer() {
  const [footerData, setFooterData] = useState<{
    tagline: string;
    company: string;
    support: string;
    links: {
      about: string;
      contact: string;
      deleteAccount: string;
      kvkk: string;
      consent: string;
      subscription: string;
      userAgreement: string;
      privacy: string;
      contactUs: string;
    };
    copyright: string;
  } | null>(null);
  
  const [footerSections, setFooterSections] = useState<Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>>([]);
  
  useEffect(() => {
    const t = getClientTranslations('footer');
    const data = {
      tagline: t('tagline'),
      company: t('company'),
      support: t('support'),
      links: {
        about: t('links.about'),
        contact: t('links.contact'),
        deleteAccount: t('links.deleteAccount'),
        kvkk: t('links.kvkk'),
        consent: t('links.consent'),
        subscription: t('links.subscription'),
        userAgreement: t('links.userAgreement'),
        privacy: t('links.privacy'),
        contactUs: t('links.contactUs'),
      },
      copyright: t('copyright'),
    };
    setFooterData(data);
    
    // Route'ları client-side'da hesapla
    setFooterSections([
      {
        title: data.company,
        links: [
          { name: data.links.about, href: getClientRoute('about') },
          { name: data.links.contact, href: getClientRoute('contact') },
          { name: data.links.deleteAccount, href: getClientRoute('deleteAccount') },
        ],
      },
      {
        title: data.support,
        links: [
          { name: data.links.kvkk, href: getClientRoute('kvkk') },
          { name: data.links.consent, href: getClientRoute('consent') },
          { name: data.links.subscription, href: getClientRoute('subscription') },
          { name: data.links.userAgreement, href: getClientRoute('userAgreement') },
          { name: data.links.privacy, href: getClientRoute('privacy') },
          { name: data.links.contactUs, href: getClientRoute('contactUs') },
        ],
      },
    ]);
  }, []);
  
  if (!footerData || footerSections.length === 0) {
    return <footer className="bg-[#323232] text-white py-12 min-h-[200px]"></footer>;
  }
  return (
    <footer className="bg-[#323232] text-white py-12">
      <div className="container-padding">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start">
              <Image 
                src="/images/klaris.png" 
                alt="Klaris" 
                width={200} 
                height={120}
                className="h-[112px] w-auto max-w-[240px] object-contain object-left"
              />
            </div>
            <p className="text-white/70 font-sans">{footerData.tagline}</p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4 text-center sm:text-left">
              <h4 className="font-semibold font-sans">{section.title}</h4>
              <div className="space-y-2 text-white/70">
                {section.links.map((link) => (
                  <Link 
                    key={link.href} 
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
          <p className="font-sans">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
