"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Clock, Shield, Zap, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import Recommendations from "@/components/Recommendations";
import Marquee from "@/components/Marquee";
import { projects } from "@/data/projects";
import { site } from "@/lib/siteConfig";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  // Project impact data
  const projectImpacts: Record<string, { value: string; metric: string; icon: React.ReactNode }> = {
    "aviv-group-replatforming": {
      value: "$500K",
      metric: "Project Value",
      icon: <DollarSign className="w-4 h-4" />
    },
    "infracore-multi-account-aws": {
      value: "$400K",
      metric: "Project Value",
      icon: <DollarSign className="w-4 h-4" />
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-x-hidden" style={{ maxWidth: '100vw' }}>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 text-center w-full flex flex-col items-center justify-center border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-gray-900 mb-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              Amr
            </motion.span>
            {" "}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
              Fathy
            </motion.span>
          </motion.h1>
          <motion.h2 
            className="text-xl sm:text-2xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            Senior DevOps & Cloud Platform Engineer
          </motion.h2>
          
          <motion.p 
            className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 mb-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          >
            Building intelligent, automated infrastructure that scales with precision.
          </motion.p>

          {/* Quantified Outcomes */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mt-8 text-sm"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 text-gray-700">
              <DollarSign className="w-4 h-4 text-cyan-600" />
              <span><strong>$2M+</strong> saved annually</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Shield className="w-4 h-4 text-cyan-600" />
              <span><strong>99.9%</strong> uptime</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Zap className="w-4 h-4 text-cyan-600" />
              <span><strong>80%</strong> faster deployments</span>
            </div>
          </motion.div>

          {/* Hero CTA */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
          >
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 text-sm font-medium text-white hover:bg-cyan-500 transition-colors"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 md:py-24 w-full flex items-center justify-center border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
          <div className="mt-10 flex flex-wrap items-start justify-center gap-8">
            <motion.div 
              className="text-center px-4 group"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-cyan-600" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900">
                <AnimatedCounter end={15} duration={2} />+
              </div>
              <div className="mt-2 text-sm text-gray-600">Years Experience</div>
              <div className="mt-1 text-xs text-gray-500">Enterprise clients</div>
            </motion.div>
            
            <motion.div 
              className="text-center px-4 group"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-cyan-600" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900">Enterprise</div>
              <div className="mt-2 text-sm text-gray-600">Cloud Delivery</div>
              <div className="mt-1 text-xs text-gray-500">Fortune 500 experience</div>
            </motion.div>
            
            <motion.div 
              className="text-center px-4 group"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-cyan-600" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900">99.9%</div>
              <div className="mt-2 text-sm text-gray-600">Platform Reliability</div>
              <div className="mt-1 text-xs text-gray-500">Zero-downtime migrations</div>
            </motion.div>
          </div>

          {/* Trusted by Section - After Metrics */}
          <div className="mt-24">
            <Marquee />
          </div>
        </div>
      </section>

      {/* Credentials & Trust Signals */}
      <section className="py-16 w-full flex items-center justify-center border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <Award className="w-4 h-4 text-cyan-600" />
              <span>AWS Certified</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-cyan-600" />
              <span>Kubernetes Expert</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Shield className="w-4 h-4 text-cyan-600" />
              <span>Security Best Practices</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Zap className="w-4 h-4 text-cyan-600" />
              <span>GitOps Specialist</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="py-20 md:py-24 w-full flex items-center justify-center border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              Featured Projects
            </h2>
            <p className="text-gray-600 text-sm">$300K - $500K project range • Enterprise scale</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto mt-8">
            {featuredProjects.slice(0, 2).map((project, index) => {
              const impact = projectImpacts[project.slug];
              return (
                <motion.div 
                  key={project.slug}
                  className="rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:border-cyan-200 transition-all p-6 group"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.1, duration: 0.3, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <div className="md:min-h-[280px] flex flex-col">
                    {/* Project Header with Icon */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-cyan-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-cyan-600 transition-colors">
                            {project.title}
                          </h3>
                          {impact && (
                            <div className="flex items-center gap-1 mt-1">
                              {impact.icon}
                              <span className="text-xs text-cyan-600 font-medium">{impact.value}</span>
                              <span className="text-xs text-gray-500">• {impact.metric}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">2024</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-4 space-y-1">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-3 h-3 text-green-600" />
                        <span>99.9% uptime achieved</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <TrendingUp className="w-3 h-3 text-blue-600" />
                        <span>70% faster deployments</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <DollarSign className="w-3 h-3 text-green-600" />
                        <span>60% cost reduction</span>
                      </div>
                    </div>

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
                      className="mt-auto text-cyan-600 hover:text-cyan-500 text-sm font-medium transition-colors inline-flex items-center gap-1 group-hover:gap-2"
                    >
                      View Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-8 py-3 text-sm font-medium text-white hover:bg-cyan-500 transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Recommendations */}
      <section className="py-20 md:py-24 w-full flex items-center justify-center border-b border-gray-200">
        <Recommendations />
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 md:py-24 w-full flex items-center justify-center bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can scale your platform with precision engineering. 
              Past projects range from $300K to $500K with measurable ROI.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-8 py-3 text-sm font-medium text-white hover:bg-cyan-500 transition-colors shadow-sm hover:shadow-md"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/projects" 
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-6">
              <Link
                href={site.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-600 transition-colors underline underline-offset-4"
              >
                Connect on LinkedIn
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
