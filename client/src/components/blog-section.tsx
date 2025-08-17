import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { mockBlogArticles } from '@/lib/mock-data';

export function BlogSection() {
  return (
    <section className="py-20 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Instagram Articles & Guides</h2>
          <p className="text-lg text-gray-600">
            Expert insights on Instagram analytics, growth strategies, and follower tracking
          </p>
          
          {/* Featured article topics */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-4 py-2">
              📈 Instagram Growth Hacks 2025
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2">
              🔍 How to See Who Unfollowed You
            </Badge>
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 px-4 py-2">
              🛡️ Safe Instagram Tracking
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBlogArticles.map((article) => (
            <article key={article.id} className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="mr-2" size={14} />
                    <span>{new Date(article.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
                    <span className="mx-2">•</span>
                    <Badge variant="secondary" className="bg-purple-600 text-white text-xs">
                      {article.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                    Read more →
                  </button>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700 transition-colors">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
