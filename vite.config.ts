import { defineConfig } from "vite";
import { ViteRsw } from "vite-plugin-rsw";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ViteRsw(), vue()],
});
