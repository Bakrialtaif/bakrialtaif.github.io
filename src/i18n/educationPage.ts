import type { Locale } from "./config";

type SkillGroup = {
  title: string;
  items: string[];
};

type EducationPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  academicTitle: string;
  coursesTitle: string;
  skillsTitle: string;
  skillGroups: SkillGroup[];
};

export const educationPageContent = {
  ar: {
    eyebrow: "التعليم",
    title: "التعليم والتطوير المهني",
    description:
      "شكّل التعليم الأكاديمي نقطة البداية، بينما استمر التعلم من خلال الممارسة العملية، والدورات المتخصصة، والعمل على مشاريع متنوعة في القطاعين الحكومي والخاص.",
    academicTitle: "المؤهلات الأكاديمية",
    coursesTitle: "الدورات المهنية",
    skillsTitle: "المهارات التقنية",
    skillGroups: [
      {
        title: "لغات البرمجة",
        items: ["Python", "TypeScript", "JavaScript", "C#"]
      },
      {
        title: "الأطر والمنصات",
        items: ["Django", "React", "Next.js", "Node.js"]
      },
      {
        title: "قواعد البيانات",
        items: ["PostgreSQL", "Redis", "SQLite"]
      },
      {
        title: "البنية والتشغيل",
        items: ["Docker", "Linux", "Git", "Nginx"]
      },
      {
        title: "التحليل والذكاء الاصطناعي",
        items: ["OCR", "Business Intelligence", "LLM Integration", "Prompt Engineering", "Machine Learning"]
      }
    ]
  },
  en: {
    eyebrow: "Education",
    title: "Education and Professional Development",
    description:
      "Academic education formed the starting point, while learning continued through practical work, specialized courses, and projects across government and private-sector environments.",
    academicTitle: "Academic Qualifications",
    coursesTitle: "Professional Courses",
    skillsTitle: "Technical Skills",
    skillGroups: [
      {
        title: "Programming Languages",
        items: ["Python", "TypeScript", "JavaScript", "C#"]
      },
      {
        title: "Frameworks and Platforms",
        items: ["Django", "React", "Next.js", "Node.js"]
      },
      {
        title: "Databases",
        items: ["PostgreSQL", "Redis", "SQLite"]
      },
      {
        title: "Infrastructure and Operations",
        items: ["Docker", "Linux", "Git", "Nginx"]
      },
      {
        title: "Analytics and AI",
        items: ["OCR", "Business Intelligence", "LLM Integration", "Prompt Engineering", "Machine Learning"]
      }
    ]
  }
} satisfies Record<Locale, EducationPageContent>;
