# Copilot Instructions for fahmed93.github.io

## Project Overview
Personal portfolio site built with React 19 + Vite. Features a landing page and a **resume page with 6 switchable visual themes** that render content from a single markdown source (`public/resume.md`).

## Architecture

### Data Flow: Markdown → Parsed Object → Theme Components
```
public/resume.md → resumeParser.js → ResumePage.jsx → Theme Components
```
- Resume content is authored in markdown with specific heading conventions
- `src/utils/resumeParser.js` transforms markdown into a structured `resume` object
- All 6 theme components in `src/themes/` receive the same `resume` prop and render it differently

### Key Conventions

**Theme Components** (`src/themes/*.jsx`):
- Each theme is a self-contained JSX + CSS pair (e.g., `ModernMinimalist.jsx` + `ModernMinimalist.css`)
- Every theme receives `{ resume }` prop with identical data structure
- Use CSS class prefixes matching theme name to prevent style collisions (e.g., `.mm-` for ModernMinimalist)

**Resume Data Structure** (from `resumeParser.js`):
```javascript
{
  name: string,
  contact: { email, location, linkedin, github, portfolio },
  summary: string,
  skills: [{ category: string, items: string[] }],
  experience: [{ title, company, date, location, details: string[] }],
  education: [{ degree, institution, date, details: string[] }],
  projects: [{ name, details: string[] }],
  certifications: string[],
  awards: string[],
  languages: string[],
  interests: string[]
}
```

**Resume Markdown Format** (`public/resume.md`):
- `# Name` for person's name
- `## Section` for main sections (Contact, Summary, Skills, Experience, Education)
- `### Subsection` for items within sections (job titles, skill categories)
- Parser matches section names case-insensitively using `.includes()`

## Development Commands
```bash
npm run dev      # Start dev server at localhost:5173
npm run build    # Production build to dist/
npm run lint     # ESLint check
npm run preview  # Preview production build
```

## Adding a New Theme
1. Create `src/themes/NewTheme.jsx` and `src/themes/NewTheme.css`
2. Component must accept `{ resume }` prop and render resume sections
3. Use unique CSS class prefix (e.g., `.nt-` for NewTheme)
4. Register in `src/pages/ResumePage.jsx` themes array:
   ```javascript
   import NewTheme from '../themes/NewTheme';
   // Add to themes array:
   { id: 'new-theme', name: 'New Theme', component: NewTheme }
   ```

## Modifying Resume Content
Edit `public/resume.md` directly. Changes reflect across all themes without code changes.

## Routing
- `/` → `LandingPage.jsx` (static landing with code-aesthetic design)
- `/resume` → `ResumePage.jsx` (dynamic theme-switchable resume)
- Uses `react-router-dom` with `BASE_URL` for GitHub Pages compatibility

## Deployment
Automatic via GitHub Actions on push to `main`. Builds and deploys to GitHub Pages.

## ESLint Configuration
- Allows unused vars starting with uppercase or underscore (`varsIgnorePattern: '^[A-Z_]'`)
- React Hooks and React Refresh plugins enabled
