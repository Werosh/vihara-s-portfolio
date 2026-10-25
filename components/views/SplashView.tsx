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
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-start sm:justify-between py-0 gap-6">
      {/* Responsive Grid: Stacks on mobile, 12-col on desktop */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
        {/* Portrait: On mobile max-h-[35dvh] at top, on desktop left column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-none lg:w-80 h-[30dvh] sm:h-[35dvh] lg:h-[26rem] max-h-[35dvh] lg:max-h-none rounded-lg bg-[#111620] border border-white/[0.08] overflow-hidden shrink-0">
            <Image
              src={PERSONAL_INFO.portraitPath}
              alt="Rashmi Vihara"
              fill
              priority
              sizes="(max-width: 768px) 240px, 320px"
              className="object-cover object-top filter contrast-[1.04]"
            />
            {/* Subtle bottom gradient for clean contrast */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#111620] to-transparent pointer-events-none" />

            {/* Simple static caption */}
            <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-[11px] font-label-sm text-slate-300">
              <span className="font-medium">Rashmi Vihara</span>
              <span className="text-slate-400">Colombo, LK</span>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Intro & Actions (Left-aligned) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4 sm:space-y-5 min-w-0">
          <div className="space-y-1 sm:space-y-2">
            <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
              <h1 className="font-headline-display text-[clamp(2.5rem,7.5vw,5.5rem)] tracking-wider text-slate-100 uppercase leading-[0.95]">
                {PERSONAL_INFO.headline}
              </h1>
              <span className="font-headline-display text-[clamp(2rem,6vw,4.5rem)] tracking-wider text-slate-500 font-light leading-[0.95]">
                {PERSONAL_INFO.headlineYear}
              </span>
            </div>

            <p className="font-label-md text-blue-400 tracking-wider uppercase text-xs sm:text-sm font-semibold">
              {PERSONAL_INFO.roleTitle}
            </p>
          </div>

          <p className="font-body-lg text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
            {PERSONAL_INFO.bio}
          </p>

          {/* Clean Navigation Actions with at least 44x44px Tap Targets */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={() => onSelectTab('profile')}
              type="button"
              className="min-h-[44px] px-5 sm:px-6 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-label-md text-xs sm:text-sm tracking-wider uppercase font-semibold transition-colors cursor-pointer flex items-center justify-center"
            >
              View Profile &amp; Bio →
            </button>

            <button
              onClick={() => onSelectTab('projects')}
              type="button"
              className="min-h-[44px] px-5 sm:px-6 py-2.5 rounded-md bg-[#111620] hover:bg-[#161D2B] text-slate-200 font-label-md text-xs sm:text-sm tracking-wider uppercase font-semibold border border-white/[0.08] hover:border-white/[0.16] transition-colors cursor-pointer flex items-center justify-center"
            >
              Selected Work
            </button>

            <button
              onClick={() => onSelectTab('contact')}
              type="button"
              className="min-h-[44px] px-4 py-2.5 text-slate-400 hover:text-white font-label-md text-xs sm:text-sm tracking-wider uppercase transition-colors cursor-pointer flex items-center justify-center"
            >
              Contact
            </button>
          </div>

          {/* Key Facts Strip */}
          <div className="pt-3 sm:pt-4 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg">
            <div>
              <span className="block text-xs font-label-sm uppercase text-slate-400 tracking-wider">
                Education
              </span>
              <span className="text-sm text-slate-200 font-medium">
                SLIIT AI (2023–2027)
              </span>
            </div>
            <div>
              <span className="block text-xs font-label-sm uppercase text-slate-400 tracking-wider">
                Focus
              </span>
              <span className="text-sm text-slate-200 font-medium">
                Brand &amp; ML Systems
              </span>
            </div>
            <div>
              <span className="block text-xs font-label-sm uppercase text-slate-400 tracking-wider">
                Status
              </span>
              <span className="text-sm text-blue-400 font-medium">
                Available for hire
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2 pt-3 text-slate-400 font-label-sm text-xs border-t border-white/[0.08]">
        <div>
          <span>Rashmi Vihara Gimhani Thennakoon</span>
          <span className="mx-2">•</span>
          <span>Sri Lanka</span>
        </div>
        <div className="text-slate-500">
          Faculty of Computing // SLIIT
        </div>
      </div>
    </div>
  );
}
