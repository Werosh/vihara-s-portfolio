'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, Project, ProjectCategory } from '@/data/projects';
import ProjectDetailModal from '@/components/projects/ProjectDetailModal';

export default function ProjectsView() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['ALL', 'BRAND & DESIGN', 'AI & ML'];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const safeIndex = currentIndex % filteredProjects.length;
  const activeProject = filteredProjects[safeIndex];
  const prevProject = filteredProjects[(safeIndex - 1 + filteredProjects.length) % filteredProjects.length];
  const nextProject = filteredProjects[(safeIndex + 1) % filteredProjects.length];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <div className="w-full h-full max-w-7xl mx-auto flex flex-col justify-center p-4 sm:p-6 lg:p-8 select-none">
      {/* Title & Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 mb-3 border-b border-outline-variant/20 gap-2">
        <div>
          <span className="font-label-sm text-xs text-primary tracking-widest uppercase">
            [ ARCHIVES // 2026 DEPLOYMENT ]
          </span>
          <h2 className="font-headline-display text-4xl sm:text-5xl text-on-surface tracking-wider leading-none mt-0.5">
            PROJECT SHOWCASE DECK
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`px-3 py-1 rounded-full font-label-md text-xs tracking-wider uppercase transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#b8a9e6] text-[#1c0e4f] border-[#b8a9e6] font-bold shadow-[0_0_15px_rgba(184,169,230,0.5)]'
                    : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface border-outline-variant/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Card Deck Carousel Container */}
      <div className="relative w-full flex-1 max-h-[62vh] flex items-center justify-center overflow-hidden my-auto py-2">
        {/* Peeking Left Card */}
        {filteredProjects.length > 1 && (
          <div
            onClick={handlePrev}
            className="hidden sm:block absolute left-2 lg:left-8 w-64 md:w-80 h-72 md:h-88 rounded-2xl bg-surface-container-lowest/70 border border-outline-variant/30 shadow-xl opacity-35 hover:opacity-75 transition-all duration-300 transform -translate-x-12 scale-90 cursor-pointer overflow-hidden z-10"
            title={`Previous: ${prevProject.title}`}
          >
            {prevProject.imageUrl ? (
              <div className="relative w-full h-full">
                <Image
                  src={prevProject.imageUrl}
                  alt={prevProject.title}
                  fill
                  sizes="320px"
                  className="object-cover filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>
            ) : (
              <div className="p-4 bg-surface-container-lowest font-mono text-[10px] text-outline">
                {prevProject.title}
              </div>
            )}
            <div className="absolute bottom-3 left-3 right-3 p-2 rounded bg-surface-container/90 backdrop-blur-md">
              <span className="font-headline-sm text-xs text-on-surface truncate block">
                {prevProject.title}
              </span>
            </div>
          </div>
        )}

        {/* Center Featured Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={() => setModalProject(activeProject)}
            className="relative z-20 w-full max-w-lg md:max-w-2xl rounded-2xl bg-surface-container-lowest/90 border border-primary/40 shadow-[0_0_35px_rgba(30,155,255,0.22)] overflow-hidden cursor-pointer group hover:border-primary transition-all duration-300"
          >
            {/* Card Media Area */}
            {activeProject.imageUrl ? (
              <div className="relative w-full h-48 sm:h-64 md:h-72 bg-surface-container-low overflow-hidden">
                <Image
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 680px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-85" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                  <span
                    className={`px-2.5 py-0.5 rounded-full font-label-sm text-[11px] tracking-widest font-semibold shadow-md ${
                      activeProject.accent === 'secondary'
                        ? 'bg-secondary-container text-on-secondary'
                        : 'bg-primary-container text-on-primary-container'
                    }`}
                  >
                    {activeProject.badge}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest/90 text-primary font-label-sm text-[11px] tracking-wider">
                    {activeProject.metric}
                  </span>
                </div>

                <div className="absolute top-3 right-3 z-10">
                  <span className="w-8 h-8 rounded-full bg-surface-container-highest/80 backdrop-blur-md flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                    <span className="material-symbols-outlined text-base">north_east</span>
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-5 bg-surface-container-low font-mono text-[11px] text-on-surface-variant border-b border-outline-variant/20">
                <div className="flex items-center justify-between text-primary font-label-sm pb-1">
                  <span>ppo_agent.py</span>
                  <span className="text-on-surface-variant/70">{activeProject.metric}</span>
                </div>
                <p className="text-primary-container">def ppo_step(state, reward):</p>
                <p className="pl-3">action_probs = policy_net(state)</p>
                <p className="pl-3">loss = -torch.min(surr1, surr2)</p>
              </div>
            )}

            {/* Card Content Footer */}
            <div className="p-4 sm:p-5 flex flex-col gap-2 bg-surface-container-lowest">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-[11px] text-primary tracking-widest uppercase">
                  {activeProject.subtitle}
                </span>
                <span className="font-label-sm text-[10px] text-on-surface-variant/70 tracking-widest">
                  {activeProject.year}
                </span>
              </div>

              <h3 className="font-headline-lg text-2xl sm:text-3xl text-on-surface tracking-wide group-hover:text-primary transition-colors leading-tight">
                {activeProject.title}
              </h3>

              <p className="font-body-md text-xs sm:text-sm text-on-surface-variant line-clamp-2">
                {activeProject.description}
              </p>

              <div className="flex flex-col gap-1.5 pt-2 border-t border-outline-variant/20 text-xs font-label-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-on-surface-variant truncate">
                    <span>DELIVERABLES:</span>
                    <span className="text-on-surface font-semibold truncate max-w-[180px] sm:max-w-xs">
                      {activeProject.deliverables.join(' • ')}
                    </span>
                  </div>
                  <span className="text-[#b8a9e6] font-bold tracking-wider flex items-center gap-1 shrink-0">
                    EXPAND CASE
                    <span className="material-symbols-outlined text-sm">visibility</span>
                  </span>
                </div>
                {activeProject.credit && (
                  <div className="text-[10px] text-outline flex items-center gap-1 truncate">
                    <span className="text-primary font-semibold">Credit:</span> {activeProject.credit}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Peeking Right Card */}
        {filteredProjects.length > 1 && (
          <div
            onClick={handleNext}
            className="hidden sm:block absolute right-2 lg:right-8 w-64 md:w-80 h-72 md:h-88 rounded-2xl bg-surface-container-lowest/70 border border-outline-variant/30 shadow-xl opacity-35 hover:opacity-75 transition-all duration-300 transform translate-x-12 scale-90 cursor-pointer overflow-hidden z-10"
            title={`Next: ${nextProject.title}`}
          >
            {nextProject.imageUrl ? (
              <div className="relative w-full h-full">
                <Image
                  src={nextProject.imageUrl}
                  alt={nextProject.title}
                  fill
                  sizes="320px"
                  className="object-cover filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>
            ) : (
              <div className="p-4 bg-surface-container-lowest font-mono text-[10px] text-outline">
                {nextProject.title}
              </div>
            )}
            <div className="absolute bottom-3 left-3 right-3 p-2 rounded bg-surface-container/90 backdrop-blur-md">
              <span className="font-headline-sm text-xs text-on-surface truncate block">
                {nextProject.title}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Carousel Navigation Strip */}
      <div className="flex items-center justify-between pt-2 border-t border-outline-variant/20">
        {/* Counter */}
        <div className="flex items-center gap-2 font-label-sm text-xs text-on-surface-variant">
          <span className="text-primary font-bold">
            {String(safeIndex + 1).padStart(2, '0')}
          </span>
          <span>/</span>
          <span>{String(filteredProjects.length).padStart(2, '0')}</span>
          <span className="text-outline text-[10px] ml-2 hidden sm:inline">
            [CLICK CARD TO EXPAND]
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-primary transition-all border border-outline-variant/30 cursor-pointer"
            aria-label="Previous Project"
          >
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-primary transition-all border border-outline-variant/30 cursor-pointer"
            aria-label="Next Project"
          >
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Lightbox / Detail Modal */}
      <ProjectDetailModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </div>
  );
}
