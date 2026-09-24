import React from 'react';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  const engineeringFocus = [
    {
      title: 'Backend Systems & Architecture',
      description:
        'Designing modular APIs using FastAPI and Python with strict schema validation, dependency injection, and clean separation of concerns.',
    },
    {
      title: 'Data Modeling & Persistence',
      description:
        'Structuring relational database schemas in PostgreSQL using SQLAlchemy 2.x and document stores with MongoDB, emphasizing integrity and query predictability.',
    },
    {
      title: 'API Engineering & Security',
      description:
        'Implementing stateless JWT authentication, role-based access control (RBAC), CORS controls, and comprehensive OpenAPI / Swagger specifications.',
    },
    {
      title: 'Applied AI & Retrieval',
      description:
        'Developing autonomous research workflows with Gemini and building foundations in vector retrieval, RAG architectures, and tool-augmented agents.',
    },
  ];

  return (
    <section id="about" className="section about-section" aria-label="About Yeswanth Uggina">
      <div className="container">
        <SectionHeading
          tag="BACKGROUND & APPROACH"
          title="Engineering reliable backend services with an AI focus."
          description="A Computer Science background combined with practical backend engineering and modern language model integration."
        />

        <div className="about-grid">
          <div className="about-narrative">
            <p>
              I am a <strong>Python Backend Developer</strong> with a formal foundation in Computer Science and
              Engineering from Gayatri Vidya Parishad College of Engineering. My core work centers on designing,
              building, and optimizing backend systems that solve real operational problems.
            </p>
            <p>
              My primary toolkit revolves around <strong>Python</strong>, <strong>FastAPI</strong>, and{' '}
              <strong>SQLAlchemy</strong>, coupled with relational database engineering in <strong>PostgreSQL</strong>.
              I treat API design as a first-class contract—focusing on strict typing via Pydantic, predictable
              status responses, and defensive error handling.
            </p>
            <p>
              In addition to conventional REST architectures, I actively develop applied <strong>AI and LLM</strong> solutions.
              This includes constructing automated agents that decompose complex business queries, perform targeted web
              investigations, and explore retrieval-augmented generation (RAG) pipelines for contextual knowledge delivery.
            </p>
          </div>

          <div className="about-cards-list">
            {engineeringFocus.map((focus) => (
              <div key={focus.title} className="focus-card">
                <h3 className="focus-card-title">{focus.title}</h3>
                <p className="focus-card-desc">{focus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
