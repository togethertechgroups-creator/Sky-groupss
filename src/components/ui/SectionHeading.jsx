import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, prefix, centered = false, light = false }) {
  return (
    <div style={{ marginBottom: '3rem', textAlign: centered ? 'center' : 'left', display: 'flex', flexDirection: 'column', alignItems: centered ? 'center' : 'flex-start' }}>
      {prefix && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '1rem' }}
        >
          <span className="pill-badge">— {prefix} —</span>
        </motion.div>
      )}
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-section-title"
        style={{ color: light ? 'var(--color-white)' : 'var(--color-charcoal)', marginBottom: '1rem', textTransform: 'uppercase' }}
      >
        {title}
      </motion.h2>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        style={{
          height: '4px',
          width: '5rem',
          backgroundColor: 'var(--color-gold-primary)',
          transformOrigin: 'left',
          marginBottom: subtitle ? '1rem' : 0,
          boxShadow: '2px 2px 0px var(--color-charcoal)'
        }}
      ></motion.div>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.15rem',
            maxWidth: '42rem',
            color: light ? 'rgba(255, 255, 255, 0.85)' : 'var(--color-grey-text)',
            marginTop: '0.75rem'
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
