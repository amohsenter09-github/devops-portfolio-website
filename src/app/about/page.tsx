"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-32 md:pt-48 lg:pt-64 pb-16 sm:pb-20 md:pb-24 lg:pb-32 flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-100 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4 sm:px-6"
        >
          <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>
              I&apos;m{" "}
              <span className="font-semibold text-gray-900">Amr Fathy</span>, a{" "}
              <span className="font-semibold text-gray-900">
                Senior DevOps & Cloud Platform Engineer
              </span>{" "}
              with over 15 years of experience designing and automating
              infrastructure across multi-account AWS environments.
            </p>

            <p>
              I specialize in{" "}
              <span className="text-cyan-600 font-medium">
                cloud replatforming, GitOps automation, and
                observability-driven design
              </span>{" "}
              — helping organizations modernize and scale their platforms with
              confidence and reliability.
            </p>

            <p>
              I&apos;ve led modernization initiatives for{" "}
              <span className="font-medium">AVIV Group</span>,{" "}
              <span className="font-medium">EPAM Systems</span>, and{" "}
              <span className="font-medium">Cybrid.app</span>, delivering
              automated deployments and streamlined developer workflows across
              regulated environments.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
