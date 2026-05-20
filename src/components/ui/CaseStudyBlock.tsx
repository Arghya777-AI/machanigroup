"use client";

interface CaseStudyBlockProps {
  title: string;
  context: string;
  solution: string;
  impact: string;
  className?: string;
}

export default function CaseStudyBlock({
  title,
  context,
  solution,
  impact,
  className = "",
}: CaseStudyBlockProps) {
  return (
    <div className={`rounded-xl overflow-hidden border border-[#B5D4F4] ${className}`}>
      <div className="bg-[#0A2F6B] px-6 py-4">
        <h4 className="text-white font-bold text-lg">Case Study: {title}</h4>
      </div>
      <div className="divide-y divide-[#E6F1FB]">
        <div className="px-6 py-4 bg-white">
          <span className="text-xs font-semibold text-[#1B6FD8] uppercase tracking-wider">Context</span>
          <p className="mt-1 text-[#374151] text-sm leading-relaxed">{context}</p>
        </div>
        <div className="px-6 py-4 bg-white">
          <span className="text-xs font-semibold text-[#1B6FD8] uppercase tracking-wider">Solution</span>
          <p className="mt-1 text-[#374151] text-sm leading-relaxed">{solution}</p>
        </div>
        <div className="px-6 py-4 bg-[#E1F5EE]">
          <span className="text-xs font-semibold text-[#0F6E56] uppercase tracking-wider">Impact</span>
          <p className="mt-1 text-[#374151] text-sm leading-relaxed">{impact}</p>
        </div>
      </div>
    </div>
  );
}
