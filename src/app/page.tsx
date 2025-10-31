"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Shield, DollarSign, Zap, Building2, ChevronDown } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import Recommendations from "@/components/Recommendations";
import Marquee from "@/components/Marquee";
import RobotLogo from "@/components/RobotLogo";

export default function Home() {

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-x-hidden" style={{ maxWidth: '100vw' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center w-full py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Robot Logo - Centered */}
          <div className="mb-12 md:mb-16">
            <RobotLogo />
          </div>

          {/* Professional Tagline */}
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-8 md:mb-10 text-center">
              Enterprise Infrastructure & Cloud Platform Engineering
            </h2>
            <div className="w-full flex flex-wrap justify-center items-center gap-3 md:gap-5 mb-12 md:mb-16">
              {["Cloud Replatforming", "GitOps Automation", "Observability Solutions"].map((badge, index) => (
                <motion.span
                  key={badge}
                  className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    borderColor: "rgb(6, 182, 212)",
                    boxShadow: "0 4px 12px rgba(6, 182, 212, 0.15)"
                  }}
                >
                  {badge}
                </motion.span>
              ))}
            </div>

            {/* Animated Scroll Arrow */}
            <motion.button
              onClick={() => {
                document.getElementById('recommendations')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group cursor-pointer mt-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-gray-900">
                <motion.span
                  className="inline-block"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(6, 182, 212, 0)",
                      "0 0 20px rgba(6, 182, 212, 0.3), 0 0 30px rgba(6, 182, 212, 0.2)",
                      "0 0 0px rgba(6, 182, 212, 0)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Client Recommendations
                </motion.span>
              </span>
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center group-hover:border-cyan-300 group-hover:shadow-lg transition-all duration-300"
              >
                <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-cyan-600 transition-colors" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Combined Metrics Section - Designed */}
      <section className="py-20 md:py-32 w-full flex items-center justify-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Metric 1: Years Experience */}
            <motion.div 
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center group-hover:from-cyan-200 group-hover:to-cyan-100 transition-colors">
                <Clock className="w-6 h-6 text-cyan-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                <AnimatedCounter end={15} duration={2} />+
              </div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Years Experience</div>
            </motion.div>

            {/* Metric 2: Annual Savings */}
            <motion.div 
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center group-hover:from-green-200 group-hover:to-green-100 transition-colors">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">$2M+</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Annual Savings</div>
            </motion.div>

            {/* Metric 3: Uptime SLA */}
            <motion.div 
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-100 transition-colors">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">99.9%</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Uptime SLA</div>
            </motion.div>

            {/* Metric 4: Faster Deployments */}
            <motion.div 
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center group-hover:from-purple-200 group-hover:to-purple-100 transition-colors">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">80%</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Faster Deployments</div>
            </motion.div>

            {/* Metric 5: Enterprise */}
            <motion.div 
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-100 transition-colors">
                <Building2 className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">Enterprise</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Cloud Delivery</div>
            </motion.div>

            {/* Metric 6: Platform Reliability */}
            <motion.div 
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center group-hover:from-cyan-200 group-hover:to-cyan-100 transition-colors">
                <TrendingUp className="w-6 h-6 text-cyan-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">99.9%</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Platform Reliability</div>
            </motion.div>
          </motion.div>

          {/* Trusted by Section */}
          <div className="mt-20">
            <Marquee />
          </div>
        </div>
      </section>

      {/* Credentials & Trust Signals */}
      <section className="py-16 md:py-20 w-full flex items-center justify-center bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">AWS Certified</span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">Kubernetes Expert</span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">Security Best Practices</span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">GitOps Specialist</span>
          </div>
        </div>
      </section>

      {/* Client Recommendations - Compact */}
      <section id="recommendations" className="py-20 md:py-24 w-full flex items-center justify-center bg-white">
        <Recommendations />
      </section>
    </div>
  );
}
