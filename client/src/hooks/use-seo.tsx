import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { getSEOData, getCanonicalUrl, generateStructuredData } from '@/lib/seo-config';

// Simplified SEO hook to manage meta tags dynamically
export const useSEO = () => {
  const [location] = useLocation();

  useEffect(() => {
    try {
      const seoData = getSEOData(location);
      const canonicalUrl = getCanonicalUrl(location);

      // Update title
      document.title = seoData.title;

      // Update canonical URL
      updateCanonicalLink(canonicalUrl);

      // Basic structured data
      const structuredData = generateStructuredData(location);
      updateStructuredData(structuredData, 'page');

      // Enhanced Open Graph meta tags
      const enhancedOGTags = {
        'og:title': seoData.title,
        'og:description': seoData.description,
        'og:type': 'website',
        'og:site_name': 'Instagram Unfollowers Tracker',
        'og:locale': 'en_US',
        'og:url': canonicalUrl,
      };

      Object.entries(enhancedOGTags).forEach(([property, content]) => {
        updateMetaTag('property', property, content);
      });

      // Basic AI-optimized meta tags
      const aiTags = {
        'ai:type': 'tool',
        'ai:category': 'instagram-analytics',
        'ai:safety': 'no-login-required',
        'ai:cost': 'free',
        'robot-instructions': 'index,follow,max-snippet:320,max-image-preview:large',
        'crawl-hints': 'follow-links,index-content'
      };

      Object.entries(aiTags).forEach(([name, content]) => {
        updateMetaTag('name', name, content);
      });

    } catch (error) {
      console.warn('SEO optimization failed:', error);
    }
  }, [location]);
};

// Helper function to update or create meta tags
const updateMetaTag = (attribute: string, value: string, content: string) => {
  let meta = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement;
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, value);
    document.head.appendChild(meta);
  }
  
  meta.content = content;
};

// Helper function to update canonical link
const updateCanonicalLink = (href: string) => {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  
  canonical.href = href;
};

// Enhanced helper function to update structured data with multiple schemas
const updateStructuredData = (data: any, schemaType: string = 'page') => {
  // Remove existing schema of this type
  const existingScript = document.querySelector(`script[data-schema-type="${schemaType}"]`);
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data with proper formatting for AI/LLM consumption
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-schema-type', schemaType);
  script.textContent = JSON.stringify(data, null, 2); // Pretty formatting for better parsing
  document.head.appendChild(script);
};

// Component wrapper that applies SEO to its children
export const SEOWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useSEO();
  return <>{children}</>;
};