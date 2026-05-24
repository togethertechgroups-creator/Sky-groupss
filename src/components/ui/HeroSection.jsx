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
  // If it's a subpage (fullHeight is false), render a clean spacer instead of the hero banner
  if (!fullHeight) {
    return <div className="w-full h-24 bg-off-white"></div>;
  }

  return (
    <section 
      className="relative w-full min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden bg-charcoal"
    >
      {/* Background Image with Gradient Overlay & Luxury Aura */}
      <div className="absolute inset-0 z-0 select-none">
        <img 
          src={bgImage} 
          alt={heading} 
          className="w-full h-full object-cover opacity-85 scale-105 transition-transform duration-10000 ease-out" 
          loading="eager"
          width="1920"
          height="1080"
        />
        {/* Luxury radial and linear gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-obsidian-dark via-charcoal/85 to-charcoal/65"></div>
        {/* Premium Grid pattern */}
        <div className="absolute inset-0 bg-mesh-pattern opacity-25 mix-blend-overlay"></div>
        {/* Glowing golden ambient halo */}
        <div className="absolute bottom-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-gold/10 blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>

      {/* Floating particle orbs */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-gold/60 animate-float-up pointer-events-none" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-gold/40 animate-float-up pointer-events-none" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 right-1/5 w-2.5 h-2.5 rounded-full bg-orange/30 blur-sm animate-float-up pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-10 w-1 h-1 rounded-full bg-gold/70 animate-float-up pointer-events-none" style={{ animationDelay: '1.6s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-gold/30 animate-float-up pointer-events-none" style={{ animationDelay: '0.4s' }}></div>

      {/* Slow spinning decorative ring (far right edge) */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-dashed border-gold/8 animate-spin-slow pointer-events-none hidden lg:block"></div>
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-dashed border-gold/5 animate-spin-reverse pointer-events-none hidden lg:block"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-start">
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
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-6 flex items-center gap-3">
            <span className="h-0.5 w-12 bg-gold inline-block"></span>
            <span className="font-label text-gold uppercase tracking-widest text-sm font-bold animate-text-shimmer">Multi-Service Excellence</span>
          </motion.div>

          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}
            className="font-display font-bold text-white leading-[1.1] text-4xl sm:text-5xl md:text-7xl mb-6"
          >
            {heading}
          </motion.h1>

          {subheading && (
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}
              className="font-body text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8 md:mb-10"
            >
              {subheading}
            </motion.p>
          )}

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row gap-4 mb-20 md:mb-0"
          >
            {mainCtaText && mainCtaLink && (
              <StarBorder 
                as={Link}
                to={mainCtaLink}
                containerClassName="animate-glow-pulse"
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
    </section>
  );
}
