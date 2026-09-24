import React from 'react';

export default function SectionHeading({
  tag,
  title,
  description,
  align = 'left',
  className = '',
}) {
  return (
    <div className={`section-heading section-heading-${align} ${className}`}>
      {tag && <div className="section-tag">{tag}</div>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
