'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data/content';

export default function ContactView() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75a1.75 1.75 0 0 0-1.76 1.75c0 .97.79 1.76 1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
          </svg>
        );
      case 'behance':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.171 3-3.455 0-5.555-2.502-5.555-5.918 0-3.693 2.433-6.082 5.642-6.082 3.551 0 5.485 2.508 5.253 6.643h-8.086c.075 1.755 1.258 2.673 2.766 2.673 1.579 0 2.497-.837 2.78-1.874l2.371 1.558zm-7.91-4.225h5.45c-.092-1.503-1.026-2.316-2.482-2.316-1.523 0-2.613.882-2.968 2.316zm-7.816 7.225h-8v-16h7.941c3.844 0 6.059 1.968 6.059 5.093 0 1.753-.873 3.328-2.385 4.09 1.947.781 2.885 2.57 2.885 4.707 0 3.655-2.738 6.11-6.5 6.11zm-5.176-9.529h4.224c1.865 0 2.973-.896 2.973-2.352 0-1.543-1.127-2.352-2.973-2.352h-4.224v4.704zm0 6.729h4.391c1.996 0 3.266-.948 3.266-2.564 0-1.637-1.27-2.585-3.266-2.585h-4.391v5.149z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6 sm:p-10 lg:p-12">
      {/* Small portrait */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-white/[0.08] bg-[#111620] mb-5">
        <Image
          src={PERSONAL_INFO.portraitPath}
          alt="Rashmi Vihara"
          fill
          sizes="96px"
          className="object-cover object-top"
        />
      </div>

      <div className="space-y-2 mb-6">
        <h2 className="font-headline-display text-4xl sm:text-6xl text-slate-100 tracking-wider leading-none">
          LET&apos;S WORK TOGETHER
        </h2>
        <p className="font-body-md text-sm sm:text-base text-slate-300 max-w-md mx-auto">
          I am available for freelance brand design, logo commissions, and student internships in AI and software systems.
        </p>
      </div>

      {/* Email Box & One-Click Copy */}
      <div className="flex items-center gap-2 p-1.5 rounded-lg bg-[#111620] border border-white/[0.08] max-w-md w-full mb-5">
        <div className="flex items-center gap-2 px-3 py-1.5 flex-1 justify-center sm:justify-start">
          <span className="text-slate-400 text-xs">✉</span>
          <span className="font-mono text-xs sm:text-sm text-slate-200 select-all">
            {PERSONAL_INFO.email}
          </span>
        </div>
        <button
          onClick={handleCopyEmail}
          type="button"
          className="px-3.5 py-1.5 rounded bg-[#161D2B] hover:bg-[#1C2536] text-xs font-label-md text-slate-200 tracking-wider uppercase flex items-center gap-1.5 transition-colors cursor-pointer border border-white/[0.08]"
        >
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Main Mailto CTA */}
      <div className="mb-6">
        <a
          href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20-%20Rashmi%20Vihara`}
          className="px-8 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-label-md text-xs sm:text-sm tracking-wider uppercase font-semibold transition-colors inline-flex items-center gap-2"
        >
          <span>Email Me Directly</span>
          <span>→</span>
        </a>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
        {SOCIAL_LINKS.filter((l) => l.platform !== 'email').map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#111620] hover:bg-[#161D2B] text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/[0.16] transition-colors text-xs font-label-md"
          >
            <span className="text-blue-400">
              {getSocialIcon(link.platform)}
            </span>
            <span>{link.name}</span>
          </a>
        ))}
      </div>

      {/* Grounded Closing Line (Replaces THANK YOU 2026) */}
      <div className="pt-6 border-t border-white/[0.08] w-full max-w-md">
        <p className="font-body-sm text-xs sm:text-sm text-slate-400">
          Open to internships and design work. Email me.
        </p>
      </div>
    </div>
  );
}
