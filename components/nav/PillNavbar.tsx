'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/content';

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'profile', label: 'PROFILE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
];

export default function PillNavbar() {
  const [activeSection, setActiveSection] = useState<string>('profile');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      setIsScrolled(window.scrollY > 80);

      const profileElem = document.getElementById('profile');
      const projectsElem = document.getElementById('projects');
      const contactElem = document.getElementById('contact');

      if (contactElem && scrollPos >= contactElem.offsetTop) {
        setActiveSection('contact');
      } else if (projectsElem && scrollPos >= projectsElem.offsetTop) {
        setActiveSection('projects');
      } else if (profileElem && scrollPos >= profileElem.offsetTop - 100) {
        setActiveSection('profile');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top Desktop & Tablet Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="h-20 w-full px-margin-sm md:px-margin lg:px-margin-lg flex items-center justify-between">
          {/* Brand Monogram Left */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-space-sm group cursor-pointer text-left focus:outline-hidden"
            aria-label="Scroll to top"
          >
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center ring-1 ring-outline-variant/40 group-hover:ring-primary/60 transition-all shadow-md">
              <span className="font-headline-sm text-headline-sm text-primary tracking-normal leading-none pt-0.5">
                {PERSONAL_INFO.monogram}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface tracking-widest uppercase font-bold group-hover:text-primary transition-colors">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="font-label-sm text-label-sm text-primary tracking-wider">
                {PERSONAL_INFO.hudVersion}
              </span>
            </div>
          </button>

          {/* Desktop Center Pill Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center p-1 rounded-full bg-surface-container-low/80 backdrop-blur-xl ring-1 ring-outline-variant/30 gap-1 shadow-lg"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-space-lg py-2 rounded-full font-label-md text-label-md tracking-widest uppercase transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-[#10131c] font-bold' : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePillIndicator"
                      className="absolute inset-0 rounded-full bg-[#b8a9e6] shadow-[0_0_20px_rgba(184,169,230,0.5)] -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Telemetry & Operator Avatar */}
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex flex-col items-end">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#1e9bff]" />
                <span className="font-label-sm text-label-sm text-primary tracking-widest font-semibold">
                  ONLINE // AI DEV
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant/70 tracking-widest">
                {PERSONAL_INFO.clearance}
              </span>
            </div>
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-outline-variant/40 bg-surface-container-high shadow-md">
              <Image
                src={PERSONAL_INFO.portraitPath}
                alt="Rashmi Vihara Avatar"
                fill
                sizes="36px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Floating Bottom Pill Navigation Bar */}
      <nav
        aria-label="Mobile Navigation"
        className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 p-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-2xl ring-1 ring-outline-variant/40 shadow-[0_8px_32px_rgba(0,0,0,0.8)] flex items-center gap-1"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-4 py-2 rounded-full font-label-md text-xs tracking-wider uppercase transition-colors duration-200 ${
                isActive ? 'text-[#10131c] font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeMobilePillIndicator"
                  className="absolute inset-0 rounded-full bg-[#b8a9e6] shadow-[0_0_15px_rgba(184,169,230,0.6)] -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          );
        })}
      </nav>
    </>
  );
}
