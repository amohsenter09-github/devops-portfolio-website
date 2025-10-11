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
          These designs showcase my approach to cloud infrastructure, automation, and observability using 
          professional ASCII art and SVG diagrams.
        </p>

        {/* ASCII Art Diagrams */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 heading-secondary">
            Architecture Diagrams (ASCII Art)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Professional ASCII art diagrams showing system architecture, data flow, and component relationships. 
            These diagrams are lightweight, version-controllable, and display perfectly in any environment.
          </p>
          <DevOpsDiagrams />
        </section>

        {/* SVG Graphics */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 heading-secondary">
            Interactive Architecture (SVG Graphics)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Scalable vector graphics showing detailed system architecture with visual components, 
            connection flows, and interactive elements. Perfect for presentations and documentation.
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

        {/* Benefits of This Approach */}
        <section className="mb-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
          <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
            Why ASCII Art & SVG Instead of Figma?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✅ Advantages</h3>
              <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                <li>• No external dependencies</li>
                <li>• Version controllable with Git</li>
                <li>• Lightweight and fast loading</li>
                <li>• Works in any environment</li>
                <li>• Professional appearance</li>
                <li>• Easy to maintain and update</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🎯 Perfect for DevOps</h3>
              <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Shows technical expertise</li>
                <li>• Demonstrates documentation skills</li>
                <li>• Easy to share in presentations</li>
                <li>• Can be embedded in documentation</li>
                <li>• No licensing or account issues</li>
                <li>• Works offline and in CI/CD</li>
              </ul>
            </div>
          </div>
        </section>
      </motion.div>
    </Container>
  );
}
