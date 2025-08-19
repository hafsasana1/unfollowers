import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AdminLayout } from "@/components/admin-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  DollarSign, 
  Target, 
  BarChart3, 
  Settings, 
  Plus,
  Edit,
  Trash2,
  Eye,
  AlertTriangle,
  CheckCircle,
  Globe,
  Code,
  Search,
  Verified,
  Save
} from "lucide-react";

interface AdSenseSettings {
  publisherId?: string;
  autoAds: boolean;
  headerAdCode?: string;
  sidebarAdCode?: string;
  contentAdCode?: string;
  footerAdCode?: string;
  isActive: boolean;
}

interface AdSenseSite {
  id: string;
  domain: string;
  verificationCode?: string;
  isVerified: boolean;
  status: 'pending' | 'verified' | 'rejected';
  submittedAt?: string;
  verifiedAt?: string;
}

export default function AdminAdSense() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  // Site verification dialog state
  const [isAddSiteOpen, setIsAddSiteOpen] = useState(false);
  const [newSiteData, setNewSiteData] = useState({
    domain: "",
    verificationCode: "",
  });

  const { data: settings, isLoading } = useQuery({
    queryKey: ["/api/admin/adsense"],
  });

  const { data: sites, isLoading: sitesLoading } = useQuery({
    queryKey: ["/api/admin/adsense/sites"],
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

  // Site verification mutations
  const addSiteMutation = useMutation({
    mutationFn: async (siteData: { domain: string; verificationCode: string }) => {
      const res = await apiRequest("/api/admin/adsense/sites", {
        method: "POST",
        body: siteData,
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/adsense/sites"] });
      setIsAddSiteOpen(false);
      setNewSiteData({ domain: "", verificationCode: "" });
      toast({
        title: "Site Added",
        description: "AdSense site has been added for verification.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Add Failed",
        description: error.message || "Failed to add AdSense site.",
        variant: "destructive",
      });
    },
  });

  const verifySiteMutation = useMutation({
    mutationFn: async (siteId: string) => {
      const res = await apiRequest(`/api/admin/adsense/sites/${siteId}/verify`, {
        method: "POST",
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/adsense/sites"] });
      toast({
        title: "Verification Started",
        description: "Site verification process has been initiated.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Verification Failed",
        description: error.message || "Failed to verify AdSense site.",
        variant: "destructive",
      });
    },
  });

  const deleteSiteMutation = useMutation({
    mutationFn: async (siteId: string) => {
      const res = await apiRequest(`/api/admin/adsense/sites/${siteId}`, {
        method: "DELETE",
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/adsense/sites"] });
      toast({
        title: "Site Removed",
        description: "AdSense site has been removed successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Deletion Failed",
        description: error.message || "Failed to delete AdSense site.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMutation.mutate(formData);
  };

  const handleAddSite = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSiteData.domain && newSiteData.verificationCode) {
      addSiteMutation.mutate(newSiteData);
    }
  };

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
            AdSense Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Configure Google AdSense ads and manage site verification
          </p>
        </div>

        <Tabs defaultValue="configuration" className="space-y-4">
          <TabsList>
            <TabsTrigger value="configuration">Configuration</TabsTrigger>
            <TabsTrigger value="sites">Site Verification</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="configuration">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="w-5 h-5 mr-2" />
                    AdSense Configuration
                  </CardTitle>
                  <CardDescription>
                    Set up your Google AdSense account and ad placements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="publisherId">Publisher ID</Label>
                      <Input
                        id="publisherId"
                        placeholder="pub-1234567890123456"
                        value={formData.publisherId}
                        onChange={(e) => setFormData(prev => ({ ...prev, publisherId: e.target.value }))}
                        data-testid="input-publisher-id"
                      />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Your Google AdSense publisher ID
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="autoAds"
                        checked={formData.autoAds}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, autoAds: checked }))}
                        data-testid="switch-auto-ads"
                      />
                      <Label htmlFor="autoAds">Enable Auto Ads</Label>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="headerAdCode">Header Ad Code</Label>
                      <Textarea
                        id="headerAdCode"
                        placeholder="<script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXX'></script>"
                        value={formData.headerAdCode}
                        onChange={(e) => setFormData(prev => ({ ...prev, headerAdCode: e.target.value }))}
                        rows={3}
                        data-testid="textarea-header-ad"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="sidebarAdCode">Sidebar Ad Code</Label>
                      <Textarea
                        id="sidebarAdCode"
                        placeholder="<ins class='adsbygoogle' style='display:block'></ins>"
                        value={formData.sidebarAdCode}
                        onChange={(e) => setFormData(prev => ({ ...prev, sidebarAdCode: e.target.value }))}
                        rows={3}
                        data-testid="textarea-sidebar-ad"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="contentAdCode">Content Ad Code</Label>
                      <Textarea
                        id="contentAdCode"
                        placeholder="<ins class='adsbygoogle' style='display:block'></ins>"
                        value={formData.contentAdCode}
                        onChange={(e) => setFormData(prev => ({ ...prev, contentAdCode: e.target.value }))}
                        rows={3}
                        data-testid="textarea-content-ad"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="footerAdCode">Footer Ad Code</Label>
                      <Textarea
                        id="footerAdCode"
                        placeholder="<ins class='adsbygoogle' style='display:block'></ins>"
                        value={formData.footerAdCode}
                        onChange={(e) => setFormData(prev => ({ ...prev, footerAdCode: e.target.value }))}
                        rows={3}
                        data-testid="textarea-footer-ad"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mt-4">
                    <Switch
                      id="isActive"
                      checked={formData.isActive}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isActive: checked }))}
                      data-testid="switch-active"
                    />
                    <Label htmlFor="isActive">Activate AdSense</Label>
                  </div>

                  {!formData.isActive && (
                    <Alert className="mt-4">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        AdSense is currently disabled. Ads will not be displayed on your website.
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    disabled={updateMutation.isPending}
                    className="mt-4"
                    data-testid="button-save-adsense"
                  >
                    {updateMutation.isPending ? (
                      <>
                        <Save className="w-4 h-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Save AdSense Settings
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </form>
          </TabsContent>
          
          <TabsContent value="sites">
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <Globe className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg mb-2">Site Verification Coming Soon</p>
              <p className="text-sm">AdSense site verification features will be available in a future update</p>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics">
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg mb-2">Analytics Coming Soon</p>
              <p className="text-sm">AdSense performance analytics will be available once your ads are active</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}