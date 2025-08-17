import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-100">
            Your privacy is our priority. Learn how we protect your data.
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

              <h2>Information We Collect</h2>
              <p>
                Unfollowers Tracker is designed with privacy in mind. We do not collect, store, or process your personal Instagram data on our servers. When you upload your Instagram data export file:
              </p>
              <ul>
                <li>Your file is processed locally in your browser</li>
                <li>Analysis results are generated without data leaving your device</li>
                <li>No personal information is transmitted to our servers</li>
                <li>Your Instagram credentials are never required or collected</li>
              </ul>

              <h2>How We Use Information</h2>
              <p>
                Since we don't collect your Instagram data, we cannot use it for any purpose. The only information we may collect includes:
              </p>
              <ul>
                <li>Basic website analytics (page views, general location)</li>
                <li>Technical information about your browser for optimization</li>
                <li>Error logs to improve our service (no personal data included)</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                Your Instagram data security is our top priority:
              </p>
              <ul>
                <li>All processing happens locally in your browser</li>
                <li>No Instagram data is uploaded to our servers</li>
                <li>We use industry-standard encryption for all communications</li>
                <li>Your uploaded files are automatically deleted after analysis</li>
              </ul>

              <h2>Third-Party Services</h2>
              <p>
                We may use third-party services for:
              </p>
              <ul>
                <li>Website hosting and content delivery</li>
                <li>Analytics to understand website usage patterns</li>
                <li>Error monitoring to improve service quality</li>
              </ul>
              <p>
                These services do not have access to your Instagram data as it never leaves your device.
              </p>

              <h2>Your Rights</h2>
              <p>
                Since we don't store your personal data, there's nothing for us to delete or modify. However, you have the right to:
              </p>
              <ul>
                <li>Stop using our service at any time</li>
                <li>Clear your browser data to remove any local storage</li>
                <li>Contact us with any privacy concerns</li>
              </ul>

              <h2>Children's Privacy</h2>
              <p>
                Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify users of any material changes by posting the new policy on this page with an updated revision date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our practices, please contact us at:
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