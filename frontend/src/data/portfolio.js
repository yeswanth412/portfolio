export const portfolioData = {
  personal: {
    name: "Yeswanth Uggina",
    fullName: "UGGINA YESWANTH NARASAYYA NAIDU",
    title: "Python Developer",
    subtitle: "Building practical applications, APIs, and database-backed systems with Python.",
    bio: "Aspiring Python Developer with a strong foundation in Python, FastAPI, SQL, PostgreSQL, and database management. Experienced in developing RESTful APIs, implementing CRUD operations, and designing relational database solutions.",
    email: "ugginayeswanthnarasayyanaidu@gmail.com",
    phone: "+91-6304397552",
    github: "https://github.com/yeswanth412?tab=repositories",
    linkedin: "https://www.linkedin.com/in/yeswanth-uggina/",
    location: "Visakhapatnam, Andhra Pradesh, India",
    availability: "Available for opportunities",
    resumeUrl: "#contact",
  },

  about: {
    heading: "Building reliable backend architectures, structured APIs, and data solutions with modern Python.",
    fullName: "UGGINA YESWANTH NARASAYYA NAIDU",
    educationBrief: "Bachelor of Technology (Computer Science & Engineering) — Gayatri Vidya Parishad College for Degree & PG Courses (A), Visakhapatnam",
    paragraphs: [
      "I am a Python Developer with a Bachelor of Technology in Computer Science and Engineering from Gayatri Vidya Parishad College for Degree & PG Courses (A), Visakhapatnam.",
      "My primary engineering focus centers on developing RESTful APIs, implementing secure CRUD operations, and designing relational database architectures with Python, FastAPI, SQL, and PostgreSQL.",
      "With hands-on experience in JWT authentication, modular application design, database normalization, and complex querying, I focus on writing clean, scalable, and maintainable software.",
    ],
  },

  skills: [
    {
      category: "LANGUAGES",
      skills: ["Python", "SQL"],
    },
    {
      category: "BACKEND & APIS",
      skills: ["FastAPI", "REST APIs", "Pydantic", "CRUD Operations"],
    },
    {
      category: "DATABASES",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      category: "WEB & FRONTEND",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      category: "TOOLS & ENVIRONMENT",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Swagger UI"],
    },
    {
      category: "CORE CONCEPTS",
      skills: ["OOP", "DBMS", "Data Structures", "Relational Modeling"],
    },
  ],

  capabilities: [
    {
      id: "01",
      title: "PYTHON & FASTAPI BACKEND",
      description: "Developing structured RESTful APIs, Pydantic validation, and modular router architectures.",
    },
    {
      id: "02",
      title: "DATABASE MANAGEMENT",
      description: "Designing normalized schemas, complex joins, indexing, and persistence across PostgreSQL and MySQL.",
    },
    {
      id: "03",
      title: "SECURITY & AUTHENTICATION",
      description: "Implementing JWT token lifecycles, password hashing, and role-based access controls.",
    },
    {
      id: "04",
      title: "APPLIED AI EXPLORATION",
      description: "Certified in CS50 AI with Python, exploring machine learning pipelines and intelligent workflows.",
    },
  ],

  quote: "I build practical software systems that solve real-world problems with clean code, reliable APIs, and modern technologies.",

  // VERIFIED GITHUB PROJECTS ONLY
  projects: [
    {
      id: "go-cars",
      number: "01",
      title: "GoCars",
      category: "Mobility & Car Rental Platform",
      description: "A full-featured car mobility and rental platform supporting self-drive rentals, driver services, fleet management, and automated booking workflows.",
      architecture: "Clean layered backend architecture built with FastAPI, SQLAlchemy 2.0, and PostgreSQL. Features Alembic database migrations, JWT authentication, and structured business logic.",
      highlights: [
        "Modular FastAPI router architecture with clean separation of concerns",
        "Relational schema modeling and migrations with SQLAlchemy & Alembic",
        "Booking workflow state management and pricing calculations",
        "PostgreSQL database integration with strict validation",
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT"],
      githubUrl: "https://github.com/yeswanth412/go_cars",
      liveUrl: null,
    },
    {
      id: "fastapi-auth",
      number: "02",
      title: "FastAPI Authentication Service",
      category: "Security & Microservices",
      description: "A production-ready authentication backend implementing user registration, secure login, password reset, and protected API routes.",
      architecture: "Engineered with FastAPI, MongoDB, JWT (access and refresh tokens), and SMTP email verification for robust user identity management.",
      highlights: [
        "User registration and credential hashing workflows",
        "JWT generation with access and refresh token rotation",
        "SMTP email verification and password reset integration",
        "Protected endpoint dependencies with Bearer token authentication",
      ],
      technologies: ["Python", "FastAPI", "MongoDB", "JWT", "SMTP"],
      githubUrl: "https://github.com/yeswanth412/fastapi_authentication-service",
      liveUrl: null,
    },
    {
      id: "ecommerce-db",
      number: "03",
      title: "E-Commerce Database System",
      category: "Relational Database Engineering",
      description: "A relational database schema for an e-commerce platform with normalized entities for customers, products, orders, suppliers, and inventory.",
      architecture: "Implemented in PostgreSQL with comprehensive DDL and DML scripts. Features normalized entity relations and optimized SQL queries.",
      highlights: [
        "Normalized 3NF relational schemas for high data integrity",
        "Advanced queries utilizing INNER, LEFT, RIGHT, and FULL joins",
        "Aggregation logic and GROUP BY analytics for order reporting",
        "Entity-Relationship (ER) diagram architecture",
      ],
      technologies: ["SQL", "PostgreSQL", "Relational Modeling", "Joins", "Data Integrity"],
      githubUrl: "https://github.com/yeswanth412/e_commerce",
      liveUrl: null,
    },
    {
      id: "hospital-management",
      number: "04",
      title: "Hospital Management System",
      category: "Database & Backend Systems",
      description: "An object-oriented patient and doctor management application integrating relational SQL queries with document data storage.",
      architecture: "Built with Python, SQL, and MongoDB. Features menu-driven OOP controllers, patient record persistence, and multi-database querying.",
      highlights: [
        "Object-oriented Python service architecture for healthcare entities",
        "SQL table creation, sample insertion, and clinical record queries",
        "MongoDB document-based storage for flexible patient records",
        "Modular data persistence layer",
      ],
      technologies: ["Python", "SQL", "MongoDB", "OOP", "DBMS"],
      githubUrl: "https://github.com/yeswanth412/hospital_management",
      liveUrl: null,
    },
  ],

  whatIveBuilt: [
    {
      id: "01",
      title: "BACKEND & APIS",
      description: "Developing structured RESTful endpoints and authentication workflows using Python and FastAPI.",
    },
    {
      id: "02",
      title: "DATABASE ARCHITECTURE",
      description: "Designing normalized relational schemas and optimized queries across PostgreSQL and MySQL.",
    },
    {
      id: "03",
      title: "PRACTICAL ENGINEERING",
      description: "Solving business workflow challenges through object-oriented design and clean code standards.",
    },
  ],

  experience: [
    {
      role: "Java Development Intern",
      organization: "Cognifyz Technologies",
      period: "Jan 2026 – Feb 2026",
      description: "Developed Java applications, implemented CRUD operations, and worked with MySQL and Object-Oriented Programming.",
      technologies: ["Java", "MySQL", "OOP", "CRUD"],
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology (Computer Science and Engineering)",
      institution: "Gayatri Vidya Parishad College for Degree & PG Courses (A)",
      location: "Visakhapatnam, Andhra Pradesh",
      period: "2022 – 2026",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sasi Junior College, Vellivenu",
      location: "Board of Intermediate Education, Andhra Pradesh",
      period: "2020 – 2022",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Sri Chaitanya Em School, Narsipatnam",
      location: "Board of Secondary Education, Andhra Pradesh",
      period: "2020",
    },
  ],

  certifications: [
    {
      name: "CS50’s Introduction to Artificial Intelligence with Python",
      issuer: "HarvardX / CS50",
    },
    {
      name: "Java Development Internship",
      issuer: "Cognifyz Technologies",
    },
  ],
};
