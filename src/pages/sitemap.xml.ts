import { localizePath } from "@/i18n";

const pages = ["/", "/about", "/education", "/awards", "/ats-resume", "/resume-pdf", "/privacy"];

function withTrailingSlash(path: string) {
  if (path === "/") return path;
  return path.endsWith("/") ? path : `${path}/`;
}

export function GET() {
  const urls = [
    ...pages,
    ...pages.map((page) => localizePath(page, "en"))
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
