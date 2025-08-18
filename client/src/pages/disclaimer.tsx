import { useSEO } from '@/hooks/use-seo';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ChevronRight, Home, AlertTriangle, Shield, Info, ExternalLink } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function DisclaimerPage() {
  useSEO();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-purple-600 transition-colors flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Disclaimer</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Disclaimer
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Important information regarding the use of our Instagram analytics service
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8">
          
          {/* General Disclaimer */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Info className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">General Disclaimer</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                The information provided by Instagram Unfollowers Tracker ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
              </p>
            </div>
          </section>

          {/* Service Limitations */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Shield className="w-5 h-5 text-amber-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Service Limitations</h2>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
              <p className="text-amber-800 text-sm font-medium">
                <AlertTriangle className="w-4 h-4 inline mr-1" />
                Important: This tool analyzes data provided by Instagram's official data export feature only.
              </p>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Data Accuracy:</strong> The accuracy of follower analysis depends entirely on the completeness and timeliness of Instagram's data export. We cannot guarantee 100% accuracy.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Instagram Changes:</strong> Instagram frequently updates its platform, privacy settings, and data export format. These changes may affect our tool's functionality.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Third-Party Service:</strong> We are not affiliated with, endorsed by, or connected to Instagram/Meta. This is an independent analysis tool.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>No Real-Time Data:</strong> Our analysis is based on historical data from your Instagram export, not real-time follower information.</span>
              </li>
            </ul>
          </section>

          {/* Privacy and Security */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Privacy and Security</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-green-800 text-sm">
                <Shield className="w-4 h-4 inline mr-1" />
                We prioritize your privacy and do not store your Instagram data permanently.
              </p>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Your uploaded Instagram data is processed locally and not permanently stored on our servers.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>We never ask for your Instagram login credentials or passwords.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>While we implement security measures, no internet transmission is 100% secure.</span>
              </li>
            </ul>
          </section>

          {/* External Links */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">External Links Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on external websites.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The inclusion of any link does not imply endorsement by us of the site. Use of any linked website is at the user's own risk.
            </p>
          </section>

          {/* Professional Advice */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Professional Advice Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The information on this website is provided for educational and informational purposes only. It is not intended to be a substitute for professional social media marketing advice, business consultation, or expert guidance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You should always consult with a qualified professional before making any business decisions based on Instagram analytics or social media insights.
            </p>
          </section>

          {/* Affiliate Disclaimer */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Affiliate Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This website may contain affiliate links, which means we may receive a small commission if you make a purchase through our links, at no additional cost to you. This helps support the maintenance and development of our free service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We only recommend products and services that we believe will add value to our users. Our editorial content is not influenced by affiliate partnerships.
            </p>
          </section>

          {/* Advertisement Disclaimer */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Advertisement Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This website is supported by advertising. We may display third-party advertisements and sponsored content. We clearly distinguish between editorial content and promotional material.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Advertisers do not influence our editorial decisions or content creation. We maintain editorial independence in all our articles and guides.
            </p>
          </section>

          {/* Changes to Disclaimer */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes to This Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update this disclaimer at any time. Changes will be effective immediately upon posting on this page. Your continued use of the service constitutes acceptance of any changes.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: August 18, 2025
            </p>
          </section>

          {/* Contact Information */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Questions About This Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this disclaimer, please contact us through our contact page or email us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white inline-flex items-center">
                  Contact Us
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/privacy-policy">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 inline-flex items-center">
                  Privacy Policy
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </section>

        </div>
      </div>
      </main>
      
      <Footer />
    </div>
  );
}