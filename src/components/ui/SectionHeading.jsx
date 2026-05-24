import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, prefix, centered = false, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center flex flex-col items-center' : 'text-left'}`}>
      {prefix && (
        <motion.span
          initial={{ opacity: 0, letterSpacing: '0.1em', y: -10 }}
          whileInView={{ opacity: 0.8, letterSpacing: '0.35em', y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-label text-[10px] uppercase font-bold text-gold mb-4 tracking-[0.3em] block"
        >
          — {prefix} —
        </motion.span>
      )}
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`font-heading font-bold text-4xl md:text-5xl mb-4 ${light ? 'text-white' : 'text-charcoal'}`}
      >
        {title}
      </motion.h2>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={`h-0.5 w-20 bg-gradient-to-r from-gold to-orange origin-left ${centered ? 'mx-auto' : ''}`}
      ></motion.div>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`mt-6 font-body text-lg max-w-2xl ${light ? 'text-white/75' : 'text-grey-text'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
