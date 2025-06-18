import React from 'react';
import { FileText, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <FileText className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using xFins Banks Forex Academy ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Service Description */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 mb-4">
                xFins Banks Forex Academy provides educational services related to forex trading, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Forex trading education and training materials</li>
                <li>Mentorship programs and coaching sessions</li>
                <li>Trading signals and market analysis</li>
                <li>Educational webinars and workshops</li>
                <li>Access to trading tools and resources</li>
              </ul>
            </section>

            {/* User Accounts */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  To access certain features of our Service, you must create an account. You are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
              </div>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Our services are offered on a subscription or one-time payment basis. Payment terms include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>Prices are subject to change with 30 days notice</li>
                  <li>Failed payments may result in service suspension</li>
                  <li>Subscription renewals are automatic unless cancelled</li>
                </ul>
              </div>
            </section>

            {/* User Conduct */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User Conduct</h2>
              <div className="space-y-4">
                <p className="text-gray-700">You agree not to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Use the Service for any illegal or unauthorized purpose</li>
                  <li>Share your account credentials with others</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the Service</li>
                  <li>Use automated tools to access the Service</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  All content, materials, and intellectual property on our Service are owned by xFins Banks Forex Academy or our licensors. This includes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Educational materials and course content</li>
                  <li>Trading strategies and methodologies</li>
                  <li>Website design and functionality</li>
                  <li>Brand names, logos, and trademarks</li>
                </ul>
                <p className="text-gray-700">
                  You may not reproduce, distribute, or create derivative works without our written permission.
                </p>
              </div>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2 text-yellow-600" />
                7. Disclaimers and Risk Warnings
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-yellow-800 font-medium mb-2">Important Risk Warning:</p>
                <p className="text-yellow-700 text-sm">
                  Forex trading involves substantial risk of loss and is not suitable for all investors. 
                  Past performance does not guarantee future results. You should carefully consider your 
                  financial situation and risk tolerance before trading.
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>We do not guarantee profits or specific trading results</li>
                <li>Educational content is for informational purposes only</li>
                <li>We are not responsible for trading losses</li>
                <li>Market conditions can change rapidly and unpredictably</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                To the maximum extent permitted by law, xFins Banks Forex Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
              <div className="space-y-4">
                <p className="text-gray-700">We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.</p>
                <p className="text-gray-700">Upon termination, your right to use the Service will cease immediately.</p>
              </div>
            </section>

            {/* Privacy Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@xfinsbanks.com<br />
                  <strong>Phone:</strong> +234 8062558567<br />
                  <strong>Address:</strong> Suite 302A Bahamas Plaza, Gudu Market, Abuja, Nigeria
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 