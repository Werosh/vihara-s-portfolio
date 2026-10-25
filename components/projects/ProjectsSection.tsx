'use client';

import React, { useState } from 'react';
import { PROJECTS, Project, ProjectCategory } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectLightboxModal from './ProjectLightboxModal';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { label: ProjectCategory; count: string }[] = [
    { label: 'ALL', count: String(PROJECTS.length).padStart(2, '0') },
    {
      label: 'BRAND & DESIGN',
      count: String(PROJECTS.filter((p) => p.category === 'BRAND & DESIGN').length).padStart(2, '0'),
    },
    {
      label: 'AI & ML',
      count: String(PROJECTS.filter((p) => p.category === 'AI & ML').length).padStart(2, '0'),
    },
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative z-10 w-full pt-16 lg:pt-24 px-margin-sm md:px-margin lg:px-margin-lg max-w-[1600px] mx-auto min-h-screen flex flex-col justify-between"
    >
      <div className="flex flex-col w-full pb-space-2xl">
        {/* Top HUD Telemetry & Title Section */}
        <div className="w-full flex flex-col items-center justify-center text-center pt-space-md pb-space-2xl relative">
          {/* Ambient Glow Accent behind title */}
          <div
            className="absolute w-[420px] h-[160px] rounded-full pointer-events-none -top-4"
            style={{
              background:
                'radial-gradient(rgba(186, 170, 224, 0.3) 0%, rgba(173, 198, 255, 0.15) 50%, transparent 80%)',
              filter: 'blur(80px)',
            }}
          />

          {/* HUD Status Tag */}
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high/80 backdrop-blur-md shadow-[0_0_15px_rgba(30,155,255,0.15)] mb-space-sm border border-outline-variant/30">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.22em] font-semibold">
              [ DESIGN + AI ARCHIVE ]
            </span>
            <span className="text-on-surface-variant/40 text-[10px]">•</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant tracking-widest">
              DEPLOYMENT 2026.04
            </span>
          </div>

          {/* Main Section Headline */}
          <div className="flex flex-wrap items-baseline justify-center gap-space-sm">
            <h2 className="font-headline-display text-5xl sm:text-7xl lg:text-8xl text-on-surface tracking-wider leading-none">
              RECAP PROJECT
            </h2>
            <span
              className="font-headline-display text-5xl sm:text-7xl lg:text-8xl leading-none"
              style={{
                color: 'rgb(207, 190, 245)',
                filter: 'drop-shadow(rgba(184, 169, 230, 0.5) 0px 0px 24px)',
              }}
            >
              2026
            </span>
          </div>

          {/* Telemetry Subtitle */}
          <p className="font-label-md text-label-md text-on-surface-variant max-w-2xl mt-space-xs tracking-[0.18em] uppercase">
            CURATED WORKS // BRAND IDENTITY • SOCIAL MEDIA CAMPAIGNS • MACHINE LEARNING MODELS
          </p>

          {/* Filter HUD Segment Controls */}
          <div className="flex flex-wrap items-center justify-center gap-space-xs mt-space-lg">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  type="button"
                  className={`px-space-md py-1.5 rounded-full font-label-md text-xs sm:text-sm tracking-wider flex items-center gap-2 cursor-pointer transition-all duration-200 border ${
                    isActive
                      ? 'bg-[#b8a9e6] text-[#1c0e4f] shadow-[0_0_20px_rgba(184,169,230,0.45)] font-bold border-[#b8a9e6]'
                      : 'bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface border-outline-variant/30'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                      isActive
                        ? 'bg-[#1c0e4f]/20 text-[#1c0e4f]'
                        : 'bg-surface-container-highest text-on-surface-variant'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg w-full">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Bottom HUD Status Telemetry Strip */}
        <div className="w-full mt-space-2xl p-space-md rounded-xl bg-surface-container-low/60 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-space-md border border-outline-variant/20 shadow-lg">
          <div className="flex flex-wrap items-center gap-space-md text-outline font-label-sm text-xs tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_6px_#1e9bff]" />
              <span className="text-on-surface tracking-widest uppercase font-semibold">
                CATALOGUE SYNCHRONIZED
              </span>
            </div>
            <span className="text-on-surface-variant/40">|</span>
            <span className="text-on-surface-variant">NODE: LK-CMB-01</span>
            <span className="text-on-surface-variant/40">|</span>
            <span className="text-on-surface-variant">TOTAL ARCHIVED: 24 PROJECTS</span>
          </div>

          <div className="flex items-center gap-space-sm">
            <a
              href="/Rashmi_Vihara_CV.pdf"
              download="Rashmi_Vihara_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-space-md py-1.5 rounded-full bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label-sm text-xs tracking-widest transition-colors cursor-pointer flex items-center gap-1.5 border border-outline-variant/30"
            >
              <span className="material-symbols-outlined text-[16px]">file_download</span>
              <span>DOWNLOAD RESUME / DOSSIER</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ProjectLightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
