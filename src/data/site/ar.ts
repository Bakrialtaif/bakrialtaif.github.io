import type { MetricItem, SiteInfo } from "./types";
import type { NavigationItem } from "../../i18n/types";

export const arSite: SiteInfo = {
  name: "أبوبكر عبد الباقي الطائف أحمد",
  nameEn: "Abubaker Abd Albagi Altaif Ahmed",
  role: "مستشار هندسة المنتجات والتحول الرقمي",
  tagline: "هندسة قيمة رقمية مستدامة",
  description:
    "متخصص في مساعدة مؤسسات القطاعين العام والخاص على تحويل الإجراءات والعمليات التشغيلية المعقدة إلى أنظمة ومنصات رقمية متكاملة وقابلة للتوسع.",
  heroStatement:
    "معماري أنظمة مؤسسية، قائد تقني، ومتخصص تحول رقمي بخبرة واسعة في تصميم المنصات الرقمية الوطنية، الأنظمة المؤسسية، وحلول الأعمال المدعومة بالذكاء الاصطناعي.",
  location: "السودان",
  email: "contact@bakrialtaif.github.io",
  phone: "",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/bakrialtaif",
  website: "https://bakrialtaif.github.io",
  resumePdf: "/documents/Abobaker-Altaif-CV.pdf",
  atsResume: "/ats-resume"
};

export const arNavigation: NavigationItem[] = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "الملف المهني" },
  { href: "/experience", label: "الخبرة المهنية" },
  { href: "/projects", label: "أبرز المشاريع" },
  { href: "/expertise", label: "مجالات الخبرة" },
  { href: "/education", label: "التعليم" },
  { href: "/awards", label: "الجوائز والثناءات" },
  { href: "/contact", label: "التواصل" }
];

export const arImpactMetrics: MetricItem[] = [
  { value: "20+", label: "عامًا من الخبرة" },
  { value: "1.5M+", label: "إشعار مالي تمت معالجته" },
  { value: "130K+", label: "منشأة مسجلة" },
  { value: "19", label: "مؤسسة حكومية مرتبطة ضمن منصة بلدنا" },
  { value: "3M+", label: "عملية استعلام عن حالة طباعة الجواز" },
  { value: "500K+", label: "مواطن استفاد من نظام الحجز الإلكتروني" },
  { value: "10K+", label: "ملف أجنبي تمت إدارته رقميا" }
];

export const arExecutiveScale: string[] = [
  "منصات حكومية وطنية",
  "أنظمة ERP مؤسسية",
  "حلول OCR مدعومة بالذكاء الاصطناعي",
  "تكامل حكومي",
  "أتمتة عمليات الأعمال",
  "أنظمة دعم القرار"
];

export const arAvailableFor: string[] = [
  "الاستشارات التقنية",
  "هندسة الأنظمة",
  "التحول الرقمي",
  "قيادة الفرق التقنية",
  "تصميم الحلول المؤسسية",
  "فرص CTO"
];

export const arPrinciples: string[] = [
  "الأعمال تقود التقنية: نبدأ من نموذج الأعمال ورحلة المستخدم لا من قاعدة البيانات.",
  "علاج الجذور لا الأعراض: تفكيك الإجراء قبل كتابة الحل البرمجي.",
  "البساطة ميزة هندسية: المنتج الجيد يبقى قابلا للتطوير بعد سنوات.",
  "كل لوحة معلومات يجب أن تقود إلى قرار تشغيلي واضح."
];

export const arFramework: string[] = [
  "الفهم",
  "التحليل",
  "التبسيط",
  "التصميم",
  "التحقق",
  "البناء",
  "القياس",
  "التحسين"
];
