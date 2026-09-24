export const projectsData = [
  {
    id: "gocars",
    title: "GoCars",
    subtitle: "Full-Stack Car Rental & Self-Drive Platform",
    category: "Full Stack",
    description:
      "A full-stack car rental and self-drive platform designed around real-world booking, user roles, vehicle management, and backend business rules.",
    highlights: [
      "Role-Based Access Control (RBAC) separating administrative actions and customer reservations.",
      "Transactional vehicle booking lifecycle with conflict prevention and state validation.",
      "Relational schema modeled with SQLAlchemy and PostgreSQL via Supabase integration.",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "RBAC", "Supabase"],
    githubUrl: "https://github.com/yeswanthuggina/gocars",
    liveUrl: null,
    featured: true,
  },
  {
    id: "tericai",
    title: "TERICAI",
    subtitle: "AI Business Solution Discovery & Research Agent",
    category: "AI",
    description:
      "AI-powered business solution discovery and research agent designed to analyze business requirements, identify technology approaches, and provide research-backed solution insights.",
    highlights: [
      "Autonomous problem analysis pipeline decomposing client requirements into structured research queries.",
      "Gemini LLM integration combined with targeted web research synthesis.",
      "Structured output generation presenting actionable technology roadmaps and trade-offs.",
    ],
    technologies: ["Python", "FastAPI", "AI", "Gemini", "Web Research"],
    githubUrl: "https://github.com/yeswanthuggina/tericai-agent",
    liveUrl: null,
    featured: true,
  },
  {
    id: "flashwear",
    title: "FLASHWEAR",
    subtitle: "E-Commerce Application Platform",
    category: "Backend",
    description:
      "E-commerce application project focused on product catalog management, cart interactions, and shopping functionality with clean RESTful endpoints.",
    highlights: [
      "Modular product catalog and categorized inventory management.",
      "Cart and checkout data workflows built with validation and structured responses.",
      "FastAPI endpoint design with automated OpenAPI documentation.",
    ],
    technologies: ["Python", "FastAPI", "REST APIs", "SQLAlchemy"],
    githubUrl: "https://github.com/yeswanthuggina/Fastapi-ecommerce-complete",
    liveUrl: null,
    featured: false,
  },
  {
    id: "auth-service",
    title: "Authentication API",
    subtitle: "Secure JWT Backend Auth Service",
    category: "Backend",
    description:
      "Backend authentication service implementing registration, login, protected profile access, and JWT-based authentication.",
    highlights: [
      "Secure password hashing with cryptographic salt generation.",
      "Stateless JWT issuance, verification, and expiration handling.",
      "MongoDB document store integration for flexible user account attributes.",
    ],
    technologies: ["Python", "FastAPI", "MongoDB", "JWT"],
    githubUrl: "https://github.com/yeswanthuggina/auth_service",
    liveUrl: null,
    featured: false,
  },
  {
    id: "ml-projects",
    title: "Applied Machine Learning Projects",
    subtitle: "Regression & Classification Pipelines",
    category: "AI",
    description:
      "A compact project grouping for regression and classification work covering data preprocessing, feature engineering, and model evaluation.",
    highlights: [
      "End-to-end data pipelines implementing missing value handling, scaling, and categorical encoding.",
      "Comparative model training across linear estimators, tree-based models, and ensembles.",
      "Rigorous cross-validation and standard evaluation metrics without fabricated claims.",
    ],
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    githubUrl: "https://github.com/yeswanthuggina",
    liveUrl: null,
    featured: false,
  },
];
