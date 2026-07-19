/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans Arabic", "Inter", "system-ui", "sans-serif"],
        latin: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#111827",
        paper: "#f8fafc",
        copper: "#b45309",
        teal: {
          DEFAULT: "#0f766e",
          300: "#5eead4"
        },
        river: "#2563eb"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};
