import React from 'react';
import { Language } from '../types';
import { WORKFLOW_STEPS } from '../data/servicesData';
import { Layers, ArrowRight } from 'lucide-react';

interface WorkflowSectionProps {
  lang: Language;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ lang }) => {
  return (
    <section id="process" className="py-14 md:py-20 relative bg-[#04160f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="scroll-reveal stagger-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#083523] border border-[#20C878]/40 text-xs font-bold text-[#20C878] shadow-[0_0_10px_rgba(32,200,120,0.25)]">
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Our Execution Protocol' : 'আমাদের কাজের ধাপ'}</span>
          </div>

          <h2 className="scroll-reveal stagger-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'en' ? (
              <>
                How We Deliver{' '}
                <span className="text-gradient-tia">Flawless Results</span> Every Time
              </>
            ) : (
              <>
                যেভাবে সম্পন্ন হয় প্রতিটি{' '}
                <span className="text-gradient-tia">প্রিমিয়াম প্রজেক্ট</span>
              </>
            )}
          </h2>

          <p className="scroll-reveal stagger-3 text-sm text-slate-300">
            {lang === 'en'
              ? 'Our structured 5-step pipeline guarantees speed, precision, and zero ambiguity from initial briefing to 4K asset handoff.'
              : 'প্রথম ব্রিফিং থেকে শুরু করে চূড়ান্ত ডেলিভারি ও সাপোর্ট পর্যন্ত আমাদের রয়েছে সুনির্দিষ্ট ও সুশৃঙ্খল ৫টি ধাপ।'}
          </p>
        </div>

        {/* Workflow Steps Grid with Luminous Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {WORKFLOW_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="luminous-card luminous-edge-top relative p-5 rounded-2xl bg-[#062419]/80 backdrop-blur-xl transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Step number in bold emerald font */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black font-mono text-[#10ef82] opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.step}
                </span>
                {idx < WORKFLOW_STEPS.length - 1 && (
                  <ArrowRight className="hidden md:block w-4 h-4 text-emerald-600/60" />
                )}
              </div>

              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#10ef82] transition-colors">
                {lang === 'en' ? item.title : item.titleBn}
              </h3>

              <p className="text-xs text-slate-300/80 leading-relaxed">
                {lang === 'en' ? item.desc : item.descBn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
