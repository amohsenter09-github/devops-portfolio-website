"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import Recommendations from "@/components/Recommendations";
import Marquee from "@/components/Marquee";
import { site } from "@/lib/siteConfig";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden" style={{ maxWidth: '100vw' }}>
      {/* Subtle Radial Gradient for Depth */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        background: 'radial-gradient(circle at 30% 20%, rgba(6,182,212,0.05), transparent 50%), radial-gradient(circle at 70% 80%, rgba(6,182,212,0.03), transparent 50%)'
      }} />

      {/* Hero Section */}
      <section className="relative z-10 bg-slate-950 text-white py-24 md:py-32 w-full flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center flex flex-col items-center">
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-slate-100 mb-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Amr Fathy
            </motion.h1>
            <motion.h2 
              className="text-xl sm:text-2xl text-slate-400 mb-8"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            >
              Senior DevOps & Cloud Platform Engineer
            </motion.h2>
            
            <motion.p 
              className="max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              I design, build, and scale reliable infrastructure that powers products millions use daily — combining automation, observability, and precision engineering.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <Link 
                href="/projects"
                className="rounded-full bg-cyan-500 px-8 py-3 text-sm font-medium text-white hover:bg-cyan-400 transition-colors"
              >
                View Projects
              </Link>
              <Link 
                href="/about"
                className="rounded-full bg-white/[0.03] px-8 py-3 text-sm font-medium text-slate-300 hover:bg-white/[0.05] transition-colors"
              >
                About
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative z-10 bg-slate-900 py-16 md:py-20 border-t border-white/10 w-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex flex-wrap justify-center gap-12 sm:gap-16">
            <motion.div 
              className="text-center px-6"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-cyan-300">
                <AnimatedCounter end={15} duration={2} />+
              </h3>
              <p className="mt-2 text-sm text-slate-400">Years Experience</p>
            </motion.div>
            
            <motion.div 
              className="text-center px-6"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-cyan-300">Enterprise</h3>
              <p className="mt-2 text-sm text-slate-400">Cloud Delivery</p>
            </motion.div>
            
            <motion.div 
              className="text-center px-6"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-cyan-300">99.9%</h3>
              <p className="mt-2 text-sm text-slate-400">Platform Reliability</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="relative z-10 bg-slate-900 py-12 border-t border-white/10 w-full flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <Marquee />
        </div>
      </section>

      {/* Core Competencies */}
      <section className="relative z-10 bg-slate-950 py-16 md:py-20 border-t border-white/10 w-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-slate-100 text-center mb-8"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Core Competencies
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-3 text-sm text-slate-300"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {["AWS", "EKS", "Kubernetes", "Docker", "RDS", "Terraform", "CDK", "ArgoCD", "GitHub Actions", "Jenkins", "Prometheus", "Grafana", "Datadog", "IAM", "OIDC"].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="relative z-10 bg-slate-900 py-16 md:py-20 border-t border-white/10 w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 text-center mb-8">
            Recent Work
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">
            {/* AVIV Group */}
            <motion.div 
              className="card p-6 md:min-h-[220px] flex flex-col"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="font-semibold text-lg text-slate-100 mb-2">
                AVIV Group Replatforming
              </h3>
              <p className="text-slate-400 text-sm mb-4 flex-grow">
                Led complete migration from on-prem to AWS EKS with Terraform modules, achieving 99.9% uptime.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["AWS", "EKS", "Terraform"].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 bg-white/[0.04] text-slate-300 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link 
                href="/projects"
                className="text-cyan-300 hover:text-cyan-200 text-sm font-medium transition-colors inline-flex items-center gap-1"
              >
                View Full Case Study →
              </Link>
            </motion.div>

            {/* InfraCore */}
            <motion.div 
              className="card p-6 md:min-h-[220px] flex flex-col"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="font-semibold text-lg text-slate-100 mb-2">
                InfraCore AWS Architecture
              </h3>
              <p className="text-slate-400 text-sm mb-4 flex-grow">
                Architected secure multi-account AWS infrastructure with EKS, GitOps, and comprehensive observability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["AWS", "ArgoCD", "Bottlerocket"].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 bg-white/[0.04] text-slate-300 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link 
                href="/projects"
                className="text-cyan-300 hover:text-cyan-200 text-sm font-medium transition-colors inline-flex items-center gap-1"
              >
                View Full Case Study →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Recommendations */}
      <section className="relative z-10 bg-slate-950 py-16 md:py-20 border-t border-white/10 w-full flex items-center justify-center">
        <Recommendations />
      </section>

      {/* Highlighted Case Studies */}
      <section className="relative z-10 bg-slate-900 py-16 md:py-20 border-t border-white/10 w-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-8">
            Highlighted Case Studies
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link 
              href="/projects" 
              className="inline-flex items-center rounded-full bg-cyan-500 px-8 py-3 text-sm font-medium text-white hover:bg-cyan-400 transition-colors mb-6"
            >
              View All Case Studies →
            </Link>
          </motion.div>
          
          {/* Subtle LinkedIn Link */}
          <p className="text-sm text-slate-400">
            <a
              href={site.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors underline underline-offset-4"
            >
              Read recommendations on LinkedIn →
            </a>
          </p>
        </div>
      </section>

    </div>
  );
}
