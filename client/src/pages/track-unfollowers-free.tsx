import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FileUpload } from '@/components/file-upload';
import { StatsDashboard } from '@/components/stats-dashboard';
import { FAQSection } from '@/components/faq-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Shield, Clock, Zap, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export function TrackUnfollowersFree() {
  const [hasUploadedFile, setHasUploadedFile] = useState(false);

  const handleFileUploaded = (file: File) => {
    setHasUploadedFile(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-20 w-56 h-56 bg-white opacity-5 rounded-full blur-2xl animate-float"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-sm opacity-90">Trusted by 50,000+ users</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Track Instagram Unfollowers Free
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Get instant results on who unfollowed you on Instagram. No login required, completely secure, and 100% free forever.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-90 mb-8">
            <div className="flex items-center gap-2">
              <Shield size={16} />
              <span>No Password Needed</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Results in 10 Seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} />
              <span>Always Free</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>50k+ Happy Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Free Tool Section */}
      <div id="tracker-tool" className="bg-white">
        <FileUpload onFileUploaded={handleFileUploaded} />
        {hasUploadedFile && <StatsDashboard />}
      </div>

      {/* Free Features Highlight */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need - Completely Free
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our Instagram unfollowers tracker is 100% free with no hidden costs, premium plans, or feature limitations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md bg-white">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Free Forever</h3>
                <p className="text-gray-600 text-sm">No premium plans or hidden fees</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md bg-white">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Unlimited Usage</h3>
                <p className="text-gray-600 text-sm">Track unfollowers as many times as you want</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md bg-white">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-purple-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">All Features Included</h3>
                <p className="text-gray-600 text-sm">Complete analytics and insights at no cost</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md bg-white">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-pink-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">100% Secure</h3>
                <p className="text-gray-600 text-sm">Your data stays private and secure</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Start Tracking Unfollowers Now
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of Instagram users who track their unfollowers safely with our free tool. No registration required, start immediately.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-purple-600" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Request Your Instagram Data</h3>
                    <p className="text-gray-600">
                      Use Instagram's official data export feature - completely safe and secure.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-purple-600" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Your ZIP File</h3>
                    <p className="text-gray-600">
                      Upload your Instagram data file and get instant results in seconds.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-purple-600" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Detailed Insights</h3>
                    <p className="text-gray-600">
                      See who unfollowed you, new followers, and comprehensive analytics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  size="lg"
                  onClick={() => document.getElementById('tracker-tool')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Start Tracking Free
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our Free Tool?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield size={20} className="text-purple-200" />
                    <span>No passwords or login required</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap size={20} className="text-yellow-200" />
                    <span>Instant results in under 10 seconds</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users size={20} className="text-blue-200" />
                    <span>Trusted by 50,000+ Instagram users</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-200" />
                    <span>100% free with no limitations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp size={20} className="text-pink-200" />
                    <span>Comprehensive analytics included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Users Say About Our Free Tool
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied users who trust our free Instagram unfollowers tracker.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Amazing tool! Found out exactly who unfollowed me without having to share my password. The results were instant and accurate."
                </p>
                <div className="font-semibold text-gray-900">Sarah M.</div>
                <div className="text-sm text-gray-500">Instagram Influencer</div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I was skeptical about free tools, but this one actually works perfectly. No ads, no premium upsells - just the results I needed."
                </p>
                <div className="font-semibold text-gray-900">David L.</div>
                <div className="text-sm text-gray-500">Business Owner</div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Super easy to use and completely secure. I love that it's free and gives me all the analytics I need to understand my audience."
                </p>
                <div className="font-semibold text-gray-900">Emma R.</div>
                <div className="text-sm text-gray-500">Content Creator</div>
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