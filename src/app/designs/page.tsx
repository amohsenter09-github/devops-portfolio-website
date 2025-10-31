"use client";

import { motion } from "framer-motion";
import AnimatedAwsInfra from "@/components/AnimatedAwsInfra";

export default function Designs() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-24 md:py-32 w-full flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-mono"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                designed
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="text-cyan-600"
              >
                _
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                by
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.9 }}
                className="text-cyan-600"
              >
                _
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.1 }}
              >
                me
              </motion.span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="ml-1 text-cyan-600"
              >
                |
              </motion.span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Animated AWS Infrastructure Diagram */}
      <section className="py-12 md:py-16 w-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              AWS Multi-Account Infrastructure
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Animated architecture diagram showing production, staging, and sandbox environments with GitOps workflows
            </p>
          </motion.div>
          <AnimatedAwsInfra />
        </div>
      </section>
    </div>
  );
}
