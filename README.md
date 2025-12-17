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

Build for production:
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
