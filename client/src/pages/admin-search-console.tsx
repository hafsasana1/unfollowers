import React from "react";
import { AdminLayout } from "@/components/admin-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Globe, ExternalLink, Search, BarChart3, AlertTriangle, CheckCircle } from "lucide-react";

export default function AdminSearchConsole() {
  const verificationMethods = [
    {
      name: "HTML Meta Tag",
      description: "Add a meta tag to your site's head section",
      icon: Globe,
      status: "Available in Site Settings",
      link: "/admin/settings",
    },
    {
      name: "Google Analytics",
      description: "Use your existing Google Analytics tracking code",
      icon: BarChart3,
      status: "Configure in Analytics",
      link: "#",
    },
    {
      name: "Google Tag Manager", 
      description: "Verify through Google Tag Manager container",
      icon: Search,
      status: "Manual Setup Required",
      link: "#",
    },
  ];

  const searchConsoleFeatures = [
    {
      title: "Performance Monitoring",
      description: "Track clicks, impressions, CTR, and position for your pages",
      icon: BarChart3,
    },
    {
      title: "Index Coverage",
      description: "See which pages are indexed and identify crawling issues",
      icon: Search,
    },
    {
      title: "Core Web Vitals",
      description: "Monitor page experience signals and loading performance",
      icon: CheckCircle,
    },
    {
      title: "Security Issues",
      description: "Get alerts about malware, phishing, or other security problems",
      icon: AlertTriangle,
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Search Console Setup
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Configure Google Search Console verification and monitoring
          </p>
        </div>

        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Google Search Console Overview
            </CardTitle>
            <CardDescription>
              Monitor your website's search performance and health
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {searchConsoleFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Icon className="w-5 h-5 text-blue-500 mr-2" />
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Verification Methods */}
        <Card>
          <CardHeader>
            <CardTitle>Verification Methods</CardTitle>
            <CardDescription>
              Choose how to verify your website ownership with Google
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {verificationMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-gray-500" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {method.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {method.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {method.status}
                    </span>
                    {method.link && method.link !== "#" && (
                      <Button variant="outline" size="sm" asChild data-testid={`button-${method.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <a href={method.link}>
                          Configure
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Setup Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>Setup Instructions</CardTitle>
            <CardDescription>
              Step-by-step guide to connect your site with Google Search Console
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Create Google Search Console Account
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Visit <a href="https://search.google.com/search-console" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Google Search Console</a> and sign in with your Google account.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Add Your Property
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Click "Add Property" and enter your website URL. Choose "URL prefix" option for easier setup.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Get Verification Code
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Select "HTML tag" method and copy the meta tag provided by Google.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  4
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Add to Site Settings
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Go to <a href="/admin/settings" className="text-blue-500 hover:underline">Site Settings</a> and paste the meta tag in the "Google Search Console" field.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  5
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Verify Ownership
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Return to Google Search Console and click "Verify". Your site should now be verified!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Important Notes:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Keep the verification meta tag in your site's head section permanently</li>
              <li>• It may take a few days for data to appear in Search Console after verification</li>
              <li>• Submit your sitemap to Google Search Console for better indexing</li>
              <li>• Monitor the "Coverage" section regularly for indexing issues</li>
            </ul>
          </AlertDescription>
        </Alert>

        <div className="flex space-x-4">
          <Button asChild data-testid="button-open-search-console">
            <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Search Console
            </a>
          </Button>
          <Button variant="outline" asChild data-testid="button-configure-settings">
            <a href="/admin/settings">
              Configure Site Settings
            </a>
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
}