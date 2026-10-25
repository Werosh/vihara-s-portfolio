'use client';

import React from 'react';
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

export default function BottomProgressDots({ activeTab, onSelectTab }: BottomProgressDotsProps) {
  return (
    <div
      aria-label="Screen pagination"
      className="hidden md:flex fixed bottom-5 left-1/2 -translate-x-1/2 z-40 items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111620] border border-white/[0.08]"
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            title={tab.label}
            aria-label={`Go to ${tab.label}`}
            className="group relative flex items-center justify-center p-1 focus:outline-hidden cursor-pointer"
          >
            <span
              className={`transition-all duration-200 rounded-full ${
                isActive
                  ? 'w-5 h-1.5 bg-blue-500'
                  : 'w-1.5 h-1.5 bg-slate-600 hover:bg-slate-400'
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
  );
}
