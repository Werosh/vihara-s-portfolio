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
    <div className="w-full h-full max-w-6xl mx-auto flex flex-col justify-center p-6 sm:p-10 lg:p-12">
      {/* Title & Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-3 mb-4 border-b border-white/[0.08] gap-3">
        <div>
          <h2 className="font-headline-display text-4xl sm:text-5xl text-slate-100 tracking-wider leading-none">
            SELECTED PROJECTS
          </h2>
          <p className="font-body-sm text-xs sm:text-sm text-slate-400 mt-1">
            Work in brand identity, social campaigns, and computing coursework.
          </p>
        </div>

        {/* Clean Filter Pills */}
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
                className={`px-3.5 py-1.5 rounded-full font-label-md text-xs tracking-wider uppercase transition-colors cursor-pointer border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 font-semibold'
                    : 'bg-[#111620] text-slate-400 hover:text-slate-200 border-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Project Showcase Container */}
      <div className="relative w-full flex-1 max-h-[62vh] flex items-center justify-center my-auto py-2">
        {/* Peeking Left Card */}
        {filteredProjects.length > 1 && (
          <button
            onClick={handlePrev}
            className="hidden lg:block absolute left-0 w-72 h-80 rounded-lg bg-[#111620] border border-white/[0.08] opacity-40 hover:opacity-75 transition-opacity transform -translate-x-6 scale-95 cursor-pointer overflow-hidden z-10 text-left"
            title={`Previous: ${prevProject.title}`}
          >
            {prevProject.imageUrl ? (
              <div className="relative w-full h-full">
                <Image
                  src={prevProject.imageUrl}
                  alt={prevProject.title}
                  fill
                  sizes="300px"
                  className="object-cover filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-[#0B0F17]/70" />
                <div className="absolute bottom-3 left-3 right-3 p-2 rounded bg-[#111620]/90 border border-white/[0.08]">
                  <span className="font-headline-sm text-xs text-slate-200 truncate block">
                    {prevProject.title}
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-4 text-xs text-slate-400">
                {prevProject.title}
              </div>
            )}
          </button>
        )}

        {/* Main Center Featured Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="relative z-20 w-full max-w-2xl rounded-lg bg-[#111620] border border-white/[0.08] hover:border-white/[0.16] transition-colors overflow-hidden flex flex-col"
          >
            {/* Project Image */}
            {activeProject.imageUrl ? (
              <div
                onClick={() => setModalProject(activeProject)}
                className="relative w-full h-48 sm:h-64 bg-[#0B0F17] overflow-hidden cursor-pointer group"
              >
                <Image
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 680px"
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-300"
                />
                {/* Subtle caption overlay badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#111620]/90 text-slate-200 font-label-sm text-[11px] tracking-wider border border-white/[0.08]">
                    {activeProject.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 rounded bg-[#111620]/90 text-blue-400 font-label-sm text-xs font-medium border border-white/[0.08] group-hover:text-blue-300">
                    Click to view details ↗
                  </span>
                </div>
              </div>
            ) : (
              <div
                onClick={() => setModalProject(activeProject)}
                className="p-6 bg-[#0F141E] border-b border-white/[0.08] cursor-pointer"
              >
                <span className="px-2.5 py-1 rounded bg-[#161D2B] text-blue-400 font-label-sm text-[11px] tracking-wider border border-white/[0.08]">
                  {activeProject.badge}
                </span>
              </div>
            )}

            {/* Plain Caption & Content: Client, Year, What She Did */}
            <div className="p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-label-sm text-slate-400">
                <span className="font-semibold text-blue-400 uppercase tracking-wider">
                  {activeProject.client}
                </span>
                <span>{activeProject.year}</span>
              </div>

              <h3
                onClick={() => setModalProject(activeProject)}
                className="font-headline-lg text-2xl sm:text-3xl text-slate-100 tracking-wide cursor-pointer hover:text-blue-400 transition-colors"
              >
                {activeProject.title}
              </h3>

              <p className="font-body-md text-xs sm:text-sm text-slate-300 line-clamp-2">
                {activeProject.description}
              </p>

              {/* Collaborative Credit Line */}
              {activeProject.credit && (
                <div className="mt-1 pt-2 border-t border-white/[0.08] text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="text-slate-300 font-medium">Credit:</span>
                  <span>{activeProject.credit}</span>
                </div>
              )}

              {/* Bottom Row: Actions */}
              <div className="mt-2 pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  Role: <strong className="text-slate-200 font-medium">{activeProject.role}</strong>
                </span>

                <div className="flex items-center gap-2">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
                    >
                      <span>Live link</span>
                      <span>↗</span>
                    </a>
                  )}
                  <button
                    onClick={() => setModalProject(activeProject)}
                    className="text-slate-300 hover:text-white font-medium ml-2 cursor-pointer"
                  >
                    View story →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Peeking Right Card */}
        {filteredProjects.length > 1 && (
          <button
            onClick={handleNext}
            className="hidden lg:block absolute right-0 w-72 h-80 rounded-lg bg-[#111620] border border-white/[0.08] opacity-40 hover:opacity-75 transition-opacity transform translate-x-6 scale-95 cursor-pointer overflow-hidden z-10 text-left"
            title={`Next: ${nextProject.title}`}
          >
            {nextProject.imageUrl ? (
              <div className="relative w-full h-full">
                <Image
                  src={nextProject.imageUrl}
                  alt={nextProject.title}
                  fill
                  sizes="300px"
                  className="object-cover filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-[#0B0F17]/70" />
                <div className="absolute bottom-3 left-3 right-3 p-2 rounded bg-[#111620]/90 border border-white/[0.08]">
                  <span className="font-headline-sm text-xs text-slate-200 truncate block">
                    {nextProject.title}
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-4 text-xs text-slate-400">
                {nextProject.title}
              </div>
            )}
          </button>
        )}
      </div>

      {/* Navigation Controls Strip */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
        {/* Counter */}
        <div className="flex items-center gap-2 font-label-sm text-xs text-slate-400">
          <span className="text-blue-400 font-semibold">
            {String(safeIndex + 1).padStart(2, '0')}
          </span>
          <span>/</span>
          <span>{String(filteredProjects.length).padStart(2, '0')}</span>
        </div>

        {/* Previous / Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="px-3 py-1 rounded bg-[#111620] hover:bg-[#161D2B] text-slate-300 hover:text-white font-label-md text-xs border border-white/[0.08] transition-colors cursor-pointer"
            aria-label="Previous project"
          >
            ← Previous
          </button>
          <button
            onClick={handleNext}
            className="px-3 py-1 rounded bg-[#111620] hover:bg-[#161D2B] text-slate-300 hover:text-white font-label-md text-xs border border-white/[0.08] transition-colors cursor-pointer"
            aria-label="Next project"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Project Lightbox / Detail Modal */}
      <ProjectDetailModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </div>
  );
}
