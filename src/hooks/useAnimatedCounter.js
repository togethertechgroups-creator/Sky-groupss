import { useState, useEffect, useRef } from 'react';

export function useAnimatedCounter(targetValue, duration = 2000) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let startTime;
    let animationFrame;
    let observer;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(targetValue * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const handleIntersect = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        animationFrame = requestAnimationFrame(animate);
        observer.disconnect(); // Only animate once
      }
    };

    observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 });
    observer.observe(node);

    return () => {
      if (observer) observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [targetValue, duration]);

  return { count, nodeRef };
}
