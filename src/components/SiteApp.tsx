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

        {/* Bottom navigation removed temporarily for build fix */}
      </div>
    </div>
  );
}
