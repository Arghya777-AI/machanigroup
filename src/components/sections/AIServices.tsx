"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const C = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-8";

function fadeUpView(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" } as const,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

const services = [
  {
    icon: "◈",
    title: "AI Data Services",
    body: "High-quality data annotation, labeling, and enrichment for healthcare AI models. IndiVillage delivers with a human-in-the-loop approach, ensuring clinical accuracy at scale.",
  },
  {
    icon: "◎",
    title: "Autonomous Agent Frameworks",
    body: "Purpose-built AI agent pipelines for clinical intake, patient triage, administrative automation, and research data processing — deployed within health system infrastructure.",
  },
  {
    icon: "◐",
    title: "Healthcare LLM Fine-Tuning",
    body: "Domain-specific language models fine-tuned on clinical terminology, healthcare regulations, and care protocols — enabling natural-language interfaces for clinical teams.",
  },
  {
    icon: "◑",
    title: "Responsible AI Consulting",
    body: "Bias auditing, explainability frameworks, and compliance mapping for healthcare AI deployments — ensuring models meet FDA, HIPAA, and institutional review requirements.",
  },
];

const caseStudies = [
  {
    image: "/Case Study AI Services at Stanford AIMI.png",
    label: "Stanford AIMI Center",
    title: "AI Services at Stanford AIMI",
    body: "Delivering data infrastructure and annotation services supporting the Stanford Center for Artificial Intelligence in Medicine & Imaging (AIMI) — enabling frontier medical AI research.",
  },
  {
    image: "/Case Study AI Agents at MIT Jameel Clinic.png",
    label: "MIT Jameel Clinic",
    title: "AI Agents at MIT Jameel Clinic",
    body: "Autonomous agent frameworks deployed at MIT's Abdul Latif Jameel Clinic for Machine Learning in Health — streamlining research workflows and clinical decision support pipelines.",
  },
];

export default function AIServices() {
  return (
    <div id="ai-services" className="w-full overflow-hidden">
      {/* ── 1. HERO ── */}
      <section className="bg-[#0C1F4A] pt-36 pb-24">
        <div className={C}>
          <motion.div {...fadeUpView(0)}>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/50 mb-4">
              AI Innovation Center &rarr; AI Services &amp; Agents
            </p>
          </motion.div>

          <motion.div {...fadeUpView(0.08)}>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#D97706] bg-[#D97706]/10 border border-[#D97706]/30 rounded-full px-4 py-1.5 mb-6">
              IndiVillage &middot; Janus
            </span>
          </motion.div>

          <motion.h1
            {...fadeUpView(0.14)}
            className="font-black text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
          >
            AI Services &amp; Agents
          </motion.h1>

          <motion.p
            {...fadeUpView(0.2)}
            className="text-white/70 text-lg leading-relaxed max-w-2xl"
          >
            Enterprise-grade AI data services and autonomous agent frameworks purpose-built for healthcare — combining IndiVillage&apos;s data excellence with deep clinical domain knowledge.
          </motion.p>
        </div>
      </section>

      {/* ── 2. SERVICES GRID ── */}
      <section className="bg-[#F9F8F5] py-24">
        <div className={C}>
          <motion.div {...fadeUpView(0)} className="mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D97706] mb-3">
              What We Deliver
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C1F4A] leading-tight">
              Enterprise AI for Healthcare
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUpView(i * 0.08)}
                className="bg-white rounded-[14px] p-7 border-t-[3px] border-t-[#D97706] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-2xl text-[#D97706] mb-4">{s.icon}</div>
                <h3 className="text-base font-bold text-[#0C1F4A] mb-2">{s.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PARTNER SPOTLIGHT ── */}
      <section className="bg-[#F2F0EA] py-24">
        <div className={C}>
          <motion.div {...fadeUpView(0)} className="mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D97706] mb-3">
              Partner Spotlight
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C1F4A] leading-tight">
              IndiVillage &amp; Janus
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* IndiVillage */}
            <motion.div {...fadeUpView(0.06)} className="bg-white rounded-[14px] overflow-hidden shadow-sm">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/ai and services indivillage.png"
                  alt="IndiVillage AI Services partnership"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D97706] mb-2">
                  Since 2009
                </p>
                <h3 className="text-xl font-bold text-[#0C1F4A] mb-3">
                  IndiVillage — AI Data Services
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  IndiVillage delivers enterprise-grade data annotation, labeling, and enrichment for healthcare AI models. With a human-in-the-loop methodology and deep clinical accuracy standards, IndiVillage powers the data infrastructure behind production-ready healthcare AI at scale.
                </p>
              </div>
            </motion.div>

            {/* Janus */}
            <motion.div {...fadeUpView(0.12)} className="bg-white rounded-[14px] overflow-hidden shadow-sm">
              <div className="relative w-full aspect-[4/3] bg-[#0C1F4A] flex items-center justify-center">
                <Image
                  src="/JANUS.png"
                  alt="Janus AI Agents"
                  fill
                  className="object-contain p-10"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D97706] mb-2">
                  YC-Backed
                </p>
                <h3 className="text-xl font-bold text-[#0C1F4A] mb-3">
                  Janus — Autonomous Agent Frameworks
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  Janus provides purpose-built AI agent pipelines for clinical intake, patient triage, administrative automation, and research data processing. Deployed within health system infrastructure, Janus agents move healthcare organizations from dashboards to active decision-making systems.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. AI AGENT IMPACT ── */}
      <section className="bg-[#F9F8F5] py-24">
        <div className={C}>
          <motion.div
            {...fadeUpView(0)}
            className="relative w-full rounded-2xl overflow-hidden aspect-[16/9] shadow-lg mb-14"
          >
            <Image
              src="/ai agent impact.png"
              alt="AI Agent Impact"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 95vw, 1280px"
            />
          </motion.div>

          <motion.div {...fadeUpView(0.08)} className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D97706] mb-3">
              Agent Impact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C1F4A] leading-tight mb-5">
              From Dashboards to Decision-Making Systems
            </h2>
            <p className="text-[#6B7280] text-base leading-relaxed">
              AI agents built for healthcare don&apos;t just surface insights — they act. From real-time clinical decisioning and care-coordination alerts to operational automation and simulation-validated testing, agent frameworks represent the next layer of institutional intelligence for health systems and research organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 5. CASE STUDIES ── */}
      <section className="bg-[#F2F0EA] py-24">
        <div className={C}>
          <motion.div {...fadeUpView(0)} className="mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D97706] mb-3">
              Case Studies
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C1F4A] leading-tight">
              World-Class AI Research Partnerships
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                {...fadeUpView(i * 0.1)}
                className="bg-white rounded-[14px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-contain bg-white"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-7">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D97706] mb-2">
                    {cs.label}
                  </div>
                  <h3 className="text-lg font-bold text-[#0C1F4A] mb-2">{cs.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{cs.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section className="bg-[#0C1F4A] py-20">
        <div className={C}>
          <motion.div {...fadeUpView(0)} className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              Deploy AI in Your Healthcare System
            </h2>
            <Link
              href="/about"
              className="inline-block bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm uppercase tracking-[0.15em] px-8 py-4 rounded-full transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
