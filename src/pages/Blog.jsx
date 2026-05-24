import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import HeroSection from '../components/ui/HeroSection';
import BreadCrumb from '../components/ui/BreadCrumb';
import postsData from '../data/blog-posts.json';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories
  const categories = ['All', ...new Set(postsData.map(post => post.category))];

  // Filter posts
  const filteredPosts = activeCategory === 'All'
    ? postsData
    : postsData.filter(post => post.category === activeCategory);

  return (
    <>
      <SEOHead
        title="Blog | Property & Business Tips | SKY A Groups"
        description="Expert insights from SKY A Groups on property, construction, event planning, vehicle sales and web design for Tamil Nadu businesses."
      />

      <HeroSection
        heading="Insights & Resources"
        subheading="Expert advice, market trends, and actionable tips for your business and personal growth."
        bgImage="https://picsum.photos/1920/1080?random=50"
        fullHeight={false}
      />

      <BreadCrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'Blog', path: '/blog' }]} />

      <section className="py-16 bg-off-white min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3.5 mb-14 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-label text-xs uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 font-bold ${activeCategory === cat
                    ? 'bg-gradient-to-r from-gold to-orange text-white shadow-[0_8px_20px_rgba(212,160,23,0.22)] border border-transparent'
                    : 'bg-glass border border-gold/15 text-charcoal/80 hover:border-gold/45 hover:text-gold shadow-sm'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  key={post.slug}
                  className="bg-gradient-to-br from-white/95 to-champagne-gold/25 p-8 rounded-2xl transition-all duration-500 relative group overflow-hidden flex flex-col h-full border border-gold/15 hover:border-gold/35 shadow-[0_10px_30px_-15px_rgba(160,120,16,0.06)] hover:shadow-[0_20px_50px_rgba(212,160,23,0.18)] cursor-pointer"
                >
                  {/* Luxury Metallic Glare Sweep Overlay */}
                  <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none z-20"></div>

                  {/* Dynamic Gold Gradient Border Accent */}
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-gold via-gold-light to-gold-dark transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out origin-top z-10"></div>

                  <span className="bg-gold/10 text-gold border border-gold/25 font-label text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit mb-5 relative z-10 transition-colors duration-300 group-hover:bg-gold/20">
                    {post.category}
                  </span>

                  <h2 className="font-heading font-bold text-2xl text-charcoal mb-4 group-hover:text-gold transition-colors line-clamp-2 relative z-10 leading-snug">
                    {post.title}
                  </h2>

                  <p className="font-body text-grey-text mb-6 flex-grow line-clamp-3 relative z-10 leading-relaxed group-hover:text-charcoal transition-colors">
                    {post.excerpt}
                  </p>

                  <div className="flex justify-between items-center border-t border-gold/10 group-hover:border-gold/20 pt-4 mt-auto transition-colors duration-500 relative z-10">
                    <div className="flex flex-col">
                      <span className="font-body text-charcoal font-bold text-sm">{post.author}</span>
                      <div className="flex items-center gap-1.5 text-grey-text/70 text-[10px] md:text-xs font-bold font-label uppercase tracking-wider mt-0.5">
                        <Calendar className="w-3.5 h-3.5 text-gold" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • {post.readTime}</span>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center font-label text-xs uppercase tracking-widest text-gold group-hover:text-orange transition-colors font-bold"
                    >
                      <span>Read Article</span>
                      <div className="ml-2 w-5 h-5 rounded-full bg-gold/5 group-hover:bg-gold/10 flex items-center justify-center transition-colors">
                        <ChevronRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-0.5 group-hover:text-orange transition-all" />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="font-heading text-xl text-grey-text">No articles found in this category.</h3>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-4 text-gold border-b border-gold font-label uppercase text-sm tracking-wider"
              >
                Clear Filter
              </button>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
