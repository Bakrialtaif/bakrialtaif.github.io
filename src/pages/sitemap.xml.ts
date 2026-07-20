import { getContent, localizePath } from "@/i18n";

const pages = ["/", "/about", "/education", "/awards", "/recommendations", "/contact", "/ats-resume", "/resume-pdf"];

export function GET() {
  const urls = [
    ...pages,
    ...pages.map((page) => localizePath(page, "en"))
  ];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls
      .map((url) => `<url><loc>https://bakrialtaif.github.io${url}</loc></url>`)
      .join("")}</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml"
      }
    }
  );
}
