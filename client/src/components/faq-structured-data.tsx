import { useEffect } from 'react';
import { mockFAQs } from '@/lib/mock-data';

/**
 * FAQ Structured Data Component
 * Adds FAQPage schema markup to improve search result rich snippets
 */
export const FAQStructuredData = () => {
  useEffect(() => {
    // Generate FAQ structured data
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": mockFAQs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Add FAQ schema to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-faq-schema', 'true');
    script.textContent = JSON.stringify(faqSchema, null, 2);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[data-faq-schema="true"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component only manages structured data
};

export default FAQStructuredData;