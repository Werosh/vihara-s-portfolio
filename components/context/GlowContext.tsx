'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface GlowContextType {
  glowEnabled: boolean;
  setGlowEnabled: (value: boolean | ((prev: boolean) => boolean)) => void;
  soundEnabled: boolean;
  setSoundEnabled: (value: boolean | ((prev: boolean) => boolean)) => void;
  optionsOpen: boolean;
  setOptionsOpen: (value: boolean) => void;
}

const GlowContext = createContext<GlowContextType | undefined>(undefined);

export function GlowProvider({ children }: { children: React.ReactNode }) {
  const [glowEnabled, setGlowEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [optionsOpen, setOptionsOpen] = useState(false);

  useEffect(() => {
    // Check localStorage if available
    const savedGlow = localStorage.getItem('hud-glow-enabled');
    if (savedGlow !== null) {
      setGlowEnabled(savedGlow === 'true');
    }
    const savedSound = localStorage.getItem('hud-sound-enabled');
    if (savedSound !== null) {
      setSoundEnabled(savedSound === 'true');
    }
  }, []);

  const handleSetGlow = (value: boolean | ((prev: boolean) => boolean)) => {
    setGlowEnabled((prev) => {
      const next = typeof value === 'function' ? value(prev) : value;
      localStorage.setItem('hud-glow-enabled', String(next));
      return next;
    });
  };

  const handleSetSound = (value: boolean | ((prev: boolean) => boolean)) => {
    setSoundEnabled((prev) => {
      const next = typeof value === 'function' ? value(prev) : value;
      localStorage.setItem('hud-sound-enabled', String(next));
      return next;
    });
  };

  return (
    <GlowContext.Provider
      value={{
        glowEnabled,
        setGlowEnabled: handleSetGlow,
        soundEnabled,
        setSoundEnabled: handleSetSound,
        optionsOpen,
        setOptionsOpen,
      }}
    >
      <div className={glowEnabled ? 'glow-enabled' : 'glow-disabled'}>
        {children}
      </div>
    </GlowContext.Provider>
  );
}

export function useGlow() {
  const context = useContext(GlowContext);
  if (!context) {
    throw new Error('useGlow must be used within a GlowProvider');
  }
  return context;
}
