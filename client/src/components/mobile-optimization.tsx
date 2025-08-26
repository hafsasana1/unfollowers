import { useEffect } from 'react';

// Mobile optimization utilities
export const MobileOptimizations = () => {
  useEffect(() => {
    // Prevent zoom on input focus for iOS
    const addInputEventListeners = () => {
      const inputs = document.querySelectorAll('input, select, textarea');
      inputs.forEach(input => {
        input.addEventListener('focus', () => {
          const viewport = document.querySelector('meta[name=viewport]');
          if (viewport) {
            viewport.setAttribute('content', 
              'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
            );
          }
        });
        
        input.addEventListener('blur', () => {
          const viewport = document.querySelector('meta[name=viewport]');
          if (viewport) {
            viewport.setAttribute('content', 
              'width=device-width, initial-scale=1.0, viewport-fit=cover'
            );
          }
        });
      });
    };

    // Add passive event listeners for better performance
    const addPassiveListeners = () => {
      document.addEventListener('touchstart', () => {}, { passive: true });
      document.addEventListener('touchmove', () => {}, { passive: true });
      document.addEventListener('wheel', () => {}, { passive: true });
    };

    // Initialize optimizations
    addInputEventListeners();
    addPassiveListeners();

    // Browser detection and polyfills
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (isIOS) {
      document.body.classList.add('ios-device');
    }
    
    if (isSafari) {
      document.body.classList.add('safari-browser');
    }

    // Add CSS custom property support for older browsers
    if (!CSS.supports('color', 'var(--fake-var)')) {
      document.body.classList.add('no-css-vars');
    }

  }, []);

  return null; // This component doesn't render anything
};

// Cross-browser compatibility utilities
export const CrossBrowserUtils = {
  // Smooth scroll polyfill for older browsers
  smoothScrollTo: (element: Element) => {
    if (element.scrollIntoView) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    } else {
      // Fallback for older browsers
      element.scrollIntoView();
    }
  },

  // Intersection Observer polyfill check
  hasIntersectionObserver: () => {
    return 'IntersectionObserver' in window;
  },

  // Web Vitals optimization
  optimizeForWebVitals: () => {
    // Preload critical resources
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'style';
    preloadLink.href = '/src/index.css';
    document.head.appendChild(preloadLink);

    // Add resource hints
    const dnsPreconnect = document.createElement('link');
    dnsPreconnect.rel = 'dns-prefetch';
    dnsPreconnect.href = '//fonts.googleapis.com';
    document.head.appendChild(dnsPreconnect);
  }
};

// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.fetchStart);
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation', 'paint'] });
    }

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn('Long task detected:', entry.duration);
          }
        }
      });
      
      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // Longtask API not supported
      }
    }
  }, []);
};