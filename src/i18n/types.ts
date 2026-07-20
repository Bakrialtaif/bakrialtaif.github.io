export type UiContent = {
  skipToContent: string;
  mainNavigation: string;
  darkMode: string;
  openMenu: string;
  switchLanguage: string;
  languageLabel: string;
  details: string;
  downloadFile: string;
  viewDocument: string;
  openDocument: string;
  project: string;
  fields: {
    organization: string;
    role: string;
    period: string;
    overview: string;
    projectOverview: string;
    technologies: string;
    keyFeatures: string;
    responsibilities: string;
    impact: string;
    businessImpact: string;
    problem: string;
    solution: string;
    results: string;
    projectLink: string;
  };
  actions: {
    viewProjects: string;
    downloadResume: string;
    contact: string;
    atsResume: string;
  };
};

export type NavigationItem = {
  href: string;
  label: string;
};

export type ContactLabels = {
  email: string;
  phone: string;
  linkedIn: string;
  linkedInValue: string;
  gitHub: string;
  website: string;
  location: string;
};
