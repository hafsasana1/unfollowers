import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, Users, Smartphone, Gift, BarChart } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: '100% Secure',
      description: 'No login required. Your data is processed locally and never stored on our servers. Your Instagram account remains completely secure.',
      highlight: 'Zero risk to your account',
      color: 'green',
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get comprehensive insights about your followers immediately. No waiting, no processing delays - just instant, actionable data.',
      highlight: 'Results in under 10 seconds',
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Complete Analysis',
      description: 'See who unfollowed you, who doesn\'t follow back, mutual followers, and detailed growth statistics all in one place.',
      highlight: 'Full follower breakdown',
      color: 'purple',
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Works perfectly on all devices. Upload and analyze your Instagram data from your phone, tablet, or computer.',
      highlight: 'Responsive design',
      color: 'orange',
    },
    {
      icon: Gift,
      title: 'Completely Free',
      description: 'No hidden costs, no premium features, no subscriptions. Our tool is 100% free to use with all features unlocked.',
      highlight: 'Forever free',
      color: 'pink',
    },
    {
      icon: BarChart,
      title: 'Detailed Insights',
      description: 'Get actionable insights to optimize your Instagram strategy. Understand your audience and improve your social media presence.',
      highlight: 'Advanced analytics',
      color: 'indigo',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: 'bg-green-100 text-green-600',
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      pink: 'bg-pink-100 text-pink-600',
      indigo: 'bg-indigo-100 text-indigo-600',
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600';
  };

  const getHighlightColor = (color: string) => {
    const colorMap = {
      green: 'text-green-600',
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600',
      pink: 'text-pink-600',
      indigo: 'text-indigo-600',
    };
    return colorMap[color as keyof typeof colorMap] || 'text-gray-600';
  };

  return (
    <section className="py-16 bg-gray-50" id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Instagram Analytics Features</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Comprehensive insights for tracking your followers and unfollowers
          </p>
          
          {/* Key Benefits */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 max-w-3xl mx-auto">
            <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 p-2 rounded-lg">
              <div className="font-medium text-purple-700 text-xs">✓ Track Unfollowers</div>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 p-2 rounded-lg">
              <div className="font-medium text-blue-700 text-xs">✓ New Followers</div>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-blue-50 p-2 rounded-lg">
              <div className="font-medium text-green-700 text-xs">✓ Mutual Followers</div>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-50 to-pink-50 p-2 rounded-lg">
              <div className="font-medium text-orange-700 text-xs">✓ Instant Insights</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
            >
              <CardContent className="p-5">
                <div className={`w-10 h-10 ${getColorClasses(feature.color)} rounded-lg flex items-center justify-center mb-3`}>
                  <feature.icon size={18} />
                </div>
                
                <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
                
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{feature.description}</p>
                
                <div className={`flex items-center ${getHighlightColor(feature.color)} text-xs font-medium`}>
                  <CheckCircle className="mr-1" size={12} />
                  {feature.highlight}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
