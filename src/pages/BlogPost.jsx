import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Share2, Clock, Calendar, User } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import BreadCrumb from '../components/ui/BreadCrumb';
import StarBorder from '../components/ui/StarBorder';
import postsData from '../data/blog-posts.json';

export default function BlogPost() {
  const { slug } = useParams();

  const post = postsData.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });

  return (
    <>
      <SEOHead
        title={`${post.title} | SKY A Groups Blog`}
        description={post.excerpt}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "author": { "@type": "Person", "name": "S.S. Ponnarasan" },
          "publisher": {
            "@type": "Organization",
            "name": "SKY A Groups",
            "logo": "https://www.skygroupss.in/logo.png"
          },
          "datePublished": post.date,
          "dateModified": post.date,
          "description": post.excerpt,
          "url": `https://www.skygroupss.in/blog/${post.slug}`
        }}
      />

      {/* Article Hero */}
      <section style={{ backgroundColor: 'var(--color-charcoal)', paddingTop: '8rem', paddingBottom: '4rem', paddingLeft: '1rem', paddingRight: '1rem', color: 'var(--color-white)' }} data-section-theme="dark">
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <span className="pill-badge" style={{ marginBottom: '1.5rem' }}>
            {post.category}
          </span>
          <h1 className="text-hero" style={{ color: 'var(--color-white)', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem', textTransform: 'uppercase' }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <User style={{ width: '1rem', height: '1rem', color: 'var(--color-gold-primary)' }} />
              <span>{post.author}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar style={{ width: '1rem', height: '1rem', color: 'var(--color-gold-primary)' }} />
              <span>{formattedDate}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock style={{ width: '1rem', height: '1rem', color: 'var(--color-gold-primary)' }} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <BreadCrumb
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog', path: '/blog' },
          { label: post.title, path: `/blog/${post.slug}` }
        ]}
      />

      <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-off-white)' }} data-section-theme="cream">
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Article Body */}
          <div className="card-brutal" style={{ padding: '2.5rem' }}>
            <main
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-grey-text)',
                fontSize: '1.1rem',
                lineHeight: 1.8
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid var(--color-border)', gap: '1.5rem' }}>
            <Link
              to="/blog"
              className="pill-badge"
            >
              ← Back to all articles
            </Link>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={handleCopyLink}
                className="pill-badge"
                style={{ cursor: 'pointer' }}
              >
                <Share2 style={{ width: '1rem', height: '1rem' }} />
                Copy Link
              </button>

              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.title} - ${window.location.href}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-badge"
                style={{ backgroundColor: '#25D366', borderColor: '#25D366', color: '#ffffff' }}
              >
                Share on WhatsApp
              </a>
            </div>
          </div>

          {/* Related Service CTA */}
          {post.relatedService && (
            <div className="card-brutal-gold" style={{ marginTop: '4rem', padding: '2.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.75rem', color: 'var(--color-gold-light)', marginBottom: '1rem', textTransform: 'uppercase' }}>Ready to take action?</h3>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', maxWidth: '36rem', margin: '0 auto 2rem auto' }}>
                SKY Groups offers professional assistance tailored exactly to this topic. Discover how we can help you achieve your goals safely and efficiently.
              </p>
              <StarBorder
                as={Link}
                to={post.relatedService}
                style={{ padding: '0.85rem 2rem' }}
              >
                Explore Related Service
              </StarBorder>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
