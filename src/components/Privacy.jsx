import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'info-collect', title: 'Information we collect online' },
    
    { id: 'how-use', title: 'How we use your information' },
    { id: 'info-share', title: 'Information we share' },
    { id: 'data-security', title: 'Data security' },
    { id: 'third-party', title: 'Third party sites and social media plug-ins' },
   
    { id: 'privacy-choices', title: 'Your privacy choices & Rights' },
    
    { id: 'privacy-change', title: 'Changes to Privacy' },
    { id: 'contact', title: 'Contact details' }
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

      {/* Header Title Section */}
      <header className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-white">
        <div className="text-center py-20 pb-28 px-8">
          <h1 className="text-5xl font-semibold mb-3 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-base opacity-90">
            Last Updated: [Insert Date]
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
                RevLabs ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website{' '}
                <a href="https://www.myrevlabs.com" className="text-purple-700 hover:opacity-70 transition-opacity">
                  www.myrevlabs.com
                </a>{' '}
                or revlabs.vercel.app (the "Website").
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our Website, you consent to the practices described in this policy.
              </p>
            </div>

            {/* Section 1: Information We Collect */}
            <section id="info-collect" className="mb-12 scroll-mt-20">
              <h2 className="text-xl font-semibold text-gray-900 mb-5 tracking-tight">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-7 mb-4">
                1.1 Personal Information (Provided by You)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you fill forms, request consultations, or contact us, we may collect:
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Name</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Email address</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Phone number</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Company name</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Project details</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Any information you voluntarily share</span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-7 mb-4" id="info-automatic">
                1.2 Usage Data (Collected Automatically)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect:
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>IP address</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Browser type</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Device information</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Pages visited</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Time spent on the Website</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Referral sources</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Cookies & analytics data</span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-7 mb-4">
                1.3 Cookies & Tracking Technologies
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We use cookies, pixels, and analytics tools (e.g., Google Analytics) to understand user behavior and improve website performance.
              </p>
            </section>

            {/* Section 2: How We Use Your Information */}
            <section id="how-use" className="mb-12 scroll-mt-20">
              <h2 className="text-xl font-semibold text-gray-900 mb-5 tracking-tight">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Respond to inquiries and provide services</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Improve our Website and user experience</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Send updates, proposals, or communication related to our services</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Analyse website performance and traffic patterns</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Maintain security and prevent misuse</span>
                </li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 px-4 py-3 rounded-md my-5">
                <p className="text-yellow-900 font-medium">
                  We do not sell your personal information.
                </p>
              </div>
            </section>

            {/* Section 3: How We Share Your Information */}
            <section id="info-share" className="mb-12 scroll-mt-20">
              <h2 className="text-xl font-semibold text-gray-900 mb-5 tracking-tight">
                3. Information We Share
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share information with:
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Service providers (hosting, analytics, CRM tools)</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Team members and contractors working on your project</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Legal authorities (only if required by law)</span>
                </li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 px-4 py-3 rounded-md my-5">
                <p className="text-yellow-900 font-medium">
                  We do not share your information for advertising or resale.
                </p>
              </div>
            </section>

            {/* Section 4: Data Security */}
            <section id="data-security" className="mb-12 scroll-mt-20">
              <h2 className="text-xl font-semibold text-gray-900 mb-5 tracking-tight">
                4. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement security measures to protect your data from:
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Unauthorized access</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Disclosure</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Alteration</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Misuse</span>
                </li>
              </ul>
               <div className="bg-yellow-50 border-l-4 border-yellow-500 px-4 py-3 rounded-md my-5">
                <p className="text-yellow-900 font-medium">
                  However, no system is 100% secure. You use the Website at your own risk.
                </p>
              </div>
            </section>

            {/* Section 5: Third-Party Links */}
            <section id="third-party" className="mb-12 scroll-mt-20">
              <h2 className="text-xl font-semibold text-gray-900 mb-5 tracking-tight">
                5. Third party sites and social media plug-ins
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our Website may contain links to external sites. We are not responsible for their privacy practices or content.
              </p>
            </section>

            {/* Section 6: Your Choices & Rights */}
            <section id="privacy-choices" className="mb-12 scroll-mt-20">
              <h2 className="text-xl font-semibold text-gray-900 mb-5 tracking-tight">
                6. Your Privacy Choices & Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may request to:
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Access your data</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Update or correct your data</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Delete your data</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-purple-700 font-bold mr-3 mt-1">•</span>
                  <span>Opt out of communication</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                To do so, email us at:{' '}
                <a href="mailto:hey@myrevlabs.com" className="text-purple-700 hover:opacity-70 transition-opacity">
                  hey@myrevlabs.com
                </a>
              </p>
            </section>

            {/* Section 7: International Transfer */}
            <section id="international" className="mb-12 scroll-mt-20">
              <h2 className="text-xl font-semibold text-gray-900 mb-5 tracking-tight">
                7. International Transfer
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Your data may be processed in locations where we or our service providers operate (India, UAE, etc.). By using our Website, you consent to such transfers.
              </p>
            </section>

            {/* Section 8: Changes to This Policy */}
            <section id="privacy-change" className="mb-12 scroll-mt-20">
              <h2 className="text-xl font-semibold text-gray-900 mb-5 tracking-tight">
                8. Changes to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy at any time. The "Last Updated" date reflects the latest change.
              </p>
            </section>

            {/* Section 9: Contact Us */}
            <section id="contact" className="mb-12 scroll-mt-20">
              <h2 className="text-xl font-semibold text-gray-900 mb-5 tracking-tight">
                9. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                For privacy-related questions:
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

      {/* Footer with Link to Home */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <p className="text-sm mb-2">© 2025 RevLabs. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <Link to="/" className="hover:text-white transition-opacity">
              Home
            </Link>
            <Link to="/Privacy" className="hover:text-white transition-opacity">
              Privacy Policy
            </Link>
            <a href="hey@myrevlabs.com" className="hover:text-white transition-opacity">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
