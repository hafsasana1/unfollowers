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
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Tool?</h2>
          <p className="text-lg text-gray-600">The safest and most comprehensive Instagram analytics tool</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${getColorClasses(feature.color)} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                
                <p className="text-gray-600 mb-4">{feature.description}</p>
                
                <div className={`flex items-center ${getHighlightColor(feature.color)} text-sm font-medium`}>
                  <CheckCircle className="mr-2" size={16} />
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
