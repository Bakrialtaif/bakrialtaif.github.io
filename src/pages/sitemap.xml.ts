import { localizePath } from "@/i18n";
import { projectCaseStudySlugs } from "@/data/project-case-studies";

const pages = ["/", "/about", "/projects", "/education", "/awards", "/recommendations", "/ats-resume", "/resume-pdf", "/privacy"];
const projectPages = projectCaseStudySlugs.map((slug) => `/projects/${slug}`);

function withTrailingSlash(path: string) {
  if (path === "/") return path;
  return path.endsWith("/") ? path : `${path}/`;
}

export function GET() {
  const urls = [
    ...pages,
    ...projectPages,
    ...pages.map((page) => localizePath(page, "en")),
    ...projectPages.map((page) => localizePath(page, "en"))
  ];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls
      .map((url) => `<url><loc>https://bakrialtaif.github.io${withTrailingSlash(url)}</loc></url>`)
      .join("")}</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml"
      }
    }
  );
}
