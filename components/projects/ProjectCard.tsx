'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  // Determine Tailwind column span based on colSpanDesktop
  const getColSpanClass = (span: number) => {
    switch (span) {
      case 7:
        return 'lg:col-span-7';
      case 5:
        return 'lg:col-span-5';
      case 8:
        return 'lg:col-span-8';
      case 12:
        return 'lg:col-span-12';
      case 4:
      default:
        return 'lg:col-span-4';
    }
  };

  const isFullWidthHorizon = project.colSpanDesktop === 12;

  return (
    <div
      onClick={() => onOpenModal(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenModal(project);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View project details for ${project.title}`}
      className={`${getColSpanClass(
        project.colSpanDesktop
      )} group flex flex-col ${
        isFullWidthHorizon ? 'lg:flex-row' : ''
      } bg-surface-container-lowest/80 rounded-xl overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(30,155,255,0.25)] border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-primary`}
    >
      {/* Media or Code Viewport */}
      {project.isCustomVisual ? (
        <div className="relative h-64 w-full overflow-hidden bg-surface-container-low p-space-md flex flex-col justify-between border-b border-outline-variant/20">
          <div className="absolute inset-0 bg-surface-container-lowest" />
          {/* Code snippet HUD layer */}
          <div className="relative z-10 w-full font-mono text-[11px] leading-relaxed text-on-surface-variant/90 space-y-1">
            <div className="flex items-center justify-between text-primary font-label-sm pb-1 border-b border-outline-variant/20">
              <span>ppo_agent.py</span>
              <span className="text-on-surface-variant/60">EP_REWARD: 948.2</span>
            </div>
            <p>
              <span className="text-primary-container">def</span>{' '}
              <span className="text-tertiary">ppo_step</span>(state, reward):
            </p>
            <p className="pl-3">action_probs = policy_net(state)</p>
            <p className="pl-3">surr1 = ratio * advantages</p>
            <p className="pl-3">loss = -torch.min(surr1, surr2)</p>
            <p className="text-on-surface-variant/50"># Convergence achieved at epoch 1400</p>
          </div>

          {/* Inline SVG Agent Heatmap Visual */}
          <div className="relative z-10 w-full h-16 rounded bg-surface-container-low p-2 flex items-center justify-between border border-outline-variant/20">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="font-label-sm text-xs text-primary font-semibold">
                SWARM SIMULATION
              </span>
            </div>
            <svg className="h-8 w-24 text-primary" fill="none" viewBox="0 0 100 30">
              <path
                d="M0 25 Q 25 5, 50 18 T 100 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="100" cy="5" fill="currentColor" r="3" />
            </svg>
          </div>
        </div>
      ) : project.imageUrl ? (
        <div
          className={`relative w-full overflow-hidden bg-surface-container-low ${
            isFullWidthHorizon
              ? 'h-64 lg:h-auto lg:w-1/2 min-h-[260px]'
              : project.colSpanDesktop === 7
              ? 'h-80 sm:h-96'
              : project.colSpanDesktop === 8
              ? 'h-72 sm:h-80'
              : project.colSpanDesktop === 5
              ? 'h-56 sm:h-64'
              : 'h-64'
          }`}
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${
              isFullWidthHorizon ? 'lg:bg-gradient-to-r' : ''
            } from-surface-container-lowest via-surface-container-lowest/30 to-transparent`}
          />

          {/* HUD Badges */}
          <div className="absolute top-space-md left-space-md flex flex-wrap items-center gap-space-xs z-10">
            <span
              className={`px-2.5 py-1 rounded font-label-sm text-[11px] tracking-widest shadow-md font-semibold ${
                project.accent === 'secondary'
                  ? 'bg-secondary-container/90 text-on-secondary'
                  : 'bg-primary-container/90 text-on-primary-container'
              }`}
            >
              {project.badge}
            </span>
            {project.metric && (
              <span className="px-2 py-1 rounded bg-surface-container-highest/80 backdrop-blur-md text-primary font-label-sm text-[11px] tracking-wider">
                {project.metric}
              </span>
            )}
          </div>

          <div className="absolute top-space-md right-space-md z-10">
            <span className="w-8 h-8 rounded-full bg-surface-container-highest/80 backdrop-blur-md flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
              <span className="material-symbols-outlined text-[18px]">north_east</span>
            </span>
          </div>

          {project.colSpanDesktop === 5 && (
            <div className="absolute bottom-space-md right-space-md px-space-sm py-1 rounded bg-surface-container-highest/90 backdrop-blur-md z-10">
              <span className="font-label-sm text-[11px] text-primary tracking-widest">
                FPS: 62.4 // LATENCY 14MS
              </span>
            </div>
          )}
        </div>
      ) : null}

      {/* Card Content Description */}
      <div
        className={`p-space-lg flex flex-col justify-between flex-1 bg-surface-container-lowest/90 ${
          isFullWidthHorizon ? 'lg:p-space-xl lg:w-1/2' : ''
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-space-xs">
            <span className="font-label-sm text-xs text-primary tracking-widest uppercase">
              {project.subtitle}
            </span>
            <span className="font-label-sm text-xs text-on-surface-variant/70 tracking-widest">
              {project.year}
            </span>
          </div>

          <h3
            className={`font-headline-lg ${
              isFullWidthHorizon ? 'text-headline-xl lg:text-3xl' : 'text-headline-lg'
            } text-on-surface tracking-wide group-hover:text-primary transition-colors`}
          >
            {project.title}
          </h3>

          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Deliverables / Specs Strip */}
        {project.colSpanDesktop === 7 ? (
          <div className="flex flex-wrap items-center gap-space-sm mt-space-md pt-space-md bg-surface-container-low/40 px-space-md py-2 rounded-lg border border-outline-variant/15">
            <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
              DELIVERABLES:
            </span>
            {project.deliverables.map((item, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-outline text-xs">•</span>}
                <span className="font-label-sm text-[11px] text-on-surface">{item}</span>
              </React.Fragment>
            ))}
          </div>
        ) : isFullWidthHorizon ? (
          <div className="mt-space-lg pt-space-md bg-surface-container-low/50 px-space-md py-space-sm rounded-lg flex flex-wrap items-center justify-between gap-space-sm border border-outline-variant/20">
            <div className="flex items-center gap-space-md">
              <div>
                <span className="font-label-sm text-[10px] text-on-surface-variant block">
                  RESOLUTION
                </span>
                <span className="font-label-md text-xs text-on-surface">8192 × 4320 (8K)</span>
              </div>
              <div className="w-px h-6 bg-surface-container-highest" />
              <div>
                <span className="font-label-sm text-[10px] text-on-surface-variant block">
                  EXHIBITION VENUE
                </span>
                <span className="font-label-md text-xs text-primary">COLOMBO BIENNALE 2026</span>
              </div>
            </div>
            <span className="px-space-md py-1.5 rounded-full bg-[#b8a9e6] text-[#1c0e4f] font-label-md text-xs tracking-wider flex items-center gap-1 shadow-[0_0_15px_rgba(184,169,230,0.45)] font-bold">
              VIEW CASE FILE
              <span className="material-symbols-outlined text-[16px]">visibility</span>
            </span>
          </div>
        ) : (
          <div className="mt-space-md flex flex-wrap items-center justify-between text-on-surface-variant font-label-sm text-xs pt-space-xs border-t border-outline-variant/15">
            <span>{project.deliverables[0] || project.metricSecondary}</span>
            <span className="text-primary tracking-widest">
              {project.metricSecondary || 'EXPLORE ARCHIVE'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
