import { arLocaleContent } from "./ar";
import { enLocaleContent } from "./en";
import type { Locale } from "./config";
import { getDir } from "./routing";

import { arAwards } from "@/data/awards/ar";
import { enAwards } from "@/data/awards/en";
import { arEducation } from "@/data/education/ar";
import { enEducation } from "@/data/education/en";
import { arExperience } from "@/data/experience/ar";
import { enExperience } from "@/data/experience/en";
import { arExpertise, arKeywordGroups, arRelatedExperience, arSkillGroups } from "@/data/expertise/ar";
import { enExpertise, enKeywordGroups, enRelatedExperience, enSkillGroups } from "@/data/expertise/en";
import { arProjects } from "@/data/projects/ar";
import { enProjects } from "@/data/projects/en";
import { arRecommendations } from "@/data/recommendations/ar";
import { enRecommendations } from "@/data/recommendations/en";
import { arAvailableFor, arExecutiveScale, arFramework, arImpactMetrics, arPrinciples, arSite } from "@/data/site/ar";
import { enAvailableFor, enExecutiveScale, enFramework, enImpactMetrics, enPrinciples, enSite } from "@/data/site/en";

export { defaultLocale, isLocale, locales } from "./config";
export type { Locale } from "./config";

export { alternateLocalePath, getDir, getLocaleFromPath, localizePath } from "./routing";

export function getContent(locale: Locale) {
  const isEn = locale === "en";
  const localeContent = isEn ? enLocaleContent : arLocaleContent;

  return {
    locale,
    dir: getDir(locale),
    ui: localeContent.ui,
    navigation: localeContent.navigation,
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
    pages: localeContent.pages,
    contactLabels: localeContent.contactLabels
  };
}

export type PortfolioContent = ReturnType<typeof getContent>;
