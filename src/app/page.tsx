"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Clock, Shield, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import Recommendations from "@/components/Recommendations";
import Marquee from "@/components/Marquee";
import { projects } from "@/data/projects";

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

  // Project-specific achievements
  const projectAchievements: Record<string, Array<{ text: string; icon: React.ReactNode }>> = {
    "aviv-group-replatforming": [
      { text: "Zero-downtime migration from on-prem to cloud", icon: <Shield className="w-4 h-4 text-gray-600" /> },
      { text: "99.9% uptime achieved post-migration", icon: <CheckCircle2 className="w-4 h-4 text-gray-600" /> },
      { text: "Full EU GDPR compliance maintained", icon: <Shield className="w-4 h-4 text-gray-600" /> }
    ],
    "infracore-multi-account-aws": [
      { text: "Secure multi-account isolation architecture", icon: <Shield className="w-4 h-4 text-gray-600" /> },
      { text: "99.9% platform reliability", icon: <CheckCircle2 className="w-4 h-4 text-gray-600" /> },
      { text: "60% infrastructure cost optimization", icon: <DollarSign className="w-4 h-4 text-gray-600" /> }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-x-hidden" style={{ maxWidth: '100vw' }}>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 text-center w-full flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
            className="text-xl sm:text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            Senior DevOps & Cloud Platform Engineer
          </motion.h2>

          {/* Quantified Outcomes */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-10 mt-16 mb-12"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <DollarSign className="w-5 h-5 text-gray-600" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-gray-900">$2M+</div>
                <div className="text-xs text-gray-600">saved annually</div>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <Shield className="w-5 h-5 text-gray-600" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-gray-900">99.9%</div>
                <div className="text-xs text-gray-600">uptime</div>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <Zap className="w-5 h-5 text-gray-600" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-gray-900">80%</div>
                <div className="text-xs text-gray-600">faster deployments</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero CTA */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-700 px-8 py-4 text-base font-semibold text-white hover:bg-cyan-600 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-32 md:py-40 w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="mt-12 flex flex-wrap items-start justify-center gap-12 md:gap-16">
            <motion.div 
              className="text-center px-4 group"
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
                <TrendingUp className="w-5 h-5 text-gray-600" />
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
                <Shield className="w-5 h-5 text-gray-600" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900">99.9%</div>
              <div className="mt-2 text-sm text-gray-600">Platform Reliability</div>
              <div className="mt-1 text-xs text-gray-500">Zero-downtime migrations</div>
            </motion.div>
          </div>

          {/* Trusted by Section - After Metrics */}
          <div className="mt-32">
            <Marquee />
          </div>
        </div>
      </section>

      {/* Credentials & Trust Signals */}
      <section className="py-24 md:py-28 w-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">AWS Certified</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Kubernetes Expert</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Security Best Practices</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">GitOps Specialist</span>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="py-32 md:py-40 w-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 text-base">$300K - $500K project range • Enterprise scale</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mx-auto">
            {featuredProjects.slice(0, 2).map((project, index) => {
              const impact = projectImpacts[project.slug];
              return (
                <motion.div 
                  key={project.slug}
                  className="relative rounded-2xl bg-white shadow-sm p-8 lg:p-10 group cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ 
                    y: -6,
                    scale: 1.02,
                    transition: { 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20,
                      duration: 0.4
                    }
                  }}
                  transition={{ 
                    delay: index * 0.15, 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    duration: 0.5
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                >
                  {/* Animated glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, transparent 60%), linear-gradient(225deg, rgba(147, 51, 234, 0.08) 0%, transparent 50%)",
                      filter: "blur(20px)",
                    }}
                    animate={{
                      opacity: [0, 0.6, 0.4],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  {/* Border glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      border: "2px solid transparent",
                      background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(147, 51, 234, 0.4), rgba(147, 51, 234, 0.2)) border-box",
                    }}
                  />
                  <div className="flex flex-col relative z-10">
                    {/* Project Header with Icon */}
                    <motion.div 
                      className="flex items-start gap-4 mb-6"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-50 transition-colors"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.3 }
                        }}
                      >
                        <Zap className="w-6 h-6 text-gray-600 group-hover:text-purple-600 transition-colors" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.h3 
                          className="font-semibold text-xl text-gray-900 mb-2 group-hover:text-purple-700 transition-colors"
                          initial={{ opacity: 0, y: 5 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.15 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          {project.title}
                        </motion.h3>
                        {impact && (
                          <motion.div 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.15 + 0.4 }}
                            viewport={{ once: true }}
                          >
                            {impact.icon}
                            <span className="text-sm text-gray-700 font-semibold">{impact.value}</span>
                            <span className="text-sm text-gray-500">• {impact.metric}</span>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>

                    <motion.p 
                      className="text-gray-700 text-base mb-6 flex-grow leading-relaxed"
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {project.summary}
                    </motion.p>

                    {/* Key Achievements - Project Specific */}
                    {projectAchievements[project.slug] && (
                      <div className="mb-6 space-y-2.5">
                        {projectAchievements[project.slug].map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                            <div className="flex-shrink-0">
                              {achievement.icon}
                            </div>
                            <span>{achievement.text}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.div 
                      className="mt-auto"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Link 
                        href={`/projects#${project.slug}`}
                        className="text-gray-700 group-hover:text-purple-600 text-sm font-medium transition-colors inline-flex items-center gap-2"
                      >
                        <motion.span
                          whileHover={{ x: 2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          Learn more
                        </motion.span>
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 rounded-full bg-cyan-700 px-8 py-3 text-sm font-medium text-white hover:bg-cyan-600 transition-colors shadow-md hover:shadow-lg"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Recommendations */}
      <section className="py-32 md:py-40 w-full flex items-center justify-center">
        <Recommendations />
      </section>
    </div>
  );
}
