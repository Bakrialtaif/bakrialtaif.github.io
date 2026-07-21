import type { Project } from "@/data/projects/types";

export type ProjectCaseStudy = Project & {
  heroMetrics: Array<{
    value: string;
    label: string;
  }>;
  sections: {
    overviewTitle: string;
    contextTitle: string;
    challengesTitle: string;
    responsibilitiesTitle: string;
    solutionTitle: string;
    capabilitiesTitle: string;
    outcomesTitle: string;
    technologiesTitle: string;
    lessonsTitle: string;
    evidenceTitle: string;
    ctaTitle: string;
    ctaText: string;
    backLabel: string;
    allProjectsLabel: string;
    contactLabel: string;
  };
  challenges: Array<{
    title: string;
    description: string;
  }>;
  lessons: Array<{
    title: string;
    description: string;
  }>;
  relatedAwardProjects: string[];
  relatedRecommendationOrganizations: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};
