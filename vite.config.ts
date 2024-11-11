import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  headers: {
          "Strict-Transport-Security": "max-age=86400; includeSubDomains", // Adds HSTS options to your website, with a expiry time of 1 day
          "X-Content-Type-Options": "nosniff", // Protects from improper scripts runnings
          "X-Frame-Options": "DENY", // Stops your site being used as an iframe
          "X-XSS-Protection": "1; mode=block", // Gives XSS protection to legacy browsers
          'Content-Security-Policy': 'upgrade-insecure-requests'
  }
})
