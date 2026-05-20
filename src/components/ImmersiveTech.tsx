"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureGrid from "@/components/ui/FeatureGrid";
import CaseStudyBlock from "@/components/ui/CaseStudyBlock";

const platformCapabilities = [
  { title: "VR Scenarios", description: "Immersive patient encounters, emergency response drills, and surgical procedure rehearsals in photo-realistic environments." },
  { title: "AR Overlays", description: "Real-time anatomical overlays on physical training mannequins — bridging digital guidance with hands-on practice." },
  { title: "Analytics", description: "Session recording, gaze tracking, decision-tree analysis, and competency scoring for faculty and accreditation reporting." },
  { title: "Combination Mode", description: "Mixed-reality scenarios blending virtual patients with physical simulation labs for maximum realism." },
];

const useCases = [
  "BSN clinical reasoning simulations — IV insertion, patient assessment, emergency triage",
  "Surgical and procedural training without risk to live patients",
  "Dementia care empathy training — experiencing cognitive decline from the patient perspective",
  "Rehabilitation therapy practice for occupational and physical therapy students",
  "Multi-user collaborative scenarios for interprofessional education",
  "Remote clinical education enabling access beyond FGCU's Fort Myers campus",
];

const impactStats = [
  { value: "24/7", label: "Simulation access — no scheduling constraints" },
  { value: "Risk-free", label: "Patient safety guaranteed during training" },
  { value: "5+", label: "Healthcare disciplines served" },
];

export default function ImmersiveTech() {
  return (
    <section id="arvr" className="bg-[#E6F1FB] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Immersive Tech (AR/VR)"
          titleClassName="text-[#0A2F6B]"
          subtitle="Transforming healthcare education through photorealistic simulation, extended reality, and AI-driven feedback."
          subtitleClassName="text-[#374151]"
        />

        {/* Platform capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-[#0A2F6B] mb-6">Platform Capabilities</h3>
          <FeatureGrid items={platformCapabilities} cardClassName="bg-white" />
        </motion.div>

        {/* Use cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-[#0A2F6B] mb-4">Use Cases</h3>
          <div className="bg-white rounded-xl p-6 border border-[#B5D4F4]">
            <ul className="space-y-3">
              {useCases.map((useCase, i) => (
                <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                  <span className="text-[#1B6FD8] font-bold mt-0.5">•</span>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Impact stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {impactStats.map((stat) => (
            <div key={stat.value} className="bg-[#0A2F6B] rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-[#B5D4F4]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Case study */}
        <CaseStudyBlock
          title="Stanford Neurosurgery VR Training Program"
          context="Stanford's neurosurgery department sought to reduce the time junior residents needed before performing live surgical procedures while maintaining patient safety standards and competency benchmarks."
          solution="Deployed VR surgical simulation for 40+ neurosurgical procedures, combined with AI competency scoring that provided objective performance metrics previously unavailable in traditional mentorship models."
          impact="Residents required 31% fewer supervised live procedures before independent clearance. Surgical error rates in simulated environments decreased 67% over the 18-month program. Now standard in Stanford's residency curriculum."
        />
      </div>
    </section>
  );
}
