import React, { useState } from 'react';
import { Language } from '../types';
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState('YouTube Thumbnails');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) return;
    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const raw = `Hello Premium Zone Team!
My Name: ${name || 'Prospective Client'}
Contact: ${contact || 'WhatsApp'}
Service: ${service}
Brief: ${message || 'I would like to discuss a new creative project.'}`;
    window.open(`https://wa.me/8801800000000?text=${encodeURIComponent(raw)}`, '_blank');
  };

  return (
    <section id="contact" className="py-14 md:py-20 relative bg-[#03130d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#083523] border border-[#20C878]/40 text-xs font-bold text-[#20C878] shadow-[0_0_10px_rgba(32,200,120,0.25)]">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Direct Contact & Consultation' : 'সরাসরি যোগাযোগ ও ফ্রি পরামর্শ'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white tracking-tight leading-tight">
                {lang === 'en' ? (
                  <>
                    Let's Connect & Build{' '}
                    <span className="text-gradient-tia">Your Next Big Vision</span>
                  </>
                ) : (
                  <>
                    আমাদের সাথে যোগাযোগ করুন —{' '}
                    <span className="text-gradient-tia">আপনার ড্রিম প্রজেক্ট শুরু হোক</span>
                  </>
                )}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'en'
                  ? 'We are available 24/7 for instant consultations. Share your requirements via WhatsApp, direct call, or message form to receive pricing quotes and estimated timelines.'
                  : 'আমরা ২৪/৭ সার্বক্ষণিক সক্রিয় আছি। আপনার ইউটিউব চ্যানেল, নাটক, ফেসবুক মার্কেটিং বা নতুন স্টার্টআপ ওয়েবসাইটের জন্য সরাসরি আমাদের সাথে কথা বলুন এবং ইনস্ট্যান্ট বাজেট পান।'}
              </p>
            </div>

            {/* Direct Cards with Luminous Styling */}
            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/8801800000000"
                target="_blank"
                rel="noreferrer"
                className="luminous-card p-4 rounded-xl bg-[#062419] flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#083a26] border border-[#20C878]/40 flex items-center justify-center text-[#20C878] group-hover:scale-105 transition-transform shadow-[0_0_10px_rgba(32,200,120,0.2)]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">
                      {lang === 'en' ? 'Direct WhatsApp & Call' : 'হোয়াটসঅ্যাপ ও সরাসরি কল'}
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-[#20C878] font-mono">
                      +880 1800-000000
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:text-[#20C878]" />
              </a>

              <div className="luminous-card p-4 rounded-xl bg-[#062419] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#083a26] border border-[#20C878]/30 flex items-center justify-center text-[#20C878]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">
                    {lang === 'en' ? 'Official Inquiries' : 'অফিসিয়াল ইমেইল'}
                  </span>
                  <span className="text-sm font-semibold text-white font-mono">
                    hello@premiumzone.agency
                  </span>
                </div>
              </div>

              <div className="luminous-card p-4 rounded-xl bg-[#062419] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#083a26] border border-[#20C878]/30 flex items-center justify-center text-[#20C878]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">
                    {lang === 'en' ? 'Design Studio Location' : 'স্টুডিও ঠিকানা'}
                  </span>
                  <span className="text-xs font-semibold text-white">
                    Gulshan-2, Dhaka 1212, Bangladesh · Global Remote
                  </span>
                </div>
              </div>

              <div className="luminous-card p-4 rounded-xl bg-[#062419] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#083a26] border border-[#20C878]/30 flex items-center justify-center text-[#20C878]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">
                    {lang === 'en' ? 'Studio Hours' : 'কার্যকাল'}
                  </span>
                  <span className="text-xs font-semibold text-white">
                    10:00 AM – 11:00 PM (BST) · 7 Days Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form with Luminous Card */}
          <div className="luminous-card luminous-edge-top lg:col-span-7 rounded-2xl bg-[#062419]/90 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-1">
              {lang === 'en' ? 'Request a Fast Quote' : 'দ্রুত কোটেশন বা আলোচনা শুরু করুন'}
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              {lang === 'en'
                ? 'Fill out your requirements and we will respond within 60 minutes with project scope and schedule.'
                : 'আপনার তথ্য ও কাজের বিবরণ দিন, আমাদের টিম ৬০ মিনিটের মধ্যে রেসপন্স করবে।'}
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-950/70 border border-[#10ef82] text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#10ef82] mx-auto" />
                <h4 className="text-lg font-bold text-white">
                  {lang === 'en' ? 'Thank You!' : 'ধন্যবাদ!'}
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  {lang === 'en'
                    ? 'Your inquiry has been submitted. For immediate priority booking, click below to open your chat directly on WhatsApp.'
                    : 'আপনার মেসেজটি সফলভাবে জমা হয়েছে। দ্রুত রেসপন্সের জন্য নিচের বাটনে ক্লিক করে সরাসরি হোয়াটসঅ্যাপেও মেসেজ পাঠাতে পারেন।'}
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#10ef82] text-black font-bold text-xs uppercase tracking-wider"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>
                      {lang === 'en' ? 'Open in WhatsApp' : 'হোয়াটসঅ্যাপে ওপেন করুন'}
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {lang === 'en' ? 'Full Name' : 'আপনার নাম'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Arif Rahman"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#041c13] border border-emerald-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#10ef82]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {lang === 'en' ? 'WhatsApp Number / Email' : 'হোয়াটসঅ্যাপ নম্বর / ইমেইল'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="+8801XXXXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#041c13] border border-emerald-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#10ef82]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {lang === 'en' ? 'Service Interested In' : 'প্রয়োজনীয় সার্ভিস'}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#041c13] border border-emerald-500/25 text-white text-xs focus:outline-none focus:border-[#10ef82]"
                  >
                    <option value="YouTube Thumbnails">
                      YouTube High-CTR Thumbnails & Hooks
                    </option>
                    <option value="Brand Identity">
                      Logo Design & Complete Brand Identity
                    </option>
                    <option value="Web Development">
                      High-Performance React Web App & Landing Page
                    </option>
                    <option value="Video Editing">
                      Cinematic Video Editing & Viral Reels
                    </option>
                    <option value="Social Media Ads">
                      Social Media Ad Creatives & Posters
                    </option>
                    <option value="UI UX Design">
                      Figma UI/UX Interface Design
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {lang === 'en'
                      ? 'Tell Us About Your Project'
                      : 'প্রজেক্টের বিবরণ বা বিশেষ চাহিদা'}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      lang === 'en'
                        ? 'Channel/Company URL, project scope, deadlines, and reference styles...'
                        : 'আপনার চ্যানেল বা কোম্পানির লিঙ্ক, কাজের পরিধি ও কাঙ্ক্ষিত সময়সীমা লিখুন...'
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#041c13] border border-emerald-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#10ef82]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#083a26] hover:bg-[#0c4e33] border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition-all hover:border-[#10ef82]"
                  >
                    <MessageSquare className="w-4 h-4 text-[#10ef82]" />
                    <span>
                      {lang === 'en' ? 'Direct WhatsApp Chat' : 'সরাসরি হোয়াটসঅ্যাপে লিখুন'}
                    </span>
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#10ef82] to-[#00d66c] text-[#02180e] text-xs font-bold uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md shadow-emerald-500/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Send Inquiry' : 'মেসেজ পাঠান'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
