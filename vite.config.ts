import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL,
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
  },
  plugins: [react(), tsConfigPaths()],
  optimizeDeps: {
    include: ['@emotion/styled']
  },
  build: {
    outDir: 'dist'
  },
  publicDir: 'public',
  server: {
    open: true,
    port: 3000
  }
});
