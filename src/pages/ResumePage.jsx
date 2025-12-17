import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { loadResume } from '../utils/resumeParser';
import './ResumePage.css';

// Import all themes
import ModernMinimalist from '../themes/ModernMinimalist';
import ProfessionalCorporate from '../themes/ProfessionalCorporate';
import CompactDense from '../themes/CompactDense';
import TimelineBased from '../themes/TimelineBased';
import ClassicTraditional from '../themes/ClassicTraditional';
import Glassmorphism from '../themes/Glassmorphism';

const themes = [
  { id: 'modern-minimalist', name: 'Modern Minimalist', component: ModernMinimalist },
  { id: 'professional-corporate', name: 'Professional Corporate', component: ProfessionalCorporate },
  { id: 'compact-dense', name: 'Compact Dense', component: CompactDense },
  { id: 'timeline-based', name: 'Timeline Based', component: TimelineBased },
  { id: 'classic-traditional', name: 'Classic Traditional', component: ClassicTraditional },
  { id: 'glassmorphism', name: 'Glassmorphism', component: Glassmorphism },
];

function ResumePage() {
  const [currentTheme, setCurrentTheme] = useState('modern-minimalist');
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const data = await loadResume();
        setResumeData(data);
      } catch (error) {
        console.error('Failed to load resume:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, []);

  const handleThemeChange = (themeId) => {
    setCurrentTheme(themeId);
  };

  if (loading) {
    return <div className="loading">Loading resume...</div>;
  }

  if (!resumeData) {
    return <div className="error">Failed to load resume data</div>;
  }

  const selectedTheme = themes.find(theme => theme.id === currentTheme);
  const ThemeComponent = selectedTheme?.component;

  return (
    <div className="app">
      <Link to="/" className="back-home-link">← Back to Home</Link>
      <ThemeSwitcher 
        themes={themes}
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
      />
      {ThemeComponent && <ThemeComponent resume={resumeData} />}
    </div>
  );
}

export default ResumePage;
