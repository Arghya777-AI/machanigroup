"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface ARVRPageProps {
  goToPage: (n: number) => void;
  totalPages?: number;
}

const capabilities = [
  "High-fidelity VR: code blue, dementia de-escalation, childbirth, IDD interaction",
  "AR overlays on physical training manikins for procedure rehearsal",
  "Nurse + PT + physician multi-disciplinary collaborative scenarios",
  "Session recording, gaze tracking, and competency scoring for accreditation",
  "FGCU-owned scenario library co-created with clinical faculty",
];

export default function ARVRPage({ goToPage }: ARVRPageProps) {
  void goToPage;
  return (
    <div className="h-full flex flex-col md:flex-row bg-white overflow-hidden">
      {/* Left: Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="md:w-[55%] relative overflow-hidden bg-[#f5f7fa] min-h-[300px] flex-shrink-0"
      >
        <Image
          src="/AR%20_%20VR%20Training%20Simulator.png"
          alt="AR / VR Training Simulator"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="md:w-[45%] flex flex-col justify-center px-8 md:px-14 py-10 md:py-0"
      >
        <span className="inline-block bg-[#E6F1FB] text-[#0A2F6B] text-xs font-bold px-3 py-1 rounded-full mb-4">
          Powered by Next Defence
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F6B] mb-4 leading-tight">
          AR / VR Training
        </h2>
        <p className="text-[#374151] mb-8 leading-relaxed">
          Immersive clinical simulation for healthcare education — risk-free,
          repeatable, and available 24/7.
        </p>

        <ul className="space-y-2 mb-8">
          {capabilities.map((cap) => (
            <li key={cap} className="flex items-start gap-3 text-[#374151] text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1B6FD8] flex-shrink-0" />
              {cap}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-3 gap-3">
          {[
            { stat: "24/7", label: "Simulation Access" },
            { stat: "Risk Free", label: "Repetition" },
            { stat: "5+", label: "Disciplines" },
          ].map((item) => (
            <div
              key={item.stat}
              className="bg-[#F9FAFB] border border-[#B5D4F4] rounded-xl p-3 flex flex-col items-center text-center"
            >
              <span className="text-lg font-bold text-[#0A2F6B]">{item.stat}</span>
              <span className="text-[10px] text-[#374151] leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
