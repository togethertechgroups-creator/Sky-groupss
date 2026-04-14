import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function BreadCrumb({ crumbs }) {
  return (
    <nav className="flex px-4 py-4 md:px-8 text-sm font-label uppercase tracking-wider text-grey-text max-w-7xl mx-auto w-full">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          
          return (
            <li key={index} className="inline-flex items-center">
              {isLast ? (
                <span className="text-gold font-bold">{crumb.label}</span>
              ) : (
                <>
                  <Link 
                    to={crumb.path} 
                    className="inline-flex items-center hover:text-gold transition-colors"
                  >
                    {crumb.label}
                  </Link>
                  <ChevronRight className="w-4 h-4 mx-2 text-border" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
