import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="design3-container">
      <div className="design3-background">
        <div className="design3-grid-bg"></div>
      </div>

      <header className="design3-header">
        <div className="design3-terminal">
          <span className="design3-prompt">{'>'}</span> fahad_ahmed
        </div>
      </header>

      <main className="design3-content">
        <div className="design3-intro">
          <h1 className="design3-title">
            <span className="design3-bracket">{'<'}</span>
            Fahad Ahmed
            <span className="design3-bracket">{'/>'}</span>
          </h1>
          <p className="design3-subtitle">
            <span className="design3-comment">// </span>Full Stack Developer
          </p>
        </div>

        <div className="design3-cards">
          <div className="design3-card">
            <div className="design3-card-header">
              <span className="design3-card-bullet">●</span> resume.pdf
            </div>
            <div className="design3-card-body">
              <code>const resume = await fetch('/resume')</code>
              <Link to="/resume" className="design3-card-link">Open File →</Link>
            </div>
          </div>

          <div className="design3-card">
            <div className="design3-card-header">
              <span className="design3-card-bullet">●</span> projects.json
            </div>
            <div className="design3-card-body">
              <code>import projects from './portfolio'</code>
              <Link to="/portfolio" className="design3-card-link">View Code →</Link>
            </div>
          </div>

          <div className="design3-card">
            <div className="design3-card-header">
              <span className="design3-card-bullet">●</span> blog.md
            </div>
            <div className="design3-card-body">
              <code># Latest thoughts & tutorials</code>
              <a href="#blog" className="design3-card-link">Read More →</a>
            </div>
          </div>

          <div className="design3-card">
            <div className="design3-card-header">
              <span className="design3-card-bullet">●</span> contact.js
            </div>
            <div className="design3-card-body">
              <code>sendMessage(email, message)</code>
              <Link to="/contact" className="design3-card-link">Execute →</Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="design3-footer">
        <p><span className="design3-comment">// </span>Dark Theme Tech-focused</p>
      </footer>
    </div>
  );
};

export default LandingPage;
