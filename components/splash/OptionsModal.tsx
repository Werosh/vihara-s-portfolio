'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGlow } from '@/components/context/GlowContext';

export default function OptionsModal() {
  const { glowEnabled, setGlowEnabled, soundEnabled, setSoundEnabled, optionsOpen, setOptionsOpen } = useGlow();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && optionsOpen) {
        setOptionsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [optionsOpen, setOptionsOpen]);

  return (
    <AnimatePresence>
      {optionsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOptionsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="options-title"
            className="relative w-full max-w-md p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-primary/30 shadow-[0_0_50px_rgba(30,155,255,0.25)] z-10 flex flex-col gap-6"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">tune</span>
                <h3 id="options-title" className="font-headline-sm text-headline-sm text-on-surface tracking-wider">
                  HUD SYSTEM CONFIG
                </h3>
              </div>
              <button
                onClick={() => setOptionsOpen(false)}
                className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
                aria-label="Close Options"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>

            {/* Toggle Controls */}
            <div className="flex flex-col gap-5">
              {/* Glow Toggle */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/20">
                <div className="flex flex-col">
                  <span className="font-label-md text-on-surface font-semibold tracking-wider uppercase">
                    BIOLUMINESCENT GLOW EFFECTS
                  </span>
                  <span className="font-body-sm text-xs text-on-surface-variant">
                    Ambient background blurs and neon card halos
                  </span>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={glowEnabled}
                  onClick={() => setGlowEnabled((prev) => !prev)}
                  className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 flex items-center cursor-pointer ${
                    glowEnabled ? 'bg-primary-container justify-end' : 'bg-surface-container-high justify-start'
                  }`}
                >
                  <motion.div
                    layout
                    className={`w-6 h-6 rounded-full shadow-md ${
                      glowEnabled ? 'bg-[#003158]' : 'bg-outline'
                    }`}
                  />
                </button>
              </div>

              {/* Sound Toggle */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/20">
                <div className="flex flex-col">
                  <span className="font-label-md text-on-surface font-semibold tracking-wider uppercase">
                    HUD AUDIO TELEMETRY
                  </span>
                  <span className="font-body-sm text-xs text-on-surface-variant">
                    System command audio feedback prompts
                  </span>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={soundEnabled}
                  onClick={() => setSoundEnabled((prev) => !prev)}
                  className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 flex items-center cursor-pointer ${
                    soundEnabled ? 'bg-primary-container justify-end' : 'bg-surface-container-high justify-start'
                  }`}
                >
                  <motion.div
                    layout
                    className={`w-6 h-6 rounded-full shadow-md ${
                      soundEnabled ? 'bg-[#003158]' : 'bg-outline'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 text-outline font-label-sm text-[11px] tracking-widest uppercase">
              <span>STATUS: {glowEnabled ? 'OPTIMAL (HDR)' : 'ENERGY SAVING'}</span>
              <button
                onClick={() => setOptionsOpen(false)}
                className="px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-bold shadow-md hover:bg-[#43aaff] transition-colors"
              >
                APPLY &amp; CLOSE
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
