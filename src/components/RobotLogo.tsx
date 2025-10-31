"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function RobotLogo() {
  return (
    <div className="flex items-center justify-center w-full">
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo Icon */}
        <motion.div
          className="relative mb-4"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center shadow-xl">
            <Cpu className="w-10 h-10 md:w-12 md:h-12 text-cyan-400" />
          </div>
          {/* Subtle glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-cyan-400 opacity-20 blur-2xl"
            animate={{
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Logo Text */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          INFRA
          <motion.span
            className="text-cyan-600"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            CORE
          </motion.span>
        </motion.h1>

        {/* Underline */}
        <motion.div
          className="h-1 w-24 md:w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full mt-2"
          initial={{ width: 0 }}
          animate={{ width: "128px" }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </motion.div>
    </div>
  );
}

