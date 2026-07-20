import type { Project } from "./types";

export const enProjects: Project[] = [
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
