'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/content';

export default function HudFooter() {
  return (
    <footer className="relative z-10 w-full py-space-xl mt-space-2xl">
      <div className="w-full px-margin-sm lg:px-margin-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md bg-surface-container-lowest/60 backdrop-blur-lg rounded-xl p-space-lg ring-1 ring-outline-variant/20 shadow-xl">
          <div className="flex flex-wrap items-center gap-space-sm sm:gap-space-md justify-center sm:justify-start">
            <span className="font-headline-sm text-headline-sm text-primary tracking-wide">
              {PERSONAL_INFO.shortName.toUpperCase()}
            </span>
            <span className="text-outline font-label-sm">//</span>
            <span className="font-label-md text-label-md text-on-surface-variant tracking-wider">
              PORTFOLIO SYSTEM © 2026
            </span>
          </div>
          <div className="flex items-center gap-space-md sm:gap-space-lg text-outline font-label-sm text-label-sm tracking-widest uppercase">
            <span className="text-on-surface-variant/80">SYS.STATUS // NORMAL</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#1e9bff] animate-pulse" />
              <span className="text-primary font-semibold">NODE CONNECTED</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
