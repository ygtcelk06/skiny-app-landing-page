'use client';

import { motion } from 'framer-motion';

export default function UserAgreement() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">TERMS AND CONDITIONS</h1>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold mb-4">1. Parties</h2>
              <p>
                This Terms and Conditions Agreement ("Agreement") is entered into between Ahmet Yiğit ÇELİK (T.C:49285044668) ("Company") and the user ("User") who benefits from the services by registering for the application.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">2. Acceptance and Effectiveness</h2>
              <p>
                By downloading and/or registering to use this application, the User declares that they have read, understood, and accepted all conditions of this Agreement. The User accepts that they are over 18 years of age and have the legal capacity to act on their own behalf.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">3. Service Description</h2>
              <p>
                The application provides advisory analysis and guidance based on the user's uploaded facial photograph, skin type, lifestyle, and cosmetic habits based on their own declarations, as well as other users' feedback and general usage trends. The recommendations offered are created based on the views, experiences, and feedback of the user community and do not constitute any medical evaluation, skin health diagnosis, or dermatological examination. The analyses provided within the scope of the application are designed solely to provide personalized recommendations to users.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">4. Terms of Use</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The application can only be used by individuals aged 18 and over.</li>
                <li>The user is only obliged to provide accurate and up-to-date information about themselves.</li>
                <li>By using the application, the user declares that they are over 18 years of age.</li>
                <li>The Company and/or data controller are in no way responsible for any direct or indirect damages that the user may suffer as a result of false declarations and/or statements.</li>
                <li>Furthermore, the user is responsible for all direct and indirect damages, expenses, administrative fines, and third-party claims that the Company and/or business partners may suffer due to the user providing false, misleading, incomplete, or third-party information, and the user accepts and undertakes to compensate for any damages that may arise in this context.</li>
                <li>The application cannot be used for medical diagnosis, diagnosis, or treatment purposes.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">5. Intellectual Property Rights</h2>
              <p>
                All rights over the application and its content belong to the Company. The user cannot engage in activities such as unauthorized copying, distribution, or modification of the application or analysis outputs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">6. Protection of Personal Data and Privacy</h2>
              <p>
                Only limited information necessary for the application to function is requested from users. These are limited to data such as name, surname, age, gender, skin type, lifestyle information (such as sun exposure duration, average sleep duration, etc.), and facial photographs provided by the user based on their own declarations.
              </p>
              <p className="mt-4">
                This data is processed to provide users with personalized analysis and recommendations.
              </p>
              <p className="mt-4">
                The application does not request, collect, process, or store data regarding users' health history, diagnosis information, disease history, or medical records in any way.
              </p>
              <p className="mt-4">
                Facial photographs obtained from users are used only in automated analysis processes, and this data is not stored or shared with third parties without users' explicit consent. Personal data is stored securely, and the server service hosting the application may be provided by data processors located domestically and/or internationally. In this context, the transfer of personal data abroad is carried out only with users' explicit consent and in accordance with Article 49 of the General Data Protection Regulation (GDPR) and applicable legislation.
              </p>
              <p className="mt-4">
                Data processing processes are carried out in full compliance with the General Data Protection Regulation (GDPR) and related secondary legislation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">7. Disclaimer and Waiver</h2>
              <p>
                The application provides only advisory and recommendation-based analysis outputs. In no way does it provide medical diagnosis, treatment, or dermatological evaluation services.
              </p>
              <p className="mt-4">
                The guidance provided through the application is created based on information declared by the user and structured based on the experiences and feedback of the user community. The accuracy of these declarations cannot be verified by the Company; the Company and data controller cannot be held responsible for any damage, risk, or consequences that may arise as a result of false, misleading, or incomplete information sharing.
              </p>
              <p className="mt-4">
                The application does not request information about users' health history, diagnosis information, disease history, or medical history in any way and undertakes not to process such data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">8. Duration and Termination of the Agreement</h2>
              <p>
                This Agreement enters into force upon the user's registration to the application and remains valid as long as the user's membership in the application continues.
              </p>
              <p className="mt-4">
                The user may terminate their membership and terminate the Agreement at any time by using the account deletion feature in the application. The Company reserves the right to suspend or terminate the account without prior notice in cases of breach of agreement, false declaration, security breach, or unlawful use.
              </p>
              <p className="mt-4">
                The Company has the right to change, remove, or limit the scope, features, and services offered of the application without prior notice.
              </p>
              <p className="mt-4">
                In case of termination of the Agreement, user data will be deleted, destroyed, or anonymized, subject to applicable legislation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">9. Applicable Law and Jurisdiction</h2>
              <p>
                This Agreement is subject to applicable laws and regulations and shall be interpreted and applied in accordance with applicable legislation. The parties agree that any disputes arising from this Agreement shall be resolved in accordance with applicable law, and competent courts shall have jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">10. Changes</h2>
              <p>
                The Company has the right to make unilateral changes to the provisions of this Agreement at any time. Changes become effective as of the date they are published within the application and are binding on users. The user's continued use of the application after the change date means that they accept these changes.
              </p>
              <p className="mt-4">
                The Company may notify users of changes it deems important through notification; however, this is not a condition for the validity of the notification, nor does it affect the effectiveness of the agreement change.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">11. Contact Information</h2>
              <ul className="list-none pl-0 space-y-2">
                <li><strong>Company Name:</strong> Ahmet Yiğit ÇELİK (T.C:49285044668)</li>
                <li><strong>Contact:</strong> info@skinly.com.tr</li>
                <li><strong>Address:</strong> Ragıp Tüzün Mahallesi Coşkun Sokak 33/3 Yenimahalle Ankara, Turkey</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">12. Subscription System and Pricing</h2>
              <p>
                The application offers two different usage models: "standard" and "premium."
              </p>
              <p className="mt-4">
                Standard version users can register for the application free of charge and receive one skin analysis report on a one-time basis after registration. They also have unlimited access to other basic services offered by the application.
              </p>
              <p className="mt-4">
                Premium version users, in addition to all rights offered in the standard version, gain the right to access a number of skin analysis reports appropriate to their purchased subscription package. They can also benefit from all advanced features of the application without limitation.
              </p>
              <p className="mt-4">
                Premium subscription fees may vary depending on the type, duration, and content of the package offered.
              </p>
              <p className="mt-4">
                The Company reserves the right to change subscription fees and package structures at any time and to any extent without prior notice. These changes come into effect upon announcement within the application and are valid for existing users at the beginning of the new period. By purchasing a premium membership, the user declares that they accept the collection of the fee for the package they have chosen and the conditions specified in this agreement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

