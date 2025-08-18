import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileUpload } from '@/components/file-upload';
import { StatsDashboard } from '@/components/stats-dashboard';
import { FAQSection } from '@/components/faq-section';
import { Users, Shield, Clock, Zap, CheckCircle, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export function UnfollowersTrackerPage() {
  const [hasUploadedFile, setHasUploadedFile] = useState(false);

  const handleFileUploaded = (file: File) => {
    setHasUploadedFile(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white opacity-5 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Instagram Unfollowers Tracker
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto font-medium">
            Discover exactly who unfollowed you on Instagram. Track lost followers, new connections, and engagement patterns with our secure, no-login tracker tool.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={() => document.getElementById('tracker-tool')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              data-testid="button-start-tracking"
            >
              <Users className="mr-3" size={24} />
              Start Tracking Now
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Shield size={16} />
              <span>100% Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Results in 10 Seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} />
              <span>No Login Required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="bg-white py-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Unfollowers Tracker', current: true }
          ]} />
        </div>
      </section>

      {/* Main Tracker Tool */}
      <div id="tracker-tool">
        <FileUpload onFileUploaded={handleFileUploaded} />
        {hasUploadedFile && <StatsDashboard />}
      </div>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Advanced Instagram Unfollowers Detection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unfollowers tracker uses advanced algorithms to analyze your Instagram data and provide comprehensive insights about your follower changes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Unfollower Detection</h3>
                <p className="text-gray-600">
                  Instantly identify users who unfollowed your Instagram account. Get detailed lists with usernames and unfollowing dates.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Growth Analytics</h3>
                <p className="text-gray-600">
                  Track your follower growth patterns, engagement rates, and identify the best times to post for maximum reach.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
                <p className="text-gray-600">
                  Your Instagram data stays completely private. No passwords required, all processing happens locally in your browser.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Use Our Unfollowers Tracker */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Instagram Unfollowers Tracker?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Unlike other unfollower tracking tools, our platform prioritizes your security and provides the most accurate results without compromising your Instagram account.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-green-600" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Instagram Login Required</h3>
                    <p className="text-gray-600">
                      Never share your Instagram password. Our tool works with your official Instagram data export, keeping your account completely secure.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-green-600" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant & Accurate Results</h3>
                    <p className="text-gray-600">
                      Get comprehensive unfollower data in under 10 seconds. Our advanced parsing algorithms ensure 100% accuracy.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-green-600" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Analytics</h3>
                    <p className="text-gray-600">
                      Beyond unfollowers, discover new followers, mutual connections, engagement patterns, and growth insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Track Unfollowers in 3 Steps</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span>Request your Instagram data export</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span>Download the ZIP file when ready</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span>Upload & get instant unfollower insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </div>
  );
}