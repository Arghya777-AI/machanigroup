"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const domains = [
  {
    label: "Humanoid Robotics",
    desc: "RIA & CC companion robots for clinical simulation, dementia care, and healthcare education.",
    href: "#robotics",
    color: "bg-[#1B6FD8]",
  },
  {
    label: "Longevity & Healthspan",
    desc: "The SWFL longevity hub — Fountain Life, BioPeak, regenerative medicine, and brain science.",
    href: "#longevity",
    color: "bg-[#0F6E56]",
  },
  {
    label: "AR / VR Training",
    desc: "Immersive clinical simulation — code blue, dementia, IDD interaction — powered by Next Defence.",
    href: "#arvr",
    color: "bg-[#6C3FC5]",
  },
  {
    label: "AI Services & Agents",
    desc: "Enterprise AI data services and autonomous agent frameworks built for healthcare with IndiVillage.",
    href: "#ai-services",
    color: "bg-[#D97706]",
  },
  {
    label: "Computer Vision",
    desc: "Industrial-grade vision intelligence for construction, manufacturing, and clinical environments.",
    href: "#vision",
    color: "bg-[#DC2626]",
  },
  {
    label: "Drones & Electric Mobility",
    desc: "VTOL + SUVI solar UAV platforms and Tresa EV trucks for aerial intelligence and logistics.",
    href: "#drones",
    color: "bg-[#0891B2]",
  },
];

export default function Ecosystem() {
  const goto = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="ecosystem" className="bg-white py-28 md:py-36 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#1B6FD8] mb-4 block">
            FGCU AI Innovation Center
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#0A2F6B] leading-[1.1] mb-6">
            The Innovation Ecosystem
          </h2>
          <p className="text-lg text-[#374151] leading-relaxed max-w-2xl mx-auto">
            Six interconnected domains — all built around a foundation of Artificial Intelligence and anchored at Florida Gulf Coast University.
          </p>
        </motion.div>

        {/* Ecosystem diagram */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative w-full rounded-3xl overflow-hidden border border-[#E2EBF5] mb-16 md:mb-20"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src="/Slide%205.png"
            alt="FGCU AI Innovation Ecosystem"
            fill
            className="object-contain bg-white"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 95vw, 1280px"
            priority
          />
        </motion.div>

        {/* Domain cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {domains.map((d, i) => (
            <motion.button
              key={d.label}
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              onClick={() => goto(d.href)}
              className="group text-left bg-white border border-[#E2EBF5] rounded-2xl p-6 hover:shadow-lg hover:border-[#B5D4F4] transition-all duration-300 cursor-pointer"
            >
              <div className={`w-2 h-2 rounded-full ${d.color} mb-4`} />
              <h3 className="font-bold text-[#0A2F6B] text-base mb-2 group-hover:text-[#1B6FD8] transition-colors">
                {d.label}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{d.desc}</p>
              <span className="text-[#1B6FD8] text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
