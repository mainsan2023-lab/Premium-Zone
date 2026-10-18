import React from 'react';
import { Language } from '../types';
import { TESTIMONIALS_DATA } from '../data/servicesData';
import { Star, Quote, Award } from 'lucide-react';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  return (
    <section id="reviews" className="py-20 md:py-28 relative bg-[#03130d] border-t border-emerald-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#083523] border border-[#10ef82]/30 text-xs font-bold text-[#10ef82]">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Client Impact & Proof' : 'ক্লায়েন্টদের প্রতিক্রিয়া'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Trusted by Top Creators &{' '}
                <span className="text-gradient-tia">Expanding Brands</span>
              </>
            ) : (
              <>
                জনপ্রিয় ক্রিয়েটর ও ব্র্যান্ডের{' '}
                <span className="text-gradient-tia">বিশ্বস্ত অভিজ্ঞতা</span>
              </>
            )}
          </h2>

          <p className="text-sm text-slate-300">
            {lang === 'en'
              ? 'Read unedited reviews from satisfied YouTube creators, corporate CEOs, and agency partners.'
              : 'আমাদের ডিজাইন ও কোডিং সার্ভিসের মাধ্যমে যারা নিজেদের চ্যানেল ও ব্যবসাকে এগিয়ে নিয়েছেন, তাদের বক্তব্য শুনুন।'}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-[#062419]/80 backdrop-blur-xl border border-emerald-500/20 hover:border-[#10ef82]/40 transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Metric badge & 5-stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#10ef82] text-[#10ef82]"
                      />
                    ))}
                  </div>

                  <span className="px-2.5 py-1 rounded bg-[#093e28] text-[#10ef82] text-xs font-mono font-bold border border-[#10ef82]/30">
                    {t.metric}
                  </span>
                </div>

                {/* Review body */}
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{lang === 'en' ? t.review : t.reviewBn}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-emerald-500/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0c4028] to-[#041d13] border border-emerald-400/40 flex items-center justify-center font-bold text-xs text-[#10ef82]">
                    {t.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {lang === 'en' ? t.name : t.nameBn}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {lang === 'en' ? t.role : t.roleBn} · {t.company}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-emerald-400 hidden sm:inline">
                  {t.serviceUsed}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
