import React from 'react';

export default function SkillGroup({ category, skills }) {
  return (
    <div className="skill-group-card">
      <h3 className="skill-group-title">{category}</h3>
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
