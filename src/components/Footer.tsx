"use client";

import { X, Link2 } from "lucide-react";

const quickLinks = [
  { label: "Robotics", href: "robotics" },
  { label: "Longevity", href: "longevity" },
  { label: "AR/VR", href: "arvr" },
  { label: "AI Services", href: "ai-services" },
  { label: "Drones", href: "drones" },
  { label: "Students", href: "students" },
  { label: "About", href: "about" },
];

export default function Footer() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A2F6B] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Col 1: Logo & tagline */}
          <div>
            <div className="font-bold text-lg leading-tight mb-2">FGCU AI Innovation Center</div>
            <div className="text-[#B5D4F4] text-xs mb-4">Powered by The Next New AI Venture Studio</div>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Where healthcare, AI, robotics, and longevity converge in Southwest Florida. A next-generation venture hub at Florida Gulf Coast University.
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#B5D4F4] uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="text-[#9CA3AF] hover:text-white text-sm transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact + social */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#B5D4F4] uppercase tracking-wide">Contact</h4>
            <div className="space-y-2 text-sm text-[#9CA3AF] mb-6">
              <p>FGCU AI Innovation Center</p>
              <p>10501 FGCU Blvd S</p>
              <p>Fort Myers, FL 33965</p>
              <p className="mt-3">
                <span className="text-[#B5D4F4]">Email:</span> ai-center@fgcu.edu
              </p>
              <p>
                <span className="text-[#B5D4F4]">Phone:</span> (239) 590-1000
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Twitter/X"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1B6FD8] transition-colors duration-200"
              >
                <X size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1B6FD8] transition-colors duration-200"
              >
                <Link2 size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#9CA3AF]">
          <span>© 2026 FGCU AI Innovation Center. Powered by The Next New AI Venture Studio.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
