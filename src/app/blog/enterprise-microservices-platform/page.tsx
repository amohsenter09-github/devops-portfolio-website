"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Code, Server, Shield, Database, Cloud, GitBranch, Monitor, Zap } from "lucide-react";
import { ArticleLayout, Section } from "@/components/Layout";

export default function EnterpriseMicroservicesPlatform() {
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
            Enterprise Microservices Platform
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
      
      {/* Executive Summary */}
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
              <Zap className="text-cyan-600" size={22} />
            </motion.div>
            <span className="font-mono lowercase">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                executive
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
                summary
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
          
          <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 max-w-3xl mx-auto">
            <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-6">
              This enterprise microservices platform project delivered <strong>$2M in annual cost savings</strong> and 
              <strong> 99.9% uptime</strong> for a Fortune 500 financial services client. The solution transformed their 
              legacy infrastructure into a modern, scalable platform serving <strong>50,000+ concurrent users</strong> 
              with zero-downtime deployments.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-1">$2M</div>
                <div className="text-xs text-gray-600">Annual Cost Savings</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-1">99.9%</div>
                <div className="text-xs text-gray-600">System Uptime</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-1">70%</div>
                <div className="text-xs text-gray-600">Faster Deployments</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Architecture Overview */}
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
              <Server className="text-cyan-600" size={22} />
            </motion.div>
            <span className="font-mono lowercase">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                architecture
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
                overview
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
            {/* Infrastructure Foundation */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <Server className="text-cyan-600" size={18} />
                Infrastructure Foundation
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Multi-environment AWS setup with EKS clusters, Aurora PostgreSQL, and ElastiCache Redis for high availability 
                and scalability across Production, Staging, and Sandbox environments.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
                {[
                  "Multi-environment AWS setup (Production, Staging, Sandbox)",
                  "EKS clusters with self-managed node groups",
                  "Aurora PostgreSQL with Multi-AZ deployment",
                  "ElastiCache Redis clusters for high availability",
                  "ALB and Route53 for load balancing and DNS",
                  "S3 buckets for data storage and backups"
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

            {/* Security & Compliance */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <Shield className="text-cyan-600" size={18} />
                Security & Compliance
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Enterprise-grade security implementation with AWS GuardDuty, WAF protection, External Secrets Operator, 
                and comprehensive IAM policies for compliance and threat detection.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
                {[
                  "AWS GuardDuty threat detection and monitoring",
                  "WAF protection and security groups",
                  "External Secrets Operator integration",
                  "Comprehensive IAM policies and roles",
                  "Network isolation and VPC configuration",
                  "Encryption at rest and in transit"
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

      {/* Microservices Architecture */}
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
              <Code className="text-cyan-600" size={22} />
            </motion.div>
            <span className="font-mono lowercase">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                microservices
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
                architecture
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
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <Server className="text-cyan-600" size={18} />
                Service Categories
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                12+ microservices organized into API Services, Internal Services, Integration Services, and Portal Services 
                with zero-downtime deployments and horizontal scaling capabilities.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
                {[
                  "API Services: Identity, Banking, Organization Management, Web Event Processing",
                  "Internal Services: Account Management, Key Management, File Storage, Identity Provider",
                  "Integration Services: Exchange Rate, Transfer Processing, Workflow Orchestration, Notifications",
                  "Portal Services: Organization Portal, Payments Portal, Ingress Controller",
                  "Zero-downtime deployments with rolling update strategy",
                  "Horizontal scaling with HPA based on CPU and memory metrics"
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

            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <Zap className="text-cyan-600" size={18} />
                Key Technical Achievements
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Advanced Kubernetes configurations and service mesh implementation for optimal performance and reliability 
                across the microservices platform.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
                {[
                  "Zero-Downtime Deployments: Rolling update strategy with maxUnavailable: 0",
                  "Horizontal Scaling: HPA configuration with CPU and memory-based scaling policies",
                  "Service Mesh: ClusterIP services with proper networking and service discovery",
                  "Configuration Management: Kustomize base/overlay pattern for environment-specific configs",
                  "Service Discovery: Kubernetes DNS for automatic service resolution",
                  "Health Checks: Liveness and readiness probes for reliable deployments"
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

      {/* GitOps Implementation */}
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
            {/* ArgoCD Deployment */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <GitBranch className="text-cyan-600" size={18} />
                ArgoCD Deployment & Management
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                ArgoCD deployed and managed entirely through Terraform, ensuring infrastructure consistency and enabling 
                automated GitOps workflows across all environments.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
                {[
                  "ACM certificates for secure HTTPS communication",
                  "Automated namespace creation and RBAC configuration",
                  "Image Updater for automated container image updates",
                  "External DNS integration for seamless service discovery",
                  "Application of Applications pattern for scalable management",
                  "Multi-environment synchronization with Kustomize overlays"
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

            {/* External Secrets */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <Database className="text-cyan-600" size={18} />
                External Secrets Integration
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Secure credential management through AWS Secrets Manager integration with External Secrets Operator, 
                eliminating hardcoded secrets and ensuring compliance.
              </p>
              <div className="bg-gray-50 rounded p-3 text-sm text-gray-700 font-mono text-center max-w-2xl mx-auto mb-4">
                AWS Secrets Manager → External Secrets Operator → Kubernetes Secrets → Pod Environment Variables
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
                {[
                  "AWS Secrets Manager for centralized secret storage",
                  "External Secrets Operator for Kubernetes integration",
                  "Automatic secret synchronization and rotation",
                  "Namespace-based secret isolation",
                  "Compliance with security best practices",
                  "Audit trail for secret access and changes"
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

      {/* Monitoring & Observability */}
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
              <Monitor className="text-cyan-600" size={22} />
            </motion.div>
            <span className="font-mono lowercase">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                monitoring
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
                observability
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
            {/* Prometheus & Grafana */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <Monitor className="text-cyan-600" size={18} />
                Prometheus & Grafana Stack
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Comprehensive monitoring solution with custom dashboards, OAuth integration, and automated alerting 
                for microservices performance and health tracking.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
                {[
                  "Custom dashboards for microservices monitoring",
                  "OAuth integration with AWS Cognito",
                  "PagerDuty integration for critical alerts",
                  "Slack notifications for engineering teams",
                  "ServiceMonitor CRDs for Kubernetes-native metrics",
                  "Recording rules for pre-computed aggregations"
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

            {/* AWS CloudWatch */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <Cloud className="text-cyan-600" size={18} />
                AWS CloudWatch Integration
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Centralized logging and metrics collection with custom CloudWatch dashboards, automated alerting, 
                and Datadog integration for enhanced observability.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
                {[
                  "Centralized logging and metrics collection",
                  "Custom CloudWatch dashboards",
                  "Automated alerting and incident response",
                  "Datadog integration for enhanced observability",
                  "Log Insights for advanced querying",
                  "CloudWatch Alarms for proactive monitoring"
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

      {/* Results & Impact */}
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
              <h3 className="text-base md:text-lg font-semibold mb-5 text-green-800">Operational Excellence</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-green-700 text-left">
                {[
                  "99.9% Uptime - Proactive monitoring and reliability",
                  "Zero Downtime Deployments - Rolling update strategy",
                  "80% MTTR Reduction - Faster incident resolution",
                  "95% Automation - Automated deployments reduced manual errors"
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
              <h3 className="text-base md:text-lg font-semibold mb-5 text-cyan-800">Business Impact</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-cyan-700 text-left">
                {[
                  "$2M Annual Cost Savings - Infrastructure optimization",
                  "50,000+ Concurrent Users - Scalable platform",
                  "70% Faster Deployments - GitOps automation",
                  "Improved Developer Experience - Simplified workflows"
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
