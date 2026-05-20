"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureGrid from "@/components/ui/FeatureGrid";
import CaseStudyBlock from "@/components/ui/CaseStudyBlock";

const fountainLifeGrid = [
  { title: "Founded by", description: "Peter Diamandis and Bill Kapp — combining exponential medicine with precision diagnostics." },
  { title: "Programme", description: "Comprehensive health optimization: advanced diagnostics, early disease detection, metabolic health." },
  { title: "FGCU Research Fit", description: "Longevity biomarkers, digital health interventions, aging population clinical study protocols." },
  { title: "FGCU Student Fit", description: "Clinical observation rotations, research assistant positions, data science projects." },
];

const bioPeakPoints = [
  "Performance-optimization platform combining epigenetics, metabolomics, and functional medicine",
  "FGCU partnership: student practitioner training, biomarker research with Marieb faculty",
  "Integration with campus health programs — athlete performance, faculty wellness, aging studies",
  "Data pipeline to FGCU research labs for longitudinal healthspan studies",
];

const medTechGrid = [
  { title: "Immunis Biomedical", description: "Skeletal muscle-derived factors for immune restoration — FGCU integration via clinical trial support and biomedical research courses." },
  { title: "AiVita Biomedical", description: "Personalized dendritic cell immunotherapy platform for cancer and aging — student research on immune system modulation." },
  { title: "Human Immunome Project", description: "Mapping the human immune system to enable precision medicine — FGCU contributes population data from SWFL aging cohort." },
  { title: "At FGCU", description: "Joint research protocols, visiting faculty seminars, graduate student co-investigators on funded immunology studies." },
];

const regenGrid = [
  { title: "Celularity", description: "Placental-derived cell therapies for regenerative medicine — allogeneic NK cell therapies for cancer and aging indications." },
  { title: "At FGCU (Celularity)", description: "Research collaboration on cell therapy education modules, biobank partnerships, and student researcher placement." },
  { title: "Beyond Age", description: "Longevity-focused supplement and intervention platform with evidence-based protocols for healthy aging." },
  { title: "At FGCU (Beyond Age)", description: "Nutritional science integration, RCT design support from Marieb faculty, and student nutrition research tracks." },
];

const brainGrid = [
  { title: "Openwater", description: "Low-cost, wearable MRI using laser light — enabling brain imaging outside clinical settings at fraction of traditional cost." },
  { title: "Lucidify", description: "AI-powered cognitive performance platform using biofeedback and neurostimulation for memory, focus, and mental health." },
  { title: "At FGCU (Brain)", description: "Neuroscience curriculum integration, student lab access, research projects on cognitive decline prevention." },
  { title: "Lee Health Fit", description: "Clinical partnership with Lee Health neurology for community brain health screening programs and early intervention studies." },
];

const globalHealthXPoints = [
  "Multi-country longevity research consortium connecting FGCU to global aging science networks",
  "Cross-cultural study designs on aging interventions in diverse populations",
  "Faculty exchange programs and international student research placements",
  "FGCU becomes a node in the global healthspan research network",
  "Data sharing agreements for comparative longevity biomarker studies",
];

export default function LongevityHealthspan() {
  return (
    <section id="longevity" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Southwest Florida Healthspan Partnership"
          badgeVariant="teal"
          title="Longevity & Healthspan"
          titleClassName="text-[#0F6E56]"
          subtitle="Building SWFL into a national hub for longevity science, preventive medicine, and healthy aging innovation."
          subtitleClassName="text-[#374151]"
        />

        {/* 5.1 Fountain Life */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 bg-[#E1F5EE] rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-[#0F6E56] mb-6">5.1 Fountain Life</h3>
          <FeatureGrid items={fountainLifeGrid} cardClassName="bg-white border-[#0F6E56]/20" />
        </motion.div>

        {/* 5.2 BioPeak */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-[#0F6E56] mb-4">5.2 BioPeak</h3>
          <div className="bg-[#E1F5EE] rounded-xl p-6">
            <ul className="space-y-3">
              {bioPeakPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                  <span className="text-[#0F6E56] font-bold mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* 5.3 MedTech Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 bg-white rounded-2xl p-8 border border-[#B5D4F4]"
        >
          <h3 className="text-xl font-bold text-[#0F6E56] mb-6">5.3 MedTech Partners</h3>
          <FeatureGrid items={medTechGrid} cardClassName="bg-[#F9FAFB]" />
        </motion.div>

        {/* 5.4 Regenerative Therapeutics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 bg-[#E1F5EE] rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-[#0F6E56] mb-6">5.4 Regenerative Therapeutics</h3>
          <FeatureGrid items={regenGrid} cardClassName="bg-white border-[#0F6E56]/20" />
        </motion.div>

        {/* 5.5 Brain & Cognitive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 bg-white rounded-2xl p-8 border border-[#B5D4F4]"
        >
          <h3 className="text-xl font-bold text-[#0F6E56] mb-6">5.5 Brain & Cognitive Health</h3>
          <FeatureGrid items={brainGrid} cardClassName="bg-[#F9FAFB]" />
        </motion.div>

        {/* 5.6 Global Health X */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-[#0F6E56] mb-4">5.6 Global Health X</h3>
          <div className="bg-[#E1F5EE] rounded-xl p-6">
            <ul className="space-y-3">
              {globalHealthXPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                  <span className="text-[#0F6E56] font-bold mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Case study */}
        <CaseStudyBlock
          title="Stanford × Buck Institute (THRIVE)"
          context="Stanford Medicine and the Buck Institute for Research on Aging collaborated on THRIVE — a precision longevity platform integrating multi-omic diagnostics, behavioral interventions, and longitudinal outcome tracking in a 65+ population cohort."
          solution="AI-driven biological age assessment combined with personalized intervention protocols spanning nutrition, exercise, sleep, cognitive training, and therapeutic supplementation. FGCU model draws directly from this evidence base."
          impact="Participants reduced biological age markers by average 2.3 years in 12 months. Cognitive decline indicators improved in 71% of participants. Published in Nature Medicine with methodology now informing FGCU's longevity curriculum design."
        />
      </div>
    </section>
  );
}
