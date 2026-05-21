"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import CaseStudyBlock from "@/components/ui/CaseStudyBlock";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const medTechPartners = [
  {
    name: "Immunis Biomedical",
    description: "Clinical-stage biotechnology company developing therapeutics for age and immune-mediated diseases.",
  },
  {
    name: "AiVita Biomedical",
    description: "Advanced cell therapy and immunotherapy platform. Personalized therapeutic approaches for cancer and age-related conditions.",
  },
  {
    name: "Human Immunome Project (HIP)",
    description: "International non-profit building the most comprehensive atlas of human immune system function. Large-scale data collection and modeling of immune variation across populations.",
  },
];

const fountainLifeFit = [
  "Fountain Life could be a potential research partner for the SWFL Longevity ecosystem.",
  "Fountain Life's consented protocols and outcome data could support Shady Rest's Positive Aging research.",
  "Abundance360-Style Trip for Students — Mirror Peter Diamandis's Longevity Trip as a capstone experience for top FGCU students — a distinctive recruiting differentiator.",
];

const bioPeakFit = [
  "A practical, scalable longevity offering for SWFL's broader professional class",
  "Faculty/Staff Pilot — Offer the BioPeak protocol to Marieb College faculty and staff. Creates institutional buy-in and an internal data set.",
  "Paid clinical rotations through the LINE Fund, helping students earn while gaining hands-on experience in preventive care.",
];

const regenPartners = [
  {
    name: "Celularity",
    tag: "NASDAQ Listed",
    description:
      "Regenerative and cellular medicine company developing therapies derived from the postpartum placenta.",
    fgcu: "Clinical Education Track — Regenerative Medicine module inside the DNP and gerontology curriculum. Lee Health Trial Site — Potential future trial collaboration. Joint Research with Shady Rest — Age-related disease research.",
    note: "In partnership with Dr. Peter Diamandis & Dr. Robert J. Hariri",
  },
  {
    name: "Beyond Age",
    tag: "Dr. Arvinder Soin",
    description:
      "Deep-tech preventive healthcare platform leveraging genetic testing, advanced cellular tracking, and AI-driven diagnostics to transition healthcare from reactive treatments to proactive, long-term organ and metabolic preservation.",
    fgcu: "Research-to-Market Pathway — Pathway from faculty research to translational health products. Brand Internship Pipeline — Potential paid student internships in product, content, and clinical advisory.",
    note: "In partnership with Dr. Arvinder Soin — Padma Shri-awarded pioneer liver transplant surgeon",
  },
];

const brainPartners = [
  {
    name: "Openwater",
    description:
      "Highly disruptive medical technology company developing open-source, wearable visors that use infrared light, ultrasound, and physics-based software to complement traditional imaging, treat aggressive cancers, and enable brain-computer interfaces.",
    fgcu: "Potential research fit for trauma, pediatric, and rehab settings at Lee Health Level II Trauma Center, Golisano Children's Hospital, and stroke programs.",
    note: "In partnership with Dr. Mary Lou Jepsen — acclaimed optical physicist and pioneer in wearable medical imaging",
  },
  {
    name: "Lucidify Inc.",
    description:
      "Targeted, medical-technology startup specializing in continuous AI-driven brain monitoring and tele-neuroICU platforms.",
    fgcu: "Translation Studio — A compact in-center studio where faculty- and student-originated ideas can be prototyped and tested. Mentorship Track — Potential mentorship track with partner teams.",
    note: "In partnership with Dr. Divya Chander MD, PhD — Harvard-trained neuroscientist and pioneer in AI-driven brain monitoring",
  },
];

const ghxPoints = [
  "Capital Pathway — A defined funding pathway for FGCU-incubated healthcare ventures — closing the loop between Marieb research and real businesses",
  "Industry-advisor for Marieb students and faculty",
  "Venture-building exposure for students pursuing healthcare business roles",
];

export default function LongevityHealthspan() {
  return (
    <section id="longevity" className="bg-[#F9FAFB] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Southwest Florida Healthspan Partnership"
          badgeVariant="teal"
          title="Longevity & Healthspan Ecosystem"
          titleClassName="text-[#0F6E56]"
          subtitle="Longevity is emerging as a defining health category for the next 20 years."
          subtitleClassName="text-[#374151]"
        />

        {/* Hero ecosystem image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16 relative w-full rounded-2xl overflow-hidden border border-[#B5D4F4]"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src="/Longevity%20%26%20Healthspan%20Ecosystem.png"
            alt="Longevity & Healthspan Ecosystem"
            fill
            className="object-contain bg-white"
            sizes="1200px"
          />
        </motion.div>

        {/* Why SWFL */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16 bg-[#E1F5EE] rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-[#0F6E56] mb-4">Why Southwest Florida</h3>
          <ul className="space-y-3">
            {[
              "The Southwest Florida Healthspan Partnership is a well-positioned regional hub — the wealthiest aging demographic in the US, in one of the fastest-growing regions.",
              "Shady Rest Institute on Positive Aging + Blue Zones framework provides the academic backbone.",
              "This Center brings the global longevity network to FGCU's doorstep — a rare concentration of longevity, care, and research partners.",
              "Chronic and mental health conditions already account for a major share of US healthcare spending.",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-[#374151] text-sm">
                <span className="text-[#0F6E56] font-bold mt-0.5 flex-shrink-0">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Fountain Life */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#0F6E56] text-xs font-bold uppercase tracking-widest mb-2">Ultra-Premium Longevity</div>
              <h3 className="text-2xl font-bold text-[#0A2F6B] mb-1">Fountain Life</h3>
              <p className="text-[#374151] text-sm mb-2 font-medium">Executive Longevity Platform</p>
              <p className="text-[#374151] text-sm mb-4 leading-relaxed">
                Founded by Peter Diamandis, Tony Robbins, and partners. $25K–$100K annual executive health packages for high-net-worth individuals. Full-body MRI, AI-driven early disease detection, advanced biomarker panels, personalized intervention plans. Member network of CEOs, founders, and UHNIs across the US.
              </p>
              <div className="mb-4">
                <p className="text-xs font-bold text-[#0F6E56] uppercase tracking-wide mb-2">FGCU Fit</p>
                <ul className="space-y-2">
                  {fountainLifeFit.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                      <span className="text-[#0F6E56] font-bold mt-0.5 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#E1F5EE] rounded-xl p-4">
                <p className="text-xs font-bold text-[#0F6E56] mb-1">Student-Funding Tie-In</p>
                <p className="text-[#374151] text-sm">
                  &ldquo;Longevity Practitioner&rdquo; certificate can become a paid clinical pathway. Top students graduate with a highly marketable preventive-health credential.
                </p>
              </div>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#B5D4F4]" style={{ aspectRatio: "16/10" }}>
              <Image
                src="/Ultra-Premium%20Longevity%20Fountain%20Life.png"
                alt="Fountain Life — Ultra-Premium Longevity"
                fill
                className="object-contain bg-white"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </motion.div>

        {/* BioPeak */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#B5D4F4]" style={{ aspectRatio: "16/10" }}>
              <Image
                src="/Accessible%20Executive%20Health%20BioPeak.png"
                alt="BioPeak — Accessible Executive Health"
                fill
                className="object-contain bg-white"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div>
              <div className="text-[#0F6E56] text-xs font-bold uppercase tracking-widest mb-2">Accessible Executive Health</div>
              <h3 className="text-2xl font-bold text-[#0A2F6B] mb-4">BioPeak</h3>
              <p className="text-[#374151] text-sm mb-4 leading-relaxed">
                Comprehensive executive health assessments for senior leaders. Designed for the next tier down: directors, professionals, faculty. Potential fit for faculty/staff wellness and executive-health education.
              </p>
              <ul className="space-y-2">
                {bioPeakFit.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <span className="text-[#0F6E56] font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* MedTech & Biomedical Innovation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[#0F6E56] text-xs font-bold uppercase tracking-widest mb-2">Biomedical Innovation</div>
              <h3 className="text-2xl font-bold text-[#0A2F6B] mb-4">MedTech & Biomedical Innovation</h3>
              <p className="text-[#374151] text-sm mb-6 leading-relaxed">
                Beyond consumer-facing longevity programs, the Center can partner with biomedical companies, connecting them with frontier biomedical and healthspan research.
              </p>
              <div className="space-y-4">
                {medTechPartners.map((partner) => (
                  <div key={partner.name} className="bg-white border border-[#B5D4F4] rounded-xl p-5">
                    <h4 className="font-bold text-[#0A2F6B] text-sm mb-1">{partner.name}</h4>
                    <p className="text-[#374151] text-sm leading-relaxed">{partner.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-[#E1F5EE] rounded-xl p-4">
                <p className="text-xs font-bold text-[#0F6E56] mb-1">At FGCU</p>
                <p className="text-[#374151] text-sm">Joint Research Lab • Potential clinical trial pathway • Student Research Network — Potential exposure to a global research network</p>
                <p className="text-xs text-[#9CA3AF] italic mt-2">Curated through the Dr. Hans S. Keirstead, Ph.D. network — world-renowned neuroscientist, stem cell pioneer, and serial entrepreneur</p>
              </div>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#B5D4F4]" style={{ aspectRatio: "16/10" }}>
              <Image
                src="/MedTech%20%26%20Biomedical%20Innovation.png"
                alt="MedTech & Biomedical Innovation"
                fill
                className="object-contain bg-white"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </motion.div>

        {/* Regenerative & Longevity Therapeutics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#B5D4F4]" style={{ aspectRatio: "16/10" }}>
              <Image
                src="/Regenerative%20%26%20Longevity%20Therapeutics.png"
                alt="Regenerative & Longevity Therapeutics"
                fill
                className="object-contain bg-white"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div>
              <div className="text-[#0F6E56] text-xs font-bold uppercase tracking-widest mb-2">Therapeutic Innovation</div>
              <h3 className="text-2xl font-bold text-[#0A2F6B] mb-6">Regenerative & Longevity Therapeutics</h3>
              <div className="space-y-5">
                {regenPartners.map((partner) => (
                  <div key={partner.name} className="bg-white border border-[#B5D4F4] rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-[#0A2F6B] text-sm">{partner.name}</h4>
                      <span className="text-[10px] bg-[#E6F1FB] text-[#1B6FD8] px-2 py-0.5 rounded-full font-semibold">{partner.tag}</span>
                    </div>
                    <p className="text-[#374151] text-sm mb-2">{partner.description}</p>
                    <p className="text-[#374151] text-xs leading-relaxed text-[#0F6E56]">{partner.fgcu}</p>
                    <p className="text-xs text-[#9CA3AF] italic mt-2">{partner.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Targeted Brain & Cognitive Longevity */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[#0F6E56] text-xs font-bold uppercase tracking-widest mb-2">Neuroscience</div>
              <h3 className="text-2xl font-bold text-[#0A2F6B] mb-6">Targeted Brain & Cognitive Longevity</h3>
              <div className="space-y-5">
                {brainPartners.map((partner) => (
                  <div key={partner.name} className="bg-white border border-[#B5D4F4] rounded-xl p-5">
                    <h4 className="font-bold text-[#0A2F6B] text-sm mb-1">{partner.name}</h4>
                    <p className="text-[#374151] text-sm mb-2">{partner.description}</p>
                    <p className="text-[#0F6E56] text-xs leading-relaxed">{partner.fgcu}</p>
                    <p className="text-xs text-[#9CA3AF] italic mt-2">{partner.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#B5D4F4]" style={{ aspectRatio: "16/10" }}>
              <Image
                src="/Targeted%20Brain%20%26%20Cognitive%20Longevity.png"
                alt="Targeted Brain & Cognitive Longevity"
                fill
                className="object-contain bg-white"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </motion.div>

        {/* Healthcare Investment Network — Global Health X */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#B5D4F4]" style={{ aspectRatio: "16/10" }}>
              <Image
                src="/Healthcare%20Investment%20Network.png"
                alt="Global Health X — Healthcare Investment Network"
                fill
                className="object-contain bg-white"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div>
              <div className="text-[#0F6E56] text-xs font-bold uppercase tracking-widest mb-2">Investment Network</div>
              <h3 className="text-2xl font-bold text-[#0A2F6B] mb-1">Global Health X</h3>
              <p className="text-[#374151] text-sm mb-4 leading-relaxed">
                Deep-tech investment ecosystem that supports and capitalizes frontier healthcare ventures through an active life-sciences investment network. Led by Dr. Ravindranath Kancherla — renowned surgical gastroenterologist and founder of Global Hospitals, pioneering India&apos;s first multi-organ transplant chain.
              </p>
              <p className="text-[#374151] text-sm mb-4">Identifies and capitalizes frontier healthcare ventures. Strategic capital partner for the broader Marieb innovation pipeline.</p>
              <div className="bg-[#E1F5EE] rounded-xl p-4">
                <p className="text-xs font-bold text-[#0F6E56] mb-2">At FGCU</p>
                <ul className="space-y-2">
                  {ghxPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                      <span className="text-[#0F6E56] font-bold mt-0.5 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Case Study */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
        >
          <CaseStudyBlock
            title="Longevity & MedTech at Stanford × Buck Institute"
            image="/Case%20Study%20Longevity%20%26%20MedTech%20at%20Stanford%20%C3%97%20Buck%20Institute.png"
            imageAlt="Stanford × Buck Institute THRIVE case study"
            context="A key gap in longevity science: there is no reliable proxy for age-related functional decline. Clinical trials are slow because we lack quantitative measures of resilience and healthspan."
            solution="THRIVE — Transforming Health: Reclaiming Intrinsic Vitality for Everyone — a multi-institution longevity research program in collaboration with the Buck Institute for Research on Aging (the world's first institute devoted to aging intervention) and the Methuselah Foundation. Study partners include Whoop, YMCA, and OpenCures."
            impact="Backed by a $34.5M award from ARPA-H — one of the largest US federal investments ever made in healthspan science. Buck Institute has a parallel 25-year cooperative agreement with USC through the NIA-funded USC-Buck Nathan Shock Center of Excellence in the Biology of Aging."
            source="Source: Stanford × Buck THRIVE"
          />
        </motion.div>
      </div>
    </section>
  );
}
