import React, { useState } from 'react';
import { Language } from '../types';
import { FAQS_DATA } from '../data/servicesData';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-14 md:py-20 relative bg-[#04160f] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="scroll-reveal stagger-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#083523] border border-[#20C878]/40 text-xs font-bold text-[#20C878] shadow-[0_0_10px_rgba(32,200,120,0.25)]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Frequently Asked Questions' : 'সাধারণ প্রশ্নোত্তর'}</span>
          </div>

          <h2 className="scroll-reveal stagger-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Everything You Need to Know Before{' '}
                <span className="text-gradient-tia">Ordering</span>
              </>
            ) : (
              <>
                কাজের আগে প্রয়োজনীয়{' '}
                <span className="text-gradient-tia">সব তথ্য ও প্রশ্নোত্তর</span>
              </>
            )}
          </h2>

          <p className="scroll-reveal stagger-3 text-sm text-slate-300 max-w-xl mx-auto">
            {lang === 'en'
              ? 'Find quick answers regarding our turnaround schedules, bKash & international payment systems, and revision guarantees.'
              : 'পেমেন্ট পদ্ধতি, ডেলিভারির সময়সীমা, সোর্স ফাইল ও রিভিশন পলিসি সংক্রান্ত সকল তথ্য নিচে দেওয়া হলো।'}
          </p>
        </div>

        {/* FAQ Accordion with Luminous Cards */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`luminous-card rounded-xl bg-[#062419]/80 overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-[#20C878]/60 shadow-[0_0_15px_rgba(32,200,120,0.25)]' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-[#083523]/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4">
                    {lang === 'en' ? faq.question : faq.questionBn}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#10ef82] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-300/90 leading-relaxed border-t border-emerald-500/15 bg-[#03150e]/60">
                    {lang === 'en' ? faq.answer : faq.answerBn}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
