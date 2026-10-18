import { useEffect } from 'react';

/**
 * High-performance global click animation listener:
 * Spawns an energetic emerald & tia neon ripple spark at the exact click coordinate.
 */
export function useClickBurst() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Find if clicked element is a button, anchor, or has interactive role
      const target = (e.target as HTMLElement)?.closest('button, a, input[type="button"], .cursor-pointer, .nav-pill-btn, .tia-glow-btn');
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'click-ripple-burst';

      const size = Math.max(rect.width, rect.height) * 1.6;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

      (target as HTMLElement).style.position = (target as HTMLElement).style.position || 'relative';
      (target as HTMLElement).style.overflow = 'hidden';

      target.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 700);
    };

    window.addEventListener('click', handleClick, { passive: true });
    return () => window.removeEventListener('click', handleClick);
  }, []);
}
