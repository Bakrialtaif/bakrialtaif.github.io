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
const trackedEngagementTimers = new Set<number>();
const engagementThresholds = [30, 60, 120];

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

function getLinkPayload(element: HTMLElement, contactChannel?: string) {
  const anchor = element instanceof HTMLAnchorElement ? element : element.closest<HTMLAnchorElement>("a[href]");
  const section = element.closest<HTMLElement>("[data-analytics-section]");
  const href = anchor?.href;
  const linkUrl = (() => {
    if (contactChannel) return undefined;
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
    link_platform: contactChannel,
    project_slug: element.dataset.projectSlug,
    contact_channel: element.dataset.contactChannel,
  };
}

function getContactChannel(eventName: string, payload: AnalyticsPayload) {
  if (typeof payload.contact_channel === "string") return payload.contact_channel;
  if (eventName === "whatsapp_click") return "whatsapp";
  if (eventName === "email_click") return "email";
  if (eventName === "linkedin_click") return "linkedin";
  if (eventName === "phone_click") return "phone";
  if (eventName === "facebook_click") return "facebook";
  return undefined;
}

function isContactEvent(eventName: string) {
  return ["whatsapp_click", "email_click", "linkedin_click", "phone_click", "facebook_click", "project_contact_click"].includes(eventName);
}

function setupClickTracking() {
  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const trackedElement = target?.closest<HTMLElement>("a[href], button[data-analytics-event]");
    if (!trackedElement) return;

    const eventName = getLinkEvent(trackedElement);
    if (!eventName) return;

    const contactChannel = getContactChannel(eventName, { contact_channel: trackedElement.dataset.contactChannel });
    const payload = getLinkPayload(trackedElement, contactChannel);

    if (isContactEvent(eventName)) {
      sessionStorage.setItem("portfolio_contact_action_taken", "true");
    }

    trackEvent(eventName, payload);

    if (isContactEvent(eventName)) {
      trackEvent("contact_click", {
        ...payload,
        contact_channel: contactChannel,
        source_event: eventName,
      });
    }
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

function setupEngagementTracking() {
  let visibleStartedAt = document.visibilityState === "visible" ? Date.now() : undefined;
  let accumulatedVisibleMs = 0;

  const getVisibleTimeMs = () => {
    if (visibleStartedAt === undefined) return accumulatedVisibleMs;
    return accumulatedVisibleMs + Date.now() - visibleStartedAt;
  };

  const pauseVisibleTimer = () => {
    if (visibleStartedAt === undefined) return;
    accumulatedVisibleMs += Date.now() - visibleStartedAt;
    visibleStartedAt = undefined;
  };

  const resumeVisibleTimer = () => {
    if (visibleStartedAt !== undefined) return;
    visibleStartedAt = Date.now();
  };

  const evaluateThresholds = () => {
    const visibleSeconds = Math.floor(getVisibleTimeMs() / 1000);
    engagementThresholds.forEach((seconds) => {
      if (visibleSeconds < seconds || trackedEngagementTimers.has(seconds)) return;
      trackedEngagementTimers.add(seconds);
      trackEvent(`engaged_${seconds}_seconds`, { engaged_seconds: seconds });
    });
  };

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      resumeVisibleTimer();
    } else {
      pauseVisibleTimer();
    }
    evaluateThresholds();
  });

  window.setInterval(evaluateThresholds, 1000);
  evaluateThresholds();
}

function initAnalytics() {
  window.portfolioAnalytics = { trackEvent };
  setupClickTracking();
  setupSectionTracking();
  setupScrollTracking();
  setupEngagementTracking();
  window.dispatchEvent(new CustomEvent("portfolio-analytics-ready"));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAnalytics, { once: true });
} else {
  initAnalytics();
}
