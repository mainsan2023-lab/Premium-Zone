/**
 * Shared Carousel & Review Images Dataset
 * Both the 3D Dynamic Review Carousel and the Review Page Grid use these exact images.
 * Image aspect ratio: 4:5 (600x750)
 */

export interface ReviewPhotoItem {
  id: string;
  src: string;
  titleBn: string;
  titleEn: string;
  category: 'youtube' | 'poster' | 'branding' | 'web' | 'video';
  categoryBn: string;
  client: string;
  rating: number;
  metric: string;
}

export const REVIEW_PHOTO_ITEMS: ReviewPhotoItem[] = [
  {
    id: 'rev-photo-1',
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750"><defs><linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23062619"/><stop offset="50%" stop-color="%230a472c"/><stop offset="100%" stop-color="%2302140c"/></linearGradient><radialGradient id="sun" cx="50%" cy="38%" r="60%"><stop offset="0%" stop-color="%2310ef82" stop-opacity="0.65"/><stop offset="65%" stop-color="%23062619" stop-opacity="0"/></radialGradient></defs><rect width="600" height="750" rx="32" fill="url(%23bg1)"/><circle cx="300" cy="300" r="220" fill="url(%23sun)"/><path d="M170 510 C170 400 230 330 300 330 C370 330 430 400 430 510 Z" fill="%23041c12" stroke="%2310ef82" stroke-width="3"/><circle cx="300" cy="260" r="75" fill="%23c5885f"/><path d="M220 230 C220 140 270 110 300 110 C330 110 380 140 380 230 Z" fill="%23081c13"/><rect x="40" y="580" width="520" height="120" rx="18" fill="%23021008" fill-opacity="0.85" stroke="%2310ef82" stroke-width="1.8"/><circle cx="500" cy="640" r="30" fill="%2310ef82"/><text x="300" y="648" fill="%23ffffff" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">সংসারের বন্ধন — অফিসিয়াল পোস্টার</text></svg>`,
    titleBn: 'সংসারের বন্ধন — সিনেমাটিক নাটক পোস্টার',
    titleEn: 'Sonsarer Bandhon — Theatrical Natok Poster',
    category: 'poster',
    categoryBn: 'নাটক ও পোস্টার',
    client: 'Raad Multimedia',
    rating: 5,
    metric: '+45% CTR Growth',
  },
  {
    id: 'rev-photo-2',
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750"><defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23261a06"/><stop offset="50%" stop-color="%2347310a"/><stop offset="100%" stop-color="%23140d02"/></linearGradient><radialGradient id="gold" cx="42%" cy="35%" r="55%"><stop offset="0%" stop-color="%23f59e0b" stop-opacity="0.55"/><stop offset="70%" stop-color="%23140d02" stop-opacity="0"/></radialGradient></defs><rect width="600" height="750" rx="32" fill="url(%23bg2)"/><circle cx="260" cy="280" r="210" fill="url(%23gold)"/><rect x="60" y="80" width="220" height="50" rx="12" fill="%23f59e0b"/><text x="170" y="115" fill="%23000" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle">পরীক্ষার স্ট্র্যাটেজি</text><rect x="60" y="160" width="480" height="80" rx="16" fill="%23ffffff" fill-opacity="0.12" stroke="%23f59e0b" stroke-width="2"/><circle cx="420" cy="380" r="130" fill="%23d97706" fill-opacity="0.3"/><path d="M310 630 C310 480 365 415 430 415 C495 415 550 480 550 630 Z" fill="%231a1103" stroke="%23f59e0b" stroke-width="2.5"/><circle cx="430" cy="345" r="72" fill="%23e2a67e"/><rect x="60" y="580" width="480" height="110" rx="20" fill="%230a0701" stroke="%23f59e0b" stroke-width="1.5"/><text x="300" y="648" fill="%23f59e0b" font-family="sans-serif" font-size="26" font-weight="bold" text-anchor="middle">HulkenStein Infinity School</text></svg>`,
    titleBn: 'ক্লাস ৮ এক্সাম স্ট্র্যাটেজি — হাই-সিটিআর থাম্বনেল',
    titleEn: 'Class 8 Exam Strategy — High-CTR Thumbnail',
    category: 'youtube',
    categoryBn: 'ইউটিউব থাম্বনেল',
    client: 'HulkenStein School',
    rating: 5,
    metric: '+58% View Increase',
  },
  {
    id: 'rev-photo-3',
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750"><defs><linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23061c26"/><stop offset="50%" stop-color="%230c3447"/><stop offset="100%" stop-color="%23020c14"/></linearGradient><radialGradient id="cyan" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%2300ff88" stop-opacity="0.5"/><stop offset="80%" stop-color="%23020c14" stop-opacity="0"/></radialGradient></defs><rect width="600" height="750" rx="32" fill="url(%23bg3)"/><circle cx="300" cy="375" r="250" fill="url(%23cyan)"/><rect x="50" y="70" width="500" height="340" rx="20" fill="%23031018" stroke="%2300ff88" stroke-width="2.5"/><circle cx="85" cy="100" r="6" fill="%23ef4444"/><circle cx="105" cy="100" r="6" fill="%23f59e0b"/><circle cx="125" cy="100" r="6" fill="%2310ef82"/><rect x="80" y="130" width="180" height="240" rx="12" fill="%2308212e"/><rect x="280" y="130" width="240" height="110" rx="12" fill="%230c2d3e" stroke="%2300ff88" stroke-width="1.2"/><rect x="280" y="260" width="240" height="110" rx="12" fill="%2308212e"/><rect x="50" y="440" width="500" height="240" rx="20" fill="%2304141f" stroke="%2300ff88" stroke-width="1.8"/><text x="300" y="565" fill="%2300ff88" font-family="sans-serif" font-size="24" font-weight="bold" text-anchor="middle">FinTech Analytics SaaS UI</text></svg>`,
    titleBn: 'SaaS ফাইন্যান্স অ্যানালিটিক্স ড্যাশবোর্ড UI',
    titleEn: 'FinTech Analytics SaaS Dashboard UI',
    category: 'web',
    categoryBn: 'ইউআই/ইউএক্স ও ওয়েব',
    client: 'Apex Global Financial',
    rating: 5,
    metric: '99/100 PageSpeed',
  },
  {
    id: 'rev-photo-4',
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750"><defs><linearGradient id="bg4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23041f14"/><stop offset="50%" stop-color="%23093b27"/><stop offset="100%" stop-color="%23020f09"/></linearGradient></defs><rect width="600" height="750" rx="32" fill="url(%23bg4)"/><circle cx="300" cy="375" r="170" fill="none" stroke="%2310ef82" stroke-width="3" stroke-dasharray="9 9"/><polygon points="300,230 395,395 205,395" fill="none" stroke="%2300ff88" stroke-width="4.5"/><polygon points="300,455 395,290 205,290" fill="none" stroke="%2310ef82" stroke-width="4.5"/><rect x="70" y="580" width="460" height="110" rx="18" fill="%23020d07" stroke="%2310ef82" stroke-width="1.8"/><text x="300" y="645" fill="%2310ef82" font-family="sans-serif" font-size="24" font-weight="bold" text-anchor="middle">STEIN INFINITY ACADEMY</text></svg>`,
    titleBn: 'স্টাইন ইনফিনিটি একাডেমি — কর্পোরেট ব্র্যান্ডিং',
    titleEn: 'Stein Infinity Academy — Brand Identity',
    category: 'branding',
    categoryBn: 'ব্র্যান্ডিং ও লোগো',
    client: 'Stein Infinity Education',
    rating: 5,
    metric: 'Corporate Excellence',
  },
  {
    id: 'rev-photo-5',
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750"><defs><linearGradient id="bg5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%231c0626"/><stop offset="50%" stop-color="%233a0d4f"/><stop offset="100%" stop-color="%230e0214"/></linearGradient></defs><rect width="600" height="750" rx="32" fill="url(%23bg5)"/><circle cx="300" cy="340" r="190" fill="%2310ef82" fill-opacity="0.3"/><polygon points="255,275 375,340 255,405" fill="%2310ef82"/><rect x="70" y="100" width="460" height="60" rx="14" fill="%23ffffff" fill-opacity="0.12"/><text x="300" y="140" fill="%23ffffff" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle">VIRAL REELS & MOTION CUT</text><rect x="70" y="560" width="460" height="120" rx="20" fill="%2307010a" stroke="%2310ef82" stroke-width="1.8"/><text x="300" y="630" fill="%2310ef82" font-family="sans-serif" font-size="24" font-weight="bold" text-anchor="middle">Creator Studio Pro — 8.5M Views</text></svg>`,
    titleBn: 'ভাইরাল রিলস ও মোশন গ্রাফিক্স এডিটিং',
    titleEn: 'Viral Reels & Motion Graphics Editing',
    category: 'video',
    categoryBn: 'ভিডিও ও মোশন',
    client: 'Creator Studio Pro',
    rating: 5,
    metric: '8.5M Organic Reach',
  },
  {
    id: 'rev-photo-6',
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750"><defs><linearGradient id="bg6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23091e2b"/><stop offset="50%" stop-color="%230e3852"/><stop offset="100%" stop-color="%23030d14"/></linearGradient><radialGradient id="emeraldglow" cx="50%" cy="45%" r="55%"><stop offset="0%" stop-color="%2310ef82" stop-opacity="0.45"/><stop offset="70%" stop-color="%23091e2b" stop-opacity="0"/></radialGradient></defs><rect width="600" height="750" rx="32" fill="url(%23bg6)"/><circle cx="300" cy="320" r="200" fill="url(%23emeraldglow)"/><rect x="180" y="220" width="240" height="280" rx="24" fill="%23051722" stroke="%2310ef82" stroke-width="3"/><circle cx="300" cy="350" r="60" fill="none" stroke="%2300ff88" stroke-width="4"/><polygon points="300,310 335,370 265,370" fill="%2310ef82"/><rect x="80" y="580" width="440" height="100" rx="16" fill="%23020c13" stroke="%2310ef82" stroke-width="1.8"/><text x="300" y="642" fill="%2310ef82" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle">Purity Agro Organic E-Store</text></svg>`,
    titleBn: 'অর্গানিক ফুড স্টোর — ই-কমার্স প্ল্যাটফর্ম',
    titleEn: 'Organic Food Store — E-Commerce Platform',
    category: 'web',
    categoryBn: 'ইউআই/ইউএক্স ও ওয়েব',
    client: 'Purity Agro Bangladesh',
    rating: 5,
    metric: '+140% Sales Boost',
  },
  {
    id: 'rev-photo-7',
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750"><defs><linearGradient id="bg7" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%232b0404"/><stop offset="50%" stop-color="%23520808"/><stop offset="100%" stop-color="%23140101"/></linearGradient></defs><rect width="600" height="750" rx="32" fill="url(%23bg7)"/><circle cx="440" cy="260" r="180" fill="%23ef4444" fill-opacity="0.3"/><circle cx="210" cy="280" r="75" fill="%23e2a67e"/><circle cx="430" cy="260" r="75" fill="%23dfa07a"/><rect x="60" y="80" width="340" height="110" rx="20" fill="%23ef4444" stroke="%23ffffff" stroke-width="3"/><text x="230" y="152" fill="%23ffffff" font-family="sans-serif" font-size="44" font-weight="900" text-anchor="middle">হায়রে কপাল</text><rect x="60" y="580" width="480" height="110" rx="20" fill="%2310ef82"/><text x="300" y="648" fill="%2302140c" font-family="sans-serif" font-size="26" font-weight="bold" text-anchor="middle">2.3M+ VIEWS — Meo Entertainment</text></svg>`,
    titleBn: 'হায়রে কপাল — ২৩ লাখ ভিউ হিট নাটক থাম্বনেল',
    titleEn: 'Hayre Kopal — 2.3M Viral Natok Thumbnail',
    category: 'youtube',
    categoryBn: 'ইউটিউব থাম্বনেল',
    client: 'Meo Entertainment',
    rating: 5,
    metric: '2.3M Views Recorded',
  },
  {
    id: 'rev-photo-8',
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750"><defs><linearGradient id="bg8" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23110526"/><stop offset="50%" stop-color="%23280947"/><stop offset="100%" stop-color="%23090214"/></linearGradient></defs><rect width="600" height="750" rx="32" fill="url(%23bg8)"/><circle cx="300" cy="350" r="210" fill="%23a855f7" fill-opacity="0.25"/><polygon points="300,160 380,320 220,320" fill="none" stroke="%2310ef82" stroke-width="4"/><polygon points="300,340 380,500 220,500" fill="none" stroke="%23c084fc" stroke-width="4"/><rect x="60" y="580" width="480" height="110" rx="20" fill="%2306020c" stroke="%2310ef82" stroke-width="1.8"/><text x="300" y="648" fill="%2310ef82" font-family="sans-serif" font-size="26" font-weight="bold" text-anchor="middle">Apex Luxury Visual Identity</text></svg>`,
    titleBn: 'অ্যাপেক্স গ্লোবাল — লাক্সারি ভেক্টর ব্র্যান্ডিং',
    titleEn: 'Apex Global — Luxury Vector Branding',
    category: 'branding',
    categoryBn: 'ব্র্যান্ডিং ও লোগো',
    client: 'Apex Global Financial',
    rating: 5,
    metric: 'Vector Master Kit',
  },
  {
    id: 'rev-photo-9',
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750"><defs><linearGradient id="bg9" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23062817"/><stop offset="50%" stop-color="%230e4d2e"/><stop offset="100%" stop-color="%2302180e"/></linearGradient></defs><rect width="600" height="750" rx="32" fill="url(%23bg9)"/><circle cx="300" cy="300" r="180" fill="%2310ef82" fill-opacity="0.3"/><rect x="50" y="100" width="500" height="280" rx="20" fill="%2303150d" stroke="%2310ef82" stroke-width="2"/><circle cx="160" cy="240" r="60" fill="%2310ef82"/><circle cx="300" cy="240" r="60" fill="%2300ff88"/><circle cx="440" cy="240" r="60" fill="%2310ef82"/><rect x="60" y="580" width="480" height="110" rx="20" fill="%2303140c" stroke="%2310ef82" stroke-width="1.8"/><text x="300" y="648" fill="%2310ef82" font-family="sans-serif" font-size="24" font-weight="bold" text-anchor="middle">Dhaka Visual Media — 4K Film Cut</text></svg>`,
    titleBn: 'সিনেমাটিক ড্রামা টিজার ও ভিডিও এডিটিং ৪কে',
    titleEn: 'Cinematic Drama Teaser & 4K Video Edit',
    category: 'video',
    categoryBn: 'ভিডিও ও মোশন',
    client: 'Dhaka Visual Media',
    rating: 5,
    metric: '4K Ultra HD Master',
  },
];

// String array for backward compatibility with 3D carousel
export const CAROUSEL_IMAGES: string[] = REVIEW_PHOTO_ITEMS.map((item) => item.src);
