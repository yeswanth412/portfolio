import React from 'react';

export default function SkillGroup({ category, skills, isSelected = false, onSelect }) {
  return (
    <div
      className={`skill-group-card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
      onFocus={onSelect}
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
      aria-label={`${category} technical skills group`}
    >
      <div className="skill-group-header">
        <span className="skill-group-dot" />
        <h3 className="skill-group-title">{category}</h3>
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
