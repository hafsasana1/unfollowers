import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, MessageCircle, Clock, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'unfollowerstracker2024@gmail.com',
      color: 'blue'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available 9 AM - 6 PM EST',
      color: 'green'
    },
    {
      icon: Clock,
      title: 'Response Time',
      description: 'Average response time for all inquiries',
      contact: 'Within 24 hours',
      color: 'purple'
    }
  ];

  const faqs = [
    {
      question: 'How quickly will I get a response?',
      answer: 'We typically respond to all inquiries within 24 hours. For urgent issues, please mark your message as high priority.'
    },
    {
      question: 'Can you help with technical issues?',
      answer: 'Absolutely! Our support team can help with file upload issues, browser compatibility, and any technical problems you encounter.'
    },
    {
      question: 'Do you offer custom enterprise solutions?',
      answer: 'Yes, we offer custom solutions for businesses and enterprises. Contact us to discuss your specific requirements.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumbs */}
      <section className="bg-white py-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Contact Us', current: true }
          ]} />
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white opacity-10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4 px-3 py-1 text-sm">
            Get In Touch
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            We're Here to
            <span className="block text-yellow-300">Help You</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-100 mb-6 max-w-3xl mx-auto leading-relaxed">
            Have questions about our Instagram analytics tool? Need technical support? 
            Our friendly team is ready to assist you with anything you need.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-${method.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className={`text-${method.color}-600`} size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                  <p className="font-semibold text-gray-900 text-sm">{method.contact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="bug-report">Bug Report</option>
                      <option value="feature-request">Feature Request</option>
                      <option value="business-inquiry">Business Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                      placeholder="Please describe your inquiry in detail..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="mr-2" size={18} />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & FAQs */}
            <div className="space-y-8">
              {/* Contact Info */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-blue-600" size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">unfollowerstracker2024@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="text-green-600" size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Response Time</p>
                        <p className="text-gray-600">Within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-purple-600" size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Location</p>
                        <p className="text-gray-600">Global Support Team</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick FAQs */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Answers</h3>
                  
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-l-4 border-purple-200 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
            <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              We're Here to Help!
            </h2>
            <p className="text-gray-600 mb-6">
              Our support team is dedicated to ensuring you have the best experience with our Instagram analytics tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700">
                <Mail className="mr-2" size={16} />
                Email Support
              </Button>
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                <MessageCircle className="mr-2" size={16} />
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}