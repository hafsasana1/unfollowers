import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { mockBlogArticles } from '@/lib/mock-data';
import { Link } from 'wouter';

export function BlogSection() {
  return (
    <section className="py-10 bg-white" id="blog">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Latest Articles & Guides</h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Expert insights on Instagram analytics and follower tracking
          </p>
          
          {/* Featured article topics */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-xs">
              📈 Growth Hacks 2025
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 text-xs">
              🔍 Track Unfollowers
            </Badge>
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 px-3 py-1 text-xs">
              🛡️ Safe Tracking
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBlogArticles.map((article) => (
            <article key={article.id} className="group">
              <Link href={`/${article.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardContent className="p-5">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <Calendar className="mr-1" size={12} />
                      <span>{new Date(article.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}</span>
                      <span className="mx-2">•</span>
                      <Badge variant="secondary" className="bg-purple-600 text-white text-xs px-2 py-0">
                        {article.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">{article.excerpt}</p>
                    
                    <span className="text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors">
                      Read more →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/blog">
            <Button size="sm" className="bg-purple-600 text-white hover:bg-purple-700 transition-colors px-6 py-2">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
