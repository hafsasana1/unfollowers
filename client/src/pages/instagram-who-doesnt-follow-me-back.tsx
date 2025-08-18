import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Users, Download, TrendingDown, BarChart3, CheckCircle, ArrowRight, Clock, Zap, AlertCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function InstagramWhoDoesntFollowMeBack() {
  const toolFeatures = [
    {
      title: 'Instant Detection',
      description: 'Identify non-reciprocal followers in seconds',
      icon: Zap,
      benefit: 'Save hours of manual checking'
    },
    {
      title: 'Complete Privacy',
      description: 'No login credentials required for analysis',
      icon: Shield,
      benefit: 'Your account security guaranteed'
    },
    {
      title: 'Detailed Analytics',
      description: 'Get comprehensive follower relationship insights',
      icon: BarChart3,
      benefit: 'Make informed decisions'
    },
    {
      title: 'Free Forever',
      description: 'No hidden costs or premium limitations',
      icon: Users,
      benefit: 'Access all features at no cost'
    }
  ];

  const commonMistakes = [
    {
      mistake: 'Mass Unfollowing',
      description: 'Unfollowing hundreds of accounts at once',
      consequence: 'Can trigger Instagram spam detection',
      solution: 'Unfollow gradually, 10-20 accounts per day maximum'
    },
    {
      mistake: 'Following for Followers',
      description: 'Following accounts just hoping for follow-backs',
      consequence: 'Leads to unengaged audience and poor content performance',
      solution: 'Focus on accounts that genuinely interest you'
    },
    {
      mistake: 'Obsessing Over Ratios',
      description: 'Constantly monitoring following-to-follower ratios',
      consequence: 'Reduces focus on content quality and community building',
      solution: 'Prioritize engagement quality over numerical ratios'
    },
    {
      mistake: 'Using Risky Apps',
      description: 'Using third-party apps that require Instagram passwords',
      consequence: 'Account security risks and potential policy violations',
      solution: 'Use secure methods like our data export analysis tool'
    }
  ];

  const actionStrategies = [
    {
      situation: 'You have many non-reciprocal celebrity/brand follows',
      strategy: 'Keep them if their content provides value',
      reason: 'These accounts offer inspiration and industry insights'
    },
    {
      situation: 'Personal accounts that don\'t follow back',
      strategy: 'Evaluate based on relationship and content quality',
      reason: 'Some connections are worth maintaining regardless of reciprocity'
    },
    {
      situation: 'Inactive accounts you follow',
      strategy: 'Consider unfollowing inactive accounts',
      reason: 'Cleans up your feed and improves engagement rates'
    },
    {
      situation: 'Accounts outside your niche',
      strategy: 'Unfollow if they don\'t align with your interests',
      reason: 'Helps curate a more relevant and engaging feed'
    }
  ];

  const faqs = [
    {
      question: 'How do I check who doesn\'t follow me back on Instagram?',
      answer: 'Use our free Instagram analyzer tool by uploading your Instagram data export. It will instantly show you all accounts you follow that don\'t follow you back, along with detailed analytics about your follower relationships.'
    },
    {
      question: 'Is it safe to check who doesn\'t follow me back using third-party tools?',
      answer: 'Our tool is completely safe because it uses Instagram\'s official data export feature and doesn\'t require your login credentials. Avoid tools that ask for your Instagram password as they pose security risks.'
    },
    {
      question: 'Should I unfollow everyone who doesn\'t follow me back?',
      answer: 'Not necessarily. Consider the value each account brings to your feed. Keep accounts that provide valuable content, inspiration, or represent important connections, even if they don\'t follow you back.'
    },
    {
      question: 'How often should I check for non-reciprocal followers?',
      answer: 'Monthly reviews are sufficient for most users. Checking too frequently can lead to obsessive behavior that detracts from content creation and genuine community building.'
    },
    {
      question: 'Will unfollowing people hurt my Instagram engagement?',
      answer: 'Unfollowing irrelevant or inactive accounts can actually improve your engagement by creating a more curated feed that encourages authentic interactions with content you truly enjoy.'
    },
    {
      question: 'What\'s considered a good following-to-follower ratio?',
      answer: 'There\'s no universal "good" ratio. Focus on engagement quality rather than numbers. Many successful accounts follow more people than follow them, while others maintain equal ratios.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Request Data Export',
      description: 'Go to Instagram Settings > Privacy and Security > Download Your Information',
      time: '2 minutes',
      icon: Download
    },
    {
      number: '02',
      title: 'Upload ZIP File',
      description: 'Once received, upload your Instagram data file to our secure analyzer',
      time: '30 seconds',
      icon: TrendingDown
    },
    {
      number: '03',
      title: 'Get Results',
      description: 'View detailed analysis of who doesn\'t follow you back with insights',
      time: '10 seconds',
      icon: BarChart3
    }
  ];

  const relatedTopics = [
    { title: 'How to See Who Unfollowed You', url: '/how-to-see-who-unfollowed-you', description: 'Track recent unfollowers safely' },
    { title: 'Who Doesn\'t Follow Back', url: '/who-doesnt-follow-back', description: 'Strategic guide to non-reciprocal followers' },
    { title: 'Instagram Analytics', url: '/instagram-analytics', description: 'Complete Instagram insights dashboard' }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Instagram: Who Doesn't Follow Me Back? Free Checker Tool (2024)</title>
      <meta name="description" content="Find out who doesn't follow you back on Instagram with our free, secure tool. No password required. Get detailed analytics and strategic insights." />
      <meta name="keywords" content="instagram who doesn't follow me back, non reciprocal followers instagram, who unfollowed me, instagram followers checker" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Instagram: Who Doesn't Follow Me Back - Free Tool" />
      <meta property="og:description" content="Discover non-reciprocal followers on Instagram safely. Free tool with detailed analytics and no password required." />
      <meta property="og:type" content="article" />
      
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Instagram Non-Reciprocal Followers Checker",
          "description": "Free tool to find who doesn't follow you back on Instagram using secure data export analysis",
          "url": typeof window !== 'undefined' ? window.location.href : '',
          "applicationCategory": "Social Media Analytics",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Secure data analysis",
            "No login required", 
            "Instant results",
            "Complete privacy protection"
          ]
        })}
      </script>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Breadcrumbs */}
        <section className="bg-white py-4 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: 'Instagram: Who Doesn\'t Follow Me Back', current: true }
            ]} />
          </div>
        </section>
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-float"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-white opacity-10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 px-3 py-1 text-sm">
              Free Instagram Tool 2024
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Instagram: Who Doesn't
              <span className="block text-yellow-300">Follow Me Back?</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-100 mb-6 max-w-3xl mx-auto leading-relaxed">
              Discover which Instagram accounts you follow that don't follow you back. 
              Get instant, secure analysis with our free tool - no password required.
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
                <TrendingDown className="mr-2" size={18} />
                Check Non-Followers Now
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all"
              >
                <Shield className="mr-2" size={16} />
                100% Secure Method
              </Button>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Why Choose Our Instagram Follower Checker?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                The safest and most comprehensive way to analyze your Instagram following relationships
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {toolFeatures.map((feature, index) => (
                <Card key={index} className="text-center shadow-sm hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                    <div className="text-xs font-medium text-purple-600">{feature.benefit}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                How to Check Who Doesn't Follow You Back
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Simple 3-step process using Instagram's official data export feature
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="text-white" size={24} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-900">{step.number}</span>
                    </div>
                  </div>
                  <Card className="shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                      <div className="flex items-center justify-center text-purple-600 text-xs font-medium">
                        <Clock size={12} className="mr-1" />
                        {step.time}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Avoid These Common Mistakes
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Learn from others' mistakes when managing non-reciprocal followers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {commonMistakes.map((item, index) => (
                <Card key={index} className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <AlertCircle className="text-red-500 mt-1" size={20} />
                      <h3 className="text-lg font-semibold text-gray-900">{item.mistake}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
                      <p className="text-xs text-red-800">⚠️ <strong>Risk:</strong> {item.consequence}</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-xs text-green-800">✅ <strong>Better Approach:</strong> {item.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Action Strategies */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                What to Do When Someone Doesn't Follow Back
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Strategic approaches for different types of non-reciprocal followers
              </p>
            </div>
            
            <div className="space-y-6">
              {actionStrategies.map((strategy, index) => (
                <Card key={index} className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">Situation:</h3>
                        <p className="text-sm text-gray-700">{strategy.situation}</p>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">Recommended Action:</h3>
                        <p className="text-sm text-purple-600 font-medium">{strategy.strategy}</p>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">Why:</h3>
                        <p className="text-sm text-gray-600">{strategy.reason}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Ready to Analyze Your Instagram Following?
              </h2>
              <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto">
                Get instant insights into who doesn't follow you back with our secure, 
                free tool that protects your account privacy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Secure</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">Free</div>
                  <div className="text-sm text-gray-600">No Cost</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">Instant</div>
                  <div className="text-sm text-gray-600">Results</div>
                </div>
              </div>
              <Button 
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold text-white"
                onClick={() => {
                  const element = document.getElementById('upload');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <TrendingDown className="mr-2" size={18} />
                Check Who Doesn't Follow Back - Free
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about checking non-reciprocal Instagram followers
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
        </section>

        {/* Related Topics */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Explore More Instagram Tools
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive Instagram analytics and follower management tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTopics.map((topic, index) => (
                <Link key={index} href={topic.url}>
                  <Card className="shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
                    <CardContent className="p-6">
                      <h3 className="text-base font-semibold text-gray-900 mb-2">{topic.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{topic.description}</p>
                      <div className="flex items-center text-purple-600 text-sm font-medium">
                        Learn More <ArrowRight size={14} className="ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}