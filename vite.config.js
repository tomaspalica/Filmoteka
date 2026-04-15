import { defineConfig } from "vite";
import posthtml from "@vituum/vite-plugin-posthtml";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [posthtml()],
  base: "/Filmoteka/",
});
