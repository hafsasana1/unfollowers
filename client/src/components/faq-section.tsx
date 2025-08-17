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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Instagram Unfollowers Tracker FAQ</h2>
          <p className="text-lg text-gray-600">Get answers to the most common questions about tracking Instagram unfollowers and followers</p>
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
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Still have questions about Instagram unfollower tracking?</h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you understand how to safely track your Instagram followers and unfollowers.
            </p>
            <a 
              href="mailto:support@unfollowerstracker.com" 
              className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors shadow-lg"
              data-testid="link-contact-support"
            >
              <Mail className="mr-2" size={16} />
              Get Expert Help
            </a>
            <div className="mt-4 text-sm text-gray-500">
              Usually respond within 24 hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
