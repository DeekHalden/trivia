import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages'
import Vue from '@vitejs/plugin-vue'
import 'vite-ssg'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
  },
  build: {
    modulePreload: false,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },
  },
});
