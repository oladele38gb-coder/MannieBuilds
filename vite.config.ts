import { resolve } from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function copyStaticPlugin(): Plugin {
  return {
    name: 'copy-static-plugin',
    closeBundle() {
      const distDir = resolve(__dirname, 'dist');
      if (!fs.existsSync(distDir)) return;

      // Copy full assets folder into dist/assets (ensures PDFs, videos, and thumbnails are always present)
      const assetsSrc = resolve(__dirname, 'assets');
      const assetsDest = resolve(distDir, 'assets');
      if (fs.existsSync(assetsSrc)) {
        fs.cpSync(assetsSrc, assetsDest, { recursive: true });
      }

      // Copy shared files directly into dist root
      ['shared.js', 'shared.css'].forEach(file => {
        const src = resolve(__dirname, file);
        const dest = resolve(distDir, file);
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest);
        }
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyStaticPlugin()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        work: resolve(__dirname, 'work.html'),
        process: resolve(__dirname, 'process.html'),
      }
    }
  }
});
