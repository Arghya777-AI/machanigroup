"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface RoboticsPageProps {
  goToPage: (n: number) => void;
  totalPages?: number;
}

const riaSpecs = [
  { label: "Embodied Intelligence", value: "Multi-Modal LLM · Health Monitoring · Silicon frubber actuated face skin" },
  { label: "Natural Interaction", value: "70+ facial expressions · 50+ synchronized gestures" },
  { label: "Multilingual", value: "Custom audio tracking & localization · 10+ conversation etiquettes" },
  { label: "Sensory Suite", value: "Thermal camera · Wide-angle vision · Face recognition" },
];

const ccSpecs = [
  { label: "Compact Intelligence", value: "5\" touchscreen · 4-mic array · Dual speakers" },
  { label: "Health Monitoring", value: "Live vitals: heart rate, BP, oxygen · Mobility tracking" },
  { label: "AI Brain", value: "Apps & analytics dashboard · Real-time insights delivery" },
];

export default function RoboticsPage({ }: RoboticsPageProps) {
  return (
    <div className="h-full flex flex-col md:flex-row bg-[#0d1b2a] overflow-hidden">
      {/* Left: RIA image — full height */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="md:w-[38%] relative overflow-hidden flex-shrink-0"
        style={{ minHeight: "220px" }}
      >
        <Image
          src="/RIA.png"
          alt="RIA — Full Humanoid Robot"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 38vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1b2a]/40" />
      </motion.div>

      {/* Right: Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex-1 flex flex-col justify-center px-8 md:px-12 py-8 md:py-6 overflow-y-auto"
      >
        <span className="text-[#1B6FD8] text-xs font-bold uppercase tracking-widest mb-2">
          In partnership with Machani Robotics since 2018
        </span>

        {/* RIA section */}
        <div className="mb-6">
          <div className="flex items-baseline gap-3 mb-1">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-none">RIA</h2>
            <span className="text-[#B5D4F4] text-sm font-medium">AI-Powered Full Humanoid Robot</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
            {riaSpecs.map((s) => (
              <div key={s.label} className="flex gap-2 items-start">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1B6FD8] flex-shrink-0" />
                <div>
                  <span className="text-white text-xs font-semibold">{s.label} — </span>
                  <span className="text-[#B5D4F4] text-xs">{s.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 my-4" />

        {/* CC section */}
        <div className="flex gap-5 items-start">
          <div className="relative w-20 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-[#1a2940]">
            <Image
              src="/CC%20Bot.png"
              alt="CC Research Companion"
              fill
              className="object-contain p-1"
              sizes="80px"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-2 mb-2">
              <h3 className="text-2xl font-bold text-white">CC</h3>
              <span className="text-[#B5D4F4] text-xs font-medium">Research Companion for Faculty</span>
            </div>
            <div className="space-y-1">
              {ccSpecs.map((s) => (
                <div key={s.label} className="flex gap-2 items-start">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[#0F6E56] flex-shrink-0" />
                  <div>
                    <span className="text-white text-xs font-semibold">{s.label} — </span>
                    <span className="text-[#B5D4F4] text-xs">{s.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 divide-x divide-white/10 bg-white/5 rounded-2xl border border-white/10">
          {[
            { stat: "1 in 4", label: "SWFL residents 65+ by 2030" },
            { stat: "200,000+", label: "Projected nurse shortfall" },
            { stat: "1,000+", label: "Simulated patient interactions" },
          ].map((item) => (
            <div key={item.stat} className="flex flex-col items-center py-3 px-4 gap-0.5">
              <span className="text-lg font-bold text-white">{item.stat}</span>
              <span className="text-[10px] text-[#B5D4F4] text-center leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
