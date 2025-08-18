import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, BarChart3, Smartphone, CheckCircle } from 'lucide-react';

export function WhyUseOurTool() {
  const benefits = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'No login credentials required. Your Instagram account stays completely safe. We process your data locally without storing any personal information.',
      features: ['No password needed', 'Local data processing', 'Zero account risk'],
      color: 'green',
    },
    {
      icon: Clock,
      title: 'Instant Results',
      description: 'Get comprehensive follower analysis in under 10 seconds. No waiting for hours or days - see your unfollowers immediately.',
      features: ['Results under 10 seconds', 'Real-time processing', 'No delays or queues'],
      color: 'blue',
    },
    {
      icon: BarChart3,
      title: 'Complete Analytics',
      description: 'Detailed insights beyond just unfollowers. Track new followers, mutual connections, engagement patterns, and growth trends.',
      features: ['Unfollower detection', 'New follower tracking', 'Growth analytics'],
      color: 'purple',
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Works perfectly on all devices - phones, tablets, and computers. Upload and analyze your Instagram data from anywhere.',
      features: ['Responsive design', 'Cross-device compatibility', 'Touch-optimized interface'],
      color: 'orange',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: 'bg-green-500',
      blue: 'bg-blue-500', 
      purple: 'bg-purple-500',
      orange: 'bg-orange-500',
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-500';
  };

  const getBorderColor = (color: string) => {
    const colorMap = {
      green: 'border-green-200',
      blue: 'border-blue-200', 
      purple: 'border-purple-200',
      orange: 'border-orange-200',
    };
    return colorMap[color as keyof typeof colorMap] || 'border-gray-200';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="why-use">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why Choose Our Tool?</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The most secure, fastest, and comprehensive way to track your Instagram followers
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 ${getBorderColor(benefit.color)}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${getColorClasses(benefit.color)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{benefit.description}</p>
                    
                    <div className="space-y-1">
                      {benefit.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-700">
                          <CheckCircle className="text-green-500 mr-1" size={12} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-xl font-bold text-purple-600 mb-1">100%</div>
              <div className="text-gray-600 text-xs">Secure & Private</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600 mb-1">&lt;10s</div>
              <div className="text-gray-600 text-xs">Processing Time</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-green-600 mb-1">$0</div>
              <div className="text-gray-600 text-xs">Completely Free</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-orange-600 mb-1">24/7</div>
              <div className="text-gray-600 text-xs">Always Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}