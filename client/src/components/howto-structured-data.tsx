import { useEffect } from 'react';

interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToStructuredDataProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
  supply?: string[];
  tool?: string[];
}

/**
 * HowTo Structured Data Component
 * Adds HowTo schema markup for step-by-step guides
 */
export const HowToStructuredData = ({
  name,
  description,
  steps,
  totalTime = "PT10M",
  supply = [],
  tool = []
}: HowToStructuredDataProps) => {
  useEffect(() => {
    // Generate HowTo structured data
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": name,
      "description": description,
      "totalTime": totalTime,
      "supply": supply,
      "tool": tool,
      "step": steps.map((step, index) => ({
        "@type": "HowToStep",
        "name": step.name,
        "text": step.text,
        "position": index + 1,
        ...(step.image && {
          "image": {
            "@type": "ImageObject",
            "url": step.image
          }
        })
      }))
    };

    // Add HowTo schema to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-howto-schema', 'true');
    script.textContent = JSON.stringify(howToSchema, null, 2);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[data-howto-schema="true"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [name, description, steps, totalTime, supply, tool]);

  return null; // This component only manages structured data
};

export default HowToStructuredData;