import { useEffect, useRef } from 'react';

/**
 * useCinematicScroll Hook
 * Manages Apple-inspired scroll-linked depth blur, scaling, and progressive clarity
 * transitions between the Hero character and the downstream portfolio sections.
 * 
 * - Preserves normal native document scrolling (NO scroll-jacking).
 * - Utilizes requestAnimationFrame for zero-jank, 60fps GPU property updates.
 * - Respects prefers-reduced-motion: reduce.
 */
export default function useCinematicScroll(heroRef) {
  const rafId = useRef(null);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const updateScrollMetrics = () => {
      if (!heroRef.current) {
        ticking = false;
        return;
      }

      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight || window.innerHeight;
      
      // Calculate scroll progress from 0 (top of hero) to 1 (scrolled past hero)
      const transitionZone = Math.max(heroHeight * 0.75, 400);
      const rawProgress = Math.min(Math.max(scrollY / transitionZone, 0), 1);

      // Smooth easing curve (easeInOutQuad)
      const progress =
        rawProgress < 0.5
          ? 2 * rawProgress * rawProgress
          : 1 - Math.pow(-2 * rawProgress + 2, 2) / 2;

      // Hero transition values: subtle blur (0 -> 6px), scale (1.0 -> 0.93), opacity (1.0 -> 0.0)
      const heroBlur = (progress * 6).toFixed(2);
      const heroScale = (1 - progress * 0.07).toFixed(3);
      const heroOpacity = Math.max(1 - progress * 1.25, 0).toFixed(3);
      const heroTranslateY = (progress * 50).toFixed(1);

      // Next section entrance clarity: blur softens from 4px down to 0px
      const incomingClarityProgress = Math.min(Math.max((rawProgress - 0.25) / 0.75, 0), 1);
      const incomingBlur = ((1 - incomingClarityProgress) * 4).toFixed(2);
      const incomingOpacity = (0.2 + incomingClarityProgress * 0.8).toFixed(2);

      // Apply CSS custom properties to the hero element for GPU-accelerated styling
      heroRef.current.style.setProperty('--hero-scroll-blur', `${heroBlur}px`);
      heroRef.current.style.setProperty('--hero-scroll-scale', `${heroScale}`);
      heroRef.current.style.setProperty('--hero-scroll-opacity', `${heroOpacity}`);
      heroRef.current.style.setProperty('--hero-scroll-y', `${heroTranslateY}px`);

      // Set global document variables for the incoming transition section
      document.documentElement.style.setProperty('--transition-incoming-blur', `${incomingBlur}px`);
      document.documentElement.style.setProperty('--transition-incoming-opacity', `${incomingOpacity}`);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafId.current = window.requestAnimationFrame(updateScrollMetrics);
        ticking = true;
      }
    };

    // Initial calculation
    updateScrollMetrics();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId.current) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, [heroRef]);
}
