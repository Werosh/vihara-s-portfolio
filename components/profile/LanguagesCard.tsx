'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LANGUAGES } from '@/data/content';

export default function LanguagesCard() {
  return (
    <section className="p-space-lg rounded-2xl bg-surface-container-low/70 backdrop-blur-xl shadow-xl flex flex-col gap-space-md border border-outline-variant/30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-xl">translate</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-wide">
            LANGUAGE (COMMUNICATION)
          </h3>
        </div>
        <span className="font-label-sm text-label-sm text-outline-variant uppercase">
          [COMMS_CHANNELS]
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {LANGUAGES.map((item) => (
          <div
            key={item.name}
            className="p-space-md rounded-xl bg-surface-container-lowest/60 border border-outline-variant/20 flex flex-col gap-space-xs"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-lg text-label-lg uppercase text-on-surface font-bold">
                  {item.name}
                </span>
                <span className="font-label-sm text-xs text-primary uppercase font-semibold">
                  {item.proficiencyLabel}
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm text-primary">
                {item.percentage}%
              </span>
            </div>

            {/* Progress Bar Shell */}
            <div className="w-full h-3 rounded-full bg-surface-container overflow-hidden p-0.5 border border-outline-variant/20">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.percentage}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{
                  backgroundColor: item.color,
                  boxShadow: `0 0 12px ${item.color}B3`,
                }}
              />
            </div>

            <div className="flex justify-between items-center text-outline font-label-sm text-[11px] pt-space-xs">
              <span>{item.fluencyStatus}</span>
              <span>SYNCHRONIZED // {item.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
