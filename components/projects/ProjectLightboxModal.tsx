'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectLightboxModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectLightboxModal({ project, onClose }: ProjectLightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface-container-lowest border border-primary/30 shadow-[0_0_50px_rgba(30,155,255,0.3)] z-10 flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
              <span className="font-label-sm text-xs text-primary uppercase tracking-widest font-semibold">
                CASE FILE // {project.id.toUpperCase()}
              </span>
              <span className="text-outline-variant text-xs">•</span>
              <span className="font-label-sm text-xs text-on-surface-variant tracking-wider">
                {project.year}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer border border-outline-variant/30"
              aria-label="Close Case File"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          </div>

          {/* Project Media */}
          {project.imageUrl ? (
            <div className="relative w-full h-72 sm:h-96 md:h-[28rem] bg-surface-container-low overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full bg-secondary-container/90 text-on-secondary font-label-sm text-xs tracking-widest font-semibold shadow-md">
                  {project.badge}
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high/90 text-primary font-label-sm text-xs tracking-wider">
                  {project.metric}
                </span>
              </div>
            </div>
          ) : (
            <div className="p-8 bg-surface-container-low font-mono text-xs text-on-surface-variant border-b border-outline-variant/20">
              <div className="flex items-center justify-between text-primary font-label-sm pb-3">
                <span>ppo_agent.py // SIMULATION LOG</span>
                <span>EFFICIENCY: {project.metric}</span>
              </div>
              <p className="text-primary-container">def ppo_step(state, reward):</p>
              <p className="pl-4">action_probs = policy_net(state)</p>
              <p className="pl-4">surr1 = ratio * advantages</p>
              <p className="pl-4">loss = -torch.min(surr1, surr2)</p>
              <p className="text-outline pt-2"># Multi-agent collision avoidance verified</p>
            </div>
          )}

          {/* Project Details */}
          <div className="p-6 sm:p-8 flex flex-col gap-6">
            <div>
              <span className="font-label-sm text-xs text-primary tracking-widest uppercase">
                {project.subtitle}
              </span>
              <h3
                id="modal-project-title"
                className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-wide mt-1"
              >
                {project.title}
              </h3>
            </div>

            <p className="font-body-lg text-on-surface leading-relaxed text-sm sm:text-base">
              {project.fullStory}
            </p>

            {/* Deliverables & Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-outline-variant/20">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-xs text-outline uppercase tracking-wider">
                  KEY DELIVERABLES
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-surface-container-high text-xs font-label-sm text-on-surface border border-outline-variant/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-xs text-outline uppercase tracking-wider">
                  TOOLKIT / ARCHITECTURE
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-primary-container/20 text-xs font-label-sm text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Credit Line */}
            {project.credit && (
              <div className="p-3.5 rounded-xl bg-surface-container-high/60 border border-outline-variant/30 flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">group</span>
                <div className="flex flex-col">
                  <span className="font-label-sm text-[10px] text-outline uppercase tracking-wider">
                    PROJECT CREDIT
                  </span>
                  <span className="font-body-sm text-xs sm:text-sm text-on-surface font-medium">
                    {project.credit}
                  </span>
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex items-center justify-between gap-3 pt-4 border-t border-outline-variant/20">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-[#b8a9e6] hover:bg-[#cfbef5] text-[#1c0e4f] font-label-md text-xs tracking-wider font-bold shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>VISIT LIVE DEMO</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              ) : <div />}

              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-primary-container text-on-primary-container font-label-md text-xs tracking-wider font-bold shadow-md hover:bg-[#43aaff] transition-colors cursor-pointer"
              >
                CLOSE ARCHIVE
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
