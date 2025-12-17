import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadResume } from '../utils/resumeParser';
import './ResumePage.css';

// Import Classic Traditional theme
import ClassicTraditional from '../themes/ClassicTraditional';

function ResumePage() {
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

  if (loading) {
    return <div className="loading">Loading resume...</div>;
  }

  if (!resumeData) {
    return <div className="error">Failed to load resume data</div>;
  }

  return (
    <div className="app">
      <Link to="/" className="back-home-link">← Back to Home</Link>
      <ClassicTraditional resume={resumeData} />
    </div>
  );
}

export default ResumePage;
