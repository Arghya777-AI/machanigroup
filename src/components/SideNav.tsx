"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Page {
  id: string;
  label: string;
  dark: boolean;
}

interface SideNavProps {
  pages: Page[];
  currentPage: number;
  goToPage: (n: number) => void;
}

export default function SideNav({ pages, currentPage, goToPage }: SideNavProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isDark = pages[currentPage].dark;

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3">
      {pages.map((page, i) => {
        const isActive = i === currentPage;
        const isHovered = hoveredIndex === i;

        return (
          <button
            key={page.id}
            onClick={() => goToPage(i)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={`Go to ${page.label}`}
            className="flex items-center gap-2 cursor-pointer group"
          >
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : 10,
              }}
              transition={{ duration: 0.2 }}
              className={`text-xs font-medium whitespace-nowrap ${
                isDark ? "text-white" : "text-[#0A2F6B]"
              }`}
            >
              {page.label}
            </motion.span>

            {/* Dot */}
            <motion.div
              animate={{
                width: isActive ? 24 : 8,
                height: isActive ? 8 : 8,
                backgroundColor: isActive
                  ? "#1B6FD8"
                  : isDark
                  ? "rgba(255,255,255,0.3)"
                  : "rgba(10,47,107,0.3)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="rounded-full flex-shrink-0"
            />
          </button>
        );
      })}
    </nav>
  );
}
