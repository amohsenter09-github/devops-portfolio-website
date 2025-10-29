"use client";
import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";
import { brands } from "@/lib/brands";

export default function Marquee() {
  // Duplicate for seamless loop
  const items = [...brands, ...brands];
  
  return (
    <div className="w-full flex flex-col items-center">
      {/* Trusted by Text */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-center text-slate-400 text-sm uppercase tracking-wide mb-2">
          Trusted by leading organizations
        </h3>
        <p className="text-xs text-slate-500">
          across Europe and North America
        </p>
      </motion.div>
      
      {/* Logo Marquee */}
      <div className="overflow-hidden w-full relative -mx-4 sm:-mx-6 lg:-mx-8">
        <motion.div
          className="flex gap-12 items-center"
          style={{ 
            width: "max-content",
          }}
          initial={{ x: 0 }}
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
