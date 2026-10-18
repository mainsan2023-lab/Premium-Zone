import React, { useState, useEffect, useRef } from 'react';
import { Language, ShowcaseProject } from '../types';
import { SHOWCASE_PROJECTS } from '../data/projectsData';
import { resolveProjectThumbnail, getYouTubeThumbnail } from '../utils/youtube';
import {
  FolderGit2,
  ChevronLeft,
  ChevronRight,
  Eye,
  TrendingUp,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Layers,
  Flame,
  Clock,
  Play,
  X,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Building,
  Wrench,
} from 'lucide-react';

export interface ProjectItem {
  id: string;
  categoryTag: string;
  categoryTagBn: string;
  metricBadge: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  techTags: string[];
  year: string;
  domainId: string; // maps to BudgetCalculator domain
  subId: string;    // maps to BudgetCalculator subcategory
  accentColor: string;
  previewGraphic: string; // SVG data uri for visual beauty
}

const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'proj-1',
    categoryTag: 'Custom Agency Theme',
    categoryTagBn: 'ফুল এজেন্সি ওয়েবসাইট',
    metricBadge: '99+ PageSpeed',
    title: 'Emerald Glassmorphic Corporate Agency',
    titleBn: 'প্রিমিয়াম ডার্ক লাক্সারি এজেন্সি ওয়েবসাইট',
    description: 'Ultra-fast Next.js & React custom theme design for creative agencies with dark emerald glassmorphism and smooth micro-interactions.',
    descriptionBn: 'ব্লগার ও পোর্টফোলিও ওয়েবসাইটের জন্য সুপার-ফাস্ট ও গ্লাসফিজম UI সহ কাস্টম ডার্ক থিম ডিজাইন।',
    techTags: ['#React', '#Next.js', '#Tailwind', '#TypeScript'],
    year: '২০২৬',
    domainId: 'frontend-web',
    subId: 'corporate-agency-site',
    accentColor: '#10ef82',
    previewGraphic: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240"><rect width="400" height="240" rx="16" fill="%23041c12"/><circle cx="340" cy="50" r="80" fill="%2310ef82" fill-opacity="0.18"/><rect x="25" y="25" width="350" height="40" rx="8" fill="%23093826"/><rect x="25" y="80" width="165" height="135" rx="12" fill="%23062619" stroke="%2310ef82" stroke-width="1.5"/><rect x="205" y="80" width="170" height="60" rx="8" fill="%23072f1e"/><rect x="205" y="155" width="170" height="60" rx="8" fill="%23072f1e"/></svg>`,
  },
  {
    id: 'proj-2',
    categoryTag: 'YouTube Viral Thumbnail',
    categoryTagBn: 'ইউটিউব ভাইরাল থাম্বনেইল',
    metricBadge: '+14.2% CTR Jump',
    title: 'Class 8 Exam Strategy Master Hook',
    titleBn: 'ক্লাস ৮ এক্সাম স্ট্র্যাটেজি: ভাইরাল হুক',
    description: 'High-contrast educational thumbnail with vibrant neon illumination and 3D text engineered to dominate YouTube recommendation feeds.',
    descriptionBn: 'অষ্টম শ্রেণির এক্সাম গাইডের জন্য তৈরি একটি প্রিমিয়াম হাই-সিটিআর থাম্বনেইল যা ভিউয়ারের দৃষ্টি টানে।',
    techTags: ['#Photoshop', '#Lightroom', '#Retouching', '#3DText'],
    year: '২০২৬',
    domainId: 'graphic-design',
    subId: 'yt-viral-thumb',
    accentColor: '#f59e0b',
    previewGraphic: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240"><rect width="400" height="240" rx="16" fill="%231f1303"/><circle cx="280" cy="110" r="100" fill="%23f59e0b" fill-opacity="0.25"/><rect x="30" y="30" width="160" height="35" rx="8" fill="%23f59e0b"/><rect x="30" y="75" width="220" height="45" rx="8" fill="%23ffffff" fill-opacity="0.15" stroke="%23f59e0b" stroke-width="1.8"/><circle cx="310" cy="130" r="55" fill="%23e2a67e"/><rect x="30" y="140" width="140" height="65" rx="10" fill="%230c0802" stroke="%23f59e0b" stroke-width="1.2"/></svg>`,
  },
  {
    id: 'proj-3',
    categoryTag: 'Brand Identity',
    categoryTagBn: 'ব্র্যান্ড ভিজ্যুয়াল সিস্টেম',
    metricBadge: 'Corporate Identity',
    title: 'Stein Infinity Academy Visual Identity',
    titleBn: 'স্টাইন ইনফিনিটি স্কুল ব্র্যান্ড সিস্টেম',
    description: 'Complete visual identity architecture including vector monogram logos, stationery suite, typography hierarchy, and brand manual.',
    descriptionBn: 'সঠিক কালার হায়ারার্কি ও ফোকাস ইলুমিনেশনের মাধ্যমে প্রাতিষ্ঠানিক ব্র্যান্ড আইডেন্টিটি।',
    techTags: ['#Illustrator', '#BrandManual', '#Vector', '#Print'],
    year: '২০২৫',
    domainId: 'branding-identity',
    subId: 'logo-brand-identity',
    accentColor: '#00ff88',
    previewGraphic: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240"><rect width="400" height="240" rx="16" fill="%2302190f"/><circle cx="200" cy="120" r="85" fill="none" stroke="%2310ef82" stroke-width="2.5" stroke-dasharray="6 6"/><polygon points="200,60 260,165 140,165" fill="none" stroke="%2300ff88" stroke-width="3.5"/><polygon points="200,180 260,75 140,75" fill="none" stroke="%2310ef82" stroke-width="3.5"/><rect x="60" y="185" width="280" height="30" rx="6" fill="%23052819"/></svg>`,
  },
  {
    id: 'proj-4',
    categoryTag: 'E-Commerce Platform',
    categoryTagBn: 'ই-কমার্স শপ ও বিকাশ',
    metricBadge: '+140% Sales Boost',
    title: 'Organic Food Store & Instant bKash Checkout',
    titleBn: 'অর্গানিক স্টোর ও ইনস্ট্যান্ট পেমেন্ট পোর্টাল',
    description: 'Conversion-engineered store with lightning page loads, responsive cart, and native bKash / Nagad checkout API integration.',
    descriptionBn: 'বিদ্যুৎগতির নেক্সট.জেএস স্টোর, সরাসরি বিকাশ ও নগদ গেটওয়ে সহ কনভার্সন অপ্টিমাইজড চেকআউট।',
    techTags: ['#Next.js', '#bKashAPI', '#Tailwind', '#FullStack'],
    year: '২০২৬',
    domainId: 'frontend-web',
    subId: 'ecommerce-bkash-site',
    accentColor: '#10ef82',
    previewGraphic: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240"><rect width="400" height="240" rx="16" fill="%23041b12"/><rect x="30" y="25" width="340" height="50" rx="10" fill="%23083523"/><rect x="30" y="90" width="100" height="120" rx="10" fill="%23062619" stroke="%2310ef82" stroke-width="1.5"/><rect x="150" y="90" width="100" height="120" rx="10" fill="%23062619" stroke="%2310ef82" stroke-width="1.5"/><rect x="270" y="90" width="100" height="120" rx="10" fill="%23062619" stroke="%2310ef82" stroke-width="1.5"/></svg>`,
  },
  {
    id: 'proj-5',
    categoryTag: 'Drama / Concert Poster',
    categoryTagBn: 'নাটক / কনসার্ট পোস্টার',
    metricBadge: '1.4M Reach',
    title: 'Cinematic Theatrical Key Visual & Poster',
    titleBn: 'সিনেমাটিক ভিজ্যুয়াল কি-আর্ট ও পোস্টার',
    description: 'Moody atmospheric composite lighting, character facial grading, and custom typography artwork for theatrical release.',
    descriptionBn: 'সিনেমাটিক ফটো ম্যানিপুলেশন, লাইটিং ও ডায়নামিক টাইটেল আর্টওয়ার্ক।',
    techTags: ['#Photoshop', '#Lighting', '#Composite', '#Grading'],
    year: '২০২৬',
    domainId: 'graphic-design',
    subId: 'movie-drama-poster',
    accentColor: '#e11d48',
    previewGraphic: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240"><rect width="400" height="240" rx="16" fill="%231a060d"/><circle cx="200" cy="100" r="80" fill="%23e11d48" fill-opacity="0.25"/><path d="M140 210 C140 140 170 110 200 110 C230 110 260 140 260 210 Z" fill="%23090205" stroke="%23e11d48" stroke-width="2"/><circle cx="200" cy="95" r="35" fill="%23c5885f"/><rect x="50" y="180" width="300" height="35" rx="8" fill="%23050102" stroke="%23e11d48" stroke-width="1.5"/></svg>`,
  },
];

interface ProjectShowcaseSliderProps {
  lang: Language;
  onSelectProjectForPrice: (domainId: string, subId: string) => void;
  onNavigateToProjects?: () => void;
  showGrid?: boolean;
}

export const ProjectShowcaseSlider: React.FC<ProjectShowcaseSliderProps> = ({
  lang,
  onSelectProjectForPrice,
  onNavigateToProjects,
  showGrid = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = PROJECTS_LIST.length;
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [activeVideoProject, setActiveVideoProject] = useState<ShowcaseProject | null>(null);

  // Exact user specification:
  // 1. One project is in the center screen
  // 2. Right and Left side projects are visible smaller
  // 3. Right side project comes into center, stays for ~1.2s ("এসে এক সেকেন্ড থাকবে"), then glides to the left
  // 4. Smooth 850ms transition + ~1200ms center dwell = 2050ms total cycle
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
      setProgressKey((k) => k + 1);
    }, 2100);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    setProgressKey((k) => k + 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
    setProgressKey((k) => k + 1);
  };

  /**
   * 3D Perspective Card positioning:
   * Center (diff 0): Active on main screen, large scale 1.0, 0deg, full opacity.
   * Right (diff 1): Visible smaller on right side (translateX 68%, scale 0.75, rotateY -22deg), visibly waiting to enter!
   * Left (diff -1): Visible smaller on left side (translateX -68%, scale 0.75, rotateY 22deg), visibly exiting!
   * Offscreen: opacity 0, waiting in queue.
   */
  const getCardStyle = (idx: number) => {
    let diff = (idx - currentIndex) % total;
    if (diff < -Math.floor(total / 2)) diff += total;
    if (diff > Math.floor(total / 2)) diff -= total;

    // ACTIVE CENTER
    if (diff === 0) {
      return {
        transform: 'translateX(0%) translateZ(0px) rotateY(0deg) scale(1)',
        opacity: 1,
        zIndex: 30,
        pointerEvents: 'auto' as const,
        filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.92)) drop-shadow(0 0 25px rgba(16,239,130,0.25))',
      };
    }

    // RIGHT SIDE (Visibly coming in from right side, angled toward viewer)
    if (diff === 1) {
      return {
        transform: 'translateX(68%) translateZ(-160px) rotateY(-22deg) scale(0.76)',
        opacity: 0.65,
        zIndex: 15,
        pointerEvents: 'auto' as const,
        filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.85)) brightness(0.85)',
      };
    }

    // LEFT SIDE (Visibly exited to left side, angled toward viewer)
    if (diff === -1) {
      return {
        transform: 'translateX(-68%) translateZ(-160px) rotateY(22deg) scale(0.76)',
        opacity: 0.65,
        zIndex: 15,
        pointerEvents: 'auto' as const,
        filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.85)) brightness(0.85)',
      };
    }

    // OFFSCREEN RIGHT
    if (diff > 1) {
      return {
        transform: 'translateX(135%) translateZ(-340px) rotateY(-35deg) scale(0.55)',
        opacity: 0,
        zIndex: 2,
        pointerEvents: 'none' as const,
      };
    }

    // OFFSCREEN LEFT
    return {
      transform: 'translateX(-135%) translateZ(-340px) rotateY(35deg) scale(0.55)',
      opacity: 0,
      zIndex: 2,
      pointerEvents: 'none' as const,
    };
  };

  const currentProject = PROJECTS_LIST[currentIndex];
  const nextProject = PROJECTS_LIST[(currentIndex + 1) % total];

  return (
    <section
      id="projects"
      className="py-20 md:py-28 relative bg-[#03130d] border-t border-emerald-500/15 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#083523] border border-[#10ef82]/40 text-xs font-bold text-[#10ef82]">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Live Project Showcase & Work' : 'প্রজেক্ট গ্যালারি ও লাইভ শোকেস'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {lang === 'en' ? (
                <>
                  Featured Projects &{' '}
                  <span className="text-gradient-tia">Creative Client Work</span>
                </>
              ) : (
                <>
                  আমাদের ক্রিয়েটিভ প্রজেক্ট ও{' '}
                  <span className="text-gradient-tia">সফল কাজসমূহ</span>
                </>
              )}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {lang === 'en'
                ? 'Dynamic stream: upcoming project enters from the right, holds center for 1 second, and smoothly glides to the left. Click on any project to check exact price.'
                : 'ডান দিকের প্রজেক্টটি বড় হয়ে স্ক্রিনে আসবে, ১ সেকেন্ড থাকবে এবং বামে চলে যাবে — একটার পর একটা ডায়নামিক ভাবে চলতে থাকবে। যেকোনো প্রজেক্টের দাম জানতে কার্ডে ক্লিক করুন।'}
            </p>
          </div>

          {/* Coming Next Indicator Pill */}
          <div className="scroll-reveal stagger-3 hidden lg:flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#062419] border border-emerald-500/30 text-xs">
            <span className="text-slate-400">
              {lang === 'en' ? 'Upcoming next:' : 'পরবর্তী প্রজেক্ট:'}
            </span>
            <span className="font-bold text-[#10ef82] flex items-center gap-1.5">
              <span>{lang === 'en' ? nextProject.title : nextProject.titleBn}</span>
              <span className="w-2 h-2 rounded-full bg-[#10ef82] animate-ping" />
            </span>
          </div>
        </div>

        {/* 3D Multi-Card Stage */}
        <div
          className="relative w-full h-[480px] sm:h-[500px] md:h-[520px] flex items-center justify-center overflow-hidden"
          style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Ambient Lighting in Center Stage */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[340px] bg-[#10ef82]/12 blur-[105px] rounded-full pointer-events-none" />

          {/* Render All Project Cards */}
          {PROJECTS_LIST.map((proj, idx) => {
            const style = getCardStyle(idx);
            const isCenter = idx === currentIndex;

            return (
              <div
                key={proj.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setProgressKey((k) => k + 1);
                }}
                className={`absolute w-[320px] sm:w-[490px] md:w-[620px] rounded-3xl bg-gradient-to-b from-[#083624] via-[#052619] to-[#03180f] p-5 sm:p-7 cursor-pointer ${
                  isCenter
                    ? 'border-2 border-[#10ef82] shadow-[0_0_35px_rgba(16,239,130,0.35)]'
                    : 'border border-emerald-500/35 hover:border-[#10ef82]/60'
                }`}
                style={{
                  ...style,
                  transition:
                    'transform 850ms cubic-bezier(0.25, 1, 0.35, 1), opacity 850ms cubic-bezier(0.25, 1, 0.35, 1), filter 850ms ease',
                  willChange: 'transform, opacity',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* 1-Second Dwell Visual Countdown Progress Bar on Center Card */}
                {isCenter && !isPaused && (
                  <div className="absolute top-0 inset-x-8 h-1 overflow-hidden rounded-full bg-emerald-950/60">
                    <div
                      key={progressKey}
                      className="h-full bg-gradient-to-r from-[#10ef82] to-[#00ff88]"
                      style={{
                        animation: 'progressFill 2.1s linear forwards',
                      }}
                    />
                  </div>
                )}

                {/* Card Top Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-emerald-500/20">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#10ef82] text-black text-xs font-bold shadow-sm">
                      {lang === 'en' ? proj.categoryTag : proj.categoryTagBn}
                    </span>

                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#083a26] border border-[#10ef82]/40 text-xs font-mono font-bold text-[#10ef82]">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{proj.metricBadge}</span>
                    </span>
                  </div>

                  <span className="text-xs font-mono text-[#10ef82] bg-[#02130b] px-2.5 py-0.5 rounded border border-emerald-500/25">
                    {proj.year}
                  </span>
                </div>

                {/* Card Body & Details */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-center">
                  
                  {/* Artwork Preview Display */}
                  <div className="sm:col-span-5 h-40 sm:h-48 rounded-2xl bg-gradient-to-tr from-[#02140c] via-[#083523] to-[#041d13] border border-emerald-500/30 p-2.5 flex flex-col justify-between relative overflow-hidden group">
                    <img
                      src={proj.previewGraphic}
                      alt={proj.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-[#021008]/85 backdrop-blur-md p-2 rounded-lg border border-emerald-500/25">
                      <span className="text-[11px] font-bold text-white block truncate">
                        {lang === 'en' ? proj.title : proj.titleBn}
                      </span>
                    </div>
                  </div>

                  {/* Description & Tech Tags */}
                  <div className="sm:col-span-7 space-y-2.5 text-left">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                      {lang === 'en' ? proj.title : proj.titleBn}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {lang === 'en' ? proj.description : proj.descriptionBn}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.techTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#03150e] border border-emerald-500/20 text-emerald-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Instant CTA: Selects this exact project in the budget calculator */}
                    <div className="pt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProjectForPrice(proj.domainId, proj.subId);
                        }}
                        className="tia-glow-btn flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#10ef82] to-[#00d66c] text-[#02180e] font-bold text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>{lang === 'en' ? 'Check Price & Order' : 'এই প্রজেক্টের দাম দেখুন'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Bottom Controls & Indicators */}
        <div className="max-w-md mx-auto mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-[#062419] border border-emerald-500/30 text-slate-300 hover:text-white hover:border-[#10ef82] transition-colors cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-[#10ef82]" />
          </button>

          <div className="flex items-center gap-2">
            {PROJECTS_LIST.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setCurrentIndex(idx);
                  setProgressKey((k) => k + 1);
                }}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 h-2 bg-[#10ef82] shadow-[0_0_8px_#10ef82]'
                    : 'w-2 h-2 bg-[#093522] hover:bg-emerald-500/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="p-2.5 rounded-full bg-[#062419] border border-emerald-500/30 text-slate-300 hover:text-white hover:border-[#10ef82] transition-colors cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-[#10ef82]" />
          </button>
        </div>

        {/* 9 Projects 3x3 Grid Section Directly Below Showcase Slider */}
        {showGrid && (
          <div className="mt-14 sm:mt-20 pt-10 sm:pt-14 border-t border-emerald-500/20">
            {/* Grid Header */}
            <div className="text-center space-y-3 mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#083523] border border-[#10ef82]/40 text-xs font-bold text-[#10ef82]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Featured 9 Projects (3×3 Grid)' : 'বাছাইকৃত ৯টি প্রজেক্ট (৩×৩ গ্রিড)'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                {lang === 'en' ? (
                  <>
                    Explore Our Top <span className="text-gradient-tia">Premier Projects</span>
                  </>
                ) : (
                  <>
                    আমাদের সেরা ৯টি <span className="text-gradient-tia">প্রজেক্ট ও কাজসমূহ</span>
                  </>
                )}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                {lang === 'en'
                  ? 'From viral YouTube thumbnails that generate millions of views to theatrical Natok posters, motion graphics, and full-stack web platforms — explore our top 9 projects below.'
                  : 'ইউটিউব থাম্বনেল, সিনেমাটিক নাটক পোস্টার, ব্র্যান্ড আইডেন্টিটি এবং আধুনিক ওয়েব অ্যাপ্লিকেশন। নিচে সাজানো ৯টি কাজ একনজরে দেখে নিন।'}
              </p>
            </div>

            {/* 3x3 Grid: 3 rows of 3 columns */}
            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 lg:gap-7">
              {SHOWCASE_PROJECTS.slice(0, 9).map((project) => (
                <div
                  key={project.id}
                  className="luminous-card luminous-edge-top group rounded-xl sm:rounded-3xl bg-gradient-to-b from-[#062619] via-[#041c12] to-[#02130b] overflow-hidden flex flex-col justify-between shadow-xl"
                >
                  {/* Card Artwork / Thumbnail Area */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#020e07] border-b border-[#0B6B3A]/35 shadow-[0_1px_0_0_rgba(32,200,120,0.2)]">
                    <img
                      src={project.imageThumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Badges Overlay */}
                    <div className="absolute top-1 sm:top-2.5 left-1 sm:left-2.5 right-1 sm:right-2.5 flex items-center justify-between gap-1 pointer-events-none z-10">
                      <span className="px-1 sm:px-2.5 py-0.5 sm:py-1 rounded bg-[#02140c]/90 backdrop-blur-md border border-[#0B6B3A]/40 text-[7px] sm:text-[10px] font-bold text-white shadow-sm break-words max-w-[85px] sm:max-w-[140px]">
                        {project.leftBadge}
                      </span>

                      <span className="flex items-center gap-0.5 sm:gap-1 px-1 sm:px-2.5 py-0.5 sm:py-1 rounded bg-[#083523]/90 backdrop-blur-md border border-[#20C878]/50 text-[7px] sm:text-[10px] font-mono font-bold text-[#20C878] shadow-sm">
                        <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3" />
                        <span>{project.metricBadge}</span>
                      </span>
                    </div>

                    {/* YouTube Video Play Button Overlay if Video */}
                    {project.isVideo && (
                      <div
                        onClick={() => setActiveVideoProject(project)}
                        className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer group-hover:bg-black/25 transition-all"
                      >
                        <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-full bg-[#20C878] text-black flex items-center justify-center shadow-[0_0_18px_#20C878] group-hover:scale-110 active:scale-95 transition-all">
                          <Play className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-black ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-2 sm:p-5 space-y-1 sm:space-y-3.5 flex-1 flex flex-col justify-between text-left">
                    <div className="space-y-1 sm:space-y-2">
                      <h4 className="text-[9px] xs:text-[10px] sm:text-base font-extrabold text-white group-hover:text-[#20C878] transition-colors leading-tight break-words">
                        {lang === 'en' ? project.title : project.titleBn}
                      </h4>

                      <p className="text-[7.5px] xs:text-[8.5px] sm:text-xs text-slate-300 leading-snug break-words">
                        {lang === 'en' ? project.description : project.descriptionBn}
                      </p>
                    </div>

                    {/* Meta Strip (Desktop/Tablet) with luminous divider */}
                    <div className="hidden sm:block space-y-2 pt-2 border-t border-[#0B6B3A]/30 shadow-[inset_0_1px_0_0_rgba(32,200,120,0.18)] text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Wrench className="w-3.5 h-3.5 text-[#10ef82] shrink-0" />
                        <span className="text-[11px] text-slate-400">সফটওয়্যার:</span>
                        <div className="flex flex-wrap gap-1">
                          {project.software.map((s, idx) => (
                            <span
                              key={idx}
                              className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#03150e] border border-emerald-500/25 text-emerald-300"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] pt-0.5">
                        <div className="flex items-center gap-1 text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-[#10ef82]" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-1 font-semibold text-white">
                          <Building className="w-3.5 h-3.5 text-[#10ef82]" />
                          <span className="truncate max-w-[120px]">{project.client}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action: Check Price in Calculator */}
                    <div className="pt-1 sm:pt-3 border-t border-emerald-500/15">
                      <button
                        type="button"
                        onClick={() => onSelectProjectForPrice(project.domainId, project.subId)}
                        className="tia-glow-btn w-full inline-flex items-center justify-center gap-1 sm:gap-2 py-1 sm:py-2.5 px-1.5 sm:px-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#10ef82] to-[#00d66c] text-[#02180e] font-extrabold text-[8px] sm:text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md cursor-pointer"
                      >
                        <Eye className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                        <span>{lang === 'en' ? 'Check Price' : 'দাম দেখুন'}</span>
                        <ArrowUpRight className="hidden xs:inline w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Button: View All Our Projects */}
            <div className="mt-10 sm:mt-14 text-center">
              <button
                type="button"
                onClick={() => {
                  if (onNavigateToProjects) {
                    onNavigateToProjects();
                  } else {
                    window.location.hash = 'projects';
                  }
                }}
                className="tia-glow-btn inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-9 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-[#10ef82] via-[#00d66c] to-[#04a055] text-[#02180e] font-black text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(16,239,130,0.45)] cursor-pointer group"
              >
                <span>{lang === 'en' ? 'View All Our Projects' : 'আমাদের সমস্ত প্রজেক্ট দেখুন'}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Interactive YouTube Video Player Modal */}
      {activeVideoProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#03150e] rounded-3xl border border-[#10ef82]/50 shadow-2xl overflow-hidden p-4 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <h3 className="text-sm sm:text-base font-extrabold text-white truncate max-w-lg">
                  {lang === 'en' ? activeVideoProject.title : activeVideoProject.titleBn}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoProject(null)}
                className="p-1.5 rounded-full bg-[#062419] border border-emerald-500/30 text-slate-300 hover:text-white hover:bg-red-500/20 hover:border-red-500 transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-emerald-500/30 shadow-inner">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoProject.youtubeId}?autoplay=1`}
                title={activeVideoProject.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="text-xs text-emerald-300 font-mono">
                {activeVideoProject.client} • {activeVideoProject.year}
              </span>
              <a
                href={activeVideoProject.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600/90 hover:bg-red-600 text-white font-bold text-xs transition-colors"
              >
                <span>{lang === 'en' ? 'Watch on YouTube' : 'ইউটিউবে দেখুন'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};
