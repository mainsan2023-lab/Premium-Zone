import React, { useState } from 'react';
import { Currency, Language, ServiceItem, ServicePackage } from '../types';
import {
  X,
  Check,
  Clock,
  Sparkles,
  MessageCircle,
  Send,
  ShieldCheck,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  currency: Currency;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  lang,
  currency,
}) => {
  if (!isOpen || !service) return null;

  const [selectedPackage, setSelectedPackage] = useState<ServicePackage>(
    service.packages.find((p) => p.popular) || service.packages[0]
  );
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [clientBrief, setClientBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const priceText =
    currency === 'BDT'
      ? `৳${selectedPackage.priceBDT.toLocaleString()}`
      : `$${selectedPackage.priceUSD}`;

  const handleWhatsAppOrder = () => {
    const rawMsg = `Hello Premium Zone! I would like to order:
*Service:* ${service.title}
*Package Tier:* ${selectedPackage.name} (${priceText})
*Name:* ${clientName || 'Not specified'}
*Contact:* ${clientContact || 'WhatsApp'}
*Requirements:* ${clientBrief || 'Standard delivery package'}`;

    const encodedMsg = encodeURIComponent(rawMsg);
    window.open(`https://wa.me/8801800000000?text=${encodedMsg}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientContact) return;
    setSubmitted(true);
    setTimeout(() => {
      // Keep feedback visible
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-[#041a11] border border-emerald-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-500/20 bg-[#062419]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10ef82]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#10ef82]">
              {lang === 'en' ? service.categoryLabel : service.categoryLabelBn}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#03150e] border border-emerald-500/25 text-slate-300 hover:text-white hover:border-[#10ef82] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-8">
          {/* Header info */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {lang === 'en' ? service.title : service.titleBn}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
              {lang === 'en' ? service.fullDesc : service.fullDescBn}
            </p>

            {/* Tools strip */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-slate-400 font-medium">
                {lang === 'en' ? 'Crafted with:' : 'ব্যবহৃত সফটওয়্যার:'}
              </span>
              {service.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#072d1f] text-emerald-300 border border-emerald-500/25"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Three Tier Package Selector */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#10ef82]" />
                {lang === 'en' ? 'Select a Service Tier' : 'আপনার পছন্দের প্যাকেজ বেছে নিন'}
              </h3>
              <span className="text-xs text-emerald-400">
                {lang === 'en' ? 'Click to select' : 'প্যাকেজে ক্লিক করুন'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {service.packages.map((pkg) => {
                const isSelected = selectedPackage.id === pkg.id;
                const formattedTierPrice =
                  currency === 'BDT'
                    ? `৳${pkg.priceBDT.toLocaleString()}`
                    : `$${pkg.priceUSD}`;

                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`relative p-4 rounded-xl cursor-pointer transition-all duration-200 border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#083322] border-[#10ef82] shadow-[0_0_20px_rgba(16,239,130,0.25)] ring-1 ring-[#10ef82]'
                        : 'bg-[#051f15] border-emerald-500/20 hover:border-emerald-500/40'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#10ef82] text-black shadow-sm">
                        {lang === 'en' ? 'Most Popular' : 'জনপ্রিয়'}
                      </span>
                    )}

                    <div>
                      <div className="flex items-baseline justify-between mb-1">
                        <h4 className="font-bold text-sm text-white">
                          {lang === 'en' ? pkg.name : pkg.nameBn}
                        </h4>
                      </div>

                      <div className="text-xl font-extrabold text-[#10ef82] font-mono tabular-nums my-2">
                        {formattedTierPrice}
                      </div>

                      <div className="text-[11px] text-slate-300 space-y-1 py-2 border-y border-emerald-500/15 my-2">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-[#10ef82]" />
                          <span>
                            {lang === 'en' ? pkg.deliveryTime : pkg.deliveryTimeBn}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3 h-3 text-[#10ef82]" />
                          <span>{lang === 'en' ? pkg.revisions : pkg.revisionsBn}</span>
                        </div>
                      </div>

                      {/* Package checklist */}
                      <ul className="space-y-1.5 pt-2 text-[11px] text-slate-200">
                        {(lang === 'en' ? pkg.features : pkg.featuresBn).map((f, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#10ef82] shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 pt-2">
                      <div
                        className={`w-full py-1.5 text-center text-xs font-semibold rounded-lg transition-colors ${
                          isSelected
                            ? 'bg-[#10ef82] text-black font-bold'
                            : 'bg-[#093522] text-slate-300'
                        }`}
                      >
                        {isSelected
                          ? lang === 'en'
                            ? 'Selected'
                            : 'নির্বাচিত'
                          : lang === 'en'
                          ? 'Select Package'
                          : 'বেছে নিন'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Deliverables summary */}
          <div className="p-4 rounded-xl bg-[#062419] border border-emerald-500/20">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#10ef82] mb-2.5">
              {lang === 'en'
                ? 'Standard Deliverables Included in this Service'
                : 'এই সার্ভিসে যা যা পাবেন'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
              {(lang === 'en' ? service.deliverables : service.deliverablesBn).map(
                (item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#10ef82] shrink-0" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Direct Booking / Order Form */}
          <div className="p-5 rounded-xl bg-[#06291c] border border-emerald-500/25 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
              <div>
                <h4 className="text-base font-bold text-white">
                  {lang === 'en'
                    ? `Ready to order ${selectedPackage.name}?`
                    : `${selectedPackage.nameBn} অর্ডার করতে চান?`}
                </h4>
                <p className="text-xs text-slate-300">
                  {lang === 'en'
                    ? 'Submit your brief below or chat with our design team instantly on WhatsApp.'
                    : 'নিচের ফর্মে বিস্তারিত দিন অথবা সরাসরি হোয়াটসঅ্যাপে কথা বলে কাজ শুরু করুন।'}
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Total</span>
                <span className="text-lg font-bold text-[#10ef82] font-mono">
                  {priceText}
                </span>
              </div>
            </div>

            {submitted ? (
              <div className="p-4 rounded-lg bg-emerald-950/80 border border-[#10ef82] text-center space-y-2">
                <Sparkles className="w-6 h-6 text-[#10ef82] mx-auto" />
                <h5 className="text-sm font-bold text-white">
                  {lang === 'en'
                    ? 'Project Brief Received!'
                    : 'আপনার প্রজেক্ট ব্রিফ সফলভাবে জমা হয়েছে!'}
                </h5>
                <p className="text-xs text-slate-300">
                  {lang === 'en'
                    ? 'Our lead designer will review your brief and contact you within 60 minutes.'
                    : 'আমাদের টিম আগামী ৬০ মিনিটের মধ্যে আপনার সাথে যোগাযোগ করবে।'}
                </p>
                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#10ef82] text-black font-bold text-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>
                    {lang === 'en'
                      ? 'Confirm instantly via WhatsApp'
                      : 'হোয়াটসঅ্যাপে দ্রুত কনফার্ম করুন'}
                  </span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-300 mb-1">
                      {lang === 'en' ? 'Your Name' : 'আপনার নাম'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Tanvir Hossain"
                      className="w-full px-3 py-2 rounded-lg bg-[#03170e] border border-emerald-500/25 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#10ef82]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-300 mb-1">
                      {lang === 'en' ? 'Phone / WhatsApp / Email' : 'ফোন / হোয়াটসঅ্যাপ / ইমেইল'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientContact}
                      onChange={(e) => setClientContact(e.target.value)}
                      placeholder="+88017XXXXXXXX or name@mail.com"
                      className="w-full px-3 py-2 rounded-lg bg-[#03170e] border border-emerald-500/25 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#10ef82]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">
                    {lang === 'en'
                      ? 'Project Brief & Specific Requirements'
                      : 'প্রজেক্টের বিবরণ ও দিকনির্দেশনা'}
                  </label>
                  <textarea
                    rows={2}
                    value={clientBrief}
                    onChange={(e) => setClientBrief(e.target.value)}
                    placeholder={
                      lang === 'en'
                        ? 'Describe your topic, channel/brand name, color preferences or links to reference work...'
                        : 'আপনার চ্যানেল/ব্র্যান্ডের নাম, কনটেন্টের বিষয়, পছন্দের কালার বা রেফারেন্স কাজের লিঙ্ক লিখুন...'
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#03170e] border border-emerald-500/25 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#10ef82]"
                  />
                </div>

                {/* Form Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppOrder}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#083a26] hover:bg-[#0c4e33] border border-emerald-500/40 text-emerald-300 text-xs font-bold transition-all hover:border-[#10ef82]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#10ef82]" />
                    <span>
                      {lang === 'en'
                        ? 'Instant WhatsApp Checkout'
                        : 'হোয়াটসঅ্যাপে সরাসরি অর্ডার'}
                    </span>
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#10ef82] to-[#00d66c] text-[#02180e] text-xs font-bold uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md shadow-emerald-500/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>
                      {lang === 'en' ? 'Submit Project Brief' : 'ব্রিফ জমা দিন'}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
