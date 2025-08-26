import { Suspense, lazy, useState, useEffect, useRef, ComponentType } from 'react';

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="loading-spinner"></div>
  </div>
);

// Higher-order component for lazy loading with error boundary
export const withLazyLoading = <T extends object>(
  importFunc: () => Promise<{ default: ComponentType<T> }>,
  fallback: ComponentType = LoadingSpinner
) => {
  const LazyComponent = lazy(importFunc);
  const FallbackComponent = fallback;
  
  return (props: T) => (
    <Suspense fallback={<FallbackComponent />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Intersection Observer hook for lazy loading content
export const useIntersectionObserver = (
  targetRef: React.RefObject<Element>,
  threshold = 0.1
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, [targetRef, threshold]);

  return isIntersecting;
};

// Lazy image component with loading states
export const LazyImage = ({ 
  src, 
  alt, 
  className = "",
  ...props 
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const isVisible = useIntersectionObserver(imgRef);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {isVisible && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          decoding="async"
          {...props}
        />
      )}
      {!loaded && !error && isVisible && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
};