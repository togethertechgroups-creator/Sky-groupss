import React from 'react';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

export default function AnimatedCounter({ target, suffix = '', label }) {
  const { count, nodeRef } = useAnimatedCounter(parseInt(target, 10), 2000);

  return (
    <div ref={nodeRef} className="flex flex-col items-center">
      <span className="font-display font-bold text-4xl md:text-6xl text-gold mb-2 block">
        {count}{suffix}
      </span>
      {label && (
        <span className="font-label uppercase tracking-widest text-xs md:text-sm text-charcoal/70 font-semibold">
          {label}
        </span>
      )}
    </div>
  );
}
