import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FAQSection } from '@/components/faq-section';
import { BarChart3, PieChart, LineChart, Activity, Zap, Target, Calendar, Globe } from 'lucide-react';

export function InstagramAnalyticsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-white opacity-5 rounded-full blur-2xl animate-float"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Instagram Analytics Dashboard
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto font-medium">
            Comprehensive Instagram analytics and metrics. Track performance, analyze growth, monitor engagement, and optimize your Instagram strategy with detailed insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={() => document.getElementById('analytics-dashboard')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              data-testid="button-view-analytics"
            >
              <BarChart3 className="mr-3" size={24} />
              View Analytics
            </Button>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section id="analytics-dashboard" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Instagram Analytics Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get comprehensive insights into your Instagram performance with our advanced analytics dashboard. Track all key metrics in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Engagement Metrics</h3>
                <p className="text-gray-600 text-sm">Track likes, comments, shares, and story interactions</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <LineChart className="text-green-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Growth Analysis</h3>
                <p className="text-gray-600 text-sm">Monitor follower growth trends and patterns</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <PieChart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Audience Demographics</h3>
                <p className="text-gray-600 text-sm">Understand your audience composition</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="text-orange-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Performance Reports</h3>
                <p className="text-gray-600 text-sm">Detailed content and account performance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Analytics Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced Instagram Analytics Features
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our Instagram analytics platform provides comprehensive insights to help you understand your account performance and optimize your social media strategy.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="text-indigo-600" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
                    <p className="text-gray-600">
                      Monitor your Instagram performance with real-time data updates, engagement tracking, and instant insights into your content performance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="text-purple-600" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitor Analysis</h3>
                    <p className="text-gray-600">
                      Compare your performance with competitors, identify industry trends, and discover opportunities for growth and improvement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Calendar className="text-green-600" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Historical Data Tracking</h3>
                    <p className="text-gray-600">
                      Access historical performance data, track long-term trends, and measure the success of your Instagram strategy over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Analytics Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Engagement Rate</span>
                    <div className="w-24 bg-white bg-opacity-20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2" style={{width: '78%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Follower Growth</span>
                    <div className="w-24 bg-white bg-opacity-20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Content Performance</span>
                    <div className="w-24 bg-white bg-opacity-20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2" style={{width: '82%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Audience Quality</span>
                    <div className="w-24 bg-white bg-opacity-20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2" style={{width: '91%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Analytics Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Instagram Performance Tracking
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monitor every aspect of your Instagram presence with detailed analytics and actionable insights for sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Activity className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Account Performance</h3>
                <p className="text-gray-600">
                  Track overall account metrics including reach, impressions, profile visits, and website clicks for comprehensive performance overview.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <LineChart className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Content Analytics</h3>
                <p className="text-gray-600">
                  Analyze individual post performance, story metrics, IGTV views, and Reels engagement to optimize your content strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Audience Geography</h3>
                <p className="text-gray-600">
                  Understand where your followers are located globally, analyze regional engagement patterns, and optimize posting times.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="text-orange-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Hashtag Performance</h3>
                <p className="text-gray-600">
                  Track hashtag effectiveness, discover trending hashtags in your niche, and optimize your hashtag strategy for better reach.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <PieChart className="text-pink-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Engagement Breakdown</h3>
                <p className="text-gray-600">
                  Detailed analysis of likes, comments, shares, saves, and story interactions with engagement rate calculations and trends.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="text-indigo-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Optimal Timing</h3>
                <p className="text-gray-600">
                  Discover the best times to post based on your audience activity, maximize reach and engagement with data-driven scheduling.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Tracking Your Instagram Analytics Today
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Get comprehensive insights into your Instagram performance and take your social media strategy to the next level with our advanced analytics platform.
          </p>
          
          <Button 
            size="lg"
            onClick={() => window.location.href = '/'}
            className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            <BarChart3 className="mr-3" size={24} />
            Get Analytics Now
          </Button>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </div>
  );
}