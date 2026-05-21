"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const capabilities = [
  {
    title: "Computer Vision Wall",
    description: "Large-scale multi-camera visual intelligence array for real-time scene understanding, object detection, and spatial analysis.",
  },
  {
    title: "Construction Site Intelligence",
    description: "Automated progress monitoring, safety compliance detection, worker activity analysis, and deviation alerts across active construction sites.",
  },
  {
    title: "Precision Manufacturing Vision",
    description: "Lithic-Pro machine vision for defect detection, quality control, and process verification in industrial manufacturing environments.",
  },
  {
    title: "Healthcare & Clinical Vision",
    description: "Wound assessment, mobility monitoring, patient environment surveillance, and clinical workflow analysis using computer vision.",
  },
];

const impactStats = [
  { value: "10x", label: "Faster defect detection vs. manual inspection" },
  { value: "95%+", label: "Detection accuracy across trained models" },
  { value: "24/7", label: "Autonomous monitoring capability" },
];

const useCases = [
  {
    title: "Smart Campus Safety",
    description: "Real-time detection of safety hazards, unauthorized access, and emergency situations across FGCU campus facilities.",
  },
  {
    title: "Clinical Environment Monitoring",
    description: "Hands-free monitoring of patient mobility, fall risk indicators, and care delivery compliance in Marieb simulation labs.",
  },
  {
    title: "Construction & Infrastructure",
    description: "Automated site tracking, weekly deviation reports, and structural inspection for SWFL's rapidly growing infrastructure.",
  },
  {
    title: "Student Research Platform",
    description: "Hands-on computer vision dataset creation, model training, and deployment projects for computing and engineering students.",
  },
];

export default function ComputerVision() {
  return (
    <section id="computer-vision" className="bg-[#F9FAFB] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="In partnership with Inkers"
          badgeVariant="blue"
          title="Computer Vision"
          titleClassName="text-[#0A2F6B]"
          subtitle="Industrial-grade computer vision intelligence for construction, manufacturing, healthcare, and campus environments."
          subtitleClassName="text-[#374151]"
        />

        {/* Computer Vision Wall hero */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-24 h-10">
                  <Image src="/INKERS.png" alt="Inkers" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2F6B] mb-6">Vision Intelligence Platform</h3>
              <div className="space-y-4">
                {capabilities.map((cap) => (
                  <div key={cap.title} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#1B6FD8] mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-[#0A2F6B] text-sm">{cap.title}</div>
                      <div className="text-[#374151] text-sm leading-relaxed">{cap.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3 mt-8">
                {impactStats.map((stat) => (
                  <div key={stat.value} className="bg-[#0A2F6B] rounded-xl p-4 text-center">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-[10px] text-[#B5D4F4] mt-1 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#B5D4F4]" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/inkers%20computer%20vision%20wall.png"
                alt="Inkers Computer Vision Wall"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Construction Intelligence */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#B5D4F4]" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/inkers%20contruction%20intelligence.png"
                alt="Inkers Construction Intelligence"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0A2F6B] mb-6">Construction Site Intelligence</h3>
              <p className="text-[#374151] text-sm mb-6 leading-relaxed">
                Automated visual intelligence for active construction sites — tracking progress against plan, detecting safety violations, and surfacing deviation alerts before they become costly rework.
              </p>
              <div className="space-y-3">
                {[
                  "Automated weekly progress reports against BIM model",
                  "PPE and safety compliance detection in real time",
                  "Worker activity and zone access monitoring",
                  "Structural deviation and material waste analysis",
                  "Multi-camera integration across large job sites",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[#374151] text-sm">
                    <span className="text-[#1B6FD8] font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lithic Pro Machine */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#0A2F6B] mb-6">Precision Manufacturing Vision</h3>
              <p className="text-[#374151] text-sm mb-6 leading-relaxed">
                Lithic-Pro machine vision platform for high-throughput industrial quality control — bringing sub-millimeter defect detection to production lines at scale.
              </p>
              <div className="space-y-3">
                {[
                  "Sub-millimeter defect detection at production speed",
                  "Real-time quality scoring and line stoppage triggers",
                  "Defect classification and root-cause traceability",
                  "Integration with existing PLC and SCADA systems",
                  "Adaptive model retraining from production feedback",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[#374151] text-sm">
                    <span className="text-[#1B6FD8] font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#B5D4F4]" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/lithic%20pro%20machine.png"
                alt="Lithic Pro Precision Machine Vision"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </motion.div>

        {/* Use cases at FGCU */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
        >
          <h3 className="text-2xl font-bold text-[#0A2F6B] mb-6 text-center">Use Cases at FGCU</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-white border border-[#B5D4F4] rounded-xl p-5 hover:border-[#1B6FD8] hover:shadow-md transition-all duration-200">
                <h4 className="font-bold text-[#0A2F6B] text-sm mb-2">{uc.title}</h4>
                <p className="text-[#374151] text-sm leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
