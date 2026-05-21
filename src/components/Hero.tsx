"use client";

import { motion } from "framer-motion";
import { useSyncExternalStore } from "react";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.floor(Math.random() * 8) + 4,
  left: Math.floor(Math.random() * 95) + "%",
  top: Math.floor(Math.random() * 95) + "%",
  delay: (Math.random() * 8).toFixed(2) + "s",
  duration: (Math.random() * 8 + 6).toFixed(2) + "s",
}));

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stats = [
  { value: "1 in 4", label: "SWFL residents 65+ by 2030" },
  { value: "200,000+", label: "US nurses projected shortfall" },
  { value: "98.48%", label: "Marieb NCLEX pass rate" },
];

const subscribe = () => () => {};

export default function Hero() {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A2F6B] to-[#061a3e] pt-16">
      {/* Particles */}
      {mounted &&
        particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Label chip */}
          <motion.div variants={itemVariants}>
            <span className="inline-block bg-white/10 border border-[#B5D4F4]/40 text-[#B5D4F4] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
              FGCU × The Next New AI Venture Studio
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-5"
          >
            The AI Innovation Center at FGCU
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-[22px] text-[#B5D4F4] font-medium mb-4 max-w-2xl"
          >
            Where healthcare, AI, robotics, and longevity converge in Southwest Florida
          </motion.p>

          {/* Body */}
          <motion.p
            variants={itemVariants}
            className="text-base text-[#9CA3AF] mb-8 max-w-xl"
          >
            A next-generation AI venture hub at Florida Gulf Coast University — Marieb College of Health &amp; Human Services
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-14">
            <button
              onClick={() => handleScroll("why-fgcu")}
              className="bg-[#1B6FD8] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#1558b0] transition-colors duration-200 text-sm"
            >
              Explore the Center
            </button>
            <button
              onClick={() => handleScroll("about")}
              className="border-2 border-white text-white font-semibold px-7 py-3 rounded-full hover:bg-white/10 transition-colors duration-200 text-sm"
            >
              Partner With Us
            </button>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="w-full max-w-3xl"
        >
          <div className="bg-white/8 border border-white/15 rounded-2xl grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col items-center justify-center py-5 px-4 text-center">
                <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-xs md:text-sm text-[#B5D4F4] mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
