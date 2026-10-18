import { useEffect } from 'react';

/**
 * Universal scroll & page-change reveal observer:
 * Ensures all elements with '.scroll-reveal' become visible cleanly and never get stuck at opacity 0.
 */
export function useScrollReveal(triggerDependency?: any) {
  useEffect(() => {
    const revealAll = () => {
      const elements = document.querySelectorAll('.scroll-reveal:not(.is-visible)');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in viewport or near top, reveal immediately
        if (rect.top <= window.innerHeight * 0.95) {
          el.classList.add('is-visible');
        }
      });
    };

    // Run immediate check
    revealAll();
    const timeout = setTimeout(revealAll, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px 50px 0px',
      }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    // Listen to scroll and resize
    window.addEventListener('scroll', revealAll, { passive: true });
    window.addEventListener('resize', revealAll, { passive: true });

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', revealAll);
      window.removeEventListener('resize', revealAll);
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [triggerDependency]);
}
