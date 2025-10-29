import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This is important for Docker and VMs
    hmr: {
      overlay: false,
    },
    watch: {
      usePolling: true,
    },
    // This is the part that fixes the error
    allowedHosts: ['.ngrok-free.app'],
  },
})