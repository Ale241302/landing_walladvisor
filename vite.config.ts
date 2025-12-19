import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/profesionales/', // importante el slash al final
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'phone-libs': [
            'react-phone-number-input',
            'react-international-phone',
            'react-flags-select',
            'countries-list'
          ],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
