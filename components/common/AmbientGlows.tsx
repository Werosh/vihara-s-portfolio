'use client';

import React from 'react';
import { useGlow } from '@/components/context/GlowContext';

export default function AmbientGlows() {
  const { glowEnabled } = useGlow();

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-700 ${
        glowEnabled ? 'opacity-100' : 'opacity-25'
      }`}
    >
      {/* Cyan/Lavender ambient glow */}
      <div
        className="ambient-glow-blur absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[128px] transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(184, 169, 230, 0.22) 0%, rgba(30, 155, 255, 0.12) 50%, transparent 70%)',
        }}
      />
      
      {/* Intense Electric Cyan / Periwinkle Flare Top-Right */}
      <div
        className="ambient-glow-blur absolute top-1/4 -right-48 w-[36rem] h-[36rem] rounded-full blur-[140px] transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(184, 169, 230, 0.2) 0%, rgba(103, 150, 239, 0.12) 45%, transparent 70%)',
        }}
      />

      {/* Crimson / Rose flare bottom */}
      <div
        className="ambient-glow-blur absolute -bottom-40 left-1/4 w-[32rem] h-[32rem] rounded-full blur-[120px] transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(215, 3, 87, 0.16) 0%, rgba(158, 19, 71, 0.08) 50%, transparent 70%)',
        }}
      />

      {/* Subtle Tactical HUD Grid pattern */}
      <div className="absolute inset-0 hud-grid-pattern opacity-[0.05]" />
    </div>
  );
}
