export interface TextSkillItem {
  id: string;
  name: string;
  description: string;
  category: 'AI' | 'Design';
}

export interface SoftwareSkill {
  id: string;
  name: string;
  short: string;
  level: string;
  percentage: number;
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
  status: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  status: string;
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
}

export const PERSONAL_INFO = {
  fullName: "Rashmi Vihara Gimhani Thennakoon",
  shortName: "Rashmi Vihara",
  monogram: "RV",
  headline: "PORTFOLIO",
  headlineYear: "2026",
  subtitles: [
    "AI UNDERGRADUATE",
    "GRAPHIC DESIGNER",
  ],
  roleTitle: "AI Undergraduate & Graphic Designer",
  status: "Open to internships and freelance design work",
  location: "Colombo, Sri Lanka",
  email: "vihararashmi2@gmail.com",
  cvPath: "/Rashmi_Vihara_CV.pdf",
  portraitPath: "/images/portrait.png",
  bio: "I am a second-year Artificial Intelligence undergraduate at SLIIT and a freelance graphic designer based in Sri Lanka. I work with local businesses to build clear brand identities, logos, and digital campaign graphics while completing coursework in machine learning and data structures.",
  hudVersion: "v2.6",
};

/* Clean Text-based Skills (No fake percentages, concrete context) */
export const AI_SKILLS_LIST: TextSkillItem[] = [
  {
    id: "python",
    name: "Python",
    description: "Coursework, algorithms, and data analysis scripting.",
    category: "AI",
  },
  {
    id: "ml",
    name: "Machine Learning",
    description: "Model training, supervised learning concepts, and PyTorch basics.",
    category: "AI",
  },
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    description: "Core computing curriculum and problem solving at SLIIT.",
    category: "AI",
  },
  {
    id: "git",
    name: "Git & GitHub",
    description: "Version control, branching workflows, and project repositories.",
    category: "AI",
  },
  {
    id: "docs",
    name: "Technical Documentation",
    description: "Structured project reports, analysis write-ups, and data summaries.",
    category: "AI",
  },
];

export const DESIGN_SKILLS_LIST: TextSkillItem[] = [
  {
    id: "ps",
    name: "Adobe Photoshop",
    description: "Social media graphics, key art composites, and photo retouching.",
    category: "Design",
  },
  {
    id: "ai",
    name: "Adobe Illustrator",
    description: "Vector logo design, geometric brand marks, and print-ready vectors.",
    category: "Design",
  },
  {
    id: "canva",
    name: "Canva Pro",
    description: "Fast-turnaround promotional material and client social content.",
    category: "Design",
  },
  {
    id: "brand",
    name: "Brand & Identity Design",
    description: "Typography systems, color palettes, and visual style guides.",
    category: "Design",
  },
  {
    id: "social",
    name: "Social Media Campaigns",
    description: "Engagement posts, workout promotional series, and client banners.",
    category: "Design",
  },
];

export const LANGUAGES_TEXT_LIST = [
  { name: "Sinhala", level: "Native" },
  { name: "English", level: "Professional Working Proficiency" },
];

/* Backward-compatible exports */
export const AI_SKILLS: SoftwareSkill[] = [
  { id: "python", name: "PYTHON", short: "Py", level: "CORE", percentage: 90, category: "Languages", iconType: "symbol", icon: "terminal", accent: "primary" },
  { id: "ml", name: "MACHINE LEARNING", short: "ML", level: "MODELS", percentage: 82, category: "PyTorch & Algorithms", iconType: "symbol", icon: "psychology", accent: "primary" },
  { id: "data-structures", name: "DATA STRUCTURES", short: "DS", level: "ALGORITHMS", percentage: 85, category: "SLIIT Computing", iconType: "symbol", icon: "account_tree", accent: "tertiary" },
  { id: "git", name: "GIT & GITHUB", short: "Git", level: "VERSION CONTROL", percentage: 88, category: "DevOps", iconType: "symbol", icon: "fork_left", accent: "surface" },
  { id: "office", name: "MS OFFICE SUITE", short: "Docs", level: "ANALYSIS", percentage: 92, category: "Documentation", iconType: "symbol", icon: "description", accent: "primary" },
];

export const DESIGN_SKILLS: SoftwareSkill[] = [
  { id: "photoshop", name: "ADOBE PHOTOSHOP", short: "Ps", level: "ADVANCED", percentage: 94, category: "Raster / Key Art", iconType: "text", icon: "Ps", accent: "primary" },
  { id: "illustrator", name: "ADOBE ILLUSTRATOR", short: "Ai", level: "EXPERT", percentage: 96, category: "Vector / Branding", iconType: "text", icon: "Ai", accent: "secondary" },
  { id: "canva", name: "CANVA PRO", short: "Canva", level: "SOCIAL SPRINT", percentage: 92, category: "Fast Turnaround", iconType: "symbol", icon: "auto_fix_high", accent: "tertiary" },
  { id: "logo-design", name: "LOGO & BRAND IDENTITY", short: "Logo", level: "EXPERT", percentage: 95, category: "Vector Geometry", iconType: "symbol", icon: "palette", accent: "secondary" },
  { id: "social-media", name: "SOCIAL MEDIA DESIGN", short: "Social", level: "CAMPAIGNS", percentage: 95, category: "Zentra Gym & Clients", iconType: "symbol", icon: "campaign", accent: "primary" },
];

export const SOFTWARE_SKILLS: SoftwareSkill[] = [...AI_SKILLS, ...DESIGN_SKILLS];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "sliit",
    institution: "SLIIT (Sri Lanka Institute of Information Technology)",
    degree: "BSc (Hons) in Information Technology — Specializing in Artificial Intelligence",
    period: "2023 – 2027",
    status: "In Progress",
    highlights: [
      "Artificial Intelligence fundamentals",
      "Data Structures & Algorithms",
      "Machine Learning & Data Science",
      "Database Management Systems",
    ],
  },
  {
    id: "ibbagamuwa",
    institution: "Ibbagamuwa Central College",
    degree: "G.C.E. Advanced Level (Physical Science Stream)",
    period: "2021 – 2023",
    status: "Completed",
    highlights: [
      "Combined Mathematics",
      "Physics",
      "Chemistry",
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "zentra",
    company: "Zentra Gym",
    role: "Social Media Post Manager",
    period: "2026 – Present",
    status: "Current",
    highlights: ["Social media campaign visuals", "Promotional workout graphics", "Brand consistency"],
    description: "Design promotional graphics and workout carousels for Facebook and digital channels to support membership signups and client engagement.",
  },
  {
    id: "freelance",
    company: "Freelance Design",
    role: "Graphic & Logo Designer",
    period: "2025 – Present",
    status: "Current",
    highlights: ["Logo design", "Brand identity packages", "Social media templates"],
    description: "Work directly with small business owners to create memorable brand marks, vector logos, and social media marketing assets on schedule.",
  },
];

export const LANGUAGES: LanguageItem[] = [
  {
    name: "Sinhala",
    proficiencyLabel: "Native",
    percentage: 100,
    fluencyStatus: "Native",
    color: "#3B82F6",
  },
  {
    name: "English",
    proficiencyLabel: "Professional",
    percentage: 85,
    fluencyStatus: "Professional Working Proficiency",
    color: "#3B82F6",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    platform: "linkedin",
    url: "https://www.linkedin.com/in/rashmi-vihara-69710a41a/",
    handle: "rashmi-vihara",
  },
  {
    name: "GitHub",
    platform: "github",
    url: "https://github.com/vihararashmi2-lab",
    handle: "vihararashmi2-lab",
  },
  {
    name: "Instagram",
    platform: "instagram",
    url: "https://www.instagram.com/vih_r_sh/",
    handle: "@vih_r_sh",
  },
  {
    name: "Email",
    platform: "email",
    url: `mailto:${PERSONAL_INFO.email}`,
    handle: PERSONAL_INFO.email,
  },
];
