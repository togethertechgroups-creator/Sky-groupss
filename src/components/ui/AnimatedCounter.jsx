import React from 'react';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

export default function AnimatedCounter({ target, suffix = '', label }) {
  const { count, nodeRef } = useAnimatedCounter(parseInt(target, 10), 2000);

  return (
    <div ref={nodeRef} className="flex flex-col items-center">
      <span className="font-label font-extrabold text-3xl sm:text-4xl md:text-6xl text-charcoal mb-1 sm:mb-2 block tracking-tight">
        {count}{suffix}
      </span>
      {label && (
        <span className="font-label uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[8px] sm:text-[10px] md:text-xs text-charcoal/80 font-bold bg-charcoal/5 px-2 sm:px-3.5 py-0.5 sm:py-1 rounded-full text-center block max-w-full">
          {label}
        </span>
      )}
    </div>
  );
}
