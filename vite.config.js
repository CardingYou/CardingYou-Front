import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import { fileURLToPath } from "url";
import svgr from '@svgr/rollup';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// @로 시작해서 사용해주세요.
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});