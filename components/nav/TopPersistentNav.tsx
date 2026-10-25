'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/content';
import { useGlow } from '@/components/context/GlowContext';

export type TabKey = 'splash' | 'profile' | 'skills' | 'projects' | 'contact';

interface TopPersistentNavProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
}

const NAV_TABS: { id: TabKey; label: string }[] = [
  { id: 'profile', label: 'PROFILE' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
];

export default function TopPersistentNav({ activeTab, onSelectTab }: TopPersistentNavProps) {
  const { soundEnabled, setSoundEnabled, setOptionsOpen } = useGlow();

  return (
    <>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-lg">
        {/* RV Monogram Brand Mark (Top-Left) */}
        <button
          onClick={() => onSelectTab('splash')}
          className="flex items-center gap-3 group cursor-pointer text-left focus:outline-hidden"
          aria-label="Return to Splash Title Screen"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-container-high flex items-center justify-center ring-1 ring-outline-variant/40 group-hover:ring-primary/60 transition-all shadow-md">
            <span className="font-headline-sm text-primary tracking-normal leading-none pt-0.5 text-base sm:text-lg">
              {PERSONAL_INFO.monogram}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-md text-xs sm:text-sm text-on-surface tracking-widest uppercase font-bold group-hover:text-primary transition-colors">
              {PERSONAL_INFO.shortName}
            </span>
            <span className="font-label-sm text-[10px] text-primary tracking-wider hidden sm:block">
              {PERSONAL_INFO.hudVersion}
            </span>
          </div>
        </button>

        {/* Desktop Centered Pill Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center p-1 rounded-full bg-surface-container-low/90 backdrop-blur-xl ring-1 ring-outline-variant/30 gap-1 shadow-inner"
        >
          {NAV_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`relative px-4 lg:px-6 py-2 rounded-full font-label-md text-xs lg:text-sm tracking-widest uppercase transition-colors duration-200 cursor-pointer ${
                  isActive ? 'text-[#10131c] font-bold' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="persistentPillIndicator"
                    className="absolute inset-0 rounded-full bg-[#b8a9e6] shadow-[0_0_20px_rgba(184,169,230,0.5)] -z-10"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Right Telemetry Bar & Options Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex flex-col items-end">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#1e9bff]" />
              <span className="font-label-sm text-xs text-primary tracking-widest font-semibold">
                ONLINE // AI DEV
              </span>
            </div>
            <span className="font-label-sm text-[10px] text-on-surface-variant/70 tracking-widest">
              {PERSONAL_INFO.version}
            </span>
          </div>

          {/* Quick HUD Audio / Options Toggles */}
          <button
            onClick={() => setOptionsOpen(true)}
            aria-label="Open HUD Configuration"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-primary transition-all duration-200 border border-outline-variant/30 cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-sm">tune</span>
          </button>

          <button
            onClick={() => setSoundEnabled((prev) => !prev)}
            aria-label="Toggle HUD Audio"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-primary transition-all duration-200 border border-outline-variant/30 cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-sm">
              {soundEnabled ? 'volume_up' : 'volume_off'}
            </span>
          </button>

          {/* Operator Avatar */}
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-1 ring-outline-variant/40 bg-surface-container-high shadow-md">
            <Image
              src={PERSONAL_INFO.portraitPath}
              alt="Rashmi Vihara Operator Avatar"
              fill
              sizes="36px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </header>

      {/* Mobile Floating Bottom Pill Navigation Bar */}
      <nav
        aria-label="Mobile Navigation"
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 p-1 rounded-full bg-surface-container-lowest/95 backdrop-blur-2xl ring-1 ring-outline-variant/40 shadow-[0_8px_32px_rgba(0,0,0,0.85)] flex items-center gap-1 max-w-[95vw]"
      >
        {NAV_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`relative px-3 sm:px-4 py-2 rounded-full font-label-md text-[11px] tracking-wider uppercase transition-colors duration-200 ${
                isActive ? 'text-[#10131c] font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="mobilePersistentPillIndicator"
                  className="absolute inset-0 rounded-full bg-[#b8a9e6] shadow-[0_0_15px_rgba(184,169,230,0.6)] -z-10"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              {tab.label}
            </button>
          );
        })}
      </nav>
    </>
  );
}
