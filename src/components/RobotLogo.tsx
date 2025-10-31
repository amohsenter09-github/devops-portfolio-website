"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, Server, Network } from "lucide-react";

export default function RobotLogo() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Main Logo Container */}
        <div className="relative flex items-center gap-3 md:gap-4">
          {/* Left Icon - Server/Infrastructure */}
          <motion.div
            className="relative"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
              <Server className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-cyan-400 opacity-50 blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Center - Main Text/Logo */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(6, 182, 212, 0.7)",
                    "0 0 0 10px rgba(6, 182, 212, 0)",
                    "0 0 0 0 rgba(6, 182, 212, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              >
                <Cpu className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
              </motion.div>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                INFRA
              </motion.h1>
            </div>
            <motion.div
              className="h-1 w-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 rounded-full mt-1"
              animate={{
                scaleX: [0.8, 1, 0.8],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Right Icon - Network/Cloud */}
          <motion.div
            className="relative"
            animate={{
              y: [0, -8, 0],
              rotate: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Network className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-purple-400 opacity-50 blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>
        </div>

        {/* Connecting Lines Animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.svg
            width="200"
            height="100"
            className="absolute opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 0.5 }}
          >
            <motion.path
              d="M 50 50 Q 100 30 150 50"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="1" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
      </motion.div>
    </div>
  );
}

