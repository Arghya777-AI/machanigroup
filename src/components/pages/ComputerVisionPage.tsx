"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface ComputerVisionPageProps {
  goToPage: (n: number) => void;
  totalPages?: number;
}

const useCases = [
  { title: "Construction Site Intelligence", desc: "Automated progress monitoring, safety compliance, and structural deviation detection" },
  { title: "Precision Manufacturing", desc: "Lithic-Pro machine vision for sub-millimeter defect detection at production speed" },
  { title: "Healthcare & Clinical Vision", desc: "Wound assessment, mobility monitoring, and patient environment surveillance" },
];

const stats = [
  { stat: "10x", label: "Faster infrastructure inspection" },
  { stat: "24/7", label: "Autonomous monitoring" },
  { stat: "100+", label: "Students/yr trained in spatial AI" },
];

export default function ComputerVisionPage({ goToPage }: ComputerVisionPageProps) {
  void goToPage;
  return (
    <div className="relative h-full overflow-hidden">
      {/* Background */}
      <Image
        src="/inkers%20computer%20vision%20wall.png"
        alt="Computer Vision Wall"
        fill
        className="object-cover z-0"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A2F6B]/75 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-between px-8 md:px-16 py-10">
        {/* Top row */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6"
        >
          <div>
            <div className="relative w-24 h-10 mb-4">
              <Image
                src="/INKERS.png"
                alt="INKERS"
                fill
                className="object-contain object-left"
                sizes="96px"
              />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Computer Vision
            </h2>
          </div>

          <div className="flex flex-row md:flex-col gap-3">
            {stats.map((s) => (
              <div
                key={s.stat}
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-center"
              >
                <span className="text-xl font-bold text-white block">{s.stat}</span>
                <span className="text-[#B5D4F4] text-xs">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom: Use case cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-white font-bold text-sm mb-2">{uc.title}</h3>
              <p className="text-[#B5D4F4] text-xs leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
