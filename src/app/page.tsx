"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950">
      {/* Hero Section */}
      <motion.section 
        className="py-20 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Building Scalable Infrastructure with DevOps Precision
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-slate-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Designing and automating resilient AWS and Kubernetes platforms using Terraform, GitOps, and Observability best practices.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link 
                href="/projects"
                className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                View Projects
              </Link>
              <Link 
                href="/about"
                className="px-8 py-3 border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                About
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Metrics Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl p-8 text-center transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-white mb-3">
                <AnimatedCounter end={15} duration={2} />
                <span className="text-4xl">+</span>
              </div>
              <div className="text-slate-300 font-medium text-lg">
                Years Experience
              </div>
            </motion.div>
            
            <motion.div 
              className="border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl p-8 text-center transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-white mb-3">
                <AnimatedCounter end={50} duration={2} />
                <span className="text-4xl">+</span>
              </div>
              <div className="text-slate-300 font-medium text-lg">
                Projects Delivered
              </div>
            </motion.div>
            
            <motion.div 
              className="border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl p-8 text-center transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-white mb-3">
                <AnimatedCounter end={99} duration={2} />
                <span className="text-4xl">%</span>
              </div>
              <div className="text-slate-300 font-medium text-lg">
                Uptime Achieved
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Technologies */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
            Core Technologies
          </h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cloud & Platforms */}
            <motion.div 
              className="border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm uppercase tracking-wide font-semibold text-cyan-400 mb-6">
                Cloud & Platforms
              </h3>
              <div className="flex flex-wrap gap-3">
                {["AWS", "EKS", "Kubernetes", "Docker", "RDS"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-white text-sm rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Automation & IaC */}
            <motion.div 
              className="border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm uppercase tracking-wide font-semibold text-cyan-400 mb-6">
                Automation & IaC
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Terraform", "CDK", "ArgoCD", "GitHub Actions", "Jenkins"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-white text-sm rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Monitoring & Security */}
            <motion.div 
              className="border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm uppercase tracking-wide font-semibold text-cyan-400 mb-6">
                Monitoring & Security
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Prometheus", "Grafana", "Datadog", "IAM", "OIDC"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-white text-sm rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Recent Work */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
            Recent Work
          </h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {/* AVIV Group */}
            <motion.div 
              className="border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-xl text-white mb-3">
                AVIV Group Replatforming
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Led complete migration from on-prem to AWS EKS with Terraform modules, achieving 99.9% uptime.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AWS", "EKS", "Terraform"].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 bg-white/5 border border-white/10 text-slate-300 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* InfraCore */}
            <motion.div 
              className="border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-xl text-white mb-3">
                InfraCore AWS Architecture
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Architected secure multi-account AWS infrastructure with EKS, GitOps, and comprehensive observability.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AWS", "ArgoCD", "Bottlerocket"].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 bg-white/5 border border-white/10 text-slate-300 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Highlighted Case Studies */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Highlighted Case Studies
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/projects" 
              className="inline-flex items-center px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View All Case Studies →
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
