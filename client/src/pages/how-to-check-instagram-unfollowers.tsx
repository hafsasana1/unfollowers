import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Users, Download, Search, BarChart3, CheckCircle, ArrowRight, Clock, Smartphone, AlertTriangle, Eye } from 'lucide-react';
import { Link } from 'wouter';

export default function HowToCheckInstagramUnfollowers() {
  const methods = [
    {
      method: 'Instagram Data Export (Recommended)',
      description: 'Official Instagram feature for downloading your account data',
      security: 'High',
      accuracy: 'High',
      cost: 'Free',
      time: '2-5 minutes setup',
      pros: ['100% secure', 'No password sharing', 'Complete data access', 'Instagram official method'],
      cons: ['Requires waiting for data (up to 48 hours)', 'Manual process'],
      recommended: true
    },
    {
      method: 'Third-Party Mobile Apps',
      description: 'Apps that require Instagram login to track unfollowers',
      security: 'Low',
      accuracy: 'Medium',
      cost: 'Free/Paid',
      time: 'Instant',
      pros: ['Immediate results', 'Real-time notifications', 'User-friendly interface'],
      cons: ['Security risks', 'Terms of service violations', 'Account suspension risk', 'Limited accuracy'],
      recommended: false
    },
    {
      method: 'Manual Comparison',
      description: 'Manually comparing followers list over time',
      security: 'High',
      accuracy: 'Low',
      cost: 'Free',
      time: 'Very time-consuming',
      pros: ['No security risks', 'Complete control', 'No tools needed'],
      cons: ['Extremely time-consuming', 'Prone to errors', 'Impractical for large accounts', 'No historical data'],
      recommended: false
    }
  ];

  const detailedSteps = [
    {
      phase: 'Preparation',
      steps: [
        'Open Instagram app or visit instagram.com',
        'Navigate to your profile settings',
        'Ensure your account is in good standing',
        'Have your email access ready for download link'
      ]
    },
    {
      phase: 'Data Request',
      steps: [
        'Go to Settings → Privacy and Security',
        'Click on "Download Your Information"',
        'Select "All available information" or choose specific data types',
        'Choose JSON format for better analysis compatibility',
        'Enter your email and request the download'
      ]
    },
    {
      phase: 'Analysis Setup',
      steps: [
        'Wait for Instagram\'s email (usually 24-48 hours)',
        'Download the ZIP file from the email link',
        'Visit our secure Instagram analyzer tool',
        'Upload your data file for processing'
      ]
    },
    {
      phase: 'Results Review',
      steps: [
        'Review the complete unfollowers list',
        'Analyze follower patterns and trends',
        'Identify accounts that don\'t follow back',
        'Export results for future reference',
        'Use insights to optimize your Instagram strategy'
      ]
    }
  ];

  const safetyTips = [
    {
      tip: 'Never Share Login Credentials',
      description: 'Avoid any tool that asks for your Instagram username and password',
      importance: 'Critical'
    },
    {
      tip: 'Use Official Instagram Features',
      description: 'Stick to Instagram\'s official data export feature whenever possible',
      importance: 'High'
    },
    {
      tip: 'Check App Permissions',
      description: 'Review what permissions third-party apps are requesting',
      importance: 'High'
    },
    {
      tip: 'Enable Two-Factor Authentication',
      description: 'Add extra security to your Instagram account',
      importance: 'Medium'
    },
    {
      tip: 'Regular Security Audits',
      description: 'Periodically review connected apps and revoke unnecessary access',
      importance: 'Medium'
    }
  ];

  const troubleshooting = [
    {
      problem: 'Instagram data request taking too long',
      solution: 'Instagram typically takes 24-48 hours. If longer, try requesting again or contact Instagram support.',
      prevention: 'Request data during off-peak times and ensure account compliance.'
    },
    {
      problem: 'Data file too large to upload',
      solution: 'Our tool supports large files up to 50MB. For larger files, contact our support team.',
      prevention: 'Request specific data types instead of "all available information" if file size is a concern.'
    },
    {
      problem: 'Analysis results seem inaccurate',
      solution: 'Ensure your data export is recent and complete. Re-request data if it\'s older than 30 days.',
      prevention: 'Regular monthly data exports provide most accurate tracking.'
    },
    {
      problem: 'Can\'t find unfollowers list in results',
      solution: 'Check that your data export includes followers and following information.',
      prevention: 'When requesting data, specifically select "Followers and Following" option.'
    }
  ];

  const faqs = [
    {
      question: 'How often should I check for Instagram unfollowers?',
      answer: 'Monthly checks are sufficient for most users. Checking too frequently can become obsessive and detract from content creation. Focus on creating quality content rather than constantly monitoring unfollowers.'
    },
    {
      question: 'Is it safe to use Instagram unfollower checker tools?',
      answer: 'Tools that use Instagram\'s data export feature (like ours) are completely safe. Avoid tools that require your Instagram login credentials as they pose security risks and may violate Instagram\'s terms of service.'
    },
    {
      question: 'Can Instagram detect when I check for unfollowers?',
      answer: 'When using our data export method, Instagram cannot detect unfollower checking since you\'re using their official data download feature. Third-party apps that access your account directly may be detectable.'
    },
    {
      question: 'Why did someone unfollow me on Instagram?',
      answer: 'People unfollow for various reasons: content changes, personal preferences, account cleanup, inactive usage, or algorithm changes affecting content visibility. It\'s rarely personal.'
    },
    {
      question: 'Should I confront someone who unfollowed me?',
      answer: 'No, confronting someone about unfollowing is generally considered inappropriate and can damage relationships. Unfollowing is a normal part of social media behavior.'
    },
    {
      question: 'Can I see exactly when someone unfollowed me?',
      answer: 'Instagram\'s data export doesn\'t include specific unfollowing timestamps. Our tool can show patterns and approximate timeframes based on your data history.'
    },
    {
      question: 'Will checking unfollowers affect my Instagram algorithm?',
      answer: 'Using secure methods like data export analysis doesn\'t affect your algorithm or account standing. Your content engagement and posting consistency are what influence the algorithm.'
    },
    {
      question: 'How accurate are Instagram unfollower checkers?',
      answer: 'Tools using official Instagram data exports are highly accurate. Third-party apps may have accuracy issues due to API limitations and Instagram\'s privacy restrictions.'
    }
  ];

  const relatedTopics = [
    { title: 'Who Doesn\'t Follow Me Back', url: '/who-doesnt-follow-back', description: 'Find non-reciprocal Instagram followers' },
    { title: 'Instagram Analytics Dashboard', url: '/instagram-analytics', description: 'Complete Instagram metrics and insights' },
    { title: 'Track Unfollowers Free', url: '/track-unfollowers-free', description: 'Free Instagram unfollower tracking tools' }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>How to Check Instagram Unfollowers: Complete Guide (2024) | Free & Safe Methods</title>
      <meta name="description" content="Learn how to check Instagram unfollowers safely with our comprehensive guide. Free methods, security tips, and step-by-step instructions for 2024." />
      <meta name="keywords" content="how to check instagram unfollowers, instagram unfollower checker, see who unfollowed me instagram, instagram analytics" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="How to Check Instagram Unfollowers - Complete 2024 Guide" />
      <meta property="og:description" content="Safe and secure methods to check Instagram unfollowers. Step-by-step guide with free tools and security best practices." />
      <meta property="og:type" content="article" />
      
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Check Instagram Unfollowers Safely",
          "description": "Complete guide to safely checking Instagram unfollowers using official Instagram data export",
          "totalTime": "PT10M",
          "supply": ["Instagram account", "Email access", "Computer or mobile device"],
          "tool": ["Instagram Data Export", "Unfollower Analysis Tool"],
          "step": detailedSteps.map((phase, index) => ({
            "@type": "HowToStep",
            "name": phase.phase,
            "text": phase.steps.join('. ')
          }))
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
              { label: 'How to Check Instagram Unfollowers', current: true }
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
              Complete Guide 2024
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              How to Check Instagram
              <span className="block text-yellow-300">Unfollowers Safely</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-100 mb-6 max-w-3xl mx-auto leading-relaxed">
              Learn the safest and most effective methods to check who unfollowed you on Instagram. 
              Complete guide with security tips, step-by-step instructions, and free tools.
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
                Check Unfollowers Now
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all"
              >
                <Download className="mr-2" size={16} />
                Read Guide Below
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Safe Method</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">Free</div>
                <div className="text-sm text-gray-600">No Hidden Costs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">10s</div>
                <div className="text-sm text-gray-600">Analysis Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">500K+</div>
                <div className="text-sm text-gray-600">Users Trust Us</div>
              </div>
            </div>
          </div>
        </section>

        {/* Methods Comparison */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                3 Ways to Check Instagram Unfollowers
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Compare different methods and choose the safest approach for your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {methods.map((method, index) => (
                <Card key={index} className={`${method.recommended ? 'ring-2 ring-purple-500 shadow-lg' : 'shadow-sm'} relative`}>
                  {method.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-purple-600 text-white">Recommended</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{method.method}</h3>
                    <p className="text-sm text-gray-600 mb-4">{method.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="font-medium text-gray-700">Security:</div>
                        <div className={`${method.security === 'High' ? 'text-green-600' : method.security === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>
                          {method.security}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-700">Accuracy:</div>
                        <div className={`${method.accuracy === 'High' ? 'text-green-600' : method.accuracy === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>
                          {method.accuracy}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-700">Cost:</div>
                        <div className="text-gray-600">{method.cost}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-700">Time:</div>
                        <div className="text-gray-600">{method.time}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Pros:</h4>
                        <ul className="space-y-1">
                          {method.pros.map((pro, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="text-green-500 mr-2" size={12} />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Cons:</h4>
                        <ul className="space-y-1">
                          {method.cons.map((con, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <div className="w-3 h-3 bg-red-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Step-by-Step Guide */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Step-by-Step Guide: Safe Method
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Follow this detailed guide to safely check your Instagram unfollowers using official methods
              </p>
            </div>
            
            <div className="space-y-8">
              {detailedSteps.map((phase, index) => (
                <Card key={index} className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                    </div>
                    <div className="ml-11">
                      <ul className="space-y-2">
                        {phase.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="text-green-500 mr-2 mt-0.5" size={14} />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Security Best Practices
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Essential security tips to protect your Instagram account while checking unfollowers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyTips.map((tip, index) => (
                <Card key={index} className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-3">
                      <Shield className="text-green-600 mt-1" size={20} />
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">{tip.tip}</h3>
                        <Badge 
                          variant={tip.importance === 'Critical' ? 'destructive' : tip.importance === 'High' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {tip.importance}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Troubleshooting Common Issues
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Solutions to common problems when checking Instagram unfollowers
              </p>
            </div>
            
            <div className="space-y-6">
              {troubleshooting.map((item, index) => (
                <Card key={index} className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-2">Problem:</h3>
                        <p className="text-sm text-gray-700">{item.problem}</p>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-2">Solution:</h3>
                        <p className="text-sm text-green-700">{item.solution}</p>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-2">Prevention:</h3>
                        <p className="text-sm text-blue-700">{item.prevention}</p>
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
                Ready to Check Your Instagram Unfollowers?
              </h2>
              <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto">
                Use our secure, free tool to safely analyze your Instagram followers and discover 
                who unfollowed you - no password required.
              </p>
              <div className="flex items-center justify-center space-x-6 mb-6 text-sm">
                <div className="flex items-center text-green-600">
                  <Shield size={16} className="mr-1" />
                  100% Secure
                </div>
                <div className="flex items-center text-blue-600">
                  <Eye size={16} className="mr-1" />
                  Privacy Protected
                </div>
                <div className="flex items-center text-purple-600">
                  <Clock size={16} className="mr-1" />
                  Instant Results
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
                <Search className="mr-2" size={18} />
                Start Checking Unfollowers - Free
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
                Everything you need to know about checking Instagram unfollowers safely
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
                Related Instagram Analytics Tools
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Explore more tools to analyze your Instagram presence and follower relationships
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
                        Explore Tool <ArrowRight size={14} className="ml-1" />
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