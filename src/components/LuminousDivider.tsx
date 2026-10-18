import React from 'react';

interface LuminousDividerProps {
  className?: string;
  withCenterGlow?: boolean;
  withSweep?: boolean;
  intensity?: 'subtle' | 'medium' | 'vibrant';
}

/**
 * LuminousDivider
 * Creates a cinematic deep-green (#0B6B3A) and accent-green (#20C878) illuminated divider line.
 * Features a bright concentration of light in the center that smoothly fades to transparent ends,
 * backed by a soft ambient diffusion layer and an optional slow animated light sweep.
 */
export const LuminousDivider: React.FC<LuminousDividerProps> = ({
  className = '',
  withCenterGlow = true,
  withSweep = true,
  intensity = 'medium',
}) => {
  const getCoreGradient = () => {
    switch (intensity) {
      case 'subtle':
        return 'linear-gradient(90deg, transparent 0%, rgba(11, 107, 58, 0.2) 15%, rgba(32, 200, 120, 0.65) 50%, rgba(11, 107, 58, 0.2) 85%, transparent 100%)';
      case 'vibrant':
        return 'linear-gradient(90deg, transparent 0%, rgba(11, 107, 58, 0.45) 15%, rgba(32, 200, 120, 1) 50%, rgba(11, 107, 58, 0.45) 85%, transparent 100%)';
      case 'medium':
      default:
        return 'linear-gradient(90deg, transparent 0%, rgba(11, 107, 58, 0.35) 15%, rgba(32, 200, 120, 0.88) 50%, rgba(11, 107, 58, 0.35) 85%, transparent 100%)';
    }
  };

  return (
    <div
      className={`relative w-full py-4 sm:py-6 flex items-center justify-center overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Ambient layered glow diffusion (Soft elliptical light bloom behind center) */}
      <div
        className="absolute w-3/4 max-w-2xl h-3 sm:h-5 rounded-full blur-[6px] sm:blur-[8px] opacity-60 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(32, 200, 120, 0.45) 0%, rgba(11, 107, 58, 0.22) 45%, transparent 75%)',
        }}
      />

      {/* 2. Secondary tighter light aura for cinematic depth */}
      <div
        className="absolute w-1/2 max-w-lg h-1.5 sm:h-2.5 rounded-full blur-[3px] opacity-75 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(32, 200, 120, 0.7) 0%, rgba(11, 107, 58, 0.3) 50%, transparent 80%)',
        }}
      />

      {/* 3. Primary Crisp Luminous Line (1px core illuminated beam) */}
      <div
        className="relative w-full max-w-5xl h-[1px] transition-all"
        style={{
          background: getCoreGradient(),
        }}
      >
        {/* Optional subtle animated light sweep */}
        {withSweep && (
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="luminous-sweep-beam" />
          </div>
        )}
      </div>

      {/* 4. Center radiant light node (brighter concentration of light around the center) */}
      {withCenterGlow && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#20C878] shadow-[0_0_10px_#20C878,0_0_20px_#0B6B3A] opacity-90" />
          <div className="absolute w-4 h-4 rounded-full bg-[#20C878]/30 blur-[2px] animate-pulse" />
        </div>
      )}
    </div>
  );
};
