import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.config.js";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        options: resolve(__dirname, "src/ui/options/index.html"),
        popup: resolve(__dirname, "src/ui/popup/index.html"),
        sidePanel: resolve(__dirname, "src/ui/side-panel/index.html"),
      },
    },
  },
  plugins: [crx({ manifest }), vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
