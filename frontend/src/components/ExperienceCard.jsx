import React from 'react';

export default function ExperienceCard({ experience }) {
  const { role, organization, period, description, highlights, technologies } = experience;

  return (
    <div className="experience-card card">
      <div className="experience-card-header">
        <div>
          <h3 className="experience-role">{role}</h3>
          <p className="experience-org">{organization}</p>
        </div>
        {period && <span className="experience-period-badge">{period}</span>}
      </div>

      {description && <p className="experience-desc">{description}</p>}

      {highlights && highlights.length > 0 && (
        <ul className="experience-highlights">
          {highlights.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}

      {technologies && technologies.length > 0 && (
        <div className="experience-tech-tags">
          {technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
