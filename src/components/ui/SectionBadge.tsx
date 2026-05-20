"use client";

interface SectionBadgeProps {
  text: string;
  variant?: "blue" | "teal" | "gold" | "navy";
  className?: string;
}

export default function SectionBadge({ text, variant = "blue", className = "" }: SectionBadgeProps) {
  const variants = {
    blue: "bg-[#E6F1FB] text-[#1B6FD8] border border-[#B5D4F4]",
    teal: "bg-[#E1F5EE] text-[#0F6E56] border border-[#0F6E56]/30",
    gold: "bg-[#FAEEDA] text-[#BA7517] border border-[#BA7517]/30",
    navy: "bg-[#0A2F6B]/10 text-[#0A2F6B] border border-[#0A2F6B]/20",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${variants[variant]} ${className}`}
    >
      {text}
    </span>
  );
}
