import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Users, UserMinus, Heart, TrendingUp, TrendingDown, CheckCircle2 } from 'lucide-react';

interface DemoProfile {
  username: string;
  name: string;
  avatar: string;
  verified: boolean;
  followers: number;
  following: number;
  unfollowers: number;
  mutualFollowers: number;
}

const famousProfiles: DemoProfile[] = [
  {
    username: '@cristiano',
    name: 'Cristiano Ronaldo',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    verified: true,
    followers: 615000000,
    following: 500,
    unfollowers: 23,
    mutualFollowers: 477,
  },
  {
    username: '@kyliejenner',
    name: 'Kylie Jenner',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    verified: true,
    followers: 399000000,
    following: 120,
    unfollowers: 8,
    mutualFollowers: 112,
  },
  {
    username: '@selenagomez',
    name: 'Selena Gomez',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    verified: true,
    followers: 430000000,
    following: 289,
    unfollowers: 15,
    mutualFollowers: 274,
  },
  {
    username: '@therock',
    name: 'Dwayne Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    verified: true,
    followers: 396000000,
    following: 645,
    unfollowers: 31,
    mutualFollowers: 614,
  },
];

export function LiveDemo() {
  const [currentProfile, setCurrentProfile] = useState(0);
  const [animatingStats, setAnimatingStats] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatingStats(true);
      setTimeout(() => {
        setCurrentProfile((prev) => (prev + 1) % famousProfiles.length);
        setAnimatingStats(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const profile = famousProfiles[currentProfile];

  const formatNumber = (num: number) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50" id="live-demo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">See It In Action</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Watch live demo analysis of celebrity Instagram accounts. This is what you'll see after uploading your data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Profile Card */}
          <Card className="overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16 ring-4 ring-white/30">
                  <AvatarImage src={profile.avatar} alt={profile.name} />
                  <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-bold">{profile.username}</h3>
                    {profile.verified && (
                      <CheckCircle2 className="text-blue-300" size={20} />
                    )}
                  </div>
                  <p className="text-purple-100">{profile.name}</p>
                  <Badge className="bg-white/20 text-white mt-2">Celebrity</Badge>
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className={`text-center p-4 bg-blue-50 rounded-lg transition-all duration-500 ${animatingStats ? 'scale-105 bg-blue-100' : ''}`}>
                  <div className="flex items-center justify-center mb-2">
                    <Users className="text-blue-600 mr-1" size={16} />
                    <span className="text-sm font-medium text-blue-600">Followers</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {formatNumber(profile.followers)}
                  </div>
                </div>

                <div className={`text-center p-4 bg-purple-50 rounded-lg transition-all duration-500 ${animatingStats ? 'scale-105 bg-purple-100' : ''}`}>
                  <div className="flex items-center justify-center mb-2">
                    <UserMinus className="text-purple-600 mr-1" size={16} />
                    <span className="text-sm font-medium text-purple-600">Following</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {formatNumber(profile.following)}
                  </div>
                </div>

                <div className={`text-center p-4 bg-red-50 rounded-lg transition-all duration-500 ${animatingStats ? 'scale-105 bg-red-100' : ''}`}>
                  <div className="flex items-center justify-center mb-2">
                    <TrendingDown className="text-red-600 mr-1" size={16} />
                    <span className="text-sm font-medium text-red-600">Don't Follow Back</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {profile.unfollowers}
                  </div>
                </div>

                <div className={`text-center p-4 bg-green-50 rounded-lg transition-all duration-500 ${animatingStats ? 'scale-105 bg-green-100' : ''}`}>
                  <div className="flex items-center justify-center mb-2">
                    <Heart className="text-green-600 mr-1" size={16} />
                    <span className="text-sm font-medium text-green-600">Mutual</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {formatNumber(profile.mutualFollowers)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Get</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="text-green-600" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Complete Follower Analysis</h4>
                  <p className="text-gray-600">See detailed breakdowns of your followers, following, and engagement patterns.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="text-blue-600" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Unfollower Detection</h4>
                  <p className="text-gray-600">Instantly identify who doesn't follow you back and make informed decisions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="text-purple-600" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Loyal Follower Insights</h4>
                  <p className="text-gray-600">Discover your most engaged followers and mutual connections.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-600 text-center">
                <span className="font-medium">Live Demo:</span> Stats update every 4 seconds to show different celebrity profiles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}