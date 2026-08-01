import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ShieldCheck, Award, Star } from 'lucide-react';
import StarBorder from './StarBorder';

const SERVICE_CATEGORIES = [
  'PROPERTY',
  'CIVIL CONSTRUCTION',
  'VEHICLES',
  'T-SHIRTS & UNIFORMS',
  'EVENT MANAGEMENT',
  'WEB DESIGN',
  'MANPOWER & CLEANING'
];

export default function HeroSection({ 
  heading, 
  subheading, 
  bgImage, 
  mainCtaText, 
  mainCtaLink, 
  secondaryCtaText, 
  secondaryCtaLink,
  fullHeight = true,
  badgeText = "MULTI-SERVICE EXCELLENCE",
  trustBadges = [],
  enableCategoryRotator = false
}) {
  const [currentCatIndex, setCurrentCatIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    if (!enableCategoryRotator || mediaQuery.matches) return;

    const interval = setInterval(() => {
      setCurrentCatIndex((prev) => (prev + 1) % SERVICE_CATEGORIES.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [enableCategoryRotator]);

  return (
    <section 
      style={{
        position: 'relative',
        width: '100%',
        minHeight: fullHeight ? 'clamp(550px, 85vh, 900px)' : 'clamp(420px, 60vh, 650px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(4.5rem, 10vh, 7rem) 1.5rem 3.5rem 1.5rem',
        overflow: 'hidden',
        backgroundColor: 'var(--color-charcoal)',
        color: 'var(--color-white)'
      }} 
      data-section-theme="dark"
    >
      {/* 1. Ghost Monogram (CSS-only rotation loop) */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '15%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(350px, 50vw, 650px)',
          height: 'clamp(350px, 50vw, 650px)',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.07
        }}
        className={prefersReducedMotion ? '' : 'animate-spin-slow'}
      >
        <svg viewBox="0 0 200 200" width="100%" height="100%" fill="none" stroke="var(--color-gold-primary)" strokeWidth="1.5">
          <circle cx="100" cy="100" r="90" strokeDasharray="6 6" />
          <circle cx="100" cy="100" r="70" strokeWidth="1" />
          <polygon points="100,20 170,140 30,140" strokeWidth="2" />
          <polygon points="100,180 30,60 170,60" strokeWidth="2" />
          <circle cx="100" cy="100" r="30" strokeWidth="2" />
        </svg>
      </div>

      {/* Pure CSS Ambient Glow */}
      <div 
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,160,23,0.15) 0%, rgba(212,160,23,0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(70px)',
          zIndex: 1
        }}
      ></div>

      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '76rem', margin: '0 auto' }}>
        <div className="hero-split-container">
          
          {/* Text Column */}
          <motion.div 
            className="hero-text-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
            }}
            style={{ minWidth: 0 }}
          >
            {/* Category Rotator / Eyebrow Badge */}
            <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className="hero-badge-strip">
              <span className="hero-badge-line"></span>
              <div className="pill-badge" style={{ display: 'inline-flex', alignItems: 'center', minHeight: '1.85rem' }}>
                {enableCategoryRotator && !prefersReducedMotion ? (
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentCatIndex}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      style={{ color: 'var(--color-gold-light)', fontWeight: 700 }}
                    >
                      {SERVICE_CATEGORIES[currentCatIndex]} EXCELLENCE
                    </motion.span>
                  </AnimatePresence>
                ) : (
                  <span>{badgeText}</span>
                )}
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: fullHeight ? 'clamp(2.15rem, 4.5vw, 4rem)' : 'clamp(1.85rem, 3.5vw, 3.1rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.01em',
                color: 'var(--color-white)',
                textTransform: 'uppercase',
                textShadow: '3px 3px 0px rgba(0,0,0,0.9)',
                marginBottom: '1.25rem',
                maxWidth: '40rem',
                wordBreak: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              {heading}
            </motion.h1>

            {/* Subheading */}
            {subheading && (
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.98rem, 1.8vw, 1.15rem)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.6,
                  maxWidth: '38rem',
                  marginBottom: '1.75rem'
                }}
              >
                {subheading}
              </motion.p>
            )}

            {/* CTA Group */}
            {(mainCtaText || secondaryCtaText) && (
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                className="hero-cta-group"
              >
                {mainCtaText && mainCtaLink && (
                  <StarBorder 
                    as={Link}
                    to={mainCtaLink}
                    style={{ padding: '0.8rem 1.85rem', fontSize: '0.82rem', width: 'fit-content' }}
                  >
                    {mainCtaText}
                  </StarBorder>
                )}
                
                {secondaryCtaText && secondaryCtaLink && (
                  <Link 
                    to={secondaryCtaLink}
                    className="btn-secondary-hero"
                  >
                    {secondaryCtaText}
                  </Link>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* 2. Framed Image Panel */}
          <div className="hero-image-col" style={{ position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '28rem',
                margin: '0 auto',
                borderRadius: 0,
                border: 'var(--border-brutal-width) solid var(--color-gold-primary)',
                boxShadow: 'var(--shadow-brutal-gold)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-obsidian-dark)',
                aspectRatio: '4/3'
              }}
            >
              <img 
                src={bgImage} 
                alt={heading} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="eager"
                width="800"
                height="600"
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(11,11,12,0.2) 0%, rgba(11,11,12,0.75) 100%)'
                }}
              ></div>
            </motion.div>

            {/* 3. Floating Glass Trust Badges (Overlapping Panel Edges) */}
            {trustBadges.length > 0 && trustBadges.map((badge, idx) => {
              const positionStyles = [
                { top: '-0.85rem', left: '0rem', lgLeft: '-1.25rem' },
                { bottom: '-0.85rem', right: '0rem', lgRight: '-1.25rem' },
                { bottom: '2rem', left: '0rem', lgLeft: '-1.5rem' }
              ][idx % 3];

              const IconComponent = idx === 0 ? ShieldCheck : idx === 1 ? Star : Award;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.15, duration: 0.5 }}
                  style={{
                    position: 'absolute',
                    ...positionStyles,
                    zIndex: 20,
                    backgroundColor: 'rgba(26, 26, 26, 0.94)',
                    backdropFilter: 'blur(12px)',
                    border: '2px solid var(--color-gold-primary)',
                    boxShadow: '4px 4px 0px rgba(0,0,0,0.85)',
                    padding: '0.5rem 0.9rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    maxWidth: '15rem'
                  }}
                >
                  <IconComponent style={{ width: '1.15rem', height: '1.15rem', color: 'var(--color-gold-primary)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1.2 }}>
                    {badge.title || badge.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Scroll Down Cue */}
      {fullHeight && (
        <motion.div 
          style={{ position: 'absolute', bottom: '0.75rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'none' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.62rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.5)', marginBottom: '0.15rem' }}>SCROLL</span>
          <motion.div 
            animate={{ y: [0, 5, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown style={{ width: '16px', height: '16px', color: 'var(--color-gold-primary)' }} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
