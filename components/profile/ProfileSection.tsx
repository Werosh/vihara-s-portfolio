'use client';

import React from 'react';
import ProfileHeroCard from './ProfileHeroCard';
import AboutCard from './AboutCard';
import SoftwareSkillsGrid from './SoftwareSkillsGrid';
import TimelineCard from './TimelineCard';
import LanguagesCard from './LanguagesCard';

export default function ProfileSection() {
  return (
    <section id="profile" className="relative z-10 w-full pt-16 lg:pt-24 px-margin-sm lg:px-margin-lg">
      <div className="flex flex-col w-full pb-space-2xl">
        {/* HUD System Status Ticker */}
        <div className="w-full flex items-center justify-between pb-space-md mb-space-lg border-b border-outline-variant/20">
          <div className="flex items-center gap-space-sm">
            <span className="w-2 h-2 rounded-full bg-[#b8a9e6] shadow-[0_0_8px_rgba(184,169,230,0.8)] animate-ping" />
            <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">
              ID // RV-9840-SLIIT
            </span>
            <span className="font-label-sm text-label-sm text-outline-variant">::</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
              FILE: OPERATOR_DOSSIER.DAT
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-space-md">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
              LAT 06°55′N // LON 79°50′E
            </span>
            <span className="px-space-xs py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold border border-outline-variant/30">
              SEC-01 CLEARANCE
            </span>
          </div>
        </div>

        {/* Primary Asymmetric Grid: Character Frame (Left) + Telemetry Dossier (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
          <ProfileHeroCard />

          <div className="lg:col-span-7 flex flex-col gap-space-xl">
            <AboutCard />
            <SoftwareSkillsGrid />
            <TimelineCard />
            <LanguagesCard />
          </div>
        </div>
      </div>
    </section>
  );
}
