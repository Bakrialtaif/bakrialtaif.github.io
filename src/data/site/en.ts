import { arSite } from "./ar";
import type { MetricItem, SiteInfo } from "./types";

export const enSite: SiteInfo = {
  ...arSite,
  name: "Abubaker Abd Albagi Altaif Ahmed",
  role: "Product Architect & Digital Transformation Lead",
  tagline: "I turn complex institutional challenges into practical digital systems and lead their delivery from architecture to stable operations.",
  description:
    "I design and build enterprise systems and digital products that turn complex operational challenges into practical, scalable solutions. I lead the full journey from business analysis and process redesign to system delivery, team establishment, operational rollout, and measurable outcomes.",
  heroStatement:
    "Enterprise systems builder and technical product leader combining business analysis, product architecture, systems engineering, team establishment, and operational delivery across government and enterprise environments.",
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
  "Scalable digital products",
  "Government integration",
  "Business process automation",
  "Performance and decision systems"
];

export const enAvailableFor: string[] = [
  "Enterprise systems building",
  "Digital product architecture",
  "Digital transformation leadership",
  "Technical and operations team establishment",
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
