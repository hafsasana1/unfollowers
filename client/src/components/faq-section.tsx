import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, Mail } from 'lucide-react';
import { mockFAQs } from '@/lib/mock-data';

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Get answers to common questions about our Instagram followers tracker</p>
        </div>
        
        <div className="space-y-6">
          {mockFAQs.map((faq) => (
            <Card key={faq.id} className="overflow-hidden shadow-lg">
              <button 
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`text-gray-400 transition-transform flex-shrink-0 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              
              {openFAQ === faq.id && (
                <CardContent className="px-8 pb-6">
                  <div className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Have another question?</p>
          <a 
            href="mailto:unfollowerstracker2024@gmail.com" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
          >
            <Mail className="mr-2" size={16} />
            Contact us by email
          </a>
        </div>
      </div>
    </section>
  );
}
