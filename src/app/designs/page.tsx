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
          {/* Description Section - Directly Above Diagram */}
          <motion.div
            className="my-12 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-3 text-gray-900">
              Automated AWS Cloud Platform
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              This architecture illustrates a fully automated AWS cloud platform built with Terraform and managed through a GitOps workflow using ArgoCD.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              The design spans multiple AWS accounts — Production, Staging, Sandbox, and Operations — each isolated by dedicated VPCs, IAM boundaries, and encrypted storage for maximum security and compliance.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              Core components include Amazon EKS clusters running Bottlerocket nodes, Aurora PostgreSQL, ElastiCache Redis, and CloudFront for global delivery.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              Security and governance are enforced through AWS WAF, GuardDuty, and Secrets Manager, while observability is powered by Prometheus, Grafana, Loki, and CloudWatch.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              The entire platform is provisioned via modular Terraform code, following AWS best practices for automation, reusability, and least-privilege access — delivering a scalable, resilient, and operations-ready foundation for modern applications.
            </p>
          </motion.div>

          {/* Diagram Container */}
          <div className="mt-8">
            <AnimatedAwsInfra />
          </div>
        </div>
      </section>
    </div>
  );
}
