import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { Home as HomeIcon } from 'lucide-react';
import StarBorder from '../components/ui/StarBorder';

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-off-white)', textAlign: 'center', padding: '1rem' }} data-section-theme="cream">
      <SEOHead title="404 — Page Not Found | SKY Groups" />

      <div className="card-brutal" style={{ maxWidth: '32rem', width: '100%', padding: '3rem 2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '6rem', color: 'var(--color-gold-primary)', lineHeight: 1, marginBottom: '0.5rem' }}>404</h1>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2rem', color: 'var(--color-charcoal)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Page Not Found</h2>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          We're sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <StarBorder
          as={Link}
          to="/"
          style={{ padding: '0.85rem 2rem' }}
        >
          <HomeIcon style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
          Back to Homepage
        </StarBorder>
      </div>
    </div>
  );
}
