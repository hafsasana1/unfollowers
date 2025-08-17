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
        
        {/* Video Tutorial Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gray-900 rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center relative cursor-pointer hover:opacity-90 transition-opacity">
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-opacity-30 transition-all">
                  <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </div>
                <h4 className="text-white text-xl font-bold mb-2">Watch Tutorial</h4>
                <p className="text-gray-300">Learn how to use our tool step by step</p>
              </div>
              <div className="absolute bottom-4 left-4 text-white text-sm opacity-75">
                by Axel Cruz
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
