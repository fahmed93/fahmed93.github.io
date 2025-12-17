import './Glassmorphism.css';

const Glassmorphism = ({ resume }) => {
  if (!resume) return <div>Loading...</div>;

  return (
    <div className="glassmorphism">
      <div className="glass-bg-gradient"></div>
      
      <div className="glass-container">
        <header className="glass-header">
          <h1 className="glass-name">{resume.name}</h1>
          <p className="glass-tagline">{resume.summary}</p>
          <div className="glass-contact">
            {Object.entries(resume.contact).map(([key, value]) => (
              <span key={key} className="glass-contact-item">{value}</span>
            ))}
          </div>
        </header>

        <div className="glass-grid">
          {resume.skills?.length > 0 && (
            <div className="glass-card">
              <h2 className="glass-card-title">🎯 Skills</h2>
              {resume.skills.map((skill, idx) => (
                <div key={idx} className="glass-skill-group">
                  <h3>{skill.category}</h3>
                  <div className="glass-skill-bubbles">
                    {skill.items.map((item, i) => (
                      <span key={i} className="glass-bubble">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {resume.experience?.map((exp, idx) => (
            <div key={idx} className="glass-card">
              <h2 className="glass-card-title">💼 {exp.title}</h2>
              <div className="glass-meta">
                {exp.company} • {exp.location}
              </div>
              <div className="glass-date">{exp.date}</div>
              <ul className="glass-list">
                {exp.details.slice(0, 3).map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}

          {resume.education?.map((edu, idx) => (
            <div key={idx} className="glass-card">
              <h2 className="glass-card-title">🎓 {edu.degree}</h2>
              <div className="glass-meta">{edu.institution}</div>
              <div className="glass-date">{edu.date}</div>
            </div>
          ))}

          {resume.projects?.map((project, idx) => (
            <div key={idx} className="glass-card">
              <h2 className="glass-card-title">🚀 {project.name}</h2>
              <ul className="glass-list">
                {project.details.slice(0, 2).map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Glassmorphism;
