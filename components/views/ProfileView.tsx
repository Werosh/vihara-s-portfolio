'use client';

import React from 'react';
import Image from 'next/image';
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA } from '@/data/content';
import { TabKey } from '@/components/nav/TopPersistentNav';

interface ProfileViewProps {
  onSelectTab: (tab: TabKey) => void;
}

export default function ProfileView({ onSelectTab }: ProfileViewProps) {
  return (
    <div className="w-full h-full max-w-7xl mx-auto flex flex-col justify-center p-4 sm:p-6 lg:p-8">
      {/* Ticker bar */}
      <div className="w-full flex items-center justify-between pb-2 mb-4 border-b border-outline-variant/20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#b8a9e6] shadow-[0_0_8px_rgba(184,169,230,0.8)] animate-ping" />
          <span className="font-label-sm text-xs text-primary tracking-widest uppercase font-semibold">
            ID // RV-9840-SLIIT
          </span>
          <span className="font-label-sm text-xs text-outline-variant">::</span>
          <span className="font-label-sm text-xs text-on-surface-variant uppercase">
            OPERATOR_DOSSIER.DAT
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span className="font-label-sm text-xs text-on-surface-variant uppercase">
            {PERSONAL_INFO.coordinates}
          </span>
          <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-[10px] font-semibold border border-outline-variant/30">
            {PERSONAL_INFO.clearance}
          </span>
        </div>
      </div>

      {/* Grid: Left Portrait + Right Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column: Portrait & Action Banner (Col-span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div>
            <span className="font-label-sm text-xs tracking-widest text-primary uppercase">
              [ CALLSIGN: {PERSONAL_INFO.callsign} ]
            </span>
            <h2 className="font-headline-display text-4xl sm:text-5xl lg:text-6xl text-on-surface tracking-wider leading-none mt-1">
              {PERSONAL_INFO.shortName.toUpperCase()}
            </h2>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="px-2.5 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-[10px] uppercase tracking-wider border border-primary/20">
                {PERSONAL_INFO.subtitles.join(' & ')}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-[10px] uppercase flex items-center gap-1 border border-outline-variant/30">
                <span className="material-symbols-outlined text-[10px] text-primary">location_on</span>
                {PERSONAL_INFO.location.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Portrait Frame */}
          <div className="relative w-full aspect-[4/3.2] sm:aspect-[4/3] lg:aspect-[4/3.8] rounded-2xl overflow-hidden bg-surface-container-lowest shadow-xl group border border-outline-variant/30">
            <Image
              src={PERSONAL_INFO.portraitPath}
              alt="Rashmi Vihara Operator Portrait"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover object-top filter saturate-105 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Tactical brackets */}
            <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-primary/70 pointer-events-none" />
            <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-primary/70 pointer-events-none" />
            <div className="absolute bottom-10 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-primary/70 pointer-events-none" />
            <div className="absolute bottom-10 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-primary/70 pointer-events-none" />

            {/* Overlaid Status Bar */}
            <div className="absolute bottom-0 inset-x-0 p-2.5 bg-surface-container/90 backdrop-blur-md flex items-center justify-between border-t border-outline-variant/30">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#b8a9e6] shadow-[0_0_8px_rgba(184,169,230,0.8)] animate-pulse" />
                <span className="font-label-sm text-xs text-on-surface uppercase font-bold">
                  STATUS: ACTIVE
                </span>
              </div>
              <span className="font-label-sm text-[10px] text-primary uppercase tracking-widest font-semibold">
                RDY // AVAILABLE
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => onSelectTab('contact')}
              className="flex-1 py-2 px-4 rounded-full bg-[#b8a9e6] hover:bg-[#cfbef5] text-[#1c0e4f] font-label-md text-xs uppercase tracking-wider text-center font-bold shadow-[0_0_20px_rgba(184,169,230,0.4)] transition-all cursor-pointer"
            >
              DEPLOY COMMS
            </button>
            <a
              href={PERSONAL_INFO.cvPath}
              download="Rashmi_Vihara_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-xs uppercase tracking-wider flex items-center justify-center transition-all border border-outline-variant/30 hover:border-primary/50"
              title="Download CV (PDF)"
            >
              <span className="material-symbols-outlined text-base">download</span>
            </a>
          </div>
        </div>

        {/* Right Column: Bio & Compact Two-Column Cards (Col-span 7) */}
        <div className="lg:col-span-7 flex flex-col gap-3.5">
          {/* About Dossier */}
          <section className="p-4 sm:p-5 rounded-xl bg-surface-container-low/75 backdrop-blur-md border border-outline-variant/30 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h3 className="font-headline-sm text-lg sm:text-xl text-on-surface tracking-wide">
                  ABOUT ME
                </h3>
                <span className="px-2 py-0.5 rounded bg-surface-container-highest text-primary font-label-sm text-[10px] uppercase">
                  [SYS_BIO]
                </span>
              </div>
              <span className="font-label-sm text-[10px] text-outline-variant uppercase">
                AUTH // VERIFIED
              </span>
            </div>
            <p className="font-body-md text-xs sm:text-sm text-on-surface leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* 4 Telemetry Micro Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-3 border-t border-outline-variant/20">
              {PERSONAL_INFO.operatorBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-lg bg-surface-container-lowest/60 border border-outline-variant/15 flex flex-col"
                >
                  <span className="font-label-sm text-[9px] text-outline uppercase tracking-wider">
                    {badge.label}
                  </span>
                  <span className={`font-label-md text-[11px] font-semibold truncate ${badge.color}`}>
                    {badge.value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Compact Two-Column Cards: Education & Experience */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Education Track */}
            <section className="p-4 rounded-xl bg-surface-container-low/75 backdrop-blur-md border border-outline-variant/30 shadow-md flex flex-col gap-2.5">
              <div className="flex items-center justify-between pb-1 border-b border-outline-variant/20">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-base">school</span>
                  <h4 className="font-headline-sm text-base text-on-surface tracking-wide">
                    EDUCATION
                  </h4>
                </div>
                <span className="font-label-sm text-[10px] text-primary uppercase">[ACADEMIC]</span>
              </div>

              {EDUCATION_DATA.map((item, idx) => (
                <div
                  key={item.id}
                  className={`p-2.5 rounded-lg bg-surface-container-lowest/70 border border-outline-variant/15 relative overflow-hidden ${
                    idx === 0 ? 'border-l-2 border-l-primary' : ''
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-label-sm">
                    <span className="text-primary font-bold">{item.period}</span>
                    <span className="text-on-surface-variant font-semibold">{item.status}</span>
                  </div>
                  <h5 className="font-headline-sm text-sm text-on-surface mt-0.5">
                    {item.institution}
                  </h5>
                  <p className="font-body-sm text-[11px] text-on-surface-variant line-clamp-1">
                    {item.degree}
                  </p>
                </div>
              ))}
            </section>

            {/* Experience Track */}
            <section className="p-4 rounded-xl bg-surface-container-low/75 backdrop-blur-md border border-outline-variant/30 shadow-md flex flex-col gap-2.5">
              <div className="flex items-center justify-between pb-1 border-b border-outline-variant/20">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-base">work</span>
                  <h4 className="font-headline-sm text-base text-on-surface tracking-wide">
                    EXPERIENCE
                  </h4>
                </div>
                <span className="font-label-sm text-[10px] text-secondary uppercase">[FIELDWORK]</span>
              </div>

              {EXPERIENCE_DATA.map((item, idx) => (
                <div
                  key={item.id}
                  className={`p-2.5 rounded-lg bg-surface-container-lowest/70 border border-outline-variant/15 relative overflow-hidden ${
                    idx === 0 ? 'border-l-2 border-l-secondary' : 'border-l-2 border-l-tertiary'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-label-sm">
                    <span className={idx === 0 ? 'text-secondary font-bold' : 'text-tertiary font-bold'}>
                      {item.period}
                    </span>
                    <span className="text-on-surface-variant font-semibold">{item.status}</span>
                  </div>
                  <h5 className="font-headline-sm text-sm text-on-surface mt-0.5">
                    {item.company}
                  </h5>
                  <p className="font-body-sm text-[11px] text-on-surface-variant line-clamp-1">
                    {item.role}
                  </p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
