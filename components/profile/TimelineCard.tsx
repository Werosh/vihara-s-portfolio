'use client';

import React from 'react';
import { EDUCATION_DATA, EXPERIENCE_DATA } from '@/data/content';

export default function TimelineCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* COLUMN 3A: EDUCATION */}
      <section className="p-space-lg rounded-2xl bg-surface-container-low/70 backdrop-blur-xl shadow-xl flex flex-col gap-space-md border border-outline-variant/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-xl">school</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-wide">
              EDUCATION
            </h3>
          </div>
          <span className="font-label-sm text-label-sm text-primary uppercase">[ACADEMIC]</span>
        </div>

        <div className="flex flex-col gap-space-md">
          {EDUCATION_DATA.map((item, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={item.id}
                className={`p-space-md rounded-xl bg-surface-container-lowest/${
                  isFirst ? '80' : '40'
                } hover:bg-surface-container transition-all flex flex-col gap-space-xs relative overflow-hidden border border-outline-variant/20`}
              >
                {isFirst && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />}
                <div className="flex items-center justify-between">
                  <span
                    className={`font-label-sm text-label-sm font-bold tracking-wider ${
                      isFirst ? 'text-primary' : 'text-outline'
                    }`}
                  >
                    {item.period}
                  </span>
                  <span
                    className={`px-space-xs py-0.5 rounded-full font-label-sm text-[10px] uppercase font-semibold ${
                      isFirst
                        ? 'bg-primary-container/20 text-primary border border-primary/30'
                        : 'bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                  {item.institution}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant font-medium">
                  {item.degree}
                </p>
                <div className="flex flex-wrap items-center gap-space-xs mt-space-xs pt-space-xs text-outline font-label-sm text-xs">
                  {item.highlights.join(' • ')}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* COLUMN 3B: EXPERIENCE */}
      <section className="p-space-lg rounded-2xl bg-surface-container-low/70 backdrop-blur-xl shadow-xl flex flex-col gap-space-md border border-outline-variant/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-xl">work</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-wide">
              EXPERIENCE
            </h3>
          </div>
          <span className="font-label-sm text-label-sm text-secondary uppercase">[FIELDWORK]</span>
        </div>

        <div className="flex flex-col gap-space-md">
          {EXPERIENCE_DATA.map((item, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={item.id}
                className="p-space-md rounded-xl bg-surface-container-lowest/80 hover:bg-surface-container transition-all flex flex-col gap-space-xs relative overflow-hidden border border-outline-variant/20"
              >
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 ${
                    isFirst ? 'bg-secondary' : 'bg-tertiary'
                  }`}
                />
                <div className="flex items-center justify-between">
                  <span
                    className={`font-label-sm text-label-sm font-bold tracking-wider ${
                      isFirst ? 'text-secondary' : 'text-tertiary'
                    }`}
                  >
                    {item.period}
                  </span>
                  <span
                    className={`px-space-xs py-0.5 rounded-full font-label-sm text-[10px] uppercase font-semibold ${
                      isFirst
                        ? 'bg-secondary-container/20 text-secondary border border-secondary/30'
                        : 'bg-tertiary-container/20 text-tertiary border border-tertiary/30'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                  {item.company}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant font-medium">
                  {item.role}
                </p>
                <div className="flex flex-wrap items-center gap-space-xs mt-space-xs pt-space-xs text-outline font-label-sm text-xs">
                  {item.highlights.join(' • ')}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
