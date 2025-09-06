import { useEffect } from 'react';

interface AdSenseAdProps {
  adSlot?: string;
  adFormat?: string;
  className?: string;
  style?: React.CSSProperties;
  responsive?: boolean;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export function AdSenseAd({ 
  adSlot = "8985801241", 
  adFormat = "auto", 
  className = "",
  style = {},
  responsive = true 
}: AdSenseAdProps) {
  useEffect(() => {
    try {
      // Initialize adsbygoogle array if it doesn't exist
      if (typeof window !== 'undefined') {
        window.adsbygoogle = window.adsbygoogle || [];
        // Push the ad configuration
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error('AdSense initialization error:', error);
    }
  }, []);

  return (
    <div className={`adsense-container w-full ${className}`} style={style}>
      <ins 
        className="adsbygoogle"
        style={{ 
          display: 'block',
          width: '100%',
          textAlign: 'center'
        }}
        data-ad-client="ca-pub-6786049558167016"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive.toString()}
        data-testid="adsense-ad"
      />
    </div>
  );
}

// Component for in-article ads with better mobile spacing
export function InArticleAd({ className = "" }: { className?: string }) {
  return (
    <div className={`my-6 sm:my-8 flex justify-center ${className}`}>
      <div className="w-full max-w-4xl px-4">
        <div className="text-xs text-gray-500 text-center mb-2">Advertisement</div>
        <AdSenseAd 
          adSlot="8985801241"
          adFormat="auto"
          className="w-full"
          style={{ 
            minHeight: '250px',
            maxHeight: '300px'
          }}
        />
      </div>
    </div>
  );
}

// Component for banner ads optimized for mobile
export function BannerAd({ className = "" }: { className?: string }) {
  return (
    <div className={`py-3 sm:py-4 flex justify-center ${className}`}>
      <div className="w-full max-w-7xl px-4">
        <AdSenseAd 
          adSlot="8985801241"
          adFormat="auto"
          className="w-full"
          style={{ 
            minHeight: '80px',
            maxHeight: '120px'
          }}
        />
      </div>
    </div>
  );
}

// Component for sidebar ads with responsive behavior
export function SidebarAd({ className = "" }: { className?: string }) {
  return (
    <div className={`hidden lg:block ${className}`}>
      <AdSenseAd 
        adSlot="8985801241"
        adFormat="rectangle"
        className="w-full"
        style={{ minHeight: '250px', maxWidth: '300px' }}
      />
    </div>
  );
}