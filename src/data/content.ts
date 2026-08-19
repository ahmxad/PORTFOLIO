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
  { label: "Education", to: "/education" },
  { label: "Certification", to: "/certification" },
  { label: "Contact", to: "/contact" },
  { label: "More", to: "/more" },
];

export const ABOUT = {
  name: "Ahmad",
  role: "Full-Stack Web Developer · CS Undergraduate · QuickBooks Bookkeeper",
  intro:
    "I’m a Computer Science undergraduate and a web developer who builds full-stack applications with the Ruby on Rails and MERN stack. Alongside development, I work as a QuickBooks bookkeeper, across both QuickBooks Online and Desktop.",
  paragraphs: [
    "I write JavaScript, Python, Ruby, C++ and Rust, every language teaches different concepts. I started on my own and most of my working is based on my interests.",
    "Recently I completed my Certified Ethical Hacking (CEH) training from TecPhantom institute Lahore, sponsored by NAVTCC. That changed how I approach building websites.",
    "Besides I'm a QuickBooks Bookkeeper. I record transactions, Cheques, Credits, manage accounts and do Reconciliations.",
    "I am a big fan of technology, I've solved a lot of coding problems on Codwars, LeetCode and I completed 100+ rooms on TryHackMe.",
  ],
  interests: [
    "Full-stack web applications",
    "Ruby on Rails",
    "SQL and NoSQL both",
    "Ethical hacking",
    "Linux (Arch btw)",
    "QuickBooks Bookkeeping",
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
    blurb: "Impressing the clients",
    items: [
      "React.js",
      "JavaScript",
      "Figma",
      "Hotwire",
      "Tailwind CSS",
      "Mobile first approach",
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
  {
    id: "bookkeeping",
    title: "Bookkeeping & Accounting",
    blurb: "Keeping the numbers honest.",
    items: [
      "Transaction Recording",
      "Accounts Management",
      "Financial Reporting",
      "Bank Reconciliation",
      "Cheque & Credit Entry",
    ],
    sub: [
      {
        label: "QuickBooks",
        items: ["QuickBooks Online", "QuickBooks Desktop"],
      },
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
    date: "2021 - 2023",
  },
];

export const CERTIFICATION = {
  title: "Certified Ethical Hacking (CEH)",
  sponsor: "Sponsored by NAVTTC",
  note:
    "Completed formal CEH training. This is a certification in ethical hacking practice and not a claim of professional cybersecurity employment.",
} as const;

export const CONTACT = {
  phrase: "CALL THE DEVELOPER",
  sub: "Reach me through the provided links. I'd love to discuss any queries.",
  channels: [
    { label: "Email", value: "misterlaptop136@gmail.com", href: "mailto:misterlaptop136@gmail.com" },
    { label: "GitHub", value: "ahmxad", href: "https://github.com/ahmxad" },
    { label: "Instagram", value: "axxhmad", href: "https://www.instagram.com/axxhmad" },
  ],
} as const;

export type Interest = {
  id: string;
  title: string;
  category: string;
  size: "lg" | "md" | "sm";
  tagline?: string;
};

// Ahmad's personal interests & hobbies — used by the /more page.
// No fabricated personal claims; names + categories only.
export const INTERESTS: Interest[] = [
  { id: "chess", title: "Chess", category: "Games & Challenges", size: "lg" },
  { id: "ctf", title: "CTF Challenges", category: "Games & Challenges", size: "lg" },
  { id: "cricket", title: "Cricket", category: "Sports", size: "md" },
  { id: "football", title: "Football", category: "Sports", size: "md" },
  { id: "traveling", title: "Traveling", category: "Exploration & World", size: "md" },
  { id: "geography", title: "Geography", category: "Exploration & World", size: "md" },
  { id: "flags", title: "Flags / Countries", category: "Exploration & World", size: "md" },
  { id: "reading", title: "Reading", category: "Culture & Entertainment", size: "md" },
  { id: "movies", title: "Movies / Series", category: "Culture & Entertainment", size: "lg" },
  { id: "anime", title: "Anime", category: "Culture & Entertainment", size: "sm" },
  { id: "politics", title: "Politics", category: "Curiosity & Technology", size: "sm" },
];

// Audio asset map. Files are optional; the sound system no-ops if absent.
export const AUDIO_FILES: Record<string, string> = {
  hover: "/audio/ui-hover.mp3",
  click: "/audio/ui-click.mp3",
  navigation: "/audio/navigation.mp3",
  transition: "/audio/transition.mp3",
  title: "/audio/title-reveal.mp3",
};
