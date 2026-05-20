"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionBadge from "@/components/ui/SectionBadge";
import CaseStudyBlock from "@/components/ui/CaseStudyBlock";

const vtolGrid = [
  { title: "VTOL Drone", description: "Vertical take-off and landing platform for hospital logistics, medical supply delivery, and campus security operations." },
  { title: "SUVI Solar UAV", description: "Solar-powered fixed-wing UAV for extended range aerial mapping, coastal monitoring, and sustainable surveillance missions." },
  { title: "Aerial Mapping", description: "High-resolution photogrammetry for campus infrastructure, environmental monitoring, and disaster response support." },
  { title: "Inspection & Logistics", description: "Automated inspection of infrastructure, buildings, and utility corridors with AI-powered defect detection." },
];

const simulatorPoints = [
  "Multi-axis drone flight simulator with realistic physics and weather simulation",
  "Software-in-the-loop training for autonomous mission planning and obstacle avoidance",
  "FGCU curriculum integration: FAA Part 107 certification prep for 100+ students per year",
  "Research track: AI navigation algorithms, swarm coordination, edge computing payloads",
  "Industry partnerships with SWFL emergency management for disaster response drone protocols",
];

const tresaGrid = [
  { title: "Vehicle Platforms", description: "Medium and heavy-duty electric truck platform optimized for last-mile logistics, refuse management, and industrial transport." },
  { title: "Key Feature", description: "Modular battery architecture enabling rapid swap for continuous fleet operation — critical for healthcare supply chains." },
  { title: "Fleet Economics", description: "60-70% lower total cost of ownership vs diesel equivalents over 5-year lifecycle. Zero direct emissions for campus ESG targets." },
  { title: "Industrial Use Cases", description: "Hospital supply delivery, campus shuttle, construction material transport, and municipal fleet electrification." },
];

const dronesStats = [
  { value: "100+", label: "Students trained per year in drone operations" },
  { value: "10x", label: "Faster delivery vs ground transport for urgent medical supplies" },
  { value: "24/7", label: "Autonomous monitoring capability with AI-powered surveillance" },
];

export default function DronesElectricMobility() {
  return (
    <section id="drones" className="bg-[#0A2F6B] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-4">
          <SectionBadge text="In partnership with Devic.Earth (since 2021) + MAFi" variant="blue" />
        </div>
        <SectionHeader
          title="Drones & Electric Mobility"
          titleClassName="text-white"
          subtitle="Aerial intelligence and zero-emission logistics transforming healthcare delivery and campus operations."
          subtitleClassName="text-[#B5D4F4]"
        />

        {/* 8.1 VTOL Platform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-white mb-6">8.1 VTOL Platform</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {vtolGrid.map((item) => (
              <div
                key={item.title}
                className="bg-white/10 border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-colors"
              >
                <h4 className="font-semibold text-white mb-1 text-sm">{item.title}</h4>
                <p className="text-[#B5D4F4] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {dronesStats.map((stat) => (
            <div key={stat.value} className="bg-white/10 border border-white/20 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-[#B5D4F4]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 8.2 Composite Drone Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-white mb-4">8.2 Composite Drone Simulator</h3>
          <div className="bg-white/10 border border-white/20 rounded-xl p-6">
            <ul className="space-y-3">
              {simulatorPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-[#B5D4F4] text-sm">
                  <span className="text-[#1B6FD8] font-bold mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* 8.3 Electric Mobility — Tresa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xl font-bold text-white">8.3 Electric Mobility — Tresa</h3>
            <SectionBadge text="Tresa Motors" variant="blue" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tresaGrid.map((item) => (
              <div
                key={item.title}
                className="bg-white/10 border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-colors"
              >
                <h4 className="font-semibold text-white mb-1 text-sm">{item.title}</h4>
                <p className="text-[#B5D4F4] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Case studies */}
        <div className="space-y-6">
          <CaseStudyBlock
            title="Mayo Clinic × Zipline — Medical Drone Delivery"
            context="Mayo Clinic partnered with Zipline to design and deploy a medical drone delivery network connecting its hospital campuses and remote clinics across a 150-mile service area."
            solution="Fixed-wing autonomous drones delivering blood products, medications, and specimens with 30-minute turnaround times — replacing courier vehicles for time-sensitive deliveries."
            impact="98.6% on-time delivery rate. Blood wastage reduced 67% through real-time demand fulfillment. $2.1M annual savings in courier costs. Model now informing FGCU's Lee Health drone delivery pilot design."
          />
          <CaseStudyBlock
            title="Tesla × Stanford — Campus Electric Logistics"
            context="Stanford University sought to electrify its entire campus operations fleet — from facilities management to medical center supply logistics — as part of its carbon neutrality commitment."
            solution="Deployment of electric fleet management platform with predictive charging scheduling, route optimization, and integration with campus energy management systems for renewable-first charging."
            impact="92% fleet electrification achieved in 18 months. Campus fleet emissions reduced 87%. $1.8M annual fuel savings reinvested into research programs. Blueprint adopted by 7 peer universities."
          />
        </div>
      </div>
    </section>
  );
}
