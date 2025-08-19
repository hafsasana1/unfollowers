import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AdminLayout } from "@/components/admin-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Save, Settings2, Globe, Image } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface SiteSettings {
  siteName: string;
  metaTitle: string;
  metaDescription: string;
  googleSearchConsole?: string;
  bingWebmaster?: string;
  yandexWebmaster?: string;
  favicon?: string;
  logo?: string;
}

export default function AdminSettings() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: settings, isLoading } = useQuery({
    queryKey: ["/api/admin/site-settings"],
  });

  const [formData, setFormData] = useState<SiteSettings>({
    siteName: "",
    metaTitle: "",
    metaDescription: "",
    googleSearchConsole: "",
    bingWebmaster: "",
    yandexWebmaster: "",
    favicon: "",
    logo: "",
  });

  // Initialize form data when settings load
  React.useEffect(() => {
    if (settings) {
      setFormData({
        siteName: settings.siteName || "",
        metaTitle: settings.metaTitle || "",
        metaDescription: settings.metaDescription || "",
        googleSearchConsole: settings.googleSearchConsole || "",
        bingWebmaster: settings.bingWebmaster || "",
        yandexWebmaster: settings.yandexWebmaster || "",
        favicon: settings.favicon || "",
        logo: settings.logo || "",
      });
    }
  }, [settings]);

  const updateMutation = useMutation({
    mutationFn: async (data: SiteSettings) => {
      return await apiRequest("/api/admin/site-settings", {
        method: "POST",
        body: data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/site-settings"] });
      toast({
        title: "Settings Updated",
        description: "Site settings have been saved successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Update Failed",
        description: error.message || "Failed to update site settings.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof SiteSettings, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <Settings2 className="w-8 h-8 animate-spin mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">Loading settings...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Site Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Configure your website's basic information and metadata
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Site Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Basic Information
              </CardTitle>
              <CardDescription>
                Essential site details and branding
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    placeholder="Your Site Name"
                    value={formData.siteName}
                    onChange={(e) => handleInputChange("siteName", e.target.value)}
                    required
                    data-testid="input-site-name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="metaTitle">Meta Title</Label>
                  <Input
                    id="metaTitle"
                    placeholder="SEO Title for search engines"
                    value={formData.metaTitle}
                    onChange={(e) => handleInputChange("metaTitle", e.target.value)}
                    required
                    data-testid="input-meta-title"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  placeholder="Brief description for search engines (160 characters recommended)"
                  value={formData.metaDescription}
                  onChange={(e) => handleInputChange("metaDescription", e.target.value)}
                  rows={3}
                  maxLength={160}
                  required
                  data-testid="textarea-meta-description"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {formData.metaDescription.length}/160 characters
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Branding Assets */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Image className="w-5 h-5 mr-2" />
                Branding Assets
              </CardTitle>
              <CardDescription>
                Upload your logo and favicon URLs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="logo">Logo URL</Label>
                  <Input
                    id="logo"
                    type="url"
                    placeholder="https://example.com/logo.png"
                    value={formData.logo}
                    onChange={(e) => handleInputChange("logo", e.target.value)}
                    data-testid="input-logo-url"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="favicon">Favicon URL</Label>
                  <Input
                    id="favicon"
                    type="url"
                    placeholder="https://example.com/favicon.ico"
                    value={formData.favicon}
                    onChange={(e) => handleInputChange("favicon", e.target.value)}
                    data-testid="input-favicon-url"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Search Console Verification */}
          <Card>
            <CardHeader>
              <CardTitle>Search Console Verification</CardTitle>
              <CardDescription>
                HTML meta tags for search engine verification
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="googleSearchConsole">Google Search Console</Label>
                <Input
                  id="googleSearchConsole"
                  placeholder='<meta name="google-site-verification" content="your-code-here" />'
                  value={formData.googleSearchConsole}
                  onChange={(e) => handleInputChange("googleSearchConsole", e.target.value)}
                  data-testid="input-google-verification"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Paste the complete HTML meta tag from Google Search Console
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bingWebmaster">Bing Webmaster Tools</Label>
                <Input
                  id="bingWebmaster"
                  placeholder='<meta name="msvalidate.01" content="your-code-here" />'
                  value={formData.bingWebmaster}
                  onChange={(e) => handleInputChange("bingWebmaster", e.target.value)}
                  data-testid="input-bing-verification"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Paste the complete HTML meta tag from Bing Webmaster Tools
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="yandexWebmaster">Yandex Webmaster</Label>
                <Input
                  id="yandexWebmaster"
                  placeholder='<meta name="yandex-verification" content="your-code-here" />'
                  value={formData.yandexWebmaster}
                  onChange={(e) => handleInputChange("yandexWebmaster", e.target.value)}
                  data-testid="input-yandex-verification"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Paste the complete HTML meta tag from Yandex Webmaster
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={updateMutation.isPending}
              data-testid="button-save-settings"
            >
              {updateMutation.isPending ? (
                <>
                  <Settings2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Settings
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

// Add missing React import
import React from "react";