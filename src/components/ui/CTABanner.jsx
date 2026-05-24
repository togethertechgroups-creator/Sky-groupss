import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StarBorder from './StarBorder';

export default function CTABanner({ heading, subtext, ctaText, ctaLink }) {
  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-charcoal to-black overflow-hidden diagonal-cut-top diagonal-cut-bottom my-10 animate-border-glow">
      
      {/* Decorative texture overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #D4A017 10px, #D4A017 11px)' }}></div>

      {/* Animated floating golden orbs */}
      <div className="absolute top-8 right-16 w-5 h-5 rounded-full bg-gold/40 blur-sm animate-float-up" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-20 right-32 w-3 h-3 rounded-full bg-orange/30 blur-sm animate-float-up" style={{ animationDelay: '1.2s' }}></div>
      <div className="absolute bottom-10 left-20 w-4 h-4 rounded-full bg-gold/30 blur-sm animate-float-up" style={{ animationDelay: '0.6s' }}></div>
      <div className="absolute bottom-16 left-48 w-2 h-2 rounded-full bg-gold/50 animate-float-up" style={{ animationDelay: '2s' }}></div>

      {/* Large ambient glow blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold rounded-full filter blur-[130px] opacity-15 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-orange rounded-full filter blur-[110px] opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>

      {/* Slow spinning decorative ring in background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-dashed border-gold/10 animate-spin-slow pointer-events-none"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-dashed border-gold/8 animate-spin-reverse pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-gold/50 inline-block"></span>
          <span className="font-label text-gold/80 text-[10px] uppercase tracking-[0.3em] font-bold">SKY Groups</span>
          <span className="h-px w-10 bg-gold/50 inline-block"></span>
        </motion.div>

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
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
          className="inline-block"
        >
          <StarBorder 
            as={Link}
            to={ctaLink} 
            containerClassName="shadow-[0_0_20px_rgba(212,160,23,0.3)] hover:shadow-[0_0_40px_rgba(212,160,23,0.5)] transform hover:-translate-y-1.5 animate-glow-pulse"
            className="font-label px-10 py-4 uppercase tracking-wider text-sm transition-all duration-300"
          >
            {ctaText}
          </StarBorder>
        </motion.div>
      </div>
    </section>
  );
}
