"use client";

import Image from "next/image";

interface CaseStudyBlockProps {
  title: string;
  context: string;
  solution: string;
  impact: string;
  image?: string;
  imageAlt?: string;
  source?: string;
  className?: string;
}

export default function CaseStudyBlock({
  title,
  context,
  solution,
  impact,
  image,
  imageAlt,
  source,
  className = "",
}: CaseStudyBlockProps) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-[#B5D4F4] shadow-sm ${className}`}>
      <div className="bg-[#0A2F6B] px-6 py-5">
        <div className="text-[#B5D4F4] text-xs font-semibold uppercase tracking-wider mb-1">Case Study</div>
        <h4 className="text-white font-bold text-xl leading-snug">{title}</h4>
      </div>

      {image && (
        <div className="relative w-full bg-[#0d1b2a]" style={{ aspectRatio: "16/9" }}>
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      )}

      <div className="divide-y divide-[#E6F1FB]">
        <div className="px-6 py-5 bg-white">
          <span className="text-xs font-bold text-[#1B6FD8] uppercase tracking-wider">Context</span>
          <p className="mt-2 text-[#374151] text-sm leading-relaxed">{context}</p>
        </div>
        <div className="px-6 py-5 bg-white">
          <span className="text-xs font-bold text-[#1B6FD8] uppercase tracking-wider">Solution</span>
          <p className="mt-2 text-[#374151] text-sm leading-relaxed">{solution}</p>
        </div>
        <div className="px-6 py-5 bg-[#E1F5EE]">
          <span className="text-xs font-bold text-[#0F6E56] uppercase tracking-wider">Impact</span>
          <p className="mt-2 text-[#374151] text-sm leading-relaxed">{impact}</p>
        </div>
        {source && (
          <div className="px-6 py-3 bg-[#F9FAFB]">
            <p className="text-xs text-[#9CA3AF] italic">{source}</p>
          </div>
        )}
      </div>
    </div>
  );
}
