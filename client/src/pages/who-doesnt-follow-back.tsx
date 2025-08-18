import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Users, Download, Search, BarChart3, CheckCircle, ArrowRight, AlertTriangle, Heart } from 'lucide-react';
import { Link } from 'wouter';

export default function WhoDoesntFollowBack() {
  const strategies = [
    {
      title: 'Quality Over Quantity Approach',
      description: 'Focus on meaningful connections rather than follower counts',
      icon: Heart,
      tips: ['Engage with posts genuinely', 'Comment thoughtfully', 'Share valuable content', 'Build real relationships']
    },
    {
      title: 'Strategic Unfollowing',
      description: 'Carefully unfollow inactive or non-reciprocal accounts',
      icon: Users,
      tips: ['Identify inactive accounts', 'Unfollow gradually', 'Keep industry connections', 'Monitor engagement rates']
    },
    {
      title: 'Content Optimization',
      description: 'Create content that encourages reciprocal following',
      icon: BarChart3,
      tips: ['Post consistently', 'Use relevant hashtags', 'Engage with your niche', 'Collaborate with others']
    }
  ];

  const reasons = [
    {
      reason: 'Different Interests',
      description: 'Your content doesn\'t align with their preferences',
      solution: 'Focus on your target audience and niche content'
    },
    {
      reason: 'Account Type',
      description: 'Business accounts often follow selectively',
      solution: 'Provide value through your content and engagement'
    },
    {
      reason: 'Following Limits',
      description: 'They may have reached their following limit',
      solution: 'Be patient and continue providing quality content'
    },
    {
      reason: 'Privacy Preferences',
      description: 'Some users prefer smaller, curated feeds',
      solution: 'Respect their preferences and focus elsewhere'
    }
  ];

  const bestPractices = [
    {
      title: 'Regular Account Audits',
      description: 'Review your following list monthly to identify non-reciprocal follows',
      frequency: 'Monthly'
    },
    {
      title: 'Engagement Analysis',
      description: 'Track which accounts interact with your content regularly',
      frequency: 'Weekly'
    },
    {
      title: 'Strategic Following',
      description: 'Only follow accounts that align with your interests or goals',
      frequency: 'Daily'
    },
    {
      title: 'Content Quality Focus',
      description: 'Prioritize creating content that attracts genuine followers',
      frequency: 'Daily'
    }
  ];

  const faqs = [
    {
      question: 'How can I see who doesn\'t follow me back on Instagram?',
      answer: 'Use our Instagram unfollowers tracker tool by uploading your Instagram data export. This will show you exactly who you follow that doesn\'t follow you back, along with detailed analytics.'
    },
    {
      question: 'Should I unfollow people who don\'t follow me back?',
      answer: 'It depends on your goals. If you want a balanced following ratio, you might unfollow some non-reciprocal accounts. However, consider keeping accounts that provide value through their content or represent important connections.'
    },
    {
      question: 'Why do some people not follow back on Instagram?',
      answer: 'People may not follow back due to different interests, content preferences, privacy settings, or simply because they maintain a curated feed. It\'s not necessarily personal.'
    },
    {
      question: 'Is it rude not to follow someone back on Instagram?',
      answer: 'No, it\'s not rude. Instagram etiquette doesn\'t require reciprocal following. People curate their feeds based on personal preferences and interests.'
    },
    {
      question: 'How do I improve my follow-back rate on Instagram?',
      answer: 'Create engaging content, use relevant hashtags, engage authentically with your community, post consistently, and ensure your profile clearly communicates your value proposition.'
    },
    {
      question: 'What\'s a good following-to-follower ratio on Instagram?',
      answer: 'There\'s no perfect ratio, but generally, having more followers than following suggests authority. However, engagement quality matters more than ratios for most users.'
    }
  ];

  const relatedTopics = [
    { title: 'How to See Who Unfollowed You', url: '/how-to-see-who-unfollowed-you', description: 'Track Instagram unfollowers safely' },
    { title: 'Instagram Analytics', url: '/instagram-analytics', description: 'Complete Instagram insights and metrics' },
    { title: 'Followers Insights', url: '/followers-insights', description: 'Deep analysis of your follower base' }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Who Doesn't Follow Me Back on Instagram? Find Non-Reciprocal Followers (2024)</title>
      <meta name="description" content="Discover who doesn't follow you back on Instagram with our free tool. Learn strategies for managing non-reciprocal followers and improving engagement." />
      <meta name="keywords" content="who doesn't follow me back instagram, non reciprocal followers, instagram following ratio, unfollow tool instagram" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Who Doesn't Follow Me Back on Instagram - Free Checker" />
      <meta property="og:description" content="Find out who you follow that doesn't follow you back on Instagram. Free tool with detailed analytics and follower insights." />
      <meta property="og:type" content="article" />
      
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Who Doesn't Follow Me Back on Instagram: Complete Guide",
          "description": "Learn how to identify and manage non-reciprocal followers on Instagram with strategic approaches and free tools.",
          "author": {
            "@type": "Organization",
            "name": "Instagram Unfollowers Tracker"
          },
          "datePublished": new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": typeof window !== 'undefined' ? window.location.href : ''
          }
        })}
      </script>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-float"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-white opacity-10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 px-3 py-1 text-sm">
              Instagram Analytics 2024
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Who Doesn't Follow Me Back
              <span className="block text-yellow-300">on Instagram?</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-100 mb-6 max-w-3xl mx-auto leading-relaxed">
              Discover who you follow that doesn't follow you back with our free Instagram analytics tool. 
              Get strategic insights for managing your follower relationships effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                size="lg"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                onClick={() => {
                  const element = document.getElementById('upload');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Search className="mr-2" size={18} />
                Check Non-Reciprocal Followers
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all"
              >
                <Download className="mr-2" size={16} />
                Learn Strategies Below
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">500K+</div>
                <div className="text-sm text-gray-600">Users Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">Instant</div>
                <div className="text-sm text-gray-600">Results</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Private & Secure</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">Free</div>
                <div className="text-sm text-gray-600">No Hidden Fees</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Understanding Non-Reciprocal Instagram Followers
              </h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                <p className="text-base">
                  Non-reciprocal followers—people you follow who don't follow you back—are a common aspect of Instagram. 
                  Understanding why this happens and how to manage these relationships strategically can help you build 
                  a more engaged and meaningful Instagram presence.
                </p>
                <p className="text-base">
                  This comprehensive guide covers everything you need to know about identifying non-reciprocal followers, 
                  understanding the reasons behind it, and developing strategies to optimize your Instagram following approach.
                </p>
              </div>
            </div>

            {/* Why People Don't Follow Back */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Some People Don't Follow Back</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reasons.map((item, index) => (
                  <Card key={index} className="shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.reason}</h3>
                      <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-xs text-blue-800">💡 <strong>Solution:</strong> {item.solution}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Strategic Approaches */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Strategic Approaches to Non-Reciprocal Followers</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {strategies.map((strategy, index) => (
                  <Card key={index} className="shadow-sm hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                        <strategy.icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{strategy.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{strategy.description}</p>
                      <ul className="space-y-2">
                        {strategy.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="text-green-500 mr-2" size={12} />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Best Practices */}
            <div className="mb-16 bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Practices for Managing Your Following List</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bestPractices.map((practice, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-semibold text-gray-900">{practice.title}</h3>
                      <Badge variant="outline" className="text-xs">{practice.frequency}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{practice.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How-To Guide */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Find Who Doesn't Follow You Back</h2>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Using Our Free Tool</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Download Instagram Data</h4>
                          <p className="text-sm text-gray-600">Request your data export from Instagram Settings</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Upload Securely</h4>
                          <p className="text-sm text-gray-600">Upload your ZIP file to our secure analyzer</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Get Detailed Results</h4>
                          <p className="text-sm text-gray-600">See complete list of non-reciprocal followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button 
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        onClick={() => {
                          const element = document.getElementById('upload');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        <Search className="mr-2" size={16} />
                        Start Analysis Now
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Discover</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-sm text-gray-700">Complete list of non-reciprocal follows</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-sm text-gray-700">Account types and engagement levels</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-sm text-gray-700">Following patterns and trends</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-sm text-gray-700">Mutual follower connections</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-sm text-gray-700">Recommendations for optimization</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-start space-x-2">
                        <AlertTriangle className="text-yellow-600 mt-0.5" size={16} />
                        <div>
                          <h4 className="font-medium text-yellow-800 mb-1">Privacy Notice</h4>
                          <p className="text-xs text-yellow-700">
                            Your data is processed locally and never stored on our servers. Complete privacy guaranteed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16">
              <h2 className="text-2xl font-bold mb-4">Ready to Analyze Your Following?</h2>
              <p className="text-base mb-6 opacity-90">
                Discover who doesn't follow you back and optimize your Instagram strategy with our free tool
              </p>
              <Button 
                size="lg"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                onClick={() => {
                  const element = document.getElementById('upload');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Search className="mr-2" size={18} />
                Check Non-Reciprocal Followers - Free
              </Button>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="text-base font-semibold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Related Topics */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Instagram Analytics Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedTopics.map((topic, index) => (
                  <Link key={index} href={topic.url}>
                    <Card className="shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                      <CardContent className="p-6">
                        <h3 className="text-base font-semibold text-gray-900 mb-2">{topic.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{topic.description}</p>
                        <div className="flex items-center text-purple-600 text-sm font-medium">
                          Explore Tool <ArrowRight size={14} className="ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}