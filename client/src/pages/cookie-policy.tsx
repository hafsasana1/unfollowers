import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-lg text-gray-100">
            Learn how we use cookies to enhance your experience.
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

              <h2>What Are Cookies</h2>
              <p>
                Cookies are small text files stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and improving our service.
              </p>

              <h2>How We Use Cookies</h2>
              <p>
                Unfollowers Tracker uses cookies for the following purposes:
              </p>

              <h3>Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly:
              </p>
              <ul>
                <li>Session management and security</li>
                <li>Remembering your preferences</li>
                <li>Ensuring proper website functionality</li>
              </ul>

              <h3>Analytics Cookies</h3>
              <p>
                We use analytics cookies to understand how visitors interact with our website:
              </p>
              <ul>
                <li>Page views and user behavior patterns</li>
                <li>Popular features and content</li>
                <li>Website performance metrics</li>
                <li>Error tracking and debugging</li>
              </ul>

              <h3>Performance Cookies</h3>
              <p>
                These cookies help us improve website performance:
              </p>
              <ul>
                <li>Loading time optimization</li>
                <li>Content delivery improvement</li>
                <li>Browser compatibility testing</li>
              </ul>

              <h2>Types of Cookies We Use</h2>
              
              <h3>First-Party Cookies</h3>
              <p>
                Set directly by our website for essential functionality and user experience.
              </p>

              <h3>Third-Party Cookies</h3>
              <p>
                We may use third-party services that set their own cookies:
              </p>
              <ul>
                <li><strong>Google Analytics:</strong> For website usage analytics</li>
                <li><strong>Content Delivery Networks:</strong> For faster content loading</li>
                <li><strong>Error Monitoring:</strong> For service reliability</li>
              </ul>

              <h2>Cookie Duration</h2>
              
              <h3>Session Cookies</h3>
              <p>
                Temporary cookies that are deleted when you close your browser.
              </p>

              <h3>Persistent Cookies</h3>
              <p>
                Remain on your device for a set period or until you delete them manually.
              </p>

              <h2>Managing Your Cookie Preferences</h2>
              <p>
                You have several options to manage cookies:
              </p>

              <h3>Browser Settings</h3>
              <p>
                Most browsers allow you to:
              </p>
              <ul>
                <li>View and delete cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Block all cookies (may affect functionality)</li>
                <li>Receive notifications when cookies are set</li>
              </ul>

              <h3>Opt-Out Options</h3>
              <p>
                You can opt out of specific tracking:
              </p>
              <ul>
                <li><strong>Google Analytics:</strong> Use Google's opt-out browser add-on</li>
                <li><strong>Do Not Track:</strong> Enable browser's Do Not Track setting</li>
              </ul>

              <h2>Impact of Disabling Cookies</h2>
              <p>
                Disabling cookies may affect your experience:
              </p>
              <ul>
                <li>Some features may not work properly</li>
                <li>Preferences won't be remembered</li>
                <li>Website performance may be reduced</li>
                <li>Analytics data won't be collected</li>
              </ul>

              <h2>Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or relevant laws. We encourage you to review this policy periodically.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> unfollowerstracker2024@gmail.com
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <h3 className="text-blue-800 font-semibold mb-2">Your Consent</h3>
                <p className="text-blue-700 text-sm mb-0">
                  By continuing to use our website, you consent to our use of cookies as described in this policy. 
                  You can withdraw your consent at any time by adjusting your browser settings.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}