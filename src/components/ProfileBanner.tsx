"use client";

import { motion } from "framer-motion";
import { 
  SiAmazon, 
  SiKubernetes, 
  SiGooglecloud,
  SiDocker,
} from "react-icons/si";
import { Cloud, Settings, Container, GitBranch } from "lucide-react";

interface ProfileBannerProps {
  className?: string;
}

export default function ProfileBanner({ className = "" }: ProfileBannerProps) {
  return (
    <motion.div
      className={`relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-2xl shadow-2xl ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-300 rounded-full blur-2xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              DEVOPS ENGINEER
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-blue-200 mb-6 font-medium"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              CLOUD INTEGRATION | CI/CD
            </motion.p>

            {/* Tech Stack Tags */}
            <motion.div 
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30">
                AWS Expert
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30">
                Kubernetes
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30">
                Terraform
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30">
                GitOps
              </span>
            </motion.div>
          </div>

          {/* Right Content - Character Illustration */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              {/* Character */}
              <div className="w-48 h-48 md:w-64 md:h-64 relative">
                {/* Head */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-blue-100 rounded-full border-4 border-white shadow-lg">
                  <div className="absolute top-4 left-4 w-6 h-6 bg-blue-600 rounded-full"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 bg-blue-600 rounded-full"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-full"></div>
                </div>
                
                {/* Body */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-blue-200 rounded-t-2xl border-4 border-white shadow-lg">
                  <div className="absolute top-4 left-2 w-4 h-4 bg-blue-600 rounded"></div>
                  <div className="absolute top-4 right-2 w-4 h-4 bg-blue-600 rounded"></div>
                </div>
                
                {/* Arms */}
                <div className="absolute top-20 left-4 w-6 h-16 bg-blue-100 rounded-full border-2 border-white"></div>
                <div className="absolute top-20 right-4 w-6 h-16 bg-blue-100 rounded-full border-2 border-white"></div>
                
                {/* Hands */}
                <div className="absolute top-32 left-2 w-8 h-6 bg-blue-100 rounded-full border-2 border-white"></div>
                <div className="absolute top-32 right-2 w-8 h-6 bg-blue-100 rounded-full border-2 border-white"></div>
              </div>

              {/* Laptop */}
              <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gray-800 rounded-lg border-2 border-gray-600 shadow-xl">
                <div className="absolute top-1 left-1 right-1 h-12 bg-gray-900 rounded"></div>
                <div className="absolute top-14 left-2 right-2 h-1 bg-gray-600 rounded"></div>
                <div className="absolute top-16 left-4 right-4 h-1 bg-gray-600 rounded"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technology Icons */}
        <motion.div 
          className="absolute top-4 right-4 flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
            <SiAmazon className="w-6 h-6 text-orange-400" />
          </div>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
            <SiKubernetes className="w-6 h-6 text-blue-400" />
          </div>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
            <SiGooglecloud className="w-6 h-6 text-blue-400" />
          </div>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
            <SiDocker className="w-6 h-6 text-blue-400" />
          </div>
        </motion.div>

        {/* Bottom Tech Icons */}
        <motion.div 
          className="absolute bottom-4 left-4 flex gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
            <Cloud className="w-4 h-4 text-blue-300" />
          </div>
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
            <Settings className="w-4 h-4 text-blue-300" />
          </div>
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
            <Container className="w-4 h-4 text-blue-300" />
          </div>
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
            <GitBranch className="w-4 h-4 text-blue-300" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
