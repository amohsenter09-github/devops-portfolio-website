"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Shield } from "lucide-react";
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
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Enterprise Infrastructure & Cloud Platform Engineering
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              15+ years building secure, automated AWS infrastructures. 
              Cloud replatforming, GitOps automation, and observability solutions.
            </p>
          </motion.div>

          {/* Key Metrics - Concise */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">$2M+</div>
              <div className="text-sm text-gray-600">Annual savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">99.9%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">80%</div>
              <div className="text-sm text-gray-600">Faster deployments</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 md:py-24 w-full flex items-center justify-center bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-gray-600" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900">
                <AnimatedCounter end={15} duration={2} />+
              </div>
              <div className="mt-2 text-sm text-gray-600">Years Experience</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-gray-600" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900">Enterprise</div>
              <div className="mt-2 text-sm text-gray-600">Cloud Delivery</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-gray-600" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900">99.9%</div>
              <div className="mt-2 text-sm text-gray-600">Platform Reliability</div>
            </motion.div>
          </div>

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
      <section className="py-20 md:py-24 w-full flex items-center justify-center bg-white">
        <Recommendations />
      </section>
    </div>
  );
}
