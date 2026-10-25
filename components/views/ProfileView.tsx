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
    <div className="w-full h-full max-w-6xl mx-auto flex flex-col justify-center p-6 sm:p-10 lg:p-12">
      {/* Section Header */}
      <div className="w-full pb-3 mb-6 border-b border-white/[0.08] flex items-baseline justify-between">
        <div>
          <h2 className="font-headline-display text-4xl sm:text-5xl text-slate-100 tracking-wider leading-none">
            ABOUT &amp; BACKGROUND
          </h2>
          <p className="font-body-sm text-xs sm:text-sm text-slate-400 mt-1">
            Undergraduate artificial intelligence student and freelance brand designer.
          </p>
        </div>
        <span className="hidden sm:inline font-label-sm text-xs text-blue-400 font-medium">
          Colombo, Sri Lanka
        </span>
      </div>

      {/* Editorial Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Natural Portrait & Summary (Col-span 4) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="relative w-full aspect-[4/4.6] rounded-lg overflow-hidden bg-[#111620] border border-white/[0.08]">
            <Image
              src={PERSONAL_INFO.portraitPath}
              alt="Rashmi Vihara"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 360px"
              className="object-cover object-top filter contrast-[1.03]"
            />
          </div>

          <div className="p-4 rounded-lg bg-[#111620] border border-white/[0.08] space-y-2">
            <h3 className="font-headline-sm text-base text-slate-200">
              Rashmi Vihara Gimhani
            </h3>
            <p className="font-body-sm text-xs text-slate-400 leading-relaxed">
              Studying at SLIIT while helping brands with logos, digital marketing assets, and social campaigns.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <a
                href={PERSONAL_INFO.cvPath}
                download="Rashmi_Vihara_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-md bg-[#161D2B] hover:bg-[#1C2536] text-slate-200 hover:text-white font-label-md text-xs tracking-wider uppercase text-center border border-white/[0.08] transition-colors"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Credentials (Col-span 8) */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          {/* First-person Bio */}
          <div className="p-5 sm:p-6 rounded-lg bg-[#111620] border border-white/[0.08] space-y-3">
            <h3 className="font-headline-sm text-lg sm:text-xl text-slate-100 tracking-wide">
              Background &amp; Direction
            </h3>
            <p className="font-body-md text-sm sm:text-base text-slate-300 leading-relaxed">
              I am currently pursuing a BSc (Hons) in Information Technology specializing in Artificial Intelligence at the Sri Lanka Institute of Information Technology (SLIIT). My coursework focuses on algorithms, machine learning models, and database design.
            </p>
            <p className="font-body-md text-sm sm:text-base text-slate-300 leading-relaxed">
              Alongside university, I run a freelance design practice where I build visual identity packages, vector logos, and social media campaigns for clients including fitness centers and online retailers.
            </p>
          </div>

          {/* Education & Experience Split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Education */}
            <div className="p-5 rounded-lg bg-[#111620] border border-white/[0.08] flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                <h4 className="font-headline-sm text-base text-slate-200 tracking-wide">
                  Education
                </h4>
                <span className="font-label-sm text-[11px] text-blue-400">SLIIT</span>
              </div>

              <div className="space-y-3">
                {EDUCATION_DATA.map((item) => (
                  <div key={item.id} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-label-sm">
                      <span className="text-slate-200 font-semibold">{item.institution}</span>
                      <span className="text-slate-400">{item.period}</span>
                    </div>
                    <p className="font-body-sm text-xs text-slate-400">
                      {item.degree}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="p-5 rounded-lg bg-[#111620] border border-white/[0.08] flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                <h4 className="font-headline-sm text-base text-slate-200 tracking-wide">
                  Work Experience
                </h4>
                <span className="font-label-sm text-[11px] text-blue-400">Design &amp; Client</span>
              </div>

              <div className="space-y-3">
                {EXPERIENCE_DATA.map((item) => (
                  <div key={item.id} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-label-sm">
                      <span className="text-slate-200 font-semibold">{item.company}</span>
                      <span className="text-slate-400">{item.period}</span>
                    </div>
                    <p className="font-body-sm text-xs text-blue-400/90">
                      {item.role}
                    </p>
                    <p className="font-body-sm text-xs text-slate-400 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
