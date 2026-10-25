'use client';

import React from 'react';

/**
 * Single, very subtle soft blue light source only.
 * No animation, no color cycling, low opacity (10-15%).
 */
export default function AmbientGlows() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Single static subtle blue ambient light source behind portrait */}
      <div
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(30, 64, 175, 0.04) 45%, transparent 70%)',
        }}
      />
    </div>
  );
}
