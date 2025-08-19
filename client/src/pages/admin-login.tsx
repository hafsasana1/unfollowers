import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAdminAuth } from "@/hooks/use-admin-auth";
import { Eye, EyeOff, Lock, User, Mail } from "lucide-react";

export default function AdminLogin() {
  const [, navigate] = useLocation();
  const { isAuthenticated, login, setup, isLoggingIn, isSettingUp, loginError, setupError } = useAdminAuth();
  
  // Login form state
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  
  // Setup form state
  const [setupData, setSetupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [setupPasswordMatch, setSetupPasswordMatch] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      login(credentials);
    }
  };

  const handleSetup = (e: React.FormEvent) => {
    e.preventDefault();
    if (setupData.password !== setupData.confirmPassword) {
      setSetupPasswordMatch(false);
      return;
    }
    setSetupPasswordMatch(true);
    
    if (setupData.username && setupData.email && setupData.password) {
      setup({
        username: setupData.username,
        email: setupData.email,
        password: setupData.password,
        isActive: true,
      });
    }
  };

  const updateSetupPassword = (field: 'password' | 'confirmPassword', value: string) => {
    const newSetupData = { ...setupData, [field]: value };
    setSetupData(newSetupData);
    
    if (field === 'confirmPassword' || (field === 'password' && setupData.confirmPassword)) {
      setSetupPasswordMatch(
        field === 'password' ? 
          value === setupData.confirmPassword : 
          setupData.password === value
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Admin Access</CardTitle>
          <CardDescription>
            Manage your Instagram Followers Tracker
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="login" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login" data-testid="tab-login">Login</TabsTrigger>
              <TabsTrigger value="setup" data-testid="tab-setup">Setup</TabsTrigger>
            </TabsList>
            
            {/* Login Tab */}
            <TabsContent value="login" className="space-y-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      value={credentials.username}
                      onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                      className="pl-10"
                      required
                      data-testid="input-username"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={credentials.password}
                      onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                      className="pl-10 pr-10"
                      required
                      data-testid="input-password"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                      data-testid="button-toggle-password"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </div>

                {loginError && (
                  <Alert variant="destructive">
                    <AlertDescription data-testid="alert-login-error">
                      {loginError.message || "Login failed. Please check your credentials."}
                    </AlertDescription>
                  </Alert>
                )}

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isLoggingIn}
                  data-testid="button-login"
                >
                  {isLoggingIn ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </TabsContent>

            {/* Setup Tab */}
            <TabsContent value="setup" className="space-y-4">
              <div className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
                Create the first admin account
              </div>
              
              <form onSubmit={handleSetup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="setup-username">Username</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="setup-username"
                      type="text"
                      placeholder="Choose a username"
                      value={setupData.username}
                      onChange={(e) => setSetupData(prev => ({ ...prev, username: e.target.value }))}
                      className="pl-10"
                      required
                      data-testid="input-setup-username"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="setup-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="setup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={setupData.email}
                      onChange={(e) => setSetupData(prev => ({ ...prev, email: e.target.value }))}
                      className="pl-10"
                      required
                      data-testid="input-setup-email"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="setup-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="setup-password"
                      type="password"
                      placeholder="Choose a password"
                      value={setupData.password}
                      onChange={(e) => updateSetupPassword('password', e.target.value)}
                      className="pl-10"
                      required
                      data-testid="input-setup-password"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="setup-confirm-password">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="setup-confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      value={setupData.confirmPassword}
                      onChange={(e) => updateSetupPassword('confirmPassword', e.target.value)}
                      className="pl-10"
                      required
                      data-testid="input-setup-confirm-password"
                    />
                  </div>
                  {!setupPasswordMatch && (
                    <p className="text-sm text-red-500">Passwords do not match</p>
                  )}
                </div>

                {setupError && (
                  <Alert variant="destructive">
                    <AlertDescription data-testid="alert-setup-error">
                      {setupError.message || "Setup failed. Please try again."}
                    </AlertDescription>
                  </Alert>
                )}

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSettingUp || !setupPasswordMatch}
                  data-testid="button-setup"
                >
                  {isSettingUp ? "Creating Account..." : "Create Admin Account"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}