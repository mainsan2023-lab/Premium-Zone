import React from 'react';

interface PremiumZoneLogoProps {
  className?: string;
  size?: number;
}

/**
 * Official Premium Zone Logo
 * Recreates the user's uploaded brand mark:
 * - Concentric neon green & lime circular border rings
 * - Stylized bold letter 'P'
 * - Inner aperture shutter with 6 camera blades and central play triangle
 * - Bottom stem of 'P' formed into an artist fountain pen nib
 */
export const PremiumZoneLogo: React.FC<PremiumZoneLogoProps> = ({
  className = 'w-10 h-10',
  size,
}) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      style={style}
    >
      <defs>
        {/* Outer Ring Gradient */}
        <linearGradient id="pzRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10ef82" />
          <stop offset="45%" stopColor="#84cc16" />
          <stop offset="75%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        {/* Inner Dark Background Gradient */}
        <radialGradient id="pzDarkBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#072d1d" />
          <stop offset="70%" stopColor="#03150e" />
          <stop offset="100%" stopColor="#020a06" />
        </radialGradient>

        {/* Letter P & Pen Gradient */}
        <linearGradient id="pzGreenP" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#a3e635" />
          <stop offset="40%" stopColor="#4ade80" />
          <stop offset="85%" stopColor="#10ef82" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        {/* Aperture Shutter Blades Gradient */}
        <linearGradient id="pzBladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bef264" />
          <stop offset="50%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>

        {/* Pen Nib Metallic Gradient */}
        <linearGradient id="pzNibGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d9f99d" />
          <stop offset="50%" stopColor="#84cc16" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>

        {/* Neon Glow Filter */}
        <filter id="pzGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* 1. Outer Circular Frame with Dual Border Ring */}
      <circle cx="250" cy="250" r="236" fill="url(#pzDarkBg)" />
      
      {/* Outer Glow Ring */}
      <circle
        cx="250"
        cy="250"
        r="236"
        stroke="url(#pzRingGrad)"
        strokeWidth="24"
      />
      {/* Thin White Contrast Ring inside */}
      <circle
        cx="250"
        cy="250"
        r="220"
        stroke="#ffffff"
        strokeWidth="3.5"
        strokeOpacity="0.85"
      />

      {/* 2. Stylized Studio Icons Ambient in Background */}
      <g opacity="0.18">
        {/* Subtle grid and software badges in dark background */}
        <rect x="70" y="80" width="46" height="46" rx="8" stroke="#10ef82" strokeWidth="2" fill="none" />
        <text x="83" y="112" fill="#10ef82" fontSize="26" fontWeight="bold" fontFamily="sans-serif">Ps</text>

        <rect x="384" y="80" width="46" height="46" rx="8" stroke="#10ef82" strokeWidth="2" fill="none" />
        <text x="397" y="112" fill="#10ef82" fontSize="26" fontWeight="bold" fontFamily="sans-serif">Pr</text>

        <rect x="68" y="320" width="46" height="46" rx="8" stroke="#10ef82" strokeWidth="2" fill="none" />
        <text x="79" y="352" fill="#10ef82" fontSize="24" fontWeight="bold" fontFamily="sans-serif">Ae</text>

        <rect x="384" y="320" width="46" height="46" rx="8" stroke="#10ef82" strokeWidth="2" fill="none" />
        <text x="397" y="352" fill="#10ef82" fontSize="26" fontWeight="bold" fontFamily="sans-serif">Lr</text>
      </g>

      {/* 3. The Grand Letter 'P' Main Body */}
      <path
        d="M175 120 C235 105, 345 110, 365 210 C380 285, 310 330, 230 330 C200 330, 185 330, 175 350 L175 330 C175 220, 175 140, 175 120 Z"
        fill="url(#pzGreenP)"
        filter="url(#pzGlow)"
      />

      {/* 4. Left Stem of the 'P' */}
      <path
        d="M150 140 C150 115, 175 110, 210 110 L210 320 C185 320, 150 330, 150 360 L150 140 Z"
        fill="url(#pzGreenP)"
      />

      {/* 5. Center Aperture Shutter with 6 Blades */}
      <g transform="translate(262, 220)">
        {/* Outer Circular Aperture Cutout */}
        <circle cx="0" cy="0" r="76" fill="#03140e" stroke="url(#pzGreenP)" strokeWidth="6" />

        {/* Shutter Blade 1 */}
        <path d="M-68 -20 L-20 -68 L10 -50 L-30 0 Z" fill="url(#pzBladeGrad)" stroke="#020c08" strokeWidth="2.5" />
        {/* Shutter Blade 2 */}
        <path d="M-20 -68 L50 -50 L40 -15 L-10 -35 Z" fill="url(#pzBladeGrad)" stroke="#020c08" strokeWidth="2.5" />
        {/* Shutter Blade 3 */}
        <path d="M50 -50 L68 15 L35 35 L20 -15 Z" fill="url(#pzBladeGrad)" stroke="#020c08" strokeWidth="2.5" />
        {/* Shutter Blade 4 */}
        <path d="M68 15 L20 68 L-15 50 L30 5 Z" fill="url(#pzBladeGrad)" stroke="#020c08" strokeWidth="2.5" />
        {/* Shutter Blade 5 */}
        <path d="M20 68 L-50 50 L-40 15 L10 35 Z" fill="url(#pzBladeGrad)" stroke="#020c08" strokeWidth="2.5" />
        {/* Shutter Blade 6 */}
        <path d="M-50 50 L-68 -15 L-35 -35 L-20 15 Z" fill="url(#pzBladeGrad)" stroke="#020c08" strokeWidth="2.5" />

        {/* Central Triangle Play Icon */}
        <polygon
          points="-12,-20 22,0 -12,20"
          fill="#10ef82"
          stroke="#03130d"
          strokeWidth="3"
        />
      </g>

      {/* 6. Pen Nib at the Bottom Stem of the 'P' */}
      <g transform="translate(185, 340)">
        {/* Pen Collar Ring */}
        <rect x="-24" y="0" width="48" height="12" rx="4" fill="#0f3d27" stroke="#10ef82" strokeWidth="3" />
        
        {/* Pen Nib Body */}
        <path
          d="M-28 12 C-26 35, -34 60, 0 100 C34 60, 26 35, 28 12 Z"
          fill="url(#pzNibGrad)"
          stroke="#10ef82"
          strokeWidth="4"
        />

        {/* Nib Slit & Breather Hole */}
        <circle cx="0" cy="46" r="6" fill="#03130d" stroke="#10ef82" strokeWidth="2" />
        <line x1="0" y1="52" x2="0" y2="98" stroke="#03130d" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="0" cy="100" r="3.5" fill="#a3e635" />
      </g>

      {/* 7. Subtle Ambient Sparkle Highlights */}
      <circle cx="340" cy="160" r="4" fill="#ffffff" opacity="0.8" />
      <circle cx="360" cy="240" r="3" fill="#ffffff" opacity="0.6" />
    </svg>
  );
};
