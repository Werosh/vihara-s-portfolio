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
  const mainRef = useRef<HTMLElement | null>(null);

  // Sync tab with URL hash
  const switchTab = useCallback((nextTab: TabKey) => {
    setActiveTab((current) => {
      if (current === nextTab) return current;
      const currentIdx = TAB_ORDER.indexOf(current);
      const nextIdx = TAB_ORDER.indexOf(nextTab);
      setDirection(nextIdx > currentIdx ? 1 : -1);

      if (typeof window !== 'undefined') {
        const targetHash = nextTab === 'splash' ? '' : `#${nextTab}`;
        if (window.location.hash !== targetHash) {
          window.history.replaceState(null, '', targetHash || window.location.pathname);
        }
      }

      // Reset scroll position of main viewport when switching tabs
      if (mainRef.current) {
        mainRef.current.scrollTop = 0;
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

  // Mouse wheel debounced listener
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if ((e.target as HTMLElement)?.closest('[role="dialog"]')) return;

      // If user is scrolling an internally scrollable area that hasn't hit its edge, let it scroll naturally
      const mainEl = mainRef.current;
      if (mainEl && mainEl.scrollHeight > mainEl.clientHeight) {
        const atTop = mainEl.scrollTop <= 5 && e.deltaY < 0;
        const atBottom = mainEl.scrollTop + mainEl.clientHeight >= mainEl.scrollHeight - 5 && e.deltaY > 0;
        if (!atTop && !atBottom) {
          return;
        }
      }

      if (isCooldown.current) return;

      if (Math.abs(e.deltaY) > 30) {
        isCooldown.current = true;
        if (e.deltaY > 0) {
          stepNext();
        } else {
          stepPrev();
        }
        setTimeout(() => {
          isCooldown.current = false;
        }, 450);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [stepNext, stepPrev]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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

  // Touch swipe support (only trigger if horizontal swipe > 60px)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    if (Math.abs(diff) > 60) {
      if (diff < 0) {
        stepNext();
      } else {
        stepPrev();
      }
    }
    touchStartX.current = null;
  };

  // 250ms clean fade + 12px slide without glow pulse
  const variants = {
    initial: (dir: number) => ({
      opacity: 0,
      x: dir * 12,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.25,
        ease: 'easeOut',
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir * -12,
      transition: {
        duration: 0.25,
        ease: 'easeIn',
      },
    }),
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="app-grid-shell select-none"
    >
      {/* ROW 1: Persistent Header in Grid Flow */}
      <TopPersistentNav activeTab={activeTab} onSelectTab={switchTab} />

      {/* ROW 2: Main Viewport (Takes remaining height, scrolls internally if needed, NEVER overlapped) */}
      <main
        ref={mainRef}
        id="main-content"
        className="app-main-viewport"
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full min-h-full flex flex-col justify-start px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-8 sm:pb-12 max-w-6xl mx-auto"
          >
            {activeTab === 'splash' && <SplashView onSelectTab={switchTab} />}
            {activeTab === 'profile' && <ProfileView onSelectTab={switchTab} />}
            {activeTab === 'skills' && <SkillsView />}
            {activeTab === 'projects' && <ProjectsView />}
            {activeTab === 'contact' && <ContactView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ROW 3: Persistent Footer in Grid Flow (Desktop pagination / Mobile navigation) */}
      <BottomProgressDots activeTab={activeTab} onSelectTab={switchTab} />
    </div>
  );
}
