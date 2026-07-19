import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://bakrialtaif.github.io",
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
