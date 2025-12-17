import './ClassicTraditional.css';

const ClassicTraditional = ({ resume }) => {
  if (!resume) return <div>Loading...</div>;

  return (
    <div className="classic-traditional">
      <header className="ct-header">
        <h1>{resume.name}</h1>
        <div className="ct-contact-line">
          {Object.values(resume.contact).join(' • ')}
        </div>
      </header>

      {resume.summary && (
        <section className="ct-section">
          <h2>OBJECTIVE</h2>
          <p>{resume.summary}</p>
        </section>
      )}

      {resume.experience?.length > 0 && (
        <section className="ct-section">
          <h2>PROFESSIONAL EXPERIENCE</h2>
          {resume.experience.map((exp, idx) => (
            <div key={idx} className="ct-entry">
              <div className="ct-entry-header">
                <div className="ct-entry-left">
                  <strong>{exp.title}</strong>
                  <div>{exp.company}, {exp.location}</div>
                </div>
                <div className="ct-entry-right">{exp.date}</div>
              </div>
              <ul className="ct-list">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {resume.education?.length > 0 && (
        <section className="ct-section">
          <h2>EDUCATION</h2>
          {resume.education.map((edu, idx) => (
            <div key={idx} className="ct-entry">
              <div className="ct-entry-header">
                <div className="ct-entry-left">
                  <strong>{edu.degree}</strong>
                  <div>{edu.institution}</div>
                </div>
                <div className="ct-entry-right">{edu.date}</div>
              </div>
              {edu.details?.length > 0 && (
                <ul className="ct-list">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {resume.skills?.length > 0 && (
        <section className="ct-section">
          <h2>SKILLS</h2>
          {resume.skills.map((skill, idx) => (
            <div key={idx} className="ct-skill-line">
              <strong>{skill.category}:</strong> {skill.items.join(', ')}
            </div>
          ))}
        </section>
      )}

      {resume.certifications?.length > 0 && (
        <section className="ct-section">
          <h2>CERTIFICATIONS</h2>
          <ul className="ct-list">
            {resume.certifications.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default ClassicTraditional;
