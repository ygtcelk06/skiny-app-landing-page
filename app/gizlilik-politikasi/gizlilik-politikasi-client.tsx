'use client';

import { motion } from 'framer-motion';
import type trMessages from '@/messages/tr.json';

type PrivacyContent = (typeof trMessages)['legal']['privacy'];

type Props = {
  privacy: PrivacyContent;
};

export default function GizlilikPolitikasiClient({ privacy }: Props) {
  const { title, sections: s } = privacy;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">{title}</h1>

          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold mb-4">{s.introduction.title}</h2>
              <p>{s.introduction.content}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{s.collectedData.title}</h2>
              <p>{s.collectedData.content}</p>
              <ul className="list-disc pl-6 space-y-2">
                {s.collectedData.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{s.dataCollection.title}</h2>
              <p>{s.dataCollection.content}</p>
              <p className="font-medium mt-4">{s.dataCollection.legalBasis}</p>
              <ul className="list-disc pl-6 space-y-2">
                {s.dataCollection.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{s.dataProcessing.title}</h2>
              <p>{s.dataProcessing.content}</p>
              <ul className="list-disc pl-6 space-y-2">
                {s.dataProcessing.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{s.dataStorage.title}</h2>
              <p>{s.dataStorage.content}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{s.faceData.title}</h2>
              <p>{s.faceData.content}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{s.thirdParty.title}</h2>
              <p>{s.thirdParty.content}</p>
              <ul className="list-disc pl-6 space-y-2">
                {s.thirdParty.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{s.thirdPartyAnalytics.title}</h2>
              <p>{s.thirdPartyAnalytics.content}</p>
              <p className="mt-4">{s.thirdPartyAnalytics.content2}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{s.dataTransfer.title}</h2>
              <p>{s.dataTransfer.content}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{s.minors.title}</h2>
              <p>{s.minors.content}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{s.userRights.title}</h2>
              <p>{s.userRights.content}</p>
              <ul className="list-disc pl-6 space-y-2">
                {s.userRights.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{s.applicationMethod.title}</h2>
              <p>{s.applicationMethod.content}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{s.changes.title}</h2>
              <p>{s.changes.content}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
