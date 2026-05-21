"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroPageProps {
  goToPage: (n: number) => void;
  totalPages?: number;
}

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  width: `${4 + Math.random() * 8}px`,
  height: `${4 + Math.random() * 8}px`,
  animationDuration: `${6 + Math.random() * 10}s`,
  animationDelay: `${Math.random() * 5}s`,
}));

export default function HeroPage({ goToPage }: HeroPageProps) {
  return (
    <div className="relative h-full overflow-hidden bg-gradient-to-br from-[#0A2F6B] via-[#0d1f4a] to-[#061a3e] flex flex-col items-center justify-center text-center px-6">
      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.width,
            height: p.height,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative z-10 flex flex-col items-center gap-5 max-w-3xl"
      >
        {/* Logo */}
        <div className="relative w-16 h-16">
          <Image
            src="/FGCU.png"
            alt="FGCU Logo"
            fill
            className="object-contain"
            sizes="64px"
          />
        </div>

        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#B5D4F4] text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
          FGCU × The Next New AI Venture Studio
        </span>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          The AI Innovation Center at FGCU
        </h1>

        {/* Sub */}
        <p className="text-xl text-[#B5D4F4] max-w-xl leading-relaxed">
          Where healthcare, AI, robotics, and longevity converge in Southwest
          Florida.
        </p>

        {/* CTA */}
        <button
          onClick={() => goToPage(1)}
          className="mt-2 bg-[#1B6FD8] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#1557b0] transition-all duration-200 cursor-pointer"
        >
          Explore the Ecosystem →
        </button>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-8 left-6 right-6 z-10"
      >
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur border border-white/20 rounded-2xl grid grid-cols-3 divide-x divide-white/20 px-2">
          {[
            { stat: "1 in 4", label: "SWFL residents 65+ by 2030" },
            { stat: "200,000+", label: "Nurse shortfall projected" },
            { stat: "98.48%", label: "NCLEX pass rate" },
          ].map((item) => (
            <div key={item.stat} className="flex flex-col items-center py-4 px-4 gap-1">
              <span className="text-xl md:text-2xl font-bold text-white">
                {item.stat}
              </span>
              <span className="text-[10px] md:text-xs text-[#B5D4F4] text-center leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
