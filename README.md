# Fahad Ahmed - Personal Homepage

A modern, interactive React homepage with 5 different design themes. This project serves as a personal portfolio site for GitHub with easy-to-switch design options.

## 🎨 Features

- **5 Unique Designs**: Switch between different visual styles instantly
- **Modern Tech Stack**: Built with React 19 and Vite for fast performance
- **Responsive Design**: All designs are mobile-friendly and adaptive
- **Easy Theme Switching**: Toggle between designs with a simple dropdown menu
- **Navigation Links**: Includes spots for Resume, Projects, Blog, and Contact pages

## 🚀 Available Designs

1. **Modern Gradient** - Vibrant purple gradient with glassmorphic cards
2. **Minimalist Professional** - Clean, typography-focused design with subtle animations
3. **Dark Theme Tech** - GitHub-inspired dark theme with code-like aesthetics
4. **Colorful Creative** - Bright, animated cards with playful colors
5. **Glassmorphism** - Frosted glass effect with smooth morphing backgrounds

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fahmed93/fahmed93.git
cd fahmed93
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

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

**Local Build:**
```bash
npm run build
```

The built files will be in the `dist` folder.

### Deploy to Vercel/Netlify

Simply connect your GitHub repository to Vercel or Netlify and they will automatically detect the Vite configuration.

## 🔧 Technologies Used

- **React 19** - Latest React with modern features
- **Vite** - Next-generation frontend tooling
- **CSS3** - Modern CSS with animations and glassmorphism effects
- **ESLint** - Code quality and consistency

## 📝 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.
