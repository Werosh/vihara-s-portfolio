'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/content';
import { useGlow } from '@/components/context/GlowContext';

export default function SplashScreen() {
  const { soundEnabled, setSoundEnabled, setOptionsOpen } = useGlow();
  const [hudMessage, setHudMessage] = useState({
    icon: 'terminal',
    text: 'SELECT SYSTEM INITIALIZATION TO LOAD ARCHIVES',
    color: 'text-[#cfbef5]',
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const menuActions = [
    {
      id: 'START',
      label: 'START',
      code: '[ENTER]',
      onSelect: () => {
        setHudMessage({
          icon: 'rocket_launch',
          text: 'ACCESSING ARCHIVES: RASHMI VIHARA 2026 RECAP...',
          color: 'text-primary',
        });
        const profileElem = document.getElementById('profile');
        if (profileElem) {
          profileElem.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
    {
      id: 'OPTIONS',
      label: 'OPTIONS',
      code: '[CONFIG]',
      onSelect: () => {
        setHudMessage({
          icon: 'tune',
          text: 'AUDIO & DISPLAY CONFIGURATION INITIALIZED.',
          color: 'text-primary',
        });
        setOptionsOpen(true);
      },
    },
    {
      id: 'EXIT',
      label: 'EXIT',
      code: '[ESC]',
      onSelect: () => {
        setHudMessage({
          icon: 'power_settings_new',
          text: 'DISPATCHING TO TRANSMISSION COMMS HUB...',
          color: 'text-secondary',
        });
        const contactElem = document.getElementById('contact');
        if (contactElem) {
          contactElem.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
  ];

  // Keyboard navigation support (W/S/Arrow keys and Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when inside inputs
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % menuActions.length);
      } else if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') {
        e.preventDefault();
        setActiveIndex((prev) => (prev <= 0 ? menuActions.length - 1 : prev - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        menuActions[activeIndex].onSelect();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, menuActions]);

  return (
    <section
      id="splash"
      className="relative z-10 w-full min-h-screen flex items-center justify-center p-margin-sm lg:p-margin-lg pt-24 pb-12"
    >
      <div className="relative w-full max-w-7xl mx-auto min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden rounded-2xl bg-surface-container-lowest/80 shadow-2xl backdrop-blur-2xl border border-outline-variant/30">
        {/* Top-Right Intense Electric Glow Flare */}
        <div
          className="absolute -top-24 -right-24 w-[38rem] h-[38rem] rounded-full blur-[140px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(184, 169, 230, 0.22) 0%, rgba(140, 155, 230, 0.14) 45%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(195, 175, 245, 0.16) 0%, rgba(160, 145, 230, 0.08) 50%, transparent 75%)',
          }}
        />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-container/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Fine HUD Grid Pattern */}
        <div className="absolute inset-0 hud-grid-pattern opacity-[0.06] pointer-events-none" />

        {/* Header Telemetry Bar */}
        <header className="relative z-20 flex items-center justify-between w-full">
          {/* Monogram Emblem */}
          <div className="flex items-center gap-4 group cursor-default">
            <div className="w-10 h-10 rounded-full bg-on-surface text-surface flex items-center justify-center shadow-lg shadow-white/10 transition-transform duration-300 group-hover:scale-105">
              <span className="font-headline-sm font-bold tracking-tighter text-surface-container-lowest text-lg">
                {PERSONAL_INFO.monogram}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-on-surface tracking-[0.2em] uppercase font-bold text-xs">
                {PERSONAL_INFO.callsign}
              </span>
              <span className="font-label-sm text-outline tracking-[0.28em] text-[10px] uppercase">
                Gimhani Thennakoon
              </span>
            </div>
          </div>

          {/* Top Nav Status Pill */}
          <div className="hidden md:flex items-center gap-6 bg-surface-container-low/70 px-5 py-2 rounded-full backdrop-blur-md shadow-inner border border-outline-variant/20">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_#b8a9e6] bg-[#b8a9e6]" />
              <span className="font-label-sm text-primary tracking-[0.2em] uppercase font-semibold">
                {PERSONAL_INFO.systemReady}
              </span>
            </div>
            <span className="text-outline-variant font-label-sm">/</span>
            <span className="font-label-sm text-on-surface-variant tracking-[0.18em]">
              {PERSONAL_INFO.version}
            </span>
          </div>

          {/* Audio & Region Indicators */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setSoundEnabled((prev) => !prev);
                setHudMessage({
                  icon: !soundEnabled ? 'volume_up' : 'volume_off',
                  text: !soundEnabled ? 'HUD AUDIO ENABLED' : 'HUD AUDIO MUTED',
                  color: 'text-primary',
                });
              }}
              aria-label="Toggle HUD Audio"
              className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-primary transition-all duration-200 cursor-pointer border border-outline-variant/30"
              type="button"
            >
              <span className="material-symbols-outlined text-sm">
                {soundEnabled ? 'volume_up' : 'volume_off'}
              </span>
            </button>
            <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant font-label-sm border border-outline-variant/30">
              <span>LK</span>
            </div>
          </div>
        </header>

        {/* Centerpiece 12-Column Grid */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-8">
          {/* Left Column: Subject Embedded in Crimson Arch Block */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Outer Backlit Glow */}
              <div className="absolute -inset-4 bg-secondary-container/30 rounded-[3.5rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

              {/* Crimson Geometric Silhouette Block (R-Arch Shape) */}
              <div className="relative w-72 sm:w-80 md:w-96 h-[22rem] sm:h-[24rem] md:h-[28rem] bg-gradient-to-br from-secondary-container via-[#9e1347] to-[#400014] rounded-t-[5rem] rounded-b-2xl overflow-hidden shadow-2xl flex items-end justify-center">
                {/* Graphic HUD Accents */}
                <div className="absolute top-6 left-6 font-headline-sm text-on-secondary/30 select-none tracking-widest text-3xl">
                  01 // RV
                </div>
                <div className="absolute top-6 right-6 flex flex-col items-end gap-1">
                  <span className="w-5 h-1 bg-on-secondary/40 rounded-full" />
                  <span className="w-3 h-1 bg-on-secondary/30 rounded-full" />
                  <span className="w-1.5 h-1 bg-on-secondary/20 rounded-full" />
                </div>

                {/* Subject Portrait */}
                <Image
                  src={PERSONAL_INFO.portraitPath}
                  alt="Rashmi Vihara Cinematic Portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                  className="relative z-10 object-cover object-top filter contrast-110 saturate-[0.95] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Vignette Scrim inside Arch */}
                <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60" />
              </div>

              {/* Tactical Floating Sub-Badge */}
              <div className="absolute -bottom-4 right-2 sm:right-6 z-30 bg-surface-container-high/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-xl border border-outline-variant/30 flex items-center gap-3">
                <span className="w-2 h-2 rounded-xs bg-secondary-container" />
                <span className="font-label-sm text-on-surface uppercase tracking-[0.2em]">
                  {PERSONAL_INFO.nodeId}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Massive Title & Game Menu */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            {/* Title & Year */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-baseline justify-center lg:justify-start gap-3 sm:gap-5">
                <h1 className="font-headline-display text-6xl sm:text-7xl lg:text-8xl tracking-wider text-on-surface uppercase leading-none drop-shadow-md">
                  {PERSONAL_INFO.headline}
                </h1>
                <span className="font-headline-display text-5xl sm:text-6xl lg:text-7xl tracking-wider text-outline-variant font-light leading-none select-none">
                  {PERSONAL_INFO.headlineYear}
                </span>
              </div>

              {/* Status Tag */}
              <div className="flex items-center justify-center lg:justify-start gap-3 pt-1">
                <span className="inline-flex items-center justify-center w-3.5 h-3.5 bg-on-surface text-surface text-[10px] rounded-xs font-bold">
                  ■
                </span>
                <p className="font-label-md text-on-surface-variant tracking-[0.22em] uppercase font-semibold text-xs sm:text-sm">
                  {PERSONAL_INFO.subtitles.join(' • ')}
                </p>
              </div>
            </div>

            {/* Vertical Game Menu Navigation (START / OPTIONS / EXIT) */}
            <nav
              aria-label="Game Main Menu"
              className="w-full max-w-sm pt-4 flex flex-col items-center lg:items-start space-y-3"
            >
              {menuActions.map((action, idx) => {
                const isSelected = activeIndex === idx;
                const isExit = action.id === 'EXIT';
                return (
                  <button
                    key={action.id}
                    onClick={() => {
                      setActiveIndex(idx);
                      action.onSelect();
                    }}
                    onMouseEnter={() => setActiveIndex(idx)}
                    type="button"
                    className={`menu-item group w-full flex items-center justify-between px-6 py-3.5 rounded-lg text-left transition-all duration-300 cursor-pointer border ${
                      isSelected
                        ? isExit
                          ? 'bg-surface-container border-secondary-container shadow-[0_0_24px_rgba(233,30,99,0.3)]'
                          : 'bg-surface-container border-[#b8a9e6]/40 shadow-[0_0_24px_rgba(184,169,230,0.25)]'
                        : 'bg-surface-container-low/70 border-transparent hover:bg-surface-container'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`cursor-indicator w-2 h-2 rounded-full transition-opacity duration-200 ${
                          isSelected ? 'opacity-100' : 'opacity-0'
                        } ${
                          isExit
                            ? 'bg-secondary-container shadow-[0_0_8px_#d70357]'
                            : 'bg-[#b8a9e6] shadow-[0_0_8px_#b8a9e6]'
                        }`}
                      />
                      <span
                        className={`font-label-lg tracking-[0.3em] uppercase text-sm sm:text-base font-bold transition-colors ${
                          isSelected
                            ? isExit
                              ? 'text-secondary'
                              : 'text-[#d4c5ff]'
                            : 'text-on-surface-variant group-hover:text-on-surface'
                        }`}
                      >
                        {action.label}
                      </span>
                    </div>
                    <span
                      className={`font-label-sm tracking-widest text-[11px] transition-colors ${
                        isSelected
                          ? isExit
                            ? 'text-secondary-fixed'
                            : 'text-[#b8a9e6]'
                          : 'text-outline-variant group-hover:text-outline'
                      }`}
                    >
                      {action.code}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Dynamic Menu Telemetry Prompt */}
            <div
              className={`h-6 flex items-center gap-2 font-label-sm tracking-[0.18em] uppercase text-xs opacity-90 transition-all duration-300 ${hudMessage.color}`}
            >
              <span className="material-symbols-outlined text-xs">{hudMessage.icon}</span>
              <span>{hudMessage.text}</span>
            </div>
          </div>
        </div>

        {/* Bottom HUD Telemetry Footer */}
        <footer className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-outline font-label-sm tracking-[0.2em] uppercase text-[11px] border-t border-outline-variant/20">
          {/* Controls Legend */}
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-on-surface-variant">
              <kbd className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-semibold text-[10px] border border-outline-variant/30">
                W
              </kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-semibold text-[10px] border border-outline-variant/30">
                S
              </kbd>
              NAVIGATE
            </span>
            <span className="flex items-center gap-1.5 text-on-surface-variant">
              <kbd className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-semibold text-[10px] border border-outline-variant/30">
                SPACE
              </kbd>
              CONFIRM
            </span>
          </div>

          {/* Core Specs & Location Signature */}
          <div className="flex items-center gap-4 text-outline-variant">
            <span>FACULTY OF COMPUTING // AI MAJOR</span>
            <span>•</span>
            <span className="text-on-surface-variant">COLOMBO, SRI LANKA</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
