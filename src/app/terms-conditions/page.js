'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]">
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Please read these terms and conditions carefully before using our services.
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="prose prose-invert prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-white/80 mb-6">
                <strong>Last Updated:</strong> August 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                <p className="text-white/80 mb-4">
                  By accessing and using CreativeSync&apos;s services, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
                <p className="text-white/80 mb-4">
                  CreativeSync provides digital design and development services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
                  <li>UI/UX Design</li>
                  <li>Web Development</li>
                  <li>Branding and Graphic Design</li>
                  <li>Machine Learning Solutions</li>
                  <li>Video Editing and Motion Graphics</li>
                  <li>Digital Marketing Services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Payment Terms</h2>
                <p className="text-white/80 mb-4">
                  Payment terms vary based on the project scope and duration:
                </p>
                <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
                  <li>50% advance payment required for all projects</li>
                  <li>Remaining balance due upon project completion</li>
                  <li>Monthly retainer options available for ongoing work</li>
                  <li>Late payment fees may apply after 30 days</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property Rights</h2>
                <p className="text-white/80 mb-4">
                  Upon full payment, clients receive ownership of the final deliverables. However, CreativeSync retains the right to:
                </p>
                <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
                  <li>Showcase completed work in our portfolio</li>
                  <li>Use project details as case studies (with client approval)</li>
                  <li>Retain ownership of proprietary methodologies and processes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Project Timeline and Revisions</h2>
                <p className="text-white/80 mb-4">
                  Project timelines are estimated based on scope and complexity. Our revision policy includes:
                </p>
                <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
                  <li>Up to 3 rounds of revisions included in base pricing</li>
                  <li>Additional revisions charged at hourly rates</li>
                  <li>Major scope changes require new agreement</li>
                  <li>Client feedback required within 5 business days</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Confidentiality</h2>
                <p className="text-white/80 mb-4">
                  We respect client confidentiality and will not disclose any proprietary information without written consent. 
                  We may require clients to sign a mutual NDA for sensitive projects.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                <p className="text-white/80 mb-4">
                  CreativeSync&apos;s liability is limited to the total amount paid for services. We are not responsible for 
                  indirect damages, lost profits, or consequential damages arising from our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
                <p className="text-white/80 mb-4">
                  Either party may terminate the agreement with written notice. In case of termination:
                </p>
                <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
                  <li>Payment for completed work is due immediately</li>
                  <li>All materials and assets will be returned to respective owners</li>
                  <li>Confidentiality obligations remain in effect</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
                <p className="text-white/80 mb-4">
                  For questions about these Terms & Conditions, please contact us:
                </p>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <p className="text-white/90">
                    <strong>Email:</strong> legal@creativesync.com<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Address:</strong> 123 Innovation Street, Creative District, CA 94103
                  </p>
                </div>
              </section>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              Have Questions? Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
