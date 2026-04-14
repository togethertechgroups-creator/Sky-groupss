import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StarBorder from './StarBorder';

export default function CTABanner({ heading, subtext, ctaText, ctaLink }) {
  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-charcoal to-black overflow-hidden diagonal-cut-top diagonal-cut-bottom my-10">
      
      {/* Decorative texture overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #D4A017 10px, #D4A017 11px)' }}></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full filter blur-[120px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl md:text-5xl text-white mb-6"
        >
          {heading}
        </motion.h2>
        
        {subtext && (
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-white/80 text-lg mb-10 max-w-2xl mx-auto"
          >
            {subtext}
          </motion.p>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <StarBorder 
            as={Link}
            to={ctaLink} 
            containerClassName="shadow-[0_0_20px_rgba(212,160,23,0.3)] hover:shadow-[0_0_30px_rgba(232,100,10,0.5)] transform hover:-translate-y-1"
            className="font-label px-10 py-4 uppercase tracking-wider text-sm transition-all duration-300"
          >
            {ctaText}
          </StarBorder>
        </motion.div>
      </div>
    </section>
  );
}
