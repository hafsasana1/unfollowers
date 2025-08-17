import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Users, UserPlus, UserMinus, Heart, TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react';
import { mockAnalysisResults } from '@/lib/mock-data';

export function StatsDashboard() {
  const { stats, unfollowersList, mutualFollowersList } = mockAnalysisResults;

  const statsCards = [
    {
      title: 'Total Followers',
      value: stats.totalFollowers.toLocaleString(),
      icon: Users,
      color: 'blue',
      change: `+${stats.newFollowers} this week`,
      changeType: 'positive' as const,
    },
    {
      title: 'Following',
      value: stats.following.toLocaleString(),
      icon: UserPlus,
      color: 'purple',
      change: `-${stats.recentUnfollowers} this week`,
      changeType: 'negative' as const,
    },
    {
      title: 'Don\'t Follow Back',
      value: stats.unfollowers.toString(),
      icon: UserMinus,
      color: 'red',
      change: 'Review suggested',
      changeType: 'warning' as const,
    },
    {
      title: 'Mutual Followers',
      value: stats.mutualFollowers.toLocaleString(),
      icon: Heart,
      color: 'green',
      change: 'All good!',
      changeType: 'positive' as const,
    },
  ];

  const getChangeIcon = (type: 'positive' | 'negative' | 'warning') => {
    switch (type) {
      case 'positive':
        return <TrendingUp className="text-green-500" size={12} />;
      case 'negative':
        return <TrendingDown className="text-red-500" size={12} />;
      case 'warning':
        return <AlertTriangle className="text-orange-500" size={12} />;
    }
  };

  const getChangeColor = (type: 'positive' | 'negative' | 'warning') => {
    switch (type) {
      case 'positive':
        return 'text-green-500';
      case 'negative':
        return 'text-red-500';
      case 'warning':
        return 'text-orange-500';
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Instagram Analytics</h2>
          <p className="text-lg text-gray-600">Here's what you'll see after uploading your data</p>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsCards.map((stat, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`text-${stat.color}-600`} size={20} />
                  </div>
                  <span className="text-2xl">
                    {stat.color === 'blue' ? '👥' : 
                     stat.color === 'purple' ? '➕' : 
                     stat.color === 'red' ? '💔' : '💚'}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm mb-2">{stat.title}</p>
                <div className="flex items-center">
                  {getChangeIcon(stat.changeType)}
                  <span className={`text-xs font-medium ml-1 ${getChangeColor(stat.changeType)}`}>
                    {stat.change}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Detailed Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* People Who Don't Follow Back */}
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">People Who Don't Follow You Back</h3>
              <p className="text-red-100">Consider reviewing these accounts</p>
            </div>
            
            <CardContent className="p-6">
              <div className="space-y-4">
                {unfollowersList.map((user, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={user.profilePicture} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{user.username}</p>
                        <p className="text-sm text-gray-500">{user.name}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-700"
                    >
                      Unfollow
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-6">
                <Button variant="ghost" className="text-red-500 hover:text-red-700">
                  View All {stats.unfollowers} Accounts
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Mutual Followers */}
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Your Loyal Followers</h3>
              <p className="text-green-100">People who consistently follow you back</p>
            </div>
            
            <CardContent className="p-6">
              <div className="space-y-4">
                {mutualFollowersList.map((user, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={user.profilePicture} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{user.username}</p>
                        <p className="text-sm text-gray-500">{user.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-green-500">
                      <Heart className="mr-1" size={14} />
                      <span className="text-sm font-medium">Mutual</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-6">
                <Button variant="ghost" className="text-green-500 hover:text-green-700">
                  View All {stats.mutualFollowers.toLocaleString()} Followers
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
