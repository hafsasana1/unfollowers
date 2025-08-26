import { Users, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Brand Column */}
          <section className="lg:col-span-1" aria-labelledby="footer-brand">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-7 h-7 instagram-gradient rounded-lg flex items-center justify-center">
                <Users className="text-white" size={14} aria-hidden="true" />
              </div>
              <h2 id="footer-brand" className="text-lg font-semibold">Unfollowers Tracker</h2>
            </div>
            <p className="text-gray-400 mb-4 max-w-md text-sm leading-relaxed">
              The safest and most comprehensive way to analyze your Instagram followers. 
              Discover who unfollowed you without compromising your account security.
            </p>
            <div className="flex space-x-3" role="list" aria-label="Social media links">
              <a 
                href="https://instagram.com/unfollowerstracker" 
                className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label="Follow us on Instagram"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram size={14} aria-hidden="true" />
              </a>
              <a 
                href="https://twitter.com/unfollowerstracker" 
                className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label="Follow us on Twitter"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Twitter size={14} aria-hidden="true" />
              </a>
              <a 
                href="https://youtube.com/@unfollowerstracker" 
                className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label="Subscribe to our YouTube channel"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Youtube size={14} aria-hidden="true" />
              </a>
            </div>
          </section>
          

          
          {/* Resources & Guides */}
          <nav aria-labelledby="footer-resources">
            <h4 id="footer-resources" className="text-base font-semibold mb-4">Resources & Guides</h4>
            <ul className="space-y-2" role="list">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog & Guides
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="/#faq"
                  className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    const faqSection = document.getElementById('faq');
                    if (faqSection) {
                      faqSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#faq';
                    }
                  }}
                  aria-label="Jump to frequently asked questions section"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          {/* Tools */}
          <nav aria-labelledby="footer-tools">
            <h4 id="footer-tools" className="text-base font-semibold mb-4">Our Tools</h4>
            <ul className="space-y-2" role="list">
              <li>
                <a href="/unfollowers-tracker" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Unfollowers Tracker
                </a>
              </li>
              <li>
                <a href="/ghost-followers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Ghost Followers
                </a>
              </li>
              <li>
                <a href="/inactive-followers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Inactive Followers
                </a>
              </li>
            </ul>
          </nav>

          {/* Legal Pages */}
          <nav aria-labelledby="footer-legal">
            <h4 id="footer-legal" className="text-base font-semibold mb-4">Legal & Privacy</h4>
            <ul className="space-y-2" role="list">
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
                <a href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="/help-center" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Help Center
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © <time dateTime="2025">2025</time> Unfollowers Tracker. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Made with ❤️ for Instagram users</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
