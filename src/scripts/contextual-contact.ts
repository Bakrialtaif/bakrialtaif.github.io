const DISMISS_STORAGE_KEY = "portfolio_contextual_contact_dismissed_at";
const DISMISS_DURATION_MS = 7 * 24 * 60 * 60 * 1000;
const MIN_TIME_ON_PAGE_MS = 45000;
const OPEN_DELAY_MS = 2600;

let previousFocus: HTMLElement | null = null;
let openTimer: number | undefined;

function wasRecentlyDismissed() {
  const dismissedAt = Number(localStorage.getItem(DISMISS_STORAGE_KEY) || 0);
  return dismissedAt > 0 && Date.now() - dismissedAt < DISMISS_DURATION_MS;
}

function contactActionWasTaken() {
  return sessionStorage.getItem("portfolio_contact_action_taken") === "true";
}

function getFocusableElements(dialog: HTMLElement) {
  return Array.from(
    dialog.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  );
}

function setupContextualContact() {
  const root = document.querySelector<HTMLElement>("[data-contextual-contact]");
  const dialog = root?.querySelector<HTMLElement>(".contextual-contact__dialog");
  if (!root || !dialog || wasRecentlyDismissed()) return;

  const close = () => {
    root.hidden = true;
    document.body.classList.remove("contextual-contact-open");
    localStorage.setItem(DISMISS_STORAGE_KEY, String(Date.now()));
    window.portfolioAnalytics?.trackEvent("contact_modal_close", { link_location: "contextual_contact" });
    previousFocus?.focus();
  };

  const open = () => {
    if (!root.hidden || contactActionWasTaken() || sessionStorage.getItem("portfolio_contextual_contact_seen") === "true") return;
    sessionStorage.setItem("portfolio_contextual_contact_seen", "true");
    previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    root.hidden = false;
    document.body.classList.add("contextual-contact-open");
    dialog.focus();
    window.portfolioAnalytics?.trackEvent("contact_modal_open", { link_location: "contextual_contact" });
  };

  const scheduleOpen = () => {
    if (openTimer || contactActionWasTaken()) return;
    openTimer = window.setTimeout(open, OPEN_DELAY_MS);
  };

  root.querySelectorAll<HTMLElement>("[data-contextual-contact-close]").forEach((element) => {
    element.addEventListener("click", close);
  });

  document.addEventListener("keydown", (event) => {
    if (root.hidden) return;

    if (event.key === "Escape") {
      close();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = getFocusableElements(dialog);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  window.setTimeout(() => {
    window.addEventListener(
      "scroll",
      () => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollableHeight <= 0) return;
        const progress = (window.scrollY / scrollableHeight) * 100;
        if (progress >= 75) scheduleOpen();
      },
      { passive: true }
    );
  }, MIN_TIME_ON_PAGE_MS);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupContextualContact, { once: true });
} else {
  setupContextualContact();
}
