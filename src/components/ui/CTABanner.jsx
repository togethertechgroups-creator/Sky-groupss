import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StarBorder from './StarBorder';

export default function CTABanner({ heading, subtext, ctaText, ctaLink }) {
  return (
    <section 
      style={{
        position: 'relative',
        width: '100%',
        padding: '5rem 1.5rem',
        backgroundColor: 'var(--color-charcoal)',
        color: 'var(--color-white)',
        borderTop: 'var(--border-brutal-width) solid var(--color-gold-primary)',
        borderBottom: 'var(--border-brutal-width) solid var(--color-gold-primary)',
        overflow: 'hidden',
        margin: '3rem 0'
      }}
      data-section-theme="dark"
    >
      {/* Decorative floating particle nodes */}
      <div className="animate-float-up" style={{ position: 'absolute', top: '2rem', right: '4rem', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-gold-primary)' }}></div>
      <div className="animate-float-up" style={{ position: 'absolute', bottom: '2rem', left: '4rem', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-accent-orange)', animationDelay: '1s' }}></div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}
        >
          <span className="pill-badge">SKY GROUPS</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-section-title"
          style={{ textTransform: 'uppercase', color: 'var(--color-white)', marginBottom: '1.5rem', textShadow: '3px 3px 0px rgba(0,0,0,0.8)' }}
        >
          {heading}
        </motion.h2>
        
        {subtext && (
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '2.5rem',
              maxWidth: '42rem',
              margin: '0 auto 2.5rem auto'
            }}
          >
            {subtext}
          </motion.p>
        )}
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ display: 'inline-block' }}
        >
          <StarBorder 
            as={Link}
            to={ctaLink} 
            style={{ padding: '1rem 2.5rem', fontSize: '0.9rem' }}
          >
            {ctaText}
          </StarBorder>
        </motion.div>
      </div>
    </section>
  );
}
