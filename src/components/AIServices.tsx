"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionBadge from "@/components/ui/SectionBadge";
import FeatureGrid from "@/components/ui/FeatureGrid";
import CaseStudyBlock from "@/components/ui/CaseStudyBlock";

const aiServicesGrid = [
  { title: "Data Capture", description: "Structured and unstructured healthcare data collection from EHR systems, clinical notes, imaging, and wearable devices." },
  { title: "Computer Vision", description: "Medical imaging analysis, wound assessment, mobility monitoring, and real-time clinical environment surveillance." },
  { title: "NLP", description: "Clinical notes processing, patient communication summarization, literature review automation, and diagnostic coding assistance." },
  { title: "Pipelines", description: "End-to-end MLOps pipelines from data ingestion through model training, validation, deployment, and monitoring." },
];

const aiTransformations = [
  "Automated clinical documentation reducing nurse charting time by up to 40%",
  "Predictive patient deterioration models for early intervention in acute care settings",
  "AI-assisted diagnostic imaging review supporting radiologist workflow in Lee Health network",
  "Natural language intake and triage systems for FGCU student health and community clinics",
];

const agentsSandboxGrid = [
  { title: "Real-time Clinical Decisioning", description: "AI agents monitoring patient vitals, lab values, and clinical notes to surface time-sensitive alerts and recommendations." },
  { title: "Operational Automation", description: "Scheduling, supply chain, staffing optimization, and administrative workflow automation for healthcare systems." },
  { title: "Safety-first Deployment", description: "All agents operate in human-in-the-loop mode with full audit trails, explainability layers, and override controls." },
  { title: "Student Learning Path", description: "Structured curriculum for students to design, test, and deploy healthcare AI agents in supervised sandbox environments." },
];

export default function AIServices() {
  return (
    <section id="ai-services" className="bg-[#F9FAFB] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="In partnership with Anolytics (since 2009)"
          badgeVariant="blue"
          title="AI Services & AI Agents"
          titleClassName="text-[#0A2F6B]"
          subtitle="Enterprise-grade AI data services and autonomous agent frameworks built specifically for healthcare."
          subtitleClassName="text-[#374151]"
        />

        {/* 7.1 AI Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-[#0A2F6B] mb-6">7.1 AI Services</h3>
          <FeatureGrid items={aiServicesGrid} />
        </motion.div>

        {/* AI transformation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-[#0A2F6B] mb-4">AI Transformation Opportunities at FGCU</h3>
          <div className="bg-white rounded-xl p-6 border border-[#B5D4F4]">
            <ul className="space-y-3">
              {aiTransformations.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                  <span className="text-[#1B6FD8] font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Large stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          <div className="bg-[#0A2F6B] rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-white mb-2">40%+</div>
            <div className="text-[#B5D4F4] text-base">Reduction in clinical documentation time with AI-assisted charting</div>
          </div>
          <div className="bg-[#1B6FD8] rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-[#E6F1FB] text-base">AI agent monitoring and operational support — no downtime in patient care coverage</div>
          </div>
        </div>

        {/* 7.2 AI Agents Sandbox */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xl font-bold text-[#0A2F6B]">7.2 AI Agents Sandbox</h3>
            <SectionBadge text="Powered by Janus (YC-backed company)" variant="gold" />
          </div>
          <FeatureGrid items={agentsSandboxGrid} cardClassName="bg-white" />
        </motion.div>

        {/* Case studies */}
        <div className="space-y-6">
          <CaseStudyBlock
            title="Stanford AIMI — AI in Medical Imaging"
            context="Stanford's Center for AI in Medicine & Imaging needed to scale its AI model validation pipeline to handle growing volumes of radiology studies while maintaining radiologist oversight."
            solution="Deployed automated AI triaging pipeline processing 50,000+ studies/month, flagging high-priority findings for immediate radiologist review while routing routine studies through streamlined workflows."
            impact="Mean time to diagnosis for critical findings reduced by 52%. Radiologist capacity effectively increased 1.8x. Pipeline methodology now licensed to 12 health systems."
          />
          <CaseStudyBlock
            title="MIT Jameel Clinic — AI Healthcare Agents"
            context="MIT's Abdul Latif Jameel Clinic for Machine Learning in Health was building autonomous clinical decision support agents for intensive care settings where rapid intervention timing is critical."
            solution="Multi-agent system combining sepsis prediction, medication interaction checking, and care pathway optimization — with full explainability and clinical override capabilities at every decision node."
            impact="Early sepsis detection improved by 4.2 hours average lead time. ICU mortality in participating units decreased 8.3%. Agents now deployed in 6 teaching hospitals in pilot programs."
          />
        </div>
      </div>
    </section>
  );
}
