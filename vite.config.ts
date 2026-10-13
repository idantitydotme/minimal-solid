import { fileRoutes } from "filesystem-routing/vite";
import { defineConfig } from "vite-plus";
import { cloudflare } from "@cloudflare/vite-plugin";
import solid from "@solidjs/vite-plugin";
import { i18n } from "@rimelight/i18n/plugin";
import { ui } from "@rimelight/ui/plugin";

export default defineConfig({
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  staged: {
    "{package.json,pnpm-workspace.yaml,pnpm-lock.yaml}": () => "pnpm audit",
    "*": "vp check --fix",
  },
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
      exclude: ["src/fetch.ts"],
      start: true,
      ssr: true,
    }),

    fileRoutes({ types: ".cloudflare/types/file-routes.d.ts" }),

    i18n(),

    ui(),
  ],
});
