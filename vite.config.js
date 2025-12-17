import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join } from 'path'

// Plugin to create 404.html for GitHub Pages SPA routing
function createGitHubPages404() {
  return {
    name: 'create-404-html',
    closeBundle() {
      const indexPath = join('dist', 'index.html')
      const notFoundPath = join('dist', '404.html')
      copyFileSync(indexPath, notFoundPath)
      console.log('Created 404.html for GitHub Pages SPA routing')
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), createGitHubPages404()],
  base: '/',
})
