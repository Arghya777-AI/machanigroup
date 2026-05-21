"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface AboutPageProps {
  goToPage: (n: number) => void;
  totalPages?: number;
}

const partners = [
  { src: "/MR.png", name: "Machani Robotics", alt: "MR" },
  { src: "/IV.png", name: "IndiVillage", alt: "IV" },
  { src: "/JANUS.png", name: "Janus", alt: "JANUS" },
  { src: "/ND.png", name: "Next Defence", alt: "ND" },
  { src: "/OKULO.png", name: "Okulo", alt: "OKULO" },
  { src: "/TRESA.png", name: "ATRESA", alt: "TRESA" },
  { src: "/TSALLA.png", name: "Tsalla", alt: "TSALLA" },
  { src: "/INKERS.png", name: "Inkers", alt: "INKERS" },
  { src: "/FGCU.png", name: "FGCU", alt: "FGCU" },
];

export default function AboutPage({ goToPage }: AboutPageProps) {
  return (
    <div className="h-full bg-white overflow-y-auto">
      <div className="px-8 md:px-16 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F6B] mb-2">
            About & Partners
          </h2>
          <p className="text-[#374151] text-lg max-w-xl">
            A coalition of world-class technology companies united around
            healthcare AI at FGCU.
          </p>
        </motion.div>

        {/* Logo wall */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-3 gap-4 mb-10"
        >
          {partners.map((p) => (
            <div
              key={p.alt}
              className="bg-[#F9FAFB] border border-[#B5D4F4] rounded-xl p-4 flex flex-col items-center gap-2"
            >
              <div className="relative w-16 h-10">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <span className="text-[#374151] text-xs font-medium text-center">
                {p.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Bottom columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Left: About FGCU */}
          <div>
            <h3 className="text-xl font-bold text-[#0A2F6B] mb-3">
              FGCU — Founding Partner
            </h3>
            <p className="text-[#374151] text-sm leading-relaxed mb-4">
              Florida Gulf Coast University&apos;s Marieb College of Health &amp;
              Human Services serves over 5,000 students across nursing, allied
              health, and clinical programs. With a 98.48% NCLEX pass rate and
              ~91% employment, FGCU is the ideal launchpad for the next
              generation of AI-enabled healthcare professionals.
            </p>
            <p className="text-[#374151] text-sm leading-relaxed">
              The AI Innovation Center is jointly operated with The Next New AI
              Venture Studio, bringing world-class technology partners to
              Southwest Florida&apos;s fastest-growing healthcare ecosystem.
            </p>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col justify-center gap-4">
            <h3 className="text-xl font-bold text-[#0A2F6B]">
              Partner With Us
            </h3>
            <p className="text-[#374151] text-sm leading-relaxed">
              Join the FGCU AI Innovation Center as a founding industry partner.
              Shape the future of healthcare AI, access world-class research
              talent, and deploy transformative technology at scale.
            </p>
            <button
              onClick={() => goToPage(0)}
              className="self-start bg-[#0A2F6B] text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#061a3e] transition-all duration-200 cursor-pointer"
            >
              Get in Touch →
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
