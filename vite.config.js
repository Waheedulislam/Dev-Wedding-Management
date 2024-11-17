import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically open browser on server start
    host: true, // Enable access via network IP
    port: 5173, // Set custom port if needed
    // Fallback for SPA routing
    historyApiFallback: true,
  },
})

