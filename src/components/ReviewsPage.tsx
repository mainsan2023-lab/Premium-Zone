import React, { useState, useMemo } from 'react';
import { Language } from '../types';
import { DynamicReviewCylinder } from './DynamicReviewCylinder';
import { LuminousDivider } from './LuminousDivider';
import { REVIEW_PHOTO_ITEMS } from '../data/carouselImages';
import {
  Star,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  TrendingUp,
  X,
  Layers
} from 'lucide-react';

interface ReviewsPageProps {
  lang: Language;
  onOpenBooking?: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({
  lang,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Categories matching deliverables
  const categories = [
    { id: 'all', labelEn: 'All Reviews', labelBn: 'সব রিভিউ' },
    { id: 'youtube', labelEn: 'YouTube Thumbnails', labelBn: 'ইউটিউব থাম্বনেল' },
    { id: 'poster', labelEn: 'Natok & Posters', labelBn: 'নাটক ও পোস্টার' },
    { id: 'branding', labelEn: 'Brand Identity', labelBn: 'ব্র্যান্ডিং ও লোগো' },
    { id: 'web', labelEn: 'UI/UX & Web', labelBn: 'ইউআই/ইউএক্স ও ওয়েব' },
    { id: 'video', labelEn: 'Video & Motion', labelBn: 'ভিডিও ও মোশন' },
  ];

  // Filtered Photo Reviews
  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'all') return REVIEW_PHOTO_ITEMS;
    return REVIEW_PHOTO_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handlePrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const handleNextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredPhotos.length);
    }
  };

  return (
    <div className="bg-[#03130d] text-slate-100 min-h-screen">
      
      {/* 
        ১. প্রথম সেকশন: আমাদের রিভিউ
        (ডায়নামিকভাবে একটা একটা শো হবে — 3D Dynamic Review Carousel)
      */}
      <section className="pt-8 sm:pt-12 pb-10 sm:pb-14 bg-gradient-to-b from-[#02100a] via-[#03150e] to-[#020e09] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8">
            <div className="shape-from-left inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#083523] border border-[#20C878]/40 text-xs font-bold text-[#20C878] shadow-[0_0_10px_rgba(32,200,120,0.25)]">
              <span className="w-2 h-2 rounded-full bg-[#20C878] animate-ping" />
              <span>{lang === 'en' ? 'Live Dynamic Showcase' : 'লাইভ ডায়নামিক রিভিউ'}</span>
            </div>

            <h1 className="anim-from-right text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {lang === 'en' ? (
                <>
                  Our <span className="text-gradient-tia">Live Reviews</span>
                </>
              ) : (
                <>
                  আমাদের <span className="text-gradient-tia">রিভিউ</span>
                </>
              )}
            </h1>

            <p className="anim-from-left text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              {lang === 'en'
                ? 'Client feedback and authentic deliverables rotating dynamically one by one.'
                : 'ক্লায়েন্টদের সন্তুষ্ট মতামত ও কাজের বাস্তব প্রমাণসমূহ ডায়নামিকভাবে একটির পর একটি প্রদর্শিত হচ্ছে।'}
            </p>
          </div>

          {/* 3D Dynamic Cylinder Carousel (No duplicate header inside) */}
          <DynamicReviewCylinder showHeader={false} lang={lang} />
        </div>
      </section>

      {/* Luminous Section Divider */}
      <LuminousDivider withCenterGlow={true} withSweep={true} />

      {/* 
        ২. দ্বিতীয় সেকশন: আমাদের সমস্ত রিভিউ
        (উপরে ক্যাটাগরি অপশনগুলো এবং ক্যাটাগরির নিচে থাকবে সবগুলো রিভিউ ফটোকার্ড)
      */}
      <section className="py-8 sm:py-16 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-6 sm:mb-8">
          <div className="shape-from-left inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#083523] border border-emerald-500/35 text-xs font-bold text-[#10ef82]">
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Complete Deliverables' : 'কাজের সম্পূর্ণ সংগ্রহশালা'}</span>
          </div>

          <h2 className="anim-from-right text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Our <span className="text-gradient-tia">All Reviews</span>
              </>
            ) : (
              <>
                আমাদের <span className="text-gradient-tia">সমস্ত রিভিউ</span>
              </>
            )}
          </h2>

          <p className="anim-from-left text-[11px] sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            {lang === 'en'
              ? 'Select any category below to filter deliverables and client impressions.'
              : 'নিচের ক্যাটাগরি অপশন থেকে পছন্দ অনুযায়ী আমাদের সমস্ত রিভিউ ও কাজের ফটোকার্ড দেখুন।'}
          </p>
        </div>

        {/* 
          ক্যাটাগরি অপশনগুলো ফটোকার্ডের ঠিক উপরে
        */}
        <div className="anim-from-bottom flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mb-6 sm:mb-10">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#10ef82] text-black shadow-[0_0_15px_rgba(16,239,130,0.45)] scale-105'
                    : 'bg-[#062419] text-slate-300 hover:text-white border border-emerald-500/25 hover:border-emerald-500/50'
                }`}
              >
                {lang === 'en' ? cat.labelEn : cat.labelBn}
              </button>
            );
          })}
        </div>

        {/* 
          ক্যাটাগরির নিচে সবগুলো রিভিউ (সবগুলো ফটোকার্ড — ৩টি কলামে রেসপনসিভ গ্রিড)
          মোবাইল স্ক্রিনের জন্য টেক্সট সাইজ নিখুঁতভাবে অপ্টিমাইজ করা যাতে কোনো লেখা কেটে না যায়
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {filteredPhotos.map((item, idx) => {
            const dirClass = idx % 3 === 0 ? 'card-from-left' : idx % 3 === 1 ? 'card-from-bottom' : 'card-from-right';
            const staggerClass = idx < 9 ? `nav-stagger-${Math.min(idx + 1, 9)}` : '';
            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(idx)}
                className={`luminous-card luminous-edge-top ${dirClass} ${staggerClass} group relative aspect-[4/5] rounded-xl sm:rounded-3xl overflow-hidden bg-[#02110a] shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer flex flex-col justify-between`}
              >
                {/* 100% Unaltered Original Image with exact 4:5 aspect ratio */}
                <img
                  src={item.src}
                  alt={item.titleEn}
                  className="w-full h-full object-cover rounded-xl sm:rounded-3xl transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  draggable={false}
                />

                {/* Top Badges Overlay - Mobile Optimized Small Font */}
                <div className="absolute top-1.5 sm:top-3 left-1.5 sm:left-3 right-1.5 sm:right-3 flex items-center justify-between gap-1 pointer-events-none z-10">
                  <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#02140c]/90 backdrop-blur-md border border-emerald-500/40 text-[7.5px] xs:text-[8.5px] sm:text-[10px] font-bold text-white shadow-sm break-words max-w-[90px] sm:max-w-[140px]">
                    {lang === 'en' ? item.category : item.categoryBn}
                  </span>

                  <span className="flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#083523]/95 backdrop-blur-md border border-[#10ef82]/40 text-[7.5px] xs:text-[8.5px] sm:text-[10px] font-mono font-bold text-[#10ef82] shadow-sm">
                    <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span>{item.metric}</span>
                  </span>
                </div>

                {/* Bottom Overlay Info Pill - Mobile Optimized Small Text */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-2 sm:p-4 text-left pointer-events-none">
                  <div className="flex items-center justify-between gap-1 mb-0.5 sm:mb-1">
                    <div className="flex items-center text-amber-400">
                      {Array.from({ length: item.rating }).map((_, rIdx) => (
                        <Star key={rIdx} className="w-2 h-2 sm:w-3 sm:h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-[8px] sm:text-[11px] font-mono text-emerald-300">
                      #{idx + 1}
                    </span>
                  </div>

                  {/* Title: Small text on mobile so full text is visible */}
                  <h3 className="text-[8.5px] xs:text-[9.5px] sm:text-xs font-extrabold text-white leading-tight break-words group-hover:text-[#10ef82] transition-colors">
                    {lang === 'en' ? item.titleEn : item.titleBn}
                  </h3>

                  {/* Client: Full visible text */}
                  <p className="text-[7.5px] xs:text-[8px] sm:text-[10px] text-slate-300 break-words mt-0.5">
                    {item.client}
                  </p>

                  <div className="mt-1 flex items-center justify-end">
                    <span className="inline-flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-[#10ef82] text-[#02180e] text-[7.5px] xs:text-[8px] sm:text-[10px] font-black shadow-md">
                      <Maximize2 className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[2.5]" />
                      <span>{lang === 'en' ? 'Enlarge' : 'বড় করুন'}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if filter returns no items */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-12 bg-[#062419]/50 rounded-3xl border border-emerald-500/25 my-8 space-y-3">
            <ImageIcon className="w-10 h-10 text-emerald-400 mx-auto" />
            <h3 className="text-base font-bold text-white">
              {lang === 'en' ? 'No reviews in this category yet' : 'এই ক্যাটাগরিতে এখনও কোনো রিভিউ যুক্ত করা হয়নি'}
            </h3>
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-4 py-2 rounded-xl bg-[#10ef82] text-black font-bold text-xs"
            >
              {lang === 'en' ? 'Show All Reviews' : 'সব রিভিউ দেখুন'}
            </button>
          </div>
        )}

      </section>

      {/* 3. Fullscreen Interactive HD Lightbox Modal */}
      {activeLightboxIndex !== null && filteredPhotos[activeLightboxIndex] && (
        <div
          onClick={() => setActiveLightboxIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full max-h-[92vh] flex flex-col items-center bg-[#03150e] border border-[#10ef82]/60 rounded-3xl overflow-hidden shadow-2xl p-3 sm:p-5"
          >
            {/* Modal Header */}
            <div className="w-full flex items-center justify-between pb-3 border-b border-emerald-500/25 mb-3 text-left">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10ef82] animate-pulse" />
                <h3 className="text-xs sm:text-sm font-extrabold text-white truncate max-w-xs sm:max-w-md">
                  {lang === 'en'
                    ? filteredPhotos[activeLightboxIndex].titleEn
                    : filteredPhotos[activeLightboxIndex].titleBn}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveLightboxIndex(null)}
                className="p-1.5 rounded-full bg-[#062419] border border-emerald-500/30 text-slate-300 hover:text-white hover:bg-red-500/20 hover:border-red-500 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Main Image with exact 4:5 aspect ratio */}
            <div className="relative w-full aspect-[4/5] max-h-[70vh] rounded-2xl overflow-hidden bg-[#020d07] border border-emerald-500/30 shadow-inner flex items-center justify-center">
              <img
                src={filteredPhotos[activeLightboxIndex].src}
                alt={filteredPhotos[activeLightboxIndex].titleEn}
                className="w-full h-full object-contain rounded-2xl"
              />

              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrevLightbox}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#02140c]/85 border border-[#10ef82]/60 text-white hover:bg-[#10ef82] hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-xl"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNextLightbox}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#02140c]/85 border border-[#10ef82]/60 text-white hover:bg-[#10ef82] hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-xl"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Modal Footer Info */}
            <div className="w-full flex items-center justify-between pt-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#083523] text-[#10ef82] font-mono text-[10px] font-bold">
                  {filteredPhotos[activeLightboxIndex].metric}
                </span>
                <span className="text-[11px] text-slate-300">
                  {filteredPhotos[activeLightboxIndex].client}
                </span>
              </div>

              <span className="text-[11px] font-mono text-emerald-400">
                {activeLightboxIndex + 1} / {filteredPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
