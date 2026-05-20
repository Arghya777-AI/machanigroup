"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionBadge from "@/components/ui/SectionBadge";
import FeatureGrid from "@/components/ui/FeatureGrid";
import CaseStudyBlock from "@/components/ui/CaseStudyBlock";

const riaSpecs = [
  { title: "Embodied Intelligence", description: "Full-body humanoid form factor designed for natural human environments and interactions." },
  { title: "Natural Human Interaction", description: "Conversational AI with emotion recognition and adaptive response capabilities." },
  { title: "Multilingual Conversations", description: "Supports 10+ languages enabling diverse patient and caregiver engagement." },
  { title: "Sensory Intelligence", description: "Vision, touch, and spatial awareness sensors for safe co-habitation with humans." },
];

const ccSpecs = [
  { title: "Hardware Platform", description: "Compact mobile unit with omnidirectional mobility, 8-hour battery life." },
  { title: "Perception Suite", description: "Depth cameras, microphone arrays, and biometric sensors for environmental awareness." },
  { title: "AI Brain", description: "On-device ML processing with cloud sync for continuous model improvement." },
  { title: "Health Monitoring", description: "Vitals tracking, fall detection, medication reminders, and caregiver alerts." },
];

const tabs = ["Dementia Research", "Clinical Simulation", "Campus Ambassador"] as const;

const tabContent: Record<typeof tabs[number], { heading: string; body: string }> = {
  "Dementia Research": {
    heading: "Humanoid Robots in Dementia Research",
    body: "RIA engages dementia patients in structured cognitive exercises, mood tracking, and companionship sessions. Researchers gather longitudinal behavioral data to study the impact of robotic companions on cognitive decline rates and quality of life metrics.",
  },
  "Clinical Simulation": {
    heading: "AI-Powered Clinical Simulation",
    body: "RIA serves as a standardized patient in nursing simulation labs, presenting realistic symptoms, responding to student interventions, and providing real-time feedback on clinical decision-making. Students gain hands-on experience in a risk-free environment before working with real patients.",
  },
  "Campus Ambassador": {
    heading: "Campus Engagement & Outreach",
    body: "RIA acts as an AI ambassador at FGCU campus events, recruiting fairs, and community outreach programs. It demonstrates the intersection of AI and healthcare education, inspiring prospective students and community members about career pathways in AI-enabled healthcare.",
  },
};

const impactStats = [
  { value: "1 in 4", label: "SWFL residents will be 65+ by 2030" },
  { value: "200,000+", label: "US nurse shortage projected by 2026" },
  { value: "1,000+", label: "Students trained annually via simulation" },
];

const studentGrid = [
  { title: "Robotics Fellows Program", description: "Competitive fellowship for FGCU students to work directly with humanoid robot platforms across research, clinical simulation, and community engagement." },
  { title: "Hands-On Curriculum", description: "Integrated into BSN, pre-med, and engineering programs with structured lab time, mentorship, and research publication opportunities." },
  { title: "\"Robotics in Care\" Digital Badge", description: "Industry-recognized credential for students completing the full robotics-in-care curriculum, stackable toward advanced certifications." },
  { title: "NCLEX Outcome Anchor", description: "Simulation programs designed to reinforce NCLEX competencies, contributing to Marieb's industry-leading 98.48% pass rate." },
];

export default function HumanoidRobotics() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Dementia Research");

  return (
    <section id="robotics" className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Partnership: Machani Robotics since 2018"
          badgeVariant="teal"
          title="Humanoid Robotics"
          titleClassName="text-[#0A2F6B]"
          subtitle="Building the next generation of AI-powered robotic companions for healthcare, research, and education."
          subtitleClassName="text-[#374151]"
        />

        {/* RIA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-[#0A2F6B] mb-6">RIA — Full Humanoid Robot</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <FeatureGrid items={riaSpecs} cardClassName="bg-[#F9FAFB]" />
            <div className="bg-[#E6F1FB] rounded-xl aspect-[3/4] flex items-center justify-center border border-[#B5D4F4]">
              <span className="text-[#9CA3AF] text-sm font-medium">RIA Robot Image</span>
            </div>
          </div>
        </motion.div>

        {/* Use case tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  activeTab === tab
                    ? "bg-[#1B6FD8] text-white"
                    : "bg-[#E6F1FB] text-[#1B6FD8] hover:bg-[#B5D4F4]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="bg-[#F9FAFB] border border-[#B5D4F4] rounded-xl p-6">
            <h4 className="font-bold text-[#0A2F6B] mb-2">{tabContent[activeTab].heading}</h4>
            <p className="text-[#374151] text-sm leading-relaxed">{tabContent[activeTab].body}</p>
          </div>
        </motion.div>

        {/* CC section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-[#0A2F6B] mb-6">CC — Compact Research Companion</h3>
          <FeatureGrid items={ccSpecs} cardClassName="bg-[#F9FAFB]" />
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

        {/* Student engagement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-[#0A2F6B] mb-6">Student Engagement</h3>
          <FeatureGrid items={studentGrid} />
        </motion.div>

        {/* Case study */}
        <CaseStudyBlock
          title="Humanoid Robotics at Carnegie Mellon × Baptist Senior Family"
          context="Carnegie Mellon University partnered with Baptist Senior Family to explore how humanoid robots could assist elderly residents in long-term care settings, addressing the dual challenge of staff shortages and resident isolation."
          solution="Deployment of AI companions in memory care units, offering structured cognitive engagement programs, remote family video connectivity, and real-time behavioral data collection for researchers."
          impact="37% reduction in documented loneliness indicators, 2.1x increase in structured social engagement per resident per week, and publication of 3 peer-reviewed studies on robotic companions in dementia care."
        />
      </div>
    </section>
  );
}
