export type SiteInfo = {
  name: string;
  nameEn: string;
  role: string;
  tagline: string;
  description: string;
  heroStatement: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
  resumePdf: string;
  atsResume: string;
};

export type MetricItem = {
  title: string;
  organization: string;
  role: string;
  systemLabel?: string;
  systemUrl?: string;
  slug: string;
  visual: "notifications" | "platform" | "security" | "calendar" | "data" | "erp";
  description: string;
  metrics: string[];
};
