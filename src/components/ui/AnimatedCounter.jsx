import React from 'react';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

export default function AnimatedCounter({ target, suffix = '', label }) {
  const { count, nodeRef } = useAnimatedCounter(parseInt(target, 10), 2000);

  return (
    <div ref={nodeRef} className="flex flex-col items-center">
      <span className="font-display font-bold text-4xl md:text-5xl text-charcoal mb-2 block drop-shadow-sm">
        {count}{suffix}
      </span>
      {label && (
        <span className="font-label uppercase tracking-widest text-[10px] md:text-xs text-grey-text font-bold bg-gold/5 px-2 py-1 rounded-sm">
          {label}
        </span>
      )}
    </div>
  );
}
