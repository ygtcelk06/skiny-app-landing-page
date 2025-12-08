'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getClientTranslations } from '@/lib/i18n-client';

export default function DeleteAccountPage() {
  const [translations, setTranslations] = useState<any>(null);

  useEffect(() => {
    // Route'a göre locale belirle (getLocaleFromRoute otomatik yapıyor)
    const t = getClientTranslations('legal.deleteAccount');
    const stepsResult = t('steps');
    const deletedDataItemsResult = t('deletedDataItems');
    
    setTranslations({
      title: t('title'),
      intro: t('intro'),
      stepsTitle: t('stepsTitle'),
      stepsIntro: t('stepsIntro'),
      steps: Array.isArray(stepsResult) ? stepsResult : [],
      stepsNote: t('stepsNote'),
      deletedDataTitle: t('deletedDataTitle'),
      deletedDataIntro: t('deletedDataIntro'),
      deletedDataItems: Array.isArray(deletedDataItemsResult) ? deletedDataItemsResult : [],
      deletedDataNote: t('deletedDataNote'),
      processingTitle: t('processingTitle'),
      processingContent: t('processingContent'),
      contactTitle: t('contactTitle'),
      contactContent: t('contactContent'),
      contactEmail: t('contactEmail'),
    });
  }, []);

  if (!translations) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-8"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">{translations.title}</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            {translations.intro}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{translations.stepsTitle}</h2>
            <p>{translations.stepsIntro}</p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              {Array.isArray(translations.steps) ? translations.steps.map((step: string, index: number) => (
                <li key={index}>{step}</li>
              )) : null}
            </ol>
            <p className="mt-4">
              {translations.stepsNote}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{translations.deletedDataTitle}</h2>
            <p>{translations.deletedDataIntro}</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              {Array.isArray(translations.deletedDataItems) ? translations.deletedDataItems.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              )) : null}
            </ul>
            <p className="mt-4 text-sm italic">
              {translations.deletedDataNote}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{translations.processingTitle}</h2>
            <p>
              {translations.processingContent}
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">{translations.contactTitle}</h2>
            <p>
              {translations.contactContent}
              <br />
              <a href={`mailto:${translations.contactEmail}`} className="text-blue-600 hover:text-blue-800">
                📧 {translations.contactEmail}
              </a>
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
} 