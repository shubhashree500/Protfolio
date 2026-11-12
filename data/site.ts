export type Project = {
  title: string;
  category: "Web Application" | "Mobile App" | "Web & SEO" | "Custom Dashboard";
  badge?: string;
  highlight?: string;
  desc: string;
  tech: string[];
  features: string[];
  problem: string;
  solution: string;
  outcome: string;
};

export const contact = {
  email: "shreeshubha98@gmail.com",
  phone: "7735812597",
  phoneDisplay: "+91 7735812597",
  whatsapp: "https://wa.me/917735812597",
  whatsappUrl: "https://wa.me/917735812597?text=Hi%20Shubhashree,%20I%20would%20like%20to%20discuss%20a%20project!",
  call: "tel:+917735812597",
  github: "https://github.com/shubhashree500",
  linkedin: "https://www.linkedin.com/in/shubhashree-khilar-5391972a3?utm_source=share_via&utm_content=profile&utm_medium=member_android"
};

export const projects: Project[] = [
  {
    title: "College Result Management System",
    category: "Web Application",
    badge: "Academic Workflow",
    highlight: "Automated SGPA & Result Engine",
    desc: "Complete academic marks processing, automatic grading and SGPA calculation, transcript preparation and instant publication.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "REST APIs"],
    features: [
      "Student profile & enrolment management",
      "Subject & course credit configuration",
      "Bulk mark entry with validation",
      "Automated grade & SGPA calculation engine",
      "Official result sheet & transcript preparation",
      "One-click public result publication",
      "Role-based administrative workflow",
      "MongoDB database integration & backups"
    ],
    problem: "Academic result preparation traditionally involves repetitive manual steps: compiling scores across faculties, verifying grading criteria, calculating SGPA, and publishing. By hand, this process is slow, opaque, and prone to human calculation errors.",
    solution: "Engineered a centralized web platform where college administrators manage students, configure semester curriculum credits, record marks, and leverage an automated engine to calculate grades and SGPA before releasing verified results.",
    outcome: "Reduced result computation turnaround from weeks to hours, eliminated manual calculation discrepancies, and provided students with instant, secure result access."
  },
  {
    title: "MyJob — Job & Recruitment Platform",
    category: "Mobile App",
    badge: "Cross-Platform",
    highlight: "Real-time Candidate Pipeline",
    desc: "Mobile-first talent portal connecting jobseekers and hiring organizations with end-to-end recruitment pipelines.",
    tech: ["React Native", "TypeScript", "Node.js", "MySQL", "Sequelize", "REST APIs"],
    features: [
      "Jobseeker registration & CV profile builder",
      "Enterprise organization authentication",
      "Structured job vacancy postings",
      "1-click job application submission",
      "Live application status tracking for applicants",
      "Recruiter dashboard with candidate filtering",
      "Application review & status update workflows",
      "Secure Node.js backend with MySQL & Sequelize ORM"
    ],
    problem: "Jobseekers and hiring managers suffer from fragmented application flows split across WhatsApp messages, unorganized emails, and untracked resumes, causing missed opportunities and slow hiring cycles.",
    solution: "Designed and developed a cross-platform mobile application powered by React Native and TypeScript, paired with a robust MySQL-backed Node.js backend to provide dedicated role workflows for both applicants and employers.",
    outcome: "Streamlined the hiring process into a single structured hub where organizations manage applicants efficiently and candidates track real-time hiring stages."
  },
  {
    title: "ResMed Service Center",
    category: "Web & SEO",
    badge: "Client Facing",
    highlight: "High-Performance & Conversion Path",
    desc: "Fast, modern web portal engineered to help customers discover healthcare equipment services and submit verified service enquiries.",
    tech: ["Next.js", "React", "TypeScript", "CSS Modules", "SEO / Metadata"],
    features: [
      "Comprehensive service information catalog",
      "High-converting customer enquiry funnel",
      "Fully responsive mobile-to-desktop layout",
      "Optimized SEO architecture & metadata",
      "Fast page load speeds with SSR & static caching",
      "Accessible UI with high-contrast readability"
    ],
    problem: "Customers needing urgent medical equipment servicing struggled to locate accurate service details and direct support channels, resulting in high bounce rates and lost service leads.",
    solution: "Built a high-performance Next.js web application with intuitive navigation, structured service catalogs, clear call-to-actions, and seamless direct enquiry integrations.",
    outcome: "Increased customer inquiry conversion rates, achieved sub-second load times, and delivered a trustworthy digital front-door for medical device care."
  },
  {
    title: "Business Management / Admin Dashboard",
    category: "Custom Dashboard",
    badge: "Custom Solution",
    highlight: "Unified Operations & Analytics",
    desc: "Comprehensive business management suite unifying customer records, operational workflows, analytics, and role-based permissions.",
    tech: ["React", "Node.js", "MongoDB", "MySQL", "Chart.js", "REST APIs"],
    features: [
      "Executive overview dashboard with KPI metrics",
      "User role-based access control (RBAC)",
      "Customer CRM & interaction history",
      "Financial reports & payment tracking",
      "Automated tabular data export & filtering",
      "Database synchronization across endpoints",
      "Activity logging and system audit trails"
    ],
    problem: "Growing businesses frequently outgrow manual spreadsheets, scattered chats, and disconnected tools, leading to communication silos, missing records, and delayed reporting.",
    solution: "Engineered a scalable, full-featured management dashboard bringing customer data, operational metrics, payments, and staff permissions under a unified, intuitive interface.",
    outcome: "Eliminated duplicate manual entries, provided leadership with real-time operational visibility, and saved hours of weekly manual reporting."
  }
];

export type Service = {
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techHighlight: string;
};

export const services: Service[] = [
  {
    title: "Web Applications & Portals",
    tagline: "High-speed, scalable applications built with Next.js & React",
    description: "Tailored full-stack web platforms engineered around your exact operational workflows, ensuring lightning-fast load times and seamless UX.",
    deliverables: ["Full-Stack Architecture", "Role-Based Auth (RBAC)", "Custom API Integration", "Responsive Design"],
    techHighlight: "React • Next.js • TypeScript"
  },
  {
    title: "Custom Dashboards & Business Systems",
    tagline: "Replace messy spreadsheets with automated internal tools",
    description: "Centralize your company's data, customer interactions, analytics, and reporting in one unified, real-time administrative interface.",
    deliverables: ["Interactive Data Visualizations", "Inventory / CRM Tracking", "Automated Report Export", "Database Sync"],
    techHighlight: "Node.js • MongoDB • MySQL"
  },
  {
    title: "Cross-Platform Mobile Apps",
    tagline: "Native iOS & Android experiences using React Native",
    description: "Reach your users on smartphones with intuitive, performant mobile apps sharing a unified, type-safe codebase for lower cost and faster releases.",
    deliverables: ["Smooth 60 FPS Mobile UI", "Offline Data Caching", "Push Notifications", "App Store Readiness"],
    techHighlight: "React Native • TypeScript • REST"
  },
  {
    title: "APIs, Backends & Smart Automation",
    tagline: "Reliable data pipes, secure auth, and automated background tasks",
    description: "Robust server-side architectures, database schemas, and API integrations that keep your apps performant, secure, and ready to scale.",
    deliverables: ["Secure RESTful APIs", "Relational & NoSQL Schema", "Webhook & Third-Party Sync", "Performance Tuning"],
    techHighlight: "Express.js • Node.js • Postman"
  }
];

export const techMatrix = [
  {
    category: "Frontend Development",
    icon: "code",
    items: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Production" },
      { name: "React Native", level: "Mobile" },
      { name: "TypeScript", level: "Type-Safe" },
      { name: "JavaScript (ES6+)", level: "Core" },
      { name: "HTML5 & Modern CSS", level: "Semantic" }
    ]
  },
  {
    category: "Backend & APIs",
    icon: "server",
    items: [
      { name: "Node.js", level: "Runtime" },
      { name: "Express.js", level: "Framework" },
      { name: "RESTful APIs", level: "Architecture" },
      { name: "JWT & Auth", level: "Security" },
      { name: "Sequelize ORM", level: "Data Layer" }
    ]
  },
  {
    category: "Databases & Storage",
    icon: "database",
    items: [
      { name: "MongoDB", level: "NoSQL" },
      { name: "MySQL", level: "Relational" },
      { name: "Mongoose", level: "Modeling" },
      { name: "Database Indexing", level: "Optimization" }
    ]
  },
  {
    category: "Tools, DevOps & QA",
    icon: "tool",
    items: [
      { name: "Git & GitHub", level: "VCS" },
      { name: "Postman", level: "API Testing" },
      { name: "Vercel", level: "Cloud CI/CD" },
      { name: "VS Code", level: "Environment" }
    ]
  }
];

export type WorkflowStep = {
  step: string;
  title: string;
  tech: string[];
  desc: string;
  outcome: string;
};

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Discovery & System Architecture",
    tech: ["System Design", "DB Schema Mapping", "Tech Stack Analysis"],
    desc: "We analyze your business requirements, define data models, map user roles, and select the optimal modern stack for long-term scalability.",
    outcome: "Clear project scope, system diagrams & technical blueprint"
  },
  {
    step: "02",
    title: "UI/UX & Component Architecture",
    tech: ["Figma Wireframing", "Design Systems", "Component Specs"],
    desc: "Designing clean, intuitive, and responsive interfaces that your team and customers will love using from day one, with zero friction.",
    outcome: "Interactive prototypes & design system tokens"
  },
  {
    step: "03",
    title: "Agile Full-Stack Engineering",
    tech: ["React / Next.js", "TypeScript", "Node.js", "Clean Code"],
    desc: "Writing modular, type-safe, maintainable code with robust error handling, fast client rendering, and high-throughput backend endpoints.",
    outcome: "Production-grade, version-controlled codebase"
  },
  {
    step: "04",
    title: "Testing, API Validation & QA",
    tech: ["Postman", "Jest / Unit Tests", "Lighthouse 95+", "Security Checks"],
    desc: "Every API endpoint, form, and edge case is thoroughly tested. We optimize database queries and guarantee fast response times.",
    outcome: "Zero critical bugs, sub-second responses & secure auth"
  },
  {
    step: "05",
    title: "Production Deployment & CI/CD",
    tech: ["Vercel", "Cloud Hosting", "Automated Pipelines", "SSL / CDN"],
    desc: "Deploying your application to high-availability cloud infrastructure with custom domain routing, SSL certification, and automated backups.",
    outcome: "Live, fast, and globally accessible web application"
  },
  {
    step: "06",
    title: "Documentation, Handover & Support",
    tech: ["API Documentation", "Admin Guides", "Maintenance", "Monitoring"],
    desc: "You get full ownership: clean code documentation, admin walkthroughs, and responsive ongoing technical support as your business grows.",
    outcome: "Seamless launch, full code ownership & long-term stability"
  }
];

export const clientSectors = [
  "Colleges & Universities",
  "Educational Institutes",
  "Fast-Growing Startups",
  "Service & Healthcare Centers",
  "Recruitment & HR Teams",
  "Custom Enterprise Dashboards"
];
