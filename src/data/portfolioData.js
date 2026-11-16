export const personalInfo = {
  name: "Monish Giri",
  title: "Full Stack Software Engineer",
  tagline: "Building scalable REST APIs, AI-driven platforms & accessible React interfaces",
  location: "New Delhi, India",
  phone: "+91-97735-59682",
  email: "monishgiri46@gmail.com",
  github: "https://github.com/monishgiri",
  githubUsername: "monishgiri",
  linkedin: "https://www.linkedin.com/in/monish-giri-a39145120/",
  resumePdf: "/Monish_Giri_Resume.pdf",
  summary:
    "Full Stack Software Engineer with 1+ years of experience building REST APIs and accessible React.js interfaces with Node.js, Express.js, MongoDB and Java Spring Boot. Shipped authentication, progress tracking and video-annotation features for the Excel Pixel (Dubai) learning platform. Built an AI mock-interview platform on the Gemini API with live voice transcription, and work in Agile teams with code reviews and AI-assisted development tools.",
  stats: [
    { label: "Experience", value: "1+ Years" },
    { label: "REST APIs Built", value: "20+" },
    { label: "State Boilerplate Reduced", value: "30%" },
    { label: "Delivery Speedup (AI Tools)", value: "20%" },
  ]
};

export const skillsData = {
  frontend: [
    { name: "React.js", level: "Advanced", icon: "FaReact", color: "#61DAFB", desc: "Hooks, Context, Redux Toolkit, Component Lifecycle" },
    { name: "Redux Toolkit", level: "Advanced", icon: "SiRedux", color: "#764ABC", desc: "State slices, Async thunks, 30% boilerplate reduction" },
    { name: "HTML5", level: "Expert", icon: "FaHtml5", color: "#E34F26", desc: "Semantic markup, SEO, WCAG 2.1 AA compliance" },
    { name: "CSS3", level: "Advanced", icon: "FaCss3Alt", color: "#1572B6", desc: "Flexbox, Grid, Animations, Responsive layouts" },
    { name: "ES6+ JavaScript", level: "Advanced", icon: "SiJavascript", color: "#F7DF1E", desc: "Async/Await, Closures, DOM manipulation, Modules" },
    { name: "Tailwind CSS", level: "Advanced", icon: "SiTailwindcss", color: "#06B6D4", desc: "Utility-first design, Custom themes, Fast UI delivery" },
    { name: "Bootstrap", level: "Proficient", icon: "SiBootstrap", color: "#7952B3", desc: "Responsive grids, Quick prototyping, Reusable UI" },
  ],
  backend: [
    { name: "Node.js", level: "Advanced", icon: "FaNodeJs", color: "#339933", desc: "Event-driven runtime, Streams, Asynchronous microservices" },
    { name: "Express.js", level: "Advanced", icon: "SiExpress", color: "#ffffff", desc: "RESTful architecture, Reusable middleware, Centralized errors" },
    { name: "Java Spring Boot", level: "Proficient", icon: "SiSpringboot", color: "#6DB33F", desc: "Enterprise REST APIs, Dependency Injection, MVC" },
    { name: "Hibernate", level: "Proficient", icon: "SiHibernate", color: "#59666C", desc: "JPA ORM, Entity mapping, Transaction management" },
    { name: "REST APIs", level: "Expert", icon: "FaServer", color: "#6366F1", desc: "Contract design, 20+ secure endpoints, Status conventions" },
    { name: "JWT & Security", level: "Advanced", icon: "SiJsonwebtokens", color: "#D63AFF", desc: "HTTP-only cookies, RBAC, Request sanitization" },
  ],
  databases: [
    { name: "MongoDB", level: "Advanced", icon: "SiMongodb", color: "#47A248", desc: "Document DB, Aggregation pipelines, Production indexing" },
    { name: "Mongoose ORM", level: "Advanced", icon: "SiMongodb", color: "#880000", desc: "Schema validation, Middleware hooks, Query optimization" },
    { name: "MySQL", level: "Proficient", icon: "SiMysql", color: "#4479A1", desc: "Relational modeling, Joins, Complex queries, Indexing" },
    { name: "SQL", level: "Proficient", icon: "FaDatabase", color: "#00758F", desc: "DDL, DML, Relational integrity, Query performance" },
  ],
  languages: [
    { name: "JavaScript (ES6+)", level: "Advanced", icon: "SiJavascript", color: "#F7DF1E", desc: "Core language, Async workflows, Event loop" },
    { name: "Java", level: "Proficient", icon: "FaJava", color: "#ED8B00", desc: "OOP, Collections, Multithreading, Enterprise patterns" },
    { name: "SQL", level: "Proficient", icon: "FaDatabase", color: "#00758F", desc: "Structured queries, Relational schema design" },
  ],
  toolsAndDevops: [
    { name: "Git & GitHub", level: "Advanced", icon: "FaGitAlt", color: "#F05032", desc: "Branching strategies, Pull requests, Merge conflict handling" },
    { name: "GitHub Copilot & AI", level: "Advanced", icon: "SiGithubcopilot", color: "#00FF9D", desc: "AI scaffolding, Test drafting, 20% velocity boost" },
    { name: "Postman", level: "Advanced", icon: "SiPostman", color: "#FF6C37", desc: "API testing, Automated collections, Environment configs" },
    { name: "Linux (Ubuntu)", level: "Proficient", icon: "SiUbuntu", color: "#E95420", desc: "CLI navigation, Shell scripting, Server environments" },
    { name: "VS Code", level: "Expert", icon: "FaCode", color: "#007ACC", desc: "Workspace debugging, Extensions, Linting workflows" },
    { name: "Chrome DevTools", level: "Advanced", icon: "FaLaptopCode", color: "#4285F4", desc: "Network profiling, DOM inspect, Memory & performance" },
  ],
  methodologies: [
    { name: "Agile / Scrum", level: "Applied", icon: "FaBriefcase", color: "#3B82F6", desc: "Sprints, Daily stand-ups, Story point estimations" },
    { name: "WCAG 2.1 AA", level: "Applied", icon: "FaUniversalAccess", color: "#10B981", desc: "Accessibility compliance, Semantic HTML, Screen readers" },
    { name: "ARIA Attributes", level: "Applied", icon: "FaUniversalAccess", color: "#8B5CF6", desc: "Accessible roles, States, Focus management" },
    { name: "CI/CD Basics", level: "Applied", icon: "FaServer", color: "#EC4899", desc: "Automated test runs, Lint validation, Deployment hooks" },
  ]
};

export const experiences = [
  {
    role: "Software Engineer",
    company: "Q2A Media Services Pvt. Ltd.",
    location: "Noida, India",
    period: "Nov 2025 – Present",
    current: true,
    type: "Full-time",
    description: "Engineering scalable backend APIs and high-performance, WCAG-compliant frontend interfaces for international enterprise learning solutions.",
    highlights: [
      "Built Node.js/Express.js RESTful APIs for the Excel Pixel (Dubai) LMS platform covering user registration, authentication, progress tracking, video-timeline annotations, and interactive learning features.",
      "Secured the platform with JWT authentication, role-based authorization (RBAC), request validation, and centralized error handling; wrote reusable middleware and optimized MongoDB operations in a Linux development environment.",
      "Developed responsive, semantic, WCAG 2.1 AA-compliant React.js components with Redux Toolkit, reducing state-management boilerplate by approximately 30% while delivering accessible, API-driven learning experiences.",
      "Worked with UX/UI designers and QA in Agile sprints to integrate third-party services and test/optimize full-stack features.",
      "Used GitHub Copilot and ChatGPT for scaffolding and test drafts, reducing per-feature delivery time by approximately 20% while keeping clean-code standards."
    ],
    metrics: [
      { label: "Boilerplate Reduction", value: "30%" },
      { label: "Delivery Speedup", value: "20%" },
      { label: "Accessibility", value: "WCAG 2.1 AA" }
    ],
    tech: ["Node.js", "Express.js", "React.js", "Redux Toolkit", "MongoDB", "JWT", "Linux (Ubuntu)", "Agile/Scrum"]
  },
  {
    role: "Programming Intern",
    company: "Q2A Media Services Pvt. Ltd.",
    location: "Noida, India",
    period: "May 2025 – Nov 2025",
    current: false,
    type: "Internship",
    description: "Developed reusable UI components, resolved cross-device compatibility issues, and debugged REST API routing pipelines.",
    highlights: [
      "Built reusable frontend UI modules with HTML5, CSS3, Tailwind CSS, and ES6+ JavaScript; fixed cross-device bugs and lowered UI defect rates by approximately 20%.",
      "Debugged API routing issues with Chrome DevTools and Postman, speeding up feature delivery.",
      "Collaborated actively in daily stand-ups, code reviews, and sprint planning sessions."
    ],
    metrics: [
      { label: "UI Defect Reduction", value: "20%" },
      { label: "API Debugging", value: "Postman & DevTools" }
    ],
    tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript ES6+", "Postman", "Chrome DevTools", "Git"]
  }
];

export const projects = [
  {
    id: "ai-interview",
    title: "AI Interview Platform",
    subtitle: "Real-time Mock Interview System with Google Gemini & Voice Recognition",
    category: "AI & Full Stack",
    featured: true,
    description: "An interactive AI-powered mock interview platform that simulates real-world technical and behavioral interviews using real-time voice transcription and contextual follow-up questions powered by Google Gemini API.",
    image: "/assets/project1.png",
    github: "https://github.com/MonishGiri/Interview-ai",
    demo: "https://interview-ai-1-ycq8.onrender.com/",
    demoType: "Live Demo",
    metrics: "Real-time Voice AI & Puppeteer Reports",
    highlights: [
      "Built real-time Web Speech API voice transcription paired with contextual follow-up question generation via Google Gemini API.",
      "Implemented secure JWT authentication with HTTP-only cookies and automated PDF/DOCX resume parsing using Multer and pdf-parse to tailor each interview session.",
      "Designed an asynchronous report generation service using Puppeteer for comprehensive candidate feedback PDF exports, with secure token-based report sharing."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini API", "Web Speech API", "Multer", "Puppeteer", "JWT"]
  },
  {
    id: "social-media-backend",
    title: "Social Media Backend System",
    subtitle: "High-Throughput RESTful API Architecture with Role-Based Access Control",
    category: "Backend & Architecture",
    featured: true,
    description: "A production-ready, scalable REST API backend engineered with Node.js, Express.js, and MongoDB, featuring 20+ secure endpoints, role-based authorization, and optimized database indexing.",
    image: "/assets/project2.png",
    github: "https://github.com/MonishGiri/JS-Backend",
    demo: null,
    demoType: "GitHub Repo",
    metrics: "20+ Secure Endpoints & Index Optimization",
    highlights: [
      "Developed a robust REST architecture with 20+ endpoints covering user auth, social feeds, media handling, and interaction counters.",
      "Engineered JWT authentication, role-based authorization (RBAC), strict input validation, and centralized exception handling middleware.",
      "Optimized MongoDB data models using Mongoose schemas, compound indexing, and efficient query strategies to maximize read/write performance under load."
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose ORM", "JWT", "MVC Architecture", "REST APIs"]
  },
  {
    id: "excel-pixel-lms",
    title: "Excel Pixel LMS Platform",
    subtitle: "Enterprise Learning Platform with Video Timeline Annotations",
    category: "Enterprise Full Stack",
    featured: true,
    description: "Built for client Excel Pixel (Dubai) at Q2A Media Services, this enterprise LMS features user registration, modular course tracking, interactive learning modules, and time-synced video annotations.",
    image: "/assets/project3.png",
    github: null,
    enterprise: "Q2A Media Services / Excel Pixel (Dubai)",
    demoType: "Enterprise Platform",
    metrics: "30% Boilerplate Reduction & WCAG 2.1 AA",
    highlights: [
      "Engineered RESTful APIs for user onboarding, enrollment workflows, progress tracking, and video annotation synchronization.",
      "Implemented WCAG 2.1 AA compliant semantic React components with Redux Toolkit, decreasing boilerplate by 30%.",
      "Hardened backend with JWT auth, role validation, and optimized MongoDB query operations in Ubuntu Linux server environments."
    ],
    tech: ["Node.js", "Express.js", "React.js", "Redux Toolkit", "MongoDB", "WCAG 2.1 AA", "Linux (Ubuntu)"]
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "IGNOU (Indira Gandhi National Open University)",
    location: "New Delhi, India",
    year: "Dec 2024",
    badge: "Postgraduate Degree",
    focus: "Advanced Software Engineering, Distributed Systems, Database Management, Enterprise Application Development."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "IGNOU (Indira Gandhi National Open University)",
    location: "New Delhi, India",
    year: "Jun 2022",
    badge: "Undergraduate Degree",
    focus: "Core Computer Science, Data Structures & Algorithms, Object-Oriented Programming, Web Technologies."
  },
  {
    degree: "Java Full Stack Development Professional Diploma (GNIIT)",
    institution: "NIIT Ltd",
    location: "India",
    year: "2024",
    badge: "Professional Certification",
    focus: "Enterprise Java, Spring Boot, Hibernate ORM, React.js, SQL, RESTful Microservices, MVC Architecture."
  }
];

export const terminalCommands = {
  help: [
    "Available commands:",
    "  about        - Display background and profile summary",
    "  skills       - View full technical skill breakdown",
    "  experience   - List professional software engineering experience",
    "  projects     - View featured projects & architecture highlights",
    "  education    - Display degrees and professional certifications",
    "  contact      - Get email, phone, LinkedIn and GitHub links",
    "  resume       - View resume highlights and download info",
    "  clear        - Clear the terminal output"
  ],
  whoami: [
    "Monish Giri — Full Stack Software Engineer (Node.js, Express.js, React.js, MongoDB, Java Spring Boot)."
  ],
  about: [
    "Monish Giri | Full Stack Software Engineer",
    "Location: New Delhi, India",
    "Experience: 1+ years building production REST APIs and accessible React interfaces.",
    "Current: Software Engineer at Q2A Media Services Pvt. Ltd. (working on Excel Pixel Dubai LMS).",
    "AI Work: Creator of AI Interview Platform powered by Google Gemini API & Web Speech API."
  ],
  skills: [
    "Frontend: React.js, Redux Toolkit, HTML5, CSS3, ES6+, Tailwind CSS, Bootstrap",
    "Backend: Node.js, Express.js, Java Spring Boot, Hibernate, REST APIs, JWT, MVC",
    "Databases: MongoDB, Mongoose ORM, MySQL, SQL",
    "Tools: Git, GitHub Copilot, Postman, Linux (Ubuntu), Chrome DevTools, VS Code",
    "Methodologies: Agile/Scrum, WCAG 2.1 AA, ARIA, CI/CD basics"
  ],
  experience: [
    "1. Software Engineer (Nov 2025 - Present) @ Q2A Media Services Pvt. Ltd.",
    "   - Built REST APIs for Excel Pixel LMS (Dubai)",
    "   - WCAG 2.1 AA React + Redux Toolkit (30% less boilerplate)",
    "   - GitHub Copilot / ChatGPT workflow (20% delivery boost)",
    "2. Programming Intern (May 2025 - Nov 2025) @ Q2A Media Services Pvt. Ltd.",
    "   - Reusable frontend UI modules (Tailwind, HTML5, CSS3, ES6+)",
    "   - Lowered UI defect rate by 20%"
  ],
  projects: [
    "1. AI Interview Platform [Live Demo: https://interview-ai-1-ycq8.onrender.com/ | GitHub: https://github.com/MonishGiri/Interview-ai]",
    "2. Social Media Backend [GitHub: https://github.com/MonishGiri/JS-Backend | 20+ secure REST endpoints]",
    "3. Excel Pixel LMS Platform [Enterprise Dubai LMS | Node, Express, React, Redux Toolkit, WCAG 2.1 AA]"
  ],
  education: [
    "- MCA (Master of Computer Applications) - IGNOU, New Delhi (Dec 2024)",
    "- BCA (Bachelor of Computer Applications) - IGNOU, New Delhi (Jun 2022)",
    "- Java Full Stack Development Professional Diploma (GNIIT) - NIIT Ltd (2024)"
  ],
  contact: [
    "Email: monishgiri46@gmail.com",
    "Phone: +91-97735-59682",
    "GitHub: https://github.com/monishgiri",
    "LinkedIn: https://www.linkedin.com/in/monish-giri-a39145120/",
    "Location: New Delhi, India"
  ],
  resume: [
    "Resume: Monish Giri - Full Stack Software Engineer",
    "File: /Monish_Giri_Resume.pdf (Direct Download Available)",
    "Available for immediate contact at monishgiri46@gmail.com"
  ]
};

