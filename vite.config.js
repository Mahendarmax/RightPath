import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Update the base path to match your GitHub repository name
// For example, if your repo is at: https://github.com/username/my-repo
// Then set base to: '/my-repo/'
// If it's a user/organization page (username.github.io), set base to: '/'
export default defineConfig({
  base: (() => {
    if (process.env.GITHUB_REPOSITORY) {
      const repoName = process.env.GITHUB_REPOSITORY.split('/')[1]
      // User/organization pages end with .github.io - use base '/'
      if (repoName.endsWith('.github.io')) {
        return '/'
      }
      // Project pages - use repository name
      return `/${repoName}/`
    }
    // Default for local development - CHANGE THIS if needed
    // For user pages, use: '/'
    // For project pages, use: '/repository-name/'
    return '/' // Changed to '/' for user page
  })(),
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})

