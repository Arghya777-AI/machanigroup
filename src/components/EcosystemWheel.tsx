"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

const domains = [
  { name: "Humanoid Robotics", href: "robotics", desc: "RIA & CC companion robots · Machani Robotics since 2018" },
  { name: "Longevity & MedTech", href: "longevity", desc: "SWFL healthspan hub · Fountain Life, BioPeak, biomedical partners" },
  { name: "AR / VR Training", href: "arvr", desc: "Immersive clinical simulation · Powered by Next Defence" },
  { name: "AI Services & Data", href: "ai-services", desc: "Clinical data, NLP, computer vision pipelines · IndiVillage" },
  { name: "AI Agents", href: "ai-services", desc: "Healthcare automation · Janus-powered sandbox" },
  { name: "Drones & Mobility", href: "drones", desc: "Aerial intelligence & EV freight · VTOL + SUVI + Tresa" },
];

export default function EcosystemWheel() {
  const handleClick = (href: string) => {
    const el = document.getElementById(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#E6F1FB] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="The AI Innovation Ecosystem"
          titleClassName="text-[#0A2F6B]"
          subtitleClassName="text-[#374151]"
          subtitle="Six interconnected innovation domains built around a foundation of Artificial Intelligence at FGCU"
        />

        {/* Ecosystem diagram image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 relative w-full rounded-2xl overflow-hidden border border-[#B5D4F4] shadow-lg"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src="/Slide%205.png"
            alt="FGCU AI Innovation Ecosystem"
            fill
            className="object-contain bg-white"
            sizes="1200px"
            priority
          />
        </motion.div>

        {/* Domain cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {domains.map((domain, i) => (
            <motion.button
              key={domain.name}
              onClick={() => handleClick(domain.href)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white border border-[#B5D4F4] rounded-xl p-5 text-left hover:border-[#1B6FD8] hover:shadow-md transition-all duration-200 group"
            >
              <div className="font-bold text-[#0A2F6B] text-sm mb-1.5 group-hover:text-[#1B6FD8] transition-colors">{domain.name}</div>
              <div className="text-[#374151] text-xs leading-relaxed">{domain.desc}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
