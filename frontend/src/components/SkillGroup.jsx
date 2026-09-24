import React from 'react';

export default function SkillGroup({ category, description, skills }) {
  return (
    <div className="skill-group-card">
      <div className="skill-group-header">
        <h3 className="skill-group-title">{category}</h3>
        {description && <p className="skill-group-desc">{description}</p>}
      </div>
      <div className="skill-tags">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
