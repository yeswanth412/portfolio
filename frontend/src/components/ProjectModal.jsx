import React, { useEffect, useRef } from 'react';

export default function ProjectModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Handle ESC key press
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    // Focus close button on open
    const focusable = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable && focusable.length > 0) {
      focusable[0].focus();
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { title, description, architecture, highlights, technologies, githubUrl, liveUrl } = project;

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="project-modal-dialog card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="project-modal-header">
          <div>
            <div className="project-modal-tag">
              <span className="modal-tag-dot" />
              <span>PROJECT ARCHITECTURE</span>
            </div>
            <h2 id="project-modal-title" className="project-modal-title">
              {title}
            </h2>
          </div>

          <button
            type="button"
            className="project-modal-close"
            onClick={onClose}
            aria-label="Close project modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="project-modal-body">
          <div className="modal-section">
            <h4 className="modal-section-heading">Overview</h4>
            <p className="modal-text">{description}</p>
          </div>

          {architecture && (
            <div className="modal-section">
              <h4 className="modal-section-heading">Backend & System Architecture</h4>
              <p className="modal-text">{architecture}</p>
            </div>
          )}

          {highlights && highlights.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-heading">Key Technical Highlights</h4>
              <ul className="modal-highlights-list">
                {highlights.map((highlight, idx) => (
                  <li key={idx} className="modal-highlight-item">
                    <span className="highlight-bullet" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {technologies && technologies.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-heading">Technologies & Libraries</h4>
              <div className="modal-tech-stack">
                {technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="project-modal-footer">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              aria-label={`View ${title} repository on GitHub`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span>View Repository</span>
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              aria-label={`View live deployment of ${title}`}
            >
              <span>Live Demo</span>
            </a>
          )}

          <button
            type="button"
            className="btn btn-outline btn-sm modal-close-btn"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
