# GitHub Pages Deployment Guide

## Important: Base Path Configuration

The base path in `vite.config.js` must match your GitHub repository name exactly.

### Automatic Detection (Recommended)
The build process automatically detects your repository name during GitHub Actions deployment. No manual configuration needed!

### Manual Configuration (For Local Testing)
If you need to test locally or the automatic detection doesn't work:

1. Open `vite.config.js`
2. Find the line: `base: '/RightPath/',`
3. Replace `RightPath` with your actual repository name
4. For example, if your repo is `https://github.com/username/my-quran-app`, set it to:
   ```javascript
   base: '/my-quran-app/',
   ```

### User/Organization Pages
If you're using a user or organization page (e.g., `username.github.io`), set the base to:
```javascript
base: '/',
```

## Deployment Steps

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

2. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to Pages section
   - Under "Source", select "GitHub Actions"

3. **Wait for deployment**
   - Go to Actions tab
   - Wait for the workflow to complete
   - Your site will be available at: `https://yourusername.github.io/your-repo-name/`

## Troubleshooting

### Empty Page / 404 Errors
- **Check repository name**: Make sure the base path matches your repository name exactly
- **Check GitHub Pages settings**: Ensure "GitHub Actions" is selected as the source
- **Check build logs**: Look at the Actions tab to see if the build succeeded

### Assets Not Loading
- Verify the base path in `vite.config.js` matches your repository name
- Check browser console for 404 errors
- Ensure `public/404.html` exists (it should be copied automatically)

### Routes Not Working
- The `404.html` file handles client-side routing
- If routes don't work, check that `public/404.html` was deployed
- Verify the `RedirectHandler` component in `src/App.jsx` is working

## Files Included for GitHub Pages

- ✅ `public/404.html` - Handles client-side routing
- ✅ `vite.config.js` - Configured with base path
- ✅ `.github/workflows/deploy.yml` - Automated deployment

## Testing Locally

To test the production build locally:

```bash
npm run build
npm run preview
```

This will build and preview your app with the production configuration.

