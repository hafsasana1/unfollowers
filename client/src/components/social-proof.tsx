import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, Shield, TrendingUp } from 'lucide-react';

export function SocialProof() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Instagram Users Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of users who trust our secure Instagram analytics tool
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Users className="mx-auto mb-4 text-purple-600" size={32} />
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <TrendingUp className="mx-auto mb-4 text-blue-600" size={32} />
              <div className="text-3xl font-bold text-gray-900 mb-2">500K+</div>
              <div className="text-sm text-gray-600">Analyses Completed</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Shield className="mx-auto mb-4 text-green-600" size={32} />
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600">Secure & Private</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Star className="mx-auto mb-4 text-yellow-600" size={32} />
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">User Rating</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Finally found a safe way to track my Instagram unfollowers! No passwords needed and works perfectly."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  SH
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Sarah H.</div>
                  <div className="text-sm text-gray-500">Content Creator</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Super easy to use and completely free! Got my results in seconds and learned who unfollowed me."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  MR
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Mike R.</div>
                  <div className="text-sm text-gray-500">Small Business Owner</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Love that I don't have to give my password. Privacy-focused and shows detailed analytics!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  JC
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Jessica C.</div>
                  <div className="text-sm text-gray-500">Influencer</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}