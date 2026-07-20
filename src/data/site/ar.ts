import type { MetricItem, SiteInfo } from "./types";
import type { NavigationItem } from "../../i18n/types";

export const arSite: SiteInfo = {
  name: "أبوبكر الطائف",
  nameEn: "Abubaker Abd Albagi Altaif Ahmed",
  role: "مبرمج، مطوّر أنظمة مؤسسية، ومستشار تحوّل رقمي",
  tagline: "أبني الأنظمة المؤسسية والمنتجات الرقمية، وأساعد المؤسسات على تحويل احتياجاتها التشغيلية إلى حلول تقنية عملية وقابلة للتوسع.",
  description:
    "مبرمج ومطوّر أنظمة مؤسسية يبني المنتجات والحلول الرقمية، ويقدم استشارات عملية للمؤسسات في مجالات التحول الرقمي وتطوير العمليات والأنظمة.",
  heroStatement:
    "أبني الأنظمة المؤسسية والمنتجات الرقمية، وأساعد المؤسسات على تحويل احتياجاتها التشغيلية إلى حلول تقنية عملية وقابلة للتوسع.",
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
  { value: "10K+", label: "ملف أجنبي تمت إدارته رقميًا" }
];

export const arExecutiveScale: string[] = [
  "منصات حكومية وطنية",
  "أنظمة ERP مؤسسية",
  "منتجات رقمية قابلة للتوسع",
  "تكامل حكومي",
  "أتمتة عمليات الأعمال",
  "أنظمة مؤشرات ودعم قرار"
];

export const arAvailableFor: string[] = [
  "بناء الأنظمة المؤسسية",
  "هندسة المنتجات الرقمية",
  "قيادة التحول الرقمي",
  "تأسيس الفرق التقنية والتشغيلية",
  "تصميم الحلول المؤسسية",
  "فرص CTO"
];

export const arPrinciples: string[] = [
  "الأعمال تقود التقنية: أبدأ من نموذج التشغيل ورحلة المستخدم قبل قاعدة البيانات.",
  "علاج الجذور لا الأعراض: أبسّط الإجراء قبل بناء الحل البرمجي.",
  "البساطة ميزة هندسية: المنتج الجيد يبقى قابلًا للتطوير بعد سنوات.",
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
