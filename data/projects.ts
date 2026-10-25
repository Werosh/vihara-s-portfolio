export type ProjectCategory = 'ALL' | 'BRAND & DESIGN' | 'AI & ML';

export interface Project {
  id: string;
  title: string;
  category: 'BRAND & DESIGN' | 'AI & ML';
  badge: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  deliverables: string[];
  techStack: string[];
  fullStory: string;
  year: string;
  client: string;
  role: string;
  credit?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "smartnest-iot-control-center",
    title: "SmartNest IoT Control Center",
    category: "BRAND & DESIGN",
    badge: "Collaborative Project",
    subtitle: "Website Layout & Visual Presentation",
    client: "Collaborative Project",
    role: "Helping to website creation",
    description: "A real-time smart home IoT control center dashboard. I assisted with website creation, interface structure, and visual presentation.",
    imageUrl: "/projects/iot project.jpg",
    deliverables: [
      "Assisted with website layout & structure",
      "Prepared visual assets and presentation elements",
      "Collaborated on interface styling",
    ],
    techStack: ["React", "UI Layout", "Tailwind CSS", "Visual Design"],
    fullStory: "SmartNest is an IoT dashboard built for monitoring energy usage and controlling connected home appliances. In this collaborative project, I contributed by helping with website creation, organizing the visual layout of dashboard components, and reviewing responsive interface presentation.",
    credit: "Web development and IoT integration by Werosh Kriyanjala",
    liveUrl: "https://lnkd.in/gUjMkW9R",
    year: "2026",
  },
  {
    id: "zentra-gym",
    title: "Zentra Gym Social Campaign & Brand Graphics",
    category: "BRAND & DESIGN",
    badge: "Client Work",
    subtitle: "Social Media Post Series & Promos",
    client: "Zentra Gym",
    role: "Social Media Post Manager & Designer",
    description: "Designed weekly social media graphics, workout promotion banners, and membership drive carousels for Facebook and Instagram.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqryf12Ly-BPfanc0n-ZcOWD2Sqt_7hRL0jaxFP_gpw2kmwLJnvJriLVI8p_WH0iaKOAT6OhY4_WjKxKBxWIeHYowSqtaZ_ZLyKAY0VN3CWIMJ_s7IqObcZwETdFw_vou4rCPPfAeoS1v5F0UmxFX7B2me4hBVr72ivPbmkxSECRQTVHClX89agVOJ6wKEn5RTj6zKHY3CofvZwbDqwtXzn_Ig0CnugH7ChS1q-8zygwS4i0BXpMVD",
    deliverables: [
      "Weekly Facebook workout post carousels",
      "Promotional membership banners",
      "Consistent typography and color guidelines",
    ],
    techStack: ["Adobe Photoshop", "Canva Pro", "Content Strategy"],
    fullStory: "As the social media post manager for Zentra Gym, I produce the visual collateral for their digital channels. I established a bold athletic look using high-contrast text and clean photography to clearly communicate workout schedules and membership promotions.",
    year: "2026",
  }
];
