import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    watch: {
      ignored: ['**/*.tmp*', '**/*.~tmp*', '**/scratch/**', '**/.system_generated/**', '**/*.lock']
    }
  }
});
