import React, { useEffect } from 'react';
import { socialsData } from '../data/socials';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-title">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 id="resume-title" className="modal-title">Resume Summary</h3>
            <p className="modal-subtitle">Yeswanth Uggina — Python Backend Developer | AI</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        <div className="modal-body">
          <div className="resume-section">
            <h4 className="resume-section-title">Core Competencies</h4>
            <p>
              Backend system design, RESTful API architecture (FastAPI), relational data modeling (PostgreSQL, SQLAlchemy 2.x),
              document databases (MongoDB), JWT authentication & RBAC, applied LLM integration (Gemini, RAG concepts).
            </p>
          </div>

          <div className="resume-section">
            <h4 className="resume-section-title">Education</h4>
            <p><strong>Bachelor of Technology</strong> in Computer Science and Engineering</p>
            <p className="text-muted">Gayatri Vidya Parishad College of Engineering</p>
          </div>

          <div className="resume-section">
            <h4 className="resume-section-title">Direct Contact</h4>
            <p>Email: <a href={`mailto:${socialsData.email}`} className="text-accent">{socialsData.email}</a></p>
            <p>LinkedIn: <a href={socialsData.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent">linkedin.com/in/yeswanthuggina</a></p>
            <p>GitHub: <a href={socialsData.github} target="_blank" rel="noopener noreferrer" className="text-accent">github.com/yeswanthuggina</a></p>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href={`mailto:${socialsData.email}?subject=Job%20Opportunity%20-%20Backend%20Developer`}
            className="btn btn-primary btn-sm"
          >
            Request Full Resume PDF
          </a>
          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
