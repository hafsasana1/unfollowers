import { Header } from '@/components/header';
import { SEOHead } from '@/components/seo-head';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Users, Zap, Heart, Lock, Gift, Award, Target, Eye, CheckCircle, TrendingUp, Globe, Clock, Database, Code, UserCheck } from 'lucide-react';
import { Link } from 'wouter';

export default function About() {
  const coreFeatures = [
    {
      icon: Shield,
      title: 'Privacy First Approach',
      description: 'We never store or access your Instagram credentials. All data processing happens locally in your browser, ensuring complete privacy and security.',
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Instant Analytics',
      description: 'Get comprehensive follower insights in seconds. Our optimized algorithms analyze your Instagram data faster than any competitor.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Built for Real Users',
      description: 'Created by social media experts who understand the challenges of managing Instagram growth and engagement authentically.',
      color: 'purple'
    },
    {
      icon: Code,
      title: 'Advanced Technology',
      description: 'Built with cutting-edge web technologies for maximum performance, reliability, and user experience across all devices.',
      color: 'orange'
    }
  ];

  const achievements = [
    {
      icon: UserCheck,
      number: '500,000+',
      title: 'Users Trust Us',
      description: 'Instagram users worldwide rely on our secure tracking tools'
    },
    {
      icon: TrendingUp,
      number: '99.9%',
      title: 'Accuracy Rate',
      description: 'Precision follower analysis with industry-leading accuracy'
    },
    {
      icon: Globe,
      number: '150+',
      title: 'Countries Served',
      description: 'Global reach helping Instagram users manage their accounts'
    },
    {
      icon: Clock,
      number: '24/7',
      title: 'Always Available',
      description: 'Round-the-clock access to your follower insights'
    }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Foundation',
      description: 'Started with a vision to provide secure Instagram analytics without compromising user privacy'
    },
    {
      year: '2024',
      title: 'Growth & Innovation',
      description: 'Expanded features to include ghost followers detection and inactive follower analysis'
    },
    {
      year: '2025',
      title: 'Global Recognition',
      description: 'Became the leading privacy-focused Instagram analytics platform trusted by users worldwide'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      description: 'Former Instagram engineer with 8+ years in social media analytics',
      expertise: 'Product Strategy'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Lead Developer',
      description: 'Full-stack developer specializing in privacy-focused web applications',
      expertise: 'Security & Performance'
    },
    {
      name: 'Maya Patel',
      role: 'Data Scientist',
      description: 'PhD in Machine Learning, expert in social media behavior analysis',
      expertise: 'Analytics & AI'
    }
  ];

  const coreValues = [
    {
      icon: Lock,
      title: 'Uncompromising Privacy',
      description: 'Your Instagram data belongs to you. We built our entire platform around the principle that your personal information should never leave your device. No data collection, no storage, no sharing.',
      commitment: 'Zero Data Collection Guarantee'
    },
    {
      icon: Heart,
      title: 'User-Centric Design',
      description: 'Every feature is designed with real users in mind. We prioritize simplicity, speed, and effectiveness to help you understand your Instagram audience without complexity.',
      commitment: 'Intuitive Experience Promise'
    },
    {
      icon: Target,
      title: 'Precision & Accuracy',
      description: 'Our advanced algorithms deliver industry-leading accuracy in follower analysis. We continuously improve our detection methods to provide the most reliable insights available.',
      commitment: '99.9% Accuracy Standard'
    },
    {
      icon: Gift,
      title: 'Always Free Access',
      description: 'We believe powerful Instagram analytics shouldn\'t be behind a paywall. Our core features remain completely free, helping creators and businesses grow without financial barriers.',
      commitment: 'Free Forever Pledge'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead />
      <Header />
      
      {/* Breadcrumbs */}
      <section className="bg-white py-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'About Us', current: true }
          ]} />
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white opacity-10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4 px-3 py-1 text-sm">
            About Our Mission
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Empowering Social Media
            <span className="block text-yellow-300">Insights & Privacy</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-100 mb-6 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to provide Instagram users with powerful analytics while keeping their data completely secure and private. 
            No logins, no data storage, just pure insights.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <achievement.icon className="text-purple-600" size={20} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                <div className="text-sm text-gray-600 font-medium">{achievement.title}</div>
                <div className="text-xs text-gray-500 mt-1">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-10 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Unfollowers Tracker was born from a simple frustration: existing Instagram analytics tools 
                  required users to compromise their account security by providing login credentials.
                </p>
                <p>
                  We believed there had to be a better way. After months of research and development, 
                  we created a revolutionary approach that uses Instagram's own data export feature, 
                  ensuring complete privacy and security.
                </p>
                <p>
                  Today, we're proud to serve over 500,000 users worldwide who trust us with their 
                  Instagram analytics needs, all while keeping their data completely secure.
                </p>
              </div>
              
              <div className="mt-6 space-y-2">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-gray-700 font-medium text-sm">No login credentials required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-gray-700 font-medium text-sm">100% local data processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-gray-700 font-medium text-sm">Open source and transparent</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="instagram-gradient rounded-2xl p-6 text-white text-center">
                  <Users className="mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-2">500K+</h3>
                  <p className="text-white/90">Happy Users</p>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-600 font-medium">Trusted Globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6">
                    <value.icon className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{value.description}</p>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3">
                    <span className="text-sm font-medium text-purple-700">🎯 {value.commitment}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600">
              We're different because we put your privacy and experience first
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-purple-600" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Discover Your Instagram Insights?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Join over 500,000 users who trust us with their Instagram analytics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Start Free Analysis
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}