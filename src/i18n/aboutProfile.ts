import type { Locale } from "./config";

type JourneyItem = {
  title: string;
  period: string;
  text: string;
  note: string;
};

type NamedText = [string, string];

type ContactCard = {
  id: "email" | "whatsapp" | "phone" | "linkedin" | "website" | "facebook";
  label: string;
  description: string;
  value: string;
  href: string;
  action: string;
  copied: string;
  copyValue?: string;
  external?: boolean;
};

const arWhatsAppMessage = encodeURIComponent(
  "مرحباً أبوبكر، اطلعت على موقعك وأرغب في مناقشة مشروع أو فرصة مهنية."
);
const enWhatsAppMessage = encodeURIComponent(
  "Hello Abubaker, I came across your website and would like to discuss a project or professional opportunity."
);

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
    contactSubtext: string;
    contactTopicsTitle: string;
    contactTopics: string[];
    directContactTitle: string;
    professionalPresenceTitle: string;
    contactNote: string;
    contactCards: ContactCard[];
    socialTitle: string;
    socialLinks: { label: string; href: string }[];
  }
> = {
  ar: {
    introTitle: "الملف المهني",
    introText:
      "امتدت الخبرة عبر بيئات عمل متعددة شملت التعليم والتدريب، والقطاع الخاص، والجهات الحكومية، والصناعة، والخدمات الرقمية. تنوعت الأعمال بين تطوير الأنظمة المؤسسية، والمنصات الحكومية، وأنظمة الجوازات، ومنتجات رقمية مثل إشعارك، وحلول ERP ولوحات معلومات وتكامل بين الأنظمة. تشكلت هذه الخبرة من ممارسة مباشرة لمشاريع تشغيلية تحتاج إلى فهم الإجراءات، وتحويلها إلى أنظمة قابلة للاستخدام والتطوير.",
    stationsTitle: "مؤسسات",
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
    journeyEyebrow: "التجربة المهنية",
    journeyTitle: "ابرز المجالات",
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
    sectorsEyebrow: "قطاعات العمل",
    sectorsTitle: "بيئات متعددة",
    sectors: [
      ["القطاع الحكومي", "تطوير أنظمة ومنصات لخدمة الجهات الحكومية وربط إجراءاتها التشغيلية."],
      ["القطاع الخاص", "بناء منتجات رقمية وحلول أعمال للمؤسسات والشركات."],
      ["التعليم والتدريب", "إعداد محتوى وتدريب وبناء أدوات تساعد على تنظيم المعرفة والبيانات."],
      ["الصناعة", "تطوير أنظمة تشغيل وإدارة ومتابعة للمؤسسات ذات العمليات اليومية."],
      ["الخدمات الرقمية", "العمل على منتجات تعتمد على البيانات والاستخدام المتكرر من المستخدمين."],
    ],
    projectTypesEyebrow: "مجالات العمل",
    projectTypesTitle: "أنواع المشاريع",
    projectTypesDescription: "",
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
    expertiseEyebrow: "خلاصة التجربة",
    expertiseTitle: "محاور مهنية",
    expertiseDescription: "",
    toolsEyebrow: "الأدوات والتقنيات",
    toolsTitle: "تقنيات مستخدمة",
    contactEyebrow: "التواصل",
    contactTitle: "لنبدأ بحوار مهني",
    contactText:
      "إذا كانت طبيعة الخبرة والمشاريع المعروضة في هذا الموقع تتوافق مع احتياجاتكم، فسيسعدني التعرف على مشروعكم ومناقشة أفضل السبل للمضي قدماً.",
    contactSubtext:
      "في هذه الحالات تساعد مناقشة السياق والأهداف والواقع التشغيلي على تحديد نقطة بداية عملية ومناسبة.",
    contactTopicsTitle: "موضوعات يكون فيها الحوار أكثر فائدة",
    contactTopics: [
      "التحول الرقمي المؤسسي",
      "تطوير الأنظمة القائمة",
      "إعادة هندسة الإجراءات",
      "المنصات والخدمات الرقمية",
      "تحليل التحديات التشغيلية",
    ],
    directContactTitle: "التواصل المباشر",
    professionalPresenceTitle: "الحضور المهني",
    contactNote:
      "يفضل أن تتضمن الرسالة نبذة عن المؤسسة، وطبيعة التحدي، والنظام أو الإجراء المعني، والنتيجة المطلوب الوصول إليها.",
    contactCards: [
      {
        id: "email",
        label: "البريد الإلكتروني",
        description: "للمراسلات المهنية ومناقشة المشاريع.",
        value: "altaif.bakri@gmail.com",
        href: "mailto:altaif.bakri@gmail.com",
        action: "نسخ",
        copied: "تم النسخ",
        copyValue: "altaif.bakri@gmail.com",
      },
      {
        id: "whatsapp",
        label: "واتساب",
        description: "للاستفسارات السريعة وبداية النقاش.",
        value: "+249 96 314 4047",
        href: `https://wa.me/249963144047?text=${arWhatsAppMessage}`,
        action: "فتح",
        copied: "تم نسخ الرقم",
        copyValue: "+249963144047",
        external: true,
      },
      {
        id: "phone",
        label: "الهاتف",
        description: "للمكالمات المباشرة عند الحاجة.",
        value: "+249 10 000 7732",
        href: "tel:+249100007732",
        action: "اتصال",
        copied: "تم نسخ الرقم",
        copyValue: "+249100007732",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        description: "للاطلاع على المسيرة المهنية والتواصل المهني.",
        value: "linkedin.com/in/bakrialtaif",
        href: "https://www.linkedin.com/in/bakrialtaif/",
        action: "زيارة",
        copied: "تم النسخ",
        external: true,
      },
      {
        id: "website",
        label: "الموقع الشخصي",
        description: "المشاريع، السيرة المهنية، وأحدث الأعمال.",
        value: "bakrialtaif.github.io",
        href: "https://bakrialtaif.github.io",
        action: "زيارة",
        copied: "تم النسخ",
        external: true,
      },
      {
        id: "facebook",
        label: "Facebook",
        description: "",
        value: "facebook.com/bakrialtaif",
        href: "https://web.facebook.com/bakrialtaif",
        action: "زيارة",
        copied: "تم النسخ",
        external: true,
      },
    ],
    socialTitle: "رابط ثانوي",
    socialLinks: [
      { label: "Facebook", href: "https://www.facebook.com/" },
    ],
  },
  en: {
    introTitle: "About",
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
    journeyEyebrow: "Professional Experience",
    journeyTitle: "Key Stages",
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
    sectorsEyebrow: "Work Sectors",
    sectorsTitle: "Different Environments",
    sectors: [
      ["Government", "Systems and platforms serving public entities and connected procedures."],
      ["Private Sector", "Digital products and business solutions for companies and institutions."],
      ["Education and Training", "Content, training, and tools for organizing knowledge and data."],
      ["Industry", "Operational and management systems for institutions with daily workflows."],
      ["Digital Services", "Products that depend on data and repeated user interaction."],
    ],
    projectTypesEyebrow: "Work Areas",
    projectTypesTitle: "Project Types",
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
    expertiseEyebrow: "Experience Summary",
    expertiseTitle: "Professional Themes",
    expertiseDescription:
      "These areas appeared repeatedly across work environments, from needs analysis and system design to building, operating, and improving.",
    toolsEyebrow: "Tools and Technologies",
    toolsTitle: "Technologies Used",
    contactEyebrow: "Contact",
    contactTitle: "Let's start a professional conversation",
    contactText:
      "If the experience and projects presented on this website align with your needs, I would be glad to learn more about your project and discuss the best way forward.",
    contactSubtext:
      "In these cases, discussing the context, goals, and operating reality helps identify a practical starting point.",
    contactTopicsTitle: "Topics Where Discussion Is Most Useful",
    contactTopics: [
      "Enterprise digital transformation",
      "Existing system development",
      "Process re-engineering",
      "Digital platforms and services",
      "Operational challenge analysis",
    ],
    directContactTitle: "Direct Contact",
    professionalPresenceTitle: "Professional Presence",
    contactNote:
      "It is useful for the message to include a short note about the organization, the nature of the challenge, the relevant system or process, and the intended outcome.",
    contactCards: [
      {
        id: "email",
        label: "Email",
        description: "For professional messages and project discussions.",
        value: "altaif.bakri@gmail.com",
        href: "mailto:altaif.bakri@gmail.com",
        action: "Copy",
        copied: "Copied",
        copyValue: "altaif.bakri@gmail.com",
      },
      {
        id: "whatsapp",
        label: "WhatsApp",
        description: "For quick questions and starting a discussion.",
        value: "+249 96 314 4047",
        href: `https://wa.me/249963144047?text=${enWhatsAppMessage}`,
        action: "Open",
        copied: "Number copied",
        copyValue: "+249963144047",
        external: true,
      },
      {
        id: "phone",
        label: "Phone",
        description: "For direct calls when needed.",
        value: "+249 10 000 7732",
        href: "tel:+249100007732",
        action: "Call",
        copied: "Number copied",
        copyValue: "+249100007732",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        description: "For professional background and networking.",
        value: "linkedin.com/in/bakrialtaif",
        href: "https://www.linkedin.com/in/bakrialtaif/",
        action: "Visit",
        copied: "Copied",
        external: true,
      },
      {
        id: "website",
        label: "Personal Website",
        description: "Projects, professional biography, and recent work.",
        value: "bakrialtaif.github.io",
        href: "https://bakrialtaif.github.io",
        action: "Visit",
        copied: "Copied",
        external: true,
      },
      {
        id: "facebook",
        label: "Facebook",
        description: "",
        value: "facebook.com/bakrialtaif",
        href: "https://web.facebook.com/bakrialtaif",
        action: "Visit",
        copied: "Copied",
        external: true,
      },
    ],
    socialTitle: "Secondary Link",
    socialLinks: [
      { label: "Facebook", href: "https://www.facebook.com/" },
    ],
  },
};
