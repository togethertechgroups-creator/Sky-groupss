import React from 'react';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

export default function AnimatedCounter({ target, suffix = '', label }) {
  const { count, nodeRef } = useAnimatedCounter(parseInt(target, 10), 2000);

  return (
    <div ref={nodeRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <span 
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          color: 'var(--color-charcoal)',
          lineHeight: 1,
          marginBottom: '0.5rem'
        }}
      >
        {count}{suffix}
      </span>
      {label && (
        <span className="pill-badge" style={{ fontSize: '0.7rem' }}>
          {label}
        </span>
      )}
    </div>
  );
}
