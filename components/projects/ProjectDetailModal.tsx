'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-lg bg-[#111620] border border-white/[0.08] shadow-2xl z-10 flex flex-col"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-5 bg-[#111620] border-b border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-label-sm">
              <span className="text-blue-400 font-semibold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">
                {project.year}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-md bg-[#161D2B] hover:bg-[#1C2536] flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/[0.08]"
              aria-label="Close dialog"
            >
              <span className="text-sm">✕</span>
            </button>
          </div>

          {/* Media */}
          {project.imageUrl && (
            <div className="relative w-full h-64 sm:h-72 bg-[#0B0F17] overflow-hidden border-b border-white/[0.08]">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-cover object-center"
              />
            </div>
          )}

          {/* Details */}
          <div className="p-5 sm:p-6 flex flex-col gap-4">
            <div>
              <div className="text-xs font-label-sm text-slate-400 uppercase tracking-wider">
                {project.client} — {project.role}
              </div>
              <h3
                id="modal-title"
                className="font-headline-lg text-2xl sm:text-3xl text-slate-100 tracking-wide mt-1"
              >
                {project.title}
              </h3>
            </div>

            <p className="font-body-md text-sm text-slate-300 leading-relaxed">
              {project.fullStory}
            </p>

            {/* Deliverables & Tools */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-white/[0.08]">
              <div className="space-y-1.5">
                <span className="block text-[11px] font-label-sm text-slate-400 uppercase tracking-wider">
                  Key Deliverables
                </span>
                <ul className="space-y-1 text-xs text-slate-300">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-blue-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1.5">
                <span className="block text-[11px] font-label-sm text-slate-400 uppercase tracking-wider">
                  Tools &amp; Tech
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#161D2B] text-[11px] font-label-sm text-slate-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Credit Note if collaborative */}
            {project.credit && (
              <div className="p-3.5 rounded-md bg-[#0F141E] border border-white/[0.08] flex items-start gap-2.5">
                <div className="flex flex-col text-xs">
                  <span className="font-label-sm text-[10px] text-slate-400 uppercase tracking-wider">
                    Project Credit
                  </span>
                  <span className="text-slate-200 mt-0.5">
                    {project.credit}
                  </span>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-label-md text-xs tracking-wider uppercase font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Visit Live Site</span>
                  <span>↗</span>
                </a>
              ) : <div />}

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-md bg-[#161D2B] hover:bg-[#1C2536] text-slate-300 hover:text-white font-label-md text-xs tracking-wider uppercase font-semibold border border-white/[0.08] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
