'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/content';

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
  return (
    <>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between bg-[#0B0F17] border-b border-white/[0.08]">
        {/* RV Monogram Brand Mark (Top-Left) */}
        <button
          onClick={() => onSelectTab('splash')}
          className="flex items-center gap-3 group cursor-pointer text-left focus:outline-hidden"
          aria-label="Return to Title Screen"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-[#111620] flex items-center justify-center border border-white/[0.08] group-hover:border-primary/50 transition-colors">
            <span className="font-headline-sm text-primary tracking-normal leading-none pt-0.5 text-base sm:text-lg">
              {PERSONAL_INFO.monogram}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-md text-xs sm:text-sm text-slate-100 tracking-wider uppercase font-semibold group-hover:text-primary transition-colors">
              {PERSONAL_INFO.shortName}
            </span>
            <span className="font-body-sm text-[11px] text-slate-400 hidden sm:block">
              AI Student &amp; Designer
            </span>
          </div>
        </button>

        {/* Desktop Centered Pill Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center p-1 rounded-full bg-[#111620] border border-white/[0.08] gap-1"
        >
          {NAV_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`relative px-5 py-2 rounded-full font-label-md text-xs tracking-wider uppercase transition-colors duration-200 cursor-pointer ${
                  isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="persistentPillIndicator"
                    className="absolute inset-0 rounded-full bg-[#1E293B] border border-blue-500/30 -z-10"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span className={isActive ? 'text-blue-400' : ''}>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Info: Location & Avatar */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex flex-col items-end">
            <span className="font-label-sm text-xs text-slate-300 font-medium">
              {PERSONAL_INFO.location}
            </span>
            <span className="font-body-sm text-[11px] text-blue-400">
              Open to internships
            </span>
          </div>

          {/* Clean Natural Portrait Thumbnail */}
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-md overflow-hidden border border-white/[0.08] bg-[#111620]">
            <Image
              src={PERSONAL_INFO.portraitPath}
              alt="Rashmi Vihara"
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
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 p-1 rounded-full bg-[#111620] border border-white/[0.12] shadow-2xl flex items-center gap-1 max-w-[95vw]"
      >
        {NAV_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`relative px-3.5 py-2 rounded-full font-label-md text-[11px] tracking-wider uppercase transition-colors duration-200 ${
                isActive ? 'text-blue-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="mobilePersistentPillIndicator"
                  className="absolute inset-0 rounded-full bg-[#1E293B] border border-blue-500/30 -z-10"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
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
