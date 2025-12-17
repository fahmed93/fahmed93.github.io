import './CompactDense.css';

const CompactDense = ({ resume }) => {
  if (!resume) return <div>Loading...</div>;

  return (
    <div className="compact-dense">
      <div className="cd-header">
        <h1>{resume.name}</h1>
        <div className="cd-contact-inline">
          {Object.values(resume.contact).join(' • ')}
        </div>
      </div>

      <div className="cd-two-col">
        <div className="cd-col-left">
          {resume.summary && (
            <section className="cd-section">
              <h2>Summary</h2>
              <p className="cd-text-sm">{resume.summary}</p>
            </section>
          )}

          {resume.skills?.length > 0 && (
            <section className="cd-section">
              <h2>Skills</h2>
              {resume.skills.map((skill, idx) => (
                <div key={idx} className="cd-skill-compact">
                  <strong>{skill.category}:</strong> {skill.items.join(', ')}
                </div>
              ))}
            </section>
          )}

          {resume.education?.length > 0 && (
            <section className="cd-section">
              <h2>Education</h2>
              {resume.education.map((edu, idx) => (
                <div key={idx} className="cd-item-compact">
                  <strong>{edu.degree}</strong><br />
                  {edu.institution} | {edu.date}
                </div>
              ))}
            </section>
          )}
        </div>

        <div className="cd-col-right">
          {resume.experience?.length > 0 && (
            <section className="cd-section">
              <h2>Experience</h2>
              {resume.experience.map((exp, idx) => (
                <div key={idx} className="cd-item-compact">
                  <strong>{exp.title}</strong> - {exp.company}<br />
                  <span className="cd-meta">{exp.location} | {exp.date}</span>
                  <ul className="cd-list-compact">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompactDense;
