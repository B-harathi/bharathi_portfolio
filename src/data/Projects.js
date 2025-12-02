export const projectsData = [
  {
    id: 1,
    title: "BizBooks",
    subtitle: "Accounting Management Platform",
    description: "BizBooks is a Zoho Books-inspired accounting tool designed to manage payables, receivables, invoices, and expenses. The platform streamlines business finances with automated invoicing, billing, and real-time expense management, simplifying bookkeeping and ensuring accurate financial reporting for small and medium enterprises.",
    longDescription: "A comprehensive accounting solution built for SMEs that need efficient financial management. The platform offers complete invoice management, expense tracking, and financial reporting capabilities with an intuitive user interface.",
    image: "/images/projects/bizbooks.jpg",
    category: "Full Stack Web Application",
    status: "In Development",
    startDate: "September 2024",
    endDate: "Present",
    duration: "4+ months",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Material-UI",
      "JavaScript",
      "RESTful APIs",
      "JWT Authentication",
      "Mongoose"    ],
    features: [
      "Complete invoice management system with automated generation",
      "Real-time expense tracking and categorization",
      "Comprehensive financial reporting and analytics dashboard",
      "Multi-currency support for international transactions",
      "Role-based access control for team collaboration",
      "Automated payment reminders and follow-ups",
      "Integration with popular payment gateways",
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
      live: "https://bizbooks-demo.vercel.app", // Add actual links
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
    title: "Netflix Clone",
    subtitle: "Streaming Platform Interface",
    description: "Developed a feature-rich Netflix clone application using React and modern frontend technologies to emulate the popular streaming platform's user interface and functionality. Implemented components for video playback, browse recommendations, user authentication, and interactive controls, delivering an engaging and responsive user experience.",
    longDescription: "A complete recreation of Netflix's user interface with modern React patterns, featuring dynamic content loading, user authentication, video streaming capabilities, and responsive design that works seamlessly across all devices.",
    image: "/images/projects/netflix-clone.jpg",
    category: "Frontend Web Application",
    status: "Completed",
    startDate: "January 2024",
    endDate: "May 2024",
    duration: "5 months",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "React Router",
      "Axios",
      "React Hooks",
      "Responsive Design"
    ],
    features: [
      "User authentication and profile management system",
      "Dynamic movie and TV show browsing with categories",
      "Advanced search functionality with filters",
      "Responsive video player with custom controls",
      "Personalized watchlist and favorites system",
      "Movie recommendations based on viewing history",
      "Multi-device responsive design",
      "Loading states and error handling",
      "Infinite scrolling for content discovery",
      "Dark theme with Netflix-inspired UI/UX"
    ],
    challenges: [
      "Implementing smooth video streaming with custom controls",
      "Managing complex state for user preferences and watchlists",
      "Optimizing performance for large content catalogs",
      "Creating pixel-perfect responsive design matching Netflix's UI"
    ],
    solutions: [
      "Integrated HTML5 video APIs with custom control overlays",
      "Implemented React Context and useReducer for state management",
      "Added lazy loading, pagination, and image optimization",
      "Used CSS Grid and Flexbox with mobile-first responsive approach"
    ],
    achievements: [
      "Successfully replicated Netflix's user experience with 95% accuracy",
      "Achieved excellent performance scores (90+ on Lighthouse)",
      "Implemented smooth animations and transitions throughout the app",
      "Created reusable component library for future projects"
    ],
    links: {
      live: "https://netflix-clone-bharathi.vercel.app", // Add actual links
      github: "https://github.com/B-harathi/netflix-clone",
      demo: "https://netflix-clone-bharathi.vercel.app"
    },
    gallery: [
      "/images/projects/netflix-home.jpg",
      "/images/projects/netflix-player.jpg",
      "/images/projects/netflix-browse.jpg"
    ]
  },
  {
    id: 3,
    title: "HyreDragon",
    subtitle: "HR Hiring Platform",
    description: "HyreDragon is a comprehensive hiring platform designed for HR professionals and managers to streamline the recruitment process. The platform enables efficient candidate management, job posting, interview scheduling, and collaborative hiring decisions, making the entire recruitment workflow seamless and organized.",
    longDescription: "A powerful recruitment management system built to modernize the hiring process for organizations of all sizes. HyreDragon provides end-to-end hiring solutions from job posting to candidate onboarding, with features for multi-stage interview tracking, team collaboration, and data-driven hiring insights.",
    image: "/images/projects/hyredragon.jpg",
    category: "Full Stack Web Application",
    status: "In Development",
    startDate: "October 2024",
    endDate: "Present",
    duration: "2+ months",
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
      "Redux"
    ],
    features: [
      "Job posting and management with customizable templates",
      "Candidate tracking system with application status pipeline",
      "Interview scheduling with calendar integration",
      "Resume parsing and candidate profile management",
      "Role-based access for HR, managers, and interviewers",
      "Collaborative hiring with team feedback and ratings",
      "Automated email notifications for candidates",
      "Advanced candidate search and filtering",
      "Hiring analytics and reporting dashboard",
      "Mobile-responsive design for on-the-go recruitment"
    ],
    challenges: [
      "Designing a flexible workflow for different hiring processes",
      "Implementing secure role-based access for multiple user types",
      "Building efficient candidate search across large datasets",
      "Creating an intuitive interface for non-technical HR users"
    ],
    solutions: [
      "Developed customizable pipeline stages with drag-and-drop functionality",
      "Implemented comprehensive RBAC with JWT and middleware validation",
      "Added MongoDB indexing and optimized queries for fast search",
      "Conducted user research and iterative UI/UX improvements"
    ],
    achievements: [
      "Reduced hiring cycle time by 40% with streamlined workflows",
      "Enabled collaborative decision-making with team feedback features",
      "Successfully handled 1000+ candidate profiles with optimized performance",
      "Achieved 95% user satisfaction score from HR teams during testing"
    ],
    links: {
      live: "https://hyredragon.vercel.app",
      github: "https://github.com/B-harathi/hyredragon",
      demo: "https://hyredragon.vercel.app"
    },
    gallery: [
      "/images/projects/hyredragon-dashboard.jpg",
      "/images/projects/hyredragon-candidates.jpg",
      "/images/projects/hyredragon-jobs.jpg"
    ]
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
    name: "Frontend",
    value: "frontend",
    count: projectsData.filter(p => p.category.includes("Frontend")).length
  },
  {
    name: "Web Applications",
    value: "web-app",
    count: projectsData.filter(p => p.category.includes("Web Application")).length
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
    name: "JavaScript",
    count: projectsData.filter(p => p.technologies.includes("JavaScript")).length,
    color: "#F7DF1E"
  }
];