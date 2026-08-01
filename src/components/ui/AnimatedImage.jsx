import React from 'react';
import { motion } from 'framer-motion';

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
  style = {},
  ...rest
}) {
  const variant = directionVariants[direction] || directionVariants.up;

  return (
    <motion.div
      style={{
        position: 'relative',
        overflow: 'hidden',
        border: 'var(--border-brutal-width) solid var(--color-charcoal)',
        borderRadius: 'var(--radius-card)',
        boxShadow: 'var(--shadow-brutal)',
        width: '100%',
        height: '100%',
        ...style
      }}
      className={`group ${containerClassName}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variant}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ken Burns slow zoom wrapper */}
      <motion.div
        style={{ width: '100%', height: '100%' }}
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
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className={`${className} ${imgClassName}`}
          loading={loading}
          width={width}
          height={height}
          {...rest}
        />
      </motion.div>

      {/* Gold shimmer sweep on hover */}
      {shimmer && (
        <div
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}
          aria-hidden="true"
        >
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              width: '200%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent 0%, rgba(212,160,23,0.2) 50%, transparent 100%)',
              transform: 'translateX(-100%)'
            }}
            className="group-hover:animate-shimmer"
          />
        </div>
      )}
    </motion.div>
  );
}
