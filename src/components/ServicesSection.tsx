import React, { useState, useMemo } from 'react';
import { Currency, Language, ServiceCategory, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import {
  Sparkles,
  ArrowRight,
  Clock,
  Check,
  Search,
  Eye,
  SlidersHorizontal,
  Code2,
  Video,
  Crown,
  Palette,
  Briefcase
} from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  currency: Currency;
  onSelectService: (service: ServiceItem) => void;
  onOrderWhatsApp: (service: ServiceItem) => void;
  onCheckServicePrice?: (domainId: string, subId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  currency,
  onSelectService,
  onOrderWhatsApp,
  onCheckServicePrice,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { key: ServiceCategory; labelEn: string; labelBn: string }[] = [
    { key: 'all', labelEn: 'All Services', labelBn: 'সবগুলো সার্ভিস' },
    { key: 'youtube_social', labelEn: 'YouTube & Social', labelBn: 'ইউটিউব ও সোশ্যাল' },
    { key: 'branding_identity', labelEn: 'Branding & Logo', labelBn: 'ব্র্যান্ডিং ও লোগো' },
    { key: 'web_development', labelEn: 'Web & UI/UX', labelBn: 'ওয়েব ও ইউআই/ইউএক্স' },
    { key: 'video_motion', labelEn: 'Video & Motion', labelBn: 'ভিডিও ও মোশন' },
    { key: 'graphic_design', labelEn: 'Graphic Design', labelBn: 'গ্রাফিক ডিজাইন' },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory =
        activeCategory === 'all' || service.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        service.title.toLowerCase().includes(q) ||
        service.titleBn.toLowerCase().includes(q) ||
        service.shortDesc.toLowerCase().includes(q) ||
        service.shortDescBn.toLowerCase().includes(q) ||
        service.tools.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const getServiceIcon = (category: ServiceCategory) => {
    switch (category) {
      case 'branding_identity':
        return Crown;
      case 'web_development':
        return Code2;
      case 'video_motion':
        return Video;
      default:
        return Palette;
    }
  };

  return (
    <section id="services" className="py-10 sm:py-20 relative bg-[#03130d] border-t border-emerald-500/15">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        
        {/* Section Header (Matching Screenshot 2) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6 mb-6 sm:mb-10">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#083523] border border-[#10ef82]/40 text-xs font-bold text-[#10ef82]">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Services' : 'সার্ভিসসমূহ'}</span>
            </div>
            
            <h2 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {lang === 'en' ? (
                <>
                  Tailored Services for{' '}
                  <span className="text-gradient-tia">Your Brand & Content</span>
                </>
              ) : (
                <>
                  আপনার ব্র্যান্ড ও কনটেন্টের জন্য{' '}
                  <span className="text-gradient-tia">সেবাসমূহ</span>
                </>
              )}
            </h2>
          </div>

          {/* Quick Action Button: সকল সার্ভিস দেখুন */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#062419] border border-emerald-500/30 text-white text-xs font-semibold hover:border-[#10ef82] transition-all cursor-pointer"
            >
              <span>{lang === 'en' ? 'View All Services' : 'সকল সার্ভিস দেখুন'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#10ef82]" />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#10ef82] text-black shadow-[0_0_15px_rgba(16,239,130,0.4)] font-bold'
                    : 'bg-[#062419] text-slate-300 hover:text-white border border-emerald-500/25 hover:border-emerald-500/40'
                }`}
              >
                {lang === 'en' ? cat.labelEn : cat.labelBn}
              </button>
            );
          })}
        </div>

        {/* Compact Responsive Services Grid (3 Columns on Desktop, 3 or 2 on Mobile - Matching Screenshot 2) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
          {filteredServices.map((service, idx) => {
            const IconComponent = getServiceIcon(service.category);
            const formattedPrice =
              currency === 'BDT'
                ? `৳${service.startingPriceBDT.toLocaleString()}`
                : `$${service.startingPriceUSD}`;

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="luminous-card luminous-edge-top group relative rounded-xl sm:rounded-2xl bg-[#062016]/90 backdrop-blur-xl p-2.5 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer text-left"
              >
                <div className="space-y-2 sm:space-y-3.5">
                  
                  {/* Top Icon Box with Luminous Accent */}
                  <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#03150e] border border-[#0B6B3A]/40 shadow-[inset_0_1px_0_0_rgba(32,200,120,0.3)] flex items-center justify-center text-[#20C878] group-hover:scale-105 transition-transform">
                    <IconComponent className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#20C878]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[9.5px] xs:text-[11px] sm:text-lg font-bold text-white group-hover:text-[#20C878] transition-colors leading-snug break-words">
                    {lang === 'en' ? service.title : service.titleBn}
                  </h3>

                  {/* Short Description */}
                  <p className="text-[8px] xs:text-[9px] sm:text-xs text-slate-300/85 leading-snug break-words">
                    {lang === 'en' ? service.shortDesc : service.shortDescBn}
                  </p>

                  {/* 3 Checklist Features (Matching Screenshot 2) */}
                  <div className="space-y-1 pt-0.5">
                    {(lang === 'en' ? service.features : service.featuresBn).slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1 sm:gap-2 text-[8px] sm:text-[11px] text-slate-300">
                        <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#20C878] shrink-0 mt-0.5" />
                        <span className="break-words leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Timeline & Detailed Button with Luminous Divider */}
                <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-[#0B6B3A]/30 shadow-[inset_0_1px_0_0_rgba(32,200,120,0.18)] flex items-center justify-between">
                  <div>
                    <span className="text-[8px] sm:text-[10px] text-slate-400 block font-mono">
                      {lang === 'en' ? 'Turnaround:' : 'সময়সীমা:'}
                    </span>
                    <span className="text-[9px] sm:text-xs font-bold text-amber-300 font-mono">
                      {lang === 'en' ? service.turnaroundTime : service.turnaroundTimeBn}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service);
                    }}
                    className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[#041a12] border border-[#0B6B3A]/45 shadow-[inset_0_1px_0_0_rgba(32,200,120,0.25)] text-white text-[9px] sm:text-xs font-semibold hover:border-[#20C878] hover:bg-[#072d1f] transition-all cursor-pointer"
                  >
                    <span>{lang === 'en' ? 'Details' : 'বিস্তারিত'}</span>
                    <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#20C878]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
