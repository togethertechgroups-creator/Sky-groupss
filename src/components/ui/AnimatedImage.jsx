import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedImage — drop-in replacement for <img> with premium animations.
 *
 * Props:
 *  src, alt, className  — standard img attributes
 *  direction            — entry direction: 'left' | 'right' | 'up' | 'down' | 'scale' (default: 'up')
 *  delay                — Framer motion entry delay in seconds (default: 0)
 *  shimmer              — show gold shimmer overlay on hover (default: true)
 *  kenBurns             — slow zoom-in motion while on screen (default: true)
 *  containerClassName   — extra classes for the outer wrapper div
 *  imgClassName         — extra classes applied directly to the <img>
 */
const directionVariants = {
  left:  { hidden: { opacity: 0, x: -48 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 48  }, visible: { opacity: 1, x: 0 } },
  up:    { hidden: { opacity: 0, y: 48  }, visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -48 }, visible: { opacity: 1, y: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.88 }, visible: { opacity: 1, scale: 1 } },
};

export default function AnimatedImage({
  src,
  alt = '',
  className = '',
  direction = 'up',
  delay = 0,
  shimmer = true,
  kenBurns = true,
  containerClassName = '',
  imgClassName = '',
  width,
  height,
  loading = 'lazy',
  ...rest
}) {
  const variant = directionVariants[direction] || directionVariants.up;

  return (
    <motion.div
      className={`relative overflow-hidden group ${containerClassName}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variant}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ken Burns slow zoom wrapper */}
      <motion.div
        className="w-full h-full"
        {...(kenBurns ? {
          initial: { scale: 1 },
          whileInView: { scale: 1.04 },
          transition: { duration: 8, ease: 'linear' },
          viewport: { once: false }
        } : {})}
      >
        <img
          src={src}
          alt={alt}
          className={`w-full h-full transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 ${className} ${imgClassName}`}
          loading={loading}
          width={width}
          height={height}
          {...rest}
        />
      </motion.div>

      {/* Gold shimmer sweep on hover */}
      {shimmer && (
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-gold/15 to-transparent -translate-x-full group-hover:animate-shimmer" />
        </div>
      )}

      {/* Subtle gold vignette frame on hover */}
      <div className="absolute inset-0 ring-0 group-hover:ring-2 group-hover:ring-gold/20 transition-all duration-500 pointer-events-none rounded-[inherit]" />
    </motion.div>
  );
}
