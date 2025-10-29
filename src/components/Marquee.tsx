"use client";
import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";
import { brands } from "@/lib/brands";

export default function Marquee() {
  // Duplicate for seamless loop
  const items = [...brands, ...brands];
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Trusted by Text */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-gray-500">
          Trusted by 50K+ teams from creative agencies to high growth tech companies
        </p>
      </motion.div>
      
      {/* Logo Marquee */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 25, 
            ease: "linear" 
          }}
        >
          {items.map((b, i) => (
            <div key={`${b.name}-${i}`} className="flex-shrink-0">
              <BrandLogo brand={b} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
