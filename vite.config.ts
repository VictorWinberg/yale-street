import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsConfigPaths from 'vite-tsconfig-paths';
import * as child from 'child_process';

const commitHash = child.execSync('git rev-parse --short HEAD').toString();

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL,
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __COMMIT_HASH__: JSON.stringify(commitHash)
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
