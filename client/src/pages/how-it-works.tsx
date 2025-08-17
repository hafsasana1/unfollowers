import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FAQSection } from '@/components/faq-section';
import { Download, Upload, BarChart3, Shield, Clock, CheckCircle, ArrowRight, Instagram, FileArchive } from 'lucide-react';

export function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl animate-float"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            How Instagram Unfollowers Tracker Works
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto font-medium">
            Learn exactly how to track your Instagram unfollowers safely and securely. Our step-by-step guide makes it simple for anyone to get detailed follower insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={() => document.getElementById('step-by-step')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              data-testid="button-learn-process"
            >
              <CheckCircle className="mr-3" size={24} />
              Learn the Process
            </Button>
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section id="step-by-step" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple 3-Step Process to Track Instagram Unfollowers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these easy steps to safely track who unfollowed you on Instagram without sharing your password or compromising your account security.
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    1
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Request Your Instagram Data</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Go to your Instagram Settings → Privacy and Security → Download Your Information. Request your data in JSON format. This is Instagram's official way to access your account data safely.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">100% Safe & Official</h4>
                      <p className="text-gray-600">Uses Instagram's official data export feature</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">No Password Required</h4>
                      <p className="text-gray-600">Request through your own Instagram account settings</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Select JSON Format</h4>
                      <p className="text-gray-600">Choose JSON format for best compatibility</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-xl">
                  <CardContent className="pt-0 text-center">
                    <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Instagram className="text-white" size={32} />
                    </div>
                    <h4 className="text-xl font-semibold mb-4">Instagram Data Request</h4>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="text-green-500" size={16} />
                        <span className="text-sm">Open Instagram Settings</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="text-green-500" size={16} />
                        <span className="text-sm">Privacy and Security</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="text-green-500" size={16} />
                        <span className="text-sm">Download Your Information</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="text-green-500" size={16} />
                        <span className="text-sm">Select JSON Format</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl">
                  <CardContent className="pt-0 text-center">
                    <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Download className="text-white" size={32} />
                    </div>
                    <h4 className="text-xl font-semibold mb-4">Download Process</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Data Preparation</span>
                        <span className="text-blue-600 font-medium">24-48 hours</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Email Notification</span>
                        <span className="text-green-600 font-medium">Ready!</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>File Format</span>
                        <span className="text-purple-600 font-medium">ZIP File</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    2
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Download Your ZIP File</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Instagram will prepare your data (usually takes 24-48 hours) and send you an email when it's ready. Download the ZIP file containing all your Instagram information.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Wait for Email Notification</h4>
                      <p className="text-gray-600">Instagram will email you when data is ready</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Download className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Download ZIP File</h4>
                      <p className="text-gray-600">Click the download link in the email</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Keep File Secure</h4>
                      <p className="text-gray-600">Store the ZIP file safely on your device</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    3
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Upload & Get Instant Results</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Upload your Instagram ZIP file to our secure tracker. We'll analyze your data locally in your browser and show you detailed unfollower insights in under 10 seconds.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Upload className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Drag & Drop Upload</h4>
                      <p className="text-gray-600">Simple file upload interface</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Instant Analysis</h4>
                      <p className="text-gray-600">Results appear in under 10 seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Local Processing</h4>
                      <p className="text-gray-600">Data processed in your browser, never uploaded</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button 
                    size="lg"
                    onClick={() => window.location.href = '/'}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all font-bold text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl"
                  >
                    Try It Now
                  </Button>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl">
                  <CardContent className="pt-0 text-center">
                    <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <FileArchive className="text-white" size={32} />
                    </div>
                    <h4 className="text-xl font-semibold mb-4">Upload & Analyze</h4>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="text-purple-500" size={16} />
                        <span className="text-sm">Upload Instagram ZIP file</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="text-purple-500" size={16} />
                        <span className="text-sm">Automatic data parsing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="text-purple-500" size={16} />
                        <span className="text-sm">Unfollowers detection</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="text-purple-500" size={16} />
                        <span className="text-sm">Detailed insights report</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Method Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Our Method is the Safest Way to Track Unfollowers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike third-party apps that require your Instagram login, our method uses only official Instagram data, ensuring complete account security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">100% Secure</h3>
                <p className="text-gray-600">
                  No passwords, no login required. Uses only official Instagram data export feature for complete account security.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Results</h3>
                <p className="text-gray-600">
                  Get comprehensive unfollower insights in under 10 seconds. No waiting, no delays, instant detailed analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Detailed Insights</h3>
                <p className="text-gray-600">
                  Beyond unfollowers: track new followers, mutual connections, engagement patterns, and growth analytics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Common Questions & Troubleshooting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get help with the most common issues and questions about tracking Instagram unfollowers using our secure method.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">How long does Instagram take to prepare my data?</h3>
                <p className="text-gray-600">
                  Instagram usually takes 24-48 hours to prepare your data export. You'll receive an email notification when it's ready to download. For large accounts, it might take up to 4 days.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">What format should I choose when requesting data?</h3>
                <p className="text-gray-600">
                  Always choose JSON format when requesting your Instagram data. This format is optimized for our analysis tool and provides the most comprehensive results.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Is my Instagram data safe with your tool?</h3>
                <p className="text-gray-600">
                  Yes, completely safe. Your data is processed locally in your browser and never uploaded to our servers. We can't see or access your Instagram information.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Can I track unfollowers for business accounts?</h3>
                <p className="text-gray-600">
                  Yes, our method works for all Instagram account types: personal, creator, and business accounts. The data export feature is available for all account types.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </div>
  );
}