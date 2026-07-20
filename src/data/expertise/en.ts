import type { ExpertiseItem, GroupItem, RelatedExperienceItem } from "./types";

export const enExpertise: ExpertiseItem[] = [
  { title: "Digital Product Engineering", summary: "Turning complex institutional and government needs into digital products with a clear roadmap and operating model.", proof: "Baldna Platform, passport e-services, and SNSO ERP.", items: ["Product vision", "Product roadmap", "MVP planning", "Feature prioritization", "Product architecture"] },
  { title: "Digital Transformation and Digital Government", summary: "Digitizing government procedures, citizen services, and transaction workflows that require stability, permissions, and measurable impact.", proof: "Connected 19 government institutions, served 500,000 citizens, and processed 3,000,000 inquiry operations.", items: ["Government platforms", "Citizen services", "Workflow automation", "System integration", "Public sector"] },
  { title: "Enterprise Systems Architecture", summary: "Designing scalable enterprise systems that connect databases, integrations, permissions, and workflows.", proof: "Ministry of Interior systems, SNSO ERP, and National Training Council systems.", items: ["System architecture", "Database design", "Integration design", "API design", "Workflow design", "Security design"] },
  { title: "Data and Business Intelligence", summary: "Building information systems, databases, and dashboards that support planning, monitoring, and decision-making.", proof: "Training database, kidney patient system, and reports for government and enterprise systems.", items: ["Data analysis", "KPI design", "Reporting", "Executive dashboards", "Decision support"] },
  { title: "Software Development", summary: "Developing web applications, backend services, and integration interfaces for reliable government and enterprise systems.", proof: "Django and REST APIs in active government platforms and operational services.", items: ["Python", "Django", "Django REST Framework", "PostgreSQL", "MySQL", "SQLite", "JavaScript", "Tailwind CSS"] },
  { title: "Applied Artificial Intelligence", summary: "Using OCR and large language models inside products when they deliver practical automation and data processing value.", proof: "Image-based data extraction, data analysis, and classification for digital product needs.", items: ["OCR", "Computer Vision", "OpenAI APIs", "LLMs", "Data classification"] }
];

export const enRelatedExperience: RelatedExperienceItem[] = [
  { title: "DevOps and Systems Operations", summary: "Designed and operated production infrastructure for government and enterprise systems focused on stability, permissions, backup, and operational monitoring.", tags: ["Docker", "CI/CD", "Ubuntu Server", "Nginx", "Gunicorn", "PostgreSQL", "Monitoring", "Security hardening"] },
  { title: "ERP and Enterprise Operations", summary: "Contributed to ERP modules covering HR, finance, planning, procurement, and workflow, including procedure customization and user training.", tags: ["ERP", "HR", "Finance", "Planning", "Payroll", "Procurement", "Workflow"] },
  { title: "HR and Accounting", summary: "Converted HR and accounting needs into trackable operational modules covering files, documents, permissions, and reports.", tags: ["HR systems", "Accounting", "Business documents", "Permissions", "Reporting"] },
  { title: "Planning and KPI Management", summary: "Led planning and operations initiatives that connected institutional data with KPIs and dashboards supporting project and operations management.", tags: ["Strategic planning", "KPI management", "Operational planning", "Project portfolio"] },
  { title: "Documentation and Professional Content", summary: "Produced technical and operational documents supporting system understanding and use, from requirements and API documentation to user guides and proposals.", tags: ["Technical documentation", "API documentation", "Business documentation", "User guides", "Proposal writing"] }
];

export const enSkillGroups: GroupItem[] = [
  { title: "Core Technologies", items: ["Python", "Django", "PostgreSQL", "Linux", "Redis", "Docker"] },
  { title: "Enterprise Systems", items: ["ERP", "HR", "Accounting", "Planning", "Workflow", "Business process automation"] },
  { title: "Government Platforms", items: ["Digital transformation", "National platforms", "Government integration", "E-government"] },
  { title: "Artificial Intelligence", items: ["OCR", "Computer Vision", "Machine learning", "NLP"] },
  { title: "Technical Leadership", items: ["Solution architecture", "Technical leadership", "Team leadership", "Project management", "System design"] }
];

export const enKeywordGroups: GroupItem[] = [
  { title: "Government Technology", items: ["National platforms", "E-government", "Citizen services", "Government integration"] },
  { title: "Enterprise Systems", items: ["ERP", "HR", "Finance", "Workflow", "Business documents"] },
  { title: "Cloud and DevOps", items: ["Linux", "Nginx", "Gunicorn", "Docker", "CI/CD", "Monitoring"] },
  { title: "Artificial Intelligence", items: ["OCR", "Computer Vision", "Machine learning", "NLP", "OpenAI APIs"] },
  { title: "Leadership", items: ["CTO", "Solution architecture", "Technical advisory", "Team leadership"] },
  { title: "Business Transformation", items: ["Digital transformation", "Process automation", "Decision support", "KPI management"] }
];
