"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Intro Section */}
      <section className="py-24 md:py-32 w-full flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                I&apos;m <span className="font-semibold text-gray-900">Amr Fathy</span>, a Senior <span className="font-semibold text-gray-900">DevOps & Cloud Platform Engineer</span> with over 15 years of experience building secure, automated infrastructure across multi-account AWS environments.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                I specialize in <span className="text-cyan-600 font-medium">cloud replatforming, GitOps automation, and observability-driven design</span> — helping organizations modernize and scale their platforms with confidence.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                I&apos;ve led infrastructure modernization projects for <span className="font-medium">AVIV Group</span>, <span className="font-medium">EPAM Systems</span>, and <span className="font-medium">Cybrid.app</span>, delivering automated deployments and streamlined developer workflows across regulated environments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
