import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';

import { CAROUSEL_IMAGES } from '../data/carouselImages';
export { CAROUSEL_IMAGES };


interface DynamicReviewCylinderProps {
  images?: string[];
  showHeader?: boolean;
  lang?: Language;
}

export const DynamicReviewCylinder: React.FC<DynamicReviewCylinderProps> = ({
  images = CAROUSEL_IMAGES,
  showHeader = true,
  lang = 'bn',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = images.length;
  const touchStartXRef = useRef<number | null>(null);

  // Automatic infinite continuous loop:
  // Visible center dwell time: 1.8 seconds, then advances to next image
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 2000); // 1.8s - 2.0s dwell + 900ms smooth transition

    return () => clearInterval(timer);
  }, [total]);

  // Touch Swipe Support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (diff > 40) {
      setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    } else if (diff < -40) {
      setCurrentIndex((prev) => (prev + 1) % total);
    }
    touchStartXRef.current = null;
  };

  /**
   * Calculate precise 3D transform for each image slot:
   * diff === 0: Center front-facing
   * diff === 1: Right side, rotated inward toward center (-24deg), scale 0.76
   * diff === -1: Left side, rotated inward toward center (24deg), scale 0.76
   * diff > 1: Offscreen right, waiting to enter smoothly
   * diff < -1: Offscreen left, waiting to wrap around
   */
  const getImageStyle = (index: number) => {
    let diff = (index - currentIndex) % total;
    if (diff < -Math.floor(total / 2)) diff += total;
    if (diff > Math.floor(total / 2)) diff -= total;

    // CENTER ACTIVE POSITION
    if (diff === 0) {
      return {
        transform: 'translateX(0%) translateZ(0px) rotateY(0deg) scale(1)',
        opacity: 1,
        zIndex: 30,
        pointerEvents: 'auto' as const,
        filter: 'drop-shadow(0 25px 45px rgba(0,0,0,0.9)) drop-shadow(0 0 30px rgba(16,239,130,0.3))',
      };
    }

    // RIGHT SIDE POSITION (Inward facing toward center)
    if (diff === 1) {
      return {
        transform: 'translateX(62%) translateZ(-160px) rotateY(-24deg) scale(0.76)',
        opacity: 0.58,
        zIndex: 15,
        pointerEvents: 'auto' as const,
        filter: 'drop-shadow(0 20px 35px rgba(0,0,0,0.85)) brightness(0.85)',
      };
    }

    // LEFT SIDE POSITION (Mirrored opposite inward angle toward center)
    if (diff === -1) {
      return {
        transform: 'translateX(-62%) translateZ(-160px) rotateY(24deg) scale(0.76)',
        opacity: 0.58,
        zIndex: 15,
        pointerEvents: 'auto' as const,
        filter: 'drop-shadow(0 20px 35px rgba(0,0,0,0.85)) brightness(0.85)',
      };
    }

    // OFFSCREEN RIGHT (Ready to physically enter from right into center)
    if (diff > 1) {
      return {
        transform: 'translateX(125%) translateZ(-320px) rotateY(-38deg) scale(0.55)',
        opacity: 0,
        zIndex: 5,
        pointerEvents: 'none' as const,
      };
    }

    // OFFSCREEN LEFT (Smoothly exit to the left)
    return {
      transform: 'translateX(-125%) translateZ(-320px) rotateY(38deg) scale(0.55)',
      opacity: 0,
      zIndex: 5,
      pointerEvents: 'none' as const,
    };
  };

  return (
    <section
      id="reviews"
      className="py-16 md:py-20 relative bg-[#03130d] border-t border-emerald-500/15 overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header as requested */}
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#083523] border border-[#10ef82]/30 text-xs font-bold text-[#10ef82]">
              <span>✨ {lang === 'en' ? 'Client Reviews & Impressions' : 'বিশ্বস্ত মতামত ও ক্লায়েন্ট রিভিউ'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'en' ? (
                <>
                  What Clients Say &{' '}
                  <span className="text-gradient-tia">Live Visual Proof</span>
                </>
              ) : (
                <>
                  সন্তুষ্ট ক্লায়েন্টদের কথা ও{' '}
                  <span className="text-gradient-tia">লাইভ প্রজেক্ট প্রিভিউ</span>
                </>
              )}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              {lang === 'en'
                ? 'Impressions and feedback from creators and entrepreneurs — 3D live visual carousel showcasing recent client deliverables.'
                : 'ইউটিউবার, নাটক ডিরেক্টর এবং উদ্যোক্তাদের দেওয়া মতামত, রেটিং ও ভিজ্যুয়াল ফলাফল।'}
            </p>

            {/* Rating Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#052619] border border-[#10ef82]/35 text-xs text-amber-300 font-bold">
              <span>★★★★★</span>
              <span>{lang === 'en' ? '5.0 / 5.0 (48 Verified Reviews)' : 'গড় রেটিং: ৫.০ / ৫.০ (৪৮ টি রিভিউ)'}</span>
            </div>
          </div>
        )}

        {/* Genuine CSS 3D Perspective Stage */}
        <div
          className="relative w-full h-[430px] sm:h-[500px] md:h-[580px] flex items-center justify-center overflow-hidden"
          style={{
            perspective: '1400px',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Ambient Lighting Behind Center Active Card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[700px] h-[340px] sm:h-[440px] bg-[radial-gradient(circle,rgba(16,239,130,0.22)_0%,rgba(6,36,25,0.15)_40%,transparent_75%)] blur-[95px] pointer-events-none" />

          {/* Render All Carousel Images Simultaneously for Continuous GPU 3D Motion */}
          {images.map((imgSrc, idx) => {
            const style = getImageStyle(idx);
            return (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="absolute w-[280px] sm:w-[390px] md:w-[460px] aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer"
                style={{
                  ...style,
                  // Smooth 900ms transition with natural cubic-bezier curve as requested
                  transition:
                    'transform 950ms cubic-bezier(0.22, 1, 0.36, 1), opacity 950ms cubic-bezier(0.22, 1, 0.36, 1), filter 950ms ease',
                  willChange: 'transform, opacity',
                  backfaceVisibility: 'hidden',
                }}
              >
                <img
                  src={imgSrc}
                  alt={`Showcase ${idx + 1}`}
                  className="w-full h-full object-cover rounded-3xl border-2 border-[#10ef82]/60 bg-[#02110a]"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
