import React, { useState, useMemo } from 'react';
import { Currency, Language, ShowcaseProject } from '../types';
import { SHOWCASE_PROJECTS } from '../data/projectsData';
import { ProjectShowcaseSlider } from './ProjectShowcaseSlider';
import {
  FolderGit2,
  Search,
  Sparkles,
  Calculator,
  Play,
  X,
  ExternalLink,
  Eye,
  CheckCircle2,
  Calendar,
  Building,
  Wrench,
  TrendingUp,
  Layers,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

interface ProjectsPageProps {
  lang: Language;
  currency: Currency;
  onSelectProjectForPrice: (domainId: string, subId: string) => void;
  onNavigateToCalculator: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  lang,
  currency,
  onSelectProjectForPrice,
  onNavigateToCalculator,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for active YouTube video playing in modal
  const [activeVideoProject, setActiveVideoProject] = useState<ShowcaseProject | null>(null);

  // Main categories matching Image 2
  const mainCategories = [
    { id: 'all', labelEn: 'All Projects', labelBn: 'সব প্রজেক্ট' },
    { id: 'graphic_design', labelEn: 'Graphic Design', labelBn: 'গ্রাফিক্স ডিজাইন' },
    { id: 'ui_ux', labelEn: 'UI/UX Design', labelBn: 'ইউআই/ইউএক্স ডিজাইন' },
    { id: 'frontend_web', labelEn: 'Frontend Development', labelBn: 'ফ্রন্টএন্ড ডেভেলপমেন্ট' },
    { id: 'video_motion', labelEn: 'Video & Motion', labelBn: 'ভিডিও ও মোশন' },
  ];

  // Sub-categories matching Image 2
  const subTypes = [
    { id: 'all', labelEn: 'All Types', labelBn: 'সব ধরন' },
    { id: 'poster', labelEn: 'Posters', labelBn: 'পোস্টার' },
    { id: 'thumbnail', labelEn: 'Thumbnails', labelBn: 'থাম্বনেল' },
    { id: 'ui_ux', labelEn: 'UI/UX', labelBn: 'ইউআই/ইউএক্স' },
    { id: 'web_coding', labelEn: 'Web & Coding', labelBn: 'ওয়েব ও কোডিং' },
    { id: 'education', labelEn: 'Education', labelBn: 'এডুকেশন' },
    { id: 'video', labelEn: 'YouTube Video', labelBn: 'ভিডিও' },
  ];

  // Filtering
  const filteredProjects = useMemo(() => {
    return SHOWCASE_PROJECTS.filter((proj) => {
      const matchCat = selectedCategory === 'all' || proj.category === selectedCategory;
      const matchType = selectedType === 'all' || proj.typeTag === selectedType;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        proj.title.toLowerCase().includes(q) ||
        proj.titleBn.toLowerCase().includes(q) ||
        proj.description.toLowerCase().includes(q) ||
        proj.descriptionBn.toLowerCase().includes(q) ||
        proj.client.toLowerCase().includes(q) ||
        proj.software.some((s) => s.toLowerCase().includes(q));

      return matchCat && matchType && matchQuery;
    });
  }, [selectedCategory, selectedType, searchQuery]);

  return (
    <div className="py-8 md:py-14 bg-[#03130d] text-slate-100 min-h-screen">
      
      {/* 0. Top Welcoming Header Block on Entering Projects Page */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-8">
        <div className="shape-from-left inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#083523] border border-[#10ef82]/40 text-xs font-bold text-[#10ef82]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? 'Creative Project Showcase' : 'ক্রিয়েটিভ প্রজেক্ট শোকেস ও কাজসমূহ'}</span>
        </div>

        <h1 className="anim-from-right text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          {lang === 'en' ? (
            <>
              Explore Our Premier &{' '}
              <span className="text-gradient-tia">Impactful Digital Projects</span>
            </>
          ) : (
            <>
              আমাদের ক্রিয়েটিভ প্রজেক্ট ও{' '}
              <span className="text-gradient-tia">সফল কাজসমূহ</span>
            </>
          )}
        </h1>

        <p className="anim-from-left text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {lang === 'en'
            ? 'From viral YouTube thumbnails that generate millions of views to theatrical Natok posters, motion graphics, and full-stack web platforms — explore our work below.'
            : 'আমরা ইউটিউব ক্রিয়েটর, নাটক ডিরেক্টর এবং শীর্ষস্থানীয় ব্র্যান্ডের জন্য তৈরি করেছি নজরকাড়া ভিজ্যুয়াল, হাই-সিটিআর থাম্বনেইল ও সুপার-ফাস্ট ওয়েব অ্যাপ্লিকেশন। নিচে আমাদের সেরা ডিজাইন, ভিডিও ও কোডিং প্রজেক্টগুলো অন্বেষণ করুন।'}
        </p>

        {/* Quick Scope Pills */}
        <div className="anim-from-bottom flex flex-wrap items-center justify-center gap-2 pt-2">
          {[
            { id: 'all', label: 'সব প্রজেক্ট (All Projects)' },
            { id: 'freelance', label: 'ফ্রিল্যান্স ও ক্লায়েন্ট কাজ' },
            { id: 'motion', label: 'মোশন ডিজাইন ও ভিডিও' },
            { id: 'youtube', label: 'ইউটিউব থাম্বনেইল রেকর্ড' },
            { id: 'web', label: 'ওয়েব ও কোডিং' },
          ].map((scope) => (
            <button
              key={scope.id}
              type="button"
              onClick={() => {
                if (scope.id === 'motion') {
                  setSelectedCategory('video_motion');
                  setSelectedType('video');
                } else if (scope.id === 'youtube') {
                  setSelectedCategory('graphic_design');
                  setSelectedType('thumbnail');
                } else if (scope.id === 'web') {
                  setSelectedCategory('frontend_web');
                  setSelectedType('web_coding');
                } else {
                  setSelectedCategory('all');
                  setSelectedType('all');
                }
              }}
              className="px-3.5 py-1.5 rounded-full bg-[#052619] border border-emerald-500/25 hover:border-[#10ef82] text-xs font-medium text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              {scope.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. Continuous 3D Perspective Animation Carousel ("ওপরে যে এনিমেশনটা চলে ওটা চলবে") */}
      <div className="border-y border-emerald-500/20 py-6 mb-10 bg-[#021008]/50">
        <ProjectShowcaseSlider
          lang={lang}
          onSelectProjectForPrice={onSelectProjectForPrice}
          showGrid={false}
        />
      </div>

      {/* 2. Main Projects Panel Content (Matching Image 2 Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#083523] border border-[#10ef82]/40 text-xs font-bold text-[#10ef82]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Project Gallery' : 'প্রজেক্ট গ্যালারি'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {lang === 'en' ? (
              <>
                Our Creative &{' '}
                <span className="text-gradient-tia">Digital Work</span>
              </>
            ) : (
              <>
                আমাদের ক্রিয়েটিভ ও{' '}
                <span className="text-gradient-tia">ডিজিটাল কাজসমূহ</span>
              </>
            )}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'en'
              ? 'Filter by category and deliverable type to explore our premier design, web, and YouTube video projects.'
              : 'ক্যাটাগরি ও ধরন অনুযায়ী ফিল্টার করে আমাদের সেরা ডিজাইন, ওয়েব ও ইউটিউব ভিডিও প্রজেক্টগুলো দেখুন।'}
          </p>

          {/* Big CTA Button (Matches Image 2: Price আন্দাজ করুন (বাজেট ক্যালকুলেটর)) */}
          <div className="pt-2">
            <button
              type="button"
              onClick={onNavigateToCalculator}
              className="tia-glow-btn inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#10ef82] to-[#00d66c] text-[#02180e] font-black text-xs sm:text-sm uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-xl shadow-emerald-500/25 cursor-pointer"
            >
              <Calculator className="w-4 h-4 stroke-[2.5]" />
              <span>
                {lang === 'en'
                  ? 'Estimate Price (Budget Calculator)'
                  : 'Price আন্দাজ করুন (বাজেট ক্যালকুলেটর)'}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#031f13] text-[#10ef82] text-[10px] font-bold border border-[#10ef82]/30">
                {lang === 'en' ? 'Instant' : 'ইনস্ট্যান্ট'}
              </span>
            </button>
          </div>
        </div>

        {/* Filter Controls (Matches Image 2) */}
        <div className="bg-[#052116]/85 backdrop-blur-xl border border-emerald-500/25 rounded-3xl p-5 sm:p-7 space-y-6 shadow-2xl mb-12">
          
          {/* Step 1: Main Category Filter */}
          <div className="space-y-2.5">
            <span className="text-xs font-bold text-slate-300 block">
              {lang === 'en'
                ? '1. Select Category (Category):'
                : '১. ক্যাটাগরি সিলেক্ট করুন (Category):'}
            </span>

            <div className="flex flex-wrap gap-2">
              {mainCategories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#10ef82] text-black shadow-[0_0_15px_rgba(16,239,130,0.4)]'
                        : 'bg-[#03170e] text-slate-300 hover:text-white border border-emerald-500/20 hover:border-emerald-500/40'
                    }`}
                  >
                    {lang === 'en' ? cat.labelEn : cat.labelBn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Sub-category / Type Filter */}
          <div className="space-y-2.5">
            <span className="text-xs font-bold text-slate-300 block">
              {lang === 'en'
                ? '2. Select Sub-Category or Type (Type):'
                : '২. সাব-ক্যাটাগরি বা ধরন নির্বাচন করুন (Type):'}
            </span>

            <div className="flex flex-wrap gap-2">
              {subTypes.map((type) => {
                const isSelected = selectedType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#093e28] text-[#10ef82] border-2 border-[#10ef82] font-bold shadow-sm'
                        : 'bg-[#03150d] text-slate-300 hover:text-white border border-emerald-500/20 hover:border-emerald-500/40'
                    }`}
                  >
                    {lang === 'en' ? type.labelEn : type.labelBn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-emerald-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'en' ? 'Search projects by title, client or software...' : 'প্রজেক্ট খুঁজুন...'}
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-[#02130a] border border-emerald-500/30 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#10ef82] focus:ring-1 focus:ring-[#10ef82]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 3. Project Cards Grid (Compact 2-3 columns on mobile & desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-7">
          {filteredProjects.map((project, idx) => {
            const dirClass = idx % 3 === 0 ? 'card-from-left' : idx % 3 === 1 ? 'card-from-bottom' : 'card-from-right';
            const staggerClass = idx < 9 ? `nav-stagger-${Math.min(idx + 1, 9)}` : '';
            return (
              <div
                key={project.id}
                className={`luminous-card luminous-edge-top ${dirClass} ${staggerClass} group rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#062619] via-[#041c12] to-[#02130b] overflow-hidden flex flex-col justify-between shadow-xl`}
              >
                {/* Card Top Artwork / Video Thumbnail Area */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#020e07] border-b border-[#0B6B3A]/35 shadow-[0_1px_0_0_rgba(32,200,120,0.2)]">
                  <img
                    src={project.imageThumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badges Overlay on Image (Matching Image 2) */}
                  <div className="absolute top-1.5 sm:top-2.5 left-1.5 sm:left-2.5 right-1.5 sm:right-2.5 flex items-center justify-between gap-1 pointer-events-none z-10">
                    <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded bg-[#02140c]/90 backdrop-blur-md border border-[#0B6B3A]/40 text-[8px] sm:text-[10px] font-bold text-white shadow-sm truncate max-w-[100px] sm:max-w-[150px]">
                      {project.leftBadge}
                    </span>

                    <span className="flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded bg-[#083523]/90 backdrop-blur-md border border-[#20C878]/50 text-[8px] sm:text-[10px] font-mono font-bold text-[#20C878] shadow-sm">
                      <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span>{project.metricBadge}</span>
                    </span>
                  </div>

                  {/* YouTube Video Play Button Overlay if it is a Video */}
                  {project.isVideo && (
                    <div
                      onClick={() => setActiveVideoProject(project)}
                      className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer group-hover:bg-black/25 transition-all"
                    >
                      <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-full bg-[#20C878] text-black flex items-center justify-center shadow-[0_0_20px_#20C878] group-hover:scale-110 active:scale-95 transition-all">
                        <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-black ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Information Body */}
                <div className="p-2.5 sm:p-5 space-y-2 sm:space-y-4 flex-1 flex flex-col justify-between text-left">
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-[10px] xs:text-[11px] sm:text-base font-extrabold text-white group-hover:text-[#20C878] transition-colors leading-tight break-words">
                      {lang === 'en' ? project.title : project.titleBn}
                    </h3>

                    <p className="text-[8px] xs:text-[9px] sm:text-xs text-slate-300 leading-snug break-words">
                      {lang === 'en' ? project.description : project.descriptionBn}
                    </p>
                  </div>


                  {/* Meta Strip: Software & Year & Client (Matching Image 2) */}
                  <div className="space-y-2 pt-2 border-t border-[#0B6B3A]/30 shadow-[inset_0_1px_0_0_rgba(32,200,120,0.18)] text-xs text-slate-300">
                    
                    {/* Software */}
                    <div className="flex items-center gap-2">
                      <Wrench className="w-3.5 h-3.5 text-[#10ef82] shrink-0" />
                      <span className="text-[11px] text-slate-400">সফটওয়্যার:</span>
                      <div className="flex flex-wrap gap-1">
                        {project.software.map((s, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#03150e] border border-emerald-500/25 text-emerald-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Year & Client */}
                    <div className="flex items-center justify-between text-[11px] pt-1">
                      <div className="flex items-center gap-1 text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-[#10ef82]" />
                        <span>{project.year}</span>
                      </div>

                      <div className="flex items-center gap-1 font-semibold text-white">
                        <Building className="w-3.5 h-3.5 text-[#10ef82]" />
                        <span className="truncate max-w-[140px]">{project.client}</span>
                      </div>
                    </div>

                    {/* Features checklist pills (Matching Image 2) */}
                    <div className="flex items-center gap-3 pt-1 text-[11px] text-emerald-300">
                      {(lang === 'en' ? project.features : project.featuresBn).slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10ef82]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action: Price & Order in Calculator */}
                  <div className="pt-2 sm:pt-3 border-t border-emerald-500/15 flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => onSelectProjectForPrice(project.domainId, project.subId)}
                      className="tia-glow-btn w-full inline-flex items-center justify-center gap-1 sm:gap-2 py-1.5 sm:py-2.5 px-2 sm:px-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#10ef82] to-[#00d66c] text-[#02180e] font-extrabold text-[9px] sm:text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md cursor-pointer"
                    >
                      <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                      <span className="truncate">{lang === 'en' ? 'Check Price' : 'দাম দেখুন'}</span>
                      <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search returned no results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#062419]/50 rounded-3xl border border-emerald-500/25 my-8 space-y-3">
            <FolderGit2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h3 className="text-lg font-bold text-white">
              {lang === 'en' ? 'No projects match your filter' : 'কোনো প্রজেক্ট খুঁজে পাওয়া যায়নি'}
            </h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              {lang === 'en'
                ? 'Try resetting your keyword or selecting "All Projects".'
                : 'ফিল্টার পরিবর্তন করে "সব প্রজেক্ট" সিলেক্ট করুন অথবা অন্য কি-ওয়ার্ড লিখুন।'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedType('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#10ef82] text-black font-bold text-xs"
            >
              {lang === 'en' ? 'Reset Filters' : 'ফিল্টার রিসেট করুন'}
            </button>
          </div>
        )}
      </div>

      {/* 4. Interactive YouTube Video Player Modal */}
      {activeVideoProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#03150e] rounded-3xl border border-[#10ef82]/50 shadow-2xl overflow-hidden p-4 sm:p-6 space-y-4">
            
            {/* Modal Header */}
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

            {/* Responsive 16:9 Video Player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-emerald-500/30 shadow-inner">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideoProject.youtubeId || 'dQw4w9WgXcQ'}?autoplay=1&rel=0&modestbranding=1`}
                title={activeVideoProject.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Footer with Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <span className="text-xs text-slate-400">
                {lang === 'en' ? 'Client:' : 'ক্লায়েন্ট:'} <strong className="text-white">{activeVideoProject.client}</strong> ({activeVideoProject.year})
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const target = activeVideoProject;
                    setActiveVideoProject(null);
                    onSelectProjectForPrice(target.domainId, target.subId);
                  }}
                  className="tia-glow-btn px-4 py-2 rounded-xl bg-gradient-to-r from-[#10ef82] to-[#00d66c] text-[#02180e] font-extrabold text-xs uppercase"
                >
                  {lang === 'en' ? 'Get Price for this Video' : 'এই ভিডিওর বাজেট ও মূল্য দেখুন'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
