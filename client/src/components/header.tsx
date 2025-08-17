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
            <Link href="/">
              <span className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all font-medium cursor-pointer">
                Home
              </span>
            </Link>
            <button 
              onClick={() => scrollToSection('upload')}
              className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all font-medium"
            >
              Unfollowers Tracker
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all font-medium"
            >
              Followers Insights
            </button>
            <button 
              onClick={() => scrollToSection('live-demo')}
              className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all font-medium"
            >
              Instagram Analytics
            </button>
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all font-medium flex items-center">
                Tools
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">Profile Viewer</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">Engagement Calculator</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">Hashtag Tracker</a>
                </div>
              </div>
            </div>
            <button 
              onClick={() => scrollToSection('blog')}
              className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all font-medium"
            >
              Blog / Guides
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all font-medium"
            >
              FAQ
            </button>
            <Link href="/about">
              <span className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all font-medium cursor-pointer">
                About / Contact
              </span>
            </Link>
            <Button 
              onClick={() => scrollToSection('upload')}
              className="ml-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 rounded-xl px-6"
            >
              Discover Unfollowers
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
              <Link href="/">
                <span className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all py-3 px-4 font-medium cursor-pointer">
                  Home
                </span>
              </Link>
              <button 
                onClick={() => scrollToSection('upload')}
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all text-left py-3 px-4 font-medium"
              >
                Unfollowers Tracker
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all text-left py-3 px-4 font-medium"
              >
                Followers Insights
              </button>
              <button 
                onClick={() => scrollToSection('live-demo')}
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all text-left py-3 px-4 font-medium"
              >
                Instagram Analytics
              </button>
              <div className="px-4 py-3">
                <div className="text-gray-700 font-medium mb-2">Tools</div>
                <div className="pl-4 space-y-2">
                  <div className="text-sm text-gray-600">Profile Viewer</div>
                  <div className="text-sm text-gray-600">Engagement Calculator</div>
                  <div className="text-sm text-gray-600">Hashtag Tracker</div>
                </div>
              </div>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all text-left py-3 px-4 font-medium"
              >
                Blog / Guides
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all text-left py-3 px-4 font-medium"
              >
                FAQ
              </button>
              <Link href="/about">
                <span className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all py-3 px-4 font-medium cursor-pointer">
                  About / Contact
                </span>
              </Link>
              <Button 
                onClick={() => scrollToSection('upload')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all font-semibold w-full mt-4 rounded-xl shadow-lg"
              >
                Discover Unfollowers
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
