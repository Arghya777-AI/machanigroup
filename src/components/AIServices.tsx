"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import CaseStudyBlock from "@/components/ui/CaseStudyBlock";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const aiServicesCapabilities = [
  {
    title: "Clinical & Care-Environment Data Collection",
    description: "Structured and unstructured healthcare data collection from EHR systems, clinical notes, imaging, and wearable devices.",
  },
  {
    title: "Medical Image, Video & Audio Annotation",
    description: "High-quality labeled datasets for computer vision models in radiology, pathology, and clinical video analysis.",
  },
  {
    title: "Natural Language Processing",
    description: "NLP for clinical notes & research transcripts — documentation reduction, diagnostic coding, and literature review automation.",
  },
  {
    title: "Computer Vision for Clinical Workflows",
    description: "Computer vision solutions tuned for clinical workflows — wound assessment, mobility monitoring, real-time clinical environment surveillance.",
  },
  {
    title: "Research Data Cataloging & Labeling Pipelines",
    description: "End-to-end MLOps pipelines from data ingestion through model training, validation, deployment, and monitoring.",
  },
];

const transformationItems = [
  {
    title: "Marieb Research Data Platform",
    description: "A proposed research data backbone across approved FGCU healthcare partner workflows, built to reduce admin friction and accelerate faculty studies.",
  },
  {
    title: "Clinical Placement Optimization",
    description: "Improve student-supervisor and Lee Health unit matching at scale.",
  },
  {
    title: "Dean's AI Co-Pilot",
    description: "A private AI co-pilot for Marieb leadership — helping convert documents, history, and partnerships into grant drafts, leadership briefs, partnership notes, and donor follow-ups.",
  },
  {
    title: "Predictive Student Success",
    description: "Predictive student-support models that flag risk early and support early intervention — helping protect strong licensure and employment outcomes.",
  },
];

const agentsImpact = [
  {
    title: "Real-time Clinical & Care Decisioning",
    description: "Agents review RIA + CC streams, surface risk signals, and recommend staff-reviewed interventions without waiting for the next shift.",
  },
  {
    title: "Operational Automation",
    description: "Clinical-placement scheduling, accreditation paperwork, scholarship matching, donor reporting — automate routine workflows with human-in-the-loop.",
  },
  {
    title: "Failure Reduction Before Patients Are Even Involved",
    description: "Simulation-driven testing helps validate agent behavior before patient exposure with dementia residents, IDD individuals, and post-surgical patients.",
  },
];

export default function AIServices() {
  return (
    <section id="ai-services" className="bg-[#F9FAFB] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="In partnership with IndiVillage since 2009"
          badgeVariant="blue"
          title="AI Services & Data"
          titleClassName="text-[#0A2F6B]"
          subtitle="Enterprise-grade AI data services and autonomous agent frameworks built specifically for healthcare."
          subtitleClassName="text-[#374151]"
        />

        {/* AI Services section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#0A2F6B] mb-6">AI Services & Data</h3>
              <div className="space-y-4">
                {aiServicesCapabilities.map((cap) => (
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
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#B5D4F4]" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/ai%20and%20services%20indivillage.png"
                alt="AI Services with IndiVillage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </motion.div>

        {/* AI Driven Transformation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#B5D4F4]" style={{ aspectRatio: "16/10" }}>
              <Image
                src="/AI%20Driven%20Transformation%20Opportunities.png"
                alt="AI Driven Transformation Opportunities"
                fill
                className="object-contain bg-white"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0A2F6B] mb-6">AI Driven Transformation Opportunities</h3>
              <div className="space-y-4">
                {transformationItems.map((item) => (
                  <div key={item.title} className="bg-white border border-[#B5D4F4] rounded-xl p-5 hover:border-[#1B6FD8] transition-colors">
                    <h4 className="font-bold text-[#0A2F6B] text-sm mb-1">{item.title}</h4>
                    <p className="text-[#374151] text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-[#0A2F6B] rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-white mb-1">40%+</div>
                  <div className="text-[#B5D4F4] text-xs">Workflow Efficiency Potential</div>
                </div>
                <div className="bg-[#1B6FD8] rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-[#E6F1FB] text-xs">Institutional Intelligence Layer</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Agents */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-[#0A2F6B]">AI Agents</h3>
                <span className="text-xs bg-[#FAEEDA] text-[#BA7517] font-bold px-3 py-1 rounded-full">Powered by Janus — YC-backed</span>
              </div>
              <p className="text-[#374151] text-sm mb-6 leading-relaxed">
                An AI-agent sandbox where students can build, test, validate, and deploy AI agents at scale for healthcare workflows, care coordination, research operations, and student services before any student-built workflow is considered for real-world use.
              </p>
              <p className="text-[#1B6FD8] font-bold text-base italic mb-6">&ldquo;From dashboards to decision-making systems.&rdquo;</p>
              <div className="space-y-4">
                {agentsImpact.map((item) => (
                  <div key={item.title} className="bg-[#E6F1FB] rounded-xl p-5">
                    <h4 className="font-bold text-[#0A2F6B] text-sm mb-1">{item.title}</h4>
                    <p className="text-[#374151] text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#B5D4F4]" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/ai%20agent%20impact.png"
                alt="AI Agents impact at FGCU"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fade}
          >
            <CaseStudyBlock
              title="AI Services at Stanford AIMI"
              image="/Case%20Study%20AI%20Services%20at%20Stanford%20AIMI.png"
              imageAlt="Stanford AIMI AI Services case study"
              context="In 2018, Stanford School of Medicine launched the Center for Artificial Intelligence in Medicine & Imaging (AIMI) to solve a fundamental problem: hospitals had vast clinical data, but no scalable way to turn it into AI models that could actually help patients."
              solution="A unified clinical data & AI infrastructure spanning Stanford Health Care, Stanford Children's Hospital, the University Healthcare Alliance, and Packard Children's Health Alliance clinics. AIMI built an Industry Affiliates Program that brings tech companies (e.g., CARPL.ai) into direct collaboration with Stanford faculty on de-identified, IRB-ready clinical datasets."
              impact="150+ affiliated Stanford faculty publishing in medicine and AI. 20+ AI-ready clinical datasets released publicly for research worldwide. $3M+ in research grants disbursed to faculty. Commercial licensing program: $70K per dataset per year — a sustainable revenue model."
              source="Source: Stanford AIMI Launch"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fade}
          >
            <CaseStudyBlock
              title="AI Agents at MIT Jameel Clinic"
              image="/Case%20Study%20AI%20Agents%20at%20MIT%20Jameel%20Clinic.png"
              imageAlt="MIT Jameel Clinic AI Agents case study"
              context="In 2018, MIT and Community Jameel co-founded the Abdul Latif Jameel Clinic for Machine Learning in Health with the mission to &quot;revolutionize the prevention, detection, and treatment of disease.&quot; The challenge: most clinical AI was being built but rarely deployed in real hospitals."
              solution="Built the Jameel Clinic AI Hospital Network, partnering with hospitals globally to deploy MIT-developed AI tools, backed by a £3.5M Wellcome Trust grant. Flagship deployment: Mirai, a breast cancer risk assessment tool — the most advanced tool of its kind and the first clinical AI from the clinic mature enough for real-world deployment."
              impact="41 hospitals in 13 countries in the AI Hospital Network — providing free AI tool access. AI & Health Summer High School Bootcamp — 52 students annually from US and abroad get hands-on AI-for-health training."
              source="Source: MIT Jameel Mirai"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
