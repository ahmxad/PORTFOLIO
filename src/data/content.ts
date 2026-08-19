// ============================================================
// AHMAD — single source of truth for portfolio content.
// Only factual, provided information is used. Where real data
// does not exist, the UI shows clearly-marked placeholders.
// ============================================================

export const BRAND = {
  name: "AHMAD",
  // Original developer-oriented tagline (NOT a show slogan).
  tagline: "DEVELOPER. BUILDER. SECURITY-MINDED.",
  contactPhrase: "CALL THE DEVELOPER",
  role: "Full-Stack Web Developer",
  subtitle: "Computer Science Undergraduate · MERN · Rails · CEH",
} as const;

export type NavItem = { label: string; to: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Education", to: "/education" },
  { label: "Certification", to: "/certification" },
  { label: "Contact", to: "/contact" },
];

export const ABOUT = {
  name: "Ahmad",
  role: "Full-Stack Web Developer · CS Undergraduate",
  intro:
    "I’m a Computer Science undergraduate and a web developer who builds full-stack applications with the MERN stack — MongoDB, Express.js, React.js and Node.js. I also ship backend services with Ruby on Rails and work with relational data using SQL.",
  paragraphs: [
    "I write JavaScript, Python, Ruby and C++, and I care about how an API is shaped as much as how a page looks. Most of what I’ve built so far comes from coursework and projects I started on my own — small ideas taken all the way to something that actually runs.",
    "Recently I completed my Certified Ethical Hacking (CEH) training, sponsored by NAVTTC. That changed how I approach building: I now think about where things break before I think about where they shine. Security isn’t a final step for me — it’s part of the first sketch.",
    "I like work that is legible. Code I can explain, interfaces I can defend, and systems I can reason about under pressure. I’m still early in the career, but I finish what I start.",
  ],
  interests: [
    "Full-stack web applications",
    "RESTful API design",
    "NoSQL & relational data modeling",
    "Ethical hacking & defensive thinking",
    "Linux as a daily driver",
    "Type-driven, readable code",
  ],
} as const;

export type SkillGroup = {
  id: string;
  title: string;
  blurb: string;
  items: string[];
  sub?: { label: string; items: string[] }[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    blurb: "What the visitor actually touches.",
    items: [
      "React.js",
      "JavaScript",
      "Figma",
      "Hotwire",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  },
  {
    id: "database",
    title: "Database Management",
    blurb: "Where the truth is stored.",
    items: [
      "MongoDB",
      "Mongoose ODM",
      "SQL",
      "Relational Database Design",
      "NoSQL Data Modeling",
    ],
  },
  {
    id: "security",
    title: "Cybersecurity",
    blurb: "Thinking like the person who shouldn’t get in.",
    items: [
      "Ethical Hacking (CEH Certified)",
      "Penetration Testing",
      "Network Security",
      "Vulnerability Assessment",
      "Nmap",
      "Burp Suite",
      "OWASP Top 10",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    blurb: "The machinery behind the page.",
    items: ["Express.js", "FastAPI", "Rails", "RESTful API Design"],
  },
  {
    id: "languages",
    title: "Programming Languages",
    blurb: "The raw materials.",
    items: ["JavaScript", "Python", "Ruby", "C++", "Rust"],
  },
  {
    id: "devops",
    title: "Tools & DevOps",
    blurb: "How the work gets shipped.",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "API Testing & Debugging",
      "Linux",
    ],
    sub: [
      {
        label: "Linux",
        items: ["Arch Linux", "Kali Linux", "Ubuntu", "Linux Mint", "CachyOS"],
      },
      { label: "Desktop", items: ["KDE Plasma"] },
    ],
  },
];

export type EducationRecord = {
  institution: string;
  credential: string;
  location: string;
  date: string;
  note?: string;
};

export const EDUCATION: EducationRecord[] = [
  {
    institution: "Leads University, Lahore",
    credential: "Bachelor’s of Computer Science",
    location: "Lahore",
    date: "03 / 2025",
  },
  {
    institution: "Ghazali College, Lahore",
    credential: "F.Sc Pre-Medical",
    location: "Lahore",
    date: "—",
  },
];

export const CERTIFICATION = {
  title: "Certified Ethical Hacking (CEH)",
  sponsor: "Sponsored by NAVTTC",
  note:
    "Completed formal CEH training. This is a certification in ethical hacking practice — not a claim of professional cybersecurity employment.",
} as const;

// No professional history provided. Experience page renders an
// elegant, clearly-marked empty state instead of fabricated roles.
export const EXPERIENCE_PLACEHOLDER = {
  heading: "Case History",
  status: "FILE OPEN — RECORD PENDING",
  body:
    "No professional engagements have been logged yet. The work so far is coursework and self-initiated builds. When real roles begin, they’ll be filed here — in order, with dates.",
} as const;

export const CONTACT = {
  phrase: "CALL THE DEVELOPER",
  sub: "No real contact handles were provided. Use the desk below, or reach out directly and details can be shared.",
  channels: [
    { label: "Email", value: "Available on request", href: null },
    { label: "GitHub", value: "Handle pending", href: null },
    { label: "LinkedIn", value: "Profile pending", href: null },
  ],
} as const;

// Audio asset map. Files are optional; the sound system no-ops if absent.
export const AUDIO_FILES: Record<string, string> = {
  hover: "/audio/ui-hover.mp3",
  click: "/audio/ui-click.mp3",
  navigation: "/audio/navigation.mp3",
  transition: "/audio/transition.mp3",
  title: "/audio/title-reveal.mp3",
};
