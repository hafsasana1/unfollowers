import { Header } from '@/components/header';
import { SEOHead } from '@/components/seo-head';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileUpload } from '@/components/file-upload';
import { StatsDashboard } from '@/components/stats-dashboard';
import { BannerAd, InArticleAd } from '@/components/adsense-ad';
import { Users, UserX, Shield, Clock, Zap, CheckCircle, TrendingUp, Eye, Activity, BarChart3, UserCheck } from 'lucide-react';
import { useState } from 'react';

export function InactiveFollowersPage() {
  const [hasUploadedFile, setHasUploadedFile] = useState(false);

  const handleFileUploaded = (file: File) => {
    setHasUploadedFile(true);
  };

  const features = [
    {
      icon: UserX,
      title: 'Inactive Follower Detection',
      description: 'Find followers who follow you but never engage with your posts or stories',
      color: 'orange'
    },
    {
      icon: Activity,
      title: 'Engagement Analysis',
      description: 'Analyze follower activity patterns to identify genuine vs inactive accounts',
      color: 'blue'
    },
    {
      icon: BarChart3,
      title: 'Activity Scoring',
      description: 'Get detailed activity scores for each follower based on their engagement',
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: 'Performance Boost',
      description: 'Improve your engagement rate by identifying and managing inactive followers',
      color: 'purple'
    }
  ];

  const inactiveTypes = [
    {
      title: 'Silent Followers',
      description: 'Real people who follow you but rarely engage with content',
      percentage: '60-70%'
    },
    {
      title: 'Dormant Accounts',
      description: 'Users who were active before but stopped using Instagram',
      percentage: '20-25%'
    },
    {
      title: 'Lost Interest',
      description: 'Followers who engaged initially but lost interest over time',
      percentage: '10-15%'
    }
  ];

  const strategies = [
    'Create more engaging content formats',
    'Post at optimal times for your audience',
    'Use interactive features like polls and questions',
    'Engage directly with inactive followers',
    'Analyze content that previously performed well',
    'Consider targeted content for different follower segments'
  ];

  return (
    <>
      <SEOHead />
      {/* SEO Meta Tags */}
      <title>Inactive Followers Tracker – Find & Remove Non-Engaging Instagram Users</title>
      <meta name="description" content="Track and remove inactive Instagram followers who don't engage with your posts. Our Inactive Followers Tracker helps you improve reach and engagement rates." />
      <meta name="keywords" content="instagram inactive followers, silent followers, dormant followers, engagement analysis, instagram analytics, follower activity, engagement rate" />
      <meta property="og:title" content="Instagram Inactive Followers Tracker - Find Non-Engaging Followers" />
      <meta property="og:description" content="Identify inactive Instagram followers who don't engage with your content. Free tool to analyze follower activity and boost engagement rates." />
      <meta property="og:url" content="https://unfollowerstracker.com/inactive-followers" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Instagram Inactive Followers Tracker - Find Non-Engaging Followers",
          "description": "Identify inactive Instagram followers who don't engage with your content. Free tool to analyze follower activity and boost engagement rates effectively.",
          "url": "https://unfollowerstracker.com/inactive-followers",
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
                "name": "Inactive Followers Tracker",
                "item": "https://unfollowerstracker.com/inactive-followers"
              }
            ]
          },
          "mainEntity": {
            "@type": "SoftwareApplication",
            "name": "Instagram Inactive Followers Tracker",
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
        <section className="py-10 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl animate-pulse-slow"></div>
            <div className="absolute bottom-10 right-20 w-24 h-24 bg-white opacity-5 rounded-full blur-xl animate-float"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 px-3 py-1 text-sm">
              Free Inactive Followers Analysis
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Instagram Inactive Followers
              <span className="block text-yellow-300">Tracker & Analyzer</span>
            </h1>
            <p className="text-lg text-gray-100 mb-6 max-w-3xl mx-auto">
              Discover which followers never engage with your content. Identify silent followers, 
              dormant accounts, and boost your Instagram engagement rates with targeted strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                onClick={() => document.getElementById('inactive-tracker')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                <UserX className="mr-2" size={20} />
                Find Inactive Followers
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
                <span>Instant Analysis</span>
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
              { label: 'Inactive Followers Tracker', current: true }
            ]} />
          </div>
        </section>

        {/* Main Tool */}
        <div id="inactive-tracker">
          <FileUpload onFileUploaded={handleFileUploaded} />
          {hasUploadedFile && <StatsDashboard />}
        </div>

        {/* What Are Inactive Followers */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                What Are Inactive Instagram Followers?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Inactive followers are real Instagram users who follow your account but rarely or never 
                engage with your content through likes, comments, shares, or story views.
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

        {/* Types of Inactive Followers */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Types of Inactive Followers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding different types of inactive followers helps you develop targeted 
                strategies to re-engage them or make informed decisions about your audience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {inactiveTypes.map((type, index) => (
                <Card key={index} className="p-6 bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-0">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-orange-600 mb-2">{type.percentage}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                    </div>
                    <p className="text-gray-600 text-center">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Track Inactive Followers */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Why Track Inactive Followers?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Inactive followers significantly impact your Instagram performance metrics. While they 
                  don't harm your account like fake followers, they do affect your engagement rates 
                  and overall content performance.
                </p>

                <div className="space-y-4">
                  {strategies.map((strategy, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700 font-medium">{strategy}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 bg-blue-50 border border-blue-200">
                  <CardContent className="pt-0">
                    <div className="flex items-center mb-3">
                      <Activity className="text-blue-600 mr-3" size={20} />
                      <h3 className="font-semibold text-blue-900">Engagement Benefits</h3>
                    </div>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Identify content preferences</li>
                      <li>• Improve posting strategies</li>
                      <li>• Target re-engagement campaigns</li>
                      <li>• Optimize posting times</li>
                      <li>• Understand audience behavior</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-green-50 border border-green-200">
                  <CardContent className="pt-0">
                    <div className="flex items-center mb-3">
                      <TrendingUp className="text-green-600 mr-3" size={20} />
                      <h3 className="font-semibold text-green-900">Growth Opportunities</h3>
                    </div>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Better algorithm performance</li>
                      <li>• Higher engagement rates</li>
                      <li>• More targeted content creation</li>
                      <li>• Improved audience insights</li>
                      <li>• Enhanced content strategy</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How to Re-engage Inactive Followers */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                How to Re-engage Inactive Followers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Don't give up on inactive followers immediately. Many can be re-engaged with 
                the right strategies and content approaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 bg-white shadow-md border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Eye className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Interactive Content</h3>
                  <p className="text-gray-600 text-sm">
                    Use polls, questions, and interactive stickers in stories to encourage 
                    participation from silent followers.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-white shadow-md border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Direct Engagement</h3>
                  <p className="text-gray-600 text-sm">
                    Proactively engage with inactive followers by liking and commenting 
                    on their posts to rebuild connection.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-white shadow-md border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-0">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Analysis</h3>
                  <p className="text-gray-600 text-sm">
                    Analyze which past posts got engagement from now-inactive followers 
                    and create similar content.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What percentage of followers are typically inactive?
                </h3>
                <p className="text-gray-600">
                  Most Instagram accounts have 60-80% inactive followers. This is normal and includes 
                  people who rarely use Instagram, follow many accounts, or simply prefer to lurk 
                  rather than actively engage with content.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Should I remove inactive followers?
                </h3>
                <p className="text-gray-600">
                  Unlike fake followers, you shouldn't remove inactive followers as they are real people. 
                  Instead, focus on re-engagement strategies. However, if your engagement rate is critically 
                  low, you might consider removing some clearly dormant accounts.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How can I tell if a follower is inactive vs just a lurker?
                </h3>
                <p className="text-gray-600">
                  Inactive followers have no recent activity, empty or very old profiles, and zero 
                  engagement history. Lurkers are active users who view content but don't engage publicly. 
                  Our tool helps distinguish between these types.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can inactive followers hurt my Instagram reach?
                </h3>
                <p className="text-gray-600">
                  Inactive followers can indirectly affect reach by lowering your engagement rate, which 
                  signals to Instagram's algorithm that your content might be less interesting. However, 
                  the impact is less severe than fake followers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-orange-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Analyze Your Inactive Followers?
            </h2>
            <p className="text-lg mb-8">
              Start identifying inactive followers and develop strategies to boost your engagement rates.
            </p>
            <Button 
              size="lg"
              onClick={() => document.getElementById('inactive-tracker')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              <UserX className="mr-2" size={20} />
              Start Analysis
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default InactiveFollowersPage;