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
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer group">
              <div className="w-8 h-8 instagram-gradient rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Users className="text-white" size={16} />
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Unfollowers Tracker
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/unfollowers-tracker">
              <span className="px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all font-medium cursor-pointer"
                data-testid="nav-unfollowers-tracker">
                Unfollowers
              </span>
            </Link>
            <Link href="/ghost-followers">
              <span className="px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all font-medium cursor-pointer"
                data-testid="nav-ghost-followers">
                Ghost Followers
              </span>
            </Link>
            <Link href="/inactive-followers">
              <span className="px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all font-medium cursor-pointer"
                data-testid="nav-inactive-followers">
                Inactive Followers
              </span>
            </Link>
            <Link href="/how-it-works">
              <span className="px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all font-medium cursor-pointer"
                data-testid="nav-how-it-works">
                How It Works
              </span>
            </Link>
            <Link href="/blog">
              <span className="px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all font-medium cursor-pointer"
                data-testid="nav-blog">
                Blog
              </span>
            </Link>

          </div>
          
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-1">
              <Link href="/unfollowers-tracker">
                <span className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all py-2 px-3 font-medium cursor-pointer"
                  data-testid="mobile-nav-unfollowers-tracker">
                  Unfollowers
                </span>
              </Link>
              <Link href="/ghost-followers">
                <span className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all py-2 px-3 font-medium cursor-pointer"
                  data-testid="mobile-nav-ghost-followers">
                  Ghost Followers
                </span>
              </Link>
              <Link href="/inactive-followers">
                <span className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all py-2 px-3 font-medium cursor-pointer"
                  data-testid="mobile-nav-inactive-followers">
                  Inactive Followers
                </span>
              </Link>
              <Link href="/how-it-works">
                <span className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all py-2 px-3 font-medium cursor-pointer"
                  data-testid="mobile-nav-how-it-works">
                  How It Works
                </span>
              </Link>
              <Link href="/blog">
                <span className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all py-2 px-3 font-medium cursor-pointer"
                  data-testid="mobile-nav-blog">
                  Blog
                </span>
              </Link>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
