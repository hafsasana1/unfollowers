import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { getSEOData, getCanonicalUrl, generateStructuredData } from '@/lib/seo-config';

// Hook to manage SEO meta tags dynamically
export const useSEO = () => {
  const [location] = useLocation();

  useEffect(() => {
    const seoData = getSEOData(location);
    const canonicalUrl = getCanonicalUrl(location);
    const structuredData = generateStructuredData(location);

    // Update title
    document.title = seoData.title;

    // Update or create meta description
    updateMetaTag('name', 'description', seoData.description);

    // Update or create meta keywords
    if (seoData.keywords) {
      updateMetaTag('name', 'keywords', seoData.keywords);
    }

    // Update Open Graph tags
    updateMetaTag('property', 'og:title', seoData.ogTitle || seoData.title);
    updateMetaTag('property', 'og:description', seoData.ogDescription || seoData.description);
    updateMetaTag('property', 'og:url', canonicalUrl);

    // Update Twitter Card tags
    updateMetaTag('name', 'twitter:title', seoData.ogTitle || seoData.title);
    updateMetaTag('name', 'twitter:description', seoData.ogDescription || seoData.description);

    // Update canonical URL
    updateCanonicalLink(canonicalUrl);

    // Update structured data
    updateStructuredData(structuredData);

    // Update robots meta
    updateMetaTag('name', 'robots', 'index, follow');

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

// Helper function to update structured data
const updateStructuredData = (data: any) => {
  // Remove existing page-specific structured data
  const existingScript = document.querySelector('script[data-page-schema="true"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-page-schema', 'true');
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Component wrapper that applies SEO to its children
export const SEOWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useSEO();
  return <>{children}</>;
};