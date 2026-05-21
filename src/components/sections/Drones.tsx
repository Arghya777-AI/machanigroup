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

const okuloSpecs = [
  { label: "Range", value: "200km single-charge" },
  { label: "Endurance", value: "72hr+ solar capability" },
  { label: "Payload", value: "15kg max capacity" },
  { label: "Operations", value: "BVLOS certified" },
];

const tresaSpecs = [
  { label: "Range", value: "300km per charge" },
  { label: "Capacity", value: "40-tonne GVW" },
  { label: "Fast charge", value: "80% in 90 minutes" },
  { label: "Fleet", value: "AI-powered management" },
];

export default function Drones() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-[#0C1F4A] pt-36 pb-24">
        <div className={C}>
          <motion.div {...fadeUpView(0)}>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">
              AI Innovation Center &rarr; Drones &amp; Electric Mobility
            </p>
          </motion.div>
          <motion.div {...fadeUpView(0.08)}>
            <span className="inline-block text-[#0284C7] text-xs font-bold uppercase tracking-[0.2em] border border-[#0284C7]/40 rounded-full px-3 py-1 mb-6">
              Tresa · OKULO
            </span>
          </motion.div>
          <motion.h1
            {...fadeUpView(0.14)}
            className="font-black text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.8rem,5vw,4.5rem)" }}
          >
            Drones &amp; Electric Mobility
          </motion.h1>
          <motion.p
            {...fadeUpView(0.2)}
            className="text-white/70 text-lg leading-relaxed max-w-2xl"
          >
            VTOL and solar UAV platforms for aerial intelligence, healthcare logistics, and
            environmental monitoring — alongside Tresa EV commercial trucks reshaping sustainable
            freight.
          </motion.p>
        </div>
      </section>

      {/* 2. OKULO Aerial */}
      <section className="bg-[#F9F8F5] py-24">
        <div className={C}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left 5/12 */}
            <motion.div {...fadeUpView(0)} className="lg:col-span-5">
              <p className="text-[#0284C7] text-[11px] font-bold uppercase tracking-[0.25em] mb-3">
                OKULO
              </p>
              <h2 className="text-4xl font-bold text-[#0C1F4A] leading-tight mb-5">
                Aerial Intelligence Platform
              </h2>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
                An integrated ecosystem of UAV platforms, simulation environments, and AI
                analytics — built to serve healthcare logistics, environmental monitoring,
                emergency response, and smart city infrastructure across SWFL and beyond.
              </p>
              <div className="divide-y divide-[#E5E2D9]">
                {okuloSpecs.map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center py-3">
                    <span className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-wide">
                      {label}
                    </span>
                    <span className="text-[#0C1F4A] text-sm font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right 7/12 */}
            <motion.div {...fadeUpView(0.1)} className="lg:col-span-7">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/Aerial Intelligence Platform.png"
                  alt="OKULO Aerial Intelligence Platform"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Composite Drone Simulator */}
      <section className="bg-[#F2F0EA] py-20">
        <div className={C}>
          <motion.div {...fadeUpView(0)}>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg aspect-[16/9] mb-10">
              <Image
                src="/Composite Drone Simulator.png"
                alt="Composite Drone Simulator"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 95vw, 1280px"
              />
            </div>
          </motion.div>
          <motion.div {...fadeUpView(0.1)} className="max-w-2xl">
            <p className="text-[#0284C7] text-[11px] font-bold uppercase tracking-[0.25em] mb-3">
              Simulation
            </p>
            <h2 className="text-3xl font-bold text-[#0C1F4A] leading-tight mb-4">
              Composite Drone Simulator
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              High-fidelity simulation environment integrating multiple UAV form factors —
              solar VTOL, fixed-wing, and multi-rotor — within a unified AI-driven training
              and mission planning platform. Enables pilot certification, route optimization,
              and emergency response rehearsal without real-world risk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Tresa EV Trucks */}
      <section className="bg-[#F9F8F5] py-24">
        <div className={C}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left 7/12 */}
            <motion.div {...fadeUpView(0)} className="lg:col-span-7">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/Tresa Truck Render.png"
                  alt="Tresa EV Truck"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </motion.div>

            {/* Right 5/12 */}
            <motion.div {...fadeUpView(0.1)} className="lg:col-span-5">
              <p className="text-[#0284C7] text-[11px] font-bold uppercase tracking-[0.25em] mb-3">
                Tresa
              </p>
              <h2 className="text-4xl font-bold text-[#0C1F4A] leading-tight mb-5">
                Electric Freight &amp; Logistics
              </h2>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
                Tresa builds India&apos;s first indigenous electric commercial truck. Purpose-built
                for freight logistics — eliminating diesel dependency, reducing emissions, and
                pioneering EV freight across South Asia and beyond.
              </p>
              <div className="divide-y divide-[#E5E2D9]">
                {tresaSpecs.map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center py-3">
                    <span className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-wide">
                      {label}
                    </span>
                    <span className="text-[#0C1F4A] text-sm font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Tresa in context */}
      <section className="bg-[#F2F0EA] py-20">
        <div className={C}>
          <motion.div {...fadeUpView(0)}>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg aspect-[16/9]">
              <Image
                src="/tresa truck in woods.png"
                alt="Tresa Truck in Field"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 95vw, 1280px"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Case Study */}
      <section className="bg-[#0C1F4A] py-20">
        <div className={C}>
          <motion.div {...fadeUpView(0)} className="mb-10">
            <p className="text-[#0284C7] text-[11px] font-bold uppercase tracking-[0.25em] mb-3">
              Case Study
            </p>
            <h2 className="text-3xl font-bold text-white leading-tight">
              Drone Healthcare Logistics · Mayo Clinic &times; Zipline
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mt-4 max-w-2xl">
              In collaboration with Mayo Clinic and Zipline — the world&apos;s leading medical drone
              delivery company — demonstrating how aerial logistics can accelerate blood, vaccine,
              and medication delivery to underserved communities in SWFL.
            </p>
          </motion.div>
          <motion.div {...fadeUpView(0.1)}>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl aspect-[16/9]">
              <Image
                src="/Case Study Drone Healthcare Logistics with Mayo Clinic × Zipline.png"
                alt="Case Study: Drone Healthcare Logistics with Mayo Clinic × Zipline"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 95vw, 1280px"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="bg-[#F2F0EA] py-16">
        <div className={C}>
          <motion.div
            {...fadeUpView(0)}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          >
            <h2 className="text-2xl font-bold text-[#0C1F4A] leading-snug max-w-lg">
              Partner on Aerial &amp; Mobility Solutions
            </h2>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200 shrink-0"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
