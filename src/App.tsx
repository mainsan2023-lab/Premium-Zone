import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Currency, Language, PageView, ServiceItem } from './types';
import { SERVICES_DATA } from './data/servicesData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectShowcaseSlider } from './components/ProjectShowcaseSlider';
import { ProjectsPage } from './components/ProjectsPage';
import { ReviewsPage } from './components/ReviewsPage';
import { DynamicReviewCylinder } from './components/DynamicReviewCylinder';
import { BudgetCalculator } from './components/BudgetCalculator';
import { WorkflowSection } from './components/WorkflowSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { AboutPage } from './components/AboutPage';
import { LuminousDivider } from './components/LuminousDivider';
import { PageTransition } from './components/PageTransition';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useClickBurst } from './hooks/useClickBurst';

export default function App() {
  const [lang, setLang] = useState<Language>('bn');
  const [currency, setCurrency] = useState<Currency>('BDT');
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dedicated state for price calculator preselected project
  const [calcDomainId, setCalcDomainId] = useState<string>('graphic-design');
  const [calcSubId, setCalcSubId] = useState<string>('yt-viral-thumb');

  // Initialize scroll-triggered text animations across all sections & on page change
  useScrollReveal(currentPage);

  // Initialize tactile light burst animation on every button click
  useClickBurst();

  // Initialize Butter-Smooth Momentum Scrolling (Lenis with tuned natural glide)
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.15, // Smooth duration, natural deceleration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Soft exponential deceleration curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.92, // Controlled momentum: glides slightly and stops gracefully without overshooting
      touchMultiplier: 1.0,
      infinite: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    (window as any).__lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  // Pause smooth scroll when modal is active to prevent background scrolling
  useEffect(() => {
    const lenis = (window as any).__lenis;
    if (!lenis) return;
    if (isModalOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [isModalOpen]);

  // Dedicated helper to parse current route from hash or pathname
  const getRouteFromUrl = (): PageView => {
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase() as PageView;
    const validPages: PageView[] = ['home', 'about', 'services', 'projects', 'reviews', 'contact', 'calculator'];
    if (validPages.includes(hash)) {
      return hash;
    }
    const path = window.location.pathname.replace(/^\//, '').split('/')[0].toLowerCase() as PageView;
    if (validPages.includes(path)) {
      return path;
    }
    return 'home';
  };

  // Listen to browser hash and popstate changes for seamless back/forward navigation
  useEffect(() => {
    const handleUrlChange = () => {
      const targetPage = getRouteFromUrl();
      setCurrentPage((prev) => (prev !== targetPage ? targetPage : prev));
    };

    handleUrlChange();

    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  const handleNavigatePage = (page: PageView) => {
    if (page === currentPage) {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: false, duration: 0.6 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    setCurrentPage(page);
    window.location.hash = page;
  };

  const handleOpenServiceModal = (service: ServiceItem) => {
    setActiveModalService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectProjectForPrice = (domainId: string, subId: string) => {
    setCalcDomainId(domainId);
    setCalcSubId(subId);
    
    // If not in home or calculator, navigate to home/calculator
    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.location.hash = 'home';
    }

    setTimeout(() => {
      const el = document.getElementById('calculator');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleOrderWhatsApp = (service: ServiceItem) => {
    const formattedPrice =
      currency === 'BDT'
        ? `৳${service.startingPriceBDT.toLocaleString()}`
        : `$${service.startingPriceUSD}`;

    const rawMsg = `Hello Premium Zone! I am interested in ordering:
*Service:* ${service.title}
*Starting Price:* ${formattedPrice}
*Turnaround:* ${service.turnaroundTime}
Please send me package options and available start dates.`;

    window.open(
      `https://wa.me/8801800000000?text=${encodeURIComponent(rawMsg)}`,
      '_blank'
    );
  };

  const handleGeneralBooking = () => {
    handleSelectProjectForPrice('graphic-design', 'yt-viral-thumb');
  };

  const handleExploreProjects = () => {
    handleNavigatePage('projects');
  };

  const handleExploreAbout = () => {
    handleNavigatePage('about');
  };

  const handleContactClick = () => {
    handleNavigatePage('contact');
  };

  const handleSearchClick = () => {
    if (currentPage !== 'services') {
      handleNavigatePage('services');
    }
    setTimeout(() => {
      const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
      if (searchInput) searchInput.focus();
    }, 300);
  };

  const handleDirectWhatsApp = () => {
    const msg = encodeURIComponent(
      'Hi Premium Zone! I want to consult with your creative team about my upcoming project.'
    );
    window.open(`https://wa.me/8801800000000?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#03130d] text-slate-100 selection:bg-[#10ef82]/30 selection:text-[#10ef82] relative font-sans">
      {/* Floating Pill Navbar with Home button, icon light-burst hover, and BD বাংলা switch */}
      <Navbar
        lang={lang}
        setLang={setLang}
        currency={currency}
        setCurrency={setCurrency}
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
        onOpenBooking={handleGeneralBooking}
        onSearchClick={handleSearchClick}
      />

      {/* Main Content Rendered According to Page View with Global Page Transition */}
      <main className="relative min-h-[75vh]">
        <PageTransition routeKey={currentPage}>
          {/* VIEW 1: DEDICATED PROJECTS PAGE (Matching Screenshot 2) */}
          {currentPage === 'projects' && (
            <ProjectsPage
              lang={lang}
              currency={currency}
              onSelectProjectForPrice={handleSelectProjectForPrice}
              onNavigateToCalculator={() => handleSelectProjectForPrice('graphic-design', 'yt-viral-thumb')}
            />
          )}

          {/* VIEW 2: DEDICATED REVIEWS PAGE (Matching Screenshot 1) */}
          {currentPage === 'reviews' && (
            <ReviewsPage
              lang={lang}
              onOpenBooking={handleGeneralBooking}
            />
          )}

          {/* VIEW 3: DEDICATED SERVICES PAGE */}
          {currentPage === 'services' && (
            <div className="pt-6">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-8">
                <div className="shape-from-left inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#083523] border border-[#10ef82]/40 text-xs font-bold text-[#10ef82]">
                  <span>✨ {lang === 'en' ? 'Our Specialized Digital Services' : 'আমাদের স্পেশালাইজড ক্রিয়েটিভ সেবা'}</span>
                </div>

                <h1 className="anim-from-right text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                  {lang === 'en' ? (
                    <>
                      Tailored Creative &{' '}
                      <span className="text-gradient-tia">Digital Production Solutions</span>
                    </>
                  ) : (
                    <>
                      আপনার ব্র্যান্ডকে অনন্য উচ্চতায় নিতে{' '}
                      <span className="text-gradient-tia">আমাদের সেবাসমূহ</span>
                    </>
                  )}
                </h1>

                <p className="anim-from-left text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  {lang === 'en'
                    ? 'We specialize in high-CTR YouTube thumbnails, cinematic video editing, vector brand identity, and ultra-fast full-stack web applications. Explore our services below with 24-48h express delivery and 30% discount applied.'
                    : 'আমরা উচ্চমানের ফটো ম্যানিপুলেশন, হাই-সিটিআর ইউটিউব থাম্বনেইল, সিনেমাটিক ভিডিও এডিটিং, কর্পোরেট ব্র্যান্ড আইডেন্টিটি এবং আধুনিক ফুল-স্ট্যাক ওয়েবসাইট তৈরিতে অভিজ্ঞ। প্রতিটি সার্ভিসে রয়েছে দ্রুত ডেলিভারি নিশ্চয়তা ও ৩০% স্পেশাল ছাড়।'}
                </p>
              </div>

              <ServicesSection
                lang={lang}
                currency={currency}
                onSelectService={handleOpenServiceModal}
                onOrderWhatsApp={handleOrderWhatsApp}
                onCheckServicePrice={handleSelectProjectForPrice}
              />

              <BudgetCalculator
                lang={lang}
                currency={currency}
                preselectedDomainId={calcDomainId}
                preselectedSubId={calcSubId}
              />
            </div>
          )}

          {/* VIEW 4: DEDICATED ABOUT PAGE */}
          {currentPage === 'about' && (
            <AboutPage
              lang={lang}
              onOpenBooking={handleGeneralBooking}
            />
          )}

          {/* VIEW 5: DEDICATED CONTACT PAGE */}
          {currentPage === 'contact' && (
            <div className="pt-6">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-6">
                <div className="shape-from-left inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#083523] border border-[#10ef82]/40 text-xs font-bold text-[#10ef82]">
                  <span>✨ {lang === 'en' ? 'Connect With Us 24/7' : 'আমাদের সাথে সরাসরি যোগাযোগ করুন'}</span>
                </div>

                <h1 className="anim-from-right text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                  {lang === 'en' ? (
                    <>
                      Get In Touch &{' '}
                      <span className="text-gradient-tia">Start Your Project Today</span>
                    </>
                  ) : (
                    <>
                      আমাদের সাথে যোগাযোগ করুন —{' '}
                      <span className="text-gradient-tia">আপনার প্রজেক্ট আলোচনা করুন</span>
                    </>
                  )}
                </h1>

                <p className="anim-from-left text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  {lang === 'en'
                    ? 'We are available around the clock. Whether you need a quick quote or an ongoing design partner, reach out via WhatsApp, phone call, or message form.'
                    : 'আমরা ২৪/৭ সার্বক্ষণিক সক্রিয় আছি। সরাসরি হোয়াটসঅ্যাপ মেসেজ, ফোন কল বা মেসেজ ফর্মের মাধ্যমে আপনার চাহিদা জানান এবং তাৎক্ষণিক ফ্রি কোটেশন পান।'}
                </p>
              </div>

              <ContactSection lang={lang} />
              <FaqSection lang={lang} />
            </div>
          )}

          {/* VIEW 6: DEDICATED CALCULATOR PAGE */}
          {currentPage === 'calculator' && (
            <div className="pt-6">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-6">
                <div className="shape-from-left inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#083523] border border-[#10ef82]/40 text-xs font-bold text-[#10ef82]">
                  <span>✨ {lang === 'en' ? 'Live Price Estimation' : 'লাইভ বাজেট ক্যালকুলেটর'}</span>
                </div>

                <h1 className="anim-from-right text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                  {lang === 'en' ? (
                    <>
                      Calculate Your <span className="text-gradient-tia">Project Investment</span>
                    </>
                  ) : (
                    <>
                      আপনার প্রজেক্টের বাজেট <span className="text-gradient-tia">নির্ধারণ করুন</span>
                    </>
                  )}
                </h1>

                <p className="anim-from-left text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  {lang === 'en'
                    ? 'Select your project scope, choose custom add-ons, and get an instant accurate price quote with express delivery.'
                    : 'আপনার পছন্দের সার্ভিস ও প্রয়োজনীয় অপশনগুলো নির্বাচন করে তাৎক্ষণিক নির্ভুল প্রজেক্ট বাজেট ও সময় জেনে নিন।'}
                </p>
              </div>

              <BudgetCalculator
                lang={lang}
                currency={currency}
                preselectedDomainId={calcDomainId}
                preselectedSubId={calcSubId}
              />
            </div>
          )}

          {/* VIEW 7: HOME LANDING PAGE (Sequential full view with top hero and all core components) */}
          {currentPage === 'home' && (
            <div>
              {/* Fullscreen Hero Section */}
              <Hero
                lang={lang}
                onExploreProjects={handleExploreProjects}
                onExploreAbout={handleExploreAbout}
                onOpenWhatsApp={handleDirectWhatsApp}
                onContactClick={handleContactClick}
                onStartProject={() => handleSelectProjectForPrice('graphic-design', 'yt-viral-thumb')}
              />

              {/* Luminous Section Divider */}
              <LuminousDivider withCenterGlow={true} withSweep={true} />

              {/* About Section */}
              <AboutSection
                lang={lang}
                onOpenBooking={() => handleSelectProjectForPrice('branding-identity', 'logo-brand-identity')}
              />

              {/* Luminous Section Divider */}
              <LuminousDivider withCenterGlow={true} withSweep={true} />

              {/* 1. 3D Project Showcase Slider (প্রজেক্ট) & 9-Project 3x3 Grid */}
              <ProjectShowcaseSlider
                lang={lang}
                onSelectProjectForPrice={handleSelectProjectForPrice}
                onNavigateToProjects={() => handleNavigatePage('projects')}
                showGrid={true}
              />

              {/* Luminous Section Divider */}
              <LuminousDivider withCenterGlow={true} withSweep={true} />

              {/* 2. 3D Perspective Image Carousel Section with Header (রিভিউ) */}
              <DynamicReviewCylinder showHeader={true} lang={lang} />

              {/* Luminous Section Divider */}
              <LuminousDivider withCenterGlow={true} withSweep={true} />

              {/* 3. Core Services Section (আমাদের সার্ভিস) */}
              <ServicesSection
                lang={lang}
                currency={currency}
                onSelectService={handleOpenServiceModal}
                onOrderWhatsApp={handleOrderWhatsApp}
                onCheckServicePrice={handleSelectProjectForPrice}
              />

              {/* Luminous Section Divider */}
              <LuminousDivider withCenterGlow={true} withSweep={true} />

              {/* Interactive Price Calculator */}
              <BudgetCalculator
                lang={lang}
                currency={currency}
                preselectedDomainId={calcDomainId}
                preselectedSubId={calcSubId}
              />

              {/* Luminous Section Divider */}
              <LuminousDivider withCenterGlow={true} withSweep={true} />

              {/* 5-Step Execution Workflow */}
              <WorkflowSection lang={lang} />

              {/* Luminous Section Divider */}
              <LuminousDivider withCenterGlow={true} withSweep={true} />

              {/* Frequently Asked Questions */}
              <FaqSection lang={lang} />

              {/* Luminous Section Divider */}
              <LuminousDivider withCenterGlow={true} withSweep={true} />

              {/* Contact & Consultation */}
              <ContactSection lang={lang} />
            </div>
          )}
        </PageTransition>
      </main>

      {/* Luminous Footer Divider */}
      <LuminousDivider withCenterGlow={true} withSweep={true} intensity="vibrant" />

      {/* Quiet Footer */}
      <Footer lang={lang} />

      {/* Service Detail & Package Comparison Modal */}
      <ServiceDetailModal
        service={activeModalService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        lang={lang}
        currency={currency}
      />

      {/* Floating WhatsApp Widget */}
      <WhatsAppFloating lang={lang} />
    </div>
  );
}
