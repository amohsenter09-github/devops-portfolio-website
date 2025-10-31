"use client";

import { motion } from "framer-motion";

export default function RobotLogo() {
  return (
    <div className="flex items-center justify-center w-full">
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Robotic/AI Logo Icon */}
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
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center shadow-xl relative overflow-hidden">
            {/* Robotic Head SVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-12 h-12 md:w-14 md:h-14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Robot Head */}
              <rect
                x="20"
                y="25"
                width="60"
                height="50"
                rx="8"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="3"
              />
              
              {/* Eyes - Animated */}
              <motion.circle
                cx="40"
                cy="45"
                r="6"
                fill="#06b6d4"
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                cx="60"
                cy="45"
                r="6"
                fill="#06b6d4"
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />
              
              {/* Antenna */}
              <line
                x1="50"
                y1="25"
                x2="50"
                y2="15"
                stroke="#06b6d4"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle
                cx="50"
                cy="12"
                r="3"
                fill="#06b6d4"
              />
              
              {/* Mouth/Sensor Grid */}
              <rect
                x="35"
                y="60"
                width="30"
                height="8"
                rx="2"
                fill="#06b6d4"
                opacity="0.6"
              />
              <line
                x1="42"
                y1="64"
                x2="42"
                y2="64"
                stroke="#06b6d4"
                strokeWidth="2"
              />
              <line
                x1="50"
                y1="64"
                x2="58"
                y2="64"
                stroke="#06b6d4"
                strokeWidth="2"
              />
              
              {/* Circuit Lines */}
              <motion.path
                d="M 20 35 L 15 35 L 15 30 L 10 30"
                stroke="#06b6d4"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{
                  pathLength: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.path
                d="M 80 35 L 85 35 L 85 30 L 90 30"
                stroke="#06b6d4"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{
                  pathLength: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </svg>
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

