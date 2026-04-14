import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

export default function ServiceCard({ icon, name, shortDesc, slug }) {
  // Map string icon name to Lucide component
  const LucideIcon = Icons[icon] || Icons.HelpCircle;

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden border border-border flex flex-col h-full"
    >
      {/* Animated Left Border */}
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-gold transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 origin-top"></div>
      
      {/* Icon */}
      <div className="w-14 h-14 bg-off-white rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
        <LucideIcon className="w-7 h-7 text-gold" />
      </div>
      
      {/* Content */}
      <h3 className="font-heading font-bold text-2xl text-charcoal mb-4">{name}</h3>
      <p className="font-body text-grey-text leading-relaxed mb-8 flex-grow">
        {shortDesc}
      </p>
      
      {/* Action */}
      <div className="mt-auto">
        <Link 
          to={slug}
          className="inline-flex items-center font-label text-sm uppercase tracking-wider text-gold hover:text-orange transition-colors font-semibold"
        >
          Learn More 
          <Icons.ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
