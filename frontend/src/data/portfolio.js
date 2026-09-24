export const portfolioData = {
  personal: {
    name: "Yeswanth Uggina",
    title: "Python Backend Developer",
    subtitle: "Building backend systems, APIs, and AI-powered applications with Python.",
    bio: "Python Backend Developer focused on building robust backend systems, scalable REST APIs, relational data modeling, and practical AI-powered applications.",
    email: "yeswanthuggina@gmail.com",
    github: "https://github.com/yeswanthuggina",
    linkedin: "https://www.linkedin.com/in/yeswanthuggina/",
    location: "India",
    availability: "Available for backend and AI engineering roles",
  },

  about: {
    heading: "Engineering robust backend systems with modern Python.",
    paragraphs: [
      "I am a Python Backend Developer with a Computer Science and Engineering background from Gayatri Vidya Parishad College of Engineering. My core focus is designing, building, and maintaining reliable backend architectures, high-performance REST APIs, and database-driven applications.",
      "My primary backend stack centers on Python, FastAPI, and SQLAlchemy, with relational data modeling in PostgreSQL and document storage in MongoDB. I place strong emphasis on strict request/response validation with Pydantic, clear API contracts, authentication/authorization workflows, and predictable error handling.",
      "Beyond conventional backend engineering, I am actively expanding into applied Artificial Intelligence—working with machine learning pipelines, Large Language Model (LLM) integration, and Retrieval-Augmented Generation (RAG) concepts to build practical, intelligent services.",
    ],
  },

  skills: [
    {
      category: "Backend",
      skills: ["Python", "FastAPI", "REST APIs", "SQL", "SQLAlchemy"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      category: "AI / ML",
      skills: ["Machine Learning", "LLM", "RAG"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "Postman", "Swagger UI", "VS Code"],
    },
  ],

  projects: [
    {
      id: "gocars",
      title: "GoCars",
      description:
        "A vehicle rental platform focused on backend architecture, booking workflows, authentication, authorization, and database-driven application design.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "RBAC", "Supabase"],
      githubUrl: "https://github.com/yeswanthuggina/gocars",
      liveUrl: null,
    },
    {
      id: "flashwear",
      title: "FLASHWEAR",
      description:
        "E-commerce application project focused on product catalog management, cart interactions, and shopping functionality with clean RESTful endpoints.",
      technologies: ["Python", "FastAPI", "REST APIs", "SQLAlchemy"],
      githubUrl: "https://github.com/yeswanthuggina/Fastapi-ecommerce-complete",
      liveUrl: null,
    },
    {
      id: "auth-api",
      title: "FastAPI Authentication API",
      description:
        "Backend authentication service implementing registration, login, protected profile access, and JWT-based authentication.",
      technologies: ["Python", "FastAPI", "MongoDB", "JWT"],
      githubUrl: "https://github.com/yeswanthuggina/auth_service",
      liveUrl: null,
    },
    {
      id: "ml-projects",
      title: "Machine Learning Projects",
      description:
        "A grouped machine learning project showcase focusing on regression and classification pipelines, feature engineering, and model evaluation.",
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
      githubUrl: "https://github.com/yeswanthuggina",
      liveUrl: null,
    },
  ],

  experience: [
    {
      role: "Python Backend Developer",
      organization: "Independent Software Engineering",
      period: "2024 – Present",
      description:
        "Designing, developing, and testing modular backend services, database schemas, and RESTful APIs.",
      highlights: [
        "Architected the GoCars rental platform backend with FastAPI, PostgreSQL, and SQLAlchemy, implementing role-based access control (RBAC).",
        "Constructed a dedicated JWT authentication service utilizing password hashing and MongoDB document storage.",
        "Built RESTful product catalog and order processing workflows for the FLASHWEAR e-commerce project.",
        "Developed end-to-end machine learning data preprocessing, classification, and regression workflows with Scikit-Learn.",
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "MongoDB", "REST APIs", "Git"],
    },
  ],

  education: [
    {
      degree: "B.Tech — Computer Science and Engineering",
      institution: "Gayatri Vidya Parishad College of Engineering",
      location: "Visakhapatnam, India",
      details: "Comprehensive coursework in Data Structures, Algorithms, DBMS, OOP, and Computer Networks.",
    },
    {
      degree: "Intermediate (Senior Secondary)",
      institution: "State Board of Intermediate Education",
      field: "Mathematics, Physics, Chemistry (MPC)",
      location: "Andhra Pradesh, India",
      details: "Rigorous focus on advanced mathematics, analytical reasoning, and foundational science.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "State Board of Secondary Education",
      field: "General Secondary Curriculum",
      location: "Andhra Pradesh, India",
      details: "Foundational education in mathematics, physical sciences, and computer literacy.",
    },
  ],
};
