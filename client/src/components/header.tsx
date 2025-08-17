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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="w-8 h-8 instagram-gradient rounded-lg flex items-center justify-center">
                <Users className="text-white" size={16} />
              </div>
              <span className="text-xl font-bold text-gray-900">Unfollowers Tracker</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('upload')}
              className="bg-purple-600 text-white hover:bg-purple-700 transition-colors font-medium"
            >
              Get Started
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left"
              >
                How it Works
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('upload')}
                className="bg-purple-600 text-white hover:bg-purple-700 transition-colors font-medium w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
