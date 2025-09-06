import { Header } from '@/components/header';
import { SEOHead } from '@/components/seo-head';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BannerAd, InArticleAd } from '@/components/adsense-ad';
import { Shield, Clock, Users, Download, FileArchive, BarChart3, CheckCircle, ArrowRight, Smartphone, Zap } from 'lucide-react';
import { Link } from 'wouter';

export default function HowToSeeWhoUnfollowedYou() {
  const steps = [
    {
      number: 1,
      title: 'Download Instagram Data',
      description: 'Request your Instagram data export from Settings > Privacy and Security > Download Your Information.',
      icon: Download,
      time: '1-2 minutes'
    },
    {
      number: 2,
      title: 'Upload ZIP File',
      description: 'Once Instagram sends your data, upload the ZIP file to our secure unfollowers tracker tool.',
      icon: FileArchive,
      time: '30 seconds'
    },
    {
      number: 3,
      title: 'View Results',
      description: 'Instantly see who unfollowed you, when they unfollowed, and detailed follower analytics.',
      icon: BarChart3,
      time: '10 seconds'
    }
  ];

  const methods = [
    {
      title: 'Free Instagram Unfollowers Tracker',
      description: 'Upload your Instagram data export to see detailed unfollower insights without login credentials.',
      features: ['Complete privacy protection', 'Instant results', 'No app installation required'],
      recommended: true
    },
    {
      title: 'Third-Party Apps',
      description: 'Mobile apps that require Instagram login credentials to track unfollowers.',
      features: ['Real-time notifications', 'Mobile convenience', 'Automatic tracking'],
      recommended: false,
      warning: 'Security risk: Requires Instagram password'
    },
    {
      title: 'Manual Checking',
      description: 'Manually compare your followers list over time to identify unfollowers.',
      features: ['100% free method', 'No tools required', 'Complete control'],
      recommended: false,
      warning: 'Time-consuming and impractical for large accounts'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I see who unfollowed me on Instagram?',
      answer: 'With our Instagram unfollowers tracker, you can see who unfollowed you within 10 seconds of uploading your Instagram data export. The process is instant once you have your data file ready.'
    },
    {
      question: 'Is it safe to check who unfollowed me on Instagram?',
      answer: 'Yes, using our method is completely safe. We process your Instagram data export locally without requiring your login credentials, ensuring your account security remains intact.'
    },
    {
      question: 'Can I see when someone unfollowed me on Instagram?',
      answer: 'While Instagram doesn\'t provide exact unfollowing timestamps in their data export, our tool can analyze your follower patterns and provide insights into recent unfollower activity based on your data history.'
    },
    {
      question: 'Do unfollower tracking apps violate Instagram terms of service?',
      answer: 'Apps that require your Instagram login credentials may violate terms of service. Our method uses Instagram\'s official data export feature, making it compliant with their guidelines.'
    },
    {
      question: 'Why did someone unfollow me on Instagram?',
      answer: 'People unfollow for various reasons: content changes, personal preferences, account cleanup, or shifting interests. Focus on creating authentic content rather than worrying about individual unfollowers.'
    },
    {
      question: 'Can I automatically track Instagram unfollowers?',
      answer: 'While some apps offer automatic tracking, they require constant access to your account. Our secure method requires manual data export but ensures complete privacy and account safety.'
    }
  ];

  const relatedTopics = [
    { title: 'Instagram Analytics Dashboard', url: '/instagram-analytics', description: 'Complete Instagram metrics and insights' },
    { title: 'Track Unfollowers Free', url: '/track-unfollowers-free', description: 'Free tools to monitor unfollowers' },
    { title: 'Followers Insights', url: '/followers-insights', description: 'Deep follower analysis and trends' }
  ];

  return (
    <>
      <SEOHead />
      {/* SEO Meta Tags */}
      <title>How to See Who Unfollowed You on Instagram (2024 Guide) | Free Unfollowers Tracker</title>
      <meta name="description" content="Learn how to see who unfollowed you on Instagram safely and instantly. Free guide with step-by-step instructions for tracking unfollowers without passwords." />
      <meta name="keywords" content="how to see who unfollowed you on instagram, instagram unfollowers tracker, check unfollowers instagram, see instagram unfollowers" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="How to See Who Unfollowed You on Instagram - Free Method" />
      <meta property="og:description" content="Step-by-step guide to safely track Instagram unfollowers without giving your password. See who unfollowed you instantly." />
      <meta property="og:type" content="article" />
      
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to See Who Unfollowed You on Instagram",
          "description": "Complete guide to safely track Instagram unfollowers using data export method",
          "totalTime": "PT5M",
          "supply": ["Instagram account", "Email access"],
          "tool": ["Instagram Unfollowers Tracker"],
          "step": steps.map(step => ({
            "@type": "HowToStep",
            "name": step.title,
            "text": step.description
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
              { label: 'How to See Who Unfollowed You', current: true }
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
              Instagram Guide 2024
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              How to See Who Unfollowed You
              <span className="block text-yellow-300">on Instagram</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-100 mb-6 max-w-3xl mx-auto leading-relaxed">
              Complete step-by-step guide to safely track Instagram unfollowers without compromising your account security. 
              No passwords required, instant results guaranteed.
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
                <Users className="mr-2" size={18} />
                Check Your Unfollowers Now
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all"
              >
                <Download className="mr-2" size={16} />
                View Guide Below
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Safe Method</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">10s</div>
                <div className="text-sm text-gray-600">Get Results</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">500K+</div>
                <div className="text-sm text-gray-600">Users Trust Us</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">Free</div>
                <div className="text-sm text-gray-600">No Cost Ever</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                The Complete Guide to Tracking Instagram Unfollowers
              </h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <p className="text-base mb-4">
                  Discovering who unfollowed you on Instagram doesn't have to be complicated or risky. With Instagram's official data export feature, 
                  you can safely track unfollowers without compromising your account security or violating terms of service.
                </p>
                <p className="text-base mb-4">
                  This comprehensive guide covers the safest, most effective methods to see who unfollowed you on Instagram, 
                  along with insights into why people unfollow and how to maintain healthy follower relationships.
                </p>
              </div>
            </div>

            {/* Methods Comparison */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3 Methods to Check Instagram Unfollowers</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {methods.map((method, index) => (
                  <Card key={index} className={`${method.recommended ? 'ring-2 ring-purple-500 shadow-lg' : 'shadow-sm'} relative`}>
                    {method.recommended && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-purple-600 text-white">Recommended</Badge>
                      </div>
                    )}
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{method.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{method.description}</p>
                      
                      <ul className="space-y-2 mb-4">
                        {method.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="text-green-500 mr-2" size={14} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      {method.warning && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                          <p className="text-xs text-yellow-800">⚠️ {method.warning}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Step-by-Step Guide */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step: How to See Who Unfollowed You</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step) => (
                  <div key={step.number} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="text-white" size={24} />
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Step {step.number}: {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                      <div className="text-xs font-medium text-purple-600">⏱️ {step.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Instructions */}
            <div className="mb-16 bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Instructions</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Step 1: Request Your Instagram Data</h3>
                  <div className="pl-6 border-l-4 border-purple-500 space-y-2 text-sm text-gray-700">
                    <p>1. Open Instagram app or visit instagram.com</p>
                    <p>2. Go to Settings → Privacy and Security</p>
                    <p>3. Click "Download Your Information"</p>
                    <p>4. Select "All available information" or choose specific data</p>
                    <p>5. Choose JSON format and request download</p>
                    <p>6. Instagram will email you when your data is ready (usually within 48 hours)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">📁 Step 2: Upload Your Data File</h3>
                  <div className="pl-6 border-l-4 border-blue-500 space-y-2 text-sm text-gray-700">
                    <p>1. Download the ZIP file from Instagram's email</p>
                    <p>2. Visit our secure unfollowers tracker tool</p>
                    <p>3. Drag and drop your ZIP file or click to browse</p>
                    <p>4. Wait for the secure upload to complete</p>
                    <p>5. Your data is processed locally for maximum privacy</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">📊 Step 3: Analyze Your Results</h3>
                  <div className="pl-6 border-l-4 border-green-500 space-y-2 text-sm text-gray-700">
                    <p>1. View complete unfollowers list with usernames</p>
                    <p>2. See who doesn't follow you back</p>
                    <p>3. Identify mutual followers and new followers</p>
                    <p>4. Export results or save insights for future reference</p>
                    <p>5. Use analytics to optimize your Instagram strategy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why People Unfollow */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Why People Unfollow on Instagram</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Reasons for Unfollowing</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-500 mr-2 mt-0.5" size={14} />
                        <span><strong>Content Changes:</strong> Shift in posting style or topics</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-500 mr-2 mt-0.5" size={14} />
                        <span><strong>Posting Frequency:</strong> Too many or too few posts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-500 mr-2 mt-0.5" size={14} />
                        <span><strong>Account Cleanup:</strong> Users reducing following count</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-500 mr-2 mt-0.5" size={14} />
                        <span><strong>Interest Changes:</strong> Evolving personal preferences</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-500 mr-2 mt-0.5" size={14} />
                        <span><strong>Inactive Accounts:</strong> Dormant or abandoned profiles</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Reduce Unfollowers</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start">
                        <Zap className="text-green-500 mr-2 mt-0.5" size={14} />
                        <span><strong>Consistent Quality:</strong> Maintain posting standards</span>
                      </li>
                      <li className="flex items-start">
                        <Zap className="text-green-500 mr-2 mt-0.5" size={14} />
                        <span><strong>Engage Authentically:</strong> Respond to comments genuinely</span>
                      </li>
                      <li className="flex items-start">
                        <Zap className="text-green-500 mr-2 mt-0.5" size={14} />
                        <span><strong>Know Your Audience:</strong> Create relevant content</span>
                      </li>
                      <li className="flex items-start">
                        <Zap className="text-green-500 mr-2 mt-0.5" size={14} />
                        <span><strong>Optimal Timing:</strong> Post when followers are active</span>
                      </li>
                      <li className="flex items-start">
                        <Zap className="text-green-500 mr-2 mt-0.5" size={14} />
                        <span><strong>Value-Driven Posts:</strong> Educate, entertain, or inspire</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16">
              <h2 className="text-2xl font-bold mb-4">Ready to See Who Unfollowed You?</h2>
              <p className="text-base mb-6 opacity-90">
                Track your Instagram unfollowers safely and instantly with our secure data export method
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
                <Users className="mr-2" size={18} />
                Start Tracking Now - Free
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Instagram Tools & Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedTopics.map((topic, index) => (
                  <Link key={index} href={topic.url}>
                    <Card className="shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                      <CardContent className="p-6">
                        <h3 className="text-base font-semibold text-gray-900 mb-2">{topic.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{topic.description}</p>
                        <div className="flex items-center text-purple-600 text-sm font-medium">
                          Learn More <ArrowRight size={14} className="ml-1" />
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