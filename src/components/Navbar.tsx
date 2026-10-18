import React from 'react';
import { Currency, Language, PageView } from '../types';
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  MessageSquareQuote,
  Mail,
  Search,
  Download,
  Globe
} from 'lucide-react';
import { PremiumZoneLogo } from './PremiumZoneLogo';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  currentPage: PageView;
  onNavigatePage: (page: PageView) => void;
  onOpenBooking: () => void;
  onSearchClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  currency,
  setCurrency,
  currentPage,
  onNavigatePage,
  onOpenBooking,
  onSearchClick,
}) => {
  const navButtons: {
    id: PageView;
    labelEn: string;
    labelBn: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      id: 'home',
      labelEn: 'Home',
      labelBn: 'হোম',
      icon: Home,
    },
    {
      id: 'reviews',
      labelEn: 'Reviews',
      labelBn: 'রিভিউ',
      icon: MessageSquareQuote,
    },
    {
      id: 'services',
      labelEn: 'Services',
      labelBn: 'সেবা',
      icon: Briefcase,
    },
    {
      id: 'projects',
      labelEn: 'Projects',
      labelBn: 'প্রজেক্ট',
      icon: FolderGit2,
    },
    {
      id: 'about',
      labelEn: 'About',
      labelBn: 'পরিচয়',
      icon: User,
    },
    {
      id: 'contact',
      labelEn: 'Contact',
      labelBn: 'যোগাযোগ',
      icon: Mail,
    },
  ];

  const handleNavClick = (id: PageView) => {
    onNavigatePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadBrochure = () => {
    const brochureContent = `===================================================
PREMIUM ZONE - CREATIVE STUDIO & DIGITAL AGENCY
===================================================
Official Portfolio & Service Brochure
Location: Gulshan-2, Dhaka 1212, Bangladesh
WhatsApp / Direct Line: +880 1800-000000
Email: contact@premiumzone.agency

OUR SERVICES:
1. High-CTR YouTube Thumbnails & Visual Hooks (24-48h Delivery)
2. Logo Design & Complete Brand Identity Systems
3. High-Performance React Web Apps & Fast Landing Pages
4. Cinematic Video Editing & Viral Reels / Shorts
5. Social Media Ad Creatives & E-Commerce Campaigns

Payment Methods: bKash Merchant, Nagad, Bank Wire, Wise, PayPal, Cards.
100% Satisfaction & Unlimited Revisions Guaranteed!
===================================================`;

    const blob = new Blob([brochureContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Premium-Zone-Service-Catalog.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <header className="sticky top-1 sm:top-3 z-50 w-full px-1.5 sm:px-4 lg:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-1 sm:gap-3 pointer-events-auto">
        
        {/* Left: Brand logo & "Premium Zone" name (always visible on mobile and desktop) */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="luminous-nav-pill flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#051c13]/95 backdrop-blur-xl group hover:border-[#20C878] transition-all cursor-pointer shrink-0"
          title="Premium Zone Home"
        >
          <PremiumZoneLogo className="w-5 h-5 sm:w-7 sm:h-7 group-hover:scale-105 transition-transform shrink-0" />
          <span className="text-[11px] sm:text-xs font-black text-white tracking-tight sm:tracking-wide">
            Premium <span className="text-[#20C878]">Zone</span>
          </span>
        </button>

        {/* Center: Navigation Pill (On mobile: ONLY icons, NO text; on desktop: icons + text) */}
        <div className="luminous-nav-pill flex items-center justify-center gap-0.5 sm:gap-1.5 px-1 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#041a12]/95 backdrop-blur-2xl transition-all shrink-0">
          <nav className="flex items-center gap-0.5 sm:gap-1">
            {navButtons.map((btn) => {
              const isActive = currentPage === btn.id;
              const IconComponent = btn.icon;
              return (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => handleNavClick(btn.id)}
                  className={`nav-pill-btn flex items-center justify-center gap-1 p-1.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-medium cursor-pointer transition-all shrink-0 ${
                    isActive
                      ? 'bg-[#0B6B3A]/45 text-[#20C878] font-bold border border-[#20C878]/70 shadow-[0_0_12px_rgba(32,200,120,0.5)]'
                      : 'text-slate-300 hover:text-white hover:bg-emerald-950/40 border border-transparent'
                  }`}
                  title={lang === 'en' ? btn.labelEn : btn.labelBn}
                  aria-label={lang === 'en' ? btn.labelEn : btn.labelBn}
                >
                  <IconComponent className="nav-icon w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#20C878] shrink-0" />
                  {/* Text hidden on mobile screens, visible on md+ screens */}
                  <span className="hidden md:inline whitespace-nowrap text-xs">
                    {lang === 'en' ? btn.labelEn : btn.labelBn}
                  </span>
                  {isActive && (
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#20C878] shadow-[0_0_6px_#20C878]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop luminous vertical divider */}
          <div className="hidden lg:block w-[1px] h-4 bg-gradient-to-b from-transparent via-[#20C878]/80 to-transparent mx-1 shrink-0 shadow-[0_0_6px_rgba(32,200,120,0.4)]" />

          {/* Search Button (desktop) */}
          <button
            type="button"
            onClick={onSearchClick}
            className="nav-pill-btn hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#062419] border border-emerald-500/20 text-slate-200 hover:text-white cursor-pointer shrink-0"
            title="Search services"
          >
            <Search className="nav-icon w-3.5 h-3.5 text-[#10ef82]" />
            <span>{lang === 'en' ? 'Search' : 'সার্চ'}</span>
          </button>

          {/* CV / Service Brochure Download Button (desktop) */}
          <button
            type="button"
            onClick={handleDownloadBrochure}
            className="tia-glow-btn hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-[#10ef82] to-[#00d66c] text-[#02180e] cursor-pointer shrink-0"
            title="Download Services Catalog"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span className="whitespace-nowrap">
              {lang === 'en' ? 'Catalog' : 'ব্রোশার'}
            </span>
          </button>
        </div>

        {/* Right: Language switch + Currency (desktop) */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Language Toggle */}
          <button
            type="button"
            onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
            className="nav-pill-btn flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-[#072d1f] border border-emerald-500/35 text-emerald-200 hover:text-white cursor-pointer shrink-0 shadow-sm"
            title="Language switch"
          >
            <Globe className="nav-icon w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#10ef82]" />
            <span className="font-bold">{lang === 'en' ? 'EN' : 'বাং'}</span>
          </button>

          {/* Currency Toggle (desktop) */}
          <div className="hidden xl:flex items-center p-1 bg-[#051c13]/90 backdrop-blur-xl border border-emerald-500/25 rounded-full text-[11px] shrink-0">
            <button
              type="button"
              onClick={() => setCurrency('BDT')}
              className={`px-2 py-0.5 rounded-full transition-all font-bold ${
                currency === 'BDT'
                  ? 'bg-[#10ef82] text-black shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ৳ BDT
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`px-2 py-0.5 rounded-full transition-all font-bold ${
                currency === 'USD'
                  ? 'bg-[#10ef82] text-black shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              $ USD
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
