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

const pillars = [
  {
    title: "Ultra-Premium Longevity",
    sub: "Fountain Life",
    image: "/Ultra-Premium Longevity Fountain Life.png",
    desc: "Executive-tier diagnostics and precision medicine. Whole-body MRI, GRAIL multi-cancer detection, and AI-driven preventive health protocols for high-net-worth individuals.",
    stats: [
      { v: "30+", l: "Advanced diagnostics per visit" },
      { v: "3×", l: "Early cancer detection improvement" },
    ],
  },
  {
    title: "Accessible Executive Health",
    sub: "BioPeak",
    image: "/Accessible Executive Health BioPeak.png",
    desc: "Democratizing premium health optimization. Biomarker testing, personalized supplementation, metabolic coaching, and longevity protocols accessible beyond the ultra-wealthy.",
    stats: [
      { v: "500+", l: "Biomarkers tracked" },
      { v: "12mo", l: "Personalized health roadmap" },
    ],
  },
];

const innovations = [
  {
    title: "MedTech & Biomedical Innovation",
    image: "/MedTech & Biomedical Innovation.png",
    body: "Immunis (senolytic immunotherapy), AiVita (therapeutic vaccines), and the Healthcare Innovation Pipeline — translating lab discoveries into deployable clinical treatments.",
    tag: "Biomedical",
    tagColor: "#1B6FD8",
  },
  {
    title: "Regenerative & Longevity Therapeutics",
    image: "/Regenerative & Longevity Therapeutics.png",
    body: "Senolytics, stem-cell therapies, peptide protocols, and NAD+ restoration targeting the root biological mechanisms of aging — not just symptoms.",
    tag: "Therapeutics",
    tagColor: "#059669",
  },
  {
    title: "Targeted Brain & Cognitive Longevity",
    image: "/Targeted Brain & Cognitive Longevity.png",
    body: "Neurofeedback, near-infrared therapy, and precision cognitive protocols. Partnered with dementia care research at Shady Rest and Baker Senior Center.",
    tag: "Neuroscience",
    tagColor: "#6C3FC5",
  },
];

const networkBullets = [
  "Longevity tech & diagnostics dealflow",
  "Strategic health system partnerships",
  "Faculty research commercialization",
  "Student venture seed capital pathways",
];

export default function Longevity() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-[#0C1F4A] pt-36 pb-24">
        <div className={C}>
          <motion.div {...fadeUpView(0)}>
            <p className="text-white/50 text-sm mb-4 tracking-wide">
              AI Innovation Center{" "}
              <span className="mx-2 text-white/30">→</span>
              Longevity &amp; Healthspan
            </p>
          </motion.div>
          <motion.div {...fadeUpView(0.08)}>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-[#059669] border border-[#059669]/40 rounded-full px-4 py-1 mb-6">
              Fountain Life · BioPeak
            </span>
          </motion.div>
          <motion.h1
            {...fadeUpView(0.15)}
            className="text-white font-black leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
          >
            Longevity &amp; Healthspan
          </motion.h1>
          <motion.p
            {...fadeUpView(0.22)}
            className="text-white/70 text-lg leading-relaxed max-w-2xl"
          >
            A comprehensive ecosystem spanning ultra-premium diagnostics, accessible health optimization, regenerative medicine, and cognitive longevity — anchored at FGCU.
          </motion.p>
        </div>
      </section>

      {/* 2. Ecosystem Diagram */}
      <section className="bg-[#F9F8F5] py-20">
        <div className={C}>
          <motion.div
            {...fadeUpView(0)}
            className="relative w-full rounded-2xl overflow-hidden shadow-xl"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src="/Longevity & Healthspan Ecosystem.png"
              alt="Longevity & Healthspan Ecosystem diagram"
              fill
              className="object-contain bg-white"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 95vw, 1280px"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Pillars */}
      <section className="bg-[#F2F0EA] py-24">
        <div className={C}>
          <motion.div {...fadeUpView(0)} className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#059669] mb-3">
              Our Partners
            </p>
            <h2 className="text-4xl font-black text-[#0C1F4A] leading-tight">
              Two Pillars of the Longevity Hub
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.sub}
                {...fadeUpView(i * 0.1)}
                className="bg-white rounded-[14px] overflow-hidden hover:shadow-xl transition-shadow duration-300"
                style={{ borderTop: "3px solid #059669" }}
              >
                <div
                  className="relative w-full bg-white"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#059669] mb-2">
                    {p.sub}
                  </p>
                  <h3 className="text-2xl font-bold text-[#0C1F4A] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>
                  <div className="flex gap-8">
                    {p.stats.map((s) => (
                      <div key={s.l}>
                        <div className="text-2xl font-bold text-[#0C1F4A]">
                          {s.v}
                        </div>
                        <div className="text-xs text-[#6B7280] mt-0.5">
                          {s.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Innovation Tracks */}
      <section className="bg-[#F9F8F5] py-24">
        <div className={C}>
          <motion.div {...fadeUpView(0)} className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#059669] mb-3">
              Innovation Tracks
            </p>
            <h2 className="text-4xl font-black text-[#0C1F4A] leading-tight">
              Where Science Meets Longevity
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {innovations.map((inn, i) => (
              <motion.div
                key={inn.title}
                {...fadeUpView(i * 0.1)}
                className="bg-white rounded-[14px] overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={inn.image}
                    alt={inn.title}
                    fill
                    className="object-contain bg-[#F9F8F5] p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4 inline-block text-white"
                    style={{ backgroundColor: inn.tagColor }}
                  >
                    {inn.tag}
                  </span>
                  <h3 className="text-base font-bold text-[#0C1F4A] mb-2">
                    {inn.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {inn.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Healthcare Investment Network */}
      <section className="bg-[#F2F0EA] py-24">
        <div className={C}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              {...fadeUpView(0)}
              className="relative w-full rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/Healthcare Investment Network.png"
                alt="Healthcare Investment Network"
                fill
                className="object-contain bg-white p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div {...fadeUpView(0.12)}>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#059669] mb-4">
                Investment Network
              </p>
              <h3 className="text-3xl font-bold text-[#0C1F4A] mb-4 leading-tight">
                Connecting Capital to Healthcare Innovation
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                GHX — the Global Health Exchange — bridges FGCU&apos;s longevity portfolio companies with strategic investors, health systems, and corporate partners. A curated network built for healthcare dealflow.
              </p>
              <div className="space-y-3">
                {networkBullets.map((item) => (
                  <div key={item} className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#059669] flex-shrink-0" />
                    <span className="text-[#374151] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Case Study */}
      <section className="bg-[#0C1F4A] py-20">
        <div className={C}>
          <motion.div {...fadeUpView(0)} className="mb-10 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#059669] mb-3">
              Case Study
            </p>
            <h2 className="text-4xl font-black text-white leading-tight">
              Stanford × Buck Institute
            </h2>
          </motion.div>

          <motion.div
            {...fadeUpView(0.1)}
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src="/Case Study Longevity & MedTech at Stanford × Buck Institute.png"
              alt="Case Study: Longevity & MedTech at Stanford × Buck Institute"
              fill
              className="object-contain bg-white"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 95vw, 1280px"
            />
          </motion.div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="bg-[#F2F0EA] py-16">
        <div className={C}>
          <motion.div
            {...fadeUpView(0)}
            className="text-center"
          >
            <h2 className="text-3xl font-black text-[#0C1F4A] mb-6">
              Join the Longevity Hub
            </h2>
            <Link
              href="/about"
              className="inline-block bg-[#059669] hover:bg-[#047857] text-white font-bold text-sm px-8 py-3.5 rounded-full transition-colors duration-200"
            >
              Get Involved
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
