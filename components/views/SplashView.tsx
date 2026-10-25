'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/content';
import { useGlow } from '@/components/context/GlowContext';
import { TabKey } from '@/components/nav/TopPersistentNav';

interface SplashViewProps {
  onSelectTab: (tab: TabKey) => void;
}

export default function SplashView({ onSelectTab }: SplashViewProps) {
  const { setOptionsOpen } = useGlow();
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setParallax({ x, y });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full max-w-7xl mx-auto flex flex-col justify-between p-4 sm:p-8 lg:p-10 select-none"
    >
      {/* Centerpiece 12-Column Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center my-auto">
        {/* Left Column: Portrait Embedded in Crimson Arch Block with Parallax */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div
            className="relative group transition-transform duration-200 ease-out"
            style={{
              transform: `translate3d(${parallax.x * 14}px, ${parallax.y * 14}px, 0)`,
            }}
          >
            {/* Outer Backlit Glow with independent parallax */}
            <div
              className="absolute -inset-4 bg-secondary-container/30 rounded-[3.5rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none"
              style={{
                transform: `translate3d(${parallax.x * -20}px, ${parallax.y * -20}px, 0)`,
              }}
            />

            {/* Crimson Geometric Silhouette Block (R-Arch Shape) */}
            <div className="relative w-64 sm:w-80 md:w-88 h-[20rem] sm:h-[24rem] md:h-[26rem] bg-gradient-to-br from-secondary-container via-[#9e1347] to-[#400014] rounded-t-[5rem] rounded-b-2xl overflow-hidden shadow-2xl flex items-end justify-center border border-outline-variant/30">
              {/* Graphic HUD Accents */}
              <div className="absolute top-5 left-5 font-headline-sm text-on-secondary/30 select-none tracking-widest text-2xl">
                01 // RV
              </div>
              <div className="absolute top-5 right-5 flex flex-col items-end gap-1">
                <span className="w-5 h-1 bg-on-secondary/40 rounded-full" />
                <span className="w-3 h-1 bg-on-secondary/30 rounded-full" />
                <span className="w-1.5 h-1 bg-on-secondary/20 rounded-full" />
              </div>

              {/* Subject Portrait */}
              <Image
                src={PERSONAL_INFO.portraitPath}
                alt="Rashmi Vihara Cinematic Studio Portrait"
                fill
                priority
                sizes="(max-width: 768px) 280px, 350px"
                className="relative z-10 object-cover object-top filter contrast-110 saturate-[0.95] group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Vignette Scrim */}
              <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60" />
            </div>

            {/* Tactical Floating Sub-Badge */}
            <div className="absolute -bottom-3 right-2 sm:right-4 z-30 bg-surface-container-high/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg shadow-xl border border-outline-variant/30 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-xs bg-secondary-container" />
              <span className="font-label-sm text-[11px] text-on-surface uppercase tracking-[0.2em]">
                {PERSONAL_INFO.nodeId}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Title & Game Menu */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
          {/* Headline with stagger */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-2"
          >
            <div className="flex flex-wrap items-baseline justify-center lg:justify-start gap-3 sm:gap-4">
              <h1 className="font-headline-display text-5xl sm:text-7xl lg:text-8xl tracking-wider text-on-surface uppercase leading-none drop-shadow-md">
                {PERSONAL_INFO.headline}
              </h1>
              <span className="font-headline-display text-4xl sm:text-6xl lg:text-7xl tracking-wider text-outline-variant font-light leading-none select-none">
                {PERSONAL_INFO.headlineYear}
              </span>
            </div>

            {/* Tactical Status Tag */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 pt-1">
              <span className="inline-flex items-center justify-center w-3 h-3 bg-on-surface text-surface text-[9px] rounded-xs font-bold">
                ■
              </span>
              <p className="font-label-md text-on-surface-variant tracking-[0.22em] uppercase font-semibold text-xs sm:text-sm">
                {PERSONAL_INFO.subtitles.join(' • ')}
              </p>
            </div>
          </motion.div>

          {/* Vertical Game Menu (START / OPTIONS / EXIT) */}
          <nav
            aria-label="Game Main Menu"
            className="w-full max-w-sm pt-2 flex flex-col items-center lg:items-start space-y-3"
          >
            {/* START Action */}
            <button
              onClick={() => onSelectTab('profile')}
              type="button"
              className="menu-item group w-full flex items-center justify-between px-6 py-3 rounded-lg bg-surface-container-low/90 hover:bg-surface-container text-left transition-all duration-300 cursor-pointer border border-[#b8a9e6]/25 hover:border-[#b8a9e6]/60 hover:shadow-[0_0_24px_rgba(184,169,230,0.25)]"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-2 h-2 rounded-full bg-[#b8a9e6] shadow-[0_0_8px_#b8a9e6] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-label-lg tracking-[0.3em] uppercase text-sm sm:text-base font-bold text-on-surface group-hover:text-[#d4c5ff] transition-colors">
                  START
                </span>
              </div>
              <span className="font-label-sm text-[11px] tracking-widest text-outline group-hover:text-[#b8a9e6] transition-colors">
                [ENTER]
              </span>
            </button>

            {/* OPTIONS Action */}
            <button
              onClick={() => setOptionsOpen(true)}
              type="button"
              className="menu-item group w-full flex items-center justify-between px-6 py-3 rounded-lg bg-surface-container-low/60 hover:bg-surface-container text-left transition-all duration-300 cursor-pointer border border-transparent hover:border-[#b8a9e6]/30 hover:shadow-[0_0_24px_rgba(184,169,230,0.2)]"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-2 h-2 rounded-full bg-[#b8a9e6] shadow-[0_0_6px_#b8a9e6] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-label-lg tracking-[0.3em] uppercase text-sm sm:text-base font-bold text-on-surface-variant group-hover:text-on-surface transition-colors">
                  OPTIONS
                </span>
              </div>
              <span className="font-label-sm text-[11px] tracking-widest text-outline-variant group-hover:text-[#b8a9e6] transition-colors">
                [CONFIG]
              </span>
            </button>

            {/* EXIT Action */}
            <button
              onClick={() => onSelectTab('contact')}
              type="button"
              className="menu-item group w-full flex items-center justify-between px-6 py-3 rounded-lg bg-surface-container-low/60 hover:bg-surface-container hover:shadow-[0_0_24px_rgba(233,30,99,0.25)] text-left transition-all duration-300 cursor-pointer border border-transparent hover:border-secondary/30"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-2 h-2 rounded-full bg-secondary-container opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-label-lg tracking-[0.3em] uppercase text-sm sm:text-base font-bold text-on-surface-variant group-hover:text-secondary transition-colors">
                  EXIT
                </span>
              </div>
              <span className="font-label-sm text-[11px] tracking-widest text-outline-variant group-hover:text-secondary-fixed transition-colors">
                [ESC]
              </span>
            </button>
          </nav>

          {/* Dynamic HUD prompt */}
          <div className="h-5 flex items-center gap-2 font-label-sm tracking-[0.18em] uppercase text-[11px] text-[#cfbef5]/90">
            <span className="material-symbols-outlined text-xs">terminal</span>
            <span>INITIALIZE OPERATOR SYSTEM TO ACCESS DOSSIER</span>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Legend Bar */}
      <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 text-outline font-label-sm tracking-[0.2em] uppercase text-[10px] sm:text-[11px] border-t border-outline-variant/20">
        <div className="flex items-center gap-4 text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <kbd className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-semibold text-[9px] border border-outline-variant/30">
              W / S
            </kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-semibold text-[9px] border border-outline-variant/30">
              ARROWS
            </kbd>
            NAVIGATE
          </span>
          <span className="flex items-center gap-1.5">
            <kbd className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-semibold text-[9px] border border-outline-variant/30">
              SCROLL / SWIPE
            </kbd>
            TABS
          </span>
        </div>
        <div className="flex items-center gap-3 text-outline-variant">
          <span>FACULTY OF COMPUTING // AI MAJOR</span>
          <span>•</span>
          <span className="text-on-surface-variant">COLOMBO, SRI LANKA</span>
        </div>
      </div>
    </div>
  );
}
