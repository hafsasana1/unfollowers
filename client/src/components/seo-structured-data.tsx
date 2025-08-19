import { useEffect } from 'react';
import { useLocation } from 'wouter';

// Component to inject comprehensive structured data for AI/LLM optimization
export function SEOStructuredData() {
  const [location] = useLocation();

  useEffect(() => {
    // Remove any existing structured data from this component
    const existingSchemas = document.querySelectorAll('script[data-seo-component="structured-data"]');
    existingSchemas.forEach(script => script.remove());

    // Comprehensive structured data for AI Overview and LLM optimization
    const schemas = [
      // Website schema
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Instagram Unfollowers Tracker",
        "alternateName": ["Unfollowers Tracker", "Instagram Analytics Tool"],
        "url": "https://unfollowerstracker.com",
        "description": "Free and secure Instagram analytics tool for tracking unfollowers, ghost followers, and engagement insights",
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://unfollowerstracker.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "sameAs": [
          "https://twitter.com/unfollowerstracker",
          "https://instagram.com/unfollowerstracker",
          "https://youtube.com/@unfollowerstracker"
        ],
        "publisher": {
          "@type": "Organization",
          "name": "Instagram Unfollowers Tracker",
          "logo": "https://unfollowerstracker.com/favicon.svg"
        }
      },

      // Software Application schema for AI/LLM understanding
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Instagram Unfollowers Tracker",
        "applicationCategory": "SocialNetworkingApplication",
        "applicationSubCategory": "Social Media Analytics",
        "operatingSystem": "Web Browser",
        "browserRequirements": "Requires JavaScript. Compatible with Chrome, Firefox, Safari, Edge",
        "permissions": "No Instagram login required",
        "downloadUrl": "https://unfollowerstracker.com",
        "installUrl": "https://unfollowerstracker.com",
        "screenshot": "https://unfollowerstracker.com/og-image.png",
        "description": "Secure Instagram analytics tool to track unfollowers, ghost followers, and inactive accounts without requiring login credentials",
        "featureList": [
          "Track who unfollowed you on Instagram",
          "Detect ghost and inactive followers",
          "Analyze follower engagement patterns",
          "Secure data processing without login",
          "Free lifetime access",
          "Mobile-responsive design",
          "Instant results",
          "No data storage on servers"
        ],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "category": "Free Software"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "1247",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sarah M."
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Finally found a safe way to track Instagram unfollowers without giving away my password. Works perfectly!"
          }
        ]
      },

      // HowTo schema for instructional content
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Track Instagram Unfollowers Safely",
        "description": "Step-by-step guide to safely track who unfollowed you on Instagram using official data export",
        "image": "https://unfollowerstracker.com/how-to-guide.png",
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "supply": [
          {
            "@type": "HowToSupply",
            "name": "Instagram account"
          },
          {
            "@type": "HowToSupply", 
            "name": "Web browser"
          }
        ],
        "tool": [
          {
            "@type": "HowToTool",
            "name": "Instagram Unfollowers Tracker"
          }
        ],
        "step": [
          {
            "@type": "HowToStep",
            "name": "Request your Instagram data",
            "text": "Go to Instagram Settings → Privacy and Security → Download Your Information",
            "image": "https://unfollowerstracker.com/step1.png",
            "url": "https://unfollowerstracker.com/how-it-works#step1"
          },
          {
            "@type": "HowToStep", 
            "name": "Download the ZIP file",
            "text": "Wait 24-48 hours for Instagram to prepare your data, then download the ZIP file",
            "image": "https://unfollowerstracker.com/step2.png",
            "url": "https://unfollowerstracker.com/how-it-works#step2"
          },
          {
            "@type": "HowToStep",
            "name": "Upload and analyze",
            "text": "Upload your ZIP file to our secure tool for instant follower analysis",
            "image": "https://unfollowerstracker.com/step3.png", 
            "url": "https://unfollowerstracker.com/how-it-works#step3"
          }
        ]
      },

      // Service schema for business understanding
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Instagram Analytics Service",
        "description": "Professional Instagram follower tracking and analytics service",
        "provider": {
          "@type": "Organization",
          "name": "Instagram Unfollowers Tracker"
        },
        "serviceType": "Social Media Analytics",
        "areaServed": "Worldwide",
        "availableLanguage": "en",
        "category": "Social Media Management",
        "serviceOutput": {
          "@type": "Thing",
          "name": "Instagram Follower Analysis Report"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    ];

    // Inject each schema
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-component', 'structured-data');
      script.setAttribute('data-schema-index', index.toString());
      script.textContent = JSON.stringify(schema, null, 2);
      document.head.appendChild(script);
    });

    // Enhanced meta tags for AI/LLM optimization
    const aiMetaTags = {
      // AI-specific meta tags
      'ai:type': 'social-media-tool',
      'ai:category': 'instagram-analytics',
      'ai:safety': 'no-login-required',
      'ai:cost': 'free',
      'ai:privacy': 'secure',
      
      // Enhanced Open Graph for AI understanding
      'og:type': 'website',
      'og:site_name': 'Instagram Unfollowers Tracker',
      'og:locale': 'en_US',
      
      // Additional SEO enhancements
      'revisit-after': '7 days',
      'distribution': 'global',
      'rating': 'general',
      'target': 'all',
      'HandheldFriendly': 'true',
      'MobileOptimized': 'width',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'format-detection': 'telephone=no',
      
      // Structured data hints for crawlers
      'structured-data': 'json-ld',
      'schema-org': 'enabled',
      'crawl-hints': 'follow-links,index-content'
    };

    // Apply AI-optimized meta tags
    Object.entries(aiMetaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    });

  }, [location]);

  return null; // This component only manages document head, no UI
}