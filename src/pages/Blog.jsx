import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
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
          <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-label text-xs uppercase tracking-widest px-6 py-2 rounded-full transition-colors ${activeCategory === cat
                    ? 'bg-gold text-white shadow-md'
                    : 'bg-white text-grey-text border border-border hover:border-gold hover:text-gold'
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
            <AnimatePresence>
              {filteredPosts.map((post) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={post.slug}
                  className="bg-white border border-border p-8 rounded-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col h-full border-t-4 hover:border-t-gold"
                >
                  <span className="bg-gold/10 text-gold font-label text-xs uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">
                    {post.category}
                  </span>

                  <h2 className="font-heading font-bold text-2xl text-charcoal mb-4 group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="font-body text-grey-text mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex justify-between items-center border-t border-border pt-4 mt-auto">
                    <div className="flex flex-col">
                      <span className="font-body text-charcoal font-semibold text-sm">{post.author}</span>
                      <span className="font-body text-grey-text/70 text-xs">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • {post.readTime}
                      </span>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="font-label text-gold text-sm tracking-wider uppercase font-semibold group-hover:text-orange transition-colors"
                    >
                      Read Article →
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
