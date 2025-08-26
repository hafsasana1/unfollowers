import { memo, lazy, Suspense } from 'react';

// Performance wrapper component that memoizes children
export const PerformanceWrapper = memo(({ 
  children,
  className = "",
  ...props 
}: { 
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <div className={`${className} gpu-accelerated`} {...props}>
      {children}
    </div>
  );
});

PerformanceWrapper.displayName = 'PerformanceWrapper';

// Lightweight loading component for better perceived performance
export const LoadingSkeleton = memo(() => (
  <div className="space-y-4 animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
));

LoadingSkeleton.displayName = 'LoadingSkeleton';

// Critical path component wrapper for above-the-fold content
export const CriticalContent = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <div className="will-change-transform">
      {children}
    </div>
  );
});

CriticalContent.displayName = 'CriticalContent';

// Deferred content wrapper for below-the-fold content
export const DeferredContent = memo(({ 
  children, 
  fallback = <LoadingSkeleton /> 
}: { 
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
});

DeferredContent.displayName = 'DeferredContent';