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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Instagram Growth & Tracking Guides</h2>
          <p className="text-lg text-gray-600">
            Expert guides and tips for Instagram analytics and follower growth
          </p>
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
