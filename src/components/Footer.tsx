"use client";

import Image from "next/image";
import Link from "next/link";

const C = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-8";

const frontierLinks = [
  { label: "Robotics", href: "/robotics" },
  { label: "Longevity", href: "/longevity" },
  { label: "AR / VR", href: "/arvr" },
  { label: "AI Services", href: "/ai-services" },
  { label: "Computer Vision", href: "/vision" },
  { label: "Drones", href: "/drones" },
];

const programLinks = [
  { label: "Students", href: "/students" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0C1F4A] text-white">
      {/* Top section */}
      <div className={`${C} py-16 border-b border-white/10`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/FGCU.png"
                  alt="FGCU"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-sm leading-tight">
                FGCU AI Innovation Center
              </span>
            </div>
            <p className="text-white/40 text-xs mb-4">
              Powered by The Next New AI Venture Studio
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Where healthcare, AI, robotics, and longevity converge in
              Southwest Florida. A next-generation venture hub at Florida Gulf
              Coast University.
            </p>
          </div>

          {/* Col 2: Frontiers */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-white/60 mb-5">
              Frontiers
            </h4>
            <ul className="space-y-3">
              {frontierLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-white/60 mb-5">
              Programs
            </h4>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-white/60 mb-5">
              Contact
            </h4>
            <div className="space-y-1.5 text-sm text-white/50 mb-6">
              <p>FGCU AI Innovation Center</p>
              <p>10501 FGCU Blvd S</p>
              <p>Fort Myers, FL 33965</p>
              <p className="pt-3">ai-center@fgcu.edu</p>
              <p>(239) 590-1000</p>
            </div>

            <div className="flex gap-3">
              {/* X (Twitter) */}
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-[#1B4FD8] transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-[#1B4FD8] transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={C}>
        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-white/30 text-xs">
            © 2026 FGCU AI Innovation Center. Powered by The Next New AI Venture Studio.
          </span>
          <span className="text-white/30 text-xs">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
