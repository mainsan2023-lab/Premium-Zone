import React, { useState } from 'react';
import { Language } from '../types';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

interface WhatsAppFloatingProps {
  lang: Language;
}

export const WhatsAppFloating: React.FC<WhatsAppFloatingProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const defaultMsg =
    lang === 'en'
      ? 'Hi Premium Zone! I need more details about your creative agency services.'
      : 'আসসালামু আলাইকুম Premium Zone! আপনাদের সার্ভিস সম্পর্কে জানতে চাচ্ছি।';

  const handleSend = () => {
    const textToSend = customMsg.trim() || defaultMsg;
    window.open(
      `https://wa.me/8801800000000?text=${encodeURIComponent(textToSend)}`,
      '_blank'
    );
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Box */}
      {isOpen && (
        <div className="mb-3 w-80 rounded-2xl bg-[#041a11] border border-emerald-500/40 shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Header */}
          <div className="bg-[#06291b] p-3.5 border-b border-emerald-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-[#083a26] border border-[#10ef82]/50 flex items-center justify-center text-[#10ef82]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10ef82] ring-2 ring-[#06291b]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">
                  Premium Zone Helpdesk
                </h4>
                <p className="text-[10px] text-emerald-400">
                  {lang === 'en' ? 'Online · Typically replies in 5m' : 'অনলাইন · ৫ মিনিটে রিপ্লাই'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-3.5 space-y-3">
            <div className="p-3 rounded-xl bg-[#062217] border border-emerald-500/20 text-xs text-slate-200 leading-relaxed">
              👋 {lang === 'en'
                ? 'Welcome to Premium Zone! How can we elevate your brand or content today?'
                : 'Premium Zone-এ স্বাগতম! আপনার ইউটিউব চ্যানেল বা ব্যবসার কোন সার্ভিসে সহযোগিতা প্রয়োজন?'}
            </div>

            <textarea
              rows={2}
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder={defaultMsg}
              className="w-full px-3 py-2 rounded-xl bg-[#02130c] border border-emerald-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#10ef82]"
            />

            <button
              type="button"
              onClick={handleSend}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-[#10ef82] text-[#02180e] text-xs font-bold hover:brightness-105 active:scale-95 transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Start WhatsApp Chat' : 'হোয়াটসঅ্যাপে পাঠান'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-3.5 rounded-2xl bg-gradient-to-r from-[#10ef82] to-[#00d66c] text-[#02180e] shadow-[0_0_25px_rgba(16,239,130,0.4)] hover:shadow-[0_0_35px_rgba(16,239,130,0.7)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
        aria-label="Open WhatsApp live chat"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          {lang === 'en' ? 'Quick Chat' : 'হোয়াটসঅ্যাপ চ্যাট'}
        </span>
      </button>
    </div>
  );
};
