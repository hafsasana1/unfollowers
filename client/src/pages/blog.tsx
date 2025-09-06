import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BannerAd, InArticleAd } from '@/components/adsense-ad';
import { Calendar, Clock, User } from 'lucide-react';
import { mockBlogArticles } from '@/lib/mock-data';
import { Link } from 'wouter';

export default function BlogPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <head>
        <title>Instagram Tracker Blog – Unfollowers, Ghosts & Growth Tips</title>
        <meta name="description" content="Read the latest on Instagram unfollowers, ghost & inactive trackers, and growth strategies. Tips, insights, and guides to manage and grow your Instagram." />
        <meta name="keywords" content="Instagram blog, follower tracking guides, Instagram analytics tips, unfollowers tracking, Instagram growth" />
        <link rel="canonical" href="/blog" />
        <meta property="og:title" content="Instagram Tracker Blog – Unfollowers, Ghosts & Growth Tips" />
        <meta property="og:description" content="Read the latest on Instagram unfollowers, ghost & inactive trackers, and growth strategies. Tips, insights, and guides to manage and grow your Instagram." />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="/blog" />
      </head>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Instagram Analytics Blog
              </h1>
              <p className="text-lg sm:text-xl text-gray-100 mb-6 max-w-3xl mx-auto">
                Expert insights, tips, and guides to help you master Instagram follower tracking and analytics
              </p>
              
              {/* Topic Tags */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm">
                  📈 Growth Strategies
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm">
                  🔍 Unfollower Tracking
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm">
                  🛡️ Privacy & Safety
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm">
                  📊 Analytics Tools
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-gray-50 py-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </section>

        {/* High-visibility banner ad after hero */}
        <BannerAd className="bg-white" />

        {/* Blog Articles */}
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Latest Articles & Guides
              </h2>
              <p className="text-lg text-gray-600">
                Stay updated with the latest Instagram analytics strategies and tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockBlogArticles.map((article, index) => (
                <article key={article.id} className="group">
                  <Link href={`/${article.slug}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-md">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={article.imageUrl} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Calendar className="mr-2" size={14} />
                            <span>{new Date(article.publishDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}</span>
                          </div>
                          <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
                            {article.category}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors leading-tight">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="mr-2" size={14} />
                            <span>5 min read</span>
                          </div>
                          <span className="text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                            Read Article →
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                  
                  {/* Add strategic ad after every 3rd article */}
                  {(index + 1) % 3 === 0 && (
                    <div className="col-span-full my-6">
                      <InArticleAd />
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* Load More Section */}
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                More articles coming soon! Subscribe to stay updated.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Subscribe to Updates
                  </button>
                </Link>
                <Link href="/">
                  <button className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
                    ← Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final engagement ad before footer */}
        <InArticleAd className="bg-gray-50" />
      </main>

      <Footer />
    </div>
  );
}