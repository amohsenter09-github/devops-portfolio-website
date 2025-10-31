"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Intro Section */}
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 w-full flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 max-w-3xl ml-auto mr-0 pr-8 md:pr-12 lg:pr-16 pb-12 md:pb-16">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left">
                I&apos;m <span className="font-semibold text-gray-900">Amr Fathy</span>, a Senior <span className="font-semibold text-gray-900">DevOps & Cloud Platform Engineer</span> with over 15 years of experience building secure, automated infrastructure across multi-account AWS environments.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left">
                I specialize in <span className="text-cyan-600 font-medium">cloud replatforming, GitOps automation, and observability-driven design</span> — helping organizations modernize and scale their platforms with confidence.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left">
                I&apos;ve led infrastructure modernization projects for <span className="font-medium">AVIV Group</span>, <span className="font-medium">EPAM Systems</span>, and <span className="font-medium">Cybrid.app</span>, delivering automated deployments and streamlined developer workflows across regulated environments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
