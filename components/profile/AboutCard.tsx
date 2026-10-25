'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/content';

export default function AboutCard() {
  return (
    <section className="p-space-lg rounded-2xl bg-surface-container-low/70 backdrop-blur-xl shadow-xl relative overflow-hidden border border-outline-variant/30">
      <div className="absolute -right-16 -top-16 w-40 h-40 bg-primary-container/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex items-center justify-between mb-space-sm">
        <div className="flex items-center gap-space-xs">
          <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-wide">
            ABOUT ME
          </h3>
          <span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-primary font-label-sm text-label-sm uppercase">
            [FILE 02 // SYS_BIO]
          </span>
        </div>
        <span className="font-label-sm text-label-sm text-outline-variant uppercase">
          AUTH // VERIFIED
        </span>
      </div>

      <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
        {PERSONAL_INFO.bio}
      </p>

      {/* Dynamic Attribute Telemetry Micro-Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs mt-space-md pt-space-md border-t border-outline-variant/20">
        {PERSONAL_INFO.operatorBadges.map((badge, idx) => (
          <div
            key={idx}
            className="p-space-sm rounded-lg bg-surface-container-lowest/60 border border-outline-variant/15 flex flex-col"
          >
            <span className="font-label-sm text-[10px] text-outline uppercase tracking-wider">
              {badge.label}
            </span>
            <span className={`font-label-md text-xs font-semibold truncate ${badge.color}`}>
              {badge.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
