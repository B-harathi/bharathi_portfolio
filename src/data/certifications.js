export const certificationsData = [
  {
    id: 1,
    title: "MongoDB",
    provider: "Simplilearn",
    type: "Database Management",
    date: "2025",
    status: "Completed",
    credentialId: "SL-MONGO-2025-001",
    description: "Comprehensive course covering MongoDB fundamentals, database design, queries, indexing, and performance optimization for NoSQL applications.",
    skills: [
      "NoSQL Database Design",
      "MongoDB Queries",
      "Data Modeling",
      "Indexing Strategies",
      "Performance Optimization",
      "Aggregation Framework"
    ],
    topics: [
      "MongoDB Architecture and Setup",
      "CRUD Operations and Query Optimization",
      "Schema Design and Data Modeling",
      "Indexing and Performance Tuning",
      "Aggregation Pipeline",
      "Replication and Sharding"
    ],
    icon: "SiMongodb",
    color: "#47A248",
    certificate: "/certificates/1746182773101.jfif",
    verificationUrl: "https://simpli-web.app.link/e/Iv9HgaVw2Sb"
  },
  {
    id: 2,
    title: "Next.js Development",
    provider: "Guvi Geek Networks, IITM Research Park",
    type: "Frontend Framework",
    date: "2025",
    status: "Completed",
    credentialId: "GUVI-NEXTJS-2025-002",
    description: "Advanced Next.js course covering server-side rendering, static site generation, API routes, and modern React patterns for production-ready applications.",
    skills: [
      "Next.js Framework",
      "Server-Side Rendering (SSR)",
      "Static Site Generation (SSG)",
      "API Routes",
      "React Hooks",
      "Performance Optimization"
    ],
    topics: [
      "Next.js Fundamentals and Routing",
      "Server-Side Rendering vs Static Generation",
      "API Routes and Backend Integration",
      "Performance Optimization Techniques",
      "Deployment and Production Best Practices",
      "SEO and Meta Tags Management"
    ],
    icon: "TbBrandNextjs",
    color: "#000000",
    certificate: "/certificates/nextjs-guvi.pdf",
    verificationUrl: "https://www.guvi.in/share-certificate/4x47JUK2Ts34221n2k"
  },
  {
    id: 3,
    title: "Express.js",
    provider: "LinkedIn",
    type: "Backend Development",
    date: "2025",
    status: "Completed",
    credentialId: "LI-EXPRESS-2025-003",
    description: "Comprehensive Express.js course covering RESTful API development, middleware, routing, error handling, and production best practices.",
    skills: [
      "Express.js Framework",
      "RESTful API Development",
      "Middleware Implementation",
      "Error Handling Patterns",
      "Route Organization",
      "Production Deployment"
    ],
    topics: [
      "Express.js Fundamentals and Setup",
      "Routing and Middleware",
      "Request/Response Handling",
      "Error Handling and Debugging",
      "Security Best Practices",
      "Performance Optimization"
    ],
    icon: "SiExpress",
    color: "#000000",
    certificate: "/certificates/expressjs-linkedin.pdf",
    verificationUrl: ""
  },
  {
    id: 4,
    title: "Agile Foundations",
    provider: "LinkedIn",
    type: "Project Management",
    date: "2025",
    status: "Completed",
    credentialId: "LI-AGILE-2025-004",
    description: "Foundational Agile certification covering Agile principles, Scrum framework, Kanban, and lean methodologies for effective project management.",
    skills: [
      "Agile Principles",
      "Scrum Framework",
      "Kanban Methodology",
      "Sprint Planning",
      "Continuous Delivery",
      "Team Collaboration"
    ],
    topics: [
      "Agile Manifesto and Principles",
      "Scrum Roles and Events",
      "Kanban vs Scrum",
      "User Stories and Backlog Management",
      "Sprint Planning and Execution",
      "Continuous Improvement"
    ],
    icon: "MdGroups",
    color: "#FF6B6B",
    certificate: "/certificates/agile-foundations-linkedin.pdf",
    verificationUrl: ""
  }
];

export const certificationStats = [
  {
    category: "Database Technologies",
    count: certificationsData.filter(cert => cert.type === "Database Management").length,
    icon: "FaDatabase",
    color: "from-green-500 to-teal-500"
  },
  {
    category: "Frontend Frameworks",
    count: certificationsData.filter(cert => cert.type === "Frontend Framework").length,
    icon: "FaReact",
    color: "from-blue-500 to-purple-500"
  },
  {
    category: "Backend Development",
    count: certificationsData.filter(cert => cert.type === "Backend Development").length,
    icon: "FaServer",
    color: "from-yellow-500 to-orange-500"
  },
  {
    category: "Total Certifications",
    count: certificationsData.length,
    icon: "FaCertificate",
    color: "from-purple-500 to-pink-500"
  }
];

export const learningPath = [
  {
    phase: "Foundation",
    description: "Building core programming and database skills",
    certifications: ["MongoDB"],
    timeframe: "Early 2025"
  },
  {
    phase: "Advanced Frontend",
    description: "Mastering modern React frameworks and SSR techniques",
    certifications: ["Next.js Development"],
    timeframe: "Mid 2025"
  },
  {
    phase: "Backend & Methodologies",
    description: "Strengthening backend skills and Agile practices",
    certifications: ["Express.js", "Agile Foundations"],
    timeframe: "Late 2025"
  }
];

export const upcomingCertifications = [
  {
    title: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    plannedDate: "Q3 2025",
    reason: "To expand cloud computing knowledge and deployment skills"
  },
  {
    title: "Docker & Kubernetes",
    provider: "Udemy",
    plannedDate: "Q3 2025",
    reason: "To strengthen containerization and orchestration expertise"
  },
  {
    title: "NestJS Advanced Patterns",
    provider: "Udemy",
    plannedDate: "Q4 2025",
    reason: "To deepen NestJS expertise for enterprise application development"
  },
  {
    title: "Agentic AI Development",
    provider: "Analytics Vidhya",
    plannedDate: "Q4 2025",
    reason: "To explore multi-agent systems and AI-assisted development workflows"
  }
];