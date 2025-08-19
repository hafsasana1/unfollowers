import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Upload, BarChart3, Shield, Clock, CheckCircle, ArrowRight, Instagram, FileArchive, ExternalLink, Eye } from 'lucide-react';
import { Link } from 'wouter';

export function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            How It Works
          </h1>
          <p className="text-lg text-gray-100 mb-6 max-w-2xl mx-auto">
            Track Instagram unfollowers safely in 3 simple steps. No passwords required.
          </p>
        </div>
      </section>

      {/* Breadcrumbs - Moved under hero */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'How It Works', current: true }
          ]} />
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Simple 3-Step Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get detailed unfollower insights in minutes without compromising your account security.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Request Your Instagram Data</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Go to Instagram Settings → Privacy and Security → Download Your Information. Select JSON format. This method is 100% safe and doesn't require sharing your login credentials with any <Link href="/instagram-auto-unfollow-explained" className="text-purple-600 hover:text-purple-700 font-medium">third-party auto unfollow tools</Link>.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700">100% Safe & Official</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700">No Password Required</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 lg:max-w-sm">
                <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-md">
                  <CardContent className="pt-0 text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Instagram className="text-white" size={20} />
                    </div>
                    <h4 className="font-semibold mb-3">Instagram Settings</h4>
                    <div className="space-y-2 text-left text-sm">
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="text-green-500" size={14} />
                        <span>Privacy and Security</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="text-green-500" size={14} />
                        <span>Download Information</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="text-green-500" size={14} />
                        <span>Select JSON Format</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 lg:max-w-sm">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-md">
                  <CardContent className="pt-0 text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Download className="text-white" size={20} />
                    </div>
                    <h4 className="font-semibold mb-3">Download Process</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Data Preparation</span>
                        <span className="text-blue-600 font-medium">24-48h</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Email Notification</span>
                        <span className="text-green-600 font-medium">Ready!</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>File Format</span>
                        <span className="text-purple-600 font-medium">ZIP</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Download Your ZIP File</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Instagram prepares your data (24-48 hours) and sends an email when ready. Download the ZIP file. Your data includes followers, following lists, and engagement history - everything needed for our <Link href="/unfollowers-tracker" className="text-purple-600 hover:text-purple-700 font-medium">Instagram unfollowers tracker</Link>.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="text-blue-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Wait for email notification</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Download className="text-blue-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Download ZIP file securely</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Upload & Get Instant Results</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Upload your ZIP file to our secure tracker. Data is processed locally in your browser for complete privacy. Unlike <Link href="/instagram-auto-unfollow-explained" className="text-purple-600 hover:text-purple-700 font-medium">automatic follow/unfollow tools</Link>, our method keeps your account completely safe.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Upload className="text-purple-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Drag & drop upload</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <BarChart3 className="text-purple-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Results in 10 seconds</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Shield className="text-purple-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Local processing only</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button 
                    size="sm"
                    onClick={() => window.location.href = '/'}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all font-medium px-6 py-2 rounded-lg"
                  >
                    Try It Now
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 lg:max-w-sm">
                <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-md">
                  <CardContent className="pt-0 text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <FileArchive className="text-white" size={20} />
                    </div>
                    <h4 className="font-semibold mb-3">Upload & Analyze</h4>
                    <div className="space-y-2 text-left text-sm">
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="text-purple-500" size={14} />
                        <span>Upload ZIP file</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="text-purple-500" size={14} />
                        <span>Automatic parsing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="text-purple-500" size={14} />
                        <span>Unfollowers detection</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="text-purple-500" size={14} />
                        <span>Detailed insights</span>
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
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Why Our Method is Safest
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Unlike apps requiring Instagram login, we use only official data export for complete security. Learn more about <Link href="/instagram-auto-unfollow-explained" className="text-purple-600 hover:text-purple-700 font-medium">Instagram auto unfollow risks</Link> and why our method is safest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-4 text-center border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="text-green-600" size={20} />
                </div>
                <h3 className="font-semibold mb-2 text-sm">100% Secure</h3>
                <p className="text-gray-600 text-xs">
                  No passwords, no login required. Official Instagram data only.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 text-center border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-0">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="text-blue-600" size={20} />
                </div>
                <h3 className="font-semibold mb-2 text-sm">Fast Results</h3>
                <p className="text-gray-600 text-xs">
                  Complete analysis in under 10 seconds. Instant insights.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 text-center border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-0">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="text-purple-600" size={20} />
                </div>
                <h3 className="font-semibold mb-2 text-sm">Detailed Insights</h3>
                <p className="text-gray-600 text-xs">
                  Track unfollowers, new followers, and engagement patterns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Track Your Unfollowers?</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Start analyzing your Instagram followers now. No signup required, completely free.
          </p>
          <Button 
            size="lg"
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all font-semibold px-8 py-3 rounded-lg"
          >
            Start Free Analysis
          </Button>
        </div>
      </section>

      {/* Related Articles Section for Topical Authority */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Learn More About Instagram Tracking
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Comprehensive guides to help you understand Instagram analytics and stay safe online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Auto Unfollow Guide */}
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Shield className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">Safety Guide</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  <Link href="/instagram-auto-unfollow-explained" className="hover:text-purple-600 transition-colors">
                    Does Instagram Auto Unfollow People?
                  </Link>
                </h3>
                <p className="text-gray-600 text-xs mb-4">
                  Learn about automatic follow/unfollow tools, Instagram's policies, and why they're risky for your account.
                </p>
                <Link 
                  href="/instagram-auto-unfollow-explained" 
                  className="text-purple-600 hover:text-purple-700 text-xs font-medium inline-flex items-center"
                >
                  Read Safety Guide <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Unfollowers Tracker Tool */}
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <BarChart3 className="w-5 h-5 text-purple-500 mr-2" />
                  <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">Tool</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  <Link href="/unfollowers-tracker" className="hover:text-purple-600 transition-colors">
                    Instagram Unfollowers Tracker
                  </Link>
                </h3>
                <p className="text-gray-600 text-xs mb-4">
                  Track who unfollowed you on Instagram safely using your data export. No login required.
                </p>
                <Link 
                  href="/unfollowers-tracker" 
                  className="text-purple-600 hover:text-purple-700 text-xs font-medium inline-flex items-center"
                >
                  Start Tracking <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Ghost Followers */}
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Eye className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Analytics</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  <Link href="/ghost-followers" className="hover:text-purple-600 transition-colors">
                    Ghost Followers Tracker
                  </Link>
                </h3>
                <p className="text-gray-600 text-xs mb-4">
                  Identify inactive followers and fake accounts that don't engage with your content.
                </p>
                <Link 
                  href="/ghost-followers" 
                  className="text-purple-600 hover:text-purple-700 text-xs font-medium inline-flex items-center"
                >
                  Find Ghost Followers <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Additional Internal Links */}
          <div className="mt-8 text-center">
            <div className="inline-flex flex-wrap gap-3 justify-center">
              <Link 
                href="/blog" 
                className="text-sm text-gray-600 hover:text-purple-600 transition-colors px-3 py-1 rounded-full border border-gray-200 hover:border-purple-300"
              >
                📖 All Guides
              </Link>
              <Link 
                href="/inactive-followers" 
                className="text-sm text-gray-600 hover:text-purple-600 transition-colors px-3 py-1 rounded-full border border-gray-200 hover:border-purple-300"
              >
                😴 Inactive Followers
              </Link>
              <Link 
                href="/about" 
                className="text-sm text-gray-600 hover:text-purple-600 transition-colors px-3 py-1 rounded-full border border-gray-200 hover:border-purple-300"
              >
                ℹ️ About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}