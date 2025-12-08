'use client';

import { motion } from 'framer-motion';

export default function SubscriptionAgreement() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">SUBSCRIPTION AGREEMENT</h1>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold mb-4">1. Parties</h2>
              <p>
                This Subscription Agreement ("Agreement") is entered into electronically between Ahmet Yiğit Çelik (T.C:49285044668) ("Service Provider"), residing at Ragıp Tüzün Mahallesi Coşkun Sokak 33/3 Yenimahalle Ankara, Turkey, on one hand, and the user ("Subscriber") who uses the service through the mobile application or website, on the other hand. By approving this agreement, the user is deemed to have accepted all provisions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">2. Subject of the Agreement</h2>
              <p>
                This Agreement regulates the subscription types, payment terms, cancellation, and termination processes related to the artificial intelligence-supported skin analysis service provided by the Service Provider.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">3. Subscription Types and Scope</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">3.1 Free Version</h3>
                <p>
                  The free version is not time-limited but is limited in terms of content and features.
                </p>
                <p className="mt-2">
                  Users can benefit from basic skin analysis services to a limited extent in this version.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">3.2 Paid Subscription Packages</h3>
                <p>The packages offered are specified below:</p>
                <p className="mt-2">
                  <strong>Premium Package:</strong> weekly 2.99 USD or annual 49.99 USD (prices include applicable taxes and are calculated in US Dollars)
                </p>
                <p className="mt-2">
                  Package contents and pricing will be announced separately within the application.
                </p>
                <p className="mt-2">
                  The Service Provider reserves the right to make changes to package contents and pricing.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">4. Subscription Duration, Renewal, and Termination</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">4.1 Duration and Renewal</h3>
                <p>
                  Subscriptions are offered on a weekly or annual basis. This agreement is deemed to be established upon approval of this agreement and commencement of use of the application.
                </p>
                <p className="mt-2">
                  If the user does not cancel by the end of the period, the subscription will automatically renew and payment will be collected from the registered card. A third-party service called RevenueCat is used for payment and membership tracking. By signing this agreement, the Subscriber is deemed to have declared and accepted that they wish to renew their membership unless a cancellation request is submitted by the Subscriber.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">4.2 Termination and Cancellation Rights</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The Subscriber may terminate their subscription at any time.</li>
                  <li>Termination notice is made in writing or through a permanent data storage medium (e.g., email, in-app notification).</li>
                  <li>Termination will be processed within 3 business days at the latest from receipt of the notice.</li>
                  <li>The right of withdrawal cannot be used after delivery of digital content has begun.</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">4.3 Termination Notice and Duration</h3>
                <p>
                  Termination notice is made by the user in writing or through a permanent data storage medium.
                </p>
                <p className="mt-2">
                  The Provider completes the termination process within 7 days at the latest after receiving the notice.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">4.4 Consequences of Termination</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>When the termination process is completed, services under the agreement are stopped.</li>
                  <li>No additional fees will be charged to the user after the agreement ends.</li>
                  <li>Subscription transfer is not possible.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">5. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subscription fees are collected by credit card, virtual card, or other payment methods.</li>
                <li>Service is not activated without payment.</li>
                <li>All prices include applicable taxes.</li>
                <li>In case of delayed payment, the user is warned, and if payment is not made, the service is stopped.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">6. Service Interruption Due to Force Majeure</h2>
              <p>
                In case the service provider cannot provide the promised service in any way due to force majeure such as earthquake, flood, fire, etc., the Service Provider cannot be held liable.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">7. User Obligations</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The user uses the service only for personal purposes.</li>
                <li>The user is responsible for the accuracy of information.</li>
                <li>Declarations are taken as basis; the Service Provider is not responsible for false declarations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">8. Age Limit</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The application is only for individuals aged 18 and over.</li>
                <li>Users under 18 cannot use the application.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">9. Service Provider's Obligations</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensures that the service operates technically properly.</li>
                <li>Informs the user in case of interruption.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">10. Agreement Changes</h2>
              <p>
                The right to make changes belongs to the Service Provider.
              </p>
              <p className="mt-2">
                Changes are notified to users. The absence of one or more mandatory elements in the subscription agreement does not affect the validity of the agreement, and in this case, the service provider does not stop the delivery of goods or performance of services. Any deficiency in the agreement is immediately remedied by the party drafting the agreement without requesting additional payment from the consumer. Otherwise, the consumer may terminate the agreement without making any payment under the names of penalty clause, compensation, and similar.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">11. Information Obligation</h2>
              <p>
                Users are informed about service usage, tariff changes, interruptions, and withdrawal/termination rights.
              </p>
              <p className="mt-2">
                Information is provided through a permanent data storage medium.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">12. Applicable Law and Jurisdiction</h2>
              <p>
                This Agreement is subject to applicable laws and regulations. Disputes arising from this Agreement shall be resolved in accordance with applicable law, and the parties agree to submit to the jurisdiction of competent courts.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">13. Refund of Fees</h2>
              <p>
                Fee refund is only possible in cases of problems arising from the Service Provider.
              </p>
              <p className="mt-2">
                In cases arising from the fault of the application administrator, if the subscriber cannot receive the service they purchased, the fee for the period during which they could not receive the service is refunded.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">14. Temporary Suspension of Service</h2>
              <p>
                The service provider adds the service it could not provide to Subscribers during planned maintenance and repair work to the end of the subscription period for the duration of the temporary suspension of the service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">15. Effectiveness</h2>
              <p>
                This Agreement enters into force upon the user's approval of the agreement in the electronic environment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

