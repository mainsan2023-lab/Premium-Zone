import React from 'react';
import { Language } from '../types';
import {
  User,
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle2
} from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  onOpenBooking,
}) => {
  return (
    <section
      id="about-section"
      className="py-6 sm:py-10 relative bg-[#03130d] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-2.5 sm:px-6 lg:px-8">
        
        {/* Single Cohesive Rounded Container with Luminous Lighting */}
        <div className="luminous-card luminous-edge-top rounded-2xl sm:rounded-3xl bg-[#052116]/85 backdrop-blur-xl p-4 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 items-center">
            
            {/* Left Content Column (8 cols) */}
            <div className="md:col-span-8 space-y-3 sm:space-y-4 text-left">
              
              {/* Badge: সংক্ষিপ্ত পরিচয় */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#083523] border border-[#20C878]/40 text-xs font-bold text-[#20C878] shadow-[0_0_10px_rgba(32,200,120,0.2)]">
                <User className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Brief Introduction' : 'সংক্ষিপ্ত পরিচয়'}</span>
              </div>

              {/* Headline */}
              <h2 className="text-lg xs:text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                {lang === 'en' ? (
                  <>
                    Crafting High-Converting Solutions with{' '}
                    <span className="text-gradient-tia">Design & Technology</span>
                  </>
                ) : (
                  <>
                    ডিজাইন ও প্রযুক্তি দিয়ে{' '}
                    <span className="text-gradient-tia">হাই-কনভার্টিং সমাধান তৈরি</span>
                  </>
                )}
              </h2>

              {/* Subtitle / Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                {lang === 'en'
                  ? 'Passionate designer and developer with experience in creating high-converting YouTube thumbnails, viral posters, branding elements, and modern web applications.'
                  : 'Passionate designer and developer with experience in creating high-converting YouTube thumbnails, viral posters, branding elements, and modern web applications.'}
              </p>

              {/* 3 Metric Boxes in One Row (100+, 50+, 5.0★) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2">
                <div className="luminous-card p-2 sm:p-3.5 rounded-xl bg-[#03170e] text-center">
                  <span className="text-sm xs:text-base sm:text-2xl font-black font-mono text-[#20C878] block">
                    100+
                  </span>
                  <span className="text-[9px] sm:text-xs text-slate-400 font-medium">
                    {lang === 'en' ? 'Completed Projects' : 'সম্পূর্ণ প্রজেক্ট'}
                  </span>
                </div>

                <div className="luminous-card p-2 sm:p-3.5 rounded-xl bg-[#03170e] text-center">
                  <span className="text-sm xs:text-base sm:text-2xl font-black font-mono text-[#20C878] block">
                    50+
                  </span>
                  <span className="text-[9px] sm:text-xs text-slate-400 font-medium">
                    {lang === 'en' ? 'Satisfied Clients' : 'সন্তুষ্ট ক্লায়েন্ট'}
                  </span>
                </div>

                <div className="luminous-card p-2 sm:p-3.5 rounded-xl bg-[#03170e] text-center">
                  <span className="text-sm xs:text-base sm:text-2xl font-black font-mono text-amber-300 block flex items-center justify-center gap-0.5">
                    5.0<Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400 inline" />
                  </span>
                  <span className="text-[9px] sm:text-xs text-slate-400 font-medium">
                    {lang === 'en' ? 'Average Rating' : 'গড় রেটিং'}
                  </span>
                </div>
              </div>

            </div>

            {/* Right Action Column (4 cols) with subtle luminous vertical divider on desktop */}
            <div className="md:col-span-4 md:border-l md:border-[#0B6B3A]/40 md:pl-8 flex flex-col justify-center items-start md:items-center space-y-3 pt-2 md:pt-0 relative">
              <p className="text-xs text-slate-300 text-left md:text-center leading-relaxed">
                {lang === 'en'
                  ? 'Learn more about my career journey, experience, and educational background.'
                  : 'আমার ক্যারিয়ার জার্নি, অভিজ্ঞতা ও এডুকেশন সম্পর্কে বিস্তারিত জানুন।'}
              </p>

              <button
                type="button"
                onClick={onOpenBooking}
                className="tia-glow-btn flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#10ef82] to-[#00d66c] text-[#02180e] font-extrabold text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md cursor-pointer w-full sm:w-auto"
              >
                <span>{lang === 'en' ? 'View Full Profile' : 'সম্পূর্ণ প্রোফাইল দেখুন'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
