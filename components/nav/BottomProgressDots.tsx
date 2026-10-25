'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TabKey } from './TopPersistentNav';

interface BottomProgressDotsProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
}

const TABS: { id: TabKey; label: string }[] = [
  { id: 'splash', label: 'Intro' },
  { id: 'profile', label: 'Profile' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const MOBILE_NAV_TABS: { id: TabKey; label: string; icon: string }[] = [
  { id: 'profile', label: 'PROFILE', icon: 'person' },
  { id: 'skills', label: 'SKILLS', icon: 'bolt' },
  { id: 'projects', label: 'PROJECTS', icon: 'grid_view' },
  { id: 'contact', label: 'CONTACT', icon: 'mail' },
];

export default function BottomProgressDots({ activeTab, onSelectTab }: BottomProgressDotsProps) {
  return (
    <footer className="relative z-30 w-full shrink-0 bg-[#0B0F17] border-t border-white/[0.08] flex items-center justify-center px-4 py-2 sm:py-2.5 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      {/* Desktop Pagination Dots (md and above) */}
      <div
        aria-label="Screen pagination"
        className="hidden md:flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111620] border border-white/[0.08]"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              title={tab.label}
              aria-label={`Go to ${tab.label}`}
              className="group relative flex items-center justify-center p-1.5 min-w-[32px] min-h-[32px] focus:outline-hidden cursor-pointer"
            >
              <span
                className={`transition-all duration-200 rounded-full ${
                  isActive
                    ? 'w-6 h-2 bg-blue-500'
                    : 'w-2 h-2 bg-slate-600 group-hover:bg-slate-400'
                }`}
              />
              {/* Minimal plain hover tooltip */}
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-[#18202F] text-[10px] font-label-sm text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/[0.08]">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile In-flow Pill Navigation (< md) with min 44x44px tap targets */}
      <nav
        aria-label="Mobile Navigation"
        className="md:hidden w-full max-w-sm flex items-center justify-around gap-1 p-1 rounded-full bg-[#111620] border border-white/[0.12]"
      >
        {MOBILE_NAV_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`relative flex-1 min-h-[44px] px-2 py-1.5 rounded-full font-label-md text-[11px] tracking-wider uppercase transition-colors duration-200 flex flex-col items-center justify-center cursor-pointer ${
                isActive ? 'text-blue-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="mobileInFlowPillIndicator"
                  className="absolute inset-0 rounded-full bg-[#1E293B] border border-blue-500/30 -z-10"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span className="material-symbols-outlined text-base leading-none mb-0.5">
                {tab.icon}
              </span>
              <span className="text-[10px] leading-tight">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </footer>
  );
}
