"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import DevOpsDiagrams from "@/components/DevOpsDiagrams";

export default function Designs() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 heading-primary">
          DevOps Designs & Architecture
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mb-8">
          Visual representations of my DevOps processes, infrastructure designs, and system architectures. 
          These interactive diagrams showcase my approach to cloud infrastructure, automation, and observability 
          using professional brand icons and scalable vector graphics.
        </p>

        {/* Architecture Diagrams */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 heading-secondary">
            Interactive Architecture Diagrams
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Professional architecture diagrams showing system design, data flow, and component relationships. 
            These interactive diagrams showcase my approach to cloud infrastructure, automation, and observability 
            using scalable vector graphics and professional brand icons.
          </p>
          <DevOpsDiagrams />
        </section>

        {/* Design Process */}
        <section className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Design Process & Methodology
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">1. Research & Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Understanding requirements, constraints, and existing systems before designing solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">2. Architecture Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creating scalable, secure, and maintainable infrastructure designs using industry best practices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">3. Implementation Planning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Detailed implementation roadmaps with clear milestones and success metrics.
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </Container>
  );
}
