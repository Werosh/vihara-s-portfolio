'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TopPersistentNav, { TabKey } from '@/components/nav/TopPersistentNav';
import BottomProgressDots from '@/components/nav/BottomProgressDots';
import SplashView from '@/components/views/SplashView';
import ProfileView from '@/components/views/ProfileView';
import SkillsView from '@/components/views/SkillsView';
import ProjectsView from '@/components/views/ProjectsView';
import ContactView from '@/components/views/ContactView';

const TAB_ORDER: TabKey[] = ['splash', 'profile', 'skills', 'projects', 'contact'];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>('splash');
  const [direction, setDirection] = useState<number>(1);
  const isCooldown = useRef(false);
  const touchStartX = useRef<number | null>(null);

  // Sync tab with URL hash
  const switchTab = useCallback((nextTab: TabKey) => {
    setActiveTab((current) => {
      if (current === nextTab) return current;
      const currentIdx = TAB_ORDER.indexOf(current);
      const nextIdx = TAB_ORDER.indexOf(nextTab);
      setDirection(nextIdx > currentIdx ? 1 : -1);

      // Update URL hash without causing page jump
      if (typeof window !== 'undefined') {
        const targetHash = nextTab === 'splash' ? '' : `#${nextTab}`;
        if (window.location.hash !== targetHash) {
          window.history.replaceState(null, '', targetHash || window.location.pathname);
        }
      }
      return nextTab;
    });
  }, []);

  // Initialize from hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as TabKey;
      if (TAB_ORDER.includes(hash)) {
        setActiveTab(hash);
      }
    };
    handleHash();
    window.addEventListener('popstate', handleHash);
    return () => window.removeEventListener('popstate', handleHash);
  }, []);

  // Step Next / Prev
  const stepNext = useCallback(() => {
    const currentIdx = TAB_ORDER.indexOf(activeTab);
    if (currentIdx < TAB_ORDER.length - 1) {
      switchTab(TAB_ORDER[currentIdx + 1]);
    }
  }, [activeTab, switchTab]);

  const stepPrev = useCallback(() => {
    const currentIdx = TAB_ORDER.indexOf(activeTab);
    if (currentIdx > 0) {
      switchTab(TAB_ORDER[currentIdx - 1]);
    }
  }, [activeTab, switchTab]);

  // Mouse wheel debounced listener (one step per gesture)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Ignore if user is inside a scrollable modal
      if ((e.target as HTMLElement)?.closest('[role="dialog"]')) return;

      if (isCooldown.current) return;

      if (Math.abs(e.deltaY) > 25) {
        isCooldown.current = true;
        if (e.deltaY > 0) {
          stepNext();
        } else {
          stepPrev();
        }
        setTimeout(() => {
          isCooldown.current = false;
        }, 500);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [stepNext, stepPrev]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if inside an input or modal
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if ((e.target as HTMLElement)?.closest('[role="dialog"]')) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        stepNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        stepPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stepNext, stepPrev]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        stepNext();
      } else {
        stepPrev();
      }
    }
    touchStartX.current = null;
  };

  // 400ms fade + 24px slide + soft blue glow pulse
  const variants = {
    initial: (dir: number) => ({
      opacity: 0,
      x: dir * 24,
      filter: 'drop-shadow(0 0 16px rgba(30,155,255,0.35))',
    }),
    animate: {
      opacity: 1,
      x: 0,
      filter: 'drop-shadow(0 0 0px rgba(30,155,255,0))',
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir * -24,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-between"
    >
      {/* Persistent Top Navigation Bar */}
      <TopPersistentNav activeTab={activeTab} onSelectTab={switchTab} />

      {/* Main Single-Viewport Stage */}
      <main className="relative z-10 w-full flex-1 pt-16 sm:pt-20 pb-16 sm:pb-12 overflow-y-auto md:overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full flex items-center justify-center"
          >
            {activeTab === 'splash' && <SplashView onSelectTab={switchTab} />}
            {activeTab === 'profile' && <ProfileView onSelectTab={switchTab} />}
            {activeTab === 'skills' && <SkillsView />}
            {activeTab === 'projects' && <ProjectsView />}
            {activeTab === 'contact' && <ContactView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Bottom Progress Dots */}
      <BottomProgressDots activeTab={activeTab} onSelectTab={switchTab} />
    </div>
  );
}
