import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileUpload } from '@/components/file-upload';
import { StatsDashboard } from '@/components/stats-dashboard';
import { Users, Ghost, Shield, Clock, Zap, CheckCircle, TrendingUp, Eye, UserMinus, AlertTriangle, Target } from 'lucide-react';
import { useState } from 'react';

export function GhostFollowersPage() {
  const [hasUploadedFile, setHasUploadedFile] = useState(false);

  const handleFileUploaded = (file: File) => {
    setHasUploadedFile(true);
  };

  const features = [
    {
      icon: Ghost,
      title: 'Identify Ghost Followers',
      description: 'Detect accounts with no profile picture, few posts, or suspicious activity patterns',
      color: 'purple'
    },
    {
      icon: UserMinus,
      title: 'Fake Account Detection',
      description: 'Advanced algorithms identify bot accounts and purchased followers automatically',
      color: 'red'
    },
    {
      icon: Target,
      title: 'Engagement Quality',
      description: 'Analyze which followers actually engage vs ghost accounts that never interact',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Account Protection',
      description: 'Protect your Instagram credibility by identifying and removing fake followers',
      color: 'green'
    }
  ];

  const benefits = [
    'Improve authentic engagement rates',
    'Boost Instagram algorithm performance',
    'Enhance brand credibility',
    'Better influencer marketing metrics',
    'Cleaner audience analytics',
    'Higher conversion rates'
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Ghost Followers Tracker – Detect Fake & Inactive Instagram Accounts</title>
      <meta name="description" content="Use our Ghost Followers Tracker to spot fake or inactive Instagram accounts. Clean your audience, boost engagement, and grow with real, active followers." />
      <meta name="keywords" content="instagram ghost followers, fake followers detector, bot followers, instagram engagement, ghost followers tracker, remove fake followers, instagram analytics" />
      <meta property="og:title" content="Instagram Ghost Followers Tracker - Find Fake Followers Free" />
      <meta property="og:description" content="Detect and remove ghost followers from Instagram. Free tool to identify fake accounts, bot followers, and inactive users." />
      <meta property="og:url" content="https://unfollowerstracker.com/ghost-followers" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Instagram Ghost Followers Tracker - Find Fake Followers Free",
          "description": "Detect and remove ghost followers from Instagram. Free tool to identify fake accounts, bot followers, and inactive users. Improve engagement rates instantly.",
          "url": "https://unfollowerstracker.com/ghost-followers",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://unfollowerstracker.com"
              },
              {
                "@type": "ListItem", 
                "position": 2,
                "name": "Ghost Followers Tracker",
                "item": "https://unfollowerstracker.com/ghost-followers"
              }
            ]
          },
          "mainEntity": {
            "@type": "SoftwareApplication",
            "name": "Instagram Ghost Followers Tracker",
            "applicationCategory": "Social Media Analytics",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          }
        })
      }} />

      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl animate-pulse-slow"></div>
            <div className="absolute bottom-10 right-20 w-24 h-24 bg-white opacity-5 rounded-full blur-xl animate-float"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 px-3 py-1 text-sm">
              Free Ghost Followers Detection
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Instagram Ghost Followers
              <span className="block text-yellow-300">Tracker & Detector</span>
            </h1>
            <p className="text-lg text-gray-100 mb-6 max-w-3xl mx-auto">
              Identify fake followers, ghost accounts, and inactive users ruining your engagement. 
              Clean your audience and boost authentic interactions with our free detection tool.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                onClick={() => document.getElementById('ghost-tracker')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-purple-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                <Ghost className="mr-2" size={20} />
                Find Ghost Followers
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Shield size={16} />
                <span>100% Safe & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Instant Results</span>
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
              { label: 'Ghost Followers Tracker', current: true }
            ]} />
          </div>
        </section>

        {/* Main Tool */}
        <div id="ghost-tracker">
          <FileUpload onFileUploaded={handleFileUploaded} />
          {hasUploadedFile && <StatsDashboard />}
        </div>

        {/* What Are Ghost Followers */}
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                What Are Instagram Ghost Followers?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ghost followers are fake or inactive Instagram accounts that follow you but never engage 
                with your content. They hurt your engagement rate and make your audience metrics misleading.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 duration-300 border-0 shadow-md">
                  <CardContent className="pt-0">
                    <div className={`w-12 h-12 bg-${feature.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className={`text-${feature.color}-600`} size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Remove Ghost Followers */}
        <section className="py-10 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Why You Should Remove Ghost Followers
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Ghost followers significantly damage your Instagram performance. They create a false 
                  impression of popularity while drastically reducing your engagement rates and reach.
                </p>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 bg-red-50 border border-red-200">
                  <CardContent className="pt-0">
                    <div className="flex items-center mb-3">
                      <AlertTriangle className="text-red-600 mr-3" size={20} />
                      <h3 className="font-semibold text-red-900">Problems with Ghost Followers</h3>
                    </div>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• Lower engagement rates</li>
                      <li>• Reduced Instagram reach</li>
                      <li>• Poor algorithm performance</li>
                      <li>• Misleading analytics</li>
                      <li>• Damaged credibility</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-green-50 border border-green-200">
                  <CardContent className="pt-0">
                    <div className="flex items-center mb-3">
                      <TrendingUp className="text-green-600 mr-3" size={20} />
                      <h3 className="font-semibold text-green-900">Benefits of Clean Audience</h3>
                    </div>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Higher engagement rates</li>
                      <li>• Better algorithm visibility</li>
                      <li>• Authentic audience insights</li>
                      <li>• Improved brand reputation</li>
                      <li>• Better conversion rates</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                How Ghost Followers Detection Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our advanced algorithm analyzes your Instagram followers to identify suspicious patterns, 
                fake accounts, and inactive users that damage your engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Analyze Patterns</h3>
                <p className="text-gray-600">
                  Scan follower profiles for signs of fake accounts: no profile pics, few posts, 
                  suspicious usernames, and zero engagement history.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Identify Ghost Accounts</h3>
                <p className="text-gray-600">
                  Detect inactive followers who never like, comment, or engage with your content 
                  but artificially inflate your follower count.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Clean Insights</h3>
                <p className="text-gray-600">
                  Receive detailed reports showing ghost followers, engagement quality metrics, 
                  and recommendations for improving your audience authenticity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How do I identify ghost followers on Instagram?
                </h3>
                <p className="text-gray-600">
                  Ghost followers typically have incomplete profiles (no bio, few posts), generic profile pictures, 
                  suspicious usernames with random numbers, and zero engagement with your content. Our tool 
                  automatically detects these patterns in your follower list.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Should I remove ghost followers from Instagram?
                </h3>
                <p className="text-gray-600">
                  Yes, removing ghost followers improves your engagement rate, helps Instagram's algorithm 
                  show your content to more people, and provides more accurate analytics about your real 
                  audience. It's essential for maintaining authentic growth.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Is it safe to use a ghost followers detector?
                </h3>
                <p className="text-gray-600">
                  Our tool is completely safe as it uses only your Instagram data export file. We don't 
                  require your password, don't store your data, and process everything locally in your 
                  browser for maximum security and privacy.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How often should I check for ghost followers?
                </h3>
                <p className="text-gray-600">
                  We recommend checking for ghost followers monthly, especially if you're actively growing 
                  your account or running Instagram marketing campaigns. Regular cleaning helps maintain 
                  high engagement rates and authentic audience metrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Clean Your Instagram Followers?
            </h2>
            <p className="text-lg mb-8">
              Start detecting ghost followers now. Boost your engagement rates and improve your Instagram performance.
            </p>
            <Button 
              size="lg"
              onClick={() => document.getElementById('ghost-tracker')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              <Ghost className="mr-2" size={20} />
              Start Ghost Detection
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default GhostFollowersPage;