"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const C = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-8";

function fadeUpView(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" } as const,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

const tracks = [
  {
    number: "01",
    title: "Robotics Track",
    color: "#2563EB",
    programs: [
      {
        name: "Robotics Fellows Program",
        desc: "12–15 cross-disciplinary students per year-long cohort — Nursing, Gerontology, PT, OT, Computing, Engineering. Deep collaboration with Machani Robotics on RIA and CC platforms.",
      },
      {
        name: "Hands-On BSN Rotation",
        desc: "4-week applied rotation through the AI Innovation Center for every BSN student. Design, test, and present a care scenario at a real senior care facility.",
      },
      {
        name: "\"Robotics in Care\" Digital Badge",
        desc: "Co-branded credential that signals hands-on clinical AI exposure to healthcare and health-tech employers — valued across the hiring market.",
      },
    ],
  },
  {
    number: "02",
    title: "AR/VR Track",
    color: "#7C3AED",
    programs: [
      {
        name: "Immersive Simulation Lab",
        desc: "Dedicated space with Meta Quest headsets and Next Defence software. Students build and test their own clinical simulation scenarios before graduating.",
      },
      {
        name: "Scenario Design Fellowship",
        desc: "Select students co-develop new simulation curricula with faculty and Next Defence engineers — publishable work and professional portfolio credit.",
      },
      {
        name: "\"Clinical Simulation Design\" Badge",
        desc: "Industry-recognized credential for students who complete the simulation design track. Strong signal for health-tech and EdTech employers.",
      },
    ],
  },
  {
    number: "03",
    title: "AI & Data Track",
    color: "#D97706",
    programs: [
      {
        name: "Healthcare AI Internship",
        desc: "Paid internships with IndiVillage and Center partner companies — data labeling, AI model evaluation, and healthcare analytics for real clients.",
      },
      {
        name: "Research Data Corps",
        desc: "Students support faculty research with AI-powered data collection, analysis, and visualization — building a clinical research portfolio from year one.",
      },
      {
        name: "\"AI in Healthcare\" Badge",
        desc: "Foundational AI literacy for non-computing students. Co-designed with IndiVillage to reflect what health systems actually need in AI-aware clinicians.",
      },
    ],
  },
  {
    number: "04",
    title: "Longevity & MedTech Track",
    color: "#059669",
    programs: [
      {
        name: "Longevity Research Placement",
        desc: "Undergraduate and graduate research placements at Fountain Life, BioPeak, and partner longevity clinics — direct exposure to cutting-edge diagnostics.",
      },
      {
        name: "Health Innovation Accelerator",
        desc: "Student venture competition focused on longevity, preventive care, and healthcare access in SWFL. Top teams receive seed funding and mentorship.",
      },
      {
        name: "\"Longevity Health Specialist\" Badge",
        desc: "Advanced credential for students completing the longevity research track — valuable for health optimization, functional medicine, and wellness careers.",
      },
    ],
  },
];

const badges = [
  { label: "Robotics in Care", color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE", text: "#1D4ED8" },
  { label: "Clinical Simulation Design", color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE", text: "#6D28D9" },
  { label: "AI in Healthcare", color: "#D97706", bg: "#FFFBEB", border: "#FDE68A", text: "#B45309" },
  { label: "Longevity Health Specialist", color: "#059669", bg: "#ECFDF5", border: "#A7F3D0", text: "#047857" },
];

const statChips = [
  "4 Innovation Tracks",
  "12–15 Fellows per cohort",
  "100% BSN Rotation",
  "4 Digital Badges",
];

export default function Students() {
  return (
    <div id="students" className="w-full">
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="bg-[#0C1F4A] pt-36 pb-24 overflow-hidden">
        <div className={C}>
          <motion.div {...fadeUpView(0)} className="mb-5">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/50">
              AI Innovation Center &nbsp;→&nbsp; Student Engagement
            </span>
          </motion.div>

          <motion.h1
            {...fadeUpView(0.08)}
            className="font-black text-white leading-[1.08] mb-6"
            style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
          >
            Where Students Become Builders
          </motion.h1>

          <motion.p
            {...fadeUpView(0.16)}
            className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10"
          >
            The AI Innovation Center is embedded in the FGCU student experience — not as an
            elective, but as the defining differentiator of a Marieb College education.
          </motion.p>

          <motion.div
            {...fadeUpView(0.22)}
            className="flex flex-wrap gap-3"
          >
            {statChips.map((chip) => (
              <span
                key={chip}
                className="bg-white/10 border border-white/15 rounded-lg px-4 py-2 text-white text-sm font-medium"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. FOUR TRACKS ──────────────────────────────────────── */}
      <section className="bg-[#F9F8F5] py-24">
        <div className={C}>
          <motion.div {...fadeUpView(0)} className="mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1B4FD8] mb-3 block">
              Innovation Tracks
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0C1F4A] leading-[1.1]">
              Four Pathways Into Healthcare AI
            </h2>
          </motion.div>

          <div className="space-y-8">
            {tracks.map((track, ti) => (
              <motion.div
                key={track.title}
                {...fadeUpView(ti * 0.1)}
                className="bg-white rounded-[14px] overflow-hidden shadow-sm"
                style={{ borderLeft: `4px solid ${track.color}` }}
              >
                {/* Track header row */}
                <div className="px-8 pt-8 pb-6 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-xs font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${track.color}18`,
                        color: track.color,
                        border: `1px solid ${track.color}40`,
                      }}
                    >
                      Track {track.number}
                    </span>
                    <h3 className="text-2xl font-black text-[#0C1F4A]">{track.title}</h3>
                  </div>
                  <span
                    className="text-7xl font-black leading-none select-none hidden sm:block"
                    style={{ color: `${track.color}12` }}
                  >
                    {track.number}
                  </span>
                </div>

                {/* Program cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border-t border-gray-100">
                  {track.programs.map((prog) => (
                    <div key={prog.name} className="bg-white px-7 py-6">
                      <div
                        className="w-2 h-2 rounded-full mb-4"
                        style={{ backgroundColor: track.color }}
                      />
                      <h4 className="font-bold text-[#0C1F4A] text-sm mb-2 leading-snug">
                        {prog.name}
                      </h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{prog.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. DIGITAL BADGES ───────────────────────────────────── */}
      <section className="bg-[#F2F0EA] py-20">
        <div className={C}>
          <motion.div {...fadeUpView(0)} className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1B4FD8] mb-3 block">
              Industry-Ready Credentials
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0C1F4A] leading-[1.1] mb-5">
              Digital Badges That Open Doors
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              FGCU co-brands each track&apos;s digital badge with its industry partner — Machani
              Robotics, Next Defence, IndiVillage, Fountain Life. These aren&apos;t just
              certificates; they&apos;re hiring signals recognized by health systems and
              health-tech companies nationwide.
            </p>
          </motion.div>

          <motion.div
            {...fadeUpView(0.12)}
            className="flex flex-wrap gap-3 justify-center"
          >
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="px-5 py-2.5 rounded-full font-bold text-sm border"
                style={{
                  backgroundColor: badge.bg,
                  borderColor: badge.border,
                  color: badge.text,
                }}
              >
                {badge.label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. STUDENT IMAGE ────────────────────────────────────── */}
      <section className="bg-[#F9F8F5] py-20">
        <div className={C}>
          <motion.div
            {...fadeUpView(0)}
            className="relative w-full rounded-2xl overflow-hidden shadow-lg aspect-[16/9]"
          >
            <Image
              src="/Student Engagement Robotics Track.png"
              alt="Students at the AI Innovation Center Robotics Track"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1280px"
            />
          </motion.div>
        </div>
      </section>

      {/* ── 5. CTA ──────────────────────────────────────────────── */}
      <section className="bg-[#0C1F4A] py-20">
        <div className={C}>
          <motion.div {...fadeUpView(0)} className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-6">
              Apply for the AI Innovation Fellowship
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Applications for the next cohort open each spring. Seats are limited to 12–15
              fellows per year. Students from all health science disciplines are encouraged to
              apply.
            </p>
            <Link
              href="/about"
              className="inline-block bg-[#1B4FD8] hover:bg-[#1a45c4] text-white font-bold text-sm px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              Learn More &amp; Apply
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
