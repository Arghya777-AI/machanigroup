"use client";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatCard({ value, label, className = "" }: StatCardProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-6 rounded-xl ${className}`}>
      <span className="text-3xl font-bold text-white mb-1">{value}</span>
      <span className="text-sm text-[#B5D4F4] text-center">{label}</span>
    </div>
  );
}
