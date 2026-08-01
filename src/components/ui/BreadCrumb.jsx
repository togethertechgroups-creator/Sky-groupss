import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function BreadCrumb({ crumbs }) {
  return (
    <nav style={{ padding: '1rem 1.5rem', fontFamily: 'var(--font-label)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-grey-text)', maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
      <ol style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', listStyle: 'none' }}>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          
          return (
            <li key={index} style={{ display: 'inline-flex', alignItems: 'center' }}>
              {isLast ? (
                <span style={{ color: 'var(--color-gold-primary)', fontWeight: 700 }}>{crumb.label}</span>
              ) : (
                <>
                  <Link 
                    to={crumb.path} 
                    style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--color-charcoal)', fontWeight: 700, transition: 'color 0.2s' }}
                  >
                    {crumb.label}
                  </Link>
                  <ChevronRight style={{ width: '1rem', height: '1rem', margin: '0 0.25rem', color: 'var(--color-gold-primary)' }} />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
