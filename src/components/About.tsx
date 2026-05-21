"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronDown } from "lucide-react";

const logoPartners = [
  { name: "Machani Robotics", logo: "/MR.png", subtitle: "Humanoid Robotics" },
  { name: "IndiVillage", logo: "/IV.png", subtitle: "AI Services" },
  { name: "Janus", logo: "/JANUS.png", subtitle: "AI Agents · YC-backed" },
  { name: "Next Defence", logo: "/ND.png", subtitle: "Drones & AR/VR" },
  { name: "Okulo Aerospace", logo: "/OKULO.png", subtitle: "Drone Intelligence" },
  { name: "ATRESA", logo: "/TRESA.png", subtitle: "Electric Mobility" },
  { name: "Tsalla Aerospace", logo: "/TSALLA.png", subtitle: "UAV Platforms" },
  { name: "Inkers", logo: "/INKERS.png", subtitle: "Computer Vision" },
  { name: "FGCU", logo: "/FGCU.png", subtitle: "University Partner" },
];

const textPartners = [
  { name: "Fountain Life", subtitle: "Longevity & Diagnostics" },
  { name: "BioPeak", subtitle: "Executive Health" },
  { name: "Celularity", subtitle: "Cell Therapy" },
  { name: "AiVita Biomedical", subtitle: "Immunotherapy" },
  { name: "Immunis Biomedical", subtitle: "Immune Restoration" },
  { name: "Beyond Age", subtitle: "Longevity Supplements" },
  { name: "Openwater", subtitle: "Brain Imaging" },
  { name: "Lucidify", subtitle: "Cognitive Performance" },
  { name: "Global Health X", subtitle: "Global Research" },
  { name: "Human Immunome Project", subtitle: "Precision Medicine" },
  { name: "Lee Health", subtitle: "Regional Health System" },
  { name: "Shell Point", subtitle: "Senior Living" },
  { name: "Shady Rest", subtitle: "Long-term Care" },
  { name: "Baker Senior Center", subtitle: "Community Services" },
];

const partnershipTypes = ["Industry", "Research", "Investment", "Healthcare System", "Media"];

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    role: "",
    partnershipType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", organisation: "", role: "", partnershipType: "", message: "" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <section id="about" className="bg-[#F9FAFB] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="About & Partners"
          titleClassName="text-[#0A2F6B]"
          subtitle="Two organizations united by a mission to make Florida Gulf Coast University a national AI and healthcare innovation hub."
          subtitleClassName="text-[#374151]"
        />

        {/* Founding partners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-[#B5D4F4] rounded-2xl p-8"
          >
            <div className="text-[#1B6FD8] text-xs font-semibold uppercase tracking-wider mb-2">Founding University Partner</div>
            <h3 className="text-xl font-bold text-[#0A2F6B] mb-3">Florida Gulf Coast University</h3>
            <p className="text-[#374151] text-sm leading-relaxed mb-4">
              Fort Myers, FL. FGCU&apos;s Marieb College of Health &amp; Human Services is the academic anchor of the AI Innovation Center — bringing clinical expertise, simulation infrastructure, research capacity, and a student body of over 15,000 to the partnership.
            </p>
            <ul className="space-y-1 text-sm text-[#374151]">
              <li>• Marieb College: Nursing, Physical Therapy, Occupational Therapy, Social Work</li>
              <li>• 98.48% NCLEX first-time pass rate (national avg: 88%)</li>
              <li>• $12M+ simulation lab investment</li>
              <li>• Lee Health clinical partnership network</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-[#B5D4F4] rounded-2xl p-8"
          >
            <div className="text-[#1B6FD8] text-xs font-semibold uppercase tracking-wider mb-2">Founding Venture Partner</div>
            <h3 className="text-xl font-bold text-[#0A2F6B] mb-3">The Next New AI Venture Studio</h3>
            <p className="text-[#374151] text-sm leading-relaxed mb-4">
              A venture studio building AI companies at the intersection of healthcare, longevity, robotics, and emerging technology. We bring frameworks, industry mentors, capital networks, and operational expertise to turn university research into market-ready ventures.
            </p>
            <ul className="space-y-1 text-sm text-[#374151]">
              <li>• 18+ industry partnerships across robotics, biotech, AI, and drones</li>
              <li>• Venture studio model: co-creation with university talent</li>
              <li>• Mentor network spanning Silicon Valley, healthcare, and deep tech</li>
              <li>• Focus: SWFL + national + global impact from FGCU</li>
            </ul>
          </motion.div>
        </div>

        {/* Logo partner grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h3 className="text-xl font-bold text-[#0A2F6B] mb-2 text-center">Our Partners</h3>
          <p className="text-[#374151] text-sm text-center mb-8">18+ industry partnerships across robotics, biotech, AI, and drones</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {logoPartners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white border border-[#B5D4F4] rounded-xl p-4 flex flex-col items-center gap-2 hover:border-[#1B6FD8] hover:shadow-md transition-all duration-200"
              >
                <div className="relative w-14 h-10 flex-shrink-0">
                  <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-[#0A2F6B] text-xs leading-tight">{partner.name}</div>
                  <div className="text-[#9CA3AF] text-[10px] mt-0.5 leading-tight">{partner.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional text partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {textPartners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white border border-[#B5D4F4] rounded-xl px-3 py-3 text-center hover:border-[#1B6FD8] hover:shadow-sm transition-all duration-200"
              >
                <div className="font-semibold text-[#0A2F6B] text-xs leading-tight mb-0.5">{partner.name}</div>
                <div className="text-[#9CA3AF] text-[10px] leading-tight">{partner.subtitle}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-bold text-[#0A2F6B] mb-6 text-center">Apply to Partner</h3>

          {submitted && (
            <div className="mb-4 bg-[#E1F5EE] border border-[#0F6E56]/30 text-[#0F6E56] text-sm px-4 py-3 rounded-xl text-center font-semibold">
              Thank you! We&apos;ll be in touch within 48 hours.
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white border border-[#B5D4F4] rounded-2xl p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#374151] mb-1.5">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-[#B5D4F4] rounded-lg px-3 py-2.5 text-sm text-[#374151] outline-none focus:border-[#1B6FD8] transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#374151] mb-1.5">Organisation *</label>
                <input
                  type="text"
                  required
                  value={formData.organisation}
                  onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                  className="w-full border border-[#B5D4F4] rounded-lg px-3 py-2.5 text-sm text-[#374151] outline-none focus:border-[#1B6FD8] transition-colors"
                  placeholder="Your organisation"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#374151] mb-1.5">Role</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full border border-[#B5D4F4] rounded-lg px-3 py-2.5 text-sm text-[#374151] outline-none focus:border-[#1B6FD8] transition-colors"
                  placeholder="Your role / title"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#374151] mb-1.5">Partnership Type *</label>
                <div className="relative">
                  <select
                    required
                    value={formData.partnershipType}
                    onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                    className="w-full border border-[#B5D4F4] rounded-lg px-3 py-2.5 text-sm text-[#374151] outline-none focus:border-[#1B6FD8] transition-colors appearance-none bg-white"
                  >
                    <option value="">Select type...</option>
                    {partnershipTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-3.5 text-[#9CA3AF] pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#374151] mb-1.5">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-[#B5D4F4] rounded-lg px-3 py-2.5 text-sm text-[#374151] outline-none focus:border-[#1B6FD8] transition-colors resize-none"
                placeholder="Tell us about your partnership interest..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1B6FD8] text-white font-semibold py-3 rounded-full hover:bg-[#1558b0] transition-colors duration-200"
            >
              Apply to Partner
            </button>
          </form>

          {/* Newsletter */}
          <div className="mt-8 text-center">
            <h4 className="font-semibold text-[#0A2F6B] mb-3">Stay Updated</h4>
            {subscribed && (
              <div className="mb-3 bg-[#E1F5EE] border border-[#0F6E56]/30 text-[#0F6E56] text-sm px-4 py-2 rounded-xl text-center font-semibold">
                You&apos;re subscribed! Welcome to the FGCU AI community.
              </div>
            )}
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border border-[#B5D4F4] rounded-full px-4 py-2.5 text-sm text-[#374151] outline-none focus:border-[#1B6FD8] transition-colors"
                placeholder="your@email.com"
              />
              <button
                type="submit"
                className="bg-[#0A2F6B] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#061a3e] transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
