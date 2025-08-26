import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SEOWrapper } from "@/hooks/use-seo";
import { MobileOptimizations, usePerformanceMonitoring } from "@/components/mobile-optimization";
import Home from "@/pages/home";
import Results from "@/pages/results";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import CookiePolicy from "@/pages/cookie-policy";
import HelpCenter from "@/pages/help-center";
import NotFound from "@/pages/not-found";
import { UnfollowersTrackerPage } from "@/pages/unfollowers-tracker";
import { GhostFollowersPage } from "@/pages/ghost-followers";
import { InactiveFollowersPage } from "@/pages/inactive-followers";
import { HowItWorksPage } from "@/pages/how-it-works";
import { TrackUnfollowersFree } from "@/pages/track-unfollowers-free";
import HowToSeeWhoUnfollowedYou from "@/pages/how-to-see-who-unfollowed-you";
import WhoDoesntFollowBack from "@/pages/who-doesnt-follow-back";
import InstagramWhoDoesntFollowMeBack from "@/pages/instagram-who-doesnt-follow-me-back";
import HowToCheckInstagramUnfollowers from "@/pages/how-to-check-instagram-unfollowers";
import InstagramAutoUnfollowExplained from "@/pages/instagram-auto-unfollow-explained";
import InstagramFollowerVsUnfollowerTracker from "@/pages/instagram-follower-vs-unfollower-tracker";
import BlogPage from "@/pages/blog";
import DisclaimerPage from "@/pages/disclaimer";

// Admin pages
import AdminLogin from "@/pages/admin-login";
import AdminDashboard from "@/pages/admin-dashboard";
import AdminSettings from "@/pages/admin-settings";
import AdminSearchConsole from "@/pages/admin-search-console";
import AdminAdSense from "@/pages/admin-adsense";
import AdminBlog from "@/pages/admin-blog";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/unfollowers-tracker" component={UnfollowersTrackerPage} />
      <Route path="/ghost-followers" component={GhostFollowersPage} />
      <Route path="/inactive-followers" component={InactiveFollowersPage} />
      <Route path="/how-it-works" component={HowItWorksPage} />
      <Route path="/track-unfollowers-free" component={TrackUnfollowersFree} />
      <Route path="/how-to-see-who-unfollowed-you" component={HowToSeeWhoUnfollowedYou} />
      <Route path="/who-doesnt-follow-back" component={WhoDoesntFollowBack} />
      <Route path="/instagram-who-doesnt-follow-me-back" component={InstagramWhoDoesntFollowMeBack} />
      <Route path="/how-to-check-instagram-unfollowers" component={HowToCheckInstagramUnfollowers} />
      <Route path="/instagram-auto-unfollow-explained" component={InstagramAutoUnfollowExplained} />
      <Route path="/instagram-follower-vs-unfollower-tracker" component={InstagramFollowerVsUnfollowerTracker} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/results" component={Results} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/help-center" component={HelpCenter} />
      <Route path="/disclaimer" component={DisclaimerPage} />
      
      {/* Admin routes */}
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin/settings" component={AdminSettings} />
      <Route path="/admin/search-console" component={AdminSearchConsole} />
      <Route path="/admin/adsense" component={AdminAdSense} />
      <Route path="/admin/blog" component={AdminBlog} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize performance monitoring
  usePerformanceMonitoring();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SEOWrapper>
          <MobileOptimizations />
          <Toaster />
          <Router />
        </SEOWrapper>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
