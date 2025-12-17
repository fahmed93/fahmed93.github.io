import './ThemeSwitcher.css';

const ThemeSwitcher = ({ themes, currentTheme, onThemeChange }) => {
  return (
    <div className="theme-switcher">
      <label htmlFor="theme-select">Choose Theme:</label>
      <select 
        id="theme-select"
        value={currentTheme} 
        onChange={(e) => onThemeChange(e.target.value)}
        className="theme-select"
      >
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSwitcher;
