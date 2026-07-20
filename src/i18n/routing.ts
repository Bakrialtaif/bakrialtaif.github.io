import type { Locale } from "./config";

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ar";
}

export function getDir(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export function localizePath(path: string, locale: Locale) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === "ar") {
    return cleanPath.replace(/^\/en(?=\/|$)/, "") || "/";
  }
  const withoutLocale = cleanPath.replace(/^\/en(?=\/|$)/, "") || "/";
  return withoutLocale === "/" ? "/en/" : `/en${withoutLocale}`;
}

export function alternateLocalePath(pathname: string, locale: Locale) {
  return localizePath(pathname, locale === "ar" ? "en" : "ar");
}
