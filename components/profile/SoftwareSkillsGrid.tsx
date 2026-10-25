'use client';

import React from 'react';
import { SOFTWARE_SKILLS } from '@/data/content';

export default function SoftwareSkillsGrid() {
  const getAccentStyles = (accent: string) => {
    switch (accent) {
      case 'secondary':
        return {
          bg: 'bg-secondary-container/20 text-secondary',
          glow: 'hover:shadow-[0_0_20px_rgba(215,3,87,0.25)] hover:border-secondary/40',
          badge: 'text-secondary',
        };
      case 'tertiary':
        return {
          bg: 'bg-tertiary-container/20 text-tertiary',
          glow: 'hover:shadow-[0_0_20px_rgba(103,150,239,0.25)] hover:border-tertiary/40',
          badge: 'text-tertiary',
        };
      case 'surface':
        return {
          bg: 'bg-surface-container-highest text-on-surface',
          glow: 'hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:border-white/30',
          badge: 'text-on-surface-variant',
        };
      default:
        return {
          bg: 'bg-primary-container/20 text-primary',
          glow: 'hover:shadow-[0_0_20px_rgba(30,155,255,0.25)] hover:border-primary/40',
          badge: 'text-primary',
        };
    }
  };

  return (
    <section className="p-space-lg rounded-2xl bg-surface-container-low/70 backdrop-blur-xl shadow-xl relative border border-outline-variant/30">
      <div className="flex items-center justify-between mb-space-md">
        <div className="flex items-center gap-space-xs">
          <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-wide">
            SOFTWARE SKILLS
          </h3>
          <span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-primary font-label-sm text-label-sm uppercase">
            [TELEMETRY_LOADOUT]
          </span>
        </div>
        <span className="font-label-sm text-label-sm text-outline-variant">
          6 NODES INSTALLED
        </span>
      </div>

      {/* Software Nodes Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-space-sm">
        {SOFTWARE_SKILLS.map((node) => {
          const styles = getAccentStyles(node.accent);
          return (
            <div
              key={node.id}
              className={`p-space-md rounded-xl bg-surface-container-lowest/80 border border-outline-variant/20 flex flex-col items-center justify-center gap-space-xs group hover:bg-surface-container transition-all duration-300 cursor-default ${styles.glow}`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${styles.bg}`}
              >
                {node.iconType === 'text' ? (
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tight">
                    {node.icon}
                  </span>
                ) : (
                  <span className="material-symbols-outlined text-2xl">{node.icon}</span>
                )}
              </div>
              <span className="font-label-md text-label-md text-on-surface uppercase tracking-wide text-center">
                {node.name}
              </span>
              <span className={`font-label-sm text-[11px] font-semibold tracking-wider ${styles.badge}`}>
                {node.level}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
