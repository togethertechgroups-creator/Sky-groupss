import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, centered = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center flex flex-col items-center' : 'text-left'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-heading font-bold text-4xl md:text-5xl text-charcoal mb-4"
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
          className="mt-6 font-body text-grey-text text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
