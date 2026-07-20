import { arSite } from "./ar";
import type { MetricItem, SiteInfo } from "./types";

export const enSite: SiteInfo = {
  ...arSite,
  name: "Abubaker Abd Albagi Altaif Ahmed",
  role: "Digital Product Architecture and Transformation Consultant",
  tagline: "Engineering Sustainable Digital Value",
  description:
    "Specialized in helping public and private sector organizations transform complex operational procedures into integrated, scalable digital systems and platforms.",
  heroStatement:
    "Enterprise systems architect, technical leader, and digital transformation specialist with extensive experience designing national digital platforms, enterprise systems, and AI-powered business solutions.",
  location: "Sudan"
};

export const enImpactMetrics: MetricItem[] = [
  { value: "20+", label: "Years of experience" },
  { value: "1.5M+", label: "Financial notifications processed" },
  { value: "130K+", label: "Registered organizations" },
  { value: "19", label: "Government entities connected through Baldna Platform" },
  { value: "3M+", label: "Passport printing status inquiries" },
  { value: "500K+", label: "Citizens served through the online booking system" },
  { value: "10K+", label: "Foreign resident files managed digitally" }
];

export const enExecutiveScale: string[] = [
  "National government platforms",
  "Enterprise ERP systems",
  "AI-powered OCR solutions",
  "Government integration",
  "Business process automation",
  "Decision support systems"
];

export const enAvailableFor: string[] = [
  "Technical consulting",
  "Systems engineering",
  "Digital transformation",
  "Technical team leadership",
  "Enterprise solution design",
  "CTO opportunities"
];

export const enPrinciples: string[] = [
  "Business leads technology: start with the operating model and user journey before the database.",
  "Solve root causes, not symptoms: simplify the process before writing the software solution.",
  "Simplicity is an engineering advantage: good products remain maintainable years later.",
  "Every dashboard should lead to a clear operational decision."
];

export const enFramework: string[] = ["Understand", "Analyze", "Simplify", "Design", "Validate", "Build", "Measure", "Improve"];
