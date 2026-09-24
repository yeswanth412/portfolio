import React from 'react';

/**
 * SectionDivider Component
 * Provides visual continuity between sections using a subtle network node motif.
 */
export default function SectionDivider({ className = '' }) {
  return (
    <div className={`section-divider ${className}`} aria-hidden="true">
      <div className="divider-line left" />
      <div className="divider-node">
        <span className="divider-dot" />
      </div>
      <div className="divider-line right" />
    </div>
  );
}
