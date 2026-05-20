"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Robotics", href: "#robotics" },
  { label: "Longevity", href: "#longevity" },
  { label: "AR/VR", href: "#arvr" },
  { label: "AI Services", href: "#ai-services" },
  { label: "Drones", href: "#drones" },
  { label: "Students", href: "#students" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-[#0A2F6B]/95 shadow-lg" : "bg-[#0A2F6B]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              <div className="font-bold text-white text-base leading-tight">
                FGCU AI Innovation Center
              </div>
              <div className="text-[#B5D4F4] text-[10px] leading-tight">
                Powered by The Next New AI Venture Studio
              </div>
            </a>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-white text-sm font-medium hover:text-[#B5D4F4] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "#about")}
              className="ml-2 bg-[#1B6FD8] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#1558b0] transition-colors duration-200"
            >
              Partner With Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A2F6B] border-t border-[#1B6FD8]/30 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block text-white text-sm font-medium py-2 hover:text-[#B5D4F4] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "#about")}
            className="block bg-[#1B6FD8] text-white text-sm font-semibold px-4 py-2 rounded-full text-center hover:bg-[#1558b0] transition-colors"
          >
            Partner With Us
          </a>
        </div>
      )}
    </nav>
  );
}
