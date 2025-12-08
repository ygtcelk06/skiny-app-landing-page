'use client';

import { motion } from 'framer-motion';

export default function ConsentForm() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">EXPLICIT CONSENT</h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              In accordance with the General Data Protection Regulation (GDPR) (EU) 2016/679, I acknowledge and declare that I give my explicit consent to the processing, transfer, and storage of my personal data specified below in order to benefit from the skin analysis service provided within the scope of the Skinly mobile application:
            </p>

            <div>
              <h2 className="text-xl font-semibold mb-4">1. Data to be Processed:</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Facial photograph</li>
                <li>Skin type information</li>
                <li>Gender, date of birth, and contact information</li>
                <li>User-specific reports and data generated based on skin analysis</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">2. Purpose:</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Performance of skin analysis</li>
                <li>Provision of user-specific reports and recommendations</li>
                <li>Tracking of user history and archiving of analyses</li>
                <li>Ensuring the technical operation of the application</li>
                <li>Fulfillment of obligations arising from applicable legislation</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">3. Transfer:</h2>
              <p>
                I explicitly consent to the sharing of my personal data specified above with domestic and international service providers that provide the technical infrastructure of the application and enable us to provide services, information technology and artificial intelligence companies, server providers, and solution partners responsible for ensuring data security.
              </p>
              <p className="mt-4">
                In this context, I consent to the transfer of my personal data outside the country. My personal data will be transferred abroad only with my explicit consent in accordance with Article 49 of the GDPR.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">4. Storage Period:</h2>
              <p>
                My data will be stored for the duration of my registration in the application and for 2 years following the deletion of my account; thereafter, it will be deleted, destroyed, or anonymized. I explicitly consent to the anonymization of my personal data instead of deletion if the application administrator deems it necessary.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">5. Information:</h2>
              <p>
                I have read, understood, and been informed about the "Privacy Notice" regarding the processing of my personal data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">6. Technical Necessity:</h2>
              <p>
                The provision of this service technically requires the processing of my facial photograph and skin type information. Therefore, I make my decision knowing that I will not be able to benefit from the service if I do not give explicit consent.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

