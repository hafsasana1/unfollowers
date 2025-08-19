import { useState } from 'react';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { FileUpload } from '@/components/file-upload';
import { StatsDashboard } from '@/components/stats-dashboard';
import { LiveDemo } from '@/components/live-demo';
import { SocialProof } from '@/components/social-proof';
import { SEOContent } from '@/components/seo-content';
import { HowItWorks } from '@/components/how-it-works';
import { Features } from '@/components/features';
import { WhyUseOurTool } from '@/components/why-use-our-tool';
import { BlogSection } from '@/components/blog-section';
import { FAQSection } from '@/components/faq-section';
import { Footer } from '@/components/footer';
import { SEOStructuredData } from '@/components/seo-structured-data';
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
      <SEOStructuredData />
      <Header />
      <main role="main">
        <HeroSection />
        <section id="upload" aria-labelledby="upload-heading">
          <h2 id="upload-heading" className="sr-only">Upload Instagram Data</h2>
          <FileUpload onFileUploaded={handleFileUploaded} />
        </section>
        
        {/* Show results dashboard after file upload */}
        {hasUploadedFile && (
          <section id="results" aria-labelledby="results-heading">
            <h2 id="results-heading" className="sr-only">Analysis Results</h2>
            <StatsDashboard />
          </section>
        )}
        
        <section id="demo" aria-labelledby="demo-heading">
          <h2 id="demo-heading" className="sr-only">Live Demo</h2>
          <LiveDemo />
        </section>
        
        <section id="how-it-works" aria-labelledby="how-it-works-heading">
          <HowItWorks />
        </section>
        
        <section id="why-choose-us" aria-labelledby="why-choose-heading">
          <WhyUseOurTool />
        </section>
        
        <section id="features" aria-labelledby="features-heading">
          <Features />
        </section>
        
        <section id="social-proof" aria-labelledby="social-proof-heading">
          <h2 id="social-proof-heading" className="sr-only">User Reviews and Testimonials</h2>
          <SocialProof />
        </section>
        
        <section id="blog" aria-labelledby="blog-heading">
          <BlogSection />
        </section>
        
        <section id="seo-content" aria-labelledby="seo-content-heading">
          <h2 id="seo-content-heading" className="sr-only">Instagram Analytics Information</h2>
          <SEOContent />
        </section>
        
        <section id="faq" aria-labelledby="faq-heading">
          <FAQSection />
        </section>
        
        {/* CTA Section */}
        <section className="py-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 relative overflow-hidden" aria-labelledby="cta-heading">
          {/* Floating elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-24 h-24 bg-white opacity-5 rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-20 w-20 h-20 bg-white opacity-5 rounded-full animate-float"></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white opacity-5 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Discover Your Instagram Insights?
            </h2>
            <p className="text-base sm:text-lg text-gray-100 mb-6 max-w-xl mx-auto">
              Find out who doesn't follow you back and manage your follower list effectively
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                size="lg"
                onClick={scrollToUpload}
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold text-base hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                <Rocket className="mr-2" size={16} />
                Start Analysis Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToHowItWorks}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium text-base hover:bg-white hover:text-purple-600 transition-all bg-transparent"
              >
                <HelpCircle className="mr-2" size={16} />
                Learn More
              </Button>
            </div>
            
            <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-white/90 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span>No signup required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span>100% free forever</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white rounded-full"></span>
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
