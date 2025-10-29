"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import Recommendations from "@/components/Recommendations";
import Marquee from "@/components/Marquee";
import { projects } from "@/data/projects";

export default function Home() {
  // Take first 3 projects for featured section
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-x-hidden" style={{ maxWidth: '100vw' }}>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 text-center w-full flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-gray-900 mb-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Amr Fathy
          </motion.h1>
          <motion.h2 
            className="text-xl sm:text-2xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            Senior DevOps & Cloud Platform Engineer
          </motion.h2>
          
          <motion.p 
            className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            Building intelligent, automated infrastructure that scales with precision.
          </motion.p>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 md:py-24 w-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
          <div className="mt-10 flex flex-wrap items-start justify-center gap-8">
            <motion.div 
              className="text-center px-4"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-900">
                <AnimatedCounter end={15} duration={2} />+
              </div>
              <div className="mt-2 text-sm text-gray-600">Years Experience</div>
            </motion.div>
            
            <motion.div 
              className="text-center px-4"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-900">Enterprise</div>
              <div className="mt-2 text-sm text-gray-600">Cloud Delivery</div>
            </motion.div>
            
            <motion.div 
              className="text-center px-4"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-900">99.9%</div>
              <div className="mt-2 text-sm text-gray-600">Platform Reliability</div>
            </motion.div>
          </div>

          {/* Trusted by Section - After Metrics */}
          <div className="mt-20">
            <Marquee />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="py-20 md:py-24 w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto mt-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div 
                key={project.slug}
                className="rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-colors p-6"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.1, duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="md:min-h-[220px] flex flex-col">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/projects#${project.slug}`}
                    className="text-cyan-600 hover:text-cyan-500 text-sm font-medium transition-colors inline-flex items-center gap-1"
                  >
                    View Full Case Study →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Recommendations */}
      <section className="py-20 md:py-24 w-full flex items-center justify-center">
        <Recommendations />
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 w-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
            Highlighted Case Studies
          </h2>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <Link 
              href="/projects" 
              className="inline-flex items-center rounded-full bg-cyan-600 px-8 py-3 text-sm font-medium text-white hover:bg-cyan-500 transition-colors mb-6"
            >
              View All Case Studies →
            </Link>
          </motion.div>
          
          <p className="text-sm text-gray-600">
            <Link
              href="/contact"
              className="hover:text-cyan-600 transition-colors underline underline-offset-4"
            >
              Get in Touch →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
