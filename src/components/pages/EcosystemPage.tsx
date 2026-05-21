"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface EcosystemPageProps {
  goToPage: (n: number) => void;
  totalPages?: number;
}

const domains = [
  { label: "Humanoid Robotics", page: 2 },
  { label: "Longevity", page: 3 },
  { label: "AR / VR", page: 4 },
  { label: "AI Services", page: 5 },
  { label: "Computer Vision", page: 6 },
  { label: "Drones", page: 7 },
];

export default function EcosystemPage({ goToPage }: EcosystemPageProps) {
  return (
    <div className="h-full flex flex-col md:flex-row bg-[#061a3e] overflow-hidden">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="md:w-[45%] flex flex-col justify-center px-8 md:px-16 py-10 md:py-0"
      >
        <span className="text-[#1B6FD8] text-xs font-bold uppercase tracking-widest mb-4">
          FGCU AI Center
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          The AI Innovation Ecosystem
        </h2>
        <p className="text-[#B5D4F4] text-lg mb-8 leading-relaxed">
          Six interconnected innovation domains built around AI, healthcare, and
          the future of Southwest Florida.
        </p>

        <div className="grid grid-cols-2 gap-3">
          {domains.map((d) => (
            <button
              key={d.label}
              onClick={() => goToPage(d.page)}
              className="bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-white text-sm font-medium hover:bg-[#1B6FD8] hover:border-[#1B6FD8] transition-all duration-200 text-left cursor-pointer"
            >
              {d.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-[55%] relative flex-1 min-h-[300px] bg-[#061a3e]"
      >
        <Image
          src="/Slide%205.png"
          alt="AI Innovation Ecosystem"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
      </motion.div>
    </div>
  );
}
