import React, { useState } from 'react';
import { Language } from '../types';
import { Sparkles, Eye, ArrowUpRight, CheckCircle2, Split } from 'lucide-react';

interface PortfolioShowcaseProps {
  lang: Language;
  onOpenBooking: () => void;
}

interface PortfolioItem {
  id: string;
  category: 'youtube' | 'branding' | 'web' | 'social';
  title: string;
  titleBn: string;
  client: string;
  metric: string;
  tags: string[];
  description: string;
  descriptionBn: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    category: 'youtube',
    title: 'Documentary Breakdown Thumbnail',
    titleBn: 'ডকুমেন্টারি ব্রেকডাউন থাম্বনেইল',
    client: 'FinTech Unlocked (450K)',
    metric: '+14.2% CTR Peak',
    tags: ['Photoshop', 'Blender 3D', 'Color Grading'],
    description: 'Custom photo manipulation, glowing neon chart overlay, and high-contrast dramatic lighting tailored for business audiences.',
    descriptionBn: 'বিজনেস অডিয়েন্সের জন্য ড্রামাটিক লাইটিং, ফটো ম্যানিপুলেশন ও নিয়ন চার্ট এফেক্ট সমৃদ্ধ থাম্বনেইল।'
  },
  {
    id: 'p2',
    category: 'branding',
    title: 'Nexora Green Logistics Identity',
    titleBn: 'নেক্সোরা গ্রিন লজিস্টিকস ব্র্যান্ড আইডেন্টিটি',
    client: 'Nexora Cargo Global',
    metric: 'Global Brand Launch',
    tags: ['Illustrator', 'Figma', 'Brand Book'],
    description: 'Modern geometric lettermark, vehicle livery wraps, typography guidelines, and full corporate stationery.',
    descriptionBn: 'মডার্ন জিওমেট্রিক লেটারমার্ক, গাড়ি ব্র্যান্ডিং ডিজাইন এবং পূর্ণাঙ্গ কর্পোরেট স্টেশনারি কিট।'
  },
  {
    id: 'p3',
    category: 'web',
    title: 'Apex Cloud SaaS Platform & Dashboard',
    titleBn: 'অ্যাপেক্স ক্লাউড ড্যাশবোর্ড ও ওয়েব প্ল্যাটফর্ম',
    client: 'Apex Enterprise USA',
    metric: '99/100 PageSpeed',
    tags: ['React 19', 'Tailwind CSS', 'TypeScript'],
    description: 'High-speed dark emerald glassmorphism dashboard, real-time analytics widgets, and mobile-optimized layouts.',
    descriptionBn: 'উচ্চগতির ডার্ক এমারেল্ড গ্লাস ড্যাশবোর্ড, রিয়েল-টাইম অ্যানালিটিক্স এবং মোবাইল রেসপন্সিভ ডিজাইন।'
  },
  {
    id: 'p4',
    category: 'social',
    title: 'Eid Mega Campaign Creative Suite',
    titleBn: 'ঈদ মেগা ক্যাম্পেইন ক্রিয়েটিভ স্যুট',
    client: 'Urban Attire BD',
    metric: '4.8x Return on Ad Spend',
    tags: ['Photoshop', 'Social Ads', 'Meta Formats'],
    description: '10-part stop-scrolling creative carousel and single image ads designed for maximum ROAS on Meta.',
    descriptionBn: 'মেটা প্ল্যাটফর্মের জন্য স্ক্রল-স্টপিং ১০টি আকর্ষণীয় ক্যারোসেল ও পোস্টার ডিজাইন যা সেলস বাড়িয়েছে ৪.৮ গুণ।'
  },
  {
    id: 'p5',
    category: 'youtube',
    title: 'Gaming Championship Final Thumb',
    titleBn: 'গেমিং চ্যাম্পিয়নশিপ ফাইনাল থাম্বনেইল',
    client: 'ProArena Esports',
    metric: '850K Views in 48h',
    tags: ['3D VFX', 'Character Lighting', 'Photoshop'],
    description: 'High dynamic range character cutouts, particle embers, and volumetric backlight for competitive gaming fans.',
    descriptionBn: 'হাই-ডাইনামিক ক্যারেক্টার কাটআউট, ভলিউমেট্রিক লাইটিং ও পার্টিক্যাল এফেক্ট।'
  },
  {
    id: 'p6',
    category: 'web',
    title: 'Artisan Gourmet E-Commerce Experience',
    titleBn: 'আর্টিসান গোরমেট ই-কমার্স প্ল্যাটফর্ম',
    client: 'Gourmet Greens Ltd.',
    metric: '+82% Checkout Conversion',
    tags: ['Next.js', 'bKash Gateway', 'Stripe'],
    description: 'Smooth checkout flow, automated SMS/WhatsApp alerts, and lightning-fast product filtering.',
    descriptionBn: 'সহজ চেকআউট, বিকাশ গেটওয়ে ইন্টিগ্রেশন এবং বিদ্যুৎগতির প্রোডাক্ট ফিল্টারিং।'
  }
];

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  lang,
  onOpenBooking,
}) => {
  const [filter, setFilter] = useState<'all' | 'youtube' | 'branding' | 'web' | 'social'>('all');
  const [sliderPosition, setSliderPosition] = useState(52); // percentage for before/after slider

  const filteredItems = PORTFOLIO_ITEMS.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <section id="portfolio" className="py-20 md:py-28 relative bg-[#03130d] border-t border-emerald-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#10ef82] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Proof of Craft' : 'কাজের নমুনা ও পোর্টফোলিও'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'en' ? (
                <>
                  Selected Projects &{' '}
                  <span className="text-gradient-tia">Impact Showcase</span>
                </>
              ) : (
                <>
                  বাছাইকৃত প্রজেক্ট ও{' '}
                  <span className="text-gradient-tia">বাস্তব ফলাফল</span>
                </>
              )}
            </h2>
            <p className="text-sm text-slate-300">
              {lang === 'en'
                ? 'Explore our recent visual work across high-CTR YouTube thumbnails, complete corporate brand identities, and high-speed web apps.'
                : 'আমাদের তৈরি সফল ইউটিউব থাম্বনেইল, ব্র্যান্ড আইডেন্টিটি এবং আধুনিক ওয়েবসাইটের কয়েকটি বাছাইকৃত কাজ নিচে দেখুন।'}
            </p>
          </div>

          {/* Category Filter buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
            {[
              { id: 'all', labelEn: 'All Work', labelBn: 'সবগুলো' },
              { id: 'youtube', labelEn: 'YouTube', labelBn: 'ইউটিউব' },
              { id: 'branding', labelEn: 'Branding', labelBn: 'ব্র্যান্ডিং' },
              { id: 'web', labelEn: 'Web Apps', labelBn: 'ওয়েবসাইট' },
              { id: 'social', labelEn: 'Ads & Social', labelBn: 'সোশ্যাল অ্যাড' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#10ef82] text-black font-bold shadow-sm'
                    : 'bg-[#062419] text-slate-300 hover:text-white border border-emerald-500/15'
                }`}
              >
                {lang === 'en' ? tab.labelEn : tab.labelBn}
              </button>
            ))}
          </div>
        </div>

        {/* Feature: Interactive Before & After Manipulation Spotlight */}
        <div className="mb-14 rounded-2xl bg-gradient-to-r from-[#062619] via-[#041d13] to-[#03150d] border border-emerald-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Info Col */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#083523] text-xs font-bold text-[#10ef82] border border-[#10ef82]/30">
                <Split className="w-3.5 h-3.5" />
                <span>
                  {lang === 'en'
                    ? 'Interactive Before & After Retouch'
                    : 'ইন্টারেক্টিভ ফটো ম্যানিপুলেশন স্লাইডার'}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                {lang === 'en'
                  ? 'Raw Capture vs. Click-Maximizing Polish'
                  : 'কাঁচা ছবি থেকে আকর্ষণীয় থাম্বনেইল রূপান্তর'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'en'
                  ? 'Drag the interactive slider to see how Premium Zone transforms flat, unedited camera captures into high-contrast, attention-grabbing visuals that command clicks on YouTube feeds.'
                  : 'স্লাইডারটি ডানে-বামে টেনে দেখুন কীভাবে আমরা সাধারণ কাঁচা ছবিকে নিখুঁত লাইটিং, ব্যাকগ্রাউন্ড রিপ্লেসমেন্ট এবং কালার গ্রেডিং দিয়ে দৃষ্টিনন্দন থাম্বনেইলে রূপান্তর করি।'}
              </p>

              <div className="space-y-2 text-xs text-slate-200 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10ef82]" />
                  <span>{lang === 'en' ? 'Frequency separation face skin retouch' : 'নিখুঁত স্কিন রিটাচ ও ফেসিয়াল ডিটেইলিং'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10ef82]" />
                  <span>{lang === 'en' ? 'Volumetric green/lime rim lighting glow' : 'ভলিউমেট্রিক সবুজ ও টিয়া রিম লাইটিং'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10ef82]" />
                  <span>{lang === 'en' ? 'Depth of field background manipulation' : 'ব্যাকগ্রাউন্ড ব্লার ও ডেপথ ক্রিয়েশন'}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenBooking}
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#10ef82] text-black text-xs font-bold hover:brightness-105 transition-all shadow-sm shadow-emerald-500/30 cursor-pointer"
              >
                <span>{lang === 'en' ? 'Order Similar Retouch' : 'একই রকম রিটাচ অর্ডার করুন'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Interactive Drag Slider Col */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-72 sm:h-84 rounded-xl overflow-hidden select-none border border-emerald-500/30 shadow-2xl">
                {/* AFTER side (full background) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#063020] via-[#09472e] to-[#041a12] flex flex-col justify-between p-6">
                  {/* Decorative glowing art elements for AFTER */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,239,130,0.35),transparent_50%)]" />
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-3 py-1 rounded bg-[#093522]/90 border border-[#10ef82] text-xs font-bold text-[#10ef82] shadow-sm">
                      AFTER: POLISHED HOOK
                    </span>
                    <span className="text-xs font-mono text-[#10ef82] bg-black/60 px-2 py-1 rounded border border-emerald-500/30">
                      +14.2% CTR
                    </span>
                  </div>

                  <div className="relative z-10 space-y-1 bg-[#03170e]/80 p-4 rounded-xl backdrop-blur-md border border-[#10ef82]/40 max-w-sm ml-auto">
                    <span className="text-[10px] text-[#10ef82] font-mono font-bold uppercase tracking-wider block">
                      3D CINEMATIC FINISH
                    </span>
                    <h4 className="text-sm font-extrabold text-white">
                      The Secret Behind $10M Revenue
                    </h4>
                    <p className="text-[11px] text-slate-300">
                      High dynamic contrast, vivid saturated accents, and dramatic lighting.
                    </p>
                  </div>
                </div>

                {/* BEFORE side (clipped overlay by sliderPosition %) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden bg-gradient-to-br from-[#18221e] via-[#121916] to-[#0d1411] p-6 flex flex-col justify-between border-r-2 border-white/80"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded bg-black/60 border border-slate-600 text-xs font-bold text-slate-300">
                      BEFORE: FLAT RAW
                    </span>
                  </div>

                  <div className="space-y-1 bg-black/70 p-4 rounded-xl border border-slate-700 max-w-xs">
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">
                      ORIGINAL CAMERA DRAFT
                    </span>
                    <h4 className="text-sm font-semibold text-slate-300">
                      Flat contrast, unretouched
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Lacks punch and feed prominence.
                    </p>
                  </div>
                </div>

                {/* Draggable Slider Control Handle */}
                <div
                  className="absolute top-0 bottom-0 -ml-3 flex flex-col items-center justify-center cursor-ew-resize pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center shadow-xl font-mono text-[10px] font-bold">
                    ⇄
                  </div>
                </div>

                {/* Range input for drag support */}
                <input
                  type="range"
                  min="5"
                  max="95"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(parseInt(e.target.value, 10))}
                  aria-label="Drag before and after slider"
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
                <span>◀ Slide to see Before (Raw)</span>
                <span className="font-mono text-emerald-400">Drag Handle</span>
                <span>Slide to see After (Hook) ▶</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-[#062419]/70 backdrop-blur-xl border border-emerald-500/20 hover:border-[#10ef82]/50 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(16,239,130,0.2)]"
            >
              <div className="space-y-3.5">
                {/* Visual Header Mockup */}
                <div className="h-40 rounded-xl bg-gradient-to-br from-[#072d1f] via-[#041c13] to-[#02110b] border border-emerald-500/20 p-4 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#10ef82] font-mono text-[11px] font-bold bg-[#083522] px-2 py-0.5 rounded border border-[#10ef82]/30">
                      {item.metric}
                    </span>
                    <span className="text-slate-400 text-[11px]">{item.client}</span>
                  </div>

                  <div className="bg-[#03150e]/85 p-3 rounded-lg border border-emerald-500/20">
                    <h4 className="text-xs font-bold text-white group-hover:text-[#10ef82] transition-colors">
                      {lang === 'en' ? item.title : item.titleBn}
                    </h4>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300/85 leading-relaxed">
                  {lang === 'en' ? item.description : item.descriptionBn}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#031810] border border-emerald-500/15 text-emerald-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-emerald-500/15 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  {lang === 'en' ? 'Verified Client Delivery' : 'যাচাইকৃত ক্লায়েন্ট ডেলিভারি'}
                </span>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="flex items-center gap-1 text-xs font-bold text-[#10ef82] hover:text-white transition-colors cursor-pointer"
                >
                  <span>{lang === 'en' ? 'Get Similar' : 'একই রকম চাই'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
