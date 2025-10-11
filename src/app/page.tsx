
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import AnimatedCounter from "@/components/AnimatedCounter";
import TypingAnimation from "@/components/TypingAnimation";
import { site } from "@/lib/siteConfig";

export default function Home() {
  const typingTexts = [
    "Senior DevOps Engineer",
    "AWS Solutions Architect", 
    "Kubernetes Expert",
    "Infrastructure Automation Specialist"
  ];

  return (
    <Container>
      {/* Hero Section with Typing Animation */}
      <motion.section 
        className="py-8 sm:py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 heading-primary">
          <TypingAnimation texts={typingTexts} />
        </h1>
        <motion.p 
          className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {site.hero.subtitle}
        </motion.p>
        <motion.div 
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link className="btn-primary" href="/projects">
                    View Projects
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link className="btn-secondary" href="/about">
                    About
                  </Link>
                </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Stats with Animated Counters */}
      <motion.section 
        className="py-8 sm:py-12 section-gradient rounded-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
          <motion.div
            className="professional-card"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              <AnimatedCounter end={15} suffix="+" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </motion.div>
          <motion.div
            className="professional-card"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              <AnimatedCounter end={site.experience.companies.length} />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Companies</div>
          </motion.div>
          <motion.div
            className="professional-card"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
          </motion.div>
          <motion.div
            className="professional-card"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
              <AnimatedCounter end={99.9} suffix="%" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Overview with Hover Effects */}
      <motion.section 
        className="py-8 sm:py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white heading-secondary">Core Technologies</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
      </motion.section>

      {/* Recent Work with Staggered Animation */}
      <motion.section 
        className="py-8 sm:py-12 border-t border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">Recent Work</h2>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <motion.div 
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow"
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
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow"
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
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">
            View All Projects →
          </Link>
        </motion.div>
      </motion.section>
    </Container>
  );
}
