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
      <section className="py-16 bg-white text-center">
        {/* Description Section - Clean & Centered */}
        <motion.div
          className="max-w-3xl mx-auto px-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Automated AWS Cloud Platform
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
            A fully automated AWS environment built with Terraform and managed through a GitOps workflow using ArgoCD.
          </p>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
            The design spans multiple AWS accounts — Production, Staging, Sandbox, and Operations — each isolated with dedicated VPCs, IAM boundaries, and encrypted storage.
          </p>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Security, observability, and scalability are delivered through AWS WAF, GuardDuty, Prometheus, Grafana, and CloudWatch.
          </p>
        </motion.div>

        {/* Diagram Container - Card Style */}
        <div className="mt-12 max-w-6xl mx-auto rounded-2xl shadow-sm border border-gray-100 p-4">
          <AnimatedAwsInfra />
        </div>
      </section>
    </div>
  );
}
