"use client";

import { motion } from "framer-motion";
import SectionBadge from "./SectionBadge";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "blue" | "teal" | "gold" | "navy";
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  centered?: boolean;
}

export default function SectionHeader({
  badge,
  badgeVariant = "blue",
  title,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`${centered ? "text-center" : ""} mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {badge && (
        <div className={`mb-3 ${centered ? "flex justify-center" : ""}`}>
          <SectionBadge text={badge} variant={badgeVariant} />
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold ${titleClassName}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-3 text-base md:text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
