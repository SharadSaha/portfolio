import type {
  ExperienceItem,
  NavItem,
  ProjectItem,
  SkillGroup,
  SocialLink,
} from "../types";

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const siteConfig = {
  profileImage: assetUrl("assets/profile.jpg"),
  resume: assetUrl("resume.pdf"),
  email: "mailto:sahasharad29@gmail.com",
  emailLabel: "sahasharad29@gmail.com",
  phone: "tel:+919612348012",
  phoneLabel: "+91-9612348012",
  linkedin: "https://www.linkedin.com/in/sharad-saha-0906711b8",
  linkedinLabel: "linkedin.com/in/sharad-saha",
  github: "https://github.com/SharadSaha",
  githubLabel: "github.com/sharad-saha",
} as const;

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Rdash (YC W22)",
    role: "Software Development Engineer",
    duration: "July 2024 - Present",
    summary:
      "Owning full-stack product delivery for operations-heavy workflows where speed, scale, and reliability directly impact customer adoption.",
    bullets: [
      "Built a DPR system with dynamic CRUD flows and scalable PDF exports using Puppeteer and Fastify.",
      "Implemented internationalization and multi-currency support serving 3,000+ users across diverse business contexts.",
      "Delivered a scheduler module with Gantt charts for complex planning and execution workflows.",
      "Improved reliability through stronger TypeScript standards, Jest coverage, and CI/CD guardrails.",
    ],
  },
  {
    company: "Rdash",
    role: "Software Engineering Intern",
    duration: "Prior to July 2024",
    summary:
      "Contributed across product surfaces with a sharp focus on shipping quality features, product instrumentation, and frontend experience.",
    bullets: [
      "Shipped 30+ product features across the platform with production-ready implementation quality.",
      "Improved accessibility with ARIA attributes, semantic HTML, and cleaner interaction patterns.",
      "Integrated PostHog and Firebase analytics to improve visibility into behavior and adoption.",
      "Raised application performance by 7% through frontend optimizations and leaner rendering paths.",
    ],
  },
  {
    company: "MathWorks",
    role: "Engineering Intern",
    duration: "Internship",
    summary:
      "Worked on engineering simulation and data tooling, balancing visualization performance with signal accuracy.",
    bullets: [
      "Built an IMU data visualizer capable of handling 10k+ datapoints smoothly.",
      "Reduced drift by 15% through improved signal processing and analysis workflows.",
      "Developed a Gazebo plugin in C++ to support simulation-driven testing and experimentation.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Laterly AI",
    period: "Chrome Extension + Dashboard",
    problem:
      "Professionals consume too much content across the week and lose track of what matters, making follow-through inconsistent.",
    solution:
      "Built a browser extension and companion dashboard that turns articles into AI summaries, topic clusters, and weekly digests.",
    impact:
      "Created a tighter capture-to-insight workflow that reduces information overload and makes reading behavior actionable.",
    stack: ["React", "Redux", "NestJS", "PostgreSQL", "Prisma", "OpenAI"],
    github: "https://github.com/SharadSaha/laterly.ai",
  },
  {
    title: "Hoppscotch",
    period: "Open Source Contributions",
    problem:
      "Fast-moving open source products need steady quality improvements so community users are not blocked by smaller bugs and UX rough edges.",
    solution:
      "Contributed fixes and minor enhancements to the Hoppscotch repository, focusing on resolving bugs and tightening day-to-day product behavior.",
    impact:
      "Helped improve product reliability and polish in a widely used open source API development tool through practical, production-minded contributions.",
    stack: ["Open Source", "TypeScript", "Bug Fixes", "Enhancements", "GitHub"],
    github: "https://github.com/SharadSaha/hoppscotch",
  },
  {
    title: "FindMyNest",
    period: "Property Search Platform",
    problem:
      "Property discovery is often fragmented across search, communication, and follow-up, resulting in low-intent user journeys.",
    solution:
      "Built a full-stack platform with authentication, search flows, and automated email updates to streamline discovery and engagement.",
    impact:
      "Improved the search-to-contact path with a clearer product funnel and lower manual follow-up overhead.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Email Automation",
    ],
    github: "https://github.com/SharadSaha/findmynest",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "Redux",
      "HTML5",
      "CSS3",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Fastify",
      "Express",
      "REST APIs",
      "Authentication",
      "Puppeteer",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Firebase"],
  },
  {
    title: "DevOps / Tools",
    skills: ["GitHub Actions", "Jest", "PostHog", "CI/CD", "Git", "Linux"],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Email", href: siteConfig.email },
  { label: "GitHub", href: siteConfig.github },
  { label: "LinkedIn", href: siteConfig.linkedin },
];

export const stats = [
  { label: "Years building products", value: "2+" },
  { label: "Features shipped", value: "50+" },
  { label: "Orgs supported", value: "500+" },
];
