'use client';

import React from 'react';
import { AI_SKILLS_LIST, DESIGN_SKILLS_LIST, LANGUAGES_TEXT_LIST } from '@/data/content';

export default function SkillsView() {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-start py-0 gap-4 sm:gap-5">
      {/* Section Header */}
      <div className="w-full pb-3 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
        <div>
          <h2 className="font-headline-display text-[clamp(2rem,5vw,3.5rem)] text-slate-100 tracking-wider leading-[0.95] pt-0.5">
            SKILLS &amp; TOOLS
          </h2>
          <p className="font-body-md text-sm sm:text-base text-slate-400 mt-1">
            Technologies and software used in university computing and client brand design.
          </p>
        </div>
        <span className="font-label-sm text-xs sm:text-sm text-blue-400 font-medium">
          SLIIT AI &amp; Freelance
        </span>
      </div>

      {/* Two Column Plain Text List (Single column stack on mobile, 2 col on md+) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start w-full">
        {/* GROUP 1: AI & Computing */}
        <div className="p-4 sm:p-5 rounded-lg bg-[#111620] border border-white/[0.08] space-y-3 sm:space-y-3.5 w-full">
          <div className="pb-3 border-b border-white/[0.08] flex items-center justify-between">
            <h3 className="font-headline-sm text-lg sm:text-xl text-slate-100 tracking-wide">
              AI &amp; Computing
            </h3>
            <span className="font-label-sm text-xs text-blue-400">
              Academic &amp; Development
            </span>
          </div>

          <div className="space-y-4">
            {AI_SKILLS_LIST.map((skill) => (
              <div key={skill.id} className="space-y-1">
                <div className="text-sm sm:text-base font-semibold text-slate-200">
                  {skill.name}
                </div>
                <div className="font-body-md text-sm sm:text-base text-slate-400 leading-relaxed">
                  {skill.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GROUP 2: Design & Brand Identity */}
        <div className="p-4 sm:p-5 rounded-lg bg-[#111620] border border-white/[0.08] space-y-3 sm:space-y-3.5 w-full">
          <div className="pb-3 border-b border-white/[0.08] flex items-center justify-between">
            <h3 className="font-headline-sm text-lg sm:text-xl text-slate-100 tracking-wide">
              Design &amp; Brand Identity
            </h3>
            <span className="font-label-sm text-xs text-blue-400">
              Client &amp; Studio Practice
            </span>
          </div>

          <div className="space-y-4">
            {DESIGN_SKILLS_LIST.map((skill) => (
              <div key={skill.id} className="space-y-1">
                <div className="text-sm sm:text-base font-semibold text-slate-200">
                  {skill.name}
                </div>
                <div className="font-body-md text-sm sm:text-base text-slate-400 leading-relaxed">
                  {skill.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Languages & Working Setup Footer */}
      <div className="p-4 sm:p-5 rounded-lg bg-[#111620] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs sm:text-sm font-semibold text-slate-300 font-label-md uppercase tracking-wider">
            Languages:
          </span>
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400">
            {LANGUAGES_TEXT_LIST.map((lang) => (
              <span key={lang.name}>
                <strong className="text-slate-200">{lang.name}</strong> ({lang.level})
              </span>
            ))}
          </div>
        </div>

        <div className="text-xs sm:text-sm text-slate-400">
          Tools: macOS, Adobe Creative Cloud, VS Code, Git
        </div>
      </div>
    </div>
  );
}
