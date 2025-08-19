import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Shield, Zap, Users } from 'lucide-react';

export function SEOContent() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Best Free Instagram Unfollowers Tracker 2025
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our Instagram unfollowers tracker is the most trusted and secure way to see who unfollowed you on Instagram. 
              With over 50,000 active users, we provide comprehensive Instagram analytics without requiring your password.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900">Track Instagram Unfollowers Safely</h3>
                  <p className="text-gray-600">See who unfollowed you without giving your Instagram password or login credentials.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900">Free Instagram Analytics Tool</h3>
                  <p className="text-gray-600">Get detailed insights about your followers, mutual connections, and growth patterns.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900">Instant Results in Seconds</h3>
                  <p className="text-gray-600">Upload your Instagram data export and get comprehensive analysis in under 10 seconds.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Check Who Unfollowed You on Instagram</h3>
                <ol className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                    Go to Instagram Settings → Privacy and Security → Download Your Information
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                    Request your data in JSON format and wait for the ZIP file
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                    Upload the ZIP file to our secure tool for instant analysis
                  </li>
                </ol>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Our Instagram Tracker is the Best</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <Shield className="text-green-600 mx-auto mb-2" size={24} />
                    <div className="font-semibold text-sm">100% Secure</div>
                  </div>
                  <div className="text-center">
                    <Zap className="text-yellow-600 mx-auto mb-2" size={24} />
                    <div className="font-semibold text-sm">Instant Results</div>
                  </div>
                  <div className="text-center">
                    <Users className="text-blue-600 mx-auto mb-2" size={24} />
                    <div className="font-semibold text-sm">50K+ Users</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>


      </div>
    </section>
  );
}