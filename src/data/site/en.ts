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
  {
    title: "ESH3ARK",
    organization: "ESH3ARK Technology Ltd.",
    role: "Co-founder / System Architect / Lead Developer",
    systemLabel: "https://esh3ark.com",
    systemUrl: "https://esh3ark.com",
    slug: "esh3ark",
    visual: "notifications",
    description: "A platform for processing and reading banking notifications, used by more than {0} and processing more than {1}.",
    metrics: ["95K customers", "1.6M notifications"]
  },
  {
    title: "National Government Data and Transaction Exchange Platform - Baldna",
    organization: "Ministry of Digital Transformation and Telecommunications",
    role: "First Programmer / Initial Platform Builder / Technical Team Member",
    systemLabel: "https://baldna.gov.sd",
    systemUrl: "https://baldna.gov.sd",
    slug: "baldna-platform",
    visual: "platform",
    description: "A unified government platform that connected more than {0}, includes more than {1}, and received over {2}.",
    metrics: ["40+ government institutions", "78+ digital services", "155K requests"]
  },
  {
    title: "Online Booking System",
    organization: "General Directorate of Passports and Immigration",
    role: "System Designer / Lead Developer",
    systemLabel: "https://queue.passports.gov.sd",
    systemUrl: "https://queue.passports.gov.sd/",
    slug: "passport-booking",
    visual: "calendar",
    description: "A system for managing passport service appointments, operating through more than {0}, completing more than {1}, and supporting more than {2}.",
    metrics: ["40+ offices worldwide", "674K bookings", "3.3M inquiries"]
  },
  {
    title: "Foreigners Transactions System - SEYADA",
    organization: "General Directorate of Passports and Immigration",
    role: "System Designer / Lead Developer",
    systemLabel: "Internal system",
    slug: "foreigners-management",
    visual: "security",
    description: "A system for managing foreigners transactions and connecting external offices, operating through more than {0} and processing more than {1}.",
    metrics: ["85+ offices worldwide", "10K+ transactions"]
  }
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
  "Business First — technology is a way to create real value.",
  "Simplicity Always — simplicity is the foundation of systems that can evolve.",
  "Data Leads Decisions — indicators matter more than impressions.",
  "The User Is the Beginning — every decision starts from their needs.",
  "Continuous Development — every release is a chance to improve the product, not finish it."
];

export const enFramework: string[] = ["Understand", "Analyze", "Simplify", "Design", "Validate", "Build", "Measure", "Improve"];
