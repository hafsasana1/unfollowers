import { Card, CardContent } from '@/components/ui/card';
import { Download, FileArchive, BarChart3 } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Upload Your Data',
      description: 'Upload your Instagram data export (ZIP file) to our secure analyzer. No login required - we only process your data, never store it.',
      icon: Download,
      color: 'from-purple-400 to-pink-400',
      time: '📱 Drag & drop your ZIP file',
    },
    {
      number: 2,
      title: 'Process Securely',
      description: 'Our algorithm analyzes your follower data instantly and securely. All processing happens locally - your data never leaves your device.',
      icon: FileArchive,
      color: 'from-blue-400 to-purple-400',
      time: '🔒 100% secure processing',
    },
    {
      number: 3,
      title: 'Get Detailed Results',
      description: 'See who unfollowed you, new followers, mutual connections, and comprehensive analytics. Download your insights or view them online.',
      icon: BarChart3,
      color: 'from-green-400 to-blue-400',
      time: '⚡ Results in under 10 seconds',
    },
  ];

  return (
    <section className="py-10 bg-white" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Simple 3-step process that ensures your privacy while giving you complete follower insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="text-center group">
              <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform`}>
                <step.icon className="text-white" size={18} />
              </div>
              
              <Card className="group-hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{step.description}</p>
                  <div className="text-xs font-medium text-purple-600">{step.time}</div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
