import { ServiceItem, Testimonial, FaqItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'youtube-thumbnails',
    slug: 'youtube-thumbnails',
    title: 'High CTR YouTube Thumbnails & Visual Hooks',
    titleBn: 'হাই-সিটিআর ইউটিউব থাম্বনেইল ও ভিজ্যুয়াল হুক',
    category: 'youtube_social',
    categoryLabel: 'YouTube & Social Media',
    categoryLabelBn: 'ইউটিউব ও সোশ্যাল মিডিয়া',
    shortDesc: 'Click-maximizing YouTube thumbnails engineered with psychological triggers, custom photo manipulation, 3D text styling, and vibrant color contrast.',
    shortDescBn: 'ভিউ এবং ক্লিক বাড়ানোর জন্য সাইকোলজিক্যাল ট্রিক্স, কাস্টম ফটো ম্যানিপুলেশন, থ্রিডি টাইপোগ্রাফি ও দৃষ্টিনন্দন কালার গ্রেডিং সমৃদ্ধ থাম্বনেইল।',
    fullDesc: 'We craft YouTube thumbnails that stand out on mobile and desktop feeds. From high-energy gaming and tech reviews to podcast highlights and business documentaries, our thumbnails consistently generate 12%+ CTR increases for major creators.',
    fullDescBn: 'আমাদের তৈরি থাম্বনেইল প্রতিটি ফিডে সবার দৃষ্টি কাড়ে। গেমিং, টেক রিভিউ, পডকাস্ট কিংবা বিজনেস ডকুমেন্টারি — প্রতিটি থাম্বনেইল এমনভাবে ডিজাইন করা হয় যা আপনার চ্যানেলের ক্লিক-থ্রু রেট (CTR) বহুগুণ বাড়িয়ে দেয়।',
    startingPriceBDT: 1500,
    startingPriceUSD: 18,
    turnaroundTime: '24-48 Hours',
    turnaroundTimeBn: '২৪-৪৮ ঘণ্টা',
    tools: ['Adobe Photoshop', 'Lightroom', 'Blender 3D', 'AI Enhancers'],
    features: [
      'High-CTR Psychological Composition',
      'Ultra HD 1080p / 4K Deliverables',
      'Advanced Face Retouch & Eye Catch Glow',
      'Full Commercial Rights Included'
    ],
    featuresBn: [
      'হাই-সিটিআর সাইকোলজিক্যাল কম্পোজিশন',
      'আল্ট্রা এইচডি ১০৮০p / ৪কে রেজল্যুশন',
      'ফেস রিটাচ ও স্পেশাল আই-ক্যাচিং গ্লো',
      'সম্পূর্ণ কমার্শিয়াল রাইটস অন্তর্ভুক্ত'
    ],
    deliverables: [
      'High-Resolution JPG & PNG (1920x1080)',
      'Layered PSD Source File',
      '2 Variant Previews for A/B Testing',
      'Color graded assets'
    ],
    deliverablesBn: [
      'হাই-রেজল্যুশন JPG ও PNG (১৯২০x১০৮০)',
      'সম্পূর্ণ লেয়ারড PSD সোর্স ফাইল',
      'A/B টেস্টের জন্য ২টি ভ্যারিয়েন্ট প্রিভিউ',
      'কালার গ্রেডেড এসেটস'
    ],
    accentColor: '#10ef82',
    iconName: 'Sparkles',
    packages: [
      {
        id: 'yt-basic',
        name: 'Single Viral Hook',
        nameBn: 'একক ভাইরাল হুক',
        priceBDT: 1500,
        priceUSD: 18,
        deliveryTime: '24 Hours',
        deliveryTimeBn: '২৪ ঘণ্টা',
        revisions: '3 Revisions',
        revisionsBn: '৩টি রিভিশন',
        features: [
          '1 High-CTR Custom Thumbnail',
          'Photo manipulation & Retouching',
          'Full HD (1920x1080) output',
          'A/B testing concept advice'
        ],
        featuresBn: [
          '১টি কাস্টম হাই-সিটিআর থাম্বনেইল',
          'ফটো ম্যানিপুলেশন ও রিটাচিং',
          'ফুল এইচডি (১৯২০x১০৮০) আউটপুট',
          'A/B টেস্টিং কনসেপ্ট গাইডলাইন'
        ]
      },
      {
        id: 'yt-pro',
        name: 'Creator Pack (5 Thumbnails)',
        nameBn: 'ক্রিয়েটর প্যাক (৫টি থাম্বনেইল)',
        priceBDT: 6500,
        priceUSD: 75,
        deliveryTime: '48-72 Hours',
        deliveryTimeBn: '৪৮-৭২ ঘণ্টা',
        revisions: 'Unlimited Revisions',
        revisionsBn: 'আনলিমিটেড রিভিশন',
        popular: true,
        features: [
          '5 Custom Thumbnails for videos',
          'Editable PSD Source Files',
          'Priority 24h turnarounds per episode',
          'Branded font & color typography kit',
          'A/B title & thumbnail pairing ideas'
        ],
        featuresBn: [
          '৫টি প্রিমিয়াম কাস্টম থাম্বনেইল',
          'এডিটেবল PSD সোর্স ফাইল',
          'প্রতি এপিসোডে প্রায়োরিটি ডেলিভারি',
          'ব্র্যান্ডেড ফন্ট ও কালার গাইড',
          'A/B টেস্টিং টাইটেল সাজেশন্স'
        ]
      },
      {
        id: 'yt-enterprise',
        name: 'Monthly Channel Growth (15 Pack)',
        nameBn: 'মান্থলি চ্যানেল গ্রোথ (১৫টি প্যাক)',
        priceBDT: 18000,
        priceUSD: 195,
        deliveryTime: 'Monthly Retainer',
        deliveryTimeBn: 'মাসিক রিটেইনার',
        revisions: 'Unlimited Priority Revisions',
        revisionsBn: 'আনলিমিটেড প্রায়োরিটি রিভিশন',
        features: [
          '15 High-Impact Thumbnails/Month',
          'Channel Banner & Avatar Redesign',
          'Dedicated Art Director & VIP WhatsApp Access',
          'Same-day emergency turnaround option',
          'CTR Analytics Review & Strategic Advice'
        ],
        featuresBn: [
          'মাসে ১৫টি হাই-ইমপ্যাক্ট থাম্বনেইল',
          'ইউটিউব ব্যানার ও অ্যাভাটার রিডিজাইন',
          'ডেডিকেটেড আর্ট ডিরেক্টর ও ভিআইপি সাপোর্ট',
          'একই দিনে ইমার্জেন্সি ডেলিভারি সুবিধা',
          'সিটিআর অ্যানালিটিক্স রিভিউ ও স্ট্র্যাটেজি'
        ]
      }
    ]
  },
  {
    id: 'brand-identity-logo',
    slug: 'brand-identity-logo',
    title: 'Logo Design & Complete Brand Identity',
    titleBn: 'লোগো ডিজাইন ও পূর্ণাঙ্গ ব্র্যান্ড আইডেন্টিটি',
    category: 'branding_identity',
    categoryLabel: 'Branding & Graphics',
    categoryLabelBn: 'ব্র্যান্ডিং ও গ্রাফিক্স',
    shortDesc: 'Distinctive, memorable visual identity systems including modern vector logos, typography palettes, brand guidelines, and stationery.',
    shortDescBn: 'আধুনিক ভেক্টর লোগো, কালার প্যালেট, টাইপোগ্রাফি গাইডলাইন ও স্টেশনারি সহ বিশ্বমানের অনন্য ব্র্যান্ড আইডেন্টিটি সিস্টেম।',
    fullDesc: 'We build timeless brand identities that command authority in your industry. From startup positioning to enterprise rebranding, we provide complete brand manuals, vector masters, typography systems, and social brand suites.',
    fullDescBn: 'আমরা আপনার ব্যবসার জন্য এমন একটি ব্র্যান্ড আইডেন্টিটি তৈরি করি যা গ্রাহকের মনে স্থায়ী ছাপ ফেলে। স্টার্টআপ লঞ্চিং থেকে প্রতিষ্ঠিত কোম্পানির রিব্র্যান্ডিং—সবকিছুতেই আমাদের রয়েছে পূর্ণাঙ্গ এক্সপার্টাইজ।',
    startingPriceBDT: 5000,
    startingPriceUSD: 55,
    turnaroundTime: '3-5 Days',
    turnaroundTimeBn: '৩-৫ দিন',
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Vector Pro'],
    features: [
      'Original Vector Geometry (Scalable to Billboards)',
      'Brand Style Guide & Color Rules',
      'All File Formats (AI, EPS, SVG, PNG, PDF)',
      'Stationery & Social Media Kit'
    ],
    featuresBn: [
      'অরিজিনাল ভেক্টর জিওমেট্রি (বিলবোর্ড পর্যন্ত স্কেলেবল)',
      'ব্র্যান্ড স্টাইল গাইড ও কালার সিস্টেম',
      'সকল ফরম্যাট (AI, EPS, SVG, PNG, PDF)',
      'স্টেশনারি ও সোশ্যাল মিডিয়া কিট'
    ],
    deliverables: [
      'Primary, Secondary & Monogram Logo Lockups',
      'Vector Master Files (.AI, .EPS, .SVG)',
      '15+ Page Comprehensive Brand Guidelines PDF',
      'Business Card, Letterhead & Envelope Mockups',
      'Social Media Profile & Cover Suites'
    ],
    deliverablesBn: [
      'প্রাইমারি, সেকেন্ডারি ও মনোগ্রাম লোগো ভ্যারিয়েন্ট',
      'ভেক্টর মাস্টার ফাইল (.AI, .EPS, .SVG)',
      '১৫+ পাতার বিস্তারিত ব্র্যান্ড গাইডলাইন PDF',
      'ভিজিটিং কার্ড, প্যাড ও খামের রেডি-টু-প্রিন্ট ফাইল',
      'সোশ্যাল মিডিয়ার প্রোফাইল ও কভার প্যাক'
    ],
    accentColor: '#00ff88',
    iconName: 'Crown',
    packages: [
      {
        id: 'brand-starter',
        name: 'Essential Identity',
        nameBn: 'এসেনশিয়াল আইডেন্টিটি',
        priceBDT: 5000,
        priceUSD: 55,
        deliveryTime: '3 Days',
        deliveryTimeBn: '৩ দিন',
        revisions: '4 Revisions',
        revisionsBn: '৪টি রিভিশন',
        features: [
          '2 Unique Logo Concepts',
          'High-Res PNG, JPG & Vector SVG',
          'Color Palette & Font Specifications',
          'Black & White variations'
        ],
        featuresBn: [
          '২টি ইউনিক লোগো কনসেপ্ট',
          'হাই-রেজল্যুশন PNG, JPG ও ভেক্টর SVG',
          'কালার প্যালেট ও ফন্ট সিলেকশন',
          'ব্ল্যাক ও হোয়াইট ভ্যারিয়েশন'
        ]
      },
      {
        id: 'brand-pro',
        name: 'Professional Brand Suite',
        nameBn: 'প্রফেশনাল ব্র্যান্ড স্যুট',
        priceBDT: 12000,
        priceUSD: 135,
        deliveryTime: '5 Days',
        deliveryTimeBn: '৫ দিন',
        revisions: 'Unlimited Revisions',
        revisionsBn: 'আনলিমিটেড রিভিশন',
        popular: true,
        features: [
          '4 Bespoke Logo Concepts',
          'Complete Brand Guidelines Manual PDF',
          'Full Stationery Kit (Card, Letterhead, Stamp)',
          'All Editable Vector Files (AI, EPS, SVG, PDF)',
          'Social Media Profile & Cover Assets'
        ],
        featuresBn: [
          '৪টি প্রিমিয়াম লোগো কনসেপ্ট',
          'পূর্ণাঙ্গ ব্র্যান্ড গাইডলাইন ম্যানুয়াল PDF',
          'কমপ্লিট স্টেশনারি কিট (ভিজিটিং কার্ড, প্যাড, স্ট্যাম্প)',
          'সকল এডিটেবল ভেক্টর ফাইল (AI, EPS, SVG)',
          'সোশ্যাল মিডিয়া প্রোফাইল ও কভার ডিজাইন'
        ]
      },
      {
        id: 'brand-enterprise',
        name: 'Full Corporate Overhaul',
        nameBn: 'ফুল কর্পোরেট ওভারহল',
        priceBDT: 25000,
        priceUSD: 280,
        deliveryTime: '8-10 Days',
        deliveryTimeBn: '৮-১০ দিন',
        revisions: 'Unlimited Until Satisfied',
        revisionsBn: 'সম্পূর্ণ সন্তুষ্টি পর্যন্ত রিভিশন',
        features: [
          '6 Strategic Logo Concepts',
          '30+ Page Corporate Brand Bible',
          'Complete Packaging & Merchandise Mockups',
          'Trademark Ready Vector Geometry',
          '1-on-1 Creative Direction Consultation'
        ],
        featuresBn: [
          '৬টি স্ট্র্যাটেজিক লোগো কনসেপ্ট',
          '৩০+ পাতার কর্পোরেট ব্র্যান্ড বাইবেল',
          'প্যাকেজিং ও মার্চেন্ডাইজ মকআপ ডিজাইন',
          'ট্রেডমার্ক রেডি নিখুঁত ভেক্টর জ্যামিতি',
          'ডিরেক্ট ১-অন-১ আর্ট ডিরেকশন মিটিং'
        ]
      }
    ]
  },
  {
    id: 'web-development-react',
    slug: 'web-development-react',
    title: 'High-Performance Web & Modern App Development',
    titleBn: 'আধুনিক দ্রুতগতির ওয়েবসাইট ও ওয়েব অ্যাপ ডেভেলপমেন্ট',
    category: 'web_development',
    categoryLabel: 'Web & UI/UX',
    categoryLabelBn: 'ওয়েব ও ইউআই/ইউএক্স',
    shortDesc: 'Ultra-fast, responsive web applications engineered with React, Next.js, Tailwind CSS, TypeScript, and seamless interactive UI experiences.',
    shortDescBn: 'React, Next.js, Tailwind CSS ও TypeScript দিয়ে তৈরি সুপার-ফাস্ট, মোবাইল রেসপন্সিভ এবং আধুনিক ওয়েব সল্যুশন।',
    fullDesc: 'We turn ambitious ideas into blazing-fast digital products. Whether you need a conversion-optimized agency landing page, an e-commerce platform with bKash/Nagad/Stripe payments, or a full-stack SaaS web app, our clean code guarantees 95+ Google PageSpeed scores.',
    fullDescBn: 'আপনার ব্যবসাকে ডিজিটাল যুগে এগিয়ে নিতে আমরা তৈরি করি বিদ্যুৎগতির ওয়েবসাইট। এজেন্সির ল্যান্ডিং পেজ, বিকাশ/নগদ পেমেন্ট গেটওয়ে সম্বলিত ই-কমার্স বা কাস্টম ওয়েব প্ল্যাটফর্ম — সবই হবে ১০০% মোবাইল রেসপন্সিভ ও এসইও অপ্টিমাইজড।',
    startingPriceBDT: 12000,
    startingPriceUSD: 140,
    turnaroundTime: '5-10 Days',
    turnaroundTimeBn: '৫-১০ দিন',
    tools: ['React 19', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Figma'],
    features: [
      'Sub-Second Loading Speed (95+ Lighthouse)',
      '100% Mobile & Tablet Responsive Layout',
      'Bilingual Support (English & Bangla)',
      'Modern Glassmorphic Dark / Light Mode',
      'SEO & OpenGraph Social Sharing Ready'
    ],
    featuresBn: [
      'বিদ্যুৎগতির লোডিং স্পিড (৯৫+ লাইটহাউস স্কোর)',
      '১০০% মোবাইল ও ট্যাবলেট রেসপন্সিভ লেআউট',
      'দ্বিভাষিক সাপোর্ট (ইংরেজি ও বাংলা)',
      'প্রিমিয়াম গ্লাস এফেক্ট ও ডার্ক মোড স্টাইলিং',
      'এসইও এবং ওপেনগ্রাফ সোশ্যাল শেয়ারিং রেডি'
    ],
    deliverables: [
      'Clean, Well-Documented TypeScript Source Code',
      'Cloud Deployment & Domain Setup',
      'Admin Dashboard & CMS Integration',
      'Interactive Contact Forms & WhatsApp Connect',
      '30-Day Free Maintenance & Technical Support'
    ],
    deliverablesBn: [
      'পরিচ্ছন্ন ও কমেন্টেড TypeScript সোর্স কোড',
      'ক্লাউড ডিপ্লয়মেন্ট ও ডোমেন সেটআপ সহায়তা',
      'অ্যাডমিন ড্যাশবোর্ড ও কনটেন্ট ম্যানেজমেন্ট',
      'লাইভ কন্টাক্ট ফর্ম ও সরাসরি হোয়াটসঅ্যাপ ইন্টিগ্রেশন',
      '৩০ দিনের ফ্রি মেইনটেন্যান্স ও টেকনিক্যাল সাপোর্ট'
    ],
    accentColor: '#10ef82',
    iconName: 'Code',
    packages: [
      {
        id: 'web-landing',
        name: 'High-Converting Landing Page',
        nameBn: 'হাই-কনভার্টিং ল্যান্ডিং পেজ',
        priceBDT: 12000,
        priceUSD: 140,
        deliveryTime: '5 Days',
        deliveryTimeBn: '৫ দিন',
        revisions: 'Unlimited Revisions',
        revisionsBn: 'আনলিমিটেড রিভিশন',
        features: [
          '1-Page Ultra Sleek Responsive Landing Page',
          'Fast Tailwind CSS Glassmorphism Design',
          'WhatsApp & Lead Generation Form Integration',
          'SEO Meta Tags & Social Sharing Cards',
          'Free Deployment on Vercel / Netlify / Cloud'
        ],
        featuresBn: [
          '১-পাতার দৃষ্টিনন্দন রেসপন্সিভ ল্যান্ডিং পেজ',
          'টেইলউইন্ড সিএসএস ও গ্লাস এফেক্ট স্টাইলিং',
          'হোয়াটসঅ্যাপ ও লিড ফর্ম ইন্টিগ্রেশন',
          'এসইও মেটা ট্যাগস ও প্রিভিউ কার্ডস',
          'ফ্রি ক্লাউড হোস্টিং ডিপ্লয়মেন্ট'
        ]
      },
      {
        id: 'web-pro',
        name: 'Full Corporate / Agency Website (5-7 Pages)',
        nameBn: 'ফুল কর্পোরেট বা এজেন্সি ওয়েবসাইট (৫-৭ পেজ)',
        priceBDT: 25000,
        priceUSD: 280,
        deliveryTime: '8-12 Days',
        deliveryTimeBn: '৮-১২ দিন',
        revisions: 'Unlimited Revisions',
        revisionsBn: 'আনলিমিটেড রিভিশন',
        popular: true,
        features: [
          'Multi-Page Structure (Home, Services, Portfolio, About, Contact)',
          'Interactive Budget Calculator & Dynamic Modals',
          'Bilingual Switcher (Bangla & English)',
          'Optimized for 95+ PageSpeed on Mobile',
          '30 Days Free Post-Launch Maintenance'
        ],
        featuresBn: [
          'মাল্টি-পেজ ওয়েবসাইট (হোম, সার্ভিস, পোর্টফোলিও, এবাউট, কন্টাক্ট)',
          'ইন্টারেক্টিভ বাজেট ক্যালকুলেটর ও কাস্টম মডালস',
          'ইংরেজি ও বাংলা ডাবল ল্যাঙ্গুয়েজ সুইচ',
          'মোবাইলে ৯৫+ গুগল পেজস্পিড অপ্টিমাইজেশন',
          'লঞ্চের পর ৩০ দিনের ফ্রি টেকনিক্যাল সাপোর্ট'
        ]
      },
      {
        id: 'web-ecommerce',
        name: 'Custom E-Commerce / Web Platform',
        nameBn: 'কাস্টম ই-কমার্স বা ওয়েব প্ল্যাটফর্ম',
        priceBDT: 45000,
        priceUSD: 490,
        deliveryTime: '15-20 Days',
        deliveryTimeBn: '১৫-২০ দিন',
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        features: [
          'Complete Product Catalog & Shopping Cart',
          'bKash, Nagad, Card & SSLCommerz / Stripe Integration',
          'Merchant Admin Dashboard & Order Tracker',
          'Automated Email & WhatsApp Order Alerts',
          '60 Days Dedicated Technical Support'
        ],
        featuresBn: [
          'সম্পূর্ণ প্রোডাক্ট ক্যাটালগ ও শপিং কার্ট',
          'বিকাশ, নগদ, কার্ড ও গেটওয়ে ইন্টিগ্রেশন',
          'মার্চেন্ট অ্যাডমিন ড্যাশবোর্ড ও অর্ডার ট্র্যাকার',
          'অটোমেটেড ইমেইল ও হোয়াটসঅ্যাপ অর্ডার অ্যালার্ট',
          '৬০ দিনের ডেডিকেটেড টেকনিক্যাল সাপোর্ট'
        ]
      }
    ]
  },
  {
    id: 'video-editing-motion',
    slug: 'video-editing-motion',
    title: 'Cinematic Video Editing & Viral Reels / Shorts',
    titleBn: 'সিনেমাটিক ভিডিও এডিটিং ও ভাইরাল রিলস/শর্টস',
    category: 'video_motion',
    categoryLabel: 'Video & Animation',
    categoryLabelBn: 'ভিডিও ও অ্যানিমেশন',
    shortDesc: 'Pacing-driven video editing, sound design, color grading, dynamic kinetic subtitles, and captivating visual effects for YouTube, TikTok, and Reels.',
    shortDescBn: 'দ্রুতগতির পেসিং, পাওয়ারফুল সাউন্ড ডিজাইন, সিনেমাটিক কালার গ্রেডিং, কাইনেটিক সাবটাইটেল ও ভিজ্যুয়াল ইফেক্টস।',
    fullDesc: 'We turn raw footage into high-retention video assets. Mastering sound effects, zoom transitions, motion graphics, and narrative storytelling to keep your viewers hooked until the final second.',
    fullDescBn: 'আপনার কাঁচা ফুটেজকে বানিয়ে তুলুন দুর্দান্ত সিনেমাটিক ভিডিও। নিখুঁত সাউন্ড ইফেক্টস, আধুনিক জুম ট্রানজিশন, মোশন গ্রাফিক্স ও ডায়নামিক সাবটাইটেল দর্শকদের স্ক্রিনে ধরে রাখবে শেষ মুহূর্ত পর্যন্ত।',
    startingPriceBDT: 2500,
    startingPriceUSD: 28,
    turnaroundTime: '24-72 Hours',
    turnaroundTimeBn: '২৪-৭২ ঘণ্টা',
    tools: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Audition'],
    features: [
      'High Viewer Retention Editing Style',
      'Dynamic Animated Kinetic Captions',
      'Studio-Grade Sound Design & Mix',
      'Cinematic Color Correction & LUTs'
    ],
    featuresBn: [
      'হাই রিটেনশন পেসিং ও হুক এডিটিং',
      'ডায়নামিক অ্যানিমেটেড কাইনেটিক ক্যাপশন',
      'স্টুডিও গ্রেড সাউন্ড ডিজাইন ও মিক্সিং',
      'সিনেমাটিক কালার কারেকশন ও গ্রেডিং'
    ],
    deliverables: [
      'Full HD 1080p / 4K ProRes or MP4 File',
      'Vertical 9:16 Aspect for Reels/Shorts & 16:9 for YouTube',
      'Separate Master Audio Track',
      'Fast Revision Delivery'
    ],
    deliverablesBn: [
      'ফুল এইচডি ১০৮০p / ৪কে রেজল্যুশন MP4 ফাইল',
      'রিলস/শর্টসের জন্য ৯:১৬ ও ইউটিউবের জন্য ১৬:৯ ভার্সন',
      'মাস্টার অডিও ট্র্যাক',
      'দ্রুত রিভিশন সার্ভিস'
    ],
    accentColor: '#10ef82',
    iconName: 'Video',
    packages: [
      {
        id: 'video-reels-pack',
        name: 'Viral Short / Reel (Up to 60s)',
        nameBn: 'ভাইরাল রিল / শর্ট (৬০ সেকেন্ড পর্যন্ত)',
        priceBDT: 2500,
        priceUSD: 28,
        deliveryTime: '24-48 Hours',
        deliveryTimeBn: '২৪-৪৮ ঘণ্টা',
        revisions: '3 Revisions',
        revisionsBn: '৩টি রিভিশন',
        features: [
          'Hook-focused intro editing',
          'Hormozi / Ali Abdaal style kinetic captions',
          'Sound effects & royalty-free music score',
          'Exported in 1080x1920 (9:16)'
        ],
        featuresBn: [
          'হুক-ফোকাসড চমৎকার ইন্ট্রো এডিটিং',
          'হরমোজি স্টাইলের অ্যানিমেটেড রঙিন ক্যাপশন',
          'সাউন্ড ইফেক্টস ও ব্যাকগ্রাউন্ড মিউজিক',
          '১০৮০x১৯২০ (৯:১৬) অপ্টিমাইজড এক্সপোর্ট'
        ]
      },
      {
        id: 'video-longform',
        name: 'Full YouTube Video (8-15 Mins)',
        nameBn: 'ইউটিউব মেইন ভিডিও (৮-১৫ মিনিট)',
        priceBDT: 8000,
        priceUSD: 90,
        deliveryTime: '3-4 Days',
        deliveryTimeBn: '৩-৪ দিন',
        revisions: 'Unlimited Revisions',
        revisionsBn: 'আনলিমিটেড রিভিশন',
        popular: true,
        features: [
          'Multi-cam sync & B-roll insertion',
          'Advanced motion graphics & lower thirds',
          'Color grading & voice clarity leveling',
          'Includes 1 free matched YouTube Thumbnail'
        ],
        featuresBn: [
          'মাল্টি-ক্যাম সিন্ক ও প্রাসঙ্গিক বি-রোল ইনসার্ট',
          'অ্যাডভান্সড মোশন গ্রাফিক্স ও লোয়ার থার্ডস',
          'সিনেমাটিক কালার গ্রেডিং ও অডিও ক্লিনআপ',
          'সাথে ১টি ফ্রি আকর্ষণীয় ইউটিউব থাম্বনেইল'
        ]
      },
      {
        id: 'video-monthly',
        name: 'Content Creator Monthly Vault (8 Long + 16 Shorts)',
        nameBn: 'মান্থলি কন্টেন্ট ভল্ট (৮টি লং + ১৬টি শর্টস)',
        priceBDT: 45000,
        priceUSD: 520,
        deliveryTime: 'Monthly Retainer',
        deliveryTimeBn: 'মাসিক রিটেইনার',
        revisions: 'Priority Unlimited',
        revisionsBn: 'প্রায়োরিটি আনলিমিটেড',
        features: [
          '8 Full YouTube Videos Produced',
          '16 Repurposed Viral Reels/Shorts',
          '8 Matching High-CTR Thumbnails',
          'Dedicated Video Editor & Slack/WhatsApp Room'
        ],
        featuresBn: [
          'মাসে ৮টি কমপ্লিট ইউটিউব লং ভিডিও',
          '১৬টি ভাইরাল রিলস/শর্টস ক্লিপ',
          '৮টি প্রিমিয়াম হাই-সিটিআর থাম্বনেইল',
          'ডেডিকেটেড এডিটর ও সার্বক্ষণিক যোগাযোগ'
        ]
      }
    ]
  },
  {
    id: 'social-media-design',
    slug: 'social-media-design',
    title: 'Social Media Ad Creatives & Banner Campaigns',
    titleBn: 'সোশ্যাল মিডিয়া অ্যাড ব্যানার ও ক্যাম্পেইন ডিজাইন',
    category: 'graphic_design',
    categoryLabel: 'Graphic Design',
    categoryLabelBn: 'গ্রাফিক ডিজাইন',
    shortDesc: 'Stop-scrolling Facebook, Instagram, and LinkedIn ad creatives designed to drive record conversion and lower your customer acquisition cost.',
    shortDescBn: 'ফেসবুক, ইনস্টাগ্রাম ও লিঙ্কডইন অ্যাডের জন্য স্ক্রল থামানো আকর্ষণীয় ব্যানার ও পোস্টার যা সেলস বাড়াতে সাহায্য করে।',
    fullDesc: 'We design high-converting visual advertising collateral for top brands and e-commerce stores. Clean typography, product highlighting, customer psychology, and persuasive callouts to boost return on ad spend (ROAS).',
    fullDescBn: 'ই-কমার্স ও ব্র্যান্ডগুলোর বিজ্ঞাপনের খরচ কমিয়ে সেলস বাড়াতে আমাদের অ্যাড ক্রিয়েটিভ অত্যন্ত কার্যকর। নিখুঁত প্রোডাক্ট হাইলাইটিং, সোশ্যাল প্রুফ ও দৃষ্টি আকর্ষক অফার ডিজাইন।' ,
    startingPriceBDT: 1200,
    startingPriceUSD: 15,
    turnaroundTime: '24-48 Hours',
    turnaroundTimeBn: '২৪-৪৮ ঘণ্টা',
    tools: ['Adobe Photoshop', 'Illustrator', 'Figma'],
    features: [
      'Optimized for Meta & Google Ad Guidelines',
      'Platform-Specific Aspect Ratios (1:1, 4:5, 9:16)',
      'High-Resolution Ready-to-Publish Files',
      'Psychological CTA Placement'
    ],
    featuresBn: [
      'মেটা ও গুগল অ্যাডের রুলস মেনে তৈরি',
      'প্রতিটি প্ল্যাটফর্মের সাইজ (১:১, ৪:৫, ৯:১৬)',
      'হাই রেজল্যুশন পাবলিশ-রেডি ফাইলস',
      'কনভার্সন বাড়ানো শক্তিশালী কল-টু-অ্যাকশন'
    ],
    deliverables: [
      'High-Resolution JPG / PNG exports',
      'Layered PSD or Figma Source Files',
      'Square (1080x1080), Portrait (1080x1350) and Story (1080x1920) variants'
    ],
    deliverablesBn: [
      'হাই-রেজল্যুশন JPG ও PNG এক্সপোর্ট',
      'লেয়ারড PSD অথবা Figma সোর্স ফাইল',
      'স্কয়ার, পোর্ট্রেট ও স্টোরি তিনটি সাইজের ভ্যারিয়েশন'
    ],
    accentColor: '#00ff88',
    iconName: 'Layers',
    packages: [
      {
        id: 'ad-starter',
        name: 'Single Campaign Banner',
        nameBn: 'একক ক্যাম্পেইন ব্যানার',
        priceBDT: 1200,
        priceUSD: 15,
        deliveryTime: '24 Hours',
        deliveryTimeBn: '২৪ ঘণ্টা',
        revisions: '3 Revisions',
        revisionsBn: '৩টি রিভিশন',
        features: [
          '1 High-Converting Ad Creative',
          'Photo manipulation & Product Cutout',
          'Multi-platform sizes (1:1 & 4:5)',
          'Commercial license'
        ],
        featuresBn: [
          '১টি হাই-কনভার্টিং অ্যাড ক্রিয়েটিভ',
          'প্রোডাক্ট কাটআউট ও ব্যাকগ্রাউন্ড সেটআপ',
          'মাল্টি-সাইজ (১:১ ও ৪:৫)',
          'কমার্শিয়াল ব্যবহারের লাইসেন্স'
        ]
      },
      {
        id: 'ad-pro',
        name: 'Growth Pack (10 Creatives)',
        nameBn: 'গ্রোথ প্যাক (১০টি ব্যানার)',
        priceBDT: 9500,
        priceUSD: 110,
        deliveryTime: '3-4 Days',
        deliveryTimeBn: '৩-৪ দিন',
        revisions: 'Unlimited Revisions',
        revisionsBn: 'আনলিমিটেড রিভিশন',
        popular: true,
        features: [
          '10 Ad Creatives for Campaigns',
          'Carousel & Single Image Formats',
          'Editable Source Files Included',
          'A/B Creative Hooks Testing Advice'
        ],
        featuresBn: [
          '১০টি প্রিমিয়াম ক্যাম্পেইন অ্যাড ব্যানার',
          'ক্যারোসেল ও সিঙ্গেল ইমেজ ফরম্যাট',
          'এডিটেবল সোর্স ফাইল অন্তর্ভুক্ত',
          'A/B টেস্টিং স্ট্র্যাটেজিক পরামর্শ'
        ]
      },
      {
        id: 'ad-monthly',
        name: 'Agency 30-Day Retainer (30 Creatives)',
        nameBn: 'এজেন্সি ৩০-দিনের রিটেইনার (৩০টি পোস্ট)',
        priceBDT: 24000,
        priceUSD: 270,
        deliveryTime: 'Monthly Delivery Schedule',
        deliveryTimeBn: 'মাসব্যাপী শিডিউল ডেলিভারি',
        revisions: 'Unlimited Revisions',
        revisionsBn: 'আনলিমিটেড রিভিশন',
        features: [
          '30 Creatives (Posts, Offers & Stories)',
          'Brand Identity Grid Uniformity',
          'Festive & Offer Template Packs',
          'Dedicated Graphic Designer'
        ],
        featuresBn: [
          '৩০টি সোশ্যাল পোস্ট ও অফার ব্যানার',
          'ইনস্টাগ্রাম ও ফেসবুক ফিড গ্রিড সাজানো',
          'উৎসব ও ডিসকাউন্ট টেমপ্লেট প্যাক',
          'ডেডিকেটেড গ্রাফিক ডিজাইনার সাপোর্ট'
        ]
      }
    ]
  },
  {
    id: 'ui-ux-figma',
    slug: 'ui-ux-figma',
    title: 'UI/UX Interface Design & Prototyping in Figma',
    titleBn: 'ফিজিমা ইউআই/ইউএক্স ইন্টারফেস ডিজাইন ও প্রোটোটাইপিং',
    category: 'web_development',
    categoryLabel: 'UI/UX Design',
    categoryLabelBn: 'ইউআই/ইউএক্স ডিজাইন',
    shortDesc: 'Pixel-perfect web and mobile app interfaces, design systems, interactive prototypes, and frictionless user journeys.',
    shortDescBn: 'পিক্সেল-পারফেক্ট মোবাইল অ্যাপ ও ওয়েব ইন্টারফেস, সম্পূর্ণ ডিজাইন সিস্টেম, ইন্টারেক্টিভ প্রোটোটাইপ ও ইউজার জার্নি।',
    fullDesc: 'We architect digital experiences that users love. Leveraging Auto-Layout, design tokens, responsive component variants, and clickable prototypes ready for developer handoff.',
    fullDescBn: 'আমরা এমন ইউজার ইন্টারফেস ডিজাইন করি যা ব্যবহার করা অত্যন্ত সহজ ও আনন্দদায়ক। আধুনিক ফিগমা কম্পোনেন্ট, ডিজাইন টোকেন ও লাইভ ক্লিকেবল প্রোটোটাইপ সরাসরি ডেভেলপারদের জন্য প্রস্তুত থাকে।',
    startingPriceBDT: 8000,
    startingPriceUSD: 95,
    turnaroundTime: '4-7 Days',
    turnaroundTimeBn: '৪-৭ দিন',
    tools: ['Figma', 'FigJam', 'Adobe XD', 'Principle'],
    features: [
      'Comprehensive Figma Component Library',
      'Interactive Clickable Prototyping',
      'Auto-Layout & Design Token Tokens',
      'Clean Developer Handoff Specs'
    ],
    featuresBn: [
      'কম্প্রিহেন্সিভ ফিগমা কম্পোনেন্ট লাইব্রেরি',
      'ইন্টারেক্টিভ ক্লিকেবল প্রোটোটাইপিং',
      'অটো-লেআউট ও আধুনিক ডিজাইন টোকেন',
      'ডেভেলপারদের জন্য নিখুঁত স্পেসিফিকেশন'
    ],
    deliverables: [
      'Figma Project File with View & Edit Access',
      'Design System Components & Typography Hierarchy',
      'Interactive Prototype Link',
      'Asset Export Package (SVG, PNG @2x, @3x)'
    ],
    deliverablesBn: [
      'ফিগমা সোর্স ফাইলের ফুল এক্সেস',
      'ডিজাইন সিস্টেম ও টাইপোগ্রাফি স্কেল',
      'ইন্টারেক্টিভ টেস্টেবল প্রোটোটাইপ লিঙ্ক',
      'সকল অ্যাসেট এক্সপোর্ট প্যাকেজ (SVG, PNG)'
    ],
    accentColor: '#10ef82',
    iconName: 'Figma',
    packages: [
      {
        id: 'ui-landing',
        name: 'Single Landing Page UI',
        nameBn: 'ল্যান্ডিং পেজ ইউআই ডিজাইন',
        priceBDT: 8000,
        priceUSD: 95,
        deliveryTime: '4 Days',
        deliveryTimeBn: '৪ দিন',
        revisions: 'Unlimited Revisions',
        revisionsBn: 'আনলিমিটেড রিভিশন',
        features: [
          'Desktop & Mobile Responsive Screens',
          'Modern Glassmorphic Dark/Light Palette',
          'Design System Tokens & Icons',
          'Interactive Clickable Figma Prototype'
        ],
        featuresBn: [
          'ডেস্কটপ ও মোবাইল রেসপনসিভ স্ক্রিন',
          'প্রিমিয়াম গ্লাস এফেক্ট ও কালার প্যালেট',
          'ডিজাইন সিস্টেম টোকেন ও আইকন প্যাক',
          'ক্লিকেবল ইন্টারেক্টিভ ফিগমা প্রোটোটাইপ'
        ]
      },
      {
        id: 'ui-app-pro',
        name: 'Mobile App / SaaS Dashboard (8 Screens)',
        nameBn: 'মোবাইল অ্যাপ বা SaaS ড্যাশবোর্ড (৮টি স্ক্রিন)',
        priceBDT: 22000,
        priceUSD: 250,
        deliveryTime: '7-10 Days',
        deliveryTimeBn: '৭-১০ দিন',
        revisions: 'Unlimited Revisions',
        revisionsBn: 'আনলিমিটেড রিভিশন',
        popular: true,
        features: [
          '8 High-Fidelity UI Screens',
          'Full Design System & Variants',
          'Complete User Flow & Wireframes',
          'Developer Handoff Inspection Guide'
        ],
        featuresBn: [
          '৮টি প্রিমিয়াম হাই-ফিডেলিটি স্ক্রিন',
          'ফুল ডিজাইন সিস্টেম ও ভ্যারিয়েন্টস',
          'কমপ্লিট ইউজার ফ্লো ও ওয়্যারফ্রেম',
          'ডেভেলপার হ্যান্ডঅফ ইন্সপেকশন গাইড'
        ]
      },
      {
        id: 'ui-enterprise',
        name: 'Complete Product Ecosystem (20+ Screens)',
        nameBn: 'সম্পূর্ণ প্রোডাক্ট ইকোসিস্টেম (২০+ স্ক্রিন)',
        priceBDT: 50000,
        priceUSD: 560,
        deliveryTime: '15-20 Days',
        deliveryTimeBn: '১৫-২০ দিন',
        revisions: 'Unlimited Revisions',
        revisionsBn: 'আনলিমিটেড রিভিশন',
        features: [
          '20+ Comprehensive Web & Mobile App Screens',
          'Enterprise Design System with Auto-Layout',
          'User Journey Mapping & Usability Testing',
          'Direct Collaboration via Figma Calls'
        ],
        featuresBn: [
          '২০টির বেশি ওয়েব ও মোবাইল স্ক্রিন',
          'এন্টারপ্রাইজ ডিজাইন সিস্টেম ও অটো লেআউট',
          'ইউজার জার্নি ম্যাপিং ও ইউজেবিলিটি টেস্টিং',
          'ফিগমাতে লাইভ কোলাবরেশন সাপোর্ট'
        ]
      }
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Tanvir Hossain',
    nameBn: 'তানভীর হোসেন',
    role: 'Lead Content Creator (620K Subscribers)',
    roleBn: 'প্রধান কন্টেন্ট ক্রিয়েটর (৬২০কে সাবস্ক্রাইবার)',
    company: 'Tech Pulse BD',
    avatarText: 'TH',
    rating: 5,
    review: 'Premium Zone completely transformed my YouTube channel CTR! Our click-through rate jumped from 5.4% to 11.2% in under 3 weeks. Their emerald and neon visual style is unmatched in Bangladesh.',
    reviewBn: 'Premium Zone আমার ইউটিউব চ্যানেলের ক্লিক-থ্রু রেট পুরোপুরি বদলে দিয়েছে! ৩ সপ্তাহের মধ্যে আমাদের সিটিআর ৫.৪% থেকে ১১.২%-এ পৌঁছেছে। তাদের ডিজাইন কোয়ালিটি সত্যিই আন্তর্জাতিক মানের।',
    metric: '+107% CTR Increase',
    serviceUsed: 'YouTube Thumbnails & Viral Hooks'
  },
  {
    id: '2',
    name: 'Farhan Ahmed',
    nameBn: 'ফারহান আহমেদ',
    role: 'Managing Director & Founder',
    roleBn: 'ম্যানেজিং ডিরেক্টর ও প্রতিষ্ঠাতা',
    company: 'Nexora Logistics & Cargo',
    avatarText: 'FA',
    rating: 5,
    review: 'The full brand identity and React website they built for our business made us look like a global enterprise. We closed two major corporate enterprise deals within 30 days of launch.',
    reviewBn: 'আমাদের নতুন লোগো, ব্র্যান্ড আইডেন্টিটি এবং ওয়েবসাইট তৈরির পর কোম্পানির রূপই বদলে গেছে। ক্লায়েন্টরা আমাদের প্রেজেন্টেশন দেখে অত্যন্ত মুগ্ধ হচ্ছে। কাজের ডেডিকেশন দারুণ!',
    metric: '2 Corporate Deals Closed',
    serviceUsed: 'Brand Identity & Web Development'
  },
  {
    id: '3',
    name: 'Nusrat Jahan',
    nameBn: 'নুসরাত জাহান',
    role: 'Founder & Head of Marketing',
    roleBn: 'প্রতিষ্ঠাতা ও হেড অব মার্কেটিং',
    company: 'Silk & Glow Cosmetics',
    avatarText: 'NJ',
    rating: 5,
    review: 'Their social media ad creatives boosted our Facebook Ad ROAS from 2.2x to 4.8x! The crisp glassmorphism aesthetic and product cutouts stopped shoppers from scrolling immediately.',
    reviewBn: 'তাদের ডিজাইন করা ফেসবুক অ্যাড পোস্টারের কারণে আমাদের সেলস দ্বিগুণের বেশি বৃদ্ধি পেয়েছে। অ্যাড স্পেন্ডের রিটার্ন (ROAS) ৪.৮ গুণ হয়েছে। অত্যন্ত সময়নিষ্ঠ ও প্রফেশনাল টিম!',
    metric: '4.8x Ad ROAS',
    serviceUsed: 'Social Media Ad Creatives'
  },
  {
    id: '4',
    name: 'Sajid Karim',
    nameBn: 'সাজিদ করিম',
    role: 'Co-founder & Product Lead',
    roleBn: 'কো-ফাউন্ডার ও প্রোডাক্ট হেড',
    company: 'PayFlow FinTech Solutions',
    avatarText: 'SK',
    rating: 5,
    review: 'Fast, responsive, and obsessive about code quality. Our custom web portal loads in less than 700ms with a 98/100 Google PageSpeed score. Premium Zone is our go-to creative engineering partner.',
    reviewBn: 'কোডিং কোয়ালিটি ও ফিগমা ডিজাইন দুটিই অসাধারণ। আমাদের ওয়েব পোর্টাল ৭০০ মিলিসেকেন্ডের মধ্যে লোড হয়। টেকনোলজি ও ডিজাইনের এমন মেলবন্ধন খুব কম জায়গায় দেখা যায়।',
    metric: '98/100 PageSpeed',
    serviceUsed: 'React Web Development'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I start a project with Premium Zone?',
    questionBn: 'Premium Zone-এর সাথে কাজ শুরু করার নিয়ম কী?',
    answer: 'You can choose your preferred service, calculate your budget using our live estimator, and click "Order via WhatsApp" or submit our project form. We will review your brief within 1 hour and confirm delivery timelines.',
    answerBn: 'আপনি সরাসরি আপনার পছন্দের সার্ভিস বা প্যাকেজ সিলেক্ট করে "Order via WhatsApp"-এ ক্লিক করতে পারেন অথবা আমাদের ফর্ম পূরণ করতে পারেন। ১ ঘণ্টার মধ্যে আমাদের প্রতিনিধি আপনার সাথে বিস্তারিত আলোচনা করে কাজ শুরু করবেন।',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'What payment methods do you accept?',
    questionBn: 'আপনারা কী কী পেমেন্ট মেথড গ্রহণ করেন?',
    answer: 'For clients in Bangladesh, we accept bKash (Merchant / Personal), Nagad, Rocket, and direct Bank Transfer. For international clients, we support Wise, Bank Wire, PayPal, and major Credit Cards.',
    answerBn: 'বাংলাদেশের ক্লায়েন্টদের জন্য বিকাশ (মার্চেন্ট ও পার্সোনাল), নগদ, রকেট এবং ব্যাংক ট্রান্সফার সুবিধা রয়েছে। আন্তর্জাতিক ক্লায়েন্টদের জন্য রয়েছে Wise, ব্যাংক ওয়্যার, পেপ্যাল ও আন্তর্জাতিক কার্ড পেমেন্ট।',
    category: 'payment'
  },
  {
    id: 'faq-3',
    question: 'Do you provide the editable source files?',
    questionBn: 'আপনারা কি কাজের এডিটেবল সোর্স ফাইল প্রদান করেন?',
    answer: 'Yes! Depending on the package, you will receive full raw source files including layered PSD (Photoshop), vector AI/EPS (Illustrator), Figma component links, or clean React/TypeScript codebases.',
    answerBn: 'হ্যাঁ, অবশ্যই! প্যাকেজ অনুযায়ী আপনি কাজের সম্পূর্ণ এডিটেবল সোর্স ফাইল (লেয়ারড PSD, ভেক্টর AI/EPS, ফিগমা লিঙ্ক অথবা ক্লিন রিয়্যাক্ট/টাইপস্ক্রিপ্ট সোর্স কোড) পেয়ে যাবেন।',
    category: 'deliverables'
  },
  {
    id: 'faq-4',
    question: 'What is your turnaround time for YouTube Thumbnails & Graphics?',
    questionBn: 'ইউটিউব থাম্বনেইল এবং গ্রাফিক্সের ডেলিভারি টাইম কত?',
    answer: 'Standard single thumbnails and social media posters are delivered within 24 to 48 hours. Urgent emergency delivery within 12 hours is also available upon request.',
    answerBn: 'সিঙ্গেল থাম্বনেইল এবং ব্যানার সাধারণ ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ডেলিভারি দেওয়া হয়। ইমার্জেন্সি ক্ষেত্রে ১২ ঘণ্টার এক্সপ্রেস ডেলিভারির সুবিধাও রয়েছে।',
    category: 'delivery'
  },
  {
    id: 'faq-5',
    question: 'What if I need changes after the initial delivery?',
    questionBn: 'কাজ ডেলিভারির পর যদি কোনো পরিবর্তনের প্রয়োজন হয়?',
    answer: 'We provide multiple rounds of revisions with every package, and our Pro packages include unlimited revisions until you are 100% satisfied with the outcome.',
    answerBn: 'আমাদের প্রতিটি প্যাকেজে পর্যাপ্ত রিভিশন সুবিধা রয়েছে। বিশেষ করে প্রো প্যাকেজগুলোতে রয়েছে সন্তুষ্টি অর্জন পর্যন্ত আনলিমিটেড রিভিশনের নিশ্চয়তা।',
    category: 'revisions'
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Discovery & Vision',
    titleBn: 'ডিসকভারি ও ব্রিফিং',
    desc: 'We analyze your target audience, competitors, and goals to establish a clear creative and technical roadmap.',
    descBn: 'আপনার টার্গেট অডিয়েন্স, প্রতিযোগী ও উদ্দেশ্য বিশ্লেষণ করে আমরা একটি পরিষ্কার ক্রিয়েটিভ ও টেকনিক্যাল রোডম্যাপ তৈরি করি।'
  },
  {
    step: '02',
    title: 'Concepts & Wireframes',
    titleBn: 'কনসেপ্ট ও ওয়্যারফ্রেম',
    desc: 'Crafting preliminary visual directions, layout prototypes, and color styling before full production.',
    descBn: 'মূল প্রোডাকশনে যাওয়ার আগে প্রাথমিক স্কেচ, লেআউট প্রোটোটাইপ ও কালার স্টাইলিং রেডি করে অনুমোদন নেওয়া হয়।'
  },
  {
    step: '03',
    title: 'Design & Engineering',
    titleBn: 'ডিজাইন ও ডেভেলপমেন্ট',
    desc: 'High-fidelity Photoshop manipulation, vector craft, cinematic editing, or clean React coding in action.',
    descBn: 'ফটোশপ ম্যানিপুলেশন, ভেক্টর ড্রয়িং, সিনেমাটিক ভিডিও এডিটিং অথবা ক্লিন কোডিংয়ের মাধ্যমে নিখুঁত বাস্তবায়ন।'
  },
  {
    step: '04',
    title: 'Polish & Quality Check',
    titleBn: 'রিভিউ ও নিখুঁত ফিনিশিং',
    desc: 'Fine-tuning details, contrast, responsiveness, and performance based on your exact feedback.',
    descBn: 'আপনার মতামত অনুসারে কালার ব্যালেন্স, মোবাইল রেসপন্সিভনেস ও খুঁটিনাটি বিষয় নিখুঁতভাবে ফাইনাল করা হয়।'
  },
  {
    step: '05',
    title: 'Master Assets Handoff',
    titleBn: 'ফাইনাল ডেলিভারি ও সাপোর্ট',
    desc: 'Delivery of 4K/UHD exports, raw editable source files, cloud deployment, and commercial licenses.',
    descBn: '৪কে/ইউএইচডি ফাইল, এডিটেবল সোর্স ফাইল, ক্লাউড ডিপ্লয়মেন্ট ও কমার্শিয়াল রাইটস সহ সম্পূর্ণ হ্যান্ডওভার।'
  }
];
