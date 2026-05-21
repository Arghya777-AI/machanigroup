"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const dots = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 97}%`,
  top: `${(i * 53 + 7) % 93}%`,
  size: 3 + (i % 5),
  dur: `${8 + (i % 7)}s`,
  delay: `${(i * 0.4) % 6}s`,
}));

const stats = [
  { value: "1 in 4", label: "SWFL residents will be over 65 by 2030" },
  { value: "200,000+", label: "US nursing shortage projected nationally" },
  { value: "98.48%", label: "NCLEX first-time pass rate — Marieb College" },
];

const subscribe = () => () => {};

export default function Hero() {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A2F6B] via-[#0c2255] to-[#040d1a] pt-16"
    >
      {/* Animated dots */}
      {mounted &&
        dots.map((d) => (
          <div
            key={d.id}
            className="particle absolute rounded-full bg-[#B5D4F4] pointer-events-none"
            style={{
              left: d.left,
              top: d.top,
              width: d.size,
              height: d.size,
              animationDuration: d.dur,
              animationDelay: d.delay,
            }}
          />
        ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="flex flex-col items-center gap-6"
        >
          {/* FGCU Logo */}
          <div className="relative w-16 h-16 mb-2">
            <Image src="/FGCU.png" alt="FGCU" fill sizes="64px" className="object-contain" />
          </div>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-[#B5D4F4] text-xs font-semibold px-5 py-2 rounded-full tracking-wide">
            FGCU&nbsp;&times;&nbsp;The Next New AI Venture Studio
          </span>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            The AI Innovation<br className="hidden sm:block" /> Center at FGCU
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-[#B5D4F4] leading-relaxed max-w-2xl">
            Where healthcare, AI, robotics, and longevity converge — a next-generation venture hub at Marieb College of Health &amp; Human Services in Southwest Florida.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              onClick={() => document.getElementById("ecosystem")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#1B6FD8] hover:bg-[#1557b0] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-sm shadow-lg shadow-[#1B6FD8]/30 cursor-pointer"
            >
              Explore the Center
            </button>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-white/30 hover:border-white/60 hover:bg-white/5 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-sm cursor-pointer"
            >
              Partner With Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="absolute bottom-10 inset-x-0 px-4 sm:px-6 z-10"
      >
        <div className="max-w-3xl mx-auto bg-white/6 backdrop-blur-sm border border-white/12 rounded-2xl grid grid-cols-3 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col items-center py-5 px-4 text-center">
              <span className="text-2xl sm:text-3xl font-bold text-white">{s.value}</span>
              <span className="text-[11px] sm:text-xs text-[#B5D4F4] mt-1.5 leading-tight max-w-[120px]">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] text-white/25 tracking-widest uppercase">scroll</span>
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" className="text-white/25 animate-bounce">
          <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
