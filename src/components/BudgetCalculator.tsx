import React, { useState, useMemo, useEffect } from 'react';
import { Currency, Language } from '../types';
import {
  Calculator,
  Check,
  CheckCircle2,
  Clock,
  MessageCircle,
  Sparkles,
  Flame,
  Palette,
  Smartphone,
  Code2,
  Crown,
  Video,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp
} from 'lucide-react';

export interface SubCategoryItem {
  id: string;
  title: string;
  titleBn: string;
  desc: string;
  descBn: string;
  regularPriceBDT: number;
  regularPriceUSD: number;
  discountedPriceBDT: number;
  discountedPriceUSD: number;
  deliveryDays: number;
  deliveryDaysBn: string;
}

export interface MainDomainCategory {
  id: string;
  name: string;
  nameBn: string;
  icon: React.ComponentType<{ className?: string }>;
  subcategories: SubCategoryItem[];
}

export const DOMAIN_DATA: MainDomainCategory[] = [
  {
    id: 'graphic-design',
    name: 'Graphics Design',
    nameBn: 'গ্রাফিক্স ডিজাইন',
    icon: Palette,
    subcategories: [
      {
        id: 'yt-viral-thumb',
        title: 'YouTube Viral Thumbnail',
        titleBn: 'ইউটিউব ভাইরাল থাম্বনেইল',
        desc: 'High-CTR click-maximizing thumbnail, custom grading & 3D typography',
        descBn: 'হাই-সিটিআর ক্লিকযোগ্য থাম্বনেইল, কালার গ্রেডিং ও ৩ডি টাইপোগ্রাফি',
        regularPriceBDT: 1500,
        regularPriceUSD: 18,
        discountedPriceBDT: 1050,
        discountedPriceUSD: 12,
        deliveryDays: 1,
        deliveryDaysBn: '১ দিন',
      },
      {
        id: 'movie-drama-poster',
        title: 'Movie / Drama / Concert Poster',
        titleBn: 'মুভি / নাটক / কনসার্ট পোস্টার',
        desc: 'Cinematic photo manipulation, dramatic lighting and custom title artwork',
        descBn: 'সিনেমাটিক ফটো ম্যানিপুলেশন, লাইটিং এবং টাইটেল আর্টওয়ার্ক',
        regularPriceBDT: 3500,
        regularPriceUSD: 42,
        discountedPriceBDT: 2450,
        discountedPriceUSD: 29,
        deliveryDays: 2,
        deliveryDaysBn: '২ দিন',
      },
      {
        id: 'social-banner-ad',
        title: 'Social Media Banner & Ad Post',
        titleBn: 'সোশ্যাল মিডিয়া ব্যানার ও প্রমোশনাল অ্যাড',
        desc: 'Facebook & Instagram conversion marketing ad creative with hooks',
        descBn: 'ফেসবুক/ইনস্টাগ্রাম প্রমোশনাল সেলস ও লিড জেনারেশন অ্যাড ডিজাইন',
        regularPriceBDT: 2000,
        regularPriceUSD: 24,
        discountedPriceBDT: 1400,
        discountedPriceUSD: 17,
        deliveryDays: 2,
        deliveryDaysBn: '২ দিন',
      },
      {
        id: 'photo-manipulation',
        title: 'High-End Photo Manipulation & Retouch',
        titleBn: 'ফটো ম্যানিপুলেশন ও রিটাচিং',
        desc: 'Multi-layer composite artwork, lighting transformation & cleanup',
        descBn: 'মাল্টি-লেয়ার কম্পোজিট আর্টওয়ার্ক, কালার ব্যালেন্সিং ও রিটাচিং',
        regularPriceBDT: 2800,
        regularPriceUSD: 33,
        discountedPriceBDT: 1960,
        discountedPriceUSD: 23,
        deliveryDays: 2,
        deliveryDaysBn: '২ দিন',
      },
    ],
  },
  {
    id: 'branding-identity',
    name: 'Brand Identity & Logo',
    nameBn: 'ব্র্যান্ডিং ও লোগো',
    icon: Crown,
    subcategories: [
      {
        id: 'logo-brand-identity',
        title: 'Logo & Visual Brand Identity System',
        titleBn: 'লোগো ডিজাইন ও পূর্ণাঙ্গ ব্র্যান্ড আইডেন্টিটি',
        desc: 'Vector logo marks, brand typography hierarchy & complete asset kit',
        descBn: 'অরিজিনাল ভেক্টর লোগো, ব্র্যান্ড কালার প্যালেট ও সোশ্যাল কিট',
        regularPriceBDT: 6000,
        regularPriceUSD: 70,
        discountedPriceBDT: 4200,
        discountedPriceUSD: 49,
        deliveryDays: 3,
        deliveryDaysBn: '৩ দিন',
      },
      {
        id: 'brand-guidelines-manual',
        title: 'Comprehensive Brand Guidelines Manual',
        titleBn: 'ব্র্যান্ড গাইডলাইন ও স্টাইল ম্যানুয়াল (PDF)',
        desc: '20+ page corporate brand manual with logo rules & typography',
        descBn: '২০+ পাতার কর্পোরেট ব্র্যান্ড বাইবেল, কালার কোড ও ব্যবহারের নিয়মাবলী',
        regularPriceBDT: 10000,
        regularPriceUSD: 115,
        discountedPriceBDT: 7000,
        discountedPriceUSD: 80,
        deliveryDays: 4,
        deliveryDaysBn: '৪ দিন',
      },
      {
        id: 'stationery-visiting-card',
        title: 'Executive Stationery & Visiting Card Kit',
        titleBn: 'ভিজিটিং কার্ড, লেটারহেড ও স্টেশনারি কিট',
        desc: 'Print-ready vector stationery, envelopes, stamp & employee badges',
        descBn: 'প্রিন্ট-রেডি প্রিমিয়াম ভিজিটিং কার্ড, প্যাড, খাম ও অফিস স্টেশনারি',
        regularPriceBDT: 3500,
        regularPriceUSD: 40,
        discountedPriceBDT: 2450,
        discountedPriceUSD: 28,
        deliveryDays: 2,
        deliveryDaysBn: '২ দিন',
      },
    ],
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design (Figma)',
    nameBn: 'ইউআই/ইউএক্স ডিজাইন (Figma)',
    icon: Smartphone,
    subcategories: [
      {
        id: 'landing-ui',
        title: 'High-Converting Landing Page UI/UX',
        titleBn: 'ল্যান্ডিং পেজ UI/UX (Figma)',
        desc: 'Modern responsive screens, auto-layout & interactive prototype',
        descBn: 'আধুনিক রেসপন্সিভ স্ক্রিন, অটো লেআউট ও ক্লিকযোগ্য প্রোটোটাইপ',
        regularPriceBDT: 8000,
        regularPriceUSD: 95,
        discountedPriceBDT: 5600,
        discountedPriceUSD: 66,
        deliveryDays: 3,
        deliveryDaysBn: '৩ দিন',
      },
      {
        id: 'mobile-app-ui',
        title: 'Mobile App UI/UX (5 Screens Pack)',
        titleBn: 'মোবাইল অ্যাপ স্ক্রিন (৫টি স্ক্রিন)',
        desc: 'iOS & Android design guidelines, design tokens & components',
        descBn: 'ইউজার ফ্লো, কম্পোনেন্ট লাইব্রেরি ও আধুনিক ডার্ক/লাইট মোড',
        regularPriceBDT: 15000,
        regularPriceUSD: 175,
        discountedPriceBDT: 10500,
        discountedPriceUSD: 122,
        deliveryDays: 5,
        deliveryDaysBn: '৫ দিন',
      },
      {
        id: 'saas-dashboard-ui',
        title: 'SaaS Analytics Dashboard UI Suite',
        titleBn: 'SaaS ড্যাশবোর্ড UI স্যুট',
        desc: 'Complex data tables, interactive charts and analytics views',
        descBn: 'কমপ্লেক্স ডেটা টেবিল, চার্ট ও মোবাইল-অপ্টিমাইজড অ্যানালিটিক্স ভিউ',
        regularPriceBDT: 20000,
        regularPriceUSD: 235,
        discountedPriceBDT: 14000,
        discountedPriceUSD: 165,
        deliveryDays: 6,
        deliveryDaysBn: '৬ দিন',
      },
    ],
  },
  {
    id: 'frontend-web',
    name: 'Frontend Web Development',
    nameBn: 'ফ্রন্টএন্ড ও ফুলস্ট্যাক ওয়েব',
    icon: Code2,
    subcategories: [
      {
        id: 'speed-landing-react',
        title: 'High-Speed React / Next.js Landing Page',
        titleBn: 'হাই-স্পিড ল্যান্ডিং পেজ (React / Next.js)',
        desc: '99+ PageSpeed score, Tailwind CSS, SEO & mobile responsive',
        descBn: '৯৯+ গুগল পেজস্পিড, টেইলউইন্ড সিএসএস ও দ্রুততম লোডিং টাইম',
        regularPriceBDT: 12000,
        regularPriceUSD: 140,
        discountedPriceBDT: 8400,
        discountedPriceUSD: 98,
        deliveryDays: 4,
        deliveryDaysBn: '৪ দিন',
      },
      {
        id: 'corporate-agency-site',
        title: 'Corporate Agency & Portfolio Website',
        titleBn: 'ফুল এজেন্সি / পোর্টফোলিও ওয়েবসাইট',
        desc: 'Multi-page architecture with emerald & tia glassmorphic effects',
        descBn: 'মাল্টি-পেজ রেসপন্সিভ ও ডার্ক গ্লাস মোড ডিজাইন সহ ফুল ওয়েবসাইট',
        regularPriceBDT: 25000,
        regularPriceUSD: 290,
        discountedPriceBDT: 17500,
        discountedPriceUSD: 203,
        deliveryDays: 7,
        deliveryDaysBn: '৭ দিন',
      },
      {
        id: 'ecommerce-bkash-site',
        title: 'E-Commerce Store & bKash Gateway',
        titleBn: 'ই-কমার্স শপ ও বিকাশ পেমেন্ট গেটওয়ে',
        desc: 'Product catalog, shopping cart & native bKash / Card checkout flow',
        descBn: 'প্রোডাক্ট ক্যাটালগ ও ইনস্ট্যান্ট পেমেন্ট গেটওয়ে ইন্টিগ্রেশন',
        regularPriceBDT: 40000,
        regularPriceUSD: 460,
        discountedPriceBDT: 28000,
        discountedPriceUSD: 322,
        deliveryDays: 10,
        deliveryDaysBn: '১০ দিন',
      },
    ],
  },
  {
    id: 'video-motion',
    name: 'Video & Motion Graphics',
    nameBn: 'ভিডিও ও মোশন গ্রাফিক্স',
    icon: Video,
    subcategories: [
      {
        id: 'reels-shorts-viral',
        title: 'Viral Reels & Shorts Video Edit',
        titleBn: 'ভাইরাল রিলস ও শর্টস ভিডিও এডিটিং',
        desc: 'Dynamic subtitles, sound design, zooms, sound effects & B-rolls',
        descBn: 'ডায়নামিক সাবটাইটেল, সাউন্ড ডিজাইন, হুক কাটস ও হাইপ বি-রোল',
        regularPriceBDT: 2500,
        regularPriceUSD: 30,
        discountedPriceBDT: 1750,
        discountedPriceUSD: 21,
        deliveryDays: 1,
        deliveryDaysBn: '১ দিন',
      },
      {
        id: 'yt-full-video-edit',
        title: 'YouTube Long-Form Video Editing',
        titleBn: 'ইউটিউব ফুল ভিডিও এডিটিং ও কালার গ্রেড',
        desc: 'Engaging storytelling, pacing, cinematic grading & motion graphics',
        descBn: 'স্টোরিটেলিং এডিটিং, মোশন গ্রাফিক্স ও প্রিমিয়াম কালার গ্রেডিং',
        regularPriceBDT: 6000,
        regularPriceUSD: 70,
        discountedPriceBDT: 4200,
        discountedPriceUSD: 49,
        deliveryDays: 3,
        deliveryDaysBn: '৩ দিন',
      },
      {
        id: 'motion-logo-intro',
        title: '3D Motion Logo Animation & Intro',
        titleBn: '৩ডি মোশন লোগো অ্যানিমেশন ও ইন্ট্রো',
        desc: 'Custom 4K logo sting, particle energy effects and audio branding',
        descBn: 'কাস্টম ফোর-কে লোগো অ্যানিমেশন ও সাউন্ড এফেক্ট সহ ইন্ট্রো',
        regularPriceBDT: 4500,
        regularPriceUSD: 52,
        discountedPriceBDT: 3150,
        discountedPriceUSD: 36,
        deliveryDays: 2,
        deliveryDaysBn: '২ দিন',
      },
    ],
  },
];

const VOLUME_OPTIONS = [
  { id: 'vol-single', labelEn: '1 Single Project', labelBn: '১টি একক কাজ (Single Task)', multiplier: 1, discountPct: 0 },
  { id: 'vol-pack3', labelEn: '3 Tasks Pack (10% Bonus Off)', labelBn: '৩টি কাজের প্যাক (১০% অতিরিক্ত ছাড়)', multiplier: 3, discountPct: 0.1 },
  { id: 'vol-pack5', labelEn: '5 Tasks Mega Pack (20% Extra Off)', labelBn: '৫টি কাজের মেগা প্যাক (২০% অতিরিক্ত ছাড়)', multiplier: 5, discountPct: 0.2 },
  { id: 'vol-monthly', labelEn: 'Monthly Partnership / Retainer', labelBn: 'মাসিক পার্টনারশিপ / রিটেইনার', multiplier: 8, discountPct: 0.28 },
];

interface BudgetCalculatorProps {
  lang: Language;
  currency: Currency;
  preselectedDomainId?: string;
  preselectedSubId?: string;
}

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({
  lang,
  currency: initialCurrency,
  preselectedDomainId,
  preselectedSubId,
}) => {
  const [currency, setCurrency] = useState<Currency>(initialCurrency || 'BDT');
  const [selectedDomainId, setSelectedDomainId] = useState<string>(preselectedDomainId || 'graphic-design');
  const [selectedSubId, setSelectedSubId] = useState<string>(preselectedSubId || 'yt-viral-thumb');
  const [volumeId, setVolumeId] = useState<string>('vol-single');
  const [isSuperFast, setIsSuperFast] = useState<boolean>(false);
  const [highlightGlow, setHighlightGlow] = useState(false);
  const [preselectedNotice, setPreselectedNotice] = useState<string | null>(null);

  // Sync external preselection from project showcase or other CTAs
  useEffect(() => {
    if (preselectedDomainId) {
      setSelectedDomainId(preselectedDomainId);
    }
    if (preselectedSubId) {
      setSelectedSubId(preselectedSubId);
      setHighlightGlow(true);

      // Find subcategory title for banner notice
      const domain = DOMAIN_DATA.find((d) => d.id === preselectedDomainId);
      const sub = domain?.subcategories.find((s) => s.id === preselectedSubId);
      if (sub) {
        setPreselectedNotice(lang === 'en' ? sub.title : sub.titleBn);
      }

      const timer = setTimeout(() => {
        setHighlightGlow(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [preselectedDomainId, preselectedSubId, lang]);

  useEffect(() => {
    setCurrency(initialCurrency);
  }, [initialCurrency]);

  const currentDomain = useMemo(() => {
    return DOMAIN_DATA.find((d) => d.id === selectedDomainId) || DOMAIN_DATA[0];
  }, [selectedDomainId]);

  const currentSub = useMemo(() => {
    return (
      currentDomain.subcategories.find((s) => s.id === selectedSubId) ||
      currentDomain.subcategories[0]
    );
  }, [currentDomain, selectedSubId]);

  const currentVolume = useMemo(() => {
    return VOLUME_OPTIONS.find((v) => v.id === volumeId) || VOLUME_OPTIONS[0];
  }, [volumeId]);

  const handleDomainChange = (domainId: string) => {
    setSelectedDomainId(domainId);
    const domain = DOMAIN_DATA.find((d) => d.id === domainId);
    if (domain && domain.subcategories[0]) {
      setSelectedSubId(domain.subcategories[0].id);
      setPreselectedNotice(null);
    }
  };

  const { regularTotal, discountedTotal, savings, deliveryDaysCalculated } = useMemo(() => {
    const isBDT = currency === 'BDT';
    const baseReg = isBDT ? currentSub.regularPriceBDT : currentSub.regularPriceUSD;
    const baseDisc = isBDT ? currentSub.discountedPriceBDT : currentSub.discountedPriceUSD;

    const volumeMultiplier = currentVolume.multiplier;
    const volumeDiscountMultiplier = 1 - currentVolume.discountPct;
    const expressMultiplier = isSuperFast ? 1.3 : 1.0;

    const calcRegular = Math.round(baseReg * volumeMultiplier * expressMultiplier);
    const calcDiscounted = Math.round(baseDisc * volumeMultiplier * volumeDiscountMultiplier * expressMultiplier);
    const calcSavings = calcRegular - calcDiscounted;

    let days = currentSub.deliveryDays;
    if (volumeId === 'vol-pack3') days = Math.round(days * 2.2);
    else if (volumeId === 'vol-pack5') days = Math.round(days * 3.5);
    else if (volumeId === 'vol-monthly') days = 30;

    if (isSuperFast && days > 1) {
      days = Math.max(1, Math.round(days * 0.6));
    }

    return {
      regularTotal: calcRegular,
      discountedTotal: calcDiscounted,
      savings: calcSavings,
      deliveryDaysCalculated: days,
    };
  }, [currency, currentSub, currentVolume, isSuperFast, volumeId]);

  const formatPrice = (val: number) => {
    return currency === 'BDT' ? `৳${val.toLocaleString()}` : `$${val.toLocaleString()}`;
  };

  const handleStartWhatsApp = () => {
    const rawMsg = `Hello Premium Zone! I calculated my project order:
*Category:* ${currentDomain.name} (${currentDomain.nameBn})
*Project / Deliverable:* ${currentSub.title} (${currentSub.titleBn})
*Volume / Scope:* ${currentVolume.labelBn}
*Delivery Mode:* ${isSuperFast ? 'Super Fast / Express (+30%)' : 'Standard'}
*Discounted Price:* ${formatPrice(discountedTotal)} (30% Discount Applied)
*Estimated Delivery:* ${deliveryDaysCalculated} days
Can we discuss details and begin work?`;

    const encoded = encodeURIComponent(rawMsg);
    window.open(`https://wa.me/8801800000000?text=${encoded}`, '_blank');
  };

  return (
    <section id="calculator" className="py-12 sm:py-20 relative bg-[#03140e] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container with Luminous Lighting */}
        <div
          className={`luminous-card luminous-edge-top rounded-2xl sm:rounded-3xl bg-[#062419]/92 backdrop-blur-2xl transition-all duration-700 p-2.5 xs:p-4 sm:p-7 md:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.7)] relative ${
            highlightGlow
              ? 'border-[#20C878] ring-4 ring-[#20C878]/40 shadow-[0_0_55px_rgba(32,200,120,0.5)]'
              : ''
          }`}
        >
          {/* Active Preselected Project Banner Notice */}
          {preselectedNotice && (
            <div className="mb-4 sm:mb-6 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-[#083d27] border-2 border-[#10ef82] flex items-center justify-between gap-2 sm:gap-3 animate-pulse shadow-[0_0_20px_rgba(16,239,130,0.35)]">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#10ef82] text-black flex items-center justify-center font-bold text-xs sm:text-sm">
                  ✓
                </span>
                <div>
                  <span className="text-[9px] sm:text-xs text-emerald-200 block">
                    {lang === 'en' ? 'Selected Project Price Calculation' : 'নির্বাচিত প্রজেক্টের নির্ধারিত মূল্য নিচে প্রদর্শিত হচ্ছে:'}
                  </span>
                  <span className="text-[10px] sm:text-sm font-extrabold text-white break-words">
                    {preselectedNotice}
                  </span>
                </div>
              </div>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#10ef82] text-black font-extrabold text-[9px] sm:text-xs shrink-0">
                {formatPrice(discountedTotal)}
              </span>
            </div>
          )}

          {/* Header Badges & Title */}
          <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            <div className="scroll-reveal stagger-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#083523] border border-[#10ef82]/40 text-[10px] sm:text-xs font-bold text-[#10ef82]">
                <Calculator className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>
                  {lang === 'en'
                    ? 'Project Cost & Delivery Time Calculator'
                    : 'প্রজেক্ট বাজেট ও সময় নির্ধারণ'}
                </span>
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#3d2408] border border-amber-500/40 text-[10px] sm:text-xs font-bold text-amber-300">
                <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                <span>
                  {lang === 'en' ? '30% Special Promotional Discount Active!' : '৩০% বিশেষ ছাড় চলছে!'}
                </span>
              </span>
            </div>

            <h2 className="scroll-reveal stagger-2 text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'en' ? (
                <>
                  Select Category & Deliverable to{' '}
                  <span className="text-gradient-tia">Get Exact Budget & Time</span>
                </>
              ) : (
                <>
                  ক্যাটাগরি ও সাব-ক্যাটাগরি সিলেক্ট করে{' '}
                  <span className="text-gradient-tia">বাজেট ও সময় জানুন</span>
                </>
              )}
            </h2>

            <p className="scroll-reveal stagger-3 text-[11px] sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'Completely transparent and instant pricing — clicking any project above loads its exact price breakdown right here.'
                : 'স্বচ্ছ ও নিরপেক্ষ বাজেট নির্ধারণ — যেকোনো প্রজেক্ট বা সার্ভিস নির্বাচন করলেই সরাসরি এই প্রজেক্টের সঠিক অফার মূল্য এখানে দেখতে পাবেন।'}
            </p>
          </div>

          {/* Grid Layout: Controls (Left 7 Cols) + Summary Card (Right 5 Cols) - SIDE BY SIDE on mobile & desktop */}
          <div className="grid grid-cols-12 gap-1.5 xs:gap-2 sm:gap-6 lg:gap-8 items-start">
            
            {/* LEFT COLUMN: Steps 1, 2, 3, 4 (Col-7) */}
            <div className="col-span-7 space-y-2.5 sm:space-y-6">
              
              {/* Step 1: Main Domain Category Selection */}
              <div>
                <label className="flex items-center gap-1 sm:gap-1.5 text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 mb-1 sm:mb-3">
                  <span className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-[#10ef82] text-black flex items-center justify-center text-[8px] sm:text-[11px] font-black shrink-0">
                    {lang === 'en' ? '1' : '১'}
                  </span>
                  <span className="break-words">
                    {lang === 'en'
                      ? 'Select Category (Main Domain):'
                      : 'ক্যাটাগরি সিলেক্ট করুন (Main Domain):'}
                  </span>
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2.5">
                  {DOMAIN_DATA.map((domain) => {
                    const isSelected = selectedDomainId === domain.id;
                    const IconComponent = domain.icon;
                    return (
                      <button
                        key={domain.id}
                        type="button"
                        onClick={() => handleDomainChange(domain.id)}
                        className={`p-1.5 xs:p-2 sm:p-3 rounded-lg sm:rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer min-h-[50px] xs:min-h-[58px] sm:min-h-[88px] ${
                          isSelected
                            ? 'bg-[#093d27] border-[#10ef82] text-white shadow-[0_0_15px_rgba(16,239,130,0.3)] ring-1 ring-[#10ef82]'
                            : 'bg-[#041d13] border-emerald-500/20 text-slate-300 hover:border-emerald-500/40'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1 sm:mb-1.5">
                          <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-7 sm:h-7 rounded sm:rounded-xl bg-[#03150e] flex items-center justify-center text-[#10ef82] shrink-0">
                            <IconComponent className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                          </div>
                          {isSelected && (
                            <CheckCircle2 className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#10ef82] shrink-0" />
                          )}
                        </div>

                        {/* FULL TEXT DISPLAY ON MOBILE - FONT SIZED PROPORTIONALLY */}
                        <span className="text-[8px] xs:text-[9px] sm:text-xs font-bold text-white leading-snug break-words">
                          {lang === 'en' ? domain.name : domain.nameBn}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Specific Deliverables Grid */}
              <div>
                <label className="flex items-center gap-1 sm:gap-1.5 text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 mb-1 sm:mb-3">
                  <span className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-[#10ef82] text-black flex items-center justify-center text-[8px] sm:text-[11px] font-black shrink-0">
                    {lang === 'en' ? '2' : '২'}
                  </span>
                  <span className="break-words">
                    {lang === 'en'
                      ? 'Sub-Category / Specific Deliverable:'
                      : 'সাব-ক্যাটাগরি বা কাজের ধরন:'}
                  </span>
                </label>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 sm:gap-3">
                  {currentDomain.subcategories.slice(0, 4).map((sub) => {
                    const isSelected = selectedSubId === sub.id;
                    const discPrice = currency === 'BDT' ? sub.discountedPriceBDT : sub.discountedPriceUSD;
                    const regPrice = currency === 'BDT' ? sub.regularPriceBDT : sub.regularPriceUSD;

                    return (
                      <div
                        key={sub.id}
                        onClick={() => {
                          setSelectedSubId(sub.id);
                          setPreselectedNotice(lang === 'en' ? sub.title : sub.titleBn);
                        }}
                        className={`p-1.5 xs:p-2 sm:p-3.5 rounded-lg sm:rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#093e28] border-2 border-[#10ef82] text-white shadow-[0_0_22px_rgba(16,239,130,0.3)] ring-1 ring-[#10ef82]'
                            : 'bg-[#041d13] border-emerald-500/20 text-slate-300 hover:border-emerald-500/40 hover:bg-[#062619]'
                        }`}
                      >
                        <div>
                          <div className="flex items-start justify-between gap-1 mb-1">
                            {/* FULL TITLE ON MOBILE - NO TRUNCATION */}
                            <h4 className="text-[8px] xs:text-[9px] sm:text-xs font-bold text-white leading-tight break-words">
                              {lang === 'en' ? sub.title : sub.titleBn}
                            </h4>
                            {isSelected && (
                              <CheckCircle2 className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#10ef82] shrink-0" />
                            )}
                          </div>

                          {/* FULL DESCRIPTION VISIBLE WITH SMALL COMPACT FONT */}
                          <p className="text-[7px] xs:text-[8px] sm:text-[11px] text-slate-300 leading-snug break-words mb-1.5 sm:mb-2">
                            {lang === 'en' ? sub.desc : sub.descBn}
                          </p>
                        </div>

                        {/* Price & Delivery Days */}
                        <div className="flex items-center justify-between pt-1 border-t border-emerald-500/15">
                          <div className="flex items-baseline gap-0.5 sm:gap-1">
                            <span className="text-[8.5px] xs:text-[10px] sm:text-sm font-extrabold text-[#10ef82] font-mono">
                              {formatPrice(discPrice)}
                            </span>
                            <span className="text-[7px] xs:text-[8px] sm:text-[10px] text-slate-400 line-through font-mono hidden xs:inline">
                              {formatPrice(regPrice)}
                            </span>
                            <span className="px-0.5 xs:px-1 py-0.2 rounded text-[6.5px] xs:text-[7.5px] sm:text-[9px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                              -30%
                            </span>
                          </div>

                          <div className="flex items-center gap-0.5 text-[7px] xs:text-[8px] sm:text-[11px] text-slate-300">
                            <Clock className="w-2 h-2 sm:w-3 sm:h-3 text-[#10ef82]" />
                            <span>{lang === 'en' ? `${sub.deliveryDays} Days` : sub.deliveryDaysBn}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Volume / Scope Selection */}
              <div>
                <label className="flex items-center gap-1 sm:gap-1.5 text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 mb-1 sm:mb-3">
                  <span className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-[#10ef82] text-black flex items-center justify-center text-[8px] sm:text-[11px] font-black shrink-0">
                    {lang === 'en' ? '3' : '৩'}
                  </span>
                  <span className="break-words">
                    {lang === 'en'
                      ? 'Volume / Project Scope:'
                      : 'পরিমাণ / কাজের ভলিউম:'}
                  </span>
                </label>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 sm:gap-2.5">
                  {VOLUME_OPTIONS.map((vol) => {
                    const isSelected = volumeId === vol.id;
                    return (
                      <button
                        key={vol.id}
                        type="button"
                        onClick={() => setVolumeId(vol.id)}
                        className={`p-1.5 xs:p-2 sm:p-3 rounded-lg sm:rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#093e28] border-[#10ef82] text-white shadow-sm ring-1 ring-[#10ef82]'
                            : 'bg-[#041c13] border-emerald-500/20 text-slate-300 hover:border-emerald-500/40'
                        }`}
                      >
                        {/* FULL TEXT DISPLAY ON MOBILE - NO TRUNCATION */}
                        <span className="text-[7.5px] xs:text-[8.5px] sm:text-xs font-semibold leading-snug break-words">
                          {lang === 'en' ? vol.labelEn : vol.labelBn}
                        </span>
                        {isSelected && <Check className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#10ef82] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Super Fast / Express Delivery Switch */}
              <div className="p-1.5 xs:p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-[#041c13] border border-emerald-500/25 flex items-center justify-between">
                <div className="flex items-center gap-1 sm:gap-3">
                  <div className="w-5 h-5 sm:w-9 sm:h-9 rounded sm:rounded-xl bg-[#083523] flex items-center justify-center text-[#10ef82] shrink-0">
                    <Clock className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h4 className="text-[8px] xs:text-[9px] sm:text-xs font-bold text-white leading-tight break-words">
                      {lang === 'en'
                        ? 'Super Fast / Express Delivery?'
                        : 'সুপার ফাস্ট ডেলিভারি প্রয়োজন?'}
                    </h4>
                    <p className="text-[7px] xs:text-[8px] sm:text-[11px] text-slate-400 hidden xs:block">
                      {lang === 'en'
                        ? 'Reduces delivery duration (+30% express fee)'
                        : 'জরুরি ডেলিভারিতে সময় কম লাগবে (+৩০% ফি)'}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsSuperFast(!isSuperFast)}
                  className={`w-8 sm:w-12 h-4 sm:h-6 flex items-center rounded-full p-0.5 sm:p-1 transition-colors cursor-pointer shrink-0 ${
                    isSuperFast ? 'bg-[#10ef82]' : 'bg-[#03150e] border border-emerald-500/30'
                  }`}
                  aria-label="Toggle Express Delivery"
                >
                  <div
                    className={`bg-white w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-md transform transition-transform ${
                      isSuperFast ? 'translate-x-3.5 sm:translate-x-6 bg-[#02180e]' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Summary Card showing project price side-by-side (Col-5) */}
            <div className="luminous-card luminous-edge-top col-span-5 rounded-xl sm:rounded-3xl bg-gradient-to-b from-[#093724] via-[#06291a] to-[#041d13] p-1.5 xs:p-2 sm:p-6 space-y-1.5 sm:space-y-5 shadow-2xl relative">
              
              {/* Currency Selector Pill on Top with luminous divider */}
              <div className="flex items-center justify-between border-b border-[#0B6B3A]/30 shadow-[inset_0_-1px_0_0_rgba(32,200,120,0.18)] pb-1.5 sm:pb-4">
                <span className="text-[8px] sm:text-xs font-bold text-slate-200 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#20C878]" />
                  <span className="hidden xs:inline">{lang === 'en' ? 'Currency:' : 'মুদ্রা:'}</span>
                </span>

                <div className="flex items-center p-0.5 bg-[#03170e] border border-[#0B6B3A]/40 rounded-full text-[8px] xs:text-[9px] sm:text-xs">
                  <button
                    type="button"
                    onClick={() => setCurrency('BDT')}
                    className={`px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-bold transition-all ${
                      currency === 'BDT'
                        ? 'bg-[#20C878] text-black shadow-sm font-black'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    BDT (৳)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency('USD')}
                    className={`px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-bold transition-all ${
                      currency === 'USD'
                        ? 'bg-[#10ef82] text-black shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    USD ($)
                  </button>
                </div>
              </div>

              {/* Selected Specs Lines - FULL TEXT VISIBLE, NO TRUNCATION */}
              <div className="space-y-1 sm:space-y-2 text-[7.5px] xs:text-[8.5px] sm:text-xs text-slate-300">
                <div className="flex justify-between items-baseline gap-1">
                  <span className="text-slate-400 shrink-0">{lang === 'en' ? 'Category:' : 'ক্যাটাগরি:'}</span>
                  <span className="font-bold text-[#10ef82] text-right break-words leading-[1.15]">
                    {lang === 'en' ? currentDomain.name : currentDomain.nameBn}
                  </span>
                </div>

                <div className="flex justify-between items-baseline gap-1">
                  <span className="text-slate-400 shrink-0">{lang === 'en' ? 'Deliverable:' : 'কাজের ধরন:'}</span>
                  <span className="font-semibold text-white text-right break-words leading-[1.15]">
                    {lang === 'en' ? currentSub.title : currentSub.titleBn}
                  </span>
                </div>

                <div className="flex justify-between items-baseline gap-1">
                  <span className="text-slate-400 shrink-0">{lang === 'en' ? 'Delivery:' : 'ডেলিভারি:'}</span>
                  <span className="font-semibold text-emerald-300 text-right break-words leading-[1.15]">
                    {isSuperFast ? (lang === 'en' ? '⚡ Express' : '⚡ এক্সপ্রেস') : (lang === 'en' ? 'Standard' : 'স্ট্যান্ডার্ড')}
                  </span>
                </div>
              </div>

              {/* Promo Badge */}
              <div className="p-1 xs:p-1.5 sm:p-3 rounded-lg sm:rounded-xl bg-[#094029] border border-[#10ef82]/40 text-center space-y-0.5">
                <div className="flex items-center justify-center gap-1 text-[8px] xs:text-[9px] sm:text-xs font-bold text-[#10ef82]">
                  <Flame className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-amber-400" />
                  <span>{lang === 'en' ? '30% Special Discount!' : '৩০% বিশেষ ছাড়!'}</span>
                </div>
                <span className="text-[7px] xs:text-[8px] sm:text-[11px] text-slate-300 block hidden xs:block">
                  {lang === 'en' ? 'Discounted Budget:' : 'ডিসকাউন্টেড বাজেট:'}
                </span>
              </div>

              {/* Total Discounted Price & Crossed Out Regular */}
              <div className="text-center py-0.5 sm:py-1">
                <div className="flex items-baseline justify-center gap-1 sm:gap-3">
                  <span className="text-base xs:text-xl sm:text-4xl lg:text-5xl font-black text-white font-mono tabular-nums tracking-tight">
                    {formatPrice(discountedTotal)}
                  </span>
                  <span className="text-[9px] sm:text-xl text-slate-400 line-through font-mono tabular-nums">
                    {formatPrice(regularTotal)}
                  </span>
                </div>

                {/* Savings Tag */}
                <div className="mt-0.5 sm:mt-1 inline-flex items-center gap-1 px-1.5 sm:px-3 py-0.5 rounded-full bg-[#10ef82]/15 border border-[#10ef82]/30 text-[7px] xs:text-[8px] sm:text-xs font-bold text-[#10ef82]">
                  <span>{lang === 'en' ? 'Savings: ' : 'সাশ্রয়: '}{formatPrice(savings)}</span>
                </div>
              </div>

              {/* Timeframe pill */}
              <div className="p-1 xs:p-1.5 sm:p-3 rounded-lg sm:rounded-xl bg-[#03170e] border border-emerald-500/20 flex items-center justify-between text-[7.5px] xs:text-[8.5px] sm:text-xs">
                <span className="text-slate-400 flex items-center gap-0.5 sm:gap-1">
                  <Clock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#10ef82]" />
                  <span className="hidden xs:inline">{lang === 'en' ? 'Timeframe:' : 'সময়সীমা:'}</span>
                </span>
                <span className="font-bold text-white px-1.5 sm:px-2.5 py-0.5 rounded bg-[#072d1f] border border-emerald-500/30 font-mono">
                  {deliveryDaysCalculated} {lang === 'en' ? 'Days' : 'দিন'}
                </span>
              </div>

              {/* Direct Order Button */}
              <div className="space-y-1 sm:space-y-3 pt-0.5 sm:pt-1">
                <button
                  type="button"
                  onClick={handleStartWhatsApp}
                  className="w-full tia-glow-btn flex items-center justify-center gap-1 sm:gap-2 py-1.5 xs:py-2 sm:py-3.5 rounded-lg sm:rounded-2xl bg-gradient-to-r from-[#10ef82] to-[#00d66c] text-[#02180e] font-extrabold text-[8px] xs:text-[9.5px] sm:text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-xl shadow-emerald-500/30 cursor-pointer"
                >
                  <MessageCircle className="w-2.5 h-2.5 sm:w-4 sm:h-4 fill-current" />
                  <span>{lang === 'en' ? 'Order on WhatsApp' : 'হোয়াটসঅ্যাপে শুরু করুন'}</span>
                </button>

                <p className="text-[7px] sm:text-[10px] text-slate-400 text-center leading-tight hidden xs:block">
                  {lang === 'en'
                    ? '💡 Final scope and budget can be adjusted through consultation.'
                    : '💡 চূড়ান্ত বাজেট আলোচনা সাপেক্ষে পরিবর্তন হতে পারে।'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
