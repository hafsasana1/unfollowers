import { Card, CardContent } from '@/components/ui/card';
import { Download, FileArchive, BarChart3 } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Request Your Data',
      description: 'Go to Instagram Settings → Privacy and Security → Download Your Information. Request your data in JSON format.',
      icon: Download,
      color: 'from-purple-400 to-pink-400',
      time: '📱 Takes 5 minutes',
    },
    {
      number: 2,
      title: 'Download the ZIP',
      description: 'Instagram will prepare your data and send you a download link via email. Download the ZIP file to your device.',
      icon: FileArchive,
      color: 'from-blue-400 to-purple-400',
      time: '📧 Usually within 48 hours',
    },
    {
      number: 3,
      title: 'Get Instant Results',
      description: 'Upload your ZIP file to our secure analyzer. Get detailed insights about your followers, unfollowers, and account growth.',
      icon: BarChart3,
      color: 'from-green-400 to-blue-400',
      time: '⚡ Results in seconds',
    },
  ];

  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple 3-step process ensures your privacy while giving you the insights you need
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center group">
              <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <step.icon className="text-white" size={24} />
              </div>
              
              <Card className="group-hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="text-sm font-medium text-purple-600">{step.time}</div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
}
