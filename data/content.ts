export interface SoftwareSkill {
  id: string;
  name: string;
  short: string;
  level: string;
  category: string;
  iconType: 'text' | 'symbol';
  icon: string;
  accent: 'primary' | 'secondary' | 'tertiary' | 'surface';
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  status: 'ACTIVE / CURRENT' | 'COMPLETED';
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  status: 'ACTIVE' | 'COMPLETED';
  highlights: string[];
  description: string;
}

export interface LanguageItem {
  name: string;
  proficiencyLabel: string;
  percentage: number;
  fluencyStatus: string;
  color: string;
}

export interface SocialLink {
  name: string;
  platform: 'github' | 'linkedin' | 'behance' | 'instagram' | 'email';
  url: string;
  handle: string;
  angleDeg: number; // for circular orbit placement
}

export const PERSONAL_INFO = {
  fullName: "Rashmi Vihara Gimhani Thennakoon",
  shortName: "Rashmi Vihara",
  callsign: "RASHMI V.",
  monogram: "RV",
  headline: "PORTFOLIO",
  headlineYear: "2026",
  subtitles: [
    "AI UNDERGRADUATE",
    "GRAPHIC DESIGNER",
  ],
  status: "ACTIVE // AVAILABLE FOR COLLABS",
  systemReady: "SYSTEM READY",
  version: "VER 2026.04_AI",
  nodeId: "NODE.ID: 947-TK",
  hudVersion: "HUD v2.6 // THENNAKOON",
  clearance: "SEC-01 CLEARANCE",
  coordinates: "LAT 06°55′N // LON 79°50′E",
  location: "Colombo, Sri Lanka",
  email: "vihararashmi2@gmail.com",
  cvPath: "/Rashmi_Vihara_CV.pdf",
  portraitPath: "/images/portrait.png",
  bio: "Undergraduate Artificial Intelligence student at SLIIT with a strong interest in machine learning and data-driven problem solving. I also work as a Social Media Post Manager and freelance graphic and logo designer, building brand identities and delivering client work on deadline.",
  operatorBadges: [
    { label: "CORE FOCUS", value: "AI & DATA SYSTEMS", color: "text-primary" },
    { label: "CREATIVE DISCIPLINE", value: "BRAND IDENTITY", color: "text-on-surface" },
    { label: "DISPATCH LOCATION", value: "SRI LANKA (UTC+5:30)", color: "text-on-surface" },
    { label: "PROTOCOL WORKFLOW", value: "AGILE / CREATIVE", color: "text-secondary" },
  ],
};

export const SOFTWARE_SKILLS: SoftwareSkill[] = [
  {
    id: "photoshop",
    name: "PHOTOSHOP",
    short: "Ps",
    level: "ADVANCED",
    category: "Raster / Key Art",
    iconType: "text",
    icon: "Ps",
    accent: "primary",
  },
  {
    id: "illustrator",
    name: "ILLUSTRATOR",
    short: "Ai",
    level: "EXPERT",
    category: "Vector / Branding",
    iconType: "text",
    icon: "Ai",
    accent: "secondary",
  },
  {
    id: "canva",
    name: "CANVA",
    short: "Canva",
    level: "SOCIAL SPRINT",
    category: "Quick Collateral",
    iconType: "symbol",
    icon: "auto_fix_high",
    accent: "tertiary",
  },
  {
    id: "python",
    name: "PYTHON",
    short: "Py",
    level: "CORE / ML",
    category: "PyTorch & Data",
    iconType: "symbol",
    icon: "terminal",
    accent: "primary",
  },
  {
    id: "git",
    name: "GIT / GITHUB",
    short: "Git",
    level: "VERSION CTRL",
    category: "Repo & Collaboration",
    iconType: "symbol",
    icon: "fork_left",
    accent: "surface",
  },
  {
    id: "msoffice",
    name: "MS OFFICE",
    short: "Office",
    level: "DOCS & DATA",
    category: "Docs & Analysis",
    iconType: "symbol",
    icon: "description",
    accent: "primary",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "sliit",
    institution: "SLIIT",
    degree: "BSc (Hons) in Information Technology, Specializing in AI",
    period: "2023 - 2029",
    status: "ACTIVE / CURRENT",
    highlights: [
      "Artificial Intelligence",
      "Data Structures & Algorithms",
      "Machine Learning",
      "Databases",
    ],
  },
  {
    id: "ibbagamuwa",
    institution: "IBBAGAMUWA CENTRAL COLLEGE",
    degree: "G.C.E. Advanced Level - Physical Science Stream",
    period: "2021 - 2023",
    status: "COMPLETED",
    highlights: [
      "Advanced Physical Sciences",
      "Higher Mathematics",
      "Physics & Chemistry",
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "zentra",
    company: "ZENTRA GYM",
    role: "Social Media Post Manager",
    period: "2026 - PRESENT",
    status: "ACTIVE",
    highlights: ["Campaign Strategy", "Content Production", "Audience Engagement"],
    description: "Manage official Facebook & digital channels, design dynamic sports motion carousels, and execute engagement campaigns driving high-ticket memberships.",
  },
  {
    id: "freelance",
    company: "FREELANCE STUDIO",
    role: "Freelance Graphic Designer",
    period: "2025 - PRESENT",
    status: "ACTIVE",
    highlights: ["Brand Identity Systems", "Logo Engineering", "Vector Assets"],
    description: "Collaborate directly with businesses to craft distinct visual identities, mathematical monograms, print-ready packaging, and web-ready vector collateral.",
  },
];

export const LANGUAGES: LanguageItem[] = [
  {
    name: "SINHALA",
    proficiencyLabel: "(NATIVE / BILINGUAL)",
    percentage: 100,
    fluencyStatus: "FLUENCY: COMPLETE",
    color: "#b8a9e6",
  },
  {
    name: "ENGLISH",
    proficiencyLabel: "(PROFESSIONAL / ACADEMIC)",
    percentage: 85,
    fluencyStatus: "FLUENCY: ADVANCED PROFESSIONAL",
    color: "#adc6ff",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    platform: "linkedin",
    url: "https://linkedin.com",
    handle: "Rashmi Vihara",
    angleDeg: 0,
  },
  {
    name: "GitHub",
    platform: "github",
    url: "https://github.com",
    handle: "rashmi-vihara",
    angleDeg: 72,
  },
  {
    name: "Behance",
    platform: "behance",
    url: "https://behance.net",
    handle: "rashmivihara",
    angleDeg: 144,
  },
  {
    name: "Instagram",
    platform: "instagram",
    url: "https://instagram.com",
    handle: "@vihara.designs",
    angleDeg: 216,
  },
  {
    name: "Email",
    platform: "email",
    url: `mailto:${PERSONAL_INFO.email}`,
    handle: PERSONAL_INFO.email,
    angleDeg: 288,
  },
];
