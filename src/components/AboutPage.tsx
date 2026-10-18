import React from 'react';
import { Language } from '../types';
import {
  User,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Award,
  Clock,
  Layers,
  ShieldCheck,
  Zap,
  Palette,
  Code2,
  Video,
  HeartHandshake,
  MessageCircle
} from 'lucide-react';
import { PremiumZoneLogo } from './PremiumZoneLogo';
import { WorkflowSection } from './WorkflowSection';

interface AboutPageProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  lang,
  onOpenBooking,
}) => {
  return (
    <div className="py-10 md:py-16 bg-[#03130d] text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Hero Header Block with multi-directional entrance */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="shape-from-left inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#083523] border border-[#10ef82]/40 text-xs font-bold text-[#10ef82]">
            <User className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'About Premium Zone Studio' : 'আমার / আমাদের সম্পর্কে বিস্তারিত'}</span>
          </div>

          <h1 className="anim-from-right text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {lang === 'en' ? (
              <>
                Passionate About Crafting{' '}
                <span className="text-gradient-tia">High-Converting Visuals</span> &{' '}
                <span className="text-[#10ef82]">Lightning-Fast Code</span>
              </>
            ) : (
              <>
                ডিজাইনের নিখুঁত নান্দনিকতা আর{' '}
                <span className="text-gradient-tia">আধুনিক প্রযুক্তির মেলবন্ধন</span>
              </>
            )}
          </h1>

          <p className="anim-from-left text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {lang === 'en'
              ? 'Based in Dhaka, Bangladesh, Premium Zone operates as an agile creative studio partnering with global content creators, YouTubers, drama directors, and innovative startups.'
              : 'ঢাকা থেকে পরিচালিত Premium Zone একটি উচ্চমানের ক্রিয়েটিভ ডিজিটাল স্টুডিও। দেশি-বিদেশি জনপ্রিয় ইউটিউবার, নাটক ডিরেক্টর এবং স্টার্টআপগুলোর জন্য আমরা তৈরি করি হাই-সিটিআর থাম্বনেইল, ব্র্যান্ড আইডেন্টিটি, ভিডিও এডিটিং ও সুপার-ফাস্ট ওয়েবসাইট।'}
          </p>

          <div className="anim-from-bottom pt-2 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenBooking}
              className="tia-glow-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#10ef82] to-[#00d66c] text-[#02180e] font-extrabold text-xs sm:text-sm uppercase tracking-wider cursor-pointer"
            >
              <span>{lang === 'en' ? 'Start Collaboration' : 'কাজ শুরু করুন (বাজেট জানুন)'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Narrative & Visual Emblem Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Glass Card with Studio Metrics and Luminous Lighting (Card from Left) */}
          <div className="lg:col-span-5 card-from-left">
            <div className="luminous-card luminous-edge-top rounded-3xl bg-gradient-to-b from-[#083624] via-[#052619] to-[#03180f] p-7 space-y-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#0B6B3A]/30 shadow-[inset_0_-1px_0_0_rgba(32,200,120,0.18)]">
                <div className="flex items-center gap-3">
                  <PremiumZoneLogo className="w-12 h-12" />
                  <div>
                    <h3 className="text-lg font-extrabold text-white">
                      Premium Zone Studio
                    </h3>
                    <p className="text-xs text-[#20C878]">
                      {lang === 'en' ? 'Creative Direction & Engineering' : 'ক্রিয়েটিভ ডিরেকশন ও ইঞ্জিনিয়ারিং'}
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#03150e] text-[#20C878] text-xs font-mono font-bold border border-[#0B6B3A]/40 shadow-[inset_0_1px_0_0_rgba(32,200,120,0.25)]">
                  EST. 2021
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'en'
                  ? 'We merge high-level artistic photo manipulation, kinetic typography, and full-stack React engineering to ensure your content commands attention and stops the scroll.'
                  : 'আমরা আধুনিক ফটো ম্যানিপুলেশন, মোশন গ্রাফিক্স এবং ফুল-স্ট্যাক রিয়্যাক্ট কোডিংয়ের সমন্বয়ে ক্লায়েন্টদের ডিজিটাল ব্র্যান্ডকে অনন্য উচ্চতায় পৌঁছে দিই।'}
              </p>

              {/* Stats Counters with Luminous Cards */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="luminous-card p-3.5 rounded-2xl bg-[#03170e] text-left">
                  <span className="text-2xl font-black font-mono text-[#20C878] block">
                    12%+
                  </span>
                  <span className="text-xs text-slate-400">
                    {lang === 'en' ? 'Average YouTube CTR' : 'গড় ইউটিউব সিটিআর'}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#03170e] border border-emerald-500/25 text-left">
                  <span className="text-2xl font-black font-mono text-[#10ef82] block">
                    99/100
                  </span>
                  <span className="text-xs text-slate-400">
                    {lang === 'en' ? 'Google PageSpeed' : 'গুগল পেজস্পিড স্কোর'}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#03170e] border border-emerald-500/25 text-left">
                  <span className="text-2xl font-black font-mono text-[#10ef82] block">
                    48+
                  </span>
                  <span className="text-xs text-slate-400">
                    {lang === 'en' ? 'Completed Projects' : 'সফল প্রজেক্ট ডেলিভারি'}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#03170e] border border-emerald-500/25 text-left">
                  <span className="text-2xl font-black font-mono text-[#10ef82] block">
                    100%
                  </span>
                  <span className="text-xs text-slate-400">
                    {lang === 'en' ? 'Client Satisfaction' : 'সন্তুষ্টি ও রিভিশন সাপোর্ট'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Guarantee Checklist */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              {lang === 'en'
                ? 'Empowering creators and brands with visually magnetic assets'
                : 'প্রতিটি কাজে নিখুঁত কোয়ালিটি ও দ্রুত ডেলিভারির নিশ্চয়তা'}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'We understand that digital audiences decide whether to engage within the first 1.5 seconds. That is why our creative workflows integrate visual psychology, focal contrast, and precise grading.'
                : 'ডিজিটাল মিডিয়ায় একজন দর্শক মাত্র ১.৫ সেকেন্ডের মধ্যে সিদ্ধান্ত নেন তিনি কন্টেন্টটি দেখবেন কি না। এজন্য আমাদের প্রতিটি থাম্বনেইল, ব্যানার ও ডিজাইনে সাইকোলজিক্যাল ভিজ্যুয়াল হুক ও কনট্রাস্ট লাইটিং নিশ্চিত করা হয়।'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs text-slate-200">
              <div className="p-3 rounded-2xl bg-[#062419] border border-emerald-500/25 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10ef82] shrink-0 mt-0.5" />
                <span>{lang === 'en' ? 'Pixel-perfect typography & color harmony' : 'নিখুঁত টাইপোগ্রাফি ও আধুনিক কালার থিওরি'}</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#062419] border border-emerald-500/25 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#10ef82] shrink-0 mt-0.5" />
                <span>{lang === 'en' ? '24–48h express turnaround guarantee' : '২৪-৪৮ ঘণ্টার দ্রুত ডেলিভারি নিশ্চয়তা'}</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#062419] border border-emerald-500/25 flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-[#10ef82] shrink-0 mt-0.5" />
                <span>{lang === 'en' ? 'Raw editable source files included' : 'সম্পূর্ণ এডিটেবল PSD/AI সোর্স ফাইল'}</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#062419] border border-emerald-500/25 flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#10ef82] shrink-0 mt-0.5" />
                <span>{lang === 'en' ? 'Dedicated WhatsApp communication' : 'সরাসরি হোয়াটসঅ্যাপে সার্বক্ষণিক সাপোর্ট'}</span>
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-[#083523] border border-[#10ef82]/30 text-xs font-mono text-[#10ef82]">
                #Photoshop
              </span>
              <span className="px-3 py-1 rounded-full bg-[#083523] border border-[#10ef82]/30 text-xs font-mono text-[#10ef82]">
                #Lightroom
              </span>
              <span className="px-3 py-1 rounded-full bg-[#083523] border border-[#10ef82]/30 text-xs font-mono text-[#10ef82]">
                #Illustrator
              </span>
              <span className="px-3 py-1 rounded-full bg-[#083523] border border-[#10ef82]/30 text-xs font-mono text-[#10ef82]">
                #Figma
              </span>
              <span className="px-3 py-1 rounded-full bg-[#083523] border border-[#10ef82]/30 text-xs font-mono text-[#10ef82]">
                #React & Next.js
              </span>
              <span className="px-3 py-1 rounded-full bg-[#083523] border border-[#10ef82]/30 text-xs font-mono text-[#10ef82]">
                #Premiere & AfterEffects
              </span>
            </div>
          </div>
        </div>

        {/* 5-Step Delivery Workflow */}
        <div className="border-t border-emerald-500/20 pt-8">
          <WorkflowSection lang={lang} />
        </div>

      </div>
    </div>
  );
};
