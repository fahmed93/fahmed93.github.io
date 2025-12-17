import './ProfessionalCorporate.css';

const ProfessionalCorporate = ({ resume }) => {
  if (!resume) return <div>Loading...</div>;

  return (
    <div className="professional-corporate">
      <div className="pc-sidebar">
        <div className="pc-profile">
          <h1>{resume.name}</h1>
          <div className="pc-title">Professional Profile</div>
        </div>

        {resume.contact && (
          <div className="pc-contact-section">
            <h3>Contact</h3>
            {Object.entries(resume.contact).map(([key, value]) => (
              <div key={key} className="pc-contact-item">
                <strong>{key}:</strong> {value}
              </div>
            ))}
          </div>
        )}

        {resume.skills?.length > 0 && (
          <div className="pc-skills-section">
            <h3>Skills</h3>
            {resume.skills.map((skill, idx) => (
              <div key={idx} className="pc-skill-group">
                <h4>{skill.category}</h4>
                <div className="pc-skill-tags">
                  {skill.items.map((item, i) => (
                    <span key={i} className="pc-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pc-main">
        {resume.summary && (
          <section className="pc-section">
            <h2>Professional Summary</h2>
            <p>{resume.summary}</p>
          </section>
        )}

        {resume.experience?.length > 0 && (
          <section className="pc-section">
            <h2>Professional Experience</h2>
            {resume.experience.map((exp, idx) => (
              <div key={idx} className="pc-exp-item">
                <h3>{exp.title}</h3>
                <div className="pc-exp-meta">
                  <span className="pc-company">{exp.company}</span>
                  <span className="pc-separator">|</span>
                  <span className="pc-location">{exp.location}</span>
                  <span className="pc-separator">|</span>
                  <span className="pc-date">{exp.date}</span>
                </div>
                <ul className="pc-achievements">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {resume.education?.length > 0 && (
          <section className="pc-section">
            <h2>Education</h2>
            {resume.education.map((edu, idx) => (
              <div key={idx} className="pc-edu-item">
                <h3>{edu.degree}</h3>
                <div className="pc-edu-meta">
                  {edu.institution} | {edu.date}
                </div>
                {edu.details?.length > 0 && (
                  <ul className="pc-edu-details">
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
    </div>
  );
};

export default ProfessionalCorporate;
