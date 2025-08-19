// SEO Configuration for all pages
export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
}

export const seoConfig: Record<string, SEOData> = {
  // Homepage - Main landing page
  '/': {
    title: 'Instagram Unfollowers Tracker – See Who Unfollowed You?',
    description: 'See who unfollowed you on Instagram, spot ghost & inactive followers, and track changes in real time. Simple insights to clean your audience and grow faster.',
    keywords: 'instagram unfollowers tracker, who unfollowed me instagram, instagram followers analysis, free unfollowers tracker, instagram analytics',
    ogTitle: 'Free Instagram Unfollowers Tracker - Secure & Private',
    ogDescription: 'Track who unfollowed you on Instagram instantly. No login required, completely secure data processing.'
  },

  // Tool Pages
  '/unfollowers-tracker': {
    title: 'Instagram Unfollowers Tracker Tool - Find Who Unfollowed You',
    description: 'Powerful Instagram unfollowers tracker to discover who stopped following you. Upload your Instagram data and get instant detailed analysis of your follower changes.',
    keywords: 'instagram unfollowers tracker, unfollowers tool, instagram followers lost, who unfollowed me',
    ogTitle: 'Instagram Unfollowers Tracker - Advanced Analytics',
    ogDescription: 'Professional tool to track Instagram unfollowers with detailed analytics and insights.'
  },

  '/ghost-followers': {
    title: 'Ghost Followers Tracker – Detect Fake & Inactive Instagram Accounts',
    description: 'Use our Ghost Followers Tracker to spot fake or inactive Instagram accounts. Clean your audience, boost engagement, and grow with real, active followers.',
    keywords: 'instagram ghost followers, ghost followers checker, inactive followers instagram, fake followers detector',
    ogTitle: 'Ghost Followers Tracker – Detect Fake & Inactive Instagram Accounts',
    ogDescription: 'Use our Ghost Followers Tracker to spot fake or inactive Instagram accounts. Clean your audience, boost engagement, and grow with real, active followers.'
  },

  '/inactive-followers': {
    title: 'Inactive Followers Tracker – Find & Remove Non-Engaging Instagram Users',
    description: 'Track and remove inactive Instagram followers who don\'t engage with your posts. Our Inactive Followers Tracker helps you improve reach and engagement rates.',
    keywords: 'inactive followers instagram, low engagement followers, instagram engagement analysis, follower quality checker',
    ogTitle: 'Inactive Followers Tracker – Find & Remove Non-Engaging Instagram Users',
    ogDescription: 'Track and remove inactive Instagram followers who don\'t engage with your posts. Our Inactive Followers Tracker helps you improve reach and engagement rates.'
  },

  // Information Pages
  '/how-it-works': {
    title: 'How Our Instagram Unfollowers Tracker Works – Step-by-Step Guide',
    description: 'Learn how our Instagram unfollowers tracker works: detect unfollows, ghost and inactive followers, with secure, real-time insights to grow your account safely.',
    keywords: 'how to track instagram followers, instagram data export, safe followers tracking, instagram analytics guide',
    ogTitle: 'How Our Instagram Unfollowers Tracker Works – Step-by-Step Guide',
    ogDescription: 'Learn how our Instagram unfollowers tracker works: detect unfollows, ghost and inactive followers, with secure, real-time insights to grow your account safely.'
  },

  '/about': {
    title: 'About Us - Instagram Analytics & Followers Tracking Experts',
    description: 'Learn about our mission to provide secure, privacy-focused Instagram analytics tools. Trusted by thousands to track followers without compromising account security.',
    keywords: 'instagram analytics company, followers tracker team, privacy-focused social media tools',
    ogTitle: 'About Our Instagram Analytics Platform',
    ogDescription: 'Dedicated to providing secure and private Instagram follower tracking solutions.'
  },

  '/contact': {
    title: 'Contact Us - Instagram Followers Tracker Support',
    description: 'Get support for Instagram followers tracking. Contact our team for help with follower analysis, technical issues, or feature requests. Quick response guaranteed.',
    keywords: 'instagram tracker support, followers analysis help, contact instagram tool team',
    ogTitle: 'Contact Support - Instagram Followers Tracker',
    ogDescription: 'Get help with Instagram follower tracking and analytics. Professional support team available.'
  },

  // Blog Pages
  '/blog': {
    title: 'Instagram Tracker Blog – Unfollowers, Ghosts & Growth Tips',
    description: 'Read the latest on Instagram unfollowers, ghost & inactive trackers, and growth strategies. Tips, insights, and guides to manage and grow your Instagram.',
    keywords: 'instagram growth blog, followers tips, instagram marketing guides, social media strategies',
    ogTitle: 'Instagram Tracker Blog – Unfollowers, Ghosts & Growth Tips',
    ogDescription: 'Read the latest on Instagram unfollowers, ghost & inactive trackers, and growth strategies. Tips, insights, and guides to manage and grow your Instagram.'
  },

  '/how-to-see-who-unfollowed-you': {
    title: 'How to See Who Unfollowed You on Instagram - Complete Guide 2025',
    description: 'Complete guide to see who unfollowed you on Instagram safely. Learn the secure method using Instagram data export without third-party apps or login risks.',
    keywords: 'how to see who unfollowed me instagram, check unfollowers instagram, instagram unfollowers guide',
    ogTitle: 'See Who Unfollowed You on Instagram - Safe Method',
    ogDescription: 'Step-by-step guide to safely check who unfollowed you on Instagram using official data export.'
  },

  '/who-doesnt-follow-back': {
    title: 'Who Doesn\'t Follow Me Back on Instagram - Free Checker Tool',
    description: 'Find out who doesn\'t follow you back on Instagram with our free analysis tool. Discover non-mutual followers and optimize your following strategy for better engagement.',
    keywords: 'who doesn\'t follow me back instagram, non mutual followers, instagram following analysis',
    ogTitle: 'Instagram Non-Mutual Followers Checker',
    ogDescription: 'Discover who doesn\'t follow you back on Instagram and optimize your following strategy.'
  },

  '/instagram-who-doesnt-follow-me-back': {
    title: 'Instagram: Who Doesn\'t Follow Me Back - Advanced Analysis Tool',
    description: 'Advanced Instagram analysis to find accounts that don\'t follow you back. Get detailed insights into your following patterns and improve your social media strategy.',
    keywords: 'instagram non followers analysis, following vs followers, instagram relationship analysis',
    ogTitle: 'Advanced Instagram Following Analysis',
    ogDescription: 'Comprehensive analysis of your Instagram following relationships and engagement patterns.'
  },

  '/how-to-check-instagram-unfollowers': {
    title: 'How to Check Instagram Unfollowers Safely - Security Guide 2025',
    description: 'Safe methods to check Instagram unfollowers without risking your account. Learn secure practices, avoid suspicious apps, and protect your Instagram privacy.',
    keywords: 'check instagram unfollowers safely, secure unfollowers tracking, instagram account security',
    ogTitle: 'Safe Instagram Unfollowers Checking Guide',
    ogDescription: 'Secure methods to check Instagram unfollowers while protecting your account and privacy.'
  },

  // Legal Pages
  '/privacy-policy': {
    title: 'Privacy Policy - Instagram Followers Tracker Data Protection',
    description: 'Our privacy policy explains how we protect your data when using our Instagram followers tracker. We prioritize your privacy with no data storage or sharing.',
    keywords: 'privacy policy instagram tracker, data protection, user privacy',
    ogTitle: 'Privacy Policy - Data Protection Guaranteed',
    ogDescription: 'Transparent privacy policy ensuring your Instagram data remains secure and private.'
  },

  '/terms-of-service': {
    title: 'Terms of Service - Instagram Followers Tracker Usage Guidelines',
    description: 'Terms of service for using our Instagram followers tracker. Understand your rights and responsibilities when using our secure follower analysis tools.',
    keywords: 'terms of service instagram tracker, usage guidelines, user agreement',
    ogTitle: 'Terms of Service - Usage Guidelines',
    ogDescription: 'Clear terms of service for using our Instagram follower tracking tools responsibly.'
  },

  '/cookie-policy': {
    title: 'Cookie Policy - Instagram Followers Tracker Website Cookies',
    description: 'Our cookie policy explains how we use cookies to improve your experience on our Instagram followers tracker website. Minimal cookies for better performance.',
    keywords: 'cookie policy, website cookies, user experience',
    ogTitle: 'Cookie Policy - Website Performance',
    ogDescription: 'Transparent cookie policy explaining our minimal use of cookies for better user experience.'
  },

  '/help-center': {
    title: 'Help Center - Instagram Followers Tracker Support & FAQ',
    description: 'Get help with our Instagram followers tracker. Find answers to common questions, troubleshooting guides, and step-by-step tutorials for tracking followers.',
    keywords: 'instagram tracker help, followers tracking FAQ, troubleshooting guide, user support',
    ogTitle: 'Help Center - Expert Support Available',
    ogDescription: 'Comprehensive help center with guides and support for Instagram follower tracking.'
  },

  '/disclaimer': {
    title: 'Disclaimer - Instagram Unfollowers Tracker',
    description: 'Important disclaimers and limitations regarding the use of Instagram Unfollowers Tracker tool. Please read before using our service.',
    keywords: 'disclaimer, terms, limitations, instagram tracker disclaimer, liability, accuracy',
    ogTitle: 'Disclaimer - Terms and Limitations',
    ogDescription: 'Important legal disclaimers and service limitations for Instagram followers tracking tool.'
  },

  '/instagram-auto-unfollow-explained': {
    title: 'Does Instagram Auto Unfollow People? Complete Guide to Instagram Unfollowing',
    description: 'Learn about Instagram auto unfollow features, automatic follow/unfollow tools, and why Instagram might randomly unfollow accounts. Complete safety guide included.',
    keywords: 'instagram auto unfollow, does instagram unfollow people, automatic follow unfollow instagram, instagram unfollowing people, does instagram randomly unfollow',
    ogTitle: 'Instagram Auto Unfollow Guide - Complete Safety Information',
    ogDescription: 'Understanding Instagram auto unfollowing, third-party tools, and safe tracking methods for your followers.'
  }
};

// Generate canonical URL
export const getCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://unfollowers-tracker.replit.app';
  return `${baseUrl}${path}`;
};

// Get SEO data for a specific path
export const getSEOData = (path: string): SEOData => {
  return seoConfig[path] || seoConfig['/'];
};

// Generate full title with branding
export const getFullTitle = (path: string): string => {
  const data = getSEOData(path);
  return data.title;
};

// Generate structured data for different page types
export const generateStructuredData = (path: string) => {
  const data = getSEOData(path);
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": data.title,
    "description": data.description,
    "url": getCanonicalUrl(path)
  };

  // Add specific structured data based on page type
  if (path.includes('blog') || path.includes('how-to')) {
    return {
      ...baseStructuredData,
      "@type": "Article",
      "headline": data.title,
      "author": {
        "@type": "Organization",
        "name": "Instagram Followers Tracker"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Instagram Followers Tracker"
      }
    };
  }

  if (path.includes('tracker') || path.includes('tool')) {
    return {
      ...baseStructuredData,
      "@type": "SoftwareApplication",
      "name": data.title,
      "applicationCategory": "SocialNetworkingApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    };
  }

  return baseStructuredData;
};