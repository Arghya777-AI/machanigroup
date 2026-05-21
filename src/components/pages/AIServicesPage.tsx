"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface AIServicesPageProps {
  goToPage: (n: number) => void;
  totalPages?: number;
}

const capabilities = [
  "Medical image labeling & dataset curation",
  "Clinical NLP & document structuring",
  "Real-time patient data pipelines",
  "Model training & evaluation services",
];

export default function AIServicesPage({ goToPage }: AIServicesPageProps) {
  void goToPage;
  return (
    <div className="h-full flex flex-col md:flex-row bg-[#F9FAFB] overflow-hidden">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-10 md:py-0"
      >
        <span className="text-[#1B6FD8] text-xs font-bold uppercase tracking-widest mb-3">
          In partnership with IndiVillage since 2009
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F6B] mb-4 leading-tight">
          AI Services & Data
        </h2>
        <p className="text-[#374151] mb-6 leading-relaxed">
          Enterprise-grade AI data services for healthcare — from data pipelines
          to decision-making systems.
        </p>

        <ul className="space-y-2 mb-6">
          {capabilities.map((cap) => (
            <li key={cap} className="flex items-start gap-3 text-[#374151] text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1B6FD8] flex-shrink-0" />
              {cap}
            </li>
          ))}
        </ul>

        <div className="border-t border-[#B5D4F4] pt-4 mb-4">
          <span className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
            AI Agents — Powered by Janus (YC-backed)
          </span>
          <p className="text-[#1B6FD8] text-sm italic">
            &ldquo;From dashboards to decision-making systems.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { stat: "40%+", label: "Workflow Efficiency" },
            { stat: "24/7", label: "Intelligence Layer" },
          ].map((item) => (
            <div
              key={item.stat}
              className="bg-white border border-[#B5D4F4] rounded-xl p-3 flex flex-col items-center text-center"
            >
              <span className="text-lg font-bold text-[#0A2F6B]">{item.stat}</span>
              <span className="text-[10px] text-[#374151] leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 relative overflow-hidden min-h-[300px]"
      >
        <Image
          src="/ai%20and%20services%20indivillage.png"
          alt="AI Services IndiVillage"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}
