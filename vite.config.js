import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import svgr from '@svgr/rollup';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// @로 시작해서 사용해주세요.
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://3.34.50.114:5000', // API 서버 URL
        changeOrigin: true, // 원래의 Origin을 변경
        rewrite: (path) => path.replace(/^\/api/, ''), // 경로 재작성
      },
    },
  },
});
