'use client';

import React from 'react';

export default function CreativeCutouts() {
  return (
    <div aria-hidden="true" className="pointer-events-none select-none">
      {/* Decorative Paintbrush Cutout (Top Left) */}
      <div className="absolute -top-10 left-4 sm:left-12 lg:left-24 opacity-60 hover:opacity-100 transition-opacity duration-500 hidden md:block">
        <div className="relative p-3 rounded-2xl bg-surface-container-lowest/80 border border-primary/20 backdrop-blur-md shadow-[0_0_20px_rgba(30,155,255,0.15)] -rotate-12">
          <svg className="w-12 h-12 text-primary" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Paintbrush body */}
            <path d="M38 10L32 4L16 20L22 26L38 10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="rgba(30,155,255,0.1)"/>
            {/* Ferrule */}
            <path d="M16 20L22 26L18 30L12 24L16 20Z" stroke="#b8a9e6" strokeWidth="2" fill="rgba(184,169,230,0.2)"/>
            {/* Bristles */}
            <path d="M12 24L18 30C16 34 10 38 4 40C6 34 10 28 12 24Z" fill="#ffb2be" stroke="#d70357" strokeWidth="2"/>
            {/* Paint drop */}
            <circle cx="6" cy="42" r="2.5" fill="#1e9bff" className="animate-pulse" />
          </svg>
          <span className="font-label-sm text-[8px] text-primary block text-center mt-1 tracking-widest uppercase">
            CREATIVE // BRUSH
          </span>
        </div>
      </div>

      {/* Decorative Film Strip Cutout (Top Right) */}
      <div className="absolute -top-6 right-4 sm:right-12 lg:right-24 opacity-60 hover:opacity-100 transition-opacity duration-500 hidden md:block">
        <div className="relative p-2.5 rounded-xl bg-surface-container-lowest/80 border border-secondary/25 backdrop-blur-md shadow-[0_0_20px_rgba(215,3,87,0.15)] rotate-12 flex flex-col items-center">
          <div className="w-16 h-28 border border-outline-variant/40 rounded bg-black/60 flex flex-col justify-between p-1">
            {/* Sprocket holes top */}
            <div className="flex justify-between px-0.5">
              <span className="w-1.5 h-1.5 rounded-xs bg-outline-variant" />
              <span className="w-1.5 h-1.5 rounded-xs bg-outline-variant" />
              <span className="w-1.5 h-1.5 rounded-xs bg-outline-variant" />
            </div>
            {/* Film frame 1 */}
            <div className="w-full h-8 rounded-xs bg-secondary-container/20 border border-secondary/30 flex items-center justify-center">
              <span className="font-label-sm text-[8px] text-secondary tracking-widest font-mono">24 FPS</span>
            </div>
            {/* Film frame 2 */}
            <div className="w-full h-8 rounded-xs bg-primary-container/20 border border-primary/30 flex items-center justify-center">
              <span className="font-label-sm text-[8px] text-primary tracking-widest font-mono">RAW 4K</span>
            </div>
            {/* Sprocket holes bottom */}
            <div className="flex justify-between px-0.5">
              <span className="w-1.5 h-1.5 rounded-xs bg-outline-variant" />
              <span className="w-1.5 h-1.5 rounded-xs bg-outline-variant" />
              <span className="w-1.5 h-1.5 rounded-xs bg-outline-variant" />
            </div>
          </div>
          <span className="font-label-sm text-[8px] text-secondary block text-center mt-1.5 tracking-widest uppercase">
            CINE // 35MM
          </span>
        </div>
      </div>

      {/* Decorative Audio Cassette Cutout (Bottom Left) */}
      <div className="absolute bottom-12 left-6 lg:left-28 opacity-60 hover:opacity-100 transition-opacity duration-500 hidden lg:block">
        <div className="relative p-3 rounded-xl bg-surface-container-lowest/80 border border-tertiary/25 backdrop-blur-md shadow-[0_0_20px_rgba(103,150,239,0.15)] -rotate-6">
          <div className="w-24 h-16 border border-outline-variant/40 rounded-lg bg-surface-container-low flex flex-col justify-between p-1.5 relative overflow-hidden">
            {/* Top label */}
            <div className="w-full h-4 rounded-xs bg-tertiary-container/30 border border-tertiary/40 flex items-center justify-between px-1">
              <span className="font-label-sm text-[7px] text-tertiary uppercase tracking-wider">SIDE A</span>
              <span className="font-label-sm text-[7px] text-on-surface-variant font-mono">RV-2026</span>
            </div>
            {/* Spools */}
            <div className="flex items-center justify-center gap-3 py-1">
              <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div className="w-6 h-3 rounded-xs bg-surface-container-highest border border-outline-variant/30" />
              <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-primary" />
              </div>
            </div>
            {/* Bottom tape window */}
            <div className="w-full h-1.5 bg-black/60 rounded-xs" />
          </div>
          <span className="font-label-sm text-[8px] text-tertiary block text-center mt-1 tracking-widest uppercase">
            ANALOG // TAPE
          </span>
        </div>
      </div>
    </div>
  );
}
