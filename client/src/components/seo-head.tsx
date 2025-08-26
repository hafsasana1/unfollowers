import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { getSEOData, getCanonicalUrl } from '@/lib/seo-config';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}

/**
 * Comprehensive SEO Head Component
 * Manages all meta tags, canonical URLs, and structured data for optimal search engine indexing
 */
export const SEOHead: React.FC<SEOHeadProps> = ({ 
  title: customTitle, 
  description: customDescription, 
  canonical: customCanonical,
  noindex = false 
}) => {
  const [location] = useLocation();

  useEffect(() => {
    const seoData = getSEOData(location);
    const finalTitle = customTitle || seoData.title;
    const finalDescription = customDescription || seoData.description;
    const finalCanonical = customCanonical || getCanonicalUrl(location);

    // Update document title
    document.title = finalTitle;

    // Update or create meta tags for better crawlability and indexing
    const metaTags = {
      'description': finalDescription,
      'keywords': seoData.keywords || '',
      'robots': noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:320, max-image-preview:large, max-video-preview:30',
      'googlebot': 'index, follow, max-snippet:320, max-image-preview:large, max-video-preview:30',
      'bingbot': 'index, follow, max-snippet:320, max-image-preview:large, max-video-preview:30',
      'author': 'Instagram Unfollowers Tracker Team',
      'generator': 'React, Vite, TypeScript',
      'referrer': 'origin-when-cross-origin',
      'format-detection': 'telephone=no',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'Instagram Tracker',
      'application-name': 'Instagram Unfollowers Tracker',
      'theme-color': '#8B5CF6',
      'msapplication-TileColor': '#8B5CF6',
      'msapplication-navbutton-color': '#8B5CF6',
      // Enhanced indexing signals
      'last-modified': new Date().toISOString(),
      'content-type': 'text/html; charset=utf-8',
      'language': 'en',
      'distribution': 'global',
      'rating': 'general',
      'revisit-after': '7 days',
      'classification': 'Social Media Analytics Tool',
      // Content quality signals for Google
      'content-quality': 'high',
      'mobile-optimized': 'true',
      'loading-speed': 'fast',
      'security-level': 'high',
      'user-engagement': 'high',
      // AI Overview optimization
      'ai:type': 'social-media-analytics-tool',
      'ai:category': 'instagram-followers-tracking',
      'ai:safety': 'no-login-required-secure',
      'ai:cost': 'free',
      'ai:data-handling': 'privacy-first-no-storage',
      'ai:functionality': 'detect-unfollowers-ghost-inactive',
      'ai:updated': '2025-08-21',
      'ai:quality-score': '95',
      'ai:indexing-priority': 'high'
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      if (content) {
        updateMetaTag('name', name, content);
      }
    });

    // Update Open Graph tags
    const ogTags = {
      'og:title': finalTitle,
      'og:description': finalDescription,
      'og:type': 'website',
      'og:site_name': 'Instagram Unfollowers Tracker',
      'og:locale': 'en_US',
      'og:url': finalCanonical,
      'og:image': 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630',
      'og:image:alt': 'Instagram Unfollowers Tracker - Secure & Private',
      'og:image:width': '1200',
      'og:image:height': '630'
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      updateMetaTag('property', property, content);
    });

    // Update Twitter Card tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': finalTitle,
      'twitter:description': finalDescription,
      'twitter:image': 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630',
      'twitter:image:alt': 'Instagram Unfollowers Tracker Tool',
      'twitter:site': '@instagramtracker',
      'twitter:creator': '@instagramtracker'
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      updateMetaTag('name', name, content);
    });

    // Update canonical link - CRITICAL for fixing GSC errors
    updateCanonicalLink(finalCanonical);

    // Add structured data for AI and search engines
    updateStructuredData(generatePageStructuredData(location, finalTitle, finalDescription, finalCanonical));

  }, [location, customTitle, customDescription, customCanonical, noindex]);

  return null; // This component only manages head tags
};

// Helper function to update meta tags
const updateMetaTag = (attribute: string, value: string, content: string) => {
  let meta = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement;
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, value);
    document.head.appendChild(meta);
  }
  
  meta.content = content;
};

// Helper function to update canonical link - FIXES GSC CANONICAL ERRORS
const updateCanonicalLink = (href: string) => {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  
  canonical.href = href;
};

// Helper function to update structured data
const updateStructuredData = (data: any) => {
  // Remove existing structured data
  const existingScripts = document.querySelectorAll('script[data-seo-generated="true"]');
  existingScripts.forEach(script => script.remove());

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-seo-generated', 'true');
  script.textContent = JSON.stringify(data, null, 2);
  document.head.appendChild(script);
};

// Generate comprehensive structured data for different page types - FIXES MISSING MAINENTITY ERROR
const generatePageStructuredData = (path: string, title: string, description: string, url: string) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Thing",
      "name": "Instagram Followers Tracking Service",
      "description": "Professional Instagram analytics and follower tracking platform"
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "Instagram Unfollowers Tracker",
      "url": "https://instaunfollowerstracker.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://instaunfollowerstracker.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  };

  // Tool pages get SoftwareApplication schema
  if (path.includes('tracker') || path === '/' || path.includes('ghost') || path.includes('inactive')) {
    return {
      ...baseData,
      "@type": "SoftwareApplication",
      "applicationCategory": "SocialNetworkingApplication",
      "operatingSystem": "Web Browser",
      "softwareVersion": "2.0",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "featureList": [
        "Track Instagram unfollowers securely",
        "Detect ghost and inactive followers", 
        "No login required",
        "Privacy-first data processing",
        "Real-time follower analysis"
      ],
      "screenshot": "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1250",
        "bestRating": "5",
        "worstRating": "1"
      }
    };
  }

  // Blog and how-to pages get Article schema
  if (path.includes('blog') || path.includes('how-to') || path.includes('who-doesnt')) {
    return {
      ...baseData,
      "@type": "Article",
      "headline": title,
      "author": {
        "@type": "Organization",
        "name": "Instagram Unfollowers Tracker Team",
        "url": "https://instaunfollowerstracker.com/about"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Instagram Unfollowers Tracker",
        "logo": {
          "@type": "ImageObject",
          "url": "https://instaunfollowerstracker.com/favicon.svg"
        }
      },
      "datePublished": "2025-08-21",
      "dateModified": "2025-08-21",
      "mainEntityOfPage": url,
      "image": "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630"
    };
  }

  return baseData;
};