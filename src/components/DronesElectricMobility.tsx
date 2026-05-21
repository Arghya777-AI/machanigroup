"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import CaseStudyBlock from "@/components/ui/CaseStudyBlock";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const vtolSpecs = [
  {
    title: "VTOL Drone",
    specs: ["Range: Up to 120 km corridor coverage", "180-minute flight endurance", "Day/Night inspection & monitoring"],
  },
  {
    title: "SUVI Solar UAV",
    specs: ["Up to 8 hours of continuous surveillance", "~1 kg with interchangeable payloads", "Solar-electric long-endurance platform"],
  },
];

const aerialCapabilities = [
  {
    title: "Aerial Mapping & Surveying",
    description: "High-resolution terrain mapping, LiDAR, and 3D site modeling",
  },
  {
    title: "Construction Progress Monitoring",
    description: "Automated site tracking, weekly reports, and deviation detection",
  },
  {
    title: "Inspection & Asset Monitoring",
    description: "Thermal, structural, and visual inspection of critical infrastructure",
  },
  {
    title: "Logistics & Material Movement",
    description: "Light payload delivery across difficult or inaccessible terrain",
  },
];

const dronesImpact = [
  { value: "100+", label: "Students/Yr Exposure to drones and spatial AI systems" },
  { value: "10x Faster", label: "Inspection potential for infrastructure intelligence" },
  { value: "24/7", label: "Monitoring Capability" },
];

const simulatorFeatures = [
  "Multi-UAV training (ISR, FPV, logistics, weaponized)",
  "Realistic flight & mission simulation",
  "Simulates 100–120 km range | 3–6 hr endurance missions",
  "Day/night & multi-terrain operations",
  "Performance analytics & multi-user training",
];

const simulatorImpact = [
  { value: "Up to 80%", label: "Faster operator training cycles" },
  { value: "5x", label: "Increase in trained pilots per batch" },
];

const tresaFeatures = [
  {
    title: "Intelligent Vehicle Core",
    description: "Central compute and connected architecture for next-gen truck intelligence",
  },
  {
    title: "Integrated Electric Powertrain",
    description: "High-voltage battery, motor, inverter, and vehicle control systems built as one platform",
  },
  {
    title: "Driver-Centric Cabin",
    description: "Designed around safety, comfort, visibility, and long-haul productivity",
  },
  {
    title: "Heavy-Duty EV Architecture",
    description: "18T and 55T electric truck platforms purpose-built for logistics at scale",
  },
];

const tresaUseCases = [
  {
    title: "Cleaner & Safer Freight Movement",
    description: "Zero tailpipe emissions combined with a safer, more driver-centric cabin experience designed for long-haul comfort, visibility, and road safety.",
  },
  {
    title: "Long-Haul Logistics Electrification",
    description: "Electric 18T and 55T trucks for parcel, e-commerce, auto-parts, tankers, and intercity freight movement.",
  },
  {
    title: "Fleet Economics Transformation",
    description: "Lower fuel dependence, reduced operating cost, and better payback for high-utilization commercial fleets.",
  },
  {
    title: "Industrial & Heavy-Duty Operations",
    description: "Purpose-built HCV platforms for cement, mining, steel, construction, ports, and closed-loop industrial routes.",
  },
];

export default function DronesElectricMobility() {
  return (
    <section id="drones" className="bg-[#0A2F6B] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="In partnership with Next Defence & Tsalla Aerospace since 2021 | Okulo (in discussion)"
          badgeVariant="blue"
          title="Drones"
          titleClassName="text-white"
          subtitle="Long-range, lightweight vertical takeoff and landing platforms for extended ISR missions with full autonomy."
          subtitleClassName="text-[#B5D4F4]"
        />

        {/* Drones hero */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-1 gap-6">
                {vtolSpecs.map((drone) => (
                  <div key={drone.title} className="bg-white/10 border border-white/20 rounded-xl p-6">
                    <h4 className="font-bold text-white text-base mb-3">{drone.title}</h4>
                    <ul className="space-y-2">
                      {drone.specs.map((spec) => (
                        <li key={spec} className="flex items-start gap-2 text-[#B5D4F4] text-sm">
                          <span className="text-[#1B6FD8] font-bold mt-0.5">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-3 flex-wrap">
                <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 flex items-center gap-2">
                  <div className="relative w-8 h-8">
                    <Image src="/ND.png" alt="Next Defence" fill className="object-contain" />
                  </div>
                  <span className="text-white text-xs font-medium">Next Defence</span>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 flex items-center gap-2">
                  <div className="relative w-8 h-8">
                    <Image src="/TSALLA.png" alt="Tsalla Aerospace" fill className="object-contain" />
                  </div>
                  <span className="text-white text-xs font-medium">Tsalla Aerospace</span>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 flex items-center gap-2">
                  <div className="relative w-8 h-8">
                    <Image src="/OKULO.png" alt="Okulo Aerospace" fill className="object-contain" />
                  </div>
                  <span className="text-white text-xs font-medium">Okulo Aerospace</span>
                </div>
              </div>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/drones.png"
                alt="Drones — VTOL and SUVI platforms"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Aerial Intelligence Platform */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/Aerial%20Intelligence%20Platform.png"
                alt="Aerial Intelligence Platform"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Aerial Intelligence Platform</h3>
              <div className="space-y-4">
                {aerialCapabilities.map((cap) => (
                  <div key={cap.title} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#1B6FD8] mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-white text-sm">{cap.title}</div>
                      <div className="text-[#B5D4F4] text-sm">{cap.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Impact */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {dronesImpact.map((stat) => (
                  <div key={stat.value} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-[10px] text-[#B5D4F4] mt-1 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Composite Drone Simulator */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Composite Drone Simulator</h3>
              <p className="text-[#B5D4F4] text-sm mb-6 leading-relaxed">
                Advanced simulation platform for drone pilot training, replicating real-world scenarios/missions with high-fidelity physics and immersive environments.
              </p>
              <ul className="space-y-3 mb-6">
                {simulatorFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-[#B5D4F4] text-sm">
                    <span className="text-[#1B6FD8] font-bold mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-4">
                {simulatorImpact.map((stat) => (
                  <div key={stat.value} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-[#B5D4F4] text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "9/16", maxHeight: "520px" }}>
              <Image
                src="/Composite%20Drone%20Simulator.png"
                alt="Composite Drone Simulator"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </motion.div>

        {/* Drone Healthcare Logistics image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Drone Healthcare Logistics</h3>
              <p className="text-[#B5D4F4] text-sm leading-relaxed mb-4">
                Autonomous drone delivery is transforming last-mile medical logistics — getting critical supplies to the right place at the right time, regardless of terrain or traffic.
              </p>
              <ul className="space-y-2">
                {[
                  "Blood, vaccines, and medications delivered in minutes",
                  "Serves remote, rural, and underserved communities",
                  "Zero emissions, zero road infrastructure required",
                  "24/7 autonomous operation with real-time tracking",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#B5D4F4] text-sm">
                    <span className="text-[#1B6FD8] font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/drone%20healthcare%20study.png"
                alt="Drone healthcare logistics in action"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </motion.div>

        {/* Case Study — Drones */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-20"
        >
          <CaseStudyBlock
            title="Drone Healthcare Logistics with Mayo Clinic × Zipline"
            image="/Case%20Study%20Drone%20Healthcare%20Logistics%20with%20Mayo%20Clinic%20%C3%97%20Zipline.png"
            imageAlt="Mayo Clinic × Zipline drone healthcare logistics case study"
            context="Last-mile medical logistics is a global crisis. Critical supplies — blood, vaccines, post-surgical medications — are time-sensitive, perishable, and frequently delayed by traffic, weather, or geography."
            solution="Founded in 2014, Zipline designed and operates the world's largest autonomous medical drone delivery system. Expanded across 4 continents and now serves 5,000+ hospitals and health facilities. In the US, partnered with Mayo Clinic for the Advanced Care at Home program — delivering medications and medical supplies to facilities in Florida and Minnesota within minutes."
            impact="2 million+ commercial autonomous deliveries since 2016 — with zero safety incidents. 2025: $150M US State Department partnership to scale Zipline to potentially 130M more people."
            source="Source: Mayo × Zipline Care at Home"
          />
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-20" />

        {/* Electric Mobility — Tresa */}
        <div className="mb-6">
          <SectionHeader
            badge="In partnership with ATRESA since 2020"
            badgeVariant="blue"
            title="AI-Powered Electric Mobility"
            titleClassName="text-white"
            subtitle="Heavy-duty EV architecture purpose-built for logistics at scale."
            subtitleClassName="text-[#B5D4F4]"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-20 h-8">
                  <Image src="/TRESA.png" alt="ATRESA" fill className="object-contain" />
                </div>
              </div>
              <div className="space-y-4">
                {tresaFeatures.map((feat) => (
                  <div key={feat.title} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#1B6FD8] mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-white text-sm">{feat.title}</div>
                      <div className="text-[#B5D4F4] text-sm">{feat.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/10" }}>
              <Image
                src="/Tresa%20Truck%20Render.png"
                alt="TRESA Electric Truck"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </motion.div>

        {/* Tresa on the Road */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/tresa%20truck%20in%20woods.png"
                alt="Tresa electric truck on road"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Tresa on the Road</h3>
              <div className="space-y-4">
                {tresaUseCases.map((uc) => (
                  <div key={uc.title} className="bg-white/10 border border-white/20 rounded-xl p-5">
                    <h4 className="font-bold text-white text-sm mb-1">{uc.title}</h4>
                    <p className="text-[#B5D4F4] text-sm leading-relaxed">{uc.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
