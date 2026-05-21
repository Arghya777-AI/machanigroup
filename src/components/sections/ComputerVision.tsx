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

const keyCaps = [
  {
    label: "Real-Time Processing",
    description: "Sub-100ms latency with edge and cloud deployment options.",
  },
  {
    label: "Model Accuracy",
    description: "99.2% detection accuracy in controlled environments.",
  },
  {
    label: "Scale",
    description: "From single-camera pilots to 10,000+ camera networks.",
  },
  {
    label: "Healthcare Applications",
    description: "Fall detection, gait analysis, and hand hygiene compliance.",
  },
];

const applications = [
  {
    title: "Construction Site Safety",
    body: "Real-time safety compliance monitoring, worker PPE detection, structural progress tracking, and hazard identification across active construction sites.",
  },
  {
    title: "Clinical Environment Monitoring",
    body: "Multi-camera perception networks delivering live analytics — patient movement tracking, equipment utilization, and clinical workflow compliance.",
  },
  {
    title: "Manufacturing Quality Control",
    body: "Automated defect detection, assembly verification, and yield optimization on production lines with sub-second visual inspection.",
  },
  {
    title: "Facility & Security Intelligence",
    body: "Perimeter monitoring, access control enforcement, and occupancy analytics across large-scale facility networks.",
  },
  {
    title: "Edge AI Inference",
    body: "On-device processing via Inkers' Lithic Pro hardware — HIPAA-compliant, zero cloud latency, plug-and-play camera integration.",
  },
  {
    title: "Remote Fleet Management",
    body: "Centralized dashboard for managing distributed camera networks with real-time alerts, health monitoring, and model update orchestration.",
  },
];

const constructionMetrics = [
  { value: "99.2%", label: "Detection accuracy" },
  { value: "<100ms", label: "Processing latency" },
  { value: "10K+", label: "Camera networks" },
];

export default function ComputerVision() {
  return (
    <>
      {/* 1 — Hero */}
      <section className="bg-[#0C1F4A] pt-36 pb-24 overflow-hidden">
        <div className={C}>
          <motion.div {...fadeUpView(0)} className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
              AI Innovation Center{" "}
              <span className="mx-2 text-white/30">/</span> Computer Vision
            </span>
          </motion.div>

          <motion.div {...fadeUpView(0.08)}>
            <span className="inline-block bg-[#DC2626] text-white text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6">
              Inkers
            </span>
          </motion.div>

          <motion.h1
            {...fadeUpView(0.14)}
            className="font-black text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
          >
            Computer Vision
          </motion.h1>

          <motion.p
            {...fadeUpView(0.2)}
            className="text-white/70 text-lg leading-relaxed max-w-2xl"
          >
            Industrial-grade vision intelligence for construction, manufacturing,
            and clinical environments — delivering real-time perception that
            makes facilities safer and operations smarter.
          </motion.p>
        </div>
      </section>

      {/* 2 — Platform Overview */}
      <section className="bg-[#F9F8F5] py-24 overflow-hidden">
        <div className={C}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image — 7/12 */}
            <motion.div
              {...fadeUpView(0)}
              className="lg:col-span-7 relative w-full rounded-2xl overflow-hidden shadow-xl"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/inkers computer vision wall.png"
                alt="Inkers Computer Vision Wall"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </motion.div>

            {/* Text — 5/12 */}
            <div className="lg:col-span-5">
              <motion.p
                {...fadeUpView(0.06)}
                className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#DC2626] mb-3"
              >
                Inkers Platform
              </motion.p>

              <motion.h2
                {...fadeUpView(0.12)}
                className="text-3xl font-black text-[#0C1F4A] leading-tight mb-4"
              >
                Perception That Powers Smarter Environments
              </motion.h2>

              <motion.p
                {...fadeUpView(0.18)}
                className="text-gray-600 text-sm leading-relaxed mb-8"
              >
                Inkers delivers enterprise-grade computer vision infrastructure
                that integrates with existing camera systems — bringing AI
                perception to construction sites, hospitals, and manufacturing
                floors without rip-and-replace complexity.
              </motion.p>

              <motion.div {...fadeUpView(0.22)} className="space-y-4">
                {keyCaps.map((cap) => (
                  <div key={cap.label} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-[6px] flex-shrink-0" />
                    <div>
                      <span className="text-[#0C1F4A] text-sm font-semibold">
                        {cap.label}
                      </span>{" "}
                      <span className="text-gray-500 text-sm">
                        {cap.description}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Applications Grid */}
      <section className="bg-[#F2F0EA] py-24 overflow-hidden">
        <div className={C}>
          <motion.p
            {...fadeUpView(0)}
            className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#DC2626] mb-3"
          >
            Applications
          </motion.p>
          <motion.h2
            {...fadeUpView(0.06)}
            className="text-3xl font-black text-[#0C1F4A] leading-tight mb-12 max-w-xl"
          >
            Vision Intelligence Across Healthcare &amp; Industry
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, i) => (
              <motion.div
                key={app.title}
                {...fadeUpView(i * 0.07)}
                className="bg-white rounded-[14px] border-t-2 border-[#DC2626] p-6"
              >
                <h3 className="text-[#0C1F4A] font-bold text-base mb-2">
                  {app.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {app.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Inkers Logo + Construction Intelligence */}
      <section className="bg-[#F9F8F5] py-20 overflow-hidden">
        <div className={C}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              {...fadeUpView(0)}
              className="relative w-full rounded-2xl overflow-hidden shadow-lg"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/inkers contruction intelligence.png"
                alt="Inkers Construction Intelligence"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Text */}
            <div>
              <motion.p
                {...fadeUpView(0.06)}
                className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#DC2626] mb-3"
              >
                Inkers
              </motion.p>

              <motion.h3
                {...fadeUpView(0.12)}
                className="text-2xl font-black text-[#0C1F4A] leading-tight mb-4"
              >
                Construction Intelligence
              </motion.h3>

              <motion.p
                {...fadeUpView(0.18)}
                className="text-gray-600 text-sm leading-relaxed mb-8"
              >
                Inkers&apos; construction intelligence platform monitors active
                sites continuously — detecting PPE violations, tracking structural
                milestones, and flagging hazards before incidents occur. Every
                camera becomes a safety officer.
              </motion.p>

              <motion.div
                {...fadeUpView(0.22)}
                className="grid grid-cols-3 gap-4"
              >
                {constructionMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm"
                  >
                    <div className="text-xl font-black text-[#DC2626]">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1 leading-tight">
                      {m.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Case Study */}
      <section className="bg-[#0C1F4A] py-20 overflow-hidden">
        <div className={C}>
          <motion.p
            {...fadeUpView(0)}
            className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#DC2626] mb-3"
          >
            Case Study
          </motion.p>
          <motion.h2
            {...fadeUpView(0.06)}
            className="text-2xl font-black text-white leading-tight mb-10 max-w-xl"
          >
            Computer Vision in Action
          </motion.h2>

          <motion.div
            {...fadeUpView(0.12)}
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
            style={{ aspectRatio: "16/7" }}
          >
            <Image
              src="/inkers computer vision wall.png"
              alt="Inkers Computer Vision Case Study"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </section>

      {/* 6 — CTA */}
      <section className="bg-[#F2F0EA] py-16 overflow-hidden">
        <div className={C}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <motion.h2
              {...fadeUpView(0)}
              className="text-2xl font-black text-[#0C1F4A] leading-tight max-w-sm"
            >
              Deploy Vision Intelligence
            </motion.h2>
            <motion.div {...fadeUpView(0.08)}>
              <Link
                href="/about"
                className="inline-block bg-[#DC2626] hover:bg-[#b91c1c] text-white font-bold text-sm px-7 py-3 rounded-full transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
