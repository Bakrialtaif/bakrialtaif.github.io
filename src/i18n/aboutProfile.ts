import type { Locale } from "./config";

type JourneyItem = {
  title: string;
  period: string;
  text: string;
  note: string;
};

type NamedText = [string, string];

export const aboutProfile: Record<
  Locale,
  {
    introTitle: string;
    introText: string;
    stationsTitle: string;
    stations: string[];
    journeyEyebrow: string;
    journeyTitle: string;
    journey: JourneyItem[];
    sectorsEyebrow: string;
    sectorsTitle: string;
    sectors: NamedText[];
    projectTypesEyebrow: string;
    projectTypesTitle: string;
    projectTypesDescription: string;
    projectTypes: string[];
    expertiseEyebrow: string;
    expertiseTitle: string;
    expertiseDescription: string;
    toolsEyebrow: string;
    toolsTitle: string;
    contactEyebrow: string;
    contactTitle: string;
    contactText: string;
    contactAction: string;
  }
> = {
  ar: {
    introTitle: "لمحة مهنية",
    introText:
      "امتدت الخبرة عبر بيئات عمل متعددة شملت التعليم والتدريب، والقطاع الخاص، والجهات الحكومية، والصناعة، والخدمات الرقمية. تنوعت الأعمال بين تطوير الأنظمة المؤسسية، والمنصات الحكومية، وأنظمة الجوازات، ومنتجات رقمية مثل إشعارك، وحلول ERP ولوحات معلومات وتكامل بين الأنظمة. تشكلت هذه الخبرة من ممارسة مباشرة لمشاريع تشغيلية تحتاج إلى فهم الإجراءات، وتحويلها إلى أنظمة قابلة للاستخدام والتطوير.",
    stationsTitle: "محطات",
    stations: [
      "جامعة الخرطوم",
      "جامعة البيان",
      "المجلس القومي للتدريب",
      "شركة سكر النيل الأبيض",
      "شركة شمس الإدارة",
      "مؤسسة كاشتا لاب",
      "الإدارة العامة للجوازات والهجرة",
      "معتمدية اللاجئين",
      "وزارة التحول الرقمي والإتصالات",
    ],
    journeyEyebrow: "المسيرة المهنية",
    journeyTitle: "محطات في درب التجربة",
    journey: [
      {
        title: "التعليم والتدريب",
        period: "البداية",
        text: "بدأت الخبرة من بيئات التعليم والتدريب، مع التعامل مع المحتوى، قواعد البيانات، واحتياجات المتدربين والمستخدمين.",
        note: "بناء أساس في تبسيط المعرفة وتحويلها إلى أدوات قابلة للاستخدام.",
      },
      {
        title: "تطوير البرمجيات",
        period: "مرحلة البناء",
        text: "انتقلت الأعمال إلى تطوير تطبيقات وأنظمة تشغيلية مرتبطة بقواعد البيانات والتقارير واحتياجات المؤسسات اليومية.",
        note: "الانتقال من البرمجة كمهارة إلى بناء حلول مرتبطة بسير العمل.",
      },
      {
        title: "الأنظمة المؤسسية",
        period: "مرحلة التوسع",
        text: "شملت الأعمال بناء وحدات لإدارة الموارد والإجراءات وتحويل العمليات المتفرقة إلى نماذج تشغيل قابلة للمتابعة.",
        note: "توسيع الخبرة باتجاه الأنظمة التي تخدم أكثر من إدارة ووظيفة.",
      },
      {
        title: "المنتجات الرقمية",
        period: "مرحلة المنتج",
        text: "اتسع نطاق العمل إلى منتجات رقمية ذات مستخدمين فعليين، تجمع بين تجربة الاستخدام ومعالجة البيانات والتشغيل المستمر.",
        note: "التعامل مع المنتج بوصفه خدمة مستمرة لا مجرد إصدار أول.",
      },
      {
        title: "المنصات الحكومية",
        period: "مرحلة المنصات",
        text: "تضمنت التجربة خدمات ومنصات حكومية واسعة الاستخدام، تحتاج إلى صلاحيات دقيقة وتكامل بين جهات متعددة.",
        note: "العمل على أنظمة تتطلب موثوقية وسياقاً تشغيلياً واضحاً.",
      },
      {
        title: "الاستشارات التقنية",
        period: "مرحلة النضج",
        text: "تركزت المسؤوليات على تحليل الاحتياج، صياغة الرؤية التقنية، تنظيم فرق العمل، ومتابعة المشاريع حتى التشغيل.",
        note: "ربط القرار التقني باحتياجات الأعمال والقدرة على التنفيذ.",
      },
    ],
    sectorsEyebrow: "تنوع بيئات العمل",
    sectorsTitle: "القطاعات التي شملتها الخبرة",
    sectors: [
      ["القطاع الحكومي", "تطوير أنظمة ومنصات لخدمة الجهات الحكومية وربط إجراءاتها التشغيلية."],
      ["القطاع الخاص", "بناء منتجات رقمية وحلول أعمال للمؤسسات والشركات."],
      ["التعليم والتدريب", "إعداد محتوى وتدريب وبناء أدوات تساعد على تنظيم المعرفة والبيانات."],
      ["الصناعة", "تطوير أنظمة تشغيل وإدارة ومتابعة للمؤسسات ذات العمليات اليومية."],
      ["الخدمات الرقمية", "العمل على منتجات تعتمد على البيانات والاستخدام المتكرر من المستخدمين."],
    ],
    projectTypesEyebrow: "طبيعة المشاريع",
    projectTypesTitle: "أنواع الأعمال التي تشكلت من خلالها الخبرة",
    projectTypesDescription:
      "لا يعرض هذا القسم أسماء المشاريع، بل يوضح المجالات التي تكررت فيها الممارسة العملية عبر مراحل مختلفة.",
    projectTypes: [
      "الأنظمة المؤسسية",
      "المنصات الحكومية",
      "المنتجات الرقمية",
      "أنظمة ERP",
      "OCR",
      "ذكاء الأعمال",
      "لوحات المعلومات",
      "تكامل الأنظمة",
      "الذكاء الاصطناعي التطبيقي",
    ],
    expertiseEyebrow: "مجالات الخبرة",
    expertiseTitle: "خبرات تشكلت عبر مشاريع متنوعة",
    expertiseDescription:
      "تكررت هذه المجالات في أكثر من بيئة عمل، من تحليل الاحتياج وتصميم النظام إلى البناء والتشغيل والتحسين.",
    toolsEyebrow: "الأدوات والتقنيات",
    toolsTitle: "تقنيات ظهرت ضمن مسارات العمل",
    contactEyebrow: "التواصل",
    contactTitle: "نقطة انطلاق مناسبة للنقاش",
    contactText:
      "تكون فرص التعاون أوضح عندما تبدأ من وصف المشكلة وسياق العمل، ثم تحديد ما يحتاجه النظام أو المنتج ليصبح قابلاً للتشغيل.",
    contactAction: "التواصل",
  },
  en: {
    introTitle: "Professional Snapshot",
    introText:
      "The experience has extended across education and training, private-sector work, government entities, industry, and digital services. The work has covered enterprise systems, government platforms, passport systems, digital products such as ESH3ARK, ERP solutions, dashboards, and system integration. This background was shaped through operational projects that required understanding procedures and turning them into usable, maintainable systems.",
    stationsTitle: "Stations",
    stations: [
      "University of Khartoum",
      "Bayan University",
      "National Training Council",
      "White Nile Sugar Company",
      "Shams Al-Edara Company",
      "Kashta Lab",
      "General Directorate of Passports and Immigration",
      "Commission for Refugees",
      "Ministry of Digital Transformation and Telecommunications",
    ],
    journeyEyebrow: "Professional Journey",
    journeyTitle: "Stations Along the Path of Experience",
    journey: [
      {
        title: "Education and Training",
        period: "Foundation",
        text: "The experience started in education and training environments, with exposure to content, databases, and user needs.",
        note: "Built a foundation in simplifying knowledge and turning it into usable tools.",
      },
      {
        title: "Software Development",
        period: "Build Stage",
        text: "The work moved into operational applications connected to databases, reporting, and day-to-day institutional needs.",
        note: "Shifted from programming as a skill to building solutions tied to workflow.",
      },
      {
        title: "Enterprise Systems",
        period: "Scale Stage",
        text: "The work included resource, procedure, and workflow modules that turned scattered operations into traceable models.",
        note: "Expanded the experience toward systems serving more than one department or function.",
      },
      {
        title: "Digital Products",
        period: "Product Stage",
        text: "The scope expanded into products with real users, combining user experience, data processing, and continuous operation.",
        note: "Treated products as continuing services, not only first releases.",
      },
      {
        title: "Government Platforms",
        period: "Platform Stage",
        text: "The experience included high-usage government services and platforms requiring permissions and multi-entity integration.",
        note: "Worked on systems that require reliability and clear operational context.",
      },
      {
        title: "Technical Advisory",
        period: "Maturity Stage",
        text: "Responsibilities focused on needs analysis, technical direction, team organization, and following projects through operation.",
        note: "Connected technical decisions to business needs and execution capacity.",
      },
    ],
    sectorsEyebrow: "Work Environments",
    sectorsTitle: "Sectors Covered by the Experience",
    sectors: [
      ["Government", "Systems and platforms serving public entities and connected procedures."],
      ["Private Sector", "Digital products and business solutions for companies and institutions."],
      ["Education and Training", "Content, training, and tools for organizing knowledge and data."],
      ["Industry", "Operational and management systems for institutions with daily workflows."],
      ["Digital Services", "Products that depend on data and repeated user interaction."],
    ],
    projectTypesEyebrow: "Project Nature",
    projectTypesTitle: "Types of Work That Shaped the Experience",
    projectTypesDescription:
      "This section does not list project names; it shows the recurring areas of practical work across different stages.",
    projectTypes: [
      "Enterprise systems",
      "Government platforms",
      "Digital products",
      "ERP systems",
      "OCR",
      "Business intelligence",
      "Dashboards",
      "System integration",
      "Applied AI",
    ],
    expertiseEyebrow: "Experience Areas",
    expertiseTitle: "Experience Shaped Through Varied Projects",
    expertiseDescription:
      "These areas appeared repeatedly across work environments, from needs analysis and system design to building, operating, and improving.",
    toolsEyebrow: "Tools and Technologies",
    toolsTitle: "Technologies Used Across Work Tracks",
    contactEyebrow: "Contact",
    contactTitle: "A Practical Starting Point for Discussion",
    contactText:
      "A useful conversation usually starts with the problem and operating context, then defines what the system or product needs in order to become usable.",
    contactAction: "Contact",
  },
};
