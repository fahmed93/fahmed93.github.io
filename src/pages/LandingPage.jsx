import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landingpage-container">
      <div className="landingpage-background">
        <div className="landingpage-grid-bg"></div>
      </div>

      <header className="landingpage-header">
        <div className="landingpage-terminal">
          <span className="landingpage-prompt">{'>'}</span> fahad_ahmed
        </div>
      </header>

      <main className="landingpage-content">
        <div className="landingpage-intro">
          <h1 className="landingpage-title">
            <span className="landingpage-bracket">{'<'}</span>
            Fahad Ahmed
            <span className="landingpage-bracket">{'/>'}</span>
          </h1>
          <p className="landingpage-subtitle">
            <span className="landingpage-comment">// </span>Full Stack Developer
          </p>
        </div>

        <div className="landingpage-cards">
          <div className="landingpage-card">
            <div className="landingpage-card-header">
              <span className="landingpage-card-bullet">●</span> resume.pdf
            </div>
            <div className="landingpage-card-body">
              <code>const resume = await fetch('/resume')</code>
              <Link to="/resume" className="landingpage-card-link">Open File →</Link>
            </div>
          </div>

          <div className="landingpage-card">
            <div className="landingpage-card-header">
              <span className="landingpage-card-bullet">●</span> projects.json
            </div>
            <div className="landingpage-card-body">
              <code>import projects from './portfolio'</code>
              <Link to="/portfolio" className="landingpage-card-link">View Code →</Link>
            </div>
          </div>

          <div className="landingpage-card">
            <div className="landingpage-card-header">
              <span className="landingpage-card-bullet">●</span> blog.md
            </div>
            <div className="landingpage-card-body">
              <code># Latest thoughts & tutorials</code>
              <a href="#blog" className="landingpage-card-link">Read More →</a>
            </div>
          </div>

          <div className="landingpage-card">
            <div className="landingpage-card-header">
              <span className="landingpage-card-bullet">●</span> contact.js
            </div>
            <div className="landingpage-card-body">
              <code>sendMessage(email, message)</code>
              <Link to="/contact" className="landingpage-card-link">Execute →</Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="landingpage-footer">
        <p><span className="landingpage-comment">// </span>Dark Theme Tech-focused</p>
      </footer>
    </div>
  );
};

export default LandingPage;
