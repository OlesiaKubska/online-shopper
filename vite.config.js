import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react()],
 server: {
  port: 5000, // Change this to your desired port
 },
 resolve: {
  alias: {
   src: "/src",
   components: "/src/components",
   pages: "/src/pages",
  },
 },
 base: "/online-shopper/",
});
