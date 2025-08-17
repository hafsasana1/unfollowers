import { Button } from '@/components/ui/button';
import { Upload, Play, Shield, Lock, Zap, Gift } from 'lucide-react';

export function HeroSection() {
  const scrollToUpload = () => {
    const element = document.getElementById('upload');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 overflow-hidden">
      {/* Floating elements for visual appeal */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-white opacity-10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Free Instagram Unfollowers Tracker –{' '}
            <span className="text-yellow-300">See Who Unfollowed You Instantly</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-3xl mx-auto font-medium">
            Track unfollowers, new followers, and Instagram insights – no password required, 100% secure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={scrollToUpload}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              data-testid="button-start-tracking"
            >
              <Upload className="mr-2" size={20} />
              Start Tracking Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('live-demo');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all bg-transparent"
              data-testid="button-discover-insights"
            >
              <Play className="mr-2" size={20} />
              Discover Insights
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="text-green-300" size={16} />
              <span className="text-sm font-medium">100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="text-blue-300" size={16} />
              <span className="text-sm font-medium">No Login Required</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-yellow-300" size={16} />
              <span className="text-sm font-medium">Instant Results</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="text-pink-300" size={16} />
              <span className="text-sm font-medium">Completely Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
