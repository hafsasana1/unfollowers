import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AdminLayout } from "@/components/admin-layout";
import { 
  BarChart3, 
  Users, 
  Eye, 
  TrendingUp,
  Calendar,
  Clock
} from "lucide-react";
import { useState } from "react";

interface AnalyticsSummary {
  pageviews: number;
  uniqueVisitors: number;
  sessions: number;
  avgBounceRate: string;
}

interface AnalyticsDetailed {
  id: string;
  date: string;
  pageviews: number;
  uniqueVisitors: number;
  sessions: number;
  bounceRate: string;
  avgSessionDuration: string;
  source: string;
  page: string;
}

export default function AdminDashboard() {
  const [period, setPeriod] = useState("7");

  const { data: analyticsData, isLoading } = useQuery({
    queryKey: ["/api/admin/analytics", period],
    queryFn: () => fetch(`/api/admin/analytics?period=${period}`).then(res => res.json()),
  });

  const summary: AnalyticsSummary = analyticsData?.summary || {
    pageviews: 0,
    uniqueVisitors: 0,
    sessions: 0,
    avgBounceRate: "0",
  };

  const detailed: AnalyticsDetailed[] = analyticsData?.detailed || [];

  const stats = [
    {
      title: "Total Page Views",
      value: summary.pageviews.toLocaleString(),
      icon: Eye,
      description: `In the last ${period} days`,
      trend: "+12.5%",
    },
    {
      title: "Unique Visitors",
      value: summary.uniqueVisitors.toLocaleString(),
      icon: Users,
      description: `In the last ${period} days`,
      trend: "+8.2%",
    },
    {
      title: "Sessions",
      value: summary.sessions.toLocaleString(),
      icon: BarChart3,
      description: `In the last ${period} days`,
      trend: "+15.1%",
    },
    {
      title: "Avg. Bounce Rate",
      value: `${summary.avgBounceRate}%`,
      icon: TrendingUp,
      description: `In the last ${period} days`,
      trend: "-2.4%",
    },
  ];

  const periodOptions = [
    { value: "1", label: "Today" },
    { value: "7", label: "Last 7 days" },
    { value: "30", label: "Last 30 days" },
    { value: "90", label: "Last 3 months" },
    { value: "365", label: "Last year" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Analytics overview and site metrics
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-40" data-testid="select-period">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {periodOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="sm" data-testid="button-refresh">
              <BarChart3 className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} data-testid={`card-${stat.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center mt-1">
                    <span className={`mr-1 ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.trend}
                    </span>
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Analytics Chart Placeholder */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Traffic Overview
              </CardTitle>
              <CardDescription>
                Daily page views and visitor trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <BarChart3 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Analytics chart will be displayed here</p>
                  <p className="text-xs">Install a charting library to view graphs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common administrative tasks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-new-blog-post">
                <FileText className="w-4 h-4 mr-2" />
                New Blog Post
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-site-settings">
                <Settings className="w-4 h-4 mr-2" />
                Site Settings
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-adsense-setup">
                <DollarSign className="w-4 h-4 mr-2" />
                AdSense Setup
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-view-site">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Site
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Pages */}
        {detailed.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Recent Page Views
              </CardTitle>
              <CardDescription>
                Most visited pages in the selected period
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {detailed.slice(0, 5).map((item, index) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {item.page}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.source} • {new Date(item.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900 dark:text-white">
                        {item.pageviews} views
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.uniqueVisitors} visitors
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
}

// Import missing icons
import { FileText, Settings, DollarSign, ExternalLink } from "lucide-react";