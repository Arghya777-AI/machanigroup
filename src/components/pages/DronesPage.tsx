"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface DronesPageProps {
  goToPage: (n: number) => void;
  totalPages?: number;
}

export default function DronesPage({ goToPage }: DronesPageProps) {
  void goToPage;
  return (
    <div className="h-full flex flex-col md:flex-row bg-[#0A2F6B] overflow-hidden">
      {/* Left: Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="md:w-[55%] relative overflow-hidden min-h-[280px]"
      >
        <Image
          src="/drones.png"
          alt="Drones"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A2F6B] to-transparent" />
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="md:w-[45%] flex flex-col justify-center px-8 md:px-12 py-10 md:py-0"
      >
        {/* Partner logos */}
        <div className="flex items-center gap-3 mb-2">
          {[
            { src: "/ND.png", alt: "Next Defence" },
            { src: "/TSALLA.png", alt: "Tsalla" },
            { src: "/OKULO.png", alt: "Okulo" },
          ].map((logo) => (
            <div key={logo.alt} className="relative w-8 h-8">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="32px"
              />
            </div>
          ))}
        </div>
        <p className="text-[#B5D4F4] text-xs mb-4">In partnership since 2021</p>

        <h1 className="text-6xl md:text-7xl font-bold text-white mb-3 leading-none">
          Drones
        </h1>
        <p className="text-[#B5D4F4] mb-6">
          VTOL + SUVI Solar UAV platforms for healthcare logistics and aerial intelligence.
        </p>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { name: "VTOL Platform", specs: ["120 km range", "180 min endurance", "Medical payload"] },
            { name: "SUVI Solar UAV", specs: ["8 hr flight time", "~1 kg solar array", "Extended ISR"] },
          ].map((platform) => (
            <div
              key={platform.name}
              className="bg-white/10 border border-white/20 rounded-xl p-4"
            >
              <h3 className="text-white font-bold text-xs mb-2">{platform.name}</h3>
              {platform.specs.map((s) => (
                <div key={s} className="flex items-center gap-1.5 text-[#B5D4F4] text-xs">
                  <span className="w-1 h-1 rounded-full bg-[#1B6FD8]" />
                  {s}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-4 flex items-center gap-3">
          <div className="relative w-16 h-8">
            <Image
              src="/TRESA.png"
              alt="ATRESA"
              fill
              className="object-contain object-left"
              sizes="64px"
            />
          </div>
          <p className="text-[#B5D4F4] text-xs">
            Tresa EV Platform — Electric mobility for healthcare campuses
          </p>
        </div>
      </motion.div>
    </div>
  );
}
