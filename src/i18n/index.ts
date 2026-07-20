import { awards as arAwards, education as arEducation, recommendations as arRecommendations } from "@/data/evidence";
import { experience as arExperience } from "@/data/experience";
import { expertise as arExpertise, keywordGroups as arKeywordGroups, relatedExperience as arRelatedExperience, skillGroups as arSkillGroups } from "@/data/expertise";
import { projects as arProjects, type Project } from "@/data/projects";
import { availableFor as arAvailableFor, executiveScale as arExecutiveScale, framework as arFramework, impactMetrics as arImpactMetrics, principles as arPrinciples, site as arSite } from "@/data/site";

export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

export function isLocale(value: string | undefined): value is Locale {
  return value === "ar" || value === "en";
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ar";
}

export function getDir(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export function localizePath(path: string, locale: Locale) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === "ar") {
    return cleanPath.replace(/^\/en(?=\/|$)/, "") || "/";
  }
  const withoutLocale = cleanPath.replace(/^\/en(?=\/|$)/, "") || "/";
  return withoutLocale === "/" ? "/en/" : `/en${withoutLocale}`;
}

export function alternateLocalePath(pathname: string, locale: Locale) {
  return localizePath(pathname, locale === "ar" ? "en" : "ar");
}

const ui = {
  ar: {
    skipToContent: "الانتقال إلى المحتوى",
    mainNavigation: "التنقل الرئيسي",
    darkMode: "تبديل الوضع الداكن",
    openMenu: "فتح القائمة",
    switchLanguage: "Switch to English",
    languageLabel: "English",
    details: "دراسة الحالة",
    downloadFile: "تحميل الملف",
    project: "المشروع",
    fields: {
      organization: "الجهة",
      role: "الدور",
      period: "الفترة",
      overview: "نبذة",
      projectOverview: "نظرة عامة على المشروع",
      technologies: "التقنيات المستخدمة",
      keyFeatures: "الخصائص الرئيسية",
      responsibilities: "المسؤوليات",
      impact: "الأثر",
      businessImpact: "الأثر المؤسسي",
      problem: "المشكلة",
      solution: "الحل",
      results: "النتائج",
      projectLink: "رابط المشروع"
    },
    actions: {
      viewProjects: "عرض المشاريع",
      downloadResume: "تحميل السيرة",
      contact: "التواصل",
      atsResume: "عرض نسخة ATS"
    }
  },
  en: {
    skipToContent: "Skip to content",
    mainNavigation: "Main navigation",
    darkMode: "Toggle dark mode",
    openMenu: "Open menu",
    switchLanguage: "التبديل إلى العربية",
    languageLabel: "العربية",
    details: "Case Study",
    downloadFile: "Download File",
    project: "Project",
    fields: {
      organization: "Organization",
      role: "Role",
      period: "Period",
      overview: "Overview",
      projectOverview: "Project Overview",
      technologies: "Technologies",
      keyFeatures: "Key Features",
      responsibilities: "Responsibilities",
      impact: "Impact",
      businessImpact: "Business Impact",
      problem: "Problem",
      solution: "Solution",
      results: "Results",
      projectLink: "Project Link"
    },
    actions: {
      viewProjects: "View Projects",
      downloadResume: "Download Resume",
      contact: "Contact",
      atsResume: "View ATS Version"
    }
  }
} as const;

const navigation = {
  ar: [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "الملف المهني" },
    { href: "/experience", label: "الخبرة المهنية" },
    { href: "/projects", label: "أبرز المشاريع" },
    { href: "/expertise", label: "مجالات الخبرة" },
    { href: "/education", label: "التعليم" },
    { href: "/awards", label: "الجوائز والثناءات" },
    { href: "/contact", label: "التواصل" }
  ],
  en: [
    { href: "/en/", label: "Home" },
    { href: "/en/about", label: "Professional Profile" },
    { href: "/en/experience", label: "Professional Experience" },
    { href: "/en/projects", label: "Featured Projects" },
    { href: "/en/expertise", label: "Areas of Expertise" },
    { href: "/en/education", label: "Education" },
    { href: "/en/awards", label: "Awards and Commendations" },
    { href: "/en/contact", label: "Contact" }
  ]
} as const;

const enSite = {
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

const enImpactMetrics = [
  { value: "20+", label: "Years of experience" },
  { value: "1.5M+", label: "Financial notifications processed" },
  { value: "130K+", label: "Registered organizations" },
  { value: "19", label: "Government entities connected through Baldna Platform" },
  { value: "3M+", label: "Passport printing status inquiries" },
  { value: "500K+", label: "Citizens served through the online booking system" },
  { value: "10K+", label: "Foreign resident files managed digitally" }
];

const enExecutiveScale = [
  "National government platforms",
  "Enterprise ERP systems",
  "AI-powered OCR solutions",
  "Government integration",
  "Business process automation",
  "Decision support systems"
];

const enAvailableFor = [
  "Technical consulting",
  "Systems engineering",
  "Digital transformation",
  "Technical team leadership",
  "Enterprise solution design",
  "CTO opportunities"
];

const enPrinciples = [
  "Business leads technology: start with the operating model and user journey before the database.",
  "Solve root causes, not symptoms: simplify the process before writing the software solution.",
  "Simplicity is an engineering advantage: good products remain maintainable years later.",
  "Every dashboard should lead to a clear operational decision."
];

const enFramework = ["Understand", "Analyze", "Simplify", "Design", "Validate", "Build", "Measure", "Improve"];

const enProjects: Project[] = [
  {
    slug: "esh3ark",
    name: "ESH3ARK System and Application",
    organization: "ESH3ARK Platform",
    role: "Founder / System Architect / Lead Developer",
    period: "Documented among current projects",
    type: "AI-powered business notification platform",
    summary: "A system and application for managing financial and operational notifications for organizations, with OCR and practical AI support for document and data processing.",
    objective: "Enable organizations to track financial notifications and transactions in a structured, scalable way.",
    overview: "ESH3ARK turns scattered notifications and documents into manageable data flows for tracking and analysis, with an organization-focused user experience.",
    responsibilities: ["Founded the product concept and defined its operational scope.", "Designed the system architecture and core data flows.", "Led application and backend service development.", "Integrated OCR and AI capabilities for data processing."],
    technologies: ["Python", "Django", "PostgreSQL", "OCR", "AI", "REST APIs"],
    keyFeatures: ["Financial notification management", "Organization registration", "Document processing", "Monitoring dashboards", "User permissions"],
    results: ["Processed more than 1.5M financial notifications", "Registered more than 130K organizations", "Implemented AI-powered OCR solutions"],
    businessImpact: {
      problem: "Organizations needed a structured way to follow scattered financial notifications and data.",
      solution: "A platform that collects, organizes, and converts documents into trackable data.",
      impact: "Improved the ability of organizations to manage financial notifications and process large volumes of data."
    },
    visual: "notifications",
    featured: true
  },
  {
    slug: "baldna-platform",
    name: "Baldna Platform",
    organization: "Ministry of Digital Transformation and Telecommunications - Sudan",
    role: "Technical Director",
    period: "2024 - Present",
    type: "National digital transformation platform",
    summary: "A national government platform for data and transaction exchange, connecting economic-sector entities through a unified digital environment.",
    objective: "Support national digital transformation through a unified platform for government integration and digital service management.",
    overview: "Baldna reduces isolation between government systems and enables structured, secure data and transaction exchange between institutions.",
    responsibilities: ["Led development of the platform and government services.", "Analyzed government transaction procedures and converted them into digital flows.", "Supported production operation and technical stability.", "Supported user training and onboarding for beneficiary institutions."],
    technologies: ["Python", "Django REST Framework", "PostgreSQL", "Linux", "Nginx", "Redis", "Celery"],
    keyFeatures: ["Government integrations", "Data management", "Digital services", "REST APIs", "Production operations"],
    results: ["Connected 19 government sector entities", "Operated the platform in production", "Automated transaction exchange procedures"],
    businessImpact: {
      problem: "Government data and transactions were fragmented across multiple institutions.",
      solution: "A unified platform for exchanging data, services, and government transactions.",
      impact: "Improved government integration and reduced reliance on scattered paper-based procedures."
    },
    visual: "platform",
    featured: true
  },
  {
    slug: "foreigners-management",
    name: "Foreigners Transactions System",
    organization: "General Directorate of Passports and Immigration - Ministry of Interior",
    role: "System Designer / Lead Developer",
    period: "2023 - Present",
    type: "Sovereign government system",
    summary: "A sovereign system for managing foreign resident transactions in Sudan and connecting their files to digital procedures, tracking, and permissions.",
    objective: "Organize foreign resident transactions and reduce dependence on paper processing in a sensitive government environment.",
    overview: "The system handles the lifecycle of foreigners transactions, from registration and follow-up to file and permission management.",
    responsibilities: ["Designed the main workflow of the system.", "Developed digital services and databases.", "Implemented permission models suited to the operating environment.", "Supported operations teams during actual use."],
    technologies: ["Python", "Django", "SQL databases", "Application security", "Permissions management"],
    keyFeatures: ["Foreign resident file management", "Transaction tracking", "Operational permissions", "Reports", "Electronic services"],
    results: ["Managed more than 10,000 foreign resident files", "Digitized a core part of foreigners affairs procedures"],
    businessImpact: {
      problem: "Foreign resident files and transactions were difficult to manage through paper or scattered processes.",
      solution: "A centralized system for files, transactions, and permissions.",
      impact: "Improved operational control over files and enabled digital follow-up of transactions."
    },
    visual: "security",
    featured: true
  },
  {
    slug: "passport-booking",
    name: "Online Passport Services Booking System",
    organization: "General Directorate of Passports and Immigration - Ministry of Interior",
    role: "System Designer / Lead Developer",
    period: "2023 - Present",
    type: "Citizen e-services platform",
    summary: "A system for managing passport service appointments, organizing visitor movement, and linking online booking to operational procedures.",
    objective: "Organize demand for passport services and reduce congestion inside service centers.",
    overview: "The system moves appointment management from traditional procedures into an electronic service that supports both citizens and the operating authority.",
    responsibilities: ["Designed the booking and appointment management mechanism.", "Developed service interfaces and databases.", "Supported integration with related services and systems.", "Tracked the system impact on visitor flow."],
    technologies: ["Python", "Django", "PostgreSQL", "Web applications", "Workflow automation"],
    keyFeatures: ["Appointment management", "Online booking", "Visitor organization", "Operational integrations", "Usage reports"],
    results: ["Served more than 500,000 citizens", "Organized visitor movement through prior booking"],
    businessImpact: {
      problem: "Service centers faced congestion and difficulty organizing visitors without a digital mechanism.",
      solution: "An online booking system that manages appointments and regulates visitor flow.",
      impact: "Improved service delivery efficiency and the experience of citizens and operations teams."
    },
    visual: "calendar",
    featured: true
  },
  {
    slug: "passport-inquiry",
    name: "Passport Printing Status Inquiry System",
    organization: "General Directorate of Passports and Immigration - Ministry of Interior",
    role: "Developer / Digital Service Engineer",
    period: "2023 - Present",
    type: "Government inquiry service",
    summary: "An electronic service that allows citizens to follow passport printing status without manually visiting the authority.",
    objective: "Provide a direct digital inquiry channel for citizens and reduce pressure on service centers.",
    overview: "The service provides high-volume inquiry access linked to passport status data and supports operations teams by reducing repeated requests.",
    responsibilities: ["Developed the digital inquiry service.", "Supported service stability under high usage.", "Connected the service to printing status data.", "Tracked usage and operations indicators."],
    technologies: ["Python", "Django", "SQL databases", "Web services"],
    keyFeatures: ["Instant inquiry", "Printing status data connection", "Citizen interface", "High-volume service"],
    results: ["Processed more than 3,000,000 inquiry operations"],
    businessImpact: {
      problem: "Citizens needed repeated visits to know passport printing status.",
      solution: "A direct electronic service for status inquiry.",
      impact: "Reduced pressure on service centers and made information easier for citizens to access."
    },
    visual: "data"
  },
  {
    slug: "training-database",
    name: "Sudan Training Database System",
    organization: "National Training Council",
    role: "Project Manager / Information Systems Lead",
    period: "2010 - 2013",
    type: "National information system",
    summary: "A system for managing training and training-institution data in Sudan and supporting national capacity-building decisions.",
    objective: "Establish a national training database that supports planning and follow-up.",
    overview: "The project transformed training data from scattered sources into a centralized information system for management and analysis.",
    responsibilities: ["Managed the project from initiation to operation.", "Established the technical team.", "Managed the statistics and information function.", "Linked data to planning needs."],
    technologies: ["Database design", "Information systems", "Reporting", "Decision support"],
    keyFeatures: ["National database", "Reports", "Training institution management", "Decision support"],
    results: ["Built the national training data system", "Won Best E-Government Project in 2012"],
    businessImpact: {
      problem: "Training data was fragmented and indicators supporting planning were weak.",
      solution: "A centralized information system for training and training institutions.",
      impact: "Improved the council's ability to manage training information and make data-driven decisions."
    },
    visual: "data"
  },
  {
    slug: "snso-erp",
    name: "SNSO Resource Management System",
    organization: "Shams Al-Edara Company - Saudi Arabia",
    role: "IT Manager / ERP Contributor",
    period: "2014 - 2019",
    type: "Enterprise ERP system",
    summary: "An enterprise system for managing resources and operations in a private-sector environment.",
    objective: "Transform resource and administration processes into ERP modules that can be operated and monitored.",
    overview: "The system covered operational areas including resources, finance, planning, documents, and workflow.",
    responsibilities: ["Contributed to building the system.", "Established the IT department.", "Established the team and Sudan branch.", "Supported workflow customization inside the system."],
    technologies: ["ERP", "HR", "Finance", "Workflow", "CRM", "Inventory"],
    keyFeatures: ["HR", "Finance", "Planning", "Workflow", "Business documents"],
    results: ["Established the IT function", "Contributed to resource management system development", "Built a supporting technical team"],
    businessImpact: {
      problem: "The organization needed to manage multiple enterprise operations in one system.",
      solution: "ERP modules covering the core operational functions.",
      impact: "Improved process organization and connected departments, documents, and workflows in a unified system."
    },
    visual: "erp"
  }
];

const enExperience = [
  {
    title: "Technical Director",
    organization: "Baldna Platform - Ministry of Digital Transformation and Telecommunications",
    country: "Sudan",
    period: "2024 - Present",
    focus: "Government platforms, data integration, sovereign transactions",
    highlight: "Designed and operated a national government integration platform.",
    summary: "Technical leadership for a national government platform designed to connect economic-sector institutions and exchange government data and transactions through a unified platform.",
    responsibilities: ["Led development of Baldna for government data and transaction exchange.", "Analyzed government transaction procedures and converted them into digital workflows.", "Supported production operation and technical stability.", "Trained users and supported operations teams during platform adoption."],
    projects: ["Government data and transaction exchange platform (Baldna)"],
    tags: ["Government platforms", "Integration", "REST APIs", "PostgreSQL", "Linux"]
  },
  {
    title: "Software Development Consultant",
    organization: "Commission for Refugees - Ministry of Interior",
    country: "Sudan",
    period: "2024 - 2025",
    focus: "IT governance, department setup, project planning",
    highlight: "Built the technical foundation for IT governance and project execution in the public sector.",
    summary: "Established a technical vision for managing sensitive government files and projects, turning institutional needs into executable policies and plans.",
    responsibilities: ["Built an IT vision connected to actual business needs.", "Prepared the IT policy as a reference for department and project setup.", "Formed the team and defined operational and technical responsibilities.", "Established the technical project path and supervised technology budget priorities."],
    projects: ["Technical project setup and IT governance"],
    tags: ["IT governance", "Planning", "Team building", "Public sector"]
  },
  {
    title: "Systems Developer",
    organization: "General Directorate of Passports and Immigration - Ministry of Interior",
    country: "Sudan",
    period: "2023 - Present",
    focus: "Citizen services, sovereign systems, security and permissions",
    highlight: "Designed and delivered national-scale government digital transformation systems.",
    summary: "Developed digital service systems related to passports and immigration, focused on reducing operational pressure, managing permissions, and maintaining high-use service stability.",
    responsibilities: ["Developed the Foreigners Transactions System to manage more than 10,000 files in Sudan.", "Built electronic booking and inquiry services serving more than 500,000 citizens and processing more than 3,000,000 inquiries.", "Supported digitization of 3,600 officer and non-commissioned officer files through the force affairs system.", "Applied permission and application security models suitable for sovereign systems."],
    projects: ["Foreigners Transactions System", "Online Booking System", "Passport Inquiry System", "Force Affairs Management System"],
    tags: ["National systems", "Security", "Django", "Citizen services", "Workflow automation"]
  },
  {
    title: "Chief Technology Officer (CTO)",
    organization: "Digital Plus Ltd.",
    country: "Sudan",
    period: "2022 - 2023",
    focus: "Technical leadership, digital products, enterprise services",
    highlight: "Led enterprise telecommunications and digital services projects.",
    summary: "Led the technical direction and built the service and product foundation for a technology company working in telecommunications and digital services.",
    responsibilities: ["Led technical strategy and product roadmap definition.", "Designed scalable digital service architecture for institutions and customers.", "Directed architecture, operations, and deployment decisions to support product stability.", "Built the technical team and delivery mechanism."],
    projects: ["Product development", "Team building"],
    tags: ["CTO", "Product roadmap", "VAS", "IVR", "Enterprise systems"]
  },
  {
    title: "IT Manager",
    organization: "Shams Al-Edara Company",
    country: "Saudi Arabia",
    period: "2014 - 2019",
    focus: "ERP, HR, accounting, planning",
    highlight: "Built and operated ERP systems covering HR, finance, planning, and workflow.",
    summary: "Established the IT function and contributed to the development of the SNSO resource and enterprise operations system in a cross-border work environment.",
    responsibilities: ["Established the IT department and technical team.", "Contributed to SNSO ERP modules covering resources, accounting, planning, and workflow.", "Supported workflow customization and conversion into operational modules.", "Established the Sudan branch and built the Sudanese team supporting development and operations."],
    projects: ["SNSO Resource Management System"],
    tags: ["ERP", "HR", "Finance", "Planning", "Workflow"]
  },
  {
    title: "Programmer and Systems Developer",
    organization: "White Nile Sugar Company",
    country: "Sudan",
    period: "2013 - 2014",
    focus: "Business applications, industry, operational processes",
    highlight: "Started building enterprise business applications for large industrial operations.",
    summary: "Developed operational systems for an industrial environment that required tracking daily processes and turning operational data into manageable records.",
    responsibilities: ["Developed the harvesting system to support agricultural production operations.", "Developed the fertilization system and connected its data to operational follow-up needs.", "Built the internal monitoring system to support process oversight.", "Handled database and reporting needs in an industrial environment."],
    projects: ["Harvesting and Fertilization System", "Internal Monitoring System"],
    tags: ["Manufacturing", "Business applications", "Database design", "Reporting"]
  },
  {
    title: "Systems Developer / Statistics and Information Manager",
    organization: "National Training Council",
    country: "Sudan",
    period: "2010 - 2013",
    focus: "Statistics, information systems, e-government",
    highlight: "Transformed national training data into an award-winning e-government information system.",
    summary: "Converted national training data from scattered files into a centralized information system supporting training institution management and decision-making.",
    responsibilities: ["Managed the Sudan Training Database project from initiation to operation.", "Established the technical team and distributed technical and statistical responsibilities.", "Managed the statistics and information function and linked data to planning needs.", "Contributed to the project winning Best E-Government Project in 2012."],
    projects: ["Sudan Training Database System"],
    tags: ["Statistics", "Information systems", "E-government", "Decision support"]
  }
];

const enExpertise = [
  { title: "Digital Product Engineering", summary: "Turning complex institutional and government needs into digital products with a clear roadmap and operating model.", proof: "Baldna Platform, passport e-services, and SNSO ERP.", items: ["Product vision", "Product roadmap", "MVP planning", "Feature prioritization", "Product architecture"] },
  { title: "Digital Transformation and Digital Government", summary: "Digitizing government procedures, citizen services, and transaction workflows that require stability, permissions, and measurable impact.", proof: "Connected 19 government institutions, served 500,000 citizens, and processed 3,000,000 inquiry operations.", items: ["Government platforms", "Citizen services", "Workflow automation", "System integration", "Public sector"] },
  { title: "Enterprise Systems Architecture", summary: "Designing scalable enterprise systems that connect databases, integrations, permissions, and workflows.", proof: "Ministry of Interior systems, SNSO ERP, and National Training Council systems.", items: ["System architecture", "Database design", "Integration design", "API design", "Workflow design", "Security design"] },
  { title: "Data and Business Intelligence", summary: "Building information systems, databases, and dashboards that support planning, monitoring, and decision-making.", proof: "Training database, kidney patient system, and reports for government and enterprise systems.", items: ["Data analysis", "KPI design", "Reporting", "Executive dashboards", "Decision support"] },
  { title: "Software Development", summary: "Developing web applications, backend services, and integration interfaces for reliable government and enterprise systems.", proof: "Django and REST APIs in active government platforms and operational services.", items: ["Python", "Django", "Django REST Framework", "PostgreSQL", "MySQL", "SQLite", "JavaScript", "Tailwind CSS"] },
  { title: "Applied Artificial Intelligence", summary: "Using OCR and large language models inside products when they deliver practical automation and data processing value.", proof: "Image-based data extraction, data analysis, and classification for digital product needs.", items: ["OCR", "Computer Vision", "OpenAI APIs", "LLMs", "Data classification"] }
];

const enRelatedExperience = [
  { title: "DevOps and Systems Operations", summary: "Designed and operated production infrastructure for government and enterprise systems focused on stability, permissions, backup, and operational monitoring.", tags: ["Docker", "CI/CD", "Ubuntu Server", "Nginx", "Gunicorn", "PostgreSQL", "Monitoring", "Security hardening"] },
  { title: "ERP and Enterprise Operations", summary: "Contributed to ERP modules covering HR, finance, planning, procurement, and workflow, including procedure customization and user training.", tags: ["ERP", "HR", "Finance", "Planning", "Payroll", "Procurement", "Workflow"] },
  { title: "HR and Accounting", summary: "Converted HR and accounting needs into trackable operational modules covering files, documents, permissions, and reports.", tags: ["HR systems", "Accounting", "Business documents", "Permissions", "Reporting"] },
  { title: "Planning and KPI Management", summary: "Led planning and operations initiatives that connected institutional data with KPIs and dashboards supporting project and operations management.", tags: ["Strategic planning", "KPI management", "Operational planning", "Project portfolio"] },
  { title: "Documentation and Professional Content", summary: "Produced technical and operational documents supporting system understanding and use, from requirements and API documentation to user guides and proposals.", tags: ["Technical documentation", "API documentation", "Business documentation", "User guides", "Proposal writing"] }
];

const enSkillGroups = [
  { title: "Core Technologies", items: ["Python", "Django", "PostgreSQL", "Linux", "Redis", "Docker"] },
  { title: "Enterprise Systems", items: ["ERP", "HR", "Accounting", "Planning", "Workflow", "Business process automation"] },
  { title: "Government Platforms", items: ["Digital transformation", "National platforms", "Government integration", "E-government"] },
  { title: "Artificial Intelligence", items: ["OCR", "Computer Vision", "Machine learning", "NLP"] },
  { title: "Technical Leadership", items: ["Solution architecture", "Technical leadership", "Team leadership", "Project management", "System design"] }
];

const enKeywordGroups = [
  { title: "Government Technology", items: ["National platforms", "E-government", "Citizen services", "Government integration"] },
  { title: "Enterprise Systems", items: ["ERP", "HR", "Finance", "Workflow", "Business documents"] },
  { title: "Cloud and DevOps", items: ["Linux", "Nginx", "Gunicorn", "Docker", "CI/CD", "Monitoring"] },
  { title: "Artificial Intelligence", items: ["OCR", "Computer Vision", "Machine learning", "NLP", "OpenAI APIs"] },
  { title: "Leadership", items: ["CTO", "Solution architecture", "Technical advisory", "Team leadership"] },
  { title: "Business Transformation", items: ["Digital transformation", "Process automation", "Decision support", "KPI management"] }
];

const enAwards = [
  { title: "Commendation from the Director General of Police Forces", year: "2024", organization: "Sudan Police Forces Headquarters - Director General Office", project: "Foreigners Transactions System", description: "Official commendation for technical efforts in modernizing the foreigners system and supporting digital transformation in passports and immigration procedures.", image: "/images/evidence/police-commissioner-commendation.png" },
  { title: "Commendation from the Electronic Passport Production Center", year: "2024", organization: "General Directorate of Passports and Immigration - Electronic Passport Production Center", project: "Passports and Immigration Systems and Foreigners System", description: "Commendation letter recognizing the contribution to modernizing systems at the General Directorate of Passports and Immigration, especially the foreigners system.", image: "/images/evidence/police-passport-center-commendation.png" },
  { title: "Best E-Government Project", year: "2012", organization: "Sudanese E-Government Award", project: "Sudan Training Database System", description: "Recognition for transforming national training data into an information system that supports management and planning.", image: "/images/evidence/egov-award-ceremony-1.jpg" },
  { title: "Best E-Government Project", year: "2012", organization: "Sudanese E-Government Award", project: "War-Affected Persons Database in Sudan", description: "Recognition for building a database serving a nonprofit organization and supporting sensitive institutional information management.", image: "/images/evidence/egov-award-ceremony-2.jpg" },
  { title: "Finalist Recognition", year: "Documented", organization: "ESCWA Arabic Content Award", project: "Al-Sanarir Education Services", description: "Recognition of the project's ability to provide digital educational content and services in a specialized regional competition." }
];

const enRecommendations = [
  { title: "Recommendation Letter", organization: "University of Khartoum - Faculty of Mathematical Sciences", author: "Dean of the Faculty", date: "April 7, 2009", evidence: "Documents programming competence, ability to apply solutions, discipline, and efficient delivery." },
  { title: "Experience Certificate", organization: "Department of Psychology - University of Khartoum", author: "Department", date: "November 7, 2007", evidence: "Documents delivery of training courses, preparation of lectures and electronic exams, and computer maintenance." },
  { title: "Service Certificate", organization: "Bayan College for Science and Technology", author: "College", date: "September 15, 2009", evidence: "Documents work as a programmer and development of administrative and academic systems." },
  { title: "Service Certificate", organization: "National Training Council", author: "Council", date: "August 29, 2018", evidence: "Documents work as project manager for the training database system and manager of statistics and information." },
  { title: "Experience Certificate", organization: "White Nile Sugar Company", author: "IT Department", date: "August 29, 2018", evidence: "Documents work as a programmer in the IT department." }
];

const enEducation = [
  { title: "Bachelor of Science with Honours in Statistics and Computer Science", institution: "University of Khartoum - Faculty of Mathematical Sciences", meta: "Bachelor of Science (Honours), Statistics and Computer Science", date: "July 21, 2008" },
  { title: "Risk Management for Information Technology Systems", institution: "University of Khartoum - Faculty of Mathematical Sciences - Training Unit", meta: "Information technology systems risk management", date: "February 06 - 11, 2012" },
  { title: "Designing Computer Databases in Accounting", institution: "University of Khartoum - Faculty of Mathematical Sciences - Training Unit", meta: "Database design in accounting", date: "January 19 - 27, 2014" }
];

const pageCopy = {
  ar: {
    home: {
      awardsEyebrow: "الجوائز والثناءات",
      awardsTitle: "الجوائز والثناءات",
      recommendationsEyebrow: "التوصيات",
      recommendationsTitle: "التوصيات المهنية",
      impactEyebrow: "أبرز الإنجازات",
      impactTitle: "أرقام تعكس حجم الأنظمة لا مجرد سنوات خبرة",
      impactDescription: "مؤشرات مرتبطة بمشاريع ومنصات فعلية، وتوضح حجم التشغيل والانتشار والأثر.",
      projectsEyebrow: "أبرز المشاريع",
      projectsTitle: "المشاريع المختارة",
      projectsDescription: "بطاقات مستقلة للمشاريع الوطنية والمؤسسية الكبيرة، تعرض الجهة والدور والتقنيات والأثر المؤسسي بصيغة موحدة.",
      careerEyebrow: "المسيرة المهنية",
      careerTitle: "من العمل التقني والأكاديمي إلى المنصات الحكومية",
      careerDescription: "تراكمت الخبرة عبر التعليم، التدريب، الصناعة، القطاع الخاص، وزارة الداخلية، ووزارة التحول الرقمي والاتصالات.",
      trustLabel: "مؤشر الثقة التنفيذي"
    },
    about: { title: "الملف المهني", description: "الملف المهني لأبوبكر الطائف ومنهج تطور خبرته في هندسة المنتجات الرقمية والتحول الرقمي.", heroTitle: "خبرة مهنية مبنية على البيانات والبساطة الهندسية", heroDescription: "مسار يجمع بين الإحصاء وعلوم الحاسوب، تطوير الأنظمة، بناء الفرق، وإدارة منصات حكومية ومؤسسية ذات أثر قابل للقياس.", body1: "أعمل في هندسة المنتجات والمنصات الرقمية، بخلفية تجمع الإحصاء وعلوم الحاسوب وخبرة عملية في بناء أنظمة حكومية ومؤسسية قابلة للتوسع.", body2: "بدأت الرحلة من الأنظمة الأكاديمية والتدريبية، ثم تطورت إلى إدارة مشاريع معلومات وطنية، وبناء أنظمة صناعية ومؤسسية، وتصميم خدمات حكومية رقمية عالية الاستخدام، وصولًا إلى قيادة الجانب التقني في منصة بلدنا لتبادل البيانات والمعاملات الحكومية.", capabilitiesEyebrow: "القدرات المحورية", capabilitiesTitle: "القدرات المهنية", capabilities: [["تحويل التعقيد إلى بساطة", "إعادة هندسة الإجراءات التشغيلية والأنظمة القديمة غير القابلة للتوسع."], ["هندسة الحلول المؤسسية", "ربط متطلبات الأعمال بنماذج تقنية مستقرة وممتدة العمر."], ["القيادة وبناء الفرق", "تأسيس إدارات تقنية المعلومات وصياغة إستراتيجيات تقنية للقطاعين العام والخاص."]] },
    experience: { title: "الخبرة المهنية", description: "المسيرة المهنية المرتبطة بالمنتجات الرقمية والمنصات الحكومية والأنظمة المؤسسية.", heroTitle: "خبرة مهنية عبر الحكومة، الصناعة، التعليم، والقطاع الخاص", heroDescription: "كل محطة مهنية تعرض المسؤوليات والمشاريع التي دعمت بناء القدرة في التحول الرقمي وهندسة المنتجات." },
    projects: { title: "أبرز المشاريع", description: "دراسات حالة لمشاريع حكومية ومؤسسية موثقة بالأدوار والنتائج والأرقام.", heroTitle: "مشاريع وطنية ومؤسسية موثقة بالأثر", heroDescription: "كل بطاقة تعرض اسم المشروع، الجهة، الفترة، النبذة، الدور، أبرز التقنيات، والأثر بصيغة موحدة." },
    expertise: { title: "مجالات الخبرة", description: "إطار عمل هندسة القيمة الرقمية ومجالات الخبرة الفنية والإدارية.", heroTitle: "منهجية مهنية تبدأ بالأعمال وتنتهي بالتحسين", heroDescription: "منهجية هندسة القيمة الرقمية تربط الفهم والتحليل والتصميم بالبناء والقياس والتحسين المستمر.", relatedTitle: "مجالات الخبرة", skillsTitle: "المهارات", keywordsTitle: "الكلمات المفتاحية حسب المجال" },
    awards: { title: "الجوائز والثناءات", description: "جوائز وثناءات رسمية وتوصيات مهنية مرتبطة بمشاريع وجهات موثقة.", heroTitle: "الجوائز والثناءات", heroDescription: "جوائز، خطابات شكر، شهادات تقدير، وثناءات رسمية مرتبطة بمشاريع وجهات وسنوات.", awardsTitle: "الجوائز والثناءات", recommendationsTitle: "التوصيات المهنية" },
    recommendations: { title: "التوصيات", description: "شهادات وتوصيات مهنية موثقة من جهات تعليمية وحكومية وصناعية.", heroTitle: "التوصيات المهنية", heroDescription: "خطابات تزكية وشهادات خدمة مرتبطة بجهة وتاريخ وطبيعة عمل موثقة." },
    education: { title: "التعليم والشهادات", description: "المؤهلات الأكاديمية والدورات المهنية الموثقة في قاعدة المعرفة المهنية.", heroTitle: "أساس أكاديمي يجمع الإحصاء وعلوم الحاسوب", heroDescription: "هذا الجمع بين البيانات والحوسبة شكّل طريقة التعامل مع الأنظمة المعقدة وبناء المنتجات القابلة للقياس." },
    contact: { title: "التواصل", description: "قنوات التواصل المباشرة مع أبوبكر الطائف وملفات السيرة الذاتية.", heroTitle: "معلومات التواصل", heroDescription: "قنوات التواصل المباشر ومجالات التعاون المهني في الاستشارات التقنية، هندسة الأنظمة، والتحول الرقمي.", availableTitle: "مجالات التعاون المهني" },
    ats: { title: "نسخة ATS", description: "نسخة نصية منظمة من السيرة الذاتية لأبوبكر الطائف مهيأة لأنظمة تتبع المتقدمين.", impact: "الأثر", experience: "الخبرة", projects: "مشاريع مختارة" },
    resumePdf: { title: "السيرة الذاتية PDF", description: "تحميل السيرة الذاتية بصيغة PDF.", heroTitle: "السيرة الذاتية بصيغة PDF", heroDescription: "نسخة قابلة للتحميل من السيرة الذاتية المرفقة بالمشروع." }
  },
  en: {
    home: {
      awardsEyebrow: "Awards and Commendations",
      awardsTitle: "Awards and Commendations",
      recommendationsEyebrow: "Recommendations",
      recommendationsTitle: "Professional Recommendations",
      impactEyebrow: "Key Achievements",
      impactTitle: "Numbers that show system scale, not only years of experience",
      impactDescription: "Indicators tied to real projects and platforms, showing operational scale, reach, and impact.",
      projectsEyebrow: "Featured Projects",
      projectsTitle: "Selected Projects",
      projectsDescription: "Independent cards for major national and enterprise projects, showing organization, role, technologies, and business impact in a consistent format.",
      careerEyebrow: "Professional Journey",
      careerTitle: "From technical and academic work to government platforms",
      careerDescription: "Experience developed across education, training, industry, the private sector, the Ministry of Interior, and the Ministry of Digital Transformation and Telecommunications.",
      trustLabel: "Executive Trust Indicator"
    },
    about: { title: "Professional Profile", description: "The professional profile of Abubaker Altaif and the development of his experience in digital product engineering and digital transformation.", heroTitle: "A professional journey built on data and engineering simplicity", heroDescription: "A path combining statistics, computer science, systems development, team building, and the management of measurable government and enterprise platforms.", body1: "I work in digital product and platform engineering, with a background combining statistics, computer science, and hands-on experience building scalable government and enterprise systems.", body2: "The journey started with academic and training systems, then evolved into national information system projects, industrial and enterprise systems, high-volume government digital services, and technical leadership for Baldna Platform for government data and transaction exchange.", capabilitiesEyebrow: "Core Capabilities", capabilitiesTitle: "Professional Capabilities", capabilities: [["Turning complexity into simplicity", "Re-engineering operational procedures and legacy systems that cannot scale."], ["Enterprise solution engineering", "Connecting business requirements with stable, long-lived technical models."], ["Leadership and team building", "Establishing IT functions and shaping technical strategies for public and private sector organizations."]] },
    experience: { title: "Professional Experience", description: "Professional experience connected to digital products, government platforms, and enterprise systems.", heroTitle: "Professional experience across government, industry, education, and the private sector", heroDescription: "Each role highlights responsibilities and projects that built capacity in digital transformation and product engineering." },
    projects: { title: "Featured Projects", description: "Case studies for government and enterprise projects documented through roles, results, and numbers.", heroTitle: "National and enterprise projects documented by impact", heroDescription: "Each card presents the project name, organization, period, overview, role, key technologies, and impact in a consistent format." },
    expertise: { title: "Areas of Expertise", description: "Digital value engineering framework and technical and managerial areas of expertise.", heroTitle: "A professional framework that starts with business and ends with improvement", heroDescription: "The digital value engineering approach connects understanding, analysis, and design with building, measurement, and continuous improvement.", relatedTitle: "Areas of Expertise", skillsTitle: "Skills", keywordsTitle: "Keyword Groups by Area" },
    awards: { title: "Awards and Commendations", description: "Awards, official commendations, and professional recommendations tied to documented projects and organizations.", heroTitle: "Awards and Commendations", heroDescription: "Awards, thank-you letters, certificates of appreciation, and official commendations linked to projects, organizations, and years.", awardsTitle: "Awards and Commendations", recommendationsTitle: "Professional Recommendations" },
    recommendations: { title: "Recommendations", description: "Professional recommendations and certificates from educational, government, and industrial organizations.", heroTitle: "Professional Recommendations", heroDescription: "Recommendation letters and service certificates tied to an organization, date, and documented work." },
    education: { title: "Education and Certificates", description: "Academic qualifications and documented professional courses.", heroTitle: "An academic foundation combining statistics and computer science", heroDescription: "This combination of data and computing shaped the way complex systems are analyzed and measurable products are built." },
    contact: { title: "Contact", description: "Direct contact channels and resume files for Abubaker Altaif.", heroTitle: "Contact Information", heroDescription: "Direct contact channels and professional collaboration areas in technical consulting, systems engineering, and digital transformation.", availableTitle: "Professional Collaboration Areas" },
    ats: { title: "ATS Resume", description: "A structured text version of Abubaker Altaif's resume prepared for applicant tracking systems.", impact: "Impact", experience: "Experience", projects: "Selected Projects" },
    resumePdf: { title: "Resume PDF", description: "Download the resume in PDF format.", heroTitle: "Resume in PDF Format", heroDescription: "A downloadable copy of the resume attached to the project." }
  }
} as const;

const contactLabels = {
  ar: {
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    linkedIn: "LinkedIn",
    linkedInValue: "الملف المهني",
    gitHub: "GitHub",
    website: "الموقع",
    location: "الموقع الحالي"
  },
  en: {
    email: "Email",
    phone: "Phone",
    linkedIn: "LinkedIn",
    linkedInValue: "Professional Profile",
    gitHub: "GitHub",
    website: "Website",
    location: "Current Location"
  }
} as const;

export function getContent(locale: Locale) {
  const isEn = locale === "en";
  return {
    locale,
    dir: getDir(locale),
    ui: ui[locale],
    navigation: navigation[locale],
    site: isEn ? enSite : arSite,
    impactMetrics: isEn ? enImpactMetrics : arImpactMetrics,
    executiveScale: isEn ? enExecutiveScale : arExecutiveScale,
    availableFor: isEn ? enAvailableFor : arAvailableFor,
    principles: isEn ? enPrinciples : arPrinciples,
    framework: isEn ? enFramework : arFramework,
    projects: isEn ? enProjects : arProjects,
    experience: isEn ? enExperience : arExperience,
    expertise: isEn ? enExpertise : arExpertise,
    relatedExperience: isEn ? enRelatedExperience : arRelatedExperience,
    skillGroups: isEn ? enSkillGroups : arSkillGroups,
    keywordGroups: isEn ? enKeywordGroups : arKeywordGroups,
    awards: isEn ? enAwards : arAwards,
    recommendations: isEn ? enRecommendations : arRecommendations,
    education: isEn ? enEducation : arEducation,
    pages: pageCopy[locale],
    contactLabels: contactLabels[locale]
  };
}

export type PortfolioContent = ReturnType<typeof getContent>;
