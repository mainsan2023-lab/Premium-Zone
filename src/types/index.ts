export type Language = 'en' | 'bn';
export type Currency = 'BDT' | 'USD';
export type PageView = 'home' | 'about' | 'services' | 'projects' | 'reviews' | 'contact' | 'calculator';

export type ServiceCategory = 
  | 'all'
  | 'graphic_design'
  | 'youtube_social'
  | 'web_development'
  | 'video_motion'
  | 'branding_identity'
  | 'ecommerce';

export interface ServicePackage {
  id: string;
  name: string;
  nameBn: string;
  priceBDT: number;
  priceUSD: number;
  deliveryTime: string;
  deliveryTimeBn: string;
  revisions: string;
  revisionsBn: string;
  popular?: boolean;
  features: string[];
  featuresBn: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  titleBn: string;
  category: ServiceCategory;
  categoryLabel: string;
  categoryLabelBn: string;
  shortDesc: string;
  shortDescBn: string;
  fullDesc: string;
  fullDescBn: string;
  startingPriceBDT: number;
  startingPriceUSD: number;
  turnaroundTime: string;
  turnaroundTimeBn: string;
  tools: string[];
  features: string[];
  featuresBn: string[];
  packages: ServicePackage[];
  deliverables: string[];
  deliverablesBn: string[];
  accentColor: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  nameBn: string;
  role: string;
  roleBn: string;
  company: string;
  avatarText: string;
  avatarUrl?: string;
  rating: number;
  review: string;
  reviewBn: string;
  metric: string;
  serviceUsed: string;
  category?: 'youtube' | 'natok_media' | 'web_tech' | 'branding';
  date?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  questionBn: string;
  answer: string;
  answerBn: string;
  category: string;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  titleBn: string;
  category: 'all' | 'graphic_design' | 'ui_ux' | 'frontend_web' | 'video_motion';
  categoryLabel: string;
  categoryLabelBn: string;
  typeTag: 'all' | 'poster' | 'thumbnail' | 'ui_ux' | 'web_coding' | 'education' | 'video';
  typeTagLabel: string;
  typeTagLabelBn: string;
  leftBadge: string;
  metricBadge: string;
  rightBadge: string;
  description: string;
  descriptionBn: string;
  software: string[];
  year: string;
  client: string;
  imageThumbnail: string;
  isVideo?: boolean;
  youtubeId?: string; // e.g. YouTube video ID
  youtubeUrl?: string;
  domainId: string;   // For mapping to BudgetCalculator
  subId: string;      // For mapping to BudgetCalculator
  features: string[];
  featuresBn: string[];
}
