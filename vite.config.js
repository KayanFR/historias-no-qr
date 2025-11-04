// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './src/frontend', // pasta raiz do frontend
  base: '/',              // caminho base para assets (útil se for deploy em subpasta)
  build: {
    outDir: '../../dist/frontend', // pasta de saída do build (relativo ao root do Vite)
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/frontend/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true, // abre o navegador automaticamente
    host: 'localhost',
    proxy: {
      // Exemplo de proxy para comunicação com o backend (Node.js na porta 3001)
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/frontend'),
    },
  },
});
