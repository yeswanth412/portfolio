import React, { useRef, useState, useEffect } from 'react';
import './ScrollReveal.css';

/**
 * ScrollReveal Component
 * Progressive entrance reveal using lightweight IntersectionObserver.
 * Triggers once, disconnects observer, and respects prefers-reduced-motion.
 */
export default function ScrollReveal({
  children,
  as: Component = 'div',
  direction = 'up',
  delay = 0,
  duration = 500,
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
  className = '',
  stagger = false,
  ...props
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsRevealed(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  const style = {
    '--reveal-delay': `${delay}ms`,
    '--reveal-duration': `${duration}ms`,
  };

  const classes = [
    'scroll-reveal',
    `reveal-${direction}`,
    isRevealed ? 'revealed' : '',
    stagger ? 'reveal-stagger' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component ref={elementRef} className={classes} style={style} {...props}>
      {children}
    </Component>
  );
}
