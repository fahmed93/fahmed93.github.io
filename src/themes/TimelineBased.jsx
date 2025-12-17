import './TimelineBased.css';

const TimelineBased = ({ resume }) => {
  if (!resume) return <div>Loading...</div>;

  return (
    <div className="timeline-based">
      <div className="tb-hero">
        <h1>{resume.name}</h1>
        <p className="tb-summary">{resume.summary}</p>
        <div className="tb-contact-strip">
          {Object.entries(resume.contact).map(([key, value]) => (
            <span key={key}>{value}</span>
          ))}
        </div>
      </div>

      {resume.experience?.length > 0 && (
        <section className="tb-section">
          <h2 className="tb-section-heading">Career Timeline</h2>
          <div className="tb-timeline">
            {resume.experience.map((exp, idx) => (
              <div key={idx} className="tb-timeline-item">
                <div className="tb-timeline-dot"></div>
                <div className="tb-timeline-content">
                  <div className="tb-timeline-date">{exp.date}</div>
                  <h3>{exp.title}</h3>
                  <div className="tb-timeline-company">{exp.company} • {exp.location}</div>
                  <ul className="tb-timeline-details">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.skills?.length > 0 && (
        <section className="tb-section">
          <h2 className="tb-section-heading">Skills</h2>
          <div className="tb-skills-grid">
            {resume.skills.map((skill, idx) => (
              <div key={idx} className="tb-skill-box">
                <h4>{skill.category}</h4>
                <div className="tb-skill-list">{skill.items.join(' • ')}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.education?.length > 0 && (
        <section className="tb-section">
          <h2 className="tb-section-heading">Education Timeline</h2>
          <div className="tb-timeline">
            {resume.education.map((edu, idx) => (
              <div key={idx} className="tb-timeline-item">
                <div className="tb-timeline-dot"></div>
                <div className="tb-timeline-content">
                  <div className="tb-timeline-date">{edu.date}</div>
                  <h3>{edu.degree}</h3>
                  <div className="tb-timeline-company">{edu.institution}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default TimelineBased;
