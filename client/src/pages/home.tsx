import { useState } from 'react';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { FileUpload } from '@/components/file-upload';
import { StatsDashboard } from '@/components/stats-dashboard';
import { HowItWorks } from '@/components/how-it-works';
import { Features } from '@/components/features';
import { BlogSection } from '@/components/blog-section';
import { FAQSection } from '@/components/faq-section';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Rocket, HelpCircle } from 'lucide-react';

export default function Home() {
  const [hasUploadedFile, setHasUploadedFile] = useState(false);

  const handleFileUploaded = (file: File) => {
    setHasUploadedFile(true);
    // Scroll to results section
    setTimeout(() => {
      const resultsSection = document.getElementById('results');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1000);
  };

  const scrollToUpload = () => {
    const element = document.getElementById('upload');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FileUpload onFileUploaded={handleFileUploaded} />
        
        {/* Show results dashboard after file upload */}
        {hasUploadedFile && <StatsDashboard />}
        
        <HowItWorks />
        <Features />
        <BlogSection />
        <FAQSection />
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 relative overflow-hidden">
          {/* Floating elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-white opacity-5 rounded-full animate-float"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Discover Your Instagram Insights?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Don't wait any longer to find out who doesn't follow you back on Instagram. 
              Our free tool is ready to help you manage your follower list effectively.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={scrollToUpload}
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                <Rocket className="mr-2" size={20} />
                Start Analysis Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToHowItWorks}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all bg-transparent"
              >
                <HelpCircle className="mr-2" size={20} />
                Learn More
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>No signup required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>100% free forever</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Instant results</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
