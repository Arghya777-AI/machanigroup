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

const partners = [
  { src: "/FGCU.png", alt: "FGCU", label: "Florida Gulf Coast University" },
  { src: "/MR.png", alt: "Machani Robotics", label: "Machani Robotics" },
  { src: "/IV.png", alt: "IndiVillage", label: "IndiVillage" },
  { src: "/JANUS.png", alt: "Janus", label: "Janus" },
  { src: "/ND.png", alt: "Next Defence", label: "Next Defence" },
  { src: "/OKULO.png", alt: "Okulo", label: "Okulo" },
  { src: "/TRESA.png", alt: "Tresa", label: "Tresa EV" },
  { src: "/TSALLA.png", alt: "Tsalla", label: "Tsalla" },
  { src: "/INKERS.png", alt: "Inkers", label: "Inkers" },
];

const partnerTypes = [
  {
    title: "Academic Partner",
    desc: "Co-develop curriculum, host student rotations, and contribute research faculty to the Center. Build the next generation of healthcare innovators.",
    color: "#1B4FD8",
  },
  {
    title: "Industry Partner",
    desc: "Access FGCU's talent pipeline, deploy your technology in clinical settings, and gain real-world validation. Shape the healthcare AI market from the inside.",
    color: "#059669",
  },
  {
    title: "Investor & Sponsor",
    desc: "Fund specific tracks, sponsor student fellowships, or invest directly in portfolio companies. Get early access to deal flow and co-investment opportunities.",
    color: "#D97706",
  },
  {
    title: "Clinical Partner",
    desc: "Integrate the Center's robotics and AI tools into your care environment. Pilot new technologies with your patients, staff, and research teams.",
    color: "#7C3AED",
  },
];

export default function About() {
  return (
    <div id="about" className="w-full overflow-hidden">
      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#0C1F4A] pt-36 pb-24">
        <div className={C}>
          {/* Breadcrumb */}
          <motion.div {...fadeUpView(0)} className="mb-8">
            <nav className="flex items-center gap-2 text-xs font-medium text-white/50 uppercase tracking-widest">
              <span>AI Innovation Center</span>
              <span className="text-white/30">/</span>
              <span className="text-white/80">About</span>
            </nav>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUpView(0.1)}
            className="font-black text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
          >
            Built for the Future<br className="hidden sm:block" /> of Healthcare
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUpView(0.2)}
            className="text-white/70 text-lg leading-relaxed max-w-xl"
          >
            The FGCU AI Innovation Center is a collaboration between Florida Gulf
            Coast University&apos;s Marieb College of Health &amp; Human Services and
            The Next New AI Venture Studio — bringing six interconnected innovation
            domains to Southwest Florida.
          </motion.p>
        </div>
      </section>

      {/* ── 2. Mission ──────────────────────────────────────────────────────── */}
      <section className="bg-[#F9F8F5] py-24">
        <div className={C}>
          <div className="grid grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left column */}
            <motion.div {...fadeUpView(0)} className="col-span-12 lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#1B4FD8] mb-4">
                Our Mission
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0C1F4A] leading-[1.15] mb-5">
                A New Model for Healthcare Education
              </h2>
              <div className="w-12 h-0.5 bg-[#1B4FD8] mb-6" />
              <p className="text-[#4B5563] leading-relaxed text-base">
                We unite university talent with venture-studio speed to turn
                cutting-edge research into real-world healthcare solutions — and
                to make Southwest Florida a global destination for health-tech
                innovation.
              </p>
            </motion.div>

            {/* Right column — blockquote */}
            <motion.div
              {...fadeUpView(0.15)}
              className="col-span-12 lg:col-span-7"
            >
              <div className="bg-[#0C1F4A] rounded-2xl p-10">
                <blockquote className="text-xl md:text-2xl font-semibold italic text-white leading-relaxed">
                  &ldquo;To make FGCU Marieb College the national model for
                  AI-integrated healthcare education — and Southwest Florida the
                  longevity and health-tech capital of the Southeast.&rdquo;
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. Partner Types ────────────────────────────────────────────────── */}
      <section className="bg-[#F2F0EA] py-24">
        <div className={C}>
          {/* Section label + heading */}
          <motion.div {...fadeUpView(0)} className="mb-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#1B4FD8] mb-3">
              Get Involved
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1F4A] mb-4">
              Partner With the Center
            </h2>
            <p className="text-[#6B7280] text-sm max-w-xl">
              Four ways to engage — whether you&apos;re an institution, company,
              investor, or healthcare provider.
            </p>
          </motion.div>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {partnerTypes.map((pt, i) => (
              <motion.div
                key={pt.title}
                {...fadeUpView(i * 0.08)}
                className="bg-white rounded-[14px] p-7 hover:shadow-lg transition-shadow duration-300"
                style={{ borderTop: `3px solid ${pt.color}` }}
              >
                {/* Accent dot instead of emoji */}
                <div
                  className="w-2 h-2 rounded-full mb-4"
                  style={{ backgroundColor: pt.color }}
                />
                <h3
                  className="text-sm font-bold uppercase tracking-[0.15em] mb-2"
                  style={{ color: pt.color }}
                >
                  {pt.title}
                </h3>
                <p className="text-[#374151] text-sm leading-relaxed">{pt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FGCU + CTA ───────────────────────────────────────────────────── */}
      <section className="bg-[#0C1F4A] py-20">
        <div className={C}>
          <div className="text-center max-w-2xl mx-auto">
            <motion.h2
              {...fadeUpView(0)}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Start a Conversation
            </motion.h2>
            <motion.p
              {...fadeUpView(0.1)}
              className="text-white/60 text-base leading-relaxed mb-8"
            >
              Whether you&apos;re a company, investor, clinician, or researcher —
              there&apos;s a place for you in this ecosystem. Reach out and let&apos;s
              explore what&apos;s possible.
            </motion.p>

            {/* CTA button */}
            <motion.div {...fadeUpView(0.2)} className="mb-8">
              <Link
                href="mailto:ai-center@fgcu.edu"
                className="inline-flex items-center gap-2 bg-[#1B4FD8] hover:bg-[#1540b8] text-white font-semibold px-10 py-4 rounded-full transition-colors duration-200 text-sm shadow-xl shadow-[#1B4FD8]/30"
              >
                Contact the Center
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Location note */}
            <motion.p
              {...fadeUpView(0.28)}
              className="text-white/40 text-xs uppercase tracking-widest"
            >
              Florida Gulf Coast University &mdash; Fort Myers, FL
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── 5. Partner Logo Wall ────────────────────────────────────────────── */}
      <section className="bg-[#F9F8F5] py-20">
        <div className={C}>
          <motion.p
            {...fadeUpView(0)}
            className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#6B7280] mb-10 text-center"
          >
            Our Partners &amp; Portfolio Companies
          </motion.p>

          <motion.div
            {...fadeUpView(0.1)}
            className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4"
          >
            {partners.map((p) => (
              <div
                key={p.alt}
                className="relative aspect-square bg-white border border-[#E8E5DE] rounded-xl hover:shadow-md hover:border-[#C8C2B4] transition-all duration-200"
                title={p.label}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 11vw"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
