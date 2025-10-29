"use client";
import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";
import { brands } from "@/lib/brands";

export default function Marquee() {
  // Duplicate for seamless loop
  const items = [...brands, ...brands];
  
  return (
    <div className="overflow-hidden py-10 border-y border-white/10">
      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          duration: 25, 
          ease: "linear" 
        }}
      >
        {items.map((b, i) => (
          <BrandLogo key={`${b.name}-${i}`} brand={b} />
        ))}
      </motion.div>
    </div>
  );
}

