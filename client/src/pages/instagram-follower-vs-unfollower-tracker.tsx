import { Header } from '@/components/header';
import { SEOHead } from '@/components/seo-head';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  UserPlus, 
  UserMinus, 
  BarChart3, 
  Shield, 
  Zap, 
  CheckCircle, 
  AlertTriangle,
  Smartphone,
  Monitor,
  Clock,
  Target,
  TrendingUp,
  Eye,
  Lock,
  Download
} from 'lucide-react';
import { Link } from 'wouter';

export default function InstagramFollowerVsUnfollowerTracker() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Follower vs Unfollower Tracker', href: '/instagram-follower-vs-unfollower-tracker' },
  ];

  const comparisonFeatures = [
    {
      category: 'Tracking Capability',
      followerTracker: {
        title: 'New Followers Only',
        description: 'Monitors people who start following your account',
        icon: UserPlus,
        color: 'text-green-600',
        rating: 3
      },
      unfollowerTracker: {
        title: 'Lost Followers Detection',
        description: 'Identifies users who stopped following you',
        icon: UserMinus,
        color: 'text-red-600',
        rating: 5
      }
    },
    {
      category: 'Analytics Depth',
      followerTracker: {
        title: 'Growth Metrics',
        description: 'Basic follower count increases and growth rate',
        icon: TrendingUp,
        color: 'text-blue-600',
        rating: 3
      },
      unfollowerTracker: {
        title: 'Comprehensive Insights',
        description: 'Detailed loss patterns, timing, and engagement analysis',
        icon: BarChart3,
        color: 'text-purple-600',
        rating: 5
      }
    },
    {
      category: 'Actionable Intelligence',
      followerTracker: {
        title: 'Limited Actionability',
        description: 'Shows who to potentially follow back',
        icon: Eye,
        color: 'text-gray-600',
        rating: 2
      },
      unfollowerTracker: {
        title: 'Strategic Insights',
        description: 'Reveals content performance and audience retention',
        icon: Target,
        color: 'text-orange-600',
        rating: 5
      }
    }
  ];

  const trackerTypes = [
    {
      type: 'Basic Follower Tracker',
      description: 'Monitors new followers and basic growth metrics',
      features: [
        'New follower notifications',
        'Follower count history',
        'Basic growth rate calculation',
        'Simple follower list'
      ],
      pros: [
        'Easy to understand',
        'Positive focus on growth',
        'Low complexity'
      ],
      cons: [
        'Limited insights',
        'Misses important data',
        'No retention analysis'
      ],
      bestFor: 'New Instagram users focused on growth'
    },
    {
      type: 'Advanced Unfollower Tracker',
      description: 'Comprehensive analysis of follower loss and engagement patterns',
      features: [
        'Unfollower identification',
        'Ghost follower detection',
        'Inactive follower analysis',
        'Engagement rate correlation',
        'Content performance insights',
        'Timing pattern analysis'
      ],
      pros: [
        'Comprehensive insights',
        'Actionable data',
        'Retention optimization',
        'Content strategy guidance'
      ],
      cons: [
        'More complex data',
        'Requires interpretation',
        'Can be overwhelming initially'
      ],
      bestFor: 'Serious content creators and businesses'
    },
    {
      type: 'Hybrid Tracking Solution',
      description: 'Combined follower and unfollower tracking for complete visibility',
      features: [
        'Full follower lifecycle tracking',
        'Comprehensive analytics dashboard',
        'Audience quality assessment',
        'Growth and retention metrics',
        'Comparative analysis tools'
      ],
      pros: [
        'Complete picture',
        'Strategic insights',
        'Optimization opportunities'
      ],
      cons: [
        'Information overload',
        'Higher learning curve'
      ],
      bestFor: 'Professional Instagram marketers'
    }
  ];

  const useCases = [
    {
      scenario: 'Content Creator Optimization',
      challenge: 'Understanding audience engagement and content performance',
      solution: 'Unfollower tracking reveals which content types cause follower loss',
      outcome: 'Improved content strategy and higher retention rates'
    },
    {
      scenario: 'Business Growth Analysis',
      challenge: 'Measuring Instagram marketing effectiveness',
      solution: 'Combined tracking shows acquisition vs retention performance',
      outcome: 'Better ROI on Instagram marketing investments'
    },
    {
      scenario: 'Influencer Partnership Evaluation',
      challenge: 'Assessing follower quality and engagement authenticity',
      solution: 'Ghost and inactive follower detection ensures genuine audience',
      outcome: 'More effective influencer collaborations'
    },
    {
      scenario: 'Personal Brand Development',
      challenge: 'Building authentic and engaged follower base',
      solution: 'Unfollower patterns guide personal branding decisions',
      outcome: 'Stronger personal brand with loyal audience'
    }
  ];

  const toolRecommendations = [
    {
      tool: 'Instagram Data Export Tracker',
      category: 'Privacy-First Solution',
      description: 'Use Instagram\'s official data export for comprehensive tracking',
      features: ['Complete privacy', 'No login required', 'Comprehensive data'],
      security: 'Highest',
      accuracy: 'Highest',
      recommended: true
    },
    {
      tool: 'Third-Party Apps',
      category: 'Convenience Solution',
      description: 'Mobile apps with real-time tracking capabilities',
      features: ['Real-time updates', 'Mobile notifications', 'User-friendly interface'],
      security: 'Medium',
      accuracy: 'Medium',
      recommended: false,
      warning: 'Requires Instagram credentials - security risk'
    },
    {
      tool: 'Manual Tracking',
      category: 'Traditional Method',
      description: 'Manually monitoring follower lists and changes',
      features: ['Complete control', 'No tools required', '100% free'],
      security: 'Highest',
      accuracy: 'Low',
      recommended: false,
      warning: 'Time-intensive and impractical for larger accounts'
    }
  ];

  const faqs = [
    {
      question: 'What is the difference between follower and unfollower tracking?',
      answer: 'Follower tracking monitors new followers and growth metrics, while unfollower tracking identifies who stopped following you and analyzes retention patterns. Unfollower tracking provides more actionable insights for content and engagement strategy optimization.'
    },
    {
      question: 'Which type of Instagram tracker is more valuable for content creators?',
      answer: 'Unfollower tracking is generally more valuable as it reveals content performance insights, audience retention patterns, and optimization opportunities. Understanding why followers leave is often more actionable than simply knowing who follows you.'
    },
    {
      question: 'Can I track both followers and unfollowers simultaneously?',
      answer: 'Yes, hybrid tracking solutions provide comprehensive follower lifecycle analysis. Using Instagram\'s data export method gives you complete follower and unfollower history without compromising account security.'
    },
    {
      question: 'How often should I check my unfollower analytics?',
      answer: 'Weekly checking is optimal for most users. Daily checking can be overwhelming and may not show meaningful patterns, while monthly checking might miss important trends. Weekly analysis allows for timely content strategy adjustments.'
    },
    {
      question: 'Do unfollower tracking tools affect my Instagram account security?',
      answer: 'Tools requiring your Instagram login credentials pose security risks and may violate terms of service. Safe alternatives use Instagram\'s official data export feature, ensuring complete account security while providing comprehensive tracking insights.'
    },
    {
      question: 'What metrics should I focus on in unfollower analysis?',
      answer: 'Key metrics include unfollower rate, timing patterns, content correlation, engagement drops, and ghost follower percentage. These metrics help identify content optimization opportunities and audience quality issues.'
    }
  ];

  return (
    <>
      <SEOHead />
      {/* Enhanced SEO Meta Tags */}
      <title>Instagram Follower vs Unfollower Tracker: Complete Comparison Guide 2024</title>
      <meta name="description" content="Discover the key differences between Instagram follower and unfollower trackers. Learn which tracking method delivers better insights for content strategy and audience growth." />
      <meta name="keywords" content="instagram follower tracker, instagram unfollower tracker, follower vs unfollower tracking, instagram analytics, social media tracking tools" />
      
      {/* Open Graph Tags for High CTR */}
      <meta property="og:title" content="Instagram Follower vs Unfollower Tracker: Which Delivers Better Insights?" />
      <meta property="og:description" content="Compare Instagram tracking methods and discover which approach gives you actionable insights for real audience growth and content optimization." />
      <meta property="og:type" content="article" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630" />
      
      {/* Article Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Instagram Follower vs Unfollower Tracker: Complete Comparison Guide 2024",
          "description": "Comprehensive comparison of Instagram follower and unfollower tracking methods with actionable insights for content creators and businesses.",
          "author": {
            "@type": "Organization",
            "name": "Instagram Unfollowers Tracker"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Instagram Unfollowers Tracker",
            "logo": "https://instaunfollowerstracker.com/favicon.svg"
          },
          "datePublished": "2025-01-26",
          "dateModified": "2025-01-26",
          "mainEntityOfPage": "https://instaunfollowerstracker.com/instagram-follower-vs-unfollower-tracker",
          "image": "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
          "articleSection": "Instagram Analytics",
          "keywords": ["Instagram tracking", "follower analysis", "unfollower tracking", "social media analytics"],
          "wordCount": 2500
        })}
      </script>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} className="mb-8 text-white/80" />
            
            <div className="text-center">
              <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4 px-4 py-2">
                📊 Complete Comparison Guide
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Instagram Follower vs Unfollower Tracker
              </h1>
              <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-4xl mx-auto">
                Discover the crucial differences between tracking new followers and monitoring unfollowers. 
                Learn which approach delivers actionable insights for genuine audience growth and content optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 font-bold"
                  onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <BarChart3 className="mr-2" size={20} />
                  View Detailed Comparison
                </Button>
                <Link href="/unfollowers-tracker">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <Zap className="mr-2" size={20} />
                    Try Our Tracker Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <main className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Introduction */}
            <Card className="mb-12">
              <CardContent className="pt-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Understanding Instagram Tracking Methods</h2>
                    <p className="text-gray-600">The fundamental difference between growth and retention analytics</p>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 mb-6">
                    In the evolving landscape of Instagram analytics, content creators and businesses face a critical decision: 
                    should they focus on tracking new followers or monitoring unfollowers? This comprehensive analysis reveals 
                    why unfollower tracking provides significantly more actionable insights for sustainable audience growth.
                  </p>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                    alt="Instagram analytics dashboard showing follower and unfollower tracking metrics comparison" 
                    className="w-full rounded-lg mb-8 shadow-lg"
                  />
                  
                  <p className="text-gray-700 mb-4">
                    Traditional follower tracking focuses on acquisition metrics—who's following you and when. While this 
                    provides a surface-level view of growth, it misses the crucial retention component that determines 
                    long-term success. Unfollower tracking, conversely, reveals the quality of your content strategy 
                    and audience engagement patterns.
                  </p>
                  
                  <p className="text-gray-700">
                    Modern Instagram success requires understanding both acquisition and retention. However, if you must 
                    choose one tracking method, unfollower analysis delivers superior strategic insights for content 
                    optimization and genuine audience development.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Comparison */}
            <section id="comparison" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Comprehensive Feature Comparison
              </h2>
              
              <div className="space-y-8">
                {comparisonFeatures.map((feature, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                        {feature.category}
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Follower Tracker */}
                        <div className="border rounded-lg p-6 bg-gray-50">
                          <div className="flex items-center mb-4">
                            <feature.followerTracker.icon 
                              className={`${feature.followerTracker.color} mr-3`} 
                              size={24} 
                            />
                            <h4 className="text-lg font-semibold text-gray-900">
                              Follower Tracker
                            </h4>
                          </div>
                          <h5 className="font-semibold text-gray-800 mb-2">
                            {feature.followerTracker.title}
                          </h5>
                          <p className="text-gray-600 mb-4">
                            {feature.followerTracker.description}
                          </p>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-500 mr-2">Effectiveness:</span>
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i} 
                                className={`w-4 h-4 rounded-full mr-1 ${
                                  i < feature.followerTracker.rating ? 'bg-yellow-400' : 'bg-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Unfollower Tracker */}
                        <div className="border rounded-lg p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                          <div className="flex items-center mb-4">
                            <feature.unfollowerTracker.icon 
                              className={`${feature.unfollowerTracker.color} mr-3`} 
                              size={24} 
                            />
                            <h4 className="text-lg font-semibold text-gray-900">
                              Unfollower Tracker
                            </h4>
                            <Badge className="ml-auto bg-purple-100 text-purple-800">
                              Recommended
                            </Badge>
                          </div>
                          <h5 className="font-semibold text-gray-800 mb-2">
                            {feature.unfollowerTracker.title}
                          </h5>
                          <p className="text-gray-600 mb-4">
                            {feature.unfollowerTracker.description}
                          </p>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-500 mr-2">Effectiveness:</span>
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i} 
                                className={`w-4 h-4 rounded-full mr-1 ${
                                  i < feature.unfollowerTracker.rating ? 'bg-yellow-400' : 'bg-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Tracker Types Analysis */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Instagram Tracker Types: In-Depth Analysis
              </h2>
              
              <div className="grid gap-8">
                {trackerTypes.map((tracker, index) => (
                  <Card key={index} className={index === 1 ? 'ring-2 ring-purple-200' : ''}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-gray-900">
                          {tracker.type}
                        </h3>
                        {index === 1 && (
                          <Badge className="bg-purple-100 text-purple-800">
                            Most Valuable
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {tracker.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <CheckCircle className="text-green-600 mr-2" size={18} />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {tracker.features.map((feature, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-center">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <CheckCircle className="text-green-600 mr-2" size={18} />
                            Advantages
                          </h4>
                          <ul className="space-y-2">
                            {tracker.pros.map((pro, i) => (
                              <li key={i} className="text-sm text-green-700 flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <AlertTriangle className="text-orange-600 mr-2" size={18} />
                            Limitations
                          </h4>
                          <ul className="space-y-2">
                            {tracker.cons.map((con, i) => (
                              <li key={i} className="text-sm text-orange-700 flex items-center">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <Target className="text-purple-600 mr-2" size={18} />
                            Best For
                          </h4>
                          <p className="text-sm text-gray-600">
                            {tracker.bestFor}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Real-World Use Cases */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Strategic Use Cases: When Each Tracker Excels
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {useCases.map((useCase, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        {useCase.scenario}
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2">Challenge:</h4>
                          <p className="text-gray-600 text-sm">
                            {useCase.challenge}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">Solution:</h4>
                          <p className="text-gray-600 text-sm">
                            {useCase.solution}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Outcome:</h4>
                          <p className="text-gray-600 text-sm">
                            {useCase.outcome}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Tool Recommendations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Recommended Instagram Tracking Tools
              </h2>
              
              <div className="space-y-6">
                {toolRecommendations.map((tool, index) => (
                  <Card key={index} className={tool.recommended ? 'ring-2 ring-green-200 bg-green-50' : ''}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {tool.tool}
                          </h3>
                          <p className="text-gray-600">
                            {tool.category}
                          </p>
                        </div>
                        {tool.recommended && (
                          <Badge className="bg-green-100 text-green-800">
                            <Shield className="mr-1" size={14} />
                            Recommended
                          </Badge>
                        )}
                        {tool.warning && (
                          <Badge className="bg-red-100 text-red-800">
                            <AlertTriangle className="mr-1" size={14} />
                            Security Risk
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-gray-700 mb-4">
                        {tool.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                          <ul className="space-y-1">
                            {tool.features.map((feature, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-center">
                                <CheckCircle className="text-green-500 mr-2" size={14} />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">Security:</span>
                            <Badge className={`${
                              tool.security === 'Highest' ? 'bg-green-100 text-green-800' :
                              tool.security === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {tool.security}
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">Accuracy:</span>
                            <Badge className={`${
                              tool.accuracy === 'Highest' ? 'bg-green-100 text-green-800' :
                              tool.accuracy === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {tool.accuracy}
                            </Badge>
                          </div>
                          {tool.warning && (
                            <p className="text-xs text-red-600 mt-2">
                              ⚠️ {tool.warning}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
              <CardContent className="pt-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Ready to Start Advanced Instagram Tracking?
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Experience the power of comprehensive unfollower analysis with our secure, 
                  privacy-first tracking solution.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/unfollowers-tracker">
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold">
                      <Zap className="mr-2" size={20} />
                      Try Free Unfollower Tracker
                    </Button>
                  </Link>
                  <Link href="/how-it-works">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      <Download className="mr-2" size={20} />
                      Learn How It Works
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}