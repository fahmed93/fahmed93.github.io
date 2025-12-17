import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'
import { join } from 'path'

// Plugin to create 404.html for GitHub Pages SPA routing
function createGitHubPages404() {
  return {
    name: 'create-404-html',
    closeBundle() {
      try {
        const indexPath = join('dist', 'index.html')
        const notFoundPath = join('dist', '404.html')
        
        if (!existsSync(indexPath)) {
          console.error('Error: dist/index.html does not exist')
          return
        }
        
        copyFileSync(indexPath, notFoundPath)
        console.log('Created 404.html for GitHub Pages SPA routing')
      } catch (error) {
        console.error('Error creating 404.html:', error.message)
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), createGitHubPages404()],
  base: '/',
})
