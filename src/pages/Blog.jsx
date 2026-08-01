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

  const categories = ['All', ...new Set(postsData.map(post => post.category))];

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

      <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-off-white)' }} data-section-theme="cream">
        <div className="container">

          {/* Category Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1.5rem',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-label)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  border: 'var(--border-brutal-width) solid var(--color-charcoal)',
                  backgroundColor: activeCategory === cat ? 'var(--color-gold-primary)' : 'var(--color-white)',
                  color: activeCategory === cat ? 'var(--color-charcoal)' : 'var(--color-charcoal)',
                  boxShadow: activeCategory === cat ? 'var(--shadow-brutal-gold)' : 'var(--shadow-brutal)',
                  transition: 'all 0.2s ease'
                }}
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
                  whileHover={{ y: -8, rotate: 2 }}
                  key={post.slug}
                  className="card-brutal"
                  style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  <span className="pill-badge" style={{ width: 'fit-content', marginBottom: '1.25rem', fontSize: '0.65rem' }}>
                    {post.category}
                  </span>

                  <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.35rem', color: 'var(--color-charcoal)', marginBottom: '1rem', lineHeight: 1.3 }}>
                    {post.title}
                  </h2>

                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '1rem', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)', fontWeight: 700, fontSize: '0.85rem' }}>{post.author}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-grey-text)', fontSize: '0.75rem', fontFamily: 'var(--font-label)', fontWeight: 700 }}>
                        <Calendar style={{ width: '0.85rem', height: '0.85rem', color: 'var(--color-gold-primary)' }} />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • {post.readTime}</span>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontFamily: 'var(--font-label)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-gold-dark)' }}
                    >
                      <span>Read Article</span>
                      <ChevronRight style={{ width: '1rem', height: '1rem' }} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '5rem 0' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-grey-text)' }}>No articles found in this category.</h3>
              <button
                onClick={() => setActiveCategory('All')}
                className="pill-badge"
                style={{ marginTop: '1rem' }}
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
