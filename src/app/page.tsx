"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ─── data ─────────────────────────────────────────────────────── */
const domains = [
  {
    num: "01",
    label: "Humanoid Robotics",
    desc: "RIA & CC companion robots for clinical simulation and dementia care.",
    href: "/robotics",
    color: "#2563EB",
    tag: "RIA · CC Bot",
    logo: "/RIA.png",
  },
  {
    num: "02",
    label: "Longevity & Healthspan",
    desc: "The SWFL longevity hub — Fountain Life, BioPeak, regenerative medicine.",
    href: "/longevity",
    color: "#059669",
    tag: "Fountain Life · BioPeak",
    logo: null,
  },
  {
    num: "03",
    label: "AR / VR Training",
    desc: "Immersive clinical simulation — code blue, dementia, IDD interaction.",
    href: "/arvr",
    color: "#7C3AED",
    tag: "Next Defence",
    logo: "/ND.png",
  },
  {
    num: "04",
    label: "AI Services & Agents",
    desc: "Enterprise AI data pipelines and autonomous agent frameworks for healthcare.",
    href: "/ai-services",
    color: "#D97706",
    tag: "IndiVillage · Janus",
    logo: "/IV.png",
  },
  {
    num: "05",
    label: "Computer Vision",
    desc: "Industrial-grade vision intelligence for clinical and built environments.",
    href: "/vision",
    color: "#DC2626",
    tag: "Inkers",
    logo: "/INKERS.png",
  },
  {
    num: "06",
    label: "Drones & Electric Mobility",
    desc: "VTOL + solar UAV platforms and Tresa EV trucks for logistics and aerial intel.",
    href: "/drones",
    color: "#0284C7",
    tag: "Tresa · OKULO",
    logo: "/TRESA.png",
  },
];

const stats = [
  { value: "1 in 4",  label: "SWFL residents will be over 65 by 2030" },
  { value: "200K+",   label: "Projected US nursing shortage by 2030"   },
  { value: "98.48%",  label: "NCLEX first-time pass rate — Marieb College" },
];

const partners = [
  { src: "/RIA.png",    alt: "RIA",    w: 72  },
  { src: "/MR.png",     alt: "MR",     w: 80  },
  { src: "/ND.png",     alt: "Next Defence", w: 80 },
  { src: "/IV.png",     alt: "IndiVillage",  w: 88 },
  { src: "/INKERS.png", alt: "Inkers",  w: 80  },
  { src: "/JANUS.png",  alt: "Janus",   w: 72  },
  { src: "/TRESA.png",  alt: "Tresa",   w: 80  },
  { src: "/OKULO.png",  alt: "OKULO",   w: 72  },
];

/* ─── helpers ───────────────────────────────────────────────────── */
const C = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-8";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

function fadeUpView(delay = 0) {
  return {
    initial:     { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0  },
    viewport:    { once: true, margin: "-40px" } as const,
    transition:  { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

/* ─── stat counter ──────────────────────────────────────────────── */
function StatItem({ s, i }: { s: typeof stats[0]; i: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.13, ease: "easeOut" }}
      className="flex flex-col items-center text-center px-8 py-14"
      style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none" }}
    >
      <span
        className="font-black text-white mb-3 leading-none"
        style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", letterSpacing: "-0.03em" }}
      >
        {s.value}
      </span>
      <span className="text-sm text-white/50 leading-snug" style={{ maxWidth: 180 }}>
        {s.label}
      </span>
    </motion.div>
  );
}

/* ─── domain card ───────────────────────────────────────────────── */
function DomainCard({ d, i }: { d: typeof domains[0]; i: number }) {
  const [hov, setHov] = useState(false);

  return (
    <motion.div {...fadeUpView(i * 0.06)} className="h-full">
      <Link
        href={d.href}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="group flex flex-col h-full bg-white relative overflow-hidden"
        style={{
          borderRadius: 16,
          border: `1px solid ${hov ? d.color + "30" : "#E8E5DE"}`,
          borderTop: `3px solid ${d.color}`,
          padding: "32px 30px 28px",
          boxShadow: hov
            ? `0 24px 60px rgba(0,0,0,0.11), 0 4px 16px rgba(0,0,0,0.06)`
            : "0 2px 10px rgba(0,0,0,0.04)",
          transform: hov ? "translateY(-5px)" : "translateY(0)",
          transition: "all .3s cubic-bezier(.22,1,.36,1)",
        }}
      >
        {/* Ghost number */}
        <span
          className="absolute right-5 bottom-4 font-black pointer-events-none select-none"
          style={{
            fontSize: "6rem",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: hov ? d.color + "12" : "#EDEAE2",
            transition: "color .35s",
          }}
        >
          {d.num}
        </span>

        {/* Top row: tag + logo */}
        <div className="flex items-center justify-between mb-6">
          <span
            className="text-[9px] font-bold uppercase tracking-[0.28em]"
            style={{ color: d.color }}
          >
            {d.tag}
          </span>
          {d.logo && (
            <div className="relative h-6 w-14 opacity-60">
              <Image src={d.logo} alt={d.tag} fill className="object-contain object-right" sizes="56px" />
            </div>
          )}
        </div>

        <h3
          className="font-bold leading-snug mb-3 text-[#0F1A2E]"
          style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}
        >
          {d.label}
        </h3>
        <p className="text-[13.5px] leading-relaxed flex-1 mb-7 text-[#7A766F]">{d.desc}</p>

        <span
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em]"
          style={{ color: d.color }}
        >
          Explore
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            style={{ transform: hov ? "translateX(3px)" : "translateX(0)", transition: "transform .25s" }}
          >
            <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
}

/* ─── page ──────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div style={{ background: "#F9F8F5" }}>

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="pt-28 pb-20 overflow-visible">
        <div className={C}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT — copy */}
            <div>

              {/* Eyebrow */}
              <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-10">
                <div className="relative w-9 h-9 flex-shrink-0">
                  <Image src="/FGCU.png" alt="FGCU" fill sizes="36px" className="object-contain" />
                </div>
                <span className="w-px h-5 bg-[#D5D0C8]" />
                <span className="text-[10.5px] font-semibold text-[#9A9590] uppercase tracking-[0.22em]">
                  AI Innovation Center at FGCU
                </span>
              </motion.div>

              {/* Badge */}
              <motion.div {...fadeUp(0.07)}>
                <span className="inline-flex items-center gap-2 bg-[#EBF1FF] px-4 py-1.5 rounded-full mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B4FD8]" />
                  <span className="text-[10.5px] font-semibold text-[#1B4FD8] uppercase tracking-[0.18em]">
                    Marieb College · SW Florida
                  </span>
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                {...fadeUp(0.13)}
                className="font-black text-[#0F1A2E] leading-[1.03] tracking-tight mb-7"
                style={{ fontSize: "clamp(2.6rem, 4.5vw, 4.2rem)" }}
              >
                Where Healthcare<br />
                Meets the Future<br />
                <span style={{ color: "#1B4FD8" }}>of AI</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                {...fadeUp(0.2)}
                className="text-[#6B7280] leading-relaxed mb-11"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.12rem)", maxWidth: 480 }}
              >
                A next-generation venture studio at Florida Gulf Coast University —
                where robotics, longevity, AR/VR, and AI converge for a healthier
                Southwest Florida.
              </motion.p>

              {/* CTAs */}
              <motion.div {...fadeUp(0.27)} className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-8 py-4 font-bold text-[12.5px] uppercase tracking-[0.14em] text-white rounded-xl transition-all duration-200"
                  style={{ background: "#1B4FD8", boxShadow: "0 6px 24px rgba(27,79,216,0.30)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#1640B8")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#1B4FD8")}
                >
                  Partner With Us
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="#frontiers"
                  className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-[12.5px] uppercase tracking-[0.14em] text-[#374151] rounded-xl border border-[#D1D5DB] hover:border-[#374151] hover:bg-white transition-all duration-200"
                >
                  Explore Frontiers
                </Link>
              </motion.div>
            </div>

            {/* RIGHT — hero image */}
            <motion.div {...fadeUp(0.17)} className="relative">
              <div className="relative rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.14), 0 8px 24px rgba(0,0,0,0.07)" }}>
                <Image
                  src="/Slide 5.png"
                  alt="FGCU AI Innovation Program — Six Frontiers"
                  width={900} height={506}
                  className="w-full h-auto block"
                  priority
                />
                {/* Bottom overlay with caption + metrics */}
                <div className="absolute bottom-0 inset-x-0 px-5 py-4"
                  style={{ background: "linear-gradient(to top, rgba(10,24,60,0.92) 0%, rgba(10,24,60,0.60) 60%, transparent 100%)" }}>
                  <p className="text-[9.5px] font-semibold text-white/50 uppercase tracking-[0.22em] mb-2.5">
                    Six Frontiers · AI Innovation Ecosystem
                  </p>
                  {/* Inline metric chips */}
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3.5 py-2 border border-white/15">
                      <p className="font-black text-white leading-none text-lg">98.48%</p>
                      <p className="text-[10px] text-white/55 font-medium mt-0.5">NCLEX Pass Rate</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3.5 py-2 border border-white/15">
                      <p className="font-black text-white leading-none text-lg">200K+</p>
                      <p className="text-[10px] text-white/55 font-medium mt-0.5">Nursing Gap</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3.5 py-2 border border-white/15">
                      <p className="font-black text-white leading-none text-lg">1 in 4</p>
                      <p className="text-[10px] text-white/55 font-medium mt-0.5">SWFL Over 65</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PARTNER LOGOS
      ══════════════════════════════════════════════════ */}
      <section className="py-9 border-y border-[#E5E1D9]" style={{ background: "#F4F2EC" }}>
        <div className={C}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10">
            <p className="text-[9px] font-semibold text-[#B0A99F] uppercase tracking-[0.3em] flex-shrink-0 whitespace-nowrap">
              Portfolio Companies
            </p>
            <div className="w-px h-5 bg-[#D8D4CC] hidden sm:block flex-shrink-0" />
            <div className="flex flex-wrap items-center gap-7 sm:gap-9">
              {partners.map((p) => (
                <div
                  key={p.alt}
                  className="relative opacity-65 hover:opacity-100 transition-opacity duration-200"
                  style={{ height: 22, width: p.w }}
                >
                  <Image src={p.src} alt={p.alt} fill className="object-contain" sizes={`${p.w}px`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#0C1F4A" }}>
        <div className={C}>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07]">
            {stats.map((s, i) => <StatItem key={s.value} s={s} i={i} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SIX FRONTIERS
      ══════════════════════════════════════════════════ */}
      <section id="frontiers" className="py-28" style={{ background: "#F2F0EA" }}>
        <div className={C}>

          {/* Section header */}
          <motion.div {...fadeUpView(0)} className="mb-16">
            <p className="text-[9px] font-mono uppercase tracking-[0.38em] text-[#9A9590] mb-3">
              Portfolio Domains
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 pb-7 border-b-2 border-[#D8D5CC]">
              <h2
                className="font-black text-[#0F1A2E] leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Six Frontiers
              </h2>
              <span className="text-[10px] font-mono text-[#9A9590] uppercase tracking-widest">
                06 Active Domains
              </span>
            </div>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((d, i) => <DomainCard key={d.href} d={d} i={i} />)}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MISSION STATEMENT
      ══════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: "#F9F8F5" }}>
        <div className={C}>
          <motion.div
            {...fadeUpView(0)}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
          >
            {/* Left column */}
            <div className="lg:col-span-5">
              <p className="text-[9px] font-mono uppercase tracking-[0.38em] text-[#9A9590] mb-4">
                Our Mission
              </p>
              <h2
                className="font-black text-[#0F1A2E] leading-tight mb-6"
                style={{ fontSize: "clamp(1.9rem, 3vw, 2.7rem)" }}
              >
                Translating AI breakthroughs into health outcomes for Southwest Florida
              </h2>
              <div className="w-12 h-0.5 bg-[#1B4FD8] mb-6" />
              <p className="text-[#6B7280] leading-relaxed text-[15px]">
                The FGCU AI Innovation Center bridges academic research and real-world deployment
                — partnering with healthcare providers, startups, and global technology companies
                to build solutions that matter locally and scale nationally.
              </p>
            </div>

            {/* Right column — image grid */}
            <motion.div
              {...fadeUpView(0.1)}
              className="lg:col-span-7 grid grid-cols-2 gap-4"
            >
              {[
                { src: "/AI Driven Transformation Opportunities.png", label: "AI Transformation" },
                { src: "/Healthcare Investment Network.png",           label: "Healthcare Network" },
                { src: "/Longevity & Healthspan Ecosystem.png",        label: "Longevity Ecosystem" },
                { src: "/MedTech & Biomedical Innovation.png",         label: "MedTech Innovation" },
              ].map((img, i) => (
                <motion.div
                  key={img.label}
                  {...fadeUpView(0.06 * i)}
                  className="relative overflow-hidden rounded-xl aspect-[4/3]"
                  style={{ boxShadow: "0 4px 18px rgba(0,0,0,0.08)" }}
                >
                  <Image src={img.src} alt={img.label} fill className="object-cover" sizes="320px" />
                  <div className="absolute inset-0" style={{ background: "rgba(12,31,74,0.18)" }} />
                  <span
                    className="absolute bottom-3 left-3 text-[10px] font-semibold text-white/80 uppercase tracking-[0.15em]"
                    style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
                  >
                    {img.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FOOTER CTA
      ══════════════════════════════════════════════════ */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ background: "#0C1F4A" }}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(59,130,246,0.08), transparent 60%)" }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className={`${C} relative`}>
          <motion.div
            {...fadeUpView(0)}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-14"
          >
            {/* Copy */}
            <div style={{ maxWidth: 520 }}>
              <p className="text-[9px] font-mono uppercase tracking-[0.38em] text-white/30 mb-6">
                Get Involved
              </p>
              <h3
                className="font-black text-white leading-[1.03] tracking-tight mb-6"
                style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)" }}
              >
                Ready to shape<br />
                the future of<br />
                healthcare AI?
              </h3>
              <p className="text-white/50 leading-relaxed" style={{ fontSize: "15px", maxWidth: 400 }}>
                Join FGCU&apos;s pioneering venture studio at the intersection of medicine,
                technology, and longevity.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3.5 w-full lg:w-auto" style={{ minWidth: 240 }}>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2.5 px-10 py-4.5 font-bold text-[12.5px] uppercase tracking-[0.14em] text-[#0C1F4A] bg-white rounded-xl hover:bg-[#EBF1FF] transition-colors duration-200"
                style={{ boxShadow: "0 4px 22px rgba(255,255,255,0.10)", paddingTop: "1.1rem", paddingBottom: "1.1rem" }}
              >
                Partner With Us
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="#frontiers"
                className="inline-flex items-center justify-center gap-2 px-10 py-4.5 font-semibold text-[12.5px] uppercase tracking-[0.14em] text-white/60 rounded-xl border border-white/15 hover:border-white/35 hover:text-white transition-all duration-200"
                style={{ paddingTop: "1.1rem", paddingBottom: "1.1rem" }}
              >
                View All Frontiers
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}
