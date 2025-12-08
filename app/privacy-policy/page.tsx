'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">PRIVACY POLICY</h1>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
              <p>
                This Privacy Policy contains the principles regarding how personal data collected from users of the Skinly - Skin Analysis Assistant mobile application ("Application") is processed, stored, and protected. This Privacy Policy complies with the General Data Protection Regulation (GDPR) for users in the European Union and the United Kingdom, and with the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) for users in California, United States. Users are deemed to have accepted this Privacy Policy by using the application.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">2. Data Collected</h2>
              <p>The following personal data may be collected from users through the application:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identity Information: Name, surname</li>
                <li>Contact Information: Email address</li>
                <li>Visual Data: Facial photographs uploaded by the user</li>
                <li>Habit and Preference Information: Skin type, responses regarding lifestyle</li>
                <li>Usage Data: Navigation and preference information within the application</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">3. Method of Data Collection and Legal Basis</h2>
              <p>Data may be collected through the application via user declarations and automatically during application use.</p>
              <p className="font-medium mt-4">Legal basis:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Article 6(1)(a) of the GDPR (explicit consent) - for EU/UK users</li>
                <li>Article 6(1)(f) of the GDPR (legitimate interest - anonymous usage data) - for EU/UK users</li>
                <li>CCPA/CPRA: Personal information is collected for business purposes as disclosed in this policy - for California users</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">4. Purposes of Data Processing</h2>
              <p>Collected data may be processed for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Performance of facial recognition-based skin analysis</li>
                <li>Provision of personalized products and recommendations</li>
                <li>Provision and improvement of services</li>
                <li>Communication with users</li>
                <li>Fulfillment of legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">5. Storage and Protection of Data</h2>
              <p>
                Users' personal data is stored on secure servers located domestically and/or internationally, with technical and administrative measures taken. Data is stored while the application is used and is retained for 2 years from the termination of the user's membership. After this period, data is deleted or anonymized. The application administrator decides whether data will be anonymized.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Additional Information Regarding Facial Data</h2>
              <p>
                Facial photographs uploaded by the user are processed solely for the purpose of performing artificial intelligence-supported skin analysis. These images are stored securely in the Supabase infrastructure and are retained as long as the user account is active. If the user deletes their account or requests deletion of their data, these images and related analysis results are permanently deleted. Skinly shares facial data only with business partners for the provision of services. In this context, images are analyzed by Face++ (Megvii), and this third-party service provider does not store facial photographs in their systems after analysis is completed. Facial data is not shared with unauthorized third parties or used for commercial purposes in any way.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">6. Sharing of Data with Third Parties</h2>
              <p>Data is not shared with third parties and institutions except in the following cases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The user has given explicit consent</li>
                <li>With sub-service providers for the provision of services (cloud hosting, artificial intelligence processing, etc.)</li>
                <li>With authorized public institutions and organizations within the scope of legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">6.1. Third-Party Analytics Tools</h2>
              <p>
                Some third-party analytics tools are used in our application to improve user experience, measure application performance, and detect technical errors. In this context, services such as PostHog and Meta App Events (Facebook Analytics) may process anonymous usage data. These tools may collect technical information such as in-app behaviors, navigation data, specific button clicks, and subscription-related interactions.
              </p>
              <p className="mt-4">
                This data does not contain your personal identification information and is not used for advertising targeting. All anonymous data collected is processed solely for application development and performance analysis.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">7. International Data Transfer</h2>
              <p>
                Personal data is transferred internationally within the scope of the application. This transfer is notified to the user together with the Terms and Conditions, Privacy Notice, and Explicit Consent, and is carried out with explicit consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">8. Users Under 18 / Children's Privacy</h2>
              <p>
                The application is closed to use by individuals under 18 years of age. Data belonging to users identified as belonging to this age group is immediately deleted.
              </p>
              <p className="mt-4">
                <strong>For US Users</strong>: In accordance with the Children's Online Privacy Protection Act (COPPA), we do not knowingly collect personal information from children under 13 years of age. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information immediately.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">9. User Rights</h2>
              
              <div className="mb-4">
                <p className="font-semibold mb-2">For EU/UK Users (GDPR Rights):</p>
                <p className="mb-2">In accordance with Articles 15-22 of the GDPR, users have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Know whether data is being processed</li>
                  <li>Request information if data has been processed</li>
                  <li>Know whether it is used in accordance with its purpose</li>
                  <li>Request correction of incomplete or incorrectly processed data</li>
                  <li>Request deletion/anonymization of data under Article 17 of the GDPR</li>
                  <li>Request notification to third parties to whom data has been transferred</li>
                  <li>Object to a result unfavorable to them arising from analysis by automated systems</li>
                  <li>Request compensation in case of damage</li>
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
              <h2 className="text-xl font-semibold mb-4">10. Method of Application</h2>
              <p>
                Users can apply through info@skinly.com.tr to exercise these rights.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>GDPR requests</strong>: All requests are answered within 30 days (may be extended to 60 days for complex requests).</li>
                <li><strong>CCPA/CPRA requests</strong>: All requests are answered within 45 days (may be extended to 90 days with notice).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">11. Changes and Updates</h2>
              <p>
                This Privacy Policy may be updated by the application administrator when necessary. The most current version is published within the application and/or through the website.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

