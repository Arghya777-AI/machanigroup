"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Robotics", href: "/robotics" },
  { label: "Longevity", href: "/longevity" },
  { label: "AR / VR", href: "/arvr" },
  { label: "AI Services", href: "/ai-services" },
  { label: "Vision", href: "/vision" },
  { label: "Drones", href: "/drones" },
  { label: "Students", href: "/students" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 h-16 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(247,246,242,0.95)" : "rgba(247,246,242,0.75)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${scrolled ? "#E0DDD5" : "transparent"}`,
        boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 h-full flex items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="relative w-10 h-10">
            <Image src="/FGCU.png" alt="FGCU" fill sizes="40px" className="object-contain" />
          </div>
          <div className="hidden sm:flex items-center gap-2.5">
            <span className="text-[#111118] font-bold text-sm tracking-tight">FGCU</span>
            <span className="w-px h-3.5 bg-[#C8C4BA]" />
            <span className="text-[#9A9590] text-[11px] font-medium">AI Innovation Center</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[12px] font-medium transition-colors duration-200 ${
                pathname === item.href
                  ? "text-[#111118]"
                  : "text-[#9A9590] hover:text-[#111118]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/about"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 rounded-md"
            style={{ background: "#1B4FD8" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#1640B8")}
            onMouseLeave={e => (e.currentTarget.style.background = "#1B4FD8")}
          >
            Partner
          </Link>
          <button
            className="lg:hidden text-[#6E6B64] hover:text-[#111118] p-1 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {open ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden border-t px-5 py-6 space-y-1"
          style={{
            background: "rgba(245,243,238,0.98)",
            backdropFilter: "blur(14px)",
            borderColor: "#D8D4CC",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block text-sm font-medium py-3 border-b transition-colors ${
                pathname === item.href ? "text-[#111118]" : "text-[#9A9590] hover:text-[#111118]"
              }`}
              style={{ borderColor: "#E8E4DC" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="block mt-5 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-[#1B4FD8] text-center rounded-md"
            style={{ borderRadius: "2px" }}
          >
            Partner With Us
          </Link>
        </div>
      )}
    </header>
  );
}
