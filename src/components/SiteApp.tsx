"use client";
import { useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroPage from "@/components/pages/HeroPage";
import EcosystemPage from "@/components/pages/EcosystemPage";
import RoboticsPage from "@/components/pages/RoboticsPage";
import LongevityPage from "@/components/pages/LongevityPage";
import ARVRPage from "@/components/pages/ARVRPage";
import AIServicesPage from "@/components/pages/AIServicesPage";
import ComputerVisionPage from "@/components/pages/ComputerVisionPage";
import DronesPage from "@/components/pages/DronesPage";
import StudentsPage from "@/components/pages/StudentsPage";
import AboutPage from "@/components/pages/AboutPage";

const pageComponents = [
  HeroPage,
  EcosystemPage,
  RoboticsPage,
  LongevityPage,
  ARVRPage,
  AIServicesPage,
  ComputerVisionPage,
  DronesPage,
  StudentsPage,
  AboutPage,
];

const variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const transition = {
  duration: 0.55,
  ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
};

interface SiteAppProps {
  currentPage: number;
  direction: number;
  goToPage: (n: number) => void;
  totalPages: number;
  isDark: boolean;
}

export default function SiteApp({
  currentPage,
  direction,
  goToPage,
  totalPages,
  isDark,
}: SiteAppProps) {
  const isAnimating = useRef(false);
  const touchStartY = useRef<number | null>(null);

  const navigate = useCallback(
    (delta: number) => {
      if (isAnimating.current) return;
      isAnimating.current = true;
      goToPage(currentPage + delta);
      setTimeout(() => {
        isAnimating.current = false;
      }, 800);
    },
    [currentPage, goToPage]
  );

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 30) return;
      navigate(e.deltaY > 0 ? 1 : -1);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") navigate(1);
      if (e.key === "ArrowUp" || e.key === "PageUp") navigate(-1);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 50) {
        navigate(delta > 0 ? 1 : -1);
      }
      touchStartY.current = null;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [navigate]);

  const PageComponent = pageComponents[currentPage];

  return (
    <div className="absolute inset-0 top-14 flex justify-center">
      <div className="w-full max-w-7xl relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="relative inset-0 w-full overflow-hidden min-h-full"
          >
            <PageComponent goToPage={goToPage} totalPages={totalPages} />
          </motion.div>
        </AnimatePresence>

        {/* Bottom navigation arrows */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          disabled={currentPage === 0}
          aria-label="Previous page"
          className={`w-9 h-9 rounded-full border backdrop-blur flex items-center justify-center transition-all disabled:opacity-20 disabled:cursor-default cursor-pointer ${
            isDark
              ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
              : "border-[#0A2F6B]/20 bg-[#0A2F6B]/5 text-[#0A2F6B] hover:bg-[#0A2F6B]/10"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 11L3 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 7H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
        <span className={`text-xs font-mono tabular-nums ${isDark ? "text-white/40" : "text-[#0A2F6B]/40"}`}>
          {String(currentPage + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
        </span>
        <button
          onClick={() => navigate(1)}
          disabled={currentPage === totalPages - 1}
          aria-label="Next page"
          className={`w-9 h-9 rounded-full border backdrop-blur flex items-center justify-center transition-all disabled:opacity-20 disabled:cursor-default cursor-pointer ${
            isDark
              ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
              : "border-[#0A2F6B]/20 bg-[#0A2F6B]/5 text-[#0A2F6B] hover:bg-[#0A2F6B]/10"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      </div>
    </div>
  );
}
