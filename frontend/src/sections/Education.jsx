import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="section education-section" aria-label="Education History">
      <div className="container">
        <SectionHeading
          tag="ACADEMIC FOUNDATION"
          title="Education."
          description="Formal academic grounding in Computer Science, algorithms, systems engineering, and mathematics."
        />

        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-card card">
              <div className="edu-icon-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>

              <div className="edu-details">
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-field">{edu.field}</p>
                <p className="edu-institution">{edu.institution}</p>
                <p className="edu-location text-muted">{edu.location}</p>
                {edu.details && <p className="edu-description">{edu.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
