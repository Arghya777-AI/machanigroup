"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const domains = [
  {
    name: "Humanoid\nRobotics",
    angle: 60,
    tooltip: "RIA & CC companion robots\nMachani Robotics since 2018",
    href: "robotics",
  },
  {
    name: "Longevity\n& MedTech",
    angle: 120,
    tooltip: "SWFL healthspan hub\nFountain Life, BioPeak, biomedical partners",
    href: "longevity",
  },
  {
    name: "AI\nServices",
    angle: 180,
    tooltip: "Clinical data, NLP\ncomputer vision pipelines",
    href: "ai-services",
  },
  {
    name: "AI\nAgents",
    angle: 240,
    tooltip: "Healthcare automation\nJanus-powered sandbox",
    href: "ai-services",
  },
  {
    name: "Drones",
    angle: 300,
    tooltip: "Aerial intelligence\nVTOL + SUVI solar UAV",
    href: "drones",
  },
  {
    name: "Electric\nMobility",
    angle: 360,
    tooltip: "Tresa EV truck platform\nzero-emission logistics",
    href: "drones",
  },
];

const ORBIT_RADIUS = 190;
const CENTER = 300;
const SVG_SIZE = 600;

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

const mobileCards = [
  { name: "Humanoid Robotics", desc: "RIA & CC companion robots / Machani Robotics since 2018", href: "robotics" },
  { name: "Longevity & MedTech", desc: "SWFL healthspan hub / Fountain Life, BioPeak, biomedical partners", href: "longevity" },
  { name: "AI Services", desc: "Clinical data, NLP / computer vision pipelines", href: "ai-services" },
  { name: "AI Agents", desc: "Healthcare automation / Janus-powered sandbox", href: "ai-services" },
  { name: "Drones", desc: "Aerial intelligence / VTOL + SUVI solar UAV", href: "drones" },
  { name: "Electric Mobility", desc: "Tresa EV truck platform / zero-emission logistics", href: "drones" },
];

export default function EcosystemWheel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (href: string) => {
    const el = document.getElementById(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#E6F1FB] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="The AI Ecosystem"
          titleClassName="text-[#0A2F6B]"
          subtitleClassName="text-[#374151]"
          subtitle="Six interconnected innovation domains built around a foundation of Artificial Intelligence"
        />

        {/* Desktop SVG wheel */}
        <div className="hidden md:flex justify-center">
          <div className="relative" style={{ width: SVG_SIZE, height: SVG_SIZE }}>
            <svg
              width={SVG_SIZE}
              height={SVG_SIZE}
              viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
              style={{ overflow: "visible" }}
            >
              {/* Orbit ring */}
              <circle
                cx={CENTER}
                cy={CENTER}
                r={ORBIT_RADIUS}
                fill="none"
                stroke="#B5D4F4"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              {/* Rotating orbit group */}
              <g className="orbit-group" style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}>
                {domains.map((domain, i) => {
                  const rad = toRad(domain.angle);
                  const bx = CENTER + ORBIT_RADIUS * Math.cos(rad);
                  const by = CENTER + ORBIT_RADIUS * Math.sin(rad);

                  return (
                    <g key={i}>
                      {/* Line from center to bubble */}
                      <line
                        x1={CENTER}
                        y1={CENTER}
                        x2={bx}
                        y2={by}
                        stroke="#B5D4F4"
                        strokeWidth="1.5"
                      />
                      {/* Bubble */}
                      <circle
                        cx={bx}
                        cy={by}
                        r={55}
                        fill={hoveredIndex === i ? "#1558b0" : "#1B6FD8"}
                        style={{
                          filter: hoveredIndex === i ? "drop-shadow(0 0 12px #1B6FD8aa)" : "none",
                          cursor: "pointer",
                          transition: "filter 0.2s",
                        }}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => handleClick(domain.href)}
                      />
                      {/* Counter-rotate text so it stays upright */}
                      <text
                        x={bx}
                        y={by}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="white"
                        fontSize="12"
                        fontWeight="600"
                        style={{
                          cursor: "pointer",
                          fontFamily: "inherit",
                          transformOrigin: `${bx}px ${by}px`,
                          animation: "counterOrbit 60s linear infinite",
                        }}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => handleClick(domain.href)}
                      >
                        {domain.name.split("\n").map((line, li) => (
                          <tspan key={li} x={bx} dy={li === 0 ? "-0.6em" : "1.3em"}>
                            {line}
                          </tspan>
                        ))}
                      </text>
                    </g>
                  );
                })}
              </g>

              {/* Center circle */}
              <circle cx={CENTER} cy={CENTER} r={80} fill="#0A2F6B" />
              <text
                x={CENTER}
                y={CENTER}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="13"
                fontWeight="700"
                fontFamily="inherit"
              >
                <tspan x={CENTER} dy="-0.6em">Artificial</tspan>
                <tspan x={CENTER} dy="1.4em">Intelligence</tspan>
              </text>
            </svg>

            {/* Tooltip overlay */}
            {hoveredIndex !== null && (() => {
              const domain = domains[hoveredIndex];
              const rad = toRad(domain.angle);
              const bx = CENTER + ORBIT_RADIUS * Math.cos(rad);
              const by = CENTER + ORBIT_RADIUS * Math.sin(rad);
              const left = (bx / SVG_SIZE) * 100;
              const top = ((by + 65) / SVG_SIZE) * 100;

              return (
                <div
                  className="absolute pointer-events-none bg-[#0A2F6B] text-white text-xs rounded-lg px-3 py-2 shadow-lg w-48 text-center z-10"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  {domain.tooltip.split("\n").map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>

        {/* Mobile fallback grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {mobileCards.map((card) => (
            <motion.button
              key={card.name}
              onClick={() => handleClick(card.href)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="bg-[#1B6FD8] text-white rounded-xl p-4 text-left hover:bg-[#1558b0] transition-colors"
            >
              <div className="font-bold text-sm mb-1">{card.name}</div>
              <div className="text-[#B5D4F4] text-xs leading-relaxed">{card.desc}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
