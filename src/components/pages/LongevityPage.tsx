"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface LongevityPageProps {
  goToPage: (n: number) => void;
  totalPages?: number;
}

const partnerGroups = [
  {
    title: "Premium Longevity Diagnostics",
    partners: ["Fountain Life", "BioPeak"],
    color: "from-[#1B6FD8]/20 to-transparent",
  },
  {
    title: "Regenerative & Cellular Medicine",
    partners: ["Celularity", "AiVita", "Immunis"],
    color: "from-[#0F6E56]/20 to-transparent",
  },
  {
    title: "Brain & Cognitive Longevity",
    partners: ["Openwater", "Lucidify", "GHX"],
    color: "from-[#BA7517]/20 to-transparent",
  },
];

export default function LongevityPage({ goToPage }: LongevityPageProps) {
  void goToPage;
  return (
    <div className="relative h-full overflow-hidden">
      {/* Background */}
      <Image
        src="/Longevity%20%26%20Healthspan%20Ecosystem.png"
        alt="Longevity Ecosystem"
        fill
        className="object-cover z-0"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A2F6B]/80 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-between px-8 md:px-16 py-10">
        {/* Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#B5D4F4] text-xs font-bold uppercase tracking-widest mb-3 block">
            Longevity & Healthspan
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-3">
            The SWFL Longevity Hub
          </h2>
          <p className="text-[#B5D4F4] text-lg max-w-xl">
            A world-class longevity ecosystem in Southwest Florida.
          </p>
        </motion.div>

        {/* Partner cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {partnerGroups.map((group) => (
            <div
              key={group.title}
              className={`bg-white/10 border border-white/20 rounded-2xl p-6 bg-gradient-to-b ${group.color}`}
            >
              <h3 className="text-white font-semibold text-sm mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.partners.map((p) => (
                  <span
                    key={p}
                    className="bg-white/10 border border-white/20 text-[#B5D4F4] text-xs px-3 py-1 rounded-full"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 bg-white/10 border border-white/20 rounded-xl px-6 py-3"
        >
          <p className="text-[#B5D4F4] text-xs font-medium">
            SWFL: 1 in 4 residents over 65 by 2030
          </p>
          <p className="text-[#B5D4F4] text-xs">
            Network founded by Peter Diamandis, Tony Robbins &amp; Dr. Arvinder Soin
          </p>
        </motion.div>
      </div>
    </div>
  );
}
