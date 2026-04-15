import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { Home as HomeIcon } from 'lucide-react';
import StarBorder from '../components/ui/StarBorder';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-off-white text-center px-4">
      <SEOHead title="404 — Page Not Found | SKY Groups" />

      <div className="max-w-md w-full animate-in fade-in zoom-in duration-500">
        <h1 className="font-display font-bold text-9xl text-gold mb-2">404</h1>
        <h2 className="font-heading font-bold text-3xl text-charcoal mb-6">Page Not Found</h2>
        <p className="font-body text-grey-text mb-8 text-lg">
          We're sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <StarBorder
          as={Link}
          to="/"
          containerClassName="shadow-xl"
          className="font-label px-8 py-4 uppercase tracking-wider text-sm transition-colors gap-2"
        >
          <HomeIcon className="w-4 h-4" />
          Back to Homepage
        </StarBorder>
      </div>
    </div>
  );
}
