# Quick Start Guide

## Running the Homepage Locally

1. Install dependencies (first time only):
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Testing the Production Build

```bash
npm run preview
```

## Deploying to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. Enable GitHub Pages in your repository:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. Merge this PR to the `main` branch

3. The deployment workflow will automatically run and deploy your site

4. Your homepage will be available at: `https://fahmed93.github.io/fahmed93/`

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to GitHub Pages using your preferred method

## Customizing the Homepage

### Change Your Name

Update the name in each theme component:
- `src/themes/ClassicTraditional.jsx`
- `src/themes/CompactDense.jsx`
- `src/themes/Glassmorphism.jsx`
- `src/themes/ModernMinimalist.jsx`
- `src/themes/ProfessionalCorporate.jsx`
- `src/themes/TimelineBased.jsx`

### Update Navigation Links

Replace placeholder links (`#resume`, `#projects`, etc.) with actual URLs:
- Find all `href="#resume"` and replace with your resume URL
- Find all `href="#projects"` and replace with your projects page
- Find all `href="#blog"` and replace with your blog URL
- Find all `href="#contact"` and replace with your contact form/email

### Simplify to One Design

If you prefer to keep only one theme:

1. Choose your favorite theme (e.g., ModernMinimalist)
2. Update `src/App.jsx` to use only that theme

3. Remove the theme switcher and other theme files if desired

## Project Structure

```
fahmed93/
├── src/
│   ├── pages/             # Landing and Resume pages
│   ├── themes/            # Six theme components
│   ├── components/        # Reusable components (ThemeSwitcher)
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main app with routing
│   └── main.jsx           # Entry point
├── public/                # Static assets
├── dist/                  # Build output (generated)
└── package.json           # Dependencies
```

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Troubleshooting

### Port 5173 is already in use
Kill the existing process or use a different port:
```bash
npm run dev -- --port 3000
```

### Build fails
Make sure all dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
```

### GitHub Pages shows 404
1. Check that GitHub Pages is enabled in repository settings
2. Verify the workflow ran successfully in the Actions tab
3. Make sure the base path in `vite.config.js` matches your repository name

## Need Help?

- Check the full README: `README.md`
- Review the project summary: `PROJECT_SUMMARY.md`
- Open an issue on GitHub
