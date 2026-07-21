import type { Locale } from "@/i18n";
import { arImpactMetrics } from "@/data/site/ar";
import { enImpactMetrics } from "@/data/site/en";
import { arProjects } from "@/data/projects/ar";
import { enProjects } from "@/data/projects/en";
import type { Project } from "@/data/projects/types";
import type { ProjectCaseStudy } from "./types";

export const projectCaseStudySlugs = [
  "esh3ark",
  "baldna-platform",
  "passport-booking",
  "foreigners-management",
] as const;

const arLabels = {
  overviewTitle: "نبذة عن المشروع",
  contextTitle: "السياق والمشكلة",
  challengesTitle: "التحديات",
  responsibilitiesTitle: "دوري ومسؤولياتي",
  solutionTitle: "الحل",
  capabilitiesTitle: "المكونات والقدرات",
  outcomesTitle: "النتائج والمؤشرات",
  technologiesTitle: "التقنيات",
  lessonsTitle: "دروس مهنية",
  evidenceTitle: "أدلة مرتبطة",
  ctaTitle: "هل تعمل على مشروع يواجه تحديات مشابهة؟",
  ctaText: "يمكننا بدء حوار مهني حول احتياجات المشروع والنتائج المطلوبة.",
  backLabel: "العودة إلى المشاريع",
  allProjectsLabel: "كل المشاريع",
  contactLabel: "بدء حوار مهني",
};

const enLabels = {
  overviewTitle: "Project Overview",
  contextTitle: "Context and Problem",
  challengesTitle: "Challenges",
  responsibilitiesTitle: "Role and Responsibilities",
  solutionTitle: "Solution",
  capabilitiesTitle: "Core Capabilities",
  outcomesTitle: "Outcomes and Metrics",
  technologiesTitle: "Technologies",
  lessonsTitle: "Professional Lessons",
  evidenceTitle: "Related Evidence",
  ctaTitle: "Working on a project with similar challenges?",
  ctaText: "A focused conversation can clarify the operational needs, delivery risks, and outcomes that matter most.",
  backLabel: "Back to projects",
  allProjectsLabel: "All projects",
  contactLabel: "Start a professional conversation",
};

const lessonTemplates = {
  ar: [
    ["الفهم قبل البناء", "توضح التجربة أهمية فهم الإجراءات والواقع التشغيلي قبل تثبيت شكل الحل التقني."],
    ["البيانات جزء من التشغيل", "القيمة لا تأتي من جمع البيانات فقط، بل من تحويلها إلى متابعة وقرار وتحسين مستمر."],
    ["النظام خدمة مستمرة", "نجاح المشروع يرتبط بالتشغيل والاستقرار والتطوير بعد الإطلاق، لا بالإصدار الأول فقط."],
  ],
  en: [
    ["Understand before building", "The work shows why operational context should shape the technical solution from the start."],
    ["Data belongs inside operations", "Value comes from turning data into monitoring, decisions, and continuous improvement."],
    ["A system is an ongoing service", "Delivery succeeds through operation, stability, and iteration after launch, not only the first release."],
  ],
};

const challengeLabels = {
  ar: {
    problem: "تحدي السياق",
    solution: "تحدي الحل",
    impact: "تحدي الأثر",
  },
  en: {
    problem: "Context challenge",
    solution: "Solution challenge",
    impact: "Impact challenge",
  },
};

function splitMetric(metric: string) {
  const [value, ...labelParts] = metric.split(" ");
  return {
    value,
    label: labelParts.join(" "),
  };
}

function buildCaseStudy(project: Project, locale: Locale): ProjectCaseStudy {
  const labels = locale === "ar" ? arLabels : enLabels;
  const metrics = locale === "ar" ? arImpactMetrics : enImpactMetrics;
  const metricSource = metrics.find((item) => item.slug === project.slug);
  const heroMetrics = (metricSource?.metrics ?? project.results).map(splitMetric);
  const challengeSet = challengeLabels[locale];

  return {
    ...project,
    heroMetrics,
    sections: labels,
    challenges: [
      { title: challengeSet.problem, description: project.businessImpact.problem },
      { title: challengeSet.solution, description: project.businessImpact.solution },
      { title: challengeSet.impact, description: project.businessImpact.impact },
    ],
    lessons: lessonTemplates[locale].map(([title, description]) => ({ title, description })),
    relatedAwardProjects:
      project.slug === "foreigners-management"
        ? ["نظام معاملات الأجانب", "Foreigners Transactions System"]
        : project.slug === "passport-booking"
          ? ["أنظمة الجوازات والهجرة ونظام الأجانب", "Passports and Immigration Systems and Foreigners System"]
          : [],
    relatedRecommendationOrganizations: [],
    seo: {
      title: project.name,
      description: project.summary,
      keywords: [project.name, project.organization, project.type, ...project.technologies],
    },
  };
}

export function getProjectCaseStudies(locale: Locale) {
  const projects = locale === "ar" ? arProjects : enProjects;
  return projectCaseStudySlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project))
    .map((project) => buildCaseStudy(project, locale));
}

export function getProjectCaseStudy(locale: Locale, slug: string) {
  return getProjectCaseStudies(locale).find((project) => project.slug === slug);
}
