import type { NavigationItem } from "../types";

export const arNavigation = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "الملف المهني" },
    { href: "/projects", label: "المشاريع" },
    { href: "/education", label: "التعليم والتطوير المهني" },
    { href: "/awards", label: "الجوائز والثناءات" },
    { href: "/recommendations", label: "التوصيات" }
  ] satisfies NavigationItem[];
