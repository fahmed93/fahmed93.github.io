import './ModernMinimalist.css';

const ModernMinimalist = ({ resume }) => {
  if (!resume) return <div>Loading...</div>;

  return (
    <div className="modern-minimalist">
      <header className="mm-header">
        <h1>{resume.name}</h1>
        <div className="mm-contact">
          {Object.entries(resume.contact).map(([key, value]) => (
            <span key={key}>{value}</span>
          ))}
        </div>
      </header>

      {resume.summary && (
        <section className="mm-section">
          <h2>About</h2>
          <p>{resume.summary}</p>
        </section>
      )}

      {resume.experience?.length > 0 && (
        <section className="mm-section">
          <h2>Experience</h2>
          {resume.experience.map((exp, idx) => (
            <div key={idx} className="mm-item">
              <div className="mm-item-header">
                <h3>{exp.title}</h3>
                <span className="mm-date">{exp.date}</span>
              </div>
              <div className="mm-company">{exp.company} • {exp.location}</div>
              <ul className="mm-details">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {resume.skills?.length > 0 && (
        <section className="mm-section">
          <h2>Skills</h2>
          {resume.skills.map((skill, idx) => (
            <div key={idx} className="mm-skill-group">
              <strong>{skill.category}:</strong> {skill.items.join(', ')}
            </div>
          ))}
        </section>
      )}

      {resume.education?.length > 0 && (
        <section className="mm-section">
          <h2>Education</h2>
          {resume.education.map((edu, idx) => (
            <div key={idx} className="mm-item">
              <h3>{edu.degree}</h3>
              <div className="mm-company">{edu.institution} • {edu.date}</div>
              {edu.details?.length > 0 && (
                <ul className="mm-details">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ModernMinimalist;
