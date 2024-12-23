import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  typescript: {
    ignoreBuildErrors: true
  },
  eslint : {
    ignoreDuringBuilds: true
  },
  
  define: {
    'process.env': {}
  },
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    middleware: (app) => {
      app.use((req, res, next) => {
        if (req.url !== '/') {
          req.url = '/'
        }
        next()
      })
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
