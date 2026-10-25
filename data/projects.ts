export type ProjectCategory = 'ALL' | 'BRAND & DESIGN' | 'AI & ML';

export interface Project {
  id: string;
  title: string;
  category: 'BRAND & DESIGN' | 'AI & ML';
  badge: string;
  metric: string;
  metricSecondary?: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  isCustomVisual?: boolean;
  colSpanDesktop: number; // 4, 5, 7, 8, 12
  deliverables: string[];
  techStack: string[];
  fullStory: string;
  year: string;
  accent: 'primary' | 'secondary' | 'tertiary';
  credit?: string;
  liveUrl?: string;
  role?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "smartnest-iot-control-center",
    title: "SMARTNEST IOT CONTROL CENTER",
    category: "BRAND & DESIGN",
    badge: "COLLABORATIVE PROJECT",
    metric: "SMART HOME IOT",
    metricSecondary: "LIVE WEB APP",
    subtitle: "WEB PLATFORM COLLABORATION",
    description: "Real-time smart home IoT control center and energy monitor. Assisted with website creation, interface layout, and visual styling support.",
    imageUrl: "/projects/iot project.jpg",
    colSpanDesktop: 7,
    role: "Helping to website creation",
    deliverables: [
      "Assisting with website creation & UI layout",
      "Interface styling & visual asset preparation",
      "Collaborative UX presentation reviews",
    ],
    techStack: ["React", "UI/UX Layout", "Tailwind CSS", "Visual Design"],
    fullStory: "A collaborative smart home control dashboard designed for monitoring power usage and managing connected IoT appliances. Rashmi contributed by assisting with the website creation, helping organize interface layout structures, and refining visual asset presentation.",
    credit: "Web development and IoT integration by Werosh Kriyanjala",
    liveUrl: "https://smartnest-control-center.netlify.app/",
    year: "2026",
    accent: "primary",
  },
  {
    id: "zentra-gym",
    title: "ZENTRA GYM // REBRAND & SOCIAL",
    category: "BRAND & DESIGN",
    badge: "FLAGSHIP CAMPAIGN",
    metric: "ENGAGEMENT +340%",
    subtitle: "CASE STUDY // CAMPAIGN ID #01",
    description: "Comprehensive multi-channel social media identity, modular story layout system, and promotional collateral engineered to convert high-ticket fitness memberships.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqryf12Ly-BPfanc0n-ZcOWD2Sqt_7hRL0jaxFP_gpw2kmwLJnvJriLVI8p_WH0iaKOAT6OhY4_WjKxKBxWIeHYowSqtaZ_ZLyKAY0VN3CWIMJ_s7IqObcZwETdFw_vou4rCPPfAeoS1v5F0UmxFX7B2me4hBVr72ivPbmkxSECRQTVHClX89agVOJ6wKEn5RTj6zKHY3CofvZwbDqwtXzn_Ig0CnugH7ChS1q-8zygwS4i0BXpMVD",
    colSpanDesktop: 7,
    deliverables: ["30+ Motion Posts", "Typography Grid", "Brand Book V2"],
    techStack: ["Photoshop", "Illustrator", "Social Campaign Strategy"],
    fullStory: "Engineered a dynamic athletic visual system featuring industrial charcoal backgrounds, high-contrast typography, and electric cyan/crimson lighting. Produced weekly carousel templates and motion stories that expanded organic follower growth by 340% within 90 days.",
    year: "Q1 2026",
    accent: "secondary",
  }
];
