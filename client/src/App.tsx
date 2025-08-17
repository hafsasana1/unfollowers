import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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
import { FollowersInsightsPage } from "@/pages/followers-insights";
import { InstagramAnalyticsPage } from "@/pages/instagram-analytics";
import { HowItWorksPage } from "@/pages/how-it-works";
import { TrackUnfollowersFree } from "@/pages/track-unfollowers-free";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/unfollowers-tracker" component={UnfollowersTrackerPage} />
      <Route path="/followers-insights" component={FollowersInsightsPage} />
      <Route path="/instagram-analytics" component={InstagramAnalyticsPage} />
      <Route path="/how-it-works" component={HowItWorksPage} />
      <Route path="/track-unfollowers-free" component={TrackUnfollowersFree} />
      <Route path="/results" component={Results} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/help-center" component={HelpCenter} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
