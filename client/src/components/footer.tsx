import { Users, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-7 h-7 instagram-gradient rounded-lg flex items-center justify-center">
                <Users className="text-white" size={14} />
              </div>
              <span className="text-lg font-semibold">Unfollowers Tracker</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md text-sm leading-relaxed">
              The safest and most comprehensive way to analyze your Instagram followers. 
              Discover who unfollowed you without compromising your account security.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Instagram size={14} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Twitter size={14} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Youtube size={14} />
              </a>
            </div>
          </div>
          

          
          {/* Resources & Guides */}
          <div>
            <h4 className="text-base font-semibold mb-4">Resources & Guides</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Blog & Guides
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/help-center" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Unfollowers Tracker. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Made with ❤️ for Instagram users</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
