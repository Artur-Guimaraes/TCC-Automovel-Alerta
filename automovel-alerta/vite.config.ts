import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: "/TCC-Automovel-Alerta/",
    define: {
      "process.env.BASE_URL": JSON.stringify(env.BASE_URL),
    },
    build: {
      outDir: "build",
    },
  };
});
