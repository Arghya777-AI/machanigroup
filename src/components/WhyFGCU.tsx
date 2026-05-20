"use client";

import { motion } from "framer-motion";
import { Brain, Heart, GraduationCap, Stethoscope } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const cards = [
  {
    icon: Brain,
    title: "AI Reshaping Healthcare",
    description:
      "Care delivery, simulation, research, and student training are becoming AI-enabled. Institutions that embrace this transformation will define the next era of healthcare outcomes.",
  },
  {
    icon: Heart,
    title: "SWFL as Longevity Hub",
    description:
      "Aging demographics create demand for preventive care, dementia support, and workforce innovation. Southwest Florida is at the forefront of this national challenge.",
  },
  {
    icon: GraduationCap,
    title: "FGCU Leading AI-Enabled Education",
    description:
      "Integrating healthcare, AI, robotics, simulation, and longevity into one cohesive ecosystem — training students who graduate ready for an AI-augmented world.",
  },
  {
    icon: Stethoscope,
    title: "Marieb Clinical Foundation",
    description:
      "Strong outcomes, simulation investment, and regional healthcare partnerships position Marieb College as the natural home for this AI innovation initiative.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyFGCU() {
  return (
    <section id="why-fgcu" className="bg-[#F9FAFB] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Why FGCU, Why Now?"
          titleClassName="text-[#0A2F6B]"
          subtitleClassName="text-[#374151]"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="bg-white border border-[#B5D4F4] rounded-xl p-6 hover:border-[#1B6FD8] hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E6F1FB] flex items-center justify-center group-hover:bg-[#1B6FD8]/10 transition-colors">
                    <Icon size={20} className="text-[#1B6FD8]" />
                  </div>
                  <h3 className="font-bold text-[#0A2F6B] text-base">{card.title}</h3>
                </div>
                <p className="text-[#374151] text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
