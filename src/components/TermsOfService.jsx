import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'use-of-website', title: 'Use of Website' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'service-engagement', title: 'Service Engagement' },
    { id: 'third-party', title: 'Third-Party Tools & Links' },
    { id: 'disclaimer', title: 'Disclaimer of Warranties' },
    { id: 'limitation', title: 'Limitation of Liability' },
    { id: 'indemnification', title: 'Indemnification' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'changes', title: 'Changes to Terms' },
    { id: 'contact', title: 'Contact Us' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Component */}
      <Navbar />

      {/* Header Title Section - UPDATED COLOR */}
      <header className="bg-gradient-to-br from-[#2e38f2] via-[#2e38f2] to-[#4938f2] text-white">
        <div className="max-w-3xl mx-auto text-center py-20 pb-28 px-8">
          <h1 className="text-5xl font-semibold mb-3 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-base opacity-90">
            Last Updated: November 26, 2025
          </p>
        </div>
      </header>

      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 -mt-16 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm sticky top-5 overflow-hidden">
              <div className="py-5">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-6 py-3.5 text-sm cursor-pointer transition-all border-l-3 ${
                      activeSection === section.id
                        ? 'bg-purple-50 text-purple-700 border-purple-700 font-medium'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-purple-700'
                    }`}
                  >
                    {section.title}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-lg shadow-sm px-12 py-12 lg:px-16 lg:py-14">
            {/* Introduction */}
            <div className="mb-10 pb-8 border-b border-gray-200">
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to RevLabs. By accessing or using our Website (
                <a href="https://www.myrevlabs.com" className="text-purple-700 hover:opacity-70 transition-opacity">
                  www.myrevlabs.com
                </a> , you agree to these Terms of Service ("Terms"). If you do not agree, please discontinue use.
              </p>
            </div>

            {/* Section 1: Use of Website */}
            <section id="use-of-website" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5 tracking-tight">
                1. Use of Website
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Use the Website for unlawful activities</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Attempt to gain unauthorized access to our servers or data</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Copy, modify, or redistribute website content without permission</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Harm the Website's performance or security</span>
                </li>
              </ul>
            </section>

            {/* Section 2: Intellectual Property */}
            <section id="intellectual-property" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5 tracking-tight">
                2. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content on this Website—including text, designs, logos, imagery, graphics, case studies, videos, or other materials—is the property of RevLabs or its licensors.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may not:
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Republish, reproduce, or distribute content without written consent</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Misuse or misrepresent any content or material provided by us</span>
                </li>
              </ul>
            </section>

            {/* Section 3: Service Engagement */}
            <section id="service-engagement" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5 tracking-tight">
                3. Service Engagement
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Visiting our Website does not create a client relationship.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A formal engagement begins only when:
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>A proposal is signed</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Financial terms are agreed</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>A contract or scope document is accepted</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                All deliverables, timelines, and expectations are governed strictly by the signed agreements.
              </p>
            </section>

            {/* Section 4: Third-Party Tools & Links */}
            <section id="third-party" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5 tracking-tight">
                4. Third-Party Tools & Links
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may use or link to third-party tools and platforms (e.g., analytics, forms, scheduling tools).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are not responsible for:
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Their functionality</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Their data policies</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Their actions or downtime</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Your use of third-party tools is governed by their respective terms.
              </p>
            </section>

            {/* Section 5: Disclaimer of Warranties */}
            <section id="disclaimer" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5 tracking-tight">
                5. Disclaimer of Warranties
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our Website and content are provided "as is" and "as available."
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not guarantee:
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Accuracy or completeness of the content</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Uninterrupted Website availability</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Error-free functioning</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Use the Website at your own discretion.
              </p>
            </section>

            {/* Section 6: Limitation of Liability */}
            <section id="limitation" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5 tracking-tight">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the fullest extent permitted by law, RevLabs is not liable for:
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Data loss</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Business interruption</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Errors or inaccuracies</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Direct, indirect, incidental, or consequential damages</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Any loss arising from using our Website</span>
                </li>
              </ul>
            </section>

            {/* Section 7: Indemnification */}
            <section id="indemnification" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5 tracking-tight">
                7. Indemnification
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to indemnify and hold RevLabs harmless from claims arising out of your misuse of the Website or violation of these Terms.
              </p>
            </section>

            {/* Section 8: Governing Law */}
            <section id="governing-law" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5 tracking-tight">
                8. Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms are governed by the laws of [India/UAE — choose one based on your registration].
              </p>
              <p className="text-gray-600 leading-relaxed">
                Any disputes will be subject to the jurisdiction of the courts in [City, Country].
              </p>
            </section>

            {/* Section 9: Changes to Terms */}
            <section id="changes" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5 tracking-tight">
                9. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update these Terms at any time. Continued use of the Website means you accept the updated Terms.
              </p>
            </section>

            {/* Section 10: Contact Us */}
            <section id="contact" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5 tracking-tight">
                10. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                For any questions:
              </p>
              <p className="text-base font-medium text-gray-700">
                📧{' '}
                <a href="mailto:hey@myrevlabs.com" className="text-purple-700 hover:opacity-70 transition-opacity">
                  hey@myrevlabs.com
                </a>
              </p>
            </section>
          </main>
        </div>
      </div>

      {/* Footer with Links */}
      <footer className="bg-[#4938f2] text-white py-8">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <p className="text-sm mb-2">© 2025 RevLabs. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
             <a  href="/#" className="hover:text-white transition-opacity">
              Home
            </a>
            <Link to="/privacy" className="hover:text-white transition-opacity">Privacy Policy</Link>
           
            <a
             href="https://wa.me/919639734405"
    target="_blank"
    rel="noopener noreferrer"
             className="hover:text-white transition-opacity">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
