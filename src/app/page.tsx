"use client";

import Link from "next/link";
import Image from "next/image";
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

          {/* Navigation Tabs under Amr Fathy - Always Visible */}
          <div className="w-full mb-8 mt-8 relative z-20">
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 items-center w-full" role="navigation">
              <Link 
                href="/" 
                className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors px-4 py-2 rounded-full hover:bg-gray-100"
              >
                Home
              </Link>
              <Link 
                href="/designs" 
                className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors px-4 py-2 rounded-full hover:bg-gray-100"
              >
                Designs
              </Link>
              <Link 
                href="/blog" 
                className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors px-4 py-2 rounded-full hover:bg-gray-100"
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors px-4 py-2 rounded-full hover:bg-gray-100"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors px-4 py-2 rounded-full hover:bg-gray-100"
              >
                Contact
              </Link>
            </nav>
          </div>

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

      {/* Professional Certifications - Prominent Position */}
      <section className="py-24 md:py-32 w-full flex items-center justify-center bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Professional Certifications
            </h3>
            <p className="text-sm text-gray-600">
              Verified expertise in cloud infrastructure and automation
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* CKA Certification */}
            <a
              href="https://www.credly.com/users/amr-fathy/badges"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="relative w-40 h-40 flex items-center justify-center">
                <img
                  src="https://images.credly.com/size/680x680/images/8b8ed108-e77c-41ac-bdc1-9c600d3dd63d/Certified-Kubernetes-Administrator-Program.png"
                  alt="Certified Kubernetes Administrator (CKA)"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.credly.com/images/8b8ed108-e77c-41ac-bdc1-9c600d3dd63d/Certified-Kubernetes-Administrator-Program.png";
                  }}
                />
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-900">Certified Kubernetes</div>
                <div className="text-xs text-gray-600">Administrator</div>
              </div>
            </a>

            {/* Terraform Associate Certification */}
            <a
              href="https://www.credly.com/users/amr-fathy/badges"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="relative w-40 h-40 flex items-center justify-center">
                <img
                  src="https://images.credly.com/size/680x680/images/99289602-861e-4929-8273-773e63a2aa6d/HashiCorp-Certified-Terraform-Associate-Badge.png"
                  alt="HashiCorp Certified: Terraform Associate"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.credly.com/images/99289602-861e-4929-8273-773e63a2aa6d/HashiCorp-Certified-Terraform-Associate-Badge.png";
                  }}
                />
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-900">HashiCorp Certified</div>
                <div className="text-xs text-gray-600">Terraform Associate</div>
              </div>
            </a>
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
                  className="rounded-2xl bg-white shadow-sm p-8 lg:p-10 group cursor-pointer hover:shadow-md hover:bg-gray-50 transition-all duration-200"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ 
                    y: -4,
                    transition: { 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20,
                      duration: 0.3
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
                  <div className="flex flex-col">
                    {/* Project Header with Icon */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-xl text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        {impact && (
                          <div className="flex items-center gap-2">
                            {impact.icon}
                            <span className="text-sm text-gray-700 font-semibold">{impact.value}</span>
                            <span className="text-sm text-gray-500">• {impact.metric}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-700 text-base mb-6 flex-grow leading-relaxed">
                      {project.summary}
                    </p>

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
                    <div className="mt-auto">
                      <Link 
                        href={`/projects#${project.slug}`}
                        className="text-gray-700 hover:text-cyan-700 text-sm font-medium transition-colors inline-flex items-center gap-2"
                      >
                        View Full Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
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
