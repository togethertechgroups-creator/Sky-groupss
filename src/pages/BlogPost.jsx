import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Share2, Clock, Calendar, User } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import BreadCrumb from '../components/ui/BreadCrumb';
import StarBorder from '../components/ui/StarBorder';
import postsData from '../data/blog-posts.json';

export default function BlogPost() {
  const { slug } = useParams();

  // Find post
  const post = postsData.find(p => p.slug === slug);

  // Scroll to top on mount
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
        title={`${post.title} | Sky Groups Blog`}
        description={post.excerpt}
      />

      {/* Article Hero */}
      <section className="bg-charcoal pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="inline-block bg-gold text-white font-label text-xs uppercase tracking-widest px-4 py-1.5 rounded-sm mb-6">
            {post.category}
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-8 border-b border-white/10 pb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 font-body text-sm md:text-base">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-gold" />
              <span>{post.author}</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-border"></div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold" />
              <span>{formattedDate}</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-border"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
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

      <section className="py-16 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Article Body */}
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border border-border">
            {/* 
              Global styles for HTML content generated via string 
              We use standard tailwind typography via a wrapper class 
            */}
            <main
              className="prose prose-lg max-w-none 
                prose-headings:font-heading prose-headings:font-bold prose-headings:text-charcoal 
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
                prose-h3:text-2xl prose-h3:text-gold prose-h3:mt-8 prose-h3:mb-4
                prose-p:font-body prose-p:text-grey-text prose-p:leading-[1.8] prose-p:mb-6
                prose-a:text-gold prose-a:no-underline hover:prose-a:text-orange hover:prose-a:underline
                prose-ul:list-disc prose-ul:font-body prose-ul:text-grey-text prose-ul:pl-5
                prose-li:mb-2 marker:text-gold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-border gap-6">
            <Link
              to="/blog"
              className="font-label uppercase text-sm tracking-wider text-charcoal hover:text-gold transition-colors font-semibold"
            >
              ← Back to all articles
            </Link>

            <div className="flex gap-4">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 px-6 py-2 bg-white border border-border text-charcoal font-label text-xs uppercase tracking-widest rounded-sm hover:border-gold hover:text-gold transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Copy Link
              </button>

              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.title} - ${window.location.href}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 bg-[#25D366] text-white font-label text-xs uppercase tracking-widest rounded-sm hover:bg-[#128C7E] transition-colors"
              >
                Share on WhatsApp
              </a>
            </div>
          </div>

          {/* Related Service CTA */}
          {post.relatedService && (
            <div className="mt-16 bg-charcoal text-white p-10 rounded-sm text-center relative overflow-hidden border-t-4 border-gold">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
              <h3 className="relative z-10 font-heading font-bold text-2xl md:text-3xl mb-4">Ready to take action?</h3>
              <p className="relative z-10 font-body text-white/70 mb-8 max-w-xl mx-auto">
                Sky Groups offers professional assistance tailored exactly to this topic. Discover how we can help you achieve your goals safely and efficiently.
              </p>
              <StarBorder
                as={Link}
                to={post.relatedService}
                containerClassName="relative z-10 shadow-lg"
                className="font-label px-8 py-4 uppercase tracking-wider text-sm transition-colors"
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
