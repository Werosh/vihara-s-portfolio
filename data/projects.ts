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
}

export const PROJECTS: Project[] = [
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
  },
  {
    id: "neural-vision-ai",
    title: "NEURAL VISION AI // GAZE CLASSIFIER",
    category: "AI & ML",
    badge: "MODEL // CV-98",
    metric: "FPS: 62.4 // LATENCY 14MS",
    subtitle: "AI & COMPUTER VISION",
    description: "Real-time human-computer attention tracker utilizing lightweight CNN transformers for pupil vector estimation and intent analysis.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1HrR0YZO8C7PyStoNYM8ailHXFS8hHBfJBnnYE47zZV0sCVT9qWgahw5vgGZ38YUwN4Nu2Y5Mk7B2zcP6fpt2crJ8Vun4Qg4H1-vngCZca5cvTOt46zOsNDpMUFqg5zDlarMXdujomK7lTP6vPMgcy6rOPTI92ZTIyYeTMYB9qOeKZEMmgYMrtf_p_-csAUmTu9lpI95nhxCDmF5dygfpCO_YN1S86m_-JXOOB1fNfAyiO6DDOW-9",
    colSpanDesktop: 5,
    deliverables: ["Lightweight CNN Pipeline", "Real-Time Inference", "TensorRT Optimization"],
    techStack: ["PyTorch", "OpenCV", "TensorRT", "Python"],
    fullStory: "Designed an edge-optimized neural network predicting human focal vector points directly from webcam streams. Compressed via quantization for real-time interaction benchmarks with sub-14ms frame latency.",
    year: "2026",
    accent: "primary",
  },
  {
    id: "minimalist-monogram-suite",
    title: "MINIMALIST MONOGRAM SUITE",
    category: "BRAND & DESIGN",
    badge: "VECTOR // IDENTITY",
    metric: "16 BESPOKE MARKS",
    metricSecondary: "SVG / VECTOR",
    subtitle: "BRAND SYSTEM",
    description: "Precision mathematical glyphs, monogram geometry, and tech marks crafted for next-gen software studios.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEuUKtEX6tAE0P0-1q_lM8O-HUjjz9Y1Zxsl6i-ZXKFv3Wb_FEDTK47HThU7mw1BrutQvjUnpWk_Ntr51Y5D9eCik1B6aH9AynbV2OHCeYEGwqHG8tYsaRuZKPfv2E3WRQRi-m0B-XENVrNuQd7UwywoelQrTm0Z5IOxW6AnkTvy-1KZMWbfya9_GMmyLBNEucG7Ojib6MtRCPFzMElp0XuFSHJKhtPWXFft4J1QtRFG7CAIvQ48uV",
    colSpanDesktop: 4,
    deliverables: ["16 Custom Monograms", "Vector Construction Kit", "Usage Guidelines"],
    techStack: ["Adobe Illustrator", "Mathematical Grid", "SVG Optimization"],
    fullStory: "A curated design study in minimalist ligature formation and optical balance. Each mark adheres to strict circular and isometric angles, optimized for favicon scaling as well as physical architectural signboards.",
    year: "2025 - 2026",
    accent: "primary",
  },
  {
    id: "venom-poster",
    title: "VENOM // THEATRICAL POSTER",
    category: "BRAND & DESIGN",
    badge: "KEY ART POSTER",
    metric: "300 DPI MASTER",
    metricSecondary: "ADOBE PS / BLENDER 3D",
    subtitle: "POSTER ART / VFX",
    description: "Exploration into procedural displacement maps, liquid chrome letterforms, and cinematic tonal grading.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVzs3YL6qmDKZ4nSu8gdUfmQ5_CwMvIdrkChDjIrBpwM6c7I7Bf-ED5ztOOGQia7bPlXhRpKOtheCmIitIagP6C83gZZqWiDHBPISESvtDoxQGjKblbc-T1IQ2V993tg4tR0ASQhgqxZKK-ZH6sn4Hr7RWfxxObFyDLwY3T8GMVRaP3K2KBrn5dglRiZOh3XLVjYRt616qIWkO-R-rpe1os-Nikn3zijjjwokMR_wcR2WRKCliLW5I",
    colSpanDesktop: 4,
    deliverables: ["Liquid Chrome Letterforms", "300 DPI Print Master", "Atmospheric Compositing"],
    techStack: ["Photoshop", "Blender 3D", "Camera Raw"],
    fullStory: "An intensive key art study combining 3D procedural symbiote tentacles glistening with specular highlights, custom liquid metal title typography, and cinematic lighting contrast.",
    year: "2026",
    accent: "secondary",
  },
  {
    id: "multi-agent-ppo",
    title: "MULTI-AGENT PPO SIMULATOR",
    category: "AI & ML",
    badge: "REINFORCEMENT LEARNING",
    metric: "99.2% EFFICIENCY",
    metricSecondary: "PYTHON / RAY RLLIB",
    subtitle: "SWARM SIMULATION",
    description: "Cooperative multi-agent pathfinding simulation solving gridlock routing bottlenecks with zero collision overhead.",
    isCustomVisual: true,
    colSpanDesktop: 4,
    deliverables: ["PPO Policy Network", "Reward Engineering", "Real-Time Trajectory Plots"],
    techStack: ["Python", "Ray RLlib", "PyTorch", "NumPy"],
    fullStory: "Formulated a cooperative multi-agent Markov decision process where decentralized autonomous agents learn spatial arbitration and collision avoidance through shared reward signals.",
    year: "2026",
    accent: "primary",
  },
  {
    id: "fintech-trading-dashboard",
    title: "FINTECH TRADING DASHBOARD & ATOMIC DESIGN SYSTEM",
    category: "BRAND & DESIGN",
    badge: "ENTERPRISE UI/UX",
    metric: "48 COMPONENTS",
    metricSecondary: "TOKENIZED DESIGN SYSTEM",
    subtitle: "DESIGN SYSTEM & TERMINAL",
    description: "Engineered for sub-second execution workflows with accessible contrast matrices, tokenized variables, and latency telemetry graphs.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7wTDheW0t7EZdcECeGn6es8fVg-Qqr5eal-kXKuAde7fKmUa0-3FL2fsFeg4qZKiWiszWZzHLDea5mi_CVKm8IOfnbR3KHKV9B4YBQvIiam1t7JG4abC8xbNwafBCGwijv5Dle2_vl8XfwokwgLqFfVYhiQeLhUGQkFRDpfZ66_hEdsKSaPXw-r0dKYb6JmO3HZOTqWxEP3ZrcM3TDAt50FokPTvB1_ui922eO273JE5yGQTTNTjC",
    colSpanDesktop: 8,
    deliverables: ["48 Atomic UI Components", "Dark High-Contrast Theme", "Micro-interaction Specs"],
    techStack: ["Figma", "Design Tokens", "TypeScript", "Tailwind"],
    fullStory: "Engineered an institutional-grade financial dashboard UI kit optimized for rapid visual scanning, customizable order book depth visualizations, and accessible dark-mode color scales.",
    year: "2026",
    accent: "primary",
  },
  {
    id: "cyber-apparel-capsule",
    title: "CYBER 2026 // APPAREL CAPSULE",
    category: "BRAND & DESIGN",
    badge: "APPAREL LAB",
    metric: "EDITION OF 500",
    metricSecondary: "VECTOR TECHPACK",
    subtitle: "MERCHANDISE DESIGN",
    description: "Physical merchandise identity, industrial barcode hangtags, and screen-print typography guides for limited drop.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiYcI5mqbyaQcV_gbOJeTFwfPRNb0zBbh3u_5OBVS2pwO4WJnmr2qYCg-1jB4o9aVTULO1615EwgWYXnMQsCUO8kMyjrYg-1Z-jiC9nmKmC3ngVr5PYz7GCwxOyco70pi1mF_3nDihsMwjJCpn9qpvdAL_RddU8GHdFrCXObvEjNATHy7f-Jd6fKq-V8Elca83201EwKTWfevK03QkwRgKMd_ETCu9kcxxtWQHe1pxZFLmn_SZFNjO",
    colSpanDesktop: 4,
    deliverables: ["Vector Techpack", "Silkscreen Separation Files", "Industrial Hangtags"],
    techStack: ["Illustrator", "Photoshop", "Print Specs"],
    fullStory: "Designed limited-run cyberpunk streetwear merchandise incorporating heat-press electric cyan graphics, matte black garment mockups, and metallic hangtag collateral.",
    year: "2026",
    accent: "tertiary",
  },
  {
    id: "kandyan-cybernetics",
    title: "HERITAGE RETRO-FUTURISM // KANDYAN CYBERNETICS",
    category: "AI & ML",
    badge: "CULTURAL SCI-FI EXHIBITION",
    metric: "8192 × 4320 (8K)",
    metricSecondary: "COLOMBO BIENNALE 2026",
    subtitle: "GENERATIVE DIGITAL ART",
    description: "Synthesizing ancient Sinhalese architectural geometry with generative adversarial network (GAN) latent walks, projecting cultural heritage into a 22nd-century cinematic display space.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCe6OU_98PtLy135K1PeM9CRCRGEe92taM9sR-eNY-yHja4JiQJGxQp022_v5X2At-Wl7e5DRmGXX8H6OuuWHMKBIvGl1tU5jt7K1wKp7-HSEkExzrCLpJi-naB-H718whYrKB4ZJBDq2tkbnFTN1MWob6TYxHdH4ajB5nvgsQloRAPtQZRJJzjrqtkABHbKond02szbqXEq_R5Kn_qOFPXnxvNjYyNAt6fO6KSFGBneg1HcF8bN0p5",
    colSpanDesktop: 12,
    deliverables: ["8K Master Projection", "GAN Latent Interpolation", "Exhibition Catalog"],
    techStack: ["StyleGAN3", "PyTorch", "Photoshop", "After Effects"],
    fullStory: "An ambitious cultural preservation experiment marrying centuries-old Sri Lankan brass filigree and temple woodwork with neural latent manifolds, showcased at the Colombo Biennale 2026.",
    year: "2026",
    accent: "secondary",
  },
];
