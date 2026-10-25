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
  },
  {
    id: "minimalist-monogram-suite",
    title: "Geometric Monograms & Brand Marks",
    category: "BRAND & DESIGN",
    badge: "Brand Identity",
    subtitle: "Vector Identity & Glyphs",
    client: "Freelance Clients",
    role: "Logo & Visual Identity Designer",
    description: "A collection of geometric monograms, vector brand marks, and identity systems designed for small business clients.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEuUKtEX6tAE0P0-1q_lM8O-HUjjz9Y1Zxsl6i-ZXKFv3Wb_FEDTK47HThU7mw1BrutQvjUnpWk_Ntr51Y5D9eCik1B6aH9AynbV2OHCeYEGwqHG8tYsaRuZKPfv2E3WRQRi-m0B-XENVrNuQd7UwywoelQrTm0Z5IOxW6AnkTvy-1KZMWbfya9_GMmyLBNEucG7Ojib6MtRCPFzMElp0XuFSHJKhtPWXFft4J1QtRFG7CAIvQ48uV",
    deliverables: [
      "Custom vector logo marks",
      "Grid construction guidelines",
      "Print and digital vector asset packages",
    ],
    techStack: ["Adobe Illustrator", "Vector Geometry", "Typography"],
    fullStory: "This suite showcases bespoke vector logos crafted for client businesses. Each design starts with pencil sketches and is refined on strict geometric grids in Adobe Illustrator to ensure scalability across signs, social media avatars, and print collateral.",
    year: "2025",
  },
  {
    id: "venom-key-art",
    title: "Key Art Poster Compositing Study",
    category: "BRAND & DESIGN",
    badge: "Creative Study",
    subtitle: "Photo Manipulation & Letterforms",
    client: "Personal Exploration",
    role: "Digital Artist & Retoucher",
    description: "An experimental poster composition focusing on high-contrast lighting, texture blending, and stylized typography in Adobe Photoshop.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVzs3YL6qmDKZ4nSu8gdUfmQ5_CwMvIdrkChDjIrBpwM6c7I7Bf-ED5ztOOGQia7bPlXhRpKOtheCmIitIagP6C83gZZqWiDHBPISESvtDoxQGjKblbc-T1IQ2V993tg4tR0ASQhgqxZKK-ZH6sn4Hr7RWfxxObFyDLwY3T8GMVRaP3K2KBrn5dglRiZOh3XLVjYRt616qIWkO-R-rpe1os-Nikn3zijjjwokMR_wcR2WRKCliLW5I",
    deliverables: [
      "Layered photo composite at 300 DPI",
      "Custom typography and credit layout",
      "Color grading and lighting study",
    ],
    techStack: ["Adobe Photoshop", "Photo Manipulation", "Color Grading"],
    fullStory: "A personal creative study exploring complex digital lighting, specular reflections, and cinematic texture mixing. Created as an exercise to sharpen photo compositing speed and poster layout hierarchy.",
    year: "2025",
  },
  {
    id: "rl-simulation",
    title: "Multi-Agent Simulation & Evaluation",
    category: "AI & ML",
    badge: "Coursework",
    subtitle: "Python & Reinforcement Learning",
    client: "SLIIT Computing",
    role: "AI Undergraduate Student",
    description: "Implemented Python scripts for multi-agent routing simulations and evaluated performance metrics under varying constraints.",
    deliverables: [
      "Python simulation scripts",
      "Agent policy evaluation graphs",
      "Technical analysis report",
    ],
    techStack: ["Python", "PyTorch Basics", "Matplotlib", "Git"],
    fullStory: "Conducted as part of AI coursework at SLIIT. Developed Python scripts to model agent coordination, recorded reward metrics over training iterations, and authored technical documentation explaining algorithmic convergence.",
    year: "2025",
  },
];
