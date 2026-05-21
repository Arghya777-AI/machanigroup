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

const simulations = [
  {
    title: "Code Blue & Emergency Response",
    body: "High-fidelity cardiac arrest and trauma scenarios. Students respond in real time with real consequences — decision trees, vital feedback, and debrief analytics.",
  },
  {
    title: "Dementia & IDD Interaction",
    body: "First-person empathy simulations for dementia progression and intellectual/developmental disability communication. Evidence-based curriculum designed with Marieb faculty.",
  },
  {
    title: "End-of-Life & Palliative Care",
    body: "Emotionally nuanced simulations for compassionate communication, family engagement, and ethical decision-making in end-of-life settings.",
  },
  {
    title: "Clinical Intake & Assessment",
    body: "Standardized patient simulations for nursing assessments, mental health intake, and cross-cultural communication — practice-ready before the first real patient.",
  },
];

const features = [
  { label: "Headset-Agnostic", value: "Meta Quest · HoloLens · Apple Vision Pro compatible" },
  { label: "Multiplayer", value: "Up to 30 concurrent students in shared clinical environments" },
  { label: "AI Debrief Engine", value: "Automatic performance scoring, decision-tree replay, competency mapping" },
  { label: "LMS Integration", value: "Canvas, Blackboard, and custom FGCU curriculum integration" },
];

const pills = [
  { label: "Headset-Agnostic", value: "Meta Quest · HoloLens · Vision Pro" },
  { label: "Multiplayer", value: "Up to 30 concurrent students" },
  { label: "AI Debrief Engine", value: "Auto scoring & replay" },
  { label: "LMS Integration", value: "Canvas & Blackboard" },
];

const stats = [
  { v: "40%", l: "Reduction in surgical errors in simulation" },
  { v: "3×", l: "Faster skill acquisition vs traditional methods" },
  { v: "95%", l: "Student satisfaction rating" },
  { v: "12+", l: "Partner institutions worldwide" },
];

export default function ARVR() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-[#0C1F4A] pt-36 pb-24 overflow-hidden">
        <div className={C}>
          <motion.div {...fadeUpView(0)}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50 mb-4">
              AI Innovation Center &rarr; AR / VR Training
            </p>
          </motion.div>
          <motion.div {...fadeUpView(0.08)}>
            <span className="inline-block bg-[#7C3AED] text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Next Defence
            </span>
          </motion.div>
          <motion.h1
            {...fadeUpView(0.14)}
            className="font-black text-white leading-[1.08] mb-6"
            style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
          >
            AR / VR Clinical Training
          </motion.h1>
          <motion.p
            {...fadeUpView(0.2)}
            className="text-white/70 text-lg leading-relaxed max-w-lg"
          >
            Immersive simulation environments that prepare healthcare students for the most critical and emotionally demanding moments in clinical practice — before they ever meet a real patient.
          </motion.p>
        </div>
      </section>

      {/* 2. PLATFORM OVERVIEW */}
      <section className="bg-[#F9F8F5] py-24 overflow-hidden">
        <div className={C}>
          <motion.div
            {...fadeUpView(0)}
            className="relative w-full rounded-2xl overflow-hidden shadow-xl"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src="/AR _ VR Training Simulator.png"
              alt="AR/VR Training Simulator Platform"
              fill
              className="object-contain bg-[#061228]"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 95vw, 1280px"
              priority
            />
          </motion.div>

          <motion.div
            {...fadeUpView(0.1)}
            className="mt-10 flex flex-wrap gap-3 justify-center"
          >
            {pills.map((pill) => (
              <div
                key={pill.label}
                className="flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-4 py-2 shadow-sm"
              >
                <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wide">
                  {pill.label}
                </span>
                <span className="text-xs text-gray-500">{pill.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SIMULATION LIBRARY */}
      <section className="bg-[#F2F0EA] py-24 overflow-hidden">
        <div className={C}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left */}
            <div>
              <motion.p {...fadeUpView(0)} className="text-xs font-bold uppercase tracking-[0.22em] text-[#7C3AED] mb-3">
                Simulation Library
              </motion.p>
              <motion.h2
                {...fadeUpView(0.07)}
                className="text-3xl font-bold text-[#0C1F4A] leading-tight mb-8"
              >
                Clinical Scenarios That Mirror Real Practice
              </motion.h2>
              <div className="space-y-4">
                {simulations.map((s, i) => (
                  <motion.div
                    key={s.title}
                    {...fadeUpView(0.1 + i * 0.07)}
                    className="bg-white border-l-[3px] border-[#7C3AED] rounded-xl p-5"
                  >
                    <h4 className="text-[#0C1F4A] font-semibold text-sm mb-1.5">{s.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div>
              <motion.div
                {...fadeUpView(0.05)}
                className="relative w-full rounded-2xl overflow-hidden bg-white border border-[#E5E2DA] flex items-center justify-center mb-8"
                style={{ aspectRatio: "3/2" }}
              >
                <Image
                  src="/ND.png"
                  alt="Next Defence"
                  fill
                  className="object-contain p-10"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>

              <motion.p {...fadeUpView(0.12)} className="text-xs font-bold uppercase tracking-[0.22em] text-[#7C3AED] mb-4">
                Platform Features
              </motion.p>
              <motion.div {...fadeUpView(0.16)} className="space-y-3">
                {features.map((f) => (
                  <div key={f.label} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-[7px] flex-shrink-0" />
                    <div>
                      <span className="text-[#0C1F4A] text-sm font-semibold">{f.label}</span>
                      <span className="text-gray-600 text-sm"> — {f.value}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STANFORD CASE STUDY */}
      <section className="bg-[#0C1F4A] py-24 overflow-hidden">
        <div className={C}>
          <motion.p {...fadeUpView(0)} className="text-xs font-bold uppercase tracking-[0.22em] text-[#7C3AED] mb-3">
            Global Validation
          </motion.p>
          <motion.h2
            {...fadeUpView(0.07)}
            className="text-3xl font-bold text-white leading-tight mb-4"
          >
            Stanford Neurosurgery Simulation
          </motion.h2>
          <motion.p {...fadeUpView(0.12)} className="text-white/60 text-base leading-relaxed max-w-2xl mb-12">
            Next Defence&apos;s AR/VR technology has been validated in partnership with Stanford&apos;s neurosurgery program — one of the world&apos;s most demanding surgical training environments. The same platform comes to Marieb College.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: stats */}
            <motion.div {...fadeUpView(0.16)} className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.l} className="bg-white/10 rounded-2xl p-5">
                  <div className="text-2xl font-bold text-white mb-1">{s.v}</div>
                  <div className="text-xs text-white/60 leading-tight">{s.l}</div>
                </div>
              ))}
            </motion.div>

            {/* Right: image */}
            <motion.div
              {...fadeUpView(0.22)}
              className="relative w-full rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/AR_VR Simulation at Stanford Neurosurgery.png"
                alt="AR/VR Simulation at Stanford Neurosurgery"
                fill
                className="object-contain bg-[#061228]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-[#F2F0EA] py-16 overflow-hidden">
        <div className={C}>
          <motion.div {...fadeUpView(0)} className="text-center">
            <h2 className="text-3xl font-bold text-[#0C1F4A] mb-6">
              Bring Immersive Training to Marieb College
            </h2>
            <Link
              href="/about"
              className="inline-block bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-sm px-7 py-3 rounded-full transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
