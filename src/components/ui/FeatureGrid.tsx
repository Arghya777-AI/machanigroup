"use client";

import { motion } from "framer-motion";

interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
  className?: string;
  cardClassName?: string;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeatureGrid({ items, className = "", cardClassName = "" }: FeatureGridProps) {
  return (
    <motion.div
      className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className={`bg-white rounded-xl p-5 border border-[#B5D4F4] hover:border-[#1B6FD8] hover:shadow-md transition-all duration-200 ${cardClassName}`}
        >
          <h4 className="font-semibold text-[#0A2F6B] mb-1 text-sm">{item.title}</h4>
          <p className="text-[#374151] text-sm leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
