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
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200" role="banner">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center py-3">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer group" role="img" aria-label="Unfollowers Tracker - Homepage">
              <div className="w-8 h-8 instagram-gradient rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Users className="text-white" size={16} aria-hidden="true" />
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Unfollowers Tracker
              </span>
            </div>
          </Link>
          
          <ul className="hidden md:flex items-center space-x-1" role="menubar">
            <li role="none">
              <Link href="/unfollowers-tracker">
                <span className="px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all font-medium cursor-pointer"
                  data-testid="nav-unfollowers-tracker" role="menuitem" aria-label="Instagram Unfollowers Tracker Tool">
                  Unfollowers
                </span>
              </Link>
            </li>
            <li role="none">
              <Link href="/ghost-followers">
                <span className="px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all font-medium cursor-pointer"
                  data-testid="nav-ghost-followers" role="menuitem" aria-label="Ghost Followers Detection Tool">
                  Ghost Followers
                </span>
              </Link>
            </li>
            <li role="none">
              <Link href="/inactive-followers">
                <span className="px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all font-medium cursor-pointer"
                  data-testid="nav-inactive-followers" role="menuitem" aria-label="Inactive Followers Analysis Tool">
                  Inactive Followers
                </span>
              </Link>
            </li>
            <li role="none">
              <Link href="/how-it-works">
                <span className="px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all font-medium cursor-pointer"
                  data-testid="nav-how-it-works" role="menuitem" aria-label="How Our Instagram Analytics Works">
                  How It Works
                </span>
              </Link>
            </li>
            <li role="none">
              <Link href="/blog">
                <span className="px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all font-medium cursor-pointer"
                  data-testid="nav-blog" role="menuitem" aria-label="Instagram Growth & Analytics Blog">
                  Blog
                </span>
              </Link>
            </li>
          </ul>
          
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md" id="mobile-navigation">
            <ul className="flex flex-col space-y-1" role="menu" aria-label="Mobile navigation menu">
              <li role="none">
                <Link href="/unfollowers-tracker">
                  <span className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all py-2 px-3 font-medium cursor-pointer"
                    data-testid="mobile-nav-unfollowers-tracker" role="menuitem">
                    Unfollowers
                  </span>
                </Link>
              </li>
              <li role="none">
                <Link href="/ghost-followers">
                  <span className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all py-2 px-3 font-medium cursor-pointer"
                    data-testid="mobile-nav-ghost-followers" role="menuitem">
                    Ghost Followers
                  </span>
                </Link>
              </li>
              <li role="none">
                <Link href="/inactive-followers">
                  <span className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all py-2 px-3 font-medium cursor-pointer"
                    data-testid="mobile-nav-inactive-followers" role="menuitem">
                    Inactive Followers
                  </span>
                </Link>
              </li>
              <li role="none">
                <Link href="/how-it-works">
                  <span className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all py-2 px-3 font-medium cursor-pointer"
                    data-testid="mobile-nav-how-it-works" role="menuitem">
                    How It Works
                  </span>
                </Link>
              </li>
              <li role="none">
                <Link href="/blog">
                  <span className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all py-2 px-3 font-medium cursor-pointer"
                    data-testid="mobile-nav-blog" role="menuitem">
                    Blog
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
