"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import CaseStudyBlock from "@/components/ui/CaseStudyBlock";

const riaSpecs = [
  {
    title: "Embodied Intelligence",
    description: "Multi-Modal LLM | Health Monitoring | Silicon frubber actuated face skin",
  },
  {
    title: "Natural Human Interaction",
    description: "70+ pre-set facial expressions and 50+ synchronized gestures",
  },
  {
    title: "Multilingual Conversations",
    description: "Custom audio tracking & localization array | 10+ conversation etiquettes",
  },
  {
    title: "Sensory Intelligence",
    description: "Thermal camera | Wide-angle vision | Audio tracking | Face recognition",
  },
];

const ccSpecs = [
  {
    title: "Compact Intelligence",
    description: "Expressive servo-driven face | 5\" touchscreen | 4-mic array | Dual speakers",
  },
  {
    title: "Perception",
    description: "1080P camera | Human presence detection | Face recognition",
  },
  {
    title: "Configurable AI Brain",
    description: "Apps & analytics dashboard | Real-time insights delivery",
  },
  {
    title: "Health Monitoring",
    description: "Live vitals: heart rate, BP, oxygen levels | Mobility & gait pattern tracking | Sleep & activity rhythms",
  },
];

const riaTabs = ["Dementia & Cognitive Engagement", "Clinical Simulation", "Campus Ambassador"] as const;

const riaTabContent: Record<typeof riaTabs[number], { heading: string; body: string }> = {
  "Dementia & Cognitive Engagement": {
    heading: "Dementia & Cognitive Engagement",
    body: "Daily reminiscence, music cues, and cognitive routines can support consented dementia research with Shady Rest.",
  },
  "Clinical Simulation": {
    heading: "Standardized Patient for Clinical Simulation",
    body: "Emotionally responsive patient simulations for dementia, IDD, end-of-life, and clinical intake training.",
  },
  "Campus Ambassador": {
    heading: "FGCU College Ambassador & Intelligent Host",
    body: "Greets visitors, donors, and prospective students. Showcases FGCU's emerging clinical-AI capability.",
  },
};

const ccUseCases = [
  {
    title: "Fall-Risk Detection Pilot",
    description: "Multi-sensor gait tracking may identify mobility changes that indicate rising fall risk — for senior care settings.",
  },
  {
    title: "Nutrition Tracking for Healthspan Research",
    description: "Learns residents' food preferences through natural conversation. Data could support Shady Rest's Positive Aging / Blue Zones research framework.",
  },
  {
    title: "Caregiver Training Companion",
    description: "Nursing, gerontology, and social-work students train with CC scenarios before stepping onto a real floor.",
  },
  {
    title: "Emergency Support",
    description: "Proactive preparedness during hurricanes, power outages, and medical emergencies.",
  },
];

const impactStats = [
  { value: "1 in 4", label: "SWFL residents will be over 65 years by 2030" },
  { value: "200,000+", label: "Nurses projected shortfall in the US" },
  { value: "1,000+", label: "Simulated patient interactions" },
];

const studentPrograms = [
  {
    title: "Robotics Fellows Program",
    description:
      "A year-long cohort of 12–15 cross-disciplinary students (Nursing, Gerontology, PT, OT, Computing, Engineering) embedded with the Machani team.",
  },
  {
    title: "Hands-On Curriculum",
    description:
      "A 4-week applied rotation through the Center for every Bachelor of Science in Nursing student. Students design, test, and present a care scenario at a senior care facility.",
  },
  {
    title: "\"Robotics in Care\" Digital Badge",
    description:
      "A co-branded robotics care credential that helps students signal hands-on exposure to clinical, senior-care, and health-tech roles.",
  },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function HumanoidRobotics() {
  const [activeTab, setActiveTab] = useState<typeof riaTabs[number]>("Dementia & Cognitive Engagement");

  return (
    <section id="robotics" className="bg-white py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="In partnership with Machani Robotics since 2018"
          badgeVariant="teal"
          title="Humanoid Robotics"
          titleClassName="text-[#0A2F6B]"
          subtitle="AI-powered robotic companions for clinical simulation, dementia care, and healthcare education."
          subtitleClassName="text-[#374151]"
        />

        {/* RIA — Full Humanoid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[#0A2F6B] text-xs font-bold uppercase tracking-widest">Platform</span>
            <div className="h-px flex-1 bg-[#E6F1FB]" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: specs */}
            <div>
              <h3 className="text-3xl font-bold text-[#0A2F6B] mb-2">RIA</h3>
              <p className="text-[#1B6FD8] font-semibold mb-6 text-sm uppercase tracking-wide">
                AI-Powered Full Humanoid Robot
              </p>
              <div className="space-y-4">
                {riaSpecs.map((spec) => (
                  <div key={spec.title} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#1B6FD8] mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-[#0A2F6B] text-sm">{spec.title}</div>
                      <div className="text-[#374151] text-sm leading-relaxed">{spec.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 inline-block bg-[#E6F1FB] text-[#0A2F6B] text-xs font-semibold px-4 py-2 rounded-full">
                Powered by Machani Robotics
              </div>
            </div>
            {/* Right: RIA image */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#0d1b2a] to-[#1a2940]" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/RIA.png"
                alt="RIA — Full Humanoid Robot by Machani Robotics"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 600px"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* RIA Headshot + Use Cases */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: RIA headshot */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#0d1b2a]" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/RIA%20Headshot.png"
                alt="RIA humanoid robot close-up"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            {/* Right: RIA in Action tabs */}
            <div>
              <h3 className="text-2xl font-bold text-[#0A2F6B] mb-2">RIA in Action</h3>
              <p className="text-[#374151] text-sm mb-6 leading-relaxed">
                Three transformative use cases at FGCU Marieb College
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {riaTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                      activeTab === tab
                        ? "bg-[#0A2F6B] text-white shadow-md"
                        : "bg-[#E6F1FB] text-[#0A2F6B] hover:bg-[#B5D4F4]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="bg-[#F9FAFB] border border-[#B5D4F4] rounded-xl p-6">
                <h4 className="font-bold text-[#0A2F6B] mb-3 text-base">{riaTabContent[activeTab].heading}</h4>
                <p className="text-[#374151] text-sm leading-relaxed">{riaTabContent[activeTab].body}</p>
              </div>
              {/* Impact stats */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {impactStats.map((stat) => (
                  <div key={stat.value} className="bg-[#0A2F6B] rounded-xl p-4 text-center">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-[10px] text-[#B5D4F4] mt-1 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CC — Research Companion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[#0A2F6B] text-xs font-bold uppercase tracking-widest">Compact Platform</span>
            <div className="h-px flex-1 bg-[#E6F1FB]" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: CC Bot image */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#f5f0e8] to-[#ede8dc]" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/CC%20Bot.png"
                alt="CC — Research Companion Robot"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            {/* Right: CC specs */}
            <div>
              <h3 className="text-3xl font-bold text-[#0A2F6B] mb-2">CC</h3>
              <p className="text-[#1B6FD8] font-semibold mb-6 text-sm uppercase tracking-wide">
                Research Companion for Faculty
              </p>
              <div className="space-y-4">
                {ccSpecs.map((spec) => (
                  <div key={spec.title} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#0F6E56] mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-[#0A2F6B] text-sm">{spec.title}</div>
                      <div className="text-[#374151] text-sm leading-relaxed">{spec.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CC Use Cases */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: use case cards */}
            <div>
              <h3 className="text-2xl font-bold text-[#0A2F6B] mb-6">CC: Use Cases at FGCU</h3>
              <div className="space-y-4">
                {ccUseCases.map((uc) => (
                  <div key={uc.title} className="bg-[#F9FAFB] border border-[#B5D4F4] rounded-xl p-5 hover:border-[#1B6FD8] transition-colors">
                    <h4 className="font-bold text-[#0A2F6B] text-sm mb-1">{uc.title}</h4>
                    <p className="text-[#374151] text-sm leading-relaxed">{uc.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: CC use case image */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#B5D4F4]" style={{ aspectRatio: "16/10" }}>
              <Image
                src="/CC%20Bot%20Usecase.png"
                alt="CC Robot use cases at FGCU"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </motion.div>

        {/* Student Engagement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: programs */}
            <div>
              <h3 className="text-2xl font-bold text-[#0A2F6B] mb-2">Student Engagement: Robotics Track</h3>
              <p className="text-[#374151] text-sm mb-6 italic">Where Students Become Builders</p>
              <div className="space-y-4">
                {studentPrograms.map((prog) => (
                  <div key={prog.title} className="bg-white border border-[#B5D4F4] rounded-xl p-5 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-[#0A2F6B] text-sm mb-1">{prog.title}</h4>
                    <p className="text-[#374151] text-sm leading-relaxed">{prog.description}</p>
                  </div>
                ))}
                <p className="text-xs text-[#9CA3AF] italic leading-relaxed mt-4">
                  Marieb already has the highest NCLEX pass rate in the Florida SUS — 98.48% — and the highest SUS employment rate, ~91%.
                </p>
              </div>
            </div>
            {/* Right: student engagement image */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#B5D4F4]" style={{ aspectRatio: "16/10" }}>
              <Image
                src="/Student%20Engagement%20Robotics%20Track.png"
                alt="Students working on robotics at FGCU"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
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
            title="Humanoid Robotics at Carnegie Mellon × Baptist Senior Family"
            image="/Case%20Study%20Humanoid%20Robotics%20at%20Carnegie%20Mellon%20%C3%97%20Baptist%20Senior%20Family.png"
            imageAlt="CMU × Baptist Senior Family robotics case study"
            context="In 2023, Dr. Zackory Erickson's Robotic Caregiving and Human Interaction Lab at Carnegie Mellon University partnered with a senior-living facility to test assistive robotics with real older adults: Baptist Senior Family (a Pittsburgh-based nonprofit)."
            solution="A multi-year embedded research partnership. CMU PhD students bring assistive robots — including the Obi feeding robot and VoicePilot — into resident apartments and community spaces. Residents help students test human-robot interactivity: comfort levels, fear thresholds, response to malfunction."
            impact="CMU PhD students publish co-authored research using resident interaction data. Won the 2025 LeadingAge PA Innovation of the Year Distinguished Service Award, selected from over 400 senior communities statewide."
            source="Source: CMU × Baptist Senior Family Robotics Case Study"
          />
        </motion.div>
      </div>
    </section>
  );
}
