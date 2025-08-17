import { Header } from '@/components/header';
import { StatsDashboard } from '@/components/stats-dashboard';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'wouter';

export default function Results() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with back button */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="mr-2" size={16} />
                  Back to Home
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Analysis Results</h1>
                <p className="text-gray-600">Your Instagram followers analysis</p>
              </div>
            </div>
            
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Download className="mr-2" size={16} />
              Export Report
            </Button>
          </div>
          
          {/* Results Dashboard */}
          <StatsDashboard />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
