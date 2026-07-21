function setupFloatingContact() {
  const root = document.querySelector<HTMLElement>("[data-floating-contact]");
  const toggle = root?.querySelector<HTMLButtonElement>("[data-floating-contact-toggle]");
  const menu = root?.querySelector<HTMLElement>("#floating-contact-menu");
  if (!root || !toggle || !menu) return;

  const setOpen = (isOpen: boolean) => {
    root.dataset.open = String(isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen
        ? root.dataset.locale === "ar"
          ? "إغلاق خيارات التواصل"
          : "Close contact options"
        : root.dataset.locale === "ar"
          ? "فتح خيارات التواصل"
          : "Open contact options"
    );
    menu.hidden = !isOpen;
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Node) || root.contains(event.target)) return;
    setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    setOpen(false);
    toggle.focus();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupFloatingContact, { once: true });
} else {
  setupFloatingContact();
}
