"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Code, GitBranch, Server, Shield, Zap } from "lucide-react";
import { ArticleLayout, Section } from "@/components/Layout";

export default function GitOpsArchitecturePost() {
  return (
    <ArticleLayout maxWidth="4xl" spacing="relaxed">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/blog" className="hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-900 font-medium" aria-current="page">
            Deploy Your Apps on K8s the GitOps Way
          </li>
        </ol>
      </nav>

      {/* Back to Blog Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded"
          aria-label="Back to blog"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </div>
      
      {/* Implementation Details */}
      <Section spacing="xl" withDivider animate>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-8 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <GitBranch className="text-cyan-600" size={22} />
            </motion.div>
            <span className="font-mono lowercase">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                gitops
              </motion.span>
              <motion.span
                className="text-cyan-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                _
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                implementation
              </motion.span>
              <motion.span
                className="text-cyan-600 ml-0.5"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                |
              </motion.span>
            </span>
          </motion.h2>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            {/* ArgoCD Configuration */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <GitBranch className="text-cyan-600" size={18} />
                ArgoCD Configuration
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Deployed ArgoCD via Helm chart with Application of Applications pattern, enabling automated 
                deployment synchronization across multiple Kubernetes clusters with Git-based configuration management.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
                {[
                  "Application of Applications pattern for scalable management",
                  "Multi-cluster management with centralized control",
                  "Automated sync policies for continuous deployment",
                  "RBAC and security controls for access management",
                  "Webhook integration for real-time updates",
                  "Health checks and automatic rollback capabilities"
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-cyan-600 mt-1 font-bold text-xs">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Image Updater Integration */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <Zap className="text-cyan-600" size={18} />
                Image Updater Integration
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Configured ArgoCD Image Updater to automatically detect and update container images from registries, 
                creating pull requests for image tag updates with configurable update strategies.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
                {[
                  "Registry polling configuration for automatic image detection",
                  "Update strategies (semver, latest, digest-based)",
                  "Automated PR creation for image tag updates",
                  "Rollback capabilities for failed deployments",
                  "Multi-registry support (ECR, Docker Hub, GCR)",
                  "Update policies and filters for controlled updates"
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-cyan-600 mt-1 font-bold text-xs">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Multi-Cluster Setup */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <Server className="text-cyan-600" size={18} />
                Multi-Cluster Setup
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Managed three Kubernetes clusters (Production, Staging, Development) from a single ArgoCD instance 
                using Kustomize overlays for environment-specific configurations.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
                {[
                  "Production cluster for live customer traffic",
                  "Staging cluster for pre-production testing",
                  "Development cluster for experimentation",
                  "Kustomize overlays for environment-specific configs",
                  "Centralized management from single ArgoCD instance",
                  "Consistent deployment patterns across environments"
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-cyan-600 mt-1 font-bold text-xs">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Security & Best Practices */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <Shield className="text-cyan-600" size={18} />
                Security & Best Practices
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Implemented comprehensive security controls including RBAC policies, container image scanning, 
                and vulnerability assessments to ensure secure GitOps workflows.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
                {[
                  "RBAC policies for ArgoCD access control",
                  "Service account permissions with least privilege",
                  "Cluster role bindings for namespace isolation",
                  "Container image scanning and vulnerability assessments",
                  "Signed image verification for trusted sources",
                  "Registry access controls and authentication"
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-cyan-600 mt-1 font-bold text-xs">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Automated Deployment Pipeline */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <Code className="text-cyan-600" size={18} />
                Automated Deployment Pipeline
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Established complete GitOps workflow from code push to production deployment with automated 
                image updates and synchronization across clusters.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
                {[
                  "Code pushed to Git repository triggers CI/CD pipeline",
                  "CI/CD builds and pushes Docker images to registry",
                  "Image Updater detects new images and creates PR",
                  "ArgoCD syncs changes to target Kubernetes clusters",
                  "Health checks and automatic rollback on failure",
                  "Zero-downtime deployments with rolling updates"
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-cyan-600 mt-1 font-bold text-xs">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Results & Metrics */}
      <Section spacing="xl" animate>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            Results Achieved
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-base md:text-lg font-semibold mb-5 text-green-800">Deployment Improvements</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-green-700 text-left">
                {[
                  "100% Automation - Zero manual intervention",
                  "90% Faster Deployments - GitOps efficiency",
                  "Zero Downtime - Rolling updates with health checks",
                  "Automatic Image Updates - Image Updater integration"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-base md:text-lg font-semibold mb-5 text-cyan-800">Operational Excellence</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-cyan-700 text-left">
                {[
                  "Consistent Environments - Kustomize overlays",
                  "Multi-Cluster Management - Single ArgoCD instance",
                  "Audit Trail - Git-based deployment history",
                  "Easy Rollbacks - Git revert capabilities"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Footer - Professional */}
      <footer className="text-center text-gray-500 text-sm mt-20 md:mt-24 border-t border-gray-200 pt-8 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          © 2025 Amr Fathy — All rights reserved.
        </div>
      </footer>

    </ArticleLayout>
  );
}
