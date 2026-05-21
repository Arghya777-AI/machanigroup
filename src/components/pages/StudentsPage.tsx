"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface StudentsPageProps {
  goToPage: (n: number) => void;
  totalPages?: number;
}

const programs = [
  {
    title: "Robotics Fellows Program",
    desc: "12–15 students per cohort, 2-semester deep dive into AI and robotics.",
  },
  {
    title: "BSN 4-Week AI Rotation",
    desc: "Hands-on clinical AI training with RIA and CC companion robots.",
  },
  {
    title: "Digital Badge: Robotics in Care",
    desc: "Co-branded credential recognized by partner healthcare systems.",
  },
];

export default function StudentsPage({ goToPage }: StudentsPageProps) {
  void goToPage;
  return (
    <div className="h-full flex flex-col md:flex-row bg-[#0d1b2a] overflow-hidden">
      {/* Left: Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="md:w-1/2 relative overflow-hidden min-h-[280px]"
      >
        <Image
          src="/Student%20Engagement%20Robotics%20Track.png"
          alt="Student Engagement Robotics Track"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d1b2a] to-transparent" />
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="md:w-1/2 flex flex-col justify-center px-8 md:px-14 py-10 md:py-0"
      >
        <span className="text-[#1B6FD8] text-xs font-bold uppercase tracking-widest mb-3">
          Students & Faculty Hub
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Where Students Become Builders
        </h2>

        <div className="space-y-3 mb-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className="bg-white/10 border border-white/20 rounded-xl p-5"
            >
              <h3 className="text-white font-semibold text-sm mb-1">{p.title}</h3>
              <p className="text-[#B5D4F4] text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { stat: "98.48%", label: "NCLEX Pass Rate" },
            { stat: "~91%", label: "Employment Rate" },
          ].map((item) => (
            <div
              key={item.stat}
              className="bg-white/10 border border-white/20 rounded-xl p-3 text-center"
            >
              <span className="text-xl font-bold text-white block">{item.stat}</span>
              <span className="text-[#B5D4F4] text-xs">{item.label}</span>
            </div>
          ))}
        </div>

        <button className="self-start bg-[#1B6FD8] text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#1557b0] transition-all duration-200 cursor-pointer">
          Explore Programs →
        </button>
      </motion.div>
    </div>
  );
}
