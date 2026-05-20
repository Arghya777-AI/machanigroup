"use client";

import { motion } from "framer-motion";
import { ChevronRight, CheckCircle, Share2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureGrid from "@/components/ui/FeatureGrid";

const pipeline = ["Idea", "Discover", "Build", "Validate", "Launch"];

const roboticsFellowsGrid = [
  { title: "Cohort Size", description: "12–15 students per cohort, selected through competitive application and faculty recommendation." },
  { title: "Disciplines", description: "Open to nursing, pre-medicine, engineering, computer science, and health informatics students." },
  { title: "Structure", description: "2-semester program with weekly lab sessions, research mentorship, industry site visits, and capstone project." },
  { title: "Outcome", description: "Published research, industry internship placement, digital badge, and priority consideration for graduate programs." },
];

const bsnRotationPoints = [
  "Week 1–2: Introduction to humanoid robotics, hands-on RIA and CC programming with clinical scenarios",
  "Week 3: AI diagnostic tools lab — clinical NLP, imaging analysis, and decision support workflow integration",
  "Week 4: Capstone simulation — full patient encounter with AI and robotic tools, peer assessment, faculty debrief",
];

const badgeCriteria = [
  "Complete 40-hour Robotics in Care lab curriculum",
  "Pass written competency assessment (80%+ required)",
  "Successfully complete 3 supervised clinical robot scenarios",
  "Submit reflection portfolio on AI ethics and patient safety",
  "Receive faculty endorsement from program director",
];

const facultyPoints = [
  "Dedicated AI research computing cluster access for computational research projects",
  "Co-investigator opportunities on externally-funded AI healthcare research grants",
  "Curriculum development stipends for faculty integrating AI into existing courses",
  "Industry connection network — direct introductions to partner company R&D leaders",
  "Annual FGCU AI Innovation Symposium — publication and presentation opportunities",
];

export default function StudentsHub() {
  return (
    <section id="students" className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Students & Faculty Hub"
          titleClassName="text-[#0A2F6B]"
          subtitle="Pathways from curiosity to career — structured programs for students and faculty to engage with AI, robotics, and longevity science."
          subtitleClassName="text-[#374151]"
        />

        {/* 9.1 Venture Pathways */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-[#0A2F6B] mb-6">9.1 Venture Pathways</h3>
          <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
            {pipeline.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="bg-[#0A2F6B] text-white text-sm font-semibold px-4 py-2 rounded-full">
                  {step}
                </span>
                {i < pipeline.length - 1 && (
                  <ChevronRight size={18} className="text-[#9CA3AF]" />
                )}
              </div>
            ))}
          </div>
          <p className="text-[#374151] text-sm mt-4 leading-relaxed">
            Every student at FGCU has a pathway from an initial idea through to a validated, launched venture or research publication. Our structured program connects each stage with mentors, funding, and industry partners.
          </p>
        </motion.div>

        {/* 9.2 Robotics Fellows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-[#0A2F6B] mb-6">9.2 Robotics Fellows Program</h3>
          <FeatureGrid items={roboticsFellowsGrid} />
        </motion.div>

        {/* 9.3 BSN 4-Week Rotation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-[#0A2F6B] mb-4">9.3 BSN 4-Week AI Rotation</h3>
          <div className="bg-[#E1F5EE] rounded-xl p-6">
            <ul className="space-y-4">
              {bsnRotationPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-[#374151] text-sm">
                  <span className="text-[#0F6E56] font-bold mt-0.5 text-base">{i + 1}.</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* 9.4 Digital Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-[#0A2F6B] mb-6">9.4 Digital Badge: Robotics in Care</h3>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Hexagonal badge */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div
                className="w-36 h-40 flex items-center justify-center relative"
                style={{
                  clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                  background: "#0A2F6B",
                  outline: "4px solid #BA7517",
                }}
              >
                <div className="text-center px-3">
                  <div className="text-[#BA7517] text-[10px] font-bold uppercase tracking-widest mb-1">FGCU</div>
                  <div className="text-white text-[11px] font-bold leading-tight">Robotics</div>
                  <div className="text-white text-[11px] font-bold leading-tight">in Care</div>
                  <div className="text-[#B5D4F4] text-[9px] mt-1">Certified</div>
                </div>
              </div>
              <button className="mt-4 flex items-center gap-2 bg-[#1B6FD8] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#1558b0] transition-colors">
                <Share2 size={12} />
                Share on LinkedIn
              </button>
            </div>

            {/* Badge criteria */}
            <div className="flex-1">
              <h4 className="font-semibold text-[#0A2F6B] mb-3">Earn this badge by completing:</h4>
              <ul className="space-y-2">
                {badgeCriteria.map((criterion, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <CheckCircle size={16} className="text-[#0F6E56] mt-0.5 flex-shrink-0" />
                    <span>{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 9.5 Faculty Research Enablement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-[#0A2F6B] mb-4">9.5 Faculty Research Enablement</h3>
          <div className="bg-[#F9FAFB] border border-[#B5D4F4] rounded-xl p-6">
            <ul className="space-y-3">
              {facultyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                  <span className="text-[#1B6FD8] font-bold mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
