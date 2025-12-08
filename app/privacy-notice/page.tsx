'use client';

import { motion } from 'framer-motion';

export default function PrivacyNotice() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">PRIVACY NOTICE</h1>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold mb-4">1. Data Controller / Business Information</h2>
              <p>
                In accordance with the General Data Protection Regulation (GDPR) (EU) 2016/679 for users in the European Union and the United Kingdom, and the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) for users in California, United States, your personal data may be processed by Ahmet Yiğit ÇELİK (T.C:49285044668) ("Company") as the data controller, within the scope described below.
              </p>
              <p className="mt-4">
                <strong>For California Users</strong>: Under CCPA, we are a "business" that collects and processes personal information of California residents.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">2. Purpose of Processing Personal Data</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Creation and management of user accounts</li>
                <li>Provision of skin analysis services and creation of personalized recommendations</li>
                <li>Improvement and analysis of application user experience</li>
                <li>Provision of user support services</li>
                <li>Fulfillment of legal obligations</li>
                <li>Enhancement of service quality and development of new features</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">3. Categories of Personal Data Processed</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identity Information: Name, surname, date of birth, gender</li>
                <li>Contact Information: Email address, phone number</li>
                <li>User Information: Skin type, skin sensitivities, cosmetic habits</li>
                <li>Visual Data: Facial photographs</li>
                <li>Usage Data: Application usage statistics, preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">4. Transfer of Personal Data</h2>
              <p>Your personal data may be transferred to third parties for the following purposes and legal reasons:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Domestic and international technical support companies and cloud service providers from whom services are obtained</li>
                <li>Authorized public institutions and organizations within the scope of legal obligations</li>
                <li>Business partners and service providers</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">5. Method and Legal Basis for Personal Data Collection</h2>
              <p>
                Your personal data is collected electronically through the mobile application and website. This collection is based on the following legal grounds:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Your explicit consent</li>
                <li>Establishment and performance of contract</li>
                <li>Fulfillment of legal obligations</li>
                <li>Legitimate interest</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">6. Rights of the Data Subject / Consumer Rights</h2>
              
              <div className="mb-4">
                <p className="font-semibold mb-2">For EU/UK Users (GDPR Rights):</p>
                <p className="mb-2">In accordance with Articles 15-22 of the GDPR, everyone has the right to request from the data controller:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To know whether personal data is being processed</li>
                  <li>To request information if personal data has been processed</li>
                  <li>To know the purpose of processing personal data and whether it is used in accordance with its purpose</li>
                  <li>To know the third parties to whom personal data has been transferred within or outside the country</li>
                  <li>To request correction of personal data if it has been processed incompletely or incorrectly</li>
                  <li>To request deletion or destruction of personal data under the conditions set forth in Article 17 of the GDPR</li>
                  <li>To request notification of the operations carried out as a result of correction, deletion, and destruction requests to third parties to whom personal data has been transferred</li>
                  <li>To object to a result that is unfavorable to the person arising from the analysis of processed data exclusively through automated systems</li>
                  <li>To request compensation for damages suffered due to unlawful processing of personal data</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2">For California Users (CCPA/CPRA Rights):</p>
                <p className="mb-2">In accordance with the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), California residents have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Know what personal information is collected, used, shared, or sold</li>
                  <li>Delete personal information held by us and our service providers</li>
                  <li>Opt-out of the sale or sharing of personal information (we do not sell personal information)</li>
                  <li>Non-discrimination for exercising privacy rights</li>
                  <li>Correct inaccurate personal information</li>
                  <li>Limit the use and disclosure of sensitive personal information</li>
                  <li>Access and receive a copy of personal information in a portable format</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">7. Method of Application</h2>
              <p>To exercise your rights, you may apply by:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Sending an email to info@skinly.com.tr</li>
                <li>Sending a signed written request to Ragıp Tüzün Mahallesi Coşkun Sokak 33/3 Yenimahalle Ankara, Turkey</li>
                <li>Sending a message through the in-app support section</li>
              </ul>
              
              <div className="mt-4">
                <p className="font-semibold mb-2">Response Times:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>GDPR requests</strong>: Your application will be answered as soon as possible and within 30 (thirty) days at the latest (may be extended to 60 days for complex requests).</li>
                  <li><strong>CCPA/CPRA requests</strong>: Your application will be answered within 45 days (may be extended to 90 days with notice).</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">8. Changes</h2>
              <p>
                This Privacy Notice may be updated due to changing processes or regulatory changes. Updates will be published through the application and will be effective as of the date of publication.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

