import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-100">
            Please read these terms carefully before using our service.
          </p>
        </div>
      </section>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8 prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                <strong>Last updated:</strong> August 17, 2025
              </p>

              <h2>Acceptance of Terms</h2>
              <p>
                By accessing and using Unfollowers Tracker, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.
              </p>

              <h2>Description of Service</h2>
              <p>
                Unfollowers Tracker provides a free tool to analyze Instagram follower data. Our service:
              </p>
              <ul>
                <li>Analyzes Instagram data export files provided by users</li>
                <li>Provides insights about followers, unfollowers, and account statistics</li>
                <li>Processes data locally without storing personal information</li>
                <li>Operates without requiring Instagram login credentials</li>
              </ul>

              <h2>User Responsibilities</h2>
              <p>
                When using our service, you agree to:
              </p>
              <ul>
                <li>Only upload your own Instagram data export files</li>
                <li>Not attempt to upload data belonging to other users</li>
                <li>Use the service for personal, non-commercial purposes only</li>
                <li>Not attempt to reverse engineer or misuse our service</li>
                <li>Comply with Instagram's Terms of Service</li>
              </ul>

              <h2>Prohibited Uses</h2>
              <p>
                You may not use our service to:
              </p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Upload malicious files or attempt to harm our systems</li>
                <li>Collect data about other users without their consent</li>
                <li>Use automated scripts or bots to access our service</li>
                <li>Resell or redistribute our service without permission</li>
              </ul>

              <h2>Disclaimer of Warranties</h2>
              <p>
                Our service is provided "as is" without any warranties. We do not guarantee:
              </p>
              <ul>
                <li>Accuracy or completeness of analysis results</li>
                <li>Uninterrupted or error-free service operation</li>
                <li>Compatibility with all devices or browsers</li>
                <li>That the service will meet your specific requirements</li>
              </ul>

              <h2>Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Unfollowers Tracker shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or other intangible losses.
              </p>

              <h2>Instagram Compliance</h2>
              <p>
                Our service is designed to work with Instagram's official data export feature. Users are responsible for:
              </p>
              <ul>
                <li>Obtaining their data through Instagram's official channels</li>
                <li>Complying with Instagram's Terms of Service</li>
                <li>Understanding that we are not affiliated with Instagram</li>
              </ul>

              <h2>Intellectual Property</h2>
              <p>
                The service and its original content, features, and functionality are owned by Unfollowers Tracker and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>

              <h2>Termination</h2>
              <p>
                We may terminate or suspend your access to our service immediately, without prior notice, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>

              <h2>Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> unfollowerstracker2024@gmail.com
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}