'use client';

import React from 'react';
import { TabKey } from './TopPersistentNav';

interface BottomProgressDotsProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
}

const TABS: { id: TabKey; label: string }[] = [
  { id: 'splash', label: 'INTRO' },
  { id: 'profile', label: 'PROFILE' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
];

export default function BottomProgressDots({ activeTab, onSelectTab }: BottomProgressDotsProps) {
  return (
    <div
      aria-label="View Pagination"
      className="hidden md:flex fixed bottom-5 left-1/2 -translate-x-1/2 z-40 items-center gap-3 px-4 py-1.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 shadow-lg"
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            title={tab.label}
            aria-label={`Switch to ${tab.label}`}
            className="group relative flex items-center justify-center p-1 focus:outline-hidden cursor-pointer"
          >
            <span
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? 'w-6 h-2 bg-[#b8a9e6] shadow-[0_0_10px_rgba(184,169,230,0.8)]'
                  : 'w-2 h-2 bg-outline-variant/60 group-hover:bg-primary group-hover:scale-125'
              }`}
            />
            {/* Tooltip on hover */}
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-surface-container-high text-[10px] font-label-sm tracking-widest text-on-surface opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-outline-variant/30">
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
