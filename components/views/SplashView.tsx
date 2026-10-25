'use client';

import React from 'react';
import Image from 'next/image';
import { PERSONAL_INFO } from '@/data/content';
import { TabKey } from '@/components/nav/TopPersistentNav';

interface SplashViewProps {
  onSelectTab: (tab: TabKey) => void;
}

export default function SplashView({ onSelectTab }: SplashViewProps) {
  return (
    <div className="w-full h-full max-w-6xl mx-auto flex flex-col justify-between p-6 sm:p-10 lg:p-12">
      {/* Asymmetric 12-Column Layout */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto">
        {/* Left Column: Natural Authentic Portrait */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-64 sm:w-72 md:w-80 h-[22rem] sm:h-[25rem] md:h-[27rem] rounded-lg bg-[#111620] border border-white/[0.08] overflow-hidden">
            {/* Natural photo */}
            <Image
              src={PERSONAL_INFO.portraitPath}
              alt="Rashmi Vihara"
              fill
              priority
              sizes="(max-width: 768px) 280px, 340px"
              className="object-cover object-top filter contrast-[1.04]"
            />
            
            {/* Subtle bottom gradient for clean contrast */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#111620] to-transparent pointer-events-none" />

            {/* Simple static caption */}
            <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-[11px] font-label-sm text-slate-300">
              <span className="font-medium">Rashmi Vihara</span>
              <span className="text-slate-400">Colombo, LK</span>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Intro & Plain Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
          <div className="space-y-2">
            <div className="flex items-baseline gap-3">
              <h1 className="font-headline-display text-5xl sm:text-7xl lg:text-8xl tracking-wider text-slate-100 uppercase leading-none">
                {PERSONAL_INFO.headline}
              </h1>
              <span className="font-headline-display text-4xl sm:text-6xl lg:text-7xl tracking-wider text-slate-500 font-light leading-none">
                {PERSONAL_INFO.headlineYear}
              </span>
            </div>

            <p className="font-label-md text-blue-400 tracking-wider uppercase text-xs sm:text-sm font-semibold">
              {PERSONAL_INFO.roleTitle}
            </p>
          </div>

          <p className="font-body-lg text-slate-300 max-w-xl text-base sm:text-lg leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          {/* Clean, Intentional Navigation Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectTab('profile')}
              type="button"
              className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-label-md text-xs tracking-wider uppercase font-semibold transition-colors cursor-pointer"
            >
              View Profile &amp; Bio →
            </button>

            <button
              onClick={() => onSelectTab('projects')}
              type="button"
              className="px-6 py-3 rounded-md bg-[#111620] hover:bg-[#161D2B] text-slate-200 font-label-md text-xs tracking-wider uppercase font-semibold border border-white/[0.08] hover:border-white/[0.16] transition-colors cursor-pointer"
            >
              Selected Work
            </button>

            <button
              onClick={() => onSelectTab('contact')}
              type="button"
              className="px-4 py-3 text-slate-400 hover:text-white font-label-md text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Key Facts Strip */}
          <div className="pt-4 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-lg">
            <div>
              <span className="block text-[11px] font-label-sm uppercase text-slate-400 tracking-wider">
                Education
              </span>
              <span className="text-xs sm:text-sm text-slate-200 font-medium">
                SLIIT AI (2023–2027)
              </span>
            </div>
            <div>
              <span className="block text-[11px] font-label-sm uppercase text-slate-400 tracking-wider">
                Focus
              </span>
              <span className="text-xs sm:text-sm text-slate-200 font-medium">
                Brand &amp; ML Systems
              </span>
            </div>
            <div>
              <span className="block text-[11px] font-label-sm uppercase text-slate-400 tracking-wider">
                Status
              </span>
              <span className="text-xs sm:text-sm text-blue-400 font-medium">
                Available for hire
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-4 text-slate-400 font-label-sm text-[11px] border-t border-white/[0.08]">
        <div>
          <span>Rashmi Vihara Gimhani Thennakoon</span>
          <span className="mx-2">•</span>
          <span>Sri Lanka</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <span>Use keyboard arrows or tabs to navigate</span>
        </div>
      </div>
    </div>
  );
}
