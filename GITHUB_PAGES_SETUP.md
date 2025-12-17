# GitHub Pages Setup Instructions

This document outlines the manual steps required to configure GitHub Pages to host this website at `fahmed93.github.io` instead of `fahmed93.github.io/fahmed93`.

## Prerequisites

- You must have admin access to the `fahmed93/fahmed93` GitHub repository
- The repository should already exist at `https://github.com/fahmed93/fahmed93`

## Configuration Steps

### Step 1: Configure GitHub Pages Settings

1. Navigate to your repository on GitHub: `https://github.com/fahmed93/fahmed93`

2. Click on **Settings** (in the repository navigation bar)

3. In the left sidebar, click on **Pages** (under "Code and automation")

4. Under **Source**, ensure the following settings:
   - **Source**: Select `GitHub Actions` (not "Deploy from a branch")
   
   This allows the GitHub Actions workflow (`.github/workflows/deploy.yml`) to deploy your site.

5. Once configured, your site will be available at `https://fahmed93.github.io/`

### Step 2: Verify Deployment

After pushing changes to the `main` branch:

1. Go to the **Actions** tab in your repository
2. Wait for the "Deploy to GitHub Pages" workflow to complete
3. Once successful, visit `https://fahmed93.github.io/` to see your site

## How It Works

### GitHub Pages Naming Convention

GitHub Pages serves sites at the root domain (`username.github.io`) when:
- The repository is named `<username>/<username>` (in this case, `fahmed93/fahmed93`), OR
- The repository is specifically named `<username>/<username>.github.io`

Since this repository follows the `<username>/<username>` pattern, GitHub will serve it at the root domain once properly configured.

### Configuration Changes Made

The following changes were made to support root domain deployment:

1. **vite.config.js**: Changed `base` from `'/fahmed93/'` to `'/'`
   - This ensures all asset paths are relative to the root domain
   - Previously: `fahmed93.github.io/fahmed93/assets/...`
   - Now: `fahmed93.github.io/assets/...`

2. **GitHub Actions Workflow**: No changes needed
   - The existing `.github/workflows/deploy.yml` workflow already deploys correctly
   - It uses the GitHub Pages artifact upload/deploy actions

## Troubleshooting

### Site not loading correctly

If your site doesn't load properly:
1. Check that the GitHub Pages source is set to "GitHub Actions"
2. Verify the workflow completed successfully in the Actions tab
3. Check browser console for any 404 errors on assets
4. Clear your browser cache and try again

### Assets returning 404

If CSS, JavaScript, or images return 404:
1. Verify `vite.config.js` has `base: '/'` (not `base: '/fahmed93/'`)
2. Rebuild the project: `npm run build`
3. Wait for the GitHub Actions workflow to redeploy

### Workflow fails

If the deployment workflow fails:
1. Check the Actions tab for error details
2. Ensure GitHub Pages is enabled in repository settings
3. Verify the repository has proper permissions for GitHub Actions

## Additional Notes

- **Custom Domain**: If you want to use a custom domain (e.g., `fahadahmed.com`), you can configure it in the GitHub Pages settings
- **HTTPS**: GitHub Pages automatically provides HTTPS for `*.github.io` domains
- **Build Artifacts**: The `dist` folder is built by the workflow and deployed automatically
- **Deployment Frequency**: The site redeploys automatically on every push to the `main` branch

## Support

For issues related to GitHub Pages configuration, refer to:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions for Pages](https://github.com/actions/deploy-pages)
