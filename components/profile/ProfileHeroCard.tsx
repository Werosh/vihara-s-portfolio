'use client';

import React from 'react';
import Image from 'next/image';
import { PERSONAL_INFO } from '@/data/content';

export default function ProfileHeroCard() {
  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:col-span-5 flex flex-col gap-space-lg lg:sticky lg:top-24">
      {/* Identity Meta Header */}
      <div className="flex flex-col">
        <div className="flex items-center gap-space-xs mb-space-xs">
          <span className="font-label-sm text-label-sm tracking-widest text-primary uppercase">
            [ OPERATOR CALLSIGN ]
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-outline-variant/60 to-transparent" />
        </div>
        <p className="font-label-md text-label-md uppercase text-on-surface-variant tracking-wider">
          HELLO, I AM
        </p>
        <h2 className="font-headline-display text-headline-display text-on-surface tracking-wider leading-none select-none">
          {PERSONAL_INFO.shortName.toUpperCase()}
        </h2>
        <div className="flex flex-wrap items-center gap-space-xs mt-space-xs">
          <span className="px-space-sm py-space-xs rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm uppercase tracking-wider border border-primary/20">
            {PERSONAL_INFO.subtitles.join(' & ')}
          </span>
          <span className="px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase flex items-center gap-1 border border-outline-variant/30">
            <span className="material-symbols-outlined text-xs text-primary">location_on</span>
            {PERSONAL_INFO.location.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Character Portrait Canvas with Bioluminescent Halo */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-surface-container-lowest shadow-2xl group border border-outline-variant/30">
        {/* Ambient Radial Glows */}
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#b8a9e6]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-16 w-56 h-56 bg-[#9d8ec2]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Portrait Image */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent">
          <Image
            src={PERSONAL_INFO.portraitPath}
            alt="Rashmi Vihara Operator Portrait"
            fill
            sizes="(max-width: 1024px) 100vw, 420px"
            className="object-cover object-top filter saturate-105 group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Tactical HUD Cutout Corner Accents */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-primary/70 pointer-events-none" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-primary/70 pointer-events-none" />
          <div className="absolute bottom-16 left-3 w-4 h-4 border-b-2 border-l-2 border-primary/70 pointer-events-none" />
          <div className="absolute bottom-16 right-3 w-4 h-4 border-b-2 border-r-2 border-primary/70 pointer-events-none" />

          {/* Vertical HUD Watermark */}
          <div className="absolute top-6 right-3 text-outline/40 font-label-sm text-label-sm [writing-mode:vertical-rl] tracking-widest uppercase select-none pointer-events-none">
            SPEC_SYS // RV_MK2
          </div>
        </div>

        {/* Overlaid Tactical Status Banner */}
        <div className="p-space-md bg-surface-container/90 backdrop-blur-xl flex flex-col gap-space-xs border-t border-outline-variant/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#b8a9e6] shadow-[0_0_8px_rgba(184,169,230,0.8)] animate-pulse" />
              <span className="font-label-md text-label-md text-on-surface uppercase font-bold">
                STATUS: ACTIVE
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">
              RDY // AVAILABLE
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            OPEN FOR RESEARCH &amp; CLIENT BRAND COLLABS
          </p>
        </div>
      </div>

      {/* Quick Action Pill Group */}
      <div className="flex items-center gap-space-sm pt-space-xs">
        <button
          onClick={scrollToContact}
          className="flex-1 py-space-sm px-space-md rounded-full bg-[#b8a9e6] hover:bg-[#cfbef5] text-[#1c0e4f] font-label-lg text-label-lg uppercase tracking-wider text-center font-bold shadow-[0_0_20px_rgba(184,169,230,0.4)] transition-all cursor-pointer"
        >
          DEPLOY COMMS
        </button>
        <a
          href={PERSONAL_INFO.cvPath}
          download="Rashmi_Vihara_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="py-space-sm px-space-md rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md uppercase tracking-wider flex items-center justify-center transition-all border border-outline-variant/30 hover:border-primary/50"
          aria-label="Download CV"
          title="Download Curriculum Vitae (PDF)"
        >
          <span className="material-symbols-outlined text-base">download</span>
        </a>
      </div>
    </div>
  );
}
