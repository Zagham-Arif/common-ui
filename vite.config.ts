import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import * as packageJson from "./package.json";

export default defineConfig(() => ({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ["src/components", "index.ts"],
    }),
  ],
  resolve: {
    alias: {
      "common-ui": resolve(__dirname, "index.ts"),
    },
  },
  build: {
    lib: {
      entry: resolve("index.ts"),
      name: "common-ui",
      formats: ["es", "umd"],
      fileName: (format) => `common-ui.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}));
