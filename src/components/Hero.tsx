import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';
import {
  ArrowRight,
  Mail,
  Send,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  Code2,
  Palette,
  Bot,
  TrendingUp,
  Award,
  Video,
} from 'lucide-react';

interface HeroProps {
  lang: Language;
  onExploreProjects: () => void;
  onExploreAbout: () => void;
  onOpenWhatsApp: () => void;
  onContactClick: () => void;
  onStartProject: () => void;
}

// 1. Animated Greeting Badge: "হ্যালো, We Are Premium Zone"
// Coordinates typing text character-by-character while drawing the badge border & pill shape
const AnimatedGreetingBadge: React.FC<{ lang: Language }> = ({ lang }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const targetText = lang === 'en' ? 'Hello, We Are Premium Zone' : 'হ্যালো, We Are Premium Zone';
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'holding' | 'erasing' | 'paused'>('typing');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // When language switches, reset smoothly
  useEffect(() => {
    setCharIndex(0);
    setPhase('typing');
  }, [lang]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (charIndex < targetText.length) {
        timeoutId = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, 55);
      } else {
        timeoutId = setTimeout(() => {
          setPhase('holding');
        }, 100);
      }
    } else if (phase === 'holding') {
      // Keep on screen for 2.5 seconds
      timeoutId = setTimeout(() => {
        setPhase('erasing');
      }, 2500);
    } else if (phase === 'erasing') {
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, 28);
      } else {
        setPhase('paused');
      }
    } else if (phase === 'paused') {
      // Brief pause before repeating continuously
      timeoutId = setTimeout(() => {
        setPhase('typing');
      }, 550);
    }

    return () => clearTimeout(timeoutId);
  }, [phase, charIndex, targetText, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="min-h-[22px] sm:min-h-[32px] flex items-center">
        <div className="inline-flex items-center gap-1 sm:gap-2 px-1.5 xs:px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-[#06291b]/90 border border-emerald-500/40 backdrop-blur-md shadow-[0_0_15px_rgba(16,239,130,0.22)]">
          <Sparkles className="w-2 h-2 sm:w-3.5 sm:h-3.5 text-[#10ef82] shrink-0" />
          <span className="text-[8px] xs:text-[9.5px] sm:text-xs font-semibold text-emerald-200 tracking-wide whitespace-nowrap">
            {targetText}
          </span>
        </div>
      </div>
    );
  }

  const isVisible = phase !== 'paused' || charIndex > 0;
  const displayedText = targetText.slice(0, charIndex);

  return (
    <div className="min-h-[22px] sm:min-h-[32px] flex items-center">
      <div
        className={`inline-flex items-center gap-1 sm:gap-2 px-1.5 xs:px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-[#06291b]/90 border border-emerald-500/40 backdrop-blur-md transition-all duration-150 overflow-hidden whitespace-nowrap ${
          phase === 'holding'
            ? 'shadow-[0_0_18px_rgba(16,239,130,0.35)] border-emerald-400/60'
            : 'shadow-[0_0_12px_rgba(16,239,130,0.2)]'
        } ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        <Sparkles className="w-2 h-2 sm:w-3.5 sm:h-3.5 text-[#10ef82] shrink-0 animate-[spin_8s_linear_infinite]" />
        <span className="text-[8px] xs:text-[9.5px] sm:text-xs font-semibold text-emerald-200 tracking-wide flex items-center">
          <span>{displayedText}</span>
          {phase !== 'paused' && (
            <span
              className={`inline-block w-[1.5px] h-2 sm:h-3.5 bg-[#10ef82] ml-0.5 ${
                phase === 'holding' ? 'animate-pulse' : 'opacity-90'
              }`}
            />
          )}
        </span>
      </div>
    </div>
  );
};

// 2. Dynamic Services Ticker: "আমাদের সার্ভিসসমূহ" + Rotating Services
interface ServiceItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SERVICES_ITEMS: ServiceItem[] = [
  { name: 'UI/UX Design', icon: Palette },
  { name: 'Graphic Design', icon: Sparkles },
  { name: 'Web Development', icon: Code2 },
  { name: 'AI Automations', icon: Bot },
  { name: 'Video Editing', icon: Video },
];

const DynamicServicesTicker: React.FC<{ lang: Language }> = ({ lang }) => {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'holding' | 'erasing'>('typing');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const currentService = SERVICES_ITEMS[serviceIndex];
  const targetText = currentService.name;

  useEffect(() => {
    if (prefersReducedMotion) {
      const interval = setInterval(() => {
        setServiceIndex((prev) => (prev + 1) % SERVICES_ITEMS.length);
      }, 3000);
      return () => clearInterval(interval);
    }

    let timer: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (charCount < targetText.length) {
        timer = setTimeout(() => {
          setCharCount((prev) => prev + 1);
        }, 55);
      } else {
        setPhase('holding');
      }
    } else if (phase === 'holding') {
      timer = setTimeout(() => {
        setPhase('erasing');
      }, 2000); // 2 seconds hold for each service
    } else if (phase === 'erasing') {
      if (charCount > 0) {
        timer = setTimeout(() => {
          setCharCount((prev) => prev - 1);
        }, 28);
      } else {
        setServiceIndex((prev) => (prev + 1) % SERVICES_ITEMS.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timer);
  }, [phase, charCount, targetText, prefersReducedMotion]);

  const IconComponent = currentService.icon;
  const displayedServiceText = prefersReducedMotion
    ? targetText
    : targetText.slice(0, charCount);

  return (
    <div className="flex items-center gap-1 sm:gap-2 text-[8px] xs:text-[9.5px] sm:text-xs font-medium text-slate-300 min-h-[20px] sm:min-h-[28px] flex-nowrap">
      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#10ef82] shadow-[0_0_8px_#10ef82] shrink-0" />
      <span className="text-[8px] xs:text-[9.5px] sm:text-xs text-slate-300 font-semibold whitespace-nowrap">
        {lang === 'en' ? 'Our Services' : 'আমাদের সার্ভিসসমূহ'}
      </span>
      <span className="px-1.5 sm:px-2.5 py-0.5 rounded-full bg-[#083523] border border-emerald-500/40 text-[#10ef82] font-semibold flex items-center gap-0.5 sm:gap-1.5 text-[8px] xs:text-[9.5px] sm:text-xs shadow-[0_0_12px_rgba(16,239,130,0.18)] whitespace-nowrap">
        <IconComponent className="w-2 h-2 sm:w-3 sm:h-3 text-[#10ef82] shrink-0" />
        <span>{displayedServiceText}</span>
        {!prefersReducedMotion && (
          <span className="inline-block w-[1.5px] h-2 sm:h-3 bg-[#10ef82] animate-pulse ml-0.5" />
        )}
      </span>
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({
  lang,
  onExploreProjects,
  onExploreAbout,
  onOpenWhatsApp,
  onContactClick,
  onStartProject,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Fullscreen ambient particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.4 - 0.1,
      alpha: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      color: Math.random() > 0.4 ? '#10ef82' : '#00ff88',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.008;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.12, Math.min(0.85, p.alpha));
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-[#03130d] pt-16 pb-3 sm:pt-20 sm:pb-8 lg:py-16 sm:min-h-[500px] lg:min-h-[580px]">
      
      {/* 1. Animated Ambient Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-45"
      />

      {/* 2. Deep Atmospheric Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[radial-gradient(circle,rgba(16,239,130,0.18)_0%,rgba(6,32,22,0.08)_50%,transparent_75%)] blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/4 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[radial-gradient(circle,rgba(0,255,136,0.12)_0%,rgba(4,22,15,0.06)_50%,transparent_75%)] blur-[90px] pointer-events-none" />

      {/* 3. Subtle Clean Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #10ef82 1px, transparent 1px), linear-gradient(to bottom, #10ef82 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 4. Side-by-Side Hero Content Container (Preserved on Mobile & Desktop) */}
      <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-12 gap-1.5 xs:gap-2.5 sm:gap-6 lg:gap-8 items-center">
          
          {/* LEFT: Text, Badges, Heading, Buttons (Col-7 on mobile, Col-7 on desktop) */}
          <div className="col-span-7 sm:col-span-7 lg:col-span-7 space-y-1.5 xs:space-y-2 sm:space-y-4 text-left">
            
            {/* Top Intro Animated Greeting Badge (Shape from Left) */}
            <div className="shape-from-left">
              <AnimatedGreetingBadge lang={lang} />
            </div>

            {/* Services Dynamic Ticker (Shape from Right) */}
            <div className="shape-from-right">
              <DynamicServicesTicker lang={lang} />
            </div>

            {/* Main Headline (Text from Right - "যেমন কোনো টেক্সট ডান দিক থেকে আসবে") */}
            <h1 className="anim-from-right text-[11px] xs:text-sm sm:text-3xl lg:text-4xl xl:text-[42px] font-black tracking-tight text-white leading-tight sm:leading-[1.2]">
              {lang === 'en' ? (
                <>
                  Transforming Ideas Into Reality —{' '}
                  <span className="text-gradient-tia">
                    Through Design, Web & AI Technology.
                  </span>
                </>
              ) : (
                <>
                  আইডিয়াকে বাস্তবে রূপ দিই —{' '}
                  <span className="text-gradient-tia block mt-0.5 sm:mt-1">
                    ডিজাইন, ওয়েব ও AI প্রযুক্তির মাধ্যমে।
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle paragraph (Text from Left) */}
            <p className="anim-from-left text-[8px] xs:text-[9.5px] sm:text-sm text-slate-300 leading-relaxed max-w-md hidden xs:block">
              {lang === 'en'
                ? 'High-CTR YouTube Thumbnails, Scalable Web Apps, Vector Logo Identity, and Cinematic Video Production.'
                : 'হাই-সিটিআর ইউটিউব থাম্বনেইল, আধুনিক ফুল-স্ট্যাক ওয়েবসাইট, লোগো ও ব্র্যান্ড আইডেন্টিটি এবং সিনেমাটিক ভিডিও এডিটিং সল্যুশন।'}
            </p>

            {/* CTAs (Buttons from Bottom - Scaled compact on mobile) */}
            <div className="anim-from-bottom flex flex-wrap items-center gap-1 sm:gap-3 pt-0.5 sm:pt-1">
              <button
                type="button"
                onClick={onExploreProjects}
                className="tia-glow-btn flex items-center gap-0.5 sm:gap-2 px-2 xs:px-2.5 sm:px-5 py-1 xs:py-1.5 sm:py-3 rounded-full bg-gradient-to-r from-[#10ef82] to-[#00d66c] text-[#02180e] font-extrabold text-[7.5px] xs:text-[9px] sm:text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md cursor-pointer"
              >
                <span>{lang === 'en' ? 'View Projects' : 'প্রজেক্ট দেখুন'}</span>
                <ArrowRight className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreAbout}
                className="flex items-center gap-0.5 sm:gap-2 px-1.5 xs:px-2 sm:px-4 py-1 xs:py-1.5 sm:py-3 rounded-full bg-[#062419]/90 hover:bg-[#0a3a27] border border-emerald-500/35 text-slate-200 hover:text-white font-semibold text-[7.5px] xs:text-[9px] sm:text-xs transition-all hover:border-[#10ef82] cursor-pointer"
              >
                <span>{lang === 'en' ? 'About Me' : 'আমার সম্পর্কে'}</span>
                <ArrowRight className="w-2 h-2 sm:w-3.5 sm:h-3.5 text-[#10ef82]" />
              </button>
            </div>

            {/* Proof Chips */}
            <div className="anim-from-bottom anim-delay-3 pt-0.5 sm:pt-1 flex items-center gap-1.5 sm:gap-4 text-[7.5px] xs:text-[8.5px] sm:text-xs text-slate-300">
              <div className="flex items-center gap-1 font-mono text-[#10ef82]">
                <TrendingUp className="w-2 h-2 sm:w-3.5 sm:h-3.5" />
                <span>+12% CTR</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <div className="flex items-center gap-1 font-mono text-[#10ef82]">
                <Award className="w-2 h-2 sm:w-3.5 sm:h-3.5" />
                <span>100+ Projects</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Floating Rounded Visual Status Card (Shape & Visual from Right) */}
          <div className="col-span-5 sm:col-span-5 lg:col-span-5 shape-from-right">
            <div className="rounded-xl sm:rounded-2xl bg-[#062419]/92 backdrop-blur-2xl border border-emerald-500/35 p-1.5 xs:p-2.5 sm:p-5 space-y-1 xs:space-y-2 sm:space-y-4 shadow-[0_15px_40px_rgba(0,0,0,0.65)]">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-1 xs:pb-1.5 sm:pb-3 border-b border-emerald-500/20">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="relative flex h-1.5 w-1.5 sm:h-2.5 sm:w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10ef82] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 bg-[#10ef82]" />
                  </span>
                  <span className="text-[7.5px] xs:text-[8.5px] sm:text-xs font-bold text-white whitespace-nowrap">
                    {lang === 'en' ? 'Available' : 'বর্তমানে কাজ করছি'}
                  </span>
                </div>

                <span className="px-1 py-0.5 rounded bg-[#041d13] border border-emerald-500/30 text-[6.5px] xs:text-[7.5px] sm:text-[10px] font-mono text-[#10ef82] whitespace-nowrap">
                  Web · Design · AI
                </span>
              </div>

              {/* Status Details */}
              <div className="space-y-0.5 xs:space-y-1 sm:space-y-2.5 text-[7px] xs:text-[8px] sm:text-xs">
                <div className="flex items-center gap-1 sm:gap-2 text-slate-300">
                  <MapPin className="w-2 h-2 sm:w-3.5 sm:h-3.5 text-[#10ef82] shrink-0" />
                  <span className="text-slate-400">
                    {lang === 'en' ? 'Loc:' : 'অবস্থান:'}
                  </span>
                  <span className="font-semibold text-white ml-auto truncate">
                    {lang === 'en' ? 'Dhaka, BD' : 'ঢাকা, বাংলাদেশ'}
                  </span>
                </div>

                <div className="flex items-center gap-1 sm:gap-2 text-slate-300">
                  <Clock className="w-2 h-2 sm:w-3.5 sm:h-3.5 text-[#10ef82] shrink-0" />
                  <span className="text-slate-400">
                    {lang === 'en' ? 'Status:' : 'স্ট্যাটাস:'}
                  </span>
                  <span className="font-semibold text-[#10ef82] ml-auto flex items-center gap-0.5 truncate">
                    <CheckCircle2 className="w-2 h-2 sm:w-3 sm:h-3 shrink-0" />
                    <span>{lang === 'en' ? 'Open' : 'উন্মুক্ত'}</span>
                  </span>
                </div>
              </div>

              {/* 3 Skill Badges */}
              <div className="grid grid-cols-3 gap-0.5 xs:gap-1 pt-0.5">
                <div className="p-0.5 xs:p-1 sm:p-2 rounded sm:rounded-lg bg-[#041a12] border border-emerald-500/20 text-center">
                  <Palette className="w-2 h-2 sm:w-3.5 sm:h-3.5 text-[#10ef82] mx-auto mb-0.5" />
                  <span className="text-[6.5px] xs:text-[7.5px] sm:text-[10px] font-medium text-slate-200 block truncate leading-tight">
                    Graphic
                  </span>
                </div>

                <div className="p-0.5 xs:p-1 sm:p-2 rounded sm:rounded-lg bg-[#041a12] border border-emerald-500/20 text-center">
                  <Code2 className="w-2 h-2 sm:w-3.5 sm:h-3.5 text-[#10ef82] mx-auto mb-0.5" />
                  <span className="text-[6.5px] xs:text-[7.5px] sm:text-[10px] font-medium text-slate-200 block truncate leading-tight">
                    Full-Stack
                  </span>
                </div>

                <div className="p-0.5 xs:p-1 sm:p-2 rounded sm:rounded-lg bg-[#041a12] border border-emerald-500/20 text-center">
                  <Bot className="w-2 h-2 sm:w-3.5 sm:h-3.5 text-[#10ef82] mx-auto mb-0.5" />
                  <span className="text-[6.5px] xs:text-[7.5px] sm:text-[10px] font-medium text-slate-200 block truncate leading-tight">
                    AI Tech
                  </span>
                </div>
              </div>

              {/* Action Buttons (Compact & Sleek matching Desktop style) */}
              <div className="grid grid-cols-2 gap-1 sm:gap-2 pt-1 border-t border-emerald-500/20">
                <button
                  type="button"
                  onClick={onContactClick}
                  className="tia-glow-btn flex items-center justify-center gap-0.5 sm:gap-1 py-1 xs:py-1.5 sm:py-2 px-1 rounded sm:rounded-lg bg-gradient-to-r from-[#10ef82] to-[#00d66c] text-[#02180e] text-[6.5px] xs:text-[7.5px] sm:text-xs font-bold transition-all cursor-pointer"
                >
                  <Mail className="w-2 h-2 sm:w-3 sm:h-3" />
                  <span>{lang === 'en' ? 'Contact' : 'যোগাযোগ'}</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenWhatsApp}
                  className="flex items-center justify-center gap-0.5 sm:gap-1 py-1 xs:py-1.5 sm:py-2 px-1 rounded sm:rounded-lg bg-[#052116] hover:bg-[#093522] border border-emerald-500/30 text-white text-[6.5px] xs:text-[7.5px] sm:text-xs font-semibold transition-all hover:border-[#10ef82] cursor-pointer"
                >
                  <Send className="w-2 h-2 sm:w-3 sm:h-3 text-[#10ef82]" />
                  <span>{lang === 'en' ? 'Message' : 'মেসেজ পাঠান'}</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
