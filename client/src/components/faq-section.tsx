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
    <section className="py-16 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">Common questions about tracking Instagram unfollowers and followers</p>
        </div>
        
        <div className="space-y-4">
          {mockFAQs.map((faq) => (
            <Card key={faq.id} className="overflow-hidden shadow-sm">
              <button 
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3 className="text-base font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`text-gray-400 transition-transform flex-shrink-0 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}
                  size={18}
                />
              </button>
              
              {openFAQ === faq.id && (
                <CardContent className="px-6 pb-4">
                  <div className="text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Still have questions?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Our team is here to help you understand how to safely track your Instagram followers.
            </p>
            <a 
              href="mailto:support@unfollowerstracker.com" 
              className="inline-flex items-center bg-purple-600 text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-purple-700 transition-colors"
              data-testid="link-contact-support"
            >
              <Mail className="mr-2" size={14} />
              Get Expert Help
            </a>
            <div className="mt-3 text-xs text-gray-500">
              Usually respond within 24 hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
