import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FAQSection } from '@/components/faq-section';
import { BarChart3, Users, TrendingUp, Eye, Heart, MessageCircle, Share2, Clock, Target } from 'lucide-react';

export function FollowersInsightsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl animate-float"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Instagram Followers Insights
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto font-medium">
            Get deep insights into your Instagram followers behavior, engagement patterns, and growth metrics. Understand your audience like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={() => document.getElementById('insights-features')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              data-testid="button-explore-insights"
            >
              <BarChart3 className="mr-3" size={24} />
              Explore Insights
            </Button>
          </div>
        </div>
      </section>

      {/* Key Insights Features */}
      <section id="insights-features" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Instagram Followers Analytics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover valuable insights about your Instagram followers, their behavior patterns, and engagement preferences to optimize your content strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Follower Demographics</h3>
                <p className="text-gray-600">
                  Analyze your follower base with detailed demographics including location, age groups, activity patterns, and follower quality metrics.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Growth Tracking</h3>
                <p className="text-gray-600">
                  Monitor your follower growth rate, identify trends, peak growth periods, and understand what content drives the most followers.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Engagement Analysis</h3>
                <p className="text-gray-600">
                  Deep dive into likes, comments, shares, and story interactions to understand which content resonates most with your audience.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="text-orange-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Content Performance</h3>
                <p className="text-gray-600">
                  Analyze which posts, stories, and reels perform best. Identify optimal posting times and content types for maximum reach.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="text-pink-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Interaction Patterns</h3>
                <p className="text-gray-600">
                  Understand how your followers interact with your content, comment sentiment analysis, and most engaged follower segments.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Audience Insights</h3>
                <p className="text-gray-600">
                  Discover your most valuable followers, identify influencers in your network, and understand your audience's interests and behaviors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Analytics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced Instagram Followers Intelligence
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Transform your Instagram strategy with data-driven insights. Our followers insights tool provides actionable intelligence to grow your audience effectively.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Follower Quality Analysis</h3>
                    <p className="text-gray-600">
                      Identify high-quality followers vs. inactive accounts. Understand follower authenticity and engagement potential.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="text-green-600" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth Optimization</h3>
                    <p className="text-gray-600">
                      Discover the best strategies to attract and retain followers based on your current audience behavior patterns.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="text-purple-600" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimal Posting Times</h3>
                    <p className="text-gray-600">
                      Analyze when your followers are most active to maximize reach, engagement, and content visibility.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/'}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all font-bold text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl"
                >
                  Get Your Followers Insights
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Insight Categories</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Share2 size={20} className="text-blue-200" />
                    <span>Follower Growth Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart size={20} className="text-pink-200" />
                    <span>Engagement Rate Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Eye size={20} className="text-purple-200" />
                    <span>Content Performance Metrics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle size={20} className="text-green-200" />
                    <span>Audience Interaction Patterns</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target size={20} className="text-orange-200" />
                    <span>Follower Quality Assessment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Instagram Followers Insights Matter
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Understanding your followers is key to Instagram success. Make data-driven decisions to grow your audience and increase engagement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Boost Growth Rate</h3>
              <p className="text-gray-600">
                Identify what attracts followers and replicate successful strategies to accelerate your Instagram growth.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Increase Engagement</h3>
              <p className="text-gray-600">
                Understand what content your followers love most and create more engaging posts that drive interactions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Target Better</h3>
              <p className="text-gray-600">
                Know your audience demographics and preferences to create targeted content that resonates with your followers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </div>
  );
}