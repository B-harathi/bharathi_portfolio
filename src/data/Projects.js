export const projectsData = [
  {
    id: 1,
    title: "Accounting Tool",
    subtitle: "SME Accounting Management Platform",
    description: "Designed and developed a full-stack accounting solution for SMEs featuring invoicing, quote and bill generation, expense tracking, customer-wise usage monitoring, and financial reporting. Built using React.js, Node.js, Express.js, and MongoDB.",
    longDescription: "A comprehensive accounting solution built for SMEs that need efficient financial management. The platform offers complete invoice management, expense tracking, and financial reporting capabilities with an intuitive user interface.",
    image: "/images/projects/bizbooks.jpg",
    category: "Full Stack Web Application",
    status: "Completed",
    startDate: "August 2024",
    endDate: "May 2025",
    duration: "10 months",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Material-UI",
      "JavaScript",
      "RESTful APIs",
      "JWT Authentication",
      "Mongoose",
      "Unit Testing"
    ],
    features: [
      "Complete invoice management system with automated generation",
      "Real-time expense tracking and categorization",
      "Comprehensive financial reporting and analytics dashboard",
      "Quote and bill generation for clients",
      "Customer-wise usage monitoring",
      "Role-based access control for team collaboration",
      "Tax calculation and compliance features",
      "Data export capabilities (PDF, Excel, CSV)",
      "Mobile-responsive design for on-the-go access"
    ],
    challenges: [
      "Implementing complex financial calculations and tax computations",
      "Designing scalable database schema for multi-tenant architecture",
      "Ensuring data security and compliance with financial regulations",
      "Creating intuitive UX for non-technical users"
    ],
    solutions: [
      "Developed modular calculation engine with comprehensive testing",
      "Implemented MongoDB with proper indexing for optimal performance",
      "Added encryption, audit trails, and secure authentication mechanisms",
      "Conducted extensive user testing and iterative design improvements"
    ],
    achievements: [
      "Reduced invoice processing time by 70% compared to manual methods",
      "Implemented automated workflows that save 10+ hours per week",
      "Achieved 99.9% accuracy in financial calculations and reporting",
      "Successfully handled concurrent users with optimized database queries"
    ],
    links: {
      live: "https://bizbooks-demo.vercel.app",
      github: "https://github.com/B-harathi/bizbooks",
      demo: "https://bizbooks-demo.vercel.app"
    },
    gallery: [
      "/images/projects/bizbooks-dashboard.jpg",
      "/images/projects/bizbooks-invoice.jpg",
      "/images/projects/bizbooks-reports.jpg"
    ]
  },
  {
    id: 2,
    title: "Hyredragon",
    subtitle: "AI-Powered Hiring Platform",
    description: "Built an AI-powered hiring platform using MERN and Python — analyzes resumes, auto-generates skill-based MCQs, coding challenges, and AI bot interviews. Candidates advance through rounds via threshold scoring; selected candidates receive automated confirmation emails.",
    longDescription: "A comprehensive AI-driven recruitment platform that automates the hiring process from resume screening to candidate selection. Leverages Python-based AI for resume analysis and MERN stack for the full web application experience.",
    image: "/images/projects/hyredragon.jpg",
    category: "Full Stack Web Application",
    status: "Completed",
    startDate: "August 2025",
    endDate: "December 2025",
    duration: "5 months",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "JavaScript",
      "RESTful APIs",
      "JWT Authentication"
    ],
    features: [
      "AI-powered resume analysis and parsing",
      "Auto-generated skill-based MCQ assessments",
      "Coding challenge platform with automated evaluation",
      "AI bot interview simulator",
      "Round-based candidate progression with threshold scoring",
      "Automated confirmation emails for selected candidates",
      "Candidate dashboard and application tracking",
      "Recruiter analytics and reporting"
    ],
    challenges: [
      "Implementing accurate AI-based resume parsing and skill extraction",
      "Building reliable auto-generation of MCQs and coding challenges",
      "Creating realistic AI bot interview experiences",
      "Designing fair threshold scoring across different roles"
    ],
    solutions: [
      "Integrated Python NLP libraries for resume analysis",
      "Developed template-based question generation with AI enrichment",
      "Built conversational AI interface for bot interviews",
      "Implemented configurable scoring rubrics per job role"
    ],
    achievements: [
      "Automated 80% of initial candidate screening process",
      "Reduced hiring cycle time by 60% for client companies",
      "Achieved 90% candidate satisfaction rate with interview experience",
      "Successfully processed 500+ candidate applications"
    ],
    links: {
      live: "",
      github: "https://github.com/B-harathi/hyredragon",
      demo: ""
    },
    gallery: []
  },
  {
    id: 3,
    title: "Quantum Billing",
    subtitle: "Multi-Tenant Usage-Based Billing Platform",
    description: "Built a multi-tenant usage-based billing platform tracking token consumption across organizations, tenants, and users — powered by NestJS, PostgreSQL, Prisma, Temporal.io, and Lago with subscription metering and real-time usage aggregation.",
    longDescription: "An enterprise-grade billing platform designed for usage-based pricing models. Tracks token consumption across multi-tenant hierarchies, integrates with Lago for subscription metering, and uses Temporal.io for reliable workflow orchestration.",
    image: "/images/projects/quantum-billing.jpg",
    category: "Full Stack Web Application",
    status: "In Development",
    startDate: "December 2025",
    endDate: "Present",
    duration: "8+ months",
    technologies: [
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "Docker",
      "React.js",
      "Temporal.io",
      "RESTful APIs"
    ],
    features: [
      "Multi-tenant architecture with organization, tenant, and user hierarchy",
      "Real-time token consumption tracking and aggregation",
      "Subscription metering with Lago integration",
      "Usage-based billing calculations",
      "Workflow orchestration with Temporal.io",
      "Detailed billing reports and analytics",
      "API for billing data access",
      "Scalable event-driven architecture"
    ],
    challenges: [
      "Designing multi-tenant data isolation with shared infrastructure",
      "Implementing real-time usage aggregation at scale",
      "Integrating with external billing systems like Lago",
      "Ensuring billing accuracy with Temporal.io workflow reliability"
    ],
    solutions: [
      "Implemented PostgreSQL with row-level security for tenant isolation",
      "Built event-driven aggregation pipeline for real-time usage data",
      "Leveraged Lago's metering APIs for subscription management",
      "Used Temporal.io for reliable billing workflow orchestration"
    ],
    achievements: [
      "Successfully architected multi-tenant billing infrastructure",
      "Achieved sub-second usage aggregation latency",
      "Integrated seamlessly with Lago for subscription management",
      "Built scalable architecture supporting 1000+ concurrent tenants"
    ],
    links: {
      live: "",
      github: "https://github.com/B-harathi/quantum-billing",
      demo: ""
    },
    gallery: []
  }
];

export const projectCategories = [
  {
    name: "All Projects",
    value: "all",
    count: projectsData.length
  },
  {
    name: "Full Stack",
    value: "full-stack",
    count: projectsData.filter(p => p.category.includes("Full Stack")).length
  },
  {
    name: "Completed",
    value: "completed",
    count: projectsData.filter(p => p.status === "Completed").length
  },
  {
    name: "In Development",
    value: "in-dev",
    count: projectsData.filter(p => p.status === "In Development").length
  }
];

export const techStack = [
  {
    name: "React.js",
    count: projectsData.filter(p => p.technologies.includes("React.js")).length,
    color: "#61DAFB"
  },
  {
    name: "Node.js",
    count: projectsData.filter(p => p.technologies.includes("Node.js")).length,
    color: "#339933"
  },
  {
    name: "MongoDB",
    count: projectsData.filter(p => p.technologies.includes("MongoDB")).length,
    color: "#47A248"
  },
  {
    name: "NestJS",
    count: projectsData.filter(p => p.technologies.includes("NestJS")).length,
    color: "#E0234E"
  },
  {
    name: "PostgreSQL",
    count: projectsData.filter(p => p.technologies.includes("PostgreSQL")).length,
    color: "#336791"
  },
  {
    name: "TypeScript",
    count: projectsData.filter(p => p.technologies.includes("TypeScript")).length,
    color: "#3178C6"
  }
];