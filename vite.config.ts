import { fileRoutes } from "filesystem-routing/vite";
import { defineConfig } from "vite-plus";
import { cloudflare } from "@cloudflare/vite-plugin";
import solid from "@solidjs/vite-plugin";
import { i18n } from "@rimelight/i18n/plugin";

export default defineConfig({
  plugins: [
    cloudflare({
      viteEnvironment: {
        name: "ssr",
      },
      experimental: {
        newConfig: true,
      },
    }),
    solid({
      start: true,
      ssr: true,
    }),
    fileRoutes({
      types: true,
    }),
    i18n(),
  ],
});
