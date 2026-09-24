export const portfolioData = {
  personal: {
    name: "Yeswanth Uggina",
    fullName: "Uggina Yeswanth Narasayya Naidu",
    title: "Python Backend Developer",
    subtitle: "Building backend systems, APIs, and AI-powered applications with Python.",
    bio: "Python Backend Developer focused on building robust backend systems, scalable REST APIs, relational data modeling, and practical AI-powered applications.",
    email: "yeswanthuggina@gmail.com",
    github: "https://github.com/yeswanth412?tab=repositories",
    linkedin: "https://www.linkedin.com/in/yeswanth-uggina/",
    location: "India",
    availability: "Available for backend and AI engineering roles",
  },

  about: {
    heading: "Engineering robust backend systems with modern Python.",
    fullName: "Uggina Yeswanth Narasayya Naidu",
    educationBrief: "B.Tech in Computer Science and Engineering — Gayatri Vidya Parishad College of Engineering",
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
      architecture:
        "Engineered with FastAPI and SQLAlchemy for database-backed rental management. Employs JWT authentication, Role-Based Access Control (RBAC), and relational schema design in PostgreSQL/Supabase with strict request validation.",
      highlights: [
        "FastAPI backend architecture with modular routers",
        "Role-Based Access Control (RBAC) and JWT authentication",
        "Relational schema modeling and queries via SQLAlchemy",
        "PostgreSQL database integration and Supabase persistence",
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "RBAC", "Supabase"],
      githubUrl: "https://github.com/yeswanth412/go_cars",
      liveUrl: null,
    },
    {
      id: "flashwear",
      title: "FLASHWEAR",
      description:
        "E-commerce application project focused on product catalog management, cart interactions, and shopping functionality with clean RESTful endpoints.",
      architecture:
        "Modular REST API architecture implemented in Python and FastAPI. Implements structured data models for products and inventory management with SQLAlchemy ORM handling database persistence.",
      highlights: [
        "Product catalog management and item categorization endpoints",
        "Cart interaction logic and order processing flow",
        "FastAPI dependency injection and Pydantic validation",
        "SQLAlchemy ORM integration for structured queries",
      ],
      technologies: ["Python", "FastAPI", "REST APIs", "SQLAlchemy"],
      githubUrl: "https://github.com/yeswanth412/e_commerce",
      liveUrl: null,
    },
    {
      id: "auth-api",
      title: "FastAPI Authentication API",
      description:
        "Backend authentication service implementing registration, login, protected profile access, and JWT-based authentication.",
      architecture:
        "Dedicated microservice for user identity and credential validation. Incorporates password hashing with bcrypt, JSON Web Token (JWT) issuance, and document-oriented storage with MongoDB.",
      highlights: [
        "Secure registration and login endpoints with password hashing",
        "JWT generation, expiration management, and token verification",
        "Protected profile route with Bearer token authentication",
        "MongoDB document persistence and schema validation",
      ],
      technologies: ["Python", "FastAPI", "MongoDB", "JWT"],
      githubUrl: "https://github.com/yeswanth412/fastapi_authentication-service",
      liveUrl: null,
    },
    {
      id: "ml-projects",
      title: "Machine Learning Projects",
      description:
        "A grouped machine learning project showcase focusing on regression and classification pipelines, feature engineering, and model evaluation.",
      architecture:
        "End-to-end data processing and modeling workflows developed in Python. Leverages Pandas and NumPy for feature engineering and Scikit-Learn for training classification and regression models.",
      highlights: [
        "Data preprocessing, normalization, and feature transformation pipelines",
        "Model evaluation using precision, recall, and cross-validation metrics",
        "Implementation of supervised learning algorithms",
        "Exploratory Data Analysis (EDA) on structured datasets",
      ],
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
      githubUrl: "https://github.com/yeswanth412?tab=repositories",
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
