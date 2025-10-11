"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import TypingAnimation from "@/components/TypingAnimation";
import Recommendations from "@/components/Recommendations";
import { site } from "@/lib/siteConfig";

export default function Home() {
  const typingTexts = [
    "Senior DevOps Engineer",
    "AWS Solutions Architect", 
    "Kubernetes Expert",
    "Infrastructure Automation Specialist"
  ];

  return (
    <div className="w-full">
      {/* Professional Hero Section */}
      <motion.section 
        className="py-20 sm:py-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Available for Consulting & Full-time Opportunities
            </motion.div>
            
            <h1 className="heading-primary mb-6">
              <TypingAnimation texts={typingTexts} />
            </h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {site.hero.subtitle}
            </motion.p>
            
            {/* Professional CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link 
                href="/projects"
                className="btn-primary"
              >
                View My Work
              </Link>
              <Link 
                href="/contact"
                className="btn-secondary"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Professional Stats Section */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="section-gradient">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-4">Proven Track Record</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Delivering enterprise-grade infrastructure solutions with measurable results
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  <AnimatedCounter end={15} duration={2} />
                  <span className="text-3xl">+</span>
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Years Experience
                </div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  <AnimatedCounter end={50} duration={2} />
                  <span className="text-3xl">+</span>
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Projects Delivered
                </div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  <AnimatedCounter end={99} duration={2} />
                  <span className="text-3xl">%</span>
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Uptime Achieved
                </div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  <AnimatedCounter end={24} duration={2} />
                  <span className="text-3xl">/7</span>
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Support Available
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Overview with Hover Effects */}
      <motion.section 
        className="py-12 sm:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-white heading-secondary">Core Technologies</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              className="professional-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Cloud & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "EKS", "Kubernetes", "Docker", "RDS"].map((tech, index) => (
                  <motion.span 
                    key={tech}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="professional-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Automation & IaC</h3>
              <div className="flex flex-wrap gap-2">
                {["Terraform", "CDK", "ArgoCD", "GitHub Actions", "Jenkins"].map((tech, index) => (
                  <motion.span 
                    key={tech}
                    className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="professional-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Monitoring & Security</h3>
              <div className="flex flex-wrap gap-2">
                {["Prometheus", "Grafana", "Datadog", "IAM", "OIDC"].map((tech, index) => (
                  <motion.span 
                    key={tech}
                    className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Recent Work with Staggered Animation */}
      <motion.section 
        className="py-12 sm:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-white heading-secondary">Recent Work</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div 
              className="professional-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">AVIV Group Replatforming</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Led complete migration from on-prem to AWS EKS with Terraform modules and AWS CDK. 
                Built automated CI/CD pipelines and achieved 99.9% uptime.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AWS", "EKS", "Terraform"].map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="professional-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Cybrid Multi-Account AWS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Architected secure multi-account AWS infrastructure with EKS (Bottlerocket), 
                GitOps (ArgoCD), and comprehensive observability stack.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AWS", "ArgoCD", "Bottlerocket"].map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium">
              View All Projects →
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* LinkedIn Recommendations */}
      <Recommendations />
    </div>
  );
}