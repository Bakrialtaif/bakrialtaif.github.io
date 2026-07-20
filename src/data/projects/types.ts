export type Project = {
  slug: string;
  name: string;
  organization: string;
  role: string;
  period: string;
  type: string;
  summary: string;
  objective: string;
  overview: string;
  responsibilities: string[];
  technologies: string[];
  keyFeatures: string[];
  results: string[];
  businessImpact: {
    problem: string;
    solution: string;
    impact: string;
  };
  visual: "notifications" | "platform" | "security" | "calendar" | "data" | "erp";
  link?: string;
  featured?: boolean;
};
