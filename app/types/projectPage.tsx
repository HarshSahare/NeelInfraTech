export interface HeroStat {
  number: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

export interface Feature {
  title: string;
  description: string;
  items: FeatureItem[];
}

export interface TrustItem {
  icon: string;
  text: string;
}

export interface SnapshotItem {
  label: string;
  value: string;
}

export interface LocationItem {
  place: string;
  distance: string;
  icon?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ImageItem {
  title: string;
  image: string;
}

export interface ProjectData {
  slug: string;

  seo: {
    title: string;
    description: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: string;
    stats: HeroStat[];
  };

  trustItems: TrustItem[];

  about: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
  };

  features: Feature;

  snapshot: SnapshotItem[];

  location: {
    title: string;
    mapImage: string;
    items: LocationItem[];
  };

  gallery: {
    title: string;
    description: string;
    images: ImageItem[];
  };

  faq: FAQItem[];

  whatsappText: string;
}
