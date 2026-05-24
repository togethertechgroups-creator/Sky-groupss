import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

export default function ServiceCard({ icon, name, shortDesc, slug, index = 0 }) {
  // Map string icon name to Lucide component
  const LucideIcon = Icons[icon] || Icons.HelpCircle;

  // Format index as two digit string: 01, 02...
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="bg-gradient-to-br from-white/95 to-champagne-gold/25 p-8 rounded-2xl transition-all duration-500 relative group overflow-hidden flex flex-col h-full border border-gold/15 hover:border-gold/35 shadow-[0_10px_30px_-15px_rgba(160,120,16,0.06)] hover:shadow-[0_20px_50px_rgba(212,160,23,0.18)]"
    >
      {/* Luxury Metallic Glare Sweep Overlay */}
      <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none z-20"></div>

      {/* Dynamic Gold Gradient Border Accent */}
      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-gold via-gold-light to-gold-dark transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out origin-top z-10"></div>
      
      {/* Floating Serif Serial Number Index */}
      <span className="absolute top-6 right-6 font-display font-bold text-4xl italic text-gold/15 group-hover:text-gold/30 transition-colors duration-500 select-none z-10">
        {formattedIndex}
      </span>

      {/* Premium Rotating Dashed Icon Frame */}
      <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-gold/10 group-hover:border-gold/30 transition-all duration-500 bg-gradient-to-br from-gold/5 to-orange/5 overflow-visible">
        {/* Slow-rotating concentric luxury dashes outline */}
        <div className="absolute inset-[-4px] rounded-2xl border border-dashed border-gold/20 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000 ease-out pointer-events-none"></div>
        {/* Glow reflection inside icon box */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <LucideIcon className="w-8 h-8 text-gold group-hover:scale-110 group-hover:text-orange transition-all duration-500 relative z-10" />
      </div>
      
      {/* Content */}
      <h3 className="font-heading font-bold text-2xl text-charcoal mb-4 group-hover:text-gold transition-colors duration-300 relative z-10">
        {name}
      </h3>
      
      <p className="font-body text-grey-text leading-relaxed mb-8 flex-grow group-hover:text-charcoal transition-colors duration-300 relative z-10">
        {shortDesc}
      </p>
      
      {/* Interactive CTA Link */}
      <div className="mt-auto pt-4 border-t border-gold/10 group-hover:border-gold/20 transition-colors duration-500 relative z-10">
        <Link 
          to={slug}
          className="inline-flex items-center font-label text-xs uppercase tracking-widest text-gold group-hover:text-orange transition-colors font-bold"
        >
          <span>Learn More</span>
          <div className="ml-2.5 w-5.5 h-5.5 rounded-full bg-gold/5 group-hover:bg-gold/10 flex items-center justify-center transition-colors">
            <Icons.ChevronRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:text-orange transition-all" />
          </div>
        </Link>
      </div>
      
      {/* Subtle Abstract Light Ring in Background */}
      <div className="absolute -right-16 -bottom-16 w-36 h-36 rounded-full bg-gold/5 blur-2xl group-hover:bg-gold/10 transition-colors duration-500 pointer-events-none z-0"></div>
    </motion.div>
  );
}
