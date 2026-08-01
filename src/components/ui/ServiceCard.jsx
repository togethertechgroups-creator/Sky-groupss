import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

export default function ServiceCard({ icon, name, shortDesc, slug, index = 0 }) {
  const LucideIcon = Icons[icon] || Icons.HelpCircle;
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <motion.div 
      className="service-card"
      whileHover={{ y: -8, rotate: index % 2 === 0 ? -2 : 2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Floating Index */}
      <span 
        style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.25rem',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '2.25rem',
          fontStyle: 'italic',
          color: 'var(--color-gold-primary)',
          opacity: 0.25,
          userSelect: 'none'
        }}
      >
        {formattedIndex}
      </span>

      {/* Icon Frame */}
      <div className="service-icon-box">
        <LucideIcon style={{ width: '2rem', height: '2rem' }} />
      </div>
      
      {/* Content */}
      <h3 className="service-title">
        {name}
      </h3>
      
      <p className="service-desc">
        {shortDesc}
      </p>
      
      {/* CTA Link */}
      <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
        <Link 
          to={slug}
          className="service-link"
        >
          <span>Learn More</span>
          <Icons.ChevronRight style={{ width: '1rem', height: '1rem' }} />
        </Link>
      </div>
    </motion.div>
  );
}
