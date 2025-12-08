'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getClientTranslations } from '@/lib/i18n-client';

export default function GizlilikPolitikasi() {
  const [t, setT] = useState<ReturnType<typeof getClientTranslations> | null>(null);
  
  useEffect(() => {
    setT(getClientTranslations('legal.privacy'));
  }, []);
  
  if (!t) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">{t('title')}</h1>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold mb-4">{t('sections.introduction.title')}</h2>
              <p>{t('sections.introduction.content')}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{t('sections.collectedData.title')}</h2>
              <p>{t('sections.collectedData.content')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {(t('sections.collectedData.items') as string[]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{t('sections.dataCollection.title')}</h2>
              <p>{t('sections.dataCollection.content')}</p>
              <p className="font-medium mt-4">{t('sections.dataCollection.legalBasis')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {(t('sections.dataCollection.items') as string[]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{t('sections.dataProcessing.title')}</h2>
              <p>{t('sections.dataProcessing.content')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {(t('sections.dataProcessing.items') as string[]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{t('sections.dataStorage.title')}</h2>
              <p>{t('sections.dataStorage.content')}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{t('sections.faceData.title')}</h2>
              <p>{t('sections.faceData.content')}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{t('sections.thirdParty.title')}</h2>
              <p>{t('sections.thirdParty.content')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {(t('sections.thirdParty.items') as string[]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{t('sections.thirdPartyAnalytics.title')}</h2>
              <p>{t('sections.thirdPartyAnalytics.content')}</p>
              <p className="mt-4">{t('sections.thirdPartyAnalytics.content2')}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{t('sections.dataTransfer.title')}</h2>
              <p>{t('sections.dataTransfer.content')}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{t('sections.minors.title')}</h2>
              <p>{t('sections.minors.content')}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{t('sections.userRights.title')}</h2>
              <p>{t('sections.userRights.content')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {(t('sections.userRights.items') as string[]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{t('sections.applicationMethod.title')}</h2>
              <p>{t('sections.applicationMethod.content')}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{t('sections.changes.title')}</h2>
              <p>{t('sections.changes.content')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
