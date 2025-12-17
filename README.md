# Personal Portfolio Website

A personal portfolio code website built with React 19 and Vite. Features a landing page and a resume page with 6 switchable visual themes.

**Live Site:** [fahmed93.github.io](https://fahmed93.github.io)

## About

This is a modern personal portfolio website showcasing:
- Interactive landing page with multiple design themes
- Resume page with 6 professional themes that render from a single markdown source
- Responsive design optimized for all devices
- Fast performance with React 19 and Vite

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fahmed93/fahmed93.github.io.git
cd fahmed93.github.io
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in the browser.

### Building

<<<<<<< HEAD
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
fahmed93/
├── src/
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── LandingPage.css
│   │   ├── ResumePage.jsx
│   │   └── ResumePage.css
│   ├── themes/
│   │   ├── ClassicTraditional.jsx
│   │   ├── ClassicTraditional.css
│   │   ├── CompactDense.jsx
│   │   ├── CompactDense.css
│   │   ├── Glassmorphism.jsx
│   │   ├── Glassmorphism.css
│   │   ├── ModernMinimalist.jsx
│   │   ├── ModernMinimalist.css
│   │   ├── ProfessionalCorporate.jsx
│   │   ├── ProfessionalCorporate.css
│   │   ├── TimelineBased.jsx
│   │   └── TimelineBased.css
│   ├── components/
│   │   ├── ThemeSwitcher.jsx
│   │   └── ThemeSwitcher.css
│   ├── utils/
│   │   └── resumeParser.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
│   └── resume.md
├── index.html
└── package.json
```

## 🎯 Customization

### Changing Your Name

Update the name in each theme file:
- `src/themes/ClassicTraditional.jsx`
- `src/themes/CompactDense.jsx`
- `src/themes/Glassmorphism.jsx`
- `src/themes/ModernMinimalist.jsx`
- `src/themes/ProfessionalCorporate.jsx`
- `src/themes/TimelineBased.jsx`

### Adding Your Resume

The resume link is currently a placeholder (`#resume`). To integrate your resume:

1. When you have your resume project ready in another repo, you can:
   - Update the link to point to the resume page/route
   - Or import the resume component directly into this project

### Modifying Links

Update the navigation links in each design file to point to your actual pages:
- Resume: `#resume` → Your resume URL
- Projects: `#projects` → Your projects page
- Blog: `#blog` → Your blog URL
- Contact: `#contact` → Your contact page/form

## 🌐 Deployment

### Deploy to GitHub Pages

This site is configured to deploy to `https://fahmed93.github.io/` (root domain).

**Automatic Deployment:**
- The site automatically deploys via GitHub Actions on every push to `main`
- The workflow is configured in `.github/workflows/deploy.yml`

**Manual Setup Required:**
- See [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) for complete instructions on configuring GitHub Pages settings

**SPA Routing on GitHub Pages:**
- This project includes a Vite plugin that automatically creates a `404.html` file (copy of `index.html`) during build
- This ensures that direct navigation to routes like `/resume` or `/portfolio` works correctly on GitHub Pages
- When GitHub Pages encounters a 404, it serves the `404.html` file, which loads the React app and allows React Router to handle the routing

**Local Build:**
=======
Build for production:
>>>>>>> c393ef097099407aa8d8ec0009213cc59681047d
```bash
npm run build
```

The built files will be in the `dist/` folder.

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions whenever changes are pushed to the `main` branch.

**Manual Deployment:**
1. Build the project: `npm run build`
2. The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles deployment
3. Site is published to [https://fahmed93.github.io](https://fahmed93.github.io)

**Alternative Platforms:**
- **Vercel/Netlify**: Connect your GitHub repository and they will auto-detect the Vite configuration

## Project Structure

```
fahmed93.github.io/
├── src/
│   ├── pages/           # Landing and Resume pages
│   ├── themes/          # 6 resume theme components
│   ├── components/      # Reusable components
│   ├── utils/           # Utilities (resume parser)
│   └── App.jsx          # Main app with routing
├── public/
│   └── resume.md        # Resume content in markdown
├── docs/                # Additional documentation
└── package.json
```

## Technologies

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Modern styling with animations and effects

## Documentation

- [Project Summary](docs/PROJECT_SUMMARY.md) - Detailed overview of features and architecture
- [Quick Start Guide](docs/QUICK_START.md) - Step-by-step setup and customization guide

## License

This project is open source and available for personal use.
