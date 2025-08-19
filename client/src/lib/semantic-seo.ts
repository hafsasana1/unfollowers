// Advanced semantic SEO utilities for search engines, LLMs, and AI Overview optimization

export interface SemanticSEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  structuredData?: any[];
  aiOptimized?: boolean;
  contentType?: 'tool' | 'article' | 'page' | 'guide';
  entities?: string[];
  topicalContext?: string[];
}

export interface AIOptimizedMetaTags {
  'ai:type': string;
  'ai:category': string;
  'ai:safety': string;
  'ai:cost': string;
  'ai:privacy': string;
  'robot-instructions': string;
  'crawl-hints': string;
  'semantic-markup': string;
  'structured-data-type': string;
}

export class SemanticSEOManager {
  // Enhanced meta tag management for AI/LLM optimization
  static applyAIOptimizedTags(config: SemanticSEOConfig): void {
    const aiTags: Partial<AIOptimizedMetaTags> = {
      'ai:type': config.contentType || 'tool',
      'ai:category': this.inferCategory(config.keywords),
      'ai:safety': this.inferSafety(config.description),
      'ai:cost': this.inferCost(config.description),
      'ai:privacy': this.inferPrivacy(config.description),
      'robot-instructions': 'index,follow,max-snippet:320,max-image-preview:large',
      'crawl-hints': 'follow-links,index-content,cache-friendly',
      'semantic-markup': 'schema-org,microdata,json-ld',
      'structured-data-type': 'comprehensive'
    };

    Object.entries(aiTags).forEach(([name, content]) => {
      if (content) {
        this.setMetaTag(name, content);
      }
    });
  }

  // Intelligent category inference for AI understanding  
  static inferCategory(keywords: string[] = []): string {
    const keywordString = (keywords || []).join(' ').toLowerCase();
    
    if (keywordString.includes('instagram') && keywordString.includes('track')) {
      return 'instagram-analytics';
    }
    if (keywordString.includes('social media')) {
      return 'social-media-tools';
    }
    if (keywordString.includes('follower')) {
      return 'follower-management';
    }
    
    return 'web-application';
  }

  // Safety classification for AI systems
  static inferSafety(description: string = ''): string {
    const desc = (description || '').toLowerCase();
    
    if (desc.includes('no login') || desc.includes('no password')) {
      return 'no-login-required';
    }
    if (desc.includes('secure') || desc.includes('safe')) {
      return 'secure';
    }
    
    return 'standard';
  }

  // Cost inference for AI understanding
  static inferCost(description: string = ''): string {
    const desc = (description || '').toLowerCase();
    
    if (desc.includes('free') || desc.includes('no cost')) {
      return 'free';
    }
    if (desc.includes('premium') || desc.includes('paid')) {
      return 'premium';
    }
    
    return 'freemium';
  }

  // Privacy classification for AI systems
  static inferPrivacy(description: string = ''): string {
    const desc = (description || '').toLowerCase();
    
    if (desc.includes('no data storage') || desc.includes('not stored')) {
      return 'no-data-storage';
    }
    if (desc.includes('private') || desc.includes('secure')) {
      return 'privacy-focused';
    }
    
    return 'standard';
  }

  // Enhanced meta tag setter with AI optimization
  private static setMetaTag(name: string, content: string): void {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    
    meta.content = content;
  }

  // Comprehensive semantic markup for content sections
  static generateContentMarkup(content: {
    heading: string;
    description: string;
    type: 'feature' | 'benefit' | 'instruction' | 'faq' | 'testimonial';
    entities?: string[];
  }): any {
    const baseMarkup = {
      "@context": "https://schema.org",
      "name": content.heading,
      "description": content.description
    };

    switch (content.type) {
      case 'feature':
        return {
          ...baseMarkup,
          "@type": "Product",
          "category": "SoftwareApplication"
        };

      case 'instruction':
        return {
          ...baseMarkup,
          "@type": "HowToStep",
          "text": content.description
        };

      case 'faq':
        return {
          ...baseMarkup,
          "@type": "Question",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": content.description
          }
        };

      case 'testimonial':
        return {
          ...baseMarkup,
          "@type": "Review",
          "reviewBody": content.description
        };

      default:
        return {
          ...baseMarkup,
          "@type": "Thing"
        };
    }
  }

  // Advanced entity recognition for topical authority
  static extractEntities(text: string): string[] {
    const instagramEntities = [
      'instagram', 'followers', 'unfollowers', 'social media',
      'analytics', 'engagement', 'growth', 'tracking',
      'ghost followers', 'inactive followers', 'mutual followers'
    ];

    const foundEntities = instagramEntities.filter(entity =>
      text.toLowerCase().includes(entity.toLowerCase())
    );

    return foundEntities;
  }

  // Enhanced Open Graph for AI systems
  static setOpenGraphTags(config: SemanticSEOConfig): void {
    const ogTags = {
      'og:title': config.title,
      'og:description': config.description,
      'og:type': 'website',
      'og:site_name': 'Instagram Unfollowers Tracker',
      'og:locale': 'en_US',
      'og:url': config.canonicalUrl || window.location.href
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      this.setOGTag(property, content);
    });
  }

  private static setOGTag(property: string, content: string): void {
    let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    
    meta.content = content;
  }

  // Generate comprehensive JSON-LD for AI understanding
  static generateJSONLD(config: SemanticSEOConfig): any {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "url": config.canonicalUrl || window.location.origin,
          "name": "Instagram Unfollowers Tracker",
          "description": config.description,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${window.location.origin}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "WebPage",
          "url": config.canonicalUrl || window.location.href,
          "name": config.title,
          "description": config.description,
          "isPartOf": {
            "@type": "WebSite",
            "name": "Instagram Unfollowers Tracker"
          },
          "about": config.entities?.map(entity => ({
            "@type": "Thing",
            "name": entity
          })) || []
        }
      ]
    };
  }
}

// Utility functions for semantic optimization
export const semanticUtils = {
  // Enhanced title optimization for AI systems
  optimizeTitle(baseTitle: string, keywords: string[]): string {
    const primaryKeyword = keywords[0];
    const brandName = "Instagram Unfollowers Tracker";
    
    if (baseTitle.includes(primaryKeyword) && baseTitle.includes(brandName)) {
      return baseTitle;
    }
    
    if (!baseTitle.includes(primaryKeyword)) {
      return `${primaryKeyword} - ${baseTitle}`;
    }
    
    if (!baseTitle.includes(brandName)) {
      return `${baseTitle} | ${brandName}`;
    }
    
    return baseTitle;
  },

  // Description optimization for AI Overview
  optimizeDescription(baseDescription: string, entities: string[]): string {
    const entityMentions = entities.slice(0, 3); // Top 3 entities
    let optimized = baseDescription;
    
    // Ensure key entities are mentioned naturally
    entityMentions.forEach(entity => {
      if (!optimized.toLowerCase().includes(entity.toLowerCase())) {
        optimized = `${optimized} Features ${entity} tracking and analysis.`;
      }
    });
    
    // Ensure call-to-action for AI systems
    if (!optimized.includes('try') && !optimized.includes('use') && !optimized.includes('start')) {
      optimized = `${optimized} Try our tool today.`;
    }
    
    return optimized.slice(0, 155); // Meta description limit
  },

  // Keyword density optimization for natural language
  optimizeKeywordDensity(content: string, targetKeywords: string[]): string {
    // Ensure 1-2% keyword density without stuffing
    const wordCount = content.split(' ').length;
    const targetDensity = 0.015; // 1.5%
    
    let optimized = content;
    
    targetKeywords.forEach(keyword => {
      const keywordCount = (content.match(new RegExp(keyword, 'gi')) || []).length;
      const currentDensity = keywordCount / wordCount;
      
      if (currentDensity < targetDensity && keywordCount === 0) {
        // Add keyword naturally if missing
        optimized = optimized.replace(
          /(\.|\!|\?)\s/,
          `$1 Our ${keyword} tool provides comprehensive insights. `
        );
      }
    });
    
    return optimized;
  }
};

// Export function for AI-optimized meta tags generation
export const generateAIOptimizedMetaTags = (config: SemanticSEOConfig | string): AIOptimizedMetaTags => {
  // Handle string input (location path) by creating a basic config
  if (typeof config === 'string') {
    const defaultConfig: SemanticSEOConfig = {
      title: 'Instagram Unfollowers Tracker',
      description: 'Free and secure Instagram analytics tool',
      keywords: ['instagram', 'unfollowers', 'tracker'],
      contentType: 'tool'
    };
    return generateAIOptimizedMetaTags(defaultConfig);
  }

  return {
    'ai:type': config.contentType || 'tool',
    'ai:category': SemanticSEOManager.inferCategory(config.keywords || []),
    'ai:safety': SemanticSEOManager.inferSafety(config.description || ''),
    'ai:cost': SemanticSEOManager.inferCost(config.description || ''),
    'ai:privacy': SemanticSEOManager.inferPrivacy(config.description || ''),
    'robot-instructions': 'index,follow,max-snippet:320,max-image-preview:large',
    'crawl-hints': 'follow-links,index-content,cache-friendly',
    'semantic-markup': 'schema-org,microdata,json-ld',
    'structured-data-type': 'comprehensive'
  };
};

// Export function for AI Overview schema generation
export const generateAIOverviewSchema = (config: SemanticSEOConfig): any => {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": config.title,
    "applicationCategory": "SocialNetworkingApplication",
    "operatingSystem": "Web Browser",
    "description": config.description,
    "url": config.canonicalUrl || window.location.href,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": config.keywords,
    "mainEntity": {
      "@type": "Thing",
      "name": "Instagram Analytics",
      "description": "Tools for tracking Instagram followers and engagement"
    }
  };
};

// Export FAQ schema generator
export const generateFAQSchema = (faqs: {question: string, answer: string}[] = []): any => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (faqs || []).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Export breadcrumb schema generator
export const generateBreadcrumbSchema = (breadcrumbs: {name: string, url: string}[] = []): any => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": (breadcrumbs || []).map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

// Export organization schema generator
export const generateOrganizationSchema = (): any => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Instagram Unfollowers Tracker",
    "url": "https://unfollowerstracker.com",
    "logo": "https://unfollowerstracker.com/favicon.svg",
    "sameAs": [
      "https://twitter.com/unfollowerstracker",
      "https://instagram.com/unfollowerstracker"
    ]
  };
};

// Export semantic SEO pages configuration
export const semanticSEOPages = [
  {
    path: '/',
    title: 'Instagram Unfollowers Tracker – See Who Unfollowed You?',
    description: 'Free and secure Instagram analytics tool for tracking unfollowers, ghost followers, and engagement insights',
    keywords: ['instagram unfollowers tracker', 'instagram analytics', 'social media tools'],
    contentType: 'tool' as const
  },
  {
    path: '/unfollowers-tracker',
    title: 'Instagram Unfollowers Tracker Tool',
    description: 'Track who unfollowed you on Instagram safely without login',
    keywords: ['unfollowers tracker', 'instagram tracking'],
    contentType: 'tool' as const
  }
];

export default SemanticSEOManager;