import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Users, Menu, X, ChevronDown, UserMinus, UserCheck, BarChart3, HelpCircle, BookOpen, Sparkles } from 'lucide-react';

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
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1" role="menubar">
            <li role="none">
              <Link href="/unfollowers-tracker">
                <span className="group px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-lg transition-all font-medium cursor-pointer flex items-center space-x-1"
                  data-testid="nav-unfollowers-tracker" role="menuitem" aria-label="Instagram Unfollowers Tracker Tool">
                  <UserMinus size={16} className="group-hover:scale-110 transition-transform" />
                  <span>Unfollowers</span>
                </span>
              </Link>
            </li>
            <li role="none">
              <Link href="/ghost-followers">
                <span className="group px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-lg transition-all font-medium cursor-pointer flex items-center space-x-1"
                  data-testid="nav-ghost-followers" role="menuitem" aria-label="Ghost Followers Detection Tool">
                  <Users size={16} className="group-hover:scale-110 transition-transform" />
                  <span>Ghost Followers</span>
                </span>
              </Link>
            </li>
            <li role="none">
              <Link href="/inactive-followers">
                <span className="group px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-lg transition-all font-medium cursor-pointer flex items-center space-x-1"
                  data-testid="nav-inactive-followers" role="menuitem" aria-label="Inactive Followers Analysis Tool">
                  <UserCheck size={16} className="group-hover:scale-110 transition-transform" />
                  <span>Inactive Followers</span>
                </span>
              </Link>
            </li>
            <li role="none">
              <Link href="/how-it-works">
                <span className="group px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-lg transition-all font-medium cursor-pointer flex items-center space-x-1"
                  data-testid="nav-how-it-works" role="menuitem" aria-label="How Our Instagram Analytics Works">
                  <HelpCircle size={16} className="group-hover:scale-110 transition-transform" />
                  <span>How It Works</span>
                </span>
              </Link>
            </li>
            <li role="none">
              <Link href="/blog">
                <span className="group px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-lg transition-all font-medium cursor-pointer flex items-center space-x-1"
                  data-testid="nav-blog" role="menuitem" aria-label="Instagram Growth & Analytics Blog">
                  <BookOpen size={16} className="group-hover:scale-110 transition-transform" />
                  <span>Blog</span>
                </span>
              </Link>
            </li>
          </ul>

          {/* Try Now Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('upload')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              data-testid="button-try-now-desktop"
            >
              <Sparkles size={16} className="mr-2" />
              Try Now Free
            </Button>
          </div>
          
          {/* Mobile Menu Sheet */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="md:hidden text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                aria-label="Open navigation menu"
              >
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2 text-left">
                  <div className="w-8 h-8 instagram-gradient rounded-lg flex items-center justify-center">
                    <Users className="text-white" size={16} />
                  </div>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                    Unfollowers Tracker
                  </span>
                </SheetTitle>
              </SheetHeader>
              
              <div className="mt-8 space-y-4">
                {/* Mobile Navigation Links */}
                <div className="space-y-3">
                  <Link href="/unfollowers-tracker" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all cursor-pointer group">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <UserMinus size={18} className="text-purple-600" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Unfollowers Tracker</span>
                        <p className="text-xs text-gray-500">See who unfollowed you</p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/ghost-followers" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all cursor-pointer group">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Users size={18} className="text-blue-600" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Ghost Followers</span>
                        <p className="text-xs text-gray-500">Find inactive accounts</p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/inactive-followers" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all cursor-pointer group">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <UserCheck size={18} className="text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Inactive Followers</span>
                        <p className="text-xs text-gray-500">Analyze engagement</p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/how-it-works" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all cursor-pointer group">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <HelpCircle size={18} className="text-orange-600" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">How It Works</span>
                        <p className="text-xs text-gray-500">Learn the process</p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all cursor-pointer group">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <BookOpen size={18} className="text-indigo-600" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Blog</span>
                        <p className="text-xs text-gray-500">Growth tips & guides</p>
                      </div>
                    </div>
                  </Link>
                </div>
                
                {/* Mobile CTA Button */}
                <div className="pt-6 border-t border-gray-200">
                  <Button
                    onClick={() => {
                      scrollToSection('upload');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg"
                  >
                    <Sparkles size={18} className="mr-2" />
                    Try Now Free
                  </Button>
                </div>
                
                {/* Mobile Footer Info */}
                <div className="pt-4 text-center text-xs text-gray-500">
                  <p>✓ No login required</p>
                  <p>✓ 100% secure & private</p>
                  <p>✓ Free forever</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
