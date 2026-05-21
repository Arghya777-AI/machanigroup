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

const riaSpecs = [
  { label: "Embodied Intelligence", value: "Multi-Modal LLM · Health Monitoring · Silicon frubber actuated face skin" },
  { label: "Natural Human Interaction", value: "70+ pre-set facial expressions · 50+ synchronized gestures" },
  { label: "Multilingual Conversations", value: "Custom audio tracking & localization · 10+ conversation etiquettes" },
  { label: "Sensory Intelligence", value: "Thermal camera · Wide-angle vision · Audio tracking · Face recognition" },
];

const riaTabs = [
  {
    title: "Dementia & Cognitive Engagement",
    body: "Daily reminiscence, music cues, and cognitive routines — supporting consented dementia research with Shady Rest and Baker Senior Center.",
  },
  {
    title: "Standardized Patient for Clinical Simulation",
    body: "Emotionally responsive patient simulations for dementia, IDD, end-of-life, and clinical intake training at Marieb College.",
  },
  {
    title: "FGCU College Ambassador",
    body: "Greets visitors, donors, and prospective students. Showcases FGCU's emerging clinical-AI capability as an intelligent host.",
  },
];

const ccSpecs = [
  { label: "Compact Intelligence", value: "Expressive servo-driven face · 5\" touchscreen · 4-mic array · Dual speakers" },
  { label: "Perception", value: "1080P camera · Human presence detection · Face recognition" },
  { label: "Health Monitoring", value: "Live vitals: heart rate, BP, oxygen levels · Mobility & gait pattern tracking" },
  { label: "Configurable AI Brain", value: "Apps & analytics dashboard · Real-time insights delivery" },
];

const ccUseCases = [
  { title: "Fall-Risk Detection Pilot", body: "Multi-sensor gait tracking may identify mobility changes that indicate rising fall risk — for senior care settings." },
  { title: "Nutrition Tracking for Healthspan Research", body: "Learns residents' food preferences through natural conversation. Supports Shady Rest's Positive Aging / Blue Zones research." },
  { title: "Caregiver Training Companion", body: "Nursing, gerontology, and social-work students train with CC scenarios before stepping onto a real care floor." },
  { title: "Emergency Support", body: "Proactive preparedness during hurricanes, power outages, and medical emergencies." },
];

export default function Robotics() {

  return (
    <main className="w-full">
      {/* ── 1. Hero ── */}
      <section style={{ background: "#0C1F4A" }} className="pt-36 pb-24">
        <div className={C}>
          <motion.div {...fadeUpView(0)}>
            <p className="font-mono text-[11px] tracking-widest text-white/40 uppercase mb-6">
              AI Innovation Center &rarr; Humanoid Robotics
            </p>
            <span
              className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
              style={{ background: "#2563EB", color: "#fff" }}
            >
              RIA · CC Bot
            </span>
            <h1
              className="font-black text-white leading-none mb-6"
              style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
            >
              Humanoid Robotics
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg mb-8">
              AI-powered robotic companions for clinical simulation, dementia care, and healthcare education — purpose-built for the environments Marieb students will work in.
            </p>
            <div className="flex flex-wrap gap-3">
              {["70+ Facial Expressions", "50+ Gestures"].map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-2 rounded-full text-sm font-semibold border"
                  style={{ borderColor: "#2563EB", color: "#93b4fd", background: "rgba(37,99,235,0.12)" }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. RIA Robot ── */}
      <section className="py-24" style={{ background: "#F9F8F5" }}>
        <div className={C}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: content 5/12 */}
            <motion.div className="lg:col-span-5" {...fadeUpView(0)}>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
                style={{ color: "#2563EB" }}
              >
                RIA — Robotic Intelligence Assistant
              </p>
              <h2 className="text-4xl font-black text-gray-900 leading-tight mb-5">
                AI-Powered Full Humanoid Robot
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                In partnership with Machani Robotics since 2018, RIA brings multi-modal intelligence to clinical and educational environments — sensing, expressing, and adapting like a trained care companion.
              </p>
              <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
                {riaSpecs.map((s) => (
                  <div key={s.label} className="py-3 grid grid-cols-[auto_1fr] gap-4 items-start">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap pt-0.5">
                      {s.label}
                    </span>
                    <span className="text-sm text-gray-700 leading-snug">{s.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: image 7/12 */}
            <motion.div className="lg:col-span-7" {...fadeUpView(0.15)}>
              <div className="relative w-full h-[560px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/RIA Headshot.png"
                  alt="RIA humanoid robot close-up"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. RIA Use Cases ── */}
      <section className="py-20" style={{ background: "#F2F0EA" }}>
        <div className={C}>
          <motion.div className="mb-12" {...fadeUpView(0)}>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "#2563EB" }}
            >
              RIA in Action at FGCU
            </p>
            <h2 className="text-3xl font-black text-gray-900">Clinical Applications</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {riaTabs.map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUpView(i * 0.1)}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
                style={{ borderTop: "3px solid #2563EB" }}
              >
                <div className="p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CC Bot ── */}
      <section className="py-24" style={{ background: "#F9F8F5" }}>
        <div className={C}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            {/* Left: image 7/12 */}
            <motion.div className="lg:col-span-7 order-2 lg:order-1" {...fadeUpView(0.15)}>
              <div
                className="relative w-full h-[520px] rounded-2xl overflow-hidden shadow-2xl"
                style={{ background: "linear-gradient(to bottom, #f5f0e8, #ede8dc)" }}
              >
                <Image
                  src="/CC Bot.png"
                  alt="CC — Research Companion Robot"
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </motion.div>

            {/* Right: content 5/12 */}
            <motion.div className="lg:col-span-5 order-1 lg:order-2" {...fadeUpView(0)}>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
                style={{ color: "#2563EB" }}
              >
                CC Bot
              </p>
              <h2 className="text-4xl font-black text-gray-900 leading-tight mb-5">
                Research Companion for Faculty
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                A compact, expressive platform built for continuous deployment in classrooms, labs, and senior care settings — bringing real-time health monitoring and AI conversation to the bedside.
              </p>
              <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
                {ccSpecs.map((s) => (
                  <div key={s.label} className="py-3 grid grid-cols-[auto_1fr] gap-4 items-start">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap pt-0.5">
                      {s.label}
                    </span>
                    <span className="text-sm text-gray-700 leading-snug">{s.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CC Use Case cards */}
          <motion.div className="mb-8" {...fadeUpView(0)}>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "#2563EB" }}
            >
              CC: Use Cases at FGCU
            </p>
            <h3 className="text-2xl font-black text-gray-900">Deployed in Classrooms, Labs, and Senior Care</h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ccUseCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                {...fadeUpView(i * 0.08)}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
                style={{ borderTop: "3px solid #2563EB" }}
              >
                <div className="p-5">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">{uc.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{uc.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Case Study ── */}
      <section className="py-20" style={{ background: "#0C1F4A" }}>
        <div className={C}>
          <motion.div className="mb-10" {...fadeUpView(0)}>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "#2563EB" }}
            >
              Case Study
            </p>
            <h2 className="text-3xl font-black text-white">
              Carnegie Mellon &times; Baptist Senior Family
            </h2>
          </motion.div>

          <motion.div
            {...fadeUpView(0.1)}
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
            style={{ height: "480px" }}
          >
            <Image
              src="/Case Study Humanoid Robotics at Carnegie Mellon × Baptist Senior Family.png"
              alt="Case Study: Carnegie Mellon × Baptist Senior Family"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>

          <motion.p
            {...fadeUpView(0.2)}
            className="mt-8 text-white/60 text-base leading-relaxed max-w-2xl"
          >
            A landmark collaboration bringing humanoid robotic companions into Baptist Senior Family&apos;s care environments — measuring engagement, cognitive outcomes, and caregiver time savings across long-term care and memory units.
          </motion.p>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section className="py-20" style={{ background: "#F2F0EA" }}>
        <div className={C}>
          <motion.div className="text-center" {...fadeUpView(0)}>
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Partner with the Robotics Lab
            </h2>
            <Link
              href="/about"
              className="inline-block px-8 py-3.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: "#2563EB" }}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
