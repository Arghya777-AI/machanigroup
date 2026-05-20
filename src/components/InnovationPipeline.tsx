"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Engineering, clinical, aging-care, and workforce challenges sourced from FGCU faculty, Lee Health, Shell Point.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Students, faculty, and engineering teams prototype AI agents, robotic workflows, simulation scenarios.",
  },
  {
    number: "03",
    title: "Validate",
    description:
      "Solutions tested through simulation labs, research workflows, and controlled pilot environments.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Research publications, healthcare pilots, startup ventures, internships, and industry collaborations.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function InnovationPipeline() {
  return (
    <section className="bg-[#0A2F6B] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="The FGCU Innovation Pipeline"
          titleClassName="text-white"
          subtitleClassName="text-[#B5D4F4]"
          subtitle="From challenge to launch — a structured pathway for AI-driven healthcare innovation"
        />

        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-0 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col md:flex-row items-stretch flex-1 min-w-0">
              <motion.div
                variants={cardVariants}
                className="flex-1 bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors duration-200"
              >
                <div className="text-[#1B6FD8] text-3xl font-bold mb-2">{step.number}</div>
                <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-[#B5D4F4] text-sm leading-relaxed">{step.description}</p>
              </motion.div>

              {/* Arrow between cards */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-3 text-[#1B6FD8]">
                  <ChevronRight size={28} />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
