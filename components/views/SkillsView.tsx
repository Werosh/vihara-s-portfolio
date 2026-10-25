'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AI_SKILLS, DESIGN_SKILLS, LANGUAGES } from '@/data/content';

export default function SkillsView() {
  return (
    <div className="w-full h-full max-w-7xl mx-auto flex flex-col justify-center p-4 sm:p-6 lg:p-8">
      {/* Header telemetry */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 mb-4 border-b border-outline-variant/20 gap-2">
        <div>
          <span className="font-label-sm text-xs text-primary tracking-widest uppercase">
            [ CAPABILITY_MATRIX // TELEMETRY_LOADOUT ]
          </span>
          <h2 className="font-headline-display text-4xl sm:text-5xl text-on-surface tracking-wider leading-none mt-0.5">
            TECHNICAL &amp; CREATIVE SKILLS
          </h2>
        </div>
        <div className="flex items-center gap-3 text-outline font-label-sm text-xs">
          <span className="text-primary font-semibold">10 LOADED NODES</span>
          <span>•</span>
          <span className="text-on-surface-variant">DUAL SPECIALIZATION</span>
        </div>
      </div>

      {/* Two Group Grid: AI & DATA SYSTEMS vs CREATIVE & BRAND DESIGN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 items-start">
        {/* GROUP 1: AI & DATA SYSTEMS */}
        <section className="p-4 sm:p-5 rounded-2xl bg-surface-container-low/75 backdrop-blur-md border border-outline-variant/30 shadow-xl flex flex-col gap-3">
          <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-lg">memory</span>
              </span>
              <div>
                <h3 className="font-headline-sm text-lg text-on-surface tracking-wide">
                  AI &amp; DATA SYSTEMS
                </h3>
                <span className="font-label-sm text-[10px] text-primary tracking-wider uppercase">
                  MACHINE LEARNING &amp; COMPUTING
                </span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary font-label-sm text-[10px] font-bold border border-primary/30">
              SLIIT AI MAJOR
            </span>
          </div>

          {/* Skill items with icon tiles + animated progress bars */}
          <div className="flex flex-col gap-2.5">
            {AI_SKILLS.map((skill) => (
              <div
                key={skill.id}
                className="p-2.5 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/15 flex flex-col gap-1.5 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-sm">{skill.icon}</span>
                    </div>
                    <div>
                      <span className="font-label-md text-xs font-bold text-on-surface uppercase tracking-wide">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-outline ml-2 hidden sm:inline">
                        [{skill.level}]
                      </span>
                    </div>
                  </div>
                  <span className="font-headline-sm text-sm text-primary">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full bg-primary shadow-[0_0_8px_rgba(30,155,255,0.7)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GROUP 2: CREATIVE & BRAND DESIGN */}
        <section className="p-4 sm:p-5 rounded-2xl bg-surface-container-low/75 backdrop-blur-md border border-outline-variant/30 shadow-xl flex flex-col gap-3">
          <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-lg">draw</span>
              </span>
              <div>
                <h3 className="font-headline-sm text-lg text-on-surface tracking-wide">
                  CREATIVE &amp; BRAND DESIGN
                </h3>
                <span className="font-label-sm text-[10px] text-secondary tracking-wider uppercase">
                  VECTOR, EDITING &amp; SOCIAL COLLATERAL
                </span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary font-label-sm text-[10px] font-bold border border-secondary/30">
              FREELANCE &amp; ZENTRA
            </span>
          </div>

          {/* Skill items with icon tiles + animated progress bars */}
          <div className="flex flex-col gap-2.5">
            {DESIGN_SKILLS.map((skill) => (
              <div
                key={skill.id}
                className="p-2.5 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/15 flex flex-col gap-1.5 hover:border-secondary/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-surface-container-high flex items-center justify-center text-secondary font-bold text-xs">
                      {skill.iconType === 'text' ? (
                        <span>{skill.icon}</span>
                      ) : (
                        <span className="material-symbols-outlined text-sm">{skill.icon}</span>
                      )}
                    </div>
                    <div>
                      <span className="font-label-md text-xs font-bold text-on-surface uppercase tracking-wide">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-outline ml-2 hidden sm:inline">
                        [{skill.level}]
                      </span>
                    </div>
                  </div>
                  <span className="font-headline-sm text-sm text-secondary">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full bg-secondary shadow-[0_0_8px_rgba(215,3,87,0.7)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Languages Channel Telemetry Strip */}
      <div className="mt-4 p-3 rounded-xl bg-surface-container-lowest/60 border border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-tertiary text-base">translate</span>
          <span className="font-label-sm text-xs text-on-surface uppercase font-bold">
            COMMUNICATION BANDWIDTH:
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {LANGUAGES.map((lang) => (
            <div key={lang.name} className="flex items-center gap-2">
              <span className="font-label-sm text-xs text-on-surface-variant">
                {lang.name} <span className="text-primary font-bold">{lang.percentage}%</span>
              </span>
              <div className="w-20 h-1.5 rounded-full bg-surface-container overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#b8a9e6]"
                  style={{ width: `${lang.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
