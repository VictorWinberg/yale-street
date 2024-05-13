import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist'
  },
  plugins: [react(), tsConfigPaths()],
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
  },
  server: {
    open: true,
    port: 3000
  }
});
