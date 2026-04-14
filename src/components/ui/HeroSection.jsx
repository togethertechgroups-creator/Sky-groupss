import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import StarBorder from './StarBorder';

export default function HeroSection({ 
  heading, 
  subheading, 
  bgImage = 'https://picsum.photos/1920/1080?random=1', 
  mainCtaText, 
  mainCtaLink, 
  secondaryCtaText, 
  secondaryCtaLink,
  fullHeight = false 
}) {
  return (
    <section 
      className={`relative w-full ${fullHeight ? 'min-h-[100vh]' : 'min-h-[50vh]'} flex items-center justify-center pt-20 overflow-hidden`}
    >
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 z-0 bg-charcoal/70"></div>
      


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {fullHeight && (
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-6 flex items-center gap-3">
              <span className="h-0.5 w-12 bg-gold inline-block"></span>
              <span className="font-label text-gold uppercase tracking-widest text-sm font-bold">Multi-Service Excellence</span>
            </motion.div>
          )}

          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}
            className={`font-display font-bold text-white leading-[1.1] ${fullHeight ? 'text-4xl sm:text-5xl md:text-7xl mb-6' : 'text-3xl md:text-5xl mb-4 text-center md:text-left'}`}
          >
            {heading}
          </motion.h1>

          {subheading && (
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}
              className={`font-body text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-10 ${fullHeight ? 'max-w-2xl' : 'text-center md:text-left'}`}
            >
              {subheading}
            </motion.p>
          )}

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className={`flex flex-col sm:flex-row gap-4 mb-20 md:mb-0 ${!fullHeight && 'items-center md:items-start justify-center md:justify-start'}`}
          >
            {mainCtaText && mainCtaLink && (
              <StarBorder 
                as={Link}
                to={mainCtaLink}
                className="font-label px-6 py-3 uppercase tracking-wider text-xs sm:text-sm transition-colors text-center shadow-lg w-full sm:w-auto"
              >
                {mainCtaText}
              </StarBorder>
            )}
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link 
                to={secondaryCtaLink}
                className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-charcoal font-label px-6 py-3 rounded-sm uppercase tracking-wider text-xs sm:text-sm transition-colors text-center w-full sm:w-auto flex items-center justify-center gap-2"
              >
                {secondaryCtaText}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Cue */}
      {fullHeight && (
        <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="font-label text-white/40 text-[10px] tracking-[0.3em] mb-1">SCROLL</span>
          <motion.div 
            animate={{ y: [0, 6, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="text-gold/60 w-5 h-5" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
