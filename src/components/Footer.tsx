import React from 'react';
import { Language } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { PremiumZoneLogo } from './PremiumZoneLogo';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020e09] relative pt-12 pb-14 text-slate-400 text-xs overflow-hidden">
      {/* Top luminous border line with center glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#20C878]/80 to-transparent shadow-[0_0_12px_rgba(32,200,120,0.5)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#20C878]/30 blur-[3px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <PremiumZoneLogo className="w-8 h-8 rounded-lg" />
              <span className="text-lg font-bold text-white tracking-tight">
                Premium <span className="text-[#20C878]">Zone</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {lang === 'en'
                ? 'Premium Zone is a leading creative agency and digital engineering studio based in Dhaka, Bangladesh, serving ambitious creators and forward-thinking enterprises globally.'
                : 'Premium Zone হলো ঢাকাভিত্তিক শীর্ষস্থানীয় ক্রিয়েটিভ এজেন্সি ও ডিজিটাল স্টুডিও। আমরা কাজ করি দেশ ও বিদেশের কন্টেন্ট ক্রিয়েটর এবং আধুনিক ব্র্যান্ডের সাথে।'}
            </p>

            {/* Payment methods accepted */}
            <div className="pt-1">
              <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-2">
                {lang === 'en' ? 'Accepted Payment Methods:' : 'অনুমোদিত পেমেন্ট মেথড:'}
              </span>
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-300">
                <span className="px-2 py-0.5 rounded bg-[#062419] border border-emerald-500/20 text-[#10ef82]">
                  bKash Merchant
                </span>
                <span className="px-2 py-0.5 rounded bg-[#062419] border border-emerald-500/20 text-[#10ef82]">
                  Nagad
                </span>
                <span className="px-2 py-0.5 rounded bg-[#062419] border border-emerald-500/20 text-[#10ef82]">
                  Bank Wire
                </span>
                <span className="px-2 py-0.5 rounded bg-[#062419] border border-emerald-500/20 text-slate-300">
                  Wise / PayPal
                </span>
                <span className="px-2 py-0.5 rounded bg-[#062419] border border-emerald-500/20 text-slate-300">
                  Credit Cards
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'en' ? 'Services Hub' : 'সার্ভিসসমূহ'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#10ef82] transition-colors">
                  {lang === 'en' ? 'YouTube CTR Thumbnails' : 'ইউটিউব থাম্বনেইল'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#10ef82] transition-colors">
                  {lang === 'en' ? 'Logo & Brand Identity' : 'লোগো ও ব্র্যান্ড আইডেন্টিটি'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#10ef82] transition-colors">
                  {lang === 'en' ? 'React Web Development' : 'ওয়েব ডেভেলপমেন্ট'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#10ef82] transition-colors">
                  {lang === 'en' ? 'Video Editing & Reels' : 'ভিডিও এডিটিং ও রিলস'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#10ef82] transition-colors">
                  {lang === 'en' ? 'Social Ad Creatives' : 'সোশ্যাল মিডিয়া ব্যানার'}
                </a>
              </li>
            </ul>
          </div>

          {/* Agency & Studio Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'en' ? 'Studio & Direct Line' : 'স্টুডিও ও সরাসরি যোগাযোগ'}
            </h4>
            <p className="text-xs text-slate-400">
              Gulshan-2, Dhaka 1212, Bangladesh
            </p>
            <p className="text-xs text-white font-mono">
              WhatsApp: +880 1800-000000
            </p>
            <p className="text-xs text-white font-mono">
              Email: contact@premiumzone.agency
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/8801800000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10ef82] hover:underline"
              >
                <span>{lang === 'en' ? 'Instant WhatsApp Chat' : 'সরাসরি হোয়াটসঅ্যাপে কথা বলুন'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Quiet copyright with luminous divider */}
        <div className="pt-8 border-t border-[#0B6B3A]/30 shadow-[inset_0_1px_0_0_rgba(32,200,120,0.18)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {currentYear} Premium Zone Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#services" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
            <span>·</span>
            <span className="text-emerald-500">
              {lang === 'en' ? 'Crafted with Emerald & Tia Glass' : 'সবুজ ও টিয়া গ্লাস থিম'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
