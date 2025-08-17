import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Users, Menu, X } from 'lucide-react';

export function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-purple-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="w-10 h-10 instagram-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Users className="text-white" size={18} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Unfollowers Tracker
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <button 
              onClick={() => scrollToSection('upload')}
              className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all font-medium"
              data-testid="nav-unfollowers-tracker"
            >
              Unfollowers Tracker
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all font-medium"
              data-testid="nav-followers-insights"
            >
              Followers Insights
            </button>
            <button 
              onClick={() => scrollToSection('live-demo')}
              className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all font-medium"
              data-testid="nav-instagram-analytics"
            >
              Instagram Analytics
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all font-medium"
              data-testid="nav-how-it-works"
            >
              How It Works
            </button>
            <Button 
              onClick={() => scrollToSection('upload')}
              className="ml-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 rounded-xl px-6 py-2"
              data-testid="button-cta-header"
            >
              Track Unfollowers Free
            </Button>
          </div>
          
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-purple-100 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('upload')}
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all text-left py-3 px-4 font-medium"
                data-testid="mobile-nav-unfollowers-tracker"
              >
                Unfollowers Tracker
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all text-left py-3 px-4 font-medium"
                data-testid="mobile-nav-followers-insights"
              >
                Followers Insights
              </button>
              <button 
                onClick={() => scrollToSection('live-demo')}
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all text-left py-3 px-4 font-medium"
                data-testid="mobile-nav-instagram-analytics"
              >
                Instagram Analytics
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all text-left py-3 px-4 font-medium"
                data-testid="mobile-nav-how-it-works"
              >
                How It Works
              </button>
              <Button 
                onClick={() => scrollToSection('upload')}
                className="mt-4 mx-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all font-semibold shadow-lg rounded-xl"
                data-testid="mobile-button-cta"
              >
                Track Unfollowers Free
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
