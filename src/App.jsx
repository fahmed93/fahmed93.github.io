import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';

const basename = import.meta.env.BASE_URL;

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App
