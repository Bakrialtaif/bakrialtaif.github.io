type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

type PortfolioAnalytics = {
  trackEvent: (eventName: string, payload?: AnalyticsPayload) => void;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    portfolioAnalytics?: PortfolioAnalytics;
  }
}

const viewedSections = new Set<string>();
const trackedScrollDepths = new Set<number>();

function getPageLanguage() {
  return document.documentElement.lang || "ar";
}

function withPageContext(payload: AnalyticsPayload = {}) {
  return {
    page_path: window.location.pathname,
    page_language: getPageLanguage(),
    ...payload,
  };
}

export function trackEvent(eventName: string, payload: AnalyticsPayload = {}) {
  if (!eventName) return;

  const eventPayload = withPageContext(payload);
  window.gtag?.("event", eventName, eventPayload);
}

function getLinkEvent(element: HTMLElement) {
  const configuredEvent = element.dataset.analyticsEvent;
  if (configuredEvent) return configuredEvent;

  const anchor = element instanceof HTMLAnchorElement ? element : element.closest<HTMLAnchorElement>("a[href]");
  const href = anchor?.href || "";

  if (href.includes("wa.me") || href.includes("whatsapp")) return "whatsapp_click";
  if (href.startsWith("mailto:")) return "email_click";
  if (href.startsWith("tel:")) return "phone_click";
  if (href.includes("linkedin.com")) return "linkedin_click";
  if (href.includes("facebook.com") || href.includes("m.me")) return "facebook_click";
  if (href.includes(".pdf")) return "cv_download";
  if (anchor?.dataset.languageSwitch === "true") return "language_switch";

  return undefined;
}

function getLinkPayload(element: HTMLElement) {
  const anchor = element instanceof HTMLAnchorElement ? element : element.closest<HTMLAnchorElement>("a[href]");
  const section = element.closest<HTMLElement>("[data-analytics-section]");
  const href = anchor?.href;
  const linkUrl = (() => {
    if (!href) return undefined;
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return undefined;
    try {
      const url = new URL(href);
      return `${url.origin}${url.pathname}`;
    } catch {
      return href.split("?")[0];
    }
  })();

  return {
    link_location: element.dataset.analyticsLocation || section?.dataset.analyticsSection || "page",
    section_id: section?.dataset.analyticsSection,
    link_label: element.textContent?.trim().replace(/\s+/g, " ").slice(0, 120),
    link_url: linkUrl,
    project_slug: element.dataset.projectSlug,
  };
}

function setupClickTracking() {
  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const trackedElement = target?.closest<HTMLElement>("a[href], button[data-analytics-event]");
    if (!trackedElement) return;

    const eventName = getLinkEvent(trackedElement);
    if (!eventName) return;

    if (eventName === "whatsapp_click" || eventName === "email_click") {
      sessionStorage.setItem("portfolio_contact_action_taken", "true");
    }

    trackEvent(eventName, getLinkPayload(trackedElement));
  });
}

function setupSectionTracking() {
  const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-analytics-section]"));
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const section = entry.target as HTMLElement;
        const sectionId = section.dataset.analyticsSection;
        const eventName = section.dataset.analyticsViewEvent;
        if (!sectionId || !eventName || viewedSections.has(sectionId)) return;

        viewedSections.add(sectionId);
        trackEvent(eventName, { section_id: sectionId });
        observer.unobserve(section);
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupScrollTracking() {
  const depths = [50, 75, 90];

  window.addEventListener(
    "scroll",
    () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const progress = Math.round((window.scrollY / scrollableHeight) * 100);
      depths.forEach((depth) => {
        if (progress < depth || trackedScrollDepths.has(depth)) return;
        trackedScrollDepths.add(depth);
        trackEvent(`scroll_${depth}`, { scroll_depth: depth });
      });
    },
    { passive: true }
  );
}

function initAnalytics() {
  window.portfolioAnalytics = { trackEvent };
  setupClickTracking();
  setupSectionTracking();
  setupScrollTracking();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAnalytics, { once: true });
} else {
  initAnalytics();
}
