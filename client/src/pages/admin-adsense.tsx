import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AdminLayout } from "@/components/admin-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Save, DollarSign, AlertTriangle, Eye, MapPin } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface AdSenseSettings {
  publisherId?: string;
  autoAds: boolean;
  headerAdCode?: string;
  sidebarAdCode?: string;
  contentAdCode?: string;
  footerAdCode?: string;
  isActive: boolean;
}

export default function AdminAdSense() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: settings, isLoading } = useQuery({
    queryKey: ["/api/admin/adsense"],
  });

  const [formData, setFormData] = useState<AdSenseSettings>({
    publisherId: "",
    autoAds: false,
    headerAdCode: "",
    sidebarAdCode: "",
    contentAdCode: "",
    footerAdCode: "",
    isActive: false,
  });

  React.useEffect(() => {
    if (settings) {
      setFormData({
        publisherId: settings.publisherId || "",
        autoAds: settings.autoAds || false,
        headerAdCode: settings.headerAdCode || "",
        sidebarAdCode: settings.sidebarAdCode || "",
        contentAdCode: settings.contentAdCode || "",
        footerAdCode: settings.footerAdCode || "",
        isActive: settings.isActive || false,
      });
    }
  }, [settings]);

  const updateMutation = useMutation({
    mutationFn: async (data: AdSenseSettings) => {
      return await apiRequest("/api/admin/adsense", {
        method: "POST",
        body: data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/adsense"] });
      toast({
        title: "AdSense Updated",
        description: "AdSense settings have been saved successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Update Failed",
        description: error.message || "Failed to update AdSense settings.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof AdSenseSettings, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const adPlacements = [
    {
      id: "header",
      title: "Header Ad",
      description: "Display ads at the top of pages",
      icon: MapPin,
      field: "headerAdCode" as keyof AdSenseSettings,
      placeholder: "Paste your Google AdSense ad code here",
    },
    {
      id: "sidebar",
      title: "Sidebar Ad",
      description: "Display ads in the sidebar area",
      icon: MapPin,
      field: "sidebarAdCode" as keyof AdSenseSettings,
      placeholder: "Paste your Google AdSense ad code here",
    },
    {
      id: "content",
      title: "In-Content Ad",
      description: "Display ads within article content",
      icon: MapPin,
      field: "contentAdCode" as keyof AdSenseSettings,
      placeholder: "Paste your Google AdSense ad code here",
    },
    {
      id: "footer",
      title: "Footer Ad",
      description: "Display ads at the bottom of pages",
      icon: MapPin,
      field: "footerAdCode" as keyof AdSenseSettings,
      placeholder: "Paste your Google AdSense ad code here",
    },
  ];

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <DollarSign className="w-8 h-8 animate-spin mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">Loading AdSense settings...</p>
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
            Google AdSense
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Configure Google AdSense ads for your website
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* AdSense Status & Basic Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                AdSense Configuration
              </CardTitle>
              <CardDescription>
                Basic AdSense account and activation settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="isActive">Enable AdSense</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Activate Google AdSense ads on your website
                  </p>
                </div>
                <Switch
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) => handleInputChange("isActive", checked)}
                  data-testid="switch-adsense-active"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="publisherId">Publisher ID</Label>
                <Input
                  id="publisherId"
                  placeholder="pub-1234567890123456"
                  value={formData.publisherId}
                  onChange={(e) => handleInputChange("publisherId", e.target.value)}
                  data-testid="input-publisher-id"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your Google AdSense Publisher ID (starts with 'pub-')
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="autoAds">Auto Ads</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Let Google automatically place ads on your site
                  </p>
                </div>
                <Switch
                  id="autoAds"
                  checked={formData.autoAds}
                  onCheckedChange={(checked) => handleInputChange("autoAds", checked)}
                  data-testid="switch-auto-ads"
                />
              </div>
            </CardContent>
          </Card>

          {/* Ad Placement Warning */}
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Important:</strong> Only paste ad codes from Google AdSense. 
              These ads will be displayed on your website frontend. Make sure your 
              AdSense account is approved and in good standing.
            </AlertDescription>
          </Alert>

          {/* Ad Placements */}
          {adPlacements.map((placement) => {
            const Icon = placement.icon;
            return (
              <Card key={placement.id}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon className="w-5 h-5 mr-2" />
                    {placement.title}
                  </CardTitle>
                  <CardDescription>{placement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor={placement.id}>Ad Code</Label>
                    <Textarea
                      id={placement.id}
                      placeholder={placement.placeholder}
                      value={formData[placement.field] as string || ""}
                      onChange={(e) => handleInputChange(placement.field, e.target.value)}
                      rows={4}
                      className="font-mono text-sm"
                      data-testid={`textarea-${placement.id}-ad`}
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Paste the complete HTML ad code from your Google AdSense dashboard
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Ad Preview Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Ad Preview & Best Practices
              </CardTitle>
              <CardDescription>
                Tips for optimal ad placement and performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Recommended Placements:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Header: Above the fold for maximum visibility</li>
                    <li>• Sidebar: Consistent presence across pages</li>
                    <li>• Content: Natural integration within articles</li>
                    <li>• Footer: Additional inventory without intrusion</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Best Practices:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Use responsive ad units</li>
                    <li>• Follow AdSense placement policies</li>
                    <li>• Monitor ad performance regularly</li>
                    <li>• Avoid excessive ad density</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={updateMutation.isPending}
              data-testid="button-save-adsense"
            >
              {updateMutation.isPending ? (
                <>
                  <DollarSign className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save AdSense Settings
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}