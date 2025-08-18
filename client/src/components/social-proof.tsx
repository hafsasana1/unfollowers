import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, Shield, TrendingUp } from 'lucide-react';

export function SocialProof() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Trusted by Instagram Users Worldwide
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands who trust our secure Instagram analytics tool
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center">
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <Users className="mx-auto mb-3 text-purple-600" size={24} />
              <div className="text-2xl font-bold text-gray-900 mb-1">50K+</div>
              <div className="text-xs text-gray-600">Active Users</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <TrendingUp className="mx-auto mb-3 text-blue-600" size={24} />
              <div className="text-2xl font-bold text-gray-900 mb-1">500K+</div>
              <div className="text-xs text-gray-600">Analyses Completed</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <Shield className="mx-auto mb-3 text-green-600" size={24} />
              <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-xs text-gray-600">Secure & Private</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <Star className="mx-auto mb-3 text-yellow-600" size={24} />
              <div className="text-2xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="text-xs text-gray-600">User Rating</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={14} />
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-4">
                "Finally found a safe way to track my Instagram unfollowers! No passwords needed and works perfectly."
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                  SH
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900 text-sm">Sarah H.</div>
                  <div className="text-xs text-gray-500">Content Creator</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={14} />
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-4">
                "Super easy to use and completely free! Got my results in seconds and learned who unfollowed me."
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                  MR
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900 text-sm">Mike R.</div>
                  <div className="text-xs text-gray-500">Small Business Owner</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={14} />
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-4">
                "Love that I don't have to give my password. Privacy-focused and shows detailed analytics!"
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                  JC
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900 text-sm">Jessica C.</div>
                  <div className="text-xs text-gray-500">Influencer</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}