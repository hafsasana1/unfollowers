import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, HelpCircle } from 'lucide-react';

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Help Center</h1>
          <p className="text-lg text-gray-100">
            Get help with using Unfollowers Tracker and troubleshooting common issues.
          </p>
        </div>
      </section>

      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Help Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quick Start Guide</h3>
                <p className="text-gray-600 text-sm mb-4">Learn how to get your Instagram data and start analyzing</p>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Common Issues</h3>
                <p className="text-gray-600 text-sm mb-4">Solutions to frequently encountered problems</p>
                <Button variant="outline" size="sm">View Solutions</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-purple-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact Support</h3>
                <p className="text-gray-600 text-sm mb-4">Get personalized help from our support team</p>
                <Button variant="outline" size="sm">Contact Us</Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Getting Started */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Step 1: Request Your Instagram Data</h3>
                    <p className="text-gray-600 text-sm">
                      Go to Instagram Settings → Privacy and Security → Download Your Information. 
                      Select JSON format and include followers and following data.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Step 2: Download the ZIP File</h3>
                    <p className="text-gray-600 text-sm">
                      Instagram will email you when your data is ready (usually within 48 hours). 
                      Download the ZIP file to your device.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Step 3: Upload and Analyze</h3>
                    <p className="text-gray-600 text-sm">
                      Upload your ZIP file to our secure analyzer. Your data is processed locally 
                      and results appear instantly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Troubleshooting */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Troubleshooting</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">File Upload Issues</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Ensure file is under 50MB</li>
                      <li>• Only ZIP files are accepted</li>
                      <li>• Try refreshing the page and uploading again</li>
                      <li>• Check your internet connection</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Incorrect Results</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Ensure you downloaded the latest data from Instagram</li>
                      <li>• Check that the ZIP contains followers.json and following.json</li>
                      <li>• Results may vary based on privacy settings</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Browser Compatibility</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Use latest Chrome, Firefox, Safari, or Edge</li>
                      <li>• Enable JavaScript in your browser</li>
                      <li>• Clear cache and cookies if issues persist</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card className="mt-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Is my data safe?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Yes, your data is processed locally in your browser and never stored on our servers. 
                    We don't require your Instagram password.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Why do I need to download my data?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    This method ensures your account security and privacy. Instagram provides this 
                    official way to access your own data.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How often should I analyze my data?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Monthly analysis is recommended for active accounts. Request new data 
                    from Instagram each time for accurate results.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Can I use this for business accounts?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Yes, our tool works with both personal and business Instagram accounts. 
                    The data export process is the same.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
              <p className="text-gray-600 mb-6">
                Our support team is here to help you with any questions or issues you might have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Mail className="mr-2" size={16} />
                  Email Support
                </Button>
                <Button variant="outline">
                  <MessageCircle className="mr-2" size={16} />
                  Live Chat
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Average response time: 24 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}