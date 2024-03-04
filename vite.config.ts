/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {
      NODE_ENV: 'production',
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup-tests.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  build: {
    lib: {
      entry: './src/components/InstalmentsSelector/web-component.tsx',
      name: 'index',
      fileName: format => `index.${format}.js`,
    },
    target: 'esnext',
  },
})
