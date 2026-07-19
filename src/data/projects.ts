export type Project = {
  slug: string;
  name: string;
  organization: string;
  role: string;
  period: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  results: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "baldna-platform",
    name: "منصة تبادل البيانات والمعاملات الحكومية (بلدنا)",
    organization: "وزارة الاتصالات والتحول الرقمي - السودان",
    role: "المدير التقني للمنصة القومية الموحدة",
    period: "2024 - حتى الآن",
    type: "منصة حكومية وطنية",
    summary:
      "منصة حكومية موحدة لربط مؤسسات القطاع الاقتصادي وتبادل البيانات والمعاملات الحكومية إلكترونيا.",
    responsibilities: ["تطوير المنصة", "تحليل إجراءات المعاملات الحكومية", "المشاركة في تشغيل المنصة", "تدريب المستخدمين", "المتابعة الفنية"],
    technologies: ["Python", "Django REST Framework", "PostgreSQL", "Linux", "Nginx", "Redis", "Celery"],
    results: ["ربط 19 مؤسسة حكومية قطاعية", "تشغيل المنصة على البيئة الإنتاجية", "أتمتة إجراءات تبادل المعاملات"],
    featured: true
  },
  {
    slug: "passport-services",
    name: "المنظومة الرقمية لخدمات الجوازات والأجانب",
    organization: "وزارة الداخلية - الإدارة العامة للجوازات والهجرة",
    role: "مطور أنظمة ومهندس حلول رقمية",
    period: "2023 - حتى الآن",
    type: "أنظمة سيادية وخدمات إلكترونية",
    summary:
      "باقة أنظمة لخدمات المواطنين والأجانب تشمل الحجز الإلكتروني، الاستعلام عن الجواز، معاملات الأجانب، وإدارة شؤون القوة.",
    responsibilities: ["تطوير الأنظمة الرقمية", "ابتكار حلول رقمية جديدة", "تطوير خدمات إلكترونية", "تطبيق ممارسات الأمن السيبراني", "دعم فرق التشغيل"],
    technologies: ["Python", "Django", "SQL Databases", "Application Security", "Permissions Management"],
    results: ["خدمة أكثر من 500,000 مواطن عبر الحجز الإلكتروني", "تنفيذ أكثر من 3,000,000 عملية استعلام", "إدارة أكثر من 10,000 ملف أجنبي", "حوسبة بيانات 3,600 ضابط وضابط صف"],
    featured: true
  },
  {
    slug: "training-database",
    name: "نظام قاعدة بيانات التدريب في السودان",
    organization: "المجلس القومي للتدريب",
    role: "مدير مشروع نظام بيانات التدريب / مدير إدارة الإحصاء والمعلومات",
    period: "2010 - 2013",
    type: "نظام معلومات وطني",
    summary:
      "نظام لإدارة بيانات التدريب والمؤسسات التدريبية داخل السودان ودعم قرارات بناء القدرات الوطنية.",
    responsibilities: ["إدارة المشروع", "تأسيس الفريق التقني", "قيادة الفريق", "إدارة الإحصاء والمعلومات", "تطوير الأنظمة الداخلية"],
    technologies: ["Database Design", "Information Systems", "Reporting", "Decision Support"],
    results: ["بناء النظام الوطني لبيانات التدريب", "تأسيس فريق المشروع", "الحصول على جائزة أفضل مشروع حكومة إلكترونية لعام 2012"],
    featured: true
  },
  {
    slug: "kidney-patients-database",
    name: "نظام بيانات مرضى الكلى",
    organization: "وزارة الصحة الاتحادية - المجلس القومي لأمراض وجراحة الكلى",
    role: "مصمم ومطور نظام معلومات صحية",
    period: "موثق في قاعدة المعرفة المهنية",
    type: "نظام معلومات صحية",
    summary: "قاعدة بيانات وطنية لإدارة معلومات مرضى الكلى.",
    responsibilities: ["تصميم قاعدة البيانات", "تطوير نظام إدارة البيانات", "دعم إدارة معلومات المرضى"],
    technologies: ["Database Design", "Healthcare Information Systems", "Data Management"],
    results: ["تسجيل وإدارة بيانات 3,558 مريضا"]
  },
  {
    slug: "snso-erp",
    name: "نظام إدارة الموارد SNSO",
    organization: "شركة شمس الإدارة - المملكة العربية السعودية",
    role: "مدير تقنية المعلومات",
    period: "2014 - 2019",
    type: "نظام إدارة موارد ERP",
    summary: "نظام مؤسسي لإدارة الموارد والعمليات ضمن بيئة القطاع الخاص.",
    responsibilities: ["المشاركة في بناء النظام", "تأسيس قسم تقنية المعلومات", "تأسيس فريق العمل", "تأسيس فرع الشركة في السودان"],
    technologies: ["ERP", "Business Documents", "Workflow", "CRM", "Finance", "Inventory"],
    results: ["تأسيس إدارة تقنية المعلومات", "تأسيس فريق العمل التقني", "المشاركة في تطوير نظام إدارة الموارد"]
  },
  {
    slug: "war-disabled-database",
    name: "نظام قاعدة بيانات معاقي الحرب في السودان",
    organization: "منظمة أبرار لرعاية معاقي الحرب ومكافحة الألغام",
    role: "مطور نظام معلومات",
    period: "2012",
    type: "نظام معلومات",
    summary: "نظام معلومات لمنظمة غير ربحية ضمن مبادرات الحكومة الإلكترونية.",
    responsibilities: ["تطوير قاعدة بيانات المشروع", "دعم إدارة المعلومات"],
    technologies: ["Database Design", "Information Systems"],
    results: ["جائزة أفضل مشروع حكومة إلكترونية لعام 2012 في قطاع المنظمات غير الربحية"]
  }
];
