"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import CaseStudyBlock from "@/components/ui/CaseStudyBlock";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const capabilities = [
  {
    title: "High-Fidelity VR Scenarios",
    description: "Code blue, dementia de-escalation, childbirth, IDD interaction, athletic-training intake — photo-realistic patient encounters.",
  },
  {
    title: "AR Overlays on Physical Manikins",
    description: "Augmented reality overlays on physical training mannequins for procedure rehearsal — bridging digital guidance with hands-on practice.",
  },
  {
    title: "Multi-Disciplinary Team Scenarios",
    description: "Nurse + PT + physician collaborative scenarios for interprofessional education and team-based care training.",
  },
  {
    title: "Feedback & Competency Analytics",
    description: "Session recording, gaze tracking, decision-tree analysis, and competency scoring for faculty and accreditation reporting.",
  },
  {
    title: "Faculty-Authored Scenario Library",
    description: "FGCU-owned scenario library co-created with clinical faculty — continuously expanded and updated.",
  },
];

const useCases = [
  {
    title: "Dementia & Alzheimer's Empathy Simulation",
    description: "Immersive dementia training, developed with Baker Senior Center, to help students experience and respond to the patient's world.",
  },
  {
    title: "Combined with RIA & CC",
    description: "VR simulates the environment while RIA and CC act as the patient. Students train against an emotionally responsive, embodied AI patient inside a fully immersive environment.",
  },
  {
    title: "IDD Interaction Training",
    description: "Predictable, repeatable practice for students preparing to work with autism and intellectual disability populations.",
  },
];

const impactStats = [
  { value: "24/7", label: "Immersive Simulation Access" },
  { value: "Risk Free", label: "Clinical Scenario Repetition" },
  { value: "5+", label: "Shared Healthcare Training Platform" },
];

export default function ImmersiveTech() {
  return (
    <section id="arvr" className="bg-white py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Powered by Next Defence"
          badgeVariant="blue"
          title="AR / VR Training Simulator"
          titleClassName="text-[#0A2F6B]"
          subtitle="Immersive training platforms that simulate real-world clinical and care scenarios."
          subtitleClassName="text-[#374151]"
        />

        {/* Hero image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16 relative w-full rounded-2xl overflow-hidden border border-[#B5D4F4]"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src="/AR%20_%20VR%20Training%20Simulator.png"
            alt="AR/VR Clinical Training Simulator"
            fill
            className="object-contain bg-[#f8f9fa]"
            sizes="1200px"
            priority
          />
        </motion.div>

        {/* Platform capabilities + use cases */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Platform capabilities */}
            <div>
              <h3 className="text-xl font-bold text-[#0A2F6B] mb-6">Platform Capabilities</h3>
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
            </div>

            {/* Use cases */}
            <div>
              <h3 className="text-xl font-bold text-[#0A2F6B] mb-6">Use Cases at FGCU</h3>
              <div className="space-y-4">
                {useCases.map((uc) => (
                  <div key={uc.title} className="bg-[#E6F1FB] rounded-xl p-5">
                    <h4 className="font-bold text-[#0A2F6B] text-sm mb-1">{uc.title}</h4>
                    <p className="text-[#374151] text-sm leading-relaxed">{uc.description}</p>
                  </div>
                ))}
                {/* Impact stats */}
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {impactStats.map((stat) => (
                    <div key={stat.value} className="bg-[#0A2F6B] rounded-xl p-4 text-center">
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-[10px] text-[#B5D4F4] mt-1 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Next Defence Platform */}
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
                src="/next%20defence.png"
                alt="Next Defence technology platform"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0A2F6B] mb-4">Powered by Next Defence</h3>
              <p className="text-[#374151] text-sm leading-relaxed mb-6">
                Next Defence brings defence-grade simulation and immersive technology expertise to FGCU — creating training environments that mirror real-world pressure, complexity, and consequence.
              </p>
              <div className="space-y-3">
                {[
                  "Proven simulation platforms adapted for clinical education",
                  "High-fidelity mission and scenario authoring tools",
                  "Multi-user networked training environments",
                  "Real-time performance capture and after-action review",
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

        {/* Case Study */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
        >
          <CaseStudyBlock
            title="AR/VR Simulation at Stanford Neurosurgery"
            image="/AR_VR%20Simulation%20at%20Stanford%20Neurosurgery.png"
            imageAlt="Stanford Neurosurgery AR/VR simulation case study"
            context="In 2016, Stanford Department of Neurosurgery opened the Neurosurgical Simulation and Virtual Reality Center — the first institution in the greater Pacific Northwest to use patient-specific 3D VR technology across the neurosurgery clinic, operating room, and classroom."
            solution="Stanford partnered with Surgical Theater to deploy patient-specific 360° VR. Workflow: 2D images from MRI and CT scans fused via advanced software into 3D reconstructions; surgeons and residents fly through patient anatomy in VR headsets."
            impact="1,100+ Stanford neurosurgery patients treated using Surgical Theater 360 VR — from clinic consultation through pre-op planning and intraoperative navigation. First functional neurosurgery and spine clinic in the world to use patient-specific 360° VR for patient engagement."
            source="Source: Stanford VR Neurosurgery"
          />
        </motion.div>
      </div>
    </section>
  );
}
