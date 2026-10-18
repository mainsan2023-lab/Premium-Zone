import React, { useEffect, useRef } from 'react';
import { motion, Variants, useReducedMotion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
  routeKey: string;
  className?: string;
}

/**
 * Multi-directional Animation Variants:
 * 1. Text from Right: "যেমন কোনো টেক্সট ডান দিক থেকে আসবে"
 * 2. Shapes from Left / Right: "এরপরে শেপ ডান দিক থেকে আসবে বা বাম দিক থেকে আসবে"
 * 3. Subtext from Left
 * 4. Buttons from Bottom
 * 5. Alternating Card Entrances (Left, Bottom, Right)
 * 6. NO Screen Blackout: Screen never turns black or voids into darkness.
 */

// Text from Right
export const textFromRightVariants: Variants = {
  initial: { opacity: 0, x: 70 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Shape / Badge from Left
export const shapeFromLeftVariants: Variants = {
  initial: { opacity: 0, x: -65, scale: 0.94 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Shape / Badge from Right
export const shapeFromRightVariants: Variants = {
  initial: { opacity: 0, x: 65, scale: 0.94 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Text from Left
export const textFromLeftVariants: Variants = {
  initial: { opacity: 0, x: -55 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Interactive / Button from Bottom
export const fromBottomVariants: Variants = {
  initial: { opacity: 0, y: 38 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Alternating directional card generator
export const getAlternatingCardVariant = (index: number): Variants => {
  const dir = index % 3;
  if (dir === 0) {
    // from left
    return {
      initial: { opacity: 0, x: -50, y: 15 },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.72,
          delay: 0.06 * (index % 6),
          ease: [0.22, 1, 0.36, 1],
        },
      },
    };
  } else if (dir === 1) {
    // from bottom
    return {
      initial: { opacity: 0, y: 45 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.72,
          delay: 0.06 * (index % 6),
          ease: [0.22, 1, 0.36, 1],
        },
      },
    };
  } else {
    // from right
    return {
      initial: { opacity: 0, x: 50, y: 15 },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.72,
          delay: 0.06 * (index % 6),
          ease: [0.22, 1, 0.36, 1],
        },
      },
    };
  }
};

/**
 * Global PageTransition Component
 * Guarantees NO screen blackout: the container stays fully visible and lively.
 * Keying on routeKey triggers child entrance animations across every page.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  routeKey,
  className = '',
}) => {
  const isFirstMount = useRef(true);

  useEffect(() => {
    // When route changes, scroll smoothly to top without screen blackout
    if (!isFirstMount.current) {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: false, duration: 0.5 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    isFirstMount.current = false;
  }, [routeKey]);

  return (
    <div
      key={routeKey}
      className={`w-full relative transition-opacity duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * Reusable Multi-Directional Entrance Reveal Components
 */

// Text from Right (e.g. Headlines, titles)
export const RevealFromRight: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, x: 65 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Text from Left (e.g. Subtitles, paragraphs)
export const RevealFromLeft: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, x: -55 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Shape or Badge from Left or Right
export const RevealShape: React.FC<{
  children: React.ReactNode;
  from?: 'left' | 'right';
  className?: string;
  delay?: number;
}> = ({ children, from = 'left', className = '', delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className}>{children}</div>;

  const initialX = from === 'left' ? -65 : 65;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, scale: 0.94 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Interactive or CTA buttons from Bottom
export const RevealFromBottom: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 38 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Reusable Card with multi-directional index entrance
export const RevealCard: React.FC<{
  children: React.ReactNode;
  index?: number;
  direction?: 'left' | 'bottom' | 'right';
  className?: string;
}> = ({ children, index = 0, direction, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className}>{children}</div>;

  const resolvedDir = direction || (index % 3 === 0 ? 'left' : index % 3 === 1 ? 'bottom' : 'right');
  const initial =
    resolvedDir === 'left'
      ? { opacity: 0, x: -50, y: 15 }
      : resolvedDir === 'right'
      ? { opacity: 0, x: 50, y: 15 }
      : { opacity: 0, y: 45 };

  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.72,
        delay: 0.07 * (index % 6),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
