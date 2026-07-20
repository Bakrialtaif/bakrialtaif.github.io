import type { ExpertiseItem, GroupItem, RelatedExperienceItem } from "./types";

export const enExpertise: ExpertiseItem[] = [
  { title: "Enterprise Systems Architecture", summary: "Designing and building scalable enterprise systems that connect databases, integrations, permissions, workflows, and operational reporting.", proof: "Ministry of Interior systems, SNSO ERP, and National Training Council systems.", items: ["System architecture", "Database design", "Integration design", "API design", "Workflow design", "Security design"] },
  { title: "Digital Product Architecture", summary: "Turning complex institutional and government needs into digital products with a clear operating model, roadmap, and delivery path.", proof: "Baldna Platform, passport e-services, and SNSO ERP.", items: ["Product architecture", "Product roadmap", "MVP planning", "Feature prioritization", "Operational model"] },
  { title: "Digital Transformation Leadership", summary: "Leading digital transformation work from process understanding and redesign to system delivery, rollout, and measurable adoption.", proof: "Connected 19 government institutions, served 500,000 citizens, and processed 3,000,000 inquiry operations.", items: ["Government platforms", "Citizen services", "Workflow automation", "System integration", "Public sector"] },
  { title: "Business Process Reengineering", summary: "Analyzing manual or fragmented procedures and rebuilding them as practical digital workflows inside usable systems.", proof: "Baldna government transactions, passport booking, foreigners transactions, and SNSO ERP workflows.", items: ["Business analysis", "Process redesign", "Workflow modeling", "Operational requirements", "Change rollout"] },
  { title: "Product Engineering", summary: "Building web applications, backend services, and integration interfaces for reliable government and enterprise products.", proof: "Django and REST APIs in active government platforms and operational services.", items: ["Python", "Django", "Django REST Framework", "PostgreSQL", "MySQL", "SQLite", "JavaScript", "Tailwind CSS"] },
  { title: "Data and Performance Systems", summary: "Building information systems, databases, KPIs, and dashboards that support planning, monitoring, and decision-making.", proof: "Training database, kidney patient system, and reports for government and enterprise systems.", items: ["Data analysis", "KPI design", "Reporting", "Executive dashboards", "Decision support"] }
];

export const enRelatedExperience: RelatedExperienceItem[] = [
  { title: "DevOps and Systems Operations", summary: "Designed and operated production infrastructure for government and enterprise systems focused on stability, permissions, backup, and operational monitoring.", tags: ["Docker", "CI/CD", "Ubuntu Server", "Nginx", "Gunicorn", "PostgreSQL", "Monitoring", "Security hardening"] },
  { title: "ERP and Enterprise Operations", summary: "Helped build ERP modules covering HR, finance, planning, procurement, and workflow, including procedure customization and user training.", tags: ["ERP", "HR", "Finance", "Planning", "Payroll", "Procurement", "Workflow"] },
  { title: "HR and Accounting", summary: "Converted HR and accounting needs into trackable operational modules covering files, documents, permissions, and reports.", tags: ["HR systems", "Accounting", "Business documents", "Permissions", "Reporting"] },
  { title: "Planning and KPI Management", summary: "Led planning and operations initiatives that connected institutional data with KPIs and dashboards supporting project and operations management.", tags: ["Strategic planning", "KPI management", "Operational planning", "Project portfolio"] },
  { title: "Documentation and Professional Content", summary: "Produced technical and operational documents supporting system understanding and use, from requirements and API documentation to user guides and proposals.", tags: ["Technical documentation", "API documentation", "Business documentation", "User guides", "Proposal writing"] }
];

export const enSkillGroups: GroupItem[] = [
  { title: "Core Technologies", items: ["Python", "Django", "PostgreSQL", "Linux", "Redis", "Docker"] },
  { title: "Enterprise Systems", items: ["ERP", "HR", "Accounting", "Planning", "Workflow", "Business process automation"] },
  { title: "Government Platforms", items: ["Digital transformation", "National platforms", "Government integration", "E-government"] },
  { title: "Artificial Intelligence", items: ["OCR", "Computer Vision", "Machine learning", "NLP"] },
  { title: "Technical Leadership", items: ["Solution architecture", "Technical leadership", "Team building", "Project delivery", "System design"] }
];

export const enKeywordGroups: GroupItem[] = [
  { title: "Enterprise Systems", items: ["Enterprise Systems Architect", "Enterprise Systems", "Systems Design", "ERP", "Workflow", "Business documents"] },
  { title: "Digital Products", items: ["Product Architect", "Digital Product Architecture", "Product Engineering", "Digital services", "Citizen services"] },
  { title: "Digital Transformation", items: ["Digital Transformation Lead", "Digital Transformation", "Business Process Reengineering", "Process automation", "Operational scaling"] },
  { title: "Technical Leadership", items: ["CTO", "Technical Leadership", "Team Building and Capability Development", "Solution architecture", "Project delivery"] },
  { title: "Data and Performance", items: ["Data and Performance Systems", "KPI management", "Executive dashboards", "Decision support", "Reporting"] },
  { title: "Systems Integration", items: ["Government integration", "REST APIs", "Linux", "Docker", "Monitoring"] }
];
